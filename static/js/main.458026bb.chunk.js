(this["webpackJsonpnew-cases-today-app"]=this["webpackJsonpnew-cases-today-app"]||[]).push([[0],{10:function(t,e,a){},12:function(t,e,a){},21:function(t,e,a){"use strict";a.r(e);a(9),a(10);var n=a(0),s=(a(12),a(2)),c=a(1);function i(){var t=Object(s.c)((function(t){return t.newCases})),e=Object(s.c)((function(t){return t.lastDate})),a=Object(s.c)((function(t){return t.delta})),i=Object(s.b)();return Object(n.useEffect)((function(){i((function(t){fetch("https://data.newcasestoday.app/city/CA/CA_MTR.csv").then((function(t){return t.text()})).then((function(e){var a=e.split("\n").map((function(t){return t.split(";")})).filter((function(t){return t[0].length>0})),n=a[a.length-1],s=parseInt(n[1],10)-parseInt(a[a.length-2][1],10);n&&t({type:"FETCH_NEW_CASES",data:{lastDate:n[0],newCases:parseInt(n[1],10),delta:s}})}))}))})),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"lastDate","data-testid":"last-date",children:e}),Object(c.jsxs)("div",{className:"NewCasesToday","data-testid":"new-cases-today",children:["+",t]}),Object(c.jsxs)("div",{className:"delta","data-testid":"delta",children:[a>=0?"+":"-",Math.abs(a)]})]})}var r=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("header",{className:"App-header",children:["New COVID-19 Cases Today",Object(c.jsx)(i,{})]})})},d=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,c=e.getLCP,i=e.getTTFB;a(t),n(t),s(t),c(t),i(t)}))},l=a(3),u=a(7),o=a(8),j={lastDate:(new Date).toISOString().slice(0,10),newCases:0,delta:null};var h=Object(u.b)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_NEW_CASES":return{lastDate:e.data.lastDate,newCases:e.data.newCases,delta:e.data.delta};default:return t}}),Object(u.a)(o.a));Object(l.render)(Object(c.jsx)(s.a,{store:h,children:Object(c.jsx)(r,{})}),document.getElementById("root")),d()},9:function(t,e,a){}},[[21,1,2]]]);
//# sourceMappingURL=main.458026bb.chunk.js.map