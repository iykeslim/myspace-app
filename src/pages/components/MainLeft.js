// components/MainLeftSection.js
import React from "react"

const MainLeft = () => {
  return (
    <div className="w-full">
      {/* Your content for the left section */}
      <section className="max-h-[77px] flex place-content-center justify-between border border-gray-300 p-2 rounded-md my-2 bg-white">
        <div>
          <h1 className="text-[#1A1A1A]">Are you enjoying MS Space?</h1>
          <span className="text-[#5F5E63] text-sm">It only takes 1 minute</span>
        </div>
        <div className="space-x-2">
          <span className="bg-[#1C2458] rounded-md p-1 inline-flex">
            Learn a review
          </span>
          <span className="rounded-md p-1 inline-flex text-[#1C2458]">
            Maybe later
          </span>
          <span className="rounded-md p-1 inline-flex text-[#1C2458]">
            Don't ask me again
          </span>
        </div>
      </section>
      <section className="flex flex-col justify-between h-[116px] border border-gray-300 p-2 rounded-md my-2 bg-white">
        <div>
          <div className="flex justify-between text-gray-500 b">
            <div>Complete your profile</div>
            <div>x</div>
          </div>
          <div className="flex space-x-4 justify-left text-gray-400 text-sm mt-2 underline cursor-pointer">
            <span>Add your skill</span>
            <span>Add your certificate</span>
            <span>Add your experience</span>
          </div>
        </div>

        <span className="flex justify-end text-gray-400 text-sm">
          complete your profile
        </span>
      </section>
      <section className="grid grid-cols-2">
        <div className="col-span-1 p-1">
          <h1>recent activity</h1>
        
        </div>
        <div className="col-span-1 p-1"></div>
      </section>
    </div>
  )
}

export default MainLeft
