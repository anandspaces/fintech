import mongoose from 'mongoose';

const MarketUpdateSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.model('MarketUpdate', MarketUpdateSchema);
