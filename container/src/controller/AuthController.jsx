import { startTransition, useState } from "react"
import { useNavigate } from "react-router-dom"
// import { useLocation } from 'react-router-dom'

const AuthController = () => {
  const [Email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useNavigate()
  const [disabled, setDisabled] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleClickLogin = async () => {
    startTransition(() => {
      setLoading(true)

      if (Email !== "") {
        localStorage.setItem("password", JSON.stringify(password))
        history("/dahsboard")
      } else {
        setDisabled(true)
      }
    })
  }

  return {
    Email, 
    password, 
    handleClickLogin, 
    setPassword,
    setEmail,
    location,
    disabled,
    loading
  }
}

export default AuthController