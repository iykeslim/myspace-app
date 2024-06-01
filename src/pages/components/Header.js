import React from "react"


const Header = () => {
  return (
    <div className="h-16 w-[calc(100vw/12*9.865)] bg-[#FFFFFF]  flex items-center justify-between px-4 md:fixed">
      {/* Left Text */}
      <div className="flex items-center space-x-4 text-sm">
        <a
          href="/workspace"
          className="text-white font-semibold uppercase bg-gray-300 rounded-full px-4 py-1 border border-gray-400"
          style={{ color: "#2E303B", textDecoration: "none" }}
        >
          Workspace
        </a>

        <a
          href="/learn"
          className="text-white font-semibold uppercase hidden sm:block"
          style={{ color: "#2E303B" }}
        >
          Learn
        </a>

        <a
          href="/certification"
          className="text-white font-semibold uppercase"
          style={{ color: "#2E303B" }}
        >
          Certification
        </a>
      </div>

      {/* Right Text and Icons */}
      <div className="flex items-center space-x-4">
        <div className="flex">
          <div className="text-white  items-center mr-4 cursor-pointer hidden sm:flex ">
            <span className="mr-1" role="img" aria-label="Help Icon">
              ℹ️
            </span>
            <div style={{ color: "#2E303B" }}>Help</div>
          </div>
          <div className="text-white flex items-center cursor-pointer">
            <span className="mr-1" role="img" aria-label="Settings Icon">
              ⚙️
            </span>
            <div style={{ color: "#2E303B" }}>Settings</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
