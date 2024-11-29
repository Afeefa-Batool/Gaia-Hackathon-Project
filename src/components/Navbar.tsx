
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Gaia</h1>
        <div>
          <Link className="px-4 py-2 hover:bg-blue-700 rounded" to="/">Home</Link>
          <Link className="px-4 py-2 hover:bg-blue-700 rounded" to="/about">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
