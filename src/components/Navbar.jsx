import { FiMenu } from "react-icons/fi"
import { useState } from "react"

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

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
                    <li><a href="#" className="hover:underline">Home</a></li>
                    <li><a href="#" className="hover:underline">Info for Kids</a></li>
                    <li><a href="#" className="hover:underline">Info for Parents</a></li>
                    <li><a href="#" className="hover:underline">Our Team</a></li>
                    <li><a href="#" className="hover:underline">Volunteer</a></li>
                    <li><a href="#" className="hover:underline">Contact</a></li>
                </ul>
            </div>

            <ul
                className={`transition-all duration-300 ease-in-out transform origin-top md:hidden ${isMenuOpen
                        ? 'opacity-100 scale-100 max-h-96 py-4'
                        : 'opacity-0 scale-95 max-h-0 overflow-hidden'
                    } flex flex-col gap-4 mt-4 text-sm font-medium px-6`}
            >
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">Info for Kids</a></li>
                <li><a href="#" className="hover:underline">Info for Parents</a></li>
                <li><a href="#" className="hover:underline">Our Team</a></li>
                <li><a href="#" className="hover:underline">Volunteer</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
        </nav>
    )
}
