<template>
  <div class="listen">
    <div class="podcast-info__listen">
      <a
        class="listen__item listen__item--apple"
        target="_blank"
        alt="Apple Podcasts"
        href="https://podcasts.apple.com/us/podcast/frog-brothers-podcast/id1506872416"
        >Apple Podcasts</a
      >
      <a
        class="listen__item listen__item--spotify"
        target="_blank"
        alt="Spotify"
        href="https://open.spotify.com/show/3QNBXCfopfG5hzzIoC7b5A"
        >Spotify</a
      >

      <a
        class="listen__item listen__item--stitcher"
        target="_blank"
        alt="Stitcher"
        href="https://www.stitcher.com/podcast/frog-brothers-podcast"
        >Stitcher</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Listen"
};
</script>

<style lang="scss" scoped>
.podcast-info__listen {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  @media (max-width: 767.98px) {
    width: 350px;
  }
}
.listen__item {
  background-color: #000000;
  border-radius: 5px;
  float: left;
  margin: 0 10px 10px 0;
  text-indent: -9000px;
  transition: transform 0.2s;
  &--apple {
    height: 40px;
    width: 162px;
    background: url("../assets/images/apple.png");
    background-size: contain;
    background-repeat: no-repeat;
  }
  &--spotify {
    height: 40px;
    width: 106px;
    background: url("../assets/images/spotify.png");
    background-size: contain;
    background-repeat: no-repeat;
  }
  &--stitcher {
    height: 40px;
    width: 106px;
    background: url("../assets/images/stitcher.png");
    background-size: contain;
    background-repeat: no-repeat;
  }
}
</style>
