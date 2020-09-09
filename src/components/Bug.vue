<template>
  <div class="bug flex flex-col pl-10 pr-5 mr-10 pt-10 pb-20">
    <div class="w-full flex">
      <div class="w-1/2 flex flex-col justify-center" 
        :class="{'border-r' : bugIndex === 0}"
        v-for="(bug, bugIndex) in bugs" :key="bugIndex">
        <span class="mx-auto text-base font-bold">{{ bug.name }}</span>

        <div class="flex px-1">
          <div class="flex flex-col items-center">
            <span class="font-bold">Total</span>
            <span>{{ bug.total }}</span>
          </div>
          <div class="flex justify-between flex-1 ml-6 ">
            <div class="flex flex-col items-center">
              <span class="font-bold">Finished</span>
              <span>{{ bug.finished }}</span>
            </div>
            <div class="flex flex-col items-center">
              <span class="font-bold">Waiting</span>
              <span>{{ bug.waiting_1 }}</span>
            </div>
            <div class="flex flex-col items-center">
              <span class="font-bold">Checked</span>
              <span>{{ bug.checked }}</span>
            </div>
            <div class="flex flex-col items-center">
              <span class="font-bold">Waiting</span>
              <span>{{ bug.waiting_2 }}</span>
            </div>
            <div class="flex flex-col items-center">
              <span class="font-bold">Check</span>
              <span>{{ bug.check }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'assets/css/tailwind.css'
import { defineComponent, ref } from '@vue/composition-api'
import Button from 'components/Button.vue'
import { EventBus } from 'components/event-bus'

const bugsData = [
  { name: 'total bugs', total: '88', finished: '88', waiting_1: '88', checked: '88', waiting_2: '88', check: '88' },
  { name: 'my bugs', total: '88', finished: '88', waiting_1: '88', checked: '88', waiting_2: '88', check: '88' }
]
export default defineComponent({
  name: 'Bug',
  components: {
    Button,
  },
  setup () {
    let bugs = ref(bugsData)
    return {
      bugs
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
  }
})
</script>

<style scoped>
  .bug {
    height: calc(100vh - 48px);
    overflow-y: scroll;
  }
</style>

