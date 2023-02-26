import React from "react"

import Footer from "./footer"
import Navbar from "./navbar"
import Wrapper from "./wrapper"

const Layout = ({ children, className }: Props) => {
  return (
    <>
      <Navbar />
      <Wrapper className={className}>{children}</Wrapper>
      <Footer />
    </>
  )
}

export default Layout
