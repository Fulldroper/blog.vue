<template>
  <div class="container">
    <div class="player" @mouseleave="hideVolumeLevel">
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
          <div class="counter noselect">
            {{ isPlay ? audioNow + " / " : "" }} {{ audioLength }}
          </div>
        </div>
        <div class="flex-line">
          <div
            @click="changeAudioCounter"
            @mousemove="timeCalcDesc"
            class="timeline mouseTime"
            ref="timeline"
            :data-time="cursorTime"
          >
            <div class="timelinedot" ref="timelinedot"></div>
          </div>
          <div
            @click="changeVolumeLevel"
            class="volume-level hiden"
            ref="volume-level"
          >
            <div class="volume-level-dot" ref="volume-level-dot"></div>
          </div>
          <div @click="toggleShowVolumeLevel" class="volume">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 330 330"
              style="enable-background: new 0 0 330 330"
              xml:space="preserve"
            >
              <g id="XMLID_531_">
                <path
                  id="XMLID_532_"
                  d="M255,210h-10c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15h10c8.284,0,15-6.716,15-15
		C270,216.716,263.284,210,255,210z"
                />
                <path
                  id="XMLID_533_"
                  d="M285,150h-40c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15h40c8.284,0,15-6.716,15-15
		C300,156.716,293.284,150,285,150z"
                />
                <path
                  id="XMLID_534_"
                  d="M315,90h-70c-8.284,0-15,6.716-15,15s6.716,15,15,15h70c8.284,0,15-6.716,15-15S323.284,90,315,90z"
                />
                <path
                  id="XMLID_535_"
                  d="M192.078,31.775c-4.878-2.61-10.796-2.324-15.398,0.744L90.459,90H15c-8.284,0-15,6.716-15,15v120
		c0,8.284,6.716,15,15,15h75.459l86.221,57.481c2.51,1.673,5.411,2.519,8.321,2.519c2.427,0,4.859-0.588,7.077-1.775
		c4.877-2.61,7.922-7.693,7.922-13.225V45C200,39.468,196.955,34.385,192.078,31.775z M170,256.972l-66.68-44.453
		C100.856,210.876,97.961,210,95,210H30v-90h65c2.961,0,5.856-0.876,8.32-2.519L170,73.028V256.972z"
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
        </div>
      </div>
    </div>
    <audio
      @timeupdate="timeUpdate"
      @loadeddata="countDuration"
      @ended="trackEnded"
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
      isShowVolumeLevel: false,
      audioLength: "00:00",
      audioNow: "00:00",
      cursorTime: "00:00",
      refs: {},
    };
  },
  watch: {
    volume: function (now, prev) {
      if (now !== prev) {
        this.$refs.audio.volume = now;
      }
    },
  },
  props: {
    id: {
      default: 0,
      type: Number,
    },
    src: {
      default: "src/assets/test2.mp3",
      type: String,
    },
    title: {
      default: "Undefined track name",
      type: String,
    },
    volume: {
      default: 1,
      type: Number,
    },
  },
  methods: {
    stop() {
      this.isPlay = false;
      this.$refs.audio.pause();
      this.$refs.audio.currentTime = 0;
    },
    trackEnded() {
      this.stop();
      this.$emit("end", this.id);
    },
    changeAudioCounter(e) {
      this.refs.audio.currentTime = Math.trunc(
        ((e.clientX - this.refs.timeline.offsetLeft) /
          (this.refs.timeline.clientWidth - 11.5)) *
          this.refs.audio.duration
      );
    },
    togglePlay() {
      this.isPlay
        ? this.refs.audio.pause()
        : (this.refs.audio.play(), this.$emit("play", this.id));
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
    timeCalcDesc(e) {
      document
        .querySelector(":root")
        .style.setProperty("--mouse-x", `${e.clientX - e.target.offsetLeft}px`);
      const time = Math.trunc(
        ((e.clientX - this.refs.timeline.offsetLeft) /
          (this.refs.timeline.clientWidth - 11.5)) *
          this.refs.audio.duration
      );
      this.countDuration(undefined, time, "cursorTime");
    },
    toggleShowVolumeLevel() {
      if (this.isShowVolumeLevel) {
        this.hideVolumeLevel();
      } else {
        this.showVolumeLevel();
      }
    },
    showVolumeLevel() {
      this.isShowVolumeLevel = true;
      this.$refs["volume-level"].classList.remove("hiden");
    },
    hideVolumeLevel() {
      this.isShowVolumeLevel = false;
      this.$refs["volume-level"].classList.add("hiden");
    },
    changeVolumeLevel({ clientY }) {
      const x3 = this.$refs["volume-level"].offsetHeight,
        x2 = clientY - this.$refs["volume-level"].getBoundingClientRect().top;
      this.$refs.audio.volume = (x3 - x2) / x3;
      document
        .querySelector(":root")
        .style.setProperty("--volume", `${x2 - 5}px`);
      this.$emit("changeVolume", this.$refs.audio.volume);
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
.time {
  border: var(--size);
}
.mouseTime:hover::after {
  position: relative;
  left: calc(var(--mouse-x) - 21.5px);
  top: -36.5px;
  width: 10px;
  box-shadow: 0px 4px 4px 0px #00000040;
  padding: 2px 5px 2px 5px;
  border-radius: 7.5px;
  background-color: rgba(211, 211, 211, 0.85);
  z-index: auto;
  content: attr(data-time);
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
  width: calc(100% - 20px);
  margin-top: 5px;
  border-radius: 20px;
  height: 4px;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
.volume {
  margin-left: 5px;
  width: 15px;
  cursor: pointer;
  z-index: auto;
}
.volume > svg {
  fill: rgba(0, 0, 0, 0.4);
}
.hiden {
  visibility: hidden;
}
.volume-level {
  cursor: pointer;
  width: 5px;
  height: 50px;
  z-index: auto;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.4);
  transform: translateX(12px) translateY(-55px);
}
.flex-line {
  display: flex;
  flex-direction: row;
  margin-bottom: -55px;
}
.info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.timelinedot,
.volume-level-dot {
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.68);
  z-index: auto;
  position: relative;
  top: -3.42px;
  left: 0px;
}
.volume-level-dot {
  top: var(--volume, -5px) !important;
  left: -2.26px !important;
}
</style>