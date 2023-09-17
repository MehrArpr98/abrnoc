<template>
  <div class="myNavbar position-fixed z-1 top-0 end-0 bg-white border-bottom">
    <div class="d-flex justify-content-between align-items-center h-100 p-4 pt-0 pb-0">
      <div><span class="gray">Instances &nbsp;&nbsp;/</span> &nbsp;&nbsp; New Instance</div>
      <div class="d-flex flex-row-reverse align-items-center">
        <img
          class="profile-img mx-3 me-0"
          src="../assets/user.svg"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          :title="user.first_name +' '+ user.last_name" 
          alt="user-img"
        />
        <div class="devider bg-gray my-2 "></div>
        <div class="cost mx-3 px-2 py-1">
          <img class="plus" src="../assets/plus.svg" alt="plus-img" />
          $ {{ user.balance}} 
        </div>
        <div class="bell position-relative">
          <img src="../assets/bell.svg" alt="bell-img" />
          <div class="red-dott position-absolute top-0 rounded-circle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, inject } from 'vue'

export default {
  setup() {
    const user = ref({})

    const $axios = inject('$axios');
    onMounted(async() => {
      const resp = await $axios.get('https://4wr7y.wiremockapi.cloud/user-info')
      user.value = resp.data
    })

    return { user }
  }
}
</script>

