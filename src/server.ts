import App from './app'
import baseController from './controllers/base'
import userController from './controllers/user'

const app = new App(
	[
		new baseController(),
		new userController()
	],
	3000,
);

app.listen()