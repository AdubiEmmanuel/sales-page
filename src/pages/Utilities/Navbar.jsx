import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="flex sm:col-span-1 py-5 pl-5" aria-label="Breadcrumb">
        <ol role="list" className="flex items-center space-x-1 sm:space-x-2">
          <li className="hidden lg:block">
            <div>
              <Link
                className="text-gray-400 hover:text-gray-500"
                to="https://www.tailwindawesome.com/"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <Link className="sr-only" to="/">
                  Home
                </Link>
              </Link>{" "}
            </div>
          </li>

          <li>
            <div className="flex items-center">
              <svg
                className="flex-shrink-0 hidden w-5 h-5 text-gray-300 lg:block"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <Link
                className="lg:ml-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                to="/"
              >
                Mc Timmy Variety Foods
              </Link>
            </div>
          </li>

          <li>
            <div className="flex items-center">
              <svg
                className="flex-shrink-0 w-5 h-5 text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <Link
                className="ml-1 sm:ml-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                href="https://www.instagram.com/mc_timmy_variety_foods/"
              >
                Instagram
              </Link>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
}
