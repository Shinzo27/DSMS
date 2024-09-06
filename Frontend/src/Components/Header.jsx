import React, { useState } from "react";
import { IoCart } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import axios from "axios";
import { toast } from "react-toastify";

const Header = () => {
    const [toggleButton, setToggleButton] = useState(false);
    const MenuLinks = [
        {
          id: 1,
          name: "Home",
          link: "/",
        },
        {
          id: 2,
          name: "Shop",
          link: "/products",
        },
        {
          id: 3,
          name: "About",
          link: "/about",
        },
        {
              id: 4,
              name: "username",
              link: "/profile",
        },
        {
              id: 4,
              name: "Login",
              link: "/login",
        },
      ];

      const logoutHandler = async () => {
        console.log("logout");
      };

      return (
        <div
          className="bg-white duration-200 relative z-40 font-Dosis capitalize"
          onScroll={() => setToggleButton(false)}
        >
          <div className="py-4 ">
            <div className="container flex justify-between items-center border-b border-gray-300">
              <div className="flex items-center gap-10 text-xl">
                <a to="#" className="">
                  <img className="p-2 w-44" src=".\logo.png" alt="" />
                </a>
                <div className="hidden lg:block">
                  <ul className="flex items-center gap-4">
                    {MenuLinks.map((data, index) => (
                      <li
                        key={index}
                        className="inline-block px-4 font-medium text-gray-500 hover:text-orange-500 duration-200"
                      >
                        <a to={data.link}>{data.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-4 text-2xl">
                    <div className="flex items-center gap-4 text-2xl">
                      <button>
                        <a to={"/cart"}>
                          <IoCart className="hover:text-orange-500" />
                        </a>
                      </button>
                      <button onClick={logoutHandler}>
                          <LuLogOut className="hover:text-orange-500"/>
                      </button>
                    </div>
                  <div>
                    <button>
                      {toggleButton ? (
                        <IoMdClose
                          className="lg:hidden"
                          onClick={() => setToggleButton(!toggleButton)}
                        />
                      ) : (
                        <HiMenu
                          className="lg:hidden"
                          onClick={() => setToggleButton(!toggleButton)}
                        />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`px-2 w-full flex-grow lg:items-center lg:w-auto lg:hidden ${
              toggleButton ? "block" : "hidden"
            }`}
          >
            <div className="lg:flex-grow text-l">
              <a
                to="/"
                className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 hover:text-orange-500"
              >
                Home
              </a>
              <a
                to="/products"
                className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 hover:text-orange-500"
              >
                Shop
              </a>
              <a
                to="/about"
                className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 hover:text-orange-500"
              >
                About
              </a>
                <a
                  to="/profile"
                  className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 pb-5 hover:text-orange-500"
                >
                  {"username"}
                </a>
                <a
                  to="/login"
                  className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 pb-5 hover:text-orange-500"
                >
                  Login
                </a>
            </div>
          </div>
        </div>
      );
}

export default Header