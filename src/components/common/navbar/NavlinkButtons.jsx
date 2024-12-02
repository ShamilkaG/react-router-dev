import {Link} from "react-router-dom";

const NavlinkButtons = () => {
  return (
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to="/" className="nav-btn" aria-current="page">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-btn">
            About
          </Link>
        </li>
        <li>
          <Link to="/services" className="nav-btn">
            Services
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavlinkButtons;
