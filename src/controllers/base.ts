import * as express from 'express';

class baseController {
	public path = '/';
	public router = express.Router();

	constructor() {
		this.intializeRoutes();
	}

	public intializeRoutes() {
		this.router.get(this.path, this.base);
	}

	base = (request: express.Request, response: express.Response) => {
		response.send(`Hi, I am alive. It's ${new Date().toISOString()} UTC`);
	}
}

export default baseController;