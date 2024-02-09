import React, { useEffect } from "react"
import { Route, BrowserRouter as Router, RouterProvider, Routes, createBrowserRouter, useNavigate } from "react-router-dom"

const MFE1_Screen = React.lazy(() => import('MFE1/ComponentScreen'))
const HOME_Screen = React.lazy(() => import('Dahsboard/HomePage'))

const router = createBrowserRouter([
  {
    path: "/",
    element: <MFE1_Screen/>
  },

  {
    path: '/Dashboard',
    element: <HOME_Screen/>
  }
])

const App = () => {
  console.log(JSON.parse(localStorage.getItem("password")), "validate");

  return (
    <RouterProvider router={router} />
  )
}

export default App