<template>
  <div class="detail-layout-left flex flex-col bg-white pl-4">
    <span class="text-2xl font-bold mt-2">Modules</span>

    <div class="flex items-center mt-5">
      <span class="text-md font-bold mr-3">Port</span>
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

const dropdown = ['one', 'two', 'three', 'one', 'two', 'three']
const folder = [
  {
    title: 'folder 1',
    data: ['data 1', 'data 2', 'data 3']
  },
  {
    title: 'folder 2',
    data: ['data 1', 'data 2', 'data 3']
  },
  {
    title: 'folder 3',
    data: ['data 1', 'data 2', 'data 3']
  }
]

export default defineComponent({
  name: 'PDetailLayout-left',
  components: {
    Dropdown: () => import(`components/Dropdown.vue`),
    Folder: () => import(`components/Folder.vue`)
  },
  setup () {
    const dropdownData = ref(dropdown)
    const folderData = ref(folder)
    
    return { 
      dropdownData,
      folderData
    }
  },
})
</script>

<style scoped>
.detail-layout-left {
  width: 300px;
  /* border-right: 1px solid #F0F0F3; */
  border-right: 1px solid #ececf2;
}
</style>


