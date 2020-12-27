<template>
  <div :class="{ active: isActive }" class="navigation">
    <div @click="toggle" class="nav-but-wrap">
      <div class="menu-icon hover-target">
        <span class="menu-icon__line menu-icon__line-left"></span>
        <span class="menu-icon__line"></span>
        <span class="menu-icon__line menu-icon__line-right"></span>
      </div>
    </div>
    <div class="nav">
      <div class="nav__content">
        <ul @click="toggle" :class="{ active: isActive }" class="nav__list">
          <li class="nav__list-item">
            <router-link to="/" class="hover-target">home</router-link>
          </li>
          <li class="nav__list-item">
            <router-link to="/about" class="hover-target">About</router-link>
          </li>
          <li class="nav__list-item">
            <router-link to="/episodes" class="hover-target"
              >Episodes</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-but-wrap {
  position: relative;
  display: inline-block;
  float: right;
  padding-left: 15px;
  padding-top: 15px;
  margin-top: 26px;
  transition: all 0.3s ease-out;
  z-index: 100;
}
.menu-icon {
  height: 30px;
  width: 30px;
  position: relative;
  z-index: 2;
  cursor: pointer;
  display: block;
}
.menu-icon__line {
  height: 2px;
  width: 30px;
  display: block;
  background-color: #1f2029;
  margin-bottom: 7px;
  cursor: pointer;
  transition: background-color 0.5s ease, -webkit-transform 0.2s ease;
  transition: transform 0.2s ease, background-color 0.5s ease;
  transition: transform 0.2s ease, background-color 0.5s ease;
}
.menu-icon__line-left {
  width: 16.5px;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}
.menu-icon__line-right {
  width: 16.5px;
  float: right;
  transition: all 200ms linear;
}
.menu-icon:hover .menu-icon__line-left,
.menu-icon:hover .menu-icon__line-right {
  width: 30px;
}

.active .menu-icon__line {
  background-color: #1f2029;
  transform: translate(0px, 0px) rotate(-45deg);
}
.active .menu-icon__line-left {
  width: 15px;
  transform: translate(2px, 4px) rotate(45deg);
}
.active .menu-icon__line-right {
  width: 15px;
  float: right;
  transform: translate(-3px, -3.5px) rotate(45deg);
}
.active .menu-icon:hover .menu-icon__line-left,
.active .menu-icon:hover .menu-icon__line-right {
  width: 15px;
}

.nav {
  position: fixed;
  z-index: 98;
}
.nav:before,
.nav:after {
  content: "";
  position: fixed;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(235, 235, 235, 0.6);
  border-bottom-left-radius: 200%;
  z-index: -1;
  transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s,
    border-radius linear 0.8s;
  transform: translateX(100%) translateY(-100%);
}
.nav:after {
  background: rgba(235, 235, 235, 0.6);
  transition-delay: 0s;
}
.nav:before {
  transition-delay: 0.2s;
}
.nav__content {
  position: fixed;
  visibility: hidden;
  left: 0;
  top: 50%;
  margin-top: 20px;
  transform: translate(0%, -50%);
  width: 100%;
  text-align: center;
}
.nav__list {
  position: relative;
  padding: 0;
  margin: 0;
  z-index: 2;
}
.nav__list-item {
  position: relative;
  display: block;
  transition-delay: 0.8s;
  opacity: 0;
  text-align: center;
  color: #fff;
  overflow: hidden;
  font-family: "Montserrat", sans-serif;
  font-size: 8vh;
  font-weight: 900;
  line-height: 1.15;
  letter-spacing: 3px;
  transform: translate(100px, 0%);
  transition: opacity 0.2s ease, transform 0.3s ease;
  margin-top: 0;
  margin-bottom: 0;
}
.nav__list-item a {
  position: relative;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  cursor: pointer;
  padding-left: 5px;
  padding-right: 5px;
  font-weight: 900;
  z-index: 2;
  display: inline-block;
  text-transform: uppercase;
  transition: all 200ms linear;
}
.nav__list-item a:after {
  position: absolute;
  content: "";
  top: 50%;
  margin-top: -2px;
  left: 50%;
  width: 0;
  height: 0;
  opacity: 0;
  background-color: #b6181e;
  z-index: 1;
  transition: all 200ms linear;
}
.nav__list-item a:hover:after {
  height: 4px;
  opacity: 1;
  left: 0;
  width: 100%;
}
.nav__list-item a:hover {
  color: rgba(0, 0, 0, 1);
}
.nav__list-item .router-link-exact-active {
  color: rgba(0, 0, 0, 1);
}
.nav__list-item .router-link-exact-active:after {
  height: 4px;
  opacity: 1;
  left: 0;
  width: 100%;
}

.active .nav {
  visibility: visible;
}
.active .nav__content {
  visibility: visible;
}
.active .nav:before,
.active .nav:after {
  transform: translateX(0%) translateY(0%);
  border-radius: 0;
}
.active .nav:after {
  transition-delay: 0.1s;
}
.active .nav:before {
  transition-delay: 0s;
}
.active .nav__list-item {
  opacity: 1;
  transform: translateX(0%);
  transition: opacity 0.3s ease, transform 0.3s ease, color 0.3s ease;
}
.active .nav__list-item:nth-child(0) {
  transition-delay: 0.7s;
}
.active .nav__list-item:nth-child(1) {
  transition-delay: 0.8s;
}
.active .nav__list-item:nth-child(2) {
  transition-delay: 0.9s;
}
.active .nav__list-item:nth-child(3) {
  transition-delay: 1s;
}
.active .nav__list-item:nth-child(4) {
  transition-delay: 1.1s;
}
.active .nav__list-item:nth-child(5) {
  transition-delay: 1.2s;
}
.active .nav__list-item:nth-child(6) {
  transition-delay: 1.3s;
}
.active .nav__list-item:nth-child(7) {
  transition-delay: 1.4s;
}
.active .nav__list-item:nth-child(8) {
  transition-delay: 1.5s;
}
.active .nav__list-item:nth-child(9) {
  transition-delay: 1.6s;
}
.active .nav__list-item:nth-child(10) {
  transition-delay: 1.7s;
}
</style>
