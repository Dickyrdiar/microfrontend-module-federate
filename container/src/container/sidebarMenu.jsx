import { Typography } from "@material-tailwind/react"
import {SidebarWithLogo } from "../components/Sidebbar"
import NavbarSticky, { ComplexNavbar, NavbarSimple } from "../components/Navbar"

const SidebarMenu = () => {
  return (
    // <SidebarWithLogo/>
    <div className="flex min-h-screen overflow-hidden relative">
      <div className="w-60 bg-gray-100 border-r">
        <SidebarWithLogo/>
      </div>

      <div className="flex flex-col flex-1 overflow-hidden">
        <NavbarSticky/>
      </div>
    </div>
  )
}

export default SidebarMenu