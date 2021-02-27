import express from 'express'
import * as bodyParser from 'body-parser'

class App {
	public app: express.Application
	public port: number

	constructor(controllers: any, port: number) {
		this.app = express()
		this.port = port

		this.initializeMiddlewares()
		this.initializeControllers(controllers)
	}

	/** App middlewares fn */
	private loggerMiddleware(request: express.Request, response: express.Response, next: any) {
		// console.log(`${request.method} ${request.path}`)
		next()
	}

	private now(date:Date=new Date) {
		// console.log(date.toISOString())
		return date.toISOString()
	}

	private initializeMiddlewares() {
		this.app.use(bodyParser.json())
		this.app.use(this.loggerMiddleware)
		this.app.use(function (err: any, req: any, res: any, next: any) {
			console.error(err.stack)
			res.status(500).send('Something broke!')
		})
	}

	private initializeControllers(controllers: any) {
		controllers.forEach((controller: any) => {
			this.app.use('/', controller.router)
		})
	}

	public listen() {
		this.app.listen(this.port, () => {
			console.log(`App listening on the port: ${this.port} at ${this.now()}`)
		})
	}
}

export default App