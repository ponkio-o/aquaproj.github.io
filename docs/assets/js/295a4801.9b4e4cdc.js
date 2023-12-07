"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[9318],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=o,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7622:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:1300},i="command is not found",l={unversionedId:"reference/codes/004",id:"reference/codes/004",title:"command is not found",description:"You may face the error command is not found when you run a command.",source:"@site/docs/reference/codes/004.md",sourceDirName:"reference/codes",slug:"/reference/codes/004",permalink:"/docs/reference/codes/004",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/codes/004.md",tags:[],version:"current",sidebarPosition:1300,frontMatter:{sidebar_position:1300},sidebar:"tutorialSidebar",previous:{title:'The policy file is ignored unless it is allowed by "aqua policy allow" command',permalink:"/docs/reference/codes/003"},next:{title:"cargo install failed",permalink:"/docs/reference/codes/005"}},c={},s=[{value:"What does this error mean?",id:"what-does-this-error-mean",level:2},{value:"How to solve the error",id:"how-to-solve-the-error",level:2}],u={toc:s},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"command-is-not-found"},"command is not found"),(0,o.kt)("p",null,"You may face the error ",(0,o.kt)("inlineCode",{parentName:"p"},"command is not found")," when you run a command."),(0,o.kt)("p",null,"e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ ci-info --version\nFATA[0000] aqua failed                                   aqua_version= env=linux/arm64 error="command is not found" exe_name=ci-info program=aqua\n')),(0,o.kt)("h2",{id:"what-does-this-error-mean"},"What does this error mean?"),(0,o.kt)("p",null,"This error means the command isn't found in your configuration files.\naqua searches ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/config#configuration-file-path"},"configuration files")," and searches the command from configuration files.\nThe error occurs when aqua can't find the command."),(0,o.kt)("h2",{id:"how-to-solve-the-error"},"How to solve the error"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If you want to install the command by aqua, please create ",(0,o.kt)("inlineCode",{parentName:"li"},"aqua.yaml")," and add the package to ",(0,o.kt)("inlineCode",{parentName:"li"},"aqua.yaml"),".")),(0,o.kt)("p",null,"e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"aqua init\naqua g -i suzuki-shunsuke/ci-info\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you want to install the package globally, please see ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/global-config"},"Install tools globally"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you want to install the command without aqua, please install the command as you like."))),(0,o.kt)("p",null,"e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"homebrew suzuki-shunsuke/ci-info/ci-info\n")),(0,o.kt)("p",null,"You don't have to remove the symbolic link in ",(0,o.kt)("inlineCode",{parentName:"p"},"$AQUA_ROOT_DIR/bin"),"."))}m.isMDXComponent=!0}}]);