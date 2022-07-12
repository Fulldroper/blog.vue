<template>
  <div class="post shadow">
    <PostTitle
      :nickname="data.nickname"
      :avatar="data.avatar"
      :date="data.date"
      :time="data.time"
    />
    <MediaContentList :contents="data.media" />
    <PostContent v-if="data.text" :text="data.text" />
    <AudioPlayerList :playlist="data.audio" />
  </div>
</template>

<script>
import PostTitle from "./PostTitle.vue";
import PostContent from "./PostContent.vue";
import MediaContent from "./MediaContent.vue";
import AudioPlayerList from "./AudioPlayerList.vue";
import MediaContentList from "./MediaContentList.vue";

export default {
  props: {
    data: {
      default: {},
      type: Object,
    },
  },
  components: {
    PostTitle,
    PostContent,
    AudioPlayerList,
    MediaContent,
    MediaContentList,
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
