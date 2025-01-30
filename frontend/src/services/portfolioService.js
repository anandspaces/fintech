export const fetchPortfolio = async () => {
  const response = await fetch('http://localhost:5000/api/portfolio');
  return response.json();
};
