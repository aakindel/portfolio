<template>
  <div class="container" id="about">
    <h1 class="sh_container sh_right"><span class="section-heading">About Me</span></h1>
    <div class="about-content">
      <div class="text-box">
        <p>I'm currently pursuing my Bachelor's degree at the University of Alberta with a
          specialization in Computing Science and a minor in Business. <br /> <br />
          I love tackling
          interesting problems and developing elegant software solutions that both
          solve the immediate problem and solve potential problems before they ever come up.
          I'm passionate about being curious and about collaborating with others and
          learning constantly from them as we strive to improve upon the past and build
          for the future. <br /> <br />
          Here are some of the technologies and tools that I have experience with:
        </p>
        <ul class="recent-tech">
          <li :key="tech" v-for="tech in recentTech">{{tech}}</li>
        </ul>
        <a href="../assets/resume.pdf" target="_blank"><button class="active-cta">View My Resume</button></a>
      </div>
      <div class="img-box">
        <img class="pic" src="../assets/portfolio_pic.jpg" alt="About Me" />
      </div>
    </div>
  </div>
  <div class="spacer"></div>
</template>

<script>
export default {
  data () {
    return {
      recentTech: [
        'Vue',
        'Android SDK',
        'Java',
        'JavaScript',
        'HTML & CSS',
        'Python'
      ]
    }
  }
}
</script>

<style scoped>

.text-box {
  font-size: 17px;
}

.img-box {
  width: 300px;
  margin: 30px auto 0;
}

.pic {
  /* css filter generator for coloring images: https://codepen.io/sosuke/pen/Pjoqqp */
  width: 300px;
  border-radius: 5px;
  filter: invert(13%) sepia(89%) saturate(37%) hue-rotate(227deg) brightness(110%) contrast(90%);
  transition: 0.3s;
}

.pic:hover {
  filter: invert(0%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%);
}

.recent-tech {
  list-style-type: none;
  column-count: 2;
}

.recent-tech {
    margin-top: 15px;
}

.recent-tech li::before {
    content: "▹";
    margin-right: 12px;
    line-height: 12px;
}

button {
  margin: 30px auto 0;
  text-align: center;
}

@media (min-width: 800px) {
  .about-content {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    max-width: 855px;
    margin: 0 auto;
  }

  .img-box {
    position: relative;
    margin: auto 0;
  }

  .img-box, .text-box {
    width: 48%;
  }

  .pic {
    width: 100%;
    height: auto;
  }

  button {
    margin: 45px auto 0;
    text-align: center;
  }
}

@media (min-width: 1080px) {
  .sh_container {
    margin-top: 125px;
  }
}

</style>
