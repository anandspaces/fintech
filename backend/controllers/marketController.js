import MarketUpdate from '../models/MarketUpdate.js';

export const getMarketUpdates = async (req, res) => {
  try {
    const updates = await MarketUpdate.find();
    res.json(updates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
