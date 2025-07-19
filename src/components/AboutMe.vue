<template>
<section class="resume-section" id="about">
    <div class="resume-section-content">
        <h1>
            {{ props.my_details.about.first_name}}
            <span class="text-primary"> {{ props.my_details.about.last_name}}</span>
        </h1>
        <div class="subheading mb-5 ">
           <div><img :src="props.my_details.about.address_icon" alt="address_icon" class="mb-1" height="30px" width="25px" /><span>{{ props.my_details.about.address}}&nbsp;&nbsp;</span></div> 
           <div><img :src="props.my_details.about.mail_id_icon" alt="mail_id_icon" class=" mb-1" height="30px" width="25px" /> <span><a :href="'mailto:' + props.my_details.about.mail_id">{{ props.my_details.about.mail_id }},</a>&nbsp;&nbsp;</span></div>
           <div><img :src="props.my_details.about.phone_number_icon" alt="phone_number_icon" class=" mb-1" height="30px" width="25px" /><span>{{ props.my_details.about.phone_number }}.</span></div>
        </div>
        <p class="lead mb-5">
            {{ props.my_details.about.role}}
        </p>
        <div class="social-icons">
            <a class="social-icon" :href=" props.my_details.about.linkedin_link"><i class="fab fa-linkedin-in"></i></a>
            <a class="social-icon" :href=" props.my_details.about.github_link"><i class="fab fa-github"></i></a>
        </div>
    </div>
</section>
</template>

<script setup>
import { defineProps ,onMounted} from 'vue'
const props = defineProps({
  my_details: {
    type: Object,
    required: true
  }
})
onMounted(()=>{console.log(props)})
</script>
