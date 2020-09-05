<template>
  <div class="w-full flex flex-col">
    <div class="pt-2" 
      v-for="(folder, folderIndex) in data" :key="folderIndex" >
      <i class="cursor-pointer text-xl"
        :class="openedFolder.filter(i => i === folderIndex).length > 0 ? 'icon-folder_open' : 'icon-folder'"
        @click="toggleFolder(folderIndex)">
      </i>
      <span class="cursor-pointer text-lg" @click="toggleFolder(folderIndex)">
        {{ folder.title | capitalize}}
      </span>

      <div class="pl-5 py-1"  
        v-if="openedFolder.filter(i => i === folderIndex).length > 0 ? true : false"
        v-for="(file, fileIndex) in folder.data" :key="fileIndex">
        <i class="icon-insert_drive_file cursor-pointer text-lg"></i>
        <span class="cursor-pointer text-md ">{{ file | capitalize }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import 'assets/css/tailwind.css'
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'Dropdown',
  props: {
    data: {
      type: Array,
      required: false,
      default: [{ title: 'folder 1', data: ['data 1', 'data 2', 'data 3'] }]
    }
  },
  setup () {
    const openedFolder = ref([])
    return {
      openedFolder
    }
  },
  computed: {},
  methods: {
    async toggleFolder(folder) {
      let index = this.openedFolder.findIndex(id => id === folder)

      if(index === -1) {
        return this.openedFolder.push(folder)
      }
      this.openedFolder.splice(index, 1)
    },
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
  
})
</script>


