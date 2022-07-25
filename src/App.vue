<template>
  <BrowserView @followpage="changePage" :hook.sync="page" />
</template>

<script>
import BrowserView from "./components/BrowserView.vue";

export default {
  name: "app",
  data() {
    return {
      page: this.windowRoute.path
    };
  },
  components: {
    BrowserView
  },
  methods:{
    changePage(val){
      this.windowRoute.path = val
      this.page = val
    }
  }
};
</script>

<style>
.shadow {
  box-shadow: 0px 4px 4px 0px #00000040;
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
}
.container-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
