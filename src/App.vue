<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">{{ fullName }}</span>
        <span class="d-none d-lg-block">
          <img class="img-fluid img-profile rounded-circle mx-auto mb-2" :src="profileImage" alt="Profile" />
        </span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav">
          <li v-for="section in sections" :key="section.id" class="nav-item">
            <a class="nav-link js-scroll-trigger" :href="`#${section.id}`">{{ section.label }}</a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Page Content -->
    <div class="container-fluid p-0">
      <section v-for="section in sections" :key="section.id" :id="section.id" class="resume-section">
        <div class="resume-section-content">
          <component :is="section.component" :my_details="myDetails"></component>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';

import AboutMe from "./components/AboutMe.vue";
import ExperienceMe from "./components/Experience_tcs.vue";
import SkillsAndEducationMe from "./components/SkillsAndEducationMe.vue";

import store from './store/store';

// Accessing store state directly
const myDetails = store.state.my_details;

// Computed properties for name and profile image
const fullName = computed(() => `${myDetails.about.first_name} ${myDetails.about.last_name}`);
const profileImage = computed(() => myDetails.about.profile_image);

// Sections configuration
const sections = [
  { id: "about", label: "About", component: AboutMe },
  { id: "experience", label: "Experience", component: ExperienceMe },
  { id: "skills-and-education", label: "Skills & Education", component: SkillsAndEducationMe }
];

// ScrollSpy and navbar toggling behavior
onMounted(() => {
  const sideNav = document.querySelector("#sideNav");
  if (sideNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#sideNav",
      rootMargin: "0px 0px -40%"
    });
  }

  const navbarToggler = document.querySelector(".navbar-toggler");
  const navLinks = document.querySelectorAll("#navbarResponsive .nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700');
@import url('https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i');
@import "./assets/styles.css";
</style>
