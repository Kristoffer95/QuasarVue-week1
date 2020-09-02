<template>
  <div>
    This is header
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

const linksData = [
  {
    name: 'Front-end'
  },
  {
    name: 'Interface'
  },
  {
    name: 'Communication'
  },
  {
    name: 'Bug'
  }
]

export default defineComponent({
  name: 'Header',
  setup () {
    const navLinks = ref(linksData)

    return {
      navLinks
    }
  }
  // props: {
  //   title: {
  //     type: String,
  //     required: true
  //   },

  //   caption: {
  //     type: String,
  //     default: ''
  //   },

  //   link: {
  //     type: String,
  //     default: '#'
  //   },

  //   icon: {
  //     type: String,
  //     default: ''
  //   }
  // }
})
</script>
