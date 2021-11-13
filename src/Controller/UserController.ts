import express from 'express';

const router = express.Router();

router.get('/signup', (req, res) => {
	res.send({
		Msg: 'Sign up route',
	});
});

export default router;
