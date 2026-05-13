export const globalErrorStatuses = [
  { status: 401, type: 'unauthorized', meaning: 'Authentication is required or invalid.' },
  { status: 403, type: 'forbidden', meaning: 'Authenticated user is not allowed to perform this action.' },
  { status: 404, type: 'not_found', meaning: 'Requested resource was not found.' },
  { status: 409, type: 'conflict', meaning: 'Request conflicts with current resource state.' },
  { status: 422, type: 'validation', meaning: 'Request validation failed.' },
  { status: 500, type: 'unexpected', meaning: 'Unexpected server error.' },
  { status: 502, type: 'external_service', meaning: 'External dependency or upstream service failed.' }
] as const;

export function buildGlobalErrorsDescription() {
  const rows = globalErrorStatuses
    .map(
      ({ status, type, meaning }) => `| ${status} | ${type} | ${meaning} |`
    )
    .join('\n');

  return [
    '## Global Error Responses',
    '',
    'Any route may return one of the following global error statuses.',
    '',
    '| HTTP Status | Error Type | Meaning |',
    '| --- | --- | --- |',
    rows,
    '',
    'All error responses use this shape:',
    '',
    '```json',
    '{',
    '  "data": null,',
    '  "error": {',
    '    "code": "SOME_ERROR_CODE",',
    '    "message": "Human readable message",',
    '    "fields": {',
    '      "fieldName": "validation detail"',
    '    },',
    '    "requestId": "optional-request-id"',
    '  }',
    '}',
    '```'
  ].join('\n');
}
