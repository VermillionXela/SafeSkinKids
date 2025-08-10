import korenaImg from '../assets/korena.jpg'
import floraImg from '../assets/flora.jpg'
import meiyiImg from '../assets/meiyi.jpg'
import mirandaImg from '../assets/miranda.jpg'

export const TeamView = () => {
    const teamMembers = [
        {
            id: 1,
            name: 'Korena Wise',
            role: 'Founder',
            description:
                `Hi everyone! I’m Korena Wise, a medical student at UCSF from Arkansas and the founder and president of Safe Skin Kids.\n
                Growing up, I didn’t have access to dermatology or skin health education, and I wanted to change that—especially for students who might not otherwise have the chance to explore these topics. Safe Skin Kids introduces young students to dermatology through hands-on lessons from the American Academy of Dermatology, helping them understand skin, hair, and nail health while building self-esteem. More than anything, we created this program to help kids love the skin they’re in, respect the skin of others, and gain knowledge that empowers them to take care of their skin with confidence.\n
                I’m most excited to see how the students respond to Safe Skin Kids. This program was built for them, and I hope they love it!`,
            image: korenaImg,
        },
        {
            id: 2,
            name: 'Flora Wong',
            role: 'Vice President',
            description:
                `Hi everyone! I’m Flora, a first-year medical student at UCSF, originally from Orange County, CA. I’m one of the lead instructors for Safe Skin Kids (SSK)!\n
                I was inspired to join SSK because it aligns with my passion for dermatology, education, and community health. I understand that there can be struggles with feeling different because of our skin. That’s why it’s so important to foster self-love and empathy from an early age, reshaping the conversation around dermatological health for kids.\n
                I’m most excited to meet the students and help create fun, interactive, creative, and inclusive learning environments where everyone feels valued and seen!`,
            image: floraImg,
        },
        {
            id: 3,
            name: 'Meiyi Yu',
            role: 'Treasurer',
            description:
                `Hi everyone! I’m Meiyi, and I’m the treasurer for Safe Skin Kids. I grew up in San Lorenzo, CA, and I’m thrilled to be part of this amazing team!\n
                I joined SSK because I wanted to help create a space where kids can feel informed and confident in their own skin. Knowing how important it is to understand skin health early on, I’m passionate about making that education fun and accessible.\n
                I’m most excited to pilot this program and watch it grow and thrive! Seeing students learn, engage, and gain confidence is what drives me.`,
            image: meiyiImg,
        },
        {
            id: 4,
            name: 'Miranda Chen',
            role: 'Lead Instructor',
            description: `Hi everyone! I'm Miranda, a first-year medical student at UCSF who is originally from Palo Alto, CA and one of the lead instructors for Safe Skin Kids this year.\n
            I was motivated to join SSK because of my overlapping interests in dermatology, health equity, community engagement, and education and mentorship. As someone who has always been passionate about teaching as a way to empower others, I am excited to deliver meaningful, relevant, and accessible education on skin health, especially for young and adolescent individuals whose self-identities and self-confidence can rapidly change. I hope to teach students to feel more confident in their own skin and to have the tools to take better care of their skin throughout their lives.`,
            image: mirandaImg,
        }
    ]

    return (
        <section className="min-h-screen px-6 py-12 md:py-20 -mt-4">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-[26rem] text-center md:text-left md:sticky md:top-20 self-start">
                    <h1 className="text-2xl sm:text-3xl font-semibold text-gray-700 pb-4 pt-2">
                        Meet Our Team
                    </h1>
                    <p className="text-base text-gray-700 leading-relaxed">
                        We’re UCSF medical students on a mission <br />
                        to help kids love the skin they’re in.
                    </p>
                </div>

                <div className="md:w-2/3 md:order-2 order-2 space-y-10 pr-2">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="flex flex-col items-center md:items-stretch md:flex-row gap-6 border-b border-gray-400/40 pb-6 md:h-64"
                            data-aos="fade-up"
                            data-aos-duration="500"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="rounded-lg w-40 h-56 object-cover shrink-0"
                            />
                            <div className="flex-1 min-w-0 flex flex-col md:text-left text-center">
                                <div className="mb-2">
                                    <h3 className="font-semibold text-lg text-[#947D9E]">{member.name}</h3>
                                    <p className="text-sm text-gray-500">{member.role}</p>
                                </div>

                                <div className="flex-1 min-h-0 md:overflow-y-auto md:pr-3 md:[scrollbar-gutter:stable]">
                                    <p className="text-sm text-gray-600 whitespace-pre-line">
                                        {member.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
