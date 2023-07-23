import { cva, type VariantProps } from 'class-variance-authority';

const textVariants = cva('font-normal', {
  variants: {
    variant: {
      primary: 'text-gray-primary',
      secondary: 'text-gray-secondary',
      tertiary: 'text-gray-tertiary',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-md',
      xl: 'text-xl',
      title1: 'text-txl',
      title2: 'text-tlg',
      title3: 'text-tmd',
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
})

export type TypographyProps = VariantProps<typeof textVariants> & {
  // This should be omitted because the CVA is now responsible for adding these props.
  // variant?: 'primary' | 'secondary' | 'tertiary';
  // size?: 'xs' | 'sm' | 'md' | 'xl' | 'title1' | 'title2' | 'title3';
  children: React.ReactNode;
  element?: keyof JSX.IntrinsicElements;
} & JSX.IntrinsicElements['p'];

const variantClassMap = {

};

const Typography = ({
  // This should be omitted because the CVA is now responsible for adding these props.
  // variant = 'primary',
  // size = 'md',
  children,
  element = "p",
  className,
  ...rest
}: TypographyProps) => {
  const Element = element as any;
  return (
    <Element
      className={`${textVariants(rest)} ${className}`}
      {...rest}
    >
      {children}
    </Element>
  )
}

export default Typography;
