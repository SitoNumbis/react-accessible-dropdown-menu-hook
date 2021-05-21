(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{133:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0);t.default=function(e){var t=a.useState(!1),n=t[0],r=t[1],i=a.useRef(null),o=a.useRef(!0),l=a.useRef(!1),c=a.useRef(null),u=a.useMemo((function(){return Array.from({length:e},(function(){return a.createRef()}))}),[e]),s=function(e){var t;i.current=e,null===(t=u[e].current)||void 0===t||t.focus()};a.useEffect((function(){o.current?o.current=!1:n&&!l.current?s(0):n||(l.current=!1)}),[n]),a.useEffect((function(){if(n){var e=function(e){setTimeout((function(){e.target instanceof Element&&(e.target.closest('[role="menu"]')instanceof Element||r(!1))}),10)};return setTimeout((function(){document.addEventListener("click",e)}),1),function(){return document.removeEventListener("click",e)}}}),[n]),a.useEffect((function(){var e=function(e){!n||"ArrowDown"!==e.key&&"ArrowUp"!==e.key||e.preventDefault()};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[n]);var m=function(e){if(function(e){return void 0!==e.key}(e)){var t=e.key;if(!["Enter"," ","Tab","ArrowDown"].includes(t))return;("Tab"===t||"ArrowDown"===t)&&l.current&&n?(e.preventDefault(),s(0)):"Tab"!==t&&(e.preventDefault(),r(!0))}else l.current=!n,r(!n)},d=function(e){var t,n=e.key;if(["Tab","Shift","Enter","Escape","ArrowUp","ArrowDown"," "].includes(n)){var a=i.current;return"Escape"===n?(r(!1),void(null===(t=c.current)||void 0===t||t.focus())):"Tab"===n?void r(!1):"Enter"===n||" "===n?(e.currentTarget.href||e.currentTarget.click(),void r(!1)):(null!==a&&("ArrowUp"===n?a-=1:"ArrowDown"===n&&(a+=1),a>u.length-1?a=0:a<0&&(a=u.length-1)),void(null!==a&&s(a)))}if(/[a-zA-Z0-9./<>?;:"'`!@#$%^&*()\\[\]{}_+=|\\-~,]/.test(n)){var o=u.findIndex((function(e){var t,a,r,i,o,l;return(null===(a=null===(t=e.current)||void 0===t?void 0:t.innerText)||void 0===a?void 0:a.toLowerCase().startsWith(n.toLowerCase()))||(null===(i=null===(r=e.current)||void 0===r?void 0:r.textContent)||void 0===i?void 0:i.toLowerCase().startsWith(n.toLowerCase()))||(null===(l=null===(o=e.current)||void 0===o?void 0:o.getAttribute("aria-label"))||void 0===l?void 0:l.toLowerCase().startsWith(n.toLowerCase()))}));-1!==o&&s(o)}};return{buttonProps:{onKeyDown:m,onClick:m,tabIndex:0,ref:c,role:"button","aria-haspopup":!0,"aria-expanded":n},itemProps:Array.from({length:e},(function(e,t){return{onKeyDown:d,tabIndex:-1,role:"menuitem",ref:u[t]}})),isOpen:n,setIsOpen:r}}},81:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(0),i=n.n(r),o=n(88),l=n(96),c=n(58),u=n.n(c),s=n(133),m=n.n(s),d=n(134),f=n(139),h=n(140);t.default=function(){var e=m()(3),t=e.buttonProps,n=e.itemProps,r=e.isOpen;return i.a.createElement(l.a,{title:"Demo",description:"Easily validate CSS using W3C\u2019s public CSS validator service"},i.a.createElement("header",{className:Object(o.a)("hero hero--primary",u.a.heroBanner)},i.a.createElement("div",{className:"container"},i.a.createElement("h1",{className:"hero__title"},"Demo"))),i.a.createElement("main",null,i.a.createElement("section",{className:u.a.features},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col col--12"},i.a.createElement("button",Object(a.a)({},t,{type:"button",className:"demo-button"}),i.a.createElement("span",null,"Try me!"),i.a.createElement(d.a,{icon:f.a})),i.a.createElement("div",{className:"demo-menu "+(r?"visible":""),role:"menu"},i.a.createElement("a",Object(a.a)({},n[0],{href:"https://github.com/sparksuite/react-accessible-dropdown-menu-hook",id:"menu-item-1"}),i.a.createElement(d.a,{icon:h.a,fixedWidth:!0}),"View on GitHub"),i.a.createElement("a",Object(a.a)({},n[1],{href:"https://www.npmjs.com/package/react-accessible-dropdown-menu-hook",id:"menu-item-2"}),i.a.createElement(d.a,{icon:h.b,fixedWidth:!0}),"View on npm"),i.a.createElement("a",Object(a.a)({},n[2],{onClick:function(){return alert("Click!")},id:"menu-item-3"}),i.a.createElement(d.a,{icon:f.b,fixedWidth:!0}),"Item with click handler")))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col col--12"},i.a.createElement("ul",{className:"behavior"},i.a.createElement("li",null,"The menu can be revealed by clicking the button, or by focusing the button and pressing enter / space"),i.a.createElement("li",null,"If the menu is revealed with the keyboard, the first menu item is automatically focused"),i.a.createElement("li",null,"If the menu is revealed with the mouse, the first menu item can be focused by pressing tab / arrow down"),i.a.createElement("li",null,i.a.createElement("em",null,"Once focus is in the menu\u2026"),i.a.createElement("ul",null,i.a.createElement("li",null,"The up / down arrow keys allow for navigation through the menu items (including wrapping from first to last and vice versa)"),i.a.createElement("li",null,"Pressing tab will close the menu and move the focus to the next focusable element"),i.a.createElement("li",null,"Pressing shift-tab will close the menu and move the focus to the previous focusable element"),i.a.createElement("li",null,"Pressing escape will close the menu and return the focus to the button"),i.a.createElement("li",null,"Pressing enter or space will activate that item and close the menu (whether it\u2019s a link or has a click handler attached)"),i.a.createElement("li",null,"Pressing any other character will move to the first menu item that starts with that character, if there is not a matching item, focus remains the same"))))))))))}}}]);