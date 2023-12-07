"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[6359],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(o),y=n,m=p["".concat(s,".").concat(y)]||p[y]||h[y]||i;return o?a.createElement(m,r(r({ref:t},c),{},{components:o})):a.createElement(m,r({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,r[1]=l;for(var u=2;u<i;u++)r[u]=o[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}y.displayName="MDXCreateElement"},7296:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=o(7462),n=(o(7294),o(3905));const i={title:"Manage CLI tool version with aqua",date:new Date("2021-12-04T00:32:46.000Z"),authors:["suzuki-shunsuke"]},r=void 0,l={permalink:"/blog/2021/12/04/aqua-overview",source:"@site/blog/2021-12-04-aqua-overview.md",title:"Manage CLI tool version with aqua",description:"Original Post//medium.com/@suzuki.shunsuke.1989/manage-cli-tool-version-with-aqua-cee38b2c4bf5",date:"2021-12-04T00:32:46.000Z",formattedDate:"December 4, 2021",tags:[],readingTime:3.36,hasTruncateMarker:!1,authors:[{name:"Shunsuke Suzuki",title:"SRE / OSS Contributor / Tool Maker / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"Manage CLI tool version with aqua",date:"2021-12-04T00:32:46.000Z",authors:["suzuki-shunsuke"]},prevItem:{title:"Why I use aqua",permalink:"/blog/2021/12/23/why-i-use-aqua"},nextItem:{title:"aqua - Declarative CLI Version Manager",permalink:"/blog/2021/09/08/introduction"}},s={authorsImageUrls:[void 0]},u=[{value:"Pin Tool Version",id:"pin-tool-version",level:2},{value:"Auto update with Renovate",id:"auto-update-with-renovate",level:2},{value:"Lazy Install",id:"lazy-install",level:2},{value:"Change tool version easily",id:"change-tool-version-easily",level:2},{value:"Change tool version per configuration",id:"change-tool-version-per-configuration",level:2},{value:"Manage your tools as dotfiles",id:"manage-your-tools-as-dotfiles",level:2},{value:"Manage tools for your team and organization",id:"manage-tools-for-your-team-and-organization",level:2},{value:"Manage tools for a repository",id:"manage-tools-for-a-repository",level:2},{value:"Install tools managed in the private GitHub Repositories",id:"install-tools-managed-in-the-private-github-repositories",level:2},{value:"Use aqua in CI",id:"use-aqua-in-ci",level:2},{value:"Registry",id:"registry",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:u},p="wrapper";function h(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://medium.com/@suzuki.shunsuke.1989/manage-cli-tool-version-with-aqua-cee38b2c4bf5"})),(0,n.kt)("p",null,"Original Post: ",(0,n.kt)("a",{parentName:"p",href:"https://medium.com/@suzuki.shunsuke.1989/manage-cli-tool-version-with-aqua-cee38b2c4bf5"},"https://medium.com/@suzuki.shunsuke.1989/manage-cli-tool-version-with-aqua-cee38b2c4bf5")),(0,n.kt)("p",null,"In this post, I introduce the CLI tool aqua, which manages CLI tool version with YAML."),(0,n.kt)("p",null,"When I write this post, the latest version of aqua is v0.8.0."),(0,n.kt)("p",null,"aqua is a single binary written in Go, so you can install it easily. Unlike other package managers such as Homebrew, aqua manages CLI tools with declarative YAML Configuration files."),(0,n.kt)("h2",{id:"pin-tool-version"},"Pin Tool Version"),(0,n.kt)("p",null,"aqua forces to pin tool version, which solves the problem due to the difference of tool version."),(0,n.kt)("h2",{id:"auto-update-with-renovate"},"Auto update with Renovate"),(0,n.kt)("p",null,"With Renovate Preset Config for aqua, you can update tools continuously with Renovate."),(0,n.kt)("h2",{id:"lazy-install"},"Lazy Install"),(0,n.kt)("p",null,"When the tool is invoked, aqua installs the tool automatically. This feature ensures the executed tool version is exactly same as the configuration."),(0,n.kt)("h2",{id:"change-tool-version-easily"},"Change tool version easily"),(0,n.kt)("p",null,"By editing the tool version in the configuration file, you can easily change the tool version. You can try a new version or downgrade the tool easily."),(0,n.kt)("h2",{id:"change-tool-version-per-configuration"},"Change tool version per configuration"),(0,n.kt)("p",null,"You can manage tool version per configuration file. You can install multiple versions in the same machine and switch them per project."),(0,n.kt)("h2",{id:"manage-your-tools-as-dotfiles"},"Manage your tools as dotfiles"),(0,n.kt)("p",null,"By managing your aqua configuration file in Git repository such as your dotfiles, you can manage your tools as code. You can set up your new laptop and use the same tool version in your multiple laptops easily."),(0,n.kt)("h2",{id:"manage-tools-for-your-team-and-organization"},"Manage tools for your team and organization"),(0,n.kt)("p",null,"aqua supports not only personal use but also team and organization use. By managing aqua configuration for your team and organization in Git Repository, you can manage tools for your team and organization as code. New joiners can set up their laptops quickly and you can distribute tools easily."),(0,n.kt)("h2",{id:"manage-tools-for-a-repository"},"Manage tools for a repository"),(0,n.kt)("p",null,"By adding aqua configuration file to a repository, you can manage tools for the repository with aqua. aqua manages tool versions declaratively, so you always only have to execute the same command. So new contributors can set up quickly and you can update tools easily. You don\u2019t have to maintain the document about required tools and you don\u2019t have to investigate how to install them."),(0,n.kt)("h2",{id:"install-tools-managed-in-the-private-github-repositories"},"Install tools managed in the private GitHub Repositories"),(0,n.kt)("p",null,"aqua supports installing tools from the private GitHub Repositories. It\u2019s useful to distribute your organization\u2019s private tools."),(0,n.kt)("h2",{id:"use-aqua-in-ci"},"Use aqua in CI"),(0,n.kt)("p",null,"There are GitHub Actions and CircleCI Orb for aqua, so you can install tools with aqua easily in CI too. You can use the same version in both local development and CI."),(0,n.kt)("p",null,"By the way, many GitHub Actions install the tool automatically before executing it. It\u2019s very easy to use, but there are some problems."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Some GitHub Actions don\u2019t force to pin tool versions, which may cause the problem due to the difference of tool version"),(0,n.kt)("li",{parentName:"ul"},"When you specify tool version in inputs, you have to update it continuously but it\u2019s not easy"),(0,n.kt)("li",{parentName:"ul"},"You can\u2019t install tools in your laptop for local development with GitHub Actions. You have to install tools by the other way"),(0,n.kt)("li",{parentName:"ul"},"It\u2019s difficult to unify tool versions in local development and CI")),(0,n.kt)("p",null,"aqua solves the above problems."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"aqua forces to pin tool versions"),(0,n.kt)("li",{parentName:"ul"},"With Renovate Preset Config for aqua, you can update tools easily with Renovate"),(0,n.kt)("li",{parentName:"ul"},"aqua supports both local development and CI"),(0,n.kt)("li",{parentName:"ul"},"You can use the same configuration in both local development and CI, so you can unify tool versions easily")),(0,n.kt)("h2",{id:"registry"},"Registry"),(0,n.kt)("p",null,"Registry is aqua\u2019s mechanism to manage the list of installable tools and how to install them. Registry is a simple YAML. You can write Registry in aqua configuration, or you can read it from other local files and GitHub Repositories. You can manage private Registry in private GitHub Repository."),(0,n.kt)("p",null,"We maintain the Standard Registry and you can install tools in the Registry easily without writing Registry by your self."),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"In this post, I introduced the CLI tool aqua, which manages CLI tool version with YAML. Let\u2019s try Quick Start."))}h.isMDXComponent=!0}}]);