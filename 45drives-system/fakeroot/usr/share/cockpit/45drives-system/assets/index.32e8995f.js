var R=Object.defineProperty;var B=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var F=(a,s,o)=>s in a?R(a,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[s]=o,w=(a,s)=>{for(var o in s||(s={}))H.call(s,o)&&F(a,o,s[o]);if(B)for(var o of B(s))P.call(s,o)&&F(a,o,s[o]);return a};import{r as m,w as M,a as A,b as V,o as l,c as d,d as e,n as O,t as f,e as y,f as E,g,h as D,i as T,j as _,F as j,k as C,l as b,m as X}from"./vendor.52c3377c.js";const q=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}};q();var v=(a,s)=>{const o=a.__vccOpts||a;for(const[t,r]of s)o[t]=r;return o};const z={props:{moduleName:String,centerName:Boolean},setup(a){const s=m(!0);function o(){let t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,r=localStorage.getItem("color-theme");return r===null?t:r==="dark"}return s.value=o(),s.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),M(()=>s.value,(t,r)=>{localStorage.setItem("color-theme",t?"dark":"light"),t?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},{lazy:!1}),{darkMode:s}},components:{SunIcon:A,MoonIcon:V}},J={class:"p-2 flex items-baseline justify-between bg-neutral-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-gray-700",style:{"font-family":"Red Hat Text",position:"relative"}},U={class:"flex flex-row items-baseline basis-10"},Q=["src"],K={class:"text-2xl"},Y=e("span",{class:"text-gray-800 dark:text-red-600"},"Drives",-1),G={key:0,class:"ml-5 text-red-800 dark:text-white text-2xl"};function W(a,s,o,t,r,i){const n=g("SunIcon"),c=g("MoonIcon");return l(),d("div",J,[e("div",U,[e("img",{class:"w-6 h-6 text-gray-50 mr-0.5 self-center",src:t.darkMode?"img/45d-fan-dark.svg":"img/45d-fan-light.svg"},null,8,Q),e("h1",K,[e("span",{class:"text-red-800 dark:text-white font-bold",style:O({"font-family":"Source Sans Pro","font-size":"1.6rem"})},"45",4),Y]),o.centerName?y("",!0):(l(),d("h1",G,f(o.moduleName),1))]),o.centerName?(l(),d("h1",{key:0,class:"text-red-800 dark:text-white text-2xl",style:O({position:"absolute",left:"50%",top:"50%",transform:"translateX(-50%) translateY(-50%)"})},f(o.moduleName),5)):y("",!0),e("button",{onClick:s[0]||(s[0]=u=>t.darkMode=!t.darkMode),id:"theme-toggle",type:"button",class:"text-gray-500 dark:text-gray-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none rounded-lg text-sm p-2.5 justify-self-end w-10 h-10 basis-10"},[t.darkMode?(l(),E(n,{key:0})):(l(),E(c,{key:1}))])])}var Z=v(z,[["render",W]]);function k(a=[],s={},o="out"){const t=D({loading:!1,status:0,stdout:"",stderr:""}),r=Boolean(s.promise);s.superuser||(s.superuser="require"),s.err=o==="out"?"out":"message";async function i(){t.loading=!0,t.status=0,t.stdout="",t.stderr="",cockpit.spawn(a,s).then((n,c)=>{t.stdout=n,t.stderr=c}).catch((n,c)=>{var u;t.stderr=c!=null?c:n.message,t.status=(u=n.exit_status)!=null?u:-1}).finally(()=>{t.loading=!1})}return i(),r?new Promise((n,c)=>{M(t,()=>{t.loading||(t.status!==0?c(w({},t)):n(w({},t)))})}):t}const ee={components:{XCircleIcon:T},props:{errorMsg:Array,FixButton:Boolean,FixButtonHandler:Function},setup(a){const s=m(a.errorMsg),o=m(a.FixButtonHandler);return M(()=>a.FixButtonHandler,t=>{o.value=t}),{errorMsg:s,FixButtonHandler:o}}},te={class:"flex items-center justify-evenly"},se={class:"rounded-md bg-red-50 p-4"},oe={class:"flex"},re={class:"flex-shrink-0"},ne={class:"ml-3"},ae=e("h3",{class:"text-sm font-medium text-red-800"}," 45Drives System Encountered an Error ",-1),ce={class:"mt-2 text-sm text-red-700"},ie={role:"list",class:"list-disc pl-5 space-y-1 whitespace-pre"};function le(a,s,o,t,r,i){const n=g("XCircleIcon");return l(),d("div",te,[e("div",se,[e("div",oe,[e("div",re,[_(n,{class:"h-5 w-5 text-red-400","aria-hidden":"true"})]),e("div",ne,[ae,e("div",ce,[e("ul",ie,[(l(!0),d(j,null,C(t.errorMsg,c=>(l(),d("li",null,f(c),1))),256))])])])])]),o.FixButton?(l(),d("button",{key:0,onClick:s[0]||(s[0]=(...c)=>t.FixButtonHandler&&t.FixButtonHandler(...c)),type:"button",class:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"}," Fix ")):y("",!0)])}var N=v(ee,[["render",le]]);const de={components:{RefreshIconOutline:b,ErrorMessage:N},setup(){const a=m(""),s=m(""),o=m(""),t=m(""),r=m(""),i=m("img/45dlogo.png"),n=m(!1),c=m([]),u=m(!1),S=m(()=>{console.log("Default handler was run for the fix button.")}),I=p=>{if(p==""||p=="?")return"img/45dlogo.png";const h=/(Storinator|Stornado).*(AV15|Q30|S45|XL60|2U|C8|MI4).*/,x=p.match(h),L={Storinator:{AV15:"img/storinatorAV15.jpg",Q30:"img/storinatorQ30.jpg",S45:"img/storinatorS45.jpg",XL60:"img/storinatorXL60.jpg",C8:"img/storinatorC8.jpg",MI4:"img/storinatorMI4.jpg"},Stornado:{"2U":"img/stornado2U.jpg",AV15:"img/stornadoAV15.jpg"}};return x?L[x[1]][x[2]]:"img/45dlogo.png"},$=async()=>{a.value="Loading...",s.value="Loading...",o.value="Loading...",t.value="Loading...",r.value="Loading...",i.value="img/45dlogo.png";try{const p=await k(["/usr/share/cockpit/45drives-system-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let h=JSON.parse(p.stdout);a.value=h.Model,s.value=h["Chassis Size"],o.value=h.Serial,t.value=h.Motherboard.Manufacturer+" "+h.Motherboard["Product Name"],r.value=h.Motherboard["Serial Number"],i.value=I(h.Model)}catch(p){console.log(p);try{let h=JSON.parse(p.stderr);c.value.length=0,c.value.push(h.error_msg),c.value.push('Click "Fix" to run /opt/45drives/tools/server_identifier'),n.value=!0,h.error_msg=="/etc/45drives/server_info/server_info.json does not exist"&&(u.value=!0,S.value=async()=>{try{const x=await k(["/opt/45drives/tools/server_identifier"],{err:"out",superuser:"require",promise:!0});n.value=!1,c.value.length=0,u.value=!1,$()}catch(x){console.log(x),n.value=!0,c.value.length=0,c.value.push(x.stderr),c.value.push("An error occurred when running /opt/45drives/tools/server_identifier"),u.value=!1,console.log(u.value)}})}catch(h){console.log(h),n.value=!0,c.value.length=0,c.value.push(h.stderr),c.value.push("An error occurred when trying to run /usr/share/cockpit/45drives-system/scripts/server_info"),u.value=!1,console.log(u.value)}}};return $(),{sysModel:a,sysChassis:s,sysSerial:o,moboModel:t,moboSerial:r,serverImgPath:i,getSystemInfo:$,getSystemImgPath:I,fatalError:n,fatalErrorMsg:c,showFixButton:u,fixButtonHandler:S}}},ue={class:"card"},me={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},_e=e("h3",{class:"text-lg leading-6 font-semibold"},"System",-1),he={class:"mt-3 sm:mt-0 sm:ml-4"},fe={class:"card-body"},ge={key:0,class:"flex flex-row justify-evenly"},pe={class:"bg-white shadow overflow-hidden sm:rounded-lg"},ve={class:"border-b border-gray-200"},xe={class:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},ye=e("dt",{class:"text-sm font-medium text-gray-500"},"Model",-1),be={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},$e={class:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},we=e("dt",{class:"text-sm font-medium text-gray-500"},"Chassis Size",-1),ke={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},Me={class:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},Se=e("dt",{class:"text-sm font-medium text-gray-500"},"Serial",-1),Ie={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},Be={class:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},Fe=e("dt",{class:"text-sm font-medium text-gray-500"},"Motherboard",-1),Oe={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},Ee={class:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},je=e("dt",{class:"text-sm font-medium text-gray-500"}," Motherboard Serial ",-1),Ce={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},Ne=["src"],Le={key:1};function Re(a,s,o,t,r,i){const n=g("RefreshIconOutline"),c=g("ErrorMessage");return l(),d("div",ue,[e("div",me,[_e,e("div",he,[e("button",{type:"button",class:"card-refresh-btn",onClick:s[0]||(s[0]=u=>t.getSystemInfo())},[_(n,{class:"h-5 w-5","aria-hidden":"true"})])])]),e("div",fe,[t.fatalError?y("",!0):(l(),d("div",ge,[e("div",pe,[e("div",ve,[e("dl",null,[e("div",xe,[ye,e("dd",be,f(t.sysModel),1)]),e("div",$e,[we,e("dd",ke,f(t.sysChassis),1)]),e("div",Me,[Se,e("dd",Ie,f(t.sysSerial),1)]),e("div",Be,[Fe,e("dd",Oe,f(t.moboModel),1)]),e("div",Ee,[je,e("dd",Ce,f(t.moboSerial),1)])])])]),e("img",{src:t.serverImgPath,class:"object-contain h-72 rounded-none justify-self-center"},null,8,Ne)])),t.fatalError?(l(),d("div",Le,[_(c,{errorMsg:t.fatalErrorMsg,FixButton:t.showFixButton,FixButtonHandler:t.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):y("",!0)])])}var He=v(de,[["render",Re]]);const Pe={setup(){const a=m([]),s=m(!1),o=m([]),t=m(!1),r=m(()=>{console.log("Default handler was run for the fix button.")}),i=async()=>{try{const n=await k(["/usr/share/cockpit/45drives-system-vue/scripts/cpu_info"],{err:"out",superuser:"require",promise:!0});JSON.parse(n.stdout).cpus.forEach(u=>{a.value.push(u)}),s.value=!1,o.value.length=0,t.value=!1}catch(n){console.log(n),s.value=!0,o.value.length=0,o.value.push(n.stderr),o.value.push("An error occurred when trying to run /usr/share/cockpit/45drives-system/scripts/cpu_info"),t.value=!1}};return i(),{cpus:a,fatalError:s,fatalErrorMsg:o,showFixButton:t,fixButtonHandler:r,getCpuInfo:i}},components:{RefreshIconOutline:b,ErrorMessage:N}},Ae={class:"card"},Ve={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},De=e("h3",{class:"text-lg leading-6 font-semibold"},"CPU",-1),Te={class:"mt-3 sm:mt-0 sm:ml-4"},Xe={class:"card-body"},qe={key:0,class:"mt-2 flex flex-col"},ze={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},Je={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},Ue={class:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"},Qe={class:"min-w-full divide-y divide-gray-300"},Ke=e("thead",{class:"bg-gray-50"},[e("tr",null,[e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"},"Socket"),e("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Model"),e("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Temperature")])],-1),Ye={class:"divide-y divide-gray-200 bg-white"},Ge={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"},We={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},Ze={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},et={key:1};function tt(a,s,o,t,r,i){const n=g("RefreshIconOutline"),c=g("ErrorMessage");return l(),d("div",Ae,[e("div",Ve,[De,e("div",Te,[e("button",{type:"button",class:"card-refresh-btn",onClick:s[0]||(s[0]=u=>t.getCpuInfo())},[_(n,{class:"h-5 w-5","aria-hidden":"true"})])])]),e("div",Xe,[t.fatalError?y("",!0):(l(),d("div",qe,[e("div",ze,[e("div",Je,[e("div",Ue,[e("table",Qe,[Ke,e("tbody",Ye,[(l(!0),d(j,null,C(t.cpus,u=>(l(),d("tr",{key:u.socket},[e("td",Ge,f(u.socket),1),e("td",We,f(u.model),1),e("td",Ze,f(u.temperature),1)]))),128))])])])])])])),t.fatalError?(l(),d("div",et,[_(c,{errorMsg:t.fatalErrorMsg,FixButton:t.showFixButton,FixButtonHandler:t.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):y("",!0)])])}var st=v(Pe,[["render",tt]]);const ot={components:{RefreshIconOutline:b}},rt={class:"card"},nt={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},at=e("h3",{class:"text-lg leading-6 font-semibold"},"PCI",-1),ct={class:"mt-3 sm:mt-0 sm:ml-4"},it={type:"button",class:"card-refresh-btn"},lt=e("div",{class:"card-body"}," This is a test... ",-1);function dt(a,s,o,t,r,i){const n=g("RefreshIconOutline");return l(),d("div",rt,[e("div",nt,[at,e("div",ct,[e("button",it,[_(n,{class:"h-5 w-5","aria-hidden":"true"})])])]),lt])}var ut=v(ot,[["render",dt]]);const mt={components:{RefreshIconOutline:b}},_t={class:"card"},ht={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},ft=e("h3",{class:"text-lg leading-6 font-semibold"},"RAM",-1),gt={class:"mt-3 sm:mt-0 sm:ml-4"},pt={type:"button",class:"card-refresh-btn"},vt=e("div",{class:"card-body"}," This is a test... ",-1);function xt(a,s,o,t,r,i){const n=g("RefreshIconOutline");return l(),d("div",_t,[e("div",ht,[ft,e("div",gt,[e("button",pt,[_(n,{class:"h-5 w-5","aria-hidden":"true"})])])]),vt])}var yt=v(mt,[["render",xt]]);const bt={components:{RefreshIconOutline:b}},$t={class:"card"},wt={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},kt=e("h3",{class:"text-lg leading-6 font-semibold"},"Network",-1),Mt={class:"mt-3 sm:mt-0 sm:ml-4"},St={type:"button",class:"card-refresh-btn"},It=e("div",{class:"card-body"}," This is a test... ",-1);function Bt(a,s,o,t,r,i){const n=g("RefreshIconOutline");return l(),d("div",$t,[e("div",wt,[kt,e("div",Mt,[e("button",St,[_(n,{class:"h-5 w-5","aria-hidden":"true"})])])]),It])}var Ft=v(bt,[["render",Bt]]);const Ot={components:{RefreshIconOutline:b}},Et={class:"card"},jt={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},Ct=e("h3",{class:"text-lg leading-6 font-semibold"},"IPMI LAN",-1),Nt={class:"mt-3 sm:mt-0 sm:ml-4"},Lt={type:"button",class:"card-refresh-btn"},Rt=e("div",{class:"card-body"}," This is a test... ",-1);function Ht(a,s,o,t,r,i){const n=g("RefreshIconOutline");return l(),d("div",Et,[e("div",jt,[Ct,e("div",Nt,[e("button",Lt,[_(n,{class:"h-5 w-5","aria-hidden":"true"})])])]),Rt])}var Pt=v(Ot,[["render",Ht]]);const At={class:"h-full w-full overflow-y-scroll"},Vt={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-8 grow"},Dt={setup(a){return(s,o)=>(l(),d("div",At,[e("div",Vt,[_(He),_(st),_(ut),_(yt),_(Ft),_(Pt)])]))}};const Tt={class:"h-full flex flex-col overflow-hidden"},Xt={setup(a){return(s,o)=>(l(),d("div",Tt,[_(Z,{moduleName:"System",centerName:""}),_(Dt)]))}};X(Xt).mount("#app");