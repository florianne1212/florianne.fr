(self.webpackChunkflorianne=self.webpackChunkflorianne||[]).push([[476],{4849:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var r,l=n(5761),o=n(7294),a=n(5444),i=n(9692),u=n(2982),c=n(5985),s=n(8630),m=n(908),p=n(6230),E=n(5701),h=n(5446),f=n(2392),d=[{id:0,title:"my resume",path:"resume",video:"pepin-fresh.mp4"},{id:1,title:"my personnal projects",path:"myprojects",video:"pepin-bathtub.mp4"},{id:2,title:"my school projects",path:"42projects",video:"pepin-nelson.mp4"},{id:3,title:"about me",path:"aboutme",video:"pepin-sheep.mp4"}],g=function(e){var t=e.toggleMenu,n=e.setToggleMenu,r=e.onCursor,l=(0,o.useState)({show:!1,video:"pepin-sheep.mp4",key:"0"});l[0],l[1];return o.createElement(o.Fragment,null,o.createElement(m.M,null,t&&o.createElement(f.JL,{initial:{x:"-100%"},exit:{x:"-100%"},animate:{x:t?0:"-100%"},transition:{duration:.8,ease:[.6,.05,-.01,.9]}},o.createElement(E.W2,null,o.createElement(f.$T,null,o.createElement(E.kC,{spaceBetween:!0,noHeight:!0},o.createElement("h2",null,"Why should you hire me ?"),o.createElement(f.qk,{onClick:function(){return n(!t)},onMouseEnter:function(){return r("pointer")},onMouseLeave:r},o.createElement("button",null,o.createElement("span",null),o.createElement("span",null))))),o.createElement(f.$6,null,o.createElement("ul",null,d.map((function(e){return o.createElement(p.E.li,{onMouseEnter:function(){return r("pointer")},onMouseLeave:r,onClick:r,key:e.id},o.createElement(a.Link,{to:"/"+e.path},o.createElement(p.E.div,{initial:{x:-108},whileHover:{x:-40,transition:{duration:.4,ease:[.6,.05,-.01,.9]}},className:"link"},o.createElement("span",{className:"arrow"},o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 101 57"},o.createElement("path",{d:"M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z",fill:"#000",fillRule:"evenodd"}))),e.title)))})))),o.createElement(f.qx,null,o.createElement(E.kC,{spaceBetween:!0},o.createElement(h.Bp,null,o.createElement(a.Link,{to:"/French/index_fr"},o.createElement("p",{onMouseEnter:function(){return r("pointer")},onMouseLeave:r,onClick:r},"FR"))),o.createElement(h.Bp,{wider:!0},o.createElement(a.Link,{to:"/"},o.createElement("p",{onMouseEnter:function(){return r("pointer")},onMouseLeave:r,onClick:r},"EN"))),o.createElement(h.Bp,{wider:!0},o.createElement("a",{href:"https://github.com/florianne1212"},o.createElement("p",{onMouseEnter:function(){return r("pointer")},onMouseLeave:r},o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},o.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})))))))))))},v=n(1112),b=(0,i.createGlobalStyle)(r||(r=(0,l.Z)(["\n\n\t//html, body {\n\t//\theight: 100%;\n\t//}\n\t\n\t","\n\t* {\n\t\ttext-decoration: none;\n\t\tcursor: none !important;\n\t}\n\n\thtml {\n\t\tbox-sizing: border-box;\n\t\t-webkit-font-smoothing: antialised;\n\t\tfont-size: 16px\n\t}\n\t\n\n\tbody {\n\t\t\n\t\tfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t\tbackground : ",";\n\t\toverscroll-behavior: none;\n\t\toverflow-x: hidden\n\t}\n"])),u.Fv,(function(e){return e.theme.background})),k=function(e){var t=e.children,n=((0,a.useStaticQuery)("3649515864"),(0,v.mX)()),r=n.currentTheme,l=n.cursorStyles,u=(0,v.DI)(),m=function(e){e=l.includes(e)&&e||!1,u({type:"CURSOR_TYPE",cursorType:e})},p=(0,o.useState)(!1),E=p[0],h=p[1];return o.createElement(i.ThemeProvider,{theme:"dark"===r?{background:"#000000",text:"#ffffff",blue:"#11737E"}:{background:"#ffffff",text:"#000000",blue:"#773344"}},o.createElement(b,null),o.createElement(s.Z,{toggleMenu:E}),o.createElement(c.Z,{onCursor:m,toggleMenu:E,setToggleMenu:h}),o.createElement(g,{toggleMenu:E,setToggleMenu:h,onCursor:m}),o.createElement("main",null,t))}},5646:function(e,t,n){"use strict";n.r(t);var r=n(7294),l=n(1112),o=n(4849);t.default=function(){var e=(0,l.mX)();e.currentTheme,e.cursorStyles,(0,l.DI)();return r.createElement("div",null,r.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-42-projects-js-1299689ed714767eb623.js.map