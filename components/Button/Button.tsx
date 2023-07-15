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
        rounded-[8px]
        px-[32px]
        py-[12px]
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
