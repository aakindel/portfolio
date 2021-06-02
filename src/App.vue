<template>
  <div>
    <appNav></appNav>
    <appHero></appHero>
    <appAbout></appAbout>
  </div>
</template>

<script>
import appNav from './components/Nav'
import appHero from './components/Hero'
import appAbout from './components/About'

export default {
  components: {
    appNav,
    appHero,
    appAbout
  }
}

</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  // color: #2c3e50;
}

</style>
