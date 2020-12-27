<template>
  <div
    class="header flex justify-between md:mx-10 md:my-3 md:py-3 py-2 md:px-10 px-5"
  >
    <Logo />
    <Nav />
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import Nav from "@/components/Nav";
export default {
  name: "Header",
  components: {
    Logo,
    Nav
  }
};
</script>

<style lang="scss" scoped></style>
