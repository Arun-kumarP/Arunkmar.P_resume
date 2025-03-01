<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">{{ state.name }}</span>
        <span class="d-none d-lg-block">
          <img class="img-fluid img-profile rounded-circle mx-auto mb-2" :src="state.profile_image" alt="Profile" />
        </span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav">
          <li v-for="section in state.sections" :key="section.id" class="nav-item">
            <a class="nav-link js-scroll-trigger" :href="`#${section.id}`">{{ section.label }}</a>
          </li>
        </ul>
      </div>
    </nav>
    
    <!-- Page Content -->
    <div class="container-fluid p-0">
      <section v-for="section in state.sections" :key="section.id" :id="section.id" class="resume-section">
        <div class="resume-section-content">
          <component :is="section.component" :my_details="my_details"></component>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, onMounted } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import * as bootstrap from 'bootstrap';        // Import Bootstrap JS
import AboutMe from "./components/AboutMe.vue";
import ExperienceMe from "./components/Experience_tcs.vue";
import SkillsAndEducationMe from "./components/SkillsAndEducationMe.vue";
import store from './store/store';  

export default defineComponent({
  name: 'App',
  components: {
    AboutMe,
    ExperienceMe,
    SkillsAndEducationMe
  },
  setup() {
    // Access store's my_Details directly in the component setup
    const my_details = store.state.my_details;

    // Directly accessing store state (reactive object isn't needed)
    const state = reactive({
      // Sections for the navigation
      sections :[
      { id: "about", label: "About", component: AboutMe },
      { id: "experience", label: "Experience", component: ExperienceMe },
      { id: "skills-and-education", label: "skills-and-education", component: SkillsAndEducationMe },
    ],
      name: my_details.about.first_name + ' ' + my_details.about.last_name,
      profile_image: my_details.about.profile_image,
    })

    // code for sidemenu
    onMounted(() => {
      // Activate Bootstrap scrollspy on the main nav element
      const sideNav = document.body.querySelector("#sideNav");
      if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
          target: "#sideNav",
          rootMargin: "0px 0px -40%",
        });
      }

      // Collapse responsive navbar when toggler is visible
      const navbarToggler = document.body.querySelector(".navbar-toggler");
      const responsiveNavItems = Array.from(
        document.querySelectorAll("#navbarResponsive .nav-link")
      );
      responsiveNavItems.forEach((responsiveNavItem) => {
        responsiveNavItem.addEventListener("click", () => {
          if (window.getComputedStyle(navbarToggler).display !== "none") {
            navbarToggler.click();
          }
        });
      });
    });

    return {
      state,
      my_details  
    };
  }
});
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700');
@import url('https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i');
@import "./assets/styles.css";
</style>
