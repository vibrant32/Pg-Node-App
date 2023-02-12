import express from 'express';

const router = express.Router();

router.get('/api', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'Welcome to Api of Postgres + Nodejs + Azure',
        version: '1.0.0'
    });
});

// module.exports = router;
export default router;