<template>
  <div class="about flex justify-center">
    <div class="about__content flex flex-col items-center">
      <div
        class="about__content--image flex items-center justify-center w-screen mb-10"
      >
        <img src="@/assets/images/banner.jpeg" alt="" />
      </div>
      <p class="text-center self-center">
        Frog Brothers podcast features brothers Justin & Alec and their take on
        Films, Television, Cosplay, Video Games, Comics, Books, and more!
        @bros_frog on Twitter. @Frogbrospodcast on IG. Find us on YouTube for
        Exclusive video content including Movie Reviews, Live Podcasts, Unboxing
        Videos, Props, Mods, and more!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style lang="scss" scoped>
.about {
  height: 70vh;
  width: 100vw;
  &__content {
    &--image {
      background-color: #0e0e0e;
    }
    img {
      height: 300px;
      @media (max-width: 767.98px) {
        height: 100px;
      }
    }
    p {
      width: 60vw;
      @media (max-width: 767.98px) {
        width: 90vw;
      }
    }
  }
}
</style>
