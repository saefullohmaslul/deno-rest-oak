import { oak } from '../deps.ts'

const router: oak.Router = new oak.Router()

router.get('/', ({ response }: oak.RouterContext) => {
  response.body = "Hello World"
})

export { router }