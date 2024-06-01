import React from "react"
import { ArrowRight } from "react-feather"

const MainRight = () => {
  return (
    <div className="w-276 bg-gray-100 py-2 grid gap-y-2 my-4">
      <div className="bg-white rounded-md p-2 border border-gray-200">
        <div className="flex justify-between items-center">
          <h1 className="text-black font-semibold text-lg">Department</h1>
          <a className="text-gray-400 text-sm" href="#">
            View all
          </a>
        </div>
        <div className="flex justify-between items-center border-b border-gray-300">
          <h1 className="text-black text-lg font-medium">Finance</h1>
          <img
            className="w-14 h-14 object-contain"
            src="/frame.png"
            alt="Jite Img"
          />
        </div>
        <div className="flex justify-between items-center border-b border-gray-300">
          <h1 className="text-black text-lg font-medium">Audit</h1>
          <img
            className="w-14 h-14 object-contain"
            src="/frame.png"
            alt="Jite Img"
          />
        </div>
      </div>
      <div className="bg-white rounded-md p-2 border border-gray-200">
        <div className="flex justify-between items-center">
          <h1 className="text-black font-semibold text-sm">Training for you</h1>
          <a className="text-gray-400 text-sm" href="#">
            Explore
          </a>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <img
              className="w-13 h-13 object-contain"
              src="/frame3.png"
              alt="Jite Img"
            />
            <span className="ml-2 py-2 flex items-center justify-between">
              <div>
                <h1 className="text-sm font-normal text-green-600">Free</h1>
                <p className="text-black text-[12px] font-thin leading-tight">
                  Enterprise Business training for large scale businesses
                </p>
              </div>
              <span className="text-gray-500">&#62;</span>
            </span>
          </div>
          <div className="flex justify-between items-center">
            <img
              className="w-13 h-13 object-contain"
              src="/frame3.png"
              alt="Jite Img"
            />
            <span className="ml-2 py-2 flex items-center justify-between">
              <div>
                <h1 className="text-sm font-normal text-green-600">Free</h1>
                <p className="text-black text-[12px] font-thin leading-tight">
                  Enterprise Business training for large scale businesses
                </p>
              </div>
              <span className="text-gray-500">&#62;</span>
            </span>
          </div>
          <div className="flex justify-between items-center">
            <img
              className="w-13 h-13 object-contain"
              src="/frame3.png"
              alt="Jite Img"
            />
            <span className="ml-2 py-2 flex items-center justify-between">
              <div>
                <h1 className="text-sm font-normal text-green-600">Free</h1>
                <p className="text-black text-[12px] font-thin leading-tight">
                  Enterprise Business training for large scale businesses
                </p>
              </div>
              <span className="text-gray-500">&#62;</span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <div className="flex bg-white rounded-md border border-gray-200 p-2">
          <img
            className="w-12 h-12 object-contain"
            src="/frame4.png"
            alt="Jite Img"
          />
          <div className="flex flex-col ml-2 space-y-2">
            <h1 className="text-gray-800 text-[12px] font-bold">
              Run Your Promotions
            </h1>
            <p className="text-gray-800 text-[12px] tracking-tight font-medium">
              Share the benefits of MS Space! Invite friends to join our
              community and grow together
            </p>
            <span className="text-[12px] text-gray-800 font-medium">
              Run Promotion
            </span>
          </div>
        </div>
        <div className="flex bg-white rounded-md border border-gray-200 p-2">
          <img
            className="w-12 h-12 object-contain"
            src="/frame5.png"
            alt="Jite Img"
          />
          <div className="flex flex-col ml-2 space-y-2">
            <h1 className="text-gray-800 text-[12px] font-bold">
              Run Your Promotions
            </h1>
            <p className="text-gray-800 text-[12px] tracking-tight font-medium">
              Share the benefits of MS Space! Invite friends to join our
              community and grow together
            </p>
            <span className="text-[12px] text-gray-800 font-medium">
              Run Promotion
            </span>
          </div>
        </div>
        <div className="flex bg-white rounded-md border border-gray-200 p-2">
          <img
            className="w-12 h-12 object-contain"
            src="/frame6.png"
            alt="Jite Img"
          />
          <div className="flex flex-col ml-2 space-y-2">
            <h1 className="text-gray-800 text-[12px] font-bold">
              Run Your Promotions
            </h1>
            <p className="text-gray-800 text-[12px] tracking-tight font-medium">
              Share the benefits of MS Space! Invite friends to join our
              community and grow together
            </p>
            <span className="text-[12px] text-gray-800 font-medium">
              Run Promotion
            </span>
          </div>
        </div>
        <div className="flex bg-white rounded-md border border-gray-200 p-2">
          <img
            className="w-12 h-12 object-contain"
            src="/frame6.png"
            alt="Jite Img"
          />
          <div className="flex flex-col ml-2 space-y-2">
            <h1 className="text-gray-800 text-[12px] font-bold">
              Run Your Promotions
            </h1>
            <p className="text-gray-800 text-[12px] tracking-tight font-medium">
              Share the benefits of MS Space! Invite friends to join our
              community and grow together
            </p>
            <span className="text-[12px] text-gray-800 font-medium">
              Run Promotion
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainRight
