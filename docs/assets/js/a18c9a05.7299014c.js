"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[245],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>g});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),l=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=l(e.components);return n.createElement(p.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||s;return t?n.createElement(g,i(i({ref:a},u),{},{components:t})):n.createElement(g,i({ref:a},u))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=m;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7365:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=t(7462),r=(t(7294),t(3905));const s={sidebar_position:300},i="Update registries and packages by update command",o={unversionedId:"guides/update-command",id:"guides/update-command",title:"Update registries and packages by update command",description:"You can update them by Renovate too.",source:"@site/docs/guides/update-command.md",sourceDirName:"guides",slug:"/guides/update-command",permalink:"/docs/guides/update-command",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/guides/update-command.md",tags:[],version:"current",sidebarPosition:300,frontMatter:{sidebar_position:300},sidebar:"tutorialSidebar",previous:{title:"Split the list of packages",permalink:"/docs/guides/split-config"},next:{title:"Install private packages",permalink:"/docs/guides/private-package"}},p={},l=[{value:"Updated configuration file paths",id:"updated-configuration-file-paths",level:2},{value:"Update only registries",id:"update-only-registries",level:2},{value:"Update only packages",id:"update-only-packages",level:2},{value:"Update only specific commands",id:"update-only-specific-commands",level:2},{value:"Specify versions",id:"specify-versions",level:2},{value:"Select packages with Fuzzy Finder",id:"select-packages-with-fuzzy-finder",level:2},{value:"Select the package version with Fuzzy Finder",id:"select-the-package-version-with-fuzzy-finder",level:2},{value:"The field <code>version</code> is ignored",id:"the-field-version-is-ignored",level:2},{value:"commit hashes are ignored",id:"commit-hashes-are-ignored",level:2},{value:"Known Issues",id:"known-issues",level:2},{value:"<code>null</code> is set to <code>packages</code> wrongly if registries are updated and <code>packages</code> is empty",id:"null-is-set-to-packages-wrongly-if-registries-are-updated-and-packages-is-empty",level:3},{value:"Newlines are removed wrongly",id:"newlines-are-removed-wrongly",level:3}],u={toc:l},d="wrapper";function c(e){let{components:a,...t}=e;return(0,r.kt)(d,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"update-registries-and-packages-by-update-command"},"Update registries and packages by update command"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can update them by Renovate too.\nPlease see ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/renovate"},"Update packages by Renovate")," too.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/1657"},"#1657")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/2329"},"#2329")," aqua >= ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v2.14.0"},"v2.14.0")),(0,r.kt)("p",null,"You can update registries and packages by ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua update (up)")," command."),(0,r.kt)("p",null,"If no argument is passed, all registries and packages are updated to the latest."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# Update all packages and registries to the latest versions\naqua update\n")),(0,r.kt)("p",null,'This command has an alias "up"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"aqua up\n")),(0,r.kt)("p",null,"This command"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"gets the latest version from GitHub Releases, GitHub Tags, and crates.io and updates aqua.yaml"),(0,r.kt)("li",{parentName:"ul"},"doesn't install packages")),(0,r.kt)("h2",{id:"updated-configuration-file-paths"},"Updated configuration file paths"),(0,r.kt)("p",null,"This command finds a configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua.yaml")," according to ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/config/#configuration-file-path"},"the rule")," and updates only one file.\nOnce this command finds one file, it stops searching other aqua.yaml."),(0,r.kt)("p",null,"So if you want to update other files, please change the current directory or specify the configuration file path with the option ",(0,r.kt)("inlineCode",{parentName:"p"},"-c"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"aqua -c foo/aqua.yaml update\n")),(0,r.kt)("h2",{id:"update-only-registries"},"Update only registries"),(0,r.kt)("p",null,"If you want to update only registries, please use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--only-registry [-r]")," option."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# Update only registries\naqua update -r\n")),(0,r.kt)("h2",{id:"update-only-packages"},"Update only packages"),(0,r.kt)("p",null,"If you want to update only packages, please use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--only-package [-p]")," option."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# Update only packages\naqua update -p\n")),(0,r.kt)("h2",{id:"update-only-specific-commands"},"Update only specific commands"),(0,r.kt)("p",null,"You can specify packages with command names. aqua finds packages that have these commands and updates them."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"aqua update <command name> [<command name> ...]\n")),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# Update cli/cli\naqua update gh\n")),(0,r.kt)("h2",{id:"specify-versions"},"Specify versions"),(0,r.kt)("p",null,"You can specify versions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"aqua update gh@v2.30.0\n")),(0,r.kt)("h2",{id:"select-packages-with-fuzzy-finder"},"Select packages with Fuzzy Finder"),(0,r.kt)("p",null,"If you want to update only specific packages, please use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-i")," option.\nYou can select packages with the fuzzy finder.\nIf ",(0,r.kt)("inlineCode",{parentName:"p"},"-i")," option is used, registries aren't updated."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# Select updated packages with fuzzy finder\naqua update -i\n")),(0,r.kt)("h2",{id:"select-the-package-version-with-fuzzy-finder"},"Select the package version with Fuzzy Finder"),(0,r.kt)("p",null,"If you want to select versions, please use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-s")," option.\nYou can select versions with the fuzzy finder. You can not only update but also downgrade packages."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# Select updated packages and versions with fuzzy finder\naqua update -i -s\n")),(0,r.kt)("h2",{id:"the-field-version-is-ignored"},"The field ",(0,r.kt)("inlineCode",{parentName:"h2"},"version")," is ignored"),(0,r.kt)("p",null,"This command doesn't update packages if the ",(0,r.kt)("inlineCode",{parentName:"p"},"version")," field is used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - name: cli/cli@v2.0.0 # Update\n  - name: gohugoio/hugo\n    version: v0.118.0 # Doesn't update\n")),(0,r.kt)("p",null,"So if you don't want to update specific packages, the ",(0,r.kt)("inlineCode",{parentName:"p"},"version")," field is useful."),(0,r.kt)("h2",{id:"commit-hashes-are-ignored"},"commit hashes are ignored"),(0,r.kt)("p",null,"This command doesn't update commit hashes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - name: google/pprof@d04f2422c8a17569c14e84da0fae252d9529826b # Doesn't update\n")),(0,r.kt)("h2",{id:"known-issues"},"Known Issues"),(0,r.kt)("p",null,"There are some known issues related to the third party library ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/goccy/go-yaml"},"goccy/go-yaml"),"."),(0,r.kt)("h3",{id:"null-is-set-to-packages-wrongly-if-registries-are-updated-and-packages-is-empty"},(0,r.kt)("inlineCode",{parentName:"h3"},"null")," is set to ",(0,r.kt)("inlineCode",{parentName:"h3"},"packages")," wrongly if registries are updated and ",(0,r.kt)("inlineCode",{parentName:"h3"},"packages")," is empty"),(0,r.kt)("p",null,"This issue is because of the third party library ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/goccy/go-yaml"},"goccy/go-yaml"),"."),(0,r.kt)("p",null,"Before"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- ref: v4.60.0\n  type: standard\npackages:\n")),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua up"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua up\nINFO[0000] updating a registry                           aqua_version= env=darwin/arm64 new_version=v4.65.0 old_version=v4.60.0 program=aqua registry_name=standard\n")),(0,r.kt)("p",null,"After"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- ref: v4.65.0\n  type: standard\npackages: null\n")),(0,r.kt)("h3",{id:"newlines-are-removed-wrongly"},"Newlines are removed wrongly"),(0,r.kt)("p",null,"This issue is because of the third party library ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/goccy/go-yaml"},"goccy/go-yaml"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/goccy/go-yaml/issues/285"},"https://github.com/goccy/go-yaml/issues/285"))),(0,r.kt)("p",null,"Before"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- ref: v4.60.0\n  type: standard\n\n\npackages:\n- name: suzuki-shunsuke/mkghtag@v0.1.1\n")),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua up"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua up\nINFO[0000] updating a registry                           aqua_version= env=darwin/arm64 new_version=v4.65.0 old_version=v4.60.0 program=aqua registry_name=standard\n")),(0,r.kt)("p",null,"After"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- ref: v4.65.0\n  type: standard\npackages:\n- name: suzuki-shunsuke/mkghtag@v0.1.1\n")))}c.isMDXComponent=!0}}]);