export type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  const generalStyle = 'rounded-md px-6 py-2xs';
  const Btn = (classes: string) => {
    return (
      <button
        className={`${generalStyle} ${classes} ${className}`}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    )
  }
  return Btn(disabled
    ? 'bg-bg-disabled text-text-disabled'
    : 'bg-primary text-white')
}

export default Button;
