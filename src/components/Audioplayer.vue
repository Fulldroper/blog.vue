<template>
  <div class="container">
    <div class="player">
      <div @click="togglePlay" class="play">
        <svg
          v-if="!isPlay"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 41.999 41.999"
          style="enable-background: new 0 0 41.999 41.999; margin-left: 2px"
          xml:space="preserve"
        >
          <path
            d="M36.068,20.176l-29-20C6.761-0.035,6.363-0.057,6.035,0.114C5.706,0.287,5.5,0.627,5.5,0.999v40
    	c0,0.372,0.206,0.713,0.535,0.886c0.146,0.076,0.306,0.114,0.465,0.114c0.199,0,0.397-0.06,0.568-0.177l29-20
    	c0.271-0.187,0.432-0.494,0.432-0.823S36.338,20.363,36.068,20.176z"
          />
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
        <svg
          v-else
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="277.338px"
          height="277.338px"
          viewBox="0 0 277.338 277.338"
          style="enable-background: new 0 0 277.338 277.338"
          xml:space="preserve"
        >
          <g>
            <path
              d="M14.22,45.665v186.013c0,25.223,16.711,45.66,37.327,45.66c20.618,0,37.339-20.438,37.339-45.66V45.665
            c0-25.211-16.721-45.657-37.339-45.657C30.931,0,14.22,20.454,14.22,45.665z"
            />
            <path
              d="M225.78,0c-20.614,0-37.325,20.446-37.325,45.657V231.67c0,25.223,16.711,45.652,37.325,45.652s37.338-20.43,37.338-45.652
            V45.665C263.109,20.454,246.394,0,225.78,0z"
            />
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      </div>
      <div>
        <div class="info">
          <div class="title">
            {{ title }}
          </div>
          <div class="counter noselect alt" :data-desc="'/ ' + audioLength">
            {{ audioNow }}
          </div>
        </div>
        <div @click="changeAudioCounter" class="timeline" ref="timeline">
          <div class="timelinedot" ref="timelinedot"></div>
        </div>
      </div>
    </div>
    <audio
      @timeupdate="timeUpdate"
      @loadeddata="countDuration"
      @ended="isPlay = false"
      ref="audio"
    >
      <source :src="src" />
    </audio>
  </div>
</template>

<script>
export default {
  mounted() {
    this.refs = this.$refs;
  },
  data() {
    return {
      isPlay: false,
      audioLength: "00:00",
      audioNow: "00:00",
      refs: {},
    };
  },
  props: {
    src: {
      default: "src/assets/test2.mp3",
      type: String,
    },
    title: {
      default: "Undefined track name",
      type: String,
    },
  },
  methods: {
    changeAudioCounter(e) {
      this.refs.audio.currentTime = Math.trunc(
        ((e.clientX - this.refs.timeline.offsetLeft) /
          (this.refs.timeline.clientWidth - 11.5)) *
          this.refs.audio.duration
      );
    },
    togglePlay() {
      this.isPlay ? this.refs.audio.pause() : this.refs.audio.play();
      this.isPlay = !this.isPlay;
    },
    timeUpdate() {
      this.countDuration(undefined, this.refs.audio.currentTime, "audioNow");
      this.refs.timelinedot.style.left =
        (this.refs.audio.currentTime / this.refs.audio.duration) *
          (this.refs.timeline.clientWidth - 11.5) +
        "px";
    },
    countDuration(
      _,
      duration = this.refs.audio.duration,
      result = "audioLength"
    ) {
      if (duration) {
        const timeSec = Math.trunc(duration);
        const fixed = (num) => {
          if (num < 10) {
            return `0${num}`;
          } else return num + "";
        };
        const min = Math.trunc(timeSec / 60);
        const sec = timeSec - min * 60;
        this[result] = `${fixed(min)}:${fixed(sec)}`;
      }
    },
  },
};
</script>

<style scoped>
.container {
  border-color: red;
}
.play {
  --size: 35px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  min-width: var(--size);
  min-height: var(--size);

  width: var(--size);
  height: var(--size);
  border-radius: var(--size);

  background-color: rgba(0, 0, 0, 0.2);
}
.play > svg {
  width: 15px;
  height: 15px;

  fill: rgba(0, 0, 0, 0.5);
}
.title {
  max-width: 260px;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
}
.player {
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  color: rgba(0, 0, 0, 0.65);
}
.player > div:last-child,
.info {
  width: 100%;
}
.player > div:last-child {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
.timeline {
  width: 100%;
  margin-top: 5px;
  border-radius: 20px;
  height: 4px;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
.info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.timelinedot {
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: black;
  z-index: auto;
  position: relative;
  top: -3px;
  left: 0px;
}
</style>