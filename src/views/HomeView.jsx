import React from "react"
import SSKHome from "../assets/SSK-home.jpg"

export const HomeView = () => {

    return (
        <div className="flex flex-col items-center bg-[#F0E9D8]">
            <div className="relative w-full -mt-4">
                <img
                    src={SSKHome}
                    alt="Group of kids"
                    className="w-full object-cover max-h-[500px] sm:max-h-[550px] md:max-h-[600px]"
                />
                <div className="absolute top-5 left-8 w-[85%] sm:left-20 sm:w-[75%] md:left-24 md:w-[65%] md:max-w-2xl">

                    <h1
                        className="text-lg sm:text-4xl md:text-5xl mt-3 font-bold leading-tight text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        Empowering kids to <br className="block sm:hidden" />
                        love the skin they’re in.
                    </h1>
                    {/* <p
                        className="mt-3 text-xs sm:text-sm md:text-base text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="1200"
                    >
                        An educational afterschool program on dermatology, diversity, and self-esteem.
                    </p> */}
                </div>
                <div className="absolute bottom-0 left-0 w-full h-2 sm:h-2 bg-gradient-to-b from-transparent to-[#F0E9D8] pointer-events-none"></div>
            </div>

            <main className="w-full max-w-4xl px-4 py-10 text-[#333] space-y-10">
                <section data-aos="fade-up" data-aos-duration="800">
                    <h2 className="text-2xl font-bold mb-2">About the Program</h2>
                    <p className="text-base  leading-relaxed">
                        Safe Skin Kids is a UCSF student-led initiative that teaches students about skin,
                        hair, and nail health through hands-on lessons and interactive activities. Created
                        and run by medical students at UCSF School of Medicine, the program introduces
                        dermatology in a way that's engaging, empowering, and age-appropriate. Each session
                        promotes confidence, empathy, and inclusivity while helping students learn the basics
                        of dermatology in a fun, supportive environment.
                    </p>
                </section>

                <section data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                    <h2 className="text-2xl font-bold mb-2">What We Teach</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { icon: "🧒", title: "Skin Structure and Function", color: "bg-[#568A97]" },
                            { icon: "🧴", title: "Sun Protection and Safety", color: "bg-[#947D9E]" },
                            { icon: "💇‍♀️", title: "Hair & Scalp Care", color: "bg-[#D5C6B9]" },
                            { icon: "🧼", title: "Skin Health (Acne, Eczema & more)", color: "bg-[#D5C6B9]" },
                            { icon: "💅", title: "Nail Care", color: "bg-[#568A97]" },
                            { icon: "🌈", title: "Confidence & Kindness", color: "bg-[#947D9E]" }
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className={`${item.color} rounded-xl shadow-md p-4 flex flex-col items-center justify-center text-center  gap-2 h-28  transition-transform duration-300 hover:scale-[1.02] hover:opacity-80`}
                                data-aos="fade-up"
                                data-aos-delay={idx * 100}
                            >
                                <div className="text-3xl">{item.icon}</div>
                                <div className="font-semibold text-sm sm:text-base">{item.title}</div>
                            </div>
                        ))}
                    </div>

                </section>
                <div className="relative w-full mt-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F0E9D8] via-[#D5C6B9] to-[#947D9E] animate-gradient opacity-60 pointer-events-none blur-sm" aria-hidden="true" />

                    <div className="relative z-10 w-full max-w-2xl mx-auto space-y-10 py-8">

                        <section data-aos="fade-up" data-aos-delay="200" data-aos-duration="800" className="text-center">
                            <h2 className="text-2xl font-bold mb-2">Partnerships</h2>
                            <h3 className="font-semibold text-base">Current Partners</h3>
                            <ul className="list-disc list-inside text-center mb-4">
                                <li>Telegraph Hill Neighborhood Center</li>
                                <li>Boys and Girls Club Don Fisher Clubhouse</li>
                            </ul>
                            <h3 className="font-semibold text-base">Our Supporters</h3>
                            <ul className="list-disc list-inside text-center">
                                <li>UCSF Dermatology</li>
                                <li>Center for Science, Education, & Outreach (CSEO)</li>
                            </ul>
                        </section>


                        <section data-aos="fade-up" data-aos-delay="300" data-aos-duration="800" className="text-center">
                            <h2 className="text-2xl font-bold mb-2">Get Involved</h2>
                            <p className="text-base mb-2">
                                Want to bring Safe Skin Kids to your school or volunteer with us?
                            </p>
                            <a href="mailto:safeskin@ucsf.edu" className="text-blue-700 underline">
                                Email us at: safeskin@ucsf.edu
                            </a>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    )
}


