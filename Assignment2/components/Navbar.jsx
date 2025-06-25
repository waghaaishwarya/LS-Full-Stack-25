import { Link } from "react-router-dom";

const Navbar = () => {
  const watchLater = JSON.parse(sessionStorage.getItem("watchLater")) || [];

  return (
    
<nav className="flex justify-between items-center px-6 py-3 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-md sticky top-0 z-50">
  <Link to="/" className="text-2xl font-bold text-red-600">MiniTube</Link>
  <input
    type="text"
    placeholder="Search"
    className="border px-4 py-2 rounded w-1/2 focus:outline-none bg-white dark:bg-gray-800 text-black dark:text-white"
  />
  <button onClick={toggleDarkMode} className="ml-4 text-sm text-gray-600 dark:text-gray-300">
  🌓 Toggle Dark Mode
</button>

  <Link to="/watch-later" className="text-blue-600 font-medium">
    Watch Later ({watchLater.length})
  </Link>
</nav>

  );
};
const toggleDarkMode = () => {
  document.documentElement.classList.toggle("dark");
};


export default Navbar;
