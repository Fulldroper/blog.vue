<template>
  <div class="container">
    <div>
      <div>
        <img class="shadow" :src="avatar" />
      </div>
      <div class="shadow background noselect">
        {{ nickname }}
      </div>
    </div>
    <div class="shadow background noselect">
      {{ date }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nickname: {
      default: "Undefined nickname",
      type: String,
    },
    avatar: {
      default: "https://fulldroper.cf/src/img/1.png",
      type: String,
    },
    date: {
      default: "xx.xx.xxxx",
      type: String,
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: -42px;
  margin-left: 5px;
  margin-right: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}
.container > div:first-child {
  display: flex;
  align-items: center;
  flex-direction: row;
}
.background {
  padding: 2px 7px 2px 7px;
  border-radius: 20px;
  background-color: white;
}
.container > div:first-child > div:last-child {
  margin-left: 15px;
  max-width: 160px;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
}
.container > div:first-child > div:first-child > img {
  width: 55px;
  height: 55px;
  border-radius: 50px;
  background-color: white;
}
</style>