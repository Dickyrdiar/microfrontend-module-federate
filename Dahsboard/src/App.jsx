import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SidebarMenu from "../../container/src/container/sidebarMenu";
import Wrapper from "./global/Wrapper";
import Dashboard from "./container/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Wrapper/>}>
          <Route path="/" index element={<Dashboard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
