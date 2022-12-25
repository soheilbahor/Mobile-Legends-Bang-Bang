import React from "react";

function Nav() {
  return (
    <div>
      <nav
        className="flex items-center 
      justify-between flex-wrap bg-lackered/80 outline 
      outline-cyan-900 outline-1
      p-6"
      >
        <div
          className="flex items-center 
        flex-shrink-0 text-white mr-6"
        >
          <span className="font-bold text-xl text-lackedark hover:text-lackeyellow
          tracking-tight">
            Mobile Legend
          </span>
        </div>
        <div
          className="flex-grow flex 
        items-center w-auto"
        >
          <div className="text-sm flex-grow">
            <a
              href="#responsive-header"
              className="inline-block 
              mt-0 text-teal-200 hover:text-white mr-4"
            >
              Pictures
            </a>
            <a
              href="#responsive-header"
              className="inline-block mt-0 
              text-teal-200 hover:text-white mr-4"
            >
              Heroes
            </a>
            <a
              href="#responsive-header"
              className="inline-block mt-0 
              text-teal-200 hover:text-white"
            >
              Contact
            </a>
          </div>
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 
              leading-none border rounded text-lackedark
              border-lackedark hover:border-transparent 
              hover:text-teal-500 hover:bg-white
              mt-0"
            >
              Download
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
