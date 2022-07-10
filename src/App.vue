<template>
  <div>
    <Post />
    <Post />
    <Post />
    <Post />
  </div>
</template>

<script>
import Post from "./components/Post.vue";

export default {
  name: "app",
  components: {
    Post,
  },
};
</script>

<style>
.shadow {
  box-shadow: 0px 4px 4px 0px #00000040;
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
}
</style>
