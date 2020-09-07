<template>
  <div class="interface-form bg-white rounded-lg pt-5 relative">
    <span class="custom-padding text-bold text-xl">{{ componentData.title }}</span>

    <div class="custom-padding w-full flex flex-col mt-8">
      <div class="flex flex-col mt-2">
        <span class="interface-form-label font-bold">Module name</span>
        <input class="interface-form-input outline-none"
          type="text" placeholder="Module name">
      </div>
      <div class="flex flex-col mt-2">
        <span class="interface-form-label font-bold">List page</span>
        <input class="interface-form-input outline-none"
          type="text" placeholder="List name">
      </div>
      
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
  name: 'ListEdit',
  components: {
    Button,
    Dropdown: () => import('components/Dropdown.vue')
  },
  props: {
    componentData: {
      type: Object,
      required: true
    }
  },
  setup () {
    return { }
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
  width: 150px;
  padding: 10px 0px !important;
}
</style>
