import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 ring-offset-transparent shadow-[0_10px_30px_-15px_rgba(15,23,42,0.5)]',
  {
    variants: {
      variant: {
        default: 'bg-[color:var(--text-primary)] text-white hover:bg-black',
        outline: 'border border-[color:var(--text-primary)] text-[color:var(--text-primary)] hover:bg-[color:var(--text-primary)] hover:text-white',
        ghost: 'bg-transparent text-[color:var(--text-primary)] hover:bg-white/20',
      },
      size: {
        default: 'h-10 px-6 py-2',
        sm: 'h-9 px-4 text-xs',
        lg: 'h-12 px-8 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
})
Button.displayName = 'Button'

export { Button, buttonVariants }
