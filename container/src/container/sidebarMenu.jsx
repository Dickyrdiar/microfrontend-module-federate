import { Typography } from "@material-tailwind/react"
import {SidebarWithLogo } from "../components/Sidebbar"
import { ComplexNavbar, NavbarSimple } from "../components/Navbar"

const SidebarMenu = () => {
  return (
    // <SidebarWithLogo/>
    <div className="flex h-screen">
      <div className="w-60 bg-gray-100 border-r">
        <SidebarWithLogo/>
      </div>
      
      <NavbarSimple/>
    </div>
  )
}

export default SidebarMenu