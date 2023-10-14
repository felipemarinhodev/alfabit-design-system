import classNames from "classnames";

export type BoxProps = {
  children: React.ReactNode;
  border?: boolean;
  rounded?: boolean;
  filledBackground?: boolean;
  type?: 'primary' | 'secondary' | 'dark' | 'alert' | 'success' | 'error';
} & React.HtmlHTMLAttributes<HTMLDivElement>;

const boxClassMap = {
  primary: 'bg-primary',
  secondary: 'bg-tertiary',
  dark: 'bg-dark',
  alert: 'bg-blue-100 text-yellow-100',
  success: 'bg-green-100 text-green-100',
  error: 'bg-error-100 text-error-100',
}

const Box = ({
  children,
  border = false,
  rounded = false,
  filledBackground = false,
  type = 'primary',
  className,
  ...rest
}: BoxProps) => {

  const classes = classNames({
    "rounded-md": rounded,
    "border border-gray-100": border,
    "bg-dark": filledBackground,
    [boxClassMap[type]]: type
  }, className)

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}

export default Box;
