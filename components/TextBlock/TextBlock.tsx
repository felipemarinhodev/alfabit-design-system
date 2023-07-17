export type TextBlockProps = {
  textBlock: string;
  title: string;
  className?: string
}

const TextBlock = ({ textBlock, title, className }: TextBlockProps) => {

  return (
    <div className={`
      flex flex-col justify-center items-start py-6 pr-5 pl-8 gap-3 bg-dark rounded-md
      ${className}`}
    >
      <h3 className="text-gray-primary text-xl font-extrabold">
        {title}
      </h3>
      <p className="text-gray-primary font-normal text-md">
        {textBlock}
      </p>
    </div>
  )
}

export default TextBlock;
