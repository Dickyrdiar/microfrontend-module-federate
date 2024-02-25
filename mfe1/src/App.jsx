import React from "react"
import { Route, BrowserRouter, Routes} from "react-router-dom"
import SidebarNavbarMenu from "./container/SidebarNavbarMenu"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/feature1" element={<SidebarNavbarMenu/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App