import { FaInstagram, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export const ContactView = () => {

    return (
        <section className="w-full min-h-screen bg-[#f0e9d8] px-4 py-10 flex flex-col items-center -mt-4">
            <div className="max-w-2xl text-center mb-10"
                data-aos="fade-up"
                data-aos-duration="400">
                <h1 className="text-2xl font-semibold text-gray-700 mb-4">Contact Us</h1>
                <p className="text-base sm:text-lg leading-relaxed">
                    Have questions about the program? Want to bring Safe Skin Kids to your school or volunteer with us?
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 -mt-4 w-full max-w-3xl"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="400">
                <div className="bg-white/80 backdrop-blur-md shadow-md rounded-xl p-7 flex flex-col items-center">
                    <FaEnvelope className="text-4xl text-[#947D9E] mb-3" />
                    <h3 className="font-semibold text-xl mb-1">Email</h3>
                    <a href="mailto:safeskin@ucsf.edu" className="text-base text-center text-blue-700 hover:underline">
                        safeskin@ucsf.edu
                    </a>
                </div>

                <div className="bg-white/80 backdrop-blur-md shadow-md rounded-xl p-6 flex flex-col items-center">
                    <FaMapMarkerAlt className="text-4xl text-[#568A97] mb-3" />
                    <h3 className="font-semibold text-xl mb-1">Location</h3>
                    <p className="text-sm text-center text-gray-700">
                        UCSF School of Medicine<br />
                        San Francisco, CA
                    </p>
                </div>
            </div>

            <div className="text-center"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="400">
                <p className="text-base sm:text-lg text-gray-700 mb-6">
                    See what we’re up to and check out photos from past sessions:
                </p>
                <a
                    href="https://www.instagram.com/safeskinkids"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center bg-white/90 backdrop-blur-md w-48 h-48 rounded-full shadow-md hover:scale-105 transition-transform duration-300 hover:shadow-lg group mx-auto"
                >
                    <FaInstagram className="text-[5.2rem] text-[#947D9E] group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300" />
                    <span className="font-semibold text-sm text-[#947D9E] mt-1">@safeskinkids</span>
                </a>
            </div>
        </section>
    )
}