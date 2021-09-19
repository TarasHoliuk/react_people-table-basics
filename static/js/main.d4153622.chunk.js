(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{20:function(e,t,a){e.exports=a(51)},26:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),m=(a(25),a(1)),u=(a(26),function(){return r.a.createElement("h1",null,"Home Page")}),o=a(9),s=function(){return r.a.createElement("nav",{className:"navbar is-fixed-top mb-4 has-background-warning"},r.a.createElement("div",{className:"navbar-start"},r.a.createElement(o.b,{exact:!0,to:"/",className:"navbar-item is-tab",activeClassName:"is-active"},"Home"),r.a.createElement(o.b,{to:"/people",className:"navbar-item is-tab",activeClassName:"is-active"},"People Page")))},i=function(){return r.a.createElement("h1",null,"Not Found Page")},p=a(8),E=a.n(p),h=a(10),f=a(13),b=a(19),d=a.n(b),N=function(){var e=Object(h.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_people-table/api/people.json");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(e){var t=e.people,a=e.selectPerson,n=Object.keys(t[0]).filter((function(e){return"fatherName"!==e&&"motherName"!==e}));return r.a.createElement("table",{className:"table is-striped is-bordered mb-6 myTable"},r.a.createElement("thead",null,r.a.createElement("tr",null,n.map((function(e){return r.a.createElement("th",{key:e},e)})))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",{key:e.name},r.a.createElement("td",null,r.a.createElement("button",{className:"button is-ghost p-0",type:"button",onClick:function(){return a(e)}},e.name)),r.a.createElement("td",null,e.sex),r.a.createElement("td",null,e.born),r.a.createElement("td",null,e.died),r.a.createElement("td",null,e.slug),r.a.createElement("td",null,e.motherName?t.some((function(t){return t.name===e.motherName}))?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"button is-ghost p-0",type:"button",onClick:function(){return a(e.mother)}},e.motherName)):r.a.createElement("p",null,e.motherName):r.a.createElement("p",null,"Unknown")),r.a.createElement("td",null,e.fatherName?t.some((function(t){return t.name===e.fatherName}))?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"button is-ghost p-0",type:"button",onClick:function(){return a(e.father)}},e.fatherName)):r.a.createElement("p",null,e.fatherName):r.a.createElement("p",null,"Unknown")))}))))},g=function(e){var t=e.selectedPerson,a=e.selectPerson,n=e.people;return r.a.createElement("div",null,r.a.createElement("h2",{className:"subtitle"},"Selected Person:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Name: ",t.name),r.a.createElement("li",null,"Sex: ",t.sex),r.a.createElement("li",null,"Born year: ",t.born),r.a.createElement("li",null,"Died year: ",t.died),r.a.createElement("li",null,t.motherName?n.some((function(e){return e.name===t.motherName}))?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"button is-ghost p-0",type:"button",onClick:function(){return a(t.mother)}},"Mother: ".concat(t.motherName))):r.a.createElement("p",null,"Mother: ".concat(t.motherName)):r.a.createElement("p",null,"Unknown")),r.a.createElement("li",null,t.fatherName?n.some((function(e){return e.name===t.fatherName}))?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"button is-ghost p-0",type:"button",onClick:function(){return a(t.father)}},"Father: ".concat(t.fatherName))):r.a.createElement("p",null,"Father: ".concat(t.fatherName)):r.a.createElement("p",null,"Unknown"))))},k=function(){var e=Object(n.useState)(null),t=Object(f.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(null),m=Object(f.a)(c,2),u=m[0],o=m[1],s=function(e){return e.map((function(t){return t.mother=e.find((function(e){return e.name===t.motherName}))||null,t.father=e.find((function(e){return e.name===t.fatherName}))||null,t}))};Object(n.useEffect)((function(){(function(){var e=Object(h.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,l(s(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var i=function(e){o(e)};return r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-container"},a?r.a.createElement(v,{people:a,selectPerson:i}):r.a.createElement(d.a,{type:"Rings",color:"blue"})),r.a.createElement("div",{className:"media-right"},u?r.a.createElement(g,{selectedPerson:u,selectPerson:i,people:a}):r.a.createElement("p",null,"Choose the person")))},y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"People table"),r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",exact:!0},r.a.createElement(u,null)),r.a.createElement(m.b,{path:"/people"},r.a.createElement(k,null)),r.a.createElement(m.a,{to:"/",path:"/home"}),r.a.createElement(i,null))))};c.a.render(r.a.createElement(o.a,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.d4153622.chunk.js.map