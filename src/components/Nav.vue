<template>
  <nav class="container">
    <darkModeToggle class="mobile-dark"></darkModeToggle>

    <div class="page-title"><a href="/">Ayo Akindele</a></div>

    <div class="ham-container">
      <!-- ham menu from https://codepen.io/designcouch/pen/Atyop -->
      <div id="ham-menu" v-on:click="toggleHam">
        <span></span>  <!-- 1st bar in ham menu -->
        <span></span>  <!-- 2nd bar in ham menu, left part of X close button -->
        <span></span>  <!-- right part of X close button -->
        <span></span>  <!-- 3rd bar in ham menu -->
      </div>

      <!-- circle from https://codepen.io/sergioandrade/pen/onkub -->
      <div id="circle">
      </div>

      <div id="nav-items">
        <ul>
          <li :key="item" v-for="item in headerNavItems"><a :href="item.link" :target="item.target" v-on:click="toggleHam">{{item.title}}</a></li>
        </ul>
      </div>

      <div class="desktop-nav-items">
        <ul>
          <li :key="item" v-for="item in headerNavItems"><a :href="item.link" :target="item.target">{{item.title}}</a></li>
        </ul>
      </div>
    </div>

    <darkModeToggle class="desktop-dark"></darkModeToggle>
  </nav>
</template>

<style lang="scss" scoped>
// vue auto-prefixes, so no need to add vendor prefixes
// multiples of 7px work best for $ham-height
$ham-height: 21px;
$ham-width: $ham-height * 1.3;
$ham-bar-height: $ham-height / 7;  // ham: bar, space, bar, space, bar
$ham-color: #d3531a;

.page-title {
  font-size: 1.2rem;
  z-index: 4;
}
.page-title a {
  display: block;
  height: 100%;
  width: 100%;
}

a {
  text-decoration: none;
  color: var(--text-color);
}

.mobile-dark {
  display: flex;
}

.desktop-dark {
  display: none;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  // height: 50px;
  padding: 20px 0;
}

.ham-container {
  position: relative;
}

#ham-menu {
  width: $ham-width;
  height: $ham-height;
  position: relative;
  cursor: pointer;
  z-index: 6;
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

.ham-container {
  position: relative;
}

#circle {
  position: absolute;
  // border-radius: 50%;
  height: 0px;
  width: 0px;
  right: -100px;
  top: -100px;
  transition: 0.2s ease;
  z-index: -1;
}

#nav-items {
  position: absolute;
  display: block;
  justify-content: center;
  align-items: center;
  z-index: 5;
  top: -20px;
  right: -500px;
  // right: -35px;
  height: 440px;
  width: 365px;
}

#nav-items ul {
  // position: absolute;
  // right: 500px;
  height: 100%;
  width: 100%;
  z-index: 3;
  // padding-left: 50px;
  // padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

li a {
  text-decoration: none;
  font-size: 24px;
  color: white;
  transition: 0.1s;
}

li a:hover {
  color: var(--accent-color);
  transition: 0.2s;
  // text-decoration-thickness: 2px;
}

#nav-items li {
  display: block;
  list-style-type: none;
  text-align: center;
  margin-right: -500px;
  margin-bottom: 30px;
  transition: 0.3s;
  opacity: 0;

  &:nth-child(1){
    transition-delay: 0.0s;
  }
  &:nth-child(2){
    transition-delay: 0.0s;
  }
  &:nth-child(3){
    transition-delay: 0.0s;
  }
  &:nth-child(4){
    transition-delay: 0.0s;
  }
}

.desktop-nav-items li {
  display: none;
}

#nav-items.open {
  display: flex;
  right: -35px;
}

#nav-items.open li {
  display: block;
  list-style-type: none;
  text-align: center;
  opacity: 1;
  margin-right: 0px;
  margin-bottom: 30px;

  &:nth-child(1){
    transition-delay: 0.05s;
  }
  &:nth-child(2){
    transition-delay: 0.10s;
  }
  &:nth-child(3){
    transition-delay: 0.15s;
  }
  &:nth-child(4){
    transition-delay: 0.20s;
  }
}

#circle::after {
  content: '';
  position: absolute;
  // border-radius: 50%;
  height: 150px;
  width: 150px;
  right: 10px;
  top: 20px;
  z-index: 6;
  transition: 0.1s;
}

#circle.open {
  position: absolute;
  height: 480px;
  width: 400px;
  background-color: #324e8ba8;
  color: white;
  z-index: 1;
}

#circle.open::after {
  height: 500px;
  width: 420px;
  background-color: #324e8ba8;
  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  z-index: 2;
}

#circle.open #nav-items li {
  display: block;
}

@media (min-width: 800px) {
  .mobile-dark {
    display: none;
  }

  .desktop-dark {
    display: flex;
  }

  #ham-menu {
    display: none;
  }

  .desktop-nav-items {
    display: flex;
    position: relative;  // undo mobile absolute positioning
    height: inherit;  // undo mobile fill-container height
    z-index: 5;
    width: 400px;
  }

  .desktop-nav-items ul {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    align-items: center;
  }

  .desktop-nav-items ul li {
    list-style-type: none;
    display: inline-block;
    text-align: center;
    margin-right: 0px;
    margin-bottom: 0px;
    opacity: 1;
  }

  #nav-items {
    display: none;
  }

  li a {
    text-decoration: underline;
    text-decoration-color: var(--accent-color);
    text-underline-offset: 3px;
    font-size: 16px;
    color: var(--text-color);
  }
}

</style>

<script>
import darkModeToggle from './DarkModeToggle'

export default {
  data () {
    return {
      headerNavItems: [
        { title: 'About', link: '/#about', target: '_self' },
        { title: 'Projects', link: '/#projects', target: '_self' },
        { title: 'Contact', link: '/#contact', target: '_self' },
        { title: 'Resume', link: '../assets/resume.pdf', target: '_blank' }
      ]
    }
  },
  created () {
    window.addEventListener('click', (e) => {
      if (document.getElementById('nav-items').classList.contains('open') && !this.$el.contains(e.target)) {
        this.toggleHam()
      }
    })
    window.addEventListener('scroll', (e) => {
      if (document.getElementById('nav-items').classList.contains('open') && !this.$el.contains(e.target)) {
        this.removeHam()
      }
    })
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  unmounted () {
    window.removeEventListener('click')
    window.removeEventListener('scroll')
  },
  components: {
    darkModeToggle
  },
  methods: {
    toggleHam () {
      document.getElementById('ham-menu').classList.toggle('open')
      document.getElementById('circle').classList.toggle('open')
      document.getElementById('nav-items').classList.toggle('open')
    },
    removeHam () {
      if (document.getElementById('nav-items').classList.contains('open')) {
        document.getElementById('ham-menu').classList.toggle('open')
        document.getElementById('circle').classList.toggle('open')
        document.getElementById('nav-items').classList.toggle('open')
      }
    },
    onResize () {
      if (window.innerWidth > 800) {
        document.getElementById('ham-menu').classList.remove('open')
        document.getElementById('circle').classList.remove('open')
        document.getElementById('nav-items').classList.remove('open')
      }
    }
  }
}

</script>
