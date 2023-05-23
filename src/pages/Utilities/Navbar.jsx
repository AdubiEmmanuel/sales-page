import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-slate-900 flex flex-row justify-center text-white h-50 p-6 gap-8 w-100 md:w-100 lg:w-100">
        <ul className="flex gap-10">
          <li className="relative right-20 text-4xl font-extrabold ">
            McTimmy Variety Foods
          </li>
          <li className="max-w-sm">
            <Link
              to="/about"
              className="text-blue-50 visited:text-blue-50 link:text-blue-50  no-underline font-bold text-2xl"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-blue-50 visited:text-blue-50 link:text-blue-50  no-underline font-bold text-2xl"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
