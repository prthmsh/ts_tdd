import * as express from 'express';

class userController {
	public path = '/user';
	public router = express.Router();

	private posts: any = [
		{
			name: 'Marcin',
			address: 'Dolor sit amet',
			age: 15,
		},
		{
			name: 'John',
			address: 'Dolor sit amet',
			age: 16,
		},
		{
			name: 'Sam',
			address: 'Dolor sit amet',
			age: 18,
		}
	];

	constructor() {
		this.intializeRoutes();
	}

	public intializeRoutes() {
		this.router.get(this.path, this.getAllUsers);
		this.router.post(this.path, this.createUser);
	}

	getAllUsers = (request: express.Request, response: express.Response) => {
		return response.send(this.posts);
	}

	createUser = (request: express.Request, response: express.Response) => {
		const post:any = request.body;
		this.posts.push(post);
		return response.send(post);
	}
}

export default userController;