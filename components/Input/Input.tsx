export type InputProps = {
  label?: string;
  multiline?: boolean;
} & (
    React.InputHTMLAttributes<HTMLInputElement> |
    React.TextareaHTMLAttributes<HTMLTextAreaElement>
  )

const Input = ({ label, multiline = false, ...rest }: InputProps) => {
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

export default Input;
