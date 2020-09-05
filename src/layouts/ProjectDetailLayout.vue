<template>
  <div class="project-detail w-screen h-screen flex">
    
    <!-- left -->
    <PDetailLayout-left class="h-full border"/>

    <div class="flex-1">
      <router-view />
    </div>
    <PDetailLayout-right class="flex-1"/>
  </div>
</template>

<script lang="ts">
import 'assets/css/tailwind.css'
// import Header from 'components/Header.vue'

import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'MainLayout',
  components: { 
    'PDetailLayout-left': () => import(`components/PDetailLayout_left.vue`),
    'PDetailLayout-right': () => import(`components/PDetailLayout_right.vue`)
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