import Strategy from '../models/Strategy.js';

export const getStrategies = async (req, res) => {
  try {
    const strategies = await Strategy.find();
    res.json(strategies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
