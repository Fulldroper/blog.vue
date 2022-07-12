<template>
  <div class="post shadow">
    <PostTitle
      :nickname="data.nickname"
      :avatar="data.avatar"
      :date="data.date"
      :time="data.time"
    />
    <div
      v-if="data && data.media && data.media.length && data.media.length > 0"
    >
      <div v-for="(content, id) in data.media" :key="id">
        <MediaContent
          :type="content.type"
          :src="content.src"
          :title="content.title"
        />
      </div>
    </div>
    <PostContent v-if="data.text" :text="data.text" />
    <AudioPlayerList :playlist="data.audio" />
  </div>
</template>

<script>
import PostTitle from "./PostTitle.vue";
import PostContent from "./PostContent.vue";
import MediaContent from "./MediaContent.vue";
import AudioPlayerList from "./AudioPlayerList.vue";

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
