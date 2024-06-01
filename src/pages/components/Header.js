import React from "react"
import { HelpIcon, SettingsIcon } from "@heroicons/react/24/solid"

const Header = () => {
  return (
    <div className="h-16 bg-[#FFFFFF] flex items-center justify-between px-4">
      {/* Left Text */}
      <div className="flex items-center">
        <a
          href="/workspace"
          className="text-white font-bold uppercase"
          style={{ color: "#2E303B" }}
        >
          Workspace
        </a>
        <span
          className="text-white font-bold uppercase "
          style={{ color: "#2E303B" }}
        >
          |
        </span>
        <a
          href="/learn"
          className="text-white font-bold uppercase"
          style={{ color: "#2E303B" }}
        >
          Learn
        </a>
        <span
          className="text-white font-bold uppercase "
          style={{ color: "#2E303B" }}
        >
          |
        </span>
        <a
          href="/certification"
          className="text-white font-bold uppercase"
          style={{ color: "#2E303B" }}
        >
          Certification
        </a>
      </div>

      {/* Right Text and Icons */}
      <div className="flex items-center space-x-4">
        <div className="text-white" style={{ color: "#2E303B" }}>
          Help
        </div>
        <div className="text-white" style={{ color: "#2E303B" }}>
          Settings
        </div>
        {/* Add icons for help and settings here */}
        {/* <HelpIcon className="w-6 h-6 text-white hover:bg-gray-700 rounded-full p-1 cursor-pointer transition duration-300" />
        <SettingsIcon className="w-6 h-6 text-white hover:bg-gray-700 rounded-full p-1 cursor-pointer transition duration-300" /> */}
      </div>
    </div>
  )
}

export default Header
