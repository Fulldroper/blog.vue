<template>
  <div class="post shadow">
   <PostTitle />
   <PostContent />
  </div>
</template>

<script>
import PostTitle from './PostTitle.vue'
import PostContent from './PostContent.vue'

export default {
  name: 'app',
  components: {
    PostTitle, PostContent
  }
}
</script>

<style scoped>
  .post {
    margin-top: 40px;
    width: 400px;
    background-color: white;
    padding: 10px;
    border-radius: 10px;
  }
</style>
