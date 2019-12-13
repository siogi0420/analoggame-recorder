<template>
  <v-content>
    <v-container>
      <v-row align="center" justify="center">
        <v-img
          src="../assets/logo.png"
          aspect-ratio="1"
          max-width="30%"
          max-height="30%"
        ></v-img>
      </v-row>
      <v-row align="center" justify="center" class="pt-6 px-8">
        <p align="center">ゲーム大会の結果を記録することができます<br>記録は開催会別に日付ごとに記録できます</p>
      </v-row>
      <v-row align="center" justify="center">
        <v-col class="px-6">
          <v-select
            :items="tournaments"
            v-model="selectedTournament"
            return-object
            v-on:change=""
            prepend-icon="casino"
            v-bind:disabled="tournaments.length == 0"
          ></v-select>
          <v-btn
            color="primary"
            block
            v-bind:disabled="tournaments.length == 0"
            @click="">選択</v-btn>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col class="px-6">
          <v-btn
            color="warning"
            block
            @click="createTournament">新しく大会を作成</v-btn>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col class="px-6">
          <v-btn
            color="secondary"
            block
            v-bind:disabled="tournaments.length == 0"
            @click="">データ削除</v-btn>
        </v-col>
      </v-row>
      <v-dialog
        v-model="create"
        >
        <v-card>
          <v-card-title class="headline">新規大会作成</v-card-title>
          <v-text-field class="px-4" v-model="newTournament" width="100" placeholder="大会名"></v-text-field>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="success"
              @click="createAction"
              >作成</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-content>
</template>

<script>

export default {

  data: () => {
    return {
      tournaments:[],
      selectedTournament:'',
      create:false,
      newTournament:'',
    }
  },
  mounted(){
    this.tournaments = this.$localStorage.get('TournamentList', []);
    console.log(this.tournaments)
    if (this.tournaments.length != 0) {
      this.selectedTournament = this.tournaments[0];
    }
  },
  methods:{
    openTournament(){
      this.$router.push({name:'Main', params:{ tournament: this.selectedTournament }});
    },
    createTournament(){
      this.create = true;
    },
    createAction(){
      this.create = false;
      console.log(this.newTournament);
      this.tournaments.push(this.newTournament);
      console.log(this.tournaments);
      this.$localStorage.set('TournamentList', this.tournaments);
      this.$router.push({name:'Main', params:{ newTournament: this.newTournament }});
    }
  }
};
</script>
<style scoped>

</style>