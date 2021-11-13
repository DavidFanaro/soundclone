import db from '../db';

const CreateUser = (username:string ,email: string, password:string) => {
	db.user.create({
		data:{
			username,
			email,
		}
	});
};