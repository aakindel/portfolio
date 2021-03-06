<template>
<!-- dmtoggle from https://connective.dev/ -->
  <div class="dmtoggle" v-on:click="toggleDarkTheme">
    <div class="arc"></div>
    <div class="darc"></div>
    <div class="ray one"></div>
    <div class="ray two"></div>
    <div class="ray three"></div>
    <div class="ray four"></div>
    <div class="ray five"></div>
    <div class="ray six"></div>
    <div class="ray seven"></div>
    <div class="ray eight"></div>
  </div>
</template>

<style lang="scss" scoped>

// for smooth toggle transitions, this component
// requires body selector (outside of immediate scope)
// to have a transition property of $smooth-speed seconds

// toggle could misrender for some px sizes of $toggle-dimensions (e.g. 40px)
$toggle-dimensions: 35px;
$arc-dimensions: 17px;
$ray-height: 2px;
$ray-width: 6px;
$no-opacity: 0;
$light-opacity: 0.25;
$full-opacity: 1;
$ray-dist-from-sun: 14px;
$smooth-speed: 0.3s;
$quick-speed: 0.2s;
$light-color: #f5f5f5;
$light-bg-color: var(--bg-color);;
$dark-color: #424242;
$darker-color: #212121;

.dmtoggle {
  width: $toggle-dimensions;
  height: $toggle-dimensions;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: $light-opacity;
  cursor: pointer;
  transition: transform $smooth-speed, opacity $quick-speed;
}

:root.dark-mode .dmtoggle {
  transform: rotate(-45deg);
}

.dmtoggle:hover {
  opacity: $full-opacity;
}

.dmtoggle div {
  position: absolute;
  background: $dark-color;
  transition: transform $smooth-speed, background $smooth-speed, opacity $smooth-speed;
}

:root.dark-mode .dmtoggle div {
  background: $light-color;
}

.dmtoggle .arc, .dmtoggle .darc {
  width: $arc-dimensions;
  height: $arc-dimensions;
  border-radius: $arc-dimensions;
}

:root.dark-mode .dmtoggle .arc {
  transform: scale(1.2);  // make the crescent moon circle bigger
}

.dmtoggle .darc {
  pointer-events: none;
  background: $light-bg-color; // hide the "moon bite" in light mode
  transform: translateX($arc-dimensions*2);  // "moon bite" moves out and to the right
}

:root.dark-mode .dmtoggle .darc {
  pointer-events: auto;
  background: $darker-color;  // show the "moon bite" in dark mode
  transform: translateX($arc-dimensions/2.5); // offset .darc to make crescent moon shape
}

.dmtoggle .ray {
  margin-left: 1px;
  width: $ray-width;
  height: $ray-height;
  border-radius: $ray-height;
}

.dmtoggle .ray.one { transform: rotate(0deg) translateX($ray-dist-from-sun - 1px); }
.dmtoggle .ray.two { transform: rotate(45deg) translateX($ray-dist-from-sun); }
.dmtoggle .ray.three { transform: rotate(90deg) translateX($ray-dist-from-sun); }
.dmtoggle .ray.four { transform: rotate(135deg) translateX($ray-dist-from-sun); }
.dmtoggle .ray.five { transform: rotate(180deg) translateX($ray-dist-from-sun); }
.dmtoggle .ray.six { transform: rotate(225deg) translateX($ray-dist-from-sun + 1px); }
.dmtoggle .ray.seven { transform: rotate(270deg) translateX($ray-dist-from-sun); }
.dmtoggle .ray.eight { transform: rotate(315deg) translateX($ray-dist-from-sun); }

:root.dark-mode .dmtoggle .ray {
  transform: scaleX(0.01);  // make the rays "invisibly" thin
  opacity: $no-opacity;
}

</style>

<script>
export default {
  methods: {
    toggleDarkTheme () {
      if (document.documentElement.classList.contains('dark-mode')) {
        document.documentElement.classList.remove('dark-mode')
        localStorage.setItem('theme', 'light')
      } else {
        document.documentElement.classList.add('dark-mode')
        localStorage.setItem('theme', 'dark')
      }
    }
  }
}
</script>
