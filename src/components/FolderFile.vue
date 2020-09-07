<template>
  <div class="flex items-center">
    <i class="icon-insert_drive_file cursor-pointer text-lg"></i>
    <span class="tooltip text-md ml-5 flex">
      <span class="cursor-pointer">{{ file | capitalize }}</span>
      <span class='flex tooltip-text bg-white border justify-between rounded'>
        <div class="tooltip-items flex flex-col" @click="listEdit">
          <i class="icon-edit text-xl cursor-pointer" ></i>
          <span class="text-xs cursor-pointer">Edit</span> 
        </div>
        <div class="tooltip-items flex flex-col" @click="listDelete">
          <i class="icon-delete text-xl cursor-pointer"></i>
          <span class="text-xs cursor-pointer">Delete</span> 
        </div>
      </span>
    </span>
    
  </div>
</template>

<script>
import 'assets/css/tailwind.css'
import { defineComponent, ref } from '@vue/composition-api'
import { EventBus } from 'components/event-bus'

export default defineComponent({
  name: 'FolderFile',
  props: {
    file: {
      type: String,
      required: false,
    }
  },
  setup () {
    return {
    }
  },
  computed: {},
  methods: {
    async showModal(component, title) {
      await EventBus.$emit('show_modal', { component, title });
    },
    listEdit() {
      this.showModal('ListEdit', 'Edit Page')
    },
    listDelete() {
      this.showModal('ListDelete', 'Delete Page')
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

<style scoped>
  .tooltip {
    position: relative;
    padding-right: 7px;
  }
  .tooltip .tooltip-text {
    visibility: hidden;
    text-align: center;
    width: 100px;
    padding: 5px 10px;
    position: absolute;
    top: -20px;
    left: 47px;
    z-index: 20;
  }
  /* .tooltip .tooltip-text {
    visibility: hidden;
    text-align: center;
    width: 100px;
    padding: 5px 10px;
    position: absolute;
    top: -60px;
    left: -20px;
    z-index: 20;
  } */
  .tooltip:hover .tooltip-text {
    visibility: visible;
    /* color: #5e81f4; */
  }
  .tooltip-items:hover {
    color: #5e81f4;
  }
</style>

