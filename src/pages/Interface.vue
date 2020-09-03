<template>
  <div class="interface w-screen flex flex-col justify-center items-center">

    <div class="interface-buttons mt-20 flex justify-between">
      <Button text="New" @click.native="create"/>
      <Button text="Edit / Delete" @click.native="edit"/>
    </div>
    
    <!-- <div class="inner-width bg-white mt-20 form-style rounded-lg">
      
    </div> -->
  </div>
</template>

<script lang="ts">
import 'assets/css/tailwind.css'
import { defineComponent } from '@vue/composition-api'
import Button from 'components/Button.vue'
import { EventBus } from 'components/event-bus'

export default defineComponent({
  name: 'PageInterface',
  components: {
    Button
  },
  setup () {
    return {}
  },
  methods: {
    async showModal(component: string, title: string) {
      await EventBus.$emit('show_modal', { component, title });
    },
    create() {
      this.showModal('InterfaceForm', 'New')
    },
    edit() {
      this.showModal('InterfaceForm', 'Edit / Delete')
    }
  }
})
</script>

<style>
  .interface-buttons {
    width: 450px;
  }
</style>

