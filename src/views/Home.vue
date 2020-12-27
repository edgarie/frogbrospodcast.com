<template>
  <div class="home flex flex-col items-center justify-center">
    <img
      class="logo"
      alt="The Frog Bros Podcast logo"
      src="@/assets/images/logo-new.jpg"
    />
    <Listen />
  </div>
</template>

<script>
import Listen from "@/components/Listen";
export default {
  name: "Home",
  components: {
    Listen
  }
};
</script>
<style lang="scss" scoped>
.logo {
  width: 600px;
  @media (max-width: 767.98px) {
    width: 375px;
  }
}
</style>
