import React from "react";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  return (
    <div className="shadow-lg">
      <div className="flex justify-between items-center px-10 py-3">
        <Link to={"/"}>
          <h1 className="uppercase text-lg font-semibold">Post App</h1>
        </Link>
        <div>
          <ul className="flex items-center md:ml-0 ml-5">
            <Link to={"/"} className="md:mr-3 ">
              <li
                className={`p-2 px-5 rounded-md cursor-pointer hover:bg-blue-500 hover:text-white ${
                  location.pathname === "/" ? "bg-blue-500 text-white" : ""
                } `}
              >
                Post
              </li>
            </Link>

            <Link to={"/addpost"}>
              <li
                className={`p-2 px-5 rounded-md cursor-pointer hover:bg-blue-500 hover:text-white ${
                  location.pathname === "/addpost"
                    ? "bg-blue-500 text-white"
                    : ""
                } `}
              >
                Add Post
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
