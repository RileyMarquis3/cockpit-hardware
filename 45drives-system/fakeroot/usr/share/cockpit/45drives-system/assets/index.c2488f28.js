var N=Object.defineProperty;var B=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var F=(a,s,o)=>s in a?N(a,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[s]=o,w=(a,s)=>{for(var o in s||(s={}))L.call(s,o)&&F(a,o,s[o]);if(B)for(var o of B(s))H.call(s,o)&&F(a,o,s[o]);return a};import{r as m,w as S,a as P,b as A,o as l,c as d,d as e,n as O,t as f,e as y,f as E,g,h as V,i as X,j as _,F as C,k as R,l as b,m as D}from"./vendor.52c3377c.js";const T=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}};T();var v=(a,s)=>{const o=a.__vccOpts||a;for(const[t,n]of s)o[t]=n;return o};const z={props:{moduleName:String,centerName:Boolean},setup(a){const s=m(!0);function o(){let t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,n=localStorage.getItem("color-theme");return n===null?t:n==="dark"}return s.value=o(),s.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),S(()=>s.value,(t,n)=>{localStorage.setItem("color-theme",t?"dark":"light"),t?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},{lazy:!1}),{darkMode:s}},components:{SunIcon:P,MoonIcon:A}},U={class:"p-2 flex items-baseline justify-between bg-neutral-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-gray-700",style:{"font-family":"Red Hat Text",position:"relative"}},q={class:"flex flex-row items-baseline basis-10"},J=["src"],Q={class:"text-2xl"},G=e("span",{class:"text-gray-800 dark:text-red-600"},"Drives",-1),K={key:0,class:"ml-5 text-red-800 dark:text-white text-2xl"};function Y(a,s,o,t,n,i){const r=g("SunIcon"),c=g("MoonIcon");return l(),d("div",U,[e("div",q,[e("img",{class:"w-6 h-6 text-gray-50 mr-0.5 self-center",src:t.darkMode?"img/45d-fan-dark.svg":"img/45d-fan-light.svg"},null,8,J),e("h1",Q,[e("span",{class:"text-red-800 dark:text-white font-bold",style:O({"font-family":"Source Sans Pro","font-size":"1.6rem"})},"45",4),G]),o.centerName?y("",!0):(l(),d("h1",K,f(o.moduleName),1))]),o.centerName?(l(),d("h1",{key:0,class:"text-red-800 dark:text-white text-2xl",style:O({position:"absolute",left:"50%",top:"50%",transform:"translateX(-50%) translateY(-50%)"})},f(o.moduleName),5)):y("",!0),e("button",{onClick:s[0]||(s[0]=u=>t.darkMode=!t.darkMode),id:"theme-toggle",type:"button",class:"text-gray-500 dark:text-gray-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none rounded-lg text-sm p-2.5 justify-self-end w-10 h-10 basis-10"},[t.darkMode?(l(),E(r,{key:0})):(l(),E(c,{key:1}))])])}var W=v(z,[["render",Y]]);function k(a=[],s={},o="out"){const t=V({loading:!1,status:0,stdout:"",stderr:""}),n=Boolean(s.promise);s.superuser||(s.superuser="require"),s.err=o==="out"?"out":"message";async function i(){t.loading=!0,t.status=0,t.stdout="",t.stderr="",cockpit.spawn(a,s).then((r,c)=>{t.stdout=r,t.stderr=c}).catch((r,c)=>{var u;t.stderr=c!=null?c:r.message,t.status=(u=r.exit_status)!=null?u:-1}).finally(()=>{t.loading=!1})}return i(),n?new Promise((r,c)=>{S(t,()=>{t.loading||(t.status!==0?c(w({},t)):r(w({},t)))})}):t}const Z={components:{XCircleIcon:X},props:{errorMsg:Array,FixButton:Boolean,FixButtonHandler:Function},setup(a){const s=m(a.errorMsg),o=m(a.FixButtonHandler);return S(()=>a.FixButtonHandler,t=>{o.value=t}),{errorMsg:s,FixButtonHandler:o}}},ee={class:"flex items-center justify-evenly"},te={class:"rounded-md bg-red-50 p-4"},se={class:"flex"},oe={class:"flex-shrink-0"},re={class:"ml-3"},ne=e("h3",{class:"text-sm font-medium text-red-800"}," 45Drives System Encountered an Error ",-1),ae={class:"mt-2 text-sm text-red-700"},ce={role:"list",class:"list-disc pl-5 space-y-1 whitespace-pre"};function ie(a,s,o,t,n,i){const r=g("XCircleIcon");return l(),d("div",ee,[e("div",te,[e("div",se,[e("div",oe,[_(r,{class:"h-5 w-5 text-red-400","aria-hidden":"true"})]),e("div",re,[ne,e("div",ae,[e("ul",ce,[(l(!0),d(C,null,R(t.errorMsg,c=>(l(),d("li",null,f(c),1))),256))])])])])]),o.FixButton?(l(),d("button",{key:0,onClick:s[0]||(s[0]=(...c)=>t.FixButtonHandler&&t.FixButtonHandler(...c)),type:"button",class:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"}," Fix ")):y("",!0)])}var le=v(Z,[["render",ie]]);const de={components:{RefreshIconOutline:b,ErrorMessage:le},setup(){const a=m(""),s=m(""),o=m(""),t=m(""),n=m(""),i=m("img/45dlogo.png"),r=m(!1),c=m([]),u=m(!1),M=m(()=>{console.log("Default handler was run for the fix button.")}),I=p=>{if(p==""||p=="?")return"img/45dlogo.png";const h=/(Storinator|Stornado).*(AV15|Q30|S45|XL60|2U|C8|MI4).*/,x=p.match(h),j={Storinator:{AV15:"img/storinatorAV15.jpg",Q30:"img/storinatorQ30.jpg",S45:"img/storinatorS45.jpg",XL60:"img/storinatorXL60.jpg",C8:"img/storinatorC8.jpg",MI4:"img/storinatorMI4.jpg"},Stornado:{"2U":"img/stornado2U.jpg",AV15:"img/stornadoAV15.jpg"}};return x?j[x[1]][x[2]]:"img/45dlogo.png"},$=async()=>{a.value="Loading...",s.value="Loading...",o.value="Loading...",t.value="Loading...",n.value="Loading...",i.value="img/45dlogo.png";try{const p=await k(["/usr/share/cockpit/45drives-system-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let h=JSON.parse(p.stdout);a.value=h.Model,s.value=h["Chassis Size"],o.value=h.Serial,t.value=h.Motherboard.Manufacturer+" "+h.Motherboard["Product Name"],n.value=h.Motherboard["Serial Number"],i.value=I(h.Model)}catch(p){console.log(p);try{let h=JSON.parse(p.stderr);c.value.length=0,c.value.push(h.error_msg),c.value.push('Click "Fix" to run /opt/45drives/tools/server_identifier'),r.value=!0,h.error_msg=="/etc/45drives/server_info/server_info.json does not exist"&&(u.value=!0,M.value=async()=>{try{const x=await k(["/opt/45drives/tools/server_identifier"],{err:"out",superuser:"require",promise:!0});r.value=!1,c.value.length=0,u.value=!1,$()}catch(x){console.log(x),r.value=!0,c.value.length=0,c.value.push(x.stderr),c.value.push("An error occurred when running /opt/45drives/tools/server_identifier"),u.value=!1,console.log(u.value)}})}catch(h){console.log(h),r.value=!0,c.value.length=0,c.value.push(h.stderr),c.value.push("An error occurred when trying to run /usr/share/cockpit/45drives-system/scripts/server_info"),u.value=!1,console.log(u.value)}}};return $(),{sysModel:a,sysChassis:s,sysSerial:o,moboModel:t,moboSerial:n,serverImgPath:i,getSystemInfo:$,getSystemImgPath:I,fatalError:r,fatalErrorMsg:c,showFixButton:u,fixButtonHandler:M}}},ue={class:"card"},me={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},_e=e("h3",{class:"text-lg leading-6 font-semibold"},"System",-1),he={class:"mt-3 sm:mt-0 sm:ml-4"},fe={class:"card-body"},ge={key:0,class:"flex flex-row justify-evenly"},pe={class:"bg-white shadow overflow-hidden sm:rounded-lg"},ve={class:"border-b border-gray-200"},xe={class:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},ye=e("dt",{class:"text-sm font-medium text-gray-500"},"Model",-1),be={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},$e={class:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},we=e("dt",{class:"text-sm font-medium text-gray-500"},"Chassis Size",-1),ke={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},Se={class:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},Me=e("dt",{class:"text-sm font-medium text-gray-500"},"Serial",-1),Ie={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},Be={class:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},Fe=e("dt",{class:"text-sm font-medium text-gray-500"},"Motherboard",-1),Oe={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},Ee={class:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},Ce=e("dt",{class:"text-sm font-medium text-gray-500"}," Motherboard Serial ",-1),Re={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},je=["src"],Ne={key:1};function Le(a,s,o,t,n,i){const r=g("RefreshIconOutline"),c=g("ErrorMessage");return l(),d("div",ue,[e("div",me,[_e,e("div",he,[e("button",{type:"button",class:"card-refresh-btn",onClick:s[0]||(s[0]=u=>t.getSystemInfo())},[_(r,{class:"h-5 w-5","aria-hidden":"true"})])])]),e("div",fe,[t.fatalError?y("",!0):(l(),d("div",ge,[e("div",pe,[e("div",ve,[e("dl",null,[e("div",xe,[ye,e("dd",be,f(t.sysModel),1)]),e("div",$e,[we,e("dd",ke,f(t.sysChassis),1)]),e("div",Se,[Me,e("dd",Ie,f(t.sysSerial),1)]),e("div",Be,[Fe,e("dd",Oe,f(t.moboModel),1)]),e("div",Ee,[Ce,e("dd",Re,f(t.moboSerial),1)])])])]),e("img",{src:t.serverImgPath,class:"object-contain h-72 rounded-none justify-self-center"},null,8,je)])),t.fatalError?(l(),d("div",Ne,[_(c,{errorMsg:t.fatalErrorMsg,FixButton:t.showFixButton,FixButtonHandler:t.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):y("",!0)])])}var He=v(de,[["render",Le]]);const Pe={setup(){const a=[{socket:"CPU1",model:"Intel(R) Xeon(R) Silver 4210 CPU @ 2.20GHz (Generic)",temperature:"33.000 (C)"}],s=m(!1),o=m([]),t=m(!1),n=m(()=>{console.log("Default handler was run for the fix button.")}),i=async()=>{try{const r=await k(["/usr/share/cockpit/45drives-system-vue/scripts/cpu_info"],{err:"out",superuser:"require",promise:!0});let c=JSON.parse(r.stdout);console.log("cpuInfo: ",c),console.log("state.stdout",r.stdout);for(let u in c.cpus)console.log(a.value),console.log(u),a.value.push(u)}catch(r){console.log(r),s.value=!0,o.value.length=0,o.value.push(r.stderr),o.value.push("An error occurred when trying to run /usr/share/cockpit/45drives-system/scripts/cpu_info"),t.value=!1}};return i(),{cpus:a,fatalError:s,fatalErrorMsg:o,showFixButton:t,fixButtonHandler:n,getCpuInfo:i}},components:{RefreshIconOutline:b}},Ae={class:"card"},Ve={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},Xe=e("h3",{class:"text-lg leading-6 font-semibold"},"CPU",-1),De={class:"mt-3 sm:mt-0 sm:ml-4"},Te={type:"button",class:"card-refresh-btn"},ze={class:"card-body"},Ue={key:0,class:"mt-8 flex flex-col"},qe={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},Je={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},Qe={class:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"},Ge={class:"min-w-full divide-y divide-gray-300"},Ke=e("thead",{class:"bg-gray-50"},[e("tr",null,[e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"},"Socket"),e("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Model"),e("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Temperature")])],-1),Ye={class:"divide-y divide-gray-200 bg-white"},We={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"},Ze={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},et={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},tt={key:1};function st(a,s,o,t,n,i){const r=g("RefreshIconOutline"),c=g("ErrorMessage");return l(),d("div",Ae,[e("div",Ve,[Xe,e("div",De,[e("button",Te,[_(r,{class:"h-5 w-5","aria-hidden":"true"})])])]),e("div",ze,[t.fatalError?y("",!0):(l(),d("div",Ue,[e("div",qe,[e("div",Je,[e("div",Qe,[e("table",Ge,[Ke,e("tbody",Ye,[(l(!0),d(C,null,R(t.cpus,u=>(l(),d("tr",{key:u.socket},[e("td",We,f(u.socket),1),e("td",Ze,f(u.model),1),e("td",et,f(u.temperature),1)]))),128))])])])])])])),t.fatalError?(l(),d("div",tt,[_(c,{errorMsg:t.fatalErrorMsg,FixButton:t.showFixButton,FixButtonHandler:t.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):y("",!0)])])}var ot=v(Pe,[["render",st]]);const rt={components:{RefreshIconOutline:b}},nt={class:"card"},at={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},ct=e("h3",{class:"text-lg leading-6 font-semibold"},"PCI",-1),it={class:"mt-3 sm:mt-0 sm:ml-4"},lt={type:"button",class:"card-refresh-btn"},dt=e("div",{class:"card-body"}," This is a test... ",-1);function ut(a,s,o,t,n,i){const r=g("RefreshIconOutline");return l(),d("div",nt,[e("div",at,[ct,e("div",it,[e("button",lt,[_(r,{class:"h-5 w-5","aria-hidden":"true"})])])]),dt])}var mt=v(rt,[["render",ut]]);const _t={components:{RefreshIconOutline:b}},ht={class:"card"},ft={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},gt=e("h3",{class:"text-lg leading-6 font-semibold"},"RAM",-1),pt={class:"mt-3 sm:mt-0 sm:ml-4"},vt={type:"button",class:"card-refresh-btn"},xt=e("div",{class:"card-body"}," This is a test... ",-1);function yt(a,s,o,t,n,i){const r=g("RefreshIconOutline");return l(),d("div",ht,[e("div",ft,[gt,e("div",pt,[e("button",vt,[_(r,{class:"h-5 w-5","aria-hidden":"true"})])])]),xt])}var bt=v(_t,[["render",yt]]);const $t={components:{RefreshIconOutline:b}},wt={class:"card"},kt={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},St=e("h3",{class:"text-lg leading-6 font-semibold"},"Network",-1),Mt={class:"mt-3 sm:mt-0 sm:ml-4"},It={type:"button",class:"card-refresh-btn"},Bt=e("div",{class:"card-body"}," This is a test... ",-1);function Ft(a,s,o,t,n,i){const r=g("RefreshIconOutline");return l(),d("div",wt,[e("div",kt,[St,e("div",Mt,[e("button",It,[_(r,{class:"h-5 w-5","aria-hidden":"true"})])])]),Bt])}var Ot=v($t,[["render",Ft]]);const Et={components:{RefreshIconOutline:b}},Ct={class:"card"},Rt={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},jt=e("h3",{class:"text-lg leading-6 font-semibold"},"IPMI LAN",-1),Nt={class:"mt-3 sm:mt-0 sm:ml-4"},Lt={type:"button",class:"card-refresh-btn"},Ht=e("div",{class:"card-body"}," This is a test... ",-1);function Pt(a,s,o,t,n,i){const r=g("RefreshIconOutline");return l(),d("div",Ct,[e("div",Rt,[jt,e("div",Nt,[e("button",Lt,[_(r,{class:"h-5 w-5","aria-hidden":"true"})])])]),Ht])}var At=v(Et,[["render",Pt]]);const Vt={class:"h-full w-full overflow-y-scroll"},Xt={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-8 grow"},Dt={setup(a){return(s,o)=>(l(),d("div",Vt,[e("div",Xt,[_(He),_(ot),_(mt),_(bt),_(Ot),_(At)])]))}};const Tt={class:"h-full flex flex-col overflow-hidden"},zt={setup(a){return(s,o)=>(l(),d("div",Tt,[_(W,{moduleName:"System",centerName:""}),_(Dt)]))}};D(zt).mount("#app");
