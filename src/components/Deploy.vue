<template>
  <main>
    <div class="card-label">Instance quantity:</div>
    <div class="counter-div">
      <button
        role="button"
        aria-label="dec-button"
        class="btn dec"
        @click="decrement"
        :disabled="disableDec"
      >
        <img src="../assets/dec.svg" alt="dec-img" />
      </button>
      <div class="number">{{ count }}</div>
      <button role="button" aria-label="inc-button" class="btn inc" @click="increment">
        <img src="../assets/inc.svg" alt="inc-img" />
      </button>
    </div>

    <div class="form-check">
      <input class="form-check-input" type="checkbox" value id="IPv4Check" />
      <label class="form-check-label ms-2" for="IPv4Check">Enable IPv4</label>
    </div>

    <hr class="mt-4 mb-4" />

    <div class="price d-flex justify-content-between">
      <span class="price-title">Total</span>

      <span class="price-number">
        $ {{ pickedsStore.pickedPlan.monthly_price }}
        <span class="price-number-per">/month</span>
      </span>
    </div>

    <div class="d-grid deploy-btn">
      <button
        class="btn"
        type="button"
        :disabled="
          !(
            Object.keys(pickedsStore.pickedPlan).length !== 0 &&
            Object.keys(pickedsStore.pickedoperatingSystem).length !== 0 &&
            pickedsStore.pickedoperatingSystemVersion > 0
          )
        "
        @click="pickedsStore.validate"
      >
        Deploy now
      </button>
    </div>
  </main>
</template>

<script>
import { ref, watch } from 'vue'
import usePickedsStore from '../stores/pickeds'

export default {
  setup() {
    const disableDec = ref(true)
    const count = ref(1)

    const pickedsStore = usePickedsStore()

    watch(count, () => {
      pickedsStore.$patch((state) => {
        state.hostnameCount = count.value
      })
    })

    function increment() {
      count.value++
      pickedsStore.$patch((state) => {
        state.hostnames.push('')
      })
      if (count.value > 1) {
        disableDec.value = false
      }
    }

    function decrement() {
      count.value--
      pickedsStore.$patch((state) => {
        state.hostnames.pop()
      })
      if (count.value > 1) {
        disableDec.value = false
      } else if (count.value == 1) {
        disableDec.value = true
      }
    }

    return { pickedsStore, disableDec, count, increment, decrement }
  }
}
</script>
