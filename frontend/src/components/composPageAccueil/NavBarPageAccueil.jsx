import React, { useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { useAppContext } from "../../context/AppContext";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
import { HiMenuAlt4 } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

export const NavBarPageAccueil = () => {
  const { darkMode, toggleDarkMode } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className=" mx-auto pt-5 max-sm:pt-4 max-w-screen-xl ">
        <div className="flex flex-wrap justify-between lg:items-center">
          <div
            className="relative z-30  flex w-full items-center justify-between 
            overflow-hidden lg:w-auto"
          >
            <a
              className={`${
                darkMode ? "text-blanc" : "text-dark"
              } flex items-center`}
              href="/"
            >
              <BiLoaderCircle className={`text-[37px] me-3`} />
              <p className="text-2xl font-[500]">HubForge</p>
            </a>
            <div className="flex items-center sm:gap-4">
              <button
                onClick={toggleDarkMode}
                className="ms-4 hidden max-lg:block"
              >
                {darkMode ? (
                  <MdLightMode className="hover:text-orange text-2xl" />
                ) : (
                  <BsFillMoonStarsFill className="text-2xl" />
                )}
              </button>
              <button
                aria-label="hamburger"
                id="hamburger"
                className="-mr-6 p-6 lg:hidden"
                onClick={toggleMenu}
              >
                <HiMenuAlt4 className="text-[45px]" />
              </button>
            </div>
          </div>

          <div
            id="navlinks"
            className={`fixed inset-0 z-20  ${
              isMenuOpen
                ? " backdrop-blur-3xl flex items-center justify-center"
                : "hidden backdrop-blur-3xl "
            } lg:static lg:block lg:h-auto ${
              darkMode ? "bg-gray-800" : "bg-white "
            } lg:w-auto lg:bg-transparent lg:backdrop-blur-none`}
          >
            <ul className=" max-lg:-mt-80 group flex flex-col items-center gap-6 text-lg text-stone-000 dark:text-stone-300 lg:flex-row lg:gap-4 lg:text-sm ">
              <li className=" text-right transition duration-500 hover:text-stone-300 lg:text-left">
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`block px-2 py-2 hover:text-vr text-xl ${isActive("/") && "border-b-vr rounded-s-xl border-b-[4px] text-rg font-bold "}`}
                >
                  Landing Pages
                </Link>
              </li>
              <li className="text-right transition duration-500 hover:text-stone-300 lg:text-left">
                <Link
                  to="/dashbords"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`block px-2 py-2 hover:text-vr text-xl ${isActive("/dashbords") && "border-b-vr rounded-e-xl border-lr-radius border-b-[4px] text-rg font-bold "}`}
                >
                  Dashboards
                </Link>
              </li>

              <li className="text-right transition duration-500 hover:text-stone-300 lg:text-left">
                <button
                  onClick={toggleDarkMode}
                  className="ms-4 hidden lg:block"
                >
                  {darkMode ? (
                    <MdLightMode className="hover:text-orange text-2xl" />
                  ) : (
                    <BsFillMoonStarsFill className="text-2xl hover:text-vr" />
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
