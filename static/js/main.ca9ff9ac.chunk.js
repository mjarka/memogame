(this.webpackJsonphebe=this.webpackJsonphebe||[]).push([[0],{57:function(e,t,n){},58:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(41),i=n.n(a),r=(n(57),n.p+"static/media/logo.775c198d.svg"),o=n.p+"static/media/hebeLogo.fac89304.png",j=n.p+"static/media/motylek.cf629228.png",l=(n(58),n(88)),p=[["1","prizes/1.png"],["2","prizes/2.png"],["3","prizes/3.png"],["4","prizes/4.png"],["5","prizes/5.png"],["6","prizes/6.png"],["7","prizes/7.png"],["8","prizes/8.png"],["9","prizes/1.png"],["10","prizes/2.png"],["11","prizes/3.png"],["12","prizes/4.png"],["13","prizes/5.png"],["14","prizes/6.png"],["15","prizes/7.png"],["16","prizes/8.png"]],u=n.p+"static/media/top.8298e6a6.png",b=n(86),d=n(85),g=n(46),f=Object(g.a)({palette:{type:"light",primary:{main:"#3f51b5"},secondary:{main:"#f50057"},text:{primary:"rgba(255,255,255,0.87)",secondary:"rgba(255,255,255,0.54)"},background:{default:"#6dd8c7"}}}),O=n(5),h=n(6),m=n(11),x=n(84),v=n(45),y=n.n(v)()((function(e){return{points:0,started:!1,increasePoints:function(){return e((function(e){return{points:e.points+1}}))}}})),z=n(1);function N(){var e=Object(c.useState)([]),t=Object(m.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)([]),i=Object(m.a)(a,2),r=i[0],o=i[1],l=Object(c.useState)([]),u=Object(m.a)(l,2),d=u[0],g=u[1],f=y((function(e){return e.increasePoints})),v=(y((function(e){return e.points})),Object(c.useState)()),N=Object(m.a)(v,2),C=N[0],S=N[1];return console.log(n),Object(c.useEffect)((function(){var e=p;!function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),c=[e[n],e[t]];e[t]=c[0],e[n]=c[1]}}(e),g(e)}),[]),Object(c.useEffect)((function(){n.length>2&&n[0][1]===n[1][1]&&o((function(e){return[].concat(Object(h.a)(e),[n[0],n[1]])})),n.length>2&&s([C])}),[n]),console.log("i found",r),Object(z.jsx)(x.a,{container:!0,children:d.map((function(e){var t;return Object(z.jsx)(x.a,{onClick:function(){S(e),f(),!n.includes(e)&&s((function(t){return[].concat(Object(h.a)(t),[e])}))},item:!0,xs:3,pt:2,className:"flip-card",children:Object(z.jsxs)(b.a,{position:"relative",className:"flip-card-inner",height:"20vw",children:[Object(z.jsx)(b.a,{position:"absolute",ml:"auto",mr:"auto",left:"0",right:"0",className:r.includes(e)?"hop":n.includes(e)?" hop":" hip",children:Object(z.jsx)("div",{className:"coin-front",children:Object(z.jsx)("img",{src:j,className:"motylek",alt:"logo"})})}),Object(z.jsx)(b.a,(t={position:"absolute"},Object(O.a)(t,"position","absolute"),Object(O.a)(t,"ml","auto"),Object(O.a)(t,"mr","auto"),Object(O.a)(t,"left","0"),Object(O.a)(t,"right","0"),Object(O.a)(t,"className",r.includes(e)?"hip":n.includes(e)?" hip":" hop"),Object(O.a)(t,"children",Object(z.jsx)("div",{className:"coin-back ",children:Object(z.jsx)("img",{src:e[1],className:"nagroda",alt:"logo"})})),t))]})},e[0])}))})}var C=n(87);function S(){var e=y((function(e){return e.points})),t=y((function(e){return e.started})),n=Object(c.useState)(0),s=Object(m.a)(n,2),a=s[0],i=s[1];return Object(c.useEffect)((function(){t&&setTimeout((function(){return i(a+1)}),1e3)}),[a,t]),Object(z.jsxs)(b.a,{p:2,display:"flex",justifyContent:"space-between",children:[Object(z.jsxs)(C.a,{variant:"body",children:[" CZAS: ",a]}),Object(z.jsxs)(C.a,{variant:"body",children:[" Ruchy ",e]})]})}var k=n.p+"static/media/groupshot.d1c8859b.png";function w(){return Object(z.jsx)(b.a,{width:"100vw",display:"flex",justifyContent:"center",pt:4,children:Object(z.jsx)("img",{src:k,width:"90%"})})}var F=n(82);function A(){y((function(e){return e.started}));return Object(z.jsx)(b.a,{display:"flex",position:"absolute",justifyContent:"center",bottom:"20px",left:"0",right:"0",children:Object(z.jsx)(F.a,{variant:"contained",onClick:function(){return y.setState({started:!0})},children:"Zagraj"})})}var E=function(){var e=y((function(e){return e.started}));return Object(z.jsxs)(d.a,{theme:f,children:[Object(z.jsx)(l.a,{}),Object(z.jsxs)("div",{className:"App",children:[Object(z.jsx)("img",{src:u,className:"top-decorator",alt:"logo"}),Object(z.jsx)(b.a,{pt:4,children:Object(z.jsxs)("header",{className:"App-header",children:[Object(z.jsx)("img",{src:o,className:"hebe-logo",alt:"logo"}),Object(z.jsx)("img",{src:r,className:"App-logo",alt:"logo"})]})}),e?Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(S,{}),Object(z.jsx)(N,{})]}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(w,{})," ",Object(z.jsx)(A,{})]})]})]})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,89)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(z.jsx)(s.a.StrictMode,{children:Object(z.jsx)(E,{})}),document.getElementById("root")),P()}},[[64,1,2]]]);
//# sourceMappingURL=main.ca9ff9ac.chunk.js.map