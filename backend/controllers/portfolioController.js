import Portfolio from '../models/Portfolio.js';

export const getPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.find();
    res.json(portfolio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
