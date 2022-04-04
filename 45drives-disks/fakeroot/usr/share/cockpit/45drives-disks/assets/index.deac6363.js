var X=Object.defineProperty;var P=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var H=(d,o,a)=>o in d?X(d,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):d[o]=a,$=(d,o)=>{for(var a in o||(o={}))U.call(o,a)&&H(d,a,o[a]);if(P)for(var a of P(o))G.call(o,a)&&H(d,a,o[a]);return d};import{r as k,w,a as Q,b as V,c as B,o as l,d as f,e as t,n as L,t as u,f as g,g as S,P as O,h as R,i as j,F as N,j as J,k as I,l as T,m as Y,p as D,q as E,s as W}from"./vendor.d6a17607.js";const z=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}};z();var A=(d,o)=>{const a=d.__vccOpts||d;for(const[e,r]of o)a[e]=r;return a};const K={props:{moduleName:String,centerName:Boolean},setup(d){const o=k(!0);function a(){let e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,r=localStorage.getItem("color-theme");return r===null?e:r==="dark"}return o.value=a(),o.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),w(()=>o.value,(e,r)=>{localStorage.setItem("color-theme",e?"dark":"light"),e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},{lazy:!1}),{darkMode:o}},components:{SunIcon:Q,MoonIcon:V}},Z={class:"p-2 flex items-baseline justify-between bg-neutral-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-gray-700",style:{"font-family":"Red Hat Text",position:"relative"}},ee={class:"flex flex-row items-baseline basis-10"},se=["src"],te={class:"text-2xl"},oe=t("span",{class:"text-gray-800 dark:text-red-600"},"Drives",-1),ne={key:0,class:"ml-5 text-red-800 dark:text-white text-2xl"};function ie(d,o,a,e,r,n){const i=B("SunIcon"),s=B("MoonIcon");return l(),f("div",Z,[t("div",ee,[t("img",{class:"w-6 h-6 text-gray-50 mr-0.5 self-center",src:e.darkMode?"img/45d-fan-dark.svg":"img/45d-fan-light.svg"},null,8,se),t("h1",te,[t("span",{class:"text-red-800 dark:text-white font-bold",style:L({"font-family":"Source Sans Pro","font-size":"1.6rem"})},"45",4),oe]),a.centerName?g("",!0):(l(),f("h1",ne,u(a.moduleName),1))]),a.centerName?(l(),f("h1",{key:0,class:"text-red-800 dark:text-white text-2xl",style:L({position:"absolute",left:"50%",top:"50%",transform:"translateX(-50%) translateY(-50%)"})},u(a.moduleName),5)):g("",!0),t("button",{onClick:o[0]||(o[0]=c=>e.darkMode=!e.darkMode),id:"theme-toggle",type:"button",class:"text-gray-500 dark:text-gray-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none rounded-lg text-sm p-2.5 justify-self-end w-10 h-10 basis-10"},[e.darkMode?(l(),S(i,{key:0})):(l(),S(s,{key:1}))])])}var ae=A(K,[["render",ie]]);const re={name:"P5Canvas",mounted(){const d=function(o){var a=2,e=35;o.setup=r=>{o.createCanvas(570,900).parent("p5-canvas")},o.draw=r=>{o.background(245);const n=o.frameCount*3,i=o.sin(o.radians(n))*50;o.push(),o.translate(0,o.height/2),o.fill(66,184,131),o.stroke(53,73,94),o.strokeWeight(5),o.ellipse(e,i,50,50),o.pop(),e+=a,(e>o.width-35||e<35)&&(a*=-1)}};new O(d)}},de={id:"p5-canvas",class:"mx-auto"};function ce(d,o,a,e,r,n){return l(),f("div",de)}var le=A(re,[["render",ce]]);const me={components:{XCircleIcon:R},props:{errorMsg:Array,FixButton:Boolean,FixButtonHandler:Function},setup(d){const o=k(d.errorMsg),a=k(d.FixButtonHandler);return w(()=>d.FixButtonHandler,e=>{a.value=e}),{errorMsg:o,FixButtonHandler:a}}},ue={class:"flex items-center justify-evenly"},fe={class:"rounded-md bg-red-50 p-4"},ge={class:"flex"},xe={class:"flex-shrink-0"},he={class:"ml-3"},_e=t("h3",{class:"text-sm font-medium text-red-800"}," 45Drives Disks Encountered an Error ",-1),pe={class:"mt-2 text-sm text-red-700"},ve={role:"list",class:"list-disc pl-5 space-y-1 whitespace-pre"};function ye(d,o,a,e,r,n){const i=B("XCircleIcon");return l(),f("div",ue,[t("div",fe,[t("div",ge,[t("div",xe,[j(i,{class:"h-5 w-5 text-red-400","aria-hidden":"true"})]),t("div",he,[_e,t("div",pe,[t("ul",ve,[(l(!0),f(N,null,J(e.errorMsg,s=>(l(),f("li",null,u(s),1))),256))])])])])]),a.FixButton?(l(),f("button",{key:0,onClick:o[0]||(o[0]=(...s)=>e.FixButtonHandler&&e.FixButtonHandler(...s)),type:"button",class:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"}," Fix ")):g("",!0)])}var q=A(me,[["render",ye]]);function F(d=[],o={},a="out"){const e=I({loading:!1,status:0,stdout:"",stderr:""}),r=Boolean(o.promise);o.superuser||(o.superuser="require"),o.err=a==="out"?"out":"message";async function n(){e.loading=!0,e.status=0,e.stdout="",e.stderr="",cockpit.spawn(d,o).then((i,s)=>{e.stdout=i,e.stderr=s}).catch((i,s)=>{var c;e.stderr=s!=null?s:i.message,e.status=(c=i.exit_status)!=null?c:-1}).finally(()=>{e.loading=!1})}return n(),r?new Promise((i,s)=>{w(e,()=>{e.loading||(e.status!==0?s($({},e)):i($({},e)))})}):e}const ke={setup(){const d=k(),o=I({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}}),a=k(),e=I({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}});return console.log(o),console.log(e),{runServerInfo:async()=>{try{const i=await F(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let s=JSON.parse(i.stdout);console.log(s),d.value=i.stdout,o.errorFlag=!1,o.errorMessage.length=0,o.showFixButton=!1}catch(i){console.log(i),o.errorFlag=!0,o.errorMessage.length=0,o.errorMessage.push(i.stderr),o.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),o.showFixButton=!1}},runLsdev:async()=>{try{const i=await F(["/opt/45drives/tools/lsdev","--json"],{err:"out",superuser:"require",promise:!0});let s=JSON.parse(i.stdout);console.log(s),a.value=i.stdout,e.errorFlag=!1,e.errorMessage.length=0,e.showFixButton=!1}catch(i){console.log(i),e.errorFlag=!0,e.errorMessage.length=0,e.errorMessage.push(i.stderr),e.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),e.showFixButton=!1}},serverInfo:d,serverInfoError:o,lsdevInfo:a,lsdevError:e}},components:{RefreshIconOutline:T,ErrorMessage:q}},be={class:"card m-3 grow"},Be=t("div",{class:"card-header p-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[t("h3",{class:"text-lg leading-6 font-semibold"},"Debug Section")],-1),Ae={class:"card-body dark:bg-stone-700"},we={class:"mt-3 sm:mt-0 sm:ml-4"},Ye={key:0},Ie={class:"w-3/4 m-2"},Se={class:"whitespace-pre"},Me={key:1},je={class:"mt-3 sm:mt-0 sm:ml-4"},Fe={key:2,class:"mt-2 flex"},Oe={class:"w-3/4 m-2"},Ce={class:"whitespace-pre"},$e={key:3};function Ee(d,o,a,e,r,n){const i=B("ErrorMessage");return l(),f("div",be,[Be,t("div",Ae,[t("div",we,[t("button",{type:"button",onClick:o[0]||(o[0]=s=>e.runServerInfo()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "server_info" ')]),e.serverInfoError.errorFlag?g("",!0):(l(),f("div",Ye,[t("div",Ie,[t("div",Se,u(e.serverInfo),1)])])),e.serverInfoError.errorFlag?(l(),f("div",Me,[j(i,{errorMsg:e.serverInfoError.errorMessage,FixButton:e.serverInfoError.showFixButton,FixButtonHandler:e.serverInfoError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):g("",!0),t("div",je,[t("button",{type:"button",onClick:o[1]||(o[1]=s=>e.runLsdev()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "lsdev" ')]),e.lsdevError.errorFlag?g("",!0):(l(),f("div",Fe,[t("div",Oe,[t("div",Ce,u(e.lsdevInfo),1)])])),e.lsdevError.errorFlag?(l(),f("div",$e,[j(i,{errorMsg:e.lsdevError.errorMessage,FixButton:e.lsdevError.showFixButton,FixButtonHandler:e.lsdevError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):g("",!0)])])}var De=A(ke,[["render",Ee]]);const Pe={props:{serverInfo:Object},setup(d){const o=Y("lsdevJson"),a=k(o.rows.flat().filter(s=>s.occupied).length),e=s=>{let c={TB:1e3,GB:1};return Number(s.split(" ")[0])*c[s.split(" ")[1]]},r=a.value>0?o.rows.flat().filter(s=>s.occupied).map(s=>e(s.capacity)).reduce((s,c)=>s+c).toFixed(2):0,n=a.value>0?(o.rows.flat().filter(s=>s.occupied).map(s=>Number(s["temp-c"].replace(/[^0-9]/g,""))).reduce((s,c)=>s+c)/Number(a.value)).toFixed(2):0;return w(o,()=>{a.value=o.rows.flat().filter(s=>s.occupied).length,r.value=a.value>0?o.rows.flat().filter(s=>s.occupied).map(s=>e(s.capacity)).reduce((s,c)=>s+c).toFixed(2):0,n.value=a.value>0?(o.rows.flat().filter(s=>s.occupied).map(s=>Number(s["temp-c"].replace(/[^0-9]/g,""))).reduce((s,c)=>s+c)/Number(a.value)).toFixed(2):0}),{diskCount:a,storageCapacity:r,avgTemp:n,lsdevJson:o}}},He={class:"card mx-2 grow flex flex-col"},Le=t("div",{class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[t("h3",{class:"text-lg py-1 leading-6 font-semibold"},"Server")],-1),Ne={class:"card-body dark:bg-stone-700 grow flex"},Je={class:"grow flex flex-col items-stretch"},Te={class:"mt-0"},qe={class:"sm:divide-y sm:divide-stone-200"},Xe={class:"py-2 sm:py-2 sm:grid sm:grid-cols-5 sm:gap-4"},Ue=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Model ",-1),Ge={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-4"},Qe={class:"py-2 sm:py-2 sm:grid sm:grid-cols-5 sm:gap-4"},Ve=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Disk Count ",-1),Re={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-4"},We={class:"py-2 sm:py-2 sm:grid sm:grid-cols-5 sm:gap-4"},ze=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Total Storage ",-1),Ke={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-4"},Ze={key:0,class:"py-2 sm:py-2 sm:grid sm:grid-cols-5 sm:gap-4"},es=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Disk Temperature (avg) ",-1),ss={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-4"},ts={class:"py-2 sm:py-2 sm:grid sm:grid-cols-5 sm:gap-4"},os={class:"text-sm font-medium text-stone-500 dark:text-stone-400"},ns=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Model ",-1),is={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"},as=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Controller ID ",-1),rs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"},ds=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," PCI Slot ",-1),cs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"},ls=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Bus Address ",-1),ms={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"};function us(d,o,a,e,r,n){return l(),f("div",He,[Le,t("div",Ne,[t("div",Je,[t("div",Te,[t("dl",qe,[t("div",Xe,[Ue,t("dd",Ge,u(a.serverInfo.Model),1)]),t("div",Qe,[Ve,t("dd",Re,u(e.diskCount),1)]),t("div",We,[ze,t("dd",Ke,u(e.storageCapacity)+" GB ",1)]),e.avgTemp!=0?(l(),f("div",Ze,[es,t("dd",ss,u(e.avgTemp)+" \xB0C / "+u((e.avgTemp*(9/5)+32).toFixed(2))+" \xB0F ",1)])):g("",!0),(l(!0),f(N,null,J(a.serverInfo.HBA,i=>(l(),f("div",ts,[t("dt",os," HBA"+u(i.Ctl+1),1),t("div",null,[ns,t("dd",is,u(i.Model),1)]),t("div",null,[as,t("dd",rs,u(i.Ctl),1)]),t("div",null,[ds,t("dd",cs,u(i["PCI Slot"]),1)]),t("div",null,[ls,t("dd",ms,u(i["Bus Address"]),1)])]))),256))])])])])])}var fs=A(Pe,[["render",us]]);const gs={components:{RefreshIconOutline:T},props:{diskInfo:Object},setup(d){const o=Y("currentDisk"),a=k("Click on a disk for more detail."),e=I({}),r=Y("lsdevJson"),n=()=>{if(!o.value)return;const i=r.rows.flat().filter(s=>s.occupied).find(s=>s["bay-id"]===o.value);if(!i){console.log(`Unable to find info for disk in slot "${o.value}"`),o.value="";return}Object.assign(e,i)};return w(o,n),w(r,n),{wMsg:a,currentDisk:o,diskObj:e,lsdevJson:r}}},xs={class:"card m-2 flex-auto flex flex-col min-w-[35%]"},hs=t("div",{class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[t("h3",{class:"text-lg leading-6 font-semibold"},"Disk Information")],-1),_s={class:"card-body dark:bg-stone-700 grow flex flex-col"},ps={key:0},vs={class:"grow flex items-start justify-evenly"},ys={class:"table-auto"},ks=t("td",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"},"Drive Slot",-1),bs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Bs=t("td",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"},"Disk Type",-1),As={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},ws=t("td",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"},"Device Path (sd)",-1),Ys={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Is=t("td",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"},"Device Path (by-path)",-1),Ss={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Ms={class:"inline-block"},js=t("td",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"},"Partition Count",-1),Fs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Os={key:0},Cs=t("td",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"},"Model Family",-1),$s={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Es={key:1},Ds=t("td",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"},"Model Name",-1),Ps={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Hs=t("td",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"},"Serial",-1),Ls={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Ns={class:"m-2 flex flex-col"},Js={class:"sm:divide-y sm:divide-stone-200"},Ts={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},qs=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Capacity ",-1),Xs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Us={key:0,class:"sm:divide-y sm:divide-stone-200"},Gs={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},Qs=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Firmware Version ",-1),Vs={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Rs={key:1,class:"sm:divide-y sm:divide-stone-200"},Ws={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},zs=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Rotation Rate ",-1),Ks={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Zs={key:2,class:"sm:divide-y sm:divide-stone-200"},et={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},st=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Start/Stop count ",-1),tt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},ot={key:3,class:"sm:divide-y sm:divide-stone-200"},nt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},it=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Power Cycle Count ",-1),at={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},rt={class:"sm:divide-y sm:divide-stone-200"},dt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},ct=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Temperature ",-1),lt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},mt={key:4,class:"sm:divide-y sm:divide-stone-200"},ut={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},ft=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Current Pending Sector ",-1),gt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},xt={key:5,class:"sm:divide-y sm:divide-stone-200"},ht={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},_t=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Offline-Uncorrectable ",-1),pt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},vt={class:"sm:divide-y sm:divide-stone-200"},yt={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},kt=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Power On Time ",-1),bt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Bt={class:"sm:divide-y sm:divide-stone-200"},At={class:"py-2 sm:py-2 sm:grid sm:grid-cols-2 sm:gap-4"},wt=t("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Health ",-1),Yt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},It={key:1,class:"grow flex justify-center items-center"},St={class:"p-5 bg-stone-100 dark:bg-stone-600 rounded-lg text-stone-500 dark:text-stone-300"};function Mt(d,o,a,e,r,n){return l(),f("div",xs,[hs,t("div",_s,[e.currentDisk?(l(),f("div",ps,[t("div",vs,[t("table",ys,[t("tbody",null,[t("tr",null,[ks,t("td",bs,u(e.diskObj["bay-id"]),1)]),t("tr",null,[Bs,t("td",As,u(e.diskObj.disk_type),1)]),t("tr",null,[ws,t("td",Ys,u(e.diskObj.dev),1)]),t("tr",null,[Is,t("td",Ss,u(e.diskObj["dev-by-path"]),1)]),t("tr",Ms,[js,t("td",Fs,u(e.diskObj.partitions),1)]),e.diskObj["model-family"]&&!["?"].includes(e.diskObj["model-family"])?(l(),f("tr",Os,[Cs,t("td",$s,u(e.diskObj["model-family"]),1)])):g("",!0),e.diskObj["model-name"]&&!["?"].includes(e.diskObj["model-name"])?(l(),f("tr",Es,[Ds,t("td",Ps,u(e.diskObj["model-name"]),1)])):g("",!0),t("tr",null,[Hs,t("td",Ls,u(e.diskObj.serial),1)])])]),t("div",Ns,[t("dl",Js,[t("div",Ts,[qs,t("dd",Xs,u(e.diskObj.capacity),1)])]),e.diskObj["firm-ver"]&&!["?"].includes(e.diskObj["firm-ver"])?(l(),f("dl",Us,[t("div",Gs,[Qs,t("dd",Vs,u(e.diskObj["firm-ver"]),1)])])):g("",!0),e.diskObj["rotation-rate"]!=0?(l(),f("dl",Rs,[t("div",Ws,[zs,t("dd",Ks,u(e.diskObj["rotation-rate"]),1)])])):g("",!0),e.diskObj["start-stop-count"]&&!["?"].includes(e.diskObj["start-stop-count"])?(l(),f("dl",Zs,[t("div",et,[st,t("dd",tt,u(e.diskObj["start-stop-count"]),1)])])):g("",!0),e.diskObj["power-cycle-count"]&&!["?"].includes(e.diskObj["power-cycle-count"])?(l(),f("dl",ot,[t("div",nt,[it,t("dd",at,u(e.diskObj["power-cycle-count"]),1)])])):g("",!0),t("dl",rt,[t("div",dt,[ct,t("dd",lt,u(e.diskObj["temp-c"].replace(/[^0-9]/g,""))+" \xB0C / "+u((e.diskObj["temp-c"].replace(/[^0-9]/g,"")*(9/5)+32).toFixed(1))+" \xB0F ",1)])]),e.diskObj["current-pending-sector"]&&!["?",0,"0"].includes(e.diskObj["current-pending-sector"])?(l(),f("dl",mt,[t("div",ut,[ft,t("dd",gt,u(e.diskObj["current-pending-sector"]),1)])])):g("",!0),e.diskObj["offline-uncorrectable"]&&!["?",0,"0"].includes(e.diskObj["offline-uncorrectable"])?(l(),f("dl",xt,[t("div",ht,[_t,t("dd",pt,u(e.diskObj["offline-uncorrectable"]),1)])])):g("",!0),t("dl",vt,[t("div",yt,[kt,t("dd",bt,u(e.diskObj["power-on-time"]),1)])]),t("dl",Bt,[t("div",At,[wt,t("dd",Yt,u(e.diskObj.health),1)])])])])])):(l(),f("div",It,[t("div",St,u(e.wMsg),1)]))])])}var jt=A(gs,[["render",Mt]]);const b={chassis:{path:"img/chassis/2u-stornado-chassis.png",image:null},disks:{default:{path:"img/disks/ssd-generic-2u.png",image:null},micron5200:{path:"img/disks/ssd-micron-2u.png",image:null},micron5300:{path:"img/disks/ssd-micron-5300-2u.png",image:null},seagate:{path:"img/disks/ssd-seagate-2u.png",image:null},seagateSas:{path:"img/disks/ssd-seagate-sas-2u.png",image:null}}},y=[{x:101,y:30,BAY:"1-1",occupied:!1,image:null},{x:123,y:30,BAY:"1-2",occupied:!1,image:null},{x:177,y:30,BAY:"1-3",occupied:!1,image:null},{x:200,y:30,BAY:"1-4",occupied:!1,image:null},{x:223,y:30,BAY:"1-5",occupied:!1,image:null},{x:246,y:30,BAY:"1-6",occupied:!1,image:null},{x:299,y:30,BAY:"1-7",occupied:!1,image:null},{x:322,y:30,BAY:"1-8",occupied:!1,image:null},{x:347,y:30,BAY:"1-9",occupied:!1,image:null},{x:369,y:30,BAY:"1-10",occupied:!1,image:null},{x:423,y:30,BAY:"1-11",occupied:!1,image:null},{x:446,y:30,BAY:"1-12",occupied:!1,image:null},{x:468,y:30,BAY:"1-13",occupied:!1,image:null},{x:491,y:30,BAY:"1-14",occupied:!1,image:null},{x:545,y:30,BAY:"1-15",occupied:!1,image:null},{x:568,y:30,BAY:"1-16",occupied:!1,image:null},{x:592,y:30,BAY:"2-1",occupied:!1,image:null},{x:615,y:30,BAY:"2-2",occupied:!1,image:null},{x:669,y:30,BAY:"2-3",occupied:!1,image:null},{x:692,y:30,BAY:"2-4",occupied:!1,image:null},{x:714,y:30,BAY:"2-5",occupied:!1,image:null},{x:737,y:30,BAY:"2-6",occupied:!1,image:null},{x:791,y:30,BAY:"2-7",occupied:!1,image:null},{x:814,y:30,BAY:"2-8",occupied:!1,image:null},{x:839,y:30,BAY:"2-9",occupied:!1,image:null},{x:861,y:30,BAY:"2-10",occupied:!1,image:null},{x:915,y:30,BAY:"2-11",occupied:!1,image:null},{x:938,y:30,BAY:"2-12",occupied:!1,image:null},{x:961,y:30,BAY:"2-13",occupied:!1,image:null},{x:984,y:30,BAY:"2-14",occupied:!1,image:null},{x:1037,y:30,BAY:"2-15",occupied:!1,image:null},{x:1060,y:30,BAY:"2-16",occupied:!1,image:null}],Ft={name:"P5Stornado2U",setup(){const d=k({}),o=Y("currentDisk"),a=Y("lsdevJson");w(a,()=>{d.value=a,d.value.rows.flat().forEach(n=>{const i=y.findIndex(s=>s.BAY===n["bay-id"]);y[i].occupied=n.occupied,y[i].image=e(n.occupied,n["model-name"],n["model-family"])})},{immediate:!0,deep:!0});function e(n,i,s){return n?/Seagate Nytro/.test(s)?b.disks.seagate.image:/SEAGATE XS400LE10003/.test(i)?b.disks.seagateSas.image:/Micron_5100_|Micron_5200_/.test(i)?b.disks.micron5200.image:/Micron_5300_/.test(i)?b.disks.micron5300.image:b.disks.default.image:null}const r=function(n){n.preload=i=>{b.chassis.image=n.loadImage(b.chassis.path),Object.entries(b.disks).forEach(([s,c])=>{b.disks[s].image=n.loadImage(c.path)}),d.value.rows.flat().forEach(s=>{const c=y.findIndex(m=>m.BAY===s["bay-id"]);y[c].occupied=s.occupied,y[c].image=e(s.occupied,s["model-name"],s["model-family"])})},n.setup=i=>{n.createCanvas(b.chassis.image.width,b.chassis.image.height).parent("p5-stornado2u")},n.draw=i=>{if(n.image(b.chassis.image,0,0),y.forEach(s=>{s.occupied&&n.image(s.image,s.x,s.y)}),o.value){let s=y.findIndex(c=>c.BAY===o.value);y[s].image&&(n.fill(255,255,255,50),n.stroke(206,242,212),n.strokeWeight(2),n.rect(y[s].x,y[s].y,y[s].image.width,y[s].image.height))}},n.mouseClicked=i=>{let s=n.mouseX,c=n.mouseY;y.forEach(m=>{m.occupied&&s>m.x&&s<m.x+m.image.width&&c>m.y&&c<m.y+m.image.height&&(o.value=m.BAY)})}};return D(()=>{new O(r)}),{diskInfoObj:d,currentDisk:o,lsdevJson:a}}},Ot={id:"p5-stornado2u",class:"m-2"};function Ct(d,o,a,e,r,n){return l(),f("div",Ot)}var $t=A(Ft,[["render",Ct]]);const h={chassis:{path:"img/chassis/q30-storinator.png",image:null},fade:{path:"img/chassis/chassis-fade.png",image:null},disks:{default:{path:"img/disks/caddy-generic.png",image:null},micron5200:{path:"img/disks/caddy-micron.png",image:null},micron5300:{path:"img/disks/caddy-micron-5300.png",image:null},seagate:{path:"img/disks/caddy-seagate.png",image:null},seagateSas:{path:"img/disks/caddy-seagate-sas.png",image:null}}},p=[{x:459,y:197,BAY:"1-1",occupied:!1,image:null},{x:427,y:197,BAY:"1-2",occupied:!1,image:null},{x:394,y:197,BAY:"1-3",occupied:!1,image:null},{x:362,y:197,BAY:"1-4",occupied:!1,image:null},{x:330,y:197,BAY:"1-5",occupied:!1,image:null},{x:298,y:197,BAY:"1-6",occupied:!1,image:null},{x:266,y:197,BAY:"1-7",occupied:!1,image:null},{x:234,y:197,BAY:"1-8",occupied:!1,image:null},{x:202,y:197,BAY:"1-9",occupied:!1,image:null},{x:170,y:197,BAY:"1-10",occupied:!1,image:null},{x:138,y:197,BAY:"1-11",occupied:!1,image:null},{x:106,y:197,BAY:"1-12",occupied:!1,image:null},{x:74,y:197,BAY:"1-13",occupied:!1,image:null},{x:42,y:197,BAY:"1-14",occupied:!1,image:null},{x:10,y:197,BAY:"1-15",occupied:!1,image:null},{x:459,y:33,BAY:"2-1",occupied:!1,image:null},{x:427,y:33,BAY:"2-2",occupied:!1,image:null},{x:394,y:33,BAY:"2-3",occupied:!1,image:null},{x:362,y:33,BAY:"2-4",occupied:!1,image:null},{x:330,y:33,BAY:"2-5",occupied:!1,image:null},{x:298,y:33,BAY:"2-6",occupied:!1,image:null},{x:266,y:33,BAY:"2-7",occupied:!1,image:null},{x:234,y:33,BAY:"2-8",occupied:!1,image:null},{x:202,y:33,BAY:"2-9",occupied:!1,image:null},{x:170,y:33,BAY:"2-10",occupied:!1,image:null},{x:138,y:33,BAY:"2-11",occupied:!1,image:null},{x:106,y:33,BAY:"2-12",occupied:!1,image:null},{x:74,y:33,BAY:"2-13",occupied:!1,image:null},{x:42,y:33,BAY:"2-14",occupied:!1,image:null},{x:10,y:33,BAY:"2-15",occupied:!1,image:null}],Et={name:"P5StorinatorQ30",setup(){const d=k({}),o=Y("currentDisk"),a=Y("lsdevJson");w(a,()=>{d.value=a,d.value.rows.flat().forEach(n=>{const i=p.findIndex(s=>s.BAY===n["bay-id"]);p[i].occupied=n.occupied,p[i].image=e(n.occupied,n["model-name"],n["model-family"])})},{immediate:!0,deep:!0});function e(n,i,s){return n?/Seagate Nytro/.test(s)?h.disks.seagate.image:/SEAGATE XS400LE10003/.test(i)?h.disks.seagateSas.image:/Micron_5100_|Micron_5200_/.test(i)?h.disks.micron5200.image:/Micron_5300_/.test(i)?h.disks.micron5300.image:h.disks.default.image:null}const r=function(n){n.preload=i=>{h.chassis.image=n.loadImage(h.chassis.path),h.fade.image=n.loadImage(h.fade.path),Object.entries(h.disks).forEach(([s,c])=>{h.disks[s].image=n.loadImage(c.path)}),d.value.rows.flat().forEach(s=>{const c=p.findIndex(m=>m.BAY===s["bay-id"]);p[c].occupied=s.occupied,p[c].image=e(s.occupied,s["model-name"],s["model-family"])})},n.setup=i=>{n.createCanvas(h.chassis.image.width,h.chassis.image.height+h.fade.image.height).parent("p5-q30-storinator"),n.image(h.fade.image,0,0),p.forEach(c=>{c.y+=h.fade.image.height})},n.draw=i=>{if(n.image(h.chassis.image,0,h.fade.image.height),p.forEach(s=>{s.occupied&&n.image(s.image,s.x,s.y)}),o.value){let s=p.findIndex(c=>c.BAY===o.value);p[s].image&&(n.fill(255,255,255,50),n.stroke(206,242,212),n.strokeWeight(2),n.rect(p[s].x,p[s].y,p[s].image.width,p[s].image.height))}},n.mouseClicked=i=>{let s=n.mouseX,c=n.mouseY;p.forEach(m=>{m.occupied&&s>m.x&&s<m.x+m.image.width&&c>m.y&&c<m.y+m.image.height&&(o.value=m.BAY)})}};return D(()=>{new O(r)}),{diskInfoObj:d,currentDisk:o,lsdevJson:a}}},Dt={id:"p5-q30-storinator",class:"m-2"};function Pt(d,o,a,e,r,n){return l(),f("div",Dt)}var Ht=A(Et,[["render",Pt]]);const _={chassis:{path:"img/chassis/stornado.png",image:null},fade:{path:"img/chassis/chassis-fade.png",image:null},disks:{default:{path:"img/disks/ssd-generic.png",image:null},micron5200:{path:"img/disks/ssd-micron.png",image:null},micron5300:{path:"img/disks/ssd-micron-5300.png",image:null},seagate:{path:"img/disks/ssd-seagate.png",image:null},seagateSas:{path:"img/disks/ssd-seagate-sas.png",image:null}}},v=[{x:476,y:46,BAY:"1-1",occupied:!1,image:null},{x:464,y:46,BAY:"1-2",occupied:!1,image:null},{x:439,y:46,BAY:"1-3",occupied:!1,image:null},{x:428,y:46,BAY:"1-4",occupied:!1,image:null},{x:417,y:46,BAY:"1-5",occupied:!1,image:null},{x:406,y:46,BAY:"1-6",occupied:!1,image:null},{x:382,y:46,BAY:"1-7",occupied:!1,image:null},{x:371,y:46,BAY:"1-8",occupied:!1,image:null},{x:358,y:46,BAY:"1-9",occupied:!1,image:null},{x:347,y:46,BAY:"1-10",occupied:!1,image:null},{x:322,y:46,BAY:"1-11",occupied:!1,image:null},{x:311,y:46,BAY:"1-12",occupied:!1,image:null},{x:300,y:46,BAY:"1-13",occupied:!1,image:null},{x:289,y:46,BAY:"1-14",occupied:!1,image:null},{x:265,y:46,BAY:"1-15",occupied:!1,image:null},{x:254,y:46,BAY:"1-16",occupied:!1,image:null},{x:238,y:46,BAY:"2-1",occupied:!1,image:null},{x:227,y:46,BAY:"2-2",occupied:!1,image:null},{x:202,y:46,BAY:"2-3",occupied:!1,image:null},{x:191,y:46,BAY:"2-4",occupied:!1,image:null},{x:180,y:46,BAY:"2-5",occupied:!1,image:null},{x:169,y:46,BAY:"2-6",occupied:!1,image:null},{x:145,y:46,BAY:"2-7",occupied:!1,image:null},{x:134,y:46,BAY:"2-8",occupied:!1,image:null},{x:121,y:46,BAY:"2-9",occupied:!1,image:null},{x:110,y:46,BAY:"2-10",occupied:!1,image:null},{x:85,y:46,BAY:"2-11",occupied:!1,image:null},{x:74,y:46,BAY:"2-12",occupied:!1,image:null},{x:63,y:46,BAY:"2-13",occupied:!1,image:null},{x:52,y:46,BAY:"2-14",occupied:!1,image:null},{x:27,y:46,BAY:"2-15",occupied:!1,image:null},{x:16,y:46,BAY:"2-16",occupied:!1,image:null}],Lt={name:"P5StorinatorQ30",setup(){const d=k({}),o=Y("currentDisk"),a=Y("lsdevJson");w(a,()=>{d.value=a,d.value.rows.flat().forEach(n=>{const i=v.findIndex(s=>s.BAY===n["bay-id"]);v[i].occupied=n.occupied,v[i].image=e(n.occupied,n["model-name"],n["model-family"])})},{immediate:!0,deep:!0});function e(n,i,s){return n?/Seagate Nytro/.test(s)?_.disks.seagate.image:/SEAGATE XS400LE10003/.test(i)?_.disks.seagateSas.image:/Micron_5100_|Micron_5200_/.test(i)?_.disks.micron5200.image:/Micron_5300_/.test(i)?_.disks.micron5300.image:_.disks.default.image:null}const r=function(n){n.preload=i=>{_.chassis.image=n.loadImage(_.chassis.path),_.fade.image=n.loadImage(_.fade.path),Object.entries(_.disks).forEach(([s,c])=>{_.disks[s].image=n.loadImage(c.path)}),d.value.rows.flat().forEach(s=>{const c=v.findIndex(m=>m.BAY===s["bay-id"]);v[c].occupied=s.occupied,v[c].image=e(s.occupied,s["model-name"],s["model-family"])})},n.setup=i=>{n.createCanvas(_.chassis.image.width,_.chassis.image.height+_.fade.image.height).parent("p5-q30-storinator"),n.image(_.fade.image,0,0),v.forEach(c=>{c.y+=_.fade.image.height})},n.draw=i=>{if(n.image(_.chassis.image,0,_.fade.image.height),v.forEach(s=>{s.occupied&&n.image(s.image,s.x,s.y)}),o.value){let s=v.findIndex(c=>c.BAY===o.value);v[s].image&&(n.fill(255,255,255,50),n.stroke(206,242,212),n.strokeWeight(2),n.rect(v[s].x,v[s].y,v[s].image.width,v[s].image.height))}},n.mouseClicked=i=>{let s=n.mouseX,c=n.mouseY;v.forEach(m=>{m.occupied&&s>m.x&&s<m.x+m.image.width&&c>m.y&&c<m.y+m.image.height&&(o.value=m.BAY)})}};return D(()=>{new O(r)}),{diskInfoObj:d,currentDisk:o,lsdevJson:a}}},Nt={id:"p5-q30-storinator",class:"m-2"};function Jt(d,o,a,e,r,n){return l(),f("div",Nt)}var Tt=A(Lt,[["render",Jt]]);const qt={components:{P5Stornado2U:$t,P5StorinatorQ30:Ht,P5Stornado:Tt},props:{serverInfo:Object},setup(d){const o=k(d.serverInfo.Model);return console.log(o),{serverModel:o}}},Xt={class:"card m-2 mx-auto"},Ut=t("div",{class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[t("h3",{class:"text-lg leading-6 font-semibold"},"Disk Viewer")],-1),Gt={class:"card-body dark:bg-stone-700 flex-auto flex flex-col items-center content-center p-0"};function Qt(d,o,a,e,r,n){const i=B("P5Stornado2U"),s=B("P5StorinatorQ30"),c=B("P5Stornado");return l(),f("div",Xt,[Ut,t("div",Gt,[e.serverModel.split("-")[0]==="Stornado"&&e.serverModel.split("-")[1]==="2U"?(l(),S(i,{key:0})):e.serverModel.split("-")[0]==="Storinator"&&e.serverModel.split("-")[1]==="Q30"?(l(),S(s,{key:1})):e.serverModel.split("-")[0]==="Stornado"&&e.serverModel.split("-")[1]==="AV15"||e.serverModel.split("-")[1]==="F32"?(l(),S(c,{key:2})):g("",!0)])])}var Vt=A(qt,[["render",Qt]]);const Rt={name:"App",components:{P5Canvas:le,FfdHeader:ae,DebugBox:De,ServerSection:fs,DiskSection:jt,CanvasSection:Vt,ErrorMessage:q},setup(){const d=k("");E("currentDisk",d);const o=k("");E("lsdevState",o);const a=I({lsdevDuration:5});E("lsdevJson",a);const e=x=>new Promise(M=>setTimeout(M,x*1e3)),r=I({serverInfo:{content:I({}),finished:!1,failed:!1,errorMessage:[],fixAvailable:!1,fixHandler:()=>{console.log("Default handler was run for the fix button.")}},lsdev:{content:I({}),finished:!1,failed:!1,errorMessage:[],fixAvailable:!1,fixHandler:()=>{console.log("Default handler was run for the fix button.")}}}),n=async()=>{try{const x=await F(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let M=JSON.parse(x.stdout);r.serverInfo.content=M,r.serverInfo.finished=!0,r.serverInfo.failed=!1,r.serverInfo.fixAvailable=!1}catch(x){console.log(x),r.serverInfo.content=null,r.serverInfo.finished=!1,r.serverInfo.failed=!0,r.serverInfo.fixAvailable=!1,r.serverInfo.errorMessage.length=0,r.serverInfo.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),r.serverInfo.errorMessage.push(x.stderr)}},i=async()=>{try{const x=await F(["/opt/45drives/tools/lsdev","--json"],{err:"out",superuser:"require",promise:!0});let M=JSON.parse(x.stdout);return!a.hasOwnProperty("rows")||M.rows.flat().filter(C=>C.occupied).length!=a.rows.flat().filter(C=>C.occupied).length?(console.log("result and lsdevJson differed"),Object.assign(a,M),r.lsdev.content=a,r.lsdev.finished=!0,r.lsdev.failed=!1,r.lsdev.fixAvailable=!1,!0):!1}catch(x){return console.log(x),r.lsdev.content=null,r.lsdev.finished=!1,r.lsdev.failed=!0,r.lsdev.fixAvailable=!1,r.lsdev.errorMessage.length=0,r.lsdev.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),r.lsdev.errorMessage.push(x.stderr),!1}},s=async()=>{await n(),await i()},c=async x=>{for(await e(x);await i();)console.log(`Waited ${x}s`),console.log("running lsdev again."),await e(x)},m=cockpit.file("/usr/share/cockpit/45drives-disks-vue/udev/state");return m.watch(async function(x){o.value=x,console.log("udev state updated: ",o.value),await i()&&(console.log("runLsdev resulted in updated information, running retryLsdev"),c(a.lsdevDuration.toFixed(2)*2))}),s(),{preloadChecks:r,runServerInfo:n,runLsdev:i,udevState:m,lsdevJson:a,retryLsdev:c}}},Wt={id:"App"},zt={class:"h-screen flex flex-col overflow-hidden"},Kt={class:"flex flex-wrap overflow-y-auto"},Zt={class:"flex p-2 grow flex-wrap"},eo={class:"flex p-2 mx-auto grow flex-col items-stretch"},so={class:"flex-auto flex items-center justify-evenly mt-2 mx-2"},to={key:0,class:"p-2 m-2"},oo={key:1,class:"p-2 m-2"};function no(d,o,a,e,r,n){const i=B("FfdHeader"),s=B("CanvasSection"),c=B("DiskSection"),m=B("ServerSection"),x=B("ErrorMessage");return l(),f("div",Wt,[t("div",zt,[j(i,{moduleName:"Disks",centerName:""}),t("div",Kt,[t("div",Zt,[e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(l(),S(s,{key:0,serverInfo:e.preloadChecks.serverInfo.content},null,8,["serverInfo"])):g("",!0),e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(l(),S(c,{key:1})):g("",!0)]),t("div",eo,[e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(l(),S(m,{key:0,serverInfo:e.preloadChecks.serverInfo.content},null,8,["serverInfo"])):g("",!0)])]),t("div",so,[e.preloadChecks.serverInfo.failed?(l(),f("div",to,[j(x,{errorMsg:e.preloadChecks.serverInfo.errorMessage,FixButton:e.preloadChecks.serverInfo.fixAvailable,FixButtonHandler:e.preloadChecks.serverInfo.fixHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):g("",!0),e.preloadChecks.lsdev.failed?(l(),f("div",oo,[j(x,{errorMsg:e.preloadChecks.lsdev.errorMessage,FixButton:e.preloadChecks.lsdev.fixAvailable,FixButtonHandler:e.preloadChecks.lsdev.fixHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):g("",!0)])])])}var io=A(Rt,[["render",no]]);W(io).mount("#app");
