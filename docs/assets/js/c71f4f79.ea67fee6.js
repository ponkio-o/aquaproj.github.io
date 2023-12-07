"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[3979],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),y=i,d=p["".concat(l,".").concat(y)]||p[y]||g[y]||a;return t?n.createElement(d,o(o({ref:r},u),{},{components:t})):n.createElement(d,o({ref:r},u))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=y;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},5038:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=t(7462),i=(t(7294),t(3905));const a={sidebar_position:300},o="Add Packages to Registry",s={unversionedId:"develop-registry/add-registry",id:"develop-registry/add-registry",title:"Add Packages to Registry",description:"* Write Registry Configuration",source:"@site/docs/develop-registry/add-registry.md",sourceDirName:"develop-registry",slug:"/develop-registry/add-registry",permalink:"/docs/develop-registry/add-registry",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/develop-registry/add-registry.md",tags:[],version:"current",sidebarPosition:300,frontMatter:{sidebar_position:300},sidebar:"tutorialSidebar",previous:{title:"Create a local Registry",permalink:"/docs/develop-registry/local-registry"},next:{title:"Scaffold Registry Configuration",permalink:"/docs/develop-registry/scaffold-registry"}},l={},c=[{value:"Write Registry Configuration",id:"write-registry-configuration",level:2},{value:"Create a GitHub Repository for Registry",id:"create-a-github-repository-for-registry",level:2}],u={toc:c},p="wrapper";function g(e){let{components:r,...t}=e;return(0,i.kt)(p,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"add-packages-to-registry"},"Add Packages to Registry"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Write Registry Configuration",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/config#local-registry"},"local registry")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/config#github_content-registry"},"github_content registry"))))),(0,i.kt)("h2",{id:"write-registry-configuration"},"Write Registry Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/develop-registry/registry-style-guide"},"Registry Style Guide")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/registry-config"},"Registry Configuration"))),(0,i.kt)("h2",{id:"create-a-github-repository-for-registry"},"Create a GitHub Repository for Registry"),(0,i.kt)("p",null,"ref. ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/config#github_content-registry"},"github_content registry")),(0,i.kt)("p",null,"Create a repository for Registry and add Registry Configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# registry.yaml\npackages:\n- type: github_release\n  repo_owner: suzuki-shunsuke\n  repo_name: tfcmt\n  asset: 'tfcmt_{{.OS}}_{{.Arch}}.tar.gz'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# aqua.yaml\nregistries:\n- name: foo\n  type: github_content\n  repo_owner: suzuki-shunsuke\n  repo_name: private-aqua-registry # private repository\n  ref: v0.1.0\n  path: registry.yaml\n\npackages:\n- name: suzuki-shunsuke/tfcmt@v3.2.4\n  registry: foo\n")))}g.isMDXComponent=!0}}]);