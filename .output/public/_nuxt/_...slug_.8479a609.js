import{e as L,b5 as R,aV as I,b6 as W,v as $,b7 as j,b8 as M,b9 as v,s as P,B,ba as V,f as U,j as l,w as d,h as e,t as h,u as s,c as O,E as T,aZ as y,bb as z,k as Z,o as b,aI as F,q as G,p as J,l as K,m as Q}from"./entry.c460ab73.js";import X from"./ContentDoc.371274ed.js";import"./ContentRenderer.6c7b8035.js";import"./ContentRendererMarkdown.44fc2a67.js";import"./index.a6ef77ff.js";import"./ContentQuery.7b04af6e.js";const A=c=>(J("data-v-58a2f6cb"),c=c(),K(),c),Y={class:"content-doc"},tt=A(()=>e("div",{class:"error"},[e("div",null,"当前页面不存在")],-1)),et=A(()=>e("div",{class:"error"},"无法获取到当前页面的数据",-1)),st={class:"error"},at={class:"nav"},ot={class:"nav-item nav-item-before"},nt={class:"dir-title"},it={class:"title"},rt={class:"nav-item nav-item-after"},ct={class:"dir-title"},_t={class:"title"},lt=L({__name:"[...slug]",async setup(c){let t,i;const q=R(),p=I(),u=W();function w(){const n=I();n.hash&&q.push(n.hash)}function E(){location.reload()}$(()=>{u.isHydrating||u.hook("page:transition:finish",w)}),j(()=>{u.hooks.removeHook("page:transition:finish",w)});const m=M(p.path),[a,o]=([t,i]=v(()=>y().only(["_path","title","_dir"]).where({_type:"markdown"}).findSurround(m).catch(()=>[null,null])),t=await t,i(),t),k=P(),x=P(),g=B(()=>p.path!=="/"&&a&&a._path.startsWith(z(m))),C=B(()=>p.path!=="/"&&o&&o._path.startsWith(z(m)));if(g.value){const n=V(a==null?void 0:a._path,"_dir"),{title:_}=([t,i]=v(()=>y().only("title").where({_path:n}).findOne().catch(()=>({title:""}))),t=await t,i(),t);k.value=_}if(C.value){const n=V(o==null?void 0:o._path,"_dir"),{title:_}=([t,i]=v(()=>y().only("title").where({_path:n}).findOne().catch(()=>({title:""}))),t=await t,i(),t);x.value=_}return(n,_)=>{var D,S;const f=G,H=X,N=Z;return b(),U("div",Y,[l(H,{class:"content"},{"not-found":d(()=>[tt]),empty:d(()=>[et,e("div",st,[F(" 刷新 "),l(f,{onClick:E,class:"refresh",size:"1.4em",name:"material-symbols:refresh"})])]),_:1}),e("nav",at,[e("div",ot,[e("div",nt,h(s(k)),1),s(g)?(b(),O(N,{key:0,class:"link",to:(D=s(a))==null?void 0:D._path},{default:d(()=>{var r;return[l(f,{size:"1em",style:{transform:"scale(-1, 1)"},name:"ic:baseline-arrow-forward"}),e("span",it,h((r=s(a))==null?void 0:r.title),1)]}),_:1},8,["to"])):T("",!0)]),e("div",rt,[e("div",ct,h(s(x)),1),s(C)?(b(),O(N,{key:0,class:"link",to:(S=s(o))==null?void 0:S._path},{default:d(()=>{var r;return[e("span",_t,h((r=s(o))==null?void 0:r.title),1),l(f,{size:"1em",name:"ic:baseline-arrow-forward"})]}),_:1},8,["to"])):T("",!0)])])])}}});const vt=Q(lt,[["__scopeId","data-v-58a2f6cb"]]);export{vt as default};