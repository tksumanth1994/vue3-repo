<template>
  <nav class="navbar">
    <div class="navbar-wrapper">
      <div class="navbar-main">
        <div class="logo-wrapper">
          <div class="logo-div">
            <img class="logo" src="https://www.gosugamers.net/assets/images/app/site/logo/logo-gg-b6c6c4d6.png" alt="GosuGamers">
          </div>
        </div>
        <div class="logo-wrapper">
          <div class="logo-div">
            <a href="https://github.com/tksumanth1994/vue3-repo" target="_blank">
              <svg fill="#ffffff" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <home></home>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Home from './pages/index.vue';

export default defineComponent({
  components: {
    Home
  }
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
}

.navbar  {
  background-color: #18171c;
  .navbar-wrapper {
    padding-left: 2rem;
    padding-right: 2rem;
    max-width: 80rem;
    margin-left: auto;
    margin-right: auto;
    .navbar-main {
      height: 4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo-wrapper {
        display: flex;
        align-items: center;
        .logo-div {
          flex-shrink: 0;
          .logo {
            height: auto;
            width: 2rem;
          }
        }
      }
    }
  }
}
</style>