import React from 'react'

export default function Contact() {
    return (
      <div>
        <dl className="grid grid-cols-2 gap-8 max-w-screen-md text-gray-900 sm:grid-cols-3 dark:text-white">
          <div className="flex flex-col justify-center items-center">
            <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
            <dd className="text-lg font-normal text-gray-500 dark:text-gray-400">
              developers
            </dd>
          </div>
          <div className="flex flex-col justify-center items-center">
            <dt className="mb-2 text-3xl font-extrabold">1B+</dt>
            <dd className="text-lg font-normal text-gray-500 dark:text-gray-400">
              contributors
            </dd>
          </div>
          <div className="flex flex-col justify-center items-center">
            <dt className="mb-2 text-3xl font-extrabold">4M+</dt>
            <dd className="text-lg font-normal text-gray-500 dark:text-gray-400">
              organizations
            </dd>
          </div>
        </dl>
      </div>
    );
}
