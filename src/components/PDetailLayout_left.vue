<template>
  <div class="detail-layout-left flex flex-col bg-white pl-4" >
    <div class="mt-4 flex">
      <span class="text-2xl mr-32">Modules</span>
      <i class="add-list-icon icon-add text-xl cursor-pointer" @click="addList "></i>
    </div>
    <div class="flex items-center mt-6">
      <span class="dropdown-title font-bold mr-3">Port</span>
      <Dropdown :data="dropdownData" class=""/>
    </div>
    
    <div class="mt-5">
      <Folder :data="folderData"/>
    </div>
  </div>
</div>
</template>

<script>
import 'assets/css/tailwind.css'
import { defineComponent, ref } from '@vue/composition-api'
import { EventBus } from 'components/event-bus'

const dropdown = ['one', 'two', 'three', 'one', 'two', 'three']

export default defineComponent({
  name: 'PDetailLayout-left',
  components: {
    Dropdown: () => import(`components/Dropdown.vue`),
    Folder: () => import(`components/Folder.vue`)
  },
  setup () {
    const dropdownData = ref(dropdown)
    const folderData = ref([])
    
    return { 
      dropdownData,
      folderData
    }
  },
  mounted() {
    this.folderData = this.$store.state.detail.folder
  },
  methods: {
    async showModal(component, title) {
      await EventBus.$emit('show_modal', { component, title });
    },
    addList() {
      this.showModal('ListForm', 'New List')
    }
    
  }
})
</script>

<style scoped>
.detail-layout-left {
  width: 300px;
  /* border-right: 1px solid #F0F0F3; */
  border-right: 1px solid #ececf2;
}
.dropdown-title {
  font-size: 16px;
}
.add-list-icon::before {
  margin: 0 !important;
  padding: 5px !important;
  color: white;
  /* border: 1px solid red; */
  display: initial;
  border-radius: 100%;
  /* background-color: #268BFA; */
  background-color: #5e81f4;
  
}
</style>


