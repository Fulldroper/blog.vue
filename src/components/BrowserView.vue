<template>
  <div class="browser">
    <About @followpage="changePage" v-if="hook == '/about'" />
    <Blog @followpage="changePage" v-if="hook == '/t1'" />
    <Mailing @followpage="changePage" v-if="hook == '/t2'" />
    <Settings @followpage="changePage" v-if="hook == '/settings'" />
    <PostView @followpage="changePage" v-if="hook == '/feed'" />
    <AuthPage @followpage="changePage" v-if="['/auth', '/restore', '/register'].includes(hook)" :type="hook.slice(1)" />
  </div>  
</template>

<script>
import AuthPage from "./../pages/AuthPage.vue";
import About from "./../pages/About.vue";
import Blog from "./../pages/Blog.vue";
import Mailing from "./../pages/Mailing.vue";
import Settings from "./../pages/Settings.vue";
import PostView from "./../pages/PostView.vue";

export default {
  props:{
    hook: {
      default: "/",
      type: String
    }
  },
  methods: {
    changePage(val) {
      this.$emit("followpage", val)
    }
  },
  components: {
    AuthPage, About, Blog, Mailing, Settings, PostView
  }
}
</script>

<style scoped>
.browser{
  width: 100vw;
  height: 100%;
}
</style>