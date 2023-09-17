<template>
  <div
    class="region-box box"
    :class="[active ? 'active' : '']"
    :id="region.id"
  >
    <img class="region-img" :src="getImgUrl(region.name)" alt="region-img" />
    <span class="region-name">{{ region.name }}</span>
  </div>
</template>

<script>
export default {
  props: {
    active: Boolean,
    region: Object
  },
  setup() {
    function getImgUrl(pet) {
      return new URL(`../assets/${pet}.svg`, import.meta.url).href
    }

    return { getImgUrl }
  }
}
</script>

