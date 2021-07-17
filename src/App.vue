<template>
  <div>
    <appNav></appNav>
    <appHero></appHero>
    <appAbout></appAbout>
    <appProjects></appProjects>
    <appContact></appContact>
    <appFooter></appFooter>
  </div>
</template>

<script>
import appNav from './components/Nav'
import appHero from './components/Hero'
import appAbout from './components/About'
import appProjects from './components/Projects'
import appContact from './components/Contact'
import appFooter from './components/Footer'

const localTheme = localStorage.getItem('theme')

if (localTheme === 'dark') {
  document.documentElement.classList.add('dark-mode')
} else if (localTheme === 'light') {
  document.documentElement.classList.remove('dark-mode')
}

export default {
  components: {
    appNav,
    appHero,
    appAbout,
    appProjects,
    appContact,
    appFooter
  }
}

</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

</style>
