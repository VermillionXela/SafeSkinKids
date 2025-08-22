import { useState } from "react"
import SSKTeam from "../assets/SSK-crew-lighting.jpg"

export const InfoParentsView = () => {

    const [isImageLoaded, setIsImageLoaded] = useState(false)

    return (
        <div className="flex flex-col items-center min-h-screen overflow-hidden">
            <div className="relative w-full -mt-4">
                <div
                    className={`absolute inset-0 w-full h-full bg-[#F0E9D8] transition-opacity duration-700 
                        ${isImageLoaded ? 'opacity-0' : 'opacity-100'}`}
                />
                <img
                    src={SSKTeam}
                    alt="Group of team leaders"
                    onLoad={() => setIsImageLoaded(true)}
                    className={`w-full object-cover max-h-[600px] transition-opacity duration-700 
                        ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                />

                <div className="absolute z-10 bottom-8 left-4 w-[100%] sm:left-12 md:bottom-12 md:left-12 lg:left-24 lg:bottom-14">
                    <p
                        className="text-md sm:text-md md:text-2xl lg:text-3xl text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)] pt-5 sm:pt-5 md:pt-5"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="1000"
                    >
                        An educational afterschool program on<br />
                        dermatology taught by UCSF medical students.
                    </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-b from-transparent to-[#F0E9D8] pointer-events-none" />
            </div>

            <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 text-gray-700 space-y-12">
                <section
                    data-aos="fade-up"
                    data-aos-duration="400">
                    <h1 className="whitespace-nowrap leading-tight text-2xl sm:text-2xl font-semibold mb-4 -mt-4">
                        What is Safe Skin Kids?
                    </h1>
                    <p className="leading-relaxed">
                        Safe Skin Kids is a free afterschool program that teaches children ages 8–13 about skin, hair
                        and nail health through hands-on lessons from the American Academy of Dermatology’s
                        <em> Good Skin Knowledge</em> modules. Students build confidence, learn healthy habits and see
                        the beauty in every tone and texture.
                    </p>
                    <p className="leading-relaxed mt-4">
                        We launched at Telegraph Hill Neighborhood Center and now partner with the Boys &amp; Girls Club
                        Don Fisher Clubhouse to reach more kids in our community. By celebrating diversity and creating
                        a space for belonging, we help every child feel proud in their own skin.
                    </p>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 -mt-4 items-stretch">
                    <section
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="400"
                        className="bg-white/70 rounded-2xl shadow-md p-6 sm:p-6 h-full flex flex-col"
                    >
                        <h2 className="text-xl font-semibold mb-4 text-[#947D9E] text-center">
                            What the Program Covers
                        </h2>
                        <ul className="list-disc list-inside space-y-2 flex-grow">
                            <li>Sun safety and melanin education</li>
                            <li>Common skin conditions (e.g., acne, eczema, scars)</li>
                            <li>Hair and scalp care for all textures</li>
                            <li>Nail hygiene and healthy habits</li>
                            <li>Building confidence and kindness</li>
                            <li>Celebrating differences and reducing bullying</li>
                        </ul>
                    </section>

                    <section
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="400"
                        className="bg-white/70 rounded-2xl shadow-md p-6 sm:p-6 h-full flex flex-col"
                    >
                        <h2 className="text-xl font-semibold mb-4 text-[#947D9E] text-center">
                            What Parents Can Expect
                        </h2>
                        <ul className="list-disc list-inside space-y-2 flex-grow">
                            <li>8 weekly sessions</li>
                            <li>Taught by UCSF medical students and future doctors</li>
                            <li>Held at UCSF or school/community sites</li>
                            <li>Nutritious snacks and materials provided</li>
                            <li>Interactive, inclusive, and medically accurate</li>
                            <li>Students receive a mini dermatology kit to take home</li>
                        </ul>
                    </section>
                </div>

                <section
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="600"
                    className="bg-white/70 rounded-2xl shadow-md p-6 max-w-3xl mx-auto -mt-5"
                >
                    <h2 className="text-xl font-semibold mb-4 text-[#947D9E] text-center">
                        Benefits for Your Child
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Build healthy habits for skin, hair, and nail care</li>
                        <li>Learn how common conditions like acne and eczema affect different skin tones</li>
                        <li>Gain confidence through positive conversations about appearance and self-esteem</li>
                        <li>Develop empathy and kindness toward others with visible skin conditions</li>
                        <li>Feel empowered to ask questions and take ownership of their health</li>
                        <li>Early exposure to dermatology and healthcare through engaging, hands-on lessons</li>
                        <li>Connect with caring mentors from UCSF who reflect the diversity of our community</li>
                    </ul>
                </section>
            </main>
        </div>
    )
}
