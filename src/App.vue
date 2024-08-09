<script setup>

</script>

<template >
  <header>
    <nav>
      <router-link :to="{ name: 'home' }" >Characters</router-link>
      <router-link :to="{ name: 'episodes' }" >Episodes</router-link>
      <router-link :to="{ name: 'locations' }" >Locations</router-link>
    </nav>
  </header>
  <main>
    <router-view/>
  </main>
</template>

<style scoped>

@media (min-width: 1024px) {
  /* header { */
    /* display: flex; */
    /* place-items: center; */
    /* padding-right: calc(var(--section-gap) / 2); */
  /* } */

  /* .logo {
    margin: 0 2rem 0 0;
  } */

  /* header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } */
}
</style>
