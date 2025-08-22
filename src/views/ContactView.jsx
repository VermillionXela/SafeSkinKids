import { useEffect } from "react"
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

export const ContactView = () => {
    useEffect(() => {
        let tries = 0
        const MAX_TRIES = 60

        const timer = setInterval(() => {
            const libReady = typeof window !== "undefined" && typeof window.renderApp === "function"
            const el = document.getElementById("b98a4573-561c-4e6c-b8cd-053789c864bb")

            if (libReady && el) {
                if (!el.dataset.inited) {
                    el.dataset.inited = "true"
                    window.renderApp({
                        containerId: "b98a4573-561c-4e6c-b8cd-053789c864bb",
                        domain: "https://app.instaplug.app/",
                        fontFamily: "Poppins, sans-serif",
                        WidgetClass: ""
                    })
                }
                clearInterval(timer)
            } else if (++tries >= MAX_TRIES) {
                clearInterval(timer)
            }
        }, 100)

        return () => clearInterval(timer)
    }, [])

    return (
        <section className="w-full px-6 py-10 flex flex-col items-center -mt-4">
            <div
                className="max-w-2xl text-center mb-10"
                data-aos="fade-up"
                data-aos-duration="200">
                <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-gray-700 mb-4">
                    Contact Us
                </h1>
                <p className="text-base sm:text-lg leading-relaxed">
                    Have questions about the program? Want to bring Safe Skin Kids to your school or volunteer with us?
                </p>
            </div>

            <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 -mt-4 w-full max-w-3xl"
                data-aos="fade-up"
                data-aos-duration="300"
            >
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
                        UCSF School of Medicine
                        <br />
                        San Francisco, CA
                    </p>
                </div>
            </div>

            <div className="text-center"
                data-aos="fade-up"
                data-aos-duration="400">
                <p className="text-base sm:text-lg text-gray-700 mb-6">
                    See what we’re up to and check out photos from past sessions:
                </p>
            </div>

            <div className="w-full max-w-5xl mx-auto px-4 bg-white/80 backdrop-blur-md shadow-md rounded-xl">
                <div
                    id="b98a4573-561c-4e6c-b8cd-053789c864bb"
                    className="block w-full"
                    style={{ minHeight: 680 }}
                />
            </div>
        </section>
    )
}


