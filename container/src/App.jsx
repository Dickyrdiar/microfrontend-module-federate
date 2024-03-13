import React from "react"
import {Routes, Route} from "react-router-dom"
import Auth from "./container/Auth"

const MFE1_Screen = React.lazy(() => import('MFE1/ComponentScreen'))
const HOME_Screen = React.lazy(() => import('Dahsboard/HomePage'))


const App = () => {
  console.log(JSON.parse(localStorage.getItem("password")), "validate");

  return (
    <Routes>
      <Route path="/" element={<Auth/>}/>
      <Route path="/dahsboard" element={<HOME_Screen/>}/>
      <Route path="/feature1" element={<MFE1_Screen/>}/>
    </Routes>
  )
}

export default App