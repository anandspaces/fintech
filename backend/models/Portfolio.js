import mongoose from 'mongoose';

const PortfolioSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  assets: [
    {
      assetName: String,
      quantity: Number,
      value: Number,
      allocation: Number,
    },
  ],
  totalValue: { type: Number, required: true },
}, { timestamps: true });

export default mongoose.model('Portfolio', PortfolioSchema);
