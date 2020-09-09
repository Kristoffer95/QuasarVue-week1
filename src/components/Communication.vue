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

    <div class=" w-full p-12 bg-gray-300 flex justify-center mt-12 rounded-lg" @dragover="dragover" @dragleave="dragleave" @drop="drop">
      <input type="file" multiple name="fields[assetsFieldHandle][]" id="assetsFieldHandle" 
        class="w-px h-px opacity-0 overflow-hidden absolute" @change="onChange" ref="file" accept=".pdf,.jpg,.jpeg,.png" />

      <label for="assetsFieldHandle" class="block cursor-pointer">
        <div>
          You can drop files in here or <span class="underline">click here</span> to upload a file
        </div>
      </label>
      <ul class="mt-4" v-if="this.filelist.length" v-cloak>
        <li class="text-sm p-1 text-center" v-for="(file, index) in filelist" :key="index">
          {{file.name}}
          <button type="button" @click="remove(filelist.indexOf(file))" title="Remove file">x</button>
        </li>
      </ul>

      <!-- <textarea name="" id="" cols="30" rows="10" @paste="paste">
        https://ourcodeworld.com/articles/read/491/how-to-retrieve-images-from-the-clipboard-with-javascript-in-the-browser
      </textarea> -->
      
    </div>
    
  </div>
</template>

<script>
import 'assets/css/tailwind.css'
import { defineComponent, ref } from '@vue/composition-api'
import Button from 'components/Button.vue'
import { EventBus } from 'components/event-bus'


export default defineComponent({
  name: 'Communication',
  components: {
    Button,
  },
  setup () {
    let filelist = ref([]);
    return {
      filelist
    }
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
    onChange() {
      // this.filelist = [...this.$refs.file.files]; // NOTE: single file
      this.filelist.push(...this.$refs.file.files);  // NOTE: multiple files
    },
    remove(i) {
      this.filelist.splice(i, 1);
    },
    dragover(event) {
      event.preventDefault();
      // Add some visual fluff to show the user can drop its files
      if (!event.currentTarget.classList.contains('bg-green-300')) {
        event.currentTarget.classList.remove('bg-gray-100');
        event.currentTarget.classList.add('bg-green-300');
      }
    },
    dragleave(event) {
      // Clean up
      event.currentTarget.classList.add('bg-gray-100');
      event.currentTarget.classList.remove('bg-green-300');
    },
    drop(event) {
      event.preventDefault();
      this.$refs.file.files = event.dataTransfer.files;
      this.onChange(); // Trigger the onChange event manually
      // Clean up
      event.currentTarget.classList.add('bg-gray-100');
      event.currentTarget.classList.remove('bg-green-300');
    },
    paste(event) {
      console.log(event.clipboardData.files)
      event.preventDefault();
      this.$refs.file.files = event.clipboardData.files;
      this.onChange();
    },
  }
})
</script>

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

