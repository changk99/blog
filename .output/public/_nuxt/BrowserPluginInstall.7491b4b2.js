import r from"./Folder.3e1ac10f.js";import{e as h,o as a,f as n,h as t,F as d,r as p,i as w,t as e,j as i,w as m,k as b,p as g,l as D,m as v}from"./entry.8fdf76cc.js";const u=o=>(g("data-v-47d35879"),o=o(),D(),o),M={class:"plugin-info"},k={class:"list"},B=w('<li class="item title" data-v-47d35879><span class="sub-item" data-v-47d35879>名称</span><span class="sub-item" data-v-47d35879>版本</span><span class="sub-item" data-v-47d35879>MD5</span><span class="sub-item" data-v-47d35879>安装</span></li>',1),f={class:"sub-item"},y={class:"sub-item"},S=["title"],x=u(()=>t("span",{class:"down"},"下载",-1)),N={class:"sub-item"},F={class:"sub-item"},P=["title"],V=u(()=>t("span",{class:"down"},"下载",-1)),C=h({__name:"BrowserPluginInstall",props:{name:{},versionInfos:{}},setup(o){return(l,L)=>{const c=r,_=b;return a(),n("div",M,[t("ul",k,[B,(a(!0),n(d,null,p(l.versionInfos,s=>(a(),n("li",{key:s.MD5,class:"item version l"},[t("span",f,e(s.filename||l.name),1),t("span",y,e(s.version),1),t("span",{title:s.MD5,class:"sub-item"},e(s.MD5),9,S),i(_,{class:"sub-item",to:s.downUrl},{default:m(()=>[i(c,{class:"down-icon",width:"1em",height:"1em"}),x]),_:2},1032,["to"])]))),128)),(a(!0),n(d,null,p(l.versionInfos,s=>(a(),n("li",{key:s.MD5,class:"item version s"},[i(c,{class:"down-icon",width:"1em",height:"1em"}),t("span",N,e(s.filename||l.name),1),t("span",F,e(s.version),1),t("span",{title:s.MD5,class:"sub-item"},e(s.MD5),9,P),i(_,{class:"sub-item",to:s.downUrl},{default:m(()=>[V]),_:2},1032,["to"])]))),128))])])}}});const E=v(C,[["__scopeId","data-v-47d35879"]]);export{E as default};