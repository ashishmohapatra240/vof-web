interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

const Button = ({ variant = 'primary', children, className, ...props }: ButtonProps) => {
  const baseStyles = 'px-6 py-2 font-medium transition-all duration-300'
  const variants = {
    primary: 'bg-black text-white hover:bg-gray-800',
    secondary: 'bg-yellow-400 text-black hover:bg-yellow-500',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button 