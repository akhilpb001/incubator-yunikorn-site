(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{135:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(n),s=r,h=u["".concat(i,".").concat(s)]||u[s]||d[s]||o;return n?a.a.createElement(h,c(c({ref:t},p),{},{components:n})):a.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),o=(n(0),n(135)),i={id:"build_local",title:"Build Local"},c={unversionedId:"setup/build_local",id:"version-0.8.0/setup/build_local",isDocsHomePage:!1,title:"Build Local",description:"\x3c!--",source:"@site/versioned_docs/version-0.8.0/setup/build_local.md",permalink:"/docs/setup/build_local",version:"0.8.0",sidebar:"version-0.8.0/docs",previous:{title:"Developer Guide",permalink:"/docs/get_started/developer_guide"},next:{title:"Configure Scheduler",permalink:"/docs/setup/configure_scheduler"}},l=[{value:"Affected repositories",id:"affected-repositories",children:[]},{value:"Making local changes",id:"making-local-changes",children:[]},{value:"Updating dependencies",id:"updating-dependencies",children:[]}],p={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"building-with-local-dependencies"},"Building with local dependencies"),Object(o.b)("p",null,"The YuniKorn project has four repositories three of those repositories have a dependency at the go level.\nThese dependencies are part of the go modules and point to the github repositories.\nDuring development it can be required to break the dependency on the committed version from github.\nThis requires making changes in the module file to allow loading a local copy or a forked copy from a different repository.  "),Object(o.b)("h2",{id:"affected-repositories"},"Affected repositories"),Object(o.b)("p",null,"The following dependencies exist between the repositories:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"repository"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"depends on"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"yunikorn-core"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"yunikorn-scheduler-interface")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"yunikorn-k8shim"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"yunikorn-scheduler-interface, yunikorn-core")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"yunikorn-scheduler-interface"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"none")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"yunikorn-web"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"yunikorn-core")))),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"yunikorn-web")," repository has no direct go dependency on the other repositories. However any change to the ",Object(o.b)("inlineCode",{parentName:"p"},"yunikorn-core")," webservices can affect the web interface. "),Object(o.b)("h2",{id:"making-local-changes"},"Making local changes"),Object(o.b)("p",null,"To make sure that the local changes will not break other parts of the build you should run:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A full build ",Object(o.b)("inlineCode",{parentName:"li"},"make")," (build target depends on the repository)"),Object(o.b)("li",{parentName:"ul"},"A full unit test run ",Object(o.b)("inlineCode",{parentName:"li"},"make test"))),Object(o.b)("p",null,"Any test failures should be fixed before proceeding."),Object(o.b)("h2",{id:"updating-dependencies"},"Updating dependencies"),Object(o.b)("p",null,"The simplest way is to use the ",Object(o.b)("inlineCode",{parentName:"p"},"replace")," directive in the module file. The ",Object(o.b)("inlineCode",{parentName:"p"},"replace")," directive allows you to override the import path with a new (local) path.\nThere is no need to change any of the imports in the source code. The change must be made in the ",Object(o.b)("inlineCode",{parentName:"p"},"go.mod")," file of the repository that has the dependency. "),Object(o.b)("p",null,"Using ",Object(o.b)("inlineCode",{parentName:"p"},"replace")," to use of a forked dependency, such as:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"replace github.com/apache/incubator-yunikorn-core => example.com/some/forked-yunikorn\n")),Object(o.b)("p",null,"There is no requirement to fork and create a new repository. If you do not have a repository you can use a local checked out copy too.\nUsing ",Object(o.b)("inlineCode",{parentName:"p"},"replace")," to use of a local directory as a dependency:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"replace github.com/apache/incubator-yunikorn-core => /User/example/local/checked-out-yunikorn\n")),Object(o.b)("p",null,"and for the same dependency using a relative path:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"replace github.com/apache/incubator-yunikorn-core => ../checked-out-yunikorn\n")),Object(o.b)("p",null,"Note: if the ",Object(o.b)("inlineCode",{parentName:"p"},"replace")," directive is using a local filesystem path, then the target must have the ",Object(o.b)("inlineCode",{parentName:"p"},"go.mod")," file at that location."),Object(o.b)("p",null,"Further details on the modules wiki: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/golang/go/wiki/Modules#when-should-i-use-the-replace-directive"}),"When should I use the 'replace' directive?"),"."))}b.isMDXComponent=!0}}]);