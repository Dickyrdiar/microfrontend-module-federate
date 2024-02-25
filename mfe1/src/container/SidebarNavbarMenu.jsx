import NavbarSticky from "../Components/Navbar"
import { SidebarWithLogo } from "../Components/Sidebbar"

const SidebarNavbarMenu = () => {
  return (
    <div className="flex min-h-screen overflow-hidden relative">
      <div className="w-60 bg-gray-100 border-r">
        <SidebarWithLogo/>
      </div>

      <div className="flex flex-col flex-1 w-full overflow-hidden">
        <NavbarSticky/>
      </div>
    </div>
  )
}

export default SidebarNavbarMenu