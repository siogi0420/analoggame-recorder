<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      id="header"
    >
      <div class="d-flex align-center">
        <router-link to="/">
        <v-img
          alt="AnalogGame-Recorder Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          height="40"
          width="40"
        />
        </router-link>
      </div>
      <v-spacer>
        <div align="center" justify="center" color="secondary">
          {{this.pageTitle}}
        </div>
      </v-spacer>
      <div class="d-flex justify-end">
        <v-img
          v-if="this.$route.path == '/Main'"
          alt="write icon"
          src="./assets/icon-edit-1.png"
          transition="scale-transition"
          width="30"
          contain
          id="writeIcon"
          v-on:click="addData">
        </v-img>
        <v-img
          v-if="this.$route.path != '/' && this.$route.path != '/Main'"
          alt="write icon"
          src="./assets/close_icon.png"
          transition="scale-transition"
          width="30"
          contain
          id="writeIcon"
          v-on:click="back">
        </v-img>
      </div>
    </v-app-bar>
    <router-view></router-view>
    <v-dialog
        v-model="edit"
        >
        <v-card>
          <v-card-title class="headline"></v-card-title>
          <v-card-text>新規でデータを作成しますか？</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="success"
              @click="createAction"
              >新規作成</v-btn>
            <v-btn
              color="warning"
              v-if="newData != true"
              @click="editAction"
              >編集</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  </v-app>
</template>

<script>

import Main from './components/Main';

export default {
  name: 'App',
  data: () => {
    return {
      edit:false,
      newData:false,
      pageTitle:''
    }
  },
  mounted(){
    // this.$localStorage.remove('resultOfDate');
  },
  watch: {
    $route(to,from){
      if(to.params.newTournament){
        this.newData = true;
      } else {
        this.newData = false;
      }
      if(this.$route.path == '/'){
        this.pageTitle = 'AnalogGame Recorder';
      } else {
        if(this.$route.params.tournament){
          this.pageTitle = this.$route.params.tournament;
        }
      }
    }
  },
  methods:{
    addData:function(){
      this.edit = true;
    },
    back:function(){
      console.log(this.$route.params.tournament);
      this.$router.push({name:'Main', params:{ tournament: this.$route.params.tournament }});
    },
    createAction(){
      this.edit = false;
      this.$router.push({name:'Input', params:{tournament:this.$route.params.tournament}});
    },
    editAction(){
      this.edit = false;
      console.log("edit action");
      console.log(this.$route.params.tournament);
      this.$router.push({name:'Edit', params:{tournament:this.$route.params.tournament}});
    },
    returnTop(){
      this.$router.replace('/');
    },
  }
};
</script>
<style scoped>
  ActionBar {
    background-color: #53ba82;
      color: #ffffff;
  }
</style>