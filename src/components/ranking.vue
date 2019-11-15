<template>
	<v-container>
		<v-row align="center">
			<v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="items"
           v-model="selectedDate"
           return-object
        ></v-select>
      </v-col>
     </v-row>
		<v-simple-table fixed-header height="300px">
			<template v-slot:default>
				<thead>
					<tr>
						<th class="text-left" width="100" style="white-space: nowrap">Name</th>
						<th class="text-left">Score</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in desserts" :key="item.name">
						<td min-width="100" style="white-space: nowrap">{{ item.name }}</td>
						<td id="Score">
							<div id="ScoreDetail">{{ item.calories }}</div>
							<div id="Graph" v-bind:style="{width:item.calories / desserts.length * 2 + 'px'}"><br></div>
						</td>
					</tr>
				</tbody>
			</template>
		</v-simple-table>
		<div>{{resultOfDate}}</div>
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
		}
	},
	mounted(){
    this.resultOfDate = this.$localStorage.get('resultOfDate')
    console.log(this.resultOfDate)
    var json = JSON.parse(this.resultOfDate)
    console.log("json")
    console.log(json)
    var result = json[0]
    console.log("result")
    console.log(result)
  }
}
</script>
<style>
#Graph {
	background:#FF8A65;
	color:#FF8A65;
}
</style>