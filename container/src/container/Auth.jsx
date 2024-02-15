import AuthController from "../controller/AuthController"
import { Typography, Input } from "@material-tailwind/react"
import Button from "../components/Button"

const Auth = () => {
  const {
    setUsername,
    setPassword,
    password,
    username,
    handleClickLogin
  } = AuthController()

  return (
    <div className="w-full">
    <div className="flex items-center justify-center h-screen">
      <Typography variant="h5">
        this is mfe1
      </Typography>

     <div className="flex justify-around">
      <div>
        <Typography>
          username
        </Typography>

        <Input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)}/>
      </div>

      <div>
        <Typography>
          Password
        </Typography>

        <Input
         type="password" 
         value={password}
         onChange={(e) => setPassword(e.target.value)}
        />
      </div>
     </div>

      {""}
    {location.pathname === "/" && (
      <Button
        onClick={handleClickLogin}
      />
    )}
    </div>
  </div>
  )
}

export default Auth