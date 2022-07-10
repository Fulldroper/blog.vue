<template>
  <Post />
</template>

<script>
import Post from './components/Post.vue'

export default {
  name: 'app',
  components: {
    Post
  }
}
</script>

<style>
  .shadow {
    box-shadow: 0px 4px 4px 0px #00000040;
  }
</style>
