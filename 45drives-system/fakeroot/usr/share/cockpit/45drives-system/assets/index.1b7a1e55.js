var j=Object.defineProperty;var F=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var C=(r,s,o)=>s in r?j(r,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[s]=o,L=(r,s)=>{for(var o in s||(s={}))A.call(s,o)&&C(r,o,s[o]);if(F)for(var o of F(s))R.call(s,o)&&C(r,o,s[o]);return r};import{r as u,w as B,a as P,b as D,o as c,c as m,d as t,n as H,t as p,e as f,f as O,g as _,h as T,i as q,j as x,F as k,k as w,l as $,m as J}from"./vendor.52c3377c.js";const V=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))e(d);new MutationObserver(d=>{for(const i of d)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function o(d){const i={};return d.integrity&&(i.integrity=d.integrity),d.referrerpolicy&&(i.referrerPolicy=d.referrerpolicy),d.crossorigin==="use-credentials"?i.credentials="include":d.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(d){if(d.ep)return;d.ep=!0;const i=o(d);fetch(d.href,i)}};V();var v=(r,s)=>{const o=r.__vccOpts||r;for(const[e,d]of s)o[e]=d;return o};const X={props:{moduleName:String,centerName:Boolean},setup(r){const s=u(!0);function o(){let e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,d=localStorage.getItem("color-theme");return d===null?e:d==="dark"}return s.value=o(),s.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),B(()=>s.value,(e,d)=>{localStorage.setItem("color-theme",e?"dark":"light"),e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},{lazy:!1}),{darkMode:s}},components:{SunIcon:P,MoonIcon:D}},z={class:"p-2 flex items-baseline justify-between bg-neutral-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-gray-700",style:{"font-family":"Red Hat Text",position:"relative"}},U={class:"flex flex-row items-baseline basis-10"},Q=["src"],K={class:"text-2xl"},Y=t("span",{class:"text-gray-800 dark:text-red-600"},"Drives",-1),G={key:0,class:"ml-5 text-red-800 dark:text-white text-2xl"};function W(r,s,o,e,d,i){const a=_("SunIcon"),l=_("MoonIcon");return c(),m("div",z,[t("div",U,[t("img",{class:"w-6 h-6 text-gray-50 mr-0.5 self-center",src:e.darkMode?"img/45d-fan-dark.svg":"img/45d-fan-light.svg"},null,8,Q),t("h1",K,[t("span",{class:"text-red-800 dark:text-white font-bold",style:H({"font-family":"Source Sans Pro","font-size":"1.6rem"})},"45",4),Y]),o.centerName?f("",!0):(c(),m("h1",G,p(o.moduleName),1))]),o.centerName?(c(),m("h1",{key:0,class:"text-red-800 dark:text-white text-2xl",style:H({position:"absolute",left:"50%",top:"50%",transform:"translateX(-50%) translateY(-50%)"})},p(o.moduleName),5)):f("",!0),t("button",{onClick:s[0]||(s[0]=n=>e.darkMode=!e.darkMode),id:"theme-toggle",type:"button",class:"text-gray-500 dark:text-gray-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none rounded-lg text-sm p-2.5 justify-self-end w-10 h-10 basis-10"},[e.darkMode?(c(),O(a,{key:0})):(c(),O(l,{key:1}))])])}var Z=v(X,[["render",W]]);function b(r=[],s={},o="out"){const e=T({loading:!1,status:0,stdout:"",stderr:""}),d=Boolean(s.promise);s.superuser||(s.superuser="require"),s.err=o==="out"?"out":"message";async function i(){e.loading=!0,e.status=0,e.stdout="",e.stderr="",cockpit.spawn(r,s).then((a,l)=>{e.stdout=a,e.stderr=l}).catch((a,l)=>{var n;e.stderr=l!=null?l:a.message,e.status=(n=a.exit_status)!=null?n:-1}).finally(()=>{e.loading=!1})}return i(),d?new Promise((a,l)=>{B(e,()=>{e.loading||(e.status!==0?l(L({},e)):a(L({},e)))})}):e}const tt={components:{XCircleIcon:q},props:{errorMsg:Array,FixButton:Boolean,FixButtonHandler:Function},setup(r){const s=u(r.errorMsg),o=u(r.FixButtonHandler);return B(()=>r.FixButtonHandler,e=>{o.value=e}),{errorMsg:s,FixButtonHandler:o}}},et={class:"flex items-center justify-evenly"},st={class:"rounded-md bg-red-50 p-4"},ot={class:"flex"},nt={class:"flex-shrink-0"},rt={class:"ml-3"},at=t("h3",{class:"text-sm font-medium text-red-800"}," 45Drives System Encountered an Error ",-1),lt={class:"mt-2 text-sm text-red-700"},dt={role:"list",class:"list-disc pl-5 space-y-1 whitespace-pre"};function it(r,s,o,e,d,i){const a=_("XCircleIcon");return c(),m("div",et,[t("div",st,[t("div",ot,[t("div",nt,[x(a,{class:"h-5 w-5 text-red-400","aria-hidden":"true"})]),t("div",rt,[at,t("div",lt,[t("ul",dt,[(c(!0),m(k,null,w(e.errorMsg,l=>(c(),m("li",null,p(l),1))),256))])])])])]),o.FixButton?(c(),m("button",{key:0,onClick:s[0]||(s[0]=(...l)=>e.FixButtonHandler&&e.FixButtonHandler(...l)),type:"button",class:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"}," Fix ")):f("",!0)])}var S=v(tt,[["render",it]]);const ct={components:{RefreshIconOutline:$,ErrorMessage:S},setup(){const r=u(""),s=u(""),o=u(""),e=u(""),d=u(""),i=u("img/45dlogo.png"),a=u(!1),l=u([]),n=u(!1),I=u(()=>{console.log("Default handler was run for the fix button.")}),E=g=>{if(g==""||g=="?")return"img/45dlogo.png";const h=/(Storinator|Stornado).*(AV15|Q30|S45|XL60|2U|C8|MI4).*/,y=g.match(h),N={Storinator:{AV15:"img/storinatorAV15.jpg",Q30:"img/storinatorQ30.jpg",S45:"img/storinatorS45.jpg",XL60:"img/storinatorXL60.jpg",C8:"img/storinatorC8.jpg",MI4:"img/storinatorMI4.jpg"},Stornado:{"2U":"img/stornado2U.jpg",AV15:"img/stornadoAV15.jpg"}};return y?N[y[1]][y[2]]:"img/45dlogo.png"},M=async()=>{r.value="Loading...",s.value="Loading...",o.value="Loading...",e.value="Loading...",d.value="Loading...",i.value="img/45dlogo.png";try{const g=await b(["/usr/share/cockpit/45drives-system-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let h=JSON.parse(g.stdout);r.value=h.Model,s.value=h["Chassis Size"],o.value=h.Serial,e.value=h.Motherboard.Manufacturer+" "+h.Motherboard["Product Name"],d.value=h.Motherboard["Serial Number"],i.value=E(h.Model)}catch(g){console.log(g);try{let h=JSON.parse(g.stderr);l.value.length=0,l.value.push(h.error_msg),l.value.push('Click "Fix" to run /opt/45drives/tools/server_identifier'),a.value=!0,h.error_msg=="/etc/45drives/server_info/server_info.json does not exist"&&(n.value=!0,I.value=async()=>{try{const y=await b(["/opt/45drives/tools/server_identifier"],{err:"out",superuser:"require",promise:!0});a.value=!1,l.value.length=0,n.value=!1,M()}catch(y){console.log(y),a.value=!0,l.value.length=0,l.value.push(y.stderr),l.value.push("An error occurred when running /opt/45drives/tools/server_identifier"),n.value=!1,console.log(n.value)}})}catch(h){console.log(h),a.value=!0,l.value.length=0,l.value.push(h.stderr),l.value.push("An error occurred when trying to run /usr/share/cockpit/45drives-system/scripts/server_info"),n.value=!1,console.log(n.value)}}};return M(),{sysModel:r,sysChassis:s,sysSerial:o,moboModel:e,moboSerial:d,serverImgPath:i,getSystemInfo:M,getSystemImgPath:E,fatalError:a,fatalErrorMsg:l,showFixButton:n,fixButtonHandler:I}}},ut={class:"card mt-2"},mt={class:"card-header p-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},pt=t("h3",{class:"text-lg leading-6 font-semibold"},"System",-1),xt={class:"mt-3 sm:mt-0 sm:ml-4"},ht={class:"card-body dark:bg-stone-700"},ft={key:0,class:"flex flex-row justify-evenly"},_t={class:"bg-white dark:bg-stone-600 shadow overflow-hidden sm:rounded-lg"},gt={class:"border-b border-stone-200 dark:border-stone-600"},vt={class:"bg-stone-50 dark:bg-stone-600 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},yt=t("dt",{class:"text-sm font-medium text-stone-900 dark:text-stone-200"},"Model",-1),bt={class:"mt-1 text-sm text-stone-500 dark:text-stone-400 sm:mt-0 sm:col-span-2"},kt={class:"bg-white dark:bg-stone-500 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},wt=t("dt",{class:"text-sm font-medium text-stone-900 dark:text-stone-200"},"Chassis Size",-1),$t={class:"mt-1 text-sm text-stone-500 dark:text-stone-400 sm:mt-0 sm:col-span-2"},St={class:"bg-stone-50 dark:bg-stone-600 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},Mt=t("dt",{class:"text-sm font-medium text-stone-900 dark:text-stone-200"},"Serial",-1),Lt={class:"mt-1 text-sm text-stone-500 dark:text-stone-400 sm:mt-0 sm:col-span-2"},Bt={class:"bg-white dark:bg-stone-500 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},It=t("dt",{class:"text-sm font-medium text-stone-900 dark:text-stone-200"},"Motherboard",-1),Et={class:"mt-1 text-sm text-stone-500 dark:text-stone-400 sm:mt-0 sm:col-span-2"},Ft={class:"bg-stone-50 dark:bg-stone-600 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},Ct=t("dt",{class:"text-sm font-medium text-stone-900 dark:text-stone-200"}," Motherboard Serial ",-1),Ht={class:"mt-1 text-sm text-stone-500 dark:text-stone-400 sm:mt-0 sm:col-span-2"},Ot=["src"],Nt={key:1};function jt(r,s,o,e,d,i){const a=_("RefreshIconOutline"),l=_("ErrorMessage");return c(),m("div",ut,[t("div",mt,[pt,t("div",xt,[t("button",{type:"button",class:"card-refresh-btn",onClick:s[0]||(s[0]=n=>e.getSystemInfo())},[x(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),t("div",ht,[e.fatalError?f("",!0):(c(),m("div",ft,[t("div",_t,[t("div",gt,[t("dl",null,[t("div",vt,[yt,t("dd",bt,p(e.sysModel),1)]),t("div",kt,[wt,t("dd",$t,p(e.sysChassis),1)]),t("div",St,[Mt,t("dd",Lt,p(e.sysSerial),1)]),t("div",Bt,[It,t("dd",Et,p(e.moboModel),1)]),t("div",Ft,[Ct,t("dd",Ht,p(e.moboSerial),1)])])])]),t("img",{src:e.serverImgPath,class:"object-contain h-72 rounded-none justify-self-center"},null,8,Ot)])),e.fatalError?(c(),m("div",Nt,[x(l,{errorMsg:e.fatalErrorMsg,FixButton:e.showFixButton,FixButtonHandler:e.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):f("",!0)])])}var At=v(ct,[["render",jt]]);const Rt={setup(){const r=u([{socket:"Loading...",model:"Loading...",maxSpeed:"Loading...",currentSpeed:"Loading...",temperature:"Loading..."}]),s=u(!1),o=u([]),e=u(!1),d=u(()=>{console.log("Default handler was run for the fix button.")}),i=async()=>{r.value.length=0,r.value.push({socket:"Loading...",model:"Loading...",maxSpeed:"Loading...",currentSpeed:"Loading...",temperature:"Loading..."});try{const a=await b(["/usr/share/cockpit/45drives-system-vue/scripts/cpu_info"],{err:"out",superuser:"require",promise:!0});let l=JSON.parse(a.stdout);r.value.length=0,l.cpus.forEach(n=>{r.value.push(n)}),s.value=!1,o.value.length=0,e.value=!1}catch(a){console.log(a),s.value=!0,o.value.length=0,o.value.push(a.stderr),o.value.push("An error occurred when trying to run /usr/share/cockpit/45drives-system/scripts/cpu_info"),e.value=!1}};return i(),{cpus:r,fatalError:s,fatalErrorMsg:o,showFixButton:e,fixButtonHandler:d,getCpuInfo:i}},components:{RefreshIconOutline:$,ErrorMessage:S}},Pt={class:"card"},Dt={class:"card-header p-5 border-b border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},Tt=t("h3",{class:"text-lg leading-6 font-semibold"},"CPU",-1),qt={class:"mt-3 sm:mt-0 sm:ml-4"},Jt={class:"card-body dark:bg-stone-700"},Vt={key:0,class:"mt-2 flex flex-col"},Xt={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},zt={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},Ut={class:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"},Qt={class:"min-w-full divide-y divide-stone-400"},Kt=t("thead",{class:"bg-stone-50 dark:bg-stone-500"},[t("tr",null,[t("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-stone-900 dark:text-stone-200 sm:pl-6"},"Socket"),t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-stone-900 dark:text-stone-200"},"Model"),t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-stone-900 dark:text-stone-200"},"Max Speed"),t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-stone-900 dark:text-stone-200"},"Current Speed"),t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-stone-900 dark:text-stone-200"},"Temperature")])],-1),Yt={class:"divide-y divide-stone-200 bg-white dark:bg-stone-600"},Gt={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-stone-900 dark:text-stone-200 sm:pl-6"},Wt={class:"whitespace-nowrap px-3 py-4 text-sm text-stone-500 dark:text-stone-400"},Zt={class:"whitespace-nowrap px-3 py-4 text-sm text-stone-500 dark:text-stone-400"},te={class:"whitespace-nowrap px-3 py-4 text-sm text-stone-500 dark:text-stone-400"},ee={class:"whitespace-nowrap px-3 py-4 text-sm text-stone-500 dark:text-stone-400"},se={key:1};function oe(r,s,o,e,d,i){const a=_("RefreshIconOutline"),l=_("ErrorMessage");return c(),m("div",Pt,[t("div",Dt,[Tt,t("div",qt,[t("button",{type:"button",class:"card-refresh-btn",onClick:s[0]||(s[0]=n=>e.getCpuInfo())},[x(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),t("div",Jt,[e.fatalError?f("",!0):(c(),m("div",Vt,[t("div",Xt,[t("div",zt,[t("div",Ut,[t("table",Qt,[Kt,t("tbody",Yt,[(c(!0),m(k,null,w(e.cpus,n=>(c(),m("tr",{key:n.socket},[t("td",Gt,p(n.socket),1),t("td",Wt,p(n.model),1),t("td",Zt,p(n.maxSpeed),1),t("td",te,p(n.currentSpeed),1),t("td",ee,p(n.temperature),1)]))),128))])])])])])])),e.fatalError?(c(),m("div",se,[x(l,{errorMsg:e.fatalErrorMsg,FixButton:e.showFixButton,FixButtonHandler:e.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):f("",!0)])])}var ne=v(Rt,[["render",oe]]);const re={setup(){const r=u([{slot:"Loading...",type:"Loading...",availibility:"Loading...",busAddress:"Loading...",cardType:"Loading...",cardModel:"Loading"}]),s=u(!1),o=u([]),e=u(!1),d=u(()=>{console.log("Default handler was run for the fix button.")}),i=async()=>{r.value.length=0,r.value.push({slot:"Loading...",type:"Loading...",availibility:"Loading...",busAddress:"Loading...",cardType:"Loading...",cardModel:"Loading"});try{const a=await b(["/usr/share/cockpit/45drives-system-vue/scripts/pci"],{err:"out",superuser:"require",promise:!0});let l=JSON.parse(a.stdout);r.value.length=0,l.forEach(n=>{r.value.push(n)}),s.value=!1,o.value.length=0,e.value=!1}catch(a){console.log(a),s.value=!0,o.value.length=0,o.value.push(a.stderr),o.value.push("An error occurred when trying to run /usr/share/cockpit/45drives-system/scripts/cpu_info"),e.value=!1}};return i(),{pcis:r,fatalError:s,fatalErrorMsg:o,showFixButton:e,fixButtonHandler:d,getPciInfo:i}},components:{RefreshIconOutline:$,ErrorMessage:S}},ae={class:"card"},le={class:"card-header p-5 border-b border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},de=t("h3",{class:"text-lg leading-6 font-semibold"},"PCI",-1),ie={class:"mt-3 sm:mt-0 sm:ml-4"},ce={class:"card-body dark:bg-stone-700"},ue={key:0,class:"mt-2 flex flex-col"},me={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},pe={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},xe={class:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"},he={class:"min-w-full divide-y divide-stone-400"},fe=t("thead",{class:"bg-stone-50 dark:bg-stone-500"},[t("tr",null,[t("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-stone-900 dark:text-stone-200 sm:pl-6"},"Slot"),t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-stone-900 dark:text-stone-200"},"Type"),t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-stone-900 dark:text-stone-200"},"Availability"),t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-stone-900 dark:text-stone-200"},"Bus Address"),t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-stone-900 dark:text-stone-200"},"Card Type"),t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-stone-900 dark:text-stone-200"},"Card Model")])],-1),_e={class:"divide-y divide-stone-200 bg-white dark:bg-stone-600"},ge={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-stone-900 dark:text-stone-200 sm:pl-6"},ve={class:"whitespace-nowrap px-3 py-4 text-sm text-stone-500 dark:text-stone-400"},ye={class:"whitespace-nowrap px-3 py-4 text-sm text-stone-500 dark:text-stone-400"},be={class:"whitespace-nowrap px-3 py-4 text-sm text-stone-500 dark:text-stone-400"},ke={class:"whitespace-nowrap px-3 py-4 text-sm text-stone-500 dark:text-stone-400"},we={class:"whitespace-nowrap px-3 py-4 text-sm text-stone-500 dark:text-stone-400"},$e={key:1};function Se(r,s,o,e,d,i){const a=_("RefreshIconOutline"),l=_("ErrorMessage");return c(),m("div",ae,[t("div",le,[de,t("div",ie,[t("button",{type:"button",class:"card-refresh-btn",onClick:s[0]||(s[0]=n=>e.getPciInfo())},[x(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),t("div",ce,[e.fatalError?f("",!0):(c(),m("div",ue,[t("div",me,[t("div",pe,[t("div",xe,[t("table",he,[fe,t("tbody",_e,[(c(!0),m(k,null,w(e.pcis,n=>(c(),m("tr",{key:n.socket},[t("td",ge,p(n.slot),1),t("td",ve,p(n.type),1),t("td",ye,p(n.availability),1),t("td",be,p(n.busAddress),1),t("td",ke,p(n.cardType),1),t("td",we,p(n.cardModel),1)]))),128))])])])])])])),e.fatalError?(c(),m("div",$e,[x(l,{errorMsg:e.fatalErrorMsg,FixButton:e.showFixButton,FixButtonHandler:e.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):f("",!0)])])}var Me=v(re,[["render",Se]]);const Le={setup(){const r=u([{socket:"Loading...",model:"Loading...",maxSpeed:"Loading...",currentSpeed:"Loading...",temperature:"Loading..."}]),s=u(!1),o=u([]),e=u(!1),d=u(()=>{console.log("Default handler was run for the fix button.")}),i=async()=>{r.value.length=0,r.value.push({socket:"Loading...",model:"Loading...",maxSpeed:"Loading...",currentSpeed:"Loading...",temperature:"Loading..."});try{const a=await b(["/usr/share/cockpit/45drives-system-vue/scripts/cpu_info"],{err:"out",superuser:"require",promise:!0});let l=JSON.parse(a.stdout);r.value.length=0,l.cpus.forEach(n=>{r.value.push(n)}),s.value=!1,o.value.length=0,e.value=!1}catch(a){console.log(a),s.value=!0,o.value.length=0,o.value.push(a.stderr),o.value.push("An error occurred when trying to run /usr/share/cockpit/45drives-system/scripts/cpu_info"),e.value=!1}};return i(),{cpus:r,fatalError:s,fatalErrorMsg:o,showFixButton:e,fixButtonHandler:d,getCpuInfo:i}},components:{RefreshIconOutline:$,ErrorMessage:S}},Be={class:"card"},Ie={class:"card-header p-5 border-b border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},Ee=t("h3",{class:"text-lg leading-6 font-semibold"},"RAM",-1),Fe={class:"mt-3 sm:mt-0 sm:ml-4"},Ce={class:"card-body dark:bg-stone-700"},He={key:0,class:"mt-2 flex flex-col"},Oe={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},Ne={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},je={class:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"},Ae={class:"min-w-full divide-y divide-stone-400"},Re=t("thead",{class:"bg-stone-50 dark:bg-stone-500"},[t("tr",null,[t("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-stone-900 dark:text-stone-200 sm:pl-6"},"Socket"),t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-stone-900 dark:text-stone-200"},"Model"),t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-stone-900 dark:text-stone-200"},"Max Speed"),t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-stone-900 dark:text-stone-200"},"Current Speed"),t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-stone-900 dark:text-stone-200"},"Temperature")])],-1),Pe={class:"divide-y divide-stone-200 bg-white dark:bg-stone-600"},De={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-stone-900 dark:text-stone-200 sm:pl-6"},Te={class:"whitespace-nowrap px-3 py-4 text-sm text-stone-500 dark:text-stone-400"},qe={class:"whitespace-nowrap px-3 py-4 text-sm text-stone-500 dark:text-stone-400"},Je={class:"whitespace-nowrap px-3 py-4 text-sm text-stone-500 dark:text-stone-400"},Ve={class:"whitespace-nowrap px-3 py-4 text-sm text-stone-500 dark:text-stone-400"},Xe={key:1};function ze(r,s,o,e,d,i){const a=_("RefreshIconOutline"),l=_("ErrorMessage");return c(),m("div",Be,[t("div",Ie,[Ee,t("div",Fe,[t("button",{type:"button",class:"card-refresh-btn",onClick:s[0]||(s[0]=n=>e.getCpuInfo())},[x(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),t("div",Ce,[e.fatalError?f("",!0):(c(),m("div",He,[t("div",Oe,[t("div",Ne,[t("div",je,[t("table",Ae,[Re,t("tbody",Pe,[(c(!0),m(k,null,w(e.cpus,n=>(c(),m("tr",{key:n.socket},[t("td",De,p(n.socket),1),t("td",Te,p(n.model),1),t("td",qe,p(n.maxSpeed),1),t("td",Je,p(n.currentSpeed),1),t("td",Ve,p(n.temperature),1)]))),128))])])])])])])),e.fatalError?(c(),m("div",Xe,[x(l,{errorMsg:e.fatalErrorMsg,FixButton:e.showFixButton,FixButtonHandler:e.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):f("",!0)])])}var Ue=v(Le,[["render",ze]]);const Qe={setup(){const r=u([{socket:"Loading...",model:"Loading...",maxSpeed:"Loading...",currentSpeed:"Loading...",temperature:"Loading..."}]),s=u(!1),o=u([]),e=u(!1),d=u(()=>{console.log("Default handler was run for the fix button.")}),i=async()=>{r.value.length=0,r.value.push({socket:"Loading...",model:"Loading...",maxSpeed:"Loading...",currentSpeed:"Loading...",temperature:"Loading..."});try{const a=await b(["/usr/share/cockpit/45drives-system-vue/scripts/cpu_info"],{err:"out",superuser:"require",promise:!0});let l=JSON.parse(a.stdout);r.value.length=0,l.cpus.forEach(n=>{r.value.push(n)}),s.value=!1,o.value.length=0,e.value=!1}catch(a){console.log(a),s.value=!0,o.value.length=0,o.value.push(a.stderr),o.value.push("An error occurred when trying to run /usr/share/cockpit/45drives-system/scripts/cpu_info"),e.value=!1}};return i(),{cpus:r,fatalError:s,fatalErrorMsg:o,showFixButton:e,fixButtonHandler:d,getCpuInfo:i}},components:{RefreshIconOutline:$,ErrorMessage:S}},Ke={class:"card"},Ye={class:"card-header p-5 border-b border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},Ge=t("h3",{class:"text-lg leading-6 font-semibold"},"Network",-1),We={class:"mt-3 sm:mt-0 sm:ml-4"},Ze={class:"card-body dark:bg-stone-700"},ts={key:0,class:"mt-2 flex flex-col"},es={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},ss={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},os={class:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"},ns={class:"min-w-full divide-y divide-stone-400"},rs=t("thead",{class:"bg-stone-50 dark:bg-stone-500"},[t("tr",null,[t("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-stone-900 dark:text-stone-200 sm:pl-6"},"Socket"),t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-stone-900 dark:text-stone-200"},"Model"),t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-stone-900 dark:text-stone-200"},"Max Speed"),t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-stone-900 dark:text-stone-200"},"Current Speed"),t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-stone-900 dark:text-stone-200"},"Temperature")])],-1),as={class:"divide-y divide-stone-200 bg-white dark:bg-stone-600"},ls={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-stone-900 dark:text-stone-200 sm:pl-6"},ds={class:"whitespace-nowrap px-3 py-4 text-sm text-stone-500 dark:text-stone-400"},is={class:"whitespace-nowrap px-3 py-4 text-sm text-stone-500 dark:text-stone-400"},cs={class:"whitespace-nowrap px-3 py-4 text-sm text-stone-500 dark:text-stone-400"},us={class:"whitespace-nowrap px-3 py-4 text-sm text-stone-500 dark:text-stone-400"},ms={key:1};function ps(r,s,o,e,d,i){const a=_("RefreshIconOutline"),l=_("ErrorMessage");return c(),m("div",Ke,[t("div",Ye,[Ge,t("div",We,[t("button",{type:"button",class:"card-refresh-btn",onClick:s[0]||(s[0]=n=>e.getCpuInfo())},[x(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),t("div",Ze,[e.fatalError?f("",!0):(c(),m("div",ts,[t("div",es,[t("div",ss,[t("div",os,[t("table",ns,[rs,t("tbody",as,[(c(!0),m(k,null,w(e.cpus,n=>(c(),m("tr",{key:n.socket},[t("td",ls,p(n.socket),1),t("td",ds,p(n.model),1),t("td",is,p(n.maxSpeed),1),t("td",cs,p(n.currentSpeed),1),t("td",us,p(n.temperature),1)]))),128))])])])])])])),e.fatalError?(c(),m("div",ms,[x(l,{errorMsg:e.fatalErrorMsg,FixButton:e.showFixButton,FixButtonHandler:e.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):f("",!0)])])}var xs=v(Qe,[["render",ps]]);const hs={setup(){const r=u([{socket:"Loading...",model:"Loading...",maxSpeed:"Loading...",currentSpeed:"Loading...",temperature:"Loading..."}]),s=u(!1),o=u([]),e=u(!1),d=u(()=>{console.log("Default handler was run for the fix button.")}),i=async()=>{r.value.length=0,r.value.push({socket:"Loading...",model:"Loading...",maxSpeed:"Loading...",currentSpeed:"Loading...",temperature:"Loading..."});try{const a=await b(["/usr/share/cockpit/45drives-system-vue/scripts/cpu_info"],{err:"out",superuser:"require",promise:!0});let l=JSON.parse(a.stdout);r.value.length=0,l.cpus.forEach(n=>{r.value.push(n)}),s.value=!1,o.value.length=0,e.value=!1}catch(a){console.log(a),s.value=!0,o.value.length=0,o.value.push(a.stderr),o.value.push("An error occurred when trying to run /usr/share/cockpit/45drives-system/scripts/cpu_info"),e.value=!1}};return i(),{cpus:r,fatalError:s,fatalErrorMsg:o,showFixButton:e,fixButtonHandler:d,getCpuInfo:i}},components:{RefreshIconOutline:$,ErrorMessage:S}},fs={class:"card"},_s={class:"card-header p-5 border-b border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},gs=t("h3",{class:"text-lg leading-6 font-semibold"},"IPMI",-1),vs={class:"mt-3 sm:mt-0 sm:ml-4"},ys={class:"card-body dark:bg-stone-700"},bs={key:0,class:"mt-2 flex flex-col"},ks={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},ws={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},$s={class:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"},Ss={class:"min-w-full divide-y divide-stone-400"},Ms=t("thead",{class:"bg-stone-50 dark:bg-stone-500"},[t("tr",null,[t("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-stone-900 dark:text-stone-200 sm:pl-6"},"Socket"),t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-stone-900 dark:text-stone-200"},"Model"),t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-stone-900 dark:text-stone-200"},"Max Speed"),t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-stone-900 dark:text-stone-200"},"Current Speed"),t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-stone-900 dark:text-stone-200"},"Temperature")])],-1),Ls={class:"divide-y divide-stone-200 bg-white dark:bg-stone-600"},Bs={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-stone-900 dark:text-stone-200 sm:pl-6"},Is={class:"whitespace-nowrap px-3 py-4 text-sm text-stone-500 dark:text-stone-400"},Es={class:"whitespace-nowrap px-3 py-4 text-sm text-stone-500 dark:text-stone-400"},Fs={class:"whitespace-nowrap px-3 py-4 text-sm text-stone-500 dark:text-stone-400"},Cs={class:"whitespace-nowrap px-3 py-4 text-sm text-stone-500 dark:text-stone-400"},Hs={key:1};function Os(r,s,o,e,d,i){const a=_("RefreshIconOutline"),l=_("ErrorMessage");return c(),m("div",fs,[t("div",_s,[gs,t("div",vs,[t("button",{type:"button",class:"card-refresh-btn",onClick:s[0]||(s[0]=n=>e.getCpuInfo())},[x(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),t("div",ys,[e.fatalError?f("",!0):(c(),m("div",bs,[t("div",ks,[t("div",ws,[t("div",$s,[t("table",Ss,[Ms,t("tbody",Ls,[(c(!0),m(k,null,w(e.cpus,n=>(c(),m("tr",{key:n.socket},[t("td",Bs,p(n.socket),1),t("td",Is,p(n.model),1),t("td",Es,p(n.maxSpeed),1),t("td",Fs,p(n.currentSpeed),1),t("td",Cs,p(n.temperature),1)]))),128))])])])])])])),e.fatalError?(c(),m("div",Hs,[x(l,{errorMsg:e.fatalErrorMsg,FixButton:e.showFixButton,FixButtonHandler:e.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):f("",!0)])])}var Ns=v(hs,[["render",Os]]);const js={class:"h-full w-full overflow-y-scroll"},As={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-8 grow"},Rs={setup(r){return(s,o)=>(c(),m("div",js,[t("div",As,[x(At),x(ne),x(Me),x(Ue),x(xs),x(Ns)])]))}};const Ps={class:"h-full flex flex-col overflow-hidden"},Ds={setup(r){return(s,o)=>(c(),m("div",Ps,[x(Z,{moduleName:"System",centerName:""}),x(Rs)]))}};J(Ds).mount("#app");
