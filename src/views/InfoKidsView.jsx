import SSKBubbles from "../assets/SSK-bubbles.jpg"

export const InfoKidsView = () => {
    const topics = [
        {
            icon: "☀️",
            title: "Sun & Melanin Magic",
            text: "The sun can be powerful! We’ll teach you how it affects your skin and how something called *melanin* helps protect you. You’ll learn when and how to use sunscreen and how to stay safe while having fun outside."
        },
        {
            icon: "💥",
            title: "Beating Breakouts",
            text: "Ever had a pimple? You’re not alone. Find out what causes acne, how to care for your skin, and why it’s totally normal (and fixable!)."
        },
        {
            icon: "🩹",
            title: "Skin Superpowers",
            text: "Your skin does a lot more than you think—it helps protect your whole body! Discover cool facts about eczema, scars, and why kindness matters when someone’s skin looks different."
        },
        {
            icon: "💇‍♂️",
            title: "Hair & Scalp Care",
            text: "Do you have curls, coils, braids, waves, shaved, or straight hair? We’ll cover how to keep your scalp clean and your hair healthy."
        },
        {
            icon: "💅",
            title: "Nail Know-How",
            text: "Did you know nails grow from the inside out? We’ll show you how to keep your nails strong and clean."
        },
        {
            icon: "💖",
            title: "Confidence is Cool",
            text: "Being kind to others starts with being kind to yourself. We’ll talk about feeling good in your own skin, standing up for friends, and why being different is something to be proud of."
        }
    ]

    return (
        <div className="relative flex flex-col items-center bg-[#F0E9D8] overflow-hidden min-h-screen">
            <section 
                className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-end gap-6 px-4 pb-8 pt-12 relative z-10"
                data-aos="fade-up"
                data-aos-duration="300">
                <div className="flex-1 text-center md:text-center">
                    <h1 className="text-[#947D9E] text-2xl sm:text-2xl lg:text-4xl font-semibold whitespace-nowrap mb-6 -mt-4">
                        Fun, Science, and Self-Care!
                    </h1>

                    <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-md p-6 md:p-8 text-gray-800 text-base leading-relaxed max-w-prose mx-auto md:mx-0">
                        <p className="mb-4">
                            Want to learn how to take care of your skin, hair, and nails? Join Safe Skin Kids,
                            where learning is hands-on, fun, and all about YOU!
                        </p>
                        <p className="mb-4">
                            In this program, you'll do science experiments, play games, and talk with
                            UCSF medical students (future doctors!) who are here to help you feel
                            confident, curious, and proud of who you are. We'll show you how to
                            take care of your body and why every skin tone, hair texture, and
                            smile is something to celebrate.
                        </p>
                        <p>
                            Whether you've had a rash, a breakout, or just want to know how nails grow—
                            we've got you. Get ready to learn some cool stuff, ask big questions,
                            and leave each session feeling even more awesome than when you walked in.
                        </p>
                    </div>
                </div>

                <div className="flex-1 relative w-full max-w-md mx-auto md:mx-0">
                    <img
                        src={SSKBubbles}
                        alt="Kids playing with bubbles"
                        className="rounded-xl shadow-xl w-full object-cover"
                    />
                </div>
            </section>

            <section
                className="w-full max-w-6xl mx-auto px-4 py-8 relative z-10"
                data-aos="fade-up"
                data-aos-duration="400"
            >
                <h2 className="text-gray-700 text-xl sm:text-2xl font-semibold text-center mb-8 -mt-5">Things You'll Learn</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                    {topics.map((item, idx) => (
                        <div
                            key={idx}
                            className="rounded-xl shadow-md p-6 flex flex-col items-center text-center bg-white/40 backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-white/70 h-full min-h-[240px]"
                            data-aos="fade-up"
                            data-aos-delay={`${idx * 50}`}
                        >
                            <div className="text-4xl mb-3">{item.icon}</div>
                            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}