"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[1650],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(a),h=n,m=c["".concat(i,".").concat(h)]||c[h]||d[h]||o;return a?r.createElement(m,u(u({ref:t},p),{},{components:a})):r.createElement(m,u({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,u=new Array(o);u[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:n,u[1]=l;for(var s=2;s<o;s++)u[s]=a[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9812:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const o={title:"Why I use aqua",date:new Date("2021-12-23T00:32:46.000Z"),authors:["suzuki-shunsuke"]},u=void 0,l={permalink:"/blog/2021/12/23/why-i-use-aqua",source:"@site/blog/2021-12-23-why-i-use-aqua.md",title:"Why I use aqua",description:"Original Post//dev.to/suzukishunsuke/why-i-use-aqua-230",date:"2021-12-23T00:32:46.000Z",formattedDate:"December 23, 2021",tags:[],readingTime:1.19,hasTruncateMarker:!1,authors:[{name:"Shunsuke Suzuki",title:"SRE / OSS Contributor / Tool Maker / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"Why I use aqua",date:"2021-12-23T00:32:46.000Z",authors:["suzuki-shunsuke"]},prevItem:{title:"Support building tools with Go",permalink:"/blog/2022/05/30/support-building-go-tools"},nextItem:{title:"Manage CLI tool version with aqua",permalink:"/blog/2021/12/04/aqua-overview"}},i={authorsImageUrls:[void 0]},s=[{value:"Why I use\xa0aqua",id:"why-i-useaqua",level:2},{value:"Why not\xa0asdf?",id:"why-notasdf",level:2}],p={toc:s},c="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://dev.to/suzukishunsuke/why-i-use-aqua-230"})),(0,n.kt)("p",null,"Original Post: ",(0,n.kt)("a",{parentName:"p",href:"https://dev.to/suzukishunsuke/why-i-use-aqua-230"},"https://dev.to/suzukishunsuke/why-i-use-aqua-230")),(0,n.kt)("p",null,"In this post, I describe why I use aqua."),(0,n.kt)("h2",{id:"why-i-useaqua"},"Why I use\xa0aqua"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Align tool versions in team and CI",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Solve the problem due to the difference of tool versions"))),(0,n.kt)("li",{parentName:"ul"},"Manage tools and their versions for projects as code declaratively, and provide an unified way to install tools",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"aqua supports changing tool versions per project"))),(0,n.kt)("li",{parentName:"ul"},"Stop developing shell scripts and GitHub Actions to install tools per tool and per project"),(0,n.kt)("li",{parentName:"ul"},"Update tools with Renovate easily"),(0,n.kt)("li",{parentName:"ul"},"Install tools hosted in private repositories")),(0,n.kt)("h2",{id:"why-notasdf"},"Why not\xa0asdf?"),(0,n.kt)("p",null,"asdf is used for the similar purpose, but I use aqua. Why?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Some tools don't have asdf plugins for them"),(0,n.kt)("li",{parentName:"ul"},"Good Experience",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"You don't have to install plugins"),(0,n.kt)("li",{parentName:"ul"},"Tools are installed automatically"),(0,n.kt)("li",{parentName:"ul"},"Search tools by ",(0,n.kt)("inlineCode",{parentName:"li"},"aqua g")," is useful"))),(0,n.kt)("li",{parentName:"ul"},"aqua doesn't force to use aqua in other projects and globally"),(0,n.kt)("li",{parentName:"ul"},"Easy to support new tools",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"It is easier to contribute to aqua-registry than to develop asdf plugin"))),(0,n.kt)("li",{parentName:"ul"},"Easy to introduce aqua to teams and projects because aqua is easy and doesn't force to use aqua in other projects and globally"),(0,n.kt)("li",{parentName:"ul"},"Easy to update tools with Renovate"),(0,n.kt)("li",{parentName:"ul"},"aqua supports splitting configuration files, so it is easy to filter builds in CI by changed file paths")),(0,n.kt)("p",null,"About the difference between aqua and asf, please see ",(0,n.kt)("a",{parentName:"p",href:"/docs/#compared-with-asdf"},"Compared with asdf")," too."))}d.isMDXComponent=!0}}]);