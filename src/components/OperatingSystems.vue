<template>
  <div class="operatingSystem">
    <div class="title">Operating System</div>
    <div class="operatingSystems row">
      <div class="col-4 pb-4" v-for="(operatingSystem, index) in operatingSystems" :key="operatingSystem.family">
        <label class="d-block">
          <input
            class="form-check-input d-none"
            type="radio"
            name="radioDefaultoperatingSystems"
            :id="'radiooperatingSystems' + index"
            v-model="picked_operatingSystem"
            :value="index"
          />
          <OperatingSystemItem
            :active="picked_operatingSystem === index"
            :operatingSystem="operatingSystem"
          />
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import OperatingSystemItem from './OperatingSystemItem.vue'
import usePickedsStore from '../stores/pickeds'
import { onMounted, ref, watch, inject } from 'vue'

export default {
  components: {
    OperatingSystemItem
  },
  setup() {
    const operatingSystems = ref([])
    const picked_operatingSystem = ref(-1)
    const $axios = inject('$axios')

    const pickedsStore = usePickedsStore()

    watch(picked_operatingSystem, async () => {
      pickedsStore.$patch((state) => {
        state.pickedoperatingSystem = operatingSystems.value[picked_operatingSystem.value]
      })
    })

    onMounted(async () => {
      const resp = await $axios.get('https://4wr7y.wiremockapi.cloud/operating_systems')

      var obj = []
      obj = resp.data.reduce((acc, cur) => {
        const family = cur.family
        if (!acc[family]) {
          acc[family] = []
        }
        acc[family].push(cur.version)
        return acc
      }, {})

      Object.keys(obj).forEach((key) => {
        operatingSystems.value.push({ family: key, version: obj[key] })
      })
    })

    return { operatingSystems, picked_operatingSystem }
  }
}
</script>
