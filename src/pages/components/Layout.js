import React from "react"
import Sidenav from "./Sidenav.js"
import Header from "./Header.js"
import MainLeft from "./MainLeft.js"
import MainRight from "./MainRight.js"

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Side Nav */}
      <Sidenav />

      {/* Main Content */}
      <div className="flex flex-col flex-grow">
        {/* Header */}
        <Header />

        {/* Main Content Area */}
        <div className="flex-grow bg-gray-200 px-6">
          <div className="my-4">
            <h1 className="text-lg text-[#1A1A1A]">SOO Agency</h1>
            <span className="text-[#87868A] text-sm">
              Tuesday, 16th May 2024
            </span>
          </div>
          <div className="flex w-full h-full">
            {/* Left Section */}
            <MainLeft />

            {/* Right Section */}
            <MainRight />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
