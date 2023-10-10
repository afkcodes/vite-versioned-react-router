import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="h-screen bg-black text-white">
      <nav className="w-full bg-gray-900 py-2">
        <ul className="flex gap-8 font-semibold text-lg justify-end px-12">
          <li className="hover:text-red-500 cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-red-500 cursor-pointer">
            <Link to="/contact-us">Contact us</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
