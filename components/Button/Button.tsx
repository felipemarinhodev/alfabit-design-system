export type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
} & React.ButtonHTMLAttributes<HTMLButtonElement>

function getVariant(variant: ButtonProps['variant'], disabled: ButtonProps['disabled']) {
  let variantStyle = ''
  switch (variant) {
    case 'primary':
      variantStyle = 'bg-primary text-white'
      break;
    case 'secondary':
      variantStyle = 'bg-secondary text-white'
      break;
    case 'tertiary':
      return disabled ? 'bg-white text-disabled' : 'bg-white text-primary'
      break;
    default:
      variantStyle = 'bg-primary text-white'
      break;
  }
  return disabled ? 'bg-disabled text-disabled' : variantStyle;
}

const Button = ({
  children,
  className,
  disabled,
  variant = 'primary',
  ...props
}: ButtonProps) => {

  return (
    <button
      className={`
        rounded-md px-6 py-2xs 
        ${getVariant(variant, disabled)}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button;
