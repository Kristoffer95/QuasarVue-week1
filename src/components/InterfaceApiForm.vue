<template>
  <div class="interface-form bg-white rounded-lg pt-5 relative">
    <span class="custom-padding text-bold text-xl">{{ componentData.title }}</span>
    
    <div class="custom-padding w-full flex flex-col mt-8">
      <div class="flex flex-col ">
        <span class="interface-form-label font-bold">Name</span>
        <input class="interface-form-input outline-none"
          type="text" placeholder="Enter name">
      </div>
      <div class="flex flex-col mt-2">
        <span class="interface-form-label font-bold">Description</span>
        <input class="interface-form-input outline-none"
          type="text" placeholder="Enter description">
      </div>
      <div class="flex flex-col mt-2">
        <span class="interface-form-label font-bold">Path</span>
        <input class="interface-form-input outline-none"
          type="text" placeholder="Enter path">
      </div>
      <div class="flex flex-col mt-2">
        <span class="interface-form-label font-bold">Params</span>
        <input class="interface-form-input outline-none"
          type="text" placeholder="Enter params">
      </div>
      <div class="flex flex-col mt-2">
        <span class="interface-form-label textarea-label font-bold">Outputs</span>
        <textarea class="w-full h-full border p-2 outline-none rounded-lg"
          placeholder="Api response"
          rows="3"
          name="outputs" ></textarea>
      </div>
    </div>

    <div class="custom-padding w-full mt-2">
      <div class="w-2/5 flex justify-between">
        <span class="interface-form-tab cursor-pointer font-semibold">Example 1</span>
        <span class="interface-form-tab cursor-pointer font-semibold">Example 2</span>
      </div>
      <textarea class="w-full h-full border p-2 mt-2 outline-none rounded-lg"
        rows="3"
        name="outputs" ></textarea>
    </div>

    <div class="interface-form-footer custom-padding w-full flex justify-end pb-6 mt-2">
      <Button class="interface-form-button mt-4"
        text="Save" @click.native=""/>
    </div>

  </div>
</template>

<script >
import 'assets/css/tailwind.css'
import { defineComponent, ref } from '@vue/composition-api'
import Button from './Button.vue'


export default defineComponent({
  name: 'InterfaceApiForm',
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
  methods: {
  }
})
</script>

<style>
.custom-padding {
  padding-left: 24px;
  padding-right: 28px;
}
.interface-form{
  width: 500px;
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
.interface-form-footer {
  background-color: #f5f5fa;
}
.interface-form-button {
  /* width: 150px; */
  padding: 10px 0px !important;
}
</style>
