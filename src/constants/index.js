import project1 from "../assets/projects/Freshcrate.png";
import project2 from "../assets/projects/i4businesscard.png";
import project3 from "../assets/projects/TeamkarmaCRM.png";
import project4 from "../assets/projects/ZodicPulse.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1+ year of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 Dec - Present",
    role: "Junior Full Stack Developer",
    company: "I4interface",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript","TypeScript" ,"React.js", "Next.js", "mongoDB","Svelte"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "I developed a full-stack e-commerce website for a company specializing in selling fresh fish and meat. The platform provides a seamless shopping experience where users can browse a wide range of fresh products, add items to their cart, and place orders effortlessly. It includes a secure payment gateway, user authentication, and an efficient order management system",
    technologies: [ "React","Tailwind CSS","Node.js", "MongoDB","Express" ,"Razorpay","Firebase Authentication","Redux" , "JWT", "Vercel", "Postman" ],
  },
  {
    title: "Business Card Generator",
    image: project2,
    description:
      "I am developing a Business Card Generator as a product for our company, built using Next.js and MongoDB. This platform allows users to create digital business cards and NFC-enabled cards with customizable designs. Additionally, users can host their business cards on a personalized subdomain, making it easy to share their contact details online.",
    technologies: ["Next.js", "Tailwind CSS", "Clerk", "MongoDB", "Vercel"],
  },
  {
    title: "CRM System",
    image: project3,
    description:
      "I developed a CRM system designed for lead management, appointment scheduling, and team performance tracking. This system helps businesses efficiently manage their sales pipeline, book and track appointments, and analyze team and lead performance through detailed reports and analytics.Key features are  Lead tracking with status updates,Appointment booking and management,Team performance monitoring,Reports and analytics for leads and sales,Role-based access control,Notifications and reminders,",
    technologies: ["Next.js", "Tailwind CSS", "Shadcn", "Vercel" ,"MongoDB" , "REST API", "JWT" , "Zustand", "Jwt" , "Chart js"],
  },
  {
    title: "Astrology website",
    image: project4,
    description:
      "AI developed an astrology website that provides users with detailed zodiac sign descriptions, daily horoscopes, Kundali (birth charts), Prashna (horary astrology), and Kundali charts. The platform integrates astrology APIs and Google Generative AI to offer personalized astrological insights.",
    technologies: ["Next.js", "TalwindCSS", "google generative AI", "Astro API", "mongodb", "Vercel","Clerk Auth"],
  },
];

export const CONTACT = {
  address: "Malappuram,Kerala,India",
  phoneNo: "+91 8129383575 ",
  email: "shamnahajara@gmail.com",
};
