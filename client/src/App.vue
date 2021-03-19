<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
* {
  margin: 0;
  box-sizing: border-box;
}

.img__container {
  display: grid;
  place-items: center;
  overflow: hidden;
}

.img__container > img {
  width: 100%;
  height: auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;

  min-height: 100vh;
}
</style>
