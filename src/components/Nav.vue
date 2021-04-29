<template>
  <nav>
    <darkModeToggle></darkModeToggle>
    <!-- ham menu from https://codepen.io/designcouch/pen/Atyop -->
    <div id="ham-menu" v-on:click="toggleHam">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
// vue auto-prefixes, so no need to add vendor prefixes
// multiples of 7px work best for $ham-height
$ham-height: 21px;
$ham-width: $ham-height * 1.3;
$ham-bar-height: $ham-height / 7;  // ham: bar, space, bar, space, bar
$ham-color: #d3531a;

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
}

#ham-menu {
  width: $ham-width;
  height: $ham-height;
  position: relative;
  cursor: pointer;
}

#ham-menu span {
  display: block;
  position: absolute;
  height: $ham-bar-height;
  width: 100%;
  background: $ham-color;
  border-radius: $ham-bar-height;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .08s ease-in-out;
}

#ham-menu span:nth-child(1) {
  top: $ham-bar-height * 0;
}

#ham-menu span:nth-child(2), #ham-menu span:nth-child(3) {
  // hide the 3rd bar (part of X) behind the 2nd when menu is closed
  top: $ham-bar-height * 3;
}

#ham-menu span:nth-child(4) {
  bottom: $ham-bar-height * 0;
}

#ham-menu.open span:nth-child(1), #ham-menu.open span:nth-child(4) {
  // collapse the first and last bar into the middle
  top: $ham-bar-height * 3;
  width: 0%;
  left: 50%;
}

#ham-menu.open span:nth-child(2) {
  transform: rotate(45deg);
}

#ham-menu.open span:nth-child(3) {
  transform: rotate(-45deg);
}

</style>

<script>
import darkModeToggle from './DarkModeToggle'

export default {
  components: {
    darkModeToggle
  },
  methods: {
    toggleHam () {
      document.getElementById('ham-menu').classList.toggle('open')
    }
  }
}

</script>
