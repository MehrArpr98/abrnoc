<template>
  <div class="hostName-box">
    <input
      class="hostName-name"
      type="text"
      :placeholder="'Name ' + index"
      v-model="pickedsStore.hostnames[index - 1]"
    />
  </div>
</template>

<script>
import usePickedsStore from '../stores/pickeds'

export default {
  props: {
    index: Number
  },
  setup() {
    const pickedsStore = usePickedsStore()

    return { pickedsStore }
  }
}
</script>
