<template>
  <div class="project">
    <br />
    <br />
    <h1 class="text-start">my<br />project</h1>
    <p>
      Deployed a scalable games voucher buying and selling website,<br />
      and a hybrid mobile application using React.<br />
      I am also interested in display analysis and visualization.
    </p>
    <div class="mock flex justify-end">
      <div class="mock-container">
        <div class="mock-content">
          <div
            class="relative border-gray-600 dark:border-gray-600 bg-gray-600 border-[8px] rounded-[2.5rem] h-[500px] w-[250px] md:h-[350px] md:w-[150px] lg:h-[250px] lg:w-[125px] xl:h-[500px] xl:w-[250px] shadow-xl"
          >
            <div
              class="w-[75px] h-[10px] bg-gray-600 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"
            ></div>
            <div
              class="h-[46px] w-[3px] bg-gray-600 absolute -start-[9px] top-[124px] rounded-s-lg"
            ></div>
            <div
              class="h-[46px] w-[3px] bg-gray-600 absolute -start-[9px] top-[178px] rounded-s-lg"
            ></div>
            <div
              class="h-[44px] w-[3px] bg-gray-600 absolute -end-[9px] top-[142px] rounded-e-lg"
            ></div>
            <div
              class="rounded-[2rem] overflow-hidden w-[235px] h-[485px] bg-white dark:bg-gray-500 md:w-[135px] md:h-[335px] lg:w-[105px] lg:h-[105px] xl:w-[235px] xl:h-[485px]"
            >
              <img
                src="../assets/image/project.png"
                alt=""
                class="object-cover w-full h-full grayscale md:w-135 md:h-335"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="category">
      <h2>project :</h2>
      <ul>
        <li
          @click="handleCategoryClick('All')"
          :class="{ active: selectedCategory && selectedCategory.name === 'All' }"
          class="category-item"
        >
          all
        </li>
        <li
          @click="handleCategoryClick('Web Development')"
          :class="{ active: selectedCategory && selectedCategory.name === 'Web Development' }"
          class="category-item"
        >
          / web development
        </li>
        <li
          @click="handleCategoryClick('UI And UX')"
          :class="{ active: selectedCategory && selectedCategory.name === 'UI And UX' }"
          class="category-item"
        >
          / ui & ux
        </li>
      </ul>
    </div>
    <div class="category-images" :class="{ transitioning: isTransitioning }">
      <div class="image-container">
        <div v-for="(image, index) in selectedCategory.images" :key="index" class="image">
          <img :src="image.src" :alt="image.alt" />
          <div class="caption">{{ image.caption }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectComponent',
  data() {
    return {
      selectedCategory: null,
      isTransitioning: false,
      categories: [
        {
          name: 'All',
          images: [
            {
              src: '/assets/figma.png',
              caption: 'go-kel app design figma project'
            },
            {
              src: '/assets/poke.png',
              caption: 'pokelapak top up website'
            },
            {
              src: '/assets/fog.jpg',
              caption: 'freedom of games (games download website)'
            }
          ]
        },
        {
          name: 'Web Development',
          images: [
            {
              src: '/assets/poke.png',
              caption: 'pokelapak top up website'
            },
            {
              src: '/assets/fog.jpg',
              caption: 'freedom of games (games download website)'
            }
          ],
          selectedImageIndex: null
        },
        {
          name: 'UI And UX',
          images: [
            {
              src: '/assets/figma.png',
              caption: 'go-kel app design figma project'
            }
          ]
        }
      ]
    }
  },
  created() {
    this.selectedCategory = this.categories.find((category) => category.name === 'All')
  },
  methods: {
    handleCategoryClick(categoryName) {
      if (this.isTransitioning) return

      this.isTransitioning = true
      setTimeout(() => {
        this.selectedCategory = this.categories.find((category) => category.name === categoryName)
        setTimeout(() => {
          this.isTransitioning = false
        }, 500)
      }, 100)
    }
  }
}
</script>

<style>
.project {
  height: 170vh;
  background-color: rgb(252, 252, 252);
}

.project h1 {
  font-family: 'Courier New', Courier, monospace;
  font-size: 70px;
  font-weight: bold;
  color: gray;
  padding-top: 30px;
  margin-left: 150px;
  margin-top: 50px;
}

.project p {
  font-family: 'Courier New', Courier, monospace;
  font-size: 20px;
  font-weight: bold;
  color: rgb(53, 53, 53);
  text-align: justify;
  padding-top: 30px;
  margin-left: 150px;
}

.mock {
  margin-right: 300px;
  margin-top: -350px;
}

.mock-container {
  position: relative;
  width: 250px;
  height: 500px;
  perspective: 900px;
}

.mock-content {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: rotateAnimation 30s linear infinite;
}

@keyframes rotateAnimation {
  0% {
    transform: rotateY(0deg) rotateX(20deg);
  }
  50% {
    transform: rotateY(50deg) rotateX(50deg);
  }
  100% {
    transform: rotateY(180deg) rotateY(360deg);
  }
}

.grayscale {
  filter: grayscale(100%);
}

.category {
  margin-top: 120px;
  margin-left: 150px;
  text-align: center;
  display: flex;
  gap: 20px;
  cursor: pointer;
}

.category h2 {
  font-size: 30px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
}

.category ul {
  list-style-type: none;
  font-family: 'Courier New', Courier, monospace;
  display: flex;
  padding: 0;
  gap: 20px;
  font-weight: bolder;
}

.category ul li {
  font-size: 24px;
  margin-top: 6px;
}

.category-item:hover {
  color: gray;
}

.category-item.active {
  color: gray;
}

.image-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 75px;
}

.image {
  position: relative;
  width: 400px;
  margin-bottom: 20px;
  cursor: pointer;
}

.image img {
  width: 400px;
  height: 350px;
  filter: grayscale(100%);
  border-radius: 5%;
}

.image img:hover {
  filter: grayscale(25%);
}

.category-images {
  overflow: hidden;
}

.image-container {
  display: flex;
  flex-wrap: wrap;
  transition: transform 0.2s ease;
}

.transitioning .image-container {
  transform: scale(0.9);
}

.show-image {
  opacity: 2;
  transition: opacity 1s ease-in-out;
}

.caption {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgb(70, 70, 70);
  color: #fff;
  padding: 10px;
  box-sizing: border-box;
  font-size: 15px;
  font-family: 'Courier New', Courier, monospace;
  height: 50px;
  display: flex;
  justify-content: center;
  border-bottom-left-radius: 5%;
  border-bottom-right-radius: 5%;
  align-items: center;
}

@media only screen and (max-width: 768px) {
  .project {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 220vh;
  }

  .project h1 {
    margin: 300px 0px 0px;
    order: -1;
    font-size: 40px;
  }

  .project p {
    margin: -45px 50px 20px;
    font-size: 15px;
  }

  .mock-container {
    margin: 5px auto;
  }

  .mock {
    margin: 10px 50px 50px;
    margin-left: 150px;
  }

  @keyframes rotateAnimation {
    0% {
      transform: rotateY(0deg) rotateX(20deg);
    }
    50% {
      transform: rotateY(25deg) rotateX(30deg);
    }
    100% {
      transform: rotateY(50deg) rotateY(360deg);
    }
  }

  .category {
    margin-top: -30px;
    margin-left: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .category h2 {
    font-size: 24px;
    margin-left: 10px;
    font-weight: bold;
  }

  .category ul {
    display: flex;
    gap: 10px;
    margin-left: -20px;
  }

  .category ul li {
    font-size: 18px;
  }

  .image-container {
    margin-top: 30px;
  }

  .image {
    width: 70%;
    margin-bottom: 10px;
  }

  .image img {
    width: 100%;
    height: 200px;
    border-radius: 0;
  }

  .caption {
    font-size: 12px;
    padding: 5px;
    height: 30px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .project {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    text-align: left;
    height: auto;
    margin-top: 200px;
  }

  .project-content {
    text-align: right;
    padding: 0 20px;
  }

  .project h1 {
    font-size: 50px;
    margin-left: 70px;
  }

  .project p {
    font-size: 15px;
    margin-left: 70px;
  }

  .mock-content {
    position: fixed;
    margin-left: 620px;
    margin-top: 100px;
    width: 200px;
    padding: 20px;
    overflow-y: auto;
  }

  @keyframes rotateAnimation {
    0% {
      transform: rotateY(0deg) rotateX(20deg);
    }
    50% {
      transform: rotateY(25deg) rotateX(30deg);
    }
    100% {
      transform: rotateY(50deg) rotateY(360deg);
    }
  }

  .category {
    margin-top: -30px;
    margin-left: 20px;
    text-align: center;
    display: flex;
    gap: 10px;
  }

  .category h2 {
    font-size: 24px;
    margin-left: 150px;
    font-weight: bold;
  }

  .category ul {
    display: flex;
    gap: 10px;
  }

  .category ul li {
    font-size: 18px;
  }

  .image-container {
    margin-top: 30px;
  }

  .image {
    width: 70%;
    margin-bottom: 10px;
  }

  .image img {
    width: 100%;
    height: 300px;
    border-radius: 0;
  }

  .caption {
    font-size: 12px;
    padding: 5px;
    height: 30px;
  }
}
</style>
