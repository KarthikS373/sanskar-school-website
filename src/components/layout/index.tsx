import React from "react"

import Navbar from "./navbar"
import Wrapper from "./wrapper"

const Layout = ({ children, className }: Props) => {
  return (
    <>
      <Navbar />
      <Wrapper className={className}>{children}</Wrapper>
    </>
  )
}

export default Layout
