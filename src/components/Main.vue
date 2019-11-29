<template>
  <v-container class="px-0">
    <v-content id="ranking" class="pt-6">
      <Ranking/>
    </v-content>
    <v-content class="pt-0 px-0">
      <Share/>
    </v-content>
  </v-container>
</template>

<script>
import Ranking from '@/components/ranking';
import Share from '@/components/Share';

export default {
  name: 'App',

  components: {
    Ranking,
    Share,
  },

  data: () => {
    return {

    }
  },
  mounted(){
  },
  methods:{
    addData:function(){
      console.log("add data");
    }
  }
};
</script>
<style scoped>
  ActionBar {
    background-color: #53ba82;
      color: #ffffff;
  }
  #writeIcon{
    filter: drop-shadow(3px 3px 3px #000a);
  }
</style>