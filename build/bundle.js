var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function i(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let o,a;function c(t,e){return o||(o=document.createElement("a")),o.href=e,t===o.href}function h(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode&&t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function p(){return f(" ")}function g(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function m(t){return function(e){return e.preventDefault(),t.call(this,e)}}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}class v{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.is_svg?this.e=function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e.nodeName):this.e=d(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)u(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(l)}}function w(t,e){return new t(e)}function b(t){a=t}const E=[],T=[],I=[],C=[],_=Promise.resolve();let S=!1;function A(t){I.push(t)}const k=new Set;let D=0;function N(){const t=a;do{for(;D<E.length;){const t=E[D];D++,b(t),x(t.$$)}for(b(null),E.length=0,D=0;T.length;)T.pop()();for(let t=0;t<I.length;t+=1){const e=I[t];k.has(e)||(k.add(e),e())}I.length=0}while(E.length);for(;C.length;)C.pop()();S=!1,k.clear(),b(t)}function x(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const L=new Set;let R;function O(t,e){t&&t.i&&(L.delete(t),t.i(e))}function M(t,e,n,s){if(t&&t.o){if(L.has(t))return;L.add(t),R.c.push((()=>{L.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}else s&&s()}function P(t){t&&t.c()}function U(t,n,r,o){const{fragment:a,after_update:c}=t.$$;a&&a.m(n,r),o||A((()=>{const n=t.$$.on_mount.map(e).filter(i);t.$$.on_destroy?t.$$.on_destroy.push(...n):s(n),t.$$.on_mount=[]})),c.forEach(A)}function V(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function F(t,e){-1===t.$$.dirty[0]&&(E.push(t),S||(S=!0,_.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function B(e,i,r,o,c,h,u,d=[-1]){const f=a;b(e);const p=e.$$={fragment:null,ctx:[],props:h,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(f?f.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:i.target||f.$$.root};u&&u(p.root);let g=!1;if(p.ctx=r?r(e,i.props||{},((t,n,...s)=>{const i=s.length?s[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=i)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](i),g&&F(e,t)),n})):[],p.update(),g=!0,s(p.before_update),p.fragment=!!o&&o(p.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);p.fragment&&p.fragment.l(t),t.forEach(l)}else p.fragment&&p.fragment.c();i.intro&&O(e.$$.fragment),U(e,i.target,i.anchor,i.customElement),N()}b(f)}class ${$destroy(){V(this,1),this.$destroy=t}$on(e,n){if(!i(n))return t;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const t=s.indexOf(n);-1!==t&&s.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var j=function(t){var e={exports:{}};return t(e,e.exports),e.exports}((function(t,e){t.exports=function(){var t=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},e=v,n=a,s=c,i=h,r=y,o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function a(t){for(var e,n=[],s=0,i=0,r="";null!=(e=o.exec(t));){var a=e[0],c=e[1],h=e.index;if(r+=t.slice(i,h),i=h+a.length,c)r+=c[1];else{r&&(n.push(r),r="");var u=e[2],d=e[3],f=e[4],p=e[5],g=e[6],m=e[7],y="+"===g||"*"===g,v="?"===g||"*"===g,w=u||"/",b=f||p||(m?".*":"[^"+w+"]+?");n.push({name:d||s++,prefix:u||"",delimiter:w,optional:v,repeat:y,pattern:l(b)})}}return i<t.length&&(r+=t.substr(i)),r&&n.push(r),n}function c(t){return h(a(t))}function h(e){for(var n=new Array(e.length),s=0;s<e.length;s++)"object"==typeof e[s]&&(n[s]=new RegExp("^"+e[s].pattern+"$"));return function(s){for(var i="",r=s||{},o=0;o<e.length;o++){var a=e[o];if("string"!=typeof a){var c,h=r[a.name];if(null==h){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to be defined')}if(t(h)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but received "'+h+'"');if(0===h.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var u=0;u<h.length;u++){if(c=encodeURIComponent(h[u]),!n[o].test(c))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'", but received "'+c+'"');i+=(0===u?a.prefix:a.delimiter)+c}}else{if(c=encodeURIComponent(h),!n[o].test(c))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but received "'+c+'"');i+=a.prefix+c}}else i+=a}return i}}function u(t){return t.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function l(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function d(t,e){return t.keys=e,t}function f(t){return t.sensitive?"":"i"}function p(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var s=0;s<n.length;s++)e.push({name:s,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return d(t,e)}function g(t,e,n){for(var s=[],i=0;i<t.length;i++)s.push(v(t[i],e,n).source);return d(new RegExp("(?:"+s.join("|")+")",f(n)),e)}function m(t,e,n){for(var s=a(t),i=y(s,n),r=0;r<s.length;r++)"string"!=typeof s[r]&&e.push(s[r]);return d(i,e)}function y(t,e){for(var n=(e=e||{}).strict,s=!1!==e.end,i="",r=t[t.length-1],o="string"==typeof r&&/\/$/.test(r),a=0;a<t.length;a++){var c=t[a];if("string"==typeof c)i+=u(c);else{var h=u(c.prefix),l=c.pattern;c.repeat&&(l+="(?:"+h+l+")*"),i+=l=c.optional?h?"(?:"+h+"("+l+"))?":"("+l+")?":h+"("+l+")"}}return n||(i=(o?i.slice(0,-2):i)+"(?:\\/(?=$))?"),i+=s?"$":n&&o?"":"(?=\\/|$)",new RegExp("^"+i,f(e))}function v(e,n,s){return t(n=n||[])?s||(s={}):(s=n,n=[]),e instanceof RegExp?p(e,n):t(e)?g(e,n,s):m(e,n,s)}e.parse=n,e.compile=s,e.tokensToFunction=i,e.tokensToRegExp=r;var w,b="undefined"!=typeof document,E="undefined"!=typeof window,T="undefined"!=typeof history,I="undefined"!=typeof process,C=b&&document.ontouchstart?"touchstart":"click",_=E&&!(!window.history.location&&!window.location);function S(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}function A(){var t=new S;function e(){return k.apply(t,arguments)}return e.callbacks=t.callbacks,e.exits=t.exits,e.base=t.base.bind(t),e.strict=t.strict.bind(t),e.start=t.start.bind(t),e.stop=t.stop.bind(t),e.show=t.show.bind(t),e.back=t.back.bind(t),e.redirect=t.redirect.bind(t),e.replace=t.replace.bind(t),e.dispatch=t.dispatch.bind(t),e.exit=t.exit.bind(t),e.configure=t.configure.bind(t),e.sameOrigin=t.sameOrigin.bind(t),e.clickHandler=t.clickHandler.bind(t),e.create=A,Object.defineProperty(e,"len",{get:function(){return t.len},set:function(e){t.len=e}}),Object.defineProperty(e,"current",{get:function(){return t.current},set:function(e){t.current=e}}),e.Context=x,e.Route=L,e}function k(t,e){if("function"==typeof t)return k.call(this,"*",t);if("function"==typeof e)for(var n=new L(t,null,this),s=1;s<arguments.length;++s)this.callbacks.push(n.middleware(arguments[s]));else"string"==typeof t?this["string"==typeof e?"redirect":"show"](t,e):this.start(t)}function D(t){if(!t.handled){var e=this,n=e._window;(e._hashbang?_&&this._getBase()+n.location.hash.replace("#!",""):_&&n.location.pathname+n.location.search)!==t.canonicalPath&&(e.stop(),t.handled=!1,_&&(n.location.href=t.canonicalPath))}}function N(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function x(t,e,n){var s=this.page=n||k,i=s._window,r=s._hashbang,o=s._getBase();"/"===t[0]&&0!==t.indexOf(o)&&(t=o+(r?"#!":"")+t);var a=t.indexOf("?");this.canonicalPath=t;var c=new RegExp("^"+N(o));if(this.path=t.replace(c,"")||"/",r&&(this.path=this.path.replace("#!","")||"/"),this.title=b&&i.document.title,this.state=e||{},this.state.path=t,this.querystring=~a?s._decodeURLEncodedURIComponent(t.slice(a+1)):"",this.pathname=s._decodeURLEncodedURIComponent(~a?t.slice(0,a):t),this.params={},this.hash="",!r){if(!~this.path.indexOf("#"))return;var h=this.path.split("#");this.path=this.pathname=h[0],this.hash=s._decodeURLEncodedURIComponent(h[1])||"",this.querystring=this.querystring.split("#")[0]}}function L(t,n,s){var i=this.page=s||R,r=n||{};r.strict=r.strict||i._strict,this.path="*"===t?"(.*)":t,this.method="GET",this.regexp=e(this.path,this.keys=[],r)}S.prototype.configure=function(t){var e=t||{};this._window=e.window||E&&window,this._decodeURLComponents=!1!==e.decodeURLComponents,this._popstate=!1!==e.popstate&&E,this._click=!1!==e.click&&b,this._hashbang=!!e.hashbang;var n=this._window;this._popstate?n.addEventListener("popstate",this._onpopstate,!1):E&&n.removeEventListener("popstate",this._onpopstate,!1),this._click?n.document.addEventListener(C,this.clickHandler,!1):b&&n.document.removeEventListener(C,this.clickHandler,!1),this._hashbang&&E&&!T?n.addEventListener("hashchange",this._onpopstate,!1):E&&n.removeEventListener("hashchange",this._onpopstate,!1)},S.prototype.base=function(t){if(0===arguments.length)return this._base;this._base=t},S.prototype._getBase=function(){var t=this._base;if(t)return t;var e=E&&this._window&&this._window.location;return E&&this._hashbang&&e&&"file:"===e.protocol&&(t=e.pathname),t},S.prototype.strict=function(t){if(0===arguments.length)return this._strict;this._strict=t},S.prototype.start=function(t){var e=t||{};if(this.configure(e),!1!==e.dispatch){var n;if(this._running=!0,_){var s=this._window.location;n=this._hashbang&&~s.hash.indexOf("#!")?s.hash.substr(2)+s.search:this._hashbang?s.search+s.hash:s.pathname+s.search+s.hash}this.replace(n,null,!0,e.dispatch)}},S.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var t=this._window;this._click&&t.document.removeEventListener(C,this.clickHandler,!1),E&&t.removeEventListener("popstate",this._onpopstate,!1),E&&t.removeEventListener("hashchange",this._onpopstate,!1)}},S.prototype.show=function(t,e,n,s){var i=new x(t,e,this),r=this.prevContext;return this.prevContext=i,this.current=i.path,!1!==n&&this.dispatch(i,r),!1!==i.handled&&!1!==s&&i.pushState(),i},S.prototype.back=function(t,e){var n=this;if(this.len>0){var s=this._window;T&&s.history.back(),this.len--}else t?setTimeout((function(){n.show(t,e)})):setTimeout((function(){n.show(n._getBase(),e)}))},S.prototype.redirect=function(t,e){var n=this;"string"==typeof t&&"string"==typeof e&&k.call(this,t,(function(t){setTimeout((function(){n.replace(e)}),0)})),"string"==typeof t&&void 0===e&&setTimeout((function(){n.replace(t)}),0)},S.prototype.replace=function(t,e,n,s){var i=new x(t,e,this),r=this.prevContext;return this.prevContext=i,this.current=i.path,i.init=n,i.save(),!1!==s&&this.dispatch(i,r),i},S.prototype.dispatch=function(t,e){var n=0,s=0,i=this;function r(){var t=i.exits[s++];if(!t)return o();t(e,r)}function o(){var e=i.callbacks[n++];if(t.path===i.current)return e?void e(t,o):D.call(i,t);t.handled=!1}e?r():o()},S.prototype.exit=function(t,e){if("function"==typeof t)return this.exit("*",t);for(var n=new L(t,null,this),s=1;s<arguments.length;++s)this.exits.push(n.middleware(arguments[s]))},S.prototype.clickHandler=function(t){if(1===this._which(t)&&!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){var e=t.target,n=t.path||(t.composedPath?t.composedPath():null);if(n)for(var s=0;s<n.length;s++)if(n[s].nodeName&&"A"===n[s].nodeName.toUpperCase()&&n[s].href){e=n[s];break}for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;if(e&&"A"===e.nodeName.toUpperCase()){var i="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name;if(!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")){var r=e.getAttribute("href");if((this._hashbang||!this._samePath(e)||!e.hash&&"#"!==r)&&!(r&&r.indexOf("mailto:")>-1)&&!(i?e.target.baseVal:e.target)&&(i||this.sameOrigin(e.href))){var o=i?e.href.baseVal:e.pathname+e.search+(e.hash||"");o="/"!==o[0]?"/"+o:o,I&&o.match(/^\/[a-zA-Z]:\//)&&(o=o.replace(/^\/[a-zA-Z]:\//,"/"));var a=o,c=this._getBase();0===o.indexOf(c)&&(o=o.substr(c.length)),this._hashbang&&(o=o.replace("#!","")),(!c||a!==o||_&&"file:"===this._window.location.protocol)&&(t.preventDefault(),this.show(a))}}}}},S.prototype._onpopstate=(w=!1,E?(b&&"complete"===document.readyState?w=!0:window.addEventListener("load",(function(){setTimeout((function(){w=!0}),0)})),function(t){if(w){var e=this;if(t.state){var n=t.state.path;e.replace(n,t.state)}else if(_){var s=e._window.location;e.show(s.pathname+s.search+s.hash,void 0,void 0,!1)}}}):function(){}),S.prototype._which=function(t){return null==(t=t||E&&this._window.event).which?t.button:t.which},S.prototype._toURL=function(t){var e=this._window;if("function"==typeof URL&&_)return new URL(t,e.location.toString());if(b){var n=e.document.createElement("a");return n.href=t,n}},S.prototype.sameOrigin=function(t){if(!t||!_)return!1;var e=this._toURL(t),n=this._window.location;return n.protocol===e.protocol&&n.hostname===e.hostname&&(n.port===e.port||""===n.port&&(80==e.port||443==e.port))},S.prototype._samePath=function(t){if(!_)return!1;var e=this._window.location;return t.pathname===e.pathname&&t.search===e.search},S.prototype._decodeURLEncodedURIComponent=function(t){return"string"!=typeof t?t:this._decodeURLComponents?decodeURIComponent(t.replace(/\+/g," ")):t},x.prototype.pushState=function(){var t=this.page,e=t._window,n=t._hashbang;t.len++,T&&e.history.pushState(this.state,this.title,n&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},x.prototype.save=function(){var t=this.page;T&&t._window.history.replaceState(this.state,this.title,t._hashbang&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},L.prototype.middleware=function(t){var e=this;return function(n,s){if(e.match(n.path,n.params))return n.routePath=e.path,t(n,s);s()}},L.prototype.match=function(t,e){var n=this.keys,s=t.indexOf("?"),i=~s?t.slice(0,s):t,r=this.regexp.exec(decodeURIComponent(i));if(!r)return!1;delete e[0];for(var o=1,a=r.length;o<a;++o){var c=n[o-1],h=this.page._decodeURLEncodedURIComponent(r[o]);void 0===h&&hasOwnProperty.call(e,c.name)||(e[c.name]=h)}return!0};var R=A(),O=R,M=R;return O.default=M,O}()}));
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const q=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&s+1<t.length&&56320==(64512&t.charCodeAt(s+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++s)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},H={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let e=0;e<t.length;e+=3){const i=t[e],r=e+1<t.length,o=r?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,h=i>>2,u=(3&i)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(l=64)),s.push(n[h],n[u],n[l],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(q(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((31&i)<<6|63&r)}else if(i>239&&i<365){const r=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[s++]=String.fromCharCode(55296+(r>>10)),e[s++]=String.fromCharCode(56320+(1023&r))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((15&i)<<12|(63&r)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let e=0;e<t.length;){const i=n[t.charAt(e++)],r=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==i||null==r||null==o||null==a)throw Error();const c=i<<2|r>>4;if(s.push(c),64!==o){const t=r<<4&240|o>>2;if(s.push(t),64!==a){const t=o<<6&192|a;s.push(t)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},K=function(t){return function(t){const e=q(t);return H.encodeByteArray(e,!0)}(t).replace(/\./g,"")};
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const z=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,G=()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&function(t){try{return H.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null}(t[1]);return e&&JSON.parse(e)},Q=()=>{try{return z()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const t=process.env.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||G()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},W=t=>{const e=(t=>{var e,n;return null===(n=null===(e=Q())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),s]:[e.substring(0,n),s]};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Y{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class X extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,X.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,J.prototype.create)}}class J{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],r=i?function(t,e){return t.replace(Z,((t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${r} (${s}).`;return new X(s,o,n)}}const Z=/\{\$([^}]+)}/g;function tt(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const n=t[i],r=e[i];if(et(n)&&et(r)){if(!tt(n,r))return!1}else if(n!==r)return!1}for(const t of s)if(!n.includes(t))return!1;return!0}function et(t){return null!==t&&"object"==typeof t}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function nt(t){return t&&t._delegate?t._delegate:t}class st{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const it="[DEFAULT]";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class rt{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new Y;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),s=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(s)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t))try{this.getOrInitializeService({instanceIdentifier:it})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&t(r,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(s=t,s===it?void 0:s),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var s;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:it:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class ot{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new rt(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var at;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(at||(at={}));const ct={debug:at.DEBUG,verbose:at.VERBOSE,info:at.INFO,warn:at.WARN,error:at.ERROR,silent:at.SILENT},ht=at.INFO,ut={[at.DEBUG]:"log",[at.VERBOSE]:"log",[at.INFO]:"info",[at.WARN]:"warn",[at.ERROR]:"error"},lt=(t,e,...n)=>{if(e<t.logLevel)return;const s=(new Date).toISOString(),i=ut[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${s}]  ${t.name}:`,...n)};class dt{constructor(t){this.name=t,this._logLevel=ht,this._logHandler=lt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in at))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?ct[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,at.DEBUG,...t),this._logHandler(this,at.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,at.VERBOSE,...t),this._logHandler(this,at.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,at.INFO,...t),this._logHandler(this,at.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,at.WARN,...t),this._logHandler(this,at.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,at.ERROR,...t),this._logHandler(this,at.ERROR,...t)}}let ft,pt;const gt=new WeakMap,mt=new WeakMap,yt=new WeakMap,vt=new WeakMap,wt=new WeakMap;let bt={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return mt.get(t);if("objectStoreNames"===e)return t.objectStoreNames||yt.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return It(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function Et(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(pt||(pt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(Ct(this),e),It(gt.get(this))}:function(...e){return It(t.apply(Ct(this),e))}:function(e,...n){const s=t.call(Ct(this),e,...n);return yt.set(s,e.sort?e.sort():[e]),It(s)}}function Tt(t){return"function"==typeof t?Et(t):(t instanceof IDBTransaction&&function(t){if(mt.has(t))return;const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",r),t.removeEventListener("abort",r)},i=()=>{e(),s()},r=()=>{n(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",r),t.addEventListener("abort",r)}));mt.set(t,e)}(t),e=t,(ft||(ft=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,bt):t);var e}function It(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",r)},i=()=>{e(It(t.result)),s()},r=()=>{n(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&gt.set(e,t)})).catch((()=>{})),wt.set(e,t),e}(t);if(vt.has(t))return vt.get(t);const e=Tt(t);return e!==t&&(vt.set(t,e),wt.set(e,t)),e}const Ct=t=>wt.get(t);const _t=["get","getKey","getAll","getAllKeys","count"],St=["put","add","delete","clear"],At=new Map;function kt(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(At.get(e))return At.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=St.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!i&&!_t.includes(n))return;const r=async function(t,...e){const r=this.transaction(t,i?"readwrite":"readonly");let o=r.store;return s&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&r.done]))[0]};return At.set(e,r),r}bt=(t=>({...t,get:(e,n,s)=>kt(e,n)||t.get(e,n,s),has:(e,n)=>!!kt(e,n)||t.has(e,n)}))(bt);
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Dt{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const Nt="@firebase/app",xt="0.8.4",Lt=new dt("@firebase/app"),Rt="[DEFAULT]",Ot={[Nt]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Mt=new Map,Pt=new Map;function Ut(t,e){try{t.container.addComponent(e)}catch(n){Lt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vt(t){const e=t.name;if(Pt.has(e))return Lt.debug(`There were multiple attempts to register component ${e}.`),!1;Pt.set(e,t);for(const e of Mt.values())Ut(e,t);return!0}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Ft=new J("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Bt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new st("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function $t(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const s=Object.assign({name:Rt,automaticDataCollectionEnabled:!1},e),i=s.name;if("string"!=typeof i||!i)throw Ft.create("bad-app-name",{appName:String(i)});if(n||(n=(()=>{var t;return null===(t=Q())||void 0===t?void 0:t.config})()),!n)throw Ft.create("no-options");const r=Mt.get(i);if(r){if(tt(n,r.options)&&tt(s,r.config))return r;throw Ft.create("duplicate-app",{appName:i})}const o=new ot(i);for(const t of Pt.values())o.addComponent(t);const a=new Bt(n,s,o);return Mt.set(i,a),a}function jt(t,e,n){var s;let i=null!==(s=Ot[t])&&void 0!==s?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${i}" with version "${e}":`];return r&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Lt.warn(t.join(" "))}Vt(new st(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const qt="firebase-heartbeat-store";let Ht=null;function Kt(){return Ht||(Ht=function(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=It(o);return s&&o.addEventListener("upgradeneeded",(t=>{s(It(o.result),t.oldVersion,t.newVersion,It(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{r&&t.addEventListener("close",(()=>r())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(qt)}}).catch((t=>{throw Ft.create("idb-open",{originalErrorMessage:t.message})}))),Ht}async function zt(t,e){var n;try{const n=(await Kt()).transaction(qt,"readwrite"),s=n.objectStore(qt);return await s.put(e,Gt(t)),n.done}catch(t){if(t instanceof X)Lt.warn(t.message);else{const e=Ft.create("idb-set",{originalErrorMessage:null===(n=t)||void 0===n?void 0:n.message});Lt.warn(e.message)}}}function Gt(t){return`${t.name}!${t.options.appId}`}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Qt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Yt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Wt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Wt(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let s=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Xt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Xt(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}(this._heartbeatsCache.heartbeats),s=K(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Wt(){return(new Date).toISOString().substring(0,10)}class Yt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){var e;try{return(await Kt()).transaction(qt).objectStore(qt).get(Gt(t))}catch(t){if(t instanceof X)Lt.warn(t.message);else{const n=Ft.create("idb-get",{originalErrorMessage:null===(e=t)||void 0===e?void 0:e.message});Lt.warn(n.message)}}}(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return zt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return zt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Xt(t){return K(JSON.stringify({version:2,heartbeats:t})).length}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Jt;Jt="",Vt(new st("platform-logger",(t=>new Dt(t)),"PRIVATE")),Vt(new st("heartbeat",(t=>new Qt(t)),"PRIVATE")),jt(Nt,xt,Jt),jt(Nt,xt,"esm2017"),jt("fire-js","");
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
jt("firebase","9.14.0","app");var Zt,te="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},ee=ee||{},ne=te||self;function se(){}function ie(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function re(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var oe="closure_uid_"+(1e9*Math.random()>>>0),ae=0;function ce(t,e,n){return t.call.apply(t.bind,arguments)}function he(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function ue(t,e,n){return(ue=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ce:he).apply(null,arguments)}function le(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function de(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function fe(){this.s=this.s,this.o=this.o}fe.prototype.s=!1,fe.prototype.na=function(){var t;!this.s&&(this.s=!0,this.M(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,oe)&&t[oe]||(t[oe]=++ae))},fe.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const pe=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ge(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function me(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(ie(n)){const e=t.length||0,s=n.length||0;t.length=e+s;for(let i=0;i<s;i++)t[e+i]=n[i]}else t.push(n)}}function ye(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ye.prototype.h=function(){this.defaultPrevented=!0};var ve=function(){if(!ne.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ne.addEventListener("test",se,e),ne.removeEventListener("test",se,e)}catch(t){}return t}();function we(t){return/^[\s\xa0]*$/.test(t)}var be=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ee(t,e){return t<e?-1:t>e?1:0}function Te(){var t=ne.navigator;return t&&(t=t.userAgent)?t:""}function Ie(t){return-1!=Te().indexOf(t)}function Ce(t){return Ce[" "](t),t}Ce[" "]=se;var _e,Se,Ae=Ie("Opera"),ke=Ie("Trident")||Ie("MSIE"),De=Ie("Edge"),Ne=De||ke,xe=Ie("Gecko")&&!(-1!=Te().toLowerCase().indexOf("webkit")&&!Ie("Edge"))&&!(Ie("Trident")||Ie("MSIE"))&&!Ie("Edge"),Le=-1!=Te().toLowerCase().indexOf("webkit")&&!Ie("Edge");function Re(){var t=ne.document;return t?t.documentMode:void 0}t:{var Oe="",Me=(Se=Te(),xe?/rv:([^\);]+)(\)|;)/.exec(Se):De?/Edge\/([\d\.]+)/.exec(Se):ke?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Se):Le?/WebKit\/(\S+)/.exec(Se):Ae?/(?:Version)[ \/]?(\S+)/.exec(Se):void 0);if(Me&&(Oe=Me?Me[1]:""),ke){var Pe=Re();if(null!=Pe&&Pe>parseFloat(Oe)){_e=String(Pe);break t}}_e=Oe}var Ue,Ve={};function Fe(){return function(t){var e=Ve;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=be(String(_e)).split("."),n=be("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==i[0].length&&0==r[0].length)break;t=Ee(0==i[1].length?0:parseInt(i[1],10),0==r[1].length?0:parseInt(r[1],10))||Ee(0==i[2].length,0==r[2].length)||Ee(i[2],r[2]),i=i[3],r=r[3]}while(0==t)}return 0<=t}))}if(ne.document&&ke){var Be=Re();Ue=Be||(parseInt(_e,10)||void 0)}else Ue=void 0;var $e=Ue;function je(t,e){if(ye.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(xe){t:{try{Ce(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:qe[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&je.X.h.call(this)}}de(je,ye);var qe={2:"touch",3:"pen",4:"mouse"};je.prototype.h=function(){je.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var He="closure_listenable_"+(1e6*Math.random()|0),Ke=0;function ze(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++Ke,this.ba=this.ea=!1}function Ge(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Qe(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function We(t){const e={};for(const n in t)e[n]=t[n];return e}const Ye="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Xe(t,e){let n,s;for(let e=1;e<arguments.length;e++){for(n in s=arguments[e],s)t[n]=s[n];for(let e=0;e<Ye.length;e++)n=Ye[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Je(t){this.src=t,this.g={},this.h=0}function Ze(t,e){var n=e.type;if(n in t.g){var s,i=t.g[n],r=pe(i,e);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(Ge(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function tn(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}Je.prototype.add=function(t,e,n,s,i){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=tn(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):((e=new ze(e,this.src,r,!!s,i)).ea=n,t.push(e)),e};var en="closure_lm_"+(1e6*Math.random()|0),nn={};function sn(t,e,n,s,i){if(s&&s.once)return on(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)sn(t,e[r],n,s,i);return null}return n=fn(n),t&&t[He]?t.N(e,n,re(s)?!!s.capture:!!s,i):rn(t,e,n,!1,s,i)}function rn(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=re(i)?!!i.capture:!!i,a=ln(t);if(a||(t[en]=a=new Je(t)),(n=a.add(e,n,s,o,r)).proxy)return n;if(s=function(){function t(n){return e.call(t.src,t.listener,n)}const e=un;return t}(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)ve||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(hn(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function on(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)on(t,e[r],n,s,i);return null}return n=fn(n),t&&t[He]?t.O(e,n,re(s)?!!s.capture:!!s,i):rn(t,e,n,!0,s,i)}function an(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)an(t,e[r],n,s,i);else s=re(s)?!!s.capture:!!s,n=fn(n),t&&t[He]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=tn(r=t.g[e],n,s,i))&&(Ge(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=ln(t))&&(e=t.g[e.toString()],t=-1,e&&(t=tn(e,n,s,i)),(n=-1<t?e[t]:null)&&cn(n))}function cn(t){if("number"!=typeof t&&t&&!t.ba){var e=t.src;if(e&&e[He])Ze(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(hn(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=ln(e))?(Ze(n,t),0==n.h&&(n.src=null,e[en]=null)):Ge(t)}}}function hn(t){return t in nn?nn[t]:nn[t]="on"+t}function un(t,e){if(t.ba)t=!0;else{e=new je(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&cn(t),t=n.call(s,e)}return t}function ln(t){return(t=t[en])instanceof Je?t:null}var dn="__closure_events_fn_"+(1e9*Math.random()>>>0);function fn(t){return"function"==typeof t?t:(t[dn]||(t[dn]=function(e){return t.handleEvent(e)}),t[dn])}function pn(){fe.call(this),this.i=new Je(this),this.P=this,this.I=null}function gn(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"==typeof e)e=new ye(e,t);else if(e instanceof ye)e.target=e.target||t;else{var i=e;Xe(e=new ye(s,t),i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=mn(o,s,!0,e)&&i}if(i=mn(o=e.g=t,s,!0,e)&&i,i=mn(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)i=mn(o=e.g=n[r],s,!1,e)&&i}function mn(t,e,n,s){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Ze(t.i,o),i=!1!==a.call(c,s)&&i}}return i&&!s.defaultPrevented}de(pn,fe),pn.prototype[He]=!0,pn.prototype.removeEventListener=function(t,e,n,s){an(this,t,e,n,s)},pn.prototype.M=function(){if(pn.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Ge(n[s]);delete e.g[t],e.h--}}this.I=null},pn.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},pn.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var yn=ne.JSON.stringify;function vn(){var t=_n;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var wn,bn=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new En),(t=>t.reset()));class En{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Tn(t){ne.setTimeout((()=>{throw t}),0)}function In(t,e){wn||function(){var t=ne.Promise.resolve(void 0);wn=function(){t.then(Sn)}}(),Cn||(wn(),Cn=!0),_n.add(t,e)}var Cn=!1,_n=new class{constructor(){this.h=this.g=null}add(t,e){const n=bn.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function Sn(){for(var t;t=vn();){try{t.h.call(t.g)}catch(t){Tn(t)}var e=bn;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Cn=!1}function An(t,e){pn.call(this),this.h=t||1,this.g=e||ne,this.j=ue(this.lb,this),this.l=Date.now()}function kn(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function Dn(t,e,n){if("function"==typeof t)n&&(t=ue(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=ue(t.handleEvent,t)}return 2147483647<Number(e)?-1:ne.setTimeout(t,e||0)}function Nn(t){t.g=Dn((()=>{t.g=null,t.i&&(t.i=!1,Nn(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}de(An,pn),(Zt=An.prototype).ca=!1,Zt.R=null,Zt.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),gn(this,"tick"),this.ca&&(kn(this),this.start()))}},Zt.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Zt.M=function(){An.X.M.call(this),kn(this),delete this.g};class xn extends fe{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Nn(this)}M(){super.M(),this.g&&(ne.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ln(t){fe.call(this),this.h=t,this.g={}}de(Ln,fe);var Rn=[];function On(t,e,n,s){Array.isArray(n)||(n&&(Rn[0]=n.toString()),n=Rn);for(var i=0;i<n.length;i++){var r=sn(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Mn(t){Qe(t.g,(function(t,e){this.g.hasOwnProperty(e)&&cn(t)}),t),t.g={}}function Pn(){this.g=!0}function Un(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return yn(n)}catch(t){return e}}(t,n)+(s?" "+s:"")}))}Ln.prototype.M=function(){Ln.X.M.call(this),Mn(this)},Ln.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Pn.prototype.Aa=function(){this.g=!1},Pn.prototype.info=function(){};var Vn={},Fn=null;function Bn(){return Fn=Fn||new pn}function $n(t){ye.call(this,Vn.Pa,t)}function jn(t){const e=Bn();gn(e,new $n(e))}function qn(t,e){ye.call(this,Vn.STAT_EVENT,t),this.stat=e}function Hn(t){const e=Bn();gn(e,new qn(e,t))}function Kn(t,e){ye.call(this,Vn.Qa,t),this.size=e}function zn(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return ne.setTimeout((function(){t()}),e)}Vn.Pa="serverreachability",de($n,ye),Vn.STAT_EVENT="statevent",de(qn,ye),Vn.Qa="timingevent",de(Kn,ye);var Gn={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Qn={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Wn(){}function Yn(t){return t.h||(t.h=t.i())}function Xn(){}Wn.prototype.h=null;var Jn,Zn={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ts(){ye.call(this,"d")}function es(){ye.call(this,"c")}function ns(){}function ss(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Ln(this),this.O=rs,t=Ne?125:void 0,this.T=new An(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new is}function is(){this.i=null,this.g="",this.h=!1}de(ts,ye),de(es,ye),de(ns,Wn),ns.prototype.g=function(){return new XMLHttpRequest},ns.prototype.i=function(){return{}},Jn=new ns;var rs=45e3,os={},as={};function cs(t,e,n){t.K=1,t.v=As(Ts(e)),t.s=n,t.P=!0,hs(t,null)}function hs(t,e){t.F=Date.now(),fs(t),t.A=Ts(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Bs(n.i,"t",s),t.C=0,n=t.l.H,t.h=new is,t.g=Fi(t.l,n?e:null,!t.s),0<t.N&&(t.L=new xn(ue(t.La,t,t.g),t.N)),On(t.S,t.g,"readystatechange",t.ib),e=t.H?We(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),jn(),function(t,e,n,s,i,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var h=a[c].split("=");if(1<h.length){var u=h[0];h=h[1];var l=u.split("_");o=2<=l.length&&"type"==l[1]?o+(u+"=")+h+"&":o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.U,t.s)}function us(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function ls(t,e,n){let s,i=!0;for(;!t.I&&t.C<n.length;){if(s=ds(t,n),s==as){4==e&&(t.o=4,Hn(14),i=!1),Un(t.j,t.m,null,"[Incomplete Response]");break}if(s==os){t.o=4,Hn(15),Un(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Un(t.j,t.m,s,null),vs(t,s)}us(t)&&s!=as&&s!=os&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Hn(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,(e=t.l).g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),xi(e),e.K=!0,Hn(11))):(Un(t.j,t.m,n,"[Invalid Chunked Response]"),ys(t),ms(t))}function ds(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?as:(n=Number(e.substring(n,s)),isNaN(n)?os:(s+=1)+n>e.length?as:(e=e.substr(s,n),t.C=s+n,e))}function fs(t){t.V=Date.now()+t.O,ps(t,t.O)}function ps(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=zn(ue(t.gb,t),e)}function gs(t){t.B&&(ne.clearTimeout(t.B),t.B=null)}function ms(t){0==t.l.G||t.I||Oi(t.l,t)}function ys(t){gs(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,kn(t.T),Mn(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function vs(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||zs(n.h,t)))if(!t.J&&zs(n.h,t)&&3==n.G){try{var s=n.Fa.g.parse(e)}catch(t){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Ri(n),Ii(n)}Ni(n),Hn(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=zn(ue(n.cb,n),6e3));if(1>=Ks(n.h)&&n.ja){try{n.ja()}catch(t){}n.ja=void 0}}else Pi(n,11)}else if((t.J||n.g==t)&&Ri(n),!we(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let h=i[e];if(n.T=h[0],h=h[1],2==n.G)if("c"==h[0]){n.I=h[1],n.ka=h[2];const e=h[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const i=h[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const u=h[5];null!=u&&"number"==typeof u&&0<u&&(s=1.5*u,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.h;r.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(Gs(r,r.h),r.h=null))}if(s.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.za=t,Ss(s.F,s.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=t;if((s=n).sa=Vi(s,s.H?s.ka:null,s.V),o.J){Qs(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(gs(a),fs(a)),s.g=o}else Di(s);0<n.i.length&&_i(n)}else"stop"!=h[0]&&"close"!=h[0]||Pi(n,7);else 3==n.G&&("stop"==h[0]||"close"==h[0]?"stop"==h[0]?Pi(n,7):Ti(n):"noop"!=h[0]&&n.l&&n.l.wa(h),n.A=0)}jn()}catch(t){}}function ws(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(ie(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(ie(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}(t),s=function(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(ie(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}(Zt=ss.prototype).setTimeout=function(t){this.O=t},Zt.ib=function(t){t=t.target;const e=this.L;e&&3==mi(t)?e.l():this.La(t)},Zt.La=function(t){try{if(t==this.g)t:{const u=mi(this.g);var e=this.g.Ea();this.g.aa();if(!(3>u)&&(3!=u||Ne||this.g&&(this.h.h||this.g.fa()||yi(this.g)))){this.I||4!=u||7==e||jn(),gs(this);var n=this.g.aa();this.Y=n;e:if(us(this)){var s=yi(this.g);t="";var i=s.length,r=4==mi(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ys(this),ms(this);var o="";break e}this.h.i=new ne.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(t,e,n,s,i,r,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!we(a)){var h=a;break e}}h=null}if(!(n=h)){this.i=!1,this.o=3,Hn(12),ys(this),ms(this);break t}Un(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,vs(this,n)}this.P?(ls(this,u,o),Ne&&this.i&&3==u&&(On(this.S,this.T,"tick",this.hb),this.T.start())):(Un(this.j,this.m,o,null),vs(this,o)),4==u&&ys(this),this.i&&!this.I&&(4==u?Oi(this.l,this):(this.i=!1,fs(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Hn(12)):(this.o=0,Hn(13)),ys(this),ms(this)}}}catch(t){}},Zt.hb=function(){if(this.g){var t=mi(this.g),e=this.g.fa();this.C<e.length&&(gs(this),ls(this,t,e),this.i&&4!=t&&fs(this))}},Zt.cancel=function(){this.I=!0,ys(this)},Zt.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(jn(),Hn(17)),ys(this),this.o=2,ms(this)):ps(this,this.V-t)};var bs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Es(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Es){this.h=void 0!==e?e:t.h,Is(this,t.j),this.s=t.s,this.g=t.g,Cs(this,t.m),this.l=t.l,e=t.i;var n=new Ps;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),_s(this,n),this.o=t.o}else t&&(n=String(t).match(bs))?(this.h=!!e,Is(this,n[1]||"",!0),this.s=ks(n[2]||""),this.g=ks(n[3]||"",!0),Cs(this,n[4]),this.l=ks(n[5]||"",!0),_s(this,n[6]||"",!0),this.o=ks(n[7]||"")):(this.h=!!e,this.i=new Ps(null,this.h))}function Ts(t){return new Es(t)}function Is(t,e,n){t.j=n?ks(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Cs(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function _s(t,e,n){e instanceof Ps?(t.i=e,function(t,e){e&&!t.j&&(Us(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Vs(this,e),Bs(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Ds(e,Os)),t.i=new Ps(e,t.h))}function Ss(t,e,n){t.i.set(e,n)}function As(t){return Ss(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ks(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ds(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Ns),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ns(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Es.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ds(e,xs,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Ds(e,xs,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ds(n,"/"==n.charAt(0)?Rs:Ls,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ds(n,Ms)),t.join("")};var xs=/[#\/\?@]/g,Ls=/[#\?:]/g,Rs=/[#\?]/g,Os=/[#\?@]/g,Ms=/#/g;function Ps(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Us(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Vs(t,e){Us(t),e=$s(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Fs(t,e){return Us(t),e=$s(t,e),t.g.has(e)}function Bs(t,e,n){Vs(t,e),0<n.length&&(t.i=null,t.g.set($s(t,e),ge(n)),t.h+=n.length)}function $s(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Zt=Ps.prototype).add=function(t,e){Us(this),this.i=null,t=$s(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Zt.forEach=function(t,e){Us(this),this.g.forEach((function(n,s){n.forEach((function(n){t.call(e,n,s,this)}),this)}),this)},Zt.oa=function(){Us(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let t=0;t<i.length;t++)n.push(e[s])}return n},Zt.W=function(t){Us(this);let e=[];if("string"==typeof t)Fs(this,t)&&(e=e.concat(this.g.get($s(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},Zt.set=function(t,e){return Us(this),this.i=null,Fs(this,t=$s(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Zt.get=function(t,e){return t&&0<(t=this.W(t)).length?String(t[0]):e},Zt.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;""!==o[s]&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function js(t){this.l=t||qs,ne.PerformanceNavigationTiming?t=0<(t=ne.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(ne.g&&ne.g.Ga&&ne.g.Ga()&&ne.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var qs=10;function Hs(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Ks(t){return t.h?1:t.g?t.g.size:0}function zs(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Gs(t,e){t.g?t.g.add(e):t.h=e}function Qs(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Ws(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ge(t.i)}function Ys(){}function Xs(){this.g=new Ys}function Js(t,e,n){const s=n||"";try{ws(t,(function(t,n){let i=t;re(t)&&(i=yn(t)),e.push(s+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(s+"type="+encodeURIComponent("_badmap")),t}}function Zs(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch(t){}}function ti(t){this.l=t.ac||null,this.j=t.jb||!1}function ei(t,e){pn.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ni,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}js.prototype.cancel=function(){if(this.i=Ws(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Ys.prototype.stringify=function(t){return ne.JSON.stringify(t,void 0)},Ys.prototype.parse=function(t){return ne.JSON.parse(t,void 0)},de(ti,Wn),ti.prototype.g=function(){return new ei(this.l,this.j)},ti.prototype.i=function(t){return function(){return t}}({}),de(ei,pn);var ni=0;function si(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function ii(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ri(t)}function ri(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Zt=ei.prototype).open=function(t,e){if(this.readyState!=ni)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ri(this)},Zt.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ne).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},Zt.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ii(this)),this.readyState=ni},Zt.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ri(this)),this.g&&(this.readyState=3,ri(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==ne.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;si(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},Zt.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ii(this):ri(this),3==this.readyState&&si(this)}},Zt.Va=function(t){this.g&&(this.response=this.responseText=t,ii(this))},Zt.Ua=function(t){this.g&&(this.response=t,ii(this))},Zt.ga=function(){this.g&&ii(this)},Zt.setRequestHeader=function(t,e){this.v.append(t,e)},Zt.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Zt.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(ei.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var oi=ne.JSON.parse;function ai(t){pn.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ci,this.K=this.L=!1}de(ai,pn);var ci="",hi=/^https?$/i,ui=["POST","PUT"];function li(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,di(t),pi(t)}function di(t){t.D||(t.D=!0,gn(t,"complete"),gn(t,"error"))}function fi(t){if(t.h&&void 0!==ee&&(!t.C[1]||4!=mi(t)||2!=t.aa()))if(t.v&&4==mi(t))Dn(t.Ha,0,t);else if(gn(t,"readystatechange"),4==mi(t)){t.h=!1;try{const a=t.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===a){var i=String(t.H).match(bs)[1]||null;if(!i&&ne.self&&ne.self.location){var r=ne.self.location.protocol;i=r.substr(0,r.length-1)}s=!hi.test(i?i.toLowerCase():"")}n=s}if(n)gn(t,"complete"),gn(t,"success");else{t.m=6;try{var o=2<mi(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.aa()+"]",di(t)}}finally{pi(t)}}}function pi(t,e){if(t.g){gi(t);const n=t.g,s=t.C[0]?se:null;t.g=null,t.C=null,e||gn(t,"ready");try{n.onreadystatechange=s}catch(t){}}}function gi(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ne.clearTimeout(t.A),t.A=null)}function mi(t){return t.g?t.g.readyState:0}function yi(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ci:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function vi(t){let e="";return Qe(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function wi(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=vi(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Ss(t,e,n))}function bi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ei(t){this.Ca=0,this.i=[],this.j=new Pn,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=bi("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=bi("baseRetryDelayMs",5e3,t),this.bb=bi("retryDelaySeedMs",1e4,t),this.$a=bi("forwardChannelMaxRetries",2,t),this.ta=bi("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new js(t&&t.concurrentRequestLimit),this.Fa=new Xs,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Ti(t){if(Ci(t),3==t.G){var e=t.U++,n=Ts(t.F);Ss(n,"SID",t.I),Ss(n,"RID",e),Ss(n,"TYPE","terminate"),Ai(t,n),(e=new ss(t,t.j,e,void 0)).K=2,e.v=As(Ts(n)),n=!1,ne.navigator&&ne.navigator.sendBeacon&&(n=ne.navigator.sendBeacon(e.v.toString(),"")),!n&&ne.Image&&((new Image).src=e.v,n=!0),n||(e.g=Fi(e.l,null),e.g.da(e.v)),e.F=Date.now(),fs(e)}Ui(t)}function Ii(t){t.g&&(xi(t),t.g.cancel(),t.g=null)}function Ci(t){Ii(t),t.u&&(ne.clearTimeout(t.u),t.u=null),Ri(t),t.h.cancel(),t.m&&("number"==typeof t.m&&ne.clearTimeout(t.m),t.m=null)}function _i(t){Hs(t.h)||t.m||(t.m=!0,In(t.Ja,t),t.C=0)}function Si(t,e){var n;n=e?e.m:t.U++;const s=Ts(t.F);Ss(s,"SID",t.I),Ss(s,"RID",n),Ss(s,"AID",t.T),Ai(t,s),t.o&&t.s&&wi(s,t.o,t.s),n=new ss(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=ki(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Gs(t.h,n),cs(n,s,e)}function Ai(t,e){t.ia&&Qe(t.ia,(function(t,n){Ss(e,n,t)})),t.l&&ws({},(function(t,n){Ss(e,n,t)}))}function ki(t,e,n){n=Math.min(t.i.length,n);var s=t.l?ue(t.l.Ra,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),r=!1;else try{Js(a,t,"req"+n+"_")}catch(t){s&&s(a)}}if(r){s=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,s}function Di(t){t.g||t.u||(t.Z=1,In(t.Ia,t),t.A=0)}function Ni(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=zn(ue(t.Ia,t),Mi(t,t.A)),t.A++,!0)}function xi(t){null!=t.B&&(ne.clearTimeout(t.B),t.B=null)}function Li(t){t.g=new ss(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=Ts(t.sa);Ss(e,"RID","rpc"),Ss(e,"SID",t.I),Ss(e,"CI",t.L?"0":"1"),Ss(e,"AID",t.T),Ss(e,"TYPE","xmlhttp"),Ai(t,e),t.o&&t.s&&wi(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=As(Ts(e)),n.s=null,n.P=!0,hs(n,t)}function Ri(t){null!=t.v&&(ne.clearTimeout(t.v),t.v=null)}function Oi(t,e){var n=null;if(t.g==e){Ri(t),xi(t),t.g=null;var s=2}else{if(!zs(t.h,e))return;n=e.D,Qs(t.h,e),s=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;gn(s=Bn(),new Kn(s,n)),_i(t)}else Di(t);else if(3==(i=e.o)||0==i&&0<t.pa||!(1==s&&function(t,e){return!(Ks(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.C>=(t.Za?0:t.$a)||(t.m=zn(ue(t.Ja,t,e),Mi(t,t.C)),t.C++,0)))}(t,e)||2==s&&Ni(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Pi(t,5);break;case 4:Pi(t,10);break;case 3:Pi(t,6);break;default:Pi(t,2)}}function Mi(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Pi(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var s=ue(t.kb,t);n||(n=new Es("//www.google.com/images/cleardot.gif"),ne.location&&"http"==ne.location.protocol||Is(n,"https"),As(n)),function(t,e){const n=new Pn;if(ne.Image){const s=new Image;s.onload=le(Zs,n,s,"TestLoadImage: loaded",!0,e),s.onerror=le(Zs,n,s,"TestLoadImage: error",!1,e),s.onabort=le(Zs,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=le(Zs,n,s,"TestLoadImage: timeout",!1,e),ne.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}(n.toString(),s)}else Hn(2);t.G=0,t.l&&t.l.va(e),Ui(t),Ci(t)}function Ui(t){if(t.G=0,t.la=[],t.l){const e=Ws(t.h);0==e.length&&0==t.i.length||(me(t.la,e),me(t.la,t.i),t.h.i.length=0,ge(t.i),t.i.length=0),t.l.ua()}}function Vi(t,e,n){var s=n instanceof Es?Ts(n):new Es(n,void 0);if(""!=s.g)e&&(s.g=e+"."+s.g),Cs(s,s.m);else{var i=ne.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Es(null,void 0);s&&Is(r,s),e&&(r.g=e),i&&Cs(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&Ss(s,n,e),Ss(s,"VER",t.ma),Ai(t,s),s}function Fi(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Da&&!t.ra?new ai(new ti({jb:!0})):new ai(t.ra)).Ka(t.H),e}function Bi(){}function $i(){if(ke&&!(10<=Number($e)))throw Error("Environmental error: no available transport.")}function ji(t,e){pn.call(this),this.g=new Ei(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!we(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!we(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Ki(this)}function qi(t){ts.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Hi(){es.call(this),this.status=1}function Ki(t){this.g=t}(Zt=ai.prototype).Ka=function(t){this.L=t},Zt.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Jn.g(),this.C=this.u?Yn(this.u):Yn(Jn),this.g.onreadystatechange=ue(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void li(this,t)}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else{if("function"!=typeof s.keys||"function"!=typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const t of s.keys())n.set(t,s.get(t))}s=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=ne.FormData&&t instanceof ne.FormData,!(0<=pe(ui,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{gi(this),0<this.B&&((this.K=function(t){return ke&&Fe()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ue(this.qa,this)):this.A=Dn(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){li(this,t)}},Zt.qa=function(){void 0!==ee&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,gn(this,"timeout"),this.abort(8))},Zt.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,gn(this,"complete"),gn(this,"abort"),pi(this))},Zt.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),pi(this,!0)),ai.X.M.call(this)},Zt.Ha=function(){this.s||(this.F||this.v||this.l?fi(this):this.fb())},Zt.fb=function(){fi(this)},Zt.aa=function(){try{return 2<mi(this)?this.g.status:-1}catch(t){return-1}},Zt.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Zt.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),oi(e)}},Zt.Ea=function(){return this.m},Zt.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(Zt=Ei.prototype).ma=8,Zt.G=1,Zt.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new ss(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=We(r),Xe(r,this.S)):r=this.S),null!==this.o||this.N||(i.H=r,r=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var s=this.i[n];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=ki(this,i,e),Ss(n=Ts(this.F),"RID",t),Ss(n,"CVER",22),this.D&&Ss(n,"X-HTTP-Session-Id",this.D),Ai(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(vi(r)))+"&"+e:this.o&&wi(n,this.o,r)),Gs(this.h,i),this.Ya&&Ss(n,"TYPE","init"),this.O?(Ss(n,"$req",e),Ss(n,"SID","null"),i.Z=!0,cs(i,n,null)):cs(i,n,e),this.G=2}}else 3==this.G&&(t?Si(this,t):0==this.i.length||Hs(this.h)||Si(this))},Zt.Ia=function(){if(this.u=null,Li(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=zn(ue(this.eb,this),t)}},Zt.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Hn(10),Ii(this),Li(this))},Zt.cb=function(){null!=this.v&&(this.v=null,Ii(this),Ni(this),Hn(19))},Zt.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Hn(2)):(this.j.info("Failed to ping google.com"),Hn(1))},(Zt=Bi.prototype).xa=function(){},Zt.wa=function(){},Zt.va=function(){},Zt.ua=function(){},Zt.Ra=function(){},$i.prototype.g=function(t,e){return new ji(t,e)},de(ji,pn),ji.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Hn(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Vi(t,null,t.V),_i(t)},ji.prototype.close=function(){Ti(this.g)},ji.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=yn(t),t=n);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.ab++,t)),3==e.G&&_i(e)},ji.prototype.M=function(){this.g.l=null,delete this.j,Ti(this.g),delete this.g,ji.X.M.call(this)},de(qi,ts),de(Hi,es),de(Ki,Bi),Ki.prototype.xa=function(){gn(this.g,"a")},Ki.prototype.wa=function(t){gn(this.g,new qi(t))},Ki.prototype.va=function(t){gn(this.g,new Hi)},Ki.prototype.ua=function(){gn(this.g,"b")},$i.prototype.createWebChannel=$i.prototype.g,ji.prototype.send=ji.prototype.u,ji.prototype.open=ji.prototype.m,ji.prototype.close=ji.prototype.close,Gn.NO_ERROR=0,Gn.TIMEOUT=8,Gn.HTTP_ERROR=6,Qn.COMPLETE="complete",Xn.EventType=Zn,Zn.OPEN="a",Zn.CLOSE="b",Zn.ERROR="c",Zn.MESSAGE="d",pn.prototype.listen=pn.prototype.N,ai.prototype.listenOnce=ai.prototype.O,ai.prototype.getLastError=ai.prototype.Oa,ai.prototype.getLastErrorCode=ai.prototype.Ea,ai.prototype.getStatus=ai.prototype.aa,ai.prototype.getResponseJson=ai.prototype.Sa,ai.prototype.getResponseText=ai.prototype.fa,ai.prototype.send=ai.prototype.da,ai.prototype.setWithCredentials=ai.prototype.Ka;var zi=Gn,Gi=Qn,Qi=Vn,Wi=10,Yi=11,Xi=ti,Ji=Xn,Zi=ai;const tr="@firebase/firestore";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class er{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}er.UNAUTHENTICATED=new er(null),er.GOOGLE_CREDENTIALS=new er("google-credentials-uid"),er.FIRST_PARTY=new er("first-party-uid"),er.MOCK_USER=new er("mock-user");
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
let nr="9.14.0";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const sr=new dt("@firebase/firestore");function ir(){return sr.logLevel}function rr(t,...e){if(sr.logLevel<=at.DEBUG){const n=e.map(cr);sr.debug(`Firestore (${nr}): ${t}`,...n)}}function or(t,...e){if(sr.logLevel<=at.ERROR){const n=e.map(cr);sr.error(`Firestore (${nr}): ${t}`,...n)}}function ar(t,...e){if(sr.logLevel<=at.WARN){const n=e.map(cr);sr.warn(`Firestore (${nr}): ${t}`,...n)}}function cr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function hr(t="Unexpected state"){const e=`FIRESTORE (${nr}) INTERNAL ASSERTION FAILED: `+t;throw or(e),new Error(e)}function ur(t,e){t||hr()}function lr(t,e){return t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const dr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fr extends X{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class pr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class gr{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class mr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(er.UNAUTHENTICATED)))}shutdown(){}}class yr{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class vr{constructor(t){this.t=t,this.currentUser=er.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new pr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new pr,t.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{rr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(rr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new pr)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(rr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(ur("string"==typeof e.accessToken),new gr(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ur(null===t||"string"==typeof t),new er(t)}}class wr{constructor(t,e,n,s){this.h=t,this.l=e,this.m=n,this.g=s,this.type="FirstParty",this.user=er.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ur(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class br{constructor(t,e,n,s){this.h=t,this.l=e,this.m=n,this.g=s}getToken(){return Promise.resolve(new wr(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(er.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Er{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Tr{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,e){const n=t=>{null!=t.error&&rr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,rr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{rr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?s(t):rr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(ur("string"==typeof t.token),this.A=t.token,new Er(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ir(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Cr{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=Ir(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function _r(t,e){return t<e?-1:t>e?1:0}function Sr(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ar{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new fr(dr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new fr(dr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new fr(dr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new fr(dr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Ar.fromMillis(Date.now())}static fromDate(t){return Ar.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Ar(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?_r(this.nanoseconds,t.nanoseconds):_r(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class kr{constructor(t){this.timestamp=t}static fromTimestamp(t){return new kr(t)}static min(){return new kr(new Ar(0,0))}static max(){return new kr(new Ar(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Dr{constructor(t,e,n){void 0===e?e=0:e>t.length&&hr(),void 0===n?n=t.length-e:n>t.length-e&&hr(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Dr.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Dr?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Nr extends Dr{construct(t,e,n){return new Nr(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new fr(dr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Nr(e)}static emptyPath(){return new Nr([])}}const xr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Lr extends Dr{construct(t,e,n){return new Lr(t,e,n)}static isValidIdentifier(t){return xr.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Lr.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Lr(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new fr(dr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new fr(dr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new fr(dr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new fr(dr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Lr(e)}static emptyPath(){return new Lr([])}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Rr{constructor(t){this.path=t}static fromPath(t){return new Rr(Nr.fromString(t))}static fromName(t){return new Rr(Nr.fromString(t).popFirst(5))}static empty(){return new Rr(Nr.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Nr.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Nr.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Rr(new Nr(t.slice()))}}function Or(t){return new Mr(t.readTime,t.key,-1)}class Mr{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Mr(kr.min(),Rr.empty(),-1)}static max(){return new Mr(kr.max(),Rr.empty(),-1)}}function Pr(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Rr.comparator(t.documentKey,e.documentKey),0!==n?n:_r(t.largestBatchId,e.largestBatchId))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ur{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Vr(t){if(t.code!==dr.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;rr("LocalStore","Unexpectedly lost primary lease")}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Fr{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&hr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Fr(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Fr?e:Fr.resolve(e)}catch(t){return Fr.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Fr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Fr.reject(e)}static resolve(t){return new Fr(((e,n)=>{e(t)}))}static reject(t){return new Fr(((e,n)=>{n(t)}))}static waitFor(t){return new Fr(((e,n)=>{let s=0,i=0,r=!1;t.forEach((t=>{++s,t.next((()=>{++i,r&&i===s&&e()}),(t=>n(t)))})),r=!0,i===s&&e()}))}static or(t){let e=Fr.resolve(!1);for(const n of t)e=e.next((t=>t?Fr.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}static mapArray(t,e){return new Fr(((n,s)=>{const i=t.length,r=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{r[c]=t,++o,o===i&&n(r)}),(t=>s(t)))}}))}static doWhile(t,e){return new Fr(((n,s)=>{const i=()=>{!0===t()?e().next((()=>{i()}),s):n()};i()}))}}function Br(t){return"IndexedDbTransactionError"===t.name}
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class $r{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function jr(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function qr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
$r.at=-1;class Hr{constructor(t,e){this.comparator=t,this.root=e||zr.EMPTY}insert(t,e){return new Hr(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,zr.BLACK,null,null))}remove(t){return new Hr(this.comparator,this.root.remove(t,this.comparator).copy(null,null,zr.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Kr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Kr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Kr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Kr(this.root,t,this.comparator,!0)}}class Kr{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class zr{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:zr.RED,this.left=null!=s?s:zr.EMPTY,this.right=null!=i?i:zr.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new zr(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return zr.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return zr.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,zr.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,zr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw hr();if(this.right.isRed())throw hr();const t=this.left.check();if(t!==this.right.check())throw hr();return t+(this.isRed()?0:1)}}zr.EMPTY=null,zr.RED=!0,zr.BLACK=!1,zr.EMPTY=new class{constructor(){this.size=0}get key(){throw hr()}get value(){throw hr()}get color(){throw hr()}get left(){throw hr()}get right(){throw hr()}copy(t,e,n,s,i){return this}insert(t,e,n){return new zr(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Gr{constructor(t){this.comparator=t,this.data=new Hr(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Qr(this.data.getIterator())}getIteratorFrom(t){return new Qr(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Gr))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Gr(this.comparator);return e.data=t,e}}class Qr{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Wr{constructor(t){this.fields=t,t.sort(Lr.comparator)}static empty(){return new Wr([])}unionWith(t){let e=new Gr(Lr.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new Wr(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Sr(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Yr{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Yr(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Yr(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return _r(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Yr.EMPTY_BYTE_STRING=new Yr("");const Xr=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jr(t){if(ur(!!t),"string"==typeof t){let e=0;const n=Xr.exec(t);if(ur(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Zr(t.seconds),nanos:Zr(t.nanos)}}function Zr(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function to(t){return"string"==typeof t?Yr.fromBase64String(t):Yr.fromUint8Array(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function eo(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function no(t){const e=t.mapValue.fields.__previous_value__;return eo(e)?no(e):e}function so(t){const e=Jr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ar(e.seconds,e.nanos)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class io{constructor(t,e,n,s,i,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class ro{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new ro("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof ro&&t.projectId===this.projectId&&t.database===this.database}}function oo(t){return null==t}function ao(t){return 0===t&&1/t==-1/0}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const co={fields:{__type__:{stringValue:"__max__"}}};function ho(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?eo(t)?4:function(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)?9007199254740991:10:hr()}function uo(t,e){if(t===e)return!0;const n=ho(t);if(n!==ho(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return so(t).isEqual(so(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Jr(t.timestampValue),s=Jr(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return to(t.bytesValue).isEqual(to(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Zr(t.geoPointValue.latitude)===Zr(e.geoPointValue.latitude)&&Zr(t.geoPointValue.longitude)===Zr(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Zr(t.integerValue)===Zr(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Zr(t.doubleValue),s=Zr(e.doubleValue);return n===s?ao(n)===ao(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return Sr(t.arrayValue.values||[],e.arrayValue.values||[],uo);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(jr(n)!==jr(s))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===s[t]||!uo(n[t],s[t])))return!1;return!0}(t,e);default:return hr()}}function lo(t,e){return void 0!==(t.values||[]).find((t=>uo(t,e)))}function fo(t,e){if(t===e)return 0;const n=ho(t),s=ho(e);if(n!==s)return _r(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return _r(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Zr(t.integerValue||t.doubleValue),s=Zr(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return po(t.timestampValue,e.timestampValue);case 4:return po(so(t),so(e));case 5:return _r(t.stringValue,e.stringValue);case 6:return function(t,e){const n=to(t),s=to(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let t=0;t<n.length&&t<s.length;t++){const e=_r(n[t],s[t]);if(0!==e)return e}return _r(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=_r(Zr(t.latitude),Zr(e.latitude));return 0!==n?n:_r(Zr(t.longitude),Zr(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let t=0;t<n.length&&t<s.length;++t){const e=fo(n[t],s[t]);if(e)return e}return _r(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===co&&e===co)return 0;if(t===co)return 1;if(e===co)return-1;const n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let t=0;t<s.length&&t<r.length;++t){const e=_r(s[t],r[t]);if(0!==e)return e;const o=fo(n[s[t]],i[r[t]]);if(0!==o)return o}return _r(s.length,r.length)}(t.mapValue,e.mapValue);default:throw hr()}}function po(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return _r(t,e);const n=Jr(t),s=Jr(e),i=_r(n.seconds,s.seconds);return 0!==i?i:_r(n.nanos,s.nanos)}function go(t){return mo(t)}function mo(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Jr(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?to(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Rr.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=mo(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of e)s?s=!1:n+=",",n+=`${i}:${mo(t.fields[i])}`;return n+"}"}(t.mapValue):hr();var e,n}function yo(t){return!!t&&"integerValue"in t}function vo(t){return!!t&&"arrayValue"in t}function wo(t){return!!t&&"nullValue"in t}function bo(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Eo(t){return!!t&&"mapValue"in t}function To(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return qr(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=To(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=To(t.arrayValue.values[n]);return e}return Object.assign({},t)}class Io{constructor(t){this.value=t}static empty(){return new Io({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Eo(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=To(e)}setAll(t){let e=Lr.emptyPath(),n={},s=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=To(t):s.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());Eo(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return uo(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Eo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){qr(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new Io(To(this.value))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Co{constructor(t,e,n,s,i,r){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.data=i,this.documentState=r}static newInvalidDocument(t){return new Co(t,0,kr.min(),kr.min(),Io.empty(),0)}static newFoundDocument(t,e,n){return new Co(t,1,e,kr.min(),n,0)}static newNoDocument(t,e){return new Co(t,2,e,kr.min(),Io.empty(),0)}static newUnknownDocument(t,e){return new Co(t,3,e,kr.min(),Io.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Io.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Io.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=kr.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Co&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Co(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class _o{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this.ht=null}}function So(t,e=null,n=[],s=[],i=null,r=null,o=null){return new _o(t,e,n,s,i,r,o)}function Ao(t){const e=lr(t);if(null===e.ht){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+go(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),oo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>go(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>go(t))).join(",")),e.ht=t}return e.ht}function ko(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!$o(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!uo(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!qo(t.startAt,e.startAt)&&qo(t.endAt,e.endAt)}function Do(t){return Rr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class No extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.lt(t,e,n):new xo(t,e,n):"array-contains"===e?new Mo(t,n):"in"===e?new Po(t,n):"not-in"===e?new Uo(t,n):"array-contains-any"===e?new Vo(t,n):new No(t,e,n)}static lt(t,e,n){return"in"===e?new Lo(t,n):new Ro(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.ft(fo(e,this.value)):null!==e&&ho(this.value)===ho(e)&&this.ft(fo(e,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return hr()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class xo extends No{constructor(t,e,n){super(t,e,n),this.key=Rr.fromName(n.referenceValue)}matches(t){const e=Rr.comparator(t.key,this.key);return this.ft(e)}}class Lo extends No{constructor(t,e){super(t,"in",e),this.keys=Oo("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Ro extends No{constructor(t,e){super(t,"not-in",e),this.keys=Oo("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Oo(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Rr.fromName(t.referenceValue)))}class Mo extends No{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return vo(e)&&lo(e.arrayValue,this.value)}}class Po extends No{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&lo(this.value.arrayValue,e)}}class Uo extends No{constructor(t,e){super(t,"not-in",e)}matches(t){if(lo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!lo(this.value.arrayValue,e)}}class Vo extends No{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!vo(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>lo(this.value.arrayValue,t)))}}class Fo{constructor(t,e){this.position=t,this.inclusive=e}}class Bo{constructor(t,e="asc"){this.field=t,this.dir=e}}function $o(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function jo(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(s=r.field.isKeyField()?Rr.comparator(Rr.fromName(o.referenceValue),n.key):fo(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return s}function qo(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!uo(t.position[n],e.position[n]))return!1;return!0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ho{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this._t=null,this.wt=null,this.startAt,this.endAt}}function Ko(t){return new Ho(t)}function zo(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Go(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Qo(t){for(const e of t.filters)if(e.dt())return e.field;return null}function Wo(t){const e=lr(t);if(null===e._t){e._t=[];const t=Qo(e),n=Go(e);if(null!==t&&null===n)t.isKeyField()||e._t.push(new Bo(t)),e._t.push(new Bo(Lr.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e._t.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Bo(Lr.keyField(),t))}}}return e._t}function Yo(t){const e=lr(t);if(!e.wt)if("F"===e.limitType)e.wt=So(e.path,e.collectionGroup,Wo(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Wo(e)){const e="desc"===n.dir?"asc":"desc";t.push(new Bo(n.field,e))}const n=e.endAt?new Fo(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Fo(e.startAt.position,e.startAt.inclusive):null;e.wt=So(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.wt}function Xo(t,e,n){return new Ho(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Jo(t,e){return ko(Yo(t),Yo(e))&&t.limitType===e.limitType}function Zo(t){return`${Ao(Yo(t))}|lt:${t.limitType}`}function ta(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${go(e.value)}`;var e})).join(", ")}]`),oo(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>go(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>go(t))).join(",")),`Target(${e})`}(Yo(t))}; limitType=${t.limitType})`}function ea(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Rr.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const s=jo(t,e,n);return t.inclusive?s<=0:s<0}(t.startAt,Wo(t),e))&&!(t.endAt&&!function(t,e,n){const s=jo(t,e,n);return t.inclusive?s>=0:s>0}(t.endAt,Wo(t),e))}(t,e)}function na(t){return(e,n)=>{let s=!1;for(const i of Wo(t)){const t=sa(i,e,n);if(0!==t)return t;s=s||i.field.isKeyField()}return 0}}function sa(t,e,n){const s=t.field.isKeyField()?Rr.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?fo(s,i):hr()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return hr()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ia{constructor(){this._=void 0}}function ra(t,e,n){return t instanceof aa?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof ca?ha(t,e):t instanceof ua?la(t,e):function(t,e){const n=function(t,e){return t instanceof da?yo(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}(t,e),s=fa(n)+fa(t.yt);return yo(n)&&yo(t.yt)?function(t){return{integerValue:""+t}}(s):function(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ao(e)?"-0":e}}(t.It,s)}(t,e)}function oa(t,e,n){return t instanceof ca?ha(t,e):t instanceof ua?la(t,e):n}class aa extends ia{}class ca extends ia{constructor(t){super(),this.elements=t}}function ha(t,e){const n=pa(e);for(const e of t.elements)n.some((t=>uo(t,e)))||n.push(e);return{arrayValue:{values:n}}}class ua extends ia{constructor(t){super(),this.elements=t}}function la(t,e){let n=pa(e);for(const e of t.elements)n=n.filter((t=>!uo(t,e)));return{arrayValue:{values:n}}}class da extends ia{constructor(t,e){super(),this.It=t,this.yt=e}}function fa(t){return Zr(t.integerValue||t.doubleValue)}function pa(t){return vo(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}class ga{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ga}static exists(t){return new ga(void 0,t)}static updateTime(t){return new ga(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ma(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class ya{}function va(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Aa(t.key,ga.none()):new Ta(t.key,t.data,ga.none());{const n=t.data,s=Io.empty();let i=new Gr(Lr.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),i=i.add(t)}return new Ia(t.key,s,new Wr(i.toArray()),ga.none())}}function wa(t,e,n){t instanceof Ta?function(t,e,n){const s=t.value.clone(),i=_a(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof Ia?function(t,e,n){if(!ma(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=_a(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Ca(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function ba(t,e,n,s){return t instanceof Ta?function(t,e,n,s){if(!ma(t.precondition,e))return n;const i=t.value.clone(),r=Sa(t.fieldTransforms,s,e);return i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,s):t instanceof Ia?function(t,e,n,s){if(!ma(t.precondition,e))return n;const i=Sa(t.fieldTransforms,s,e),r=e.data;return r.setAll(Ca(t)),r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,s):function(t,e,n){return ma(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Ea(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Sr(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof ca&&e instanceof ca||t instanceof ua&&e instanceof ua?Sr(t.elements,e.elements,uo):t instanceof da&&e instanceof da?uo(t.yt,e.yt):t instanceof aa&&e instanceof aa}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ta extends ya{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ia extends ya{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ca(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function _a(t,e,n){const s=new Map;ur(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,oa(o,a,n[i]))}return s}function Sa(t,e,n){const s=new Map;for(const i of t){const t=i.transform,r=n.data.field(i.field);s.set(i.field,ra(t,r,e))}return s}class Aa extends ya{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ka{constructor(t){this.count=t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Da,Na;function xa(t){if(void 0===t)return or("GRPC error has no .code"),dr.UNKNOWN;switch(t){case Da.OK:return dr.OK;case Da.CANCELLED:return dr.CANCELLED;case Da.UNKNOWN:return dr.UNKNOWN;case Da.DEADLINE_EXCEEDED:return dr.DEADLINE_EXCEEDED;case Da.RESOURCE_EXHAUSTED:return dr.RESOURCE_EXHAUSTED;case Da.INTERNAL:return dr.INTERNAL;case Da.UNAVAILABLE:return dr.UNAVAILABLE;case Da.UNAUTHENTICATED:return dr.UNAUTHENTICATED;case Da.INVALID_ARGUMENT:return dr.INVALID_ARGUMENT;case Da.NOT_FOUND:return dr.NOT_FOUND;case Da.ALREADY_EXISTS:return dr.ALREADY_EXISTS;case Da.PERMISSION_DENIED:return dr.PERMISSION_DENIED;case Da.FAILED_PRECONDITION:return dr.FAILED_PRECONDITION;case Da.ABORTED:return dr.ABORTED;case Da.OUT_OF_RANGE:return dr.OUT_OF_RANGE;case Da.UNIMPLEMENTED:return dr.UNIMPLEMENTED;case Da.DATA_LOSS:return dr.DATA_LOSS;default:return hr()}}(Na=Da||(Da={}))[Na.OK=0]="OK",Na[Na.CANCELLED=1]="CANCELLED",Na[Na.UNKNOWN=2]="UNKNOWN",Na[Na.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Na[Na.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Na[Na.NOT_FOUND=5]="NOT_FOUND",Na[Na.ALREADY_EXISTS=6]="ALREADY_EXISTS",Na[Na.PERMISSION_DENIED=7]="PERMISSION_DENIED",Na[Na.UNAUTHENTICATED=16]="UNAUTHENTICATED",Na[Na.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Na[Na.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Na[Na.ABORTED=10]="ABORTED",Na[Na.OUT_OF_RANGE=11]="OUT_OF_RANGE",Na[Na.UNIMPLEMENTED=12]="UNIMPLEMENTED",Na[Na.INTERNAL=13]="INTERNAL",Na[Na.UNAVAILABLE=14]="UNAVAILABLE",Na[Na.DATA_LOSS=15]="DATA_LOSS";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class La{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,s]of n)if(this.equalsFn(e,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],t))return void(s[n]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){qr(this.inner,((e,n)=>{for(const[e,s]of n)t(e,s)}))}isEmpty(){return function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(this.inner)}size(){return this.innerSize}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ra=new Hr(Rr.comparator);function Oa(){return Ra}const Ma=new Hr(Rr.comparator);function Pa(...t){let e=Ma;for(const n of t)e=e.insert(n.key,n);return e}function Ua(t){let e=Ma;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Va(){return Ba()}function Fa(){return Ba()}function Ba(){return new La((t=>t.toString()),((t,e)=>t.isEqual(e)))}new Hr(Rr.comparator);const $a=new Gr(Rr.comparator);function ja(...t){let e=$a;for(const n of t)e=e.add(n);return e}const qa=new Gr(_r);function Ha(){return qa}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ka{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,za.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Ka(kr.min(),s,Ha(),Oa(),ja())}}class za{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new za(n,e,ja(),ja(),ja())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ga{constructor(t,e,n,s){this.Tt=t,this.removedTargetIds=e,this.key=n,this.Et=s}}class Qa{constructor(t,e){this.targetId=t,this.At=e}}class Wa{constructor(t,e,n=Yr.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Ya{constructor(){this.Rt=0,this.bt=Za(),this.Pt=Yr.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(t){t.approximateByteSize()>0&&(this.Vt=!0,this.Pt=t)}xt(){let t=ja(),e=ja(),n=ja();return this.bt.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:hr()}})),new za(this.Pt,this.vt,t,e,n)}Nt(){this.Vt=!1,this.bt=Za()}kt(t,e){this.Vt=!0,this.bt=this.bt.insert(t,e)}Ot(t){this.Vt=!0,this.bt=this.bt.remove(t)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Xa{constructor(t){this.Bt=t,this.Lt=new Map,this.Ut=Oa(),this.qt=Ja(),this.Kt=new Gr(_r)}Gt(t){for(const e of t.Tt)t.Et&&t.Et.isFoundDocument()?this.Qt(e,t.Et):this.jt(e,t.key,t.Et);for(const e of t.removedTargetIds)this.jt(e,t.key,t.Et)}Wt(t){this.forEachTarget(t,(e=>{const n=this.zt(e);switch(t.state){case 0:this.Ht(e)&&n.Ct(t.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(t.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(e);break;case 3:this.Ht(e)&&(n.$t(),n.Ct(t.resumeToken));break;case 4:this.Ht(e)&&(this.Jt(e),n.Ct(t.resumeToken));break;default:hr()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Lt.forEach(((t,n)=>{this.Ht(n)&&e(n)}))}Yt(t){const e=t.targetId,n=t.At.count,s=this.Xt(e);if(s){const t=s.target;if(Do(t))if(0===n){const n=new Rr(t.path);this.jt(e,n,Co.newNoDocument(n,kr.min()))}else ur(1===n);else this.Zt(e)!==n&&(this.Jt(e),this.Kt=this.Kt.add(e))}}te(t){const e=new Map;this.Lt.forEach(((n,s)=>{const i=this.Xt(s);if(i){if(n.current&&Do(i.target)){const e=new Rr(i.target.path);null!==this.Ut.get(e)||this.ee(s,e)||this.jt(s,e,Co.newNoDocument(e,t))}n.Dt&&(e.set(s,n.xt()),n.Nt())}}));let n=ja();this.qt.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.Xt(t);return!e||2===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))})),this.Ut.forEach(((e,n)=>n.setReadTime(t)));const s=new Ka(t,e,this.Kt,this.Ut,n);return this.Ut=Oa(),this.qt=Ja(),this.Kt=new Gr(_r),s}Qt(t,e){if(!this.Ht(t))return;const n=this.ee(t,e.key)?2:0;this.zt(t).kt(e.key,n),this.Ut=this.Ut.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ne(e.key).add(t))}jt(t,e,n){if(!this.Ht(t))return;const s=this.zt(t);this.ee(t,e)?s.kt(e,1):s.Ot(e),this.qt=this.qt.insert(e,this.ne(e).delete(t)),n&&(this.Ut=this.Ut.insert(e,n))}removeTarget(t){this.Lt.delete(t)}Zt(t){const e=this.zt(t).xt();return this.Bt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Mt(t){this.zt(t).Mt()}zt(t){let e=this.Lt.get(t);return e||(e=new Ya,this.Lt.set(t,e)),e}ne(t){let e=this.qt.get(t);return e||(e=new Gr(_r),this.qt=this.qt.insert(t,e)),e}Ht(t){const e=null!==this.Xt(t);return e||rr("WatchChangeAggregator","Detected inactive target",t),e}Xt(t){const e=this.Lt.get(t);return e&&e.St?null:this.Bt.se(t)}Jt(t){this.Lt.set(t,new Ya),this.Bt.getRemoteKeysForTarget(t).forEach((e=>{this.jt(t,e,null)}))}ee(t,e){return this.Bt.getRemoteKeysForTarget(t).has(e)}}function Ja(){return new Hr(Rr.comparator)}function Za(){return new Hr(Rr.comparator)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const tc={asc:"ASCENDING",desc:"DESCENDING"},ec={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class nc{constructor(t,e){this.databaseId=t,this.gt=e}}function sc(t){return ur(!!t),kr.fromTimestamp(function(t){const e=Jr(t);return new Ar(e.seconds,e.nanos)}(t))}function ic(t){const e=Nr.fromString(t);return ur(wc(e)),e}function rc(t,e){const n=ic(e);if(n.get(1)!==t.databaseId.projectId)throw new fr(dr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new fr(dr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Rr(cc(n))}function oc(t,e){return function(t,e){return function(t){return new Nr(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}(t.databaseId,e)}function ac(t){return new Nr(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function cc(t){return ur(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function hc(t,e){return{documents:[oc(t,e.path)]}}function uc(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=oc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=oc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(bo(t.value))return{unaryFilter:{field:gc(t.field),op:"IS_NAN"}};if(wo(t.value))return{unaryFilter:{field:gc(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(bo(t.value))return{unaryFilter:{field:gc(t.field),op:"IS_NOT_NAN"}};if(wo(t.value))return{unaryFilter:{field:gc(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gc(t.field),op:pc(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:gc(t.field),direction:fc(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.gt||oo(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function lc(t){let e=function(t){const e=ic(t);return 4===e.length?Nr.emptyPath():cc(e)}(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){ur(1===s);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=dc(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new Bo(mc(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,oo(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Fo(n,e)}(n.startAt));let h=null;return n.endAt&&(h=function(t){const e=!t.before,n=t.values||[];return new Fo(n,e)}(n.endAt)),function(t,e,n,s,i,r,o,a){return new Ho(t,e,n,s,i,r,o,a)}(e,i,o,r,a,"F",c,h)}function dc(t){return t?void 0!==t.unaryFilter?[vc(t)]:void 0!==t.fieldFilter?[yc(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>dc(t))).reduce(((t,e)=>t.concat(e))):hr():[]}function fc(t){return tc[t]}function pc(t){return ec[t]}function gc(t){return{fieldPath:t.canonicalString()}}function mc(t){return Lr.fromServerFormat(t.fieldPath)}function yc(t){return No.create(mc(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return hr()}}(t.fieldFilter.op),t.fieldFilter.value)}function vc(t){switch(t.unaryFilter.op){case"IS_NAN":const e=mc(t.unaryFilter.field);return No.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=mc(t.unaryFilter.field);return No.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=mc(t.unaryFilter.field);return No.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=mc(t.unaryFilter.field);return No.create(i,"!=",{nullValue:"NULL_VALUE"});default:return hr()}}function wc(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class bc{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const s=this.mutations[e];s.key.isEqual(t.key)&&wa(s,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=ba(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=ba(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Fa();return this.mutations.forEach((s=>{const i=t.get(s.key),r=i.overlayedDocument;let o=this.applyToLocalView(r,i.mutatedFields);o=e.has(s.key)?null:o;const a=va(r,o);null!==a&&n.set(s.key,a),r.isValidDocument()||r.convertToNoDocument(kr.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),ja())}isEqual(t){return this.batchId===t.batchId&&Sr(this.mutations,t.mutations,((t,e)=>Ea(t,e)))&&Sr(this.baseMutations,t.baseMutations,((t,e)=>Ea(t,e)))}}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ec{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Tc{constructor(t,e,n,s,i=kr.min(),r=kr.min(),o=Yr.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new Tc(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Tc(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Tc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ic{constructor(t){this.re=t}}function Cc(t){const e=lc({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Xo(e,e.limit,"L"):e}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class _c{constructor(){this.Ye=new Sc}addToCollectionParentIndex(t,e){return this.Ye.add(e),Fr.resolve()}getCollectionParents(t,e){return Fr.resolve(this.Ye.getEntries(e))}addFieldIndex(t,e){return Fr.resolve()}deleteFieldIndex(t,e){return Fr.resolve()}getDocumentsMatchingTarget(t,e){return Fr.resolve(null)}getIndexType(t,e){return Fr.resolve(0)}getFieldIndexes(t,e){return Fr.resolve([])}getNextCollectionGroupToUpdate(t){return Fr.resolve(null)}getMinOffset(t,e){return Fr.resolve(Mr.min())}getMinOffsetFromCollectionGroup(t,e){return Fr.resolve(Mr.min())}updateCollectionGroup(t,e,n){return Fr.resolve()}updateIndexEntries(t,e){return Fr.resolve()}}class Sc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Gr(Nr.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Gr(Nr.comparator)).toArray()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ac{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new Ac(0)}static vn(){return new Ac(-1)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class kc{constructor(){this.changes=new La((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Co.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Fr.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Dc{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Nc{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&ba(n.mutation,t,Wr.empty(),Ar.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,ja()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=ja()){const s=Va();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((t=>{let e=Pa();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Va();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,ja())))}populateOverlays(t,e,n){const s=[];return n.forEach((t=>{e.has(t)||s.push(t)})),this.documentOverlayCache.getOverlays(t,s).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,s){let i=Oa();const r=Ba(),o=Ba();return e.forEach(((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof Ia)?i=i.insert(e.key,e):void 0!==o&&(r.set(e.key,o.mutation.getFieldMask()),ba(o.mutation,e,o.mutation.getFieldMask(),Ar.now()))})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>r.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Dc(e,null!==(n=r.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Ba();let s=new Hr(((t,e)=>t-e)),i=ja();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const r=e.get(t);if(null===r)return;let o=n.get(t)||Wr.empty();o=i.applyToLocalView(r,o),n.set(t,o);const a=(s.get(i.batchId)||ja()).add(t);s=s.insert(i.batchId,a)}))})).next((()=>{const r=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,c=s.value,h=Fa();c.forEach((t=>{if(!i.has(t)){const s=va(e.get(t),n.get(t));null!==s&&h.set(t,s),i=i.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,h))}return Fr.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return Rr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((i=>{const r=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):Fr.resolve(Va());let o=-1,a=i;return r.next((e=>Fr.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?Fr.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,ja()))).next((t=>({batchId:o,changes:Ua(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Rr(e)).next((t=>{let e=Pa();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const s=e.collectionGroup;let i=Pa();return this.indexManager.getCollectionParents(t,s).next((r=>Fr.forEach(r,(r=>{const o=function(t,e){return new Ho(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(s));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let s;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((i=>(s=i,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===s.get(n)&&(s=s.insert(n,Co.newInvalidDocument(n)))}));let n=Pa();return s.forEach(((s,i)=>{const r=t.get(s);void 0!==r&&ba(r.mutation,i,Wr.empty(),Ar.now()),ea(e,i)&&(n=n.insert(s,i))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):Fr.resolve(Co.newInvalidDocument(e))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class xc{constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,e){return Fr.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:sc(n.createTime)}),Fr.resolve()}getNamedQuery(t,e){return Fr.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,function(t){return{name:t.name,query:Cc(t.bundledQuery),readTime:sc(t.readTime)}}(e)),Fr.resolve()}}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Lc{constructor(){this.overlays=new Hr(Rr.comparator),this.es=new Map}getOverlay(t,e){return Fr.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Va();return Fr.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.ue(t,e,s)})),Fr.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.es.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.es.delete(n)),Fr.resolve()}getOverlaysForCollection(t,e,n){const s=Va(),i=e.length+1,r=new Rr(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===i&&t.largestBatchId>n&&s.set(t.getKey(),t)}return Fr.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new Hr(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Va(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Va(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=s)););return Fr.resolve(o)}ue(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.es.get(s.largestBatchId).delete(n.key);this.es.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Ec(e,n));let i=this.es.get(e);void 0===i&&(i=ja(),this.es.set(e,i)),this.es.set(e,i.add(n.key))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Rc{constructor(){this.ns=new Gr(Oc.ss),this.rs=new Gr(Oc.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new Oc(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.cs(new Oc(t,e))}hs(t,e){t.forEach((t=>this.removeReference(t,e)))}ls(t){const e=new Rr(new Nr([])),n=new Oc(e,t),s=new Oc(e,t+1),i=[];return this.rs.forEachInRange([n,s],(t=>{this.cs(t),i.push(t.key)})),i}fs(){this.ns.forEach((t=>this.cs(t)))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new Rr(new Nr([])),n=new Oc(e,t),s=new Oc(e,t+1);let i=ja();return this.rs.forEachInRange([n,s],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Oc(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Oc{constructor(t,e){this.key=t,this._s=e}static ss(t,e){return Rr.comparator(t.key,e.key)||_r(t._s,e._s)}static os(t,e){return _r(t._s,e._s)||Rr.comparator(t.key,e.key)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Mc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new Gr(Oc.ss)}checkEmpty(t){return Fr.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new bc(i,e,n,s);this.mutationQueue.push(r);for(const e of s)this.gs=this.gs.add(new Oc(e.key,i)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return Fr.resolve(r)}lookupMutationBatch(t,e){return Fr.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.ps(n),i=s<0?0:s;return Fr.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Fr.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return Fr.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Oc(e,0),s=new Oc(e,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,s],(t=>{const e=this.ys(t._s);i.push(e)})),Fr.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Gr(_r);return e.forEach((t=>{const e=new Oc(t,0),s=new Oc(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,s],(t=>{n=n.add(t._s)}))})),Fr.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;Rr.isDocumentKey(i)||(i=i.child(""));const r=new Oc(new Rr(i),0);let o=new Gr(_r);return this.gs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t._s)),!0)}),r),Fr.resolve(this.Is(o))}Is(t){const e=[];return t.forEach((t=>{const n=this.ys(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){ur(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return Fr.forEach(e.mutations,(s=>{const i=new Oc(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.gs=n}))}An(t){}containsKey(t,e){const n=new Oc(e,0),s=this.gs.firstAfterOrEqual(n);return Fr.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,Fr.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Pc{constructor(t){this.Es=t,this.docs=new Hr(Rr.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,r=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Fr.resolve(n?n.document.mutableCopy():Co.newInvalidDocument(e))}getEntries(t,e){let n=Oa();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Co.newInvalidDocument(t))})),Fr.resolve(n)}getAllFromCollection(t,e,n){let s=Oa();const i=new Rr(e.child("")),r=this.docs.getIteratorFrom(i);for(;r.hasNext();){const{key:t,value:{document:i}}=r.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||Pr(Or(i),n)<=0||(s=s.insert(i.key,i.mutableCopy()))}return Fr.resolve(s)}getAllFromCollectionGroup(t,e,n,s){hr()}As(t,e){return Fr.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Uc(this)}getSize(t){return Fr.resolve(this.size)}}class Uc extends kc{constructor(t){super(),this.Yn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.Yn.addEntry(t,s)):this.Yn.removeEntry(n)})),Fr.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Vc{constructor(t){this.persistence=t,this.Rs=new La((t=>Ao(t)),ko),this.lastRemoteSnapshotVersion=kr.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Rc,this.targetCount=0,this.vs=Ac.Pn()}forEachTarget(t,e){return this.Rs.forEach(((t,n)=>e(n))),Fr.resolve()}getLastRemoteSnapshotVersion(t){return Fr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Fr.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),Fr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),Fr.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new Ac(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,Fr.resolve()}updateTargetData(t,e){return this.Dn(e),Fr.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,Fr.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.Rs.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Rs.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),Fr.waitFor(i).next((()=>s))}getTargetCount(t){return Fr.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return Fr.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),Fr.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((e=>{i.push(s.markPotentiallyOrphaned(t,e))})),Fr.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),Fr.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return Fr.resolve(n)}containsKey(t,e){return Fr.resolve(this.Ps.containsKey(e))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Fc{constructor(t,e){this.Vs={},this.overlays={},this.Ss=new $r(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Vc(this),this.indexManager=new _c,this.remoteDocumentCache=function(t){return new Pc(t)}((t=>this.referenceDelegate.xs(t))),this.It=new Ic(e),this.Ns=new xc(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Lc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new Mc(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){rr("MemoryPersistence","Starting transaction:",t);const s=new Bc(this.Ss.next());return this.referenceDelegate.ks(),n(s).next((t=>this.referenceDelegate.Os(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Ms(t,e){return Fr.or(Object.values(this.Vs).map((n=>()=>n.containsKey(t,e))))}}class Bc extends Ur{constructor(t){super(),this.currentSequenceNumber=t}}class $c{constructor(t){this.persistence=t,this.Fs=new Rc,this.$s=null}static Bs(t){return new $c(t)}get Ls(){if(this.$s)return this.$s;throw hr()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),Fr.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),Fr.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),Fr.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach((t=>this.Ls.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ls.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}ks(){this.$s=new Set}Os(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Fr.forEach(this.Ls,(n=>{const s=Rr.fromPath(n);return this.Us(t,s).next((t=>{t||e.removeEntry(s,kr.min())}))})).next((()=>(this.$s=null,e.apply(t))))}updateLimboDocument(t,e){return this.Us(t,e).next((t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())}))}xs(t){return 0}Us(t,e){return Fr.or([()=>Fr.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ms(t,e)])}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class jc{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=s}static Ci(t,e){let n=ja(),s=ja();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:s=s.add(t.doc.key)}return new jc(t,e.fromCache,n,s)}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class qc{constructor(){this.xi=!1}initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,s){return this.ki(t,e).next((i=>i||this.Oi(t,e,s,n))).next((n=>n||this.Mi(t,e)))}ki(t,e){if(zo(e))return Fr.resolve(null);let n=Yo(e);return this.indexManager.getIndexType(t,n).next((s=>0===s?null:(null!==e.limit&&1===s&&(e=Xo(e,null,"F"),n=Yo(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((s=>{const i=ja(...s);return this.Ni.getDocuments(t,i).next((s=>this.indexManager.getMinOffset(t,n).next((n=>{const r=this.Fi(e,s);return this.$i(e,r,i,n.readTime)?this.ki(t,Xo(e,null,"F")):this.Bi(t,r,e,n)}))))})))))}Oi(t,e,n,s){return zo(e)||s.isEqual(kr.min())?this.Mi(t,e):this.Ni.getDocuments(t,n).next((i=>{const r=this.Fi(e,i);return this.$i(e,r,n,s)?this.Mi(t,e):(ir()<=at.DEBUG&&rr("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ta(e)),this.Bi(t,r,e,function(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=kr.fromTimestamp(1e9===s?new Ar(n+1,0):new Ar(n,s));return new Mr(i,Rr.empty(),e)}(s,-1)))}))}Fi(t,e){let n=new Gr(na(t));return e.forEach(((e,s)=>{ea(t,s)&&(n=n.add(s))})),n}$i(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Mi(t,e){return ir()<=at.DEBUG&&rr("QueryEngine","Using full collection scan to execute query:",ta(e)),this.Ni.getDocumentsMatchingQuery(t,e,Mr.min())}Bi(t,e,n,s){return this.Ni.getDocumentsMatchingQuery(t,n,s).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Hc{constructor(t,e,n,s){this.persistence=t,this.Li=e,this.It=s,this.Ui=new Hr(_r),this.qi=new La((t=>Ao(t)),ko),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Nc(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ui)))}}async function Kc(t,e){const n=lr(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next((i=>(s=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],r=[];let o=ja();for(const t of s){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({ji:t,removedBatchIds:i,addedBatchIds:r})))}))}))}function zc(t){const e=lr(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Cs.getLastRemoteSnapshotVersion(t)))}function Gc(t,e){const n=lr(t),s=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const o=[];e.targetChanges.forEach(((r,a)=>{const c=i.get(a);if(!c)return;o.push(n.Cs.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(t,r.addedDocuments,a))));let h=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?h=h.withResumeToken(Yr.EMPTY_BYTE_STRING,kr.min()).withLastLimboFreeSnapshotVersion(kr.min()):r.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(r.resumeToken,s)),i=i.insert(a,h),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,h,r)&&o.push(n.Cs.updateTargetData(t,h))}));let a=Oa(),c=ja();if(e.documentUpdates.forEach((s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(function(t,e,n){let s=ja(),i=ja();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=Oa();return n.forEach(((n,r)=>{const o=t.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),r.isNoDocument()&&r.version.isEqual(kr.min())?(e.removeEntry(n,r.readTime),s=s.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(r),s=s.insert(n,r)):rr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{Wi:s,zi:i}}))}(t,r,e.documentUpdates).next((t=>{a=t.Wi,c=t.zi}))),!s.isEqual(kr.min())){const e=n.Cs.getLastRemoteSnapshotVersion(t).next((e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return Fr.waitFor(o).next((()=>r.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Ui=i,t)))}async function Qc(t,e,n){const s=lr(t),i=s.Ui.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(t=>s.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Br(t))throw t;rr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.Ui=s.Ui.remove(e),s.qi.delete(i.target)}function Wc(t,e,n){const s=lr(t);let i=kr.min(),r=ja();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=lr(t),i=s.qi.get(n);return void 0!==i?Fr.resolve(s.Ui.get(i)):s.Cs.getTargetData(e,n)}(s,t,Yo(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>s.Li.getDocumentsMatchingQuery(t,e,n?i:kr.min(),n?r:ja()))).next((t=>(function(t,e,n){let s=t.Ki.get(e)||kr.min();n.forEach(((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)})),t.Ki.set(e,s)}(s,function(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}(e),t),{documents:t,Hi:r})))))}class Yc{constructor(){this.activeTargetIds=Ha()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Xc{constructor(){this.Lr=new Yc,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,e,n){this.Ur[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new Yc,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Jc{qr(t){}shutdown(){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Zc{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){rr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){rr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const th={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class eh{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class nh extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,e,n,s,i){const r=this.ho(t,e);rr("RestConnection","Sending: ",r,n);const o={};return this.lo(o,s,i),this.fo(t,r,o,n).then((t=>(rr("RestConnection","Received: ",t),t)),(e=>{throw ar("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}_o(t,e,n,s,i,r){return this.ao(t,e,n,s,i)}lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+nr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ho(t,e){const n=th[t];return`${this.oo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,e,n,s){return new Promise(((i,r)=>{const o=new Zi;o.setWithCredentials(!0),o.listenOnce(Gi.COMPLETE,(()=>{var e;try{switch(o.getLastErrorCode()){case zi.NO_ERROR:const n=o.getResponseJson();rr("Connection","XHR received:",JSON.stringify(n)),i(n);break;case zi.TIMEOUT:rr("Connection",'RPC "'+t+'" timed out'),r(new fr(dr.DEADLINE_EXCEEDED,"Request time out"));break;case zi.HTTP_ERROR:const s=o.getStatus();if(rr("Connection",'RPC "'+t+'" failed with status:',s,"response text:",o.getResponseText()),s>0){let t=o.getResponseJson();Array.isArray(t)&&(t=t[0]);const n=null===(e=t)||void 0===e?void 0:e.error;if(n&&n.status&&n.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(dr).indexOf(e)>=0?e:dr.UNKNOWN}(n.status);r(new fr(t,n.message))}else r(new fr(dr.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new fr(dr.UNAVAILABLE,"Connection failed."));break;default:hr()}}finally{rr("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(s);o.send(e,"POST",a,n,15)}))}wo(t,e,n){const s=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=new $i,r=Bn(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Xi({})),this.lo(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const a=s.join("");rr("Connection","Creating WebChannel: "+a,o);const c=i.createWebChannel(a,o);let h=!1,u=!1;const l=new eh({Hr:t=>{u?rr("Connection","Not sending because WebChannel is closed:",t):(h||(rr("Connection","Opening WebChannel transport."),c.open(),h=!0),rr("Connection","WebChannel sending:",t),c.send(t))},Jr:()=>c.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(c,Ji.EventType.OPEN,(()=>{u||rr("Connection","WebChannel transport opened.")})),d(c,Ji.EventType.CLOSE,(()=>{u||(u=!0,rr("Connection","WebChannel transport closed"),l.io())})),d(c,Ji.EventType.ERROR,(t=>{u||(u=!0,ar("Connection","WebChannel transport errored:",t),l.io(new fr(dr.UNAVAILABLE,"The operation could not be completed")))})),d(c,Ji.EventType.MESSAGE,(t=>{var e;if(!u){const n=t.data[0];ur(!!n);const s=n,i=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(i){rr("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Da[t];if(void 0!==e)return xa(e)}(t),n=i.message;void 0===e&&(e=dr.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),u=!0,l.io(new fr(e,n)),c.close()}else rr("Connection","WebChannel received:",n),l.ro(n)}})),d(r,Qi.STAT_EVENT,(t=>{t.stat===Wi?rr("Connection","Detected buffering proxy"):t.stat===Yi&&rr("Connection","Detected no buffering proxy")})),setTimeout((()=>{l.so()}),0),l}}function sh(){return"undefined"!=typeof document?document:null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ih(t){return new nc(t,!0)}class rh{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=s,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),s=Math.max(0,e-n);s>0&&rr("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,s,(()=>(this.Eo=Date.now(),t()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class oh{constructor(t,e,n,s,i,r,o,a){this.Hs=t,this.vo=n,this.Vo=s,this.connection=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new rh(t,e)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.$o())))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,e){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,4!==t?this.xo.reset():e&&e.code===dr.RESOURCE_EXHAUSTED?(or(e.toString()),or("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):e&&e.code===dr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}qo(){}auth(){this.state=1;const t=this.Ko(this.So),e=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.So===e&&this.Go(t,n)}),(e=>{t((()=>{const t=new fr(dr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Qo(t)}))}))}Go(t,e){const n=this.Ko(this.So);this.stream=this.jo(t,e),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((t=>{n((()=>this.Qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Oo(){this.state=5,this.xo.Ro((async()=>{this.state=0,this.start()}))}Qo(t){return rr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return e=>{this.Hs.enqueueAndForget((()=>this.So===t?e():(rr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ah extends oh{constructor(t,e,n,s,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,r),this.It=i}jo(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.xo.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:hr()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(t,e){return t.gt?(ur(void 0===e||"string"==typeof e),Yr.fromBase64String(e||"")):(ur(void 0===e||e instanceof Uint8Array),Yr.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?dr.UNKNOWN:xa(t.code);return new fr(e,t.message||"")}(o);n=new Wa(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=rc(t,s.document.name),r=sc(s.document.updateTime),o=new Io({mapValue:{fields:s.document.fields}}),a=Co.newFoundDocument(i,r,o),c=s.targetIds||[],h=s.removedTargetIds||[];n=new Ga(c,h,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=rc(t,s.document),r=s.readTime?sc(s.readTime):kr.min(),o=Co.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Ga([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=rc(t,s.document),r=s.removedTargetIds||[];n=new Ga([],r,i,null)}else{if(!("filter"in e))return hr();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,i=new ka(s),r=t.targetId;n=new Qa(r,i)}}return n}(this.It,t),n=function(t){if(!("targetChange"in t))return kr.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?kr.min():e.readTime?sc(e.readTime):kr.min()}(t);return this.listener.Wo(e,n)}zo(t){const e={};e.database=ac(this.It),e.addTarget=function(t,e){let n;const s=e.target;return n=Do(s)?{documents:hc(t,s)}:{query:uc(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=function(t,e){return t.gt?e.toBase64():e.toUint8Array()}(t,e.resumeToken):e.snapshotVersion.compareTo(kr.min())>0&&(n.readTime=function(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}(t,e.snapshotVersion.toTimestamp())),n}(this.It,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return hr()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.It,t);n&&(e.labels=n),this.Bo(e)}Ho(t){const e={};e.database=ac(this.It),e.removeTarget=t,this.Bo(e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ch extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.It=s,this.nu=!1}su(){if(this.nu)throw new fr(dr.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,e,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.connection.ao(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===dr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new fr(dr.UNKNOWN,t.toString())}))}_o(t,e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection._o(t,e,n,i,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===dr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new fr(dr.UNKNOWN,t.toString())}))}terminate(){this.nu=!0}}class hh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(t){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,"Online"===t&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(or(e),this.ou=!1):rr("OnlineStateTracker",e)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class uh{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr((t=>{n.enqueueAndForget((async()=>{wh(this)&&(rr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=lr(t);e._u.add(4),await dh(e),e.gu.set("Unknown"),e._u.delete(4),await lh(e)}(this))}))})),this.gu=new hh(n,s)}}async function lh(t){if(wh(t))for(const e of t.wu)await e(!0)}async function dh(t){for(const e of t.wu)await e(!1)}function fh(t,e){const n=lr(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),vh(n)?yh(n):Sh(n).ko()&&gh(n,e))}function ph(t,e){const n=lr(t),s=Sh(n);n.du.delete(e),s.ko()&&mh(n,e),0===n.du.size&&(s.ko()?s.Fo():wh(n)&&n.gu.set("Unknown"))}function gh(t,e){t.yu.Mt(e.targetId),Sh(t).zo(e)}function mh(t,e){t.yu.Mt(e),Sh(t).Ho(e)}function yh(t){t.yu=new Xa({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),Sh(t).start(),t.gu.uu()}function vh(t){return wh(t)&&!Sh(t).No()&&t.du.size>0}function wh(t){return 0===lr(t)._u.size}function bh(t){t.yu=void 0}async function Eh(t){t.du.forEach(((e,n)=>{gh(t,e)}))}async function Th(t,e){bh(t),vh(t)?(t.gu.hu(e),yh(t)):t.gu.set("Unknown")}async function Ih(t,e,n){if(t.gu.set("Online"),e instanceof Wa&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.du.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.du.delete(s),t.yu.removeTarget(s))}(t,e)}catch(n){rr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ch(t,n)}else if(e instanceof Ga?t.yu.Gt(e):e instanceof Qa?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(kr.min()))try{const e=await zc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.yu.te(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.du.get(s);i&&t.du.set(s,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.du.get(e);if(!n)return;t.du.set(e,n.withResumeToken(Yr.EMPTY_BYTE_STRING,n.snapshotVersion)),mh(t,e);const s=new Tc(n.target,e,1,n.sequenceNumber);gh(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){rr("RemoteStore","Failed to raise snapshot:",e),await Ch(t,e)}}async function Ch(t,e,n){if(!Br(e))throw e;t._u.add(1),await dh(t),t.gu.set("Offline"),n||(n=()=>zc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{rr("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await lh(t)}))}async function _h(t,e){const n=lr(t);n.asyncQueue.verifyOperationInProgress(),rr("RemoteStore","RemoteStore received new credentials");const s=wh(n);n._u.add(3),await dh(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await lh(n)}function Sh(t){return t.pu||(t.pu=function(t,e,n){const s=lr(t);return s.su(),new ah(e,s.connection,s.authCredentials,s.appCheckCredentials,s.It,n)
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}(t.datastore,t.asyncQueue,{Yr:Eh.bind(null,t),Zr:Th.bind(null,t),Wo:Ih.bind(null,t)}),t.wu.push((async e=>{e?(t.pu.Mo(),vh(t)?yh(t):t.gu.set("Unknown")):(await t.pu.stop(),bh(t))}))),t.pu
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class Ah{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,s,i){const r=Date.now()+n,o=new Ah(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new fr(dr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kh(t,e){if(or("AsyncQueue",`${e}: ${t}`),Br(t))return new fr(dr.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Dh{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Rr.comparator(e.key,n.key):(t,e)=>Rr.comparator(t.key,e.key),this.keyedMap=Pa(),this.sortedSet=new Hr(this.comparator)}static emptySet(t){return new Dh(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Dh))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Dh;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Nh{constructor(){this.Tu=new Hr(Rr.comparator)}track(t){const e=t.doc.key,n=this.Tu.get(e);n?0!==t.type&&3===n.type?this.Tu=this.Tu.insert(e,t):3===t.type&&1!==n.type?this.Tu=this.Tu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Tu=this.Tu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Tu=this.Tu.remove(e):1===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):hr():this.Tu=this.Tu.insert(e,t)}Eu(){const t=[];return this.Tu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class xh{constructor(t,e,n,s,i,r,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,s,i){const r=[];return e.forEach((t=>{r.push({type:0,doc:t})})),new xh(t,e,Dh.emptySet(e),r,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Jo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Lh{constructor(){this.Au=void 0,this.listeners=[]}}class Rh{constructor(){this.queries=new La((t=>Zo(t)),Jo),this.onlineState="Unknown",this.Ru=new Set}}async function Oh(t,e){const n=lr(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Lh),i)try{r.Au=await n.onListen(s)}catch(t){const n=kh(t,`Initialization of query '${ta(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,r),r.listeners.push(e),e.bu(n.onlineState),r.Au&&e.Pu(r.Au)&&Vh(n)}async function Mh(t,e){const n=lr(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),i=0===r.listeners.length)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Ph(t,e){const n=lr(t);let s=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.Pu(t)&&(s=!0);i.Au=t}}s&&Vh(n)}function Uh(t,e,n){const s=lr(t),i=s.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);s.queries.delete(e)}function Vh(t){t.Ru.forEach((t=>{t.next()}))}class Fh{constructor(t,e,n){this.query=t,this.vu=e,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new xh(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),e=!0):this.Cu(t,this.onlineState)&&(this.xu(t),e=!0),this.Su=t,e}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let e=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),e=!0),e}Cu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Nu||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Du(t){if(t.docChanges.length>0)return!0;const e=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}xu(t){t=xh.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Bh{constructor(t){this.key=t}}class $h{constructor(t){this.key=t}}class jh{constructor(t,e){this.query=t,this.Uu=e,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ja(),this.mutatedKeys=ja(),this.Gu=na(t),this.Qu=new Dh(this.Gu)}get ju(){return this.Uu}Wu(t,e){const n=e?e.zu:new Nh,s=e?e.Qu:this.Qu;let i=e?e.mutatedKeys:this.mutatedKeys,r=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,c="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const h=s.get(t),u=ea(this.query,e)?e:null,l=!!h&&this.mutatedKeys.has(h.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;h&&u?h.data.isEqual(u.data)?l!==d&&(n.track({type:3,doc:u}),f=!0):this.Hu(h,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Gu(u,a)>0||c&&this.Gu(u,c)<0)&&(o=!0)):!h&&u?(n.track({type:0,doc:u}),f=!0):h&&!u&&(n.track({type:1,doc:h}),f=!0,(a||c)&&(o=!0)),f&&(u?(r=r.add(u),i=d?i.add(t):i.delete(t)):(r=r.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const t="F"===this.query.limitType?r.last():r.first();r=r.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Qu:r,zu:n,$i:o,mutatedKeys:i}}Hu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const i=t.zu.Eu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return hr()}};return n(t)-n(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t.type,e.type)||this.Gu(t.doc,e.doc))),this.Ju(n);const r=e?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==i.length||a?{snapshot:new xh(this.query,t.Qu,s,i,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:r}:{Xu:r}}bu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Nh,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.Uu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach((t=>this.Uu=this.Uu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Uu=this.Uu.delete(t))),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=ja(),this.Qu.forEach((t=>{this.Zu(t.key)&&(this.Ku=this.Ku.add(t.key))}));const e=[];return t.forEach((t=>{this.Ku.has(t)||e.push(new $h(t))})),this.Ku.forEach((n=>{t.has(n)||e.push(new Bh(n))})),e}tc(t){this.Uu=t.Hi,this.Ku=ja();const e=this.Wu(t.documents);return this.applyChanges(e,!0)}ec(){return xh.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class qh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Hh{constructor(t){this.key=t,this.nc=!1}}class Kh{constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.sc={},this.ic=new La((t=>Zo(t)),Jo),this.rc=new Map,this.oc=new Set,this.uc=new Hr(Rr.comparator),this.cc=new Map,this.ac=new Rc,this.hc={},this.lc=new Map,this.fc=Ac.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function zh(t,e){const n=function(t){const e=lr(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iu.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Yh.bind(null,e),e.sc.Wo=Ph.bind(null,e.eventManager),e.sc.wc=Uh.bind(null,e.eventManager),e}(t);let s,i;const r=n.ic.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const t=await function(t,e){const n=lr(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.Cs.getTargetData(t,e).next((i=>i?(s=i,Fr.resolve(s)):n.Cs.allocateTargetId(t).next((i=>(s=new Tc(e,i,0,t.currentSequenceNumber),n.Cs.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.Ui.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(t.targetId,t),n.qi.set(e,t.targetId)),t}))}(n.localStore,Yo(e));n.isPrimaryClient&&fh(n.remoteStore,t);const r=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,i=await async function(t,e,n,s,i){t._c=(e,n,s)=>async function(t,e,n,s){let i=e.view.Wu(n);i.$i&&(i=await Wc(t.localStore,e.query,!1).then((({documents:t})=>e.view.Wu(t,i))));const r=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,r);return Zh(t,e.targetId,o.Xu),o.snapshot}(t,e,n,s);const r=await Wc(t.localStore,e,!0),o=new jh(e,r.Hi),a=o.Wu(r.documents),c=za.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState,i),h=o.applyChanges(a,t.isPrimaryClient,c);Zh(t,n,h.Xu);const u=new qh(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),h.snapshot}(n,e,s,"current"===r,t.resumeToken)}return i}async function Gh(t,e){const n=lr(t),s=n.ic.get(e),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter((t=>!Jo(t,e)))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Qc(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),ph(n.remoteStore,s.targetId),Xh(n,s.targetId)})).catch(Vr)):(Xh(n,s.targetId),await Qc(n.localStore,s.targetId,!0))}async function Qh(t,e){const n=lr(t);try{const t=await Gc(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.cc.get(e);s&&(ur(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.nc=!0:t.modifiedDocuments.size>0?ur(s.nc):t.removedDocuments.size>0&&(ur(s.nc),s.nc=!1))})),await nu(n,t,e)}catch(t){await Vr(t)}}function Wh(t,e,n){const s=lr(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.ic.forEach(((n,s)=>{const i=s.view.bu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=lr(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.bu(e)&&(s=!0)})),s&&Vh(n)}(s.eventManager,e),t.length&&s.sc.Wo(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Yh(t,e,n){const s=lr(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.cc.get(e),r=i&&i.key;if(r){let t=new Hr(Rr.comparator);t=t.insert(r,Co.newNoDocument(r,kr.min()));const n=ja().add(r),i=new Ka(kr.min(),new Map,new Gr(_r),t,n);await Qh(s,i),s.uc=s.uc.remove(r),s.cc.delete(e),eu(s)}else await Qc(s.localStore,e,!1).then((()=>Xh(s,e,n))).catch(Vr)}function Xh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach((e=>{t.ac.containsKey(e)||Jh(t,e)}))}function Jh(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);null!==n&&(ph(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),eu(t))}function Zh(t,e,n){for(const s of n)s instanceof Bh?(t.ac.addReference(s.key,e),tu(t,s)):s instanceof $h?(rr("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||Jh(t,s.key)):hr()}function tu(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(rr("SyncEngine","New document in limbo: "+n),t.oc.add(s),eu(t))}function eu(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new Rr(Nr.fromString(e)),s=t.fc.next();t.cc.set(s,new Hh(n)),t.uc=t.uc.insert(n,s),fh(t.remoteStore,new Tc(Yo(Ko(n.path)),s,2,$r.at))}}async function nu(t,e,n){const s=lr(t),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach(((t,a)=>{o.push(s._c(a,e,n).then((t=>{if((t||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=jc.Ci(a.targetId,t);r.push(e)}})))})),await Promise.all(o),s.sc.Wo(i),await async function(t,e){const n=lr(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Fr.forEach(e,(e=>Fr.forEach(e.Si,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>Fr.forEach(e.Di,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!Br(t))throw t;rr("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.Ui.get(e),s=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(s);n.Ui=n.Ui.insert(e,i)}}}(s.localStore,r))}async function su(t,e){const n=lr(t);if(!n.currentUser.isEqual(e)){rr("SyncEngine","User change. New user:",e.toKey());const t=await Kc(n.localStore,e);n.currentUser=e,function(t,e){t.lc.forEach((t=>{t.forEach((t=>{t.reject(new fr(dr.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.lc.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await nu(n,t.ji)}}function iu(t,e){const n=lr(t),s=n.cc.get(e);if(s&&s.nc)return ja().add(s.key);{let t=ja();const s=n.rc.get(e);if(!s)return t;for(const e of s){const s=n.ic.get(e);t=t.unionWith(s.view.ju)}return t}}class ru{constructor(){this.synchronizeTabs=!1}async initialize(t){this.It=ih(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,e){return null}Ec(t,e){return null}Ic(t){return function(t,e,n,s){return new Hc(t,e,n,s)}(this.persistence,new qc,t.initialUser,this.It)}yc(t){return new Fc($c.Bs,this.It)}gc(t){return new Xc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ou{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Wh(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=su.bind(null,this.syncEngine),await async function(t,e){const n=lr(t);e?(n._u.delete(2),await lh(n)):e||(n._u.add(2),await dh(n),n.gu.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Rh}createDatastore(t){const e=ih(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new nh(s));var s;return function(t,e,n,s){return new ch(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,i=t=>Wh(this.syncEngine,t,0),r=Zc.C()?new Zc:new Jc,new uh(e,n,s,i,r);var e,n,s,i,r}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){const a=new Kh(t,e,n,s,i,r);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=lr(t);rr("RemoteStore","RemoteStore shutting down."),e._u.add(5),await dh(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function au(t,e,n){if(!n)throw new fr(dr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function cu(t){if(!Rr.isDocumentKey(t))throw new fr(dr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function hu(t){if(Rr.isDocumentKey(t))throw new fr(dr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function uu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new fr(dr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=function(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":hr()}(t);throw new fr(dr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const lu=new Map;class du{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new fr(dr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new fr(dr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,s){if(!0===e&&!0===s)throw new fr(dr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class fu{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new du({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new fr(dr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new fr(dr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new du(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new mr;switch(t.type){case"gapi":const e=t.client;return new br(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new fr(dr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=lu.get(t);e&&(rr("ComponentProvider","Removing Datastore"),lu.delete(t),e.terminate())}(this),Promise.resolve()}}function pu(t,e,n,s={}){var i;const r=(t=uu(t,fu))._getSettings();if("firestore.googleapis.com"!==r.host&&r.host!==e&&ar("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let e,n;if("string"==typeof s.mockUserToken)e=s.mockUserToken,n=er.MOCK_USER;else{e=function(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[K(JSON.stringify({alg:"none",type:"JWT"})),K(JSON.stringify(r)),""].join(".")}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(s.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const r=s.mockUserToken.sub||s.mockUserToken.user_id;if(!r)throw new fr(dr.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new er(r)}t._authCredentials=new yr(new gr(e,n))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class gu{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yu(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new gu(this.firestore,t,this._key)}}class mu{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new mu(this.firestore,t,this._query)}}class yu extends mu{constructor(t,e,n){super(t,e,Ko(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new gu(this.firestore,null,new Rr(t))}withConverter(t){return new yu(this.firestore,t,this._path)}}function vu(t,e,...n){if(t=nt(t),au("collection","path",e),t instanceof fu){const s=Nr.fromString(e,...n);return hu(s),new yu(t,null,s)}{if(!(t instanceof gu||t instanceof yu))throw new fr(dr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Nr.fromString(e,...n));return hu(s),new yu(t.firestore,null,s)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class wu{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):or("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}Rc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class bu{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=er.UNAUTHENTICATED,this.clientId=Cr.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{rr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(rr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new fr(dr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=kh(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Eu(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){return t.offlineComponents||(rr("FirestoreClient","Using default OfflineComponentProvider"),await async function(t,e){t.asyncQueue.verifyOperationInProgress(),rr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await Kc(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}(t,new ru)),t.offlineComponents}(t);rr("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>_h(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>_h(e.remoteStore,n))),t.onlineComponents=e}async function Tu(t){const e=await async function(t){return t.onlineComponents||(rr("FirestoreClient","Using default OnlineComponentProvider"),await Eu(t,new ou)),t.onlineComponents}(t),n=e.eventManager;return n.onListen=zh.bind(null,e.syncEngine),n.onUnlisten=Gh.bind(null,e.syncEngine),n}class Iu{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new rh(this,"async_queue_retry"),this.Wc=()=>{const t=sh();t&&rr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const t=sh();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.Uc){this.Uc=!0,this.Qc=t||!1;const e=sh();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.Uc)return new Promise((()=>{}));const e=new pr;return this.Hc((()=>this.Uc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Lc.push(t),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!Br(t))throw t;rr("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(t){const e=this.Bc.then((()=>(this.Gc=!0,t().catch((t=>{this.Kc=t,this.Gc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t);throw or("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Gc=!1,t))))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);const s=Ah.createAndSchedule(this,t,e,n,(t=>this.Yc(t)));return this.qc.push(s),s}zc(){this.Kc&&hr()}verifyOperationInProgress(){}async Xc(){let t;do{t=this.Bc,await t}while(t!==this.Bc)}Zc(t){for(const e of this.qc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then((()=>{this.qc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.qc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()}))}ea(t){this.jc.push(t)}Yc(t){const e=this.qc.indexOf(t);this.qc.splice(e,1)}}class Cu extends fu{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new Iu,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Au(this),this._firestoreClient.terminate()}}function _u(t,e){const n="object"==typeof t?t:function(t="[DEFAULT]"){const e=Mt.get(t);if(!e&&t===Rt)return $t();if(!e)throw Ft.create("no-app",{appName:t});return e}(),s="string"==typeof t?t:e||"(default)",i=function(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const t=W("firestore");t&&pu(i,...t)}return i}function Su(t){return t._firestoreClient||Au(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Au(t){var e;const n=t._freezeSettings(),s=function(t,e,n,s){return new io(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new bu(t._authCredentials,t._appCheckCredentials,t._queue,s)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ku{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ku(Yr.fromBase64String(t))}catch(t){throw new fr(dr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new ku(Yr.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Du{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new fr(dr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Lr(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Nu{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new fr(dr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new fr(dr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return _r(this._lat,t._lat)||_r(this._long,t._long)}}const xu=new RegExp("[~\\*/\\[\\]]");function Lu(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new fr(dr.INVALID_ARGUMENT,a+t+c)
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class Ru{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new gu(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Ou(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Mu("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Ou extends Ru{data(){return super.data()}}function Mu(t,e){return"string"==typeof e?function(t,e,n){if(e.search(xu)>=0)throw Lu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Du(...e.split("."))._internalPath}catch(s){throw Lu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}(t,e):e instanceof Du?e._internalPath:e._delegate._internalPath}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Pu{}function Uu(t,...e){for(const n of e)t=n._apply(t);return t}class Vu extends Pu{constructor(t,e){super(),this.ma=t,this.pa=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new fr(dr.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new fr(dr.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const s=new Bo(e,n);return function(t,e){if(null===Go(t)){const n=Qo(t);null!==n&&function(t,e,n){if(!n.isEqual(e))throw new fr(dr.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(0,n,e.field)}}(t,s),s}(t._query,this.ma,this.pa);return new mu(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new Ho(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function Fu(t,e="asc"){const n=e,s=Mu("orderBy",t);return new Vu(s,n)}class Bu{convertValue(t,e="none"){switch(ho(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Zr(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(to(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw hr()}}convertObject(t,e){const n={};return qr(t.fields,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new Nu(Zr(t.latitude),Zr(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=no(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(so(t));default:return null}}convertTimestamp(t){const e=Jr(t);return new Ar(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Nr.fromString(t);ur(wc(n));const s=new ro(n.get(1),n.get(3)),i=new Rr(n.popFirst(5));return s.isEqual(e)||or(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class $u{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ju extends Ru{constructor(t,e,n,s,i,r){super(t,e,n,s,r),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new qu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Mu("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class qu extends ju{data(t={}){return super.data(t)}}class Hu{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new $u(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new qu(this._firestore,this._userDataWriter,n.key,n,new $u(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new fr(dr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const s=new qu(t._firestore,t._userDataWriter,n.doc.key,n.doc,new $u(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:s,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new qu(t._firestore,t._userDataWriter,e.doc.key,e.doc,new $u(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,r=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:Ku(e.type),doc:s,oldIndex:i,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Ku(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return hr()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function zu(t){t=uu(t,gu);const e=uu(t.firestore,Cu);return function(t,e,n={}){const s=new pr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,i){const r=new wu({next:r=>{e.enqueueAndForget((()=>Mh(t,o)));const a=r.docs.has(n);!a&&r.fromCache?i.reject(new fr(dr.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&s&&"server"===s.source?i.reject(new fr(dr.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(r)},error:t=>i.reject(t)}),o=new Fh(Ko(n.path),r,{includeMetadataChanges:!0,Nu:!0});return Oh(t,o)}(await Tu(t),t.asyncQueue,e,n,s))),s.promise}(Su(e),t._key).then((n=>function(t,e,n){const s=n.docs.get(e._key),i=new Gu(t);return new ju(t,i,e._key,s,new $u(n.hasPendingWrites,n.fromCache),e.converter)}(e,t,n)))}class Gu extends Bu{constructor(t){super(),this.firestore=t}convertBytes(t){return new ku(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new gu(this.firestore,null,e)}}function Qu(t){t=uu(t,mu);const e=uu(t.firestore,Cu),n=Su(e),s=new Gu(e);return function(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new fr(dr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(t._query),function(t,e,n={}){const s=new pr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,i){const r=new wu({next:n=>{e.enqueueAndForget((()=>Mh(t,o))),n.fromCache&&"server"===s.source?i.reject(new fr(dr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Fh(n,r,{includeMetadataChanges:!0,Nu:!0});return Oh(t,o)}(await Tu(t),t.asyncQueue,e,n,s))),s.promise}(n,t._query).then((n=>new Hu(e,s,t,n)))}!function(t,e=!0){nr="9.14.0",Vt(new st("firestore",((t,{instanceIdentifier:n,options:s})=>{const i=t.getProvider("app").getImmediate(),r=new Cu(new vr(t.getProvider("auth-internal")),new Tr(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new fr(dr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ro(t.options.projectId,e)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(i,n),i);return s=Object.assign({useFetchStreams:e},s),r._setSettings(s),r}),"PUBLIC").setMultipleInstances(!0)),jt(tr,"3.7.3",t),jt(tr,"3.7.3","esm2017")}();const Wu=window.sessionStorage;let Yu;async function Xu(t,e){const n=`${t}-${e}`,s=Wu.getItem(n);if(s)return new Promise(((t,e)=>{t(JSON.parse(s))}));{const s=function(t,e,...n){if(t=nt(t),1===arguments.length&&(e=Cr.R()),au("doc","path",e),t instanceof fu){const s=Nr.fromString(e,...n);return cu(s),new gu(t,null,new Rr(s))}{if(!(t instanceof gu||t instanceof yu))throw new fr(dr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Nr.fromString(e,...n));return cu(s),new gu(t.firestore,t instanceof yu?t.converter:null,new Rr(s))}}(Yu,t,e),i=(await zu(s)).data();return Wu.setItem(n,JSON.stringify(i)),i}}function Ju({target:t}){const e=document.querySelector(`#${t.getAttribute("data-hover")}`);e&&e.scrollIntoView({behavior:"smooth"})}function Zu(e){let n,i,r,o,a,c,w,b,E,T,I,C,_,S,A,k,D,N,x,L,R,O,M,P,U,V,F,B,$,j,q,H,K,z,G,Q,W,Y,X,J,Z,tt,et,nt,st,it,rt,ot,at,ct;return{c(){n=d("header"),i=d("nav"),r=d("div"),r.innerHTML='<a href="https://aszala.com"><img id="logo" src="/images/logo.png" alt="Abhay Zala logo" class="svelte-jxk4o0"/></a>',o=p(),a=d("div"),c=d("ul"),w=d("li"),b=d("a"),b.textContent="publications",E=p(),T=d("li"),I=d("a"),I.textContent="experience",C=p(),_=d("li"),S=d("a"),S.textContent="education",A=p(),k=d("div"),D=d("div"),D.innerHTML='<img src="./images/abhay.png" alt="Abhay Zala" class="svelte-jxk4o0"/>',N=p(),x=d("div"),L=d("div"),L.textContent="Abhay Zala",R=p(),O=d("br"),M=p(),P=new v(!1),U=p(),V=d("br"),F=p(),B=d("hr"),$=p(),j=d("br"),q=f("\n\t\t\tEmail: "),H=d("a"),H.textContent="aszala@cs.unc.edu",K=f(" |\n\t\t\t\t\t"),z=d("a"),z.textContent="zala.abhay@gmail.com",G=p(),Q=d("br"),W=d("br"),Y=f("\n\t\t\tAdditional Links: "),X=d("a"),X.textContent="Google Scholar",J=f("\n\t\t\t\t\t\t\t\t| "),Z=d("a"),Z.textContent="Twitter",tt=f("\n\t\t\t\t\t\t\t\t| "),et=d("a"),et.textContent="Github",nt=p(),st=d("br"),it=d("br"),rt=p(),ot=d("a"),ot.textContent="Download CV",y(r,"id","logo-container"),y(r,"class","nav-container svelte-jxk4o0"),y(b,"data-hover","publications"),y(b,"class","svelte-jxk4o0"),y(w,"class","svelte-jxk4o0"),y(I,"data-hover","experience"),y(I,"class","svelte-jxk4o0"),y(T,"class","svelte-jxk4o0"),y(S,"data-hover","education"),y(S,"class","svelte-jxk4o0"),y(_,"class","svelte-jxk4o0"),y(c,"id","links-list"),y(c,"class","svelte-jxk4o0"),y(a,"id","links-container"),y(a,"class","nav-container svelte-jxk4o0"),y(i,"class","svelte-jxk4o0"),y(D,"id","profile-image"),y(D,"class","svelte-jxk4o0"),y(L,"id","name"),y(L,"class","svelte-jxk4o0"),P.a=U,y(B,"class","svelte-jxk4o0"),y(H,"href","mailto:aszala@cs.unc.edu"),y(H,"data-hover","aszala@cs.unc.edu"),y(H,"class","svelte-jxk4o0"),y(z,"href","mailto:zala.abhay@gmail.com"),y(z,"data-hover","zala.abhay@gmail.com"),y(z,"class","svelte-jxk4o0"),y(X,"href","https://scholar.google.com/citations?user=8mfWxD8AAAAJ&hl=en&oi=sra"),y(X,"target","self"),y(X,"data-hover","Google Scholar"),y(X,"class","svelte-jxk4o0"),y(Z,"href","https://twitter.com/AbhayZala7"),y(Z,"target","self"),y(Z,"data-hover","Twitter"),y(Z,"class","svelte-jxk4o0"),y(et,"href","https://github.com/aszala/"),y(et,"target","self"),y(et,"data-hover","Github"),y(et,"class","svelte-jxk4o0"),y(ot,"class","button svelte-jxk4o0"),y(ot,"target","self"),y(ot,"href","https://aszala.com/resume_abhay_zala.pdf"),y(ot,"type","button"),y(x,"id","modal-info"),y(x,"class","svelte-jxk4o0"),y(k,"id","modal"),y(k,"class","svelte-jxk4o0"),y(n,"id","header"),y(n,"class","svelte-jxk4o0")},m(t,s){u(t,n,s),h(n,i),h(i,r),h(i,o),h(i,a),h(a,c),h(c,w),h(w,b),h(c,E),h(c,T),h(T,I),h(c,C),h(c,_),h(_,S),h(n,A),h(n,k),h(k,D),h(k,N),h(k,x),h(x,L),h(x,R),h(x,O),h(x,M),P.m(e[0],x),h(x,U),h(x,V),h(x,F),h(x,B),h(x,$),h(x,j),h(x,q),h(x,H),h(x,K),h(x,z),h(x,G),h(x,Q),h(x,W),h(x,Y),h(x,X),h(x,J),h(x,Z),h(x,tt),h(x,et),h(x,nt),h(x,st),h(x,it),h(x,rt),h(x,ot),at||(ct=[g(b,"click",m(Ju)),g(I,"click",m(Ju)),g(S,"click",m(Ju))],at=!0)},p(t,[e]){1&e&&P.p(t[0])},i:t,o:t,d(t){t&&l(n),at=!1,s(ct)}}}function tl(t,e,n){let s="loading";return Xu("data","about").then((t=>{n(0,s=t.about_short)})),[s]}class el extends ${constructor(t){super(),B(this,t,tl,Zu,r,{})}}function nl(e){let n,s,i,r,o,a;return{c(){n=d("section"),s=d("h1"),s.textContent="Publications",i=p(),r=d("p"),r.innerHTML="<b>Note:</b> * indicates equal contribution",o=p(),a=d("div"),y(a,"id","publications-container"),y(a,"class","svelte-1ireub0"),y(n,"id","publications"),y(n,"class","svelte-1ireub0")},m(t,c){u(t,n,c),h(n,s),h(n,i),h(n,r),h(n,o),h(n,a),a.innerHTML=e[0]},p(t,[e]){1&e&&(a.innerHTML=t[0])},i:t,o:t,d(t){t&&l(n)}}}function sl(t,e,n){let s="loading";return async function(){const t="publications",e="publications",n=Wu.getItem(e);if(n)return new Promise(((t,e)=>{t(JSON.parse(n))}));{const n=Uu(vu(Yu,t),Fu("year","desc")),s=await Qu(n);let i={};return s.forEach((t=>{i[t.id]=t.data()})),Wu.setItem(e,JSON.stringify(i)),i}}().then((t=>{n(0,s="");for(const[e,i]of Object.entries(t)){const t=i.abstract.split("."),e=`${t[0]}.${t[1]}.${t[2]}.`,r=`\n        <div class="publication">\n            <img src="./images/${i.image_name}" alt="Figure 1 of ${i.title}">\n            <div>\n                <h2>${i.title}</h2>\n                <p>${i.authors}</p>\n                <p>${i.year} | ${i.conference}</p>\n                <a class="button" href="${i.project_url}" target="self">Project Page</a> <a class="button" href="${i.url}" target="self">Preprint</a>\n                <br><br>\n                <div>\n                    ${e}\n                </div>\n            </div>\n        </div>\n        `;n(0,s+=r)}})),[s]}class il extends ${constructor(t){super(),B(this,t,sl,nl,r,{})}}function rl(e){let n,s,i,r;return{c(){n=d("section"),s=d("h1"),s.textContent="Experience",i=p(),r=d("div"),y(r,"id","experience-container"),y(r,"class","svelte-jx4yq6"),y(n,"id","experience"),y(n,"class","svelte-jx4yq6")},m(t,o){u(t,n,o),h(n,s),h(n,i),h(n,r),r.innerHTML=e[0]},p(t,[e]){1&e&&(r.innerHTML=t[0])},i:t,o:t,d(t){t&&l(n)}}}function ol(t,e,n){let s="loading";return async function(){const t="experience_new",e="experience_new",n=Wu.getItem(e);if(n)return new Promise(((t,e)=>{t(JSON.parse(n))}));{const n=Uu(vu(Yu,t),Fu("rank","asc")),s=await Qu(n);let i={};return s.forEach((t=>{i[t.id]=t.data()})),Wu.setItem(e,JSON.stringify(i)),i}}().then((t=>{n(0,s="");for(const[e,i]of Object.entries(t)){let t="";0==i.rank&&(t="main");const e=`\n            <div class="experience">\n                <div class="timeline-container">\n                    <div class="timeline-bar"></div>\n                    <div class="timeline-dot ${t}"></div>\n                    <div class="timeline-bar"></div>\n                </div>\n                <div class="experience-content">\n                    <h2>${i.title}</h2>\n                    <hr>\n                    <h3>${i.location}</h3>\n                    <p>${i.time}</p>\n                </div>\n            </div>\n        `;n(0,s+=e)}})),[s]}class al extends ${constructor(t){super(),B(this,t,ol,rl,r,{})}}function cl(e){let n,s,i,r;return{c(){n=d("section"),s=d("h1"),s.textContent="Education",i=p(),r=d("div"),y(r,"id","education-container"),y(n,"id","education")},m(t,o){u(t,n,o),h(n,s),h(n,i),h(n,r),r.innerHTML=e[0]},p(t,[e]){1&e&&(r.innerHTML=t[0])},i:t,o:t,d(t){t&&l(n)}}}function hl(t,e,n){let s="loading";return async function(){{const t=Uu(vu(Yu,"education"),Fu("rank","asc")),e=await Qu(t);let n={};return e.forEach((t=>{n[t.id]=t.data()})),Wu.setItem("education",JSON.stringify(n)),n}}().then((t=>{n(0,s="");for(const[e,i]of Object.entries(t)){const t=`\n            <div class="education">\n                <p><i class='fas fa-graduation-cap'></i> ${i.degree}, ${i.time}</p>\n                <div>${i.location}</div>\n            </div>\n        `;n(0,s+=t)}})),[s]}class ul extends ${constructor(t){super(),B(this,t,hl,cl,r,{})}}function ll(e){let n,s,i;return{c(){n=d("div"),n.textContent="^",y(n,"data-hover","header"),y(n,"id","scroll-to-top"),y(n,"class","svelte-1hlcn6p")},m(t,e){u(t,n,e),s||(i=g(n,"click",m(Ju)),s=!0)},p:t,d(t){t&&l(n),s=!1,i()}}}function dl(t){let e,n,s,i,r,o,a,c,f,m,y,v,w,b=!1,E=()=>{b=!1};A(t[1]),s=new el({}),r=new il({}),a=new al({}),f=new ul({});let T=t[0]>75&&ll();return{c(){n=d("main"),P(s.$$.fragment),i=p(),P(r.$$.fragment),o=p(),P(a.$$.fragment),c=p(),P(f.$$.fragment),m=p(),T&&T.c()},m(l,d){u(l,n,d),U(s,n,null),h(n,i),U(r,n,null),h(n,o),U(a,n,null),h(n,c),U(f,n,null),h(n,m),T&&T.m(n,null),y=!0,v||(w=g(window,"scroll",(()=>{b=!0,clearTimeout(e),e=setTimeout(E,100),t[1]()})),v=!0)},p(t,[s]){1&s&&!b&&(b=!0,clearTimeout(e),scrollTo(window.pageXOffset,t[0]),e=setTimeout(E,100)),t[0]>75?T?T.p(t,s):(T=ll(),T.c(),T.m(n,null)):T&&(T.d(1),T=null)},i(t){y||(O(s.$$.fragment,t),O(r.$$.fragment,t),O(a.$$.fragment,t),O(f.$$.fragment,t),y=!0)},o(t){M(s.$$.fragment,t),M(r.$$.fragment,t),M(a.$$.fragment,t),M(f.$$.fragment,t),y=!1},d(t){t&&l(n),V(s),V(r),V(a),V(f),T&&T.d(),v=!1,w()}}}function fl(t,e,n){let s;return[s,function(){n(0,s=window.pageYOffset)}]}class pl extends ${constructor(t){super(),B(this,t,fl,dl,r,{})}}function gl(t){let e,n,i,r,o,a,g,m,v;document.title=e=ml;var b=t[0];return b&&(g=w(b,{})),{c(){n=d("script"),r=d("script"),a=p(),g&&P(g.$$.fragment),m=f(""),n.async=!0,c(n.src,i="https://platform.twitter.com/widgets.js")||y(n,"src","https://platform.twitter.com/widgets.js"),y(n,"charset","utf-8"),r.async=!0,c(r.src,o="https://kit.fontawesome.com/a076d05399.js")||y(r,"src","https://kit.fontawesome.com/a076d05399.js"),y(r,"crossorigin","anonymous")},m(t,e){h(document.head,n),h(document.head,r),u(t,a,e),g&&U(g,t,e),u(t,m,e),v=!0},p(t,[n]){if((!v||0&n)&&e!==(e=ml)&&(document.title=e),b!==(b=t[0])){if(g){R={r:0,c:[],p:R};const t=g;M(t.$$.fragment,1,0,(()=>{V(t,1)})),R.r||s(R.c),R=R.p}b?(g=w(b,{}),P(g.$$.fragment),O(g.$$.fragment,1),U(g,m.parentNode,m)):g=null}},i(t){v||(g&&O(g.$$.fragment,t),v=!0)},o(t){g&&M(g.$$.fragment,t),v=!1},d(t){l(n),l(r),t&&l(a),t&&l(m),g&&V(g,t)}}}let ml="Abhay Zala";function yl(t){$t({apiKey:"AIzaSyDq9wo9Jdn4PDhbHPVg0btkYUVVwsCatdU",authDomain:"portfolio-4722e.firebaseapp.com",databaseURL:"https://portfolio-4722e.firebaseio.com",projectId:"portfolio-4722e",storageBucket:"portfolio-4722e.appspot.com",messagingSenderId:"344412709404",appId:"1:344412709404:web:efc32e40ea3ab2ccd375d9"}),Yu=_u();let e=pl;return j("/:path",((t,e)=>{j.redirect("/")})),j.start(),[e]}return new class extends ${constructor(t){super(),B(this,t,yl,gl,r,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
