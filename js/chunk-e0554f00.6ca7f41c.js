(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e0554f00","chunk-52ded9f0"],{"0a2d":function(t,i,n){"use strict";n("cb47")},4093:function(t,i,n){"use strict";n.r(i);var s=function(){var t=this,i=t._self._c;return i("div",{staticClass:"footer-wrapper"},[i("div",{staticClass:"footer-navigation"},[i("img",{staticClass:"footer-logo",attrs:{src:n("dbaa")},on:{click:function(i){return t.$router.push("/")}}}),i("ul",{staticClass:"navigation-wrap"},[i("li",[i("router-link",{staticClass:"a",attrs:{to:"/legalDeclaration"}},[t._v(" 法律声明 ")])],1),i("li",[i("router-link",{staticClass:"a",attrs:{to:"/privacyPolicy"}},[t._v(" 个人信息保护政策 ")])],1),i("li",[i("router-link",{staticClass:"a",attrs:{to:"/zeekrFamilyRecruitment"}},[t._v(" 自营合作商招募 ")])],1),i("li",[i("div",{staticClass:"join",on:{click:function(i){return t.openUrl("https://job.zeekrlife.com/","_blank")}}},[t._v(" 加入我们 "),i("img",{staticClass:"tip",attrs:{src:n("5cbd"),alt:""}})])]),t._m(0)])]),i("div",{staticClass:"copyright-wrapper"},[i("div",{staticClass:"copyright"},[t._v(" ©️ ️浙江极氪智能科技有限公司 "),i("span",{on:{click:function(i){return t.toLinkICP()}}},[t._v("浙ICP备2021025402号-1")]),i("span",{on:{click:function(i){return t.toLinkZGW()}}},[t._v("浙公网安备33029202000085号")]),i("span",{on:{click:function(i){return t.toLinkYYZZ()}}},[t._v("营业执照")])]),i("ul",{staticClass:"toolbar"},[t._m(1),t._m(2),i("li",{staticClass:"weibo",on:{click:function(i){return t.openUrl("https://weibo.com/u/7576049404","_blank")}}}),t._m(3)])])])},a=[function(){var t=this,i=t._self._c;return i("li",[i("a",{attrs:{href:"javascript:void(0)"}},[t._v(" 联系我们 ｜ "),i("strong",[t._v("400-003-6036")])])])},function(){var t=this,i=t._self._c;return i("li",{staticClass:"app"},[i("img",{staticClass:"tip",attrs:{src:n("d644"),alt:""}})])},function(){var t=this,i=t._self._c;return i("li",{staticClass:"wx"},[i("img",{staticClass:"tip",attrs:{src:n("4ccc"),alt:""}})])},function(){var t=this,i=t._self._c;return i("li",{staticClass:"mp"},[i("img",{staticClass:"tip",attrs:{src:n("e1aa"),alt:""}})])}],e={name:"FooterBar",props:{background:{type:String,default:"transparent"}},data:function(){return{}},computed:{backgroundStyle:function(){return"background:".concat(this.background,";")}},methods:{openUrl:function(t,i){window.open(t,i)},toLinkICP:function(){window.open("https://beian.miit.gov.cn/#/Integrated/index","_blank")},toLinkZGW:function(){window.open("https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33029202000085","_blank")},toLinkYYZZ:function(){window.open("https://zeekrlife-oss.zeekrlife.com/frontend/zeekrlife-official-pc/image/BusinessLicense.jpg","_blank")}}},r=e,c=(n("0a2d"),n("2877")),o=Object(c["a"])(r,s,a,!1,null,"8e3f3a4e",null);i["default"]=o.exports},"4ccc":function(t,i,n){t.exports=n.p+"img/icon_wx_qrcode.2c873d51.png"},"5cbd":function(t,i,n){t.exports=n.p+"img/icon_add_us.e20469cd.png"},"762e":function(t,i,n){"use strict";n.d(i,"a",(function(){return a})),n.d(i,"c",(function(){return e})),n.d(i,"b",(function(){return r}));var s=n("b775");function a(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(s["a"])({url:"com.zeekrlife.micro.odnews.v1.news.top.list",method:"get",headers:i,params:t})}function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(s["a"])({url:"com.zeekrlife.micro.odnews.v1.news.list",method:"get",headers:i,params:t})}function r(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(s["a"])({url:"com.zeekrlife.micro.odnews.v1.news",method:"get",headers:i,params:t})}},"93c4":function(t,i,n){"use strict";n("d499")},a2a4:function(t,i,n){"use strict";n.r(i);var s=function(){var t=this,i=t._self._c;return i("div",{staticClass:"information"},[i("div",{staticClass:"information-container"},[i("div",{staticClass:"swiper"},[i("div",{staticClass:"swiper-wrapper"},t._l(t.bannerList,(function(s,a){return i("div",{key:a,staticClass:"swiper-slide"},[i("img",{staticClass:"cover-img",attrs:{src:s.cover,alt:s.newsTitle}}),i("div",{staticClass:"swiper-task"}),i("div",[i("div",{staticClass:"title",class:"title-"+a,domProps:{innerHTML:t._s(s.newsTitle)}}),i("div",{staticClass:"sub-title",class:"title-"+a},[i("div",[t._v("点击查看详情")]),i("img",{staticClass:"sub-title-icon",attrs:{src:n("e9cb"),alt:""}})])])])})),0),i("ul",{staticClass:"swiper-pagination"},t._l(t.bannerList,(function(n,s){return i("li",{key:s,class:{active:t.activeIndex===s},on:{click:function(i){return t.swipeTo(s+1)}}})})),0)]),i("div",{staticClass:"list-wrapper"},[i("h2",[t._v("官方新闻")]),i("ul",{staticClass:"news-list"},[t._l(t.list,(function(n,s){return i("li",{key:s,on:{click:function(i){return t.toDetail(n)}}},[i("span",{staticClass:"date"},[t._v(t._s(n.showTime))]),i("div",{staticClass:"img-wrapper"},[i("img",{staticClass:"news-list-img",attrs:{src:n.cover,alt:n.newsTitle}})]),i("span",{staticClass:"title",domProps:{innerHTML:t._s(n.newsTitle)}})])})),i("li"),i("li")],2),t.totalPage>1?i("div",{staticClass:"pagination"},[i("div",{staticClass:"pagination-prev",class:{disabled:1===t.currentPage},on:{click:t.toPrev}}),i("div",{staticClass:"pagination-num"},[i("span",{staticClass:"current"},[t._v(t._s(t.currentPage))]),t._v("/"),i("span",{staticClass:"total"},[t._v(t._s(t.totalPage))])]),i("div",{staticClass:"pagination-next",class:{disabled:t.currentPage===t.totalPage},on:{click:t.toNext}})]):t._e()])]),i("footer-bar")],1)},a=[],e=(n("14d9"),n("4093")),r=n("762e"),c={name:"Information",components:{FooterBar:e["default"]},data:function(){return{swiper:null,activeIndex:0,currentPage:1,pageSize:9,totalPage:1,bannerList:[],list:[]}},watch:{activeIndex:function(t,i){this.swiper.autoplay.start(),TweenMax.fromTo(".title-".concat(t),1,{opacity:0,x:200},{opacity:1,x:0})}},mounted:function(){var t=this;this.$emit("setColor","#fff","#25292b"),Object(r["a"])({firstColumnName:"极氪PC官网",secondColumnName:"官方新闻"}).then((function(i){t.bannerList=i.data,t.bannerList.length>0&&t.$nextTick((function(){t.swiper=new Swiper(".swiper",{autoplay:{delay:5e3,disableOnInteraction:!1},loop:!0,on:{slideChange:function(i){t.activeIndex=i.realIndex},click:function(){t.toDetail(t.bannerList[t.activeIndex])}}})}))})),this.getInformationList()},methods:{getInformationList:function(){var t=this;Object(r["c"])({firstColumnName:"极氪PC官网",secondColumnName:"官方新闻",page:this.currentPage,pageSize:this.pageSize}).then((function(i){t.list=i.data.list,t.totalPage=i.data.lastPage}))},toDetail:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.swiper&&this.swiper.autoplay.start(),this.$router.push({path:"/informationDetail",query:{columnId:t.columnId,newsId:t.newsId}})},swipeTo:function(t){this.swiper.slideTo(t)},toPrev:function(){1!==this.currentPage&&(this.currentPage-=1,this.getInformationList())},toNext:function(){this.currentPage!==this.totalPage&&(this.currentPage+=1,this.getInformationList())}}},o=c,l=(n("93c4"),n("2877")),u=Object(l["a"])(o,s,a,!1,null,"992a0892",null);i["default"]=u.exports},cb47:function(t,i,n){},d499:function(t,i,n){},d644:function(t,i,n){t.exports=n.p+"img/icon_app_qrcode.5eb381da.png"},dbaa:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAB4CAMAAADrAVSlAAAAP1BMVEUAAAAgKCgjKCokKSskKCwjKSsjKCkkKCokKSslJiojKSogISckKCokKSskKCgjKSskKCslKSwjKCskKSskKStU1SCAAAAAFHRSTlMAIGC/QN+ggO8w3xBwz0CPv29Qr9FbvI0AAAPZSURBVHja7d3hcqIwGIXhBBBQQFfL/V/rdmeUOHuAJP0GenDO+7Oto8njV1Cc0SmllFJKKaWUUkopdZTGzXNKIAcO9k8gWQnk04P9E0hWAvn0YP8EkpVAPr3x2dXP1z9/f/KZVQIxgXg3X/ECcZl5gQjkExIIWQIhSyBkCYQsgZAlELIEQpZAyBIIWQIhSyBkCYQsgZAlELIEQpZAyBIIWQIhSyBkCYQsgZAlELJoQE5jvIt3WD1Gqt1M1c8+cVmO/yrdXNW0hD//P85mXG4om/NBQVrveEG62/Qwe+cAZL1TkQ3Snn8dpD07XhAYDwBZr/Z5IPkidhD0oAWB8QCQaCefChIV2QmkcrQgMB4IEm9IA6ngKboRyKOYbVpK4VZB2nKx+8q6hnKxdJAGxmMBZHaB9eV56yYJxBUgsudprz8Fj1WQ0uVVwbKhRJDzEBmPAOLm65/biyBxkZ1BupdH71hBYDxSQVDkiiBxkV1BumGaZlIQj+MRB8Ha8KwDELsIgtg9SEHuLYxHMgie0dwAJElkP5CvyYMTxJcwHiaQGkDSRPYCqScPThAYDytIgyB2EQTZwgP/7lIs1a2B3IuFrjEQHA/zMeQBIKkie4C8Xvve4nDrXRdA1qsjIDAe2SC41g5AkkW2B2mmjWEEgfGwgFRluEsAMYsgiNGDEWQYwhvQOcvpS2xow7UFBLGLIIjF48tRgpQ+3GmTsR7/uESuLQCIWQRBDB5DRwriXN+OzwafDuKCZCjMB4LYRRBkCw8EGaqlujWQolrIR8+yLnh1KQ7iXDE3JG3TOQDJFtkK5P560rweJOnrkCaMk08HgSFphzo8aQAkLhIqtgEpwhBzg7wPyTUZJAwJzBaAWETsIOjBDuK6GxzboyBhSGC2AMQuYgd5BA9+kPcjwskngITbtTAkCGIXsYOc28njECAOToCTQN7feam7GIhdBEHyPQ4C4lw/vvrycZBQPw3J1QaCInYQ9DgOCJwAx0DwdrfuxyAocjWD4AX0WzFf96MPOTQrIOVyERDY77C1ERD4cRgSBMkXKQwg4BGJ9pOLFRzbYyA4JACSKWIHQY/DgsCxPQ6CQ2ICcYUZBD0ODAInwFEQHJLGBOJORhD0ODbI24ls2yeB4JB4HpBvj6ODwJtbEZDQOQwJDYj6jupflhIIZwIhSyBkCYQsgZAlELIEQpZAyBIIWQIhSyBkCYQsgZAlELIEQpZAyBIIWQIhSyBkCYQsgZAlELLCF9xn9gLp9QX3G4BskUAE8gnB/gkkK4F8erB/AslKIJ8e7J9AshKIUkoppZRSSiml1G79BUTM9UjwaCxmAAAAAElFTkSuQmCC"},e1aa:function(t,i,n){t.exports=n.p+"img/icon_mp_qrcode.2e648ca0.png"},e9cb:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAAXNSR0IArs4c6QAAAHJQTFRFAAAA////////////////////////////////////////////////////////////////////////92QA+G4Q+Hgf+Hgg+YtA+p5f+p5g+6dw+7GA+7KA/LyP/MWf/MWg/c6w/eLP/uLP/uzf//Xv////O4FxqgAAABN0Uk5TABAgQFBgb3B/gI+Qn6Cvv8/f70Otrr4AAAIJSURBVFjDxZlrd8IgDIahl1VaLAWd7uLm5sz//4vrqB6tXQlp4/Z+1fOcJEBCX4QIS2aFNtZCK9cYrVIppktmpSf1ZXU2DZrWDsakM3Jwi3FaF2eecOI8chHNyy1EyeZRuMRAtOqIvB8cEOSwIGUJRJXhdBsgqwmknViYIJvw8saJU3ljxOm8EWIDM9QM+0UJszTYPTnMVHFTQDcX6PplrGG2DGvCP7o+1pYDaC8rvQAWKY4t3VsXyVnB6xAtF9B1vAzYlHqg5gPWvuvz8bplYcwYIMMzPm4H2o//u8LX+Gs10GvgtOAlpAFBihQBHp+vtcaAmVCUmu/QCAuxJPOCQC0Mjbdeh4GGMOw87/AYBlrhaDxAgUQeBoRY4OeJxwU8wHvHYwLuVnt49zwcaCPrd+4ICNDFAM/rEQNsIjZ2j4cBDX70+jwMqEVB42FAhU2AWx5sN5u34NyTNB4mGR4BZF47AkQ1/vMHldeuSXiMPhF5fozKUAN7ofFAMl2HrzMW6NwjZtzKcfHs6X6ouIDna7tkCvHyxccUoroYA5azgnf58KHcH4LX4ft9PKJ9lpawCDedGFVDC2ieRfAXJga7zcJvBPFbVfxm2pTdU2GWcU4zJIsIy5QwY0zyH6au77gRSKcohnuCRUnDdVbE+M3R1enEx4Xlb48LVTbrxSJV2jR+K1lrdIHCvgH5c79B7x3OPgAAAABJRU5ErkJggg=="}}]);