module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./",n(n.s=7)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("react-dom/server")},function(e,t){},function(e,t,n){"use strict";n.r(t);var r=n(3),o=n.n(r),a=n(4),c=n.n(a),u=n(2),l=n.n(u),i=n(0),p=n.n(i),s=n(1),f=n(5),m=(n(6),function(){console.log("test chunk")});var d=[{path:"/",exact:!0,component:function(){return m(),p.a.createElement("h2",{className:"app"},"home page.")}},{path:"/about",component:function(){return m(),console.log(3),p.a.createElement("div",{className:"app"},"about page.")}}];function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function g(){return p.a.createElement("div",{className:"app"},p.a.createElement("ul",null,p.a.createElement("li",null,p.a.createElement(s.Link,{to:"/"},"Home")),p.a.createElement("li",null,p.a.createElement(s.Link,{to:"/about"},"About"))),p.a.createElement("hr",null),p.a.createElement("button",{onClick:function(){console.log("haha shabi.")}},"click me."),p.a.createElement(s.Switch,null,d.map(function(e){var t=e.path,n=e.exact,r=e.component,o=v(e,["path","exact","component"]);return p.a.createElement(s.Route,b({},o,{key:t,path:t,exact:n,component:r}))})))}var y=process.env.PORT||3e3,h=l()();l.a.Router();h.use("/public",l.a.static(o.a.resolve("dist/public"))),h.get("*",function(e,t){console.log(e.url);var n=Object(f.renderToString)(p.a.createElement(s.StaticRouter,{location:e.url,context:{}},p.a.createElement(g,null))),r=o.a.resolve("dist/public/index.html");c.a.readFile(r,"utf8",function(e,r){return e?(console.error("Something went wrong:",e),t.status(500).send("Oops, better luck next time!")):t.send(r.replace('<div id="app"></div>','<div id="app">'.concat(n,"</div>")))})}),h.listen(y,function(){console.log("Server is listening on port ".concat(y))})}]);