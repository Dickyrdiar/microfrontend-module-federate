import { Button } from "@material-tailwind/react"

const ButtonLogin = ({
  onClick,
  disabled
}) => {
  return (
    <div className="relative">
      {/* <button onClick={onClick}>
        this is click
      </button> */}
      <Button disabled={disabled} color="primary" onClick={onClick}>
        Login
      </Button>
    </div>
  )
}

export default ButtonLogin