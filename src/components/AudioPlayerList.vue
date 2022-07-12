<template>
  <div>
    <div v-if="playlist && playlist.length && playlist.length > 0">
      <div v-for="(track, id) in playlist" :key="id">
        <AudioPlayer
          @end="trackEnded"
          :src="track.src"
          :id="id"
          :title="track.title"
          :isPlaying="playlist[id].isPlaying"
          :ref="`audio${id}`"
        />
      </div>
      <audio>
        <source src="" type="" />
      </audio>
    </div>
  </div>
</template>

<script>
import AudioPlayer from "./AudioPlayer.vue";
export default {
  data() {
    return {
      red: {},
    };
  },
  props: {
    playlist: {
      default() {
        return [];
      },
      type: Array,
    },
  },
  components: {
    AudioPlayer,
  },
  methods: {
    trackEnded(id) {
      this.playlist[id].isPlaying = false;
      this.nextTrack(id);
    },
    nextTrack(id) {
      if (this.playlist.length - 1 > id) {
        this.$refs[`audio${id + 1}`][0].togglePlay();
      }
    },
  },
};
</script>

<style scoped>
</style>