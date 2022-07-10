<template>
  <div class="container">
    <div class="player">
      <div class="play">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 41.999 41.999"
          style="enable-background: new 0 0 41.999 41.999"
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
      </div>
      <div>
        <div class="info">
          <div class="title">
            {{ title }}
          </div>
          <div class="counter">00:00 / 00:00</div>
        </div>
        <div class="timeline">
          <div class="timelinedot"></div>
        </div>
      </div>
    </div>
    <audio>
      <source :src="src" />
    </audio>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      default: "src/assets/test.mp3",
      type: String,
    },
    title: {
      default: "Undefined track name",
      type: String,
    },
    length: {
      default: 0,
      type: Number,
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
  margin-left: 2px;

  fill: rgba(0, 0, 0, 0.5);
}
.title {
  max-width: 275px;
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
  left: 100px;
}
</style>