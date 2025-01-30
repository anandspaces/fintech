import React, { createContext, useState, useEffect } from 'react';
import { fetchPortfolio } from '../services/portfolioService';

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchPortfolio();
      setPortfolio(data);
    };
    getData();
  }, []);

  return (
    <PortfolioContext.Provider value={{ portfolio }}>
      {children}
    </PortfolioContext.Provider>
  );
};
