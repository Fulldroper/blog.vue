<template>
  <div>
    <!-- <div v-for="(post, id) in PostList" class="container-center" :key="id">
      <Post :data="post" />
    </div> -->
  </div>
</template>

<script>
import Post from "./components/Post.vue";

export default {
  name: "app",
  data() {
    return {
      PostList: [
        {
          nickname: "Anonymous",
          avatar:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/640px-Anonymous_emblem.svg.png",
          audio: [
            {
              src: "src/assets/test1.mp3",
              title: "sea sound",
            },
          ],
          media: [
            {
              type: "video",
              title: "video 1",
              src: "src/assets/test1.mp4",
            },
            {
              type: "video",
              title: "video_2 ",
              src: "src/assets/test2.mp4",
            },
            {
              type: "image",
              title: "image 1",
              src: "src/assets/test1.jpg",
            },
            {
              type: "image",
              title: "image ",
              src: "src/assets/test2.png",
            },
          ],
        },
        {
          nickname: "Full_droper",
          avatar:
            "https://cdn.discordapp.com/attachments/539138991031844864/994795290437619722/unknown.png",
          date: "01.12.2020",
          time: "20:12",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          audio: [
            {
              src: "src/assets/test1.mp3",
              title: "sea sound",
            },
            {
              src: "src/assets/test2.mp3",
              title: "lite music",
            },
            {
              src: "src/assets/test2.mp3",
              title: "lite music",
            },
          ],
        },
        {
          nickname: "chelik",
          avatar:
            "https://cdn.discordapp.com/attachments/539138991031844864/989870603790057552/IMG_20220622_214137-01.jpeg",
          date: "20.03.2012",
          time: "15:07",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
          audio: [
            {
              src: "src/assets/test1.mp3",
              title: "example music",
            },
          ],
        },
        {
          nickname: "Support",
          avatar:
            "https://cdn.discordapp.com/attachments/539138991031844864/986493279833055262/planning1.png",
          date: "01.11.2000",
          time: "06:09",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    };
  },
  components: {
    Post,
  },
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
