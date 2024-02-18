import React, { useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { useAppContext } from "../../context/AppContext";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
import { HiMenuAlt4 } from "react-icons/hi";

export const NavBarPageAccueil = () => {
  const { darkMode, toggleDarkMode } = useAppContext();
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      <div className="mx-auto max-sm:pt-4 max-w-screen-xl ">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-6">
            <a
              className={`${
                darkMode ? "text-blanc" : "text-dark"
              } flex items-center`}
              href="/"
            >
              <BiLoaderCircle className={`text-[37px] me-3`} />
              <p className="text-2xl font-[500]">HubForge</p>
            </a>
          </div>
          <div
            className={` flex max-sm:flex-col-reverse items-center justify-end `}
          >
            <div className=" flex items-center w-full justify-end gap-4">
              <div className="sm:flex sm:gap-4">
                <button onClick={toggleDarkMode} className="ms-4">
                  {darkMode ? (
                    <MdLightMode className="hover:text-orange text-2xl" />
                  ) : (
                    <BsFillMoonStarsFill className="text-2xl" />
                  )}
                </button>
              </div>

              <div className="hidden monToggle md:hidden">
                <button
                  onClick={toggleMenu}
                  className="rounded p-2 transition text-3xl"
                >
                  <HiMenuAlt4 />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
