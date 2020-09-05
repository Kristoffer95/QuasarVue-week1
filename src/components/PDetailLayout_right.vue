<template>
  <div class="detail-layout-left">
    <Header />
    <component :is="$route.query.component" />
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
  },
  setup () {
    
    return { }
  },
})
</script>

<style>
.detail-layout-left {
  border-left: 1px solid #ececf2;
}
</style>