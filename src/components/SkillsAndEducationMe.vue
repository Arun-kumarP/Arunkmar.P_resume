<template>
<section class="resume-section" id="skills">
    <div class="resume-section-content">
        <h2 class="mb-3 mt-4">Skills</h2>
        <div class="subheading mb-3">Programming Languages & Tools</div>
        <ul class="list-inline dev-icons">
            <li v-for="skill in state.my_skills.programming_language_and_tools" :key="skill" class="list-inline-item">
                <i><img :src="skill" alt="skills" height="75px" width="75px" /></i>
            </li>
        </ul>
        <div class="subheading mb-3">Courses</div>
        <ul class="fa-ul mb-0">
            <li v-for="course in state.my_skills.online_courses" :key="course.name">
                <i> - <a class="no-underline_2" :href="course.link">{{ course.name }}</a></i>
            </li>
        </ul>
        <h2 class="mb-3 mt-4">Education</h2>
        <div v-for="edu in state.my_education" :key="edu.school" class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
                <a :href="edu.link" class="no-underline">
                    <h3 class="mb-0">{{ edu.school }}</h3>
                </a>
                <div class="subheading mb-3">{{ edu.degree }}</div>
                <p>{{ edu.gpa }}</p>
            </div>
            <div class="flex-shrink-0">
                <span class="text-primary">{{ edu.dates }}</span>
            </div>
        </div>
    </div>
</section>
</template>

  
<script>
import {
    reactive
} from 'vue';

export default {
    name: 'SkillsAndEducationMe',
    props: {
        my_details: Array,
    },
    setup(props) {
        const state = reactive({
            my_skills: props.my_details.skills,
            my_education: props.my_details.education,
        });

        return {
            state,
        };
    },
};
</script>
