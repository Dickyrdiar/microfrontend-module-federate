import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import { useLocation } from 'react-router-dom'

const AuthController = () => {
  const [Email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useNavigate()
  const [disabled, setDisabled] = useState(false)

  const handleClickLogin = () => {
    if (Email !== "") {
      localStorage.setItem("password", JSON.stringify(password))
      history("/dashboard")
    } else {
      setDisabled(true)
    }
  }

  return {
    Email, 
    password, 
    handleClickLogin, 
    setPassword,
    setEmail,
    location,
    disabled
  }
}

export default AuthController