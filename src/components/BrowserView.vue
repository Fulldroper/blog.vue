<template>
  <div>
    <About v-if="hook == '/about'" />
    <Blog v-if="hook == '/t1'" />
    <Mailing v-if="hook == '/t2'" />
    <Settings v-if="hook == '/settings'" />
    <PostView v-if="hook == '/t3'" />
    <AuthPage v-if="hook == '/auth'" />
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
  components: {
    AuthPage, About, Blog, Mailing, Settings, PostView
  }
}
</script>