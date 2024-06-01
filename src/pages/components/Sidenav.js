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
    <div className="">
      <div>
        <img
          src="/ms-logo.png"
          alt="Logo"
          className="h-full mx-auto mb-2 object-contain my-4"
        />
      </div>
      <div className="h-full w-72 bg-white shadow-md flex flex-col justify-between">
        {/* Upper Section */}

        <div className="p-4">
          {/* Logo */}

          {/* Nav Links */}
          <ul className="text-sm py-1">
            <li className="text-gray-700 font-semibold uppercase mb-2 cursor-pointer hover:bg-gray-100 rounded-md flex items-center px-3">
              <HomeIcon className="w-5 h-5 mr-2" />
              Home
            </li>
            <li className="text-gray-700 font-semibold uppercase mb-2 cursor-pointer hover:bg-gray-100 rounded-md flex items-center px-3">
              <UsersIcon className="w-5 h-5 mr-2" />
              Department
            </li>
            <li className="text-gray-700 font-semibold uppercase mb-2 cursor-pointer hover:bg-gray-100 rounded-md flex items-center px-3">
              <BriefcaseIcon className="w-5 h-5 mr-2" />
              Activity
            </li>
            <li className="text-gray-700 font-semibold uppercase mb-2 cursor-pointer hover:bg-gray-100 rounded-md flex items-center px-3">
              <BriefcaseIcon className="w-5 h-5 mr-2" />
              Services
            </li>
          </ul>

          {/* Divider */}
          <div className="border-t border-gray-300 my-4"></div>

          {/* Other Links */}
          <ul className="text-sm py-1">
            <li className="text-gray-700 font-semibold uppercase mb-2 cursor-pointer hover:bg-gray-100 rounded-md flex items-center px-3">
              <UserCircleIcon className="w-5 h-5 mr-2" />
              Profile
            </li>
            <li className="text-gray-700 font-semibold uppercase mb-2 cursor-pointer hover:bg-gray-100 rounded-md flex items-center px-3">
              <UserCircleIcon className="w-5 h-5 mr-2" />
              Affiliate Professional
            </li>
            <li className="text-gray-700 font-semibold uppercase mb-2 cursor-pointer hover:bg-gray-100 rounded-md flex items-center px-3">
              <BellIcon className="w-5 h-5 mr-2" />
              Notification
            </li>
          </ul>
        </div>

        {/* Lower Section */}
        <div className="mt-auto p-4">
          <div className="flex items-center mb-2">
            <img
              src="/ava.png"
              alt="Avatar"
              className="w-8 h-8 rounded-full mr-2 object-cover"
            />
            <div>
              <p className="text-xs text-gray-700">John Doe</p>
              <p className="text-xs text-gray-400">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidenav