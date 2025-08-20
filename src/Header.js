import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav className="flex bg-gray-900 p-5 justify-between items-center">
        {/* Left section */}
        <div>
          <Link to="/todo-add">
            <button className="w-full md:w-auto bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 hover:brightness-110 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
              Add
            </button>
          </Link>
        </div>

        {/* Center section */}
        <div>
          <Link to="/todo-show">
            <button className="w-full md:w-auto bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 hover:brightness-110 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
              Show
            </button>
          </Link>
        </div>

        {/* Right section */}
        <div>
          <Link to="/todo-done">
            <button className="w-full md:w-auto bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 hover:brightness-110 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
              Done
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
