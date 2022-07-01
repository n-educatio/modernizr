/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-flash-getusermedia-requestanimationframe-prefixed-setclasses !*/
!function(e,n,t){function r(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function i(e,n){return typeof e===n}function o(){var e,n,t,r,o,s,a;for(var l in _)if(_.hasOwnProperty(l)){if(e=[],n=_[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=i(n.fn,"function")?n.fn():n.fn,o=0;o<e.length;o++)s=e[o],a=s.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),C.push((r?"":"no-")+a.join("-"))}}function s(e){var n=b.className,t=Modernizr._config.classPrefix||"";if(x&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),x?b.className.baseVal=n:b.className=n)}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):x?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(){var e=n.body;return e||(e=a(x?"svg":"body"),e.fake=!0),e}function f(e,n){if("object"==typeof e)for(var t in e)S(e,t)&&f(t,e[t]);else{e=e.toLowerCase();var r=e.split("."),i=Modernizr[r[0]];if(2==r.length&&(i=i[r[1]]),"undefined"!=typeof i)return Modernizr;n="function"==typeof n?n():n,1==r.length?Modernizr[r[0]]=n:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=n),s([(n&&0!=n?"":"no-")+r.join("-")]),Modernizr._trigger(e,n)}return Modernizr}function u(e,n){return!!~(""+e).indexOf(n)}function c(e,n){return function(){return e.apply(n,arguments)}}function d(e,n,t){var r;for(var o in e)if(e[o]in n)return t===!1?e[o]:(r=n[e[o]],i(r,"function")?c(r,t||n):r);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function v(e,t,r,i){var o,s,f,u,c="modernizr",d=a("div"),p=l();if(parseInt(r,10))for(;r--;)f=a("div"),f.id=i?i[r]:c+(r+1),d.appendChild(f);return o=a("style"),o.type="text/css",o.id="s"+c,(p.fake?p:d).appendChild(o),p.appendChild(d),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(n.createTextNode(e)),d.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",u=b.style.overflow,b.style.overflow="hidden",b.appendChild(p)),s=t(d,e),p.fake?(p.parentNode.removeChild(p),b.style.overflow=u,b.offsetHeight):d.parentNode.removeChild(d),!!s}function h(n,t,r){var i;if("getComputedStyle"in e){i=getComputedStyle.call(e,n,t);var o=e.console;if(null!==i)r&&(i=i.getPropertyValue(r));else if(o){var s=o.error?"error":"log";o[s].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else i=!t&&n.currentStyle&&n.currentStyle[r];return i}function m(n,r){var i=n.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(p(n[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];i--;)o.push("("+p(n[i])+":"+r+")");return o=o.join(" or "),v("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==h(e,null,"position")})}return t}function g(e,n,o,s){function l(){c&&(delete E.style,delete E.modElem)}if(s=i(s,"undefined")?!1:s,!i(o,"undefined")){var f=m(e,o);if(!i(f,"undefined"))return f}for(var c,d,p,v,h,g=["modernizr","tspan","samp"];!E.style&&g.length;)c=!0,E.modElem=a(g.shift()),E.style=E.modElem.style;for(p=e.length,d=0;p>d;d++)if(v=e[d],h=E.style[v],u(v,"-")&&(v=r(v)),E.style[v]!==t){if(s||i(o,"undefined"))return l(),"pfx"==n?v:!0;try{E.style[v]=o}catch(y){}if(E.style[v]!=h)return l(),"pfx"==n?v:!0}return l(),!1}function y(e,n,t,r,o){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+T.join(s+" ")+s).split(" ");return i(n,"string")||i(n,"undefined")?g(a,n,r,o):(a=(e+" "+N.join(s+" ")+s).split(" "),d(a,n,t))}var C=[],_=[],w={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){_.push({name:e,fn:n,options:t})},addAsyncTest:function(e){_.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr,Modernizr.addTest("getUserMedia","mediaDevices"in navigator&&"getUserMedia"in navigator.mediaDevices);var S,b=n.documentElement,x="svg"===b.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;S=i(e,"undefined")||i(e.call,"undefined")?function(e,n){return n in e&&i(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),w._l={},w.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},w._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,r;for(e=0;e<t.length;e++)(r=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){w.addTest=f}),Modernizr.addAsyncTest(function(){var t,r,i=function(e){b.contains(e)||b.appendChild(e)},o=function(e){e.fake&&e.parentNode&&e.parentNode.removeChild(e)},s=function(e,n){var t=!!e;if(t&&(t=new Boolean(t),t.blocked="blocked"===e),f("flash",function(){return t}),n&&v.contains(n)){for(;n.parentNode!==v;)n=n.parentNode;v.removeChild(n)}};try{r="ActiveXObject"in e&&"Pan"in new e.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(u){}if(t=!("plugins"in navigator&&"Shockwave Flash"in navigator.plugins||r),t||x)s(!1);else{var c,d,p=a("embed"),v=l();if(p.type="application/x-shockwave-flash",v.appendChild(p),!("Pan"in p||r))return i(v),s("blocked",p),void o(v);c=function(){return i(v),b.contains(v)?(b.contains(p)?(d=p.style.cssText,""!==d?s("blocked",p):s(!0,p)):s("blocked"),void o(v)):(v=n.body||v,p=a("embed"),p.type="application/x-shockwave-flash",v.appendChild(p),setTimeout(c,1e3))},setTimeout(c,10)}});var k="Moz O ms Webkit",T=w._config.usePrefixes?k.split(" "):[];w._cssomPrefixes=T;var P=function(n){var r,i=prefixes.length,o=e.CSSRule;if("undefined"==typeof o)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in o)return"@"+n;for(var s=0;i>s;s++){var a=prefixes[s],l=a.toUpperCase()+"_"+r;if(l in o)return"@-"+a.toLowerCase()+"-"+n}return!1};w.atRule=P;var N=w._config.usePrefixes?k.toLowerCase().split(" "):[];w._domPrefixes=N;var j={elem:a("modernizr")};Modernizr._q.push(function(){delete j.elem});var E={style:j.elem.style};Modernizr._q.unshift(function(){delete E.style}),w.testAllProps=y;var z=w.prefixed=function(e,n,t){return 0===e.indexOf("@")?P(e):(-1!=e.indexOf("-")&&(e=r(e)),n?y(e,n,t):y(e,"pfx"))};Modernizr.addTest("requestanimationframe",!!z("requestAnimationFrame",e),{aliases:["raf"]}),o(),s(C),delete w.addTest,delete w.addAsyncTest;for(var O=0;O<Modernizr._q.length;O++)Modernizr._q[O]();e.Modernizr=Modernizr}(window,document);