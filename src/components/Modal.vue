<template>
<div v-if="modalStatus" class="absolute w-screen h-screen top-0 flex flex-col justify-center items-center bg-gray-600 bg-opacity-25">
  
  
  <div class="relative">
    <component class="overflow-hidden"
    :is="componentData.name" 
    :componentData="componentData"
    v-on-clickaway="hideModal"
    />
    <i class="icon-close text-2xl absolute" @click="hideModal"/>
  </div>
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
/* .close-icon {
  height:inherit;
  top: -40px;
  right: -40px;
  border: 1px solid black;
  border-radius: 100%;
} */
.icon-close {
  top: -40px;
  right: -40px;
}

.icon-close::before {
  cursor: pointer;
  margin: 0 !important;
  padding: 5px !important;
  color: #718096;
  border: 1px solid #718096;
  border-radius: 100%;
}
.icon-close:hover::before {
  color: black;
  border: 1px solid black;
}

</style>

