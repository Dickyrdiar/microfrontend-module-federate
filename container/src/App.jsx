import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Auth from "./container/Auth"
import SidebarMenu from "./container/sidebarMenu"

const MFE1_Screen = React.lazy(() => import('MFE1/ComponentScreen'))
const HOME_Screen = React.lazy(() => import('Dahsboard/HomePage'))


const App = () => {
  console.log(JSON.parse(localStorage.getItem("password")), "validate");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth/>}/>
        <Route path="/dahsboard" element={<HOME_Screen/>}/>
        <Route path="/feature1" element={<MFE1_Screen/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App