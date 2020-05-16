import { oak } from "../deps.ts";
import { router } from '../routes/routing.ts'

const app: oak.Application = new oak.Application();

app.use(router.routes())

export { app }
