<template>
  <div>
    <appNav></appNav>
    <appHero></appHero>
    <appAbout></appAbout>
    <appProjects></appProjects>
  </div>
</template>

<script>
import appNav from './components/Nav'
import appHero from './components/Hero'
import appAbout from './components/About'
import appProjects from './components/Projects'

export default {
  components: {
    appNav,
    appHero,
    appAbout,
    appProjects
  }
}

</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  // color: #2c3e50;
}

</style>
