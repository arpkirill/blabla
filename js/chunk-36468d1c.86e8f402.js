(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36468d1c"],{"24f5":function(e,t,n){e.exports=n.p+"img/side-menu-4.5fc44740.svg"},"5f0d":function(e,t,n){e.exports=n.p+"img/side-menu-6.61f5fc8c.svg"},a9b0:function(e,t,n){e.exports=n.p+"img/side-menu-7.496a83cc.svg"},aa5a:function(e,t,n){e.exports=n.p+"img/side-menu-1.7503dcc8.svg"},b7b1:function(e,t,n){e.exports=n.p+"img/side-menu-3.4cae2651.svg"},bc84:function(e,t,n){e.exports=n.p+"img/side-menu-5.a9daaa50.svg"},bcb9:function(e,t,n){"use strict";n("de10")},bd49:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("transition",{attrs:{name:"side-menu__background-animation"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.menuVisible,expression:"menuVisible"}],class:["side-menu__background",{"d-none":e.sideMenuTypeChanged}],on:{click:function(t){return e.$emit("close")}}})]),s("div",{ref:"sideMenu",class:["side-menu",{"side-menu--visible":e.menuVisible},"pl-3 pl-lg-6"]},[s("img",{staticClass:"side-menu__logo",attrs:{src:n("df0d"),alt:""}}),e._l(e.menuOptions,(function(t){return s("router-link",{key:t.text,class:["side-menu__option","py-3 pl-3 pl-lg-6"],attrs:{"active-class":"side-menu__option--active",to:{name:t.pathName},exact:""},on:{click:function(n){e.testSelected=t.text}}},[s("img",{staticClass:"side-menu__option-icon",attrs:{src:t.imageSrc,alt:""}}),e._v(" "+e._s(t.text)+" ")])})),s("div",{staticClass:"side-menu__contact mt-auto mb-3 mb-lg-6"},[s("div",{staticClass:"side-menu__contact-title"},[e._v(" Телефон ")]),s("div",{staticClass:"side-menu__contact-info"},[e._v(" "+e._s(e.testContact.phoneNumber)+" ")])]),s("div",{staticClass:"side-menu__contact"},[s("div",{staticClass:"side-menu__contact-title"},[e._v(" Центр Обслуживания ")]),s("div",{staticClass:"side-menu__contact-info"},[e._v(" "+e._s(e.testContact.centerAddress)+" ")])])],2)],1)},i=[],a=[{imageSrc:n("aa5a"),text:"Главная",pathName:"Main"},{imageSrc:n("d1c5"),text:"Профиль",pathName:"Profile"},{imageSrc:n("b7b1"),text:"Клиенты",pathName:"test"},{imageSrc:n("24f5"),text:"Агенты",pathName:"test"},{imageSrc:n("bc84"),text:"Финансы",pathName:"Payments"},{imageSrc:n("5f0d"),text:"Обучение",pathName:"test"},{imageSrc:n("a9b0"),text:"Помощь",pathName:"test"}],c={components:{},data:function(){return{menuOptions:a,testSelected:"Главная",testContact:{phoneNumber:"8-800-77-000-44",centerAddress:"ул. Ленина, 12"},sideMenuTypeChanged:!1}},props:{menuVisible:{type:Boolean,required:!0}},mounted:function(){var e=new MutationObserver(this.setMenuTypeChanged),t={attributes:!0};e.observe(this.$refs.sideMenu,t)},methods:{setMenuTypeChanged:function(e,t){var n=this;this.sideMenuTypeChanged=!0,setTimeout((function(){n.sideMenuTypeChanged=!1}),50)}}},o=c,u=(n("bcb9"),n("2877")),d=Object(u["a"])(o,s,i,!1,null,"4687e493",null);t["default"]=d.exports},d1c5:function(e,t,n){e.exports=n.p+"img/side-menu-2.df90fff7.svg"},de10:function(e,t,n){},df0d:function(e,t,n){e.exports=n.p+"img/side-menu-logo.png"}}]);