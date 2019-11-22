<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="AnalogGame-Recorder Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          height="40"
          width="40"
        />
      </div>
      <v-spacer></v-spacer>
      <div class="d-flex justify-end">
        <v-img
          alt="write icon"
          src="./assets/icon-edit-1.png"
          transition="scale-transition"
          width="30"
          contain
          id="writeIcon"
        />
      </div>
    </v-app-bar>
    <v-content>
      <Ranking/>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Ranking from './components/ranking';

export default {
  name: 'App',

  components: {
    // HelloWorld,
    Ranking
  },

  data: () => {
    return {
      
    }
  },
  mounted(){
    this.$localStorage.remove('resultOfDate');
  }
};
</script>
<style scoped>
  ActionBar {
    background-color: #53ba82;
      color: #ffffff;
  }

</style>