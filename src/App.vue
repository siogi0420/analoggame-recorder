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
          width="40"
        />
      </div>
      </v-btn>
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
};
</script>
