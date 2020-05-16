import { app } from "./apps/application.ts";

const PORT: number = 8080;

app.listen({ port: PORT });
console.log(`server running on port: ${PORT}`);
