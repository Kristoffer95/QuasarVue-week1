<template>
  <div class="project-detail w-screen h-screen">
    
    <!-- <Header /> -->

    <div>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import 'assets/css/tailwind.css'
// import Header from 'components/Header.vue'

import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'MainLayout',
  components: { 
    // Header 
  },
  setup () {

    return { }
  },
  methods: {
    // @ts-expect
  }
})
</script>

<style>
.project-detail {
  background-color: #f5f5fa;
}
</style>