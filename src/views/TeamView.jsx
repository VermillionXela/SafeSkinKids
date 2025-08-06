import korenaImg from '../assets/korena.jpg'
import floraImg from '../assets/flora.jpg'
import meiyiImg from '../assets/meiyi.jpg'

export const TeamView = () => {
    const teamMembers = [
        {
            id: 1,
            name: 'Korena Wise',
            role: 'Founder',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis orci sed velit viverra fermentum. Donec lobortis mi et erat porta, id blandit tortor ornare. Sed sed magna at dui lacinia placerat. Suspendisse sit amet vestibulum tellus. Integer eget tincidunt tellus. Donec fringilla nibh in aliquam viverra.',
            image: korenaImg,
        },
        {
            id: 2,
            name: 'Flora Wong',
            role: 'Vice President',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis orci sed velit viverra fermentum. Donec lobortis mi et erat porta, id blandit tortor ornare. Sed sed magna at dui lacinia placerat. Suspendisse sit amet vestibulum tellus. Integer eget tincidunt tellus. Donec fringilla nibh in aliquam viverra.',
            image: floraImg,
        },
        {
            id: 3,
            name: 'Meiyi Yu',
            role: 'Treasurer',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis orci sed velit viverra fermentum. Donec lobortis mi et erat porta, id blandit tortor ornare. Sed sed magna at dui lacinia placerat. Suspendisse sit amet vestibulum tellus. Integer eget tincidunt tellus. Donec fringilla nibh in aliquam viverra.',
            image: meiyiImg,
        },
    ]

    return (
        <section className="min-h-screen px-6 py-12 md:py-20 -mt-4">
            <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 md:order-1 order-1 md:sticky top-32 self-start text-center md:text-left">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-700 pb-4">
                        Meet Our Team
                    </h1>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                        We’re a group of passionate, skin-smart folks who care deeply about kids’ health. With big hearts and sharp minds, we team up to make skincare accessible, safe, and fun for families everywhere.
                    </p>
                </div>

                <div className="md:w-2/3 md:order-2 order-2 space-y-10 pr-2">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="flex flex-col items-center text-center md:text-left md:items-start md:flex-row gap-6 border-b border-gray-400/40 pb-6"
                            data-aos="fade-up"
                            data-aos-duration="500"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="rounded-lg w-40 h-50 object-cover"
                            />

                            <div>
                                <h3 className="font-semibold text-lg text-[#947D9E]">
                                    {member.name}
                                </h3>
                                <p className="text-sm text-gray-500 mb-2">{member.role}</p>
                                <p className="text-sm text-gray-600">{member.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
