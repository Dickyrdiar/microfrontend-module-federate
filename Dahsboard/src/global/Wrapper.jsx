import React from "react"
import { Outlet } from "react-router-dom"
import { SidebarWithLogo } from "../components/Sidebbar"
import NavbarSticky from "../components/Navbar"

const Wrapper = () => {
  return (
    <div className="flex min-h-screen overflow-hidden relative">
      <div className="w-60 bg-gray-100 border-r">
        <SidebarWithLogo/>
      </div>

      <div className="flex flex-col flex-1 overflow-hidden">
        <NavbarSticky/>
        <div className="flex flex-col p-3 static">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Wrapper