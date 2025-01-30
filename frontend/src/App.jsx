import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Portfolio from './pages/Portfolio';
import Strategies from './pages/Strategies';
import MarketUpdates from './pages/MarketUpdates';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/strategies" element={<Strategies />} />
            <Route path="/market-updates" element={<MarketUpdates />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
