<template>
  <div class="list-delete bg-white rounded-lg pt-5 relative">
    <span class="custom-padding text-bold text-xl">{{ componentData.title }}</span>

    <div class="custom-padding w-full flex flex-col mt-8 mb-6">
      <div class="flex flex-col">
        <span class="list-delete-label font-bold">Are you sure you want to delete this page?</span>
      </div>
    </div>


    <div class="list-delete-footer custom-padding w-full flex justify-end pb-6 mt-2">
      <Button class="list-delete-button mt-4"
        text="Save" @click.native=""/>
    </div>

  </div>
</template>

<script >
import 'assets/css/tailwind.css'
import { defineComponent, ref } from '@vue/composition-api'
import Button from './Button.vue'


export default defineComponent({
  name: 'ListDelete',
  components: {
    Button,
  },
  props: {
    componentData: {
      type: Object,
      required: true
    }
  },
  setup () {
    let newModule = ref(false)
    return {
      newModule
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
.list-delete{
  width: 500px;
  border: 1px solid #ececf2;
}
.list-delete-label {
  color: #8181a5;
  line-height: 21px;
  /* font-size: 16px; */
}
.list-delete-input {
  border-bottom: 1px solid #F0F0F3;
  line-height: 45px;
  color: #1c1d21;
}
.textarea-label {
  margin-bottom: 15px;
}
.list-delete-input::placeholder {
  font-size: 12px;
  color: #8181a5;
}
.list-delete-tab {
  color: #5e81f4;
  border-bottom: 1px solid rgba(0,0,0,0);
}
.list-delete-tab:hover {
  color: #5e81f4;
  border-bottom: 1px solid #1b51e5;
}
.list-delete-footer {
  background-color: #f5f5fa;
}
.list-delete-button {
  width: 150px;
  padding: 10px 0px !important;
}
</style>
