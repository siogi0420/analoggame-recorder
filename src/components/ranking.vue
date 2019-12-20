<template>
	<v-container>
		<v-row align="center">
			<v-col class="d-flex" cols="12" sm="6">
     		<v-select
     			:items="gameDates"
     			v-model="selectedDate"
     			return-object
     			v-on:change=""
     		></v-select>
    	</v-col>
    </v-row>
		<v-simple-table fixed-header height="auto" v-if="resultOfDate">
			<template v-slot:default>
				<thead>
					<tr>
						<th class="text-left" width="100" style="white-space: nowrap">Name</th>
						<th class="text-left">Score</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="result in resultOfDate[gameDates.indexOf(selectedDate)].result" id="rank_tr">
						<td min-width="100" style="white-space: nowrap">{{ result.name }}</td>
						<td id="Score">
							<div id="ScoreDetail">{{ result.score }}</div>
							<div v-if="result.score >= 0" id="Graph" v-bind:style="{width:graphSize(result.score) + '%'}"><br></div>
							<div v-else id="MinusGraph" v-bind:style="{width:graphSize(result.score) + '%'}"><br></div>
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
			selectedDate: '総合',
			resultOfDate:'',
			gameDates:[],
      tournament:''
		}
	},
	mounted(){
    this.tournament = this.$route.params.tournament;
		const result = JSON.parse(this.$localStorage.get(this.tournament, '[]'));
    this.resultOfDate = getAllResult(result).concat(result);
    sortResult(this.resultOfDate);
    this.gameDates = this.resultOfDate.map(result => result.date);
  },
  methods:{
		graphSize: function(score) {
			const MaxScore = Math.max.apply(null, this.resultOfDate[this.gameDates.indexOf(this.selectedDate)].result.map(result => Math.abs(result.score)));
			return Math.abs(score) / MaxScore * 100;
		},
		ShareAction: function() {
			console.log("share action");
		}
	}
}

const getAllResult = (result) => {
	const resultAll = result.map(resultOfDate => resultOfDate.result);
  const obj = resultAll.reduce((prev, current) => {
  	const obj = current.reduce((_prev, _current) => {
   		_prev[_current.name] = _current.score;
   		return _prev;
   	}, {});

   	Object.keys(obj).forEach(key => {
   		if (!prev[key]) {
   			prev[key] = obj[key];
   		} else {
   			prev[key] += obj[key];
   		}
   	});

   	return prev;
  }, {});

  const allResult = [{date:'総合', result:Object.entries(obj).map(([key, value]) => ({'name':key, 'score':value}))}];
  return allResult;
}

const sortResult = (result) => {
	result.map(resultOfDate => {
		resultOfDate.result = resultOfDate.result.sort((a, b) => b.score - a.score);
	});
}

</script>
<style>
#Graph {
	background:#FF8A65;
	color:#FF8A65;
}

#MinusGraph {
	background:#FF1744A0;
	color:#FF1744A0;
}

#rank_tr {
  background:#424242
}

</style>