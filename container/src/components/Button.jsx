import { Button } from "@material-tailwind/react"

const ButtonLogin = ({
  onClick,
  disabled,
  className
}) => {
  return (
    <div className="relative">
      <Button className={className} disabled={disabled} color="primary" onClick={onClick}>
        Login
      </Button>
    </div>
  )
}

export default ButtonLogin