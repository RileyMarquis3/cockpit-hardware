var T=Object.defineProperty;var $=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var E=(a,o,i)=>o in a?T(a,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[o]=i,j=(a,o)=>{for(var i in o||(o={}))q.call(o,i)&&E(a,i,o[i]);if($)for(var i of $(o))X.call(o,i)&&E(a,i,o[i]);return a};import{r as y,w,a as U,b as G,c as k,o as c,d as u,e as s,n as D,t as m,f as g,g as A,P as C,h as Q,i as M,F as H,j as P,k as B,l as L,m as I,p as N,q as O,s as R}from"./vendor.d6a17607.js";const V=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))e(d);new MutationObserver(d=>{for(const n of d)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function i(d){const n={};return d.integrity&&(n.integrity=d.integrity),d.referrerpolicy&&(n.referrerPolicy=d.referrerpolicy),d.crossorigin==="use-credentials"?n.credentials="include":d.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(d){if(d.ep)return;d.ep=!0;const n=i(d);fetch(d.href,n)}};V();var b=(a,o)=>{const i=a.__vccOpts||a;for(const[e,d]of o)i[e]=d;return i};const W={props:{moduleName:String,centerName:Boolean},setup(a){const o=y(!0);function i(){let e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,d=localStorage.getItem("color-theme");return d===null?e:d==="dark"}return o.value=i(),o.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),w(()=>o.value,(e,d)=>{localStorage.setItem("color-theme",e?"dark":"light"),e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},{lazy:!1}),{darkMode:o}},components:{SunIcon:U,MoonIcon:G}},z={class:"p-2 flex items-baseline justify-between bg-neutral-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-gray-700",style:{"font-family":"Red Hat Text",position:"relative"}},K={class:"flex flex-row items-baseline basis-10"},Z=["src"],ee={class:"text-2xl"},se=s("span",{class:"text-gray-800 dark:text-red-600"},"Drives",-1),te={key:0,class:"ml-5 text-red-800 dark:text-white text-2xl"};function oe(a,o,i,e,d,n){const r=k("SunIcon"),t=k("MoonIcon");return c(),u("div",z,[s("div",K,[s("img",{class:"w-6 h-6 text-gray-50 mr-0.5 self-center",src:e.darkMode?"img/45d-fan-dark.svg":"img/45d-fan-light.svg"},null,8,Z),s("h1",ee,[s("span",{class:"text-red-800 dark:text-white font-bold",style:D({"font-family":"Source Sans Pro","font-size":"1.6rem"})},"45",4),se]),i.centerName?g("",!0):(c(),u("h1",te,m(i.moduleName),1))]),i.centerName?(c(),u("h1",{key:0,class:"text-red-800 dark:text-white text-2xl",style:D({position:"absolute",left:"50%",top:"50%",transform:"translateX(-50%) translateY(-50%)"})},m(i.moduleName),5)):g("",!0),s("button",{onClick:o[0]||(o[0]=l=>e.darkMode=!e.darkMode),id:"theme-toggle",type:"button",class:"text-gray-500 dark:text-gray-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none rounded-lg text-sm p-2.5 justify-self-end w-10 h-10 basis-10"},[e.darkMode?(c(),A(r,{key:0})):(c(),A(t,{key:1}))])])}var ne=b(W,[["render",oe]]);const ie={name:"P5Canvas",mounted(){const a=function(o){var i=2,e=35;o.setup=d=>{o.createCanvas(570,900).parent("p5-canvas")},o.draw=d=>{o.background(245);const n=o.frameCount*3,r=o.sin(o.radians(n))*50;o.push(),o.translate(0,o.height/2),o.fill(66,184,131),o.stroke(53,73,94),o.strokeWeight(5),o.ellipse(e,r,50,50),o.pop(),e+=i,(e>o.width-35||e<35)&&(i*=-1)}};new C(a)}},re={id:"p5-canvas",class:"mx-auto"};function de(a,o,i,e,d,n){return c(),u("div",re)}var ae=b(ie,[["render",de]]);const ce={components:{XCircleIcon:Q},props:{errorMsg:Array,FixButton:Boolean,FixButtonHandler:Function},setup(a){const o=y(a.errorMsg),i=y(a.FixButtonHandler);return w(()=>a.FixButtonHandler,e=>{i.value=e}),{errorMsg:o,FixButtonHandler:i}}},le={class:"flex items-center justify-evenly"},me={class:"rounded-md bg-red-50 p-4"},ue={class:"flex"},fe={class:"flex-shrink-0"},ge={class:"ml-3"},_e=s("h3",{class:"text-sm font-medium text-red-800"}," 45Drives Disks Encountered an Error ",-1),xe={class:"mt-2 text-sm text-red-700"},he={role:"list",class:"list-disc pl-5 space-y-1 whitespace-pre"};function ve(a,o,i,e,d,n){const r=k("XCircleIcon");return c(),u("div",le,[s("div",me,[s("div",ue,[s("div",fe,[M(r,{class:"h-5 w-5 text-red-400","aria-hidden":"true"})]),s("div",ge,[_e,s("div",xe,[s("ul",he,[(c(!0),u(H,null,P(e.errorMsg,t=>(c(),u("li",null,m(t),1))),256))])])])])]),i.FixButton?(c(),u("button",{key:0,onClick:o[0]||(o[0]=(...t)=>e.FixButtonHandler&&e.FixButtonHandler(...t)),type:"button",class:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"}," Fix ")):g("",!0)])}var J=b(ce,[["render",ve]]);function S(a=[],o={},i="out"){const e=B({loading:!1,status:0,stdout:"",stderr:""}),d=Boolean(o.promise);o.superuser||(o.superuser="require"),o.err=i==="out"?"out":"message";async function n(){e.loading=!0,e.status=0,e.stdout="",e.stderr="",cockpit.spawn(a,o).then((r,t)=>{e.stdout=r,e.stderr=t}).catch((r,t)=>{var l;e.stderr=t!=null?t:r.message,e.status=(l=r.exit_status)!=null?l:-1}).finally(()=>{e.loading=!1})}return n(),d?new Promise((r,t)=>{w(e,()=>{e.loading||(e.status!==0?t(j({},e)):r(j({},e)))})}):e}const pe={setup(){const a=y(),o=B({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}}),i=y(),e=B({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}});return console.log(o),console.log(e),{runServerInfo:async()=>{try{const r=await S(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let t=JSON.parse(r.stdout);console.log(t),a.value=r.stdout,o.errorFlag=!1,o.errorMessage.length=0,o.showFixButton=!1}catch(r){console.log(r),o.errorFlag=!0,o.errorMessage.length=0,o.errorMessage.push(r.stderr),o.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),o.showFixButton=!1}},runLsdev:async()=>{try{const r=await S(["/opt/45drives/tools/lsdev","--json"],{err:"out",superuser:"require",promise:!0});let t=JSON.parse(r.stdout);console.log(t),i.value=r.stdout,e.errorFlag=!1,e.errorMessage.length=0,e.showFixButton=!1}catch(r){console.log(r),e.errorFlag=!0,e.errorMessage.length=0,e.errorMessage.push(r.stderr),e.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),e.showFixButton=!1}},serverInfo:a,serverInfoError:o,lsdevInfo:i,lsdevError:e}},components:{RefreshIconOutline:L,ErrorMessage:J}},ye={class:"card m-3 grow"},ke=s("div",{class:"card-header p-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[s("h3",{class:"text-lg leading-6 font-semibold"},"Debug Section")],-1),be={class:"card-body dark:bg-stone-700"},Be={class:"mt-3 sm:mt-0 sm:ml-4"},we={key:0},Ae={class:"w-3/4 m-2"},Ie={class:"whitespace-pre"},Ye={key:1},Me={class:"mt-3 sm:mt-0 sm:ml-4"},Se={key:2,class:"mt-2 flex"},Fe={class:"w-3/4 m-2"},je={class:"whitespace-pre"},Oe={key:3};function Ce(a,o,i,e,d,n){const r=k("ErrorMessage");return c(),u("div",ye,[ke,s("div",be,[s("div",Be,[s("button",{type:"button",onClick:o[0]||(o[0]=t=>e.runServerInfo()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "server_info" ')]),e.serverInfoError.errorFlag?g("",!0):(c(),u("div",we,[s("div",Ae,[s("div",Ie,m(e.serverInfo),1)])])),e.serverInfoError.errorFlag?(c(),u("div",Ye,[M(r,{errorMsg:e.serverInfoError.errorMessage,FixButton:e.serverInfoError.showFixButton,FixButtonHandler:e.serverInfoError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):g("",!0),s("div",Me,[s("button",{type:"button",onClick:o[1]||(o[1]=t=>e.runLsdev()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "lsdev" ')]),e.lsdevError.errorFlag?g("",!0):(c(),u("div",Se,[s("div",Fe,[s("div",je,m(e.lsdevInfo),1)])])),e.lsdevError.errorFlag?(c(),u("div",Oe,[M(r,{errorMsg:e.lsdevError.errorMessage,FixButton:e.lsdevError.showFixButton,FixButtonHandler:e.lsdevError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):g("",!0)])])}var $e=b(pe,[["render",Ce]]);const Ee={props:{serverInfo:Object},setup(a){const o=I("lsdevJson"),i=y(o.rows.flat().filter(t=>t.occupied).length),e=t=>{let l={TB:1e3,GB:1};return Number(t.split(" ")[0])*l[t.split(" ")[1]]},d=i.value>0?o.rows.flat().filter(t=>t.occupied).map(t=>e(t.capacity)).reduce((t,l)=>t+l).toFixed(2):0,n=i.value>0?(o.rows.flat().filter(t=>t.occupied).map(t=>Number(t["temp-c"].replace(/[^0-9]/g,""))).reduce((t,l)=>t+l)/Number(i.value)).toFixed(2):0;return w(o,()=>{i.value=o.rows.flat().filter(t=>t.occupied).length,d.value=i.value>0?o.rows.flat().filter(t=>t.occupied).map(t=>e(t.capacity)).reduce((t,l)=>t+l).toFixed(2):0,n.value=i.value>0?(o.rows.flat().filter(t=>t.occupied).map(t=>Number(t["temp-c"].replace(/[^0-9]/g,""))).reduce((t,l)=>t+l)/Number(i.value)).toFixed(2):0}),{diskCount:i,storageCapacity:d,avgTemp:n,lsdevJson:o}}},De={class:"card mx-2 grow flex flex-col"},He=s("div",{class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[s("h3",{class:"text-lg py-1 leading-6 font-semibold"},"Server")],-1),Pe={class:"card-body dark:bg-stone-700 grow flex"},Le={class:"grow flex flex-col items-stretch"},Ne={class:"mt-0"},Je={class:"sm:divide-y sm:divide-stone-200"},Te={class:"py-2 sm:py-2 sm:grid sm:grid-cols-5 sm:gap-4"},qe=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Model ",-1),Xe={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-4"},Ue={class:"py-2 sm:py-2 sm:grid sm:grid-cols-5 sm:gap-4"},Ge=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Disk Count ",-1),Qe={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-4"},Re={class:"py-2 sm:py-2 sm:grid sm:grid-cols-5 sm:gap-4"},Ve=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Total Storage ",-1),We={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-4"},ze={key:0,class:"py-2 sm:py-2 sm:grid sm:grid-cols-5 sm:gap-4"},Ke=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Disk Temperature (avg) ",-1),Ze={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-4"},es={class:"py-2 sm:py-2 sm:grid sm:grid-cols-5 sm:gap-4"},ss={class:"text-sm font-medium text-stone-500 dark:text-stone-400"},ts=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Model ",-1),os={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"},ns=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Controller ID ",-1),is={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"},rs=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," PCI Slot ",-1),ds={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"},as=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Bus Address ",-1),cs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"};function ls(a,o,i,e,d,n){return c(),u("div",De,[He,s("div",Pe,[s("div",Le,[s("div",Ne,[s("dl",Je,[s("div",Te,[qe,s("dd",Xe,m(i.serverInfo.Model),1)]),s("div",Ue,[Ge,s("dd",Qe,m(e.diskCount),1)]),s("div",Re,[Ve,s("dd",We,m(e.storageCapacity)+" GB ",1)]),e.avgTemp!=0?(c(),u("div",ze,[Ke,s("dd",Ze,m(e.avgTemp)+" \xB0C / "+m((e.avgTemp*(9/5)+32).toFixed(2))+" \xB0F ",1)])):g("",!0),(c(!0),u(H,null,P(i.serverInfo.HBA,r=>(c(),u("div",es,[s("dt",ss," HBA"+m(r.Ctl+1),1),s("div",null,[ts,s("dd",os,m(r.Model),1)]),s("div",null,[ns,s("dd",is,m(r.Ctl),1)]),s("div",null,[rs,s("dd",ds,m(r["PCI Slot"]),1)]),s("div",null,[as,s("dd",cs,m(r["Bus Address"]),1)])]))),256))])])])])])}var ms=b(Ee,[["render",ls]]);const us={components:{RefreshIconOutline:L},props:{diskInfo:Object},setup(a){const o=I("currentDisk"),i=y("Click on a disk for more detail."),e=B({}),d=I("lsdevJson"),n=()=>{if(!o.value)return;const r=d.rows.flat().filter(t=>t.occupied).find(t=>t["bay-id"]===o.value);if(!r){console.log(`Unable to find info for disk in slot "${o.value}"`),o.value="";return}Object.assign(e,r)};return w(o,n),w(d,n),{wMsg:i,currentDisk:o,diskObj:e,lsdevJson:d}}},fs={class:"card m-2 flex-auto flex flex-col min-w-[35%]"},gs=s("div",{class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[s("h3",{class:"text-lg leading-6 font-semibold"},"Disk Information")],-1),_s={class:"card-body dark:bg-stone-700 grow flex flex-col"},xs={key:0},hs={class:"grow flex items-start justify-evenly"},vs={class:"m-2 flex flex-col"},ps={class:"sm:divide-y sm:divide-stone-200"},ys={class:"py-2 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4"},ks=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Drive Slot ",-1),bs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 col-span-2"},Bs={class:"sm:divide-y sm:divide-stone-200"},ws={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},As=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Disk Type ",-1),Is={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Ys={class:"sm:divide-y sm:divide-stone-200"},Ms={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Ss=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Device Path (sd) ",-1),Fs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},js={class:"sm:divide-y sm:divide-stone-200"},Os={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Cs=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Device Path (by-path) ",-1),$s={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Es={class:"sm:divide-y sm:divide-stone-200"},Ds={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Hs=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Partition Count ",-1),Ps={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Ls={key:0,class:"sm:divide-y sm:divide-stone-200"},Ns={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Js=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Model Family ",-1),Ts={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},qs={key:1,class:"sm:divide-y sm:divide-stone-200"},Xs={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Us=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Model Name ",-1),Gs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Qs={class:"sm:divide-y sm:divide-stone-200"},Rs={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Vs=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Serial ",-1),Ws={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},zs={class:"m-2 flex flex-col"},Ks={class:"sm:divide-y sm:divide-stone-200"},Zs={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},et=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Capacity ",-1),st={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},tt={key:0,class:"sm:divide-y sm:divide-stone-200"},ot={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},nt=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Firmware Version ",-1),it={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},rt={key:1,class:"sm:divide-y sm:divide-stone-200"},dt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},at=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Rotation Rate ",-1),ct={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},lt={key:2,class:"sm:divide-y sm:divide-stone-200"},mt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},ut=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Start/Stop count ",-1),ft={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},gt={key:3,class:"sm:divide-y sm:divide-stone-200"},_t={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},xt=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Power Cycle Count ",-1),ht={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},vt={class:"sm:divide-y sm:divide-stone-200"},pt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},yt=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Temperature ",-1),kt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},bt={key:4,class:"sm:divide-y sm:divide-stone-200"},Bt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},wt=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Current Pending Sector ",-1),At={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},It={key:5,class:"sm:divide-y sm:divide-stone-200"},Yt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Mt=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Offline-Uncorrectable ",-1),St={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Ft={class:"sm:divide-y sm:divide-stone-200"},jt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Ot=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Power On Time ",-1),Ct={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},$t={class:"sm:divide-y sm:divide-stone-200"},Et={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Dt=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Health ",-1),Ht={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Pt={key:1,class:"grow flex justify-center items-center"},Lt={class:"p-5 bg-stone-100 dark:bg-stone-600 rounded-lg text-stone-500 dark:text-stone-300"};function Nt(a,o,i,e,d,n){return c(),u("div",fs,[gs,s("div",_s,[e.currentDisk?(c(),u("div",xs,[s("div",hs,[s("div",vs,[s("dl",ps,[s("div",ys,[ks,s("dd",bs,m(e.diskObj["bay-id"]),1)])]),s("dl",Bs,[s("div",ws,[As,s("dd",Is,m(e.diskObj.disk_type),1)])]),s("dl",Ys,[s("div",Ms,[Ss,s("dd",Fs,m(e.diskObj.dev),1)])]),s("dl",js,[s("div",Os,[Cs,s("dd",$s,m(e.diskObj["dev-by-path"]),1)])]),s("dl",Es,[s("div",Ds,[Hs,s("dd",Ps,m(e.diskObj.partitions),1)])]),e.diskObj["model-family"]&&!["?"].includes(e.diskObj["model-family"])?(c(),u("dl",Ls,[s("div",Ns,[Js,s("dd",Ts,m(e.diskObj["model-family"]),1)])])):g("",!0),e.diskObj["model-name"]&&!["?"].includes(e.diskObj["model-name"])?(c(),u("dl",qs,[s("div",Xs,[Us,s("dd",Gs,m(e.diskObj["model-name"]),1)])])):g("",!0),s("dl",Qs,[s("div",Rs,[Vs,s("dd",Ws,m(e.diskObj.serial),1)])])]),s("div",zs,[s("dl",Ks,[s("div",Zs,[et,s("dd",st,m(e.diskObj.capacity),1)])]),e.diskObj["firm-ver"]&&!["?"].includes(e.diskObj["firm-ver"])?(c(),u("dl",tt,[s("div",ot,[nt,s("dd",it,m(e.diskObj["firm-ver"]),1)])])):g("",!0),e.diskObj["rotation-rate"]!=0?(c(),u("dl",rt,[s("div",dt,[at,s("dd",ct,m(e.diskObj["rotation-rate"]),1)])])):g("",!0),e.diskObj["start-stop-count"]&&!["?"].includes(e.diskObj["start-stop-count"])?(c(),u("dl",lt,[s("div",mt,[ut,s("dd",ft,m(e.diskObj["start-stop-count"]),1)])])):g("",!0),e.diskObj["power-cycle-count"]&&!["?"].includes(e.diskObj["power-cycle-count"])?(c(),u("dl",gt,[s("div",_t,[xt,s("dd",ht,m(e.diskObj["power-cycle-count"]),1)])])):g("",!0),s("dl",vt,[s("div",pt,[yt,s("dd",kt,m(e.diskObj["temp-c"].replace(/[^0-9]/g,""))+" \xB0C / "+m((e.diskObj["temp-c"].replace(/[^0-9]/g,"")*(9/5)+32).toFixed(1))+" \xB0F ",1)])]),e.diskObj["current-pending-sector"]&&!["?",0,"0"].includes(e.diskObj["current-pending-sector"])?(c(),u("dl",bt,[s("div",Bt,[wt,s("dd",At,m(e.diskObj["current-pending-sector"]),1)])])):g("",!0),e.diskObj["offline-uncorrectable"]&&!["?",0,"0"].includes(e.diskObj["offline-uncorrectable"])?(c(),u("dl",It,[s("div",Yt,[Mt,s("dd",St,m(e.diskObj["offline-uncorrectable"]),1)])])):g("",!0),s("dl",Ft,[s("div",jt,[Ot,s("dd",Ct,m(e.diskObj["power-on-time"]),1)])]),s("dl",$t,[s("div",Et,[Dt,s("dd",Ht,m(e.diskObj.health),1)])])])])])):(c(),u("div",Pt,[s("div",Lt,m(e.wMsg),1)]))])])}var Jt=b(us,[["render",Nt]]);const p={chassis:{path:"img/2u-stornado/2u-stornado-chassis.png",image:null},disks:{default:{path:"img/disks/ssd-generic-2u.png",image:null},micron5200:{path:"img/disks/ssd-micron-2u.png",image:null},micron5300:{path:"img/disks/ssd-micron-5300-2u.png",image:null},seagate:{path:"img/disks/ssd-seagate-2u.png",image:null},seagateSas:{path:"img/disks/ssd-seagate-sas-2u.png",image:null}}},v=[{x:101,y:30,BAY:"1-1",occupied:!1,image:null},{x:123,y:30,BAY:"1-2",occupied:!1,image:null},{x:177,y:30,BAY:"1-3",occupied:!1,image:null},{x:200,y:30,BAY:"1-4",occupied:!1,image:null},{x:223,y:30,BAY:"1-5",occupied:!1,image:null},{x:246,y:30,BAY:"1-6",occupied:!1,image:null},{x:299,y:30,BAY:"1-7",occupied:!1,image:null},{x:322,y:30,BAY:"1-8",occupied:!1,image:null},{x:347,y:30,BAY:"1-9",occupied:!1,image:null},{x:369,y:30,BAY:"1-10",occupied:!1,image:null},{x:423,y:30,BAY:"1-11",occupied:!1,image:null},{x:446,y:30,BAY:"1-12",occupied:!1,image:null},{x:468,y:30,BAY:"1-13",occupied:!1,image:null},{x:491,y:30,BAY:"1-14",occupied:!1,image:null},{x:545,y:30,BAY:"1-15",occupied:!1,image:null},{x:568,y:30,BAY:"1-16",occupied:!1,image:null},{x:592,y:30,BAY:"2-1",occupied:!1,image:null},{x:615,y:30,BAY:"2-2",occupied:!1,image:null},{x:669,y:30,BAY:"2-3",occupied:!1,image:null},{x:692,y:30,BAY:"2-4",occupied:!1,image:null},{x:714,y:30,BAY:"2-5",occupied:!1,image:null},{x:737,y:30,BAY:"2-6",occupied:!1,image:null},{x:791,y:30,BAY:"2-7",occupied:!1,image:null},{x:814,y:30,BAY:"2-8",occupied:!1,image:null},{x:839,y:30,BAY:"2-9",occupied:!1,image:null},{x:861,y:30,BAY:"2-10",occupied:!1,image:null},{x:915,y:30,BAY:"2-11",occupied:!1,image:null},{x:938,y:30,BAY:"2-12",occupied:!1,image:null},{x:961,y:30,BAY:"2-13",occupied:!1,image:null},{x:984,y:30,BAY:"2-14",occupied:!1,image:null},{x:1037,y:30,BAY:"2-15",occupied:!1,image:null},{x:1060,y:30,BAY:"2-16",occupied:!1,image:null}],Tt={name:"P5Stornado2U",setup(){const a=y({}),o=I("currentDisk"),i=I("lsdevJson");w(i,()=>{a.value=i,a.value.rows.flat().forEach(n=>{const r=v.findIndex(t=>t.BAY===n["bay-id"]);v[r].occupied=n.occupied,v[r].image=e(n.occupied,n["model-name"],n["model-family"])})},{immediate:!0,deep:!0});function e(n,r,t){return n?/Seagate Nytro/.test(t)?p.disks.seagate.image:/SEAGATE XS400LE10003/.test(r)?p.disks.seagateSas.image:/Micron_5100_|Micron_5200_/.test(r)?p.disks.micron5200.image:/Micron_5300_/.test(r)?p.disks.micron5300.image:p.disks.default.image:null}const d=function(n){n.preload=r=>{p.chassis.image=n.loadImage(p.chassis.path),Object.entries(p.disks).forEach(([t,l])=>{p.disks[t].image=n.loadImage(l.path)}),a.value.rows.flat().forEach(t=>{const l=v.findIndex(f=>f.BAY===t["bay-id"]);v[l].occupied=t.occupied,v[l].image=e(t.occupied,t["model-name"],t["model-family"])})},n.setup=r=>{n.createCanvas(p.chassis.image.width,p.chassis.image.height).parent("p5-stornado2u")},n.draw=r=>{if(n.image(p.chassis.image,0,0),v.forEach(t=>{t.occupied&&n.image(t.image,t.x,t.y)}),o.value){let t=v.findIndex(l=>l.BAY===o.value);v[t].image&&(n.fill(255,255,255,50),n.stroke(206,242,212),n.strokeWeight(2),n.rect(v[t].x,v[t].y,v[t].image.width,v[t].image.height))}},n.mouseClicked=r=>{let t=n.mouseX,l=n.mouseY;v.forEach(f=>{f.occupied&&t>f.x&&t<f.x+f.image.width&&l>f.y&&l<f.y+f.image.height&&(o.value=f.BAY)})}};return N(()=>{new C(d)}),{diskInfoObj:a,currentDisk:o,lsdevJson:i}}},qt={id:"p5-stornado2u",class:"m-2"};function Xt(a,o,i,e,d,n){return c(),u("div",qt)}var Ut=b(Tt,[["render",Xt]]);const x={chassis:{path:"img/q30/q30-storinator.png",image:null},fade:{path:"img/q30/chassis-fade.png",image:null},disks:{default:{path:"img/disks/caddy-generic.png",image:null},micron5200:{path:"img/disks/caddy-micron.png",image:null},micron5300:{path:"img/disks/caddy-micron-5300.png",image:null},seagate:{path:"img/disks/caddy-seagate.png",image:null},seagateSas:{path:"img/disks/caddy-seagate-sas.png",image:null}}},h=[{x:459,y:197,BAY:"1-1",occupied:!1,image:null},{x:427,y:197,BAY:"1-2",occupied:!1,image:null},{x:394,y:197,BAY:"1-3",occupied:!1,image:null},{x:362,y:197,BAY:"1-4",occupied:!1,image:null},{x:330,y:197,BAY:"1-5",occupied:!1,image:null},{x:298,y:197,BAY:"1-6",occupied:!1,image:null},{x:266,y:197,BAY:"1-7",occupied:!1,image:null},{x:234,y:197,BAY:"1-8",occupied:!1,image:null},{x:202,y:197,BAY:"1-9",occupied:!1,image:null},{x:170,y:197,BAY:"1-10",occupied:!1,image:null},{x:138,y:197,BAY:"1-11",occupied:!1,image:null},{x:106,y:197,BAY:"1-12",occupied:!1,image:null},{x:74,y:197,BAY:"1-13",occupied:!1,image:null},{x:42,y:197,BAY:"1-14",occupied:!1,image:null},{x:10,y:197,BAY:"1-15",occupied:!1,image:null},{x:459,y:33,BAY:"2-1",occupied:!1,image:null},{x:427,y:33,BAY:"2-2",occupied:!1,image:null},{x:394,y:33,BAY:"2-3",occupied:!1,image:null},{x:362,y:33,BAY:"2-4",occupied:!1,image:null},{x:330,y:33,BAY:"2-5",occupied:!1,image:null},{x:298,y:33,BAY:"2-6",occupied:!1,image:null},{x:266,y:33,BAY:"2-7",occupied:!1,image:null},{x:234,y:33,BAY:"2-8",occupied:!1,image:null},{x:202,y:33,BAY:"2-9",occupied:!1,image:null},{x:170,y:33,BAY:"2-10",occupied:!1,image:null},{x:138,y:33,BAY:"2-11",occupied:!1,image:null},{x:106,y:33,BAY:"2-12",occupied:!1,image:null},{x:74,y:33,BAY:"2-13",occupied:!1,image:null},{x:42,y:33,BAY:"2-14",occupied:!1,image:null},{x:10,y:33,BAY:"2-15",occupied:!1,image:null}],Gt={name:"P5StorinatorQ30",setup(){const a=y({}),o=I("currentDisk"),i=I("lsdevJson");w(i,()=>{a.value=i,a.value.rows.flat().forEach(n=>{const r=h.findIndex(t=>t.BAY===n["bay-id"]);h[r].occupied=n.occupied,h[r].image=e(n.occupied,n["model-name"],n["model-family"])})},{immediate:!0,deep:!0});function e(n,r,t){return n?/Seagate Nytro/.test(t)?x.disks.seagate.image:/SEAGATE XS400LE10003/.test(r)?x.disks.seagateSas.image:/Micron_5100_|Micron_5200_/.test(r)?x.disks.micron5200.image:/Micron_5300_/.test(r)?x.disks.micron5300.image:x.disks.default.image:null}const d=function(n){n.preload=r=>{x.chassis.image=n.loadImage(x.chassis.path),x.fade.image=n.loadImage(x.fade.path),Object.entries(x.disks).forEach(([t,l])=>{x.disks[t].image=n.loadImage(l.path)}),a.value.rows.flat().forEach(t=>{const l=h.findIndex(f=>f.BAY===t["bay-id"]);h[l].occupied=t.occupied,h[l].image=e(t.occupied,t["model-name"],t["model-family"])})},n.setup=r=>{n.createCanvas(x.chassis.image.width,x.chassis.image.height+x.fade.image.height).parent("p5-q30-storinator"),n.image(x.fade.image,0,0),h.forEach(l=>{l.y+=x.fade.image.height})},n.draw=r=>{if(n.image(x.chassis.image,0,x.fade.image.height),h.forEach(t=>{t.occupied&&n.image(t.image,t.x,t.y)}),o.value){let t=h.findIndex(l=>l.BAY===o.value);h[t].image&&(n.fill(255,255,255,50),n.stroke(206,242,212),n.strokeWeight(2),n.rect(h[t].x,h[t].y,h[t].image.width,h[t].image.height))}},n.mouseClicked=r=>{let t=n.mouseX,l=n.mouseY;h.forEach(f=>{f.occupied&&t>f.x&&t<f.x+f.image.width&&l>f.y&&l<f.y+f.image.height&&(o.value=f.BAY)})}};return N(()=>{new C(d)}),{diskInfoObj:a,currentDisk:o,lsdevJson:i}}},Qt={id:"p5-q30-storinator",class:"m-2"};function Rt(a,o,i,e,d,n){return c(),u("div",Qt)}var Vt=b(Gt,[["render",Rt]]);const Wt={components:{P5Stornado2U:Ut,P5StorinatorQ30:Vt},props:{serverInfo:Object},setup(a){const o=y(a.serverInfo.Model);return console.log(o),{serverModel:o}}},zt={class:"card m-2 mx-auto"},Kt=s("div",{class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[s("h3",{class:"text-lg leading-6 font-semibold"},"Disk Viewer")],-1),Zt={class:"card-body dark:bg-stone-700 flex-auto flex flex-col items-center content-center p-0"};function eo(a,o,i,e,d,n){const r=k("P5Stornado2U"),t=k("P5StorinatorQ30");return c(),u("div",zt,[Kt,s("div",Zt,[e.serverModel.split("-")[0]==="Stornado"&&e.serverModel.split("-")[1]==="2U"?(c(),A(r,{key:0})):e.serverModel.split("-")[0]==="Storinator"&&e.serverModel.split("-")[1]==="Q30"?(c(),A(t,{key:1})):g("",!0)])])}var so=b(Wt,[["render",eo]]);const to={name:"App",components:{P5Canvas:ae,FfdHeader:ne,DebugBox:$e,ServerSection:ms,DiskSection:Jt,CanvasSection:so,ErrorMessage:J},setup(){const a=y("");O("currentDisk",a);const o=y("");O("lsdevState",o);const i=B({lsdevDuration:5});O("lsdevJson",i);const e=_=>new Promise(Y=>setTimeout(Y,_*1e3)),d=B({serverInfo:{content:B({}),finished:!1,failed:!1,errorMessage:[],fixAvailable:!1,fixHandler:()=>{console.log("Default handler was run for the fix button.")}},lsdev:{content:B({}),finished:!1,failed:!1,errorMessage:[],fixAvailable:!1,fixHandler:()=>{console.log("Default handler was run for the fix button.")}}}),n=async()=>{try{const _=await S(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let Y=JSON.parse(_.stdout);d.serverInfo.content=Y,d.serverInfo.finished=!0,d.serverInfo.failed=!1,d.serverInfo.fixAvailable=!1}catch(_){console.log(_),d.serverInfo.content=null,d.serverInfo.finished=!1,d.serverInfo.failed=!0,d.serverInfo.fixAvailable=!1,d.serverInfo.errorMessage.length=0,d.serverInfo.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),d.serverInfo.errorMessage.push(_.stderr)}},r=async()=>{try{const _=await S(["/opt/45drives/tools/lsdev","--json"],{err:"out",superuser:"require",promise:!0});let Y=JSON.parse(_.stdout);return!i.hasOwnProperty("rows")||Y.rows.flat().filter(F=>F.occupied).length!=i.rows.flat().filter(F=>F.occupied).length?(console.log("result and lsdevJson differed"),Object.assign(i,Y),d.lsdev.content=i,d.lsdev.finished=!0,d.lsdev.failed=!1,d.lsdev.fixAvailable=!1,!0):!1}catch(_){return console.log(_),d.lsdev.content=null,d.lsdev.finished=!1,d.lsdev.failed=!0,d.lsdev.fixAvailable=!1,d.lsdev.errorMessage.length=0,d.lsdev.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),d.lsdev.errorMessage.push(_.stderr),!1}},t=async()=>{await n(),await r()},l=async _=>{for(await e(_);await r();)console.log(`Waited ${_}s`),console.log("running lsdev again."),await e(_)},f=cockpit.file("/usr/share/cockpit/45drives-disks-vue/udev/state");return f.watch(async function(_){o.value=_,console.log("udev state updated: ",o.value),await r()&&(console.log("runLsdev resulted in updated information, running retryLsdev"),l(i.lsdevDuration.toFixed(2)*2))}),t(),{preloadChecks:d,runServerInfo:n,runLsdev:r,udevState:f,lsdevJson:i,retryLsdev:l}}},oo={id:"App"},no={class:"h-screen flex flex-col overflow-hidden"},io={class:"flex flex-wrap overflow-y-auto"},ro={class:"flex p-2 grow flex-wrap"},ao={class:"flex p-2 mx-auto grow flex-col items-stretch"},co={class:"flex-auto flex items-center justify-evenly mt-2 mx-2"},lo={key:0,class:"p-2 m-2"},mo={key:1,class:"p-2 m-2"};function uo(a,o,i,e,d,n){const r=k("FfdHeader"),t=k("CanvasSection"),l=k("DiskSection"),f=k("ServerSection"),_=k("ErrorMessage");return c(),u("div",oo,[s("div",no,[M(r,{moduleName:"Disks",centerName:""}),s("div",io,[s("div",ro,[e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(c(),A(t,{key:0,serverInfo:e.preloadChecks.serverInfo.content},null,8,["serverInfo"])):g("",!0),e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(c(),A(l,{key:1})):g("",!0)]),s("div",ao,[e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(c(),A(f,{key:0,serverInfo:e.preloadChecks.serverInfo.content},null,8,["serverInfo"])):g("",!0)])]),s("div",co,[e.preloadChecks.serverInfo.failed?(c(),u("div",lo,[M(_,{errorMsg:e.preloadChecks.serverInfo.errorMessage,FixButton:e.preloadChecks.serverInfo.fixAvailable,FixButtonHandler:e.preloadChecks.serverInfo.fixHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):g("",!0),e.preloadChecks.lsdev.failed?(c(),u("div",mo,[M(_,{errorMsg:e.preloadChecks.lsdev.errorMessage,FixButton:e.preloadChecks.lsdev.fixAvailable,FixButtonHandler:e.preloadChecks.lsdev.fixHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):g("",!0)])])])}var fo=b(to,[["render",uo]]);R(fo).mount("#app");
