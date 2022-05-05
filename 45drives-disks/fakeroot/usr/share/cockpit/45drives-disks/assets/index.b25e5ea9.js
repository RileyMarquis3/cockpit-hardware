var E=Object.defineProperty;var $=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var M=(o,s,n)=>s in o?E(o,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[s]=n,w=(o,s)=>{for(var n in s||(s={}))H.call(s,n)&&M(o,n,s[n]);if($)for(var n of $(s))D.call(s,n)&&M(o,n,s[n]);return o};import{r as g,w as I,a as N,b as O,c as h,o as d,d as c,e as t,n as A,t as f,f as m,g as y,P as F,h as j,i as _,F as C,j as S,k as x,l as B,m as P,p as L}from"./vendor.38d76a34.js";const R=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function e(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}};R();var v=(o,s)=>{const n=o.__vccOpts||o;for(const[e,r]of s)n[e]=r;return n};const T={props:{moduleName:String,centerName:Boolean},setup(o){const s=g(!0);function n(){let e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,r=localStorage.getItem("color-theme");return r===null?e:r==="dark"}return s.value=n(),s.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),I(()=>s.value,(e,r)=>{localStorage.setItem("color-theme",e?"dark":"light"),e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},{lazy:!1}),{darkMode:s}},components:{SunIcon:N,MoonIcon:O}},q={class:"p-2 flex items-baseline justify-between bg-neutral-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-gray-700",style:{"font-family":"Red Hat Text",position:"relative"}},X={class:"flex flex-row items-baseline basis-10"},J=["src"],U={class:"text-2xl"},V=t("span",{class:"text-gray-800 dark:text-red-600"},"Drives",-1),W={key:0,class:"ml-5 text-red-800 dark:text-white text-2xl"};function z(o,s,n,e,r,l){const a=h("SunIcon"),i=h("MoonIcon");return d(),c("div",q,[t("div",X,[t("img",{class:"w-6 h-6 text-gray-50 mr-0.5 self-center",src:e.darkMode?"img/45d-fan-dark.svg":"img/45d-fan-light.svg"},null,8,J),t("h1",U,[t("span",{class:"text-red-800 dark:text-white font-bold",style:A({"font-family":"Source Sans Pro","font-size":"1.6rem"})},"45",4),V]),n.centerName?m("",!0):(d(),c("h1",W,f(n.moduleName),1))]),n.centerName?(d(),c("h1",{key:0,class:"text-red-800 dark:text-white text-2xl",style:A({position:"absolute",left:"50%",top:"50%",transform:"translateX(-50%) translateY(-50%)"})},f(n.moduleName),5)):m("",!0),t("button",{onClick:s[0]||(s[0]=u=>e.darkMode=!e.darkMode),id:"theme-toggle",type:"button",class:"text-gray-500 dark:text-gray-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none rounded-lg text-sm p-2.5 justify-self-end w-10 h-10 basis-10"},[e.darkMode?(d(),y(a,{key:0})):(d(),y(i,{key:1}))])])}var G=v(T,[["render",z]]);const K={name:"P5Canvas",mounted(){const o=function(s){var n=2,e=35;s.setup=r=>{s.createCanvas(570,900).parent("p5-canvas")},s.draw=r=>{s.background(245);const l=s.frameCount*3,a=s.sin(s.radians(l))*50;s.push(),s.translate(0,s.height/2),s.fill(66,184,131),s.stroke(53,73,94),s.strokeWeight(5),s.ellipse(e,a,50,50),s.pop(),e+=n,(e>s.width-35||e<35)&&(n*=-1)}};new F(o)}},Q={id:"p5-canvas",class:"mx-auto"};function Z(o,s,n,e,r,l){return d(),c("div",Q)}var ee=v(K,[["render",Z]]);const se={components:{XCircleIcon:j},props:{errorMsg:Array,FixButton:Boolean,FixButtonHandler:Function},setup(o){const s=g(o.errorMsg),n=g(o.FixButtonHandler);return I(()=>o.FixButtonHandler,e=>{n.value=e}),{errorMsg:s,FixButtonHandler:n}}},te={class:"flex items-center justify-evenly"},oe={class:"rounded-md bg-red-50 p-4"},re={class:"flex"},ne={class:"flex-shrink-0"},ae={class:"ml-3"},ie=t("h3",{class:"text-sm font-medium text-red-800"}," 45Drives Disks Encountered an Error ",-1),le={class:"mt-2 text-sm text-red-700"},de={role:"list",class:"list-disc pl-5 space-y-1 whitespace-pre"};function ce(o,s,n,e,r,l){const a=h("XCircleIcon");return d(),c("div",te,[t("div",oe,[t("div",re,[t("div",ne,[_(a,{class:"h-5 w-5 text-red-400","aria-hidden":"true"})]),t("div",ae,[ie,t("div",le,[t("ul",de,[(d(!0),c(C,null,S(e.errorMsg,i=>(d(),c("li",null,f(i),1))),256))])])])])]),n.FixButton?(d(),c("button",{key:0,onClick:s[0]||(s[0]=(...i)=>e.FixButtonHandler&&e.FixButtonHandler(...i)),type:"button",class:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"}," Fix ")):m("",!0)])}var Y=v(se,[["render",ce]]);function b(o=[],s={},n="out"){const e=x({loading:!1,status:0,stdout:"",stderr:""}),r=Boolean(s.promise);s.superuser||(s.superuser="require"),s.err=n==="out"?"out":"message";async function l(){e.loading=!0,e.status=0,e.stdout="",e.stderr="",cockpit.spawn(o,s).then((a,i)=>{e.stdout=a,e.stderr=i}).catch((a,i)=>{var u;e.stderr=i!=null?i:a.message,e.status=(u=a.exit_status)!=null?u:-1}).finally(()=>{e.loading=!1})}return l(),r?new Promise((a,i)=>{I(e,()=>{e.loading||(e.status!==0?i(w({},e)):a(w({},e)))})}):e}const ue={setup(){const o=g(),s=x({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}}),n=g(),e=x({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}});return console.log(s),console.log(e),{runServerInfo:async()=>{try{const a=await b(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let i=JSON.parse(a.stdout);console.log(i),o.value=a.stdout,s.errorFlag=!1,s.errorMessage.length=0,s.showFixButton=!1}catch(a){console.log(a),s.errorFlag=!0,s.errorMessage.length=0,s.errorMessage.push(a.stderr),s.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),s.showFixButton=!1}},runLsdev:async()=>{try{const a=await b(["/opt/45drives/tools/lsdev","--json"],{err:"out",superuser:"require",promise:!0});let i=JSON.parse(a.stdout);console.log(i),n.value=a.stdout,e.errorFlag=!1,e.errorMessage.length=0,e.showFixButton=!1}catch(a){console.log(a),e.errorFlag=!0,e.errorMessage.length=0,e.errorMessage.push(a.stderr),e.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),e.showFixButton=!1}},serverInfo:o,serverInfoError:s,lsdevInfo:n,lsdevError:e}},components:{RefreshIconOutline:B,ErrorMessage:Y}},fe={class:"card m-3 grow"},me=t("div",{class:"card-header p-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[t("h3",{class:"text-lg leading-6 font-semibold"},"Debug Section")],-1),ge={class:"card-body dark:bg-stone-700"},he={class:"mt-3 sm:mt-0 sm:ml-4"},_e={key:0},ve={class:"w-3/4 m-2"},pe={class:"whitespace-pre"},xe={key:1},ye={class:"mt-3 sm:mt-0 sm:ml-4"},ke={key:2,class:"mt-2 flex"},be={class:"w-3/4 m-2"},Ie={class:"whitespace-pre"},we={key:3};function Be(o,s,n,e,r,l){const a=h("ErrorMessage");return d(),c("div",fe,[me,t("div",ge,[t("div",he,[t("button",{type:"button",onClick:s[0]||(s[0]=i=>e.runServerInfo()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "server_info" ')]),e.serverInfoError.errorFlag?m("",!0):(d(),c("div",_e,[t("div",ve,[t("div",pe,f(e.serverInfo),1)])])),e.serverInfoError.errorFlag?(d(),c("div",xe,[_(a,{errorMsg:e.serverInfoError.errorMessage,FixButton:e.serverInfoError.showFixButton,FixButtonHandler:e.serverInfoError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):m("",!0),t("div",ye,[t("button",{type:"button",onClick:s[1]||(s[1]=i=>e.runLsdev()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "lsdev" ')]),e.lsdevError.errorFlag?m("",!0):(d(),c("div",ke,[t("div",be,[t("div",Ie,f(e.lsdevInfo),1)])])),e.lsdevError.errorFlag?(d(),c("div",we,[_(a,{errorMsg:e.lsdevError.errorMessage,FixButton:e.lsdevError.showFixButton,FixButtonHandler:e.lsdevError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):m("",!0)])])}var $e=v(ue,[["render",Be]]);const Me={props:{serverInfo:Object},setup(o){return{serverInfo:x(o.serverInfo)}}},Ae={class:"card mx-2 grow flex flex-col"},Fe=t("div",{class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[t("h3",{class:"text-lg py-1 leading-6 font-semibold"},"Server")],-1),Ce={class:"card-body dark:bg-stone-700 grow flex"},Se={class:"grow flex flex-col items-stretch"},Ye={class:"mt-0"},Ee={class:"sm:divide-y sm:divide-gray-200"},He={class:"py-2 sm:py-2 sm:grid sm:grid-cols-4 sm:gap-4"},De=t("dt",{class:"text-sm font-medium text-gray-500"},"Model",-1),Ne={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-3"},Oe={class:"py-2 sm:py-2 sm:grid sm:grid-cols-4 sm:gap-4"},je={class:"text-sm font-medium text-gray-500"},Pe=t("dt",{class:"text-sm font-medium text-gray-500"},"Model",-1),Le={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1"},Re=t("dt",{class:"text-sm font-medium text-gray-500"},"Controller ID",-1),Te={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1"},qe=t("dt",{class:"text-sm font-medium text-gray-500"},"PCI Slot",-1),Xe={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1"};function Je(o,s,n,e,r,l){return d(),c("div",Ae,[Fe,t("div",Ce,[t("div",Se,[t("div",Ye,[t("dl",Ee,[t("div",He,[De,t("dd",Ne,f(e.serverInfo.Model),1)]),(d(!0),c(C,null,S(e.serverInfo.HBA,a=>(d(),c("div",Oe,[t("dt",je,"HBA"+f(a.Ctl+1),1),t("div",null,[Pe,t("dd",Le,f(a.Model),1)]),t("div",null,[Re,t("dd",Te,f(a.Ctl),1)]),t("div",null,[qe,t("dd",Xe,f(a["PCI Slot"]),1)])]))),256))])])])])])}var Ue=v(Me,[["render",Je]]);const Ve={components:{RefreshIconOutline:B},props:{diskInfo:Object},setup(o){const s=x(o.diskInfo),n=g("Click on a disk for more detail."),e=g(!0),r=g(s.rows.flat().filter(i=>i.occupied).length),l=g(s.rows.flat().filter(i=>i.occupied).map(i=>Number(i.capacity.split(" ")[0])).reduce((i,u)=>i+u).toFixed(2)),a=g((s.rows.flat().filter(i=>i.occupied).map(i=>Number(i["temp-c"].replace(/[^0-9]/g,""))).reduce((i,u)=>i+u)/Number(r.value)).toFixed(2));return{diskInfo:s,wMsg:n,showWelcome:e,diskCount:r,storageCapacity:l,avgTemp:a}}},We={class:"card m-2 flex-auto flex flex-col"},ze={class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},Ge=t("h3",{class:"text-lg leading-6 font-semibold"},"Disk Information",-1),Ke={class:"mt-3 sm:mt-0 sm:ml-4"},Qe={type:"button",class:"card-refresh-btn"},Ze={class:"card-body dark:bg-stone-700 grow flex flex-col"},es={class:"grow flex flex-col items-stretch"},ss={class:"mt-0"},ts={class:"sm:divide-y sm:divide-gray-200"},os={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},rs=t("dt",{class:"text-sm font-medium text-gray-500"},"Disk Count",-1),ns={class:"mt-1 text-sm text-gray-900 sm:mt-0"},as={class:"sm:divide-y sm:divide-gray-200"},is={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},ls=t("dt",{class:"text-sm font-medium text-gray-500"},"Total Storage",-1),ds={class:"mt-1 text-sm text-gray-900 sm:mt-0"},cs={class:"sm:divide-y sm:divide-gray-200"},us={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},fs=t("dt",{class:"text-sm font-medium text-gray-500"}," Disk Temperature (avg) ",-1),ms={class:"mt-1 text-sm text-gray-900 sm:mt-0"},gs={key:0},hs={key:1,class:"grow flex justify-center items-center"},_s={class:"p-5 bg-stone-100 dark:bg-stone-600 rounded-lg text-stone-500 dark:text-stone-300"};function vs(o,s,n,e,r,l){const a=h("RefreshIconOutline");return d(),c("div",We,[t("div",ze,[Ge,t("div",Ke,[t("button",Qe,[_(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),t("div",Ze,[t("div",es,[t("div",ss,[t("dl",ts,[t("div",os,[rs,t("dd",ns,f(e.diskCount),1)])]),t("dl",as,[t("div",is,[ls,t("dd",ds,f(e.storageCapacity)+" GB ",1)])]),t("dl",cs,[t("div",us,[fs,t("dd",ms,f(e.avgTemp)+" \xB0C / "+f((e.avgTemp*(9/5)+32).toFixed(2))+" \xB0F ",1)])])])]),e.showWelcome?m("",!0):(d(),c("div",gs," here is where the info goes.. and if it isn't there, it'll show the welcome. ")),e.showWelcome?(d(),c("div",hs,[t("div",_s,f(e.wMsg),1)])):m("",!0)])])}var ps=v(Ve,[["render",vs]]);const xs={name:"P5Stornado2U",props:{diskInfo:Object},setup(o){const s=g({}),n=g({});I(o,()=>{s.value=o.diskInfo},{immediate:!0,deep:!0});const e=function(r){const l={chassis:{path:"img/2u-stornado/2u-stornado-chassis.png",image:null},disks:{default:{path:"img/disks/ssd-generic-2u.png",image:null},micron5200:{path:"img/disks/ssd-micron-2u.png",image:null},micron5300:{path:"img/disks/ssd-micron-5300-2u.png",image:null},seagate:{path:"img/disks/ssd-seagate-2u.png",image:null},seagateSas:{path:"img/disks/ssd-seagate-sas-2u.png",image:null}}},a=[{x:101,y:30,BAY:"1-1",occupied:!1,image:null},{x:123,y:30,BAY:"1-2",occupied:!1,image:null},{x:177,y:30,BAY:"1-3",occupied:!1,image:null},{x:200,y:30,BAY:"1-4",occupied:!1,image:null},{x:223,y:30,BAY:"1-5",occupied:!1,image:null},{x:246,y:30,BAY:"1-6",occupied:!1,image:null},{x:299,y:30,BAY:"1-7",occupied:!1,image:null},{x:322,y:30,BAY:"1-8",occupied:!1,image:null},{x:347,y:30,BAY:"1-9",occupied:!1,image:null},{x:369,y:30,BAY:"1-10",occupied:!1,image:null},{x:423,y:30,BAY:"1-11",occupied:!1,image:null},{x:446,y:30,BAY:"1-12",occupied:!1,image:null},{x:468,y:30,BAY:"1-13",occupied:!1,image:null},{x:491,y:30,BAY:"1-14",occupied:!1,image:null},{x:545,y:30,BAY:"1-15",occupied:!1,image:null},{x:568,y:30,BAY:"1-16",occupied:!1,image:null},{x:592,y:30,BAY:"2-1",occupied:!1,image:null},{x:615,y:30,BAY:"2-2",occupied:!1,image:null},{x:669,y:30,BAY:"2-3",occupied:!1,image:null},{x:692,y:30,BAY:"2-4",occupied:!1,image:null},{x:714,y:30,BAY:"2-5",occupied:!1,image:null},{x:737,y:30,BAY:"2-6",occupied:!1,image:null},{x:791,y:30,BAY:"2-7",occupied:!1,image:null},{x:814,y:30,BAY:"2-8",occupied:!1,image:null},{x:839,y:30,BAY:"2-9",occupied:!1,image:null},{x:861,y:30,BAY:"2-10",occupied:!1,image:null},{x:915,y:30,BAY:"2-11",occupied:!1,image:null},{x:938,y:30,BAY:"2-12",occupied:!1,image:null},{x:961,y:30,BAY:"2-13",occupied:!1,image:null},{x:984,y:30,BAY:"2-14",occupied:!1,image:null},{x:1037,y:30,BAY:"2-15",occupied:!1,image:null},{x:1060,y:30,BAY:"2-16",occupied:!1,image:null}];r.preload=i=>{l.chassis.image=r.loadImage(l.chassis.path),Object.entries(l.disks).forEach(([u,p])=>{l.disks[u].image=r.loadImage(p.path)}),s.value.rows.flat().forEach(u=>{const p=a.findIndex(k=>k.BAY===u["bay-id"]);a[p].occupied=u.occupied,a[p].image=u.occupied?l.disks.default.image:null})},r.setup=i=>{r.createCanvas(l.chassis.image.width,l.chassis.image.height).parent("p5-stornado2u"),r.image(l.chassis.image,0,0)},r.draw=i=>{a.forEach(u=>{u.occupied&&r.image(u.image,u.x,u.y)})}};return P(()=>{new F(e)}),{diskInfo:s,currentDisk:n}}},ys={id:"p5-stornado2u",class:"m-2"};function ks(o,s,n,e,r,l){return d(),c("div",ys)}var bs=v(xs,[["render",ks]]);const Is={components:{RefreshIconOutline:B,P5Stornado2U:bs},props:{diskInfo:Object},setup(o){return{diskInfo:g(o.diskInfo)}}},ws={class:"card m-2"},Bs={class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},$s=t("h3",{class:"text-lg leading-6 font-semibold"},"Disk Viewer",-1),Ms={class:"mt-3 sm:mt-0 sm:ml-4"},As={type:"button",class:"card-refresh-btn"},Fs={class:"card-body dark:bg-stone-700 flex-auto flex flex-col items-center content-center p-0"};function Cs(o,s,n,e,r,l){const a=h("RefreshIconOutline"),i=h("P5Stornado2U");return d(),c("div",ws,[t("div",Bs,[$s,t("div",Ms,[t("button",As,[_(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),t("div",Fs,[_(i,{diskInfo:e.diskInfo},null,8,["diskInfo"])])])}var Ss=v(Is,[["render",Cs]]);const Ys={name:"App",components:{P5Canvas:ee,FfdHeader:G,DebugBox:$e,ServerSection:Ue,DiskSection:ps,CanvasSection:Ss,ErrorMessage:Y},setup(){const o=x({serverInfo:{content:null,finished:!1,failed:!1,errorMessage:[],fixAvailable:!1,fixHandler:()=>{console.log("Default handler was run for the fix button.")}},lsdev:{content:null,finished:!1,failed:!1,errorMessage:[],fixAvailable:!1,fixHandler:()=>{console.log("Default handler was run for the fix button.")}}}),s=async()=>{try{const e=await b(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let r=JSON.parse(e.stdout);console.log(r),o.serverInfo.content=r,o.serverInfo.finished=!0,o.serverInfo.failed=!1,o.serverInfo.fixAvailable=!1}catch(e){console.log(e),o.serverInfo.content=null,o.serverInfo.finished=!1,o.serverInfo.failed=!0,o.serverInfo.fixAvailable=!1,o.serverInfo.errorMessage.length=0,o.serverInfo.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),o.serverInfo.errorMessage.push(e.stderr)}},n=async()=>{try{const e=await b(["/opt/45drives/tools/lsdev","--json"],{err:"out",superuser:"require",promise:!0});let r=JSON.parse(e.stdout);console.log(r),o.lsdev.content=r,o.lsdev.finished=!0,o.lsdev.failed=!1,o.lsdev.fixAvailable=!1}catch(e){console.log(e),o.lsdev.content=null,o.lsdev.finished=!1,o.lsdev.failed=!0,o.lsdev.fixAvailable=!1,o.lsdev.errorMessage.length=0,o.lsdev.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),o.lsdev.errorMessage.push(e.stderr)}};return s(),n(),{preloadChecks:o,runServerInfo:s,runLsdev:n}}},Es={id:"App"},Hs={class:"h-screen flex flex-col overflow-hidden"},Ds={class:"flex flex-wrap overflow-y-auto"},Ns={class:"flex p-2 grow flex-wrap"},Os={class:"flex p-2 mx-auto grow flex-col items-stretch"},js={class:"flex-auto flex items-center justify-evenly mt-2 mx-2"},Ps={key:0,class:"p-2 m-2"},Ls={key:1,class:"p-2 m-2"};function Rs(o,s,n,e,r,l){const a=h("FfdHeader"),i=h("CanvasSection"),u=h("DiskSection"),p=h("ServerSection"),k=h("ErrorMessage");return d(),c("div",Es,[t("div",Hs,[_(a,{moduleName:"Disks",centerName:""}),t("div",Ds,[t("div",Ns,[e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(d(),y(i,{key:0,serverInfo:e.preloadChecks.serverInfo.content,diskInfo:e.preloadChecks.lsdev.content},null,8,["serverInfo","diskInfo"])):m("",!0),e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(d(),y(u,{key:1,diskInfo:e.preloadChecks.lsdev.content},null,8,["diskInfo"])):m("",!0)]),t("div",Os,[e.preloadChecks.serverInfo.finished?(d(),y(p,{key:0,serverInfo:e.preloadChecks.serverInfo.content},null,8,["serverInfo"])):m("",!0)])]),t("div",js,[e.preloadChecks.serverInfo.failed?(d(),c("div",Ps,[_(k,{errorMsg:e.preloadChecks.serverInfo.errorMessage,FixButton:e.preloadChecks.serverInfo.fixAvailable,FixButtonHandler:e.preloadChecks.serverInfo.fixHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):m("",!0),e.preloadChecks.lsdev.failed?(d(),c("div",Ls,[_(k,{errorMsg:e.preloadChecks.lsdev.errorMessage,FixButton:e.preloadChecks.lsdev.fixAvailable,FixButtonHandler:e.preloadChecks.lsdev.fixHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):m("",!0)])])])}var Ts=v(Ys,[["render",Rs]]);L(Ts).mount("#app");