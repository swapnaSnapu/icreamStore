import React from 'react'
const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round"
               strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
               viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zm0 13v7m0 0H9m3 0h3"/>
          </svg>
          <span className="ml-3 text-xl">Ice Cream</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()} Dessert —
          <a href="https://twitter.com/yourhandle" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@yourhandle</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500" href="#">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                 className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
            </svg>
          </a>
          <a className="ml-3 text-gray-500" href="#">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                 className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 002 8v1c0 4.41 3.59 8 8 8a10.66 10.66 0 0010-7.29A10.9 10.9 0 0123 3z"/>
            </svg>
          </a>
          <a className="ml-3 text-gray-500" href="#">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                 className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"/>
            </svg>
          </a>
          <a className="ml-3 text-gray-500" href="#">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                 className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer