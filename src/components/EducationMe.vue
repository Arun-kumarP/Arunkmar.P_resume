<template>
<section class="resume-section" id="education">
    <div class="resume-section-content">
        <h2 class="mb-5">Education</h2>

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
import { reactive } from 'vue';

export default {
    name: 'EducationMe',
    props: {
        my_details: [],
    },
    setup(props) {
        const state = reactive({
            my_education: props.my_details.education,
        })
        return {
            state
        }
    }
}
</script>
