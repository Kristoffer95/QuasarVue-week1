<template>
<div v-if="modalStatus" class="absolute w-screen h-screen top-0 flex flex-col justify-center items-center bg-gray-600 bg-opacity-25">
  
  
  <div class="relative">
    <component class="overflow-hidden"
    :is="componentData.name" 
    :componentData="componentData"
    v-on-clickaway="hideModal"
    />
    <i class="modal-close-icon icon-close text-2xl absolute" @click="hideModal"/>
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
    InterfaceApiForm: () => import(`components/InterfaceApiForm.vue`),
    ListAdd: () => import(`components/ListAdd.vue`),
    ListEdit: () => import(`components/ListEdit.vue`),
    ListDelete: () => import(`components/ListDelete.vue`)
  },
  setup () {
    const modalStatus = ref(false)
    return {
      modalStatus,
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
.modal-close-icon {
  top: 15px;
  right: 15px;
}

.modal-close-icon::before {
  display: initial;
  cursor: pointer;
  margin: 0px !important;
  padding: 5px !important;
  color: #718096;
  border-radius: 100%;
}
.modal-close-icon:hover::before {
  color: black;
}

</style>

