import React from 'react'
import { Link } from 'react-router-dom';
import MainContent from './MainContent';

export default function Hero() {
    return (
      <div>
        <main
          data-controller="className-toggler"
          data-className-toggler-active-toggler-classNamees-value='["bg-white", "border-gray-200", "shadow-sm"]'
          data-className-toggler-inactive-toggler-classNamees-value='["border-transparent", "hover:text-gray-700"]'
        >
          <section className="px-4 py-8 leading-6 text-gray-700 sm:px-6 lg:px-8">
            <div
              className="w-full mx-auto duration-500 ease-in-out transform max-w-screen-3xl"
              data-className-toggler-target="toggleable"
            >
              <div className="relative">
                <div
                  className="overflow-hidden shadow-xl rounded-xl "
                  style={{ transformOrigin: "right center" }}
                >
                  <div className="flex items-center pl-3 space-x-1 bg-gray-200 rounded-t-xl h-7">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </div>
                  <div className="rounded-b-xl w-full align-middle h-[calc(100vh_-_10.75rem)] p-5">
                    <div className="md:w-32 lg:w-48 lg:col-12 md:col-6 sm:col-12">
                      <iframe
                        // width="560"
                        height="315"
                        className="sm:w-[]"
                        src="https://www.youtube.com/embed/4brRKwiW3Ns"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
}
