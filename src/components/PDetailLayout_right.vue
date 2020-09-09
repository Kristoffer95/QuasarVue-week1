<template>
  <div class="detail-layout-left">
    <Header />
    <component class="PDetailLayout-right bg-white"
      :is="$route.query.component" />
  </div>
</div>
</template>

<script>
import 'assets/css/tailwind.css'
import { defineComponent, ref } from '@vue/composition-api'
import Header from './Header.vue'

export default defineComponent({
  name: 'PDetailLayout-right',
  components: {
    Header,
    Interface: () => import(`components/Interface.vue`),
    Communication: () => import(`components/Communication.vue`),
    Bug: () => import(`components/Bug.vue`),
  },
  setup () {
    
    return { }
  },
})
</script>

<style scoped>
.PDetailLayout-right {
  border-radius: 17px;
  /* border-left: 1px solid #ececf2; */
}
</style>