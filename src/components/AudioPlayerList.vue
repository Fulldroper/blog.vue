<template>
  <div>
    <div v-if="playlist && playlist.length && playlist.length > 0">
      <div v-for="(track, id) in playlist" :key="id">
        <AudioPlayer
          @end="nextTrack"
          @play="stopAnother"
          @changeVolume="changeVolume"
          v-bind:volume="volume"
          :src="track.src"
          :id="id"
          :title="track.title"
          :ref="`audio${id}`"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AudioPlayer from "./AudioPlayer.vue";
export default {
  data() {
    return {
      volume: 1,
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
    stopAnother(id) {
      for (let i = 0; i < this.playlist.length; i++) {
        if (i !== id) {
          this.$refs[`audio${i}`][0].stop();
        }
      }
    },
    changeVolume(num) {
      this.volume = num;
    },
    nextTrack(id) {
      if (this.playlist.length - 1 > id) {
        this.$refs[`audio${id + 1}`][0].togglePlay();
      }
    },
  },
};
</script>