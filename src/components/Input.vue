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
                v-model="computedDateFormatted"
                prepend-icon="event"
                readonly
                v-on="on"
              ></v-combobox>
            </template>
            <v-date-picker locale="jp-ja" v-model="datePicker" no-title @input="menu2 = false" :day-format="date => new Date(date).getDate()"></v-date-picker>
          </v-menu>
        </v-col>
        <v-col class="d-flex px-4" cols="12" sm="6">
          <v-simple-table fixed-header height="auto" width="100%">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left" width="100" style="white-space: nowrap">Name</th>
                  <th class="text-left" width="200">Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <v-select
                      :items="users"
                      v-model="selectedUser"
                      return-object
                      v-on:change=""
                    ></v-select>
                  </td>
                  <td>
                    <div v-bind:style="{width:'100%'}">bbbbbbbbbsbbbbbvvbbbbbbbbbbbbbbbb</div>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data: vm => ({
      date: new Date().toLocaleDateString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toLocaleDateString().substr(0, 10)),
      menu2: false,
      users:['123','456','789'],
      selectedUser:'123',
      datePicker:vm.formatDatePicker(),
  }),

  computed: {
    computedDateFormatted () {
      console.log("computedDateFormatted");
      return this.formatDate(this.date)
    },
  },
  watch: {
    date (val) {
      this.dateFormatted = this.formatDate(this.date)
    },
  },
  mounted(){
  },
  methods:{
    formatDate (date) {
      if (!date) return null
      const [year, month, day] = date.split('/')

      const d = new Date(year,month-1, day);
      console.log(new Date().toLocaleDateString().substr(0, 10));
      const WeekChars = [ "日", "月", "火", "水", "木", "金", "土" ];
      return `${year}/${month}/${day} (${WeekChars[d.getDay()]})`
    },
    formatDatePicker(){
      const [year, month, day] = new Date().toLocaleDateString().substr(0, 10).split('/');
      return `${year}-${month}-${day}`;
    }
  }
}
</script>
<style>
</style>