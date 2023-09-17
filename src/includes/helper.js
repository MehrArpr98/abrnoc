export default {
  getImgUrl(pet) {
    return new URL(`../assets/${pet}.svg`, import.meta.url).href
  }
}
