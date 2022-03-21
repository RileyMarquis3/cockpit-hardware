var R=Object.defineProperty;var B=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var L=(r,s,o)=>s in r?R(r,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[s]=o,w=(r,s)=>{for(var o in s||(s={}))H.call(s,o)&&L(r,o,s[o]);if(B)for(var o of B(s))P.call(s,o)&&L(r,o,s[o]);return r};import{r as m,w as S,a as A,b as V,o as l,c as u,d as e,n as F,t as f,e as y,f as O,g,h as D,i as T,j as _,F as E,k as C,l as b,m as X}from"./vendor.52c3377c.js";const q=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}};q();var x=(r,s)=>{const o=r.__vccOpts||r;for(const[t,n]of s)o[t]=n;return o};const z={props:{moduleName:String,centerName:Boolean},setup(r){const s=m(!0);function o(){let t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,n=localStorage.getItem("color-theme");return n===null?t:n==="dark"}return s.value=o(),s.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),S(()=>s.value,(t,n)=>{localStorage.setItem("color-theme",t?"dark":"light"),t?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},{lazy:!1}),{darkMode:s}},components:{SunIcon:A,MoonIcon:V}},J={class:"p-2 flex items-baseline justify-between bg-neutral-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-gray-700",style:{"font-family":"Red Hat Text",position:"relative"}},U={class:"flex flex-row items-baseline basis-10"},Q=["src"],K={class:"text-2xl"},Y=e("span",{class:"text-gray-800 dark:text-red-600"},"Drives",-1),G={key:0,class:"ml-5 text-red-800 dark:text-white text-2xl"};function W(r,s,o,t,n,i){const a=g("SunIcon"),c=g("MoonIcon");return l(),u("div",J,[e("div",U,[e("img",{class:"w-6 h-6 text-gray-50 mr-0.5 self-center",src:t.darkMode?"img/45d-fan-dark.svg":"img/45d-fan-light.svg"},null,8,Q),e("h1",K,[e("span",{class:"text-red-800 dark:text-white font-bold",style:F({"font-family":"Source Sans Pro","font-size":"1.6rem"})},"45",4),Y]),o.centerName?y("",!0):(l(),u("h1",G,f(o.moduleName),1))]),o.centerName?(l(),u("h1",{key:0,class:"text-red-800 dark:text-white text-2xl",style:F({position:"absolute",left:"50%",top:"50%",transform:"translateX(-50%) translateY(-50%)"})},f(o.moduleName),5)):y("",!0),e("button",{onClick:s[0]||(s[0]=d=>t.darkMode=!t.darkMode),id:"theme-toggle",type:"button",class:"text-gray-500 dark:text-gray-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none rounded-lg text-sm p-2.5 justify-self-end w-10 h-10 basis-10"},[t.darkMode?(l(),O(a,{key:0})):(l(),O(c,{key:1}))])])}var Z=x(z,[["render",W]]);function k(r=[],s={},o="out"){const t=D({loading:!1,status:0,stdout:"",stderr:""}),n=Boolean(s.promise);s.superuser||(s.superuser="require"),s.err=o==="out"?"out":"message";async function i(){t.loading=!0,t.status=0,t.stdout="",t.stderr="",cockpit.spawn(r,s).then((a,c)=>{t.stdout=a,t.stderr=c}).catch((a,c)=>{var d;t.stderr=c!=null?c:a.message,t.status=(d=a.exit_status)!=null?d:-1}).finally(()=>{t.loading=!1})}return i(),n?new Promise((a,c)=>{S(t,()=>{t.loading||(t.status!==0?c(w({},t)):a(w({},t)))})}):t}const ee={components:{XCircleIcon:T},props:{errorMsg:Array,FixButton:Boolean,FixButtonHandler:Function},setup(r){const s=m(r.errorMsg),o=m(r.FixButtonHandler);return S(()=>r.FixButtonHandler,t=>{o.value=t}),{errorMsg:s,FixButtonHandler:o}}},te={class:"flex items-center justify-evenly"},se={class:"rounded-md bg-red-50 p-4"},oe={class:"flex"},re={class:"flex-shrink-0"},ne={class:"ml-3"},ae=e("h3",{class:"text-sm font-medium text-red-800"}," 45Drives System Encountered an Error ",-1),ce={class:"mt-2 text-sm text-red-700"},ie={role:"list",class:"list-disc pl-5 space-y-1 whitespace-pre"};function le(r,s,o,t,n,i){const a=g("XCircleIcon");return l(),u("div",te,[e("div",se,[e("div",oe,[e("div",re,[_(a,{class:"h-5 w-5 text-red-400","aria-hidden":"true"})]),e("div",ne,[ae,e("div",ce,[e("ul",ie,[(l(!0),u(E,null,C(t.errorMsg,c=>(l(),u("li",null,f(c),1))),256))])])])])]),o.FixButton?(l(),u("button",{key:0,onClick:s[0]||(s[0]=(...c)=>t.FixButtonHandler&&t.FixButtonHandler(...c)),type:"button",class:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"}," Fix ")):y("",!0)])}var j=x(ee,[["render",le]]);const de={components:{RefreshIconOutline:b,ErrorMessage:j},setup(){const r=m(""),s=m(""),o=m(""),t=m(""),n=m(""),i=m("img/45dlogo.png"),a=m(!1),c=m([]),d=m(!1),M=m(()=>{console.log("Default handler was run for the fix button.")}),I=p=>{if(p==""||p=="?")return"img/45dlogo.png";const h=/(Storinator|Stornado).*(AV15|Q30|S45|XL60|2U|C8|MI4).*/,v=p.match(h),N={Storinator:{AV15:"img/storinatorAV15.jpg",Q30:"img/storinatorQ30.jpg",S45:"img/storinatorS45.jpg",XL60:"img/storinatorXL60.jpg",C8:"img/storinatorC8.jpg",MI4:"img/storinatorMI4.jpg"},Stornado:{"2U":"img/stornado2U.jpg",AV15:"img/stornadoAV15.jpg"}};return v?N[v[1]][v[2]]:"img/45dlogo.png"},$=async()=>{r.value="Loading...",s.value="Loading...",o.value="Loading...",t.value="Loading...",n.value="Loading...",i.value="img/45dlogo.png";try{const p=await k(["/usr/share/cockpit/45drives-system-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let h=JSON.parse(p.stdout);r.value=h.Model,s.value=h["Chassis Size"],o.value=h.Serial,t.value=h.Motherboard.Manufacturer+" "+h.Motherboard["Product Name"],n.value=h.Motherboard["Serial Number"],i.value=I(h.Model)}catch(p){console.log(p);try{let h=JSON.parse(p.stderr);c.value.length=0,c.value.push(h.error_msg),c.value.push('Click "Fix" to run /opt/45drives/tools/server_identifier'),a.value=!0,h.error_msg=="/etc/45drives/server_info/server_info.json does not exist"&&(d.value=!0,M.value=async()=>{try{const v=await k(["/opt/45drives/tools/server_identifier"],{err:"out",superuser:"require",promise:!0});a.value=!1,c.value.length=0,d.value=!1,$()}catch(v){console.log(v),a.value=!0,c.value.length=0,c.value.push(v.stderr),c.value.push("An error occurred when running /opt/45drives/tools/server_identifier"),d.value=!1,console.log(d.value)}})}catch(h){console.log(h),a.value=!0,c.value.length=0,c.value.push(h.stderr),c.value.push("An error occurred when trying to run /usr/share/cockpit/45drives-system/scripts/server_info"),d.value=!1,console.log(d.value)}}};return $(),{sysModel:r,sysChassis:s,sysSerial:o,moboModel:t,moboSerial:n,serverImgPath:i,getSystemInfo:$,getSystemImgPath:I,fatalError:a,fatalErrorMsg:c,showFixButton:d,fixButtonHandler:M}}},ue={class:"card mt-2"},me={class:"card-header p-5 border-b border-gray-200 dark:border-gray-500 sm:flex sm:items-center sm:justify-between"},_e=e("h3",{class:"text-lg leading-6 font-semibold"},"System",-1),he={class:"mt-3 sm:mt-0 sm:ml-4"},fe={class:"card-body"},ge={key:0,class:"flex flex-row justify-evenly"},pe={class:"bg-white shadow overflow-hidden sm:rounded-lg"},xe={class:"border-b border-gray-200"},ve={class:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},ye=e("dt",{class:"text-sm font-medium text-gray-500"},"Model",-1),be={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},$e={class:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},we=e("dt",{class:"text-sm font-medium text-gray-500"},"Chassis Size",-1),ke={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},Se={class:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},Me=e("dt",{class:"text-sm font-medium text-gray-500"},"Serial",-1),Ie={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},Be={class:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},Le=e("dt",{class:"text-sm font-medium text-gray-500"},"Motherboard",-1),Fe={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},Oe={class:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},Ee=e("dt",{class:"text-sm font-medium text-gray-500"}," Motherboard Serial ",-1),Ce={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},je=["src"],Ne={key:1};function Re(r,s,o,t,n,i){const a=g("RefreshIconOutline"),c=g("ErrorMessage");return l(),u("div",ue,[e("div",me,[_e,e("div",he,[e("button",{type:"button",class:"card-refresh-btn",onClick:s[0]||(s[0]=d=>t.getSystemInfo())},[_(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),e("div",fe,[t.fatalError?y("",!0):(l(),u("div",ge,[e("div",pe,[e("div",xe,[e("dl",null,[e("div",ve,[ye,e("dd",be,f(t.sysModel),1)]),e("div",$e,[we,e("dd",ke,f(t.sysChassis),1)]),e("div",Se,[Me,e("dd",Ie,f(t.sysSerial),1)]),e("div",Be,[Le,e("dd",Fe,f(t.moboModel),1)]),e("div",Oe,[Ee,e("dd",Ce,f(t.moboSerial),1)])])])]),e("img",{src:t.serverImgPath,class:"object-contain h-72 rounded-none justify-self-center"},null,8,je)])),t.fatalError?(l(),u("div",Ne,[_(c,{errorMsg:t.fatalErrorMsg,FixButton:t.showFixButton,FixButtonHandler:t.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):y("",!0)])])}var He=x(de,[["render",Re]]);const Pe={setup(){const r=m([{socket:"Loading...",model:"Loading...",maxSpeed:"Loading...",currentSpeed:"Loading...",temperature:"Loading..."}]),s=m(!1),o=m([]),t=m(!1),n=m(()=>{console.log("Default handler was run for the fix button.")}),i=async()=>{r.value.length=0,r.value.push({socket:"Loading...",model:"Loading...",maxSpeed:"Loading...",currentSpeed:"Loading...",temperature:"Loading..."});try{const a=await k(["/usr/share/cockpit/45drives-system-vue/scripts/cpu_info"],{err:"out",superuser:"require",promise:!0});let c=JSON.parse(a.stdout);r.value.length=0,c.cpus.forEach(d=>{r.value.push(d)}),s.value=!1,o.value.length=0,t.value=!1}catch(a){console.log(a),s.value=!0,o.value.length=0,o.value.push(a.stderr),o.value.push("An error occurred when trying to run /usr/share/cockpit/45drives-system/scripts/cpu_info"),t.value=!1}};return i(),{cpus:r,fatalError:s,fatalErrorMsg:o,showFixButton:t,fixButtonHandler:n,getCpuInfo:i}},components:{RefreshIconOutline:b,ErrorMessage:j}},Ae={class:"card"},Ve={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},De=e("h3",{class:"text-lg leading-6 font-semibold"},"CPU",-1),Te={class:"mt-3 sm:mt-0 sm:ml-4"},Xe={class:"card-body"},qe={key:0,class:"mt-2 flex flex-col"},ze={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},Je={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},Ue={class:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"},Qe={class:"min-w-full divide-y divide-gray-300"},Ke=e("thead",{class:"bg-gray-50"},[e("tr",null,[e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"},"Socket"),e("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Model"),e("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Max Speed"),e("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Current Speed"),e("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Temperature")])],-1),Ye={class:"divide-y divide-gray-200 bg-white"},Ge={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"},We={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},Ze={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},et={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},tt={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},st={key:1};function ot(r,s,o,t,n,i){const a=g("RefreshIconOutline"),c=g("ErrorMessage");return l(),u("div",Ae,[e("div",Ve,[De,e("div",Te,[e("button",{type:"button",class:"card-refresh-btn",onClick:s[0]||(s[0]=d=>t.getCpuInfo())},[_(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),e("div",Xe,[t.fatalError?y("",!0):(l(),u("div",qe,[e("div",ze,[e("div",Je,[e("div",Ue,[e("table",Qe,[Ke,e("tbody",Ye,[(l(!0),u(E,null,C(t.cpus,d=>(l(),u("tr",{key:d.socket},[e("td",Ge,f(d.socket),1),e("td",We,f(d.model),1),e("td",Ze,f(d.maxSpeed),1),e("td",et,f(d.currentSpeed),1),e("td",tt,f(d.temperature),1)]))),128))])])])])])])),t.fatalError?(l(),u("div",st,[_(c,{errorMsg:t.fatalErrorMsg,FixButton:t.showFixButton,FixButtonHandler:t.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):y("",!0)])])}var rt=x(Pe,[["render",ot]]);const nt={components:{RefreshIconOutline:b}},at={class:"card"},ct={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},it=e("h3",{class:"text-lg leading-6 font-semibold"},"PCI",-1),lt={class:"mt-3 sm:mt-0 sm:ml-4"},dt={type:"button",class:"card-refresh-btn"},ut=e("div",{class:"card-body"}," This is a test... ",-1);function mt(r,s,o,t,n,i){const a=g("RefreshIconOutline");return l(),u("div",at,[e("div",ct,[it,e("div",lt,[e("button",dt,[_(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),ut])}var _t=x(nt,[["render",mt]]);const ht={components:{RefreshIconOutline:b}},ft={class:"card"},gt={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},pt=e("h3",{class:"text-lg leading-6 font-semibold"},"RAM",-1),xt={class:"mt-3 sm:mt-0 sm:ml-4"},vt={type:"button",class:"card-refresh-btn"},yt=e("div",{class:"card-body"}," This is a test... ",-1);function bt(r,s,o,t,n,i){const a=g("RefreshIconOutline");return l(),u("div",ft,[e("div",gt,[pt,e("div",xt,[e("button",vt,[_(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),yt])}var $t=x(ht,[["render",bt]]);const wt={components:{RefreshIconOutline:b}},kt={class:"card"},St={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},Mt=e("h3",{class:"text-lg leading-6 font-semibold"},"Network",-1),It={class:"mt-3 sm:mt-0 sm:ml-4"},Bt={type:"button",class:"card-refresh-btn"},Lt=e("div",{class:"card-body"}," This is a test... ",-1);function Ft(r,s,o,t,n,i){const a=g("RefreshIconOutline");return l(),u("div",kt,[e("div",St,[Mt,e("div",It,[e("button",Bt,[_(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),Lt])}var Ot=x(wt,[["render",Ft]]);const Et={components:{RefreshIconOutline:b}},Ct={class:"card"},jt={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},Nt=e("h3",{class:"text-lg leading-6 font-semibold"},"IPMI LAN",-1),Rt={class:"mt-3 sm:mt-0 sm:ml-4"},Ht={type:"button",class:"card-refresh-btn"},Pt=e("div",{class:"card-body"}," This is a test... ",-1);function At(r,s,o,t,n,i){const a=g("RefreshIconOutline");return l(),u("div",Ct,[e("div",jt,[Nt,e("div",Rt,[e("button",Ht,[_(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),Pt])}var Vt=x(Et,[["render",At]]);const Dt={class:"h-full w-full overflow-y-scroll"},Tt={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-8 grow"},Xt={setup(r){return(s,o)=>(l(),u("div",Dt,[e("div",Tt,[_(He),_(rt),_(_t),_($t),_(Ot),_(Vt)])]))}};const qt={class:"h-full flex flex-col overflow-hidden"},zt={setup(r){return(s,o)=>(l(),u("div",qt,[_(Z,{moduleName:"System",centerName:""}),_(Xt)]))}};X(zt).mount("#app");
