<template>
  <div v-if="contents && contents.length && contents.length > 0">
    <div v-for="(content, id) in contents" :key="id">
      <MediaContent
        :type="content.type"
        :src="content.src"
        :title="content.title"
      />
    </div>
  </div>
</template>
<script>
import MediaContent from "./MediaContent.vue";
export default {
  props: {
    contents: {
      default() {
        return [];
      },
      type: Array,
    },
  },
  components: { MediaContent },
};
</script>