import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
	res.send({
		Msg: 'Hello world',
	});
});

export default router;
