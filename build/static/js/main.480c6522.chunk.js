(this.webpackJsonpleniolabs=this.webpackJsonpleniolabs||[]).push([[0],{103:function(e,t,a){},108:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),l=a.n(c),o=(a(103),a(24)),i=(a(108),a(46)),u=a(15),s=a(19),m=a.n(s),E=a(47),d=a(32),f=a(61),p=a.n(f),b="https://api.propublica.org/congress/v1",v="Z4qBQxNxqemtefIaPDZVTeTixb06qdrHVtdjozjD",_=function(){var e=Object(E.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("".concat(b,"/116/senate/members.json"),{headers:{"X-API-Key":v}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(E.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("".concat(b,"/members/").concat(t,".json"),{headers:{"X-API-Key":v}});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),h=a(171),y=a(167),O=a(180),j=a(181),C=a(172),S=a(166),k=a(54),M=a.n(k),F=a(85),N=a.n(F),w=a(161),T=a(165),R=function(e){var t=e.first_name,a=e.last_name,n=e.onClick,c=e.id,l="".concat(t," ").concat(a);return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{className:"root"},r.a.createElement(T.a,{action:r.a.createElement(S.a,{onClick:function(){return n(c)},"aria-label":"settings"},r.a.createElement(M.a,null)),title:l})))},x=(a(80),a(168)),B=a(177),A=a(176),U=a(179),H=function(e){var t=e.onChange,a=Object(o.c)((function(e){return e.members})).members,c=Object(n.useState)([]),l=Object(d.a)(c,2),i=l[0],u=l[1],s=Object(n.useState)(""),m=Object(d.a)(s,2),E=m[0],f=m[1];Object(n.useEffect)((function(){if(a.length){var e=Object.keys(a[0]),t=p(e);u(t)}}),[a]);var p=function(e){return e.map((function(e){return{key:e,value:b(e)}}))},b=function(e){return e.split("_").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")};return r.a.createElement(y.a,null,r.a.createElement("div",{className:"advancedFilter"},r.a.createElement(x.a,{variant:"outlined"},r.a.createElement(B.a,{id:"selectLabel"},"Advanced Filter"),r.a.createElement(A.a,{labelId:"selectLabel",className:"select",onChange:function(e){return f(e.target.value)}},i.map((function(e){return r.a.createElement(U.a,{value:e.key},e.value)})))),r.a.createElement(O.a,{variant:"outlined",label:"Search",autoFocus:!0,onChange:function(e){return t(e.target.value,E)},className:"textField"})))},I=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.members})),a=t.members,c=t.loading,l=Object(u.e)(),i=Object(n.useState)([]),s=Object(d.a)(i,2),f=s[0],p=s[1],b=Object(n.useState)(0),v=Object(d.a)(b,2),_=v[0],g=v[1],k=Object(n.useState)([]),F=Object(d.a)(k,2),w=F[0],T=F[1],x=Object(n.useState)(!1),B=Object(d.a)(x,2),A=B[0],U=B[1];Object(n.useEffect)((function(){e({type:"FETCH_MEMBERS_REQUEST"})}),[]),Object(n.useEffect)((function(){var e=I(w,7,_);w.length&&p(e)}),[_]),Object(n.useEffect)((function(){T(a);var e=I(a,7,_);p(e)}),[a]);var I=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=t*a,r=t+t*a,c=e.slice(n,r);return c},L=function(){var e=Object(E.a)(m.a.mark((function e(t){var n,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target,r=a.filter((function(e){if(Object.keys(e).filter((function(t){return e[t]})).filter((function(t){return String(e[t]).includes(n.value)})).length)return e})),T(r),c=I(r,7,_),p(c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(e){l.push("/id/".concat(e))};return r.a.createElement(r.a.Fragment,null,c&&r.a.createElement(h.a,{color:"secondary"}),r.a.createElement(y.a,{className:"listContainer"},r.a.createElement("h1",null,"Member List"),r.a.createElement("div",{className:"filterArea"},r.a.createElement("div",null,!1===A&&r.a.createElement(O.a,{variant:"outlined",margin:"normal",label:"Search",autoFocus:!0,onChange:L}),A&&r.a.createElement(H,{onChange:function(e,t){var n=a.filter((function(a){return String(a[t]).includes(e)}));T(n);var r=I(n,7,_);p(r)}})),r.a.createElement(j.a,{onChange:function(){U(!A)},className:"switchButton"})),r.a.createElement(C.a,null,f.map((function(e){return r.a.createElement(R,{key:e.id,first_name:e.first_name,last_name:e.last_name,onClick:D,id:e.id})}))),r.a.createElement("div",{className:"paginationButtons"},0!==_&&r.a.createElement(S.a,{onClick:function(){return g(_-1)}},r.a.createElement(N.a,null)),_<Math.ceil(w.length/7)-1&&r.a.createElement(S.a,{onClick:function(){g(_+1)}},r.a.createElement(M.a,null)))))},L=a(173),D=a(174),G=a(175),P=a(58),Q=function(){return r.a.createElement(L.a,{position:"static",className:"root"},r.a.createElement(D.a,null,r.a.createElement(G.a,{href:"/",color:"inherit"},r.a.createElement(P.a,{variant:"h6",className:"title"},"CONGRESS APP"))))},V=(a(129),function(){var e=Object(u.f)().id,t=Object(o.c)((function(e){return e.detailed})),a=Object(o.b)();if(Object(n.useEffect)((function(){try{a({type:"FETCH_ONE_MEMBER_REQUEST"}),g(e).then((function(e){a({type:"FETCH_ONE_MEMBER_SUCCESS",payload:e.results[0]})}))}catch(t){a(function(e){return{type:"FETCH_ONE_MEMBER_FAILURE",payload:e}}()),console.error(t)}}),[]),t.loading)return r.a.createElement(h.a,{color:"secondary"});var c=Object.keys(t.member);return r.a.createElement(y.a,null,r.a.createElement(Z,null),r.a.createElement("div",{className:"table"},c.map((function(e){return r.a.createElement("div",{className:"tableElement"},r.a.createElement("div",{className:"elementLabel"},e),r.a.createElement("div",null,String(t.member[e])))}))))}),z=a(86),q=a.n(z),J=a(87),K=a.n(J),W=(a(130),function(){return r.a.createElement("footer",null,r.a.createElement("div",null,r.a.createElement("p",null,"Copyright \xa9 2020 Agustin Gomez")),r.a.createElement("div",null,r.a.createElement(S.a,{href:"https://github.com/GomezAgustin12/congress",target:"_blank"},r.a.createElement(q.a,null)),r.a.createElement(S.a,{href:"https://www.linkedin.com/in/agustin-gomez-521028132/",target:"_blank"},r.a.createElement(K.a,null))))}),X=a(88),Y=a.n(X),Z=(a(131),function(){var e=Object(u.e)();return r.a.createElement(Y.a,{className:"backButton",onClick:function(){return e.push("/")}})}),$=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,null))},ee=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(V,null))},te=a(27),ae=a(43),ne={loading:!1,members:[],error:!1},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_MEMBERS_REQUEST":return Object(ae.a)(Object(ae.a)({},e),{},{loading:!0,error:!1});case"FETCH_MEMBERS_SUCCESS":return{loading:!1,members:t.payload||ne.member};case"FETCH_MEMBERS_FAILURE":return{loading:!1,error:!0};default:return e}},ce={loading:!1,member:{"First Name":"","Middle Name":"","Last Name":"",Suffix:"","Date of Birth":"",Gender:"",url:"","Times Tag":"",govtrack_id:"",cspan_id:"","Votesmart ID":"","Twitter Account":"","Facebook Account":"","Youtube Account":"",crp_id:"","Google Entity ID":"",rss_url:"",in_office:!0,"Current Party":"","Most Recent Vote":"","Last Updated":""},error:!1},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ONE_MEMBER_REQUEST":return Object(ae.a)(Object(ae.a)({},e),{},{loading:!0,error:!1});case"FETCH_ONE_MEMBER_SUCCESS":return{loading:!1,member:{"First Name":t.payload.first_name,"Middle Name":t.payload.middle_name,"Last Name":t.payload.last_name,Suffix:t.payload.suffix,"Date of Birth":t.payload.date_of_birth,Gender:t.payload.gender,url:t.payload.url,"Times Tag":t.payload.times_tag,govtrack_id:t.payload.govtrack_id,cspan_id:t.payload.cspan_id,"Votesmart ID":t.payload.votesmart_id,"Twitter Account":t.payload.twitter_account,"Facebook Account":t.payload.facebook_account,"Youtube Account":t.payload.youtube_account,crp_id:t.payload.crp_id,"Google Entity ID":t.payload.google_entity_id,rss_url:t.payload.rss_url,in_office:t.payload.in_office,"Current Party":t.payload.current_party,"Most Recent Vote":t.payload.most_recent_vote,"Last Updated":t.payload.last_updated}};case"FETCH_ONE_MEMBER_FAILURE":return{loading:!1,error:!0};default:return e}},oe=Object(te.c)({detailed:le,members:re}),ie=a(89),ue=a(50),se=m.a.mark(Ee),me=m.a.mark(de);function Ee(){var e;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(ue.a)(_);case 3:return e=t.sent,t.next=6,Object(ue.b)({type:"FETCH_MEMBERS_SUCCESS",payload:e.results[0].members});case 6:t.next=13;break;case 8:return t.prev=8,t.t0=t.catch(0),console.error(t.t0),t.next=13,Object(ue.b)({type:"FETCH_MEMBERS_FAILURE"});case 13:case"end":return t.stop()}}),se,null,[[0,8]])}function de(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ue.c)("FETCH_MEMBERS_REQUEST",Ee);case 2:case"end":return e.stop()}}),me)}var fe=Object(ie.a)(),pe=Object(te.e)(oe,Object(te.a)(fe));fe.run(de);var be=pe;var ve=function(){return r.a.createElement(o.a,{store:be},r.a.createElement("div",{className:"container"},r.a.createElement(Q,null),r.a.createElement("div",{className:"view-container"},r.a.createElement(i.a,null,r.a.createElement(u.a,{path:"/",exact:!0,component:$}),r.a.createElement(u.a,{path:"/id/:id",component:ee}))),r.a.createElement(W,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,t,a){},98:function(e,t,a){e.exports=a(132)}},[[98,1,2]]]);
//# sourceMappingURL=main.480c6522.chunk.js.map