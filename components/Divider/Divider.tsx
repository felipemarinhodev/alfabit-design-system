export type DividerPros = {
  width?: string;
  height?: string;
  bgColor?: 'light' | 'dark' | 'black';
  children?: React.ReactNode;
} & React.HtmlHTMLAttributes<HTMLDivElement>;

const Divider = ({ width, height, bgColor, children, ...rest }: DividerPros) => {
  return (
    <div>
      <div></div>
      {children && <div>{children}</div>}
      <div></div>
    </div>
  )
}

export default Divider;
