(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ed53cf72"],{"07ac":function(e,t,n){var s=n("23e7"),i=n("6f53").values;s({target:"Object",stat:!0},{values:function(e){return i(e)}})},"6e48":function(e,t,n){"use strict";n("bb0d")},"6f53":function(e,t,n){var s=n("83ab"),i=n("df75"),o=n("fc6a"),u=n("d1e7").f,a=function(e){return function(t){var n,a=o(t),c=i(a),r=c.length,d=0,l=[];while(r>d)n=c[d++],s&&!u.call(a,n)||l.push(e?[n,a[n]]:a[n]);return l}};e.exports={entries:a(!0),values:a(!1)}},b64b:function(e,t,n){var s=n("23e7"),i=n("7b0b"),o=n("df75"),u=n("d039"),a=u((function(){o(1)}));s({target:"Object",stat:!0,forced:a},{keys:function(e){return o(i(e))}})},bb0d:function(e,t,n){},e8c5:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"default-container"},[n("StatusCardPopup",{directives:[{name:"show",rawName:"v-show",value:e.popups.showStatusCardPopup,expression:"popups.showStatusCardPopup"}],style:{zIndex:e.setActiveIndex()},on:{close:function(t){e.popups.showStatusCardPopup=!1}}}),n("main",{staticClass:"main"},[e.$store.getters["auth/isLoggedIn"]?n("DefaultSideMenu",{attrs:{"menu-visible":e.showSideMenu},on:{close:function(t){e.showSideMenu=!1},toggle:function(t){e.showSideMenu=!e.showSideMenu}}}):e._e(),n("div",{staticClass:"d-flex flex-column flex-grow-1 "},[e.$store.getters["auth/isLoggedIn"]?n("DefaultHeader"):e._e(),n("div",{staticClass:"main-content px-2 px-sm-5 px-md-3 pt-md-5 px-lg-5 pt-lg-6"},[n("router-view",{key:e.$route.fullPath})],1),n("DefaultFooter")],1)],1),n("transition",{attrs:{name:"backdrop-appear"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.showWrapper,expression:"showWrapper"}],staticClass:"modal modal-backdrop",on:{click:function(t){return e.$eventBus.$emit("close-popups")}}})])],1)},i=[],o=(n("4160"),n("45fc"),n("b64b"),n("d3b7"),n("07ac"),n("159b"),function(){return n.e("chunk-e43a5650").then(n.bind(null,"aafd"))}),u=function(){return n.e("chunk-0baa5d26").then(n.bind(null,"eae6"))},a=function(){return n.e("chunk-c6b22b10").then(n.bind(null,"9675"))},c=function(){return n.e("chunk-36468d1c").then(n.bind(null,"bd49"))},r={name:"DefaultContainer",components:{DefaultHeader:u,DefaultFooter:a,DefaultSideMenu:c,StatusCardPopup:o},data:function(){return{popups:{showStatusCardPopup:!1},showSideMenu:!1,constants:{lgAvailWidth:992,lgAvailWidthDelta:90}}},created:function(){var e=this;this.$eventBus.$on("close-popups",this.closePopups),this.$eventBus.$on("showStatusCardPopup",(function(t){e.popups.showStatusCardPopup=!0})),this.$eventBus.$on("toggleSideMenu",(function(){e.showSideMenu=!e.showSideMenu}))},mounted:function(){var e=this;this.sideResizeMenuVisibility(),window.addEventListener("resize",(function(){e.sideResizeMenuVisibility()}))},activeZIndex:1050,computed:{showWrapper:function(){var e=Object.values(this.popups);return e.length&&e.some((function(e){return e}))?(document.body.classList.add("noscroll"),!0):(document.body.classList.remove("noscroll"),!1)}},methods:{closePopups:function(){var e=this;Object.keys(this.popups).forEach((function(t){e.$set(e.popups,t,!1)}))},setActiveIndex:function(){var e=this.activeZIndex;return this.activeZIndex++,e},sideResizeMenuVisibility:function(){var e=screen.availWidth;e>=this.constants.lgAvailWidth?this.showSideMenu=!0:e>=this.constants.lgAvailWidth-this.constants.lgAvailWidthDelta&e<this.constants.lgAvailWidth&&(this.showSideMenu=!1)}}},d=r,l=(n("6e48"),n("2877")),p=Object(l["a"])(d,s,i,!1,null,"acc7daa8",null);t["default"]=p.exports}}]);