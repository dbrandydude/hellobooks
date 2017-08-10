import express from 'express';

const router = express.Router();

/* GET main endpoint. */
router.get('/', (req, res, next) => {
    res.send({ message: 'Welcome Buddy!' });
});

export default router;
