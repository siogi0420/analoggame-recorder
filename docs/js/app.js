(function(e){function t(t){for(var a,c,s=t[0],i=t[1],l=t[2],d=0,f=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var i=n[s];0!==r[i]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/analoggame-recorder/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1f01":function(e,t,n){},"4bea":function(e,t){e.exports="data:image/png;base64,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"},"4eef":function(e,t,n){"use strict";var a=n("1f01"),r=n.n(a);r.a},"4f35":function(e,t,n){"use strict";var a=n("c4af"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:"",id:"header"}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"AnalogGame-Recorder Logo",contain:"",src:n("cf05"),transition:"scale-transition",height:"40",width:"40"}})],1),a("v-spacer"),a("div",{staticClass:"d-flex justify-end"},["/"==this.$route.path?a("router-link",{attrs:{to:"/Input"}},[a("v-img",{attrs:{alt:"write icon",src:n("c75f"),transition:"scale-transition",width:"30",contain:"",id:"writeIcon"},on:{click:e.addData}})],1):e._e(),"/Input"==this.$route.path?a("router-link",{attrs:{to:"/Input"}},[a("v-img",{attrs:{alt:"write icon",src:n("4bea"),transition:"scale-transition",width:"24",contain:"",id:"writeIcon"},on:{click:e.back}})],1):e._e()],1)],1),a("router-view")],1)},o=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"px-0"},[n("v-content",{staticClass:"pt-6",attrs:{id:"ranking"}},[n("Ranking")],1),n("v-content",{staticClass:"pt-0 px-0"},[n("Share")],1)],1)},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[n("v-select",{attrs:{items:e.gameDates,"return-object":""},on:{change:function(e){}},model:{value:e.selectedDate,callback:function(t){e.selectedDate=t},expression:"selectedDate"}})],1)],1),e.resultOfDate?n("v-simple-table",{attrs:{"fixed-header":"",height:"auto"},scopedSlots:e._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left",staticStyle:{"white-space":"nowrap"},attrs:{width:"100"}},[e._v("Name")]),n("th",{staticClass:"text-left"},[e._v("Score")])])]),n("tbody",e._l(e.resultOfDate[e.gameDates.indexOf(e.selectedDate)].result,(function(t){return n("tr",{attrs:{id:"rank_tr"}},[n("td",{staticStyle:{"white-space":"nowrap"},attrs:{"min-width":"100"}},[e._v(e._s(t.name))]),n("td",{attrs:{id:"Score"}},[n("div",{attrs:{id:"ScoreDetail"}},[e._v(e._s(t.score))]),t.score>=0?n("div",{style:{width:e.graphSize(t.score)+"%"},attrs:{id:"Graph"}},[n("br")]):n("div",{style:{width:e.graphSize(t.score)+"%"},attrs:{id:"MinusGraph"}},[n("br")])])])})),0)]},proxy:!0}],null,!1,3511104506)}):e._e()],1)},l=[],u=(n("99af"),n("4160"),n("c975"),n("d81d"),n("13d5"),n("4e827"),n("b0c0"),n("4fad"),n("b64b"),n("159b"),n("3835")),d={data:function(){return{selectedDate:"総合",resultOfDate:"",gameDates:[]}},mounted:function(){var e=this.$localStorage.get("resultOfDate");this.resultOfDate=f(e).concat(e),p(this.resultOfDate),this.gameDates=this.resultOfDate.map((function(e){return e.date}))},methods:{graphSize:function(e){var t=Math.max.apply(null,this.resultOfDate[this.gameDates.indexOf(this.selectedDate)].result.map((function(e){return Math.abs(e.score)})));return Math.abs(e)/t*100},ShareAction:function(){console.log("share action")}}},f=function(e){var t=e.map((function(e){return e.result})),n=t.reduce((function(e,t){var n=t.reduce((function(e,t){return e[t.name]=t.score,e}),{});return Object.keys(n).forEach((function(t){e[t]?e[t]+=n[t]:e[t]=n[t]})),e}),{}),a=[{date:"総合",result:Object.entries(n).map((function(e){var t=Object(u["a"])(e,2),n=t[0],a=t[1];return{name:n,score:a}}))}];return a},p=function(e){e.map((function(e){e.result=e.result.sort((function(e,t){return t.score-e.score}))}))},m=d,g=(n("4eef"),n("2877")),h=n("6544"),A=n.n(h),v=n("62ad"),b=n("a523"),k=n("0fd9"),D=n("b974"),w=n("1f4f"),y=Object(g["a"])(m,i,l,!1,null,null,null),O=y.exports;A()(y,{VCol:v["a"],VContainer:b["a"],VRow:k["a"],VSelect:D["a"],VSimpleTable:w["a"]});var C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{id:"share"}},[1==e.CanShare()?n("div",[n("v-btn",{attrs:{color:"primary",block:""},on:{click:e.ShareAction}},[e._v("共有")])],1):e._e()])},B=[],V=(n("e25e"),n("c0e9")),S=n.n(V),x=(n("70b0"),{data:function(){return{}},mounted:function(){},methods:{ShareAction:function(){var e=parseInt(document.getElementById("ranking").style.paddingTop);document.getElementById("ranking").style.paddingTop,document.getElementById("ranking").clientHeight;console.log("share action"),S()(document.getElementById("ranking")).then((function(e){e.toBlob((function(e){var t=new File([e],"tmp.png",{type:"image/png"});navigator.share({text:"test",url:"",files:[t]}).then((function(){console.log("Share was successful.")})).catch((function(e){console.log("Sharing failed",e)}))}))}))},CanShare:function(){return navigator.share,!0}}}),j=x,Q=n("8336"),M=Object(g["a"])(j,C,B,!1,null,null,null),F=M.exports;A()(M,{VBtn:Q["a"],VContainer:b["a"]});var R={name:"App",components:{Ranking:O,Share:F},data:function(){return{}},mounted:function(){},methods:{addData:function(){console.log("add data")}}},T=R,I=(n("65a9"),n("a75b")),P=Object(g["a"])(T,c,s,!1,null,"3ae86eda",null),G=P.exports;A()(P,{VContainer:b["a"],VContent:I["a"]});var N={name:"App",data:function(){return{}},mounted:function(){},methods:{addData:function(){console.log("add data")},back:function(){this.$router.back()}}},z=N,U=(n("4f35"),n("7496")),J=n("40dc"),Y=n("adda"),E=n("2fa4"),Z=Object(g["a"])(z,r,o,!1,null,"9506f4c2",null),W=Z.exports;A()(Z,{VApp:U["a"],VAppBar:J["a"],VImg:Y["a"],VSpacer:E["a"]});var q=n("9483");Object(q["a"])("".concat("/analoggame-recorder/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var X=n("f309"),K=n("fcf4");a["a"].use(X["a"]);var H=new X["a"]({theme:{dark:!0,themes:{dark:{primary:K["a"].red.lighten1},light:{primary:K["a"].red.lighten1}}}}),L=n("ead5"),_=n.n(L),$=n("8c4f"),ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-content",[n("v-container",{attrs:{id:"share"}},[n("div",[n("p",[e._v("入力画面だよ")])])])],1)},te=[],ne={data:function(){return{}},mounted:function(){},methods:{}},ae=ne,re=Object(g["a"])(ae,ee,te,!1,null,null,null),oe=re.exports;A()(re,{VContainer:b["a"],VContent:I["a"]}),a["a"].use($["a"]);var ce=[{path:"/",name:"home",component:G},{path:"/Input",name:"Input",component:oe}],se=new $["a"]({mode:"history",base:"/analoggame-recorder/",routes:ce}),ie=se;a["a"].config.productionTip=!1,a["a"].use(_.a),new a["a"]({vuetify:H,render:function(e){return e(W)},router:ie,serverCacheKey:!1,localStorage:{resultOfDate:{type:Object,default:[{date:"2019/10/16",result:[{name:"たぬき",score:2075},{name:"えりさ",score:-4250},{name:"子荻",score:20175},{name:"たかはし",score:150},{name:"ゆろ",score:7350}]},{date:"2019/10/27",result:[{name:"たぬき",score:4200},{name:"えりさ",score:9200},{name:"子荻",score:9375}]},{date:"2019/10/31",result:[{name:"たぬき",score:-50},{name:"えりさ",score:6625},{name:"子荻",score:7700},{name:"たかはし",score:14125},{name:"ゆろ",score:1600},{name:"くちか",score:0}]},{date:"2019/11/14",result:[{name:"たぬき",score:9600},{name:"えりさ",score:9250},{name:"子荻",score:12400},{name:"たかはし",score:0},{name:"ゆろ",score:-3950},{name:"くちか",score:8850},{name:"そひ",score:300},{name:"まつの",score:-1450}]},{date:"2019/11/26",result:[{name:"たぬき",score:1675},{name:"えりさ",score:-6650},{name:"子荻",score:11500},{name:"たかはし",score:18325},{name:"ゆろ",score:800},{name:"くちか",score:16175},{name:"そひ",score:-2375},{name:"まつの",score:550}]}]}}}).$mount("#app")},"65a9":function(e,t,n){"use strict";var a=n("f8bf"),r=n.n(a);r.a},c4af:function(e,t,n){},c75f:function(e,t,n){e.exports=n.p+"img/icon-edit-1.png"},cf05:function(e,t,n){e.exports=n.p+"img/logo.png"},f8bf:function(e,t,n){}});