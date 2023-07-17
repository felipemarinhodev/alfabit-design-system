export type InputProps = {
  label?: string;
  multiline?: boolean;
} & (
    React.InputHTMLAttributes<HTMLInputElement> |
    React.TextareaHTMLAttributes<HTMLTextAreaElement>
  )

const InputOrTextArea = ({ multiline = false, ...rest }: InputProps) => {
  return (
    <>
      {
        multiline
          ? (<textarea {...rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>} />)
          : (<input {...rest as React.InputHTMLAttributes<HTMLInputElement>} />)
      }
    </>
  )
}
const Input = ({ label, className, ...rest }: InputProps) => {
  return (
    <div className="relative">
      {label && <label className="absolute">{label}</label>}
      <InputOrTextArea
        {...rest}
        className={`
          bg-dark text-gray-primary
          disabled:bg-disabled disabled:border-2 disabled:border-disabled
          ${className}
        `}
      />
    </div>
  )
}

export default Input;
