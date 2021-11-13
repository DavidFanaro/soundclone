import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import passport from 'passport';
import IndexController from './Controller/IndexController';
import UserController from './Controller/UserController';
const app = express();
const PORT = (process.env.PORT) || 3000;

// Server Entry Point
const main = async () => {
	// Server middleware
	app.use(morgan('dev'));
	app.use(session({
		secret: process.env.SES_SERCET || 'sercet',
		resave: true,
		saveUninitialized: true,
		cookie: {
			secure: true
		}
	}));
	app.use(express.urlencoded({ extended: true}));
	app.use(express.json());
	app.use(passport.initialize());
	app.use(passport.session());
	app.use('/', IndexController);
	app.use('/api/', UserController);

	app.listen(PORT, () => console.log(`Server start on localhost:${PORT}`));
};

main();
