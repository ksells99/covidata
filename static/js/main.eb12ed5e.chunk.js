(this["webpackJsonpcovid-stats"]=this["webpackJsonpcovid-stats"]||[]).push([[0],{192:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(1),r=a.n(c),n=a(68),l=a.n(n),i=a(5),o=(a(75),a(3)),d=function(){return Object(s.jsxs)("div",{className:"mt-10 mb-5 text-center",children:[Object(s.jsxs)("p",{className:"text-sm font-semibold",children:["Developed by"," ",Object(s.jsx)("a",{href:"https://www.kai-sells.co.uk",target:"_blank",rel:"noreferrer",className:"hover:text-charcoal font-bold",children:"Kai Sells"}),", with data fetched from the"," ",Object(s.jsx)("a",{href:"https://coronavirus.data.gov.uk/details/developers-guide",target:"_blank",rel:"noreferrer",className:"hover:text-charcoal font-bold",children:"GOV.UK Covid-19 API"})," "]}),Object(s.jsxs)("button",{className:"mt-5 bg-charcoal text-gray-100 px-5 py-2 rounded text-sm font-semibold hover:bg-gray-600",children:[Object(s.jsx)("i",{className:"fab fa-github mr-2"}),Object(s.jsx)("a",{href:"https://github.com/ksells99/covidata",target:"_blank",rel:"noreferrer",children:"View GitHub Repo"})]})]})},b=function(){return Object(s.jsxs)("div",{className:"bg-charcoal p-4 text-center font-source-sans text-gray-50",children:[Object(s.jsx)(i.b,{to:"/",children:Object(s.jsxs)("h3",{className:"text-3xl font-normal",children:[Object(s.jsx)("span",{className:"font-semibold",children:"covid"}),"ata"," ",Object(s.jsx)("i",{className:"fas fa-viruses"})]})}),Object(s.jsxs)("p",{className:"text-sm font-light mt-1",children:["stay at home ",">"," protect the NHS ",">"," save lives"]})]})},h=a(6),j=a.n(h),u=a(11),x=a(2),m=a(12),p=a.n(m),f=a(13),O=a.n(f),v=a(14),y=a.n(v),g=function(e){var t=e.type,a=e.color,r=e.newTitle,n=e.totalTitle,l=Object(c.useState)(0),o=Object(x.a)(l,2),d=o[0],b=o[1],h=Object(c.useState)(0),m=Object(x.a)(h,2),f=m[0],v=m[1],g=Object(c.useState)("01/01/1970"),w=Object(x.a)(g,2),N=w[0],D=w[1],B=Object(c.useState)(!1),k=Object(x.a)(B,2),C=k[0],P=k[1],S=Object(c.useState)(null),Y=Object(x.a)(S,2),E=Y[0],M=Y[1],T=function(){var e=Object(u.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,M(null),e.next=4,p.a.get('https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=overview&latestBy=date&structure={"date":"date", "newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate"}');case 4:t=e.sent,a=t.data.data,b(a[0].newCasesByPublishDate),v(a[0].cumCasesByPublishDate),D(a[0].date),P(!1),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),P(!1),console.error(e.t0),M("Error fetching data. Reload to try again.");case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(null),e.prev=1,e.next=4,p.a.get('https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=overview&latestBy=date&structure={"date":"date","newDeaths28DaysByPublishDate":"newDeaths28DaysByPublishDate","cumDeaths28DaysByPublishDate":"cumDeaths28DaysByPublishDate" }');case 4:t=e.sent,a=t.data.data,b(a[0].newDeaths28DaysByPublishDate),v(a[0].cumDeaths28DaysByPublishDate),D(a[0].date),P(!1),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(1),P(!1),console.error(e.t0),M("Error fetching data. Reload to try again.");case 17:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){P(!0),"cases"===t?T():I()}),[t]),Object(s.jsx)("div",{className:"w-full md:w-5/12   mb-5 md:mb-0 text-left font-semibold  rounded-md overflow-hidden bg-".concat(a," hover:bg-").concat(a,"Hover transform hover:scale-102 ease-in-out duration-200"),children:Object(s.jsx)(i.b,{to:"uk/".concat(t),children:Object(s.jsxs)("div",{className:"flex flex-col justify-between h-full p-5",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{className:"text-md mb-1",children:r}),Object(s.jsx)("h2",{className:"text-2xl mb-3 font-bold",children:C?"-":E?Object(s.jsx)("p",{className:"text-sm font-light italic",children:E}):y()(d).format("0,0")})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{className:"text-md mb-1 text-right",children:n}),Object(s.jsx)("h2",{className:"text-2xl text-right font-bold",children:C?"-":E?Object(s.jsx)("p",{className:"text-sm font-light italic",children:E}):y()(f).format("0,0")})]}),Object(s.jsx)("p",{className:"text-xs italic mt-3 ",children:"Last updated ".concat(O()(N).format("DD/MM/YYYY"))})]})})})},w=a.p+"static/media/loader.8981e9a5.gif",N=function(e){var t=e.type;return Object(s.jsxs)(c.Fragment,{children:[Object(s.jsx)("img",{src:w,alt:"Loading...",style:{width:"100px",margin:"auto",display:"block"}}),Object(s.jsx)("p",{className:"text-sm font-semibold text-center mt-3",children:"Fetching ".concat(t," data")})]})},D=function(){var e=Object(c.useState)([]),t=Object(x.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(null),l=Object(x.a)(n,2),o=l[0],d=l[1],b=Object(c.useState)(!1),h=Object(x.a)(b,2),m=h[0],f=h[1],O=Object(c.useState)(""),v=Object(x.a)(O,2),y=v[0],g=v[1],w=function(){var e=Object(u.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),d(null),e.prev=2,e.next=5,p.a.get('https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=utla&latestBy=date&structure={"date":"date","newCases":"newCasesByPublishDate","newDeaths":"newDeaths28DaysByPublishDate","region":"areaName","regionId":"areaCode"}');case 5:t=e.sent,a=t.data.data,f(!1),r(a),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(2),f(!1),console.error(e.t0),d("Error fetching data. Reload to try again.");case 16:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){w()}),[]),m?Object(s.jsx)(N,{type:"regional"}):o?Object(s.jsx)("p",{className:"text-md font-light italic",children:o}):Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"mb-5",children:[Object(s.jsx)("span",{className:"z-10  leading-snug font-normal  text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3",children:Object(s.jsx)("i",{className:"fas fa-search"})}),Object(s.jsxs)("div",{className:"flex",children:[Object(s.jsx)("input",{type:"text",placeholder:"Search regions",value:y||"",onChange:function(e){return g(e.target.value)},className:"px-3 py-3 placeholder-gray-400 text-gray-700 relative  bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"}),Object(s.jsx)("button",{className:"bg-charcoal hover:bg-gray-800 ease-in-out duration-200 ml-1 w-10 rounded",onClick:function(e){return g("")},children:Object(s.jsx)("i",{className:"fas fa-undo text-gray-50"})})]})]}),Object(s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 md:gap-x-12 md:gap-y-4 mb-5",children:m?null:a.filter((function(e){return e.region.toLowerCase().includes(y.toLowerCase())})).map((function(e){return Object(s.jsx)(i.b,{to:"region/".concat(e.regionId),children:Object(s.jsx)("div",{className:"w-full  p-5 mb-5 md:mb-0 text-left font-semibold  rounded-md bg-pacific hover:bg-pacificHover ease-in-out duration-100 text-gray-50",children:Object(s.jsxs)("div",{className:"flex flex-col",children:[Object(s.jsx)("p",{className:"text-md font-normal",children:e.region}),Object(s.jsx)("p",{className:"text-xl",children:"".concat(null==e.newCases?"0":e.newCases," new cases")}),Object(s.jsx)("p",{className:"text-xl",children:"".concat(null==e.newDeaths?"0":e.newDeaths," new deaths")})]})})},e.regionId)}))})]})},B=function(){return Object(s.jsxs)("div",{className:"mx-auto font-source-sans bg-lavender2",children:[Object(s.jsx)("section",{id:"uk-data",className:"bg-lavender1",children:Object(s.jsxs)("div",{className:"px-10 pb-10  mx-auto",style:{maxWidth:"1000px"},children:[Object(s.jsx)("h1",{className:"pt-5 mb-5 text-2xl",children:"United Kingdom summary"}),Object(s.jsxs)("div",{className:"flex-none md:flex justify-between w-full",children:[Object(s.jsx)(g,{type:"cases",newTitle:"New cases over 24 hour period",totalTitle:"Total cases",color:"honey"}),Object(s.jsx)(g,{type:"deaths",newTitle:"New deaths within 28 days of a positive test",totalTitle:"Total deaths",color:"goldenrod"})]})]})}),Object(s.jsx)("section",{id:"regional-data",className:"bg-lavender2",children:Object(s.jsxs)("div",{className:"px-10  mx-auto",style:{maxWidth:"1000px"},children:[Object(s.jsx)("h1",{className:"pt-5 mb-5 text-2xl",children:"Regional data (past 24 hours)"}),Object(s.jsx)(D,{})]})})]})},k=a(18),C=function(e){var t=e.match,a=Object(c.useState)(!1),r=Object(x.a)(a,2),n=r[0],l=r[1],o=Object(c.useState)(null),d=Object(x.a)(o,2),b=d[0],h=d[1],m=Object(c.useState)({}),f=Object(x.a)(m,2),v=f[0],g=f[1],w=Object(c.useState)({}),D=Object(x.a)(w,2),B=D[0],C=D[1],P=Object(c.useState)([]),S=Object(x.a)(P,2),Y=S[0],E=S[1],M=Object(c.useState)(""),T=Object(x.a)(M,2),I=T[0],A=T[1],R=t.params.id,K=function(){var e=Object(u.a)(j.a.mark((function e(){var t,a,s,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),h(null),e.prev=2,t=[],a=[],s=[],e.next=8,p.a.get("https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=utla;areaCode=".concat(R,'&structure={"date":"date","newCasesByPublishDate":"newCasesByPublishDate","newDeaths28DaysByPublishDate":"newDeaths28DaysByPublishDate","region":"areaName","regionId":"areaCode"}'));case 8:c=e.sent,(r=c.data.data)?(A(r[0].region),E(r.slice(0,90)),r.slice(0,90).reverse().forEach((function(e){t.push(O()(e.date).format("DD/MM/YYYY")),a.push(e.newCasesByPublishDate),s.push(e.newDeaths28DaysByPublishDate)})),g({labels:t,datasets:[{label:"New cases over 24 hour period",data:a,backgroundColor:"#00A9C0"}]}),C({labels:t,datasets:[{label:"New deaths within 28 days of a positive test",data:s,backgroundColor:"#D67B49"}]}),l(!1)):(l(!1),h("Error fetching data for region. Reload to try again.")),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(2),l(!1),console.error(e.t0),h("Error fetching data for region. Reload to try again.");case 18:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){K()}),[]),Object(s.jsxs)("div",{className:"px-2 sm:px-10 text-center md:text-left mx-auto",style:{maxWidth:"1000px"},children:[Object(s.jsx)("div",{className:"flex  justify-between mt-3",children:Object(s.jsxs)(i.b,{to:"/",className:" bg-lavender1 font-semibold text-lg px-3 py-1 rounded",children:[Object(s.jsx)("i",{class:"fas fa-arrow-alt-circle-left"})," Dashboard"]})}),Object(s.jsxs)("h1",{className:"pt-5  text-xl sm:text-2xl",children:["Regional data (past 90 days)"," "]}),n?Object(s.jsx)(N,{type:"regional"}):b?Object(s.jsx)("p",{className:"mt-5 text-md font-light italic",children:b}):Object(s.jsxs)("div",{children:[Object(s.jsxs)("h1",{className:"pt-5 mb-5 text-xl sm:text-xl font-semibold italic",children:["".concat(I)," "]}),Object(s.jsxs)("section",{id:"cases",className:"mb-10",children:[Object(s.jsx)("h2",{className:"text-lg underline ",children:"Cases"}),Object(s.jsx)("div",{className:"chart",children:Object(s.jsx)(k.Bar,{data:v,options:{scales:{yAxes:[{ticks:{beginAtZero:!0,stepSize:1e3}}]}}})}),Object(s.jsx)("p",{className:"bg-lavender1 rounded p-3 text-center text-sm sm:text-base mt-5",children:"Number of people with at least one positive COVID-19 test result (either lab-reported or lateral flow device), by specimen date. Individuals tested positive more than once are only counted once, on the date of their first positive test."})]}),Object(s.jsxs)("section",{id:"deaths",className:" mb-10",children:[Object(s.jsx)("h2",{className:"text-lg underline mt-8 ",children:"Deaths"}),Object(s.jsx)("div",{className:"chart",children:Object(s.jsx)(k.Bar,{data:B,options:{scales:{yAxes:[{ticks:{beginAtZero:!0,stepSize:50}}]}}})}),Object(s.jsx)("p",{className:"bg-lavender1 rounded p-3 text-center text-sm sm:text-base mt-5",children:"Number of deaths of people who had had a positive test result for COVID-19 and died within 28 days of the first positive test."})]}),Object(s.jsx)("section",{id:"table",children:Object(s.jsxs)("div",{id:"table-wrapper",className:"mt-10 mb-5",children:[Object(s.jsx)("h2",{className:"text-lg underline mt-8 mb-4 ",children:"Daily summary"}),Object(s.jsxs)("table",{class:"table-fixed rounded w-full shadow-sm text-center md:text-left ",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{className:"bg-charcoal rounded-tl text-gray-50  px-8 py-3 w-1/2",children:"Date"}),Object(s.jsx)("th",{className:"bg-charcoal  text-gray-50  px-8 py-3 w-1/2",children:"Cases"}),Object(s.jsx)("th",{className:"bg-charcoal rounded-tr text-gray-50  px-8 py-3 w-1/2",children:"Deaths"})]})}),Object(s.jsx)("tbody",{children:Y.map((function(e){return Object(s.jsxs)("tr",{className:"even:bg-lavender1 odd:bg-lavender2 border-b border-lavender2",children:[Object(s.jsx)("td",{className:" px-8 py-2",children:O()(e.date).format("DD/MM/YYYY")}),Object(s.jsx)("td",{className:" px-8 py-2",children:y()(e.newCasesByPublishDate).format("0,0")}),Object(s.jsx)("td",{className:" px-8 py-2",children:y()(e.newDeaths28DaysByPublishDate).format("0,0")})]},e.date)}))})]})]})})]})]})},P=function(){var e=Object(c.useState)(!1),t=Object(x.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(null),l=Object(x.a)(n,2),o=l[0],d=l[1],b=Object(c.useState)({}),h=Object(x.a)(b,2),m=h[0],f=h[1],v=Object(c.useState)([]),g=Object(x.a)(v,2),w=g[0],D=g[1],B=function(){var e=Object(u.a)(j.a.mark((function e(){var t,a,s,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),d(null),e.prev=2,t=[],a=[],e.next=7,p.a.get('https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=overview&structure={"date":"date", "newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate"}');case 7:s=e.sent,c=s.data.data,D(c.slice(0,90)),c.slice(0,90).reverse().forEach((function(e){t.push(O()(e.date).format("DD/MM/YYYY")),a.push(e.newCasesByPublishDate)})),f({labels:t,datasets:[{label:"New cases over 24 hour period",data:a,backgroundColor:"#00A9C0"}]}),r(!1),e.next=21;break;case 16:e.prev=16,e.t0=e.catch(2),r(!1),console.error(e.t0),d("Error fetching data. Reload to try again.");case 21:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){B()}),[]),Object(s.jsxs)("div",{className:"px-2 sm:px-10 text-center md:text-left mx-auto",style:{maxWidth:"1000px"},children:[Object(s.jsxs)("div",{className:"flex  justify-between mt-3",children:[Object(s.jsxs)(i.b,{to:"/",className:" bg-lavender1 hover:bg-gray-400 ease-in-out duration-100 font-semibold text-lg px-3 py-1 rounded",children:[Object(s.jsx)("i",{class:"fas fa-arrow-alt-circle-left"})," Dashboard"]}),Object(s.jsxs)(i.b,{to:"/uk/deaths",className:"  bg-goldenrod hover:bg-goldenrodHover ease-in-out duration-100 font-semibold text-lg px-3 py-1 rounded",children:["UK Deaths ",Object(s.jsx)("i",{class:"fas fa-arrow-alt-circle-right"})]})]}),Object(s.jsxs)("h1",{className:"pt-5 mb-5 text-xl sm:text-2xl",children:["UK cases (past 90 days)"," "]}),a?Object(s.jsx)(N,{type:"case"}):o?Object(s.jsx)("p",{className:"text-md font-light italic",children:o}):Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"chart",children:Object(s.jsx)(k.Bar,{data:m,options:{scales:{yAxes:[{ticks:{beginAtZero:!0,stepSize:2e4}}]}}})}),Object(s.jsx)("p",{className:"bg-lavender1 rounded p-3 text-center text-sm sm:text-base mt-5",children:"Number of people with at least one positive COVID-19 test result (either lab-reported or lateral flow device), by specimen date. Individuals tested positive more than once are only counted once, on the date of their first positive test."}),Object(s.jsx)("div",{id:"table-wrapper",className:"my-5",children:Object(s.jsxs)("table",{class:"table-fixed rounded w-full shadow-sm text-center md:text-left ",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{className:"bg-charcoal rounded-tl text-gray-50  px-8 py-3 w-1/2",children:"Date"}),Object(s.jsx)("th",{className:"bg-charcoal rounded-tr text-gray-50  px-8 py-3 w-1/2",children:"Cases"})]})}),Object(s.jsx)("tbody",{children:w.map((function(e){return Object(s.jsxs)("tr",{className:"even:bg-lavender1 odd:bg-lavender2 border-b border-lavender2",children:[Object(s.jsx)("td",{className:" px-8 py-2",children:O()(e.date).format("DD/MM/YYYY")}),Object(s.jsx)("td",{className:" px-8 py-2",children:y()(e.newCasesByPublishDate).format("0,0")})]})}))})]})})]})]})},S=function(){var e=Object(c.useState)(!1),t=Object(x.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(null),l=Object(x.a)(n,2),o=l[0],d=l[1],b=Object(c.useState)({}),h=Object(x.a)(b,2),m=h[0],f=h[1],v=Object(c.useState)([]),g=Object(x.a)(v,2),w=g[0],D=g[1],B=function(){var e=Object(u.a)(j.a.mark((function e(){var t,a,s,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),d(null),e.prev=2,t=[],a=[],e.next=7,p.a.get('https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=overview&structure={"date":"date", "newDeaths28DaysByPublishDate":"newDeaths28DaysByPublishDate","cumDeaths28DaysByPublishDate":"cumDeaths28DaysByPublishDate"}');case 7:s=e.sent,c=s.data.data,D(c.slice(0,90)),c.slice(0,90).reverse().forEach((function(e){t.push(O()(e.date).format("DD/MM/YYYY")),a.push(e.newDeaths28DaysByPublishDate)})),f({labels:t,datasets:[{label:"New deaths within 28 days of a positive test",data:a,backgroundColor:"#D67B49"}]}),r(!1),e.next=21;break;case 16:e.prev=16,e.t0=e.catch(2),r(!1),console.error(e.t0),d("Error fetching data. Reload to try again.");case 21:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){B()}),[]),Object(s.jsxs)("div",{className:"px-2 sm:px-10 text-center md:text-left mx-auto",style:{maxWidth:"1000px"},children:[Object(s.jsxs)("div",{className:"flex  justify-between mt-3",children:[Object(s.jsxs)(i.b,{to:"/",className:" bg-lavender1 hover:bg-gray-400 ease-in-out duration-100 font-semibold text-lg px-3 py-1 rounded",children:[Object(s.jsx)("i",{class:"fas fa-arrow-alt-circle-left"})," Dashboard"]}),Object(s.jsxs)(i.b,{to:"/uk/cases",className:"  bg-pacific hover:bg-pacificHover ease-in-out duration-100 font-semibold text-lg px-3 py-1 rounded text-gray-50",children:["UK Cases ",Object(s.jsx)("i",{class:"fas fa-arrow-alt-circle-right"})]})]}),Object(s.jsxs)("h1",{className:"pt-5 mb-5 text-xl sm:text-2xl",children:["UK deaths (past 90 days)"," "]}),a?Object(s.jsx)(N,{type:"death"}):o?Object(s.jsx)("p",{className:"text-md font-light italic",children:o}):Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"chart",children:Object(s.jsx)(k.Bar,{data:m,options:{scales:{yAxes:[{ticks:{beginAtZero:!0,stepSize:500}}]}}})}),Object(s.jsx)("p",{className:"bg-lavender1 rounded p-3 text-center text-sm sm:text-base mt-5",children:"Number of deaths of people who had had a positive test result for COVID-19 and died within 28 days of the first positive test."}),Object(s.jsx)("div",{id:"table-wrapper",className:"my-5",children:Object(s.jsxs)("table",{class:"table-fixed rounded w-full shadow-sm text-center md:text-left ",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{className:"bg-charcoal rounded-tl text-gray-50  px-8 py-3 w-1/2",children:"Date"}),Object(s.jsx)("th",{className:"bg-charcoal rounded-tr text-gray-50  px-8 py-3 w-1/2",children:"Deaths"})]})}),Object(s.jsx)("tbody",{children:w.map((function(e){return Object(s.jsxs)("tr",{className:"even:bg-lavender1 odd:bg-lavender2 border-b border-lavender2",children:[Object(s.jsx)("td",{className:" px-8 py-2",children:O()(e.date).format("DD/MM/YYYY")}),Object(s.jsx)("td",{className:" px-8 py-2",children:y()(e.newDeaths28DaysByPublishDate).format("0,0")})]})}))})]})})]})]})};var Y=function(){return Object(s.jsxs)("div",{className:"font-source-sans",children:[Object(s.jsx)(b,{}),Object(s.jsxs)(o.d,{children:[Object(s.jsx)(o.b,{path:"/",component:B,exact:!0}),Object(s.jsx)(o.b,{path:"/uk/cases",component:P,exact:!0}),Object(s.jsx)(o.b,{path:"/uk/deaths",component:S,exact:!0}),Object(s.jsx)(o.b,{path:"/region/:id",component:C}),Object(s.jsx)(o.b,{render:function(){return Object(s.jsx)(o.a,{to:"/"})}})]}),Object(s.jsx)(d,{})]})};l.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(i.a,{children:Object(s.jsx)(Y,{})})}),document.getElementById("root"))},75:function(e,t,a){}},[[192,1,2]]]);
//# sourceMappingURL=main.eb12ed5e.chunk.js.map