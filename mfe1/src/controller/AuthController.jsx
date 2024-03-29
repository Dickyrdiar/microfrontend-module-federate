import { useState } from "react"
// import { useLocation } from 'react-router-dom'

const AuthController = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  // const location = useLocation()

  const handleClickLogin = () => {
    localStorage.setItem("password", JSON.stringify(password))
  }

  return {
    username, 
    password, 
    handleClickLogin, 
    setPassword,
    setUsername,
    location
  }
}

export default AuthController