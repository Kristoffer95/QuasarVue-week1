<template>
  <div class="dropdown-wrapper cursor-pointer relative" v-on-clickaway="hide">
    <div class="dropdown-button flex justify-center items-center rounded-md" @click="toggle">
      <div class="dropdown-title flex-1 flex items-center pl-5 font-bold">
        <span>{{ selected === '' ? data[0] : selected }}</span>
      </div>
      <div class="dropdown-icon">
        <i class="dropdown-icon-inner icon-keyboard_arrow_down"/>
      </div>
    </div>

    <div class="dropdown-list-wrapper absolute bg-white" v-if="isClicked">
      <div class="dropdown-list-inner-wrapper rounded-md mt-2 flex flex-col">
        <span class="dropdown-list-inner-text pl-5 leading-7 py-1 font-bold" 
          :class="{'border-t' : index > 0}"
          @click="select(value)"
          v-for="(value, index) in data">
          {{ value }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import 'assets/css/tailwind.css'
import { defineComponent, ref } from '@vue/composition-api'
import { mixin as clickaway } from 'vue-clickaway';

export default defineComponent({
  name: 'Dropdown',
  mixins: [ clickaway ],
  props: {
    data: {
      type: Array,
      required: false,
      default: ['one', 'two', 'three']
    }
  },
  setup () {
    const isClicked = ref(false)
    const selected = ref('')
    return {
      isClicked,
      selected
    }
  },
  methods: {
    hide() {
      this.isClicked = false;
    },
    toggle() {
      this.isClicked = !this.isClicked;
    },
    select(value) {
      this.selected = value
      this.toggle()
    }
  }
})
</script>

<style >
.dropdown-list-wrapper {
  width: 130px;
  z-index: 30;
}
.dropdown-wrapper {
  width: 130px;
}
.dropdown-button {
  overflow: hidden;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 1px solid #ececf2;
  background-color: white;
}
.dropdown-button .dropdown-title {
  margin-top: -2px;
  color: #20253D;
  font-size: 16px;
}
.dropdown-button .dropdown-icon {
  position: relative;
  width: 40px;
  height: 100%;
  color: #8181a5;
  cursor: pointer;
}
.dropdown-button .dropdown-icon .dropdown-icon-inner {
  position: absolute;
  width: 100%;
  height: 100%;
}
.dropdown-button .dropdown-icon-inner::before {
  position: absolute;
  display: initial;
  padding: 0 !important;
  margin: 0 !important;
  font-size: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.dropdown-list-inner-wrapper {
  border: 1px solid #ececf2;
  background-color: white;
  color: #20253D;
}
.dropdown-list-inner-text:hover {
  color: #5e81f4;
  background-color: #f5f5fa;
}
</style>

