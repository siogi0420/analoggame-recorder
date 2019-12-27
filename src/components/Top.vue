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
        <p align="center">ゲーム大会の結果を記録することができます<br>
            記録は開催会別に日付ごとに点数を保存できます<br>
            順位では記録できませんが、順位に応じた点数を記録することで、疑似的に記録することもできます
        </p>
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
            @click="openTournament">選択</v-btn>
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
            @click="deleteBtnAction">データ削除</v-btn>
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
      <v-dialog
        v-model="deleteDialog"
        >
        <v-card>
          <v-card-title class="headline">大会削除</v-card-title>
          <v-select
            :items="tournaments"
            v-model="deleteTournamentName"
            return-object
            v-on:change=""
            prepend-icon="casino"
            v-bind:disabled="tournaments.length == 0"
            class="px-6"
          ></v-select>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="error"
              @click="deleteTournament"
              >削除</v-btn>
            <v-btn
              color="warning"
              @click="deleteCancel"
              >キャンセル</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog
        v-model="deletedDataDialog"
        >
        <v-card>
          <v-card-title class="headline">削除完了</v-card-title>
          <v-card-text>大会「{{ this.deleteTournamentName }}」を削除しました</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              color="success"
              @click="okBtnAction"
              >OK</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog
        v-model="registDialog"
        >
        <v-card>
          <v-card-title class="headline">データ登録</v-card-title>
          <v-card-text>共有された記録を保存しますか？</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="warning"
              @click="registDialog = false"
              >キャンセル</v-btn>
            <v-btn
              color="success"
              @click="registerBtnAction()"
              >保存する</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog
        v-model="registedDialog"
        >
        <v-card>
          <v-card-title class="headline">登録完了</v-card-title>
          <v-card-text>データを保存しました</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              color="success"
              @click="registedDialog = false"
              >OK</v-btn>
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
      deleteDialog:false,
      deleteTournamentName:'',
      deletedDataDialog: false,
      registDialog:false,
      registData:'',
      registDataKey:'',
      registedDialog:false,
    }
  },
  mounted(){
    this.tournaments = this.$localStorage.get('TournamentList', []);
    if (this.tournaments.length != 0) {
      this.selectedTournament = this.tournaments[0];
    }
    if (this.$route.query.share_data) {
      this.registData = this.$route.query.share_data;
      this.registDataKey = this.$route.query.share_key;
      this.registDialog = true;
    }
  },
  watch:{
    deleteDialog(){
      if (!this.deletedDataDialog) {
        this.deleteTournamentName = '';
      }
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
      this.tournaments.push(this.newTournament);
      this.$localStorage.set('TournamentList', this.tournaments);
      this.$router.push({name:'Main', params:{ tournament: this.newTournament, newTournament:true }});
    },
    deleteBtnAction(){
      this.deleteDialog = true;
    },
    deleteCancel(){
      this.deleteDialog = false;
    },
    deleteTournament(){
      this.tournaments = this.tournaments.filter(tournament => tournament != this.deleteTournamentName);
      this.$localStorage.set('TournamentList', this.tournaments);
      this.deleteDialog = false;
      if (this.deleteTournamentName != '') {
        this.deletedDataDialog = true;
      }
    },
    okBtnAction(){
      this.deletedDataDialog = false;
      this.deleteTournamentName = '';
    },
    registerBtnAction(){
      this.registDialog = false;
      console.log(inflate(this.registData));
      console.log(inflate(this.registDataKey));
      this.$localStorage.set(this.registDataKey, this.registData);
      this.registedDialog = true;
    }
  }
};

function inflate(val) {
    val = decodeURIComponent(val);
    val = atob(val); // base64デコード
    val = RawDeflate.inflate(val); // 復号
    val = decodeURIComponent(val); // UTF8 → UTF16
    return val;
}
</script>
<style scoped>

</style>