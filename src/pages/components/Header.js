import React from 'react'

const Header = () => {
  return (
    <div className="h-16 bg-blue-500 flex items-center justify-between px-4">
      {/* Left Text */}
      <div className="text-white font-bold uppercase">
        Workspace Learn Certification
      </div>

      {/* Right Text and Icons */}
      <div className="flex items-center space-x-4">
        <div className="text-white">Help</div>
        <div className="text-white">Settings</div>
        {/* Add icons for help and settings here */}
      </div>
    </div>
  )
}

export default Header