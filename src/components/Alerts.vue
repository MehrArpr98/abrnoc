<template>
  <div class="alerts">
    <div
      v-for="(alert, index) in pickedsStore.alerts"
      :key="index"
      class="alert-box"
      :class="[alert.type == 'warning' ? 'warning' : alert.type == 'error' ? 'error' : '']"
    >
      <img class="alert-img" :src="getImgUrl(alert.img)" alt="alert-img" />
      <span class="alert-text">{{ alert.text }}</span>
    </div>
  </div>
</template>

<script>
import usePickedsStore from '../stores/pickeds'

export default {
    
  setup() {

    const pickedsStore = usePickedsStore()


    function getImgUrl(pet) {
      return new URL(`../assets/${pet}.svg`, import.meta.url).href
    }

    return { getImgUrl, pickedsStore}
  }
}
</script>
