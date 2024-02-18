import AuthController from "../controller/AuthController"
import { Typography, Input, Card } from "@material-tailwind/react"
import EmailInput from "../components/EmailInput"
import ButtonLogin from "../components/Button"

const Auth = () => {
  const {
    setEmail,
    setPassword,
    password,
    Email,
    handleClickLogin
  } = AuthController()

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full bg-white md:p-10 p-4 flex flex-col justify-between">
        <div className="flex justify-center items-center md:min-h-[700px] min-h-[500px]">
          <Card className="w-96 max-w-full md:min-w-sm shadow-none md:shadow-md md:border-t-2 md:border-gray-100 rounded-xl md:p-4xl p-xs mt-14">
            <div className="p-6">
              <Typography
                type="h2"
                className="text-xl font-bold text-neutral-900 mb-xs"
              >
                Wellcome 👋
              </Typography>

              <Typography
                  type="small"
                  className="text-sm font-normal text-neutral-500 mb-4xl mt-4"
              >
                Please access your account
              </Typography>
            </div>

            <div className="mt-[-5] w-[10px] p-6">
              <EmailInput email={Email} setEmail={setEmail}/>
            </div>

            <div className="mb-sm p-6">
              <label
                htmlFor="password"
                className="text-sm font-medium text-neutral-900"
              >
                Kata Sandi
              </label>

              <Input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mt-[-5] p-6 w-full">
              <ButtonLogin 
                onClick={handleClickLogin}
                className="w-full mt-[-12px]"
              />
            </div>
          </Card>
        </div>
      </div>

      <div
        className="w-[476px] max-w-[476px] min-h-[850px] h-auto bg-cover bg-no-repeat bg-center hidden lg:flex shadow-none"
        style={{
          background: `linear-gradient(152deg, #FCA631 3.24%, #F5BE01 39.52%, #FFDD69 88.67%)`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="ml-7xl mr-7xl mt-[200px]">
          <div className="w-[348px]">
            <div className="flex justify-start mt-3xl">
              <img
                src='../assets/img/bg-sign-in.avif'
                alt="BroilerX"
                className="w-[501.12px] h-full relative"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth