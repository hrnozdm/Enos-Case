import headerLogo from "../assets/logo/headerLogo.png";

const Header = () => {
  return (
    <header className="bg-bgHeader text-white p-5 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Enos Weather Forecaster</h1>
        
        <nav className="flex items-center">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                <img 
                  src={headerLogo} 
                  alt="Logo" 
                  className="w-8 h-auto" 
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
