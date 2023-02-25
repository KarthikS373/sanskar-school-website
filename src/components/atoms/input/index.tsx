import React from "react"

const InputVariants = {
  primary: "",
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: keyof typeof InputVariants
  labelText?: string
  append?: React.ReactNode
  prepend?: React.ReactNode
  inputClassName?: string
}

const Input = ({
  className,
  append,
  prepend,
  labelText,
  type,
  id,
  inputClassName,
  variant = "primary",
  ...props
}: InputProps) => {
  const BASE_CLASS =
    "peer rounded-md px-4 py-2 bg-transparent flex flex-row gap-2 font-thin ring-1 ring-gray-400/50 shadow outline-none drop-shadow-sm transition-all duration-200 ease-in-out"
  const BASE_INPUT_CLASS = "ring-0 outline-0 bg-transparent grow"

  return (
    <div className={`${BASE_CLASS} ${InputVariants[variant]} ${className}`}>
      <>
        {append && append}
        <label htmlFor={id} className="sr-only">
          {labelText || "input"}
        </label>
        <input {...props} type={type} id={id} className={`${BASE_INPUT_CLASS} ${inputClassName}`} />
        {prepend && prepend}
      </>
    </div>
  )
}

export default Input
