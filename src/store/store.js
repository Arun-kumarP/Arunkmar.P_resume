import { reactive } from 'vue';

// Create a reactive state object
const state = reactive({
  my_details: {
    about: {
      first_name: 'Arunkumar',
      last_name: 'P',
      address: ' Chennai,',
      address_icon: require('@/assets/icons/address.svg'),
      mail_id: 'arunfozy@gmail.com',
      mail_id_icon: require('@/assets/icons/mail.svg'),
      phone_number: '+91 9787321206',
      phone_number_icon: require('@/assets/icons/phone.svg'),
      role: 'Software developer with over 4 years of experience building responsive, high-performance Single Page Applications (SPAs) using Vue.js, React.js, JavaScript, TypeScript, and Python. Skilled in creating intuitive and visually appealing UI layouts, implementing CI/CD pipelines, and conducting thorough code reviews to maintain high code quality. Experienced in RESTful API integration, AWS deployment (Lambda, S3, API Gateway), and Agile development. Passionate about writing clean, maintainable code and delivering scalable web solutions that solve real-world business problems.',
      github_link: 'https://github.com/Arun-kumarP',
      linkedin_link: 'https://www.linkedin.com/in/arunkumar-p-7a7608261',
      profile_image: require('@/assets/img/Arun.jpeg')
    },
    education: [
      {
        school: "Government College of Technology - Coimbatore",
        degree: "BE - Production Engineer",
        link: "https://gct.ac.in/",
        gpa: "GPA: 8.1",
        dates: "2018 - 2021"
      }
    ],
    skills: {
      programming_language_and_tools: {
        vue: require('@/assets/icons/vue.svg'),
        java_script: require('@/assets/icons/javascript.svg'),
        type_script: require('@/assets/icons/typescript.svg'),
        html: require('@/assets/icons/html5.svg'),
        css: require('@/assets/icons/css.svg'),
        boot_strab: require('@/assets/icons/bootstrap.svg'),
        python: require('@/assets/icons/python.svg'),
        sql: require('@/assets/icons/sql.svg'),
        aws: require('@/assets/icons/aws.svg'),
        jira: require('@/assets/icons/jira.svg'),
        agile: require('@/assets/icons/agile.svg'),
        post_man: require('@/assets/icons/postman.svg'),
        vs_code: require('@/assets/icons/vscode.svg'),
        reactJs: require('@/assets/icons/react.svg'),
        redux: require('@/assets/icons/redux.svg')

      },
      online_courses: [
        {
          name: "The Creative HTML5 & CSS3 Course - Build Awesome Websites",
          link: "https://udemy-certificate.s3.amazonaws.com/image/UC-675596d0-caee-4f3f-bf1d-2cf727595fd3.jpg",
        },
        {
          name: "The Complete Python Bootcamp From Zero to Hero in Python",
          link: "https://udemy-certificate.s3.amazonaws.com/image/UC-6cfb674b-beac-4f11-86c2-07e7cef4dc8e.jpg",
        },
        {
          name: "101 Practice SQL Questions: Basic to Advanced",
          link: "https://udemy-certificate.s3.amazonaws.com/image/UC-5e985799-b105-4806-9960-fc926dd5a001.jpg",
        },
        {
          name: "The Advanced SQL Course",
          link: "https://udemy-certificate.s3.amazonaws.com/image/UC-0a361e29-e317-441a-8498-8a350a173975.jpg",
        },
      ]
    },
    experience: [
      {
        title: "Software Developer",
        company: "Tata Consultancy Services",
        dates: "February 2022 - Present",
        project_overview: "Designed and developed a dynamic web application to optimize inventory management, enabling real-time stock tracking, efficient order management, and streamlined replenishment processes, resulting in improved operational efficiency and user satisfaction.",
        sections: [
          {
            heading: "Key Contributions",
            content: "Designed and implemented complex features such as Excel export/import processes to streamline bulk data management and reduce manual errors. Developed dynamic PDF generation and ZIP file compression functionalities for efficient reporting and document management. Created an intuitive drag-and-drop interface that enhanced user interaction and improved task efficiency. Built an advanced multi-criteria filtering system optimized for large datasets, significantly improving search speed and usability. Implemented full CRUD (Create, Read, Update, Delete) operations to manage application data efficiently. Developed reusable template components and utility functions to promote code reusability, maintainability, and consistency across the application. Developed efficient sorting processes to enable users to organize data seamlessly. Led code reviews to maintain high code quality and enforce best practices across the frontend team. Established CI/CD pipelines using AWS Lambda and API Gateway to automate testing and deployment, resulting in faster and more reliable software releases. Collaborated closely with product owners and UX designers to ensure development aligned with business goals and user needs, receiving positive feedback from clients."
          },
          {
            heading: "Front-End Development",
            content: "Built responsive, cross-browser-compatible interfaces using Vue.js, JavaScript (ES6/ES7+), TypeScript, HTML5, CSS3, and Bootstrap to ensure a seamless user experience across devices. Developed reusable Vue.js components and managed global application state with Vuex for consistency and maintainability. Implemented dynamic client-side routing with Vue Router for smooth navigation between views. Integrated RESTful APIs using Axios with async/await for efficient data fetching and synchronization. Utilized Jest for unit testing frontend components to ensure code reliability. Collaborated closely with UX designers and stakeholders to translate wireframes and mockups into functional, user-friendly interfaces."
          },
          {
            heading: "Back-End Development",
            content: "Developed RESTful APIs in Python for inventory tracking, order management, and stock replenishment. Integrated MYSQL databases for efficient data storage and retrieval."
          },
          {
            heading: "Testing & Quality Assurance",
            content: "Utilized Jest and Pytest to validate functionality, ensuring high-quality deliverables."
          },
          {
            heading: "Cloud Integration",
            content: "Leveraged AWS services (Lambda, API Gateway, S3) for application deployment and data management, enhancing scalability and performance."
          },
          {
            heading: "Development Tools",
            content: "Used Git for version control and CI/CD pipelines, VS Code, DBeaver, and Postman for testing and development, and Jira for project tracking."
          },
          {
            heading: "Achievements",
            content: "Delivered the project on time, receiving positive feedback for its user-friendly design and functionality, and improved inventory control processes."
          }
        ]
      },
          {
        title: "Desktop Support Engineer",
        company: "IMSI Staffing Pvt Ltd",
        dates: "Sep 2021 – Feb 2022",
        project_overview: "Supported enterprise IT operations for Kyndryl Solutions, providing technical assistance for end-user devices, systems, and infrastructure during a transitional phase following its separation from IBM.",
        sections: [
          {
            heading: "Description",
            content: "Provided technical support for Windows-based systems, including diagnosing and resolving hardware, software, and network issues; rebuilt PCs after failures with full data and image restoration; maintained inventory of IT assets; and installed and configured desktop systems and peripherals."
          }
        ]
      }
    ]
  }
});
export default {state};
