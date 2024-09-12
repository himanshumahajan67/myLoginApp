"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7067],{7067:(S,h,c)=>{c.r(h),c.d(h,{WelcomePageModule:()=>T});var a=c(177),g=c(4341),l=c(791),d=c(3881),f=c(1367),P=c(1985),v=c(7393),t=c(3953),b=c(8962),W=c(7673),m=c(6354),j=c(5558),u=c(8141),C=c(1626);let F=(()=>{var o;class i{constructor(e){this.http=e,this.baseUrl="https://jsonplaceholder.typicode.com",this.cacheKey="cachedPosts"}getPosts(){const e=this.getCachedPosts();return e?(0,W.of)(e):this.http.get(`${this.baseUrl}/posts`).pipe((0,m.T)(s=>s.slice(0,3)),(0,j.n)(s=>this.http.get(`${this.baseUrl}/photos`).pipe((0,m.T)(r=>s.map(p=>({...p,photo:r.find(x=>x.id===p.id)}))))),(0,u.M)(s=>this.setCachedPosts(s)))}addPost(e){return this.http.post(`${this.baseUrl}/posts`,e).pipe((0,u.M)(()=>{const s=this.getCachedPosts()||[];s.push(e),this.setCachedPosts(s)}))}deletePost(e){return this.http.delete(`${this.baseUrl}/posts/${e}`).pipe((0,u.M)(()=>{let s=this.getCachedPosts()||[];s=s.filter(r=>r.id!==e),this.setCachedPosts(s)}))}getCachedPosts(){const e=localStorage.getItem(this.cacheKey);return e?JSON.parse(e):null}setCachedPosts(e){localStorage.setItem(this.cacheKey,JSON.stringify(e))}clearCache(){localStorage.removeItem(this.cacheKey)}}return(o=i).\u0275fac=function(e){return new(e||o)(t.KVO(C.Qq))},o.\u0275prov=t.jDH({token:o,factory:o.\u0275fac,providedIn:"root"}),i})();function $(o,i){if(1&o&&(t.j41(0,"ion-title"),t.EFF(1),t.k0s()),2&o){const n=t.XpG();t.R7$(),t.SpI("Welcome ",n.user,"")}}function k(o,i){if(1&o&&(t.j41(0,"ion-title"),t.EFF(1),t.k0s()),2&o){const n=t.XpG();t.R7$(),t.SpI("Profile ",n.user,"")}}function y(o,i){if(1&o){const n=t.RV6();t.j41(0,"div",10)(1,"div",11)(2,"button",3),t.bIt("click",function(){const s=t.eBV(n).$implicit,r=t.XpG(2);return t.Njj(r.deletePost(s.id))}),t.nrm(3,"ion-icon",12),t.k0s(),t.nrm(4,"img",13),t.j41(5,"div",14)(6,"h3"),t.EFF(7),t.k0s(),t.j41(8,"p"),t.EFF(9),t.k0s()()()()}if(2&o){const n=i.$implicit;t.R7$(4),t.Y8G("src",n.photo.url,t.B4B),t.R7$(3),t.JRh(n.title),t.R7$(2),t.JRh(n.body)}}function R(o,i){if(1&o&&(t.j41(0,"div"),t.DNE(1,y,10,3,"div",9),t.k0s()),2&o){const n=t.XpG();t.R7$(),t.Y8G("ngForOf",n.posts)}}function _(o,i){if(1&o){const n=t.RV6();t.j41(0,"div")(1,"h2"),t.EFF(2,"User Profile"),t.k0s(),t.j41(3,"p"),t.EFF(4),t.k0s(),t.j41(5,"button",3),t.bIt("click",function(){t.eBV(n);const s=t.XpG();return t.Njj(s.clearAllPosts())}),t.EFF(6,"Reset This Account"),t.nrm(7,"ion-icon",12),t.k0s()()}if(2&o){const n=t.XpG();t.R7$(4),t.SpI("Welcome, ",n.user+" (Your name is not being saved)","")}}function I(o,i){if(1&o){const n=t.RV6();t.j41(0,"ion-fab-button",3),t.bIt("click",function(){t.eBV(n);const s=t.XpG();return t.Njj(s.addNewPost())}),t.nrm(1,"ion-icon",15),t.k0s()}}const M=[{path:"",component:(()=>{var o;class i{constructor(e,s){this.store=e,this.crudService=s,this.user$=new P.c,this.user="",this.posts=[],this.showHome=!0}ngOnInit(){this.store.select(v.j).subscribe(e=>{this.user=e&&e.user?e.user.displayName||"Unknown User":"Guest"}),this.fetchPosts()}toggleHome(e){this.showHome=e,console.log(this.user)}fetchPosts(){this.crudService.getPosts().subscribe(e=>{this.posts=e})}addNewPost(){const e={id:this.posts.length+1,title:`New Post ${this.posts.length+1}`,body:"This is a new post",photo:{url:"https://via.placeholder.com/600/92c952"}};this.crudService.addPost(e).subscribe(()=>{this.posts.push(e)})}deletePost(e){this.crudService.deletePost(e).subscribe(()=>{this.posts=this.posts.filter(s=>s.id!==e)})}clearAllPosts(){this.crudService.clearCache(),this.fetchPosts()}logout(){this.store.dispatch((0,f.ri)())}}return(o=i).\u0275fac=function(e){return new(e||o)(t.rXU(b.il),t.rXU(F))},o.\u0275cmp=t.VBU({type:o,selectors:[["app-welcome"]],decls:20,vars:6,consts:[[3,"translucent"],[4,"ngIf"],["slot","end"],[3,"click"],["vertical","bottom","horizontal","end","slot","fixed"],[3,"click",4,"ngIf"],["slot","start"],["name","home-outline"],["name","person-outline"],["class","post-container",4,"ngFor","ngForOf"],[1,"post-container"],[1,"post-block"],["name","trash-outline"],["alt","Post image",1,"post-image",3,"src"],[1,"post-content"],["name","add"]],template:function(e,s){1&e&&(t.j41(0,"ion-header",0)(1,"ion-toolbar"),t.DNE(2,$,2,1,"ion-title",1)(3,k,2,1,"ion-title",1),t.j41(4,"ion-buttons",2)(5,"ion-button",3),t.bIt("click",function(){return s.logout()}),t.EFF(6,"Logout"),t.k0s()()()(),t.j41(7,"ion-content"),t.DNE(8,R,2,1,"div",1)(9,_,8,1,"div",1),t.j41(10,"ion-fab",4),t.DNE(11,I,2,0,"ion-fab-button",5),t.k0s()(),t.j41(12,"ion-footer")(13,"ion-toolbar")(14,"ion-buttons",6)(15,"ion-button",3),t.bIt("click",function(){return s.toggleHome(!0)}),t.nrm(16,"ion-icon",7),t.k0s()(),t.j41(17,"ion-buttons",2)(18,"ion-button",3),t.bIt("click",function(){return s.toggleHome(!1)}),t.nrm(19,"ion-icon",8),t.k0s()()()()),2&e&&(t.Y8G("translucent",!0),t.R7$(2),t.Y8G("ngIf",s.showHome),t.R7$(),t.Y8G("ngIf",!s.showHome),t.R7$(5),t.Y8G("ngIf",s.showHome),t.R7$(),t.Y8G("ngIf",!s.showHome),t.R7$(2),t.Y8G("ngIf",s.showHome))},dependencies:[a.Sq,a.bT,l.Jm,l.QW,l.W9,l.Q8,l.YW,l.M0,l.eU,l.iq,l.BC,l.ai],styles:[".post-container[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:20px}.post-block[_ngcontent-%COMP%]{width:60%;background-color:#020101;border:1px solid #3d3939;border-radius:8px;padding:10px;text-align:left}.post-image[_ngcontent-%COMP%]{width:100%;height:auto;border-radius:8px;object-fit:cover}.bottom-buttons[_ngcontent-%COMP%]{display:flex;justify-content:space-around;position:fixed;bottom:20px;width:100%}"]}),i})()}];let G=(()=>{var o;class i{}return(o=i).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.$C({type:o}),o.\u0275inj=t.G2t({imports:[d.iI.forChild(M),d.iI]}),i})(),T=(()=>{var o;class i{}return(o=i).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.$C({type:o}),o.\u0275inj=t.G2t({imports:[a.MD,g.YN,l.bv,G]}),i})()}}]);