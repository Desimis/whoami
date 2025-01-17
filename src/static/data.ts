export interface ExperienceProps {
  company: string;
  companyLogo: string;
  link: string;
  jobTitle: string;
  fromDate: string;
  toDate: string;
  description: string[];
}

export const ExperienceData: ExperienceProps[] = [
  {
    company: "Zepz",
    companyLogo:
      "/images/zepz.jpeg",
    link: "https://www.zepzpay.com/",
    jobTitle: "Front-End Engineer",
    fromDate: "Jun 2023",
    toDate: "Present",
    description: [
      "Played a part in planning, designing and building products for financial crime mitigation, such as screening individuals.",
      "Full responsibility for designing, planning, building and owning a service for handling outreaches to customers to maintain compliance of their documents and improve our internal operations ability to monitor customers. This included designing analytics and metrics from the beginning to ensure the ability to improve the service immediately from launch.",
      "Collaborated with multiple teams and assisted them with improving their ability to improve customer experience or the ability to improve internal support experience.",
      "Initially had a focus on performance and SEO improvement of a Next.JS project that we saw to finish until moving onto financial crime.",
      "Worked on a variety of Java (Spring) based micro-services where resources were short for other teams and they needed assistance.",
    ],
  },
  {
    company: "Picup",
    companyLogo:
      "/images/picup.jpeg",
    link: "https://www.picup.co.za/",
    jobTitle: "Lead Front-End Engineer",
    fromDate: "Oct 2021",
    toDate: "May 2023",
    description: [
      "Led a small team as the Lead Front End Engineer for an Angular project with a mixed back-end of Firebase and C# REST API's.",
      "Successfully improved project stability by implementing robust error handling and conducting thorough testing and debugging processes.",
      "Spearheaded performance optimization efforts, resulting in significant enhancements to the platform's loading speed and responsiveness.",
      "Ensured adherence to best practices and coding standards, driving consistency and maintainability throughout the project.",
      "Contributed to architectural decisions and technology selections, driving innovation and scalability.",
      "Mentored and coached team members to foster a culture of continuous learning and professional growth.",
      "Collaborated closely with backend developers to streamline data integration and enhance overall system efficiency.",
    ],
  },
  {
    company: "Wetu Tourism Solutions",
    companyLogo:
      "/images/wetu.jpeg",
    link: "https://wetu.com/",
    jobTitle: "Software Engineer",
    fromDate: "Aug 2020",
    toDate: "Oct 2021",
    description: [
      "Played a pivotal role as an Intermediate Full Stack Developer at a dynamic travel tech company, contributing to the re-engineering of their new system.",
      "Leveraged Azure cloud services to create scalable and reliable solutions, ensuring seamless user experiences and high availability.",
      "Developed robust and interactive user interfaces using ReactJS, enhancing the platform's usability and engagement.",
      "Collaborated with cross-functional teams to design and implement efficient APIs and services in .NET Core, driving data integration and system performance.",
      "Successfully delivered high-quality code and resolved complex technical challenges to meet project milestones and deadlines.",
      "Actively participated in code reviews, providing valuable feedback to maintain code quality and adhere to best practices.",
    ],
  },
  {
    company: "Application Frameworks",
    companyLogo:
      "/images/appframeworks.jpeg",
    link: "https://appframeworks.com/",
    jobTitle: "Software Developer",
    fromDate: "Jan 2019",
    toDate: "Aug 2020",
    description: [
      "Contributed as an Intermediate Full Stack Developer providing specialized platforms for energy distribution companies.",
      "Successfully maintained and improved the web application using ASP.NET and Angular, ensuring its seamless functionality and user experience.",
      "Collaborated closely with the engineering team to work on data transfer between hardware devices, adhering to engineering specifications and industry standards.",
      "Developed efficient APIs and services to facilitate smooth data communication and integration between the platform and hardware components.",
      "Leveraged Android development skills to create mobile solutions, enhancing accessibility and usability for energy distribution professionals on-the-go.",
      "Actively participated in the entire software development lifecycle, from requirements gathering to testing and deployment, ensuring high-quality and reliable deliverables.",
    ],
  },
  {
    company: "Full Stack",
    companyLogo:
      "/images/fullstack.jpeg",
    link: "https://www.fullstack.co.za/",
    jobTitle: "Junior Software Developer",
    fromDate: "Jan 2018",
    toDate: "Dec 2018",
    description: [
      "Proven Junior Full Stack Developer with hands-on experience in Agile/Scrum development methodologies.",
      "Proficient in utilizing .NET Core, Angular, and MS SQL to develop robust and scalable applications in diverse domains, including insurance, investments, and call center software.",
      "Collaborated effectively within cross-functional teams to deliver high-quality software solutions on time and within project scope.",
      "Contributed to all phases of the software development lifecycle, from requirements gathering and design to implementation, testing, and deployment.",
      "Developed responsive and user-friendly interfaces using Angular, ensuring a seamless and intuitive user experience across various platforms.",
      "Leveraged .NET Core to build efficient backend services, APIs, and database interactions for data-driven applications.",
      "Worked closely with stakeholders to understand business requirements and translate them into technical specifications and actionable development tasks.",
      "Conducted code reviews and actively participated in knowledge-sharing sessions, fostering a culture of continuous learning and improvement.",
    ],
  },
];
