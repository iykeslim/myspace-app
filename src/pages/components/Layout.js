import React from "react"
import Sidenav from "./Sidenav.js"
import Header from "./Header.js"
import MainLeft from "./MainLeft.js"
import MainRight from "./MainRight.js"

const Layout = ({ children }) => {
  return (
    <>
      <div className="grid grid-cols-12 min-h-screen overflow-y-auto overflowx-x-hidden">
        <div className="col-span-12 lg:col-span-2 hidden lg:grid p-0 m-0 fixed-sidebar">
          <Sidenav />
        </div>

        <div className="col-span-12 w-[100%] lg:col-span-10 lg:ml-[calc(100%/12*2.4)] grid">
          <Header />

          <main className="grid grid-cols-12 gap-x-0 lg:gap-x-5 2xl:gap-x-6 px-5 2xl:px-6 bg-slate-100 mt-16">
            <div className="col-span-12 lg:col-span-9">
              <MainLeft />
            </div>

            <div className="col-span-12 lg:col-span-3">
              <MainRight />
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default Layout
