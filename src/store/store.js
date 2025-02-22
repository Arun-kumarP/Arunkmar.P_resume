import { reactive } from 'vue';

// Create a reactive state object
const state = reactive({
  my_details: {
    about: {
      first_name: 'Arunkumar',
      last_name: 'P',
      address: 'B-2,44,VedhaFlats, Pine Street, Tirutheri SingaperumalKovil:[603204].',
      mail_id: 'arunfozy@gmail.com',
      role: 'I am an experienced web developer with a strong focus on leveraging modern web development frameworks to design and build scalable, user-centric applications. With a deep understanding of agile methodologies, I ensure the efficient delivery of high-quality solutions while embracing continuous improvement. My work is driven by a passion for creating seamless user experiences and optimizing performance, while maintaining a commitment to collaborative teamwork and innovation.',
      github_link: 'https://github.com/Arun-kumarP',
      linkedin_link: 'https://www.linkedin.com/in/arunkumar-p-7a7608261',
      instagram_link: 'https://www.instagram.com/_arunified?igsh=cXo5c3E0bmxsbno4&utm_source=qr',
      profile_image: require('@/assets/img/Arun.jpeg')
    },
    education: [
      {
        school: "Government College of Technology - Coimbatore",
        degree: "BE - Production Engineer",
        link: "https://gct.ac.in/",
        gpa: "GPA: 8.1",
        dates: "2018 - 2021",
      },
      {
        school: "SRNM Polytechnic College - Sattur",
        degree: "DME - Mechanical Engineer",
        link: "https://srnmcollege.ac.in/",
        gpa: "GPA: 8.2",
        dates: "2015 - 2018",
      },
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
        title: "Web Developer",
        company: "Tata Consultancy Services",
        dates: "February 2022 - Present",
        project_overview: "Designed and developed a dynamic web application to optimize inventory management, enabling real-time stock tracking, efficient order management, and streamlined replenishment processes, resulting in improved operational efficiency and user satisfaction.",
        sections: [
          {
            heading: "Front-End Development",
            content: "Built responsive, cross-browser-compatible interfaces using Vue.js, JavaScript (ES6/ES7+), TypeScript, HTML5, CSS, and Bootstrap, ensuring a seamless user experience. Leveraged the Axios library and async/await for efficient RESTful API integration, enabling smooth data retrieval and updates. Implemented reusable components to promote code reusability and consistency across the application. Utilized Vuex for efficient state management, ensuring centralized control over application data. Employed Vue Router to handle navigation and routing between views, enhancing the overall user experience with dynamic page transitions. Collaborated with stakeholders to design and deliver a user-friendly interface."
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
      }
    ]
  }
});

// Export the store's state and methods
export default {
  state
};
