// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import greenCart from './assets/tech_logo/greenCart.jpeg'
import aws from './assets/tech_logo/aws.jpeg'
import netflix from './assets/tech_logo/netflix.jpeg'
import quiz from './assets/quiz.jpeg'


// Experience Section Logo's
import itux from './assets/company_logo/iTUX.jpeg'

// Education Section Logo's
import i2it from './assets/education_logo/I2IT.png'
import hsc from './assets/education_logo/HSC.jpeg'
import ssc from './assets/education_logo/SSC.jpeg'

// Project Section Logo's
 import agri from './assets/work_logo/agri.webp'
 import blog from './assets/work_logo/blog.jpeg'
 import crud from './assets/work_logo/crud.png'
 import doctor from './assets/work_logo/doctor.jpeg'
 import food from './assets/work_logo/food.png'
 import news from './assets/work_logo/news.webp'


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [

      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
     
    ],
  },
  {
    title: 'Languages',
    skills: [
     
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Aws', logo: aws },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: itux,
      role: "Frontend Developer Intern",
      company: "iTUX Solutions",
      date: "Feb 2025 - May 2025",
      desc: "Developed dynamic and responsive web applications using ReactJS, focusing on performance, usability, and maintainability. Collaborated with cross-functional teams to implement intuitive user interfaces, integrate RESTful APIs, and ensure seamless user experiences. Contributed to scalable frontend architecture in an agile development environment, emphasizing clean code practices and component reusability.",
      skills: [
        "JavaScript",
        "React JS",
        "TypeScript",
        "Tailwind CSS",
        "Redux",
    
      ],
    },
    
  ];
  
  export const education = [
    {
      id: 0,
      img: i2it,
      school: "I2IT- Pune",
      date: "Nov 2022 - June 2026",
      grade: "8.3 CGPA",
      desc: "During my B.E. in Information Technology at I²IT, I gained a strong foundation in computer science principles and practical experience in web development, databases, algorithms, and software engineering. The curriculum emphasized both theoretical knowledge and hands-on projects, helping me build problem-solving and technical skills.",
      degree: "Bachelor of Engineering",
    },
    {
      id: 1,
      img: hsc,
      school: "12th Talwada",
      date: "July 2020 - Mar 2022 ",
      grade: "84.83%",
      desc: "I completed my HSC in the Science stream from my village school in the Beed district. Despite limited resources, I remained focused on my academic goals and built a strong foundation in subjects like Physics, Chemistry, and Mathematics. ",
      degree: "Higher Secondary Education (HSC)",
    },
    {
      id: 2,
      img: ssc,
      school: "10th Talwada",
      date: "July 2010 - Mar 2020",
      grade: "89.20%",
      desc: "Completed my Secondary School Certificate (SSC) from my village school in the Beed district. During this time, I focused on strengthening my foundational academic skills, developing soft skills like communication and teamwork, and actively participating in sports and extracurricular activities.",
      degree: "Secondary School Certificate",
    },

   
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Agrimitra",
      description:
        "Agrimitra is a smart farming assistant app designed to support farmers in optimizing agricultural practices through technology. The app leverages AI and machine learning to provide fertilizer recommendations, plant disease detection, and an AI-powered chatbot for seamless interaction.",
      domain:"full",  
      image: agri,
      tags: ["HTML", "CSS", "JavaScript", "Mashine Learning", "API"],
      github: "https://github.com/Rohit31-ui/AgriMitra",
      webapp: "https://agrimitra07.onrender.com/",
    },
    {
      id: 1,
      title: "Prescripto",
      description:
        "This web application allows patients to book doctor appointments online. It features a user-friendly interface for browsing doctors, selecting time slots, and making payments. The admin dashboard provides the ability to manage appointments, update schedules, and track patient bookings. Payment gateway integration ensures secure online transactions for appointment bookings.",
      domain:"full",
      image: doctor,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "JavaScript","API"],
      github: "https://github.com/Rohit31-ui/Prescripto",
      webapp: "https://precscripto-appoinment-booking-app.netlify.app/",
    },
    {
      id: 2,
      title: "Food Delivery App",
      description:
        "Foodie Express is a modern, fully responsive food delivery website built with React.js and styled using Tailwind CSS. It leverages advanced React features like hooks, useState, useEffect, React-Redux, and Context API to provide a seamless user experience.",
      domain:"react",
      image: food,
      tags: ["React JS", "TailwindCss", "JavaScript"],
      github: "https://github.com/Rohit31-ui/Foodie-Express-food-delivery-application",
      webapp: "https://foodie-express-fooddelivery.netlify.app/",
    },
    {
      id: 3,
      title: "Blog nest application",
      description:
        "BlogNest is a React-powered blog application designed for a seamless reading experience by fetching blog data from an online API. Built entirely with React.js and Tailwind CSS, it offers a sleek, fast, and fully responsive UI. The app leverages React Router DOM for smooth navigation, useState and useEffect for efficient state management, and Toastify for dynamic notifications. ",
      domain:"react",
      image: blog,
      tags: ["React JS", "TailwindCss", "JavaScript",],
      github: "https://github.com/Rohit31-ui/BlogNest_blog_application",
      webapp: "https://blog-nest-blog-application-g6pu.vercel.app/",
    },
    {
      id: 4,
      title: "News Monkey",
      description:
        "NewsMokey is a dynamic news website that allows users to explore and read news articles across various domains such as sports, science, technology, business, and politics. The project leverages an online API to fetch real-time news updates and displays them in an organized and user-friendly manner. It is built using React and incorporates various React hooks for state management and functionality.",
      domain:"react",
      image: news,
      tags: ["React JS", "JavaScript", "TailwindCss"],
      github: "https://github.com/Rohit31-ui/NewsMonkey-react-project-Functional-base",
      webapp: "https://news-monkey-react-project-functional-base.vercel.app/",
    },
    {
      id: 5,
      title: "CRUD Operations",
      description:
        "This project is a simple CRUD (Create, Read, Update, Delete) application built with Node.js, Express, and MongoDB. It allows users to perform CRUD operations on user data (name, email, and city). The project follows a RESTful API design and demonstrates basic database interactions using MongoDB with Mongoose.",
      domain:"backend" , 
      image: crud,
      tags: ["Node JS", "Mongo DB", "JavaScript", "Express JS"],
      github: "https://github.com/Rohit31-ui/Crud-Operation",
      webapp: "",
    },
    {
      id: 6,
      title: "Green Cart",
      description:
        "GreenCart is a full-stack grocery e-commerce platform that brings together users and sellers in a seamless ecosystem. With secure authentication, efficient product management, multiple payment options, and a clean user interface, GreenCart is designed to make grocery shopping simple, fast, and reliable.",
      domain:"full" , 
      image: greenCart,
      tags: ["Node JS", "Mongo DB", "React", "Express JS"],
      github: "https://github.com/Rohit31-ui/Crud-Operation",
      webapp: "https://greencart-gs.vercel.app/",
    },
    {
      id: 7,
      title: "Netflix Clone",
      description:
        "A full-stack Netflix-inspired streaming platform built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, designed to replicate core Netflix functionalities such as user authentication, movie browsing, dynamic video streaming, and responsive UI.",
      domain:"full" , 
      image: netflix,
      tags: ["Node JS", "Mongo DB", "React", "Express JS"],
      github: "https://github.com/Rohit31-ui/Netflix-Clone-React-Project",
      webapp: "",
    },

    {
      id: 8,
      title: "Quiz Management Backend",
      description:
        `This is a simple backend API for a Quiz Application. It allows you to:

✅ Create quizzes with a title
✅ Add questions to quizzes, including multiple options, and mark correct answers
✅ Fetch all quizzes
✅ Fetch all questions (with options) for a specific quiz`,
      domain:"backend" , 
      image: quiz,
      tags: ["Node JS", "Mongo DB", "rest api", "Express JS"],
      github: "https://github.com/Rohit31-ui/Netflix-Clone-React-Project",
      webapp: "",
    },












    
  ];  