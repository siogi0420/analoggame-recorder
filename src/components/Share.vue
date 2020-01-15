<template>
  <v-container id="share">
    <div v-if="CanShare() == true">
      <v-btn color="primary" v-on:click="dialog = true" block>共有</v-btn>
    </div>
    <v-dialog
        v-model="dialog"
        >
        <v-card>
          <v-card-title class="headline">共有</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              @click="ShareAction"
              >画像を共有</v-btn>
            <v-btn
              color="success"
              @click="DataShare"
              >データを共有</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  </v-container>
</template>

<script>
import html2canvas from 'html2canvas';

export default {
  data () {
    return {
      dialog:false,
    }
  },
  mounted(){
  },
  watch:{

  },
  methods:{
    ShareAction: function() {
      this.dialog = false;
      var paddingTop = parseInt(document.getElementById("ranking").style.paddingTop);
      var padd = document.getElementById("ranking").style.paddingTop;
      var height = paddingTop + document.getElementById("ranking").clientHeight;
      console.log("share action");
      document.getElementById("share").style.display ="none";
      document.getElementsByClassName("v-dialog")[0].style.display ="none";
      window.scrollTo(0, 0);
      html2canvas(document.body,{
        windowHeight: document.getElementsByTagName('body')[0].scrollHeight
      }).then(canvas => {
        if(navigator.share){
            canvas.toBlob(blob => {
            const image = new File([blob], 'tmp.png', {type: 'image/png'});
            navigator.share({
              text: '今回の結果',
              url: '',
              files: [image]
            }).then(() => {
              console.log('Share was successful.')
              document.getElementById("share").style.display ="block";
            }).catch((error) => {
              console.log('Sharing failed', error)
              document.getElementById("share").style.display ="block";
            });
          });
        } else {
          document.body.appendChild(canvas);
          document.getElementById("share").style.display ="block";
        }
      });
    },
    CanShare: function () {
      if(navigator.share){
        return true;
      } else {
        return true;
        // return false;
      }
    },
    DataShare(){
      this.dialog = false;
      const result = this.$localStorage.get(this.$route.params.tournament, '[]');
      console.log(`https://siogi0420.github.io/analoggame-recorder/?share_key=${deflate(this.$route.params.tournament)}&share_data=${deflate(result)}`);
      if(navigator.share){
        navigator.share({
          url: `https://siogi0420.github.io/analoggame-recorder/?share_key=${deflate(this.$route.params.tournament)}&share_data=${deflate(result)}`
        }).then(() => {
          console.log('Share was successful.')
        }).catch((error) => {
          console.log('Sharing failed', error)
        });
      }
    },
  }
}
function deflate(val) {
    val = encodeURIComponent(val); // UTF16 → UTF8
    val = RawDeflate.deflate(val); // 圧縮
    val = btoa(val); // base64エンコード
    val = encodeURIComponent(val);
    return val;
}
</script>