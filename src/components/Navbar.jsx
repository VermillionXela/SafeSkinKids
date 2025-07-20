
export const Navbar = () => {

    return (
        <nav className="w-full bg-purpleMuted-500 text-white px-6 py-6 shadow-md">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Safe Skin Kids</h1>
                
                <ul className="flex gap-6 text-sm font-medium">
                    <li><a href="#" className="hover:underline">Home</a></li>
                    <li><a href="#" className="hover:underline">Info for Kids</a></li>
                    <li><a href="#" className="hover:underline">Info for Parents</a></li>
                    <li><a href="#" className="hover:underline">Our Team</a></li>
                    <li><a href="#" className="hover:underline">Volunteer</a></li>
                    <li><a href="#" className="hover:underline">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}
