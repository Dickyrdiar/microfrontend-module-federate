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
    // <div className="w-full">
    //   <div className="flex items-center justify-center h-screen">
    //     <div>
    //       <div>
    //         <Typography>
    //           username
    //         </Typography>

    //         <Input 
    //           type="text" 
    //           value={username} 
    //           onChange={(e) => setUsername(e.target.value)}/>
    //       </div>

    //       <div>
    //         <Typography>
    //           Password
    //         </Typography>

    //         <Input
    //         type="password" 
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         />
    //       </div>

    //       <div className="mt-4">
    //         {""}
    //         {location.pathname === "/" && (
    //           <Button
    //             onClick={handleClickLogin}
    //           />
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="w-full h-screen flex flex-row justify-between">
      <div className="w-[3px] bg-green-200 p-4">
        this is form
      </div>

      <div className="w-[20%] p-4">
        this is image
      </div>
    </div>
  )
}

export default Auth