import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export default defineStore('pickeds', () => {
  let pickedRegion = ref({})
  let pickedPlan = ref({})
  let pickedoperatingSystem = ref({})
  let pickedoperatingSystemVersion = ref(-1)
  let pickedsshKey = ref(-1)
  let hostnameCount = ref(1)
  let hostnames = ref([''])
  let alerts = reactive([])
  let showModal = ref(false)

  function fillHostnames() {
    let empty = true

    hostnames.value.forEach((element) => {
      if (element == '') empty = false
    })

    return empty
  }

  function validate() {
    var ready = true

    if (pickedRegion.value.id != pickedPlan.value.region_id) {
      var alert = {
        text: 'Plan is not available for selected region.',
        img: 'warning-icon',
        type: 'warning'
      }
      alerts.push(alert)
      setTimeout(() => {
        alerts.pop()
      }, 5000)
      ready = false
    }

    if (!fillHostnames()) {
      alert = {
        text: 'Please enter hostname.',
        img: 'error-icon',
        type: 'error'
      }
      alerts.push(alert)
      setTimeout(() => {
        alerts.pop()
      }, 5000)
      ready = false
    }

    if (ready) showModal.value = true
    else showModal.value = false
  }

  return {
    pickedRegion,
    pickedPlan,
    pickedoperatingSystem,
    pickedoperatingSystemVersion,
    pickedsshKey,
    hostnameCount,
    hostnames,
    validate,
    alerts,
    showModal
  }
})
