"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[1791],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=c(a),d=r,h=l["".concat(p,".").concat(d)]||l[d]||m[d]||o;return a?n.createElement(h,i(i({ref:t},s),{},{components:a})):n.createElement(h,i({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[l]="string"==typeof e?e:r,i[1]=u;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2965:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:250},i="update-checksum-action",u={unversionedId:"products/update-checksum-action",id:"products/update-checksum-action",title:"update-checksum-action",description:"https://github.com/aquaproj/update-checksum-action",source:"@site/docs/products/update-checksum-action.md",sourceDirName:"products",slug:"/products/update-checksum-action",permalink:"/docs/products/update-checksum-action",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/products/update-checksum-action.md",tags:[],version:"current",sidebarPosition:250,frontMatter:{sidebar_position:250},sidebar:"tutorialSidebar",previous:{title:"aqua-renovate-config",permalink:"/docs/products/aqua-renovate-config"},next:{title:"update-checksum-workflow",permalink:"/docs/products/update-checksum-workflow"}},p={},c=[{value:"Reusable Workflow",id:"reusable-workflow",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Example",id:"example",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Required Environment Variables",id:"required-environment-variables",level:2},{value:"Outputs",id:"outputs",level:2}],s={toc:c},l="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(l,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"update-checksum-action"},"update-checksum-action"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/update-checksum-action"},"https://github.com/aquaproj/update-checksum-action")),(0,r.kt)("p",null,"GitHub Actions to update aqua-checksums.json. If aqua-checksums.json isn't latest, update aqua-checksums.json and push a commit"),(0,r.kt)("p",null,"About aqua's Checksum Verification, please see ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/security/checksum"},"the document")," too."),(0,r.kt)("h2",{id:"reusable-workflow"},"Reusable Workflow"),(0,r.kt)("p",null,"Please see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/update-checksum-workflow"},"update-checksum-workflow"),"."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://aquaproj.github.io/"},"aqua")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/int128/ghcp"},"int128/ghcp"),": You can install ghcp with aqua (",(0,r.kt)("inlineCode",{parentName:"li"},"aqua g -i int128/ghcp"),")")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua init\n$ aqua g -i int128/ghcp\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/example-update-checksum/blob/main/.github/workflows/test.yaml"},"Workflow")),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"working_directory")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prune")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"skip_push"))),(0,r.kt)("h2",{id:"required-environment-variables"},"Required Environment Variables"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GITHUB_TOKEN"),": GitHub Access Token. This is used to push a commit.")),(0,r.kt)("p",null,"Required permissions: ",(0,r.kt)("inlineCode",{parentName:"p"},"contents: write")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("del",{parentName:"p"},"Unfortunately, fine-grained personal access token is unavailable at the moment because it doesn't support GraphQL API."),"\n",(0,r.kt)("del",{parentName:"p"},(0,r.kt)("a",{parentName:"del",href:"https://github.com/cli/cli/issues/6680"},"https://github.com/cli/cli/issues/6680"))),(0,r.kt)("p",{parentName:"admonition"},"2023-04-27 ",(0,r.kt)("a",{parentName:"p",href:"https://github.blog/changelog/2023-04-27-graphql-improvements-for-fine-grained-pats-and-github-apps/"},"fine-grained access token supports GraphQL API now."))),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("p",null,"Nothing."))}m.isMDXComponent=!0}}]);