<template>
<section class="resume-section" id="about">
    <div class="resume-section-content">
        <h1>
            {{ state.my_about.first_name}}
            <span class="text-primary"> {{ state.my_about.last_name}}</span>
        </h1>
        <div class="subheading mb-5 ">
           <div><img :src="state.my_about.address_icon" alt="address_icon" class="mb-1" height="30px" width="25px" /><span>{{ state.my_about.address}}&nbsp;&nbsp;</span></div> 
           <div><img :src="state.my_about.mail_id_icon" alt="mail_id_icon" class=" mb-1" height="30px" width="25px" /> <span><a :href="'mailto:' + state.my_about.mail_id">{{ state.my_about.mail_id }},</a>&nbsp;&nbsp;</span></div>
           <div><img :src="state.my_about.phone_number_icon" alt="phone_number_icon" class=" mb-1" height="30px" width="25px" /><span>{{ state.my_about.phone_number }}.</span></div>
        </div>
        <p class="lead mb-5">
            {{ state.my_about.role}}
        </p>
        <div class="social-icons">
            <a class="social-icon" :href=" state.my_about.linkedin_link"><i class="fab fa-linkedin-in"></i></a>
            <a class="social-icon" :href=" state.my_about.github_link"><i class="fab fa-github"></i></a>
        </div>
    </div>
</section>
</template>

<script>
import {
    reactive
} from 'vue';

export default {
    name: 'AboutMe',
    props: {
        my_details: [],
    },
    setup(props) {
        const state = reactive({
            my_about: props.my_details.about,
        })
        return {
            state
        }
    }
}
</script>
