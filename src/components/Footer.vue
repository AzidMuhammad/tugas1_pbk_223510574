<template>
  <div>
    <div class="container">
      <canvas ref="canvas" class=""></canvas>
    </div>
    <div class="container">
      <div class="cover floatingAlternate"></div>
      <div class="footer-logos">
        <img src="../assets/image/footlog2.png" alt="Github Logo" class="footer-logo" />
        <img src="../assets/image/footlog1.png" alt="Instagram Logo" class="footer-logo" />
        <img src="../assets/image/gmail.png" alt="Gmail Logo" class="footer-logo" />
      </div>
    </div>
  </div>
</template>

<script>
import paper from 'paper'

export default {
  name: 'FooterComponent',
  mounted() {
    this.onloadDo()
  },
  methods: {
    onloadDo() {
      const canvas = this.$refs.canvas
      paper.setup(canvas)

      const view = paper.project.view

      const paths = new paper.Group()

      const addPoints = (path, quantity) => {
        path.add(view.bounds.bottomLeft)

        for (let i = -1; i < quantity + 1; i++) {
          const x = (view.viewSize.width / quantity) * i
          const y = view.viewSize.height / 2.618
          path.add(new paper.Point(x, y))
        }

        path.add(view.bounds.bottomRight)
      }

      const addPath = (quantity, color, opacity) => {
        const path = new paper.Path()
        path.fillColor = color
        path.opacity = opacity

        addPoints(path, quantity)
        path.smooth()

        return path
      }

      const animatePath = (path, event, index) => {
        for (const [i, segment] of path.segments.entries()) {
          if (i > 0 && i < path.segments.length - 1) {
            const sin = Math.sin(event.time * 0.8 + i - index)
            segment.point.y = sin * 16 + view.viewSize.height / 2.618 + index * 48
          }
        }
      }

      let n = 1
      let opacity = 0.1 / (n / 1)
      for (let i = 1; i <= n; i++) {
        const path = addPath(36 - i, '#bbbbbb', i * opacity)
        path.position.y += 125 * i
        paths.addChild(path)
      }

      n = 2
      opacity = 1 / (n / 2)
      for (let i = 1; i <= n; i++) {
        const path = addPath(22 - i, '#dddddd', i * opacity)
        path.position.y += 125 * i
        paths.addChild(path)
      }

      view.onFrame = (event) => {
        for (const [i, path] of paths.children.entries()) {
          animatePath(path, event, i)
        }
      }

      console.log('###')

      view.draw()
    }
  }
}
</script>

<style scoped>
.container {
  height: 50px;
  width: 100%;
  position: absolute;
  margin-top: -200px;
}

canvas {
  background-color: transparent;
  position: relative;
  transition: all 0.5s ease-in-out;
  height: 400px;
  width: 100%;
}

.floatingAlternate {
  animation-name: floatingxAlternate;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes floatingxAlternate {
  from {
    transform: translateY(0px);
  }
  60% {
    transform: translateY(25px);
  }
  to {
    transform: translateY(-0px);
  }
}

.footer-logos {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 350px;
}

.footer-logo {
  width: 40px;
  height: 40px;
  margin: 0 5px;
  filter: grayscale(100%);
  cursor: pointer;
}

@media (max-width: 768px) {
  .container {
    height: 50px !important;
    width: 400px;
  }

  @keyframes floatingxAlternate {
    from {
      transform: translateY(0px);
    }
    60% {
      transform: translateY(10px);
    }
    to {
      transform: translateY(-0px);
    }
  }

  canvas {
    height: 220px;
    width: 413px;
    background-color: transparent;
  }

  .footer-logos {
    margin-top: 185px;
    margin-left: 190px;
    width: 30px;
    height: 30px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .container {
    height: 50px !important;
    width: 400px;
  }

  @keyframes floatingxAlternate {
    from {
      transform: translateY(0px);
    }
    60% {
      transform: translateY(10px);
    }
    to {
      transform: translateY(-0px);
    }
  }

  canvas {
    height: 220px;
    width: 850px;
    background-color: transparent;
  }

  .footer-logos {
    margin-top: 185px;
    margin-left: 395px;
    width: 30px;
    height: 30px;
  }
}

</style>
