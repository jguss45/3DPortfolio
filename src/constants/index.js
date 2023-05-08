import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    purdue,
    habit,
    hnm,
    ecom,
    tshirt,
    techstore,
    kpidash,
    portfolio,
    tshirtdesigner,
    threejs,
    flask,
    gcloud,
    python,
    sql,
    streamlit,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Full Stack Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Streamlit",
      icon: streamlit,
    },
    {
      name: "Flask",
      icon: flask,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Google Cloud",
      icon: gcloud,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Backend Developer",
      company_name: "P2P Warehouse Marketplace",
      icon: purdue,
      iconBg: "#383E56",
      date: "Aug 2018 - Dec 2018",
      points: [
        "Coordinated with a team of developers to create an online peer-to-peer marketplace for warehousing, inspired by the Airbnb model",
        "Optimized SQL Server database schema and created views to improve data interaction with backend",
        'Developed a runtime-efficient scheduling algorithm that followed a "first come, first serve" approach, using Python, JavaScript, and R',
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Habit Tracking Mobile App",
      icon: habit,
      iconBg: "#E6DEDD",
      date: "Oct 2021 - Jan 2022",
      points: [
        "Created mobile application allowing users to track specific habits they want to build or quit",
        "Designed interactive UI using React Native allowing users to track progress over different periods of time",
        "Built REST APIs using Express and Node to make GET, POST, PUT requests to manipulate data in the MongoDB"      ],
    },
    {
      title: "Full stack Developer",
      company_name: "H&M KPI Dashboard",
      icon: hnm,
      iconBg: "#383E56",
      date: "Feb 2023 - March 2023",
      points: [
        "Developed full-stack web application using H&M data, leveraging Python, Streamlit, Flask, and Google Cloud SQL",
        "REST API built with Flask & Flask-Restx, authentication implemented using JSON Web Tokens",
        "Custom Streamlit dashboard with interactive charts, filters, and sidebar enabling monitoring and analysis of KPIs",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Ecommerce React App with Stripe Integration",
      icon: ecom,
      iconBg: "#E6DEDD",
      date: "March 2023",
      points: [
        "Designed and developed an e-commerce web application using React, Next.js, and CSS for styling",
        "Implemented inventory management using Sanity CMS, allowing seamless updating of product information",
        "Integrated Stripe checkout for secure and efficient payment processing",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "AI Powered T-Shirt Designer",
      icon: tshirt,
      iconBg: "#383E56",
      date: "May 2023",
      points: [
        "Created web application using React, Threejs, Express, and Tailwind CSS",
        "Features include adding custom color, file upload, and a prompt for AI generation",
        "Express backend server makes API calls to OpenAI's DALL-E API in response to user actions on the frontend",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Tech Store",
      description:
        "Web-based platform that allows users to browse, add to cart, buy now, and check out using Stripe.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nextjs",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: techstore,
      source_code_link: "https://github.com/jguss45/react_ecommerce_app",
    },
    {
      name: "H&M KPI Dashboard",
      description:
        "Streamlit dashboard with interactive charts, filters, and sidebar enabling monitoring and analysis of KPIs.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
        {
          name: "streamlit",
          color: "pink-text-gradient",
        },
      ],
      image: kpidash,
      source_code_link: "https://github.com/jguss45/KPI_Dashboard",
    },
    {
      name: "AI T-Shirt Designer",
      description:
        "Web app allowing users to design custom t-shirts in 3D, with the optional help of artificial intelligence using OpenAI's DALL-E API.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
      ],
      image: tshirtdesigner,
      source_code_link: "https://github.com/jguss45/tshirtAIDesigner",
    },
    {
      name: "3D Portfolio Website",
      description:
        "Portfolio website showcasing my experience and brought to life with 3D graphics and animations.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/jguss45/3DPortfolio",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };