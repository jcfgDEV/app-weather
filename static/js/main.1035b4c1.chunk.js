(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),s=a(16),r=a.n(s),i=a(7),o=a.n(i),d=a(17),l=a(3),m=a(18),j=a.n(m),u=new Date,h=new Intl.DateTimeFormat("pt",{year:"numeric"}).format(u),b=new Intl.DateTimeFormat("pt",{month:"long"}).format(u),O=new Intl.DateTimeFormat("pt",{day:"2-digit"}).format(u),v=u.toLocaleDateString(void 0,{weekday:"long"}),p="".concat(v," ").concat(b," ").concat(O," ").concat(h),x=a(0);var w=function(){var e=(new Date).toLocaleTimeString([],{timeStyle:"short"}),t=Object(c.useState)(e),a=Object(l.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)({}),i=Object(l.a)(r,2),m=i[0],u=i[1],h=Object(c.useState)(),b=Object(l.a)(h,2),O=b[0],v=b[1],w=Object(c.useState)(),f=Object(l.a)(w,2),g=f[0],N=f[1],y=function(e){v(e.coords.latitude),N(e.coords.longitude)},D=function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.navigator.geolocation.getCurrentPosition(y);case 3:return e.next=5,j.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(O,"&lon=").concat(g,"&units=metric&appid=4fa2c1fc6a9f64d41db2493b7be62565"));case 5:t=e.sent,u(t.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){D()}),[O,g]),setInterval((function(){var e=(new Date).toLocaleTimeString([],{timeStyle:"short"});s(e)}),1e3);var S=(new Date).getHours();return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"center",children:"undefined"!=typeof m.main?Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:S<19?"weather warm":"weather",children:[Object(x.jsx)("div",{className:"Greeting",children:S<12?"Bom Dia":S<19?"Boa Tardes":"Boa Noite"}),Object(x.jsx)("div",{className:"Date",children:p}),Object(x.jsxs)("div",{className:"Hour",children:[n,"  "]}),Object(x.jsxs)("div",{className:"Datas",children:[Object(x.jsxs)("div",{className:"Center-Data",children:[Object(x.jsx)("div",{className:"City",children:m.name}),Object(x.jsxs)("div",{className:"Grades",children:[JSON.parse(m.main.temp).toFixed(0),"\xb0C"]})]}),Object(x.jsx)("div",{className:"Other",children:Object(x.jsxs)("div",{className:"Box",children:[Object(x.jsxs)("div",{className:"Wind",children:["Wind: ",m.wind.speed,"Km/h "]}),Object(x.jsxs)("div",{className:"Pressure",children:["Pressure: ",m.main.pressure]}),Object(x.jsxs)("div",{className:"Humidity",children:["Humidity: ",m.main.humidity,"% "]})]})})]})]})}):""})})};a(43);r.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(w,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.1035b4c1.chunk.js.map