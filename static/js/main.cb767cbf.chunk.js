(this["webpackJsonpnew-cases-today-app"]=this["webpackJsonpnew-cases-today-app"]||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);n(9),n(10);var a=n(0),s=(n(12),n(2)),c=n(1);function r(){var t=Object(s.c)((function(t){return t.newCases})),e=Object(s.c)((function(t){return t.lastDate})),n=Object(s.c)((function(t){return t.delta})),r=Object(s.b)();return Object(a.useEffect)((function(){r((function(t){fetch("/courbe.csv").then((function(t){return t.text()})).then((function(e){var n=e.split("\n").map((function(t){return t.split(";")})).filter((function(t){return t[0].length>0})),a=n[n.length-1],s=parseInt(a[1],10)-parseInt(n[n.length-2][1],10);a&&t({type:"FETCH_NEW_CASES",data:{lastDate:a[0],newCases:parseInt(a[1],10),delta:s}})}))}))})),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"lastDate","data-testid":"last-date",children:e}),Object(c.jsxs)("div",{className:"NewCasesToday","data-testid":"new-cases-today",children:["+",t]}),Object(c.jsxs)("div",{className:"delta","data-testid":"delta",children:[n>=0?"+":"-",Math.abs(n)]})]})}var i=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("header",{className:"App-header",children:["New COVID-19 Cases Today",Object(c.jsx)(r,{})]})})},d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),a(t),s(t),c(t),r(t)}))},l=n(3),u=n(7),o=n(8),j={lastDate:(new Date).toISOString().slice(0,10),newCases:0,delta:null};var b=Object(u.b)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_NEW_CASES":return{lastDate:e.data.lastDate,newCases:e.data.newCases,delta:e.data.delta};default:return t}}),Object(u.a)(o.a));Object(l.render)(Object(c.jsx)(s.a,{store:b,children:Object(c.jsx)(i,{})}),document.getElementById("root")),d()},9:function(t,e,n){}},[[21,1,2]]]);
//# sourceMappingURL=main.cb767cbf.chunk.js.map