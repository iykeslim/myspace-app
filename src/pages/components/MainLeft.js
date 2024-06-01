// components/MainLeftSection.js
import React from "react"

const MainLeft = () => {
  return (
    <div className="w-full">
      {/* Your content for the left section */}
      <section className="h-[77px] flex place-content-center justify-between border border-gray-300 p-2 rounded-md my-2 bg-white">
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
      <section className="h-[77px] flex place-content-center justify-between border border-gray-300 p-2 rounded-md my-2 bg-white">
        <div className="flex justify-between text-gray-500">
          <div>Complete your profile</div>
          <div>x</div>
        </div>
      </section>
    </div>
  )
}

export default MainLeft
