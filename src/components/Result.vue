<template>
  <div class="myModal">
    <div class="myModal-dialog">
      <div class="myModal-content">
        <div class="myModal-header">
          <h1 class="myModal-title fs-5">Result</h1>
          <button
            type="button"
            class="btn-close"
            @click="pickedsStore.showModal = !pickedsStore.showModal"
          ></button>
        </div>
        <div class="modal-body">
          <div class="modal-body-item">
            <div class="modal-body-item-title">Region</div>
            <img class="region" :src="getImgUrl(pickedsStore.pickedRegion.name)" alt="region-img" />
            <span>{{ pickedsStore.pickedRegion.name }}</span>
          </div>
          <div class="modal-body-item">
            <div class="modal-body-item-title">Plan</div>
            <div class="modal-body-item-plan">
              <div>
                monthly price <br />
                <span>{{ pickedsStore.pickedPlan.monthly_price }}</span>
              </div>
              <div>
                memory size <br />
                <span>{{ pickedsStore.pickedPlan.memory_size_in_GB }}</span>
              </div>
              <div>
                cpu cores <br />
                <span>{{ pickedsStore.pickedPlan.cpu_cores }}</span>
              </div>
            </div>
          </div>
          <div class="modal-body-item">
            <div class="modal-body-item-title">Operating system</div> 
            <img :src="getImgUrl(pickedsStore.pickedoperatingSystem.family)" alt="operatingSystem-img" />
            <span>{{ pickedsStore.pickedoperatingSystem.family }}</span>&nbsp; version&nbsp; 
            <span>{{ pickedsStore.pickedoperatingSystemVersion }}</span>
          </div>
          <div class="modal-body-item" v-if="pickedsStore.pickedsshKey !== -1">
            <div class="modal-body-item-title">SSH Keys(optional)</div>
            <span>Key name {{ pickedsStore.pickedsshKey + 1 }}</span>
          </div>
          <div class="modal-body-item">
            <div class="modal-body-item-title">Host names</div>
            <span v-for="(host,index) in pickedsStore.hostnames" :key="index">{{ host }}<span v-if="index < pickedsStore.hostnames.length - 1">&nbsp;,&nbsp;</span></span>
            
          </div>
        </div>
      </div>
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
    return { pickedsStore, getImgUrl }
  }
}
</script>

