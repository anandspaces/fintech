import express from 'express';
import { getStrategies } from '../controllers/strategyController.js';

const router = express.Router();

router.get('/', getStrategies);

export default router;
