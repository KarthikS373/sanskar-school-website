import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

import Logo from "../../../assets/image/Logo.png"
import NavbarData from "../../../data/navbar.data"
import DropDown from "../../atoms/dropdown"

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false)

  const handleNav = () => {
    setNav((prev) => !prev)
  }

  return (
    <div className="z-10 w-full bg-white text-black shadow duration-300 ease-in">
      <div className="m-auto flex max-w-[1240px] items-center justify-between p-4 text-black">
        <Link href="/">
          <h1 className="text-4xl font-bold">
            <Image src={Logo} alt={"Logo"} className="w-52" />
          </h1>
        </Link>
        <ul className="hidden sm:flex">
          {NavbarData.map((menu, index) => (
            <li key={menu.id} className="p-4">
              {menu.type === "menu" && (
                <Link
                  className="hover:text-customBlue-100 active:text-customBlue-100"
                  href={menu.slug || ""}
                >
                  {menu.option}
                </Link>
              )}
              {menu.type === "dropdown" && (
                <DropDown
                  title={menu.option}
                  titleDecoration="hover:text-customBlue-100 active:text-customBlue-100"
                  content={menu.children || []}
                />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="z-[100] block sm:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "absolute top-0 left-0 right-0 bottom-0 z-50 flex h-screen w-full items-center justify-center bg-white text-center duration-300 ease-in sm:hidden"
              : "absolute top-0 left-[-100%] right-0 bottom-0 flex h-screen w-full items-center justify-center bg-white text-center duration-300 ease-in sm:hidden"
          }
        >
          <ul>
            {NavbarData.map((menu, index) => (
              <li
                key={menu.id}
                onClick={handleNav}
                className="p-4 text-4xl text-black hover:text-gray-500"
              >
                <Link href={menu.slug || ""}>{menu.option}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
