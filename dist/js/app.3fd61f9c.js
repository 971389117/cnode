(function(t){function n(n){for(var a,r,o=n[0],c=n[1],u=n[2],p=0,f=[];p<o.length;p++)r=o[p],s[r]&&f.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(n);while(f.length)f.shift()();return i.push.apply(i,u||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],a=!0,o=1;o<e.length;o++){var c=e[o];0!==s[c]&&(a=!1)}a&&(i.splice(n--,1),t=r(r.s=e[0]))}return t}var a={},s={app:0},i=[];function r(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=a,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)r.d(e,a,function(n){return t[n]}.bind(null,a));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=n,o=o.slice();for(var u=0;u<o.length;u++)n(o[u]);var l=c;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var a=e("85ec"),s=e.n(a);s.a},"22f1":function(t,n,e){"use strict";var a=e("39a5"),s=e.n(a);s.a},"39a5":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var a=e("2b0e"),s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("Heador"),e("div",{staticClass:"main"},[e("router-view",{staticClass:"app-layout",attrs:{name:"slidebar"}}),e("router-view",{attrs:{name:"main"}})],1)],1)},i=[],r=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"header"},[a("router-link",{attrs:{to:{name:"root"}}},[a("img",{attrs:{src:e("d686"),alt:""}})]),t._m(0)],1)},o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",[e("li",[e("a",{attrs:{href:"#"}},[t._v("首页")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("新手入门")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("API")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("关于")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("注册")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("登录")])])])}],c={name:"Header"},u=c,l=(e("22f1"),e("2877")),p=Object(l["a"])(u,r,o,!1,null,"68d5395a",null),f=p.exports,d=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"PostList"},[t.isLoading?a("div",{staticClass:"loading"},[a("img",{attrs:{src:e("cf1c")}})]):a("div",{staticClass:"posts"},[a("ul",[t._m(0),t._l(t.posts,function(n){return a("li",[a("img",{attrs:{src:n.author.avatar_url,alt:""}}),a("span",{staticClass:"allcount"},[a("span",{staticClass:"reply_count"},[t._v(t._s(n.reply_count))]),t._v("\n          /"+t._s(n.visit_count)+"\n        ")]),a("span",{class:[{put_good:1==n.good,put_top:1==n.top,"topiclist-tab":1!=n.good&&1!=n.top}]},[a("span",[t._v("\n            "+t._s(t._f("tabFormatter")(n))+"\n          ")])]),a("router-link",{attrs:{to:{name:"post_content",params:{id:n.id,name:n.author.loginname}}}},[a("span",[t._v("\n          "+t._s(n.title)+"\n         ")])]),a("span",{staticClass:"last_reply"},[t._v("\n          "+t._s(t._f("formatDate")(n.last_reply_at))+"\n        ")])],1)}),a("li",[a("pagination",{on:{handleList:t.renderList}})],1)],2)])])},_=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",[e("div",{staticClass:"toobar"},[e("span",[t._v("全部")]),e("span",[t._v("精华")]),e("span",[t._v("分享")]),e("span",[t._v("问答")]),e("span",[t._v("招聘")])])])}],v=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"pagination"},[e("button",{on:{click:t.changeBtn}},[t._v("首页")]),e("button",{on:{click:t.changeBtn}},[t._v("上一页")]),t.jduge?e("button",{staticClass:"pagebtn"},[t._v("......")]):t._e(),t._l(t.pagebtns,function(n){return e("button",{class:[{currentPage:n==t.currentPage},"pagebtn"],on:{click:function(e){return t.changeBtn(n)}}},[t._v("\n    "+t._s(n)+"\n  ")])}),e("button",{on:{click:t.changeBtn}},[t._v("下一页")])],2)},g=[],h=e("1157"),m=e.n(h),b={name:"Pagination",data:function(){return{pagebtns:[1,2,3,4,5,"......"],currentPage:1,jduge:!1}},methods:{changeBtn:function(t){if("number"==typeof t)this.currentPage=t,this.jduge=t>4,t==this.pagebtns[4]?(this.pagebtns.shift(),this.pagebtns.splice(4,0,this.pagebtns[3]+1)):t==this.pagebtns[0]&&1!=t&&(this.pagebtns.unshift(this.pagebtns[0]-1),this.pagebtns.splice(5,1)),this.$emit("handleList",this.currentPage);else switch(t.target.innerText){case"上一页":m()("button.currentPage").prev().click();break;case"下一页":m()("button.currentPage").next().click();break;case"首页":this.pagebtns=[1,2,3,4,5,"......"],this.changeBtn(1);break;default:break}}}},C=b,y=(e("7383"),Object(l["a"])(C,v,g,!1,null,"6a9a2e99",null)),L=y.exports,j={name:"PostList",data:function(){return{isLoading:!1,posts:[],postpage:1}},components:{pagination:L},methods:{getData:function(){var t=this;this.$http.get("https://cnodejs.org/api/v1/topics",{params:{page:this.postpage,limit:20}}).then(function(n){t.isLoading=!1,t.posts=n.data.data}).catch(function(t){console.log(t)})},renderList:function(t){this.postpage=t,this.getData()}},beforeMount:function(){this.isLoading=!0,this.getData()}},k=j,P=(e("ea70"),Object(l["a"])(k,d,_,!1,null,"0b84b09f",null)),$=P.exports,w={name:"App",components:{Heador:f,PostList:$}},x=w,D=(e("034f"),Object(l["a"])(x,s,i,!1,null,null,null)),O=D.exports,I=e("8c4f"),M=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"article"},[t.isLoading?a("div",{staticClass:"loading"},[a("img",{attrs:{src:e("cf1c")}})]):a("div",{attrs:{c:""}},[a("div",{staticClass:"topic_header"},[a("div",{staticClass:"topic_title"},[t._v(t._s(t.post.title))]),a("ul",[a("li",[t._v("•发布于："+t._s(t._f("formatDate")(t.post.create_at)))]),a("li",[t._v("• 作者：\n        "+t._s(t.post.author.loginname)+"\n        ")]),a("li",[t._v("• "+t._s(t.post.visit_count)+"次浏览")]),a("li",[t._v("•来自"+t._s(t._f("tabFormatter")(t.post)))])]),a("div",{staticClass:"topic_content",domProps:{innerHTML:t._s(t.post.content)}})]),a("div",{attrs:{id:"reply"}},[a("div",{staticClass:"topbar"},[t._v("回复")]),t._l(t.post.replies,function(n,e){return a("div",{staticClass:"replySec"},[a("div",{staticClass:"replyUp"},[a("router-link",{attrs:{to:{name:"user_info",params:{name:n.author.loginname}}}},[a("img",{attrs:{src:n.author.avatar_url,alt:""}})]),a("router-link",{attrs:{to:{name:"user_info",params:{name:n.author.loginname}}}},[a("span",[t._v(t._s(n.author.loginname))])]),a("span",[t._v("\n          "+t._s(e+1)+"楼\n        ")]),n.ups.length>0?a("span",[t._v("\n          ☝ "+t._s(n.ups.length)+"\n        ")]):a("span")],1),a("p",{domProps:{innerHTML:t._s(n.content)}})])})],2)])])},E=[],T={name:"Article",data:function(){return{isLoading:!1,post:{}}},methods:{getArticleData:function(){var t=this;this.$http.get("https://cnodejs.org/api/v1/topic/".concat(this.$route.params.id)).then(function(n){1==n.data.success&&(t.isLoading=!1,t.post=n.data.data)}).catch(function(t){console.log(t)})}},beforeMount:function(){this.isLoading=!0,this.getArticleData()},watch:{$route:function(t,n){this.getArticleData()}}},A=T,B=(e("7703"),Object(l["a"])(A,M,E,!1,null,null,null)),S=B.exports,H=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"UserInfo"},[t.isLoading?a("div",{staticClass:"loading"},[a("img",{attrs:{src:e("cf1c")}})]):a("div",{staticClass:"userInfomation"},[a("section",[a("img",{attrs:{src:t.userinfo.avatar_url}}),a("span",[t._v(t._s(t.userinfo.loginname))]),a("p",[t._v("\n        "+t._s(t.userinfo.score)+"积分\n      ")]),a("p",[t._v("\n        注册时间："+t._s(t._f("formatDate")(t.userinfo.create_at))+"\n      ")])]),a("div",{staticClass:"replies"},[a("p",[t._v("回复的主题")]),a("ul",t._l(t.userinfo.recent_replies,function(n){return a("li",[a("router-link",{attrs:{to:{name:"post_content",params:{id:n.id}}}},[t._v("\n            "+t._s(n.title)+"\n          ")])],1)}),0)]),a("div",{staticClass:"topics"},[a("p",[t._v("创建的主题")]),a("ul",t._l(t.userinfo.recent_topics,function(n){return a("li",[a("router-link",{attrs:{to:{name:"post_content",params:{id:n.id}}}},[t._v("\n            "+t._s(n.title)+"\n          ")])],1)}),0)])])])},U=[],F=(e("7f7f"),{name:"UserInfo",data:function(){return{isLoading:!1,userinfo:{}}},methods:{getData:function(){var t=this;this.$http.get("https://cnodejs.org/api/v1/user/".concat(this.$route.params.name)).then(function(n){t.isLoading=!1,t.userinfo=n.data.data}).catch(function(t){console.log(t)})}},beforeMount:function(){this.isLoading=!0,this.getData()}}),J=F,q=(e("9a8a"),Object(l["a"])(J,H,U,!1,null,"43965203",null)),z=q.exports,G=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"UserInfo"},[t.isLoading?a("div",{staticClass:"loading"},[a("img",{attrs:{src:e("cf1c")}})]):a("div",{staticClass:"userInfomation"},[a("section",[a("img",{attrs:{src:t.userinfo.avatar_url}}),a("span",[t._v(t._s(t.userinfo.loginname))]),a("p",[t._v("\n        "+t._s(t.userinfo.score)+"积分\n      ")]),a("p",[t._v("\n        注册时间："+t._s(t._f("formatDate")(t.userinfo.create_at))+"\n      ")])]),a("div",{staticClass:"replies"},[a("p",[t._v("回复的主题")]),a("ul",t._l(t.userinfo.recent_replies,function(n){return a("li",[a("router-link",{attrs:{to:{name:"post_content",params:{id:n.id}}}},[t._v("\n            "+t._s(n.title)+"\n          ")])],1)}),0)]),a("div",{staticClass:"topics"},[a("p",[t._v("创建的主题")]),a("ul",t._l(t.userinfo.recent_topics,function(n){return a("li",[a("router-link",{attrs:{to:{name:"post_content",params:{id:n.id}}}},[t._v("\n            "+t._s(n.title)+"\n          ")])],1)}),0)])])])},K=[],N={name:"UserInfo",data:function(){return{isLoading:!1,userinfo:{}}},methods:{getData:function(){var t=this;this.$http.get("https://cnodejs.org/api/v1/user/".concat(this.$route.params.name)).then(function(n){t.isLoading=!1,t.userinfo=n.data.data}).catch(function(t){console.log(t)})}},beforeMount:function(){this.isLoading=!0,this.getData()}},Q=N,R=(e("f268"),Object(l["a"])(Q,G,K,!1,null,"608d33f0",null)),V=R.exports;a["a"].use(I["a"]);var W=new I["a"]({routes:[{name:"root",path:"/",components:{main:$}},{name:"post_content",path:"/topic/:id&author=:name",components:{main:S,slidebar:V}},{name:"user_info",path:"/userinfo/:name",components:{main:z}}]}),X=e("bc3a"),Y=e.n(X);a["a"].prototype.$http=Y.a,a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(O)},router:W}).$mount("#app"),a["a"].filter("formatDate",function(t){if(!t)return"";var n=new Date(t),e=(new Date).getTime()-n.getTime();return e<0?"":e/1e3<30?"刚刚":e/1e3<60?parseInt(e/1e3)+"秒前":e/6e4<60?parseInt(e/6e4)+"分钟前":e/36e5<24?parseInt(e/36e5)+"小时前":e/864e5<31?parseInt(e/864e5)+"天前":e/2592e6<12?parseInt(e/2592e6)+"月前":parseInt(e/31536e6)+"年前"}),a["a"].filter("tabFormatter",function(t){return 1==t.good?"精华":1==t.top?"置顶":"ask"==t.tab?"问答":"share"==t.tab?"分享":"招聘"})},"672e":function(t,n,e){},7383:function(t,n,e){"use strict";var a=e("672e"),s=e.n(a);s.a},"75d1":function(t,n,e){},7703:function(t,n,e){"use strict";var a=e("e6ad"),s=e.n(a);s.a},8145:function(t,n,e){},"85ec":function(t,n,e){},"9a8a":function(t,n,e){"use strict";var a=e("d6c6"),s=e.n(a);s.a},cf1c:function(t,n,e){t.exports=e.p+"img/loading.078fcd09.gif"},d686:function(t,n,e){t.exports=e.p+"img/cnodejs_light.86f6a7c2.svg"},d6c6:function(t,n,e){},e6ad:function(t,n,e){},ea70:function(t,n,e){"use strict";var a=e("8145"),s=e.n(a);s.a},f268:function(t,n,e){"use strict";var a=e("75d1"),s=e.n(a);s.a}});
//# sourceMappingURL=app.3fd61f9c.js.map