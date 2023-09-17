<template>
  <div class="hostName">
    <div class="title">Hostname</div>

    <div class="hostNames row">
      <div class="col-6 pb-3" v-for="index in pickedsStore.hostnameCount" :key="index">
        <HostNameItem :index="index" />
      </div>
    </div>
  </div>
</template>

<script>
import HostNameItem from './HostNameItem.vue'
import usePickedsStore from '../stores/pickeds'

export default {
  components: {
    HostNameItem
  },
  setup() {
    const pickedsStore = usePickedsStore()

    return { pickedsStore }
  }
}
</script>
