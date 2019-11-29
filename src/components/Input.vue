<template>
  <v-content>
    <v-container id="">
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <p>日付</p>
          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="computedDateFormatted"
              readonly
              v-on="on"
            ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title @input="menu2 = false"></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data: vm => ({
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      menu2: false,
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
  },
  mounted(){
  },
  methods:{
    formatDate (date) {
      if (!date) return null
      const [year, month, day] = date.split('-')
      return `${year}/${month}/${day}`
    },
    parseDate (date) {
      if (!date) return null
      const [year, month, day] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
  }
}
</script>