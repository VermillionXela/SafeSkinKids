import { useState } from "react"
import SSKKidsLaughing from "../assets/SSK-kidslaughing.jpg"

export const InfoParentsView = () => {

    const [isImageLoaded, setIsImageLoaded] = useState(false)

    return (
        <div className="flex flex-col items-center bg-[#F0E9D8] min-h-screen overflow-hidden">
            <div className="relative w-full -mt-4">
                <div
                    className={`absolute inset-0 w-full h-full bg-[#F0E9D8] transition-opacity duration-700 
                        ${isImageLoaded ? 'opacity-0' : 'opacity-100'}`}
                />
                <img
                    src={SSKKidsLaughing}
                    alt="Group of smiling kids outdoors"
                    onLoad={() => setIsImageLoaded(true)}
                    className={`w-full object-cover max-h-[600px] transition-opacity duration-700 
                        ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                />

                <div className="absolute top-4 left-8 w-[85%] sm:left-20 sm:w-[75%] md:left-24 md:w-[65%] md:max-w-2xl">
                    <p
                        className="text-md sm:text-xl md:text-3xl lg:text-4xl text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)] pt-5 sm:pt-5 md:pt-5"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="1000"
                    >
                        An educational afterschool program on dermatology, diversity,<br />
                        and self-esteem.
                    </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-b from-transparent to-[#F0E9D8] pointer-events-none" />
            </div>

            <main className="w-full max-w-[75%] px-4 py-10 text-gray-800 space-y-16">
                <section
                    data-aos="fade-up"
                    data-aos-duration="400">
                    <h1 className="text-center text-3xl sm:text-3xl font-semibold mb-4 -mt-4 text-gray-700">
                        What is Safe Skin Kids?
                    </h1>
                    <p className="leading-relaxed">
                        Safe Skin Kids is a free, UCSF medical
                        student-led afterschool program that teaches children ages 8 to 13
                        about skin, hair, and nail health. Using hands-on activities and
                        inclusive materials, we help kids feel confident in their appearance,
                        learn healthy habits, and explore the basics of dermatology in a fun
                        and age-appropriate way.
                    </p>
                </section>

                <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0 -mt-8 justify-center items-start">
                    <section
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="400"
                        className="bg-white/70 rounded-2xl shadow-md p-6 w-full lg:w-1/2"
                    >
                        <h2 className="text-xl font-semibold mb-4 text-[#947D9E] text-center">
                            What the Program Covers
                        </h2>
                        <ul className="list-disc list-inside space-y-2">
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
                        className="bg-white/70 rounded-2xl shadow-md p-6 w-full lg:w-1/2"
                    >
                        <h2 className="text-xl font-semibold mb-4 text-[#947D9E] text-center">
                            What Parents Can Expect
                        </h2>
                        <ul className="list-disc list-inside space-y-2">
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
                    className="bg-white/70 rounded-2xl shadow-md p-6 max-w-3xl mx-auto -mt-9"
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
