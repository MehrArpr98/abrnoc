<template>
  <div class="sshKey">
    <div class="title">
      SSH Keys
      <span class="optional">(optional)</span>
    </div>
    <div class="sshKeys row">
      <div class="col-4 pb-3">
        <div class="sshKey-box">
          <img class="sshKey-img addNew-button" src="../assets/add-new.svg" alt="add-new-img" />
          <span class="sshKey-name">Add New</span>
        </div>
      </div>
      <div class="col-4 pb-3" v-for="(sshKey,index) in sshKeys" :key="sshKey">
        <label class="d-block">
          <input
            class="form-check-input d-none"
            type="radio"
            name="radioDefaultsshKeys"
            :id="'radiosshKeys'+index"
            v-model="picked_sshKey"
            :value="index"
          />
          <SSHKeyItem :active="picked_sshKey === index" :sshKey="sshKey" />
        </label>
      </div>
    </div>
  </div>
</template>
  
<script>
import { ref, watch } from "vue";
import SSHKeyItem from "./SSHKeyItem.vue";
import usePickedsStore from '../stores/pickeds'

export default {
  components: {
    SSHKeyItem
  },
  setup() {
    const sshKeys = ref([0, 1, 2]);
    const picked_sshKey = ref(-1);
    const pickedsStore = usePickedsStore()

    watch(picked_sshKey,() => {
      pickedsStore.$patch((state) => {
        state.pickedsshKey = sshKeys.value[picked_sshKey.value]
      })
    })
    
    return {  sshKeys, picked_sshKey };
  }
};
</script>
