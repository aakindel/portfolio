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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  // color: #2c3e50;
}

</style>
