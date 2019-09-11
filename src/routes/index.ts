import express from 'express';
const router = express.Router();
router.get('/', (req, res) => {
    res.send('Spin App Backend is running...');
});

export default router;