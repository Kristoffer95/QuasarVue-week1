<template>
<div v-if="modalStatus" class="absolute w-screen h-screen top-0 flex justify-center items-center bg-gray-600 bg-opacity-25">

  <component class="overflow-hidden"
    :is="componentData.name" 
    :componentData="componentData"
    v-on-clickaway="hideModal"/>
  <!-- <InterfaceForm v-on-clickaway="hideModal"/> -->
</div>
</template>

<script>
import 'assets/css/tailwind.css'
import { defineComponent, ref } from '@vue/composition-api'

import { mixin as clickaway } from 'vue-clickaway';
import { EventBus } from 'components/event-bus'

export default defineComponent({
  name: 'Header',
  mixins: [ clickaway ],
  components: {
    InterfaceForm: () => import(`components/InterfaceForm.vue`)
  },
  setup () {
    const modalStatus = ref(false)
    const componentName = ref('')
    return {
      modalStatus,
      componentName: 'InterfaceForm',
      componentData: {
        name: '',
        title: ''
      }
    }
  },
  methods: {
    hideModal () {
      this.modalStatus = false
    },
  },
  mounted() {
    EventBus.$on('show_modal', ({ component, title, status = true}) => {
      this.componentData.name = component
      this.componentData.title = title
      this.modalStatus = status
    })
  },
  beforeDestroy() {
		EventBus.$off('show_modal');
  }
})
</script>

<style>

</style>

