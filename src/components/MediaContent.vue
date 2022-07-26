<template>
  <div class="container">
    <div>{{ title }}</div>
    <div v-if="type === 'video'">
      <video :src="src" controls></video>
    </div>
    <div v-else>
      <img :src="src" loading="lazy" :alt="title" />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.refs = this.$refs;
  },
  props: {
    type: {
      default: "",
      type: String,
    },
    src: {
      default: "",
      type: String,
    },
    title: {
      default: "Undefined track name",
      type: String,
    },
  },
  methods: {},
};
</script>

<style scoped>
video,
img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
</style>