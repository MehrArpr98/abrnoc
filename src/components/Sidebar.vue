<template>
  <div class="sidebar">
    <div class="logo">
      <img src="../assets/logo.svg" alt="logo-img" />
    </div>
    <div class="d-flex justify-content-between flex-column h-100">
      <div class="list-group list-group-items1">
        <button type="button" class="list-group-item list-group-item-action">
          <img src="../assets/dashboard.svg" class="button-img" alt="dashboard-img" />
          <span class="button-text">Dashboard</span>
        </button>
        <button
          type="button"
          class="list-group-item list-group-item-action active"
          aria-current="true"
        >
          <img src="../assets/instances.svg" class="button-img" alt="instances-img" />
          <span class="button-text">Instances</span>
        </button>
        <button type="button" class="list-group-item list-group-item-action">
          <img src="../assets/snapshots.svg" class="button-img" alt="snapshots-img" />
          <span class="button-text">Snapshots</span>
        </button>
        <button type="button" class="list-group-item list-group-item-action">
          <img src="../assets/ssh.svg" class="button-img" alt="ssh-img" />
          <span class="button-text">SSH Keys</span>
        </button>
        <button type="button" class="list-group-item list-group-item-action" disabled>
          <img src="../assets/volume.svg" class="button-img" alt="volume-img" />
          <span class="button-text">Volume</span>
        </button>
        <div class="line"></div>
        <button type="button" class="list-group-item list-group-item-action">
          <img src="../assets/billing.svg" class="button-img" alt="billing-img" />
          <span class="button-text">Billing</span>
          <span class="arrow-down">
            <a
              @click="expanded = !expanded"              
              role="button"
            >
              <img src="../assets/arrow-down.svg" alt="arrow-down-img" />
            </a>
          </span>
        </button>
        <div class="" :class="{ 'd-none' : !expanded,}" id="childs">
          <ul>
            <li>Billing 1</li>
            <li>Billing 2</li>
          </ul>
        </div>
        <button type="button" class="list-group-item list-group-item-action">
          <img src="../assets/networking.svg" class="button-img" alt="networking-img" />
          <span class="button-text">Networking</span>
        </button>
        <button type="button" class="list-group-item list-group-item-action">
          <img src="../assets/report.svg" class="button-img" alt="report-img" />
          <span class="button-text">Report</span>
        </button>
      </div>

      <div class="list-group list-group-items2">
        <button type="button" class="list-group-item list-group-item-action">
          <img src="../assets/support.svg" class="button-img" alt="support-img" />
          <span class="button-text">Support</span>
        </button>
        <button type="button" class="list-group-item list-group-item-action">
          <img src="../assets/help.svg" class="button-img" alt="help-img" />
          <span class="button-text">Help</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  setup() {
    const expanded = ref(false)

    return { expanded }
  }
}
</script>
