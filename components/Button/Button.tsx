export type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`
        bg-primary
        rounded-md
        px-6
        py-2xs
        text-sm
        text-white
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button;
