var R=Object.defineProperty;var B=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var L=(r,s,o)=>s in r?R(r,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[s]=o,$=(r,s)=>{for(var o in s||(s={}))H.call(s,o)&&L(r,o,s[o]);if(B)for(var o of B(s))P.call(s,o)&&L(r,o,s[o]);return r};import{r as m,w as S,a as A,b as V,o as i,c as u,d as e,n as F,t as f,e as b,f as O,g as p,h as D,i as T,j as _,F as E,k as C,l as y,m as X}from"./vendor.52c3377c.js";const q=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const d of n)if(d.type==="childList")for(const a of d.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const d={};return n.integrity&&(d.integrity=n.integrity),n.referrerpolicy&&(d.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?d.credentials="include":n.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function t(n){if(n.ep)return;n.ep=!0;const d=o(n);fetch(n.href,d)}};q();var x=(r,s)=>{const o=r.__vccOpts||r;for(const[t,n]of s)o[t]=n;return o};const z={props:{moduleName:String,centerName:Boolean},setup(r){const s=m(!0);function o(){let t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,n=localStorage.getItem("color-theme");return n===null?t:n==="dark"}return s.value=o(),s.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),S(()=>s.value,(t,n)=>{localStorage.setItem("color-theme",t?"dark":"light"),t?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},{lazy:!1}),{darkMode:s}},components:{SunIcon:A,MoonIcon:V}},J={class:"p-2 flex items-baseline justify-between bg-neutral-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-gray-700",style:{"font-family":"Red Hat Text",position:"relative"}},U={class:"flex flex-row items-baseline basis-10"},Q=["src"],K={class:"text-2xl"},Y=e("span",{class:"text-gray-800 dark:text-red-600"},"Drives",-1),G={key:0,class:"ml-5 text-red-800 dark:text-white text-2xl"};function W(r,s,o,t,n,d){const a=p("SunIcon"),c=p("MoonIcon");return i(),u("div",J,[e("div",U,[e("img",{class:"w-6 h-6 text-gray-50 mr-0.5 self-center",src:t.darkMode?"img/45d-fan-dark.svg":"img/45d-fan-light.svg"},null,8,Q),e("h1",K,[e("span",{class:"text-red-800 dark:text-white font-bold",style:F({"font-family":"Source Sans Pro","font-size":"1.6rem"})},"45",4),Y]),o.centerName?b("",!0):(i(),u("h1",G,f(o.moduleName),1))]),o.centerName?(i(),u("h1",{key:0,class:"text-red-800 dark:text-white text-2xl",style:F({position:"absolute",left:"50%",top:"50%",transform:"translateX(-50%) translateY(-50%)"})},f(o.moduleName),5)):b("",!0),e("button",{onClick:s[0]||(s[0]=l=>t.darkMode=!t.darkMode),id:"theme-toggle",type:"button",class:"text-gray-500 dark:text-gray-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none rounded-lg text-sm p-2.5 justify-self-end w-10 h-10 basis-10"},[t.darkMode?(i(),O(a,{key:0})):(i(),O(c,{key:1}))])])}var Z=x(z,[["render",W]]);function w(r=[],s={},o="out"){const t=D({loading:!1,status:0,stdout:"",stderr:""}),n=Boolean(s.promise);s.superuser||(s.superuser="require"),s.err=o==="out"?"out":"message";async function d(){t.loading=!0,t.status=0,t.stdout="",t.stderr="",cockpit.spawn(r,s).then((a,c)=>{t.stdout=a,t.stderr=c}).catch((a,c)=>{var l;t.stderr=c!=null?c:a.message,t.status=(l=a.exit_status)!=null?l:-1}).finally(()=>{t.loading=!1})}return d(),n?new Promise((a,c)=>{S(t,()=>{t.loading||(t.status!==0?c($({},t)):a($({},t)))})}):t}const ee={components:{XCircleIcon:T},props:{errorMsg:Array,FixButton:Boolean,FixButtonHandler:Function},setup(r){const s=m(r.errorMsg),o=m(r.FixButtonHandler);return S(()=>r.FixButtonHandler,t=>{o.value=t}),{errorMsg:s,FixButtonHandler:o}}},te={class:"flex items-center justify-evenly"},se={class:"rounded-md bg-red-50 p-4"},oe={class:"flex"},re={class:"flex-shrink-0"},ne={class:"ml-3"},ae=e("h3",{class:"text-sm font-medium text-red-800"}," 45Drives System Encountered an Error ",-1),ce={class:"mt-2 text-sm text-red-700"},de={role:"list",class:"list-disc pl-5 space-y-1 whitespace-pre"};function ie(r,s,o,t,n,d){const a=p("XCircleIcon");return i(),u("div",te,[e("div",se,[e("div",oe,[e("div",re,[_(a,{class:"h-5 w-5 text-red-400","aria-hidden":"true"})]),e("div",ne,[ae,e("div",ce,[e("ul",de,[(i(!0),u(E,null,C(t.errorMsg,c=>(i(),u("li",null,f(c),1))),256))])])])])]),o.FixButton?(i(),u("button",{key:0,onClick:s[0]||(s[0]=(...c)=>t.FixButtonHandler&&t.FixButtonHandler(...c)),type:"button",class:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"}," Fix ")):b("",!0)])}var j=x(ee,[["render",ie]]);const le={components:{RefreshIconOutline:y,ErrorMessage:j},setup(){const r=m(""),s=m(""),o=m(""),t=m(""),n=m(""),d=m("img/45dlogo.png"),a=m(!1),c=m([]),l=m(!1),M=m(()=>{console.log("Default handler was run for the fix button.")}),I=g=>{if(g==""||g=="?")return"img/45dlogo.png";const h=/(Storinator|Stornado).*(AV15|Q30|S45|XL60|2U|C8|MI4).*/,v=g.match(h),N={Storinator:{AV15:"img/storinatorAV15.jpg",Q30:"img/storinatorQ30.jpg",S45:"img/storinatorS45.jpg",XL60:"img/storinatorXL60.jpg",C8:"img/storinatorC8.jpg",MI4:"img/storinatorMI4.jpg"},Stornado:{"2U":"img/stornado2U.jpg",AV15:"img/stornadoAV15.jpg"}};return v?N[v[1]][v[2]]:"img/45dlogo.png"},k=async()=>{r.value="Loading...",s.value="Loading...",o.value="Loading...",t.value="Loading...",n.value="Loading...",d.value="img/45dlogo.png";try{const g=await w(["/usr/share/cockpit/45drives-system-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let h=JSON.parse(g.stdout);r.value=h.Model,s.value=h["Chassis Size"],o.value=h.Serial,t.value=h.Motherboard.Manufacturer+" "+h.Motherboard["Product Name"],n.value=h.Motherboard["Serial Number"],d.value=I(h.Model)}catch(g){console.log(g);try{let h=JSON.parse(g.stderr);c.value.length=0,c.value.push(h.error_msg),c.value.push('Click "Fix" to run /opt/45drives/tools/server_identifier'),a.value=!0,h.error_msg=="/etc/45drives/server_info/server_info.json does not exist"&&(l.value=!0,M.value=async()=>{try{const v=await w(["/opt/45drives/tools/server_identifier"],{err:"out",superuser:"require",promise:!0});a.value=!1,c.value.length=0,l.value=!1,k()}catch(v){console.log(v),a.value=!0,c.value.length=0,c.value.push(v.stderr),c.value.push("An error occurred when running /opt/45drives/tools/server_identifier"),l.value=!1,console.log(l.value)}})}catch(h){console.log(h),a.value=!0,c.value.length=0,c.value.push(h.stderr),c.value.push("An error occurred when trying to run /usr/share/cockpit/45drives-system/scripts/server_info"),l.value=!1,console.log(l.value)}}};return k(),{sysModel:r,sysChassis:s,sysSerial:o,moboModel:t,moboSerial:n,serverImgPath:d,getSystemInfo:k,getSystemImgPath:I,fatalError:a,fatalErrorMsg:c,showFixButton:l,fixButtonHandler:M}}},ue={class:"card mt-2"},me={class:"card-header p-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},_e=e("h3",{class:"text-lg leading-6 font-semibold"},"System",-1),he={class:"mt-3 sm:mt-0 sm:ml-4"},fe={class:"card-body dark:bg-stone-700"},pe={key:0,class:"flex flex-row justify-evenly"},ge={class:"bg-white dark:bg-stone-600 shadow overflow-hidden sm:rounded-lg"},xe={class:"border-b border-stone-200 dark:border-stone-600"},ve={class:"bg-stone-50 dark:bg-stone-600 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},be=e("dt",{class:"text-sm font-medium text-stone-900 dark:text-stone-200"},"Model",-1),ye={class:"mt-1 text-sm text-stone-500 dark:text-stone-400 sm:mt-0 sm:col-span-2"},ke={class:"bg-white dark:bg-stone-500 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},$e=e("dt",{class:"text-sm font-medium text-stone-900 dark:text-stone-200"},"Chassis Size",-1),we={class:"mt-1 text-sm text-stone-500 dark:text-stone-400 sm:mt-0 sm:col-span-2"},Se={class:"bg-stone-50 dark:bg-stone-600 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},Me=e("dt",{class:"text-sm font-medium text-stone-900 dark:text-stone-200"},"Serial",-1),Ie={class:"mt-1 text-sm text-stone-500 dark:text-stone-400 sm:mt-0 sm:col-span-2"},Be={class:"bg-white dark:bg-stone-500 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},Le=e("dt",{class:"text-sm font-medium text-stone-900 dark:text-stone-200"},"Motherboard",-1),Fe={class:"mt-1 text-sm text-stone-500 dark:text-stone-400 sm:mt-0 sm:col-span-2"},Oe={class:"bg-stone-50 dark:bg-stone-600 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},Ee=e("dt",{class:"text-sm font-medium text-stone-900 dark:text-stone-200"}," Motherboard Serial ",-1),Ce={class:"mt-1 text-sm text-stone-500 dark:text-stone-400 sm:mt-0 sm:col-span-2"},je=["src"],Ne={key:1};function Re(r,s,o,t,n,d){const a=p("RefreshIconOutline"),c=p("ErrorMessage");return i(),u("div",ue,[e("div",me,[_e,e("div",he,[e("button",{type:"button",class:"card-refresh-btn",onClick:s[0]||(s[0]=l=>t.getSystemInfo())},[_(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),e("div",fe,[t.fatalError?b("",!0):(i(),u("div",pe,[e("div",ge,[e("div",xe,[e("dl",null,[e("div",ve,[be,e("dd",ye,f(t.sysModel),1)]),e("div",ke,[$e,e("dd",we,f(t.sysChassis),1)]),e("div",Se,[Me,e("dd",Ie,f(t.sysSerial),1)]),e("div",Be,[Le,e("dd",Fe,f(t.moboModel),1)]),e("div",Oe,[Ee,e("dd",Ce,f(t.moboSerial),1)])])])]),e("img",{src:t.serverImgPath,class:"object-contain h-72 rounded-none justify-self-center"},null,8,je)])),t.fatalError?(i(),u("div",Ne,[_(c,{errorMsg:t.fatalErrorMsg,FixButton:t.showFixButton,FixButtonHandler:t.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):b("",!0)])])}var He=x(le,[["render",Re]]);const Pe={setup(){const r=m([{socket:"Loading...",model:"Loading...",maxSpeed:"Loading...",currentSpeed:"Loading...",temperature:"Loading..."}]),s=m(!1),o=m([]),t=m(!1),n=m(()=>{console.log("Default handler was run for the fix button.")}),d=async()=>{r.value.length=0,r.value.push({socket:"Loading...",model:"Loading...",maxSpeed:"Loading...",currentSpeed:"Loading...",temperature:"Loading..."});try{const a=await w(["/usr/share/cockpit/45drives-system-vue/scripts/cpu_info"],{err:"out",superuser:"require",promise:!0});let c=JSON.parse(a.stdout);r.value.length=0,c.cpus.forEach(l=>{r.value.push(l)}),s.value=!1,o.value.length=0,t.value=!1}catch(a){console.log(a),s.value=!0,o.value.length=0,o.value.push(a.stderr),o.value.push("An error occurred when trying to run /usr/share/cockpit/45drives-system/scripts/cpu_info"),t.value=!1}};return d(),{cpus:r,fatalError:s,fatalErrorMsg:o,showFixButton:t,fixButtonHandler:n,getCpuInfo:d}},components:{RefreshIconOutline:y,ErrorMessage:j}},Ae={class:"card"},Ve={class:"card-header p-5 border-b border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},De=e("h3",{class:"text-lg leading-6 font-semibold"},"CPU",-1),Te={class:"mt-3 sm:mt-0 sm:ml-4"},Xe={class:"card-body dark:bg-stone-700"},qe={key:0,class:"mt-2 flex flex-col"},ze={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},Je={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},Ue={class:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"},Qe={class:"min-w-full divide-y divide-stone-400"},Ke=e("thead",{class:"bg-stone-50 dark:bg-stone-500"},[e("tr",null,[e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-stone-900 dark:text-stone-200 sm:pl-6"},"Socket"),e("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-stone-900 dark:text-stone-200"},"Model"),e("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-stone-900 dark:text-stone-200"},"Max Speed"),e("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-stone-900 dark:text-stone-200"},"Current Speed"),e("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-stone-900 dark:text-stone-200"},"Temperature")])],-1),Ye={class:"divide-y divide-stone-200 bg-white dark:bg-stone-600"},Ge={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-stone-900 dark:text-stone-200 sm:pl-6"},We={class:"whitespace-nowrap px-3 py-4 text-sm text-stone-500 dark:text-stone-400"},Ze={class:"whitespace-nowrap px-3 py-4 text-sm text-stone-500 dark:text-stone-400"},et={class:"whitespace-nowrap px-3 py-4 text-sm text-stone-500 dark:text-stone-400"},tt={class:"whitespace-nowrap px-3 py-4 text-sm text-stone-500 dark:text-stone-400"},st={key:1};function ot(r,s,o,t,n,d){const a=p("RefreshIconOutline"),c=p("ErrorMessage");return i(),u("div",Ae,[e("div",Ve,[De,e("div",Te,[e("button",{type:"button",class:"card-refresh-btn",onClick:s[0]||(s[0]=l=>t.getCpuInfo())},[_(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),e("div",Xe,[t.fatalError?b("",!0):(i(),u("div",qe,[e("div",ze,[e("div",Je,[e("div",Ue,[e("table",Qe,[Ke,e("tbody",Ye,[(i(!0),u(E,null,C(t.cpus,l=>(i(),u("tr",{key:l.socket},[e("td",Ge,f(l.socket),1),e("td",We,f(l.model),1),e("td",Ze,f(l.maxSpeed),1),e("td",et,f(l.currentSpeed),1),e("td",tt,f(l.temperature),1)]))),128))])])])])])])),t.fatalError?(i(),u("div",st,[_(c,{errorMsg:t.fatalErrorMsg,FixButton:t.showFixButton,FixButtonHandler:t.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):b("",!0)])])}var rt=x(Pe,[["render",ot]]);const nt={components:{RefreshIconOutline:y}},at={class:"card"},ct={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},dt=e("h3",{class:"text-lg leading-6 font-semibold"},"PCI",-1),it={class:"mt-3 sm:mt-0 sm:ml-4"},lt={type:"button",class:"card-refresh-btn"},ut=e("div",{class:"card-body"}," This is a test... ",-1);function mt(r,s,o,t,n,d){const a=p("RefreshIconOutline");return i(),u("div",at,[e("div",ct,[dt,e("div",it,[e("button",lt,[_(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),ut])}var _t=x(nt,[["render",mt]]);const ht={components:{RefreshIconOutline:y}},ft={class:"card"},pt={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},gt=e("h3",{class:"text-lg leading-6 font-semibold"},"RAM",-1),xt={class:"mt-3 sm:mt-0 sm:ml-4"},vt={type:"button",class:"card-refresh-btn"},bt=e("div",{class:"card-body"}," This is a test... ",-1);function yt(r,s,o,t,n,d){const a=p("RefreshIconOutline");return i(),u("div",ft,[e("div",pt,[gt,e("div",xt,[e("button",vt,[_(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),bt])}var kt=x(ht,[["render",yt]]);const $t={components:{RefreshIconOutline:y}},wt={class:"card"},St={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},Mt=e("h3",{class:"text-lg leading-6 font-semibold"},"Network",-1),It={class:"mt-3 sm:mt-0 sm:ml-4"},Bt={type:"button",class:"card-refresh-btn"},Lt=e("div",{class:"card-body"}," This is a test... ",-1);function Ft(r,s,o,t,n,d){const a=p("RefreshIconOutline");return i(),u("div",wt,[e("div",St,[Mt,e("div",It,[e("button",Bt,[_(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),Lt])}var Ot=x($t,[["render",Ft]]);const Et={components:{RefreshIconOutline:y}},Ct={class:"card"},jt={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},Nt=e("h3",{class:"text-lg leading-6 font-semibold"},"IPMI LAN",-1),Rt={class:"mt-3 sm:mt-0 sm:ml-4"},Ht={type:"button",class:"card-refresh-btn"},Pt=e("div",{class:"card-body"}," This is a test... ",-1);function At(r,s,o,t,n,d){const a=p("RefreshIconOutline");return i(),u("div",Ct,[e("div",jt,[Nt,e("div",Rt,[e("button",Ht,[_(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),Pt])}var Vt=x(Et,[["render",At]]);const Dt={class:"h-full w-full overflow-y-scroll"},Tt={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-8 grow"},Xt={setup(r){return(s,o)=>(i(),u("div",Dt,[e("div",Tt,[_(He),_(rt),_(_t),_(kt),_(Ot),_(Vt)])]))}};const qt={class:"h-full flex flex-col overflow-hidden"},zt={setup(r){return(s,o)=>(i(),u("div",qt,[_(Z,{moduleName:"System",centerName:""}),_(Xt)]))}};X(zt).mount("#app");
