(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0baa5d26"],{"0a0c":function(t,e,s){},eae6:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"header px-3 px-sm-5 px-lg-7"},[i("div",{staticClass:"header__mobile-button",on:{click:function(e){return t.$eventBus.$emit("toggleSideMenu")}}},[i("div",{staticClass:"header__mobile-button-rect"})]),i("div",{staticClass:"header__profile"},[i("button",{class:["header__profile-notification",{"header__profile-notification--noticed":!0},"mr-3","mr-lg-6"]},[i("img",{attrs:{src:s("f38d"),alt:""}})]),i("div",{staticClass:"header__profile-image mr-2",attrs:{src:"",alt:""}}),i("div",{staticClass:"d-flex flex-column"},[i("h5",{staticClass:"font-weight-bold"},[t._v(" "+t._s(t.$store.getters["user/userInfo"].name)+" ")]),i("h6",{staticClass:"font-weight-normal"},[t._v(" "+t._s(t.$store.getters["user/userInfo"].role)+" ")])])])])},a=[],n={name:"DefaultHeader",computed:{isNotificated:function(){return 0!==this.notifications.length}}},r=n,o=(s("f3c7"),s("2877")),c=Object(o["a"])(r,i,a,!1,null,"75f5584a",null);e["default"]=c.exports},f38d:function(t,e,s){t.exports=s.p+"img/header-notification.89e1c976.svg"},f3c7:function(t,e,s){"use strict";s("0a0c")}}]);