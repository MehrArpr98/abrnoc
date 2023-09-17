<template>
  <div class="plan">
    <div class="title">Plan</div>
    <div class="mt-3">
      <table class="table">
        <thead>
          <tr>
            <th style="width: 64px"></th>
            <th style="width: 18%">CPU</th>
            <th style="width: 18%">Memory</th>
            <th style="width: 18%">Storage</th>
            <th style="width: 18%">Connection speed</th>
            <th style="width: 18%">Monthly price</th>
          </tr>
        </thead>
        <tbody v-if="plansReady">
          <tr v-for="(item, index) in plans" :key="index">
            <td scope="row" class="first-col">
              <input
                class="form-check-input"
                type="radio"
                name="radioDefaultPlans"
                :id="'radioPlans' + index"
                v-model="picked_plan"
                :value="index"
                :aria-label="'check'+index"
              />
              <label :for="'radioPlans' + index"></label>
            </td>
            <td>{{ item.cpu_cores }} CPU</td>
            <td>{{ item.memory_size_in_GB }} GB</td>
            <td>{{ 4 * item.memory_size_in_GB }} GB</td>
            <td>Up to {{ item.connection_up_bound_speed }} Gbps</td>
            <td class="d-flex justify-content-between last-col">
              $ {{ item.monthly_price }}
              <img
                src="../assets/tooltip-icon.svg"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                :title="item.hourly_price + ' hours'"
                alt="tooltip-img"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import usePickedsStore from '../stores/pickeds'
import { onMounted, ref, watch, inject } from 'vue'

export default {
  setup() {
    const picked_plan = ref(-1)
    const plansReady = ref(false)
    const plans = ref([])
    const $axios = inject('$axios')
    const pickedsStore = usePickedsStore()

    watch(() => pickedsStore.pickedRegion.name, updatePlans)

    watch(picked_plan,() => {
      pickedsStore.$patch((state) => {
        state.pickedPlan = plans.value[picked_plan.value]
      })
    })

    onMounted(() => updatePlans)

    async function updatePlans() {
      const resp = await $axios.get(
        `https://4wr7y.wiremockapi.cloud/plans?region=${pickedsStore.pickedRegion.name}`
      )
      plans.value = resp.data
      plansReady.value = true
    }

    return { plans, picked_plan, plansReady }
  }
}
</script>
