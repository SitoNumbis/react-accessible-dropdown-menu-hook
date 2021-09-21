(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var i=n(3),o=n(7),s=(n(0),n(94)),r={title:"Using"},a={unversionedId:"getting-started/using",id:"getting-started/using",isDocsHomePage:!1,title:"Using",description:"To use the Hook, first call it, telling it how many items your menu will have:",source:"@site/docs/getting-started/using.md",sourceDirName:"getting-started",slug:"/getting-started/using",permalink:"/react-accessible-dropdown-menu-hook/docs/getting-started/using",editUrl:"https://github.com/sparksuite/react-accessible-dropdown-menu-hook/edit/master/website/docs/getting-started/using.md",version:"current",frontMatter:{title:"Using"},sidebar:"default",previous:{title:"Import",permalink:"/react-accessible-dropdown-menu-hook/docs/getting-started/import"},next:{title:"Return object",permalink:"/react-accessible-dropdown-menu-hook/docs/design/return-object"}},l=[],c={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"To use the Hook, first call it, telling it how many items your menu will have:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},"const { buttonProps, itemProps, isOpen } = useDropdownMenu(numberOfItems);\n")),Object(s.b)("p",null,"Take the ",Object(s.b)("inlineCode",{parentName:"p"},"buttonProps")," object and spread it onto a button:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},"<button {...buttonProps}>Example</button>\n")),Object(s.b)("p",null,"Create the menu with the ",Object(s.b)("inlineCode",{parentName:"p"},"role='menu'")," property and spread ",Object(s.b)("inlineCode",{parentName:"p"},"itemProps[x]")," onto each item:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},"<div className={isOpen ? 'visible' : ''} role='menu'>\n    <a {...itemProps[0]} href='https://example.com'>Regular link</a>\n    <a {...itemProps[1]} onClick={handleClick}>With click handler</a>\n</div>\n")),Object(s.b)("p",null,"Style the menu based on whether the ",Object(s.b)("inlineCode",{parentName:"p"},"visible")," class name is present or not. For example, something like:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-css"},"div[role='menu'] {\n    visibility: hidden;\n}\n\ndiv[role='menu'].visible {\n    visibility: visible;\n}\n")))}u.isMDXComponent=!0}}]);