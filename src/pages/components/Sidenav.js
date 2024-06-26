// components/Sidenav.js
import React from "react"
import {
  HomeIcon,
  UsersIcon,
  BriefcaseIcon,
  BellIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid" 

const Sidenav = () => {
  return (
    <div className=" h-screen overflow-y-hidden">
      <div className="h-full bg-white flex flex-col justify-between">
        <div className="p-2">
          <div className="px-4 cursor-pointer">
            <img
              src="/ms-logo.png"
              alt="Logo"
              className="h-20 w-full object-contain my-2 "
            />
          </div>

          {/* Nav Links */}
          <ul className="flex flex-col text-[12px] py-1 gap-y-1">
            <li className="text-gray-500 font-semibold uppercase mb-2 cursor-pointer hover:bg-gray-100 rounded-md flex items-center px-3">
              <HomeIcon className="w-5 h-5 mr-2" />
              Home
            </li>
            <li className="text-gray-500 font-semibold uppercase mb-2 cursor-pointer hover:bg-gray-100 rounded-md flex items-center px-3">
              <UsersIcon className="w-5 h-5 mr-2" />
              Department
            </li>
            <li className="text-gray-500 font-semibold uppercase mb-2 cursor-pointer hover:bg-gray-100 rounded-md flex items-center px-3">
              <BriefcaseIcon className="w-5 h-5 mr-2" />
              Activity
            </li>
            <li className="text-gray-500 font-semibold uppercase mb-2 cursor-pointer hover:bg-gray-100 rounded-md flex items-center px-3">
              <BriefcaseIcon className="w-5 h-5 mr-2" />
              Services
            </li>
          </ul>

          {/* Divider */}
          <div className="border-t border-gray-300 my-4"></div>

          {/* Other Links */}
          <ul className="flex flex-col text-[12px] py-1 gap-y-1">
            <li className="text-gray-500 font-medium uppercase mb-2 cursor-pointer hover:bg-gray-100 rounded-md flex items-center px-3">
              <UserCircleIcon className="w-5 h-5 mr-2" />
              Profile
            </li>
            <li className="text-gray-500 font-medium uppercase mb-2 cursor-pointer hover:bg-gray-100 rounded-md flex px-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 5a2 2 0 012-2h8a2 2 0 012 2v14l-6-3-6 3V5z" />
              </svg>
              Affiliate Professional
            </li>

            <li className="text-gray-500 font-medium uppercase mb-2 cursor-pointer hover:bg-gray-100 rounded-md flex items-center px-3">
              <BellIcon className="w-5 h-5 mr-2" />
              Notification
            </li>
          </ul>
        </div>

        {/* Lower Section */}
        <div className=" p-2">
          <div className="flex items-center mb-2">
            <img
              src="/ava.png"
              alt="Avatar"
              className="w-8 h-8 rounded-full mr-2 object-cover"
            />
            <div>
              <p className="text-xs text-gray-700 font-semibold">SOO Agency</p>
              <p className="text-xs text-gray-400">sooagency@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidenav
