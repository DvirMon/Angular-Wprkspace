"use strict";(self.webpackChunkbooks_scape=self.webpackChunkbooks_scape||[]).push([[917],{1917:(w,l,c)=>{c.r(l),c.d(l,{VolumesPageComponent:()=>j});var t=c(4438),r=c(9417),h=c(8498),m=c(177),p=c(6467),u=c(9631),f=c(9992);let g=(()=>{class n{constructor(){this.control=t.hFB.required(),this.label=(0,t.hFB)(),this.initialValue=(0,t.hFB)(),this.valueChanged=new t.bkB,this.handleValueChanges=(0,f.vS)(e=>this.valueChanged.emit(e)),(0,t.QZP)(()=>{this.control()&&this.handleValueChanges(this.control().valueChanges)},{allowSignalWrites:!0})}static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["dom-search-input"]],inputs:{control:[t.Mj6.SignalBased,"control"],label:[t.Mj6.SignalBased,"label"],initialValue:[t.Mj6.SignalBased,"initialValue"]},outputs:{valueChanged:"valueChanged"},standalone:!0,features:[t.aNF],decls:4,vars:2,consts:[[1,"dom-search-input"],["for",""],["matInput","","type","text",3,"formControl"]],template:function(o,a){1&o&&(t.j41(0,"mat-form-field",0)(1,"label",1),t.EFF(2),t.k0s(),t.nrm(3,"input",2),t.k0s()),2&o&&(t.R7$(2),t.JRh(a.label()),t.R7$(),t.Y8G("formControl",a.control()))},dependencies:[m.MD,r.YN,r.me,r.BC,r.X1,r.l_,u.fS,u.fg,p.rl,p.RG],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]})}return n})();var C=c(8834),i=c(5596),b=c(9213);let k=(()=>{class n{transform(e,o){return e?e.length>o?e.substring(0,o)+"...":e:""}static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275pipe=t.EJ8({name:"truncate",type:n,pure:!0,standalone:!0})}return n})();function _(n,s){if(1&n){const e=t.RV6();t.j41(0,"div",6)(1,"mat-card",7)(2,"mat-card-content")(3,"p"),t.EFF(4),t.nI1(5,"truncate"),t.k0s()(),t.j41(6,"mat-card-actions")(7,"button",8),t.bIt("click",function(){t.eBV(e);const a=t.XpG(2);return t.Njj(a.onInfo(a.book()))}),t.nrm(8,"mat-icon",9),t.k0s(),t.j41(9,"button",8),t.bIt("click",function(){t.eBV(e);const a=t.XpG(2);return t.Njj(a.onAddToShelf(a.book()))}),t.nrm(10,"mat-icon",10),t.k0s()()()()}if(2&n){const e=t.XpG(2);t.R7$(4),t.SpI(" ",t.i5U(5,1,e.book().description,300)," ")}}function v(n,s){if(1&n){const e=t.RV6();t.j41(0,"mat-card",1),t.bIt("mouseenter",function(){t.eBV(e);const a=t.XpG();return t.Njj(a.onToggleOverlay())})("mouseleave",function(){t.eBV(e);const a=t.XpG();return t.Njj(a.onToggleOverlay())}),t.j41(1,"div",2)(2,"mat-card-content"),t.nrm(3,"img",3),t.j41(4,"section",4)(5,"mat-card-title"),t.EFF(6),t.k0s(),t.j41(7,"mat-card-subtitle"),t.EFF(8),t.k0s()()(),t.nrm(9,"mat-card-actions"),t.k0s(),t.DNE(10,_,11,4,"div",5),t.k0s()}if(2&n){const e=t.XpG();t.R7$(3),t.Y8G("src",e.book().imageLinks.thumbnail,t.B4B)("alt",e.book().description),t.R7$(3),t.JRh(e.book().title),t.R7$(2),t.JRh(e.book().authors[0]),t.R7$(2),t.Y8G("ngIf",e.showOverlay())}}let y=(()=>{class n{constructor(){this.book=t.hFB.required(),this.showOverlay=(0,t.vPA)(!1),this.addSelected=new t.bkB,this.infoSelected=new t.bkB}onAddToShelf(e){this.addSelected.emit(e)}onInfo(e){this.infoSelected.emit(e.id)}onToggleOverlay(){this.showOverlay.update(e=>!e)}static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["books-scape-book-card"]],inputs:{book:[t.Mj6.SignalBased,"book"]},outputs:{addSelected:"addSelected",infoSelected:"infoSelected"},standalone:!0,features:[t.aNF],decls:1,vars:1,consts:[[1,"book-card"],[1,"book-card",3,"mouseenter","mouseleave"],[1,"image-overlay-container"],["mat-card-image","","width","190","height","280",3,"src","alt"],[1,"book-card-text"],["class","overlay",4,"ngIf"],[1,"overlay"],[1,"overlay-card"],["mat-icon-button","",3,"click"],["fontIcon","info"],["fontIcon","add"]],template:function(o,a){1&o&&t.DNE(0,v,11,5,"mat-card",0),2&o&&t.vxM(0,a.book()?0:-1)},dependencies:[m.bT,i.Hu,i.RN,i.YY,i.m2,i.kF,i.Lc,i.dh,C.iY,b.An,k],styles:[".mat-mdc-card[_ngcontent-%COMP%]{height:100%;border-radius:0%;box-shadow:none}.mat-mdc-card.book-card[_ngcontent-%COMP%]{justify-content:space-between;cursor:pointer}.mat-mdc-card.book-card[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{opacity:1}.mat-mdc-card.book-card[_ngcontent-%COMP%]   section.book-card-text[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.mat-mdc-card.book-card[_ngcontent-%COMP%]   section.book-card-text[_ngcontent-%COMP%]   .mat-mdc-card-subtitle[_ngcontent-%COMP%]{font-style:italic}.mat-mdc-card.book-card[_ngcontent-%COMP%]   .mat-mdc-card-title[_ngcontent-%COMP%]{font-weight:550;line-height:24px;min-height:48px;font-size:18px}.mat-mdc-card.book-card[_ngcontent-%COMP%]   img.mat-mdc-card-image[_ngcontent-%COMP%]{margin-left:0}.mat-mdc-card.book-card[_ngcontent-%COMP%]   .mdc-card__media[_ngcontent-%COMP%]{align-self:center;margin:16px}.mat-mdc-card.book-card[_ngcontent-%COMP%]   .mdc-card__actions[_ngcontent-%COMP%]{align-self:center}.mat-mdc-card.book-card[_ngcontent-%COMP%]   .image-overlay-container[_ngcontent-%COMP%]{height:100%;position:relative;display:flex;flex-direction:column;justify-content:space-between;gap:16px}.mat-mdc-card.book-card[_ngcontent-%COMP%]:hover   .image-overlay-container[_ngcontent-%COMP%]   .mat-mdc-card-actions[_ngcontent-%COMP%]{background:#3f51b5cc;width:100%;align-self:flex-end}.mat-mdc-card.overlay-card[_ngcontent-%COMP%]{background:transparent;display:flex;flex-direction:column;gap:16px}.mat-mdc-card.overlay-card[_ngcontent-%COMP%]   .mat-mdc-card-content[_ngcontent-%COMP%]{height:100%;display:flex;justify-content:center;align-items:baseline}.mat-mdc-card.overlay-card[_ngcontent-%COMP%]   .mat-mdc-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:90%;margin-top:42px;height:-moz-fit-content;height:fit-content}.mat-mdc-card.overlay-card[_ngcontent-%COMP%]   .mat-mdc-card-actions[_ngcontent-%COMP%]{justify-content:space-between;width:90%}.overlay[_ngcontent-%COMP%]{height:100%;position:absolute;inset:0;background:#3f51b599;color:#fff;font-weight:550;display:flex;flex-direction:column;align-items:center;justify-content:center;opacity:0}"]})}return n})();var P=c(2714),x=c(1846);const M=(n,s)=>s.id;function O(n,s){if(1&n){const e=t.RV6();t.j41(0,"div",5)(1,"books-scape-book-card",6),t.bIt("addSelected",function(a){t.eBV(e);const d=t.XpG();return t.Njj(d.onAddToShelf(a))})("infoSelected",function(a){t.eBV(e);const d=t.XpG();return t.Njj(d.onInfo(a))}),t.k0s()()}if(2&n){const e=s.$implicit;t.R7$(),t.Y8G("book",e)}}let j=(()=>{class n{#t;#e;constructor(){this.#t=(0,t.WQX)(x.t),this.#e=(0,t.WQX)(t.zZn),this.searchControl=new r.MJ("angular",{nonNullable:!0}),this.books=this.#t.volumesEntities,this.initialValue=this.#t.searchTerm}onValueChanged(e){this.#t.updateVolumes(e)}onAddToShelf(e){this.#t.addToShelf(e)}onInfo(e){(0,t.N4e)(this.#e,()=>(0,t.WQX)(h.Ix).navigateByUrl(`info/${e}`))}static#n=this.\u0275fac=function(o){return new(o||n)};static#o=this.\u0275cmp=t.VBU({type:n,selectors:[["books-scape-volume-page"]],standalone:!0,features:[t.aNF],decls:8,vars:4,consts:[[3,"showShopping","showBookshelf"],[1,"books-page"],[1,"search-wrapper"],[3,"valueChanged","control","initialValue"],[1,"books-wrapper"],[1,"book-card-wrapper"],[3,"addSelected","infoSelected","book"]],template:function(o,a){1&o&&(t.j41(0,"books-scape-layout",0)(1,"div",1)(2,"header")(3,"div",2)(4,"dom-search-input",3),t.bIt("valueChanged",function(B){return a.onValueChanged(B)}),t.k0s()()(),t.j41(5,"main",4),t.Z7z(6,O,2,1,"div",5,M),t.k0s()()()),2&o&&(t.Y8G("showShopping",!1)("showBookshelf",!0),t.R7$(4),t.Y8G("control",a.searchControl)("initialValue",a.initialValue()),t.R7$(2),t.Dyx(a.books()))},dependencies:[P.C,y,g],styles:["books-scape-dashboard[_ngcontent-%COMP%]{overflow-y:hidden!important}  div.books-page{display:flex;justify-content:center;flex-direction:column;align-items:center}  div.books-page header{width:100%;display:flex;justify-content:center;margin:16px}  div.books-page header div.search-wrapper{width:50%}  div.books-page header div.search-wrapper mat-form-field{font-size:24px!important}  div.books-page main.books-wrapper{display:flex;flex-wrap:wrap;justify-content:center;width:55%}  div.books-page main.books-wrapper div.book-card-wrapper{width:320px}"]})}return n})()}}]);