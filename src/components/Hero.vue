<template>
  <div class="jumbotron">
    <br />
    <div class="jumbotron-content">
      <div class="image-wrapper">
        <img src="@/assets/image/hero1.jpg" class="hero1" alt="Before and After" />
        <img src="@/assets/image/hero2.jpg" class="hero2" alt="Before and After" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroComponent'
}
</script>

<style scoped>
.jumbotron {
  color: white;
  text-align: center;
  background-color: white;
}

.jumbotron-content {
  max-width: 100%;
  margin: 0 auto;
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 680px;
}

.hero1,
.hero2 {
  position: absolute;
  margin-left: 190px;
  width: 75%;
  height: 100%;
  align-items: center;
}

.hero2 {
  mix-blend-mode: multiply;
  opacity: 0.5;
}

@media (max-width: 768px) {
  .jumbotron {
    overflow: hidden;
  }

  .image-wrapper {
    position: relative;
    width: 500px;
    height: 400px;
    margin-left: -115px;
    margin-top: 50px;
    overflow: hidden;
  }

  .hero1,
  .hero2 {
    position: absolute;
    margin-left: 140px;
    width: 75%;
    height: 100%;
    align-items: center;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .image-wrapper {
    position: relative;
    width: 100%;
    height: 600px;
    margin-left: -70px;
    margin-top: 50px;
  }
}
</style>
