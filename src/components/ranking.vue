<template>
	<v-container>
		<v-row align="center">
			<v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="gameDates"
           v-model="selectedDate"
           return-object
        ></v-select>
      </v-col>
     </v-row>
		<v-simple-table fixed-header height="300px" v-if="resultOfDate">
			<template v-slot:default>
				<thead>
					<tr>
						<th class="text-left" width="100" style="white-space: nowrap">Name</th>
						<th class="text-left">Score</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="result in resultOfDate[0].result">
						<td min-width="100" style="white-space: nowrap">{{ result.name }}</td>
						<td id="Score">
							<div id="ScoreDetail">{{ result.score }}</div>
							<div id="Graph" v-bind:style="{width:Math.abs(result.score) / 100 + 'px'}"><br></div>
						</td>
					</tr>
				</tbody>
			</template>
		</v-simple-table>
	</v-container>
</template>

<script>
export default {
	data () {
		return {
			desserts: [
				{
					name: 'たぬき',
					calories: 159,
				},
				{
					name: '子荻',
					calories: 237,
				},
				{
					name: 'ゆろ',
					calories: 262,
				},
				{
					name: 'えりさ',
					calories: 305,
				},
				{
					name: 'たきゃはし',
					calories: 356,
				},
			],
			items: ['総合', '2019/11/15', '2019/10/30', '2019/10/16'],
			selectedDate: '総合',
			resultOfDate:'',
			gameDates:[],
		}
	},
	mounted(){
	const result = this.$localStorage.get('resultOfDate');
    this.resultOfDate = result;
    this.gameDates = result.map(result => result.date)
    this.gameDates.unshift('総合')
    console.log(this.gameDates)
  }
}
</script>
<style>
#Graph {
	background:#FF8A65;
	color:#FF8A65;
}
</style>