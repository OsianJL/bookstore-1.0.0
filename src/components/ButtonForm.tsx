import cn from 'clsx';
import { HTMLAttributes } from 'react';


type ButtonFormProps = {
disabled?: boolean; 
children: React.ReactNode;
className?: string; 
} & HTMLAttributes<HTMLButtonElement>



function ButtonForm(props: ButtonFormProps) {
    const {children, disabled, className, ...rest} = props

    const defaultClasses = "rounded bg-green-300 py-1 w-max px-2 mx-auto"
    const classes = cn(defaultClasses, className)

  return (
    <>
      <button disabled={disabled} className={classes} {...rest}>{children}</button>
    </>
  )
}

export default ButtonForm
