(function(){"use strict";var t={4687:function(t,e,o){var s={};o.r(s),o.d(s,{isLogIn:function(){return ue},isRegister:function(){return ce},storedName:function(){return de},storedTodoItems:function(){return le},storedTodoItemsCount:function(){return ie}});var n={};o.r(n),o.d(n,{addOneItem:function(){return me},clearAllItem:function(){return _e},logOut:function(){return Te},removeOneItem:function(){return pe},setIsRegister:function(){return Ie},setUserName:function(){return ve},sortTodoLatest:function(){return ge},sortTodoOldest:function(){return fe},toggleOneItem:function(){return he}});var r=o(9242),a=o(3396),l=o(7139);const d={id:"app"},i={class:"top"},u={key:0},c={key:1},m={key:2},p={class:"body"},h={key:0};function _(t,e,o,s,n,_){const g=(0,a.up)("TodoHeader"),f=(0,a.up)("TodoTitle"),v=(0,a.up)("TodoInput"),I=(0,a.up)("TodoRegister"),T=(0,a.up)("TodoHello"),w=(0,a.up)("TodoController"),b=(0,a.up)("TodoList"),O=(0,a.up)("TodoFooter"),y=(0,a.up)("TodoModal");return(0,a.wg)(),(0,a.iD)("div",d,[(0,a._)("div",i,[(0,a.Wm)(g),this.isLogIn?((0,a.wg)(),(0,a.iD)("div",u,[(0,a.Wm)(f),(0,a.Wm)(v,{onAlertModal:_.showModal,onReload:_.reload},null,8,["onAlertModal","onReload"])])):this.isRegister?((0,a.wg)(),(0,a.iD)("div",c,[(0,a.Wm)(I,{onAlertModal:_.showModal,onReload:_.reload},null,8,["onAlertModal","onReload"])])):((0,a.wg)(),(0,a.iD)("div",m,[(0,a.Wm)(T,{onAlertModal:_.showModal,onReload:_.reload},null,8,["onAlertModal","onReload"])]))]),(0,a._)("div",p,[this.isLogIn?((0,a.wg)(),(0,a.iD)("div",h,[(0,a.Wm)(w),(0,a.Wm)(b,{ref:"list"},null,512)])):(0,a.kq)("",!0),(0,a.Wm)(O)]),(0,a.wy)((0,a.Wm)(y,{onClose:e[0]||(e[0]=t=>n.modalVisible=!1)},{"modal-text":(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(n.modalText),1)])),_:1},512),[[r.F8,n.modalVisible]])])}const g={class:"controller"},f={class:"select"},v=(0,a._)("label",{class:"blind",for:"order"},"Order",-1),I=(0,a._)("option",{value:"date-asc"},"오래된순",-1),T=(0,a._)("option",{value:"date-desc"},"최신순",-1),w=[I,T];function b(t,e,o,s,n,l){return(0,a.wg)(),(0,a.iD)("div",g,[(0,a._)("div",f,[v,(0,a.wy)((0,a._)("select",{name:"order",id:"order",class:"selectbox","onUpdate:modelValue":e[0]||(e[0]=t=>n.selected=t),onChange:e[1]||(e[1]=(...t)=>l.sortTodo&&l.sortTodo(...t))},w,544),[[r.bM,n.selected]])]),(0,a._)("button",{class:"clear",onClick:e[2]||(e[2]=(...e)=>t.clearTodo&&t.clearTodo(...e))},"전체 삭제")])}var O=o(65),y={data(){return{selected:"date-asc"}},methods:{...(0,O.OI)({clearTodo:"clearAllItem"}),sortTodo(){"date-desc"===this.selected?this.$store.commit("sortTodoLatest"):"date-asc"===this.selected&&this.$store.commit("sortTodoOldest")}}},k=o(89);const C=(0,k.Z)(y,[["render",b]]);var x=C;const M=(0,a._)("footer",{class:"footer"},[(0,a.Uk)(" Vue.js + SpringBoot + MySQL "),(0,a._)("a",{href:"",target:"_blank",rel:"noopener",class:"footer__link"})],-1),$=(0,a._)("span",null,"로그아웃",-1),N=[$];function R(t,e,o,s,n,r){return(0,a.wg)(),(0,a.iD)(a.HY,null,[M,this.isLogIn?((0,a.wg)(),(0,a.iD)("button",{key:0,onClick:e[0]||(e[0]=(...e)=>t.logOut&&t.logOut(...e))},N)):(0,a.kq)("",!0)],64)}var S={computed:{...(0,O.Se)(["isLogIn"])},methods:{...(0,O.OI)({logOut:"logOut"})}};const Z=(0,k.Z)(S,[["render",R]]);var D=Z;const L={class:"header"},U=(0,a._)("h1",{class:"logo"},[(0,a.Uk)("Todo List "),(0,a._)("span",{class:"blind"})],-1),j={class:"header__date"};function V(t,e,o,s,n,r){return(0,a.wg)(),(0,a.iD)("header",L,[U,(0,a._)("p",j,(0,l.zw)(n.timestamp),1)])}var W=()=>{const t=new Date,e=t.getMonth()+1,o=t.getDate(),s=new Array("Sun.","Mon.","Tue.","Wed.","Thu.","Fri.","Sat."),n=s[t.getDay()],r=t.getTime(),a=t.getHours(),l=t.getMinutes();let d="";d=a<12?"morning":a<18?"afternoon":"evening";const i={month:e,date:o,week:n,time:r,daytime:d,hour:a,minute:l};return i},A={data(){return{timestamp:""}},created(){this.dpTime()},mounted(){setInterval(this.dpTime,1e3)},methods:{dpTime(){let t=W().month,e=W().date,o=W().week,s=W().hour,n=W().minute;this.timestamp=`${t}/${e} ${o} ${String(s).padStart(2,"0")}:${String(n).padStart(2,"0")}`}}};const F=(0,k.Z)(A,[["render",V]]);var z=F;const H={className:"hello"},P=(0,a._)("p",{className:"hello__guide"},[(0,a._)("span",{className:"hello__guide-text"},[(0,a.Uk)("반갑습니다!"),(0,a._)("br")]),(0,a._)("span",{className:"hello__guide-text"},"당신의 리스트를 불러오겠습니다.")],-1),B=(0,a._)("label",{for:"username"},"닉네임: ",-1),E=(0,a._)("label",{for:"password"},"생년월일: ",-1),J=(0,a._)("button",{type:"submit"},[(0,a._)("span",null,"로그인")],-1),K={class:"btn"},q=(0,a._)("span",null,"회원가입",-1),Y=[q];function Q(t,e,o,s,n,l){return(0,a.wg)(),(0,a.iD)("div",H,[P,(0,a._)("form",{onSubmit:e[2]||(e[2]=(0,r.iM)((t=>l.submitForm(n.username,n.password)),["prevent"]))},[(0,a._)("div",null,[B,(0,a.wy)((0,a._)("input",{id:"username",type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>n.username=t),maxlength:"20"},null,512),[[r.nr,n.username]])]),(0,a._)("div",null,[E,(0,a.wy)((0,a._)("input",{id:"password",placeholder:"ex)990319",type:"password","onUpdate:modelValue":e[1]||(e[1]=t=>n.password=t),maxlength:"6"},null,512),[[r.nr,n.password]])]),J],32),(0,a._)("div",K,[(0,a._)("button",{onClick:e[3]||(e[3]=(...e)=>t.setIsRegister&&t.setIsRegister(...e))},Y)])])}var G=o(1076),X={data(){return{username:"",password:""}},methods:{...(0,O.OI)({addUserName:"setUserName",setIsRegister:"setIsRegister"}),submitForm(t,e){const o=/([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))$/;if(""===t||""===e||t.length>20||6!=e.length||!o.test(e)){const t="입력된 값이 유효하지 않습니다.";this.$emit("alertModal",t)}else{var s={name:t,birth:e};const o="/login/signIn";G.Z.post(o,JSON.stringify(s)).then((e=>{if(e.data>=0)this.addUserName({username:t,id:e.data});else if(-1==e.data){const t="등록되지 않은 생년월일입니다.";this.$emit("alertModal",t)}else if(-2==e.data){const t="등록되지 않은 이름입니다.";this.$emit("alertModal",t)}}))}}}};const tt=(0,k.Z)(X,[["render",Q]]);var et=tt;const ot={class:"main-input"},st=(0,a._)("span",{class:"blind"},"Add",-1),nt=[st];function rt(t,e,o,s,n,l){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",ot,[(0,a.wy)((0,a._)("input",{type:"text",class:"add__input",placeholder:"할 일을 입력하세요.","onUpdate:modelValue":e[0]||(e[0]=t=>n.newTodoItem=t),maxlength:"200",onKeypress:e[1]||(e[1]=(0,r.D2)(((...t)=>l.addTodoItem&&l.addTodoItem(...t)),["enter"])),ref:"taskInput"},null,544),[[r.nr,n.newTodoItem]]),(0,a._)("button",{class:"add__buttonn",onClick:e[2]||(e[2]=(...t)=>l.addTodoItem&&l.addTodoItem(...t))},nt)])])}var at={data(){return{newTodoItem:""}},computed:{...(0,O.Se)(["storedTodoItems","storedTodoItemsCount"])},methods:{addTodoItem(){const t=this.storedTodoItems;for(let e=0;e<this.storedTodoItemsCount;e++)if(t[e].item===this.newTodoItem){const t="같은 내용이 이미 존재합니다.";return this.$emit("alertModal",t),!1}if(""===this.newTodoItem){const t="내용을 입력해주시기 바랍니다.";return this.$emit("alertModal",t),this.clearInput(),!1}if(this.newTodoItem.length>200){const t="가능한 글자수는 최대 200자 입니다.";return this.$emit("alertModal",t),!1}this.$store.commit("addOneItem",this.newTodoItem),this.clearInput(),this.$refs.taskInput.focus()},clearInput(){this.newTodoItem=""}}};const lt=(0,k.Z)(at,[["render",rt]]);var dt=lt;const it={class:"list__content"},ut=["id","checked","onChange"],ct=["for"],mt=(0,a._)("span",{class:"icon-check"},null,-1),pt={class:"list__text"},ht={class:"list__right"},_t=["onClick"],gt=(0,a._)("span",null,"삭제",-1),ft=(0,a._)("div",{class:"blind"},"Delete",-1),vt=[gt,ft],It={class:"list__date"};function Tt(t,e,o,s,n,d){return(0,a.wg)(),(0,a.j4)(r.W3,{name:"list",tag:"ul",class:(0,l.C_)(["list",d.listempty])},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(this.storedTodoItems,((e,o)=>((0,a.wg)(),(0,a.iD)("li",{class:"list__item",key:e.item},[(0,a._)("div",it,[(0,a._)("input",{type:"checkbox",id:e.item,checked:!0===e.completed,onChange:o=>t.toggleComplete({todoItem:e})},null,40,ut),(0,a._)("label",{for:e.item,class:"list__label"},[mt,(0,a._)("p",pt,(0,l.zw)(e.item),1)],8,ct)]),(0,a._)("div",ht,[(0,a._)("button",{class:"list__delete",onClick:s=>t.removeTodo({todoItem:e,index:o})},vt,8,_t),(0,a._)("p",It,(0,l.zw)(e.date),1)])])))),128))])),_:1},8,["class"])}var wt={name:"todoItems",computed:{...(0,O.Se)(["storedTodoItems","storedTodoItemsCount"]),listempty(){return this.storedTodoItemsCount<=0?"list--empty":null}},methods:{...(0,O.OI)({removeTodo:"removeOneItem",toggleComplete:"toggleOneItem"})}};const bt=(0,k.Z)(wt,[["render",Tt]]);var Ot=bt;const yt={class:"title"},kt={class:"title__text"},Ct=(0,a._)("span",{class:"title__message"},"반갑습니다,",-1),xt={class:"title__task"},Mt=(0,a._)("span",{class:"title__task-top"},"오늘의 할 일은",-1),$t={class:"title__task-count"},Nt={class:"title__task-total"},Rt=(0,a._)("span",{class:"title__task-info"},null,-1),St=(0,a._)("span",{class:"title__task-top"},"오늘의 할 일을",-1),Zt={class:"title__task-count"},Dt={class:"title__task-left"};function Lt(t,e,o,s,n,d){return(0,a.wg)(),(0,a.iD)("div",yt,[(0,a._)("p",kt,[Ct,(0,a._)("span",{onKeyup:e[0]||(e[0]=(0,r.D2)(((...t)=>d.handleEnter&&d.handleEnter(...t)),["enter"])),onBlur:e[1]||(e[1]=(...t)=>d.handleBlur&&d.handleBlur(...t)),class:"title__name",ref:"test",contenteditable:"true"}," "+(0,l.zw)(this.userName)+"님!",545)]),(0,a._)("p",xt,[Mt,(0,a._)("span",$t,[(0,a._)("em",Nt," 총 "+(0,l.zw)(this.todoItemsCount.total)+"개 입니다.",1)]),Rt]),(0,a._)("p",null,[St,(0,a._)("span",Zt,[(0,a._)("em",Dt," "+(0,l.zw)(this.todoItemsCount.total-this.todoItemsCount.left)+"개 하셨어요.",1)])])])}var Ut={data(){return{message:"",userName:this.$store.getters.storedName}},methods:{handleBlur(t){const e=this.userName,o=t.target.innerText;o!==e&&(""===o?t.target.innerText=e:this.$store.commit("setUserName",o))},handleEnter(){this.$refs.test.blur()}},computed:{todoItemsCount(){const t=()=>{const t=this.$store.getters.storedTodoItems;let e=0;for(let o=0;o<t.length;o++)!1===t[o].completed&&e++;return e},e={total:this.$store.getters.storedTodoItemsCount,left:t()};return e}},mounted(){this.message=W().daytime}};const jt=(0,k.Z)(Ut,[["render",Lt]]);var Vt=jt;const Wt={class:"modal__content"},At={class:"modal__text"};function Ft(t,e,o,s,n,l){return(0,a.wg)(),(0,a.j4)(r.uT,{name:"modal",appear:""},{default:(0,a.w5)((()=>[(0,a._)("div",{class:"modal modal__dim",onClick:e[1]||(e[1]=(0,r.iM)((e=>t.$emit("close")),["self"]))},[(0,a._)("div",Wt,[(0,a._)("p",At,[(0,a.WI)(t.$slots,"modal-text",{},(()=>[(0,a.Uk)("(여기에 모달 내용이 들어가요)")]))]),(0,a._)("button",{class:"modal__close",onClick:e[0]||(e[0]=e=>t.$emit("close"))},"OK")])])])),_:3})}var zt={};const Ht=(0,k.Z)(zt,[["render",Ft]]);var Pt=Ht;const Bt=(0,a._)("p",null,"회원가입",-1),Et=(0,a._)("label",{for:"username"},"닉네임: ",-1),Jt=(0,a._)("label",{for:"password"},"생년월일: ",-1),Kt=(0,a._)("button",{type:"submit"},[(0,a._)("span",null,"가입")],-1),qt=(0,a._)("span",null,"취소",-1),Yt=[qt];function Qt(t,e,o,s,n,l){return(0,a.wg)(),(0,a.iD)("div",null,[Bt,(0,a._)("form",{onSubmit:e[2]||(e[2]=(0,r.iM)((t=>l.submitForm(this.username,this.password)),["prevent"]))},[(0,a._)("div",null,[Et,(0,a.wy)((0,a._)("input",{id:"username",type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>this.username=t),maxlength:"20"},null,512),[[r.nr,this.username]])]),(0,a._)("div",null,[Jt,(0,a.wy)((0,a._)("input",{id:"password",placeholder:"ex)990319",type:"password","onUpdate:modelValue":e[1]||(e[1]=t=>this.password=t),maxlength:"6"},null,512),[[r.nr,this.password]])]),Kt],32),(0,a._)("button",{onClick:e[3]||(e[3]=(...e)=>t.setIsRegister&&t.setIsRegister(...e))},Yt)])}var Gt={data(){return{username:"",password:""}},methods:{...(0,O.OI)({setIsRegister:"setIsRegister"}),submitForm(t,e){const o=/([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))$/;if(""===t||""===e||t.length>20||6!=e.length||!o.test(e)){const t="입력된 값이 유효하지 않습니다.";this.$emit("alertModal",t)}else{var s={name:t,birth:e};const o="/login/signUp";G.Z.post(o,JSON.stringify(s)).then((t=>{if(-2==t.data){const t="이미 등록된 사용자입니다.";this.$emit("alertModal",t)}else this.setIsRegister()}))}}}};const Xt=(0,k.Z)(Gt,[["render",Qt]]);var te=Xt,ee={name:"App",data(){return{modalVisible:!1,modalText:""}},computed:{...(0,O.Se)(["storedName","isLogIn","isRegister"])},methods:{showModal(t){this.modalText=t,this.modalVisible=!this.modalVisible},reload(){this.$refs.list.getBoardList()}},components:{TodoController:x,TodoFooter:D,TodoHeader:z,TodoHello:et,TodoInput:dt,TodoList:Ot,TodoTitle:Vt,TodoModal:Pt,TodoRegister:te}};const oe=(0,k.Z)(ee,[["render",_]]);var se=oe,ne=o(2415);o(560);const re={async fetch(t){var e=!1;const o=[];void 0==t||null===t||null==t&&""==t||(e=t),console.log(e),await G.Z.get("/todos/"+e).then((t=>{const e=t.data;if(e.length>0)for(let s=0;s<e.length;s++)o.push(e[s])})).catch((t=>{console.log(t.res)})),be.state.todoItems=o},fetchName(){if(localStorage.getItem("userName")){const t=localStorage.getItem("userName");return t}}};var ae=re;const le=t=>t.todoItems,de=t=>t.userName,ie=(t,e)=>e.storedTodoItems.length,ue=t=>t.isLogin,ce=t=>t.isRegister,me=async(t,e)=>{var o={item:e,date:`${W().date} ${W().week}`,time:W().time,completed:!1};await G.Z.post("/todos/save",JSON.stringify(o)).then((e=>{"ok validation(save)"==e.data?ae.fetch(t.todoOldestOrder):alert("등록 실패")}))},pe=(t,e)=>{G.Z.put("/todos/delete/"+e.todoItem.id).then((e=>{"ok delete"==e.data?ae.fetch(t.todoOldestOrder):alert("삭제 실패")}))},he=(t,e)=>{var o={id:e.todoItem.id,completed:!e.todoItem.completed};G.Z.put("/todos/update/"+e.todoItem.id,JSON.stringify(o)).then((e=>{"ok update"==e.data?ae.fetch(t.todoOldestOrder):alert("업데이트 실패")}))},_e=t=>{var e=t.todoItems;e.length>0&&G.Z.put("/todos/clear").then((e=>{"ok clear"==e.data?ae.fetch(t.todoOldestOrder):alert("클리어 실패")}))},ge=t=>{t.todoOldestOrder=!0,ae.fetch(t.todoOldestOrder)},fe=t=>{t.todoOldestOrder=!1,ae.fetch(t.todoOldestOrder)},ve=(t,e)=>{t.userName=e.username,G.Z.get("/todos/set/"+e.id).then((o=>{o.data===e.id&&(ae.fetch(t.todoOldestOrder),t.isLogin=!0)}))},Ie=t=>{t.isRegister=!t.isRegister},Te=t=>{t.todoOldestOrder=!1,t.isLogin=!1,t.userName=""},we=(0,r.ri)();we.use(O.ZP);const be=new O.ZP.Store({state:{todoItems:ae.fetch(),userName:ae.fetchName(),todoOldestOrder:!0,isLogin:!1,isRegister:!1},getters:s,mutations:n,plugins:[(0,ne.Z)()]});G.Z.defaults.baseURL="http://localhost:8787/",G.Z.defaults.headers.get["Content-Type"]="application/json",G.Z.defaults.headers.post["Content-Type"]="application/json",G.Z.defaults.headers.put["Content-Type"]="application/json";const Oe=(0,r.ri)(se);Oe.config.globalProperties.axios=G.Z,Oe.use(be).mount("#app")}},e={};function o(s){var n=e[s];if(void 0!==n)return n.exports;var r=e[s]={exports:{}};return t[s].call(r.exports,r,r.exports,o),r.exports}o.m=t,function(){var t=[];o.O=function(e,s,n,r){if(!s){var a=1/0;for(u=0;u<t.length;u++){s=t[u][0],n=t[u][1],r=t[u][2];for(var l=!0,d=0;d<s.length;d++)(!1&r||a>=r)&&Object.keys(o.O).every((function(t){return o.O[t](s[d])}))?s.splice(d--,1):(l=!1,r<a&&(a=r));if(l){t.splice(u--,1);var i=n();void 0!==i&&(e=i)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[s,n,r]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,r,a=s[0],l=s[1],d=s[2],i=0;if(a.some((function(e){return 0!==t[e]}))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(d)var u=d(o)}for(e&&e(s);i<a.length;i++)r=a[i],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(u)},s=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(4687)}));s=o.O(s)})();
//# sourceMappingURL=app.2ceff0ea.js.map