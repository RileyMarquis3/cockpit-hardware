var L=Object.defineProperty;var M=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var O=(n,s,o)=>s in n?L(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,w=(n,s)=>{for(var o in s||(s={}))P.call(s,o)&&O(n,o,s[o]);if(M)for(var o of M(s))A.call(s,o)&&O(n,o,s[o]);return n};import{r as _,w as k,a as H,b as V,o as l,c as d,d as e,n as B,t as f,e as b,f as C,g as p,h as X,i as T,j as u,F as N,k as E,l as y,m as z}from"./vendor.52c3377c.js";const D=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}};D();var v=(n,s)=>{const o=n.__vccOpts||n;for(const[t,r]of s)o[t]=r;return o};const U={props:{moduleName:String,centerName:Boolean},setup(n){const s=_(!0);function o(){let t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,r=localStorage.getItem("color-theme");return r===null?t:r==="dark"}return s.value=o(),s.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),k(()=>s.value,(t,r)=>{localStorage.setItem("color-theme",t?"dark":"light"),t?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},{lazy:!1}),{darkMode:s}},components:{SunIcon:H,MoonIcon:V}},q={class:"p-2 flex items-baseline justify-between bg-neutral-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-gray-700",style:{"font-family":"Red Hat Text",position:"relative"}},J={class:"flex flex-row items-baseline basis-10"},Q=["src"],G={class:"text-2xl"},K=e("span",{class:"text-gray-800 dark:text-red-600"},"Drives",-1),Y={key:0,class:"ml-5 text-red-800 dark:text-white text-2xl"};function W(n,s,o,t,r,i){const a=p("SunIcon"),c=p("MoonIcon");return l(),d("div",q,[e("div",J,[e("img",{class:"w-6 h-6 text-gray-50 mr-0.5 self-center",src:t.darkMode?"img/45d-fan-dark.svg":"img/45d-fan-light.svg"},null,8,Q),e("h1",G,[e("span",{class:"text-red-800 dark:text-white font-bold",style:B({"font-family":"Source Sans Pro","font-size":"1.6rem"})},"45",4),K]),o.centerName?b("",!0):(l(),d("h1",Y,f(o.moduleName),1))]),o.centerName?(l(),d("h1",{key:0,class:"text-red-800 dark:text-white text-2xl",style:B({position:"absolute",left:"50%",top:"50%",transform:"translateX(-50%) translateY(-50%)"})},f(o.moduleName),5)):b("",!0),e("button",{onClick:s[0]||(s[0]=h=>t.darkMode=!t.darkMode),id:"theme-toggle",type:"button",class:"text-gray-500 dark:text-gray-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none rounded-lg text-sm p-2.5 justify-self-end w-10 h-10 basis-10"},[t.darkMode?(l(),C(a,{key:0})):(l(),C(c,{key:1}))])])}var Z=v(U,[["render",W]]);function R(n=[],s={},o="out"){const t=X({loading:!1,status:0,stdout:"",stderr:""}),r=Boolean(s.promise);s.superuser||(s.superuser="require"),s.err=o==="out"?"out":"message";async function i(){t.loading=!0,t.status=0,t.stdout="",t.stderr="",cockpit.spawn(n,s).then((a,c)=>{t.stdout=a,t.stderr=c}).catch((a,c)=>{var h;t.stderr=c!=null?c:a.message,t.status=(h=a.exit_status)!=null?h:-1}).finally(()=>{t.loading=!1})}return i(),r?new Promise((a,c)=>{k(t,()=>{t.loading||(t.status!==0?c(w({},t)):a(w({},t)))})}):t}const ee={components:{XCircleIcon:T},props:{errorMsg:Array,FixButton:Boolean,FixButtonHandler:Function},setup(n){const s=_(n.errorMsg),o=_(n.FixButtonHandler);return k(()=>n.FixButtonHandler,t=>{o.value=t}),{errorMsg:s,FixButtonHandler:o}}},te={class:"flex items-center justify-evenly"},se={class:"rounded-md bg-red-50 p-4"},oe={class:"flex"},re={class:"flex-shrink-0"},ne={class:"ml-3"},ae=e("h3",{class:"text-sm font-medium text-red-800"}," 45Drives System Encountered an Error ",-1),ce={class:"mt-2 text-sm text-red-700"},ie={role:"list",class:"list-disc pl-5 space-y-1 whitespace-pre"};function le(n,s,o,t,r,i){const a=p("XCircleIcon");return l(),d("div",te,[e("div",se,[e("div",oe,[e("div",re,[u(a,{class:"h-5 w-5 text-red-400","aria-hidden":"true"})]),e("div",ne,[ae,e("div",ce,[e("ul",ie,[(l(!0),d(N,null,E(t.errorMsg,c=>(l(),d("li",null,f(c),1))),256))])])])])]),o.FixButton?(l(),d("button",{key:0,onClick:s[0]||(s[0]=(...c)=>t.FixButtonHandler&&t.FixButtonHandler(...c)),type:"button",class:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"}," Fix ")):b("",!0)])}var de=v(ee,[["render",le]]);const ue={components:{RefreshIconOutline:y,ErrorMessage:de},setup(){const n=_(""),s=_(""),o=_(""),t=_(""),r=_(""),i=_("img/45dlogo.png"),a=_(!1),c=_([]),h=_(!1),S=_(()=>{console.log("Default handler was run for the fix button.")}),I=g=>{if(g==""||g=="?")return"img/45dlogo.png";const m=/(Storinator|Stornado).*(AV15|Q30|S45|XL60|2U|C8|MI4).*/,x=g.match(m),F={Storinator:{AV15:"img/storinatorAV15.jpg",Q30:"img/storinatorQ30.jpg",S45:"img/storinatorS45.jpg",XL60:"img/storinatorXL60.jpg",C8:"img/storinatorC8.jpg",MI4:"img/storinatorMI4.jpg"},Stornado:{"2U":"img/stornado2U.jpg",AV15:"img/stornadoAV15.jpg"}};return x?F[x[1]][x[2]]:"img/45dlogo.png"},$=async()=>{n.value="Loading...",s.value="Loading...",o.value="Loading...",t.value="Loading...",r.value="Loading...",i.value="img/45dlogo.png";try{const g=await R(["/usr/share/cockpit/45drives-system-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let m=JSON.parse(g.stdout);n.value=m.Model,s.value=m["Chassis Size"],o.value=m.Serial,t.value=m.Motherboard.Manufacturer+" "+m.Motherboard["Product Name"],r.value=m.Motherboard["Serial Number"],i.value=I(m.Model)}catch(g){console.log(g);try{let m=JSON.parse(g.stderr);c.value.length=0,c.value.push(m.error_msg),c.value.push('Click "Fix" to run /opt/45drives/tools/server_identifier'),a.value=!0,m.error_msg=="/etc/45drives/server_info/server_info.json does not exist"&&(h.value=!0,S.value=async()=>{try{const x=await R(["/opt/45drives/tools/server_identifier"],{err:"out",superuser:"require",promise:!0});a.value=!1,c.value.length=0,h.value=!1,$()}catch(x){console.log(x),a.value=!0,c.value.length=0,c.value.push(x.stderr),c.value.push("An error occurred when running /opt/45drives/tools/server_identifier"),h.value=!1,console.log(h.value)}})}catch(m){console.log(m),a.value=!0,c.value.length=0,c.value.push(m.stderr),c.value.push("An error occurred when trying to run /usr/share/cockpit/45drives-system/scripts/server_info"),h.value=!1,console.log(h.value)}}};return $(),{sysModel:n,sysChassis:s,sysSerial:o,moboModel:t,moboSerial:r,serverImgPath:i,getSystemInfo:$,getSystemImgPath:I,fatalError:a,fatalErrorMsg:c,showFixButton:h,fixButtonHandler:S}}},me={class:"card"},_e={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},he=e("h3",{class:"text-lg leading-6 font-semibold"},"System",-1),fe={class:"mt-3 sm:mt-0 sm:ml-4"},pe={class:"card-body"},ge={key:0,class:"flex flex-row justify-evenly"},ve={class:"bg-white shadow overflow-hidden sm:rounded-lg"},xe={class:"border-b border-gray-200"},ye={class:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},be=e("dt",{class:"text-sm font-medium text-gray-500"},"Model",-1),$e={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},we={class:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},ke=e("dt",{class:"text-sm font-medium text-gray-500"},"Chassis Size",-1),Se={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},Ie={class:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},Me=e("dt",{class:"text-sm font-medium text-gray-500"},"Serial",-1),Oe={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},Be={class:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},Ce=e("dt",{class:"text-sm font-medium text-gray-500"},"Motherboard",-1),Re={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},je={class:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},Ne=e("dt",{class:"text-sm font-medium text-gray-500"}," Motherboard Serial ",-1),Ee={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},Fe=["src"],Le={key:1};function Pe(n,s,o,t,r,i){const a=p("RefreshIconOutline"),c=p("ErrorMessage");return l(),d("div",me,[e("div",_e,[he,e("div",fe,[e("button",{type:"button",class:"card-refresh-btn",onClick:s[0]||(s[0]=h=>t.getSystemInfo())},[u(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),e("div",pe,[t.fatalError?b("",!0):(l(),d("div",ge,[e("div",ve,[e("div",xe,[e("dl",null,[e("div",ye,[be,e("dd",$e,f(t.sysModel),1)]),e("div",we,[ke,e("dd",Se,f(t.sysChassis),1)]),e("div",Ie,[Me,e("dd",Oe,f(t.sysSerial),1)]),e("div",Be,[Ce,e("dd",Re,f(t.moboModel),1)]),e("div",je,[Ne,e("dd",Ee,f(t.moboSerial),1)])])])]),e("img",{src:t.serverImgPath,class:"object-contain h-72 rounded-none justify-self-center"},null,8,Fe)])),t.fatalError?(l(),d("div",Le,[u(c,{errorMsg:t.fatalErrorMsg,FixButton:t.showFixButton,FixButtonHandler:t.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):b("",!0)])])}var Ae=v(ue,[["render",Pe]]);const j=[{socket:"CPU1",model:"Intel(R) Xeon(R) Silver 4210 CPU @ 2.20GHz (Generic)",temperature:"33.000 (C)"}],He={setup(){return(async()=>{try{const s=await useSpawn(["/usr/share/cockpit/45drives-system-vue/scripts/cpu_info"],{err:"out",superuser:"require",promise:!0});let o=JSON.parse(s.stdout);for(let t in o.cpus)j.value.push(t)}catch(s){console.log(s),fatalError.value=!0,fatalErrorMsg.value.length=0,fatalErrorMsg.value.push(s.stderr),fatalErrorMsg.value.push("An error occurred when trying to run /usr/share/cockpit/45drives-system/scripts/cpu_info"),showFixButton.value=!1}})(),{cpus:j}},components:{RefreshIconOutline:y}},Ve={class:"card"},Xe={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},Te=e("h3",{class:"text-lg leading-6 font-semibold"},"CPU",-1),ze={class:"mt-3 sm:mt-0 sm:ml-4"},De={type:"button",class:"card-refresh-btn"},Ue={class:"card-body"},qe={class:"mt-8 flex flex-col"},Je={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},Qe={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},Ge={class:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"},Ke={class:"min-w-full divide-y divide-gray-300"},Ye=e("thead",{class:"bg-gray-50"},[e("tr",null,[e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"},"Socket"),e("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Model"),e("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Temperature")])],-1),We={class:"divide-y divide-gray-200 bg-white"},Ze={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"},et={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},tt={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"};function st(n,s,o,t,r,i){const a=p("RefreshIconOutline");return l(),d("div",Ve,[e("div",Xe,[Te,e("div",ze,[e("button",De,[u(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),e("div",Ue,[e("div",qe,[e("div",Je,[e("div",Qe,[e("div",Ge,[e("table",Ke,[Ye,e("tbody",We,[(l(!0),d(N,null,E(t.cpus,c=>(l(),d("tr",{key:c.socket},[e("td",Ze,f(c.socket),1),e("td",et,f(c.model),1),e("td",tt,f(c.temperature),1)]))),128))])])])])])])])])}var ot=v(He,[["render",st]]);const rt={components:{RefreshIconOutline:y}},nt={class:"card"},at={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},ct=e("h3",{class:"text-lg leading-6 font-semibold"},"PCI",-1),it={class:"mt-3 sm:mt-0 sm:ml-4"},lt={type:"button",class:"card-refresh-btn"},dt=e("div",{class:"card-body"}," This is a test... ",-1);function ut(n,s,o,t,r,i){const a=p("RefreshIconOutline");return l(),d("div",nt,[e("div",at,[ct,e("div",it,[e("button",lt,[u(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),dt])}var mt=v(rt,[["render",ut]]);const _t={components:{RefreshIconOutline:y}},ht={class:"card"},ft={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},pt=e("h3",{class:"text-lg leading-6 font-semibold"},"RAM",-1),gt={class:"mt-3 sm:mt-0 sm:ml-4"},vt={type:"button",class:"card-refresh-btn"},xt=e("div",{class:"card-body"}," This is a test... ",-1);function yt(n,s,o,t,r,i){const a=p("RefreshIconOutline");return l(),d("div",ht,[e("div",ft,[pt,e("div",gt,[e("button",vt,[u(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),xt])}var bt=v(_t,[["render",yt]]);const $t={components:{RefreshIconOutline:y}},wt={class:"card"},kt={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},St=e("h3",{class:"text-lg leading-6 font-semibold"},"Network",-1),It={class:"mt-3 sm:mt-0 sm:ml-4"},Mt={type:"button",class:"card-refresh-btn"},Ot=e("div",{class:"card-body"}," This is a test... ",-1);function Bt(n,s,o,t,r,i){const a=p("RefreshIconOutline");return l(),d("div",wt,[e("div",kt,[St,e("div",It,[e("button",Mt,[u(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),Ot])}var Ct=v($t,[["render",Bt]]);const Rt={components:{RefreshIconOutline:y}},jt={class:"card"},Nt={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},Et=e("h3",{class:"text-lg leading-6 font-semibold"},"IPMI LAN",-1),Ft={class:"mt-3 sm:mt-0 sm:ml-4"},Lt={type:"button",class:"card-refresh-btn"},Pt=e("div",{class:"card-body"}," This is a test... ",-1);function At(n,s,o,t,r,i){const a=p("RefreshIconOutline");return l(),d("div",jt,[e("div",Nt,[Et,e("div",Ft,[e("button",Lt,[u(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),Pt])}var Ht=v(Rt,[["render",At]]);const Vt={class:"h-full w-full overflow-y-scroll"},Xt={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-8 grow"},Tt={setup(n){return(s,o)=>(l(),d("div",Vt,[e("div",Xt,[u(Ae),u(ot),u(mt),u(bt),u(Ct),u(Ht)])]))}};const zt={class:"h-full flex flex-col overflow-hidden"},Dt={setup(n){return(s,o)=>(l(),d("div",zt,[u(Z,{moduleName:"System",centerName:""}),u(Tt)]))}};z(Dt).mount("#app");