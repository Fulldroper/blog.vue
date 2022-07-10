<template>
  <div class="container">
    <audio controls>
      <source
        src="https://raw.githubusercontent.com/Fulldroper/life/master/www/assets/mutation.mp3?token=GHSAT0AAAAAABU3ME6MUMPWNAWXRQRHP45OYWLFFKQ"
        type="audio/mp3"
      >
    </audio>
  </div>
</template>

<script>
export default {
  props: {
    date: {
      default: "xx.xx.xxxx",
      type: String
    }
  }
}
</script>

<style scoped>
  .container {
    border-color: red;
  }
</style>