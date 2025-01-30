import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">Portfolio Dashboard</h1>
      <div>
        <Link className="mx-2" to="/">Dashboard</Link>
        <Link className="mx-2" to="/portfolio">Portfolio</Link>
        <Link className="mx-2" to="/strategies">Strategies</Link>
        <Link className="mx-2" to="/market-updates">Market Updates</Link>
      </div>
    </nav>
  );
};

export default Navbar;
