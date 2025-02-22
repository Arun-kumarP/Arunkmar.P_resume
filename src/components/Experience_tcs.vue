<!-- <template>
<section class="resume-section" id="experience">
    <div class="resume-section-content">
        <h2 class="mb-2">Experience</h2>

        <div v-for="job in state.my_experience" :key="job.title" class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
                <h3 class="mb-0">{{ job.title }}</h3>
                <div class="subheading mb-3">{{ job.company }}</div>
                <div class="content">
                    <h4>Project Overview:</h4>
                    <p><strong>Designed and developed a dynamic web application to optimize inventory management, enabling real-time stock tracking, efficient order management, and streamlined replenishment processes, resulting in improved operational efficiency and user satisfaction.</strong></p>
                    <ul>
                        <li><strong>Front-End Development:</strong> Built responsive, cross-browser-compatible interfaces using Vue.js, JavaScript(ES6/ES7+), TypeScript, HTML5, CSS, and Bootstrap, ensuring a seamless user experience. Leveraged the Axios library and async/await for efficient RESTful API integration, enabling smooth data retrieval and updates. Implemented reusable components to promote code reusability and consistency across the application. Utilized Vuex for efficient state management, ensuring centralized control over application data. Employed Vue Router to handle navigation and routing between views, enhancing the overall user experience with dynamic page transitions. Collaborated with stakeholders to design and deliver a user-friendly interface.</li><br>
                        <li><strong>Back-End Development:</strong> Developed RESTful APIs in Python for inventory tracking, order management, and stock replenishment. Integrated MYSQL databases for efficient data storage and retrieval.</li><br>
                        <li><strong>Testing & Quality Assurance:</strong> Utilized Jest and Pytest to validate functionality, ensuring high-quality deliverables.</li><br>
                        <li><strong>Cloud Integration:</strong> Leveraged AWS services (Lambda, API Gateway, S3) for application deployment and data management, enhancing scalability and performance.</li><br>
                        <li><strong>Development Tools:</strong> Used Git for version control and CI/CD pipelines, VS Code, DBeaver, and Postman for testing and Development, and Jira for project tracking.</li><br>
                        <li><strong>Achievements:</strong> Delivered the project on time, receiving positive feedback for its user-friendly design and functionality, and improved inventory control processes.</li>
                    </ul>
                </div>
            </div>
            <div class="flex-shrink-0">
                <span class="text-primary">{{ job.dates }}</span>
            </div>
        </div>
    </div>
</section>
</template>
<script>
import { reactive } from 'vue';

export default {
    name: 'Experience_tcs',
    setup() {
        const state = reactive({
            experience: [{
                title: "Web Developer",
                company: "Tata Consultancy Services",
                dates: "February 2022 - Present",
                description: '',
            }],
        })
        return {
            state
        }
    }
}
</script> -->

<template>
    <section class="resume-section" id="experience">
        <div class="resume-section-content">
            <h2 class="mb-2">Experience</h2>
    
            <div v-for="job in state.my_experience" :key="job.title" class="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div class="flex-grow-1">
                    <h3 class="mb-0">{{ job.title }}</h3>
                    <div class="subheading mb-3">{{ job.company }}</div>
                    <div class="content">
                        <h4>Project Overview:</h4>
                        <p><strong>{{ job.project_overview }}</strong></p>
                        
                        <div v-for="(section, index) in job.sections" :key="index">
                            <h5><strong>{{ section.heading }}:</strong></h5>
                            <p>{{ section.content }}</p><br>
                        </div>
    
                    </div>
                </div>
                <div class="flex-shrink-0">
                    <span class="text-primary">{{ job.dates }}</span>
                </div>
            </div>
        </div>
    </section>
    </template>
    
    <script>
    import { reactive } from 'vue';
    
    export default {
        name: 'Experience_tcs',
        props: {
        my_details: [],
    },
    setup(props) {
        const state = reactive({
            my_experience: props.my_details.experience,
        })
        return {
            state
        }
    }
}
    </script>
    
