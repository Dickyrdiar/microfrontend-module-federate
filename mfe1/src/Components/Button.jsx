const Button = ({
  onClick
}) => {
  return (
    <div className="relative">
      <button onClick={onClick}>
        this is click
      </button>
    </div>
  )
}

export default Button