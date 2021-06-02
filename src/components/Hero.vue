<template>
  <div class="hero-section container">
    <div>
      <h1 class="heading">I build (web) applications <br /> to solve complex problems.</h1>
      <h2 class="subheading">Hi! My name is Ayo Akindele and I'm a software developer
      who loves building websites and applications to help people and businesses
      innovate, overcome challenges, and grow.</h2>
    </div>
    <div>
      <a href="#projects" class="left-button"><button class="passive-cta">View My Work</button></a>
      <a href="#contact"><button class="active-cta">Contact Me</button></a>
    </div>
  </div>
</template>

<style scoped lang="scss">

.hero-section {
  position: static;
  min-height: calc(100vh - 100px);  /* push hero section up */
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: var(--text-color);
}

.heading {
  font-size: clamp(2.0rem, 5.8vw, 4rem);
  font-weight: $bold-font-weight;
  line-height: clamp(3.0rem, 8vw, 5rem);
}

.subheading {
  font-size: clamp(1.0rem, 2.3vw, 1.2rem);
  font-weight: $normal-font-weight;
  line-height: clamp(1.8rem, 8vw, 2.1rem);
  margin-top: 20px;
  letter-spacing: 0.05rem;
  max-width: 600px;
}

.left-button {
  margin-right: 20px;
}

</style>
