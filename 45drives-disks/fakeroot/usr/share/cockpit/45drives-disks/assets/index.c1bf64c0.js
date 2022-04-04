var X=Object.defineProperty;var P=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var H=(d,o,a)=>o in d?X(d,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):d[o]=a,$=(d,o)=>{for(var a in o||(o={}))W.call(o,a)&&H(d,a,o[a]);if(P)for(var a of P(o))U.call(o,a)&&H(d,a,o[a]);return d};import{r as k,w,a as V,b as G,c as B,o as l,d as f,e as t,n as L,t as u,f as g,g as S,P as O,h as Q,i as F,F as N,j as T,k as I,l as J,m as Y,p as R,q as D,s as E,u as z}from"./vendor.217916d3.js";const K=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(r){if(r.ep)return;r.ep=!0;const i=a(r);fetch(r.href,i)}};K();var A=(d,o)=>{const a=d.__vccOpts||d;for(const[e,r]of o)a[e]=r;return a};const Z={props:{moduleName:String,centerName:Boolean},setup(d){const o=k(!0);function a(){let e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,r=localStorage.getItem("color-theme");return r===null?e:r==="dark"}return o.value=a(),o.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),w(()=>o.value,(e,r)=>{localStorage.setItem("color-theme",e?"dark":"light"),e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},{lazy:!1}),{darkMode:o}},components:{SunIcon:V,MoonIcon:G}},ee={class:"p-2 flex items-baseline justify-between bg-neutral-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-gray-700",style:{"font-family":"Red Hat Text",position:"relative"}},se={class:"flex flex-row items-baseline basis-10"},te=["src"],oe={class:"text-2xl"},ie=t("span",{class:"text-gray-800 dark:text-red-600"},"Drives",-1),ne={key:0,class:"ml-5 text-red-800 dark:text-white text-2xl"};function ae(d,o,a,e,r,i){const n=B("SunIcon"),s=B("MoonIcon");return l(),f("div",ee,[t("div",se,[t("img",{class:"w-6 h-6 text-gray-50 mr-0.5 self-center",src:e.darkMode?"img/45d-fan-dark.svg":"img/45d-fan-light.svg"},null,8,te),t("h1",oe,[t("span",{class:"text-red-800 dark:text-white font-bold",style:L({"font-family":"Source Sans Pro","font-size":"1.6rem"})},"45",4),ie]),a.centerName?g("",!0):(l(),f("h1",ne,u(a.moduleName),1))]),a.centerName?(l(),f("h1",{key:0,class:"text-red-800 dark:text-white text-2xl",style:L({position:"absolute",left:"50%",top:"50%",transform:"translateX(-50%) translateY(-50%)"})},u(a.moduleName),5)):g("",!0),t("button",{onClick:o[0]||(o[0]=c=>e.darkMode=!e.darkMode),id:"theme-toggle",type:"button",class:"text-gray-500 dark:text-gray-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none rounded-lg text-sm p-2.5 justify-self-end w-10 h-10 basis-10"},[e.darkMode?(l(),S(n,{key:0})):(l(),S(s,{key:1}))])])}var re=A(Z,[["render",ae]]);const de={name:"P5Canvas",mounted(){const d=function(o){var a=2,e=35;o.setup=r=>{o.createCanvas(570,900).parent("p5-canvas")},o.draw=r=>{o.background(245);const i=o.frameCount*3,n=o.sin(o.radians(i))*50;o.push(),o.translate(0,o.height/2),o.fill(66,184,131),o.stroke(53,73,94),o.strokeWeight(5),o.ellipse(e,n,50,50),o.pop(),e+=a,(e>o.width-35||e<35)&&(a*=-1)}};new O(d)}},ce={id:"p5-canvas",class:"mx-auto"};function le(d,o,a,e,r,i){return l(),f("div",ce)}var me=A(de,[["render",le]]);const ue={components:{XCircleIcon:Q},props:{errorMsg:Array,FixButton:Boolean,FixButtonHandler:Function},setup(d){const o=k(d.errorMsg),a=k(d.FixButtonHandler);return w(()=>d.FixButtonHandler,e=>{a.value=e}),{errorMsg:o,FixButtonHandler:a}}},fe={class:"flex items-center justify-evenly"},ge={class:"rounded-md bg-red-50 p-4"},xe={class:"flex"},_e={class:"flex-shrink-0"},he={class:"ml-3"},pe=t("h3",{class:"text-sm font-medium text-red-800"}," 45Drives Disks Encountered an Error ",-1),ve={class:"mt-2 text-sm text-red-700"},ye={role:"list",class:"list-disc pl-5 space-y-1 whitespace-pre"};function ke(d,o,a,e,r,i){const n=B("XCircleIcon");return l(),f("div",fe,[t("div",ge,[t("div",xe,[t("div",_e,[F(n,{class:"h-5 w-5 text-red-400","aria-hidden":"true"})]),t("div",he,[pe,t("div",ve,[t("ul",ye,[(l(!0),f(N,null,T(e.errorMsg,s=>(l(),f("li",null,u(s),1))),256))])])])])]),a.FixButton?(l(),f("button",{key:0,onClick:o[0]||(o[0]=(...s)=>e.FixButtonHandler&&e.FixButtonHandler(...s)),type:"button",class:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"}," Fix ")):g("",!0)])}var q=A(ue,[["render",ke]]);function j(d=[],o={},a="out"){const e=I({loading:!1,status:0,stdout:"",stderr:""}),r=Boolean(o.promise);o.superuser||(o.superuser="require"),o.err=a==="out"?"out":"message";async function i(){e.loading=!0,e.status=0,e.stdout="",e.stderr="",cockpit.spawn(d,o).then((n,s)=>{e.stdout=n,e.stderr=s}).catch((n,s)=>{var c;e.stderr=s!=null?s:n.message,e.status=(c=n.exit_status)!=null?c:-1}).finally(()=>{e.loading=!1})}return i(),r?new Promise((n,s)=>{w(e,()=>{e.loading||(e.status!==0?s($({},e)):n($({},e)))})}):e}const be={setup(){const d=k(),o=I({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}}),a=k(),e=I({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}});return console.log(o),console.log(e),{runServerInfo:async()=>{try{const n=await j(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let s=JSON.parse(n.stdout);console.log(s),d.value=n.stdout,o.errorFlag=!1,o.errorMessage.length=0,o.showFixButton=!1}catch(n){console.log(n),o.errorFlag=!0,o.errorMessage.length=0,o.errorMessage.push(n.stderr),o.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),o.showFixButton=!1}},runLsdev:async()=>{try{const n=await j(["/opt/45drives/tools/lsdev","--json"],{err:"out",superuser:"require",promise:!0});let s=JSON.parse(n.stdout);console.log(s),a.value=n.stdout,e.errorFlag=!1,e.errorMessage.length=0,e.showFixButton=!1}catch(n){console.log(n),e.errorFlag=!0,e.errorMessage.length=0,e.errorMessage.push(n.stderr),e.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),e.showFixButton=!1}},serverInfo:d,serverInfoError:o,lsdevInfo:a,lsdevError:e}},components:{RefreshIconOutline:J,ErrorMessage:q}},Be={class:"card m-3 grow"},Ae=t("div",{class:"card-header p-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[t("h3",{class:"text-lg leading-6 font-semibold"},"Debug Section")],-1),we={class:"card-body dark:bg-stone-700"},Ye={class:"mt-3 sm:mt-0 sm:ml-4"},Ie={key:0},Se={class:"w-3/4 m-2"},Me={class:"whitespace-pre"},Fe={key:1},je={class:"mt-3 sm:mt-0 sm:ml-4"},Oe={key:2,class:"mt-2 flex"},Ce={class:"w-3/4 m-2"},$e={class:"whitespace-pre"},Ee={key:3};function De(d,o,a,e,r,i){const n=B("ErrorMessage");return l(),f("div",Be,[Ae,t("div",we,[t("div",Ye,[t("button",{type:"button",onClick:o[0]||(o[0]=s=>e.runServerInfo()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "server_info" ')]),e.serverInfoError.errorFlag?g("",!0):(l(),f("div",Ie,[t("div",Se,[t("div",Me,u(e.serverInfo),1)])])),e.serverInfoError.errorFlag?(l(),f("div",Fe,[F(n,{errorMsg:e.serverInfoError.errorMessage,FixButton:e.serverInfoError.showFixButton,FixButtonHandler:e.serverInfoError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):g("",!0),t("div",je,[t("button",{type:"button",onClick:o[1]||(o[1]=s=>e.runLsdev()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "lsdev" ')]),e.lsdevError.errorFlag?g("",!0):(l(),f("div",Oe,[t("div",Ce,[t("div",$e,u(e.lsdevInfo),1)])])),e.lsdevError.errorFlag?(l(),f("div",Ee,[F(n,{errorMsg:e.lsdevError.errorMessage,FixButton:e.lsdevError.showFixButton,FixButtonHandler:e.lsdevError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):g("",!0)])])}var Pe=A(be,[["render",De]]);const He={props:{serverInfo:Object},setup(d){const o=Y("lsdevJson"),a=k(o.rows.flat().filter(s=>s.occupied).length),e=s=>{let c={TB:1e3,GB:1};return Number(s.split(" ")[0])*c[s.split(" ")[1]]},r=a.value>0?o.rows.flat().filter(s=>s.occupied).map(s=>e(s.capacity)).reduce((s,c)=>s+c).toFixed(2):0,i=a.value>0?(o.rows.flat().filter(s=>s.occupied).map(s=>Number(s["temp-c"].replace(/[^0-9]/g,""))).reduce((s,c)=>s+c)/Number(a.value)).toFixed(2):0;return w(o,()=>{a.value=o.rows.flat().filter(s=>s.occupied).length,r.value=a.value>0?o.rows.flat().filter(s=>s.occupied).map(s=>e(s.capacity)).reduce((s,c)=>s+c).toFixed(2):0,i.value=a.value>0?(o.rows.flat().filter(s=>s.occupied).map(s=>Number(s["temp-c"].replace(/[^0-9]/g,""))).reduce((s,c)=>s+c)/Number(a.value)).toFixed(2):0}),{diskCount:a,storageCapacity:r,avgTemp:i,lsdevJson:o}}},Le={class:"card mx-2 grow flex flex-col"},Ne=t("div",{class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[t("h3",{class:"text-lg py-1 leading-6 font-semibold"},"Server")],-1),Te={class:"card-body dark:bg-stone-700 grow flex"},Je={class:"grow flex flex-col items-stretch"},qe={class:"mt-0"},Xe={class:"sm:divide-y sm:divide-stone-200"},We={class:"py-2 sm:py-2 sm:grid sm:grid-cols-5 sm:gap-4"},Ue=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Model ",-1),Ve={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-4"},Ge={class:"py-2 sm:py-2 sm:grid sm:grid-cols-5 sm:gap-4"},Qe=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Disk Count ",-1),Re={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-4"},ze={class:"py-2 sm:py-2 sm:grid sm:grid-cols-5 sm:gap-4"},Ke=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Total Storage ",-1),Ze={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-4"},es={key:0,class:"py-2 sm:py-2 sm:grid sm:grid-cols-5 sm:gap-4"},ss=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Disk Temperature (avg) ",-1),ts={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-4"},os={class:"py-2 sm:py-2 sm:grid sm:grid-cols-5 sm:gap-4"},is={class:"text-sm font-medium text-stone-500 dark:text-stone-400"},ns=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Model ",-1),as={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"},rs=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Controller ID ",-1),ds={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"},cs=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," PCI Slot ",-1),ls={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"},ms=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Bus Address ",-1),us={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"};function fs(d,o,a,e,r,i){return l(),f("div",Le,[Ne,t("div",Te,[t("div",Je,[t("div",qe,[t("dl",Xe,[t("div",We,[Ue,t("dd",Ve,u(a.serverInfo.Model),1)]),t("div",Ge,[Qe,t("dd",Re,u(e.diskCount),1)]),t("div",ze,[Ke,t("dd",Ze,u(e.storageCapacity)+" GB ",1)]),e.avgTemp!=0?(l(),f("div",es,[ss,t("dd",ts,u(e.avgTemp)+" \xB0C / "+u((e.avgTemp*(9/5)+32).toFixed(2))+" \xB0F ",1)])):g("",!0),(l(!0),f(N,null,T(a.serverInfo.HBA,n=>(l(),f("div",os,[t("dt",is," HBA"+u(n.Ctl+1),1),t("div",null,[ns,t("dd",as,u(n.Model),1)]),t("div",null,[rs,t("dd",ds,u(n.Ctl),1)]),t("div",null,[cs,t("dd",ls,u(n["PCI Slot"]),1)]),t("div",null,[ms,t("dd",us,u(n["Bus Address"]),1)])]))),256))])])])])])}var gs=A(He,[["render",fs]]);const xs={components:{RefreshIconOutline:J},props:{diskInfo:Object},setup(d){const o=Y("currentDisk"),a=k("Click on a disk for more detail."),e=I({}),r=Y("lsdevJson"),i=()=>{if(!o.value)return;const n=r.rows.flat().filter(s=>s.occupied).find(s=>s["bay-id"]===o.value);if(!n){console.log(`Unable to find info for disk in slot "${o.value}"`),o.value="";return}Object.assign(e,n)};return w(o,i),w(r,i),{wMsg:a,currentDisk:o,diskObj:e,lsdevJson:r}}},_s={class:"card m-2 flex-auto flex flex-col min-w-[35%]"},hs=t("div",{class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[t("h3",{class:"text-lg leading-6 font-semibold"},"Disk Information")],-1),ps={class:"card-body dark:bg-stone-700 grow flex flex-col"},vs={key:0},ys={class:"grow flex items-start justify-evenly"},ks=R('<table class="table-auto"><thead><tr><th>Song</th><th>Artist</th><th>Year</th></tr></thead><tbody><tr><td>The Sliding Mr. Bones (Next Stop, Pottersville)</td><td>Malcolm Lockyer</td><td>1961</td></tr><tr><td>Witchy Woman</td><td>The Eagles</td><td>1972</td></tr><tr><td>Shining Star</td><td>Earth, Wind, and Fire</td><td>1975</td></tr></tbody></table>',1),bs={class:"m-2 flex flex-col"},Bs={class:"sm:divide-y sm:divide-stone-200"},As={class:"py-2 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4"},ws=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Drive Slot ",-1),Ys={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 col-span-2"},Is={class:"sm:divide-y sm:divide-stone-200"},Ss={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Ms=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Disk Type ",-1),Fs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},js={class:"sm:divide-y sm:divide-stone-200"},Os={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Cs=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Device Path (sd) ",-1),$s={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Es={class:"sm:divide-y sm:divide-stone-200"},Ds={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Ps=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Device Path (by-path) ",-1),Hs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Ls={class:"sm:divide-y sm:divide-stone-200"},Ns={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Ts=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Partition Count ",-1),Js={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},qs={key:0,class:"sm:divide-y sm:divide-stone-200"},Xs={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Ws=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Model Family ",-1),Us={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Vs={key:1,class:"sm:divide-y sm:divide-stone-200"},Gs={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Qs=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Model Name ",-1),Rs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},zs={class:"sm:divide-y sm:divide-stone-200"},Ks={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Zs=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Serial ",-1),et={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},st={class:"m-2 flex flex-col"},tt={class:"sm:divide-y sm:divide-stone-200"},ot={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},it=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Capacity ",-1),nt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},at={key:0,class:"sm:divide-y sm:divide-stone-200"},rt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},dt=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Firmware Version ",-1),ct={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},lt={key:1,class:"sm:divide-y sm:divide-stone-200"},mt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},ut=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Rotation Rate ",-1),ft={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},gt={key:2,class:"sm:divide-y sm:divide-stone-200"},xt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},_t=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Start/Stop count ",-1),ht={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},pt={key:3,class:"sm:divide-y sm:divide-stone-200"},vt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},yt=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Power Cycle Count ",-1),kt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},bt={class:"sm:divide-y sm:divide-stone-200"},Bt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},At=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Temperature ",-1),wt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Yt={key:4,class:"sm:divide-y sm:divide-stone-200"},It={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},St=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Current Pending Sector ",-1),Mt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Ft={key:5,class:"sm:divide-y sm:divide-stone-200"},jt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Ot=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Offline-Uncorrectable ",-1),Ct={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},$t={class:"sm:divide-y sm:divide-stone-200"},Et={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Dt=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Power On Time ",-1),Pt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Ht={class:"sm:divide-y sm:divide-stone-200"},Lt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Nt=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Health ",-1),Tt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Jt={key:1,class:"grow flex justify-center items-center"},qt={class:"p-5 bg-stone-100 dark:bg-stone-600 rounded-lg text-stone-500 dark:text-stone-300"};function Xt(d,o,a,e,r,i){return l(),f("div",_s,[hs,t("div",ps,[e.currentDisk?(l(),f("div",vs,[t("div",ys,[ks,t("div",bs,[t("dl",Bs,[t("div",As,[ws,t("dd",Ys,u(e.diskObj["bay-id"]),1)])]),t("dl",Is,[t("div",Ss,[Ms,t("dd",Fs,u(e.diskObj.disk_type),1)])]),t("dl",js,[t("div",Os,[Cs,t("dd",$s,u(e.diskObj.dev),1)])]),t("dl",Es,[t("div",Ds,[Ps,t("dd",Hs,u(e.diskObj["dev-by-path"]),1)])]),t("dl",Ls,[t("div",Ns,[Ts,t("dd",Js,u(e.diskObj.partitions),1)])]),e.diskObj["model-family"]&&!["?"].includes(e.diskObj["model-family"])?(l(),f("dl",qs,[t("div",Xs,[Ws,t("dd",Us,u(e.diskObj["model-family"]),1)])])):g("",!0),e.diskObj["model-name"]&&!["?"].includes(e.diskObj["model-name"])?(l(),f("dl",Vs,[t("div",Gs,[Qs,t("dd",Rs,u(e.diskObj["model-name"]),1)])])):g("",!0),t("dl",zs,[t("div",Ks,[Zs,t("dd",et,u(e.diskObj.serial),1)])])]),t("div",st,[t("dl",tt,[t("div",ot,[it,t("dd",nt,u(e.diskObj.capacity),1)])]),e.diskObj["firm-ver"]&&!["?"].includes(e.diskObj["firm-ver"])?(l(),f("dl",at,[t("div",rt,[dt,t("dd",ct,u(e.diskObj["firm-ver"]),1)])])):g("",!0),e.diskObj["rotation-rate"]!=0?(l(),f("dl",lt,[t("div",mt,[ut,t("dd",ft,u(e.diskObj["rotation-rate"]),1)])])):g("",!0),e.diskObj["start-stop-count"]&&!["?"].includes(e.diskObj["start-stop-count"])?(l(),f("dl",gt,[t("div",xt,[_t,t("dd",ht,u(e.diskObj["start-stop-count"]),1)])])):g("",!0),e.diskObj["power-cycle-count"]&&!["?"].includes(e.diskObj["power-cycle-count"])?(l(),f("dl",pt,[t("div",vt,[yt,t("dd",kt,u(e.diskObj["power-cycle-count"]),1)])])):g("",!0),t("dl",bt,[t("div",Bt,[At,t("dd",wt,u(e.diskObj["temp-c"].replace(/[^0-9]/g,""))+" \xB0C / "+u((e.diskObj["temp-c"].replace(/[^0-9]/g,"")*(9/5)+32).toFixed(1))+" \xB0F ",1)])]),e.diskObj["current-pending-sector"]&&!["?",0,"0"].includes(e.diskObj["current-pending-sector"])?(l(),f("dl",Yt,[t("div",It,[St,t("dd",Mt,u(e.diskObj["current-pending-sector"]),1)])])):g("",!0),e.diskObj["offline-uncorrectable"]&&!["?",0,"0"].includes(e.diskObj["offline-uncorrectable"])?(l(),f("dl",Ft,[t("div",jt,[Ot,t("dd",Ct,u(e.diskObj["offline-uncorrectable"]),1)])])):g("",!0),t("dl",$t,[t("div",Et,[Dt,t("dd",Pt,u(e.diskObj["power-on-time"]),1)])]),t("dl",Ht,[t("div",Lt,[Nt,t("dd",Tt,u(e.diskObj.health),1)])])])])])):(l(),f("div",Jt,[t("div",qt,u(e.wMsg),1)]))])])}var Wt=A(xs,[["render",Xt]]);const b={chassis:{path:"img/chassis/2u-stornado-chassis.png",image:null},disks:{default:{path:"img/disks/ssd-generic-2u.png",image:null},micron5200:{path:"img/disks/ssd-micron-2u.png",image:null},micron5300:{path:"img/disks/ssd-micron-5300-2u.png",image:null},seagate:{path:"img/disks/ssd-seagate-2u.png",image:null},seagateSas:{path:"img/disks/ssd-seagate-sas-2u.png",image:null}}},y=[{x:101,y:30,BAY:"1-1",occupied:!1,image:null},{x:123,y:30,BAY:"1-2",occupied:!1,image:null},{x:177,y:30,BAY:"1-3",occupied:!1,image:null},{x:200,y:30,BAY:"1-4",occupied:!1,image:null},{x:223,y:30,BAY:"1-5",occupied:!1,image:null},{x:246,y:30,BAY:"1-6",occupied:!1,image:null},{x:299,y:30,BAY:"1-7",occupied:!1,image:null},{x:322,y:30,BAY:"1-8",occupied:!1,image:null},{x:347,y:30,BAY:"1-9",occupied:!1,image:null},{x:369,y:30,BAY:"1-10",occupied:!1,image:null},{x:423,y:30,BAY:"1-11",occupied:!1,image:null},{x:446,y:30,BAY:"1-12",occupied:!1,image:null},{x:468,y:30,BAY:"1-13",occupied:!1,image:null},{x:491,y:30,BAY:"1-14",occupied:!1,image:null},{x:545,y:30,BAY:"1-15",occupied:!1,image:null},{x:568,y:30,BAY:"1-16",occupied:!1,image:null},{x:592,y:30,BAY:"2-1",occupied:!1,image:null},{x:615,y:30,BAY:"2-2",occupied:!1,image:null},{x:669,y:30,BAY:"2-3",occupied:!1,image:null},{x:692,y:30,BAY:"2-4",occupied:!1,image:null},{x:714,y:30,BAY:"2-5",occupied:!1,image:null},{x:737,y:30,BAY:"2-6",occupied:!1,image:null},{x:791,y:30,BAY:"2-7",occupied:!1,image:null},{x:814,y:30,BAY:"2-8",occupied:!1,image:null},{x:839,y:30,BAY:"2-9",occupied:!1,image:null},{x:861,y:30,BAY:"2-10",occupied:!1,image:null},{x:915,y:30,BAY:"2-11",occupied:!1,image:null},{x:938,y:30,BAY:"2-12",occupied:!1,image:null},{x:961,y:30,BAY:"2-13",occupied:!1,image:null},{x:984,y:30,BAY:"2-14",occupied:!1,image:null},{x:1037,y:30,BAY:"2-15",occupied:!1,image:null},{x:1060,y:30,BAY:"2-16",occupied:!1,image:null}],Ut={name:"P5Stornado2U",setup(){const d=k({}),o=Y("currentDisk"),a=Y("lsdevJson");w(a,()=>{d.value=a,d.value.rows.flat().forEach(i=>{const n=y.findIndex(s=>s.BAY===i["bay-id"]);y[n].occupied=i.occupied,y[n].image=e(i.occupied,i["model-name"],i["model-family"])})},{immediate:!0,deep:!0});function e(i,n,s){return i?/Seagate Nytro/.test(s)?b.disks.seagate.image:/SEAGATE XS400LE10003/.test(n)?b.disks.seagateSas.image:/Micron_5100_|Micron_5200_/.test(n)?b.disks.micron5200.image:/Micron_5300_/.test(n)?b.disks.micron5300.image:b.disks.default.image:null}const r=function(i){i.preload=n=>{b.chassis.image=i.loadImage(b.chassis.path),Object.entries(b.disks).forEach(([s,c])=>{b.disks[s].image=i.loadImage(c.path)}),d.value.rows.flat().forEach(s=>{const c=y.findIndex(m=>m.BAY===s["bay-id"]);y[c].occupied=s.occupied,y[c].image=e(s.occupied,s["model-name"],s["model-family"])})},i.setup=n=>{i.createCanvas(b.chassis.image.width,b.chassis.image.height).parent("p5-stornado2u")},i.draw=n=>{if(i.image(b.chassis.image,0,0),y.forEach(s=>{s.occupied&&i.image(s.image,s.x,s.y)}),o.value){let s=y.findIndex(c=>c.BAY===o.value);y[s].image&&(i.fill(255,255,255,50),i.stroke(206,242,212),i.strokeWeight(2),i.rect(y[s].x,y[s].y,y[s].image.width,y[s].image.height))}},i.mouseClicked=n=>{let s=i.mouseX,c=i.mouseY;y.forEach(m=>{m.occupied&&s>m.x&&s<m.x+m.image.width&&c>m.y&&c<m.y+m.image.height&&(o.value=m.BAY)})}};return D(()=>{new O(r)}),{diskInfoObj:d,currentDisk:o,lsdevJson:a}}},Vt={id:"p5-stornado2u",class:"m-2"};function Gt(d,o,a,e,r,i){return l(),f("div",Vt)}var Qt=A(Ut,[["render",Gt]]);const _={chassis:{path:"img/chassis/q30-storinator.png",image:null},fade:{path:"img/chassis/chassis-fade.png",image:null},disks:{default:{path:"img/disks/caddy-generic.png",image:null},micron5200:{path:"img/disks/caddy-micron.png",image:null},micron5300:{path:"img/disks/caddy-micron-5300.png",image:null},seagate:{path:"img/disks/caddy-seagate.png",image:null},seagateSas:{path:"img/disks/caddy-seagate-sas.png",image:null}}},p=[{x:459,y:197,BAY:"1-1",occupied:!1,image:null},{x:427,y:197,BAY:"1-2",occupied:!1,image:null},{x:394,y:197,BAY:"1-3",occupied:!1,image:null},{x:362,y:197,BAY:"1-4",occupied:!1,image:null},{x:330,y:197,BAY:"1-5",occupied:!1,image:null},{x:298,y:197,BAY:"1-6",occupied:!1,image:null},{x:266,y:197,BAY:"1-7",occupied:!1,image:null},{x:234,y:197,BAY:"1-8",occupied:!1,image:null},{x:202,y:197,BAY:"1-9",occupied:!1,image:null},{x:170,y:197,BAY:"1-10",occupied:!1,image:null},{x:138,y:197,BAY:"1-11",occupied:!1,image:null},{x:106,y:197,BAY:"1-12",occupied:!1,image:null},{x:74,y:197,BAY:"1-13",occupied:!1,image:null},{x:42,y:197,BAY:"1-14",occupied:!1,image:null},{x:10,y:197,BAY:"1-15",occupied:!1,image:null},{x:459,y:33,BAY:"2-1",occupied:!1,image:null},{x:427,y:33,BAY:"2-2",occupied:!1,image:null},{x:394,y:33,BAY:"2-3",occupied:!1,image:null},{x:362,y:33,BAY:"2-4",occupied:!1,image:null},{x:330,y:33,BAY:"2-5",occupied:!1,image:null},{x:298,y:33,BAY:"2-6",occupied:!1,image:null},{x:266,y:33,BAY:"2-7",occupied:!1,image:null},{x:234,y:33,BAY:"2-8",occupied:!1,image:null},{x:202,y:33,BAY:"2-9",occupied:!1,image:null},{x:170,y:33,BAY:"2-10",occupied:!1,image:null},{x:138,y:33,BAY:"2-11",occupied:!1,image:null},{x:106,y:33,BAY:"2-12",occupied:!1,image:null},{x:74,y:33,BAY:"2-13",occupied:!1,image:null},{x:42,y:33,BAY:"2-14",occupied:!1,image:null},{x:10,y:33,BAY:"2-15",occupied:!1,image:null}],Rt={name:"P5StorinatorQ30",setup(){const d=k({}),o=Y("currentDisk"),a=Y("lsdevJson");w(a,()=>{d.value=a,d.value.rows.flat().forEach(i=>{const n=p.findIndex(s=>s.BAY===i["bay-id"]);p[n].occupied=i.occupied,p[n].image=e(i.occupied,i["model-name"],i["model-family"])})},{immediate:!0,deep:!0});function e(i,n,s){return i?/Seagate Nytro/.test(s)?_.disks.seagate.image:/SEAGATE XS400LE10003/.test(n)?_.disks.seagateSas.image:/Micron_5100_|Micron_5200_/.test(n)?_.disks.micron5200.image:/Micron_5300_/.test(n)?_.disks.micron5300.image:_.disks.default.image:null}const r=function(i){i.preload=n=>{_.chassis.image=i.loadImage(_.chassis.path),_.fade.image=i.loadImage(_.fade.path),Object.entries(_.disks).forEach(([s,c])=>{_.disks[s].image=i.loadImage(c.path)}),d.value.rows.flat().forEach(s=>{const c=p.findIndex(m=>m.BAY===s["bay-id"]);p[c].occupied=s.occupied,p[c].image=e(s.occupied,s["model-name"],s["model-family"])})},i.setup=n=>{i.createCanvas(_.chassis.image.width,_.chassis.image.height+_.fade.image.height).parent("p5-q30-storinator"),i.image(_.fade.image,0,0),p.forEach(c=>{c.y+=_.fade.image.height})},i.draw=n=>{if(i.image(_.chassis.image,0,_.fade.image.height),p.forEach(s=>{s.occupied&&i.image(s.image,s.x,s.y)}),o.value){let s=p.findIndex(c=>c.BAY===o.value);p[s].image&&(i.fill(255,255,255,50),i.stroke(206,242,212),i.strokeWeight(2),i.rect(p[s].x,p[s].y,p[s].image.width,p[s].image.height))}},i.mouseClicked=n=>{let s=i.mouseX,c=i.mouseY;p.forEach(m=>{m.occupied&&s>m.x&&s<m.x+m.image.width&&c>m.y&&c<m.y+m.image.height&&(o.value=m.BAY)})}};return D(()=>{new O(r)}),{diskInfoObj:d,currentDisk:o,lsdevJson:a}}},zt={id:"p5-q30-storinator",class:"m-2"};function Kt(d,o,a,e,r,i){return l(),f("div",zt)}var Zt=A(Rt,[["render",Kt]]);const h={chassis:{path:"img/chassis/stornado.png",image:null},fade:{path:"img/chassis/chassis-fade.png",image:null},disks:{default:{path:"img/disks/ssd-generic.png",image:null},micron5200:{path:"img/disks/ssd-micron.png",image:null},micron5300:{path:"img/disks/ssd-micron-5300.png",image:null},seagate:{path:"img/disks/ssd-seagate.png",image:null},seagateSas:{path:"img/disks/ssd-seagate-sas.png",image:null}}},v=[{x:476,y:46,BAY:"1-1",occupied:!1,image:null},{x:464,y:46,BAY:"1-2",occupied:!1,image:null},{x:439,y:46,BAY:"1-3",occupied:!1,image:null},{x:428,y:46,BAY:"1-4",occupied:!1,image:null},{x:417,y:46,BAY:"1-5",occupied:!1,image:null},{x:406,y:46,BAY:"1-6",occupied:!1,image:null},{x:382,y:46,BAY:"1-7",occupied:!1,image:null},{x:371,y:46,BAY:"1-8",occupied:!1,image:null},{x:358,y:46,BAY:"1-9",occupied:!1,image:null},{x:347,y:46,BAY:"1-10",occupied:!1,image:null},{x:322,y:46,BAY:"1-11",occupied:!1,image:null},{x:311,y:46,BAY:"1-12",occupied:!1,image:null},{x:300,y:46,BAY:"1-13",occupied:!1,image:null},{x:289,y:46,BAY:"1-14",occupied:!1,image:null},{x:265,y:46,BAY:"1-15",occupied:!1,image:null},{x:254,y:46,BAY:"1-16",occupied:!1,image:null},{x:238,y:46,BAY:"2-1",occupied:!1,image:null},{x:227,y:46,BAY:"2-2",occupied:!1,image:null},{x:202,y:46,BAY:"2-3",occupied:!1,image:null},{x:191,y:46,BAY:"2-4",occupied:!1,image:null},{x:180,y:46,BAY:"2-5",occupied:!1,image:null},{x:169,y:46,BAY:"2-6",occupied:!1,image:null},{x:145,y:46,BAY:"2-7",occupied:!1,image:null},{x:134,y:46,BAY:"2-8",occupied:!1,image:null},{x:121,y:46,BAY:"2-9",occupied:!1,image:null},{x:110,y:46,BAY:"2-10",occupied:!1,image:null},{x:85,y:46,BAY:"2-11",occupied:!1,image:null},{x:74,y:46,BAY:"2-12",occupied:!1,image:null},{x:63,y:46,BAY:"2-13",occupied:!1,image:null},{x:52,y:46,BAY:"2-14",occupied:!1,image:null},{x:27,y:46,BAY:"2-15",occupied:!1,image:null},{x:16,y:46,BAY:"2-16",occupied:!1,image:null}],eo={name:"P5StorinatorQ30",setup(){const d=k({}),o=Y("currentDisk"),a=Y("lsdevJson");w(a,()=>{d.value=a,d.value.rows.flat().forEach(i=>{const n=v.findIndex(s=>s.BAY===i["bay-id"]);v[n].occupied=i.occupied,v[n].image=e(i.occupied,i["model-name"],i["model-family"])})},{immediate:!0,deep:!0});function e(i,n,s){return i?/Seagate Nytro/.test(s)?h.disks.seagate.image:/SEAGATE XS400LE10003/.test(n)?h.disks.seagateSas.image:/Micron_5100_|Micron_5200_/.test(n)?h.disks.micron5200.image:/Micron_5300_/.test(n)?h.disks.micron5300.image:h.disks.default.image:null}const r=function(i){i.preload=n=>{h.chassis.image=i.loadImage(h.chassis.path),h.fade.image=i.loadImage(h.fade.path),Object.entries(h.disks).forEach(([s,c])=>{h.disks[s].image=i.loadImage(c.path)}),d.value.rows.flat().forEach(s=>{const c=v.findIndex(m=>m.BAY===s["bay-id"]);v[c].occupied=s.occupied,v[c].image=e(s.occupied,s["model-name"],s["model-family"])})},i.setup=n=>{i.createCanvas(h.chassis.image.width,h.chassis.image.height+h.fade.image.height).parent("p5-q30-storinator"),i.image(h.fade.image,0,0),v.forEach(c=>{c.y+=h.fade.image.height})},i.draw=n=>{if(i.image(h.chassis.image,0,h.fade.image.height),v.forEach(s=>{s.occupied&&i.image(s.image,s.x,s.y)}),o.value){let s=v.findIndex(c=>c.BAY===o.value);v[s].image&&(i.fill(255,255,255,50),i.stroke(206,242,212),i.strokeWeight(2),i.rect(v[s].x,v[s].y,v[s].image.width,v[s].image.height))}},i.mouseClicked=n=>{let s=i.mouseX,c=i.mouseY;v.forEach(m=>{m.occupied&&s>m.x&&s<m.x+m.image.width&&c>m.y&&c<m.y+m.image.height&&(o.value=m.BAY)})}};return D(()=>{new O(r)}),{diskInfoObj:d,currentDisk:o,lsdevJson:a}}},so={id:"p5-q30-storinator",class:"m-2"};function to(d,o,a,e,r,i){return l(),f("div",so)}var oo=A(eo,[["render",to]]);const io={components:{P5Stornado2U:Qt,P5StorinatorQ30:Zt,P5Stornado:oo},props:{serverInfo:Object},setup(d){const o=k(d.serverInfo.Model);return console.log(o),{serverModel:o}}},no={class:"card m-2 mx-auto"},ao=t("div",{class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[t("h3",{class:"text-lg leading-6 font-semibold"},"Disk Viewer")],-1),ro={class:"card-body dark:bg-stone-700 flex-auto flex flex-col items-center content-center p-0"};function co(d,o,a,e,r,i){const n=B("P5Stornado2U"),s=B("P5StorinatorQ30"),c=B("P5Stornado");return l(),f("div",no,[ao,t("div",ro,[e.serverModel.split("-")[0]==="Stornado"&&e.serverModel.split("-")[1]==="2U"?(l(),S(n,{key:0})):e.serverModel.split("-")[0]==="Storinator"&&e.serverModel.split("-")[1]==="Q30"?(l(),S(s,{key:1})):e.serverModel.split("-")[0]==="Stornado"&&e.serverModel.split("-")[1]==="AV15"||e.serverModel.split("-")[1]==="F32"?(l(),S(c,{key:2})):g("",!0)])])}var lo=A(io,[["render",co]]);const mo={name:"App",components:{P5Canvas:me,FfdHeader:re,DebugBox:Pe,ServerSection:gs,DiskSection:Wt,CanvasSection:lo,ErrorMessage:q},setup(){const d=k("");E("currentDisk",d);const o=k("");E("lsdevState",o);const a=I({lsdevDuration:5});E("lsdevJson",a);const e=x=>new Promise(M=>setTimeout(M,x*1e3)),r=I({serverInfo:{content:I({}),finished:!1,failed:!1,errorMessage:[],fixAvailable:!1,fixHandler:()=>{console.log("Default handler was run for the fix button.")}},lsdev:{content:I({}),finished:!1,failed:!1,errorMessage:[],fixAvailable:!1,fixHandler:()=>{console.log("Default handler was run for the fix button.")}}}),i=async()=>{try{const x=await j(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let M=JSON.parse(x.stdout);r.serverInfo.content=M,r.serverInfo.finished=!0,r.serverInfo.failed=!1,r.serverInfo.fixAvailable=!1}catch(x){console.log(x),r.serverInfo.content=null,r.serverInfo.finished=!1,r.serverInfo.failed=!0,r.serverInfo.fixAvailable=!1,r.serverInfo.errorMessage.length=0,r.serverInfo.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),r.serverInfo.errorMessage.push(x.stderr)}},n=async()=>{try{const x=await j(["/opt/45drives/tools/lsdev","--json"],{err:"out",superuser:"require",promise:!0});let M=JSON.parse(x.stdout);return!a.hasOwnProperty("rows")||M.rows.flat().filter(C=>C.occupied).length!=a.rows.flat().filter(C=>C.occupied).length?(console.log("result and lsdevJson differed"),Object.assign(a,M),r.lsdev.content=a,r.lsdev.finished=!0,r.lsdev.failed=!1,r.lsdev.fixAvailable=!1,!0):!1}catch(x){return console.log(x),r.lsdev.content=null,r.lsdev.finished=!1,r.lsdev.failed=!0,r.lsdev.fixAvailable=!1,r.lsdev.errorMessage.length=0,r.lsdev.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),r.lsdev.errorMessage.push(x.stderr),!1}},s=async()=>{await i(),await n()},c=async x=>{for(await e(x);await n();)console.log(`Waited ${x}s`),console.log("running lsdev again."),await e(x)},m=cockpit.file("/usr/share/cockpit/45drives-disks-vue/udev/state");return m.watch(async function(x){o.value=x,console.log("udev state updated: ",o.value),await n()&&(console.log("runLsdev resulted in updated information, running retryLsdev"),c(a.lsdevDuration.toFixed(2)*2))}),s(),{preloadChecks:r,runServerInfo:i,runLsdev:n,udevState:m,lsdevJson:a,retryLsdev:c}}},uo={id:"App"},fo={class:"h-screen flex flex-col overflow-hidden"},go={class:"flex flex-wrap overflow-y-auto"},xo={class:"flex p-2 grow flex-wrap"},_o={class:"flex p-2 mx-auto grow flex-col items-stretch"},ho={class:"flex-auto flex items-center justify-evenly mt-2 mx-2"},po={key:0,class:"p-2 m-2"},vo={key:1,class:"p-2 m-2"};function yo(d,o,a,e,r,i){const n=B("FfdHeader"),s=B("CanvasSection"),c=B("DiskSection"),m=B("ServerSection"),x=B("ErrorMessage");return l(),f("div",uo,[t("div",fo,[F(n,{moduleName:"Disks",centerName:""}),t("div",go,[t("div",xo,[e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(l(),S(s,{key:0,serverInfo:e.preloadChecks.serverInfo.content},null,8,["serverInfo"])):g("",!0),e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(l(),S(c,{key:1})):g("",!0)]),t("div",_o,[e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(l(),S(m,{key:0,serverInfo:e.preloadChecks.serverInfo.content},null,8,["serverInfo"])):g("",!0)])]),t("div",ho,[e.preloadChecks.serverInfo.failed?(l(),f("div",po,[F(x,{errorMsg:e.preloadChecks.serverInfo.errorMessage,FixButton:e.preloadChecks.serverInfo.fixAvailable,FixButtonHandler:e.preloadChecks.serverInfo.fixHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):g("",!0),e.preloadChecks.lsdev.failed?(l(),f("div",vo,[F(x,{errorMsg:e.preloadChecks.lsdev.errorMessage,FixButton:e.preloadChecks.lsdev.fixAvailable,FixButtonHandler:e.preloadChecks.lsdev.fixHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):g("",!0)])])])}var ko=A(mo,[["render",yo]]);z(ko).mount("#app");
