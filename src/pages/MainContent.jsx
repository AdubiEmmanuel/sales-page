import React from "react";
import { Link } from "react-router-dom";
import features from "./post";
import { BsFillCartFill } from "react-icons/bs";

export default function MainContent() {
  return (
    <div>
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">
                  Best quality food stuff!
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  McTimmy Variety Foods
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Attention everyone! Do you live in Abuja or planning to travel
                  abroad and in need of top-notch, affordable Nigerian food
                  stuff? Look no further because MC Timmy Variety Foods has got
                  you covered! Say goodbye to market stress and let us provide
                  you with the finest quality food money can buy. Our value
                  proposition is to ensure you enjoy a hassle-free experience
                  while enjoying the best Nigerian cuisine. Don't miss out on
                  the opportunity to indulge in quality Nigerian cuisine. Place
                  your order with MC Timmy Variety Foods today and experience
                  the joy of savoring delicious meals made with love and care.
                  Click the Link Below to Order Now!
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <a href="https://wa.me/2347088278219">
              <button className="font-bold bg-black text-white rounded-full p-5 my-2 text-2xl flex items-center relative mx-auto my-0">
                <BsFillCartFill />
                Order Now
              </button>
              <img
                src="assets/images/mcTimmy.jpg"
                alt="Our Products"
                className="w-[100%] max-w-none rounded-x1 shadow-xl ring-1 ring-gray-400/10 lg:w-[40rem] md:w-[30rem] sm:w-[57rem] p-5 align-center"
                // width={2432}
                // height={1442}
              />
            </a>
            <a href="https://wa.me/2347088278219">
              <button className="font-bold bg-black text-white rounded-full p-5 my-2 text-2xl flex items-center relative mx-auto my-0">
                <BsFillCartFill />
                Order Now
              </button>
              <img
                src="assets/images/ofada.jpg"
                alt="ofada rice"
                className="w-[100%] max-w-none rounded-x1 shadow-xl ring-1 ring-gray-400/10 lg:w-[40rem] md:w-[30rem] sm:w-[57rem] p-5 align-center"
                // width={2432}
                // height={1442}
              />
            </a>

            <a href="https://wa.me/2347088278219">
              <button className="font-bold bg-black text-white rounded-full p-5 my-2 text-2xl flex items-center relative mx-auto my-0">
                <BsFillCartFill />
                Order Now
              </button>
              <img
                src="assets/images/ponmon.jpeg"
                alt="Ponmon"
                className="w-[100%] max-w-none rounded-x1 shadow-xl ring-1 ring-gray-400/10 lg:w-[40rem] md:w-[30rem] sm:w-[57rem] p-5 align-center"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
