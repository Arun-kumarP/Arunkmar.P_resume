<template>
  <section class="resume-section" id="experience">
    <div class="resume-section-content">
      <h2 class="mb-2 mt-4">Experience</h2>
      <div
        v-for="job in processedExperience"
        :key="job.company + job.title + job.dates"
        class="d-flex flex-column flex-md-row justify-content-between mb-5"
      >
        <div class="flex-grow-1">
          <h3 class="mb-0">{{ job.company }}</h3>
          <div class="subheading mb-3">{{ job.title }}</div>
          <div class="content">
            <h4>Project Overview:</h4>
            <p><strong>{{ job.project_overview }}</strong></p>

            <div v-for="section in job.sections" :key="section.heading">
              <h5><strong>{{ section.heading }}:</strong></h5>

              <ul v-if="section.splitContent">
                <li v-for="(point, idx) in section.splitContent" :key="idx">
                  {{ point }}.
                </li>
              </ul>

              <p v-else>{{ section.content }}</p><br />
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

<script setup>
import { defineProps, computed } from 'vue'
const props = defineProps({
  my_details: {
    type: Object,
    required: true
  }
})
const processedExperience = computed(() => {
  return props.my_details.experience.map(job => ({
    ...job,
    sections: job.sections.map(section => ({
      ...section,
      splitContent: section.heading === 'Key Contributions'
        ? section.content.split('.').map(s => s.trim()).filter(s => s.length > 0)
        : null
    }))
  }))
})
</script>
