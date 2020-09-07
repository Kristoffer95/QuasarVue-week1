<template>
  <div class="interface-api px-6 py-5 border rounded-lg">
    <!-- {{ api }} -->

    
    <div class="w-full flex justify-between">
      <span class="w-1/2 font-bold">Name</span>
      <span class="w-1/2">{{ api.name }}</span>
    </div>
    <div class="w-full flex justify-between mt-3">
      <span class="w-1/2 font-bold">Description</span>
      <span class="w-1/2">{{ api.description }}</span>
    </div>
    <div class="w-full flex justify-between mt-3">
      <span class="w-1/2 font-bold">Path</span>
      <span class="w-1/2">{{ api.path }}</span>
    </div>
    <div class="w-full flex justify-between mt-3">
      <span class="w-1/2 font-bold">Params</span>
      <span class="w-1/2">{{ api.params }}</span>
    </div>
    <div class="w-full flex justify-between mt-3">
      <span class="w-1/2 font-bold">Outputs</span>
      <span class="w-1/2">{{ api.output }}</span>
    </div>

    <div class="w-full mt-10">
      <div class="flex">
        <div class="interface-api-text-link w-1/2 cursor-pointer">
          <span>Example1</span>
        </div>
        <div class="interface-api-text-link w-1/2 cursor-pointer">
          <span>Example2</span>
        </div>
      </div>
      <div class="mt-3 border py-5 px-5 rounded-lg">
        <pre class="interface-api-response">[
  {
    "username": "admin",
    "api_token": "asdf24sadfas",
    "user_id": 123
  }
]       </pre>
      </div>
    </div>
    
    <div class="w-full flex justify-end mt-6">
      <Button class="mx-1" text="Edit" />
      <Button class="mx-1" text="Delete" />
    </div>
  </div>
</template>

<script lang="ts">
import 'assets/css/tailwind.css'
import { defineComponent } from '@vue/composition-api'
import Button from 'components/Button.vue'
import { EventBus } from 'components/event-bus'

export default defineComponent({
  name: 'InterfaceApi',
  components: {
    Button
  },
  props: {
    api: {
      type: Object,
      required: false,
      default: { name: 'Login Api', description: 'desc 1', path: '/api/user/login', params: 'params 1', output: 'output 1', response1: 'this is response 1', response2: 'this is response 2'}
    }
  },
  setup () {
    return {}
  },
  methods: {
    // async showModal(component: string, title: string) {
    //   await EventBus.$emit('show_modal', { component, title });
    // },
    // create() {
    //   this.showModal('Interface-apiApiForm', 'New')
    // },
    // edit() {
    //   this.showModal('Interface-apiApiForm', 'Edit / Delete')
    // }
  }
})
</script>

<style scoped>
  .interface-api-text-link span{
    color: #5e81f4;
    font-weight: bold;
    border-bottom: 1px solid rgba(0,0,0,0);
  }
  .interface-api-text-link span:hover {
    border-bottom: 1px solid #5e81f4;
  }
  .interface-api-response {
    font-size: 12px;
  }
</style>

