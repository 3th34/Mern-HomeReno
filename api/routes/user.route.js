import express from 'express';
import { highwaytest } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/test', highwaytest);

export default router;  