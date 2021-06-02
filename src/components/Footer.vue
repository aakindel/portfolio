<template>
  <footer class="container">
    <p class="social-links">
      <span v-for="social in socials" :key="social">
        <a :href="social.target" target="_blank">
          <github class="svg-icon" v-if="social.type == 'github'"></github>
          <linkedin class="svg-icon" v-if="social.type == 'linkedin'"></linkedin>
        </a>
      </span>
    </p>
    <div class="center-flex">
      <p>&#169; {{new Date().getFullYear()}}, Ayo Akindele</p>
    </div>
  </footer>
</template>

<script>
import github from './github-icon'
import linkedin from './linkedin-icon'

export default {
  data () {
    return {
      socials: [
        { type: 'github', target: 'https://github.com/aakindel' },
        { type: 'linkedin', target: 'https://www.linkedin.com/in/aakindel/' }
      ]
    }
  },
  components: {
    github,
    linkedin
  }
}
</script>

<style scoped>
  footer {
    text-align: center;
    margin-bottom: 25px;
  }

  .svg-icon {
    color: var(--primary-color);
    width: 25px;
  }

  .svg-icon:hover {
    color: var(--accent-color);
  }

  .social-links {
    margin-bottom: 15px;
  }

  .social-links span:not(:last-of-type) {
    margin-right: 15px;
  }

  p {
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.4rem;
    letter-spacing: 0.01rem;
  }
</style>
