<template>
  <section class="container">
    <div class="carousel">
      <div>
        Slide 1 Content
      </div>
      <div>
        Slide 2 Content
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ app }) {
    const content = await app.$axios.$get('/api/homepage')
    return content
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
