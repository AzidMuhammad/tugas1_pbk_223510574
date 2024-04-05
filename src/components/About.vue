<template>
  <div class="about" :class="{ active: animateAbout }">
    <h1 class="text-start"><'about'></h1>
    <p>
      I'm a front-end web developer with 2 years' experience.<br />
      I craft high-performance, cross-platform, and responsive websites.<br />
      While I'm adept with frameworks,<br />
      I primarily hand-code using HTML5, CSS3, SVG, and JavaScript.<br />
    </p>
    <div class="about-sect">
      <img src="../assets/image/human.png" />
    </div>
    <a class="download-link" href="../assets/CV Muhammad Zacky Amaazid.pdf" download
      >curriculum vitae (PDF)</a
    >
    <h2 class="text-end">< /'about'></h2>

    <div class="tools">
      <h1>tools</h1>
      <div class="top-images">
        <img src="../assets/logo/js.png" class="top-image" />
        <img src="../assets/logo/html.png" class="top-image" />
        <img src="../assets/logo/css.png" class="top-image" />
        <img src="../assets/logo/python.png" class="top-image" />
        <img src="../assets/logo/git.png" class="top-image" />
        <img src="../assets/logo/javascript.png" class="top-image" />
      </div>
      <div class="bottom-images">
        <img src="../assets/logo/bootstrap.png" class="bottom-image" />
        <img src="../assets/logo/tailwind.png" class="bottom-image" />
        <img src="../assets/logo/react.png" class="bottom-image" />
        <img src="../assets/logo/php.png" class="bottom-image" />
        <img src="../assets/logo/vscode.png" class="bottom-image" />
        <img src="../assets/logo/figma.png" class="bottom-image" />
      </div>
    </div>
    <div class="about-back"><img src="../assets/image/about-back.png" /></div>
  </div>
</template>

<script>
export default {
  name: 'AboutComponent',
  data() {
    return {
      animateAbout: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.animateImages)
    this.animateImages()
  },
  methods: {
    isInViewport(element) {
      const rect = element.getBoundingClientRect()
      return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      )
    },
    animateImages() {
      const topImages = document.querySelectorAll('.top-image')
      const bottomImages = document.querySelectorAll('.bottom-image')

      topImages.forEach((img) => {
        if (this.isInViewport(img)) {
          img.classList.add('fadein')
        }
      })

      bottomImages.forEach((img) => {
        if (this.isInViewport(img)) {
          img.classList.add('fadein')
        }
      })
    }
  }
}
</script>

<style>
.about {
  height: 150vh;
  background-color: rgb(252, 252, 252);
}

.about h1 {
  font-family: 'Courier New', Courier, monospace;
  font-size: 40px;
  font-weight: bold;
  color: gray;
  margin-left: 150px;
  padding-top: 170px;
}

.about h2 {
  font-family: 'Courier New', Courier, monospace;
  font-size: 40px;
  font-weight: bold;
  color: gray;
  padding-top: 30px;
  margin-right: 1125px;
}

.about p {
  font-family: 'Courier New', Courier, monospace;
  font-size: 20px;
  font-weight: bold;
  color: rgb(108, 70, 70);
  text-align: justify;
  padding-top: 30px;
  margin-left: 200px;
}

.about-sect {
  float: right;
  margin-top: -250px;
  filter: blur(10px) grayscale(100%);
}

.tools {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 5px;
  filter: grayscale(100%);
}

.tools h1 {
  text-align: center;
  margin-right: 150px;
  font-size: 50px;
  padding-bottom: 20px;
}

.top-images,
.bottom-images {
  justify-content: center;
  display: flex;
}

.top-image {
  width: 100px;
  height: 100px;
  margin: 30px;
  order: 1;
}

.bottom-image {
  width: 100px;
  height: 100px;
  margin: 25px;
  order: 2;
}

.top-image.fadein {
  animation: waveSlideDown 1.5s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
}

.bottom-image.fadein {
  animation: waveSlideUp 1.5s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
}

@keyframes waveSlideDown {
  from {
    opacity: 0.5;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes waveSlideUp {
  from {
    opacity: 0.5;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.download-link {
  display: block;
  width: 300px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bolder;
  margin-top: 40px;
  margin-left: 200px;
  text-align: center;
  border: 2px solid #747474;
  padding: 10px 20px;
  transition:
    background-color 0.5s,
    color 0.5s;
}

.download-link:hover {
  background-color: #747474;
  color: white;
}

.about-back {
  margin-top: -150px;
  margin-left: -50px;
}

.about-back img {
  max-width: 100%;
  filter: grayscale(100%) blur(5px);
  opacity: 0.5;
}

@media (min-width: 768px) and (max-width: 1024px) {

  .about {
    width: 100%;
    height: 70vh;
  }

  .about h1 {
    margin-left: 50px;
    padding-top: 100px;
    font-size: 30px;
  }

  .about h2 {
    display: flex;
    margin-left: 50px;
    font-size: 30px;
    line-height: 1.5;
    white-space: nowrap;
  }

  .about p {
    margin: -15px 80px 10px;
    font-size: 15px;
  }

  .about-sect {
    margin-left: 500px;
    margin-top: -170px;
    filter: blur(5px) grayscale(100%);
  }

  .tools h1 {
    margin-right: 50px;
  }

  .download-link {
    margin-left: 80px;
    font-size: 15px;
    width: 255px;
    height: 50px;
  }

  .about-back {
    margin-top: -50px;
  }

  .top-image {
    width: 60px;
    height: 60px;
  }

  .bottom-image {
    width: 60px;
    height: 60px;
  }
}

@media (max-width: 768px) {
  .about {
    height: 90vh;
  }

  .about h1 {
    margin-left: 50px;
    padding-top: 50px;
    font-size: 25px;
  }

  .about h2 {
    margin-right: 200px;
    font-size: 25px;
  }

  .about p {
    margin: -15px 80px 10px;
    font-size: 12px;
  }
  
  .about-sect {
    margin-left: 200px;
    margin-top: -150px;
    filter: blur(10px) grayscale(100%);
  }

  .tools h1 {
    margin-right: 50px;
  }

  .download-link {
    margin-left: 80px;
    font-size: 12px;
    width: 205px;
  }

  .about-back {
    margin-top: -50px;
  }

  .top-images,
  .bottom-images {
    display: flex;
    justify-content: center;
  }
  
  .top-image,
  .bottom-image {
    width: 35px;
    height: 35px;
    margin: 10px 10px;
  }
  
}

</style>
