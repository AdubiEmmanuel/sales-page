import React from "react";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="bg-slate-900 flex flex-row justify-center text-white h-20 p-6 gap-8 w-100">
        <ul className="flex gap-10 text-white">
          <li className="relative right-60 text-3xl font-bold">
            McTimmy Variety Foods
          </li>
          <li>
            <Link to="/about" className="text-white decoration- hover:text-grey-500">About us</Link>
          </li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}
