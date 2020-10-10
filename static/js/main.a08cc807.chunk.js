(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),s=a.n(r),o=(a(12),a(2)),i=a.n(o),l=a(3),u=a(1),m=a(6),p=a.n(m),f=(a(18),a(19),function(e){var t=Object(n.useState)(),a=Object(u.a)(t,2),r=a[0],s=a[1],o=Object(n.useState)({clouds:"https://www.flaticon.com/svg/static/icons/svg/3571/3571294.svg",rain:"https://www.flaticon.com/svg/static/icons/svg/3313/3313996.svg",sun:"https://www.flaticon.com/svg/static/icons/svg/979/979585.svg",wind:"https://www.flaticon.com/svg/static/icons/svg/777/777597.svg",snow:"https://www.flaticon.com/svg/static/icons/svg/777/777629.svg",clear:"https://www.flaticon.com/svg/static/icons/svg/979/979585.svg",thunderstorm:"https://www.flaticon.com/svg/static/icons/svg/3026/3026371.svg"}),i=Object(u.a)(o,2),l=i[0];i[1];if(Object(n.useEffect)((function(){s("metric"===e.unit?"\xb0C":"\xb0F")}),[e.unit]),e.weather){var m=e.weather,p=m.main,f=m.time,d=m.dayNum,h=m.year,y=m.day,v=m.month,g=m.temp,E=m.feel,w=m.description,b=e.loading;return c.a.createElement("div",{className:"today-container"},b?c.a.createElement("p",null,"loading ..."):c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",{style:{opacity:"0.6",color:" #6FCF97"}},"Today"),c.a.createElement("p",{className:"today-day"},y," | ",v," ",d,", ",h," | ",f),c.a.createElement("hr",null),c.a.createElement("p",{className:"today-description"},w," \xa0"," ",c.a.createElement("img",{className:"svg",src:p?l[p.toLowerCase()]:null,alt:""})),c.a.createElement("p",{className:"today-temp"},"Temp: ",g," ",r),c.a.createElement("p",{className:"today-feel"},"Feels Like: ",E," ",r," ")))}if(e.stats){var N=e.stats,j=N.humidity,O=N.pressure,S=N.sunrise,x=N.sunset;return c.a.createElement("div",{className:"today-container"},c.a.createElement("h3",{style:{opacity:"0.6",color:" #6FCF97"}},"Stats"),c.a.createElement("hr",null),c.a.createElement("p",null,"Humidity: ",j,"%"),c.a.createElement("p",null,"Pressure: ",O," hPa"),c.a.createElement("p",null,"Sunrise:"," ",S?S.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):null),c.a.createElement("p",null,"Sunset:"," ",x?x.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):null))}return null}),d=(a(20),function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{className:"header"},c.a.createElement("span",{className:"header-location"},e.country?c.a.createElement("span",null,e.country):null,e.city?c.a.createElement("span",null,", ",e.city):null),c.a.createElement("span",{style:{width:"33%"}},"Weather"),c.a.createElement("div",{className:"search-form"},c.a.createElement("form",{onSubmit:e.getLatLong},c.a.createElement("input",{ref:e.search,className:"search",placeholder:"Location...",type:"text"}),c.a.createElement("button",{className:"submit",type:"submit"},c.a.createElement("span",{className:"material-icons"},"search"))))))}),h=(a(21),function(e){var t=Object(n.useState)(),a=Object(u.a)(t,2),r=a[0],s=a[1];return Object(n.useEffect)((function(){s("metric"===e.unit?"\xb0C":"\xb0F")}),[e.unit]),e.forecast?c.a.createElement("div",{className:"forecast-container"},c.a.createElement("h3",{className:"title",style:{opacity:"0.6",color:" #6FCF97"}},"Forecast"),c.a.createElement("hr",null),c.a.createElement("div",{className:"forecast-days-container"},e.forecast.map((function(e,t){return 0===t?null:c.a.createElement("div",{className:"day-container",key:"forecast"+t},c.a.createElement("p",{className:"forecast-day"},new Date(1e3*e.dt).toString().split(" ")[0],", \xa0",new Date(1e3*e.dt).toLocaleDateString()),c.a.createElement("p",{className:"forecast-temp"}," ","Max: ",e.temp.max," ",r),c.a.createElement("p",{className:"forecast-temp"},"Min: ",e.temp.min," ",r),c.a.createElement("p",null,"Chance of Rain: ",e.rain,"%"))})))):c.a.createElement("div",{className:"forecast-container"}," Loading...")}),y="10c8f176788f475ca28e8e9d145f320b";!function(){var e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],t=["January","February","March","April","May","June","July","August","September","October","November","December"];Date.prototype.getMonthName=function(){return t[this.getMonth()]},Date.prototype.getDayName=function(){return e[this.getDay()]}}();var v=function(){var e=Object(n.useState)({humidty:0}),t=Object(u.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(),o=Object(u.a)(s,2),m=o[0],v=o[1],g=Object(n.useState)("metric"),E=Object(u.a)(g,2),w=E[0],b=E[1],N=Object(n.useState)(!0),j=Object(u.a)(N,2),O=j[0],S=j[1],x=Object(n.useState)({temp:0,feel:0,description:""}),k=Object(u.a)(x,2),F=k[0],L=k[1],C=Object(n.useState)(),D=Object(u.a)(C,2),T=D[0],M=D[1];function A(){return(A=Object(l.a)(i.a.mark((function e(t){var a,n,c,r,s,o,l,u,m,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,a=W.current.value,W.current.value="",e.next=6,fetch("https://api.opencagedata.com/geocode/v1/json?q=".concat(a,"&key=").concat(y));case 6:return n=e.sent,e.next=9,n.json();case 9:c=e.sent,r=c.results[0].components.city,s=c.results[0].components.country,o=c.results[0].components.state,"United States of America"===s&&(s="USA"),r&&o&&s?s=o:!r&&o?r=o:o||s||(s=c.results[0].components.continent),l=c.results[0].bounds.northeast,u=l.lat,m=l.lng,p=m,S(!0),J(u,p,r,s),e.next=25;break;case 21:e.prev=21,e.t0=e.catch(1),q.current.classList.add("show"),setTimeout((function(){q.current.classList.remove("show")}),2e3);case 25:case"end":return e.stop()}}),e,null,[[1,21]])})))).apply(this,arguments)}function J(e,t){return U.apply(this,arguments)}function U(){return(U=Object(l.a)(i.a.mark((function e(t,a){var n,c,r,s=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>2&&void 0!==s[2]?s[2]:"",c=s.length>3&&void 0!==s[3]?s[3]:"",e.prev=2,e.next=5,fetch("https://api.opencagedata.com/geocode/v1/json?q=".concat(t,"+").concat(a,"&key=").concat(y)).then((function(e){return e.json()}));case 5:r=e.sent,c||(n=r.results[0].components.city,c=r.results[0].components.country),M({lat:t,long:a,city:n,country:c}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),q.current.classList.add("show"),setTimeout((function(){q.current.classList.remove("show")}),2e3);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}function P(){return I.apply(this,arguments)}function I(){return(I=Object(l.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:t=e.sent,a=t.coords.latitude,n=t.coords.longitude,J(a,n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){return new Promise((function(e,t){navigator.geolocation.getCurrentPosition(e,t)}))}Object(n.useEffect)((function(){P()}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var t,a,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=T.lat,a=T.long,e.next=3,fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t,"&lon=").concat(a,"&exclude=minutely&appid=").concat("b3799facfb7756da884708a0ebd939aa","&units=").concat(w));case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}T&&(function(){return e.apply(this,arguments)}().then((function(e){var t=new Date(1e3*e.current.dt);L({temp:e.current.temp,feel:e.current.feels_like,description:e.current.weather[0].description,main:e.current.weather[0].main,day:t.getDayName(),month:t.getMonthName(),dayNum:t.getUTCDate(),year:t.getUTCFullYear(),time:t.toLocaleTimeString("en-US")}),r({humidity:e.current.humidity,pressure:e.current.pressure,sunrise:new Date(1e3*e.current.sunrise),sunset:new Date(1e3*e.current.sunset)}),v(e.daily)})),S(!1))}),[T,w]);var q=Object(n.useRef)(),W=Object(n.useRef)();return c.a.createElement("div",{className:"App"},c.a.createElement(d,{search:W,getLatLong:function(e){return A.apply(this,arguments)},city:T?T.city:null,country:T?T.country:null}),c.a.createElement("div",{ref:q,className:"error-container"},c.a.createElement("span",{className:"error"},"Location Not Found")),c.a.createElement("div",{className:"button-container"},c.a.createElement(p.a,{className:"switch",boxShadow:"3px 3px 5px #c8c8c8",offColor:"#f2f2f2",onColor:"#f2f2f2",uncheckedIcon:c.a.createElement("span",{className:"switch-icon"},"\xb0F"),checkedIcon:c.a.createElement("span",{className:"switch-icon"},"\xb0C"),onChange:function(){return b("metric"===w?"imperial":"metric")},checked:"metric"===w}),c.a.createElement("button",{className:"here",onClick:P},c.a.createElement("span",{className:"material-icons"},"location_on"))),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"container1"},c.a.createElement(f,{unit:w,weather:F,loading:O}),c.a.createElement(f,{stats:a})),c.a.createElement("div",{className:"container2"},c.a.createElement(h,{forecast:m,unit:w}))))};s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.a08cc807.chunk.js.map