import { Link } from 'react-router-dom';
import headerLogo from "../assets/logo/headerLogo.png";

const Header = () => {
  return (
    <header className="bg-bgHeader text-white p-5 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-gray-300">
          Enos Weather Forecaster
        </Link>
        
        <nav className="flex items-center">
          <ul className="flex space-x-4">
            <li>
              <Link to="/">
                <img 
                  src={headerLogo} 
                  alt="Logo" 
                  className="w-8 h-auto cursor-pointer hover:opacity-80" 
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
