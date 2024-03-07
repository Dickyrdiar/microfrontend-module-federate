import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SidebarMenu from "../../container/src/container/sidebarMenu";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dahsboard" element={<SidebarMenu/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
