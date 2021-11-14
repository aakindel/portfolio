<template>
  <div class="container" id="projects">
    <h1 class="sh_container sh_left">
      <span class="section-heading">Projects</span>
    </h1>
    <div class="project-grid">
      <div
        class="project-content"
        v-for="(project, index) in projects"
        :style="
          !(index % 2)
            ? { 'flex-direction': 'row' }
            : { 'flex-direction': 'row-reverse' }
        "
        :key="project"
      >
        <div class="project-name-container">
          <span class="project-span"
            ><h2 class="project-name">{{ project.name }}</h2></span
          >
        </div>
        <div class="box mobile-word-box">
          <div class="mobile-project-top-bar">
            <span class="mobile-project-name">{{ project.name }}</span>
            <p
              class="mobile-external-links"
              :style="
                !(index % 2)
                  ? { 'justify-content': 'flex-start' }
                  : { 'justify-content': 'flex-end' }
              "
            >
              <span v-for="link in project.links" :key="link">
                <a :href="link.target" target="_blank">
                  <github
                    class="svg-icon icon"
                    v-if="link.type == 'github'"
                  ></github>
                  <external
                    class="svg-icon-stroke icon"
                    v-if="link.type == 'external'"
                  ></external>
                </a>
              </span>
            </p>
          </div>
          <p class="mobile-wbp">{{ project.name }}{{ project.description }}</p>
          <div>
            <ul class="mobile-tech-stack">
              <p
                style="font-size: 14px; font-weight: 700;"
                :style="
                  !(index % 2)
                    ? { 'text-align': 'left' }
                    : { 'text-align': 'right' }
                "
              >
                Tools used
              </p>
              <span>:</span>
              <li :key="tech" v-for="tech in project.techStack">{{ tech }}</li>
            </ul>
          </div>
        </div>
        <div class="box word-box">
          <span
            class="mobile-project-name"
            :style="
              !(index % 2)
                ? { 'text-align': 'left' }
                : { 'text-align': 'right' }
            "
            >{{ project.name }}</span
          >
          <p
            class="wbp"
            :style="
              !(index % 2)
                ? { 'text-align': 'left' }
                : { 'text-align': 'right' }
            "
          >
            <span class="desktop-project-name">{{ project.name }}</span
            >{{ project.description }}
          </p>
          <p
            class="external-links"
            :style="
              !(index % 2)
                ? { 'justify-content': 'flex-start' }
                : { 'justify-content': 'flex-end' }
            "
          >
            <span v-for="link in project.links" :key="link">
              <a :href="link.target" target="_blank">
                <github
                  class="svg-icon icon"
                  v-if="link.type == 'github'"
                ></github>
                <external
                  class="svg-icon-stroke icon"
                  v-if="link.type == 'external'"
                ></external>
              </a>
            </span>
          </p>
          <!-- <external class="svg-icon-stroke"></external> -->
          <div>
            <p
              style="margin-bottom: 10px;"
              :style="
                !(index % 2)
                  ? { 'text-align': 'left' }
                  : { 'text-align': 'right' }
              "
            >
              Tools used:
            </p>
            <ul
              class="tech-stack"
              :style="
                !(index % 2)
                  ? { 'justify-content': 'flex-start' }
                  : { 'justify-content': 'flex-end' }
              "
            >
              <li
                :key="tech"
                :style="
                  !(index % 2)
                    ? { 'margin-right': '25px' }
                    : { 'margin-left': '25px' }
                "
                v-for="tech in project.techStack"
              >
                {{ tech }}
              </li>
            </ul>
          </div>
        </div>
        <div class="box img-box">
          <img
            class="pic"
            :src="project.picture"
            :alt="project.name"
            v-if="project.type == 'img'"
          />
          <video
            playsinline
            autoplay
            muted
            loop
            class="vid"
            :alt="project.name"
            v-if="project.type == 'vid'"
          >
            <source :src="project.video" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
    <span class="view-other">
      <a href="https://github.com/aakindel?tab=repositories" target="_blank">
        <span
          >View my other projects on Github.
          <external class="svg-icon-stroke down-icon"></external
        ></span> </a
    ></span>
  </div>
</template>

<script>
import github from './github-icon'
import external from './external-icon'

export default {
  data () {
    return {
      projects: [
        {
          name: 'CMPUT 401 Portal',
          description:
            ' is a web portal that enables the University of Alberta’s CMPUT 401 administrators to display CMPUT 401 projects.',
          techStack: [
            'React',
            'TypeScript',
            'Material-UI',
            'Django',
            'PostgreSQL'
          ],
          picture: require('../assets/project_401_portal.png'),
          type: 'img',
          links: [
            {
              type: 'external',
              target: 'http://cmput401.ca/'
            }
          ]
        },
        {
          name: 'Plurr Social',
          description:
            ' is a social networking web app that allows users to share posts that other users can like and comment on.',
          techStack: [
            'React',
            'JavaScript',
            'Bootstrap',
            'Django',
            'PostgreSQL',
            'Heroku'
          ],
          picture: require('../assets/project_plurr.png'),
          type: 'img',
          links: [
            {
              type: 'github',
              target: 'https://github.com/aakindel/CMPUT404-project-socialdistribution'
            },
            {
              type: 'external',
              target: 'http://plurr.herokuapp.com/'
            }
          ]
        },
        {
          name: 'Pocketbook',
          description:
            ' is a book sharing app where users can share the books they have and borrow books from others.',
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
          type: 'img',
          links: [
            {
              type: 'github',
              target: 'https://github.com/CMPUT301F20T09/PocketBook'
            }
          ]
        },
        {
          name: 'Today\'s To-Dos',
          description:
            ' is a to-do list manager that helps users work through their temporary, daily tasks and to-dos.',
          techStack: ['React', 'Next.js', 'JavaScript'],
          video: require('../assets/to_do_demo.mp4'),
          type: 'vid',
          links: [
            {
              type: 'github',
              target: 'https://github.com/aakindel/to-do-today'
            },
            { type: 'external', target: 'https://todays-to-dos.netlify.app/' }
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
  grid-row-gap: 65px;
  // grid-template-rows: 100px 1fr 100px;
  // grid-template-columns: 150px 1fr 150px;
}

.project-name-container {
  display: none;
}

.mobile-project-name {
  display: block;
  font-size: 25px;
  font-weight: bold;
}

.mobile-wbp {
  margin-bottom: 10px;
  line-height: 160%;
}

.wbp {
  margin-bottom: 25px;
  line-height: 160%;
}

.img-box {
  position: relative;
  // filter: brightness(0.5);
}

.img-box::before {
  content: "";
  display: block;
  border-radius: 4px;
  position: absolute;
  height: 100%;
  width: 100%;
  // background: var(--bg-color-faded);
  z-index: 1;
}

.pic {
  height: 100%;
  width: 100%;
  object-fit: cover; // pic is vert. centered if text overflows
  display: block;
  transition: 0.3s;
  border-radius: 5px;
  // filter: grayscale(40%) blur(0.6px);
  filter: brightness(var(--image-tint));
  // opacity: 0.25;
  z-index: -2;
}

.vid {
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: block;
  transition: 0.3s;
  border-radius: 5px;
  box-shadow: 0px 0px 2px 1px rgba(190, 190, 190, 0.2);
  // filter: grayscale(40%) blur(0.6px);
  filter: brightness(var(--image-tint));
  // opacity: 0.25;
  z-index: -2;
}

.mobile-word-box {
  // grid-area: 2 / 1 / 8/ 13;
  grid-column: 1 / -1;
  // grid-row: 3 / 7;
  grid-row: 1 / -1;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // gap: space-between;
  // margin-top: 15px;
  padding-right: 20px;
  z-index: 2;
  margin-bottom: 30px;
}

.mobile-project-top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.word-box {
  // grid-area: 2 / 1 / 8/ 13;
  grid-column: 1 / -1;
  // grid-row: 3 / 7;
  grid-row: 1 / -1;
  font-size: 17px;
  display: none;
  flex-direction: column;
  justify-content: center;
  // gap: space-between;
  // margin-top: 15px;
  padding-right: 20px;
  z-index: 2;
  margin-bottom: 30px;
}

.mobile-external-links a {
  margin-left: 15px;
}

.external-links {
  // margin-top: 15px;
  display: flex;
  margin-bottom: 15px;
}

.external-links span:not(:last-of-type) {
  margin-right: 15px;
}

.img-box {
  grid-area: 1 / 1 / 9 / 13;
}

.view-other {
  display: block;
  margin-top: 50px;
}

.view-other a {
  font-size: 1.2rem;
  text-decoration: none;
  color: var(--text-color);
  transition: 0.1s;
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

.icon:hover,
.view-other a:hover {
  color: var(--accent-color);
}

.mobile-tech-stack {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  // background: #7bcbfaa2;
  // margin-top: auto;
  font-size: 14px;
  line-height: 160%;
}

.mobile-tech-stack li {
  margin: 0 3px;
  margin-left: 18px;
}

.tech-stack {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  // background: #7bcbfaa2;
  // margin-top: auto;
  font-size: 14px;
}

.tech-stack li::before {
  content: "▹";
  margin-right: 6px;
  line-height: 12px;
}

button {
  margin: 45px auto;
  text-align: center;
}

@media (min-width: 800px) {
  .project-grid {
    display: grid;
    grid-row-gap: 100px;
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
    opacity: 1;
    position: absolute;
    width: 100%;
    text-align: center;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    z-index: -1;
    transition: $smooth-speed;
  }

  .project-content:hover .project-name-container {
    opacity: 0;
    transition: $smooth-speed;
  }

  .project-content .desktop-project-name {
    transition: $smooth-speed;
  }

  .project-content:hover .desktop-project-name {
    font-weight: 500;
    transition: $smooth-speed;
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
    opacity: 1;
    z-index: -2;
  }

  .vid {
    max-height: 100%;
    max-width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    transition: 0.3s;
    opacity: 1;
    z-index: -2;
  }

  .img-box::before {
    display: none;
  }

  .mobile-word-box {
    display: none;
  }

  .word-box {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-bottom: 0px;
  }

  .external-links {
    // margin-top: auto;
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
  }

  .tech-stack li::before {
    content: "▹";
    margin-right: 6px;
    line-height: 12px;
  }

  .tech-stack li {
    margin-bottom: 5px;
  }
}
</style>
