var U=Object.defineProperty,k=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var u=(e,a,t)=>a in e?U(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,n=(e,a)=>{for(var t in a||(a={}))S.call(a,t)&&u(e,t,a[t]);if(p)for(var t of p(a))$.call(a,t)&&u(e,t,a[t]);return e},c=(e,a)=>k(e,A(a));import{U as x,E as v,g,d as _,a as h,n as m,e as f,p as l,b as d,I as D,S as L,t as T,h as M}from"./index.3361a9f1.js";import{p as i,m as I,a as C}from"./vendor.b02ebc17.js";var E=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("section",{staticClass:"icon-list-area p-t-48 p-b-40"},[t("div",{staticClass:"card-wrapper card-hover coral-card"},[t("div",{staticClass:"absolute card-grid-nativeAd",staticStyle:{"z-index":"2",height:"100%"},on:{click:function(r){return e.adClick({position:"User Icon Grid",type:"Native"})}}},[t("div",{attrs:{id:"card-ad"}})]),t("div",{staticClass:"absolute",staticStyle:{"z-index":"1",height:"100%"},on:{click:function(r){return e.adClick({position:"User Icon Grid",type:"Carbon"})}}},[t("script",{attrs:{async:"",type:"application/javascript",src:"//cdn.carbonads.com/carbon.js?serve=CEBIK27J&placement=macosiconscom",id:"_carbonads_js"}})]),t("a",{staticClass:"card-no-ad relative",staticStyle:{width:"100%",left:"0"},attrs:{href:"https://www.paypal.com/donate/?hosted_button_id=5PMNX4DPW83KN",rel:"noopener",target:"_blank"},on:{click:function(r){return e.logDonation("support-message")}}},[e._m(0)])]),e._l(e.userIcons,function(r){return t("UserIconCard",{key:r.id,attrs:{icon:r,isAdmin:!1,isMacOs:!0,isOwner:e.isOwner}})})],2)])},j=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"support-page"},[t("h3",{staticClass:"coral-Heading--S m-0"},[e._v(" Support this page ")]),t("p",{staticClass:"coral-Body--S m-0"},[e._v(" Please consider disabling your ad blocker or making a "),t("a",{staticClass:"coral-Link",attrs:{rel:"noopener",target:"_blank",href:"https://www.paypal.com/donate/?hosted_button_id=5PMNX4DPW83KN"}},[e._v(" donation ")]),e._v(" to support this project. ")])])}];const P={name:"UserIconGrid",props:{userIcons:""},components:{UserIconCard:x,EditIconDialog:v,deleteDialog:g},data(){return{coralIcons:{delete:_,addIcon:h,newItem:m,edit:f,loading:l},isAd:!1,isOwner:!1}},mounted:function(){let e=this,a=i.User.current(),t=this.$route.params.user;if(a){let s=a.get("username")==t;e.isOwner=s}function r(){try{typeof _bsa!="undefined"&&_bsa&&_bsa.init("custom","CESDC2QN","placement:macosiconscom",{target:"#card-ad",template:`
                  <a href="##statlink##" target="_blank" rel="noopener sponsored" id="customAd" class="bsa-link">
                  <div class="bsa-img-wrapper" style="background-color: ##backgroundColor##;">
                    <div class="bsa-icon" style="background-image: url(##logo##);"></div>
                  </div>
                  <div class="text-ad-wrapper">
                    <img style="background: ##backgroundColor##" src="##image##">
                    <div class="bsa-desc">##description##</div>
                  </div>
                  </a>
                `})}catch{}}window.BSANativeCallback=s=>{s.ads.length,document.getElementById("_carbonads_js").children[0]},r()},render(e){return e("div",{class:"carbon-ads",attrs:{id:"native-carbon"}})},methods:c(n({},I(["adClick"])),{isSelected(e,a){try{return e.name==a}catch{return!0}},validate(e,a){let t=this;try{e.target.classList.contains("is-invalid")?t.isValidated=!1:t.isValidated=!0}catch{}t.getTextFieldValue(e,a)},getTextFieldValue(e,a){let t=e.target.value;console.log(a,": ",t)}}),computed:n({},C(["getUser","allIcons","notApproved","getAppCategories","getSelectedIcon"]))},b={};var B=d(P,E,j,!1,O,null,null,null);function O(e){for(let a in b)this[a]=b[a]}var H=function(){return B.exports}(),N=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"card-wrapper card-hover coral-card"},[t("div",{staticClass:"card-img-wrapper",staticStyle:{"max-width":"120px"}},[t("img",{staticClass:"placeholder-icon",staticStyle:{width:"auto"},attrs:{width:"100px",height:"100px",alt:"Placeholder icon",src:e.coralIcons.placeholderIcon}})]),e._m(0)])},G=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"card-text-wrapper p-l-16 p-r-16 p-b-16"},[t("h3",{staticClass:`
                coral-font-color
                m-t-0
                m-b-8
                loading-placeholder
                p-0
            `}),t("p",{staticClass:"coral-Body--XS opacity-60 m-b-8 loading-placeholder"})])}];const q={name:"UserIconCardLoading",props:{icon:{}},data:function(){return{coralIcons:{placeholderIcon:l}}},methods:{}},w={};var W=d(q,N,G,!1,F,null,null,null);function F(e){for(let a in w)this[a]=w[a]}var R=function(){return W.exports}(),V="/assets/share.4c10c69d.svg",z="/assets/Link.8cf05a9a.svg",K=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("section",{staticClass:"profile-page-head-wrapper"},[t("div",{staticClass:"profile-page-img-wrapper"},[t("img",{staticClass:"profile-img",attrs:{src:e.resources.profilePic,alt:""}}),t("div",{staticClass:"profile-edit-btn desktop-hidden opacity-80"},[t("coral-button",{tag:"button",attrs:{variant:"quiet"},on:{click:function(r){return e.showDialog("accountDialog")}}},[e._v(" Edit Profile ")])],1)]),t("div",{staticClass:"profile-info-wrapper"},[t("div",{staticClass:"profile-header-wrapper"},[t("div",{staticClass:"profile-name-social"},[t("h3",{staticClass:"coral-Heading--L m-0"},[e._v(" "+e._s(e.getUserInfo.username)+" ")]),e.getUserInfo.twitterHandle?t("a",{staticClass:"margin-auto relative",attrs:{target:"_blank",href:e.getUserInfo.twitterHandle}},[t("IconUI",{staticClass:"absolute-center-vertical",attrs:{width:"18px",img:e.resources.twitter,alt:"Twitter Logo"}})],1):e._e(),t("div",{staticClass:"margin-auto relative pointer",attrs:{target:"_blank"},on:{click:e.copyUserUrl}},[t("IconUI",{staticClass:"absolute-center-vertical",attrs:{width:"18px",img:e.resources.share,alt:"Twitter Logo"}})],1)]),e.user.isOwner?t("div",{staticClass:"profile-edit-btn mobile-hidden opacity-80"},[t("coral-button",{tag:"button",attrs:{variant:"quiet"},on:{click:function(r){return e.showDialog("accountDialog")}}},[e._v(" Edit Profile ")])],1):e._e()]),t("div",{staticClass:"profile-descrption-box"},[e.loading.user?t("div",{staticClass:"loading-placeholder m-b-8"}):e._e(),e.loading.user?t("div",{staticClass:"loading-placeholder m-b-8"}):e._e(),e.getUserInfo.bio?t("p",{staticClass:"coral-Body--L m-b-4"},[e._v(" "+e._s(e.getUserInfo.bio)+" ")]):e._e(),e.getUserInfo.credit?t("a",{staticClass:"margin-auto relative",attrs:{target:"_blank",href:e.getUserInfo.credit}},[t("IconUI",{staticClass:"absolute-center-vertical",attrs:{width:"14px",img:e.resources.link,alt:"Credit link"}}),t("span",{staticClass:"p-l-24"},[e._v(" "+e._s(e.getUserInfo.credit.replace("https://",""))+" ")])],1):e._e()])])]),t("section",{staticClass:"m-auto user-profile-icons"},[t("coral-tablist",[t("coral-tab",{attrs:{"aria-label":"All Icons"},on:{click:function(r){return e.changeIconStatus("all")}}},[e._v(" All "),t("span",{staticClass:"coral-Detail coral-Detail--M f-w-400 opacity-80"},[e._v(" ("+e._s(e.approvedIconsCount.approved+e.approvedIconsCount.notApproved)+") ")])]),t("coral-tab",{attrs:{"aria-label":"Approved Icons",selected:""},on:{click:function(r){return e.changeIconStatus("approved")}}},[e._v(" Approved "),t("span",{staticClass:"coral-Detail coral-Detail--M f-w-400 opacity-80"},[e._v(" ("+e._s(e.approvedIconsCount.approved)+") ")])]),t("coral-tab",{attrs:{"aria-label":"Waiting Icons"},on:{click:function(r){return e.changeIconStatus("notApproved")}}},[e._v(" Waiting "),t("span",{staticClass:"coral-Detail coral-Detail--M f-w-400 opacity-80"},[e._v(" ("+e._s(e.approvedIconsCount.notApproved)+") ")])])],1),e.objectLenght(e.getSelectedIcon)?t("EditIconDialog",{attrs:{icon:e.getSelectedIcon}}):e._e(),e.objectLenght(e.getSelectedIcon)?t("deleteDialog",{attrs:{icon:e.getSelectedIcon}}):e._e(),!e.loading.user&&e.iconsCount==0?t("div",{staticClass:"waiting-wrapper"},[t("p",{staticClass:"coral-Body--M"},[e._v(" "+e._s(e.errorMessage)+" ")])]):e._e(),e.userIcons.length!=0?t("UserIconGrid",{attrs:{userIcons:e.userIcons}}):t("div",{staticClass:"icon-list-area p-t-48 p-b-40"},[t("div",{staticClass:"card-wrapper card-hover coral-card",staticStyle:{"z-index":"2",height:"100%","min-height":"210px"}},[t("script",{attrs:{type:"application/javascript",src:"//cdn.carbonads.com/carbon.js?serve=CEBIK27J&placement=macosiconscom",id:"_carbonads_js2"},on:{click:function(r){return e.adClick({position:"Icon Grid Top",type:"Native"})}}})]),e._l(e.placeholderCount,function(r){return t("UserIconCardLoading",{key:r+Math.floor(Math.random()*1e7+1),attrs:{icon:e.iconsCount}})})],2),e.userIcons.length<e.iconsCount&&e.userIcons.length>1&&e.isLoading?t("coral-button",{tag:"button",staticClass:"m-b-24",on:{click:function(r){return e.fetchUserIcons(e.userInfo)}}},[e._v(" Load more ")]):e._e()],1)])},X=[];const J={name:"UserProfile",components:{IconUI:D,UserIconGrid:H,UserIconCardLoading:R,EditIconDialog:v,deleteDialog:g,StickyBanner:L},data(){return{resources:{twitter:T,share:V,link:z,profilePic:M},iconsToShow:"approved",errorMessage:"",loading:{user:!0,icons:!0},user:{isOwner:!1},totalIconsApproved:0,userInfo:{},scrolledToBottom:!0,coralIcons:{delete:_,addIcon:h,newItem:m,edit:f,loading:l}}},methods:c(n({},I(["fetchUserIcons","fetchAppCategories","emptyArr","showToast","setDataToArr","setData","pushDataToArr","adClick"])),{async copyUserUrl(){let e=this,a="https://macosicons.com/u/"+e.$route.params.user;await navigator.clipboard.writeText(a),e.showToast({id:"toastMessage",message:"User profile URL copied to your clipboard",variant:"success"})},objectLenght(e){return e?Object.keys(e).length!=0:!1},async queryUser(){let e=this,a=e.user;e.loading.user;const t=new i.Query(i.User);let r=new RegExp("\\b"+a.username+"\\b");t.matches("username",r,"i");let s=await t.find();if(s=s[0],e.userInfo=s,s){e.fetchUserIcons(s).then(()=>{e.setDataToArr({arr:"selectedIcon",data:e.userIcons[0]})});let o=s.get("twitterHandle");o&&(a.twitterHandle=o,o.includes("twitter.com")||(a.twitterHandle="https://twitter.com/"+o)),a.credit=s.get("credit"),a.username=s.get("username"),a.bio=s.get("bio"),a.id=s.id,e.setData({state:"user",data:a}),i.User.current()&&a.username==i.User.current().getUsername()&&(a.isOwner=!0),e.loading.user=!1}else{let o={arr:"loading",data:!1};e.setDataToArr(o),e.loading.user=!1,e.errorMessage="This account doesn\u2019t exist"}},showDialog(e){document.getElementById(e).show()},changeIconStatus(e){let a=this;a.iconsToShow=e},userData(){let e=this;return console.log("parent.user: ",e.$store.state.user),e.$store.state.user},scrolled(){let e=this;window.onscroll=()=>{document.documentElement.offsetHeight-(Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop)+window.innerHeight)<2e3&&e.scrolledToBottom&&e.userInfo.id&&(e.scrolledToBottom=!0,e.fetchUserIcons(e.userInfo))}}}),mounted:function(){let e=this;e.user.username=e.$route.params.user;let a={arr:"loading",data:!0};e.setDataToArr(a),e.emptyArr(),e.queryUser(),e.scrolled()},computed:c(n({},C(["getUser","allIcons","notApproved","approvedIcons","getAppCategories","approvedIconsCount","isLoading","getSelectedIcon","getUserInfo"])),{iconsCount(){let e=this,a=e.approvedIconsCount,t=e.isLoading,r=a.approved+a.hacked+a.notApproved;if(r==0&&t)return 15;switch(e.iconsToShow){case"all":return r;case"approved":return a.approved;case"notApproved":return a.notApproved}},placeholderCount(){let e=this;return e.iconsCount>15?15:e.iconsCount},userIcons(){let e=this;if(e.userInfo)switch(e.allIcons.length==0&&(e.errorMessage="No icons to show"),e.iconsToShow){case"all":return e.errorMessage=e.user.username+" hasn't submitted any icons yet.",e.allIcons;case"approved":return e.errorMessage=e.user.username+" doesn't have any approved icons yet.",e.approvedIcons;case"notApproved":return e.errorMessage=e.user.username+" doesn't have any icons awaiting approval.",e.notApproved}else return console.log("parent.userInfo"),0}})},y={};var Q=d(J,K,X,!1,Y,null,null,null);function Y(e){for(let a in y)this[a]=y[a]}var ae=function(){return Q.exports}();export{ae as default};
