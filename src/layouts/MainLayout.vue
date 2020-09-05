<template>
  <div class="main-layout w-screen h-screen">
    <Header />

    <div>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import 'assets/css/tailwind.css'
import Header from 'components/Header.vue'

// const linksData = [
//   {
//     title: 'Docs',
//     caption: 'quasar.dev',
//     icon: 'school',
//     link: '/'
//   },
//   {
//     title: 'Github',
//     caption: 'github.com/quasarframework',
//     icon: 'code',
//     link: 'https://github.com/quasarframework'
//   }
// ]

import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'MainLayout',
  components: { Header },
  setup () {
    // const leftDrawerOpen = ref(false)
    // const essentialLinks = ref(linksData)

    return { 
      // leftDrawerOpen, 
      // essentialLinks
    }
  },
  methods: {
    // @ts-expect
    async goToPage (link: any) {
      await this.$router.push(link)
    }
  }
})
</script>

<style>
.main-layout {
  background-color: #f5f5fa;
}
</style>