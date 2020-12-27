<template>
  <div class="episodes flex justify-center">
    <div class="episodes__list">
      <div id="buzzsprout-player-5605498"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Episodes",
  mounted() {
    let episodesScript = document.createElement("script");
    episodesScript.setAttribute(
      "src",
      "https://www.buzzsprout.com/956611.js?container_id=buzzsprout-player-5605498&player=small&limit=10"
    );
    document.head.appendChild(episodesScript);
  }
};
</script>

<style lang="scss" scoped>
.episodes {
  height: 70vh;
  width: 100vw;
  &__list {
    max-height: 700px;
    max-width: 70vw;
    width: 70vw;
    overflow-y: scroll;
    @media (max-width: 767.98px) {
      max-width: 90vw;
      width: 90vw;
    }
  }
}
</style>
