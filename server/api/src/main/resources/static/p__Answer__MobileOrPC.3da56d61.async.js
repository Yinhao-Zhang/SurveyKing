(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[1835],{34687:function(L){L.exports={container:"container___1sYa-",lang:"lang___l6cji",content:"content___2zk1-",top:"top___1C1Zi",header:"header___5xZ3f",logo:"logo___2hXsy",title:"title___1-xuF",desc:"desc___-njyT",main:"main___x4OjT",icon:"icon___rzGKO",other:"other___lLyaU",register:"register___11Twg",prefixIcon:"prefixIcon___23Xrx"}},29791:function(L,p,e){"use strict";var O=e(24557),P=e(78874),I=e(11013),V=e(97544),T=e(85893),D=void 0==="1";p.Z=function(){return D?(0,T.jsx)(V.Z,{copyright:!1,links:[{key:"Survey King",title:(0,T.jsx)(O.Z,{}),href:"https://surveyking.cn",blankTarget:!0},{key:"github",title:(0,T.jsx)(P.Z,{}),href:"https://github.com/javahuang/SurveyKing",blankTarget:!0},{key:"gitee",title:(0,T.jsx)(I.Z,{}),href:"https://gitee.com/surveyking/surveyking",blankTarget:!0}]}):(0,T.jsx)(T.Fragment,{})}},36432:function(L,p,e){"use strict";e.r(p),e.d(p,{MobileOrPC:function(){return R},default:function(){return U}});var O=e(11849),P=e(57338),I=e(25084),V=e(71194),T=e(50146),D=e(57663),m=e(71577),E=e(9715),z=e(86835),J=e(47673),Z=e(4107),b=e(94657),v=e(51615),d=e(67294),S=e(28991),C={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM540 701v53c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-53a48.01 48.01 0 1156 0zm152-237H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224z"}}]},name:"lock",theme:"filled"},H=C,_=e(27029),ee=function(t,r){return d.createElement(_.Z,(0,S.Z)((0,S.Z)({},t),{},{ref:r,icon:H}))};ee.displayName="LockFilled";var ue=d.forwardRef(ee),de={icon:function(t,r){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M81.8 537.8a60.3 60.3 0 010-51.5C176.6 286.5 319.8 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c-192.1 0-335.4-100.5-430.2-300.2z",fill:r}},{tag:"path",attrs:{d:"M512 258c-161.3 0-279.4 81.8-362.7 254C232.6 684.2 350.7 766 512 766c161.4 0 279.5-81.8 362.7-254C791.4 339.8 673.3 258 512 258zm-4 430c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z",fill:r}},{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258s279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766z",fill:t}},{tag:"path",attrs:{d:"M508 336c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z",fill:t}}]}},name:"eye",theme:"twotone"},ce=de,l=function(t,r){return d.createElement(_.Z,(0,S.Z)((0,S.Z)({},t),{},{ref:r,icon:ce}))};l.displayName="EyeTwoTone";var ve=d.forwardRef(l),re=e(88633),fe=e(80937),ge=e(19319),A=e(87998),Q=e(92725),X=e(48644),me=e(63439),he=e(34792),se=e(48086),K=e(3182),pe=e(69610),ae=e(54941),ye=e(94043),j=e.n(ye),$=e(36602),w=e(92592),o=e(54531),Ee=e(42238),te=e.n(Ee),F=function(){function f(t){var r;(0,pe.Z)(this,f),this.id=void 0,this.project=void 0,this.survey=void 0,this.loading=void 0,this.verifying=!1,this.saving=!1,this.isPC=void 0,this.errorCode=void 0,this.errorMessage=void 0,this.progress=0,this.confirmTempAnswerType=0,this.statistics=void 0,this.answerUrl=void 0,this.answerQrCodeUrl=void 0,this.success=void 0,this.answerId=void 0,this.answerView=void 0,this.values=void 0,this.surveyRef=void 0,this.id=t.id,this.answerId=t.answerId,this.surveyRef=t.surveyRef,this.makeObservable(),this.loadProject(),this.confirmTempAnswerType=(r=this.savedAnswer)!==null&&r!==void 0&&r.progress?1:0}return(0,ae.Z)(f,[{key:"makeObservable",value:function(){(0,o.Ou)(this,{id:o.LO.ref,answerId:o.LO.ref,survey:o.LO.ref,loading:o.LO.ref,saving:o.LO.ref,verifying:o.LO.ref,project:o.LO.ref,errorCode:o.LO.ref,errorMessage:o.LO.ref,progress:o.LO.ref,confirmTempAnswerType:o.LO.ref,statistics:o.LO.ref,answerUrl:o.LO.ref,answerQrCodeUrl:o.LO.ref,success:o.LO.ref,answerView:o.LO.ref,values:o.LO.ref,passwordRequired:o.LO.computed,loginRequired:o.LO.computed,mode:o.LO.computed,tempSaveId:o.LO.computed,status:o.LO.computed,setting:o.LO.computed,tempSave:o.aD,saveData:o.aD,loadProject:o.aD,verifyPassword:o.aD,changeProgress:o.aD})}},{key:"setting",get:function(){var r;return(r=this.project)===null||r===void 0?void 0:r.setting}},{key:"status",get:function(){var r;return(r=this.project)===null||r===void 0?void 0:r.status}},{key:"passwordRequired",get:function(){var r;return(r=this.project)===null||r===void 0?void 0:r.passwordRequired}},{key:"loginRequired",get:function(){var r;return(r=this.project)===null||r===void 0?void 0:r.loginRequired}},{key:"mode",get:function(){var r;return(r=this.project)===null||r===void 0?void 0:r.mode}},{key:"tempSaveId",get:function(){return"savedAnswer-"+this.id}},{key:"savedAnswer",get:function(){var r=localStorage.getItem(this.tempSaveId);return r&&JSON.parse(r)}},{key:"startTime",get:function(){var r,c,s;return((r=this.savedAnswer)===null||r===void 0||(c=r.metaInfo)===null||c===void 0||(s=c.answerInfo)===null||s===void 0?void 0:s.startTime)||new Date().getTime()}},{key:"tempSave",value:function(r){var c=localStorage.getItem(this.tempSaveId),s;c?(s=JSON.parse(c),s.answer=r,s.progress=this.progress):s={answer:r,metaInfo:{answerInfo:{startTime:new Date().getTime()}},progress:this.progress},localStorage.setItem(this.tempSaveId,JSON.stringify(s))}},{key:"saveData",value:function(){var t=(0,K.Z)(j().mark(function c(s,g){var a,u,Y=this,n,ne,ie,q,B,k,G;return j().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:if(this.saving=!0,n=new(te())().getResult(),ne={answer:s,projectId:this.id,metaInfo:{answerInfo:{startTime:this.startTime,endTime:new Date().getTime()},clientInfo:{browser:n.browser.name,browserVersion:n.browser.version,deviceType:n.device.type,platform:n.os.name,platformVersion:n.os.version}},id:g||this.answerId},ie=this.startTime,q=((a=this.project)===null||a===void 0||(u=a.setting.examSetting)===null||u===void 0?void 0:u.minSubmitMinutes)||0,B=ie+q*60*1e3,!(q>0&&new Date().getTime()<B)){W.next=10;break}return se.default.error("\u672A\u5230\u4EA4\u5377\u65F6\u95F4"),this.saving=!1,W.abrupt("return");case 10:return W.next=12,$.hi.post("/api/public/saveAnswer",ne);case 12:k=W.sent,k.success&&(k.data.answerId?(G="".concat(window.location.origin,"/s/").concat(this.id,"/").concat(k.data.answerId),this.answerUrl=G,w.toDataURL(G,{errorCorrectionLevel:"H",type:"image/jpeg",quality:.3,margin:5}).then(function(oe){Y.answerQrCodeUrl=oe}).catch(function(oe){})):k.data.examScore!==void 0,this.answerView=k.data,this.values=s),localStorage.removeItem(this.tempSaveId),this.saving=!1,this.success=!0;case 17:case"end":return W.stop()}},c,this)}));function r(c,s){return t.apply(this,arguments)}return r}()},{key:"loadStatistics",value:function(){var t=(0,K.Z)(j().mark(function c(){var s;return j().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!this.loading){a.next=2;break}return a.abrupt("return");case 2:return this.loading=!0,a.next=5,$.hi.post("/api/public/statistics",{id:this.id});case 5:s=a.sent,s.success&&(this.statistics=s.data),this.loading=!1;case 8:case"end":return a.stop()}},c,this)}));function r(){return t.apply(this,arguments)}return r}()},{key:"loadProject",value:function(){var t=(0,K.Z)(j().mark(function c(){var s;return j().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return this.loading=!0,a.next=3,$.hi.post("/api/public/loadProject",{id:this.id});case 3:s=a.sent,s.success?(this.project=s.data,this.survey=s.data.survey,s.data.answerId&&(this.answerId=s.data.answerId)):this.errorMessage=s.message,this.errorCode=s.code,this.loading=!1;case 7:case"end":return a.stop()}},c,this)}));function r(){return t.apply(this,arguments)}return r}()},{key:"loadAnswer",value:function(){var t=(0,K.Z)(j().mark(function c(s){var g;return j().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,$.hi.post("/api/public/loadAnswer",{id:s,projectId:this.id});case 2:if(g=u.sent,!g.success){u.next=7;break}return u.abrupt("return",g.data);case 7:this.errorCode=g.code,this.errorMessage=g.message;case 9:case"end":return u.stop()}},c,this)}));function r(c){return t.apply(this,arguments)}return r}()},{key:"verifyPassword",value:function(){var t=(0,K.Z)(j().mark(function c(s){var g;return j().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return this.verifying=!0,u.next=3,$.hi.post("/api/public/verifyPassword",{id:this.id,password:s});case 3:if(g=u.sent,this.verifying=!1,g.code!==200){u.next=8;break}return this.survey=g.data.survey,u.abrupt("return",!0);case 8:return u.abrupt("return",!1);case 9:case"end":return u.stop()}},c,this)}));function r(c){return t.apply(this,arguments)}return r}()},{key:"upload",value:function(){var t=(0,K.Z)(j().mark(function c(s,g){return j().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",$.hi.upload("/api/public/upload",{file:s,basePath:this.id},g));case 1:case"end":return u.stop()}},c,this)}));function r(c,s){return t.apply(this,arguments)}return r}()},{key:"changeProgress",value:function(r){this.progress=r}}]),f}(),i=e(85893),R=(0,fe.Pi)(function(){var f,t=(0,v.UO)(),r=t.id,c=t.answerId,s=(0,v.TH)(),g=s.query.preview==="1",a=s.query.openid,u=(0,d.useMemo)(function(){return(0,A.SB)()},[]),Y=(0,d.useRef)(null),n=(0,d.useMemo)(function(){return new F({id:r,answerId:c,surveyRef:Y})},[r,c]),ne=n.saving,ie=n.loading,q=(f=n.setting)===null||f===void 0?void 0:f.answerSetting,B=q||{},k=B.autoSave,G=B.progressBar,je=B.initialValues,W=B.questionNumber,oe=B.wechatOnly,be=B.onePageOneQuestion,xe=B.answerSheetVisible,Le=n.errorMessage,_e=n.savedAnswer,we=n.confirmTempAnswerType,Se=n.statistics,N=n.survey,le=n.answerId,Me=n.mode,Ae=n.success,Oe=(0,A.XO)(N,s),Re=(0,d.useState)(),Ce=(0,b.Z)(Re,2),Pe=Ce[0],Ue=Ce[1],Be=(0,d.useState)({}),De=(0,b.Z)(Be,2),Ie=De[0],Ze=De[1];(0,d.useEffect)(function(){N&&(0,A.iq)(N,"statEnabled")&&n.loadStatistics()},[N,n]),(0,d.useEffect)(function(){N&&le&&n.loadAnswer(le).then(function(x){if(x){var h;(h=Y.current)===null||h===void 0||h.setValues(x.answer)}})},[le,n,N]);var Ke=(0,d.useCallback)(function(x,h){G&&n.changeProgress(h),k&&x&&n.tempSave(x)},[G]),$e=function(){var h;return(0,i.jsxs)("div",{className:"password-confirm",children:[(0,i.jsx)("h3",{children:(h=n.project)===null||h===void 0?void 0:h.name}),(0,i.jsx)(T.Z,{visible:!0,footer:null,closable:!1,width:350,children:(0,i.jsxs)(z.Z,{style:{margin:"10px 0"},children:[(0,i.jsx)("div",{style:{textAlign:"center",fontSize:20,marginBottom:10},children:"\u8BF7\u8F93\u5165\u5BC6\u7801\u586B\u5199\u95EE\u5377"}),(0,i.jsx)(z.Z.Item,{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801!"}],validateStatus:Ie.validateStatus,help:Ie.help,children:(0,i.jsx)(Z.Z.Password,{size:"large",placeholder:"\u5BC6\u7801",prefix:(0,i.jsx)(ue,{}),onChange:function(M){return Ue(M.target.value)},iconRender:function(M){return M?(0,i.jsx)(ve,{}):(0,i.jsx)(re.Z,{})}})}),(0,i.jsx)(m.Z,{type:"primary",size:"large",htmlType:"submit",block:!0,loading:n.verifying,onClick:function(){Pe&&n.verifyPassword(Pe).then(function(M){M||Ze({help:"\u5BC6\u7801\u9A8C\u8BC1\u5931\u8D25",validateStatus:"error"})})},children:"\u9A8C\u8BC1\u5E76\u586B\u5199\u95EE\u5377"})]})})]})},Fe=function(){return(0,i.jsx)(I.Z,{visible:!0,width:"100%",closable:!1,bodyStyle:{padding:0},children:(0,i.jsx)(ge.default,{onOk:function(){n.loadProject()}})})},Te=function(h){var y,M;return(0,i.jsxs)("div",{className:"render-failure ".concat(u?"mobile":"phone"),children:[((y=n.project)===null||y===void 0?void 0:y.name)&&(0,i.jsx)("div",{className:"title",children:(M=n.project)===null||M===void 0?void 0:M.name}),(0,i.jsxs)("div",{className:"content",children:[(0,i.jsx)("div",{children:(0,i.jsx)(X.AT,{})}),(0,i.jsx)("h2",{children:Le||h}),(0,i.jsx)("div",{children:"\u611F\u8C22\u5173\u6CE8\uFF01"})]})]})},ke=function(){if(n.loading)return(0,i.jsx)(Q.Z,{});if(n.errorCode!==200)return Te();if(oe&&!(0,A.CL)())return Te("\u53EA\u80FD\u5728\u5FAE\u4FE1\u4E2D\u6253\u5F00");if(N&&!Ae)return we===1&&k&&Me==="survey"?(0,i.jsx)(X.oq,{}):(0,i.jsx)(me.O,{ref:Y,mode:Me,loading:ne||ie,progressBar:G,questionNumber:W,theme:u?"antdmobile":"antd",schema:N,onChange:Ke,onePageOneQuestion:be,answerSheetVisible:xe,onInit:function(y){n.tempSave(y.values)},initialValues:we===3?Oe:(0,O.Z)((0,O.Z)((0,O.Z)({},je),_e==null?void 0:_e.answer),Oe),statistics:Se,onUpload:function(y,M){return n.upload(y,M)},footerVisible:!g,headerVisible:!g,isPreview:g,onSubmit:function(y){n.saveData((0,O.Z)((0,O.Z)({},y),{},{openid:a}),le)}});if(n.loginRequired)return(0,i.jsx)("div",{children:Fe()});if(n.passwordRequired)return(0,i.jsx)("div",{children:$e()})},We=function(){return(0,i.jsx)(X.x4,{})},Ne=function(){var h,y,M=(h=n.survey)===null||h===void 0||(y=h.attribute)===null||y===void 0?void 0:y.backgroundImage;if(M)return{backgroundImage:"url(/api/public/preview/".concat(M,")")}};return(0,i.jsx)(A.ff.Provider,{value:n,children:(0,i.jsxs)("div",{className:"survey ".concat(u?"mobile":"pc"),style:Ne(),children:[ke(),We()]})})}),U=R},19319:function(L,p,e){"use strict";e.r(p);var O=e(34792),P=e(48086),I=e(3182),V=e(94657),T=e(17462),D=e(76772),m=e(94043),E=e.n(m),z=e(89366),J=e(2603),Z=e(67294),b=e(952),v=e(5966),d=e(42285),S=e(73727),C=e(29791),H=e(34687),_=e.n(H),ee=e(27400),ue=e(77613),de=e(5481),ce=e.n(de),l=e(85893),ve=function(A){var Q=A.content;return(0,l.jsx)(D.Z,{style:{marginBottom:24},message:Q,type:"error",showIcon:!0})},re=void 0==="1",fe=function(A){var Q,X,me=(0,Z.useState)(!1),he=(0,V.Z)(me,2),se=he[0],K=he[1],pe=(0,Z.useState)(),ae=(0,V.Z)(pe,2),ye=ae[0],j=ae[1],$=(0,ee.a)(),w=$.system,o=(0,d.YB)(),Ee=function(){var F=(0,I.Z)(E().mark(function i(){return E().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:case"end":return U.stop()}},i)}));return function(){return F.apply(this,arguments)}}(),te=function(){var F=(0,I.Z)(E().mark(function i(R){var U,f,t,r,c,s;return E().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,$.login(R);case 3:if(U=a.sent,!U.success){a.next=18;break}if(f=o.formatMessage({id:"pages.login.success",defaultMessage:"\u767B\u5F55\u6210\u529F\uFF01"}),P.default.success(f),!A.onOk){a.next=10;break}return A.onOk(),a.abrupt("return");case 10:return a.next=12,Ee();case 12:if(d.m8){a.next=14;break}return a.abrupt("return");case 14:return t=d.m8.location.query,r=t,c=r.redirect,d.m8.push(c||"/"),a.abrupt("return");case 18:j(U.message&&"error"),a.next=25;break;case 21:a.prev=21,a.t0=a.catch(0),s=o.formatMessage({id:"pages.login.failure",defaultMessage:"\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01"}),P.default.error(s);case 25:K(!1);case 26:case"end":return a.stop()}},i,null,[[0,21]])}));return function(R){return F.apply(this,arguments)}}();return(0,l.jsxs)("div",{className:_().container,children:[(0,l.jsx)("div",{className:_().lang,"data-lang":!0,children:d.pD&&(0,l.jsx)(d.pD,{})}),(0,l.jsxs)("div",{className:_().content,children:[(0,l.jsxs)("div",{className:_().top,children:[(0,l.jsx)("div",{className:_().header,children:(0,l.jsxs)(S.rU,{to:"/",children:[(0,l.jsx)("img",{alt:"logo",className:_().logo,src:w.avatar?"/api/public/preview/".concat(w==null?void 0:w.avatar):ce()}),(0,l.jsx)("span",{className:_().title,children:w==null?void 0:w.name})]})}),(0,l.jsx)("div",{className:_().desc,children:w==null?void 0:w.description})]}),(0,l.jsx)("div",{className:_().main,children:(0,l.jsxs)(b.ZP,{initialValues:{autoLogin:!0},submitter:{searchConfig:{submitText:o.formatMessage({id:"pages.login.submit",defaultMessage:"\u767B\u5F55"})},render:function(i,R){return R.pop()},submitButtonProps:{loading:se,size:"large",style:{width:"100%"},htmlType:"submit"}},isKeyPressSubmit:!0,onFinish:function(){var F=(0,I.Z)(E().mark(function i(R){return E().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(!se){f.next=2;break}return f.abrupt("return");case 2:return K(!0),f.next=5,te(R);case 5:case"end":return f.stop()}},i)}));return function(i){return F.apply(this,arguments)}}(),children:[ye==="error"&&(0,l.jsx)(ve,{content:o.formatMessage({id:"pages.login.accountLogin.errorMessage",defaultMessage:"\u8D26\u6237\u6216\u5BC6\u7801\u9519\u8BEF"})}),(0,l.jsx)(v.Z,{name:"username",fieldProps:{size:"large",prefix:(0,l.jsx)(z.Z,{className:_().prefixIcon})},placeholder:o.formatMessage({id:"pages.login.username.placeholder",defaultMessage:"\u7528\u6237\u540D"}),rules:[{required:!0,message:(0,l.jsx)(d._H,{id:"pages.login.username.required",defaultMessage:"\u8BF7\u8F93\u5165\u7528\u6237\u540D!"})}]}),(0,l.jsx)(v.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,l.jsx)(J.Z,{className:_().prefixIcon})},placeholder:o.formatMessage({id:"pages.login.password.placeholder",defaultMessage:"\u5BC6\u7801"}),rules:[{required:!0,message:(0,l.jsx)(d._H,{id:"pages.login.password.required",defaultMessage:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"})}]}),!re&&((Q=w.registerInfo)===null||Q===void 0?void 0:Q.registerEnabled)&&(0,l.jsx)("div",{style:{marginBottom:24,display:"flex",justifyContent:"flex-end"},children:(0,l.jsx)(S.rU,{to:"/user/register",children:(0,l.jsx)(d._H,{id:"pages.login.registerAccount",defaultMessage:"\u6CE8\u518C"})})}),re&&(0,l.jsxs)("div",{style:{marginBottom:24},children:[((X=w.registerInfo)===null||X===void 0?void 0:X.registerEnabled)&&(0,l.jsx)(S.rU,{to:"/user/register",children:(0,l.jsx)(d._H,{id:"pages.login.registerAccount",defaultMessage:"\u6CE8\u518C"})}),(0,l.jsx)("a",{style:{float:"right"},onClick:function(){return te({username:"admin",password:"123456"})},children:(0,l.jsx)(d._H,{id:"pages.login.try",defaultMessage:"\u8BD5\u4E00\u8BD5"})})]})]})})]}),(0,l.jsx)(C.Z,{})]})};p.default=(0,ue.P)(fe)},5481:function(L,p,e){L.exports=e.p+"static/logo.de1a765f.svg"},20640:function(L,p,e){"use strict";var O=e(11742),P={"text/plain":"Text","text/html":"Url",default:"Text"},I="Copy to clipboard: #{key}, Enter";function V(D){var m=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return D.replace(/#{\s*key\s*}/g,m)}function T(D,m){var E,z,J,Z,b,v,d=!1;m||(m={}),E=m.debug||!1;try{J=O(),Z=document.createRange(),b=document.getSelection(),v=document.createElement("span"),v.textContent=D,v.style.all="unset",v.style.position="fixed",v.style.top=0,v.style.clip="rect(0, 0, 0, 0)",v.style.whiteSpace="pre",v.style.webkitUserSelect="text",v.style.MozUserSelect="text",v.style.msUserSelect="text",v.style.userSelect="text",v.addEventListener("copy",function(C){if(C.stopPropagation(),m.format)if(C.preventDefault(),typeof C.clipboardData=="undefined"){E&&console.warn("unable to use e.clipboardData"),E&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var H=P[m.format]||P.default;window.clipboardData.setData(H,D)}else C.clipboardData.clearData(),C.clipboardData.setData(m.format,D);m.onCopy&&(C.preventDefault(),m.onCopy(C.clipboardData))}),document.body.appendChild(v),Z.selectNodeContents(v),b.addRange(Z);var S=document.execCommand("copy");if(!S)throw new Error("copy command was unsuccessful");d=!0}catch(C){E&&console.error("unable to copy using execCommand: ",C),E&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(m.format||"text",D),m.onCopy&&m.onCopy(window.clipboardData),d=!0}catch(H){E&&console.error("unable to copy using clipboardData: ",H),E&&console.error("falling back to prompt"),z=V("message"in m?m.message:I),window.prompt(z,D)}}finally{b&&(typeof b.removeRange=="function"?b.removeRange(Z):b.removeAllRanges()),v&&document.body.removeChild(v),J()}return d}L.exports=T},11742:function(L){L.exports=function(){var p=document.getSelection();if(!p.rangeCount)return function(){};for(var e=document.activeElement,O=[],P=0;P<p.rangeCount;P++)O.push(p.getRangeAt(P));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return p.removeAllRanges(),function(){p.type==="Caret"&&p.removeAllRanges(),p.rangeCount||O.forEach(function(I){p.addRange(I)}),e&&e.focus()}}}}]);
