<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      id="header"
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
        <router-link to="/Input" v-if="this.$route.path == '/'">
        <v-img
          alt="write icon"
          src="./assets/icon-edit-1.png"
          transition="scale-transition"
          width="30"
          contain
          id="writeIcon"
          v-on:click="addData">
        </v-img>
      </router-link>
      <router-link to="/Input" v-if="this.$route.path == '/Input'">
        <v-img
          alt="write icon"
          src="./assets/close_icon.png"
          transition="scale-transition"
          width="24"
          contain
          id="writeIcon"
          v-on:click="back">
        </v-img>
      </router-link>
      </div>
    </v-app-bar>
    <router-view></router-view>
  </v-app>
</template>

<script>

import Main from './components/Main';

export default {
  name: 'App',

  components: {
    // Main
  },

  data: () => {
    return {

    }
  },
  mounted(){
    // this.$localStorage.remove('resultOfDate');
  },
  methods:{
    addData:function(){
      console.log("add data");
    },
    back:function(){
      this.$router.back();
    }
  }
};
</script>
<style scoped>
  ActionBar {
    background-color: #53ba82;
      color: #ffffff;
  }
</style>