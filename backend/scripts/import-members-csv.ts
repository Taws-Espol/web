import { ClubPosition } from '@members/domain/club-position.ts';
import { Department } from '@members/domain/department.ts';

type MemberCreatePayload = {
  firstName: string;
  lastName: string;
  birthDate: string;
  phoneNumber: string;
  enrollmentNumber: string;
  address: string;
  entryPeriod: string;
  faculty: string;
  degree: string;
  clubPosition: ClubPosition;
  email: string;
  githubUsername: string;
  linkedinUrl: string;
  department: Department;
};

const CSV_HEADERS = {
  timestamp: 'Marca temporal',
  firstName: 'Nombres',
  lastName: 'Apellidos',
  email: 'Correo Electrónico',
  birthDate: 'Fecha de nacimiento',
  phone: 'Número Celular',
  enrollment: 'Matrícula',
  address: 'Sector domiciliario',
  entryPeriod: 'Periodo de ingreso al club',
  faculty: 'Facultad',
  degree: 'Carrera',
  profile: 'Perfil de Desarrollo',
  position: 'position',
  github: 'Usuario de Github'
} as const;

function parseArgs(args: string[]) {
  const out: Record<string, string> = {};
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (!arg.startsWith('--')) continue;
    const key = arg.slice(2);
    const value = args[i + 1];
    if (!value || value.startsWith('--')) {
      throw new Error(`Missing value for --${key}`);
    }
    out[key] = value;
    i++;
  }
  return out;
}

function parseCsvLine(line: string): string[] {
  const values: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === ',' && !inQuotes) {
      values.push(current.trim());
      current = '';
      continue;
    }

    current += char;
  }

  values.push(current.trim());
  return values;
}

function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 10 && digits.startsWith('0')) return digits;
  if (digits.length === 9) return `0${digits}`;
  return phone;
}

function normalizeBirthDate(input: string): string {
  const raw = input.trim();
  const parts = raw.split('/');
  if (parts.length !== 3) {
    throw new Error(`Unsupported birth date format: ${input}`);
  }
  const [day, month, year] = parts;
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
}

function normalizeEntryPeriod(input: string): string {
  const value = input.trim();
  const direct = value.match(/^(\d{4})-(I|II)$/i);
  if (direct) return `${direct[1]}-${direct[2].toUpperCase()}`;

  const single = value.match(/^(\d{4})-(\d)$/);
  if (single) return `${single[1]}-${single[2] === '1' ? 'I' : 'II'}`;

  throw new Error(`Unsupported entry period format: ${input}`);
}

function mapClubPosition(input: string): ClubPosition {
  const value = input.toLowerCase();
  if (value.includes('president') || value.includes('presidente')) {
    return ClubPosition.President;
  }
  if (value.includes('vice')) return ClubPosition.VicePresident;
  if (value.includes('alternate') || value.includes('alterno')) {
    return ClubPosition.AlternateBoard;
  }
  return ClubPosition.Member;
}

function mapDepartment(input: string): Department {
  const value = input.toLowerCase();
  if (value.includes('research') || value.includes('investig')) {
    return Department.TawsResearchTrack;
  }
  if (value.includes('incubator') || value.includes('incubadora')) {
    return Department.TawsIncubator;
  }
  if (
    value.includes('social') || value.includes('contenido') ||
    value.includes('artes')
  ) {
    return Department.SocialMedia;
  }
  return Department.TawsLabs;
}

function toPayload(row: Record<string, string>): MemberCreatePayload {
  return {
    firstName: row[CSV_HEADERS.firstName],
    lastName: row[CSV_HEADERS.lastName],
    birthDate: normalizeBirthDate(row[CSV_HEADERS.birthDate]),
    phoneNumber: normalizePhone(row[CSV_HEADERS.phone]),
    enrollmentNumber: row[CSV_HEADERS.enrollment],
    address: row[CSV_HEADERS.address],
    entryPeriod: normalizeEntryPeriod(row[CSV_HEADERS.entryPeriod]),
    faculty: row[CSV_HEADERS.faculty],
    degree: row[CSV_HEADERS.degree],
    clubPosition: mapClubPosition(row[CSV_HEADERS.position]),
    email: row[CSV_HEADERS.email].toLowerCase(),
    githubUsername: row[CSV_HEADERS.github],
    linkedinUrl: 'https://linkedin.com/in/random',
    department: mapDepartment(row[CSV_HEADERS.profile])
  };
}

async function main() {
  const args = parseArgs(Deno.args);
  const file = args.file;
  const apiBaseUrl = args.api;

  if (!file || !apiBaseUrl) {
    console.error(
      'Usage: deno run -P=development scripts/import-members-csv.ts --file <path.csv> --api <http://localhost:8000>'
    );
    Deno.exit(1);
  }

  const content = await Deno.readTextFile(file);
  const lines = content.split(/\r?\n/).filter((line) => line.trim().length > 0);

  if (lines.length < 2) {
    throw new Error('CSV must include header and at least one data row');
  }

  const headers = parseCsvLine(lines[0]);
  const rows = lines.slice(1).map(parseCsvLine);

  let created = 0;
  let failed = 0;

  for (let i = 0; i < rows.length; i++) {
    const lineNo = i + 2;
    const values = rows[i];
    const row: Record<string, string> = {};

    for (let c = 0; c < headers.length; c++) {
      row[headers[c]] = values[c] ?? '';
    }

    try {
      const payload = toPayload(row);
      console.log(apiBaseUrl + "/members")
      const res = await fetch(`${apiBaseUrl}/members`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const body = await res.text();
        throw new Error(`HTTP ${res.status} ${body}`);
      }

      created++;
      console.log(
        `[OK] row ${lineNo}: ${payload.firstName} ${payload.lastName}`
      );
    } catch (error) {
      failed++;
      console.error(
        `[ERR] row ${lineNo}:`,
        error instanceof Error ? error.message : String(error)
      );
    }
  }

  console.log(`Finished. created=${created} failed=${failed}`);
  if (failed > 0) Deno.exit(1);
}

if (import.meta.main) {
  await main();
}
