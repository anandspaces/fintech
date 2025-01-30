import mongoose from 'mongoose';

const StrategySchema = new mongoose.Schema({
  name: { type: String, required: true },
  ROI: { type: Number, required: true },
  CAGR: { type: Number, required: true },
  drawdown: { type: Number, required: true },
}, { timestamps: true });

export default mongoose.model('Strategy', StrategySchema);
