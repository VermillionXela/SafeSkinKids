import { FiMenu } from "react-icons/fi"
import { useState } from "react"

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="w-full bg-purpleMuted-500 text-white px-6 py-6 shadow-md">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-semibold whitespace-nowrap drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]">Safe Skin Kids</h1>

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
            {isMenuOpen && (
                <ul className="flex flex-col gap-4 mt-4 text-sm font-medium md:hidden">
                    <li><a href="#" className="hover:underline">Home</a></li>
                    <li><a href="#" className="hover:underline">Info for Kids</a></li>
                    <li><a href="#" className="hover:underline">Info for Parents</a></li>
                    <li><a href="#" className="hover:underline">Our Team</a></li>
                    <li><a href="#" className="hover:underline">Volunteer</a></li>
                    <li><a href="#" className="hover:underline">Contact</a></li>
                </ul>
            )}

        </nav>
    )
}
