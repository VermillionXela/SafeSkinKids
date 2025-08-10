
export const VolunteerView = () => {

    const roles = [
        {
            title: "Rotating Instructor",
            description:
                "Teach one or multiple sessions using our prepared materials. You’ll engage students through hands‑on lessons and help make dermatology fun and easy to understand."
        },
        {
            title: "Lead Instructor",
            description:
                "Join all 8 weekly sessions to provide continuity and mentorship. You’ll guide classroom flow, support rotating instructors, and build meaningful relationships with students."
        },
        {
            title: "Content Contributor",
            description:
                "Create lesson materials, quizzes, graphics, or social media content that reflect diverse skin tones, hair textures, and nail conditions.."
        },
        {
            title: "Survey & Data Assistant (Remote)",
            description:
                "Assist with student pre/post‑surveys, data entry, or reporting to help evaluate our program’s impact."
        },
        {
            title: "Outreach & Communications (Remote)",
            description:
                "Support email outreach, volunteer coordination, or community updates."
        },
    ]

    return (
        <div className="min-h-screen px-6 py-10 md:py-14">
            <main className="max-w-5xl w-full mx-auto text-gray-700 space-y-8 md:space-y-10 -mt-4">
                <section
                    className="space-y-3"
                    data-aos="fade-up"
                    data-aos-duration="450">
                    <h1 className="text-2xl md:text-3xl font-semibold text-center mb-4">Volunteer with us!</h1>
                    <p className="font-semibold text-center text-md sm:text-lg md:text-lg">
                        Interested in education, equity, or dermatology? Join Safe Skin Kids and help inspire the next generation.
                    </p>
                    <p className="leading-relaxed text-center">
                        We’re welcoming passionate students who are excited about youth education, health equity, and skin science.
                        Whether you’re pre-health, pre-med, or simply care about youth and representation, we’d love to work with you.
                        Some roles are in-person, others are remote, and all contribute to making this program something special.
                    </p>
                </section>

                <section
                    className="grid md:grid-cols-2 gap-4 items-stretch"
                    data-aos="fade-up"
                    data-aos-duration="500"
                >
                    <div className="bg-white/70 rounded-2xl shadow-md p-4 md:p-7 h-full flex flex-col">
                        <h2 className="text-xl font-semibold text-[#947D9E] text-center mb-3">
                            Who Can Volunteer?
                        </h2>
                        <ul className="list-disc pl-6 leading-relaxed space-y-1 flex-1">
                            <li>UCSF students in medicine, nursing, pharmacy, or public health</li>
                            <li>Undergraduate and graduate students</li>
                            <li>Students interested in dermatology, pediatrics, education, or health equity</li>
                        </ul>
                    </div>

                    <div className="bg-white/70 rounded-2xl shadow-md p-6 md:p-7 h-full flex flex-col">
                        <h2 className="text-xl font-semibold text-[#947D9E] text-center mb-3">
                            Time &amp; Commitment
                        </h2>
                        <div className="flex-1 flex items-center">
                            <p className="leading-relaxed text-center w-full mt-1">
                                Roles range from one-off sessions to an 8-week series. Most on-site sessions are 60–90 minutes.
                                Remote roles are flexible and can be done on your own schedule.
                            </p>
                        </div>
                    </div>
                </section>

                <section
                    className="mt-10"
                    data-aos="fade-up"
                    data-aos-duration="450">
                    <h2 className="text-xl md:text-2xl font-semibold text-center text-gray-700 mb-4 -mt-2">
                        Volunteer Roles
                    </h2>
                    <p className="text-center leading-relaxed mb-6">
                        We offer a variety of roles to fit different interests, schedules, and locations. Many can be done remotely or in person.
                    </p>
                    <div className="flex flex-wrap justify-center gap-5">
                        {roles.map((role, idx) => (
                            <div
                                key={idx}
                                className=" bg-[#947D9E]/60 text-gray-800 rounded-2xl shadow-lg w-full sm:w-[320px] lg:w-[340px] h-[230px] md:h-[250px] p-4 md:p-4 flex flex-col text-center"
                                data-aos="fade-up"
                                data-aos-duration="400"
                                data-aos-delay={`${idx * 75}`}
                            >
                                <h3 className="text-lg font-semibold mb-3 mt-4">{role.title}</h3>
                                <div className="flex-1 flex items-center">
                                    <p className="text-base leading-relaxed w-full -mt-6">{role.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}
