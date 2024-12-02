import BurgerButton from "./BurgerButton.jsx";
import NavlinkButtons from "./NavlinkButtons.jsx";
import WebsiteLogo from "./WebsiteLogo.jsx";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 border-b">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <WebsiteLogo />
        <BurgerButton />
        <NavlinkButtons />
      </div>
    </nav>
  );
};

export default Navbar;
