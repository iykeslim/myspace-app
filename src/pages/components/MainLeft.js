// components/MainLeftSection.js
import React from "react"
import TableComponent from "./TableComponent.js"

const MainLeft = () => {
  return (
    <div className="w-full">
      {/* Your content for the left section */}
      <div className="my-4 justify-center items-center">
        <h1 className="text-lg text-[#1A1A1A] content-center">SOO Agency</h1>

        <span className="text-[#87868A] text-sm">Tuesday, 16th May 2024</span>
      </div>
      <section className="max-h-[77px] flex place-content-center justify-between border border-gray-300 p-2 rounded-md my-2 bg-white">
        <div>
          <h1 className="text-[#1A1A1A] font-semibold">Are you enjoying MS Space?</h1>
          <span className="text-[#5F5E63] text-sm">It only takes 1 minute</span>
        </div>
        <div className="space-x-2">
          <span className="bg-[#1C2458] rounded-md p-1 inline-flex content-center">
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
      <section className="grid grid-cols-2 gap-2">
        <div className="col-span-1 p-1 bg-slate-200 border border-gray-300 rounded-md">
          <div className="flex flex-col  p-1">
            <div className="flex justify-between">
              <h1 className="text-gray-800 font-semibold">Recent activity</h1>
              <h3 className="text-gray-400">View all</h3>
            </div>
            <div className="flex justify-between items-center text-gray-400 p-4">
              <div className="flex flex-col">
                <h1>Audit</h1>
                <h4 className="text-sm">Cyz Enterprise</h4>
              </div>
              <div className="text-sm">
                <h4>8hr ago</h4>
              </div>
            </div>
            <span className="border-b border-gray-300"></span>
            <div className="flex justify-between items-center text-gray-400 p-4">
              <div className="flex flex-col">
                <h1>Audit</h1>
                <h4 className="text-sm">Cyz Enterprise</h4>
              </div>
              <div className="text-sm">
                <h4>8hr ago</h4>
              </div>
            </div>
            <span className="border-b border-gray-300"></span>
            <div className="flex justify-between items-center text-gray-400 p-4">
              <div className="flex flex-col">
                <h1>Audit</h1>
                <h4 className="text-sm">Cyz Enterprise</h4>
              </div>
              <div className="text-sm">
                <h4>8hr ago</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 p-1  bg-slate-100 border border-gray-300 rounded-md">
          <div className="col-span-1 p-1">
            <div className="flex flex-col  p-1">
              <div className="flex justify-between">
                <h1 className="text-gray-800 font-semibold">Recent activity</h1>
                <a href="#" className="text-gray-400">
                  View all
                </a>
              </div>
              <div className="flex justify-between items-center text-gray-400 p-4">
                <div className="flex flex-col">
                  <h1>Audit</h1>
                  <h4 className="text-sm">Cyz Enterprise</h4>
                </div>
                <div className="text-sm">
                  <h4>8hr ago</h4>
                </div>
              </div>
              <span className="border-b border-gray-300"></span>
              <div className="flex justify-between items-center text-gray-400 p-4">
                <div className="flex flex-col">
                  <h1>Audit</h1>
                  <h4 className="text-sm">Cyz Enterprise</h4>
                </div>
                <div className="text-sm">
                  <h4>8hr ago</h4>
                </div>
              </div>
              <span className="border-b border-gray-300"></span>
              <div className="flex justify-between items-center text-gray-400 p-4">
                <div className="flex flex-col">
                  <h1>Audit</h1>
                  <h4 className="text-sm">Cyz Enterprise</h4>
                </div>
                <div className="text-sm">
                  <h4>8hr ago</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <TableComponent/>
      </section>
    </div>
  )
}

export default MainLeft
