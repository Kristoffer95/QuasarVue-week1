<template>
  <div class="interface-form bg-white rounded-lg px-24 pt-12">

    <span class="text-bold text-xl">{{ componentData.title }}</span>
    
    <div class="w-full flex flex-col mt-8">
      <div class="flex flex-col ">
        <span class="interface-form-label ">Name</span>
        <input class="interface-form-input outline-none"
          type="text" placeholder="Enter name">
      </div>
      <div class="flex flex-col mt-2">
        <span class="interface-form-label ">Description</span>
        <input class="interface-form-input outline-none"
          type="text" placeholder="Enter description">
      </div>
      <div class="flex flex-col mt-2">
        <span class="interface-form-label ">Path</span>
        <input class="interface-form-input outline-none"
          type="text" placeholder="Enter path">
      </div>
      <div class="flex flex-col mt-2">
        <span class="interface-form-label ">Params</span>
        <input class="interface-form-input outline-none"
          type="text" placeholder="Enter params">
      </div>
      <div class="flex flex-col mt-2">
        <span class="interface-form-label textarea-label ">Outputs</span>
        <textarea class="w-full h-full border p-2 outline-none rounded-lg"
          placeholder="Api response"
          rows="3"
          name="outputs" ></textarea>
      </div>
    </div>

    <div class="w-full mt-2">
      <div class="w-2/5 flex justify-between">
        <span class="interface-form-tab cursor-pointer font-semibold">Example 1</span>
        <span class="interface-form-tab cursor-pointer font-semibold">Example 2</span>
      </div>
      <textarea class="w-full h-full border p-2 mt-2 outline-none rounded-lg"
        rows="3"
        name="outputs" ></textarea>
    </div>

    <div class="w-1/2">
      <Button class="mt-4"
      text="Save" @click.native=""/>
    </div>
  </div>
</template>

<script lang="ts">
import 'assets/css/tailwind.css'
import { defineComponent, ref } from '@vue/composition-api'
import Button from './Button.vue'


export default defineComponent({
  name: 'InterfaceForm',
  components: {
    Button
  },
  props: {
    componentData: {
      type: Object,
      required: true
    }
  },
  setup () {
    return {
    }
  },
  methods: {}
})
</script>

<style>
.interface-form{
  width: 600px;
  height: 800px;
  border: 1px solid #ececf2;
}
.interface-form-label {
  color: #8181a5;
  line-height: 21px;
}
.interface-form-input {
  border-bottom: 1px solid #F0F0F3;
  line-height: 45px;
  color: #1c1d21;
}
.textarea-label {
  margin-bottom: 15px;
}
.interface-form-input::placeholder {
  font-size: 12px;
  color: #8181a5;
}
.interface-form-tab {
  color: #5e81f4;
  border-bottom: 1px solid rgba(0,0,0,0);
}
.interface-form-tab:hover {
  color: #5e81f4;
  border-bottom: 1px solid #1b51e5;
}
</style>
