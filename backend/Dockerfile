FROM denoland/deno:alpine

WORKDIR /app

COPY deno.json deno.lock ./
COPY src ./src
COPY drizzle.config.ts ./drizzle.config.ts
COPY scripts ./scripts

RUN deno cache src/main.ts

EXPOSE 8000

CMD ["deno", "task", "start"]
