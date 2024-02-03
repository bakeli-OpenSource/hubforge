import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import favicon from "../../assets/Aria/favicon.svg";
import work1 from "../../assets/Aria/work1.webp";
import work2 from "../../assets/Aria/work2.webp";
import work5 from "../../assets/Aria/work5.webp";
import work7 from "../../assets/Aria/work7.webp";
import work9 from "../../assets/Aria/work9.webp";
import work10 from "../../assets/Aria/work10.webp";
import work11 from "../../assets/Aria/work11.webp";

export default function Aria() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrolled = scrollTop > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={`bg-white ${isScrolled ? "dark:bg-stone-950" : ""}`}>
        <header className="py-6 sm:py-12 xl:py-24">
          <div className="mx-auto max-w-5xl px-8 sm:px-12 lg:px-8 xl:px-16">
            <div className="flex flex-wrap justify-between lg:items-center">
              <div className="relative z-30 flex w-full items-center justify-between overflow-hidden lg:w-auto">
                <Link to="/">
                  <img
                    className="h-12 w-auto"
                    src={favicon}
                    alt="Aria logo"
                    width="120"
                    height="120"
                  />
                </Link>
                <button
                  aria-label="hamburger"
                  id="hamburger"
                  className="-mr-6 p-6 lg:hidden"
                  onClick={toggleMenu}
                >
                  <div
                    aria-hidden="true"
                    className="m-auto h-0.5 w-6 rounded bg-primary transition duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    className="m-auto mt-2 h-0.5 w-6 rounded bg-primary transition duration-300"
                  ></div>
                </button>
              </div>
              <div
                id="navlinks"
                className={`fixed inset-0 z-20 ${
                  isMenuOpen
                    ? "bg-white/90 backdrop-blur-3xl flex items-center justify-center"
                    : "hidden bg-white/90 backdrop-blur-3xl"
                } lg:static lg:block lg:h-auto lg:w-auto lg:bg-transparent lg:backdrop-blur-none`}
              >
                <ul className="group flex flex-col items-center gap-6 text-lg text-stone-000 dark:text-stone-300 lg:flex-row lg:gap-0 lg:text-sm">
                  <li className="text-right transition duration-500 group-hover:text-stone-300 lg:text-left">
                    <Link
                      to="/pages/about.html"
                      className="block px-6 py-1 hover:text-primary"
                    >
                      About me
                    </Link>
                  </li>
                  <li className="text-right transition duration-500 group-hover:text-stone-300 lg:text-left">
                    <Link to="/" className="block px-6 py-1 hover:text-primary">
                      Instagram
                    </Link>
                  </li>
                  <li className="text-right transition duration-500 group-hover:text-stone-300 lg:text-left">
                    <Link
                      to="/pages/services.html"
                      className="block px-6 py-1 hover:text-primary"
                    >
                      Behance
                    </Link>
                  </li>
                  <li className="text-right group-hover:text-stone-300 lg:pl-6 lg:text-left">
                    <a
                      href="mailto:hello@tailus.io"
                      className="flex h-9 items-center overflow-hidden border border-stone-300 px-3.5 py-1 text-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
                    >
                      <span className="relative flex items-center">
                        hey@aria.me
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4 translate-x-1 duration-300 group-hover:translate-x-2.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          ></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <main>
          <section className="pt-12 sm:pt-20 md:pt-20">
            <div className="mx-auto max-w-5xl px-8 sm:px-12 lg:px-8 xl:px-16">
              <div className="lg:w-4/5">
                <h1
                  className={`text-3xl font-semibold ${
                    isScrolled ? "text-white" : "text-black"
                  } sm:text-5xl`}
                >
                  Exquisite suit for a{" "}
                  <span className="font-bold text-primary">
                    money transfer{" "}
                  </span>{" "}
                  service
                </h1>
                <p
                  className={`ml-auto mt-12 ${
                    isScrolled ? "text-white" : "text-black"
                  } sm:w-3/5 lg:w-1/2`}
                >
                  Esse eaque error dolor tempora! Magni eveniet aliquid
                  laboriosam et error nemo, qui, nostrum similique autem
                  exercitationem fugiat ipsum ipsam pariatur veniam.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-24 space-y-24 lg:mt-32 lg:space-y-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-12 lg:px-8">
              <div className="group grid gap-2 sm:grid-cols-3 sm:gap-4">
                <img
                  className="h-full w-full object-cover sm:col-span-2"
                  src={work1}
                  alt="project cover"
                  width="1500"
                  height="1000"
                />
                <img
                  className="h-full w-full object-cover object-left"
                  src={work2}
                  alt="project cover"
                  width="1920"
                  height="2688"
                />
              </div>
            </div>
            <div className="mx-auto max-w-5xl px-8 sm:px-12 lg:px-8 xl:px-16">
              <div className="gap-4 sm:flex sm:gap-8 lg:w-4/5 lg:gap-12">
                <h2
                  className={`text-2xl font-semibold ${
                    isScrolled ? "text-white" : "text-black"
                  } sm:w-2/5 sm:text-4xl`}
                >
                  User trust is top priority
                </h2>
                <p className="mt-6 text-stone-700 dark:text-stone-300 sm:mt-0 sm:w-3/5">
                  First you judge “how nice,” then you judge “how wise”.
                  Especially when it comes to new users who know nothing about
                  the service. They depend on visual attributes that reflect
                  brand’s values, approach, and consistency. It’s the brand’s
                  apparel.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-12 lg:px-8">
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <img
                  className="h-full w-full object-cover"
                  src={work11}
                  alt="project cover"
                  width="1000"
                  height="1500"
                />
                <img
                  className="h-full w-full object-cover"
                  src={work10}
                  alt="project cover"
                  width="1000"
                  height="1500"
                />
              </div>
            </div>
            <div className="mx-auto max-w-5xl px-8 sm:px-12 lg:px-8 xl:px-16">
              <div className="gap-4 sm:flex sm:gap-8 lg:w-4/5 lg:gap-12">
                <h2 className="text-2xl font-semibold text-stone-900 dark:text-white sm:w-2/5 sm:text-4xl">
                  Ramotion is a digital stylist
                </h2>
                <p className="mt-6 text-stone-700 dark:text-stone-300 sm:mt-0 sm:w-3/5">
                  To sew a perfect “branding suit,” we need to measure the
                  client first, to know more about his tastes and lifestyle.
                  During the working process, we perform regular fitting with
                  the client because he is the only person who can feel whether
                  a new suit fits or not.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-12 lg:px-8">
              <div className="space-y-2 sm:space-y-4">
                <img
                  className="h-full w-full object-cover"
                  src={work5}
                  alt="project cover"
                  width="1500"
                  height="1000"
                />
                <img
                  className="h-full w-full object-cover"
                  src={work7}
                  alt="project cover"
                  width="1500"
                  height="1001"
                />
                <img
                  className="h-full w-full object-cover"
                  src={work9}
                  alt="project cover"
                  width="1920"
                  height="2880"
                />
              </div>
            </div>
          </section>

          <section className="py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-12 lg:px-8 xl:px-16">
              <a
                href="mailto:hello@tailus.io"
                className={`relative mt-4 block text-center text-5xl font-thin sm:text-7xl ${
                  isScrolled ? "text-white" : "text-black"
                }`}
              >
                <span
                  className={`text-stone-700 transition duration-700 hover:bg-gradient-to-r hover:from-accent hover:to-primary hover:bg-clip-text ${
                    isScrolled ? "dark:text-white" : ""
                  }`}
                >
                  hey@aria.me
                </span>
              </a>
              <div className="mx-auto mt-12 sm:w-4/5 md:w-2/5">
                <p className="text-center text-lg font-normal text-stone-600 dark:text-stone-300">
                  I'd love to hear more about your project, or you can just
                  write me "Hello!".
                </p>
              </div>
            </div>
          </section>
        </main>
        <footer className="pt-6 dark:bg-stone-900">
          <div className="mx-auto max-w-7xl divide-y divide-white px-4 dark:divide-stone-700 sm:px-12 lg:px-8 xl:px-16">
            <div className="flex flex-col items-center justify-between gap-6 pb-6 sm:flex-row">
              <Link to="/" className="block w-max">
                <img
                  className="h-9 w-auto"
                  src={favicon}
                  alt="Aria logo"
                  width="120"
                  height="120"
                />
              </Link>
              <ul className="group items-center justify-center gap-0 text-center text-sm text-stone-200 sm:flex lg:gap-0">
                <li className="transition duration-500 group-hover:text-stone-300">
                  <Link to="/pages/about.html" className="block px-3 py-1">
                    About me
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col flex-wrap items-center justify-between gap-4 py-6 text-sm text-stone-200 sm:flex-row sm:gap-6">
              <span className="order-last sm:order-first">
                Copyright © Aria 2019 - Present
              </span>
              <ul className="order-first flex gap-6 sm:order-2">
                <li>
                  <a
                    href="#"
                    target="_blank"
                    className="transition duration-300 hover:text-stone-400"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    className="transition duration-300 hover:text-stone-400"
                  >
                    Behance
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    className="transition duration-300 hover:text-stone-400"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
              <Link
                to="/pages/privacy.html"
                className="order-2 transition duration-300 hover:text-stone-400 sm:order-last"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
