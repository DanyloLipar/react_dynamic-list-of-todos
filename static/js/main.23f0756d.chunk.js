(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(7),s=n.n(c),r=n(2),i=n(1),o=(n(12),n(13),n(5)),a=n(3),u=n.n(a),d=function(){var e=Object(o.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://mate.academy/students-api").concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function l(e){return new Promise((function(t){return setTimeout(t,e)}))}var j=function(){var e=Object(o.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(1e3);case 2:return e.abrupt("return",d("/users/".concat(t)));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=n(6),h=n.n(b),p=(n(15),n(0)),O=function(e){var t=e.todos,n=e.selectedUser,c=e.selectedUserId;return Object(p.jsxs)("div",{className:"TodoList",children:[Object(p.jsx)("h2",{children:"Todos:"}),Object(p.jsx)("div",{className:"TodoList__list-container",children:Object(p.jsx)("ul",{className:"TodoList__list",children:t.map((function(e){return Object(p.jsxs)("li",{className:h()({TodoList__item:!0,"TodoList__item--unchecked":!e.completed,"TodoList__item--checked":e.completed}),children:[Object(p.jsxs)("label",{htmlFor:"".concat(e.id),children:[Object(p.jsx)("input",{checked:e.completed,id:"".concat(e.id),type:"checkbox",readOnly:!0}),Object(p.jsx)("p",{children:e.title})]}),Object(p.jsxs)("button",{className:h()("TodoList__user-button",{"TodoList__user-button--selected":c===e.userId},"button"),type:"button",onClick:function(){return n(e.userId)},children:["User\xa0",e.userId]})]},e.id)}))})})]})},m=(n(17),function(e){var t=e.userId,n=Object(i.useState)(null),c=Object(r.a)(n,2),s=c[0],o=c[1],a=Object(i.useState)(!1),u=Object(r.a)(a,2),d=u[0],l=u[1];return Object(i.useEffect)((function(){l(!1),j(t).then((function(e){return o(e)})).then((function(){return l(!0)}))}),[t]),Object(p.jsx)("div",{children:d?Object(p.jsxs)("div",{className:"CurrentUser",children:[Object(p.jsx)("h2",{className:"CurrentUser__title",children:Object(p.jsx)("span",{children:"User: ".concat(null===s||void 0===s?void 0:s.id)})}),Object(p.jsx)("h3",{className:"CurrentUser__name",children:null===s||void 0===s?void 0:s.name}),Object(p.jsx)("p",{className:"CurrentUser__email",children:null===s||void 0===s?void 0:s.email}),Object(p.jsx)("p",{className:"CurrentUser__phone",children:null===s||void 0===s?void 0:s.phone})]}):Object(p.jsx)("p",{children:"In process..."})})}),f=function(){var e=Object(i.useState)(0),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(i.useState)([]),o=Object(r.a)(s,2),a=o[0],u=o[1],l=Object(i.useState)(!1),j=Object(r.a)(l,2),b=j[0],h=j[1];return Object(i.useEffect)((function(){d("/todos").then((function(e){u(e)})).then((function(){return h(!0)}))}),[]),Object(p.jsx)(p.Fragment,{children:b?Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("div",{className:"App__sidebar",children:Object(p.jsx)(O,{selectedUserId:n,selectedUser:c,todos:a})}),Object(p.jsx)("div",{className:"App__content",children:Object(p.jsx)("div",{className:"App__content-container",children:n?Object(p.jsx)(m,{userId:n}):"No user selected"})})]}):Object(p.jsx)("p",{children:"Loading data..."})})};s.a.render(Object(p.jsx)(f,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.23f0756d.chunk.js.map