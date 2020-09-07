<template>
  <div class="communication flex pl-20 pr-10 mr-10 pt-10 pb-20">
    <div class="w-full flex justify-end items-center">
      <input class="communication-input-text outline-none rounded-lg" type="text">
      <span class="communication-input-label font-bold">Date filter/developer filter</span>
    </div>

    <div class="w-full flex mt-10">
      <div class="flex flex-col">
        <img class="communication-image-profile" draggable="false"
        :src="getImgUrl()" alt="profile">
        <span class="mt-5 font-bold">Nickname</span>
      </div>
      <div class="flex-1 px-10">
        <span class="text-2xl">Title</span>
      </div>
    </div>

    <div class="w-full flex justify-between">
      <img class="communication-image-grid rounded-lg mt-6" draggable="false"
        :src="getImgUrl()" alt="profile">
      <img class="communication-image-grid rounded-lg mt-6" draggable="false"
        :src="getImgUrl()" alt="profile">
      <img class="communication-image-grid rounded-lg mt-6" draggable="false"
        :src="getImgUrl()" alt="profile">
      <img class="communication-image-grid rounded-lg mt-6" draggable="false"
        :src="getImgUrl()" alt="profile">
      <img class="communication-image-grid rounded-lg mt-6" draggable="false"
        :src="getImgUrl()" alt="profile">
      <div class="communication-image-grid add-image-icon border rounded-lg mt-6 flex justify-center items-center bg-white">
        <i class="icon-add text-5xl"></i>
      </div>
    </div>

    <div>
      
    </div>
    
  </div>
</template>

<script lang="ts">
import 'assets/css/tailwind.css'
import { defineComponent, ref } from '@vue/composition-api'
import Button from 'components/Button.vue'
import { EventBus } from 'components/event-bus'


export default defineComponent({
  name: 'Interface',
  components: {
    Button,
  },
  setup () {
    return { }
  },
  methods: {
    // getImgUrl(img_name: string) {
    getImgUrl() {
      return require('assets/images/profile.jpeg')
    },
    // async showModal(component: string, title: string) {
    //   await EventBus.$emit('show_modal', { component, title });
    // },
    // create() {
    //   this.showModal('InterfaceApiForm', 'New')
    // },
  }
})
</script>

<style>
img {
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}
</style>

<style scoped>
  .communication {
    height: calc(100vh - 48px);
    overflow-y: scroll;
  }
  .communication-input-text {
    padding: 5px 10px;
    width: 200px;
    border: 1px solid#ececf2;
  }
  .communication-input-label {
    margin-left: 10px;
  }
  .communication-image-profile {
    width: 150px;
    border-radius: 10px
  }
  .communication-image-grid {
    width: 200px;
    height: 200px;
    object-fit: cover;
    cursor: pointer;
  }
  .add-icon-div {
    width: 200px;
    height: 200px;
  }
  .add-image-icon {
    color: gray;
  }
  .add-image-icon:hover {
    color: black;
    background-color: #f5f5fa !important;

  }
  /* .interface {
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
  } */
</style>

