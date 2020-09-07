<template>
  <div class="button py-3 rounded-lg cursor-pointer font-normal text-center" 
    :style="`
      background-color: ${bgColor};
      color: ${color};
    `">
      <span class="px-10">{{ text }}</span>
  </div>
</template>

<script lang="ts">
import 'assets/css/tailwind.css'
import { defineComponent, ref } from '@vue/composition-api'

// const linksData = [
//   {
//     navName: 'Front-end',
//     name: 'frontend',
//     path: '/'
//   }
// ]

export default defineComponent({
  name: 'Button',
  props: {
    text: {
      type: String,
      required: false,
      default: 'Click Me'
    },
    bgColor: {
      type: String,
      required: false,
      default: '#5e81f4'
    },    
    color: {
      type: String,
      required: false,
      default: 'white'
    }
  },
  setup () {
    // const navLinks = ref(linksData)

    return {
      // navLinks
    }
  },
  methods: {}
})
</script>

