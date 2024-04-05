<template>
  <div class="contact">
    <h1>contact me</h1>
    <img src="../assets/image/contact.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'ContactComponent'
}
</script>

<style>
.contact {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  padding-top: 50px;
  height: 90vh;
  border-radius: 10px;
  cursor: pointer;
}

.contact h1 {
  font-size: 50px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  color: gray;
}

.contact img {
  width: 900px;
  height: 300px;
  margin-top: 20px;
  border-radius: 10px;
  filter: grayscale(100%);
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.1);
  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.contact img:hover {
  transform: scale(1.1);
  filter: grayscale(0%);
}

@media (max-width: 768px) {
  .contact {
    height: 30vh;
    cursor: pointer;
    margin-bottom: 120px;
  }

  .contact h1 {
    font-size: 30px;
  }

  .contact img {
    width: 80%;
    height: 100px;
    margin-top: 10px;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
    transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .contact img:hover {
    transform: scale(1.1);
    filter: grayscale(0%);
  }
}


@media (min-width: 769px) and (max-width: 1024px) {
  .contact {
    height: 50vh;
    cursor: pointer;
    margin-top: 100px;
  }

  .contact h1 {
    font-size: 30px;
  }

  .contact img {
    width: 80%;
    height: 200px;
    margin-top: 20px;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
    transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .contact img:hover {
    transform: scale(1.1);
    filter: grayscale(0%);
  }
}

</style>