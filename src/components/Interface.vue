<template>
  <div class="interface flex justify-center pl-20 pr-10 mr-10 pb-20">
<!-- overflow-y-scroll -->
    <div class="w-full border mt-12 rounded-lg px-10 py-5 flex flex-col justify-center">
      <div class="flex justify-around">
        <span class="interface-links cursor-pointer font-bold"
          v-for="(value, index) in ['Documents', 'Postman']">
          {{ value }}
        </span>
      </div>
      <div class="flex justify-between mt-4">
        <span class="interface-links cursor-pointer font-bold"
          v-for="(value, index) in ['Upload link', 'Open link', 'Upload', 'Download']">
          {{ value }}
        </span>
      </div>
    </div>
    
    <div class="interface-buttons-wrapper w-3/4 flex justify-between items-end mt-12">
      <span class="text-xl font-bold">APIs</span>
      <Button class="interface-button-style"
        text="New" @click.native="create"/>
      <Button class="interface-button-style"
        text="Edit / Delete" @click.native="edit"/>
    </div>
    
    <div class="w-3/4 mt-12">
      <InterfaceApi :class="{'mt-6' : index > 0}"
        v-for="(api, index) in interfaceApi" :key="index"
        :api="api"/>
    </div>
  </div>
</template>

<script lang="ts">
import 'assets/css/tailwind.css'
import { defineComponent, ref } from '@vue/composition-api'
import Button from 'components/Button.vue'
import { EventBus } from 'components/event-bus'

let interfaceApiData = [
  {
    name: 'Login Api',
    description: 'desc 1',
    path: '/api/user/login',
    params: 'params 1',
    output: 'output 1',
    response1: 'this is response 1',
    response2: 'this is response 2',
  },
  {
    name: 'Reg Api',
    description: 'desc 2',
    path: '/api/user/login',
    params: 'params 2',
    output: 'output 2',
    response1: 'this is response 1',
    response2: 'this is response 2',
  }
]

export default defineComponent({
  name: 'Interface',
  components: {
    Button,
    InterfaceApi: () => import('components/InterfaceApi.vue')
  },
  setup () {
    let interfaceApi = ref(interfaceApiData)
    return {
      interfaceApi
    }
  },
  methods: {
    async showModal(component: string, title: string) {
      await EventBus.$emit('show_modal', { component, title });
    },
    create() {
      this.showModal('InterfaceApiForm', 'New')
    },
    edit() {
      this.showModal('InterfaceApiForm', 'Edit / Delete')
    }
  }
})
</script>

<style>
  /* .interface-buttons-wrapper {
    } */
</style>

<style scoped>
  .interface {
    /* background-color: rgba(255, 255, 255, 0.1); */
    height: calc(100vh - 48px);
    overflow-y: scroll;
  }
  .interface-button-style {
    padding: 10px 0px !important;
  }
  .interface-links {
    color: #5e81f4;
    border-bottom: 1px solid rgba(0,0,0,0);
  }
  .interface-links:hover {
    color: #5e81f4;
    border-bottom: 1px solid #5e81f4;
  }
</style>

