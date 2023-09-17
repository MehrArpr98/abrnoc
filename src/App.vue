<template>
  <div>
    <Navbar />

    <Sidebar />

    <div class="content">
      <div class="row m-0">
        <div class="col-8 p-0 col-big">
          <div class="col-container">
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
import { onMounted } from 'vue'
import { Tooltip } from 'bootstrap'

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
    Alerts
  },
  setup() {
    onMounted(() => {
      new Tooltip(document.body, {
        selector: "[data-bs-toggle='tooltip']"
      })
    })

    
    return {}
  }
}
</script>

<style>
.content {
  position: absolute;
  left: 220px;
  right: 0%;
  top: 60px;
  padding: 2rem;
  background: #f1f9fe;
}

.col-container {
  background: white;
  border-radius: 8px;
}
.col-small {
  position: fixed;
  right: 2rem;
  width: calc(283px + 1rem) !important;
  height: 324px;
}
.col-big {
  width: calc(100% - 1rem - 283px) !important;
}
.col-small .col-container {
  padding: 2rem 20px;
}

.card-label,
.counter-div .number {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.0025em;
  color: #2f3857;
}

.counter-div {
  width: 100%;
  height: 40px;
  display: flex;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  margin: 4px 0 24px;
}
.counter-div button {
  height: 100%;
  width: 48px;
}

.counter-div .number {
  width: calc(100% - 96px);
  border-left: 1px solid #bdbdbd;
  border-right: 1px solid #bdbdbd;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
}

.counter-div button:disabled {
  border-color: white !important;
  opacity: 0.26 !important;
}

.deploy-btn button {
  height: 40px;
  background: #00cd82 !important;
  color: white !important;
  border-radius: 4px;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.0125em;
  text-transform: uppercase;
}

.deploy-btn button:disabled {
  background: rgba(0, 0, 0, 0.12) !important;
  color: rgba(0, 0, 0, 0.26) !important;
}

.price {
  height: 32px;
  margin-bottom: 28px;
}
.price-title,
.price-number {
  /* font-family: 'Roboto'; */
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.0025em;
  color: #2f3857;
}

.price-number {
  font-weight: 500;
  font-size: 24px;
}
.price-number .price-number-per {
  color: #757575;
  font-weight: normal;
  font-size: 16px;
}

.alerts {
  width: 360px;
  position: fixed;
  left: calc(50% - 180px);
  top: 20px;
  z-index: 2;
}

.alert-box {
  width: 100%;
  border-radius: 4px;
  padding: 16px;
  transition: 0.5s;
  opacity: 0;
  margin-bottom: 10px;
}

.alert-box .alert-img {
  margin-right: 1rem;
}
.alert-box .alert-text {
  font-weight: 400;
  line-height: 24px;
  font-size: 16px;
}
.alert-box.error {
  background: #fcf2fa;
  border: 1px solid #ff4465;
  animation: show 3s;
}
.alert-box.warning {
  background: #fffaed;
  border: 1px solid #fac802;
  animation: show 3s;
}

@keyframes show {
  0% {
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
</style>
