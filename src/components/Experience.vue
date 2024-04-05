<template>
  <div id="experience" class="card-experience">
    <br />
    <br />
    <h1>my experience</h1>
    <div class="card">
      <img src="@/assets/image/react.png" />
      <div class="card-content1">
        <h2>Frontend Dev</h2>
        <hr class="vertical-line1" />
        <p>
          Passionate about UI/UX. Over 2 years of development experience in HTML, CSS, JS, React JS
          and CSS Frameworks.
        </p>
      </div>
    </div>
    <div class="card">
      <img src="@/assets/image/backend.webp" />
      <div class="card-content2">
        <h2 class="card2">Backend Dev</h2>
        <hr class="vertical-line2" />
        <p>
          Experienced Backend Developer proficient in Python, PHP, SQL and database management for
          web applications.
        </p>
      </div>
    </div>
    <div class="card">
      <img src="@/assets/image/design.png" />
      <div class="card-content3">
        <h2>Design Graph</h2>
        <hr class="vertical-line3" />
        <p>
          Proficient in Adobe Photoshop, crafting visual narratives, brand identities, and engaging
          user experiences through creative design solutions.
        </p>
      </div>
    </div>
    <img class="code-img" src="../assets/image/code.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'ExperienceComponent'
}
</script>

<style scoped>
.card-experience {
  text-align: center;
  background-color: rgb(252, 252, 252);
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: 'Courier New', Courier, monospace;
}

.card-experience h1 {
  margin-top: 50px;
  font-size: 50px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  color: gray;
}

.code-img {
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.5;
  display: block;
  margin-top: -50px;
  filter: grayscale(200%);
}

.card {
  display: inline-flex;
  align-items: center;
  width: 400px;
  height: 300px;
  padding: 20px;
  margin-top: 50px;
  border: 1px solid #ccc;
}

.card img {
  width: 50px;
  height: 50px;
  margin-bottom: 90px;
  margin-left: 10px;
}

.card-content {
  display: flex;
  flex-direction: column;
}

.card-content1 h2 {
  font-size: 30px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bolder;
  color: gray;
  margin-right: 60px;
  margin-top: 20px;
}

.card-content1 p {
  font-size: 15px;
  margin-right: 40px;
  margin-top: 15px;
}

.card-content2 h2 {
  font-size: 30px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bolder;
  color: gray;
  margin-right: 60px;
  margin-top: 35px;
}

.card-content2 p {
  font-size: 15px;
  margin-right: 40px;
  margin-top: 10px;
}

.card-content3 h2 {
  font-size: 30px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bolder;
  color: gray;
  margin-right: 60px;
  margin-top: 58px;
}

.card-content3 p {
  font-size: 15px;
  margin-right: 40px;
  margin-top: 10px;
}

.vertical-line1 {
  position: absolute;
  transform: translateX(-50%);
  border-left: 1px solid #000000;
  height: 70px;
  width: 1px;
  margin-top: 15px;
  left: 14%;
}

.vertical-line2 {
  position: absolute;
  transform: translateX(-50%);
  border-left: 1px solid #000000;
  height: 90px;
  width: 1px;
  margin-top: 15px;
  left: 40%;
  margin-left: 10px !important;
}

.vertical-line3 {
  position: absolute;
  transform: translateX(-50%);
  border-left: 1px solid #000000;
  height: 105px;
  width: 1px;
  margin-top: 15px;
  left: 67%;
}

@media (max-width: 768px) {
  .card-experience h1 {
    font-size: 35px;
    margin-top: -5px;
  }

  .card {
    width: 75%;
    height: auto;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    padding: 10px;
  }

  .card img {
    margin-bottom: 5px;
    margin-top: 10px;
  }

  .vertical-line1,
  .vertical-line2,
  .vertical-line3 {
    display: none;
  }

  .card-content1 h2,
  .card-content2 h2,
  .card-content3 h2 {
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    text-align: center; 
  }
  
  .card-content1 p,
  .card-content2 p,
  .card-content3 p {
    margin-top: 5px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  
  .code-img {
    margin-top: 5px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .card {
    width: 60%;
    margin-top: 30px;
  }

  .card img {
    width: 40px;
    height: 40px;
    margin-bottom: 70px;
  }

  .vertical-line1,
  .vertical-line2,
  .vertical-line3 {
    display: none;
  }

  .card-content1 h2,
  .card-content2 h2,
  .card-content3 h2 {
    margin-top: 15px;
  }

  .card-content1 p,
  .card-content2 p,
  .card-content3 p {
    margin-top: 10px;
  }
}
</style>
