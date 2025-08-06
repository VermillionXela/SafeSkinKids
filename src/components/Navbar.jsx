import { FiMenu } from "react-icons/fi"
import { useState } from "react"
import { NavLink } from "react-router-dom"

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const linkStyle = ({ isActive }) =>
        isActive
            ? "underline md:no-underline md:hover:underline"
            : "hover:underline"

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/infokids", label: "Info for Kids" },
        { to: "/infoparents", label: "Info for Parents" },
        { to: "/team", label: "Our Team" },
        { to: "/volunteer", label: "Volunteer" },
        { to: "/contact", label: "Contact" },
    ]

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
                    {navLinks.map(link => (
                        <li key= {link.to}>
                            <NavLink to= {link.to} className={linkStyle}>
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            {isMenuOpen && (
                <ul className="flex flex-col gap-4 mt-4 text-sm font-medium px-6 md:hidden animate-fade-in">
                    {navLinks.map(link => (
                        <li key= {link.to}>
                            <NavLink
                                to= {link.to}
                                className= {linkStyle}
                                onClick= {() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    )
}
