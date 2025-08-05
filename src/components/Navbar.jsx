import { FiMenu } from "react-icons/fi"
import { useState } from "react"
import { NavLink } from "react-router-dom"

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const linkStyle = ({ isActive }) =>
        isActive
            ? "underline"
            : "hover:underline focus:underline active:underline"

    return (
        <nav className="w-full bg-[#947D9E] text-white px-6 py-3 md:py-6 lg:py-7 shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <h1 className="text-2xl font-semibold whitespace-nowrap drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]">
                    Safe Skin Kids
                </h1>

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden"
                    aria-label="Toggle menu"
                >
                    <FiMenu className="w-6 h-6" />
                </button>

                <ul className="hidden md:flex gap-6 text-sm font-medium">
                    <li><NavLink to="/" className={linkStyle}>Home</NavLink></li>
                    <li><NavLink to="/infokids" className={linkStyle}>Info for Kids</NavLink></li>
                    <li><NavLink to="#" className={linkStyle}>Info for Parents</NavLink></li>
                    <li><NavLink to="/team" className={linkStyle}>Our Team</NavLink></li>
                    <li><NavLink to="#" className={linkStyle}>Volunteer</NavLink></li>
                    <li><NavLink to="/contact" className={linkStyle}>Contact</NavLink></li>
                </ul>
            </div>

            {isMenuOpen && (
                <ul className="flex flex-col gap-4 mt-4 text-sm font-medium px-6 md:hidden animate-fade-in">
                    <li><NavLink to="/" className={linkStyle}>Home</NavLink></li>
                    <li><NavLink to="/infokids" className={linkStyle}>Info for Kids</NavLink></li>
                    <li><NavLink to="#" className={linkStyle}>Info for Parents</NavLink></li>
                    <li><NavLink to="/team" className={linkStyle}>Our Team</NavLink></li>
                    <li><NavLink to="#" className={linkStyle}>Volunteer</NavLink></li>
                    <li><NavLink to="/contact" className={linkStyle}>Contact</NavLink></li>
                </ul>
            )}
        </nav>
    )
}
