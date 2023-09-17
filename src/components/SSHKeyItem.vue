<template>
  <div class="sshKey-box box d-flex justify-content-between align-items-center" :class="[active ? 'active' : '']">
    <div class="d-flex align-items-center">
      <input class="form-check-input" type="checkbox" value :id="'check' + sshKey" :checked="active"/>
      <span class="sshKey-name">Key name {{ sshKey + 1 }}</span>
    </div>
    <img
      class="sshKey-img"
      src="../assets/tooltip-icon.svg"
      data-bs-toggle="tooltip"
      data-bs-placement="bottom"
      title="...= username@hostname"
      alt="sshKey-img"
    />
  </div>
</template>

<script>

export default {
  props: {
    active: Boolean,
    sshKey: Number
  },
};
</script>

  