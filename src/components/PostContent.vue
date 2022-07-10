<template>
  <div class="container">
    {{ text.slice(0, max) }}{{ text.length > max ? "..." : "" }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      max: 2000,
    };
  },
  props: {
    text: {
      default:
        "Lorem ipsum dolor sit. Magna etiam tempor orci eu lobortis elementum. Amet aliquam id diam maecenas ultricies mi. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis a cras semper auctor neque vitae tempus quam. Tortor dignissim convallis aenean et. Mus mauris vitae ultricies leo integer malesuada nunc vel. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Duis ut diam quam nulla porttitor massa id. Faucibus pulvinar elementum integer enim neque volutpat ac. Libero enim sed faucibus turpis. Magna etiam tempor orci eu lobortis elementum. Amet aliquam id diam maecenas ultricies mi. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis a cras semper auctor neque vitae tempus quam. Tortor dignissim convallis aenean et. Mus mauris vitae ultricies leo integer malesuada nunc vel. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Duis ut diam quam nulla porttitor massa id. Faucibus pulvinar elementum integer enim neque volutpat ac. Libero enim s. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Duis ut diam quam nulla porttitor massa id. Faucibus pulvinar elementum integer enim neque volutpat ac. Libero enim sed faucibus turpissda",
      type: String,
    },
  },
};
</script>