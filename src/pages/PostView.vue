<template>
  <div v-if="Posts.length > 0">
    <div class="center" v-for="(item, index) in Posts" :key="index">
      <Post :data="item" />
    </div>
  </div>
</template>

<script>
import Post from "./../components/Post.vue";
export default {
  components: { Post },
  data() {
    return {
      Posts: [
        {
          nickname: "Test user",
          avatar: "https://cdn.discordapp.com/attachments/539138991031844864/1001087135497068544/3IhY.gif",
          date: "xx.xx.xxxx",
          time: "xx:xx",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni sapiente assumenda quidem asperiores quisquam unde illum quasi ipsa, id quia doloribus eaque blanditiis beatae itaque rerum ex eligendi dolor ut! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni sapiente assumenda quidem asperiores quisquam unde illum quasi ipsa, id quia doloribus eaque blanditiis beatae itaque rerum ex eligendi dolor ut!",
          audio: [
            {
              src: "https://cdn.discordapp.com/attachments/539138991031844864/1001086487804268594/--.m4a",
              title: "Example audio"
            },
            {
              src: "https://cdn.discordapp.com/attachments/539138991031844864/1001086487804268594/--.m4a",
              title: "Example audio"
            },
            {
              src: "https://cdn.discordapp.com/attachments/539138991031844864/1001086487804268594/--.m4a",
              title: "Example audio"
            },
            {
              src: "https://cdn.discordapp.com/attachments/539138991031844864/1001086487804268594/--.m4a",
              title: "Example audio"
            },
          ]
        },
        
        {
          nickname: "Test user",
          avatar: "https://cdn.discordapp.com/attachments/539138991031844864/1001087135497068544/3IhY.gif",
          date: "xx.xx.xxxx",
          time: "xx:xx",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni sapiente assumenda quidem asperiores quisquam unde illum quasi ipsa, id quia doloribus eaque blanditiis beatae itaque rerum ex eligendi dolor ut! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni sapiente assumenda quidem asperiores quisquam unde illum quasi ipsa, id quia doloribus eaque blanditiis beatae itaque rerum ex eligendi dolor ut!",
          audio: [
            {
              src: "https://cdn.discordapp.com/attachments/539138991031844864/1001086487804268594/--.m4a",
              title: "Example audio"
            },
            {
              src: "https://cdn.discordapp.com/attachments/539138991031844864/1001086487804268594/--.m4a",
              title: "Example audio"
            },
            {
              src: "https://cdn.discordapp.com/attachments/539138991031844864/1001086487804268594/--.m4a",
              title: "Example audio"
            },
            {
              src: "https://cdn.discordapp.com/attachments/539138991031844864/1001086487804268594/--.m4a",
              title: "Example audio"
            },
          ]
        },
        
        {
          nickname: "Test user",
          avatar: "https://cdn.discordapp.com/attachments/539138991031844864/1001087135497068544/3IhY.gif",
          date: "xx.xx.xxxx",
          time: "xx:xx",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni sapiente assumenda quidem asperiores quisquam unde illum quasi ipsa, id quia doloribus eaque blanditiis beatae itaque rerum ex eligendi dolor ut! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni sapiente assumenda quidem asperiores quisquam unde illum quasi ipsa, id quia doloribus eaque blanditiis beatae itaque rerum ex eligendi dolor ut!",
          audio: [
            {
              src: "https://cdn.discordapp.com/attachments/539138991031844864/1001086487804268594/--.m4a",
              title: "Example audio"
            },
            {
              src: "https://cdn.discordapp.com/attachments/539138991031844864/1001086487804268594/--.m4a",
              title: "Example audio"
            },
            {
              src: "https://cdn.discordapp.com/attachments/539138991031844864/1001086487804268594/--.m4a",
              title: "Example audio"
            },
            {
              src: "https://cdn.discordapp.com/attachments/539138991031844864/1001086487804268594/--.m4a",
              title: "Example audio"
            },
          ]
        },
        {
          nickname: "Test user",
          avatar: "https://cdn.discordapp.com/attachments/539138991031844864/1001087135497068544/3IhY.gif",
          date: "xx.xx.xxxx",
          time: "xx:xx",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni sapiente assumenda quidem asperiores quisquam unde illum quasi ipsa, id quia doloribus eaque blanditiis beatae itaque rerum ex eligendi dolor ut! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni sapiente assumenda quidem asperiores quisquam unde illum quasi ipsa, id quia doloribus eaque blanditiis beatae itaque rerum ex eligendi dolor ut!",
          audio: [
            {
              src: "https://cdn.discordapp.com/attachments/539138991031844864/1001086487804268594/--.m4a",
              title: "Example audio"
            },
            {
              src: "https://cdn.discordapp.com/attachments/539138991031844864/1001086487804268594/--.m4a",
              title: "Example audio"
            },
            {
              src: "https://cdn.discordapp.com/attachments/539138991031844864/1001086487804268594/--.m4a",
              title: "Example audio"
            },
            {
              src: "https://cdn.discordapp.com/attachments/539138991031844864/1001086487804268594/--.m4a",
              title: "Example audio"
            },
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>