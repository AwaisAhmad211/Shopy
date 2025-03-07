import { Logoimg, searchimg, bagimg } from "../assets/Data";
import { Link } from "react-router-dom";
import { useShop } from "../Context/Context";
import { useNavigate } from "react-router-dom"; 

const Header = () => {
  const { searchQuery, setSearchQuery, cartTotal } = useShop(); 
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/shop`);
  };

  return (
    <header className="flex items-center justify-between bg-gray-100 drop-shadow-sm p-2 pl-9 pr-9 md:p-4 md:pl-16 md:pr-16">
      <Link to="/">
        <div className="w-32 md:w-40">
          <img src={Logoimg} alt="Logo" />
        </div>
      </Link>

      <form onSubmit={handleSearchSubmit} className="relative w-1/3 hidden md:block">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search Products..."
          className="w-full p-3 pl-6 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <img
          type="submit"
          src={searchimg}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 w-11 cursor-pointer"
          alt="Search"
        />
      </form>

      <div className="flex items-center gap-4">
      <Link to="/buynow">  <img src={bagimg} className="w-7 md:w-8" alt="Cart" /></Link>
        <span className="text-lg font-semibold mt-1">${cartTotal.toFixed(2)}</span>
      </div>
    </header>
  );
};

export default Header;