import { useState } from "react"
import SSKHospital from "../assets/SSK-hospital.jpg"
import { Link } from 'react-router-dom'

export const HomeView = () => {

    const [isImageLoaded, setIsImageLoaded] = useState(false)
    const TeachCard = ({ icon, color, title, titleUrl, titleNode, delay = 0 }) => (
        <div
            className={`${color} rounded-xl shadow-lg p-4 flex flex-col items-center justify-center text-center gap-2 h-28 transition-transform duration-300 hover:scale-105`}
            data-aos="fade-up"
            data-aos-delay={delay}
        >
            <div className="text-3xl">{icon}</div>

            {titleNode ? (
                <div className="font-semibold text-base sm:text-base">
                    {titleNode}
                </div>
            ) : titleUrl ? (
                <a
                    href={titleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-base sm:text-base underline"
                >
                    {title}
                </a>
            ) : (
                <div className="font-semibold text-base sm:text-base">{title}</div>
            )}
        </div>
    )

    return (
        <div className="flex flex-col items-center">
            <div className="relative w-full -mt-4">
                <div
                    className={`absolute inset-0 w-full h-full bg-[#F0E9D8] transition-opacity duration-700 
                        ${isImageLoaded ? "opacity-0" : "opacity-100"}`}
                />
                <img
                    src={SSKHospital}
                    alt="Photo of UCSF BCH"
                    onLoad={() => setIsImageLoaded(true)}
                    className={`w-full object-cover max-h-[600px] transition-opacity duration-700 
                        ${isImageLoaded ? "opacity-100" : "opacity-0"}`}
                />
                <div className="absolute top-5 left-4 w-[85%] sm:left-8 sm:w-[65%] md:left-10 md:w-[60%] md:max-w-2xl">

                    <p
                        className="text-lg sm:text-3xl md:text-4xl lg:text-5xl mt-3 font-bold leading-tight text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="1000"
                    >
                        Empowering kids to <br className="block sm:hidden" />
                        love the skin they’re in.
                    </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-4 sm:h-4 bg-gradient-to-b from-transparent to-[#F0E9D8] pointer-events-none"></div>
            </div>

            <main className="max-w-5xl w-full mx-auto px-4 py-10 text-gray-700 space-y-10">
                <section
                    data-aos="fade-up"
                    data-aos-duration="400">
                    <h1 className="text-2xl font-semibold mb-2 -mt-4">About the Program</h1>
                    <div className="text-base space-y-4 leading-relaxed -mb-6">
                        <p>
                            Safe Skin Kids is a UCSF student-led initiative that teaches children the basics of skin, hair, and nail health. Using the American Academy of Dermatology’s <em>Good Skin Knowledge</em> modules, we deliver fun, hands-on lessons that are grounded in science and created by dermatology experts.
                        </p>
                        <p>
                            Our sessions cover daily care, sun safety, healthy habits, and common skin conditions. Students learn in an interactive, supportive setting that builds confidence and celebrates diversity.
                        </p>
                        <p>
                            We believe every child should feel proud in their own skin and have the knowledge to keep it healthy for life.
                        </p>
                    </div>
                </section>

                <section
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="400"
                >
                    <h2 className="text-2xl font-semibold mb-3">What We Teach</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <TeachCard
                            icon="🧴"
                            color="bg-[#568A97]/80"
                            title="Skin Structure and Function"
                            titleUrl="https://www.aad.org/public/public-health/good-skin-knowledge/lesson-plans/intro-to-skin"
                            delay={0}
                        />

                        <TeachCard
                            icon="☀️"
                            color="bg-[#947D9E]/80"
                            title="Sun Protection and Safety"
                            titleUrl="https://www.aad.org/public/public-health/good-skin-knowledge/lesson-plans/sun-safety"
                            delay={100}
                        />

                        <TeachCard
                            icon="🫧"
                            color="bg-[#D5C6B9]/80"
                            title="Daily Skin Care"
                            titleUrl="https://www.aad.org/public/public-health/good-skin-knowledge/lesson-plans/daily-skin-care"
                            delay={200}
                        />

                        <TeachCard
                            icon="💇‍♀️"
                            color="bg-[#568A97]/80"
                            title="Hair & Scalp Care"
                            titleUrl="https://www.aad.org/public/public-health/good-skin-knowledge/lesson-plans/healthy-hair-and-nails"
                            delay={300}
                        />

                        <TeachCard
                            icon="💅"
                            color="bg-[#947D9E]/80"
                            title="Nail Care"
                            titleUrl="https://www.aad.org/public/public-health/good-skin-knowledge/lesson-plans/healthy-hair-and-nails"
                            delay={400}
                        />

                        <TeachCard
                            icon="🧼"
                            color="bg-[#D5C6B9]/80"
                            delay={500}
                            titleNode={
                                <span>
                                    Skin Health (
                                    <a
                                        href="https://www.aad.org/public/public-health/good-skin-knowledge/lesson-plans/about-acne"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline"
                                    >
                                        Acne
                                    </a>
                                    {", "}
                                    <a
                                        href="https://www.aad.org/public/public-health/good-skin-knowledge/lesson-plans/eczema"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline"
                                    >
                                        Eczema
                                    </a>
                                    {" and More)"}
                                </span>
                            }
                        />

                        <TeachCard
                            icon="🐞"
                            color="bg-[#568A97]/80"
                            title="Bug Bites and Poisonous Plants"
                            titleUrl="https://www.aad.org/public/public-health/good-skin-knowledge/lesson-plans/bug-bites-poisonous-plants"
                            delay={600}
                        />

                        <TeachCard
                            icon="🌈"
                            color="bg-[#947D9E]/80"
                            title="Confidence and Kindness"
                            titleUrl="https://www.aad.org/public/public-health/good-skin-knowledge/lesson-plans/love-your-skin"
                            delay={700}
                        />
                    </div>
                </section>

                <div className="relative w-full mt-2">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#F0E9D8_25%,_#D5C6B9_98%,_#947D9E_100%)]
                                    opacity-60 blur-sm pointer-events-none" 
                            aria-hidden="true" />
                    <div className="relative z-10 w-full max-w-none mx-auto space-y-10 py-8">
                        <section
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="500"
                            className="text-center">
                            <h2 className="text-2xl font-semibold mb-2">Partnerships</h2>
                            <h3 className="font-semibold text-base">Current Partners</h3>
                            <ul className="list-none list-inside text-center mb-4">
                                <li>Telegraph Hill Neighborhood Center</li>
                                <li>Boys and Girls Club Don Fisher Clubhouse</li>
                            </ul>
                            <h3 className="font-semibold text-base">Our Supporters</h3>
                            <ul className="list-none list-inside text-center">
                                <li>UCSF Dermatology</li>
                                <li>Center for Science, Education, & Outreach (CSEO)</li>
                            </ul>
                        </section>

                        <section
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="400"
                            className="text-center">
                            <h2 className="text-2xl font-semibold -mt-4 mb-2">Get Involved</h2>
                            <p className="text-base mb-2">
                                Want to bring Safe Skin Kids to your school or volunteer with us?
                            </p>
                            <div className="flex flex-col items-center space-y-2">
                                <Link to="/volunteer" className="text-blue-700 underline">
                                    Volunteer Info
                                </Link>
                                <Link to="/contact" className="text-blue-700 underline">
                                    Contact Us
                                </Link>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    )
}


