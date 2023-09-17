<template>
  <div>
    <Navbar />

    <Sidebar />

    <div class="content">
      <div class="row m-0">
        <div class="col-8 p-0 col-big">
          <div class="col-container">
            <Result v-if="pickedsStore.showModal" />

            <Alerts />

            <Regions />

            <Plans />

            <OperatingSystems />

            <SSHKeys />

            <HostNames />
          </div>
        </div>
        <div class="col-4 pe-0 ps-3 col-small">
          <div class="col-container">
            <Deploy />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
import Plans from './components/Plans.vue'
import Regions from './components/Regions.vue'
import OperatingSystems from './components/OperatingSystems.vue'
import SSHKeys from './components/SSHKeys.vue'
import HostNames from './components/HostNames.vue'
import Deploy from './components/Deploy.vue'
import Alerts from './components/Alerts.vue'
import Result from './components/Result.vue'
import { onMounted } from 'vue'
import { Tooltip } from 'bootstrap'
import usePickedsStore from './stores/pickeds'

export default {
  name: 'App',
  components: {
    Sidebar,
    Navbar,
    Regions,
    Plans,
    OperatingSystems,
    SSHKeys,
    HostNames,
    Deploy,
    Alerts,
    Result
  },
  setup() {
    const pickedsStore = usePickedsStore()

    onMounted(() => {
      new Tooltip(document.body, {
        selector: "[data-bs-toggle='tooltip']"
      })
    })

    return { pickedsStore }
  }
}
</script>
