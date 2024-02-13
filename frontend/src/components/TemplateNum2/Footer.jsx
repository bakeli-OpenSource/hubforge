import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";




export default function Footer() {
  return (
    <div>
        <footer class="bg-gradient-to-b from-transparent to-gray-100 py-12 dark:to-gray-900">
            <div class="mx-auto flex max-w-6xl flex-col items-center px-6 md:px-12 lg:px-6 xl:px-0">
                <a href="#home" aria-label="logo" class="flex items-center justify-center space-x-2">
                <div className="h-4 w-4 rounded-full bg-gray-900 dark:bg-white"></div>
                <div className="h-6 w-2 bg-blue-500"></div>
                    <span class="text-2xl font-bold text-gray-900 dark:text-white">ProManage</span>
                </a>

                <ul role="list" class="mt-8 flex flex-wrap items-center justify-center gap-4 py-4 text-gray-600 dark:text-gray-400 sm:gap-8">
                    <li role="listitem">
                        <a href="#home" class="px-0 duration-300 hover:text-primary dark:hover:text-white">Home</a>
                    </li>
                    <li role="listitem">
                        <a href="#features" class="px-0 duration-300 hover:text-primary dark:hover:text-white">Features</a>
                    </li>
                    <li role="listitem">
                        <a href="#solution" class="px-0 duration-300 hover:text-primary dark:hover:text-white">Solution</a>
                    </li>
                    <li role="listitem">
                        <a href="#reviews" class="px-0 duration-300 hover:text-primary dark:hover:text-white">Reviews</a>
                    </li>
                    <li role="listitem">
                        <a href="#pricing" class="px-0 duration-300 hover:text-primary dark:hover:text-white">Pricing</a>
                    </li>
                </ul>

                <div class="m-auto flex w-max items-center justify-between gap-0 space-x-4 text-gray-500">
                    <a class="px-0 duration-300 hover:text-gray-600 dark:hover:text-white" href="#" title="twitter" target="blank" aria-label="twitter">
                    <FaTwitterSquare />

                    </a>
                    <a class="px-0 duration-300 hover:text-gray-600 dark:hover:text-white" href="#" title="facebook" target="blank" aria-label="facebook">
                    <FaFacebookSquare />

                    </a>
                    <a class="px-0 duration-300 hover:text-gray-600 dark:hover:text-white" href="#" title="linkedin" target="blank" aria-label="linkedin">
                    <FaLinkedin />

                    </a>
                </div>

                <div class="mt-8 text-center">
                    <span class="text-sm font-thin tracking-wide text-gray-500">Copyright 2024 - Present | All rights reserved</span>
                </div>
            </div>
        </footer>
    </div>
  )
}
