<template>
  <div id="q-app" class="relative">
    <router-view class="app-route-view" />
    <Modal />
  </div>
</template>
<script lang="ts">
import 'assets/fontello/css/fontello.css'
import { defineComponent } from '@vue/composition-api'
import Modal from 'components/Modal.vue'

export default defineComponent({
  name: 'App',
  components: {
    Modal
  },

})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

* { font-family: 'Lato', sans-serif; }

.app-route-view {
  max-width: 2000px !important;
  margin: 0 auto;
}

img {
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}
</style>