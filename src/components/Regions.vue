<template>
  <div class="region">
    <div class="title">Region</div>

    <div class="regions row">
      <div class="col-4 pb-3" v-for="(region, index) in regions" :key="region.id">
        <label class="d-block">
          <input
            class="form-check-input d-none"
            type="radio"
            name="radioDefaultRegions"
            :id="'radioRegions' + index"
            v-model="picked_region"
            :value="index"
          />
          <RegionItem :active="picked_region === index" :region="region" />
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import RegionItem from './RegionItem.vue'
import usePickedsStore from '../stores/pickeds'
import { ref, onMounted, inject, watch } from 'vue'

export default {
  components: {
    RegionItem
  },
  setup() {
    const regions = ref([])
    const picked_region = ref(0)
    const $axios = inject('$axios')
    const pickedsStore = usePickedsStore()


    watch(picked_region, () => {
      pickedsStore.$patch((state) => {
        state.pickedRegion = regions.value[picked_region.value]
      })
    })

    onMounted(async () => {
      const resp = await $axios.get('https://4wr7y.wiremockapi.cloud/regions')
      regions.value = resp.data
      pickedsStore.$patch((state) => {
        state.pickedRegion = regions.value[picked_region.value]
      })
    })

    return { regions, picked_region }
  }
}
</script>
