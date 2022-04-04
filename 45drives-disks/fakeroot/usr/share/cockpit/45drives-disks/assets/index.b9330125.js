var X=Object.defineProperty;var P=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var H=(d,o,r)=>o in d?X(d,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):d[o]=r,$=(d,o)=>{for(var r in o||(o={}))U.call(o,r)&&H(d,r,o[r]);if(P)for(var r of P(o))G.call(o,r)&&H(d,r,o[r]);return d};import{r as y,w,a as Q,b as V,c as B,o as c,d as f,e as s,n as L,t as m,f as g,g as S,P as O,h as R,i as j,F as N,j as J,k as I,l as T,m as Y,p as D,q as E,s as W}from"./vendor.d6a17607.js";const z=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))e(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(i){if(i.ep)return;i.ep=!0;const n=r(i);fetch(i.href,n)}};z();var A=(d,o)=>{const r=d.__vccOpts||d;for(const[e,i]of o)r[e]=i;return r};const K={props:{moduleName:String,centerName:Boolean},setup(d){const o=y(!0);function r(){let e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,i=localStorage.getItem("color-theme");return i===null?e:i==="dark"}return o.value=r(),o.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),w(()=>o.value,(e,i)=>{localStorage.setItem("color-theme",e?"dark":"light"),e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},{lazy:!1}),{darkMode:o}},components:{SunIcon:Q,MoonIcon:V}},Z={class:"p-2 flex items-baseline justify-between bg-neutral-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-gray-700",style:{"font-family":"Red Hat Text",position:"relative"}},ee={class:"flex flex-row items-baseline basis-10"},te=["src"],se={class:"text-2xl"},oe=s("span",{class:"text-gray-800 dark:text-red-600"},"Drives",-1),ne={key:0,class:"ml-5 text-red-800 dark:text-white text-2xl"};function ae(d,o,r,e,i,n){const a=B("SunIcon"),t=B("MoonIcon");return c(),f("div",Z,[s("div",ee,[s("img",{class:"w-6 h-6 text-gray-50 mr-0.5 self-center",src:e.darkMode?"img/45d-fan-dark.svg":"img/45d-fan-light.svg"},null,8,te),s("h1",se,[s("span",{class:"text-red-800 dark:text-white font-bold",style:L({"font-family":"Source Sans Pro","font-size":"1.6rem"})},"45",4),oe]),r.centerName?g("",!0):(c(),f("h1",ne,m(r.moduleName),1))]),r.centerName?(c(),f("h1",{key:0,class:"text-red-800 dark:text-white text-2xl",style:L({position:"absolute",left:"50%",top:"50%",transform:"translateX(-50%) translateY(-50%)"})},m(r.moduleName),5)):g("",!0),s("button",{onClick:o[0]||(o[0]=l=>e.darkMode=!e.darkMode),id:"theme-toggle",type:"button",class:"text-gray-500 dark:text-gray-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none rounded-lg text-sm p-2.5 justify-self-end w-10 h-10 basis-10"},[e.darkMode?(c(),S(a,{key:0})):(c(),S(t,{key:1}))])])}var re=A(K,[["render",ae]]);const ie={name:"P5Canvas",mounted(){const d=function(o){var r=2,e=35;o.setup=i=>{o.createCanvas(570,900).parent("p5-canvas")},o.draw=i=>{o.background(245);const n=o.frameCount*3,a=o.sin(o.radians(n))*50;o.push(),o.translate(0,o.height/2),o.fill(66,184,131),o.stroke(53,73,94),o.strokeWeight(5),o.ellipse(e,a,50,50),o.pop(),e+=r,(e>o.width-35||e<35)&&(r*=-1)}};new O(d)}},de={id:"p5-canvas",class:"mx-auto"};function le(d,o,r,e,i,n){return c(),f("div",de)}var ce=A(ie,[["render",le]]);const ue={components:{XCircleIcon:R},props:{errorMsg:Array,FixButton:Boolean,FixButtonHandler:Function},setup(d){const o=y(d.errorMsg),r=y(d.FixButtonHandler);return w(()=>d.FixButtonHandler,e=>{r.value=e}),{errorMsg:o,FixButtonHandler:r}}},me={class:"flex items-center justify-evenly"},fe={class:"rounded-md bg-red-50 p-4"},ge={class:"flex"},xe={class:"flex-shrink-0"},he={class:"ml-3"},_e=s("h3",{class:"text-sm font-medium text-red-800"}," 45Drives Disks Encountered an Error ",-1),pe={class:"mt-2 text-sm text-red-700"},ve={role:"list",class:"list-disc pl-5 space-y-1 whitespace-pre"};function ke(d,o,r,e,i,n){const a=B("XCircleIcon");return c(),f("div",me,[s("div",fe,[s("div",ge,[s("div",xe,[j(a,{class:"h-5 w-5 text-red-400","aria-hidden":"true"})]),s("div",he,[_e,s("div",pe,[s("ul",ve,[(c(!0),f(N,null,J(e.errorMsg,t=>(c(),f("li",null,m(t),1))),256))])])])])]),r.FixButton?(c(),f("button",{key:0,onClick:o[0]||(o[0]=(...t)=>e.FixButtonHandler&&e.FixButtonHandler(...t)),type:"button",class:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"}," Fix ")):g("",!0)])}var q=A(ue,[["render",ke]]);function F(d=[],o={},r="out"){const e=I({loading:!1,status:0,stdout:"",stderr:""}),i=Boolean(o.promise);o.superuser||(o.superuser="require"),o.err=r==="out"?"out":"message";async function n(){e.loading=!0,e.status=0,e.stdout="",e.stderr="",cockpit.spawn(d,o).then((a,t)=>{e.stdout=a,e.stderr=t}).catch((a,t)=>{var l;e.stderr=t!=null?t:a.message,e.status=(l=a.exit_status)!=null?l:-1}).finally(()=>{e.loading=!1})}return n(),i?new Promise((a,t)=>{w(e,()=>{e.loading||(e.status!==0?t($({},e)):a($({},e)))})}):e}const ye={setup(){const d=y(),o=I({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}}),r=y(),e=I({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}});return console.log(o),console.log(e),{runServerInfo:async()=>{try{const a=await F(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let t=JSON.parse(a.stdout);console.log(t),d.value=a.stdout,o.errorFlag=!1,o.errorMessage.length=0,o.showFixButton=!1}catch(a){console.log(a),o.errorFlag=!0,o.errorMessage.length=0,o.errorMessage.push(a.stderr),o.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),o.showFixButton=!1}},runLsdev:async()=>{try{const a=await F(["/opt/45drives/tools/lsdev","--json"],{err:"out",superuser:"require",promise:!0});let t=JSON.parse(a.stdout);console.log(t),r.value=a.stdout,e.errorFlag=!1,e.errorMessage.length=0,e.showFixButton=!1}catch(a){console.log(a),e.errorFlag=!0,e.errorMessage.length=0,e.errorMessage.push(a.stderr),e.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),e.showFixButton=!1}},serverInfo:d,serverInfoError:o,lsdevInfo:r,lsdevError:e}},components:{RefreshIconOutline:T,ErrorMessage:q}},be={class:"card m-3 grow"},Be=s("div",{class:"card-header p-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[s("h3",{class:"text-lg leading-6 font-semibold"},"Debug Section")],-1),Ae={class:"card-body dark:bg-stone-700"},we={class:"mt-3 sm:mt-0 sm:ml-4"},Ye={key:0},Ie={class:"w-3/4 m-2"},Se={class:"whitespace-pre"},Me={key:1},je={class:"mt-3 sm:mt-0 sm:ml-4"},Fe={key:2,class:"mt-2 flex"},Oe={class:"w-3/4 m-2"},Ce={class:"whitespace-pre"},$e={key:3};function Ee(d,o,r,e,i,n){const a=B("ErrorMessage");return c(),f("div",be,[Be,s("div",Ae,[s("div",we,[s("button",{type:"button",onClick:o[0]||(o[0]=t=>e.runServerInfo()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "server_info" ')]),e.serverInfoError.errorFlag?g("",!0):(c(),f("div",Ye,[s("div",Ie,[s("div",Se,m(e.serverInfo),1)])])),e.serverInfoError.errorFlag?(c(),f("div",Me,[j(a,{errorMsg:e.serverInfoError.errorMessage,FixButton:e.serverInfoError.showFixButton,FixButtonHandler:e.serverInfoError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):g("",!0),s("div",je,[s("button",{type:"button",onClick:o[1]||(o[1]=t=>e.runLsdev()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "lsdev" ')]),e.lsdevError.errorFlag?g("",!0):(c(),f("div",Fe,[s("div",Oe,[s("div",Ce,m(e.lsdevInfo),1)])])),e.lsdevError.errorFlag?(c(),f("div",$e,[j(a,{errorMsg:e.lsdevError.errorMessage,FixButton:e.lsdevError.showFixButton,FixButtonHandler:e.lsdevError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):g("",!0)])])}var De=A(ye,[["render",Ee]]);const Pe={props:{serverInfo:Object},setup(d){const o=Y("lsdevJson"),r=y(o.rows.flat().filter(t=>t.occupied).length),e=t=>{let l={TB:1e3,GB:1};return Number(t.split(" ")[0])*l[t.split(" ")[1]]},i=r.value>0?o.rows.flat().filter(t=>t.occupied).map(t=>e(t.capacity)).reduce((t,l)=>t+l).toFixed(2):0,n=r.value>0?(o.rows.flat().filter(t=>t.occupied).map(t=>Number(t["temp-c"].replace(/[^0-9]/g,""))).reduce((t,l)=>t+l)/Number(r.value)).toFixed(2):0;return w(o,()=>{r.value=o.rows.flat().filter(t=>t.occupied).length,i.value=r.value>0?o.rows.flat().filter(t=>t.occupied).map(t=>e(t.capacity)).reduce((t,l)=>t+l).toFixed(2):0,n.value=r.value>0?(o.rows.flat().filter(t=>t.occupied).map(t=>Number(t["temp-c"].replace(/[^0-9]/g,""))).reduce((t,l)=>t+l)/Number(r.value)).toFixed(2):0}),{diskCount:r,storageCapacity:i,avgTemp:n,lsdevJson:o}}},He={class:"card mx-2 grow flex flex-col"},Le=s("div",{class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[s("h3",{class:"text-lg py-1 leading-6 font-semibold"},"Server")],-1),Ne={class:"card-body dark:bg-stone-700 grow flex"},Je={class:"grow flex flex-col items-stretch"},Te={class:"mt-0"},qe={class:"sm:divide-y sm:divide-stone-200"},Xe={class:"py-2 sm:py-2 sm:grid sm:grid-cols-5 sm:gap-4"},Ue=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Model ",-1),Ge={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-4"},Qe={class:"py-2 sm:py-2 sm:grid sm:grid-cols-5 sm:gap-4"},Ve=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Disk Count ",-1),Re={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-4"},We={class:"py-2 sm:py-2 sm:grid sm:grid-cols-5 sm:gap-4"},ze=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Total Storage ",-1),Ke={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-4"},Ze={key:0,class:"py-2 sm:py-2 sm:grid sm:grid-cols-5 sm:gap-4"},et=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Disk Temperature (avg) ",-1),tt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-4"},st={class:"py-2 sm:py-2 sm:grid sm:grid-cols-5 sm:gap-4"},ot={class:"text-sm font-medium text-stone-500 dark:text-stone-400"},nt=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Model ",-1),at={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"},rt=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Controller ID ",-1),it={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"},dt=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," PCI Slot ",-1),lt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"},ct=s("dt",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Bus Address ",-1),ut={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0 sm:col-span-1"};function mt(d,o,r,e,i,n){return c(),f("div",He,[Le,s("div",Ne,[s("div",Je,[s("div",Te,[s("dl",qe,[s("div",Xe,[Ue,s("dd",Ge,m(r.serverInfo.Model),1)]),s("div",Qe,[Ve,s("dd",Re,m(e.diskCount),1)]),s("div",We,[ze,s("dd",Ke,m(e.storageCapacity)+" GB ",1)]),e.avgTemp!=0?(c(),f("div",Ze,[et,s("dd",tt,m(e.avgTemp)+" \xB0C / "+m((e.avgTemp*(9/5)+32).toFixed(2))+" \xB0F ",1)])):g("",!0),(c(!0),f(N,null,J(r.serverInfo.HBA,a=>(c(),f("div",st,[s("dt",ot," HBA"+m(a.Ctl+1),1),s("div",null,[nt,s("dd",at,m(a.Model),1)]),s("div",null,[rt,s("dd",it,m(a.Ctl),1)]),s("div",null,[dt,s("dd",lt,m(a["PCI Slot"]),1)]),s("div",null,[ct,s("dd",ut,m(a["Bus Address"]),1)])]))),256))])])])])])}var ft=A(Pe,[["render",mt]]);const gt={components:{RefreshIconOutline:T},props:{diskInfo:Object},setup(d){const o=Y("currentDisk"),r=y("Click on a disk for more detail."),e=I({}),i=Y("lsdevJson"),n=()=>{if(!o.value)return;const a=i.rows.flat().filter(t=>t.occupied).find(t=>t["bay-id"]===o.value);if(!a){console.log(`Unable to find info for disk in slot "${o.value}"`),o.value="";return}Object.assign(e,a)};return w(o,n),w(i,n),{wMsg:r,currentDisk:o,diskObj:e,lsdevJson:i}}},xt={class:"card m-2 flex-auto flex flex-col min-w-[35%]"},ht=s("div",{class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[s("h3",{class:"text-lg leading-6 font-semibold"},"Disk Information")],-1),_t={class:"card-body dark:bg-stone-700 grow flex flex-col"},pt={key:0},vt={class:"grow flex items-start justify-evenly"},kt={class:"table-auto"},yt=s("td",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Drive Slot ",-1),bt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Bt=s("td",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Disk Type ",-1),At={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},wt=s("td",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Device Path (sd) ",-1),Yt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},It=s("td",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Device Path (by-path) ",-1),St={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Mt=s("td",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Partition Count ",-1),jt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Ft={key:0},Ot=s("td",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Model Family ",-1),Ct={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},$t={key:1},Et=s("td",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Model Name ",-1),Dt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Pt=s("td",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Serial ",-1),Ht={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Lt={class:"table-auto"},Nt=s("td",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Capacity ",-1),Jt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Tt={key:0},qt=s("td",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Firmware Version ",-1),Xt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Ut={key:1},Gt=s("td",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Rotation Rate (rpm) ",-1),Qt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},Vt={key:2},Rt=s("td",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Start/Stop Count ",-1),Wt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},zt={key:3},Kt=s("td",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Power Cycle Count ",-1),Zt={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},es=s("td",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Temperature ",-1),ts={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},ss={key:4},os=s("td",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Current Pending Sector ",-1),ns={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},as={key:5},rs=s("td",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Offline Uncorrectable ",-1),is={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},ds=s("td",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Power On Time (h) ",-1),ls={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},cs=s("td",{class:"text-sm font-medium text-stone-500 dark:text-stone-400"}," Health (smartctl) ",-1),us={class:"mt-1 text-sm text-stone-900 dark:text-stone-300 sm:mt-0"},ms={key:1,class:"grow flex justify-center items-center"},fs={class:"p-5 bg-stone-100 dark:bg-stone-600 rounded-lg text-stone-500 dark:text-stone-300"};function gs(d,o,r,e,i,n){return c(),f("div",xt,[ht,s("div",_t,[e.currentDisk?(c(),f("div",pt,[s("div",vt,[s("table",kt,[s("tbody",null,[s("tr",null,[yt,s("td",bt,m(e.diskObj["bay-id"]),1)]),s("tr",null,[Bt,s("td",At,m(e.diskObj.disk_type),1)]),s("tr",null,[wt,s("td",Yt,m(e.diskObj.dev),1)]),s("tr",null,[It,s("td",St,m(e.diskObj["dev-by-path"]),1)]),s("tr",null,[Mt,s("td",jt,m(e.diskObj.partitions),1)]),e.diskObj["model-family"]&&!["?"].includes(e.diskObj["model-family"])?(c(),f("tr",Ft,[Ot,s("td",Ct,m(e.diskObj["model-family"]),1)])):g("",!0),e.diskObj["model-name"]&&!["?"].includes(e.diskObj["model-name"])?(c(),f("tr",$t,[Et,s("td",Dt,m(e.diskObj["model-name"]),1)])):g("",!0),s("tr",null,[Pt,s("td",Ht,m(e.diskObj.serial),1)])])]),s("table",Lt,[s("tbody",null,[s("tr",null,[Nt,s("td",Jt,m(e.diskObj.capacity),1)]),e.diskObj["firm-ver"]&&!["?"].includes(e.diskObj["firm-ver"])?(c(),f("tr",Tt,[qt,s("td",Xt,m(e.diskObj["firm-ver"]),1)])):g("",!0),e.diskObj["rotation-rate"]!=0?(c(),f("tr",Ut,[Gt,s("td",Qt,m(e.diskObj["rotation-rate"]),1)])):g("",!0),e.diskObj["start-stop-count"]&&!["?"].includes(e.diskObj["start-stop-count"])?(c(),f("tr",Vt,[Rt,s("td",Wt,m(e.diskObj["start-stop-count"]),1)])):g("",!0),e.diskObj["power-cycle-count"]&&!["?"].includes(e.diskObj["power-cycle-count"])?(c(),f("tr",zt,[Kt,s("td",Zt,m(e.diskObj["power-cycle-count"]),1)])):g("",!0),s("tr",null,[es,s("td",ts,m(e.diskObj["temp-c"].replace(/[^0-9]/g,""))+" \xB0C / "+m((e.diskObj["temp-c"].replace(/[^0-9]/g,"")*(9/5)+32).toFixed(1))+" \xB0F ",1)]),e.diskObj["current-pending-sector"]&&!["?",0,"0"].includes(e.diskObj["current-pending-sector"])?(c(),f("tr",ss,[os,s("td",ns,m(e.diskObj["current-pending-sector"]),1)])):g("",!0),e.diskObj["offline-uncorrectable"]&&!["?",0,"0"].includes(e.diskObj["offline-uncorrectable"])?(c(),f("tr",as,[rs,s("td",is,m(e.diskObj["offline-uncorrectable"]),1)])):g("",!0),s("tr",null,[ds,s("td",ls,m(e.diskObj["power-on-time"]),1)]),s("tr",null,[cs,s("td",us,m(e.diskObj.health),1)])])])])])):(c(),f("div",ms,[s("div",fs,m(e.wMsg),1)]))])])}var xs=A(gt,[["render",gs]]);const b={chassis:{path:"img/chassis/2u-stornado-chassis.png",image:null},disks:{default:{path:"img/disks/ssd-generic-2u.png",image:null},micron5200:{path:"img/disks/ssd-micron-2u.png",image:null},micron5300:{path:"img/disks/ssd-micron-5300-2u.png",image:null},seagate:{path:"img/disks/ssd-seagate-2u.png",image:null},seagateSas:{path:"img/disks/ssd-seagate-sas-2u.png",image:null}}},k=[{x:101,y:30,BAY:"1-1",occupied:!1,image:null},{x:123,y:30,BAY:"1-2",occupied:!1,image:null},{x:177,y:30,BAY:"1-3",occupied:!1,image:null},{x:200,y:30,BAY:"1-4",occupied:!1,image:null},{x:223,y:30,BAY:"1-5",occupied:!1,image:null},{x:246,y:30,BAY:"1-6",occupied:!1,image:null},{x:299,y:30,BAY:"1-7",occupied:!1,image:null},{x:322,y:30,BAY:"1-8",occupied:!1,image:null},{x:347,y:30,BAY:"1-9",occupied:!1,image:null},{x:369,y:30,BAY:"1-10",occupied:!1,image:null},{x:423,y:30,BAY:"1-11",occupied:!1,image:null},{x:446,y:30,BAY:"1-12",occupied:!1,image:null},{x:468,y:30,BAY:"1-13",occupied:!1,image:null},{x:491,y:30,BAY:"1-14",occupied:!1,image:null},{x:545,y:30,BAY:"1-15",occupied:!1,image:null},{x:568,y:30,BAY:"1-16",occupied:!1,image:null},{x:592,y:30,BAY:"2-1",occupied:!1,image:null},{x:615,y:30,BAY:"2-2",occupied:!1,image:null},{x:669,y:30,BAY:"2-3",occupied:!1,image:null},{x:692,y:30,BAY:"2-4",occupied:!1,image:null},{x:714,y:30,BAY:"2-5",occupied:!1,image:null},{x:737,y:30,BAY:"2-6",occupied:!1,image:null},{x:791,y:30,BAY:"2-7",occupied:!1,image:null},{x:814,y:30,BAY:"2-8",occupied:!1,image:null},{x:839,y:30,BAY:"2-9",occupied:!1,image:null},{x:861,y:30,BAY:"2-10",occupied:!1,image:null},{x:915,y:30,BAY:"2-11",occupied:!1,image:null},{x:938,y:30,BAY:"2-12",occupied:!1,image:null},{x:961,y:30,BAY:"2-13",occupied:!1,image:null},{x:984,y:30,BAY:"2-14",occupied:!1,image:null},{x:1037,y:30,BAY:"2-15",occupied:!1,image:null},{x:1060,y:30,BAY:"2-16",occupied:!1,image:null}],hs={name:"P5Stornado2U",setup(){const d=y({}),o=Y("currentDisk"),r=Y("lsdevJson");w(r,()=>{d.value=r,d.value.rows.flat().forEach(n=>{const a=k.findIndex(t=>t.BAY===n["bay-id"]);k[a].occupied=n.occupied,k[a].image=e(n.occupied,n["model-name"],n["model-family"])})},{immediate:!0,deep:!0});function e(n,a,t){return n?/Seagate Nytro/.test(t)?b.disks.seagate.image:/SEAGATE XS400LE10003/.test(a)?b.disks.seagateSas.image:/Micron_5100_|Micron_5200_/.test(a)?b.disks.micron5200.image:/Micron_5300_/.test(a)?b.disks.micron5300.image:b.disks.default.image:null}const i=function(n){n.preload=a=>{b.chassis.image=n.loadImage(b.chassis.path),Object.entries(b.disks).forEach(([t,l])=>{b.disks[t].image=n.loadImage(l.path)}),d.value.rows.flat().forEach(t=>{const l=k.findIndex(u=>u.BAY===t["bay-id"]);k[l].occupied=t.occupied,k[l].image=e(t.occupied,t["model-name"],t["model-family"])})},n.setup=a=>{n.createCanvas(b.chassis.image.width,b.chassis.image.height).parent("p5-stornado2u")},n.draw=a=>{if(n.image(b.chassis.image,0,0),k.forEach(t=>{t.occupied&&n.image(t.image,t.x,t.y)}),o.value){let t=k.findIndex(l=>l.BAY===o.value);k[t].image&&(n.fill(255,255,255,50),n.stroke(206,242,212),n.strokeWeight(2),n.rect(k[t].x,k[t].y,k[t].image.width,k[t].image.height))}},n.mouseClicked=a=>{let t=n.mouseX,l=n.mouseY;k.forEach(u=>{u.occupied&&t>u.x&&t<u.x+u.image.width&&l>u.y&&l<u.y+u.image.height&&(o.value=u.BAY)})}};return D(()=>{new O(i)}),{diskInfoObj:d,currentDisk:o,lsdevJson:r}}},_s={id:"p5-stornado2u",class:"m-2"};function ps(d,o,r,e,i,n){return c(),f("div",_s)}var vs=A(hs,[["render",ps]]);const h={chassis:{path:"img/chassis/q30-storinator.png",image:null},fade:{path:"img/chassis/chassis-fade.png",image:null},disks:{default:{path:"img/disks/caddy-generic.png",image:null},micron5200:{path:"img/disks/caddy-micron.png",image:null},micron5300:{path:"img/disks/caddy-micron-5300.png",image:null},seagate:{path:"img/disks/caddy-seagate.png",image:null},seagateSas:{path:"img/disks/caddy-seagate-sas.png",image:null}}},p=[{x:459,y:197,BAY:"1-1",occupied:!1,image:null},{x:427,y:197,BAY:"1-2",occupied:!1,image:null},{x:394,y:197,BAY:"1-3",occupied:!1,image:null},{x:362,y:197,BAY:"1-4",occupied:!1,image:null},{x:330,y:197,BAY:"1-5",occupied:!1,image:null},{x:298,y:197,BAY:"1-6",occupied:!1,image:null},{x:266,y:197,BAY:"1-7",occupied:!1,image:null},{x:234,y:197,BAY:"1-8",occupied:!1,image:null},{x:202,y:197,BAY:"1-9",occupied:!1,image:null},{x:170,y:197,BAY:"1-10",occupied:!1,image:null},{x:138,y:197,BAY:"1-11",occupied:!1,image:null},{x:106,y:197,BAY:"1-12",occupied:!1,image:null},{x:74,y:197,BAY:"1-13",occupied:!1,image:null},{x:42,y:197,BAY:"1-14",occupied:!1,image:null},{x:10,y:197,BAY:"1-15",occupied:!1,image:null},{x:459,y:33,BAY:"2-1",occupied:!1,image:null},{x:427,y:33,BAY:"2-2",occupied:!1,image:null},{x:394,y:33,BAY:"2-3",occupied:!1,image:null},{x:362,y:33,BAY:"2-4",occupied:!1,image:null},{x:330,y:33,BAY:"2-5",occupied:!1,image:null},{x:298,y:33,BAY:"2-6",occupied:!1,image:null},{x:266,y:33,BAY:"2-7",occupied:!1,image:null},{x:234,y:33,BAY:"2-8",occupied:!1,image:null},{x:202,y:33,BAY:"2-9",occupied:!1,image:null},{x:170,y:33,BAY:"2-10",occupied:!1,image:null},{x:138,y:33,BAY:"2-11",occupied:!1,image:null},{x:106,y:33,BAY:"2-12",occupied:!1,image:null},{x:74,y:33,BAY:"2-13",occupied:!1,image:null},{x:42,y:33,BAY:"2-14",occupied:!1,image:null},{x:10,y:33,BAY:"2-15",occupied:!1,image:null}],ks={name:"P5StorinatorQ30",setup(){const d=y({}),o=Y("currentDisk"),r=Y("lsdevJson");w(r,()=>{d.value=r,d.value.rows.flat().forEach(n=>{const a=p.findIndex(t=>t.BAY===n["bay-id"]);p[a].occupied=n.occupied,p[a].image=e(n.occupied,n["model-name"],n["model-family"])})},{immediate:!0,deep:!0});function e(n,a,t){return n?/Seagate Nytro/.test(t)?h.disks.seagate.image:/SEAGATE XS400LE10003/.test(a)?h.disks.seagateSas.image:/Micron_5100_|Micron_5200_/.test(a)?h.disks.micron5200.image:/Micron_5300_/.test(a)?h.disks.micron5300.image:h.disks.default.image:null}const i=function(n){n.preload=a=>{h.chassis.image=n.loadImage(h.chassis.path),h.fade.image=n.loadImage(h.fade.path),Object.entries(h.disks).forEach(([t,l])=>{h.disks[t].image=n.loadImage(l.path)}),d.value.rows.flat().forEach(t=>{const l=p.findIndex(u=>u.BAY===t["bay-id"]);p[l].occupied=t.occupied,p[l].image=e(t.occupied,t["model-name"],t["model-family"])})},n.setup=a=>{n.createCanvas(h.chassis.image.width,h.chassis.image.height+h.fade.image.height).parent("p5-q30-storinator"),n.image(h.fade.image,0,0),p.forEach(l=>{l.y+=h.fade.image.height})},n.draw=a=>{if(n.image(h.chassis.image,0,h.fade.image.height),p.forEach(t=>{t.occupied&&n.image(t.image,t.x,t.y)}),o.value){let t=p.findIndex(l=>l.BAY===o.value);p[t].image&&(n.fill(255,255,255,50),n.stroke(206,242,212),n.strokeWeight(2),n.rect(p[t].x,p[t].y,p[t].image.width,p[t].image.height))}},n.mouseClicked=a=>{let t=n.mouseX,l=n.mouseY;p.forEach(u=>{u.occupied&&t>u.x&&t<u.x+u.image.width&&l>u.y&&l<u.y+u.image.height&&(o.value=u.BAY)})}};return D(()=>{new O(i)}),{diskInfoObj:d,currentDisk:o,lsdevJson:r}}},ys={id:"p5-q30-storinator",class:"m-2"};function bs(d,o,r,e,i,n){return c(),f("div",ys)}var Bs=A(ks,[["render",bs]]);const _={chassis:{path:"img/chassis/stornado.png",image:null},fade:{path:"img/chassis/chassis-fade.png",image:null},disks:{default:{path:"img/disks/ssd-generic.png",image:null},micron5200:{path:"img/disks/ssd-micron.png",image:null},micron5300:{path:"img/disks/ssd-micron-5300.png",image:null},seagate:{path:"img/disks/ssd-seagate.png",image:null},seagateSas:{path:"img/disks/ssd-seagate-sas.png",image:null}}},v=[{x:476,y:46,BAY:"1-1",occupied:!1,image:null},{x:464,y:46,BAY:"1-2",occupied:!1,image:null},{x:439,y:46,BAY:"1-3",occupied:!1,image:null},{x:428,y:46,BAY:"1-4",occupied:!1,image:null},{x:417,y:46,BAY:"1-5",occupied:!1,image:null},{x:406,y:46,BAY:"1-6",occupied:!1,image:null},{x:382,y:46,BAY:"1-7",occupied:!1,image:null},{x:371,y:46,BAY:"1-8",occupied:!1,image:null},{x:358,y:46,BAY:"1-9",occupied:!1,image:null},{x:347,y:46,BAY:"1-10",occupied:!1,image:null},{x:322,y:46,BAY:"1-11",occupied:!1,image:null},{x:311,y:46,BAY:"1-12",occupied:!1,image:null},{x:300,y:46,BAY:"1-13",occupied:!1,image:null},{x:289,y:46,BAY:"1-14",occupied:!1,image:null},{x:265,y:46,BAY:"1-15",occupied:!1,image:null},{x:254,y:46,BAY:"1-16",occupied:!1,image:null},{x:238,y:46,BAY:"2-1",occupied:!1,image:null},{x:227,y:46,BAY:"2-2",occupied:!1,image:null},{x:202,y:46,BAY:"2-3",occupied:!1,image:null},{x:191,y:46,BAY:"2-4",occupied:!1,image:null},{x:180,y:46,BAY:"2-5",occupied:!1,image:null},{x:169,y:46,BAY:"2-6",occupied:!1,image:null},{x:145,y:46,BAY:"2-7",occupied:!1,image:null},{x:134,y:46,BAY:"2-8",occupied:!1,image:null},{x:121,y:46,BAY:"2-9",occupied:!1,image:null},{x:110,y:46,BAY:"2-10",occupied:!1,image:null},{x:85,y:46,BAY:"2-11",occupied:!1,image:null},{x:74,y:46,BAY:"2-12",occupied:!1,image:null},{x:63,y:46,BAY:"2-13",occupied:!1,image:null},{x:52,y:46,BAY:"2-14",occupied:!1,image:null},{x:27,y:46,BAY:"2-15",occupied:!1,image:null},{x:16,y:46,BAY:"2-16",occupied:!1,image:null}],As={name:"P5StorinatorQ30",setup(){const d=y({}),o=Y("currentDisk"),r=Y("lsdevJson");w(r,()=>{d.value=r,d.value.rows.flat().forEach(n=>{const a=v.findIndex(t=>t.BAY===n["bay-id"]);v[a].occupied=n.occupied,v[a].image=e(n.occupied,n["model-name"],n["model-family"])})},{immediate:!0,deep:!0});function e(n,a,t){return n?/Seagate Nytro/.test(t)?_.disks.seagate.image:/SEAGATE XS400LE10003/.test(a)?_.disks.seagateSas.image:/Micron_5100_|Micron_5200_/.test(a)?_.disks.micron5200.image:/Micron_5300_/.test(a)?_.disks.micron5300.image:_.disks.default.image:null}const i=function(n){n.preload=a=>{_.chassis.image=n.loadImage(_.chassis.path),_.fade.image=n.loadImage(_.fade.path),Object.entries(_.disks).forEach(([t,l])=>{_.disks[t].image=n.loadImage(l.path)}),d.value.rows.flat().forEach(t=>{const l=v.findIndex(u=>u.BAY===t["bay-id"]);v[l].occupied=t.occupied,v[l].image=e(t.occupied,t["model-name"],t["model-family"])})},n.setup=a=>{n.createCanvas(_.chassis.image.width,_.chassis.image.height+_.fade.image.height).parent("p5-q30-storinator"),n.image(_.fade.image,0,0),v.forEach(l=>{l.y+=_.fade.image.height})},n.draw=a=>{if(n.image(_.chassis.image,0,_.fade.image.height),v.forEach(t=>{t.occupied&&n.image(t.image,t.x,t.y)}),o.value){let t=v.findIndex(l=>l.BAY===o.value);v[t].image&&(n.fill(255,255,255,50),n.stroke(206,242,212),n.strokeWeight(2),n.rect(v[t].x,v[t].y,v[t].image.width,v[t].image.height))}},n.mouseClicked=a=>{let t=n.mouseX,l=n.mouseY;v.forEach(u=>{u.occupied&&t>u.x&&t<u.x+u.image.width&&l>u.y&&l<u.y+u.image.height&&(o.value=u.BAY)})}};return D(()=>{new O(i)}),{diskInfoObj:d,currentDisk:o,lsdevJson:r}}},ws={id:"p5-q30-storinator",class:"m-2"};function Ys(d,o,r,e,i,n){return c(),f("div",ws)}var Is=A(As,[["render",Ys]]);const Ss={components:{P5Stornado2U:vs,P5StorinatorQ30:Bs,P5Stornado:Is},props:{serverInfo:Object},setup(d){const o=y(d.serverInfo.Model);return console.log(o),{serverModel:o}}},Ms={class:"card m-2 mx-auto"},js=s("div",{class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[s("h3",{class:"text-lg leading-6 font-semibold"},"Disk Viewer")],-1),Fs={class:"card-body dark:bg-stone-700 flex-auto flex flex-col items-center content-center p-0"};function Os(d,o,r,e,i,n){const a=B("P5Stornado2U"),t=B("P5StorinatorQ30"),l=B("P5Stornado");return c(),f("div",Ms,[js,s("div",Fs,[e.serverModel.split("-")[0]==="Stornado"&&e.serverModel.split("-")[1]==="2U"?(c(),S(a,{key:0})):e.serverModel.split("-")[0]==="Storinator"&&e.serverModel.split("-")[1]==="Q30"?(c(),S(t,{key:1})):e.serverModel.split("-")[0]==="Stornado"&&e.serverModel.split("-")[1]==="AV15"||e.serverModel.split("-")[1]==="F32"?(c(),S(l,{key:2})):g("",!0)])])}var Cs=A(Ss,[["render",Os]]);const $s={name:"App",components:{P5Canvas:ce,FfdHeader:re,DebugBox:De,ServerSection:ft,DiskSection:xs,CanvasSection:Cs,ErrorMessage:q},setup(){const d=y("");E("currentDisk",d);const o=y("");E("lsdevState",o);const r=I({lsdevDuration:5});E("lsdevJson",r);const e=x=>new Promise(M=>setTimeout(M,x*1e3)),i=I({serverInfo:{content:I({}),finished:!1,failed:!1,errorMessage:[],fixAvailable:!1,fixHandler:()=>{console.log("Default handler was run for the fix button.")}},lsdev:{content:I({}),finished:!1,failed:!1,errorMessage:[],fixAvailable:!1,fixHandler:()=>{console.log("Default handler was run for the fix button.")}}}),n=async()=>{try{const x=await F(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let M=JSON.parse(x.stdout);i.serverInfo.content=M,i.serverInfo.finished=!0,i.serverInfo.failed=!1,i.serverInfo.fixAvailable=!1}catch(x){console.log(x),i.serverInfo.content=null,i.serverInfo.finished=!1,i.serverInfo.failed=!0,i.serverInfo.fixAvailable=!1,i.serverInfo.errorMessage.length=0,i.serverInfo.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),i.serverInfo.errorMessage.push(x.stderr)}},a=async()=>{try{const x=await F(["/opt/45drives/tools/lsdev","--json"],{err:"out",superuser:"require",promise:!0});let M=JSON.parse(x.stdout);return!r.hasOwnProperty("rows")||M.rows.flat().filter(C=>C.occupied).length!=r.rows.flat().filter(C=>C.occupied).length?(console.log("result and lsdevJson differed"),Object.assign(r,M),i.lsdev.content=r,i.lsdev.finished=!0,i.lsdev.failed=!1,i.lsdev.fixAvailable=!1,!0):!1}catch(x){return console.log(x),i.lsdev.content=null,i.lsdev.finished=!1,i.lsdev.failed=!0,i.lsdev.fixAvailable=!1,i.lsdev.errorMessage.length=0,i.lsdev.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),i.lsdev.errorMessage.push(x.stderr),!1}},t=async()=>{await n(),await a()},l=async x=>{for(await e(x);await a();)console.log(`Waited ${x}s`),console.log("running lsdev again."),await e(x)},u=cockpit.file("/usr/share/cockpit/45drives-disks-vue/udev/state");return u.watch(async function(x){o.value=x,console.log("udev state updated: ",o.value),await a()&&(console.log("runLsdev resulted in updated information, running retryLsdev"),l(r.lsdevDuration.toFixed(2)*2))}),t(),{preloadChecks:i,runServerInfo:n,runLsdev:a,udevState:u,lsdevJson:r,retryLsdev:l}}},Es={id:"App"},Ds={class:"h-screen flex flex-col overflow-hidden"},Ps={class:"flex flex-wrap overflow-y-auto"},Hs={class:"flex p-2 grow flex-wrap"},Ls={class:"flex p-2 mx-auto grow flex-col items-stretch"},Ns={class:"flex-auto flex items-center justify-evenly mt-2 mx-2"},Js={key:0,class:"p-2 m-2"},Ts={key:1,class:"p-2 m-2"};function qs(d,o,r,e,i,n){const a=B("FfdHeader"),t=B("CanvasSection"),l=B("DiskSection"),u=B("ServerSection"),x=B("ErrorMessage");return c(),f("div",Es,[s("div",Ds,[j(a,{moduleName:"Disks",centerName:""}),s("div",Ps,[s("div",Hs,[e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(c(),S(t,{key:0,serverInfo:e.preloadChecks.serverInfo.content},null,8,["serverInfo"])):g("",!0),e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(c(),S(l,{key:1})):g("",!0)]),s("div",Ls,[e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(c(),S(u,{key:0,serverInfo:e.preloadChecks.serverInfo.content},null,8,["serverInfo"])):g("",!0)])]),s("div",Ns,[e.preloadChecks.serverInfo.failed?(c(),f("div",Js,[j(x,{errorMsg:e.preloadChecks.serverInfo.errorMessage,FixButton:e.preloadChecks.serverInfo.fixAvailable,FixButtonHandler:e.preloadChecks.serverInfo.fixHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):g("",!0),e.preloadChecks.lsdev.failed?(c(),f("div",Ts,[j(x,{errorMsg:e.preloadChecks.lsdev.errorMessage,FixButton:e.preloadChecks.lsdev.fixAvailable,FixButtonHandler:e.preloadChecks.lsdev.fixHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):g("",!0)])])])}var Xs=A($s,[["render",qs]]);W(Xs).mount("#app");
