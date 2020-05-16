import { oak } from "./deps.ts";

const app = new oak.Application();

app.use((ctx) => {
  ctx.response.body = "Hello World";
});

app.listen({ port: 8080 });
