<template>
  <div class="interface-form bg-white rounded-lg pt-5 relative">
    <span class="custom-padding text-bold text-xl">{{ componentData.title }}</span>

    <div class="custom-padding w-full flex flex-col mt-8">
      <div class="flex items-center">
        <input class="interface-form-input outline-none mr-2" v-model="newModule"
          type="checkbox" placeholder="Module name">
        <span class="interface-form-label font-bold cursor-pointer" @click="newModule = !newModule">Create new module</span>
      </div>
      
      <div v-if="newModule" class="flex flex-col mt-2" >
        <span class="interface-form-label font-bold">Module name</span>
        <input class="interface-form-input outline-none"
          type="text" placeholder="Module name">
      </div>

      <div v-else class="flex flex-col mt-2">
        
        <Dropdown />
      </div>
      
      <div class="flex flex-col mt-2">
        <span class="interface-form-label font-bold">List page</span>
        <input class="interface-form-input outline-none"
          type="text" placeholder="List name">
      </div>

      <div class="mt-5">
        <div class="flex items-center mt-2" v-for="(value, index) in ['Mobile', 'Server', 'Other']" :key="index">
          <input :id="`${value+index}`" name="radios" class="list-add-radio mr-3" type="radio">
          <label :for="`${value+index}`" class="list-add-text font-bold cursor-pointer">{{ value }} name</label>
        </div>
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
  name: 'ListForm',
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
.list-add-radio {
  height: 15px;
  width: 15px;
}
/* .list-add-text {
  color: #1c1d21;
} */
/* appearance-none checked:bg-gray-900 checked:border-transparent */
/* .list-add-radio {
  width: 20px;
  height: 20px;
  border-radius: 10px;
  outline: none;

} */
input[type='radio'] {
  width: 20px;
  height: 20px;
}
input[type='radio']:checked {
  -webkit-appearance: none;
  /* width: 20px;
  height: 20px; */
  border-radius: 50%;
  outline: none;
  /* border: 1px solid gray; */
  background-color: blue;
}

input[type='radio']:before {
  content: '';
  display: block;
  width: 60%;
  height: 60%;
  margin: 20% auto;
  border-radius: 50%;
  /* background-color: red; */
}

input[type="radio"]:checked:before {
  background: white;
  width: 40%;
  height: 40%;
  margin-top: 6px;
  /* border: 5px solid gray; */

}
</style>
