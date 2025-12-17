import korenaImg from '../assets/korena.jpg'
import floraImg from '../assets/flora.jpg'
import meiyiImg from '../assets/meiyi.jpg'
import mirandaImg from '../assets/miranda.jpg'
import anuoluwaImg from '../assets/AnuAyeni.jpg'
import folahanmiImg from '../assets/FolahanmiAsebiomo.jpg'
import kellyImg from '../assets/KellyGocke.jpg'
import kwekuImg from '../assets/KwekuDjan.jpg'
import joshImg from '../assets/JoshPerez.jpg'
import saraiImg from '../assets/SaraiOrtega.jpg'

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
        },
        {
            id: 5,
            name: 'Kelly Gocke',
            role: 'Lead Instructor',
            description: `Hi! My name is Kelly Gocke and I’m a first-year medical student at UCSF.\n 
            I’m originally from Fresno, California and majored in Psychobiology at UCLA before starting medical school.\n 
            I’m currently a Lead Instructor for SSK and have enjoyed fostering a welcoming and inclusive environment while building relationships with the students throughout the course of the program.\n
            I initially joined SSK because I am very passionate about health education as a means to reduce disparities in healthcare access and preventative care.\n
            My favorite part of teaching through SSK has been hearing the students’ perspectives on topics and having the opportunity to debunk harmful myths or stereotypes in order to promote skin safety and inclusivity.`,
            image: kellyImg,
        },
        {
            id: 6,
            name: 'Sarai Ortega',
            role: 'Lead Instructor',
            description: `I am a first-year medical student at UCSF in PRIME-US (Program in Medical Education for the Urban Underserved).\n
            I am from Camarillo, CA and grew up in a Mexican-Guatemalan household.\n I serve as a lead instructor for Safe Skin Kids and am excited to help create a positive learning environment for SSK students and instructors.`,
            image: saraiImg,
        },
        {
            id: 7,
            name: 'Josh Perez',
            role: 'Director of Volunteer Recruitment',
            description: `Hi! My name is Josh Perez (he/him), and I am a first-year medical student at UCSF.\n
            I grew up in Stockton, California, and spent six years living in Los Angeles during my undergraduate studies.\n
            At UCLA, I earned my Bachelor of Science in Microbiology, Immunology, and Molecular Genetics (MIMG).\n As the Director of Volunteer Recruitment in Safe Skin Kids, I am very excited to work towards growing the continuity of this program and add to its successes.\n
            Beyond school, I love hosting pop-up coffee shops, having friends over for dinner, or going on runs around Golden Gate Park!`,
            image: joshImg,
        },
        {
            id: 8,
            name: 'Kweku Djan',
            role: 'Classroom Instructor',
            description: `My name is Kweku Djan, and I am a fourth-year medical student at UCSF.\n
            I grew up in Sacramento and went to Yale University for undergrad before coming to UCSF for medical school.\n
            I have done multiple Safe Skin Kids sessions now and really enjoy the opportunity to expose kids to the medical profession early on.\n
            There are not a ton of opportunities for teaching and mentorship of such young people, so it always reinvigorates me to be able to hang out with the kids and teach them about hair, skin, and nails, particularly in a way that is inclusive of all ethnicities.\n
            As a future family medicine physician, knowing the basics of dermatology and teaching my patients-- which include kids-- about best practices for taking care of their bodies is integral.\n Working with SSK has given me the opportunity to sharpen those education skills and has even taught me new things.`,
            image: kwekuImg,
        },
        {
            id: 9,
            name: 'Anuoluwa Ayeni',
            role: 'Classroom Instructor',
            description: `My name is Anuoluwa Ayeni, and I am a fourth-year medical student at UCSF.\n
            I serve as an instructor with Safe Skin Kids. My interests include pediatric health disparities, pediatric dermatology, and any form of community involvement.\n
            I wanted to get involved with SSK because it combines two of my favorite things when it comes to medicine: kids & accessible education!`,
            image: anuoluwaImg,
        },
        {
            id: 10,
            name: 'Folahanmi Asebiomo',
            role: 'Classroom Instructor',
            description: `My name is Folahanmi Asebiomo, and I was born and raised in South Georgia before moving to California.\n
            I’m now an MS1 at UCSF medical school.\n
            I love spending free time on my “granny hobbies” like baking, crocheting, and needlework;\n
            I also love to hang out with friends and watch dramatic reality TV.`,
            image: folahanmiImg,
        }
    ]

    return (
        <section className="min-h-screen px-6 py-10 -mt-4">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-gray-700 pb-4">
                    Meet Our Team
                </h1>
                <p className="text-base text-gray-700 leading-relaxed max-w-2xl mx-auto">
                    We’re UCSF medical students on a mission <br />
                    to help kids love the skin they’re in.
                </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 max-w-5xl mx-auto">
                {teamMembers.map((member) => (
                    <div
                        key={member.id}
                        className="flex flex-col md:flex-row items-center md:items-start gap-4 rounded-2xl border border-gray-400/40 bg-white/50 p-6 md:p-4 shadow-sm"
                        data-aos="fade-up"
                        data-aos-duration="500"
                    >
                        <img
                            src={member.image}
                            alt={member.name}
                            className="rounded-lg w-40 h-56 md:w-28 md:h-40 lg:w-40 lg:h-56 object-cover"
                        />
                        <div className="flex-1 min-w-0 text-center md:text-left">
                            <h3 className="font-semibold text-lg text-[#947D9E]">
                                {member.name}
                            </h3>
                            <p className="text-sm text-gray-500">{member.role}</p>
                            <p className="mt-3 text-sm text-gray-600 whitespace-pre-line md:max-h-40 md:overflow-y-auto md:pr-3 md:[scrollbar-gutter:stable]">
                                {member.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
