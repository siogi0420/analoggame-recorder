<template>
  <v-container id="share">
    <div v-if="CanShare() == true">
      <v-btn color="primary" v-on:click="ShareAction" block>共有1</v-btn>
    </div>
  </v-container>
</template>

<script>
import html2canvas from 'html2canvas';

export default {
  data () {
    return {
    }
  },
  mounted(){
  },
  methods:{
    ShareAction: function() {
      var paddingTop = parseInt(document.getElementById("ranking").style.paddingTop);
      var padd = document.getElementById("ranking").style.paddingTop;
      var height = paddingTop + document.getElementById("ranking").clientHeight;
      console.log("share action");
      document.getElementById("share").style.display ="none";
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
            }).catch((error) => {
              console.log('Sharing failed', error)
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
    }
  }
}
</script>