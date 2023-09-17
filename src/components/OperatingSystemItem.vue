<template>
  <div class="operatingSystem-box box" :class="[active ? 'active' : '']">
    <img class="operatingSystem-img" :src="getImgUrl(operatingSystem.family)" alt="operatingSystem-img" />
    <span class="operatingSystem-name">{{ operatingSystem.family}}</span>
    <select
      class="form-select"
      aria-label=".form-select-lg example"
      :disabled="!active"
      v-model="operatingSystem_version" 
    >
      <option value="0" :selected="!active">Select version</option>
      <option :value="item" v-for="item in operatingSystem.version" :key="item">{{ item}}</option>
    </select>
  </div>
</template>
  
<script>
import {ref, watch} from 'vue'
import usePickedsStore from '../stores/pickeds'

export default {
  props: {
    active: Boolean,
    operatingSystem: Object
  },
  setup() {
    const operatingSystem_version = ref(0)
    const pickedsStore = usePickedsStore()

    watch(operatingSystem_version, () => {
      pickedsStore.$patch((state) => {
        state.pickedoperatingSystemVersion = operatingSystem_version.value
      })
    })
    
    watch(() => pickedsStore.pickedoperatingSystem, () => {
      operatingSystem_version.value = 0
      pickedsStore.$patch((state) => {
        state.pickedoperatingSystemVersion = 0
      })
    })

    function getImgUrl(pet) {
      return new URL(`../assets/${pet}.svg`, import.meta.url).href
    }

    return { operatingSystem_version, getImgUrl };
  }
};
</script>

  