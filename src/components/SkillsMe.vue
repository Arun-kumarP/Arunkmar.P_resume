<template>
  <section class="resume-section" id="skills">
    <div class="resume-section-content">
      <h2 class="mb-5">Skills</h2>

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
    </div>
  </section>
</template>
<script>
import { reactive } from 'vue';

export default {
    name: 'EducationMe',
    props: {
      my_details: [],
    },
    setup(props) {
        const state = reactive({
          my_skills: props.my_details.skills,
        })
        return {
            state
        }
    }
}
</script>
