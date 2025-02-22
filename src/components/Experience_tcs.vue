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
    
