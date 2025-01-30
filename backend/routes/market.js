import express from 'express';
import { getMarketUpdates } from '../controllers/marketController.js';

const router = express.Router();

router.get('/', getMarketUpdates);

export default router;
