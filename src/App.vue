<template>
  <div>
    <appNav></appNav>
  </div>
</template>

<script>
import appNav from './components/Nav'

export default {
  components: {
    appNav
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
}

body.dark-mode {
  background: #212121;
}
</style>
