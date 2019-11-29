<template>
  <v-container id="share">
    <div>
      <v-btn color="primary" v-on:click="ShareAction" block>共有</v-btn>
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
      html2canvas(document.body, {height:606, y:padd}).then(canvas => {
        canvas.toBlob(blob => {
          const image = new File([blob], 'tmp.png', {type: 'image/png'});
          navigator.share({
            text: 'アプリ連携無しで画像がシェアできました！',
            url: 'https://tohutohu.github.io/no-login-image-share/',
            files: [image]
          }).then(() => {
            console.log('Share was successful.')
          }).catch((error) => {
            console.log('Sharing failed', error)
          });
        });
      });
    },
    CanShare: function () {
      if(navigator.share){
        return true;
      } else {
        return false;
      }
    }
  }
}
</script>