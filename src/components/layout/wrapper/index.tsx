import React from "react"

const Wrapper = ({ className, children }: Props) => {
  const BASE_CLASS = `px-2 md:px-16 py-2 md:py-8`

  return <div className={`${BASE_CLASS} ${className}`}>{children}</div>
}

export default Wrapper
