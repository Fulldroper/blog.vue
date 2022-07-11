<template>
  <div class="post shadow">
    <PostTitle />
    <PostContent />
    <Audioplayer title="cool song" />
    <Audioplayer title="cool song 2" />
    <Audioplayer title="cool song 3" />
    <Audioplayer title="cool song 4" />
  </div>
</template>

<script>
import PostTitle from "./PostTitle.vue";
import PostContent from "./PostContent.vue";
import Audioplayer from "./Audioplayer.vue";

export default {
  name: "app",
  components: {
    PostTitle,
    PostContent,
    Audioplayer,
  },
};
</script>

<style scoped>
.post {
  margin-top: 55px;
  width: 400px;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
}
</style>
