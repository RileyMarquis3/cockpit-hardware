var E=Object.defineProperty;var M=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var F=(t,s,o)=>s in t?E(t,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[s]=o,b=(t,s)=>{for(var o in s||(s={}))H.call(s,o)&&F(t,o,s[o]);if(M)for(var o of M(s))N.call(s,o)&&F(t,o,s[o]);return t};import{r as _,w as k,a as O,b as A,c as m,o as d,d as c,e as r,n as $,t as u,f,g as p,P as D,h as j,i as v,F as L,j as P,k as g,l as w,m as R,p as q}from"./vendor.fc599622.js";const V=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))e(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}};V();var h=(t,s)=>{const o=t.__vccOpts||t;for(const[e,n]of s)o[e]=n;return o};const X={props:{moduleName:String,centerName:Boolean},setup(t){const s=_(!0);function o(){let e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,n=localStorage.getItem("color-theme");return n===null?e:n==="dark"}return s.value=o(),s.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),k(()=>s.value,(e,n)=>{localStorage.setItem("color-theme",e?"dark":"light"),e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},{lazy:!1}),{darkMode:s}},components:{SunIcon:O,MoonIcon:A}},J={class:"p-2 flex items-baseline justify-between bg-neutral-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-gray-700",style:{"font-family":"Red Hat Text",position:"relative"}},W={class:"flex flex-row items-baseline basis-10"},z=["src"],T={class:"text-2xl"},K=r("span",{class:"text-gray-800 dark:text-red-600"},"Drives",-1),Y={key:0,class:"ml-5 text-red-800 dark:text-white text-2xl"};function G(t,s,o,e,n,i){const a=m("SunIcon"),l=m("MoonIcon");return d(),c("div",J,[r("div",W,[r("img",{class:"w-6 h-6 text-gray-50 mr-0.5 self-center",src:e.darkMode?"img/45d-fan-dark.svg":"img/45d-fan-light.svg"},null,8,z),r("h1",T,[r("span",{class:"text-red-800 dark:text-white font-bold",style:$({"font-family":"Source Sans Pro","font-size":"1.6rem"})},"45",4),K]),o.centerName?f("",!0):(d(),c("h1",Y,u(o.moduleName),1))]),o.centerName?(d(),c("h1",{key:0,class:"text-red-800 dark:text-white text-2xl",style:$({position:"absolute",left:"50%",top:"50%",transform:"translateX(-50%) translateY(-50%)"})},u(o.moduleName),5)):f("",!0),r("button",{onClick:s[0]||(s[0]=x=>e.darkMode=!e.darkMode),id:"theme-toggle",type:"button",class:"text-gray-500 dark:text-gray-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none rounded-lg text-sm p-2.5 justify-self-end w-10 h-10 basis-10"},[e.darkMode?(d(),p(a,{key:0})):(d(),p(l,{key:1}))])])}var Q=h(X,[["render",G]]);const U={name:"P5Canvas",mounted(){const t=function(s){var o=2,e=35;s.setup=n=>{s.createCanvas(500,500).parent("p5-canvas")},s.draw=n=>{s.background(245);const i=s.frameCount*3,a=s.sin(s.radians(i))*50;s.push(),s.translate(0,s.height/2),s.fill(66,184,131),s.stroke(53,73,94),s.strokeWeight(5),s.ellipse(e,a,50,50),s.pop(),e+=o,(e>s.width-35||e<35)&&(o*=-1)}};new D(t)}},Z={id:"p5-canvas",class:"mx-auto"};function ee(t,s,o,e,n,i){return d(),c("div",Z)}var B=h(U,[["render",ee]]);const se={components:{XCircleIcon:j},props:{errorMsg:Array,FixButton:Boolean,FixButtonHandler:Function},setup(t){const s=_(t.errorMsg),o=_(t.FixButtonHandler);return k(()=>t.FixButtonHandler,e=>{o.value=e}),{errorMsg:s,FixButtonHandler:o}}},re={class:"flex items-center justify-evenly"},te={class:"rounded-md bg-red-50 p-4"},oe={class:"flex"},ne={class:"flex-shrink-0"},ae={class:"ml-3"},de=r("h3",{class:"text-sm font-medium text-red-800"}," 45Drives Disks Encountered an Error ",-1),ie={class:"mt-2 text-sm text-red-700"},le={role:"list",class:"list-disc pl-5 space-y-1 whitespace-pre"};function ce(t,s,o,e,n,i){const a=m("XCircleIcon");return d(),c("div",re,[r("div",te,[r("div",oe,[r("div",ne,[v(a,{class:"h-5 w-5 text-red-400","aria-hidden":"true"})]),r("div",ae,[de,r("div",ie,[r("ul",le,[(d(!0),c(L,null,P(e.errorMsg,l=>(d(),c("li",null,u(l),1))),256))])])])])]),o.FixButton?(d(),c("button",{key:0,onClick:s[0]||(s[0]=(...l)=>e.FixButtonHandler&&e.FixButtonHandler(...l)),type:"button",class:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"}," Fix ")):f("",!0)])}var S=h(se,[["render",ce]]);function y(t=[],s={},o="out"){const e=g({loading:!1,status:0,stdout:"",stderr:""}),n=Boolean(s.promise);s.superuser||(s.superuser="require"),s.err=o==="out"?"out":"message";async function i(){e.loading=!0,e.status=0,e.stdout="",e.stderr="",cockpit.spawn(t,s).then((a,l)=>{e.stdout=a,e.stderr=l}).catch((a,l)=>{var x;e.stderr=l!=null?l:a.message,e.status=(x=a.exit_status)!=null?x:-1}).finally(()=>{e.loading=!1})}return i(),n?new Promise((a,l)=>{k(e,()=>{e.loading||(e.status!==0?l(b({},e)):a(b({},e)))})}):e}const fe={setup(){const t=_(),s=g({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}}),o=_(),e=g({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}});return console.log(s),console.log(e),{runServerInfo:async()=>{try{const a=await y(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let l=JSON.parse(a.stdout);console.log(l),t.value=a.stdout,s.errorFlag=!1,s.errorMessage.length=0,s.showFixButton=!1}catch(a){console.log(a),s.errorFlag=!0,s.errorMessage.length=0,s.errorMessage.push(a.stderr),s.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),s.showFixButton=!1}},runLsdev:async()=>{try{const a=await y(["/opt/45drives/tools/lsdev","--json"],{err:"out",superuser:"require",promise:!0});let l=JSON.parse(a.stdout);console.log(l),o.value=a.stdout,e.errorFlag=!1,e.errorMessage.length=0,e.showFixButton=!1}catch(a){console.log(a),e.errorFlag=!0,e.errorMessage.length=0,e.errorMessage.push(a.stderr),e.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),e.showFixButton=!1}},serverInfo:t,serverInfoError:s,lsdevInfo:o,lsdevError:e}},components:{RefreshIconOutline:w,ErrorMessage:S}},ue={class:"card m-3 grow"},me=r("div",{class:"card-header p-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[r("h3",{class:"text-lg leading-6 font-semibold"},"Debug Section")],-1),ve={class:"card-body dark:bg-stone-700"},he={class:"mt-3 sm:mt-0 sm:ml-4"},_e={key:0},ge={class:"w-3/4 m-2"},xe={class:"whitespace-pre"},pe={key:1},ye={class:"mt-3 sm:mt-0 sm:ml-4"},be={key:2,class:"mt-2 flex"},ke={class:"w-3/4 m-2"},we={class:"whitespace-pre"},Ie={key:3};function Me(t,s,o,e,n,i){const a=m("ErrorMessage");return d(),c("div",ue,[me,r("div",ve,[r("div",he,[r("button",{type:"button",onClick:s[0]||(s[0]=l=>e.runServerInfo()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "server_info" ')]),e.serverInfoError.errorFlag?f("",!0):(d(),c("div",_e,[r("div",ge,[r("div",xe,u(e.serverInfo),1)])])),e.serverInfoError.errorFlag?(d(),c("div",pe,[v(a,{errorMsg:e.serverInfoError.errorMessage,FixButton:e.serverInfoError.showFixButton,FixButtonHandler:e.serverInfoError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):f("",!0),r("div",ye,[r("button",{type:"button",onClick:s[1]||(s[1]=l=>e.runLsdev()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "lsdev" ')]),e.lsdevError.errorFlag?f("",!0):(d(),c("div",be,[r("div",ke,[r("div",we,u(e.lsdevInfo),1)])])),e.lsdevError.errorFlag?(d(),c("div",Ie,[v(a,{errorMsg:e.lsdevError.errorMessage,FixButton:e.lsdevError.showFixButton,FixButtonHandler:e.lsdevError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):f("",!0)])])}var Fe=h(fe,[["render",Me]]);const $e={props:{serverInfo:Object},setup(t){return{serverInfo:g(t.serverInfo)}}},Be={class:"card m-2 flex-auto"},Se=r("div",{class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[r("h3",{class:"text-lg leading-6 font-semibold"},"Server")],-1),Ce={class:"card-body dark:bg-stone-700 flex"},Ee={class:"mt-0"},He={class:"sm:divide-y sm:divide-gray-200"},Ne={class:"py-2 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4"},Oe=r("dt",{class:"text-sm font-medium text-gray-500"},"Model",-1),Ae={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},De={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},je=r("dt",{class:"text-sm font-medium text-gray-500"},"Operating System",-1),Le={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},Pe={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},Re=r("dt",{class:"text-sm font-medium text-gray-500"},"Motherboard",-1),qe={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},Ve=r("div",{class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},[r("dt",{class:"text-sm font-medium text-gray-500"},"HBA Cards"),r("dd",{class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},[r("ul",{role:"list",class:"border border-gray-200 rounded-md divide-y divide-gray-200"},[r("li",{class:"pl-3 pr-4 py-3 flex items-center justify-between text-sm"},[r("div",{class:"w-0 flex-1 flex items-center"},[r("span",{class:"ml-2 flex-1 w-0 truncate"}," resume_back_end_developer.pdf ")]),r("div",{class:"ml-4 flex-shrink-0"},[r("a",{href:"#",class:"font-medium text-indigo-600 hover:text-indigo-500"}," Download ")])]),r("li",{class:"pl-3 pr-4 py-3 flex items-center justify-between text-sm"},[r("div",{class:"w-0 flex-1 flex items-center"},[r("span",{class:"ml-2 flex-1 w-0 truncate"}," coverletter_back_end_developer.pdf ")]),r("div",{class:"ml-4 flex-shrink-0"},[r("a",{href:"#",class:"font-medium text-indigo-600 hover:text-indigo-500"}," Download ")])])])])],-1);function Xe(t,s,o,e,n,i){return d(),c("div",Be,[Se,r("div",Ce,[r("div",null,[r("div",Ee,[r("dl",He,[r("div",Ne,[Oe,r("dd",Ae,u(e.serverInfo.Model),1)]),r("div",De,[je,r("dd",Le,u(e.serverInfo["OS NAME"])+" - "+u(e.serverInfo["OS VERSION_ID"]),1)]),r("div",Pe,[Re,r("dd",qe,u(e.serverInfo.Motherboard.Manufacturer)+" - "+u(e.serverInfo.Motherboard["Product Name"]),1)]),Ve])])]),R(" "+u(e.serverInfo),1)])])}var Je=h($e,[["render",Xe]]);const We={components:{RefreshIconOutline:w},props:{diskInfo:Object},setup(t){const s=g(t.diskInfo),o=_("Click on a disk for more detail."),e=_(!0);return{diskInfo:s,wMsg:o,showWelcome:e}}},ze={class:"card m-2 flex-auto flex flex-col"},Te={class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},Ke=r("h3",{class:"text-lg leading-6 font-semibold"},"Disk Information",-1),Ye={class:"mt-3 sm:mt-0 sm:ml-4"},Ge={type:"button",class:"card-refresh-btn"},Qe={class:"card-body dark:bg-stone-700 grow flex flex-col"},Ue={key:0},Ze={key:1,class:"grow flex justify-center items-center"},es={class:"p-5 bg-stone-100 dark:bg-stone-600 rounded-lg text-stone-500 dark:text-stone-300"};function ss(t,s,o,e,n,i){const a=m("RefreshIconOutline");return d(),c("div",ze,[r("div",Te,[Ke,r("div",Ye,[r("button",Ge,[v(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),r("div",Qe,[e.showWelcome?f("",!0):(d(),c("div",Ue," here is where the info goes.. and if it isn't there, it'll show the welcome. ")),e.showWelcome?(d(),c("div",Ze,[r("div",es,u(e.wMsg),1)])):f("",!0)])])}var rs=h(We,[["render",ss]]);const ts={components:{RefreshIconOutline:w,P5Canvas:B}},os={class:"card m-2"},ns={class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},as=r("h3",{class:"text-lg leading-6 font-semibold"},"Disk Viewer",-1),ds={class:"mt-3 sm:mt-0 sm:ml-4"},is={type:"button",class:"card-refresh-btn"},ls={class:"card-body dark:bg-stone-700 flex-auto flex flex-col items-center content-center p-0"};function cs(t,s,o,e,n,i){const a=m("RefreshIconOutline"),l=m("P5Canvas");return d(),c("div",os,[r("div",ns,[as,r("div",ds,[r("button",is,[v(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),r("div",ls,[v(l)])])}var fs=h(ts,[["render",cs]]);const us={name:"App",components:{P5Canvas:B,FfdHeader:Q,DebugBox:Fe,ServerSection:Je,DiskSection:rs,CanvasSection:fs,ErrorMessage:S},setup(){const t=g({serverInfo:{content:null,finished:!1,failed:!1,errorMessage:[],fixAvailable:!1,fixHandler:()=>{console.log("Default handler was run for the fix button.")}},lsdev:{content:null,finished:!1,failed:!1,errorMessage:[],fixAvailable:!1,fixHandler:()=>{console.log("Default handler was run for the fix button.")}}}),s=async()=>{try{const e=await y(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let n=JSON.parse(e.stdout);console.log(n),t.serverInfo.content=n,t.serverInfo.finished=!0,t.serverInfo.failed=!1,t.serverInfo.fixAvailable=!1}catch(e){console.log(e),t.serverInfo.content=null,t.serverInfo.finished=!1,t.serverInfo.failed=!0,t.serverInfo.fixAvailable=!1,t.serverInfo.errorMessage.length=0,t.serverInfo.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),t.serverInfo.errorMessage.push(e.stderr)}},o=async()=>{try{const e=await y(["/opt/45drives/tools/lsdev","--json"],{err:"out",superuser:"require",promise:!0});let n=JSON.parse(e.stdout);console.log(n),t.lsdev.content=n,t.lsdev.finished=!0,t.lsdev.failed=!1,t.lsdev.fixAvailable=!1}catch(e){console.log(e),t.lsdev.content=null,t.lsdev.finished=!1,t.lsdev.failed=!0,t.lsdev.fixAvailable=!1,t.lsdev.errorMessage.length=0,t.lsdev.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),t.lsdev.errorMessage.push(e.stderr)}};return s(),o(),{preloadChecks:t,runServerInfo:s,runLsdev:o}}},ms={id:"App"},vs={class:"h-screen flex flex-col overflow-hidden"},hs={class:"flex flex-wrap overflow-y-auto"},_s={class:"flex-auto flex items-center justify-evenly mt-2 mx-2"},gs={key:0,class:"p-2 m-2"},xs={key:1,class:"p-2 m-2"};function ps(t,s,o,e,n,i){const a=m("FfdHeader"),l=m("ServerSection"),x=m("CanvasSection"),C=m("DiskSection"),I=m("ErrorMessage");return d(),c("div",ms,[r("div",vs,[v(a,{moduleName:"Disks",centerName:""}),r("div",hs,[e.preloadChecks.serverInfo.finished?(d(),p(l,{key:0,serverInfo:e.preloadChecks.serverInfo.content},null,8,["serverInfo"])):f("",!0),e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(d(),p(x,{key:1,serverInfo:e.preloadChecks.serverInfo.content,lsdev:e.preloadChecks.lsdev.content},null,8,["serverInfo","lsdev"])):f("",!0),e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(d(),p(C,{key:2,diskInfo:e.preloadChecks.lsdev.content},null,8,["diskInfo"])):f("",!0)]),r("div",_s,[e.preloadChecks.serverInfo.failed?(d(),c("div",gs,[v(I,{errorMsg:e.preloadChecks.serverInfo.errorMessage,FixButton:e.preloadChecks.serverInfo.fixAvailable,FixButtonHandler:e.preloadChecks.serverInfo.fixHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):f("",!0),e.preloadChecks.lsdev.failed?(d(),c("div",xs,[v(I,{errorMsg:e.preloadChecks.lsdev.errorMessage,FixButton:e.preloadChecks.lsdev.fixAvailable,FixButtonHandler:e.preloadChecks.lsdev.fixHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):f("",!0)])])])}var ys=h(us,[["render",ps]]);q(ys).mount("#app");