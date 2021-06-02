<template>
  <div>
    <appNav></appNav>
    <appHero></appHero>
  </div>
</template>

<script>
import appNav from './components/Nav'
import appHero from './components/Hero'

export default {
  components: {
    appNav,
    appHero
  }
}

</script>

<style lang="scss">
$smooth-speed: 0.3s;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  transition: $smooth-speed;
  overflow: hidden;  // prevent mobile nav circles from causing scrollbar
}

body.dark-mode {
  background: #212121;
}

.container {
  width: 90%;
  margin: 0 auto;
}
</style>
