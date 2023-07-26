<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div id="app">
    <header>
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld msg="You did it!" />
      </div>
    </header>

    <main>
      <TheWelcome />
      <seam-connect-account-button class='connect-account-button' publishable-key="seam_pk1J0Bgui_oYEuzDhOqUzSBkrPmrNsUuKL"></seam-connect-account-button>
    <seam-device-table 
    :onDeviceClick.prop="(deviceId) => { console.log(deviceId) }"
    prevent-default-on-device-click="true"
    publishable-key="seam_pk1J0Bgui_oYEuzDhOqUzSBkrPmrNsUuKL"
    ></seam-device-table>
    </main>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.connect-account-button {
  margin-bottom: 2rem;
  display: block;
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
