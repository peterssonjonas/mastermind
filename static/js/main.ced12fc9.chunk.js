(this.webpackJsonpmastermind=this.webpackJsonpmastermind||[]).push([[0],{12:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var r=t(2),s=t.n(r),c=t(6),o=t.n(c),a=(t(12),t(7));function i(e,n){return Array(e).fill(null).map(n)}function u(e,n,t){return i(e,(function(){return i(n,t)}))}var l,d=t(1);!function(e){e[e.None=0]="None",e[e.Partial=1]="Partial",e[e.Exact=2]="Exact"}(l||(l={}));var f,v,h=function(e,n){var t=function(e,n){return e.reduce((function(e,t,r){return[].concat(Object(d.a)(e),[t===n[r]?l.Exact:l.None])}),[])}(e,n);return function(e,n,t){var r=e.map((function(e){return e===l.Exact})),s=Object(d.a)(r);return n.forEach((function(n,c){r[c]||t.forEach((function(t,o){s[o]||e[c]!==l.None&&r[c]||n===t&&(e[c]=l.Partial,r[c]=s[o]=!0)}))})),e}(Object(d.a)(t),e,n).sort().reverse()};!function(e){e[e.InProgress=0]="InProgress",e[e.Victory=1]="Victory",e[e.GameOver=2]="GameOver"}(f||(f={})),function(e){e[e.Click=0]="Click",e[e.Reset=1]="Reset"}(v||(v={}));var j=function(e){var n,t,r=e.turns,s=void 0===r?10:r,c=e.holes,o=void 0===c?4:c,a=e.colors,i=void 0===a?6:a;return{guesses:u(s,o,(function(){return-1})),hints:u(s,o,(function(){return-1})),turn:0,guessIndex:0,secretCode:(n=o,t=i,Object(d.a)(Array(n)).map((function(){return Math.floor(Math.random()*t)}))),status:f.InProgress}},g=function(e,n){switch(n.type){case v.Click:var t=n.payload.value,r=(o=e,JSON.parse(JSON.stringify(o))),s=r.guesses,c=r.hints;if(s[e.turn][e.guessIndex]=t,r.guessIndex=(e.guessIndex+1)%s[e.turn].length,0===r.guessIndex)c[e.turn]=h(s[e.turn],e.secretCode),c[e.turn].every((function(e){return e===l.Exact}))?r.status=f.Victory:e.turn===e.guesses.length-1?r.status=f.GameOver:r.status=f.InProgress,r.turn=e.turn+1;return r;case v.Reset:return j(n.payload);default:return e}var o},b=t(0),m=function(e){var n=e.colors,t=e.onClick;return Object(b.jsx)("div",{className:"code-pegs",children:n.map((function(e){return Object(b.jsx)("button",{className:"peg circle","data-value":e,onClick:function(){return t(e)},"aria-label":"".concat(e)},e)}))})},O=function(e){var n=e.value;return Object(b.jsx)("div",{className:"peg bordered circle","data-value":n})},p=function(e){var n=e.guess.map((function(e,n){return Object(b.jsx)(O,{value:e},n)}));return Object(b.jsx)(b.Fragment,{children:n})},x=function(e){var n=e.hints;return Object(b.jsx)(b.Fragment,{children:n.map((function(e,n){return Object(b.jsx)("div",{className:"hint bordered circle","data-value":e},n)}))})},w=function(e){var n=e.guesses,t=e.hints,r=e.currentRow;return Object(b.jsx)("div",{className:"decoding-board",children:n.map((function(e,n){return Object(b.jsxs)("div",{className:"row row-".concat(n," ").concat(r===n?"active":""),children:[Object(b.jsx)(p,{guess:e}),Object(b.jsx)("span",{className:"grid-spacer"}),Object(b.jsx)(x,{hints:t[n]})]},n)}))})},y=function(){return Object(b.jsx)("footer",{children:"Copyright \xa9 2021 Jonas Petersson"})},k=function(e){var n=e.secretCode,t=e.status,r=e.reset,s=function(e){switch(e){case f.Victory:return{stateClass:"winner",title:"Congratulations"};case f.GameOver:return{stateClass:"game-over",title:"Game Over"};default:return{}}}(t),c=s.stateClass,o=s.title;return Object(b.jsx)("div",{className:"overlay",children:Object(b.jsxs)("div",{className:"container ".concat(c),children:[Object(b.jsx)("h2",{children:o}),n&&Object(b.jsx)("div",{className:"code",children:n.map((function(e,n){return Object(b.jsx)(O,{value:e},n)}))}),Object(b.jsx)("button",{className:"btn",onClick:r,children:"Reset"})]})})};var C=function(){var e=i(6,(function(e,n){return n})),n=Object(r.useReducer)(g,j({turns:10,holes:4,colors:6})),t=Object(a.a)(n,2),s=t[0],c=t[1],o=s.guesses,u=s.hints,l=s.turn,d=s.status,h=s.secretCode;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Mastermind"}),Object(b.jsx)(w,{guesses:o,hints:u,currentRow:l}),Object(b.jsx)(m,{colors:e,onClick:function(e){c({type:v.Click,payload:{value:e}})}}),Object(b.jsx)(y,{}),(d===f.Victory||d===f.GameOver)&&Object(b.jsx)(k,{status:d,secretCode:h,reset:function(){c({type:v.Reset,payload:{turns:10,holes:4,colors:6}})}})]})},N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/mastermind",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/mastermind","/service-worker.js");N?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):E(n,e)}))}}()}},[[14,1,2]]]);
//# sourceMappingURL=main.ced12fc9.chunk.js.map