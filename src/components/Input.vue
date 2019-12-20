<template>
  <v-content>
    <v-container id="">
      <v-row align="center">
        <v-col class="d-flex px-4" cols="12" sm="6">
          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            transition="scale-transition"
          >
            <template v-slot:activator="{ on }">
              <v-combobox
                v-model="dateFormatted"
                prepend-icon="event"
                readonly
                v-on="on"
              ></v-combobox>
            </template>
            <v-date-picker
              locale="jp-ja"
              v-model="datePicker"
              no-title @input="menu2 = false"
              :day-format="date => new Date(date).getDate()"
              :allowed-dates="allowedDates"
              >
              </v-date-picker>
          </v-menu>
        </v-col>
        <v-col class="d-flex px-2" cols="12" sm="6">
          <v-simple-table fixed-header height="auto" width="100%">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left" width="150" style="white-space: nowrap">Name</th>
                  <th class="text-left">Score</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="i in index">
                  <td>
                    <v-select
                      :items="users"
                      v-model="selectedUser[i-1]"
                      v-on:change=""
                    ></v-select>
                  </td>
                  <td>
                    <v-text-field v-model="resultScores[i-1]" v-bind:style="{width:'100%'}" type="number"></v-text-field>
                  </td>
                  <td width="44" class="removeBtn">
                    <v-btn text icon v-if="i == index" v-on:click="removeBtnAction">
                      <v-icon>remove_circle</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-dialog
        v-model="dialog"
        >
        <v-card>
          <v-card-title class="headline">新規登録</v-card-title>
          <v-card-text>Name</v-card-text>
          <v-text-field v-model="addUserLabel" class="d-flex px-6"></v-text-field>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              color="error"
              @click="dialogCancel()"
              >Cancel</v-btn>
            <v-btn
              text
              color="success"
              @click="userAddBtn"
              >ADD</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog
        v-model="registDialog"
        >
        <v-card>
          <v-card-title class="headline">登録完了</v-card-title>
          <v-card-text>新しいデータを記録しました</v-card-text>
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
        v-model="errorDialog"
        >
        <v-card>
          <v-card-title class="headline">登録失敗</v-card-title>
          <v-card-text>データが正しくありません</v-card-text>
          <v-card-text>日付やデータがすべて入力されているか確認してください</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              color="error"
              @click="errorDialog = false"
              >OK</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
    <v-container id="add">
      <v-layout :class="">
        <v-flex class="px-10">
          <v-btn color="primary" v-on:click="addBtnAction" block>追加</v-btn>
        </v-flex>
        <v-flex class="px-10">
          <v-btn color="success" v-on:click="registerBtnAction" block>登録</v-btn>
        </v-flex>
      </v-layout>
  </v-container>
  </v-content>
</template>

<script>
export default {
  data: vm => ({
      date: new Date().toLocaleDateString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toLocaleDateString().substr(0, 10)),
      menu2: false,
      users:[],
      selectedUser:[''],
      datePicker:vm.formatDatePicker(),
      label:'',
      index:1,
      dialog:false,
      selectedUserIndex:0,
      addUserLabel:'',
      resultScores:[0],
      registDialog:false,
      tournament:'',
      gameDates:[],
      errorDialog:false,
  }),

  computed: {
    computedDateFormatted () {
      return this.formatDate(this.date)
    },
  },
  watch: {
    date (val) {
      this.dateFormatted = this.formatDate(this.date)
    },
    datePicker(val){
      const [year, month, day] = val.split('-')
      const d = new Date(year,month-1, day);
      this.dateFormatted = this.formatDate(d.toLocaleDateString().substr(0, 10));
    },
    selectedUser(value){
      this.selectedUserIndex = this.selectedUser.indexOf('新規作成');
      if (this.selectedUserIndex >= 0) {
        this.selectedUser.splice(this.selectedUserIndex, 1, '');
        this.dialog = true;
      }
    },
  },
  mounted(){
    this.tournament = this.$route.params.tournament;
    const result = JSON.parse(this.$localStorage.get(this.tournament, '[]'));
    this.users = result.reduce((prev, curr) => {
      const names = curr.result.reduce((_prev, _curr) => {
        _prev.push(_curr.name);
        return _prev;
      }, []);
      prev = prev.concat(names.filter(name => prev.indexOf(name) == -1));
      return prev;
    },[]).concat(['新規作成']);

    this.gameDates = result.map(result => result.date);
  },
  methods:{
    formatDate (date) {
      if (!date) return null;
      const [year, month, day] = date.split('/')

      const d = new Date(year,month-1, day);
      const WeekChars = [ "日", "月", "火", "水", "木", "金", "土" ];
      return `${year}/${month}/${day} (${WeekChars[d.getDay()]})`
    },
    formatDatePicker(){
      const [year, month, day] = new Date().toLocaleDateString().substr(0, 10).split('/');
      return `${year}-${month}-${day}`;
    },
    addBtnAction(){
      this.index++;
      this.selectedUser.push('');
      this.resultScores.push(0);
    },
    removeBtnAction(){
      if (this.index != 1) {
        this.index--;
        this.selectedUser.length--;
        this.resultScores.length--;
      }
    },
    userAddBtn(){
      this.users.splice(this.users.length-1, 1, this.addUserLabel);
      this.users.push('新規作成');
      this.selectedUser.splice(this.selectedUserIndex, 1, this.addUserLabel);
      this.selectedUserIndex = 0;
      this.dialog=false;
      this.addUserLabel = '';
    },
    dialogCancel(){
      this.addUserLabel = '';
      this.selectedUserIndex = 0;
      this.dialog=false;
    },
    registerBtnAction(){
      const todayResult = {
        date:this.datePicker.replace(/-/g,'/'),
        result:this.selectedUser.map((user, index) => {
          return {name:user, score:parseInt(this.resultScores[index])};
        })
      };
      if (this.gameDates.indexOf(todayResult.date) == -1 && todayResult.result.length != 0) {
        if (todayResult.result && todayResult.result.every(val => val.name != '' && !Number.isNaN(val.score))){
          const result = JSON.parse(this.$localStorage.get(this.tournament, '[]'));
          this.$localStorage.set(this.tournament, JSON.stringify(result.concat(todayResult)));
          this.registDialog = true;
        } else {
          this.errorDialog = true;
        }
      } else {
        this.errorDialog = true;
      }
    },
    okBtnAction(){
      this.registDialog = false;
      this.$router.replace({name:'Main' ,params:{tournament:this.tournament}});
    },
    allowedDates(val){
      if (this.gameDates.indexOf(val.replace(/-/g,'/')) == -1) {
        return true;
      } else {
        false;
      }
    }
  }
};
</script>
<style scope>
td.removeBtn {
  padding:0;
}

</style>