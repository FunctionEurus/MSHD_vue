<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import ApiService from '@/services/api' // 替换为你实际的路径
ApiService.getDisasters()
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.error('Error fetching disasters:', error)
  })
ApiService.getDisasterById('4')
  .then((response) => {
    console.log(response.data.location)
    console.log(response.data.carrier)
    console.log(response.data.time)
    console.log(response.data.code)
  })
  .catch((error) => {
    console.error(`Error fetching 3disaster:`, error)
  })
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
