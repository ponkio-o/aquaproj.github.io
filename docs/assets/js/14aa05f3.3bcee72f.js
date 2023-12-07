"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[9438],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>g});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,g=u["".concat(c,".").concat(m)]||u[m]||f[m]||o;return t?n.createElement(g,a(a({ref:r},l),{},{components:t})):n.createElement(g,a({ref:r},l))}));function g(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8751:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(7462),i=(t(7294),t(3905));const o={sidebar_position:300},a="version_filter",s={unversionedId:"reference/registry-config/version-filter",id:"reference/registry-config/version-filter",title:"version_filter",description:"v0.8.13",source:"@site/docs/reference/registry-config/version-filter.md",sourceDirName:"reference/registry-config",slug:"/reference/registry-config/version-filter",permalink:"/docs/reference/registry-config/version-filter",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/registry-config/version-filter.md",tags:[],version:"current",sidebarPosition:300,frontMatter:{sidebar_position:300},sidebar:"tutorialSidebar",previous:{title:"Registry Configuration",permalink:"/docs/reference/registry-config/"},next:{title:"version_prefix",permalink:"/docs/reference/registry-config/version-prefix"}},c={},p=[],l={toc:p},u="wrapper";function f(e){let{components:r,...t}=e;return(0,i.kt)(u,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"version_filter"},"version_filter"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v0.8.13"},"v0.8.13")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"In many cases you should use ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/registry-config/version-prefix"},"version_prefix")," rather than version_filter, because ",(0,i.kt)("inlineCode",{parentName:"p"},"version_prefix")," makes Registry configuration simple.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"aqua g")," gets the latest version of the package.\nIf ",(0,i.kt)("inlineCode",{parentName:"p"},"version_filter")," is set, the version which matches with ",(0,i.kt)("inlineCode",{parentName:"p"},"version_filter")," is used.\n",(0,i.kt)("inlineCode",{parentName:"p"},"version_filter")," is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/antonmedv/expr"},"expr"),"'s expression.\nThe evaluation result must be a boolean."),(0,i.kt)("p",null,"This is used in ",(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes-sigs/kustomize")," to exclude ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kustomize/releases?q=kyaml&expanded=true"},"releases of kyaml"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- type: github_release\n  repo_owner: kubernetes-sigs\n  repo_name: kustomize\n  asset: 'kustomize_{{trimPrefix \"kustomize/\" .Version}}_{{.OS}}_{{.Arch}}.tar.gz'\n  version_filter: 'Version startsWith \"kustomize/\"'\n")))}f.isMDXComponent=!0}}]);