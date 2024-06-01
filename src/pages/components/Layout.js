// components/Layout.js
import React from "react"
import Sidenav from "./Sidenav.js"
import Header from "./Header.js"

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Side Nav */}
      <Sidenav/>

      {/* Main Content */}
      <div className="flex flex-col flex-grow">
        {/* Header */}
      <Header/>

        {/* Main Content Area */}
        <div className="flex-grow bg-gray-200 p-8">{children}</div>
      </div>
    </div>
  )
}

export default Layout
