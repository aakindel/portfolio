<template>
  <div class="container" id="projects">
    <h1 class="sh_container sh_left"><span class="section-heading">Projects</span></h1>
    <div class="project-grid">
      <div class="project-content" v-for="(project, index) in projects"
           :style="!(index % 2) ? {'flex-direction': 'row'} : {'flex-direction': 'row-reverse'}" :key="project">
        <div class="project-name-container">
          <span class="project-span"><h2 class="project-name">{{project.name}}</h2></span>
        </div>
        <div class="box word-box">
          <span class="mobile-project-name">{{project.name}}</span>
          <p class="wbp" :style="!(index % 2) ? {'text-align': 'left'} : {'text-align': 'right'}">{{project.description}}</p>
          <p class="external-links"
                   :style="!(index % 2) ? {'justify-content': 'flex-start'} : {'justify-content': 'flex-end'}"
          >
            <span v-for="link in project.links" :key="link">
              <a :href="link.target" target="_blank">
                <github class="svg-icon icon" v-if="link.type == 'github'"></github>
                <external class="svg-icon-stroke icon" v-if="link.type == 'external'"></external>
              </a>
            </span>
          </p>
          <!-- <external class="svg-icon-stroke"></external> -->
          <ul class="tech-stack" :style="!(index % 2) ? {'justify-content': 'flex-start'} : {'justify-content': 'flex-end'}">
            <li :key="tech" v-for="tech in project.techStack">{{tech}}</li>
          </ul>
        </div>
        <div class="box img-box">
          <img class="pic" :src="project.picture" :alt="project.name"
                    />
        </div>
      </div>
    </div>
    <a class="view-other" href="https://github.com/aakindel?tab=repositories" target="_blank">
      <p>View my other projects on Github. <external class="svg-icon-stroke down-icon"></external></p>
    </a>
  </div>
  <div class="spacer"></div>
</template>

<script>
import github from './github-icon'
import external from './external-icon'

export default {
  data () {
    return {
      projects: [
        {
          name: 'Pocketbook',
          description: 'Pocketbook is a book sharing app where users can share the books they have and borrow books from others.',
          techStack: [
            'Java',
            'Android SDK',
            'Firebase',
            'JUnit Testing',
            'Figma',
            'Trello',
            'Slack '
          ],
          picture: require('../assets/project_pocketbook.png'),
          links: [
            { type: 'github', target: 'https://github.com/CMPUT301F20T09/PocketBook' }
          ]
        },
        {
          name: 'Pocketbook',
          description: 'Pocketbook is a book sharing app where users can share the books they have and borrow books from others.',
          techStack: [
            'Java',
            'Android SDK',
            'Firebase',
            'JUnit Testing',
            'Figma',
            'Trello',
            'Slack '
          ],
          picture: require('../assets/project_code.png'),
          links: [
            { type: 'github', target: 'https://github.com/CMPUT301F20T09/PocketBook' },
            { type: 'external', target: 'https://github.com/CMPUT301F20T09/PocketBook' }
          ]
        }
      ]
    }
  },
  components: {
    github,
    external
  }
}
</script>

<style scoped lang="scss">

.project-grid {
  display: grid;
  grid-row-gap: 35px;
  // grid-template-rows: 100px 1fr 100px;
  // grid-template-columns: 150px 1fr 150px;
}

.project-content {
  display: grid;
  // align-items: center;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 1fr);
  // display: flex;
  // flex-direction: row;
  // justify-content: space-between;
  // position: relative;
  /* height: 450px; */
}

.project-name-container {
  display: none;
}

.mobile-project-name {
  display: block;
  font-size: 25px;
  font-weight: bold;
  // margin-bottom: 15px;
}

.pic {
  max-height: 100%;
  max-width: 100%;
  display: block;
  transition: 0.3s;
  opacity: 0.25;
  z-index: -2;
}

.word-box {
  grid-area: 2 / 1 / 8/ 13;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: space-between;
  // margin-top: 15px;
  padding: 0 40px;
  z-index: 2;
}

.external-links {
  // margin-top: 15px;
  // margin-bottom: 15px;
  display: flex;
}

.external-links span:not(:last-of-type) {
  margin-right: 15px;
}

.img-box {
  grid-area: 1 / 1 / 9 / 13;
}

.view-other {
  display: block;
  margin-top: 65px;
  font-size: 1.2rem;
  text-decoration: none;
  color: var(--text-color);
}

.down-icon {
  position: relative;
  bottom: -2px;
  width: 20px;
}

.icon {
  width: 30px;
  color: var(--primary-color);
}

.icon:hover, .view-other:hover {
  color: var(--accent-color);
}

.tech-stack {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  // margin-top: auto;
  font-size: 14px;
}

.tech-stack li::before {
  content: "▹";
  margin-right: 6px;
  line-height: 12px;
}

.tech-stack li {
  margin-right: 9px;
}

button {
  margin: 45px auto;
  text-align: center;
}

@media (min-width: 800px) {

  .project-grid {
    display: grid;
    grid-row-gap: 75px;
  }

  .project-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    /* height: 450px; */
  }

  .project-name-container {
    display: block;
    position: absolute;
    width: 100%;
    text-align: center;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    z-index: -1;
  }

  .project-span {
    background: rgba(38, 0, 255, 0.171);
    display: inline-block;
    padding: 5px 15px;
    /* margin: 50px 0; */
  }

  .mobile-project-name {
    display: none;
  }

  .project-name {
    color: #ffffff;
    font-size: 5rem;
  }

  .pic {
    max-height: 100%;
    max-width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    transition: 0.3s;
    z-index: -2;
  }

  .word-box {
    width: 40%;
    display: flex;
    flex-direction: column;
  }

  .external-links {
    margin-top: auto;
    display: flex;
  }

  .external-links span:not(:last-of-type) {
    margin-right: 15px;
  }

  .img-box {
    width: 58%;
    display: flex;
    align-items: center;
  }

  .view-other {
    display: block;
    margin-top: 65px;
    font-size: 1.2rem;
    text-decoration: none;
    color: var(--text-color);
  }

  .down-icon {
    position: relative;
    bottom: -2px;
    width: 20px;
  }

  .icon {
    width: 40px;
    color: var(--primary-color);
  }

  .tech-stack {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    margin-top: auto;
    font-size: 14px;
  }

  .tech-stack li::before {
    content: "▹";
    margin-right: 6px;
    line-height: 12px;
  }

  .tech-stack li {
    margin-right: 9px;
  }

}

</style>
