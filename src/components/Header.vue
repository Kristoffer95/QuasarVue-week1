<template>
  <div class="header bg-white w-full h-12 flex justify-between">
    <div class="flex items-center pl-4">
      <!-- logo area -->
      <!-- <span class="w-10 h-10 bg-blue-500 rounded-full cursor-pointer"></span> -->
    </div>
    <div class="flex items-center justify-end pr-4">
      <span class="header-nav pl-8 text-base font-medium cursor-pointer"
        v-for="(link, index) in navLinks" :key="index"
        @click="goToPage(link)">
        {{ link.name | capitalize }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import 'assets/css/tailwind.css'
import { defineComponent, ref } from '@vue/composition-api'

const linksData = [
  {
    navName: 'Front-end',
    name: 'frontend',
    path: '/detail'
  },
  {
    navName: 'Interface',
    name: 'interface',
    path: '/detail'
  },
  {
    navName: 'Communication',
    name: 'communication',
    path: '/communication'
  },
  {
    navName: 'Bug',
    name: 'bug',
    path: '/detail'
  }
]

export default defineComponent({
  name: 'Header',
  setup () {
    const navLinks = ref(linksData)

    return {
      navLinks
    }
  },
  methods: {
    goToPage(link: any) {
      if(link.name !== 'interface') return
      const props  ={
        component: link.name
      };
      this.$router.replace({
        query: props
      })
    }
  },
  filters: {
    capitalize(value: string) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
})
</script>

<style>
.header {
  border-bottom: 1px solid#ececf2;
}
.header-nav {
  color: #5e81f4;
}
</style>
