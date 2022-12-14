import {Link} from "react-router-dom"
import logo from "../assets/logo.png"
import {AiOutlineSearch, AiOutlineShoppingCart} from "react-icons/ai"
import {FiSun} from "react-icons/fi" 
import {BsFillMoonFill} from "react-icons/bs"
import { useState } from "react"
import { useTheme } from "next-themes"

function Header() {
    const { theme, setTheme } = useTheme();
    return (
        <div className="flex items-center justify-between mx-10">
        {/* left */}
        <div>
            <img src={logo} alt="" className="object-contain h-24 w-48"/>
        </div>
        {/* right */}  
        {/* desktop menu */}
        <div className=" items-center space-x-10 hidden md:flex text-xl">
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Products">Products</Link>
            <AiOutlineSearch className="w-6" />
            {/* dark mode toggle */}
            {theme === "dark" ? (
            <BsFillMoonFill
                className="w-7 cursor-pointer "
                onClick={() => setTheme("light")}
            />
            ) : (
            <FiSun
                className="w-7 cursor-pointer"
                onClick={() => setTheme("dark")}
            />
            )}
            <AiOutlineShoppingCart className="w-7 cursor-pointer" />
            </div>
        </div>
      )
}

export default Header