var l=Object.defineProperty,p=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var a=(e,s,t)=>s in e?l(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,n=(e,s)=>{for(var t in s||(s={}))m.call(s,t)&&a(e,t,s[t]);if(r)for(var t of r(s))d.call(s,t)&&a(e,t,s[t]);return e},c=(e,s)=>p(e,u(s));import{m as g}from"./vendor.b02ebc17.js";import{H as _,F as h,c as f,f as v,b as y}from"./index.3361a9f1.js";import{R as w}from"./ResourcesCard.83e0a300.js";var S="/assets/intro-instructions.001cef41.jpg",b=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("main",{staticClass:"content-wrapper-compact"},[t("H3-Description",{staticClass:"m-b-48",attrs:{text:e.introText}}),t("div",{staticClass:"resources-grid card-grid",attrs:{id:"how-to-install"}},[t("ResourcesCard",{attrs:{step:e.instructions,link:e.instructions.link}}),e._l(e.resourcesData,function(o){return t("ResourcesCard",{key:o.name,attrs:{link:"/resources/"+o.slug,step:o}})}),t("div",{staticClass:"card-hover relative coral-card resources-card-ad",on:{click:function(o){return e.adClick({position:"Icon Grid Bottom",type:"Carbon"})}}},[t("script",{attrs:{async:"async",type:"application/javascript",src:"//cdn.carbonads.com/carbon.js?serve=CEBIK27J&placement=macosiconscom",id:"_carbonads_js"}}),e._m(0)])],2)],1)])},C=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("a",{staticClass:"card-no-ad relative",staticStyle:{width:"100%",left:"0"},attrs:{href:"https://www.paypal.com/donate/?hosted_button_id=5PMNX4DPW83KN",rel:"noopener",target:"_blank"}},[t("div",{staticClass:"support-page"},[t("h3",{staticClass:"coral-Heading--S m-0"},[e._v(" Support this page ")]),t("p",{staticClass:"coral-Body--S m-0"},[e._v(" Please consider disabling your ad blocker or making a "),t("a",{staticClass:"coral-Link",attrs:{rel:"noopener",target:"_blank",href:"https://www.paypal.com/donate/?hosted_button_id=5PMNX4DPW83KN"}},[e._v(" donation ")]),e._v(" to support this project. ")])])])}];const R={name:"Resources",components:{Header:_,ResourcesCard:w,Footer:h,H3Description:f},metaInfo:{title:"Free icon templates resources for macOS Monterey, Big Sur.",description:"Resources and templates to help you design and showcase icons for macOS.",titleTemplate:"%s | macOSicons",meta:[{property:"og:url",content:"https://macosicons.com/resources"},{property:"og:title",content:"Free icon templates resources and over 5000+ icons for macOS Monterey, Big Sur."},{property:"og:description",content:"Resources and templates to help you design and showcase icons for macOS. Over 5000+ free icons ready for Big Sur."},{property:"og:image",content:"https://raw.githubusercontent.com/elrumo/macOS_Big_Sur_icons_replacements/master/icons/Social/low-res/Resources-thumbnail.jpg"},{property:"twitter:url",content:"https://macosicons.com/resources"},{property:"twitter:description",content:"Resources and templates to help you design and showcase icons for macOS. Over 5000+ free icons ready for Big Sur."},{property:"twitter:title",content:"Free icon templates resources and over 5000+ icons for macOS Monterey, Big Sur."},{property:"twitter:image",content:"https://raw.githubusercontent.com/elrumo/macOS_Big_Sur_icons_replacements/master/icons/Social/low-res/Resources-thumbnail.jpg"}]},data(){return{isMobile:this.$isMobile(),introText:{h3:"Resources",description:"Here you'll find guides, resources and templates to help you design and showcase icons for macOS.",isAd:!0},instructions:{title:"How to change app icons",feature_image:S,link:"/how-to",slug:"/how-to"},resourcesData:v}},mounted:async function(){const e=this;let s=e.$store.state.resourcesData;e.getPageData,e.resourcesData=await s},methods:c(n({},g(["getPageData","adClick"])),{async getPages(){console.log(this.getPageData)}})},i={};var k=y(R,b,C,!1,D,null,null,null);function D(e){for(let s in i)this[s]=i[s]}var M=function(){return k.exports}();export{M as default};
