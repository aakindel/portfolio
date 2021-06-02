<template>
  <div>
    <appNav></appNav>
    <appHero></appHero>
    <appAbout></appAbout>
    <appProjects></appProjects>
    <appContact></appContact>
  </div>
</template>

<script>
import appNav from './components/Nav'
import appHero from './components/Hero'
import appAbout from './components/About'
import appProjects from './components/Projects'
import appContact from './components/Contact'

export default {
  components: {
    appNav,
    appHero,
    appAbout,
    appProjects,
    appContact
  }
}

</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

</style>
