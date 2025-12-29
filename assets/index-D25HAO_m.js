(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Rx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var wf={exports:{}},mo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hg;function wx(){if(hg)return mo;hg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:c}}return mo.Fragment=e,mo.jsx=i,mo.jsxs=i,mo}var dg;function Cx(){return dg||(dg=1,wf.exports=wx()),wf.exports}var St=Cx(),Cf={exports:{}},go={},Df={exports:{}},Lf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pg;function Dx(){return pg||(pg=1,(function(o){function e(F,W){var K=F.length;F.push(W);t:for(;0<K;){var vt=K-1>>>1,et=F[vt];if(0<l(et,W))F[vt]=W,F[K]=et,K=vt;else break t}}function i(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var W=F[0],K=F.pop();if(K!==W){F[0]=K;t:for(var vt=0,et=F.length,D=et>>>1;vt<D;){var X=2*(vt+1)-1,V=F[X],Z=X+1,mt=F[Z];if(0>l(V,K))Z<et&&0>l(mt,V)?(F[vt]=mt,F[Z]=K,vt=Z):(F[vt]=V,F[X]=K,vt=X);else if(Z<et&&0>l(mt,K))F[vt]=mt,F[Z]=K,vt=Z;else break t}}return W}function l(F,W){var K=F.sortIndex-W.sortIndex;return K!==0?K:F.id-W.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var g=[],p=[],v=1,x=null,S=3,y=!1,A=!1,T=!1,M=!1,m=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function N(F){for(var W=i(p);W!==null;){if(W.callback===null)r(p);else if(W.startTime<=F)r(p),W.sortIndex=W.expirationTime,e(g,W);else break;W=i(p)}}function z(F){if(T=!1,N(F),!A)if(i(g)!==null)A=!0,I||(I=!0,st());else{var W=i(p);W!==null&&rt(z,W.startTime-F)}}var I=!1,P=-1,$=5,b=-1;function O(){return M?!0:!(o.unstable_now()-b<$)}function ht(){if(M=!1,I){var F=o.unstable_now();b=F;var W=!0;try{t:{A=!1,T&&(T=!1,U(P),P=-1),y=!0;var K=S;try{e:{for(N(F),x=i(g);x!==null&&!(x.expirationTime>F&&O());){var vt=x.callback;if(typeof vt=="function"){x.callback=null,S=x.priorityLevel;var et=vt(x.expirationTime<=F);if(F=o.unstable_now(),typeof et=="function"){x.callback=et,N(F),W=!0;break e}x===i(g)&&r(g),N(F)}else r(g);x=i(g)}if(x!==null)W=!0;else{var D=i(p);D!==null&&rt(z,D.startTime-F),W=!1}}break t}finally{x=null,S=K,y=!1}W=void 0}}finally{W?st():I=!1}}}var st;if(typeof C=="function")st=function(){C(ht)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,at=Y.port2;Y.port1.onmessage=ht,st=function(){at.postMessage(null)}}else st=function(){m(ht,0)};function rt(F,W){P=m(function(){F(o.unstable_now())},W)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(F){switch(S){case 1:case 2:case 3:var W=3;break;default:W=S}var K=S;S=W;try{return F()}finally{S=K}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(F,W){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var K=S;S=F;try{return W()}finally{S=K}},o.unstable_scheduleCallback=function(F,W,K){var vt=o.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?vt+K:vt):K=vt,F){case 1:var et=-1;break;case 2:et=250;break;case 5:et=1073741823;break;case 4:et=1e4;break;default:et=5e3}return et=K+et,F={id:v++,callback:W,priorityLevel:F,startTime:K,expirationTime:et,sortIndex:-1},K>vt?(F.sortIndex=K,e(p,F),i(g)===null&&F===i(p)&&(T?(U(P),P=-1):T=!0,rt(z,K-vt))):(F.sortIndex=et,e(g,F),A||y||(A=!0,I||(I=!0,st()))),F},o.unstable_shouldYield=O,o.unstable_wrapCallback=function(F){var W=S;return function(){var K=S;S=W;try{return F.apply(this,arguments)}finally{S=K}}}})(Lf)),Lf}var mg;function Lx(){return mg||(mg=1,Df.exports=Dx()),Df.exports}var Uf={exports:{}},te={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gg;function Ux(){if(gg)return te;gg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),S=Symbol.iterator;function y(D){return D===null||typeof D!="object"?null:(D=S&&D[S]||D["@@iterator"],typeof D=="function"?D:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function m(D,X,V){this.props=D,this.context=X,this.refs=M,this.updater=V||A}m.prototype.isReactComponent={},m.prototype.setState=function(D,X){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,X,"setState")},m.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function U(){}U.prototype=m.prototype;function C(D,X,V){this.props=D,this.context=X,this.refs=M,this.updater=V||A}var N=C.prototype=new U;N.constructor=C,T(N,m.prototype),N.isPureReactComponent=!0;var z=Array.isArray;function I(){}var P={H:null,A:null,T:null,S:null},$=Object.prototype.hasOwnProperty;function b(D,X,V){var Z=V.ref;return{$$typeof:o,type:D,key:X,ref:Z!==void 0?Z:null,props:V}}function O(D,X){return b(D.type,X,D.props)}function ht(D){return typeof D=="object"&&D!==null&&D.$$typeof===o}function st(D){var X={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(V){return X[V]})}var Y=/\/+/g;function at(D,X){return typeof D=="object"&&D!==null&&D.key!=null?st(""+D.key):X.toString(36)}function rt(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(I,I):(D.status="pending",D.then(function(X){D.status==="pending"&&(D.status="fulfilled",D.value=X)},function(X){D.status==="pending"&&(D.status="rejected",D.reason=X)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function F(D,X,V,Z,mt){var yt=typeof D;(yt==="undefined"||yt==="boolean")&&(D=null);var H=!1;if(D===null)H=!0;else switch(yt){case"bigint":case"string":case"number":H=!0;break;case"object":switch(D.$$typeof){case o:case e:H=!0;break;case v:return H=D._init,F(H(D._payload),X,V,Z,mt)}}if(H)return mt=mt(D),H=Z===""?"."+at(D,0):Z,z(mt)?(V="",H!=null&&(V=H.replace(Y,"$&/")+"/"),F(mt,X,V,"",function(Rt){return Rt})):mt!=null&&(ht(mt)&&(mt=O(mt,V+(mt.key==null||D&&D.key===mt.key?"":(""+mt.key).replace(Y,"$&/")+"/")+H)),X.push(mt)),1;H=0;var It=Z===""?".":Z+":";if(z(D))for(var Nt=0;Nt<D.length;Nt++)Z=D[Nt],yt=It+at(Z,Nt),H+=F(Z,X,V,yt,mt);else if(Nt=y(D),typeof Nt=="function")for(D=Nt.call(D),Nt=0;!(Z=D.next()).done;)Z=Z.value,yt=It+at(Z,Nt++),H+=F(Z,X,V,yt,mt);else if(yt==="object"){if(typeof D.then=="function")return F(rt(D),X,V,Z,mt);throw X=String(D),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return H}function W(D,X,V){if(D==null)return D;var Z=[],mt=0;return F(D,Z,"","",function(yt){return X.call(V,yt,mt++)}),Z}function K(D){if(D._status===-1){var X=D._result;X=X(),X.then(function(V){(D._status===0||D._status===-1)&&(D._status=1,D._result=V)},function(V){(D._status===0||D._status===-1)&&(D._status=2,D._result=V)}),D._status===-1&&(D._status=0,D._result=X)}if(D._status===1)return D._result.default;throw D._result}var vt=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},et={map:W,forEach:function(D,X,V){W(D,function(){X.apply(this,arguments)},V)},count:function(D){var X=0;return W(D,function(){X++}),X},toArray:function(D){return W(D,function(X){return X})||[]},only:function(D){if(!ht(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return te.Activity=x,te.Children=et,te.Component=m,te.Fragment=i,te.Profiler=l,te.PureComponent=C,te.StrictMode=r,te.Suspense=g,te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,te.__COMPILER_RUNTIME={__proto__:null,c:function(D){return P.H.useMemoCache(D)}},te.cache=function(D){return function(){return D.apply(null,arguments)}},te.cacheSignal=function(){return null},te.cloneElement=function(D,X,V){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var Z=T({},D.props),mt=D.key;if(X!=null)for(yt in X.key!==void 0&&(mt=""+X.key),X)!$.call(X,yt)||yt==="key"||yt==="__self"||yt==="__source"||yt==="ref"&&X.ref===void 0||(Z[yt]=X[yt]);var yt=arguments.length-2;if(yt===1)Z.children=V;else if(1<yt){for(var H=Array(yt),It=0;It<yt;It++)H[It]=arguments[It+2];Z.children=H}return b(D.type,mt,Z)},te.createContext=function(D){return D={$$typeof:d,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},te.createElement=function(D,X,V){var Z,mt={},yt=null;if(X!=null)for(Z in X.key!==void 0&&(yt=""+X.key),X)$.call(X,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(mt[Z]=X[Z]);var H=arguments.length-2;if(H===1)mt.children=V;else if(1<H){for(var It=Array(H),Nt=0;Nt<H;Nt++)It[Nt]=arguments[Nt+2];mt.children=It}if(D&&D.defaultProps)for(Z in H=D.defaultProps,H)mt[Z]===void 0&&(mt[Z]=H[Z]);return b(D,yt,mt)},te.createRef=function(){return{current:null}},te.forwardRef=function(D){return{$$typeof:h,render:D}},te.isValidElement=ht,te.lazy=function(D){return{$$typeof:v,_payload:{_status:-1,_result:D},_init:K}},te.memo=function(D,X){return{$$typeof:p,type:D,compare:X===void 0?null:X}},te.startTransition=function(D){var X=P.T,V={};P.T=V;try{var Z=D(),mt=P.S;mt!==null&&mt(V,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(I,vt)}catch(yt){vt(yt)}finally{X!==null&&V.types!==null&&(X.types=V.types),P.T=X}},te.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},te.use=function(D){return P.H.use(D)},te.useActionState=function(D,X,V){return P.H.useActionState(D,X,V)},te.useCallback=function(D,X){return P.H.useCallback(D,X)},te.useContext=function(D){return P.H.useContext(D)},te.useDebugValue=function(){},te.useDeferredValue=function(D,X){return P.H.useDeferredValue(D,X)},te.useEffect=function(D,X){return P.H.useEffect(D,X)},te.useEffectEvent=function(D){return P.H.useEffectEvent(D)},te.useId=function(){return P.H.useId()},te.useImperativeHandle=function(D,X,V){return P.H.useImperativeHandle(D,X,V)},te.useInsertionEffect=function(D,X){return P.H.useInsertionEffect(D,X)},te.useLayoutEffect=function(D,X){return P.H.useLayoutEffect(D,X)},te.useMemo=function(D,X){return P.H.useMemo(D,X)},te.useOptimistic=function(D,X){return P.H.useOptimistic(D,X)},te.useReducer=function(D,X,V){return P.H.useReducer(D,X,V)},te.useRef=function(D){return P.H.useRef(D)},te.useState=function(D){return P.H.useState(D)},te.useSyncExternalStore=function(D,X,V){return P.H.useSyncExternalStore(D,X,V)},te.useTransition=function(){return P.H.useTransition()},te.version="19.2.3",te}var _g;function Sh(){return _g||(_g=1,Uf.exports=Ux()),Uf.exports}var Nf={exports:{}},vn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vg;function Nx(){if(vg)return vn;vg=1;var o=Sh();function e(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(g,p,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:g,containerInfo:p,implementation:v}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return vn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,vn.createPortal=function(g,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(g,p,null,v)},vn.flushSync=function(g){var p=d.T,v=r.p;try{if(d.T=null,r.p=2,g)return g()}finally{d.T=p,r.p=v,r.d.f()}},vn.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(g,p))},vn.prefetchDNS=function(g){typeof g=="string"&&r.d.D(g)},vn.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var v=p.as,x=h(v,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:y}):v==="script"&&r.d.X(g,{crossOrigin:x,integrity:S,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},vn.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);r.d.M(g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(g)},vn.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,x=h(v,p.crossOrigin);r.d.L(g,v,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},vn.preloadModule=function(g,p){if(typeof g=="string")if(p){var v=h(p.as,p.crossOrigin);r.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(g)},vn.requestFormReset=function(g){r.d.r(g)},vn.unstable_batchedUpdates=function(g,p){return g(p)},vn.useFormState=function(g,p,v){return d.H.useFormState(g,p,v)},vn.useFormStatus=function(){return d.H.useHostTransitionStatus()},vn.version="19.2.3",vn}var xg;function Ox(){if(xg)return Nf.exports;xg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Nf.exports=Nx(),Nf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg;function zx(){if(Sg)return go;Sg=1;var o=Lx(),e=Sh(),i=Ox();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function g(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return g(u),t;if(f===s)return g(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var _=!1,E=u.child;E;){if(E===a){_=!0,a=u,s=f;break}if(E===s){_=!0,s=u,a=f;break}E=E.sibling}if(!_){for(E=f.child;E;){if(E===a){_=!0,a=f,s=u;break}if(E===s){_=!0,s=f,a=u;break}E=E.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,S=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),C=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),ht=Symbol.iterator;function st(t){return t===null||typeof t!="object"?null:(t=ht&&t[ht]||t["@@iterator"],typeof t=="function"?t:null)}var Y=Symbol.for("react.client.reference");function at(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Y?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case m:return"Profiler";case M:return"StrictMode";case z:return"Suspense";case I:return"SuspenseList";case b:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case C:return t.displayName||"Context";case U:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:at(t.type)||"Memo";case $:n=t._payload,t=t._init;try{return at(t(n))}catch{}}return null}var rt=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},vt=[],et=-1;function D(t){return{current:t}}function X(t){0>et||(t.current=vt[et],vt[et]=null,et--)}function V(t,n){et++,vt[et]=t.current,t.current=n}var Z=D(null),mt=D(null),yt=D(null),H=D(null);function It(t,n){switch(V(yt,n),V(mt,t),V(Z,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?zm(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=zm(n),t=Pm(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}X(Z),V(Z,t)}function Nt(){X(Z),X(mt),X(yt)}function Rt(t){t.memoizedState!==null&&V(H,t);var n=Z.current,a=Pm(n,t.type);n!==a&&(V(mt,t),V(Z,a))}function ft(t){mt.current===t&&(X(Z),X(mt)),H.current===t&&(X(H),co._currentValue=K)}var Mt,Et;function Ut(t){if(Mt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Mt=n&&n[1]||"",Et=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Mt+t+Et}var $t=!1;function Wt(t,n){if(!t||$t)return"";$t=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(ot){var tt=ot}Reflect.construct(t,[],xt)}else{try{xt.call()}catch(ot){tt=ot}t.call(xt.prototype)}}else{try{throw Error()}catch(ot){tt=ot}(xt=t())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(ot){if(ot&&tt&&typeof ot.stack=="string")return[ot.stack,tt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),_=f[0],E=f[1];if(_&&E){var B=_.split(`
`),J=E.split(`
`);for(u=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(s===B.length||u===J.length)for(s=B.length-1,u=J.length-1;1<=s&&0<=u&&B[s]!==J[u];)u--;for(;1<=s&&0<=u;s--,u--)if(B[s]!==J[u]){if(s!==1||u!==1)do if(s--,u--,0>u||B[s]!==J[u]){var pt=`
`+B[s].replace(" at new "," at ");return t.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",t.displayName)),pt}while(1<=s&&0<=u);break}}}finally{$t=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ut(a):""}function ve(t,n){switch(t.tag){case 26:case 27:case 5:return Ut(t.type);case 16:return Ut("Lazy");case 13:return t.child!==n&&n!==null?Ut("Suspense Fallback"):Ut("Suspense");case 19:return Ut("SuspenseList");case 0:case 15:return Wt(t.type,!1);case 11:return Wt(t.type.render,!1);case 1:return Wt(t.type,!0);case 31:return Ut("Activity");default:return""}}function xe(t){try{var n="",a=null;do n+=ve(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Ot=Object.prototype.hasOwnProperty,Jt=o.unstable_scheduleCallback,an=o.unstable_cancelCallback,L=o.unstable_shouldYield,R=o.unstable_requestPaint,lt=o.unstable_now,Tt=o.unstable_getCurrentPriorityLevel,At=o.unstable_ImmediatePriority,Dt=o.unstable_UserBlockingPriority,Yt=o.unstable_NormalPriority,Pt=o.unstable_LowPriority,gt=o.unstable_IdlePriority,Vt=o.log,qt=o.unstable_setDisableYieldValue,Xt=null,wt=null;function Bt(t){if(typeof Vt=="function"&&qt(t),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(Xt,t)}catch{}}var Kt=Math.clz32?Math.clz32:k,Te=Math.log,He=Math.LN2;function k(t){return t>>>=0,t===0?32:31-(Te(t)/He|0)|0}var dt=256,bt=262144,Lt=4194304;function Ft(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Me(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var E=s&134217727;return E!==0?(s=E&~f,s!==0?u=Ft(s):(_&=E,_!==0?u=Ft(_):a||(a=E&~t,a!==0&&(u=Ft(a))))):(E=s&~f,E!==0?u=Ft(E):_!==0?u=Ft(_):a||(a=s&~t,a!==0&&(u=Ft(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Se(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function sn(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ci(){var t=Lt;return Lt<<=1,(Lt&62914560)===0&&(Lt=4194304),t}function Pe(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function rn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Zn(t,n,a,s,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,B=t.expirationTimes,J=t.hiddenUpdates;for(a=_&~a;0<a;){var pt=31-Kt(a),xt=1<<pt;E[pt]=0,B[pt]=-1;var tt=J[pt];if(tt!==null)for(J[pt]=null,pt=0;pt<tt.length;pt++){var ot=tt[pt];ot!==null&&(ot.lane&=-536870913)}a&=~xt}s!==0&&Oa(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Oa(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Kt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function br(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Kt(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function Uo(t,n){var a=n&-n;return a=(a&42)!==0?1:Tr(a),(a&(t.suspendedLanes|n))!==0?0:a}function Tr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ar(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function w(){var t=W.p;return t!==0?t:(t=window.event,t===void 0?32:sg(t.type))}function nt(t,n){var a=W.p;try{return W.p=t,n()}finally{W.p=a}}var ut=Math.random().toString(36).slice(2),j="__reactFiber$"+ut,ct="__reactProps$"+ut,Gt="__reactContainer$"+ut,jt="__reactEvents$"+ut,Qt="__reactListeners$"+ut,ie="__reactHandles$"+ut,se="__reactResources$"+ut,ee="__reactMarker$"+ut;function re(t){delete t[j],delete t[ct],delete t[jt],delete t[Qt],delete t[ie]}function me(t){var n=t[j];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Gt]||a[j]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Xm(t);t!==null;){if(a=t[j])return a;t=Xm(t)}return n}t=a,a=t.parentNode}return null}function Ve(t){if(t=t[j]||t[Gt]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function cn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Tn(t){var n=t[se];return n||(n=t[se]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function le(t){t[ee]=!0}var ce=new Set,ds={};function ze(t,n){An(t,n),An(t+"Capture",n)}function An(t,n){for(ds[t]=n,t=0;t<n.length;t++)ce.add(n[t])}var No=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),na={},ps={};function fn(t){return Ot.call(ps,t)?!0:Ot.call(na,t)?!1:No.test(t)?ps[t]=!0:(na[t]=!0,!1)}function Kn(t,n,a){if(fn(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function ia(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ge(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function _n(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Oo(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function zo(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Su(t){if(!t._valueTracker){var n=Oo(t)?"checked":"value";t._valueTracker=zo(t,n,""+t[n])}}function wh(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Oo(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function Po(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var M0=/[\n"\\]/g;function Qn(t){return t.replace(M0,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Mu(t,n,a,s,u,f,_,E){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+_n(n)):t.value!==""+_n(n)&&(t.value=""+_n(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?yu(t,_,_n(n)):a!=null?yu(t,_,_n(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+_n(E):t.removeAttribute("name")}function Ch(t,n,a,s,u,f,_,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Su(t);return}a=a!=null?""+_n(a):"",n=n!=null?""+_n(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=E?t.checked:!!s,t.defaultChecked=!!s,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Su(t)}function yu(t,n,a){n==="number"&&Po(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ms(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+_n(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Dh(t,n,a){if(n!=null&&(n=""+_n(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+_n(a):""}function Lh(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(rt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=_n(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Su(t)}function gs(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var y0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Uh(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||y0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Nh(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&Uh(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&Uh(t,f,n[f])}function Eu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var E0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),b0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Bo(t){return b0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Di(){}var bu=null;function Tu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _s=null,vs=null;function Oh(t){var n=Ve(t);if(n&&(t=n.stateNode)){var a=t[ct]||null;t:switch(t=n.stateNode,n.type){case"input":if(Mu(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Qn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[ct]||null;if(!u)throw Error(r(90));Mu(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&wh(s)}break t;case"textarea":Dh(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ms(t,!!a.multiple,n,!1)}}}var Au=!1;function zh(t,n,a){if(Au)return t(n,a);Au=!0;try{var s=t(n);return s}finally{if(Au=!1,(_s!==null||vs!==null)&&(bl(),_s&&(n=_s,t=vs,vs=_s=null,Oh(n),t)))for(n=0;n<t.length;n++)Oh(t[n])}}function Rr(t,n){var a=t.stateNode;if(a===null)return null;var s=a[ct]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ru=!1;if(Li)try{var wr={};Object.defineProperty(wr,"passive",{get:function(){Ru=!0}}),window.addEventListener("test",wr,wr),window.removeEventListener("test",wr,wr)}catch{Ru=!1}var aa=null,wu=null,Fo=null;function Ph(){if(Fo)return Fo;var t,n=wu,a=n.length,s,u="value"in aa?aa.value:aa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(s=1;s<=_&&n[a-s]===u[f-s];s++);return Fo=u.slice(t,1<s?1-s:void 0)}function Io(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ho(){return!0}function Bh(){return!1}function Rn(t){function n(a,s,u,f,_){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ho:Bh,this.isPropagationStopped=Bh,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ho)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ho)},persist:function(){},isPersistent:Ho}),n}var za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Go=Rn(za),Cr=x({},za,{view:0,detail:0}),T0=Rn(Cr),Cu,Du,Dr,Vo=x({},Cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Dr&&(Dr&&t.type==="mousemove"?(Cu=t.screenX-Dr.screenX,Du=t.screenY-Dr.screenY):Du=Cu=0,Dr=t),Cu)},movementY:function(t){return"movementY"in t?t.movementY:Du}}),Fh=Rn(Vo),A0=x({},Vo,{dataTransfer:0}),R0=Rn(A0),w0=x({},Cr,{relatedTarget:0}),Lu=Rn(w0),C0=x({},za,{animationName:0,elapsedTime:0,pseudoElement:0}),D0=Rn(C0),L0=x({},za,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),U0=Rn(L0),N0=x({},za,{data:0}),Ih=Rn(N0),O0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},P0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=P0[t])?!!n[t]:!1}function Uu(){return B0}var F0=x({},Cr,{key:function(t){if(t.key){var n=O0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Io(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?z0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uu,charCode:function(t){return t.type==="keypress"?Io(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Io(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),I0=Rn(F0),H0=x({},Vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hh=Rn(H0),G0=x({},Cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uu}),V0=Rn(G0),X0=x({},za,{propertyName:0,elapsedTime:0,pseudoElement:0}),k0=Rn(X0),W0=x({},Vo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),q0=Rn(W0),j0=x({},za,{newState:0,oldState:0}),Y0=Rn(j0),Z0=[9,13,27,32],Nu=Li&&"CompositionEvent"in window,Lr=null;Li&&"documentMode"in document&&(Lr=document.documentMode);var K0=Li&&"TextEvent"in window&&!Lr,Gh=Li&&(!Nu||Lr&&8<Lr&&11>=Lr),Vh=" ",Xh=!1;function kh(t,n){switch(t){case"keyup":return Z0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xs=!1;function Q0(t,n){switch(t){case"compositionend":return Wh(n);case"keypress":return n.which!==32?null:(Xh=!0,Vh);case"textInput":return t=n.data,t===Vh&&Xh?null:t;default:return null}}function J0(t,n){if(xs)return t==="compositionend"||!Nu&&kh(t,n)?(t=Ph(),Fo=wu=aa=null,xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Gh&&n.locale!=="ko"?null:n.data;default:return null}}var $0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!$0[t.type]:n==="textarea"}function jh(t,n,a,s){_s?vs?vs.push(s):vs=[s]:_s=s,n=Ll(n,"onChange"),0<n.length&&(a=new Go("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Ur=null,Nr=null;function tv(t){Cm(t,0)}function Xo(t){var n=cn(t);if(wh(n))return t}function Yh(t,n){if(t==="change")return n}var Zh=!1;if(Li){var Ou;if(Li){var zu="oninput"in document;if(!zu){var Kh=document.createElement("div");Kh.setAttribute("oninput","return;"),zu=typeof Kh.oninput=="function"}Ou=zu}else Ou=!1;Zh=Ou&&(!document.documentMode||9<document.documentMode)}function Qh(){Ur&&(Ur.detachEvent("onpropertychange",Jh),Nr=Ur=null)}function Jh(t){if(t.propertyName==="value"&&Xo(Nr)){var n=[];jh(n,Nr,t,Tu(t)),zh(tv,n)}}function ev(t,n,a){t==="focusin"?(Qh(),Ur=n,Nr=a,Ur.attachEvent("onpropertychange",Jh)):t==="focusout"&&Qh()}function nv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xo(Nr)}function iv(t,n){if(t==="click")return Xo(n)}function av(t,n){if(t==="input"||t==="change")return Xo(n)}function sv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Pn=typeof Object.is=="function"?Object.is:sv;function Or(t,n){if(Pn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Ot.call(n,u)||!Pn(t[u],n[u]))return!1}return!0}function $h(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function td(t,n){var a=$h(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=$h(a)}}function ed(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?ed(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function nd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Po(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Po(t.document)}return n}function Pu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var rv=Li&&"documentMode"in document&&11>=document.documentMode,Ss=null,Bu=null,zr=null,Fu=!1;function id(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Fu||Ss==null||Ss!==Po(s)||(s=Ss,"selectionStart"in s&&Pu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),zr&&Or(zr,s)||(zr=s,s=Ll(Bu,"onSelect"),0<s.length&&(n=new Go("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Ss)))}function Pa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ms={animationend:Pa("Animation","AnimationEnd"),animationiteration:Pa("Animation","AnimationIteration"),animationstart:Pa("Animation","AnimationStart"),transitionrun:Pa("Transition","TransitionRun"),transitionstart:Pa("Transition","TransitionStart"),transitioncancel:Pa("Transition","TransitionCancel"),transitionend:Pa("Transition","TransitionEnd")},Iu={},ad={};Li&&(ad=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function Ba(t){if(Iu[t])return Iu[t];if(!Ms[t])return t;var n=Ms[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in ad)return Iu[t]=n[a];return t}var sd=Ba("animationend"),rd=Ba("animationiteration"),od=Ba("animationstart"),ov=Ba("transitionrun"),lv=Ba("transitionstart"),uv=Ba("transitioncancel"),ld=Ba("transitionend"),ud=new Map,Hu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Hu.push("scrollEnd");function fi(t,n){ud.set(t,n),ze(n,[t])}var ko=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Jn=[],ys=0,Gu=0;function Wo(){for(var t=ys,n=Gu=ys=0;n<t;){var a=Jn[n];Jn[n++]=null;var s=Jn[n];Jn[n++]=null;var u=Jn[n];Jn[n++]=null;var f=Jn[n];if(Jn[n++]=null,s!==null&&u!==null){var _=s.pending;_===null?u.next=u:(u.next=_.next,_.next=u),s.pending=u}f!==0&&cd(a,u,f)}}function qo(t,n,a,s){Jn[ys++]=t,Jn[ys++]=n,Jn[ys++]=a,Jn[ys++]=s,Gu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Vu(t,n,a,s){return qo(t,n,a,s),jo(t)}function Fa(t,n){return qo(t,null,null,n),jo(t)}function cd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Kt(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function jo(t){if(50<io)throw io=0,Qc=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Es={};function cv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,n,a,s){return new cv(t,n,a,s)}function Xu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ui(t,n){var a=t.alternate;return a===null?(a=Bn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function fd(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Yo(t,n,a,s,u,f){var _=0;if(s=t,typeof t=="function")Xu(t)&&(_=1);else if(typeof t=="string")_=mx(t,a,Z.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case b:return t=Bn(31,a,n,u),t.elementType=b,t.lanes=f,t;case T:return Ia(a.children,u,f,n);case M:_=8,u|=24;break;case m:return t=Bn(12,a,n,u|2),t.elementType=m,t.lanes=f,t;case z:return t=Bn(13,a,n,u),t.elementType=z,t.lanes=f,t;case I:return t=Bn(19,a,n,u),t.elementType=I,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:_=10;break t;case U:_=9;break t;case N:_=11;break t;case P:_=14;break t;case $:_=16,s=null;break t}_=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Bn(_,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function Ia(t,n,a,s){return t=Bn(7,t,s,n),t.lanes=a,t}function ku(t,n,a){return t=Bn(6,t,null,n),t.lanes=a,t}function hd(t){var n=Bn(18,null,null,0);return n.stateNode=t,n}function Wu(t,n,a){return n=Bn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var dd=new WeakMap;function $n(t,n){if(typeof t=="object"&&t!==null){var a=dd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:xe(n)},dd.set(t,n),n)}return{value:t,source:n,stack:xe(n)}}var bs=[],Ts=0,Zo=null,Pr=0,ti=[],ei=0,sa=null,yi=1,Ei="";function Ni(t,n){bs[Ts++]=Pr,bs[Ts++]=Zo,Zo=t,Pr=n}function pd(t,n,a){ti[ei++]=yi,ti[ei++]=Ei,ti[ei++]=sa,sa=t;var s=yi;t=Ei;var u=32-Kt(s)-1;s&=~(1<<u),a+=1;var f=32-Kt(n)+u;if(30<f){var _=u-u%5;f=(s&(1<<_)-1).toString(32),s>>=_,u-=_,yi=1<<32-Kt(n)+u|a<<u|s,Ei=f+t}else yi=1<<f|a<<u|s,Ei=t}function qu(t){t.return!==null&&(Ni(t,1),pd(t,1,0))}function ju(t){for(;t===Zo;)Zo=bs[--Ts],bs[Ts]=null,Pr=bs[--Ts],bs[Ts]=null;for(;t===sa;)sa=ti[--ei],ti[ei]=null,Ei=ti[--ei],ti[ei]=null,yi=ti[--ei],ti[ei]=null}function md(t,n){ti[ei++]=yi,ti[ei++]=Ei,ti[ei++]=sa,yi=n.id,Ei=n.overflow,sa=t}var hn=null,Be=null,ge=!1,ra=null,ni=!1,Yu=Error(r(519));function oa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Br($n(n,t)),Yu}function gd(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[j]=t,n[ct]=s,a){case"dialog":he("cancel",n),he("close",n);break;case"iframe":case"object":case"embed":he("load",n);break;case"video":case"audio":for(a=0;a<so.length;a++)he(so[a],n);break;case"source":he("error",n);break;case"img":case"image":case"link":he("error",n),he("load",n);break;case"details":he("toggle",n);break;case"input":he("invalid",n),Ch(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":he("invalid",n);break;case"textarea":he("invalid",n),Lh(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Nm(n.textContent,a)?(s.popover!=null&&(he("beforetoggle",n),he("toggle",n)),s.onScroll!=null&&he("scroll",n),s.onScrollEnd!=null&&he("scrollend",n),s.onClick!=null&&(n.onclick=Di),n=!0):n=!1,n||oa(t,!0)}function _d(t){for(hn=t.return;hn;)switch(hn.tag){case 5:case 31:case 13:ni=!1;return;case 27:case 3:ni=!0;return;default:hn=hn.return}}function As(t){if(t!==hn)return!1;if(!ge)return _d(t),ge=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||df(t.type,t.memoizedProps)),a=!a),a&&Be&&oa(t),_d(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Be=Vm(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Be=Vm(t)}else n===27?(n=Be,Ma(t.type)?(t=vf,vf=null,Be=t):Be=n):Be=hn?ai(t.stateNode.nextSibling):null;return!0}function Ha(){Be=hn=null,ge=!1}function Zu(){var t=ra;return t!==null&&(Ln===null?Ln=t:Ln.push.apply(Ln,t),ra=null),t}function Br(t){ra===null?ra=[t]:ra.push(t)}var Ku=D(null),Ga=null,Oi=null;function la(t,n,a){V(Ku,n._currentValue),n._currentValue=a}function zi(t){t._currentValue=Ku.current,X(Ku)}function Qu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Ju(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=u;for(var B=0;B<n.length;B++)if(E.context===n[B]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),Qu(f.return,a,t),s||(_=null);break t}f=E.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Qu(_,a,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function Rs(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var E=u.type;Pn(u.pendingProps.value,_.value)||(t!==null?t.push(E):t=[E])}}else if(u===H.current){if(_=u.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(co):t=[co])}u=u.return}t!==null&&Ju(n,t,a,s),n.flags|=262144}function Ko(t){for(t=t.firstContext;t!==null;){if(!Pn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Va(t){Ga=t,Oi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function dn(t){return vd(Ga,t)}function Qo(t,n){return Ga===null&&Va(t),vd(t,n)}function vd(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Oi===null){if(t===null)throw Error(r(308));Oi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Oi=Oi.next=n;return a}var fv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},hv=o.unstable_scheduleCallback,dv=o.unstable_NormalPriority,Ye={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $u(){return{controller:new fv,data:new Map,refCount:0}}function Fr(t){t.refCount--,t.refCount===0&&hv(dv,function(){t.controller.abort()})}var Ir=null,tc=0,ws=0,Cs=null;function pv(t,n){if(Ir===null){var a=Ir=[];tc=0,ws=af(),Cs={status:"pending",value:void 0,then:function(s){a.push(s)}}}return tc++,n.then(xd,xd),n}function xd(){if(--tc===0&&Ir!==null){Cs!==null&&(Cs.status="fulfilled");var t=Ir;Ir=null,ws=0,Cs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function mv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Sd=F.S;F.S=function(t,n){im=lt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&pv(t,n),Sd!==null&&Sd(t,n)};var Xa=D(null);function ec(){var t=Xa.current;return t!==null?t:Ne.pooledCache}function Jo(t,n){n===null?V(Xa,Xa.current):V(Xa,n.pool)}function Md(){var t=ec();return t===null?null:{parent:Ye._currentValue,pool:t}}var Ds=Error(r(460)),nc=Error(r(474)),$o=Error(r(542)),tl={then:function(){}};function yd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ed(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Di,Di),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Td(t),t;default:if(typeof n.status=="string")n.then(Di,Di);else{if(t=Ne,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Td(t),t}throw Wa=n,Ds}}function ka(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Wa=a,Ds):a}}var Wa=null;function bd(){if(Wa===null)throw Error(r(459));var t=Wa;return Wa=null,t}function Td(t){if(t===Ds||t===$o)throw Error(r(483))}var Ls=null,Hr=0;function el(t){var n=Hr;return Hr+=1,Ls===null&&(Ls=[]),Ed(Ls,t,n)}function Gr(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function nl(t,n){throw n.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Ad(t){function n(q,G){if(t){var Q=q.deletions;Q===null?(q.deletions=[G],q.flags|=16):Q.push(G)}}function a(q,G){if(!t)return null;for(;G!==null;)n(q,G),G=G.sibling;return null}function s(q){for(var G=new Map;q!==null;)q.key!==null?G.set(q.key,q):G.set(q.index,q),q=q.sibling;return G}function u(q,G){return q=Ui(q,G),q.index=0,q.sibling=null,q}function f(q,G,Q){return q.index=Q,t?(Q=q.alternate,Q!==null?(Q=Q.index,Q<G?(q.flags|=67108866,G):Q):(q.flags|=67108866,G)):(q.flags|=1048576,G)}function _(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function E(q,G,Q,_t){return G===null||G.tag!==6?(G=ku(Q,q.mode,_t),G.return=q,G):(G=u(G,Q),G.return=q,G)}function B(q,G,Q,_t){var kt=Q.type;return kt===T?pt(q,G,Q.props.children,_t,Q.key):G!==null&&(G.elementType===kt||typeof kt=="object"&&kt!==null&&kt.$$typeof===$&&ka(kt)===G.type)?(G=u(G,Q.props),Gr(G,Q),G.return=q,G):(G=Yo(Q.type,Q.key,Q.props,null,q.mode,_t),Gr(G,Q),G.return=q,G)}function J(q,G,Q,_t){return G===null||G.tag!==4||G.stateNode.containerInfo!==Q.containerInfo||G.stateNode.implementation!==Q.implementation?(G=Wu(Q,q.mode,_t),G.return=q,G):(G=u(G,Q.children||[]),G.return=q,G)}function pt(q,G,Q,_t,kt){return G===null||G.tag!==7?(G=Ia(Q,q.mode,_t,kt),G.return=q,G):(G=u(G,Q),G.return=q,G)}function xt(q,G,Q){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=ku(""+G,q.mode,Q),G.return=q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case y:return Q=Yo(G.type,G.key,G.props,null,q.mode,Q),Gr(Q,G),Q.return=q,Q;case A:return G=Wu(G,q.mode,Q),G.return=q,G;case $:return G=ka(G),xt(q,G,Q)}if(rt(G)||st(G))return G=Ia(G,q.mode,Q,null),G.return=q,G;if(typeof G.then=="function")return xt(q,el(G),Q);if(G.$$typeof===C)return xt(q,Qo(q,G),Q);nl(q,G)}return null}function tt(q,G,Q,_t){var kt=G!==null?G.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return kt!==null?null:E(q,G,""+Q,_t);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:return Q.key===kt?B(q,G,Q,_t):null;case A:return Q.key===kt?J(q,G,Q,_t):null;case $:return Q=ka(Q),tt(q,G,Q,_t)}if(rt(Q)||st(Q))return kt!==null?null:pt(q,G,Q,_t,null);if(typeof Q.then=="function")return tt(q,G,el(Q),_t);if(Q.$$typeof===C)return tt(q,G,Qo(q,Q),_t);nl(q,Q)}return null}function ot(q,G,Q,_t,kt){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return q=q.get(Q)||null,E(G,q,""+_t,kt);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case y:return q=q.get(_t.key===null?Q:_t.key)||null,B(G,q,_t,kt);case A:return q=q.get(_t.key===null?Q:_t.key)||null,J(G,q,_t,kt);case $:return _t=ka(_t),ot(q,G,Q,_t,kt)}if(rt(_t)||st(_t))return q=q.get(Q)||null,pt(G,q,_t,kt,null);if(typeof _t.then=="function")return ot(q,G,Q,el(_t),kt);if(_t.$$typeof===C)return ot(q,G,Q,Qo(G,_t),kt);nl(G,_t)}return null}function zt(q,G,Q,_t){for(var kt=null,ye=null,Ht=G,ae=G=0,pe=null;Ht!==null&&ae<Q.length;ae++){Ht.index>ae?(pe=Ht,Ht=null):pe=Ht.sibling;var Ee=tt(q,Ht,Q[ae],_t);if(Ee===null){Ht===null&&(Ht=pe);break}t&&Ht&&Ee.alternate===null&&n(q,Ht),G=f(Ee,G,ae),ye===null?kt=Ee:ye.sibling=Ee,ye=Ee,Ht=pe}if(ae===Q.length)return a(q,Ht),ge&&Ni(q,ae),kt;if(Ht===null){for(;ae<Q.length;ae++)Ht=xt(q,Q[ae],_t),Ht!==null&&(G=f(Ht,G,ae),ye===null?kt=Ht:ye.sibling=Ht,ye=Ht);return ge&&Ni(q,ae),kt}for(Ht=s(Ht);ae<Q.length;ae++)pe=ot(Ht,q,ae,Q[ae],_t),pe!==null&&(t&&pe.alternate!==null&&Ht.delete(pe.key===null?ae:pe.key),G=f(pe,G,ae),ye===null?kt=pe:ye.sibling=pe,ye=pe);return t&&Ht.forEach(function(Aa){return n(q,Aa)}),ge&&Ni(q,ae),kt}function Zt(q,G,Q,_t){if(Q==null)throw Error(r(151));for(var kt=null,ye=null,Ht=G,ae=G=0,pe=null,Ee=Q.next();Ht!==null&&!Ee.done;ae++,Ee=Q.next()){Ht.index>ae?(pe=Ht,Ht=null):pe=Ht.sibling;var Aa=tt(q,Ht,Ee.value,_t);if(Aa===null){Ht===null&&(Ht=pe);break}t&&Ht&&Aa.alternate===null&&n(q,Ht),G=f(Aa,G,ae),ye===null?kt=Aa:ye.sibling=Aa,ye=Aa,Ht=pe}if(Ee.done)return a(q,Ht),ge&&Ni(q,ae),kt;if(Ht===null){for(;!Ee.done;ae++,Ee=Q.next())Ee=xt(q,Ee.value,_t),Ee!==null&&(G=f(Ee,G,ae),ye===null?kt=Ee:ye.sibling=Ee,ye=Ee);return ge&&Ni(q,ae),kt}for(Ht=s(Ht);!Ee.done;ae++,Ee=Q.next())Ee=ot(Ht,q,ae,Ee.value,_t),Ee!==null&&(t&&Ee.alternate!==null&&Ht.delete(Ee.key===null?ae:Ee.key),G=f(Ee,G,ae),ye===null?kt=Ee:ye.sibling=Ee,ye=Ee);return t&&Ht.forEach(function(Ax){return n(q,Ax)}),ge&&Ni(q,ae),kt}function Ue(q,G,Q,_t){if(typeof Q=="object"&&Q!==null&&Q.type===T&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:t:{for(var kt=Q.key;G!==null;){if(G.key===kt){if(kt=Q.type,kt===T){if(G.tag===7){a(q,G.sibling),_t=u(G,Q.props.children),_t.return=q,q=_t;break t}}else if(G.elementType===kt||typeof kt=="object"&&kt!==null&&kt.$$typeof===$&&ka(kt)===G.type){a(q,G.sibling),_t=u(G,Q.props),Gr(_t,Q),_t.return=q,q=_t;break t}a(q,G);break}else n(q,G);G=G.sibling}Q.type===T?(_t=Ia(Q.props.children,q.mode,_t,Q.key),_t.return=q,q=_t):(_t=Yo(Q.type,Q.key,Q.props,null,q.mode,_t),Gr(_t,Q),_t.return=q,q=_t)}return _(q);case A:t:{for(kt=Q.key;G!==null;){if(G.key===kt)if(G.tag===4&&G.stateNode.containerInfo===Q.containerInfo&&G.stateNode.implementation===Q.implementation){a(q,G.sibling),_t=u(G,Q.children||[]),_t.return=q,q=_t;break t}else{a(q,G);break}else n(q,G);G=G.sibling}_t=Wu(Q,q.mode,_t),_t.return=q,q=_t}return _(q);case $:return Q=ka(Q),Ue(q,G,Q,_t)}if(rt(Q))return zt(q,G,Q,_t);if(st(Q)){if(kt=st(Q),typeof kt!="function")throw Error(r(150));return Q=kt.call(Q),Zt(q,G,Q,_t)}if(typeof Q.then=="function")return Ue(q,G,el(Q),_t);if(Q.$$typeof===C)return Ue(q,G,Qo(q,Q),_t);nl(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,G!==null&&G.tag===6?(a(q,G.sibling),_t=u(G,Q),_t.return=q,q=_t):(a(q,G),_t=ku(Q,q.mode,_t),_t.return=q,q=_t),_(q)):a(q,G)}return function(q,G,Q,_t){try{Hr=0;var kt=Ue(q,G,Q,_t);return Ls=null,kt}catch(Ht){if(Ht===Ds||Ht===$o)throw Ht;var ye=Bn(29,Ht,null,q.mode);return ye.lanes=_t,ye.return=q,ye}finally{}}}var qa=Ad(!0),Rd=Ad(!1),ua=!1;function ic(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ac(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ca(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function fa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(be&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=jo(t),cd(t,null,a),n}return qo(t,s,n,a),jo(t)}function Vr(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,br(t,a)}}function sc(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var rc=!1;function Xr(){if(rc){var t=Cs;if(t!==null)throw t}}function kr(t,n,a,s){rc=!1;var u=t.updateQueue;ua=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var B=E,J=B.next;B.next=null,_===null?f=J:_.next=J,_=B;var pt=t.alternate;pt!==null&&(pt=pt.updateQueue,E=pt.lastBaseUpdate,E!==_&&(E===null?pt.firstBaseUpdate=J:E.next=J,pt.lastBaseUpdate=B))}if(f!==null){var xt=u.baseState;_=0,pt=J=B=null,E=f;do{var tt=E.lane&-536870913,ot=tt!==E.lane;if(ot?(de&tt)===tt:(s&tt)===tt){tt!==0&&tt===ws&&(rc=!0),pt!==null&&(pt=pt.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var zt=t,Zt=E;tt=n;var Ue=a;switch(Zt.tag){case 1:if(zt=Zt.payload,typeof zt=="function"){xt=zt.call(Ue,xt,tt);break t}xt=zt;break t;case 3:zt.flags=zt.flags&-65537|128;case 0:if(zt=Zt.payload,tt=typeof zt=="function"?zt.call(Ue,xt,tt):zt,tt==null)break t;xt=x({},xt,tt);break t;case 2:ua=!0}}tt=E.callback,tt!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=u.callbacks,ot===null?u.callbacks=[tt]:ot.push(tt))}else ot={lane:tt,tag:E.tag,payload:E.payload,callback:E.callback,next:null},pt===null?(J=pt=ot,B=xt):pt=pt.next=ot,_|=tt;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;ot=E,E=ot.next,ot.next=null,u.lastBaseUpdate=ot,u.shared.pending=null}}while(!0);pt===null&&(B=xt),u.baseState=B,u.firstBaseUpdate=J,u.lastBaseUpdate=pt,f===null&&(u.shared.lanes=0),ga|=_,t.lanes=_,t.memoizedState=xt}}function wd(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Cd(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)wd(a[t],n)}var Us=D(null),il=D(0);function Dd(t,n){t=ki,V(il,t),V(Us,n),ki=t|n.baseLanes}function oc(){V(il,ki),V(Us,Us.current)}function lc(){ki=il.current,X(Us),X(il)}var Fn=D(null),ii=null;function ha(t){var n=t.alternate;V(qe,qe.current&1),V(Fn,t),ii===null&&(n===null||Us.current!==null||n.memoizedState!==null)&&(ii=t)}function uc(t){V(qe,qe.current),V(Fn,t),ii===null&&(ii=t)}function Ld(t){t.tag===22?(V(qe,qe.current),V(Fn,t),ii===null&&(ii=t)):da()}function da(){V(qe,qe.current),V(Fn,Fn.current)}function In(t){X(Fn),ii===t&&(ii=null),X(qe)}var qe=D(0);function al(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||gf(a)||_f(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Pi=0,ne=null,De=null,Ze=null,sl=!1,Ns=!1,ja=!1,rl=0,Wr=0,Os=null,gv=0;function Xe(){throw Error(r(321))}function cc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Pn(t[a],n[a]))return!1;return!0}function fc(t,n,a,s,u,f){return Pi=f,ne=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=t===null||t.memoizedState===null?pp:Ac,ja=!1,f=a(s,u),ja=!1,Ns&&(f=Nd(n,a,s,u)),Ud(t),f}function Ud(t){F.H=Yr;var n=De!==null&&De.next!==null;if(Pi=0,Ze=De=ne=null,sl=!1,Wr=0,Os=null,n)throw Error(r(300));t===null||Ke||(t=t.dependencies,t!==null&&Ko(t)&&(Ke=!0))}function Nd(t,n,a,s){ne=t;var u=0;do{if(Ns&&(Os=null),Wr=0,Ns=!1,25<=u)throw Error(r(301));if(u+=1,Ze=De=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}F.H=mp,f=n(a,s)}while(Ns);return f}function _v(){var t=F.H,n=t.useState()[0];return n=typeof n.then=="function"?qr(n):n,t=t.useState()[0],(De!==null?De.memoizedState:null)!==t&&(ne.flags|=1024),n}function hc(){var t=rl!==0;return rl=0,t}function dc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function pc(t){if(sl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}sl=!1}Pi=0,Ze=De=ne=null,Ns=!1,Wr=rl=0,Os=null}function yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?ne.memoizedState=Ze=t:Ze=Ze.next=t,Ze}function je(){if(De===null){var t=ne.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var n=Ze===null?ne.memoizedState:Ze.next;if(n!==null)Ze=n,De=t;else{if(t===null)throw ne.alternate===null?Error(r(467)):Error(r(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Ze===null?ne.memoizedState=Ze=t:Ze=Ze.next=t}return Ze}function ol(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function qr(t){var n=Wr;return Wr+=1,Os===null&&(Os=[]),t=Ed(Os,t,n),n=ne,(Ze===null?n.memoizedState:Ze.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?pp:Ac),t}function ll(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return qr(t);if(t.$$typeof===C)return dn(t)}throw Error(r(438,String(t)))}function mc(t){var n=null,a=ne.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ne.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ol(),ne.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=O;return n.index++,a}function Bi(t,n){return typeof n=="function"?n(t):n}function ul(t){var n=je();return gc(n,De,t)}function gc(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var E=_=null,B=null,J=n,pt=!1;do{var xt=J.lane&-536870913;if(xt!==J.lane?(de&xt)===xt:(Pi&xt)===xt){var tt=J.revertLane;if(tt===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),xt===ws&&(pt=!0);else if((Pi&tt)===tt){J=J.next,tt===ws&&(pt=!0);continue}else xt={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(E=B=xt,_=f):B=B.next=xt,ne.lanes|=tt,ga|=tt;xt=J.action,ja&&a(f,xt),f=J.hasEagerState?J.eagerState:a(f,xt)}else tt={lane:xt,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(E=B=tt,_=f):B=B.next=tt,ne.lanes|=xt,ga|=xt;J=J.next}while(J!==null&&J!==n);if(B===null?_=f:B.next=E,!Pn(f,t.memoizedState)&&(Ke=!0,pt&&(a=Cs,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=B,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function _c(t){var n=je(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);Pn(f,n.memoizedState)||(Ke=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Od(t,n,a){var s=ne,u=je(),f=ge;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!Pn((De||u).memoizedState,a);if(_&&(u.memoizedState=a,Ke=!0),u=u.queue,Sc(Bd.bind(null,s,u,t),[t]),u.getSnapshot!==n||_||Ze!==null&&Ze.memoizedState.tag&1){if(s.flags|=2048,zs(9,{destroy:void 0},Pd.bind(null,s,u,a,n),null),Ne===null)throw Error(r(349));f||(Pi&127)!==0||zd(s,n,a)}return a}function zd(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ne.updateQueue,n===null?(n=ol(),ne.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Pd(t,n,a,s){n.value=a,n.getSnapshot=s,Fd(n)&&Id(t)}function Bd(t,n,a){return a(function(){Fd(n)&&Id(t)})}function Fd(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Pn(t,a)}catch{return!0}}function Id(t){var n=Fa(t,2);n!==null&&Un(n,t,2)}function vc(t){var n=yn();if(typeof t=="function"){var a=t;if(t=a(),ja){Bt(!0);try{a()}finally{Bt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:t},n}function Hd(t,n,a,s){return t.baseState=a,gc(t,De,typeof s=="function"?s:Bi)}function vv(t,n,a,s,u){if(hl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};F.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Gd(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Gd(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=F.T,_={};F.T=_;try{var E=a(u,s),B=F.S;B!==null&&B(_,E),Vd(t,n,E)}catch(J){xc(t,n,J)}finally{f!==null&&_.types!==null&&(f.types=_.types),F.T=f}}else try{f=a(u,s),Vd(t,n,f)}catch(J){xc(t,n,J)}}function Vd(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Xd(t,n,s)},function(s){return xc(t,n,s)}):Xd(t,n,a)}function Xd(t,n,a){n.status="fulfilled",n.value=a,kd(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Gd(t,a)))}function xc(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,kd(n),n=n.next;while(n!==s)}t.action=null}function kd(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Wd(t,n){return n}function qd(t,n){if(ge){var a=Ne.formState;if(a!==null){t:{var s=ne;if(ge){if(Be){e:{for(var u=Be,f=ni;u.nodeType!==8;){if(!f){u=null;break e}if(u=ai(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Be=ai(u.nextSibling),s=u.data==="F!";break t}}oa(s)}s=!1}s&&(n=a[0])}}return a=yn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wd,lastRenderedState:n},a.queue=s,a=fp.bind(null,ne,s),s.dispatch=a,s=vc(!1),f=Tc.bind(null,ne,!1,s.queue),s=yn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=vv.bind(null,ne,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function jd(t){var n=je();return Yd(n,De,t)}function Yd(t,n,a){if(n=gc(t,n,Wd)[0],t=ul(Bi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=qr(n)}catch(_){throw _===Ds?$o:_}else s=n;n=je();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ne.flags|=2048,zs(9,{destroy:void 0},xv.bind(null,u,a),null)),[s,f,t]}function xv(t,n){t.action=n}function Zd(t){var n=je(),a=De;if(a!==null)return Yd(n,a,t);je(),n=n.memoizedState,a=je();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function zs(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=ne.updateQueue,n===null&&(n=ol(),ne.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Kd(){return je().memoizedState}function cl(t,n,a,s){var u=yn();ne.flags|=t,u.memoizedState=zs(1|n,{destroy:void 0},a,s===void 0?null:s)}function fl(t,n,a,s){var u=je();s=s===void 0?null:s;var f=u.memoizedState.inst;De!==null&&s!==null&&cc(s,De.memoizedState.deps)?u.memoizedState=zs(n,f,a,s):(ne.flags|=t,u.memoizedState=zs(1|n,f,a,s))}function Qd(t,n){cl(8390656,8,t,n)}function Sc(t,n){fl(2048,8,t,n)}function Sv(t){ne.flags|=4;var n=ne.updateQueue;if(n===null)n=ol(),ne.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Jd(t){var n=je().memoizedState;return Sv({ref:n,nextImpl:t}),function(){if((be&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function $d(t,n){return fl(4,2,t,n)}function tp(t,n){return fl(4,4,t,n)}function ep(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function np(t,n,a){a=a!=null?a.concat([t]):null,fl(4,4,ep.bind(null,n,t),a)}function Mc(){}function ip(t,n){var a=je();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&cc(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function ap(t,n){var a=je();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&cc(n,s[1]))return s[0];if(s=t(),ja){Bt(!0);try{t()}finally{Bt(!1)}}return a.memoizedState=[s,n],s}function yc(t,n,a){return a===void 0||(Pi&1073741824)!==0&&(de&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=sm(),ne.lanes|=t,ga|=t,a)}function sp(t,n,a,s){return Pn(a,n)?a:Us.current!==null?(t=yc(t,a,s),Pn(t,n)||(Ke=!0),t):(Pi&42)===0||(Pi&1073741824)!==0&&(de&261930)===0?(Ke=!0,t.memoizedState=a):(t=sm(),ne.lanes|=t,ga|=t,n)}function rp(t,n,a,s,u){var f=W.p;W.p=f!==0&&8>f?f:8;var _=F.T,E={};F.T=E,Tc(t,!1,n,a);try{var B=u(),J=F.S;if(J!==null&&J(E,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var pt=mv(B,s);jr(t,n,pt,Vn(t))}else jr(t,n,s,Vn(t))}catch(xt){jr(t,n,{then:function(){},status:"rejected",reason:xt},Vn())}finally{W.p=f,_!==null&&E.types!==null&&(_.types=E.types),F.T=_}}function Mv(){}function Ec(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=op(t).queue;rp(t,u,n,K,a===null?Mv:function(){return lp(t),a(s)})}function op(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:K},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function lp(t){var n=op(t);n.next===null&&(n=t.alternate.memoizedState),jr(t,n.next.queue,{},Vn())}function bc(){return dn(co)}function up(){return je().memoizedState}function cp(){return je().memoizedState}function yv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Vn();t=ca(a);var s=fa(n,t,a);s!==null&&(Un(s,n,a),Vr(s,n,a)),n={cache:$u()},t.payload=n;return}n=n.return}}function Ev(t,n,a){var s=Vn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},hl(t)?hp(n,a):(a=Vu(t,n,a,s),a!==null&&(Un(a,t,s),dp(a,n,s)))}function fp(t,n,a){var s=Vn();jr(t,n,a,s)}function jr(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(hl(t))hp(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,E=f(_,a);if(u.hasEagerState=!0,u.eagerState=E,Pn(E,_))return qo(t,n,u,0),Ne===null&&Wo(),!1}catch{}finally{}if(a=Vu(t,n,u,s),a!==null)return Un(a,t,s),dp(a,n,s),!0}return!1}function Tc(t,n,a,s){if(s={lane:2,revertLane:af(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},hl(t)){if(n)throw Error(r(479))}else n=Vu(t,a,s,2),n!==null&&Un(n,t,2)}function hl(t){var n=t.alternate;return t===ne||n!==null&&n===ne}function hp(t,n){Ns=sl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function dp(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,br(t,a)}}var Yr={readContext:dn,use:ll,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useLayoutEffect:Xe,useInsertionEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useSyncExternalStore:Xe,useId:Xe,useHostTransitionStatus:Xe,useFormState:Xe,useActionState:Xe,useOptimistic:Xe,useMemoCache:Xe,useCacheRefresh:Xe};Yr.useEffectEvent=Xe;var pp={readContext:dn,use:ll,useCallback:function(t,n){return yn().memoizedState=[t,n===void 0?null:n],t},useContext:dn,useEffect:Qd,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,cl(4194308,4,ep.bind(null,n,t),a)},useLayoutEffect:function(t,n){return cl(4194308,4,t,n)},useInsertionEffect:function(t,n){cl(4,2,t,n)},useMemo:function(t,n){var a=yn();n=n===void 0?null:n;var s=t();if(ja){Bt(!0);try{t()}finally{Bt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=yn();if(a!==void 0){var u=a(n);if(ja){Bt(!0);try{a(n)}finally{Bt(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=Ev.bind(null,ne,t),[s.memoizedState,t]},useRef:function(t){var n=yn();return t={current:t},n.memoizedState=t},useState:function(t){t=vc(t);var n=t.queue,a=fp.bind(null,ne,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Mc,useDeferredValue:function(t,n){var a=yn();return yc(a,t,n)},useTransition:function(){var t=vc(!1);return t=rp.bind(null,ne,t.queue,!0,!1),yn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ne,u=yn();if(ge){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ne===null)throw Error(r(349));(de&127)!==0||zd(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Qd(Bd.bind(null,s,f,t),[t]),s.flags|=2048,zs(9,{destroy:void 0},Pd.bind(null,s,f,a,n),null),a},useId:function(){var t=yn(),n=Ne.identifierPrefix;if(ge){var a=Ei,s=yi;a=(s&~(1<<32-Kt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=rl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=gv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:bc,useFormState:qd,useActionState:qd,useOptimistic:function(t){var n=yn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Tc.bind(null,ne,!0,a),a.dispatch=n,[t,n]},useMemoCache:mc,useCacheRefresh:function(){return yn().memoizedState=yv.bind(null,ne)},useEffectEvent:function(t){var n=yn(),a={impl:t};return n.memoizedState=a,function(){if((be&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Ac={readContext:dn,use:ll,useCallback:ip,useContext:dn,useEffect:Sc,useImperativeHandle:np,useInsertionEffect:$d,useLayoutEffect:tp,useMemo:ap,useReducer:ul,useRef:Kd,useState:function(){return ul(Bi)},useDebugValue:Mc,useDeferredValue:function(t,n){var a=je();return sp(a,De.memoizedState,t,n)},useTransition:function(){var t=ul(Bi)[0],n=je().memoizedState;return[typeof t=="boolean"?t:qr(t),n]},useSyncExternalStore:Od,useId:up,useHostTransitionStatus:bc,useFormState:jd,useActionState:jd,useOptimistic:function(t,n){var a=je();return Hd(a,De,t,n)},useMemoCache:mc,useCacheRefresh:cp};Ac.useEffectEvent=Jd;var mp={readContext:dn,use:ll,useCallback:ip,useContext:dn,useEffect:Sc,useImperativeHandle:np,useInsertionEffect:$d,useLayoutEffect:tp,useMemo:ap,useReducer:_c,useRef:Kd,useState:function(){return _c(Bi)},useDebugValue:Mc,useDeferredValue:function(t,n){var a=je();return De===null?yc(a,t,n):sp(a,De.memoizedState,t,n)},useTransition:function(){var t=_c(Bi)[0],n=je().memoizedState;return[typeof t=="boolean"?t:qr(t),n]},useSyncExternalStore:Od,useId:up,useHostTransitionStatus:bc,useFormState:Zd,useActionState:Zd,useOptimistic:function(t,n){var a=je();return De!==null?Hd(a,De,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:mc,useCacheRefresh:cp};mp.useEffectEvent=Jd;function Rc(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var wc={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Vn(),u=ca(s);u.payload=n,a!=null&&(u.callback=a),n=fa(t,u,s),n!==null&&(Un(n,t,s),Vr(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Vn(),u=ca(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=fa(t,u,s),n!==null&&(Un(n,t,s),Vr(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Vn(),s=ca(a);s.tag=2,n!=null&&(s.callback=n),n=fa(t,s,a),n!==null&&(Un(n,t,a),Vr(n,t,a))}};function gp(t,n,a,s,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,_):n.prototype&&n.prototype.isPureReactComponent?!Or(a,s)||!Or(u,f):!0}function _p(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&wc.enqueueReplaceState(n,n.state,null)}function Ya(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function vp(t){ko(t)}function xp(t){console.error(t)}function Sp(t){ko(t)}function dl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Mp(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Cc(t,n,a){return a=ca(a),a.tag=3,a.payload={element:null},a.callback=function(){dl(t,n)},a}function yp(t){return t=ca(t),t.tag=3,t}function Ep(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){Mp(n,a,s)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Mp(n,a,s),typeof u!="function"&&(_a===null?_a=new Set([this]):_a.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function bv(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Rs(n,a,u,!0),a=Fn.current,a!==null){switch(a.tag){case 31:case 13:return ii===null?Tl():a.alternate===null&&ke===0&&(ke=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===tl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),tf(t,s,u)),!1;case 22:return a.flags|=65536,s===tl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),tf(t,s,u)),!1}throw Error(r(435,a.tag))}return tf(t,s,u),Tl(),!1}if(ge)return n=Fn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Yu&&(t=Error(r(422),{cause:s}),Br($n(t,a)))):(s!==Yu&&(n=Error(r(423),{cause:s}),Br($n(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=$n(s,a),u=Cc(t.stateNode,s,u),sc(t,u),ke!==4&&(ke=2)),!1;var f=Error(r(520),{cause:s});if(f=$n(f,a),no===null?no=[f]:no.push(f),ke!==4&&(ke=2),n===null)return!0;s=$n(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Cc(a.stateNode,s,t),sc(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(_a===null||!_a.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=yp(u),Ep(u,t,a,s),sc(a,u),!1}a=a.return}while(a!==null);return!1}var Dc=Error(r(461)),Ke=!1;function pn(t,n,a,s){n.child=t===null?Rd(n,null,a,s):qa(n,t.child,a,s)}function bp(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var _={};for(var E in s)E!=="ref"&&(_[E]=s[E])}else _=s;return Va(n),s=fc(t,n,a,_,f,u),E=hc(),t!==null&&!Ke?(dc(t,n,u),Fi(t,n,u)):(ge&&E&&qu(n),n.flags|=1,pn(t,n,s,u),n.child)}function Tp(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!Xu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Ap(t,n,f,s,u)):(t=Yo(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Fc(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Or,a(_,s)&&t.ref===n.ref)return Fi(t,n,u)}return n.flags|=1,t=Ui(f,s),t.ref=n.ref,t.return=n,n.child=t}function Ap(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(Or(f,s)&&t.ref===n.ref)if(Ke=!1,n.pendingProps=s=f,Fc(t,u))(t.flags&131072)!==0&&(Ke=!0);else return n.lanes=t.lanes,Fi(t,n,u)}return Lc(t,n,a,s,u)}function Rp(t,n,a,s){var u=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return wp(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Jo(n,f!==null?f.cachePool:null),f!==null?Dd(n,f):oc(),Ld(n);else return s=n.lanes=536870912,wp(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(Jo(n,f.cachePool),Dd(n,f),da(),n.memoizedState=null):(t!==null&&Jo(n,null),oc(),da());return pn(t,n,u,a),n.child}function Zr(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function wp(t,n,a,s,u){var f=ec();return f=f===null?null:{parent:Ye._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Jo(n,null),oc(),Ld(n),t!==null&&Rs(t,n,s,!0),n.childLanes=u,null}function pl(t,n){return n=gl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Cp(t,n,a){return qa(n,t.child,null,a),t=pl(n,n.pendingProps),t.flags|=2,In(n),n.memoizedState=null,t}function Tv(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ge){if(s.mode==="hidden")return t=pl(n,s),n.lanes=536870912,Zr(null,t);if(uc(n),(t=Be)?(t=Gm(t,ni),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:sa!==null?{id:yi,overflow:Ei}:null,retryLane:536870912,hydrationErrors:null},a=hd(t),a.return=n,n.child=a,hn=n,Be=null)):t=null,t===null)throw oa(n);return n.lanes=536870912,null}return pl(n,s)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(uc(n),u)if(n.flags&256)n.flags&=-257,n=Cp(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(Ke||Rs(t,n,a,!1),u=(a&t.childLanes)!==0,Ke||u){if(s=Ne,s!==null&&(_=Uo(s,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Fa(t,_),Un(s,t,_),Dc;Tl(),n=Cp(t,n,a)}else t=f.treeContext,Be=ai(_.nextSibling),hn=n,ge=!0,ra=null,ni=!1,t!==null&&md(n,t),n=pl(n,s),n.flags|=4096;return n}return t=Ui(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function ml(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Lc(t,n,a,s,u){return Va(n),a=fc(t,n,a,s,void 0,u),s=hc(),t!==null&&!Ke?(dc(t,n,u),Fi(t,n,u)):(ge&&s&&qu(n),n.flags|=1,pn(t,n,a,u),n.child)}function Dp(t,n,a,s,u,f){return Va(n),n.updateQueue=null,a=Nd(n,s,a,u),Ud(t),s=hc(),t!==null&&!Ke?(dc(t,n,f),Fi(t,n,f)):(ge&&s&&qu(n),n.flags|=1,pn(t,n,a,f),n.child)}function Lp(t,n,a,s,u){if(Va(n),n.stateNode===null){var f=Es,_=a.contextType;typeof _=="object"&&_!==null&&(f=dn(_)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=wc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},ic(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?dn(_):Es,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Rc(n,a,_,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&wc.enqueueReplaceState(f,f.state,null),kr(n,s,f,u),Xr(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,B=Ya(a,E);f.props=B;var J=f.context,pt=a.contextType;_=Es,typeof pt=="object"&&pt!==null&&(_=dn(pt));var xt=a.getDerivedStateFromProps;pt=typeof xt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,pt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||J!==_)&&_p(n,f,s,_),ua=!1;var tt=n.memoizedState;f.state=tt,kr(n,s,f,u),Xr(),J=n.memoizedState,E||tt!==J||ua?(typeof xt=="function"&&(Rc(n,a,xt,s),J=n.memoizedState),(B=ua||gp(n,a,B,s,tt,J,_))?(pt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=J),f.props=s,f.state=J,f.context=_,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,ac(t,n),_=n.memoizedProps,pt=Ya(a,_),f.props=pt,xt=n.pendingProps,tt=f.context,J=a.contextType,B=Es,typeof J=="object"&&J!==null&&(B=dn(J)),E=a.getDerivedStateFromProps,(J=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==xt||tt!==B)&&_p(n,f,s,B),ua=!1,tt=n.memoizedState,f.state=tt,kr(n,s,f,u),Xr();var ot=n.memoizedState;_!==xt||tt!==ot||ua||t!==null&&t.dependencies!==null&&Ko(t.dependencies)?(typeof E=="function"&&(Rc(n,a,E,s),ot=n.memoizedState),(pt=ua||gp(n,a,pt,s,tt,ot,B)||t!==null&&t.dependencies!==null&&Ko(t.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ot,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ot,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ot),f.props=s,f.state=ot,f.context=B,s=pt):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,ml(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=qa(n,t.child,null,u),n.child=qa(n,null,a,u)):pn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=Fi(t,n,u),t}function Up(t,n,a,s){return Ha(),n.flags|=256,pn(t,n,a,s),n.child}var Uc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nc(t){return{baseLanes:t,cachePool:Md()}}function Oc(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Gn),t}function Np(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(qe.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(ge){if(u?ha(n):da(),(t=Be)?(t=Gm(t,ni),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:sa!==null?{id:yi,overflow:Ei}:null,retryLane:536870912,hydrationErrors:null},a=hd(t),a.return=n,n.child=a,hn=n,Be=null)):t=null,t===null)throw oa(n);return _f(t)?n.lanes=32:n.lanes=536870912,null}var E=s.children;return s=s.fallback,u?(da(),u=n.mode,E=gl({mode:"hidden",children:E},u),s=Ia(s,u,a,null),E.return=n,s.return=n,E.sibling=s,n.child=E,s=n.child,s.memoizedState=Nc(a),s.childLanes=Oc(t,_,a),n.memoizedState=Uc,Zr(null,s)):(ha(n),zc(n,E))}var B=t.memoizedState;if(B!==null&&(E=B.dehydrated,E!==null)){if(f)n.flags&256?(ha(n),n.flags&=-257,n=Pc(t,n,a)):n.memoizedState!==null?(da(),n.child=t.child,n.flags|=128,n=null):(da(),E=s.fallback,u=n.mode,s=gl({mode:"visible",children:s.children},u),E=Ia(E,u,a,null),E.flags|=2,s.return=n,E.return=n,s.sibling=E,n.child=s,qa(n,t.child,null,a),s=n.child,s.memoizedState=Nc(a),s.childLanes=Oc(t,_,a),n.memoizedState=Uc,n=Zr(null,s));else if(ha(n),_f(E)){if(_=E.nextSibling&&E.nextSibling.dataset,_)var J=_.dgst;_=J,s=Error(r(419)),s.stack="",s.digest=_,Br({value:s,source:null,stack:null}),n=Pc(t,n,a)}else if(Ke||Rs(t,n,a,!1),_=(a&t.childLanes)!==0,Ke||_){if(_=Ne,_!==null&&(s=Uo(_,a),s!==0&&s!==B.retryLane))throw B.retryLane=s,Fa(t,s),Un(_,t,s),Dc;gf(E)||Tl(),n=Pc(t,n,a)}else gf(E)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,Be=ai(E.nextSibling),hn=n,ge=!0,ra=null,ni=!1,t!==null&&md(n,t),n=zc(n,s.children),n.flags|=4096);return n}return u?(da(),E=s.fallback,u=n.mode,B=t.child,J=B.sibling,s=Ui(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&65011712,J!==null?E=Ui(J,E):(E=Ia(E,u,a,null),E.flags|=2),E.return=n,s.return=n,s.sibling=E,n.child=s,Zr(null,s),s=n.child,E=t.child.memoizedState,E===null?E=Nc(a):(u=E.cachePool,u!==null?(B=Ye._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=Md(),E={baseLanes:E.baseLanes|a,cachePool:u}),s.memoizedState=E,s.childLanes=Oc(t,_,a),n.memoizedState=Uc,Zr(t.child,s)):(ha(n),a=t.child,t=a.sibling,a=Ui(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function zc(t,n){return n=gl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function gl(t,n){return t=Bn(22,t,null,n),t.lanes=0,t}function Pc(t,n,a){return qa(n,t.child,null,a),t=zc(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Op(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Qu(t.return,n,a)}function Bc(t,n,a,s,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=s,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function zp(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var _=qe.current,E=(_&2)!==0;if(E?(_=_&1|2,n.flags|=128):_&=1,V(qe,_),pn(t,n,s,a),s=ge?Pr:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Op(t,a,n);else if(t.tag===19)Op(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&al(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Bc(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&al(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Bc(n,!0,a,null,f,s);break;case"together":Bc(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Fi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ga|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Rs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ui(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ui(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Fc(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Ko(t)))}function Av(t,n,a){switch(n.tag){case 3:It(n,n.stateNode.containerInfo),la(n,Ye,t.memoizedState.cache),Ha();break;case 27:case 5:Rt(n);break;case 4:It(n,n.stateNode.containerInfo);break;case 10:la(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,uc(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ha(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Np(t,n,a):(ha(n),t=Fi(t,n,a),t!==null?t.sibling:null);ha(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Rs(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return zp(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),V(qe,qe.current),s)break;return null;case 22:return n.lanes=0,Rp(t,n,a,n.pendingProps);case 24:la(n,Ye,t.memoizedState.cache)}return Fi(t,n,a)}function Pp(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)Ke=!0;else{if(!Fc(t,a)&&(n.flags&128)===0)return Ke=!1,Av(t,n,a);Ke=(t.flags&131072)!==0}else Ke=!1,ge&&(n.flags&1048576)!==0&&pd(n,Pr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=ka(n.elementType),n.type=t,typeof t=="function")Xu(t)?(s=Ya(t,s),n.tag=1,n=Lp(null,n,t,s,a)):(n.tag=0,n=Lc(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===N){n.tag=11,n=bp(null,n,t,s,a);break t}else if(u===P){n.tag=14,n=Tp(null,n,t,s,a);break t}}throw n=at(t)||t,Error(r(306,n,""))}}return n;case 0:return Lc(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=Ya(s,n.pendingProps),Lp(t,n,s,u,a);case 3:t:{if(It(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,ac(t,n),kr(n,s,null,a);var _=n.memoizedState;if(s=_.cache,la(n,Ye,s),s!==f.cache&&Ju(n,[Ye],a,!0),Xr(),s=_.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Up(t,n,s,a);break t}else if(s!==u){u=$n(Error(r(424)),n),Br(u),n=Up(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Be=ai(t.firstChild),hn=n,ge=!0,ra=null,ni=!0,a=Rd(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ha(),s===u){n=Fi(t,n,a);break t}pn(t,n,s,a)}n=n.child}return n;case 26:return ml(t,n),t===null?(a=jm(n.type,null,n.pendingProps,null))?n.memoizedState=a:ge||(a=n.type,t=n.pendingProps,s=Ul(yt.current).createElement(a),s[j]=n,s[ct]=t,mn(s,a,t),le(s),n.stateNode=s):n.memoizedState=jm(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Rt(n),t===null&&ge&&(s=n.stateNode=km(n.type,n.pendingProps,yt.current),hn=n,ni=!0,u=Be,Ma(n.type)?(vf=u,Be=ai(s.firstChild)):Be=u),pn(t,n,n.pendingProps.children,a),ml(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ge&&((u=s=Be)&&(s=nx(s,n.type,n.pendingProps,ni),s!==null?(n.stateNode=s,hn=n,Be=ai(s.firstChild),ni=!1,u=!0):u=!1),u||oa(n)),Rt(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,s=f.children,df(u,f)?s=null:_!==null&&df(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=fc(t,n,_v,null,null,a),co._currentValue=u),ml(t,n),pn(t,n,s,a),n.child;case 6:return t===null&&ge&&((t=a=Be)&&(a=ix(a,n.pendingProps,ni),a!==null?(n.stateNode=a,hn=n,Be=null,t=!0):t=!1),t||oa(n)),null;case 13:return Np(t,n,a);case 4:return It(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=qa(n,null,s,a):pn(t,n,s,a),n.child;case 11:return bp(t,n,n.type,n.pendingProps,a);case 7:return pn(t,n,n.pendingProps,a),n.child;case 8:return pn(t,n,n.pendingProps.children,a),n.child;case 12:return pn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,la(n,n.type,s.value),pn(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,Va(n),u=dn(u),s=s(u),n.flags|=1,pn(t,n,s,a),n.child;case 14:return Tp(t,n,n.type,n.pendingProps,a);case 15:return Ap(t,n,n.type,n.pendingProps,a);case 19:return zp(t,n,a);case 31:return Tv(t,n,a);case 22:return Rp(t,n,a,n.pendingProps);case 24:return Va(n),s=dn(Ye),t===null?(u=ec(),u===null&&(u=Ne,f=$u(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},ic(n),la(n,Ye,u)):((t.lanes&a)!==0&&(ac(t,n),kr(n,null,null,a),Xr()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),la(n,Ye,s)):(s=f.cache,la(n,Ye,s),s!==u.cache&&Ju(n,[Ye],a,!0))),pn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ii(t){t.flags|=4}function Ic(t,n,a,s,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(um())t.flags|=8192;else throw Wa=tl,nc}else t.flags&=-16777217}function Bp(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Jm(n))if(um())t.flags|=8192;else throw Wa=tl,nc}function _l(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ci():536870912,t.lanes|=n,Is|=n)}function Kr(t,n){if(!ge)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Fe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Rv(t,n,a){var s=n.pendingProps;switch(ju(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(n),null;case 1:return Fe(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),zi(Ye),Nt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(As(n)?Ii(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Zu())),Fe(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(Ii(n),f!==null?(Fe(n),Bp(n,f)):(Fe(n),Ic(n,u,null,s,a))):f?f!==t.memoizedState?(Ii(n),Fe(n),Bp(n,f)):(Fe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Ii(n),Fe(n),Ic(n,u,t,s,a)),null;case 27:if(ft(n),a=yt.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ii(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Fe(n),null}t=Z.current,As(n)?gd(n):(t=km(u,s,a),n.stateNode=t,Ii(n))}return Fe(n),null;case 5:if(ft(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ii(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Fe(n),null}if(f=Z.current,As(n))gd(n);else{var _=Ul(yt.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?_.createElement("select",{is:s.is}):_.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?_.createElement(u,{is:s.is}):_.createElement(u)}}f[j]=n,f[ct]=s;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(mn(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Ii(n)}}return Fe(n),Ic(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Ii(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=yt.current,As(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=hn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[j]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Nm(t.nodeValue,a)),t||oa(n,!0)}else t=Ul(t).createTextNode(s),t[j]=n,n.stateNode=t}return Fe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=As(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[j]=n}else Ha(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Fe(n),t=!1}else a=Zu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(In(n),n):(In(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Fe(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=As(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[j]=n}else Ha(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Fe(n),u=!1}else u=Zu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(In(n),n):(In(n),null)}return In(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),_l(n,n.updateQueue),Fe(n),null);case 4:return Nt(),t===null&&lf(n.stateNode.containerInfo),Fe(n),null;case 10:return zi(n.type),Fe(n),null;case 19:if(X(qe),s=n.memoizedState,s===null)return Fe(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)Kr(s,!1);else{if(ke!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=al(t),f!==null){for(n.flags|=128,Kr(s,!1),t=f.updateQueue,n.updateQueue=t,_l(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)fd(a,t),a=a.sibling;return V(qe,qe.current&1|2),ge&&Ni(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&lt()>yl&&(n.flags|=128,u=!0,Kr(s,!1),n.lanes=4194304)}else{if(!u)if(t=al(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,_l(n,t),Kr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!ge)return Fe(n),null}else 2*lt()-s.renderingStartTime>yl&&a!==536870912&&(n.flags|=128,u=!0,Kr(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=lt(),t.sibling=null,a=qe.current,V(qe,u?a&1|2:a&1),ge&&Ni(n,s.treeForkCount),t):(Fe(n),null);case 22:case 23:return In(n),lc(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Fe(n),n.subtreeFlags&6&&(n.flags|=8192)):Fe(n),a=n.updateQueue,a!==null&&_l(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&X(Xa),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),zi(Ye),Fe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function wv(t,n){switch(ju(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return zi(Ye),Nt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ft(n),null;case 31:if(n.memoizedState!==null){if(In(n),n.alternate===null)throw Error(r(340));Ha()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(In(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ha()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return X(qe),null;case 4:return Nt(),null;case 10:return zi(n.type),null;case 22:case 23:return In(n),lc(),t!==null&&X(Xa),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return zi(Ye),null;case 25:return null;default:return null}}function Fp(t,n){switch(ju(n),n.tag){case 3:zi(Ye),Nt();break;case 26:case 27:case 5:ft(n);break;case 4:Nt();break;case 31:n.memoizedState!==null&&In(n);break;case 13:In(n);break;case 19:X(qe);break;case 10:zi(n.type);break;case 22:case 23:In(n),lc(),t!==null&&X(Xa);break;case 24:zi(Ye)}}function Qr(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,_=a.inst;s=f(),_.destroy=s}a=a.next}while(a!==u)}}catch(E){Re(n,n.return,E)}}function pa(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var _=s.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,u=n;var B=a,J=E;try{J()}catch(pt){Re(u,B,pt)}}}s=s.next}while(s!==f)}}catch(pt){Re(n,n.return,pt)}}function Ip(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Cd(n,a)}catch(s){Re(t,t.return,s)}}}function Hp(t,n,a){a.props=Ya(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Re(t,n,s)}}function Jr(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){Re(t,n,u)}}function bi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Re(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Re(t,n,u)}else a.current=null}function Gp(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Re(t,t.return,u)}}function Hc(t,n,a){try{var s=t.stateNode;Kv(s,t.type,a,n),s[ct]=n}catch(u){Re(t,t.return,u)}}function Vp(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ma(t.type)||t.tag===4}function Gc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Vp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ma(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vc(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Di));else if(s!==4&&(s===27&&Ma(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Vc(t,n,a),t=t.sibling;t!==null;)Vc(t,n,a),t=t.sibling}function vl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Ma(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(vl(t,n,a),t=t.sibling;t!==null;)vl(t,n,a),t=t.sibling}function Xp(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);mn(n,s,a),n[j]=t,n[ct]=a}catch(f){Re(t,t.return,f)}}var Hi=!1,Qe=!1,Xc=!1,kp=typeof WeakSet=="function"?WeakSet:Set,on=null;function Cv(t,n){if(t=t.containerInfo,ff=Il,t=nd(t),Pu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,E=-1,B=-1,J=0,pt=0,xt=t,tt=null;e:for(;;){for(var ot;xt!==a||u!==0&&xt.nodeType!==3||(E=_+u),xt!==f||s!==0&&xt.nodeType!==3||(B=_+s),xt.nodeType===3&&(_+=xt.nodeValue.length),(ot=xt.firstChild)!==null;)tt=xt,xt=ot;for(;;){if(xt===t)break e;if(tt===a&&++J===u&&(E=_),tt===f&&++pt===s&&(B=_),(ot=xt.nextSibling)!==null)break;xt=tt,tt=xt.parentNode}xt=ot}a=E===-1||B===-1?null:{start:E,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(hf={focusedElem:t,selectionRange:a},Il=!1,on=n;on!==null;)if(n=on,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,on=t;else for(;on!==null;){switch(n=on,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var zt=Ya(a.type,u);t=s.getSnapshotBeforeUpdate(zt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Zt){Re(a,a.return,Zt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)mf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":mf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,on=t;break}on=n.return}}function Wp(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Vi(t,a),s&4&&Qr(5,a);break;case 1:if(Vi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Re(a,a.return,_)}else{var u=Ya(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Re(a,a.return,_)}}s&64&&Ip(a),s&512&&Jr(a,a.return);break;case 3:if(Vi(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Cd(t,n)}catch(_){Re(a,a.return,_)}}break;case 27:n===null&&s&4&&Xp(a);case 26:case 5:Vi(t,a),n===null&&s&4&&Gp(a),s&512&&Jr(a,a.return);break;case 12:Vi(t,a);break;case 31:Vi(t,a),s&4&&Yp(t,a);break;case 13:Vi(t,a),s&4&&Zp(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Fv.bind(null,a),ax(t,a))));break;case 22:if(s=a.memoizedState!==null||Hi,!s){n=n!==null&&n.memoizedState!==null||Qe,u=Hi;var f=Qe;Hi=s,(Qe=n)&&!f?Xi(t,a,(a.subtreeFlags&8772)!==0):Vi(t,a),Hi=u,Qe=f}break;case 30:break;default:Vi(t,a)}}function qp(t){var n=t.alternate;n!==null&&(t.alternate=null,qp(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&re(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ie=null,wn=!1;function Gi(t,n,a){for(a=a.child;a!==null;)jp(t,n,a),a=a.sibling}function jp(t,n,a){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Xt,a)}catch{}switch(a.tag){case 26:Qe||bi(a,n),Gi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Qe||bi(a,n);var s=Ie,u=wn;Ma(a.type)&&(Ie=a.stateNode,wn=!1),Gi(t,n,a),oo(a.stateNode),Ie=s,wn=u;break;case 5:Qe||bi(a,n);case 6:if(s=Ie,u=wn,Ie=null,Gi(t,n,a),Ie=s,wn=u,Ie!==null)if(wn)try{(Ie.nodeType===9?Ie.body:Ie.nodeName==="HTML"?Ie.ownerDocument.body:Ie).removeChild(a.stateNode)}catch(f){Re(a,n,f)}else try{Ie.removeChild(a.stateNode)}catch(f){Re(a,n,f)}break;case 18:Ie!==null&&(wn?(t=Ie,Im(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),js(t)):Im(Ie,a.stateNode));break;case 4:s=Ie,u=wn,Ie=a.stateNode.containerInfo,wn=!0,Gi(t,n,a),Ie=s,wn=u;break;case 0:case 11:case 14:case 15:pa(2,a,n),Qe||pa(4,a,n),Gi(t,n,a);break;case 1:Qe||(bi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Hp(a,n,s)),Gi(t,n,a);break;case 21:Gi(t,n,a);break;case 22:Qe=(s=Qe)||a.memoizedState!==null,Gi(t,n,a),Qe=s;break;default:Gi(t,n,a)}}function Yp(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{js(t)}catch(a){Re(n,n.return,a)}}}function Zp(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{js(t)}catch(a){Re(n,n.return,a)}}function Dv(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new kp),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new kp),n;default:throw Error(r(435,t.tag))}}function xl(t,n){var a=Dv(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=Iv.bind(null,t,s);s.then(u,u)}})}function Cn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,_=n,E=_;t:for(;E!==null;){switch(E.tag){case 27:if(Ma(E.type)){Ie=E.stateNode,wn=!1;break t}break;case 5:Ie=E.stateNode,wn=!1;break t;case 3:case 4:Ie=E.stateNode.containerInfo,wn=!0;break t}E=E.return}if(Ie===null)throw Error(r(160));jp(f,_,u),Ie=null,wn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Kp(n,t),n=n.sibling}var hi=null;function Kp(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Cn(n,t),Dn(t),s&4&&(pa(3,t,t.return),Qr(3,t),pa(5,t,t.return));break;case 1:Cn(n,t),Dn(t),s&512&&(Qe||a===null||bi(a,a.return)),s&64&&Hi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=hi;if(Cn(n,t),Dn(t),s&512&&(Qe||a===null||bi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ee]||f[j]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),mn(f,s,a),f[j]=t,le(f),s=f;break t;case"link":var _=Km("link","href",u).get(s+(a.href||""));if(_){for(var E=0;E<_.length;E++)if(f=_[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(E,1);break e}}f=u.createElement(s),mn(f,s,a),u.head.appendChild(f);break;case"meta":if(_=Km("meta","content",u).get(s+(a.content||""))){for(E=0;E<_.length;E++)if(f=_[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(E,1);break e}}f=u.createElement(s),mn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[j]=t,le(f),s=f}t.stateNode=s}else Qm(u,t.type,t.stateNode);else t.stateNode=Zm(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Qm(u,t.type,t.stateNode):Zm(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Hc(t,t.memoizedProps,a.memoizedProps)}break;case 27:Cn(n,t),Dn(t),s&512&&(Qe||a===null||bi(a,a.return)),a!==null&&s&4&&Hc(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Cn(n,t),Dn(t),s&512&&(Qe||a===null||bi(a,a.return)),t.flags&32){u=t.stateNode;try{gs(u,"")}catch(zt){Re(t,t.return,zt)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,Hc(t,u,a!==null?a.memoizedProps:u)),s&1024&&(Xc=!0);break;case 6:if(Cn(n,t),Dn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(zt){Re(t,t.return,zt)}}break;case 3:if(zl=null,u=hi,hi=Nl(n.containerInfo),Cn(n,t),hi=u,Dn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{js(n.containerInfo)}catch(zt){Re(t,t.return,zt)}Xc&&(Xc=!1,Qp(t));break;case 4:s=hi,hi=Nl(t.stateNode.containerInfo),Cn(n,t),Dn(t),hi=s;break;case 12:Cn(n,t),Dn(t);break;case 31:Cn(n,t),Dn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,xl(t,s)));break;case 13:Cn(n,t),Dn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ml=lt()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,xl(t,s)));break;case 22:u=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,J=Hi,pt=Qe;if(Hi=J||u,Qe=pt||B,Cn(n,t),Qe=pt,Hi=J,Dn(t),s&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||Hi||Qe||Za(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{E=B.stateNode;var xt=B.memoizedProps.style,tt=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;E.style.display=tt==null||typeof tt=="boolean"?"":(""+tt).trim()}}catch(zt){Re(B,B.return,zt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(zt){Re(B,B.return,zt)}}}else if(n.tag===18){if(a===null){B=n;try{var ot=B.stateNode;u?Hm(ot,!0):Hm(B.stateNode,!1)}catch(zt){Re(B,B.return,zt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,xl(t,a))));break;case 19:Cn(n,t),Dn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,xl(t,s)));break;case 30:break;case 21:break;default:Cn(n,t),Dn(t)}}function Dn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Vp(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Gc(t);vl(t,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(gs(_,""),a.flags&=-33);var E=Gc(t);vl(t,E,_);break;case 3:case 4:var B=a.stateNode.containerInfo,J=Gc(t);Vc(t,J,B);break;default:throw Error(r(161))}}catch(pt){Re(t,t.return,pt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Qp(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Qp(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Vi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Wp(t,n.alternate,n),n=n.sibling}function Za(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:pa(4,n,n.return),Za(n);break;case 1:bi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Hp(n,n.return,a),Za(n);break;case 27:oo(n.stateNode);case 26:case 5:bi(n,n.return),Za(n);break;case 22:n.memoizedState===null&&Za(n);break;case 30:Za(n);break;default:Za(n)}t=t.sibling}}function Xi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:Xi(u,f,a),Qr(4,f);break;case 1:if(Xi(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){Re(s,s.return,J)}if(s=f,u=s.updateQueue,u!==null){var E=s.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)wd(B[u],E)}catch(J){Re(s,s.return,J)}}a&&_&64&&Ip(f),Jr(f,f.return);break;case 27:Xp(f);case 26:case 5:Xi(u,f,a),a&&s===null&&_&4&&Gp(f),Jr(f,f.return);break;case 12:Xi(u,f,a);break;case 31:Xi(u,f,a),a&&_&4&&Yp(u,f);break;case 13:Xi(u,f,a),a&&_&4&&Zp(u,f);break;case 22:f.memoizedState===null&&Xi(u,f,a),Jr(f,f.return);break;case 30:break;default:Xi(u,f,a)}n=n.sibling}}function kc(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Fr(a))}function Wc(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Fr(t))}function di(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Jp(t,n,a,s),n=n.sibling}function Jp(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:di(t,n,a,s),u&2048&&Qr(9,n);break;case 1:di(t,n,a,s);break;case 3:di(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Fr(t)));break;case 12:if(u&2048){di(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,E=f.onPostCommit;typeof E=="function"&&E(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Re(n,n.return,B)}}else di(t,n,a,s);break;case 31:di(t,n,a,s);break;case 13:di(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?di(t,n,a,s):$r(t,n):f._visibility&2?di(t,n,a,s):(f._visibility|=2,Ps(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&kc(_,n);break;case 24:di(t,n,a,s),u&2048&&Wc(n.alternate,n);break;default:di(t,n,a,s)}}function Ps(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,E=a,B=s,J=_.flags;switch(_.tag){case 0:case 11:case 15:Ps(f,_,E,B,u),Qr(8,_);break;case 23:break;case 22:var pt=_.stateNode;_.memoizedState!==null?pt._visibility&2?Ps(f,_,E,B,u):$r(f,_):(pt._visibility|=2,Ps(f,_,E,B,u)),u&&J&2048&&kc(_.alternate,_);break;case 24:Ps(f,_,E,B,u),u&&J&2048&&Wc(_.alternate,_);break;default:Ps(f,_,E,B,u)}n=n.sibling}}function $r(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:$r(a,s),u&2048&&kc(s.alternate,s);break;case 24:$r(a,s),u&2048&&Wc(s.alternate,s);break;default:$r(a,s)}n=n.sibling}}var to=8192;function Bs(t,n,a){if(t.subtreeFlags&to)for(t=t.child;t!==null;)$p(t,n,a),t=t.sibling}function $p(t,n,a){switch(t.tag){case 26:Bs(t,n,a),t.flags&to&&t.memoizedState!==null&&gx(a,hi,t.memoizedState,t.memoizedProps);break;case 5:Bs(t,n,a);break;case 3:case 4:var s=hi;hi=Nl(t.stateNode.containerInfo),Bs(t,n,a),hi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=to,to=16777216,Bs(t,n,a),to=s):Bs(t,n,a));break;default:Bs(t,n,a)}}function tm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function eo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];on=s,nm(s,t)}tm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)em(t),t=t.sibling}function em(t){switch(t.tag){case 0:case 11:case 15:eo(t),t.flags&2048&&pa(9,t,t.return);break;case 3:eo(t);break;case 12:eo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Sl(t)):eo(t);break;default:eo(t)}}function Sl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];on=s,nm(s,t)}tm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:pa(8,n,n.return),Sl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Sl(n));break;default:Sl(n)}t=t.sibling}}function nm(t,n){for(;on!==null;){var a=on;switch(a.tag){case 0:case 11:case 15:pa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Fr(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,on=s;else t:for(a=t;on!==null;){s=on;var u=s.sibling,f=s.return;if(qp(s),s===a){on=null;break t}if(u!==null){u.return=f,on=u;break t}on=f}}}var Lv={getCacheForType:function(t){var n=dn(Ye),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return dn(Ye).controller.signal}},Uv=typeof WeakMap=="function"?WeakMap:Map,be=0,Ne=null,fe=null,de=0,Ae=0,Hn=null,ma=!1,Fs=!1,qc=!1,ki=0,ke=0,ga=0,Ka=0,jc=0,Gn=0,Is=0,no=null,Ln=null,Yc=!1,Ml=0,im=0,yl=1/0,El=null,_a=null,tn=0,va=null,Hs=null,Wi=0,Zc=0,Kc=null,am=null,io=0,Qc=null;function Vn(){return(be&2)!==0&&de!==0?de&-de:F.T!==null?af():w()}function sm(){if(Gn===0)if((de&536870912)===0||ge){var t=bt;bt<<=1,(bt&3932160)===0&&(bt=262144),Gn=t}else Gn=536870912;return t=Fn.current,t!==null&&(t.flags|=32),Gn}function Un(t,n,a){(t===Ne&&(Ae===2||Ae===9)||t.cancelPendingCommit!==null)&&(Gs(t,0),xa(t,de,Gn,!1)),rn(t,a),((be&2)===0||t!==Ne)&&(t===Ne&&((be&2)===0&&(Ka|=a),ke===4&&xa(t,de,Gn,!1)),Ti(t))}function rm(t,n,a){if((be&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Se(t,n),u=s?zv(t,n):$c(t,n,!0),f=s;do{if(u===0){Fs&&!s&&xa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Nv(a)){u=$c(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var E=t;u=no;var B=E.current.memoizedState.isDehydrated;if(B&&(Gs(E,_).flags|=256),_=$c(E,_,!1),_!==2){if(qc&&!B){E.errorRecoveryDisabledLanes|=f,Ka|=f,u=4;break t}f=Ln,Ln=u,f!==null&&(Ln===null?Ln=f:Ln.push.apply(Ln,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){Gs(t,0),xa(t,n,0,!0);break}t:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:xa(s,n,Gn,!ma);break t;case 2:Ln=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Ml+300-lt(),10<u)){if(xa(s,n,Gn,!ma),Me(s,0,!0)!==0)break t;Wi=n,s.timeoutHandle=Bm(om.bind(null,s,a,Ln,El,Yc,n,Gn,Ka,Is,ma,f,"Throttled",-0,0),u);break t}om(s,a,Ln,El,Yc,n,Gn,Ka,Is,ma,f,null,-0,0)}}break}while(!0);Ti(t)}function om(t,n,a,s,u,f,_,E,B,J,pt,xt,tt,ot){if(t.timeoutHandle=-1,xt=n.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Di},$p(n,f,xt);var zt=(f&62914560)===f?Ml-lt():(f&4194048)===f?im-lt():0;if(zt=_x(xt,zt),zt!==null){Wi=f,t.cancelPendingCommit=zt(mm.bind(null,t,n,f,a,s,u,_,E,B,pt,xt,null,tt,ot)),xa(t,f,_,!J);return}}mm(t,n,f,a,s,u,_,E,B)}function Nv(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Pn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function xa(t,n,a,s){n&=~jc,n&=~Ka,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-Kt(u),_=1<<f;s[f]=-1,u&=~_}a!==0&&Oa(t,a,n)}function bl(){return(be&6)===0?(ao(0),!1):!0}function Jc(){if(fe!==null){if(Ae===0)var t=fe.return;else t=fe,Oi=Ga=null,pc(t),Ls=null,Hr=0,t=fe;for(;t!==null;)Fp(t.alternate,t),t=t.return;fe=null}}function Gs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,$v(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Wi=0,Jc(),Ne=t,fe=a=Ui(t.current,null),de=n,Ae=0,Hn=null,ma=!1,Fs=Se(t,n),qc=!1,Is=Gn=jc=Ka=ga=ke=0,Ln=no=null,Yc=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-Kt(s),f=1<<u;n|=t[u],s&=~f}return ki=n,Wo(),a}function lm(t,n){ne=null,F.H=Yr,n===Ds||n===$o?(n=bd(),Ae=3):n===nc?(n=bd(),Ae=4):Ae=n===Dc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Hn=n,fe===null&&(ke=1,dl(t,$n(n,t.current)))}function um(){var t=Fn.current;return t===null?!0:(de&4194048)===de?ii===null:(de&62914560)===de||(de&536870912)!==0?t===ii:!1}function cm(){var t=F.H;return F.H=Yr,t===null?Yr:t}function fm(){var t=F.A;return F.A=Lv,t}function Tl(){ke=4,ma||(de&4194048)!==de&&Fn.current!==null||(Fs=!0),(ga&134217727)===0&&(Ka&134217727)===0||Ne===null||xa(Ne,de,Gn,!1)}function $c(t,n,a){var s=be;be|=2;var u=cm(),f=fm();(Ne!==t||de!==n)&&(El=null,Gs(t,n)),n=!1;var _=ke;t:do try{if(Ae!==0&&fe!==null){var E=fe,B=Hn;switch(Ae){case 8:Jc(),_=6;break t;case 3:case 2:case 9:case 6:Fn.current===null&&(n=!0);var J=Ae;if(Ae=0,Hn=null,Vs(t,E,B,J),a&&Fs){_=0;break t}break;default:J=Ae,Ae=0,Hn=null,Vs(t,E,B,J)}}Ov(),_=ke;break}catch(pt){lm(t,pt)}while(!0);return n&&t.shellSuspendCounter++,Oi=Ga=null,be=s,F.H=u,F.A=f,fe===null&&(Ne=null,de=0,Wo()),_}function Ov(){for(;fe!==null;)hm(fe)}function zv(t,n){var a=be;be|=2;var s=cm(),u=fm();Ne!==t||de!==n?(El=null,yl=lt()+500,Gs(t,n)):Fs=Se(t,n);t:do try{if(Ae!==0&&fe!==null){n=fe;var f=Hn;e:switch(Ae){case 1:Ae=0,Hn=null,Vs(t,n,f,1);break;case 2:case 9:if(yd(f)){Ae=0,Hn=null,dm(n);break}n=function(){Ae!==2&&Ae!==9||Ne!==t||(Ae=7),Ti(t)},f.then(n,n);break t;case 3:Ae=7;break t;case 4:Ae=5;break t;case 7:yd(f)?(Ae=0,Hn=null,dm(n)):(Ae=0,Hn=null,Vs(t,n,f,7));break;case 5:var _=null;switch(fe.tag){case 26:_=fe.memoizedState;case 5:case 27:var E=fe;if(_?Jm(_):E.stateNode.complete){Ae=0,Hn=null;var B=E.sibling;if(B!==null)fe=B;else{var J=E.return;J!==null?(fe=J,Al(J)):fe=null}break e}}Ae=0,Hn=null,Vs(t,n,f,5);break;case 6:Ae=0,Hn=null,Vs(t,n,f,6);break;case 8:Jc(),ke=6;break t;default:throw Error(r(462))}}Pv();break}catch(pt){lm(t,pt)}while(!0);return Oi=Ga=null,F.H=s,F.A=u,be=a,fe!==null?0:(Ne=null,de=0,Wo(),ke)}function Pv(){for(;fe!==null&&!L();)hm(fe)}function hm(t){var n=Pp(t.alternate,t,ki);t.memoizedProps=t.pendingProps,n===null?Al(t):fe=n}function dm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Dp(a,n,n.pendingProps,n.type,void 0,de);break;case 11:n=Dp(a,n,n.pendingProps,n.type.render,n.ref,de);break;case 5:pc(n);default:Fp(a,n),n=fe=fd(n,ki),n=Pp(a,n,ki)}t.memoizedProps=t.pendingProps,n===null?Al(t):fe=n}function Vs(t,n,a,s){Oi=Ga=null,pc(n),Ls=null,Hr=0;var u=n.return;try{if(bv(t,u,n,a,de)){ke=1,dl(t,$n(a,t.current)),fe=null;return}}catch(f){if(u!==null)throw fe=u,f;ke=1,dl(t,$n(a,t.current)),fe=null;return}n.flags&32768?(ge||s===1?t=!0:Fs||(de&536870912)!==0?t=!1:(ma=t=!0,(s===2||s===9||s===3||s===6)&&(s=Fn.current,s!==null&&s.tag===13&&(s.flags|=16384))),pm(n,t)):Al(n)}function Al(t){var n=t;do{if((n.flags&32768)!==0){pm(n,ma);return}t=n.return;var a=Rv(n.alternate,n,ki);if(a!==null){fe=a;return}if(n=n.sibling,n!==null){fe=n;return}fe=n=t}while(n!==null);ke===0&&(ke=5)}function pm(t,n){do{var a=wv(t.alternate,t);if(a!==null){a.flags&=32767,fe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){fe=t;return}fe=t=a}while(t!==null);ke=6,fe=null}function mm(t,n,a,s,u,f,_,E,B){t.cancelPendingCommit=null;do Rl();while(tn!==0);if((be&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Gu,Zn(t,a,f,_,E,B),t===Ne&&(fe=Ne=null,de=0),Hs=n,va=t,Wi=a,Zc=f,Kc=u,am=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Hv(Yt,function(){return Sm(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=F.T,F.T=null,u=W.p,W.p=2,_=be,be|=4;try{Cv(t,n,a)}finally{be=_,W.p=u,F.T=s}}tn=1,gm(),_m(),vm()}}function gm(){if(tn===1){tn=0;var t=va,n=Hs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var s=W.p;W.p=2;var u=be;be|=4;try{Kp(n,t);var f=hf,_=nd(t.containerInfo),E=f.focusedElem,B=f.selectionRange;if(_!==E&&E&&E.ownerDocument&&ed(E.ownerDocument.documentElement,E)){if(B!==null&&Pu(E)){var J=B.start,pt=B.end;if(pt===void 0&&(pt=J),"selectionStart"in E)E.selectionStart=J,E.selectionEnd=Math.min(pt,E.value.length);else{var xt=E.ownerDocument||document,tt=xt&&xt.defaultView||window;if(tt.getSelection){var ot=tt.getSelection(),zt=E.textContent.length,Zt=Math.min(B.start,zt),Ue=B.end===void 0?Zt:Math.min(B.end,zt);!ot.extend&&Zt>Ue&&(_=Ue,Ue=Zt,Zt=_);var q=td(E,Zt),G=td(E,Ue);if(q&&G&&(ot.rangeCount!==1||ot.anchorNode!==q.node||ot.anchorOffset!==q.offset||ot.focusNode!==G.node||ot.focusOffset!==G.offset)){var Q=xt.createRange();Q.setStart(q.node,q.offset),ot.removeAllRanges(),Zt>Ue?(ot.addRange(Q),ot.extend(G.node,G.offset)):(Q.setEnd(G.node,G.offset),ot.addRange(Q))}}}}for(xt=[],ot=E;ot=ot.parentNode;)ot.nodeType===1&&xt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<xt.length;E++){var _t=xt[E];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}Il=!!ff,hf=ff=null}finally{be=u,W.p=s,F.T=a}}t.current=n,tn=2}}function _m(){if(tn===2){tn=0;var t=va,n=Hs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var s=W.p;W.p=2;var u=be;be|=4;try{Wp(t,n.alternate,n)}finally{be=u,W.p=s,F.T=a}}tn=3}}function vm(){if(tn===4||tn===3){tn=0,R();var t=va,n=Hs,a=Wi,s=am;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?tn=5:(tn=0,Hs=va=null,xm(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(_a=null),Ar(a),n=n.stateNode,wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Xt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=F.T,u=W.p,W.p=2,F.T=null;try{for(var f=t.onRecoverableError,_=0;_<s.length;_++){var E=s[_];f(E.value,{componentStack:E.stack})}}finally{F.T=n,W.p=u}}(Wi&3)!==0&&Rl(),Ti(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Qc?io++:(io=0,Qc=t):io=0,ao(0)}}function xm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Fr(n)))}function Rl(){return gm(),_m(),vm(),Sm()}function Sm(){if(tn!==5)return!1;var t=va,n=Zc;Zc=0;var a=Ar(Wi),s=F.T,u=W.p;try{W.p=32>a?32:a,F.T=null,a=Kc,Kc=null;var f=va,_=Wi;if(tn=0,Hs=va=null,Wi=0,(be&6)!==0)throw Error(r(331));var E=be;if(be|=4,em(f.current),Jp(f,f.current,_,a),be=E,ao(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Xt,f)}catch{}return!0}finally{W.p=u,F.T=s,xm(t,n)}}function Mm(t,n,a){n=$n(a,n),n=Cc(t.stateNode,n,2),t=fa(t,n,2),t!==null&&(rn(t,2),Ti(t))}function Re(t,n,a){if(t.tag===3)Mm(t,t,a);else for(;n!==null;){if(n.tag===3){Mm(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(_a===null||!_a.has(s))){t=$n(a,t),a=yp(2),s=fa(n,a,2),s!==null&&(Ep(a,s,n,t),rn(s,2),Ti(s));break}}n=n.return}}function tf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Uv;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(qc=!0,u.add(a),t=Bv.bind(null,t,n,a),n.then(t,t))}function Bv(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ne===t&&(de&a)===a&&(ke===4||ke===3&&(de&62914560)===de&&300>lt()-Ml?(be&2)===0&&Gs(t,0):jc|=a,Is===de&&(Is=0)),Ti(t)}function ym(t,n){n===0&&(n=ci()),t=Fa(t,n),t!==null&&(rn(t,n),Ti(t))}function Fv(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),ym(t,a)}function Iv(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),ym(t,a)}function Hv(t,n){return Jt(t,n)}var wl=null,Xs=null,ef=!1,Cl=!1,nf=!1,Sa=0;function Ti(t){t!==Xs&&t.next===null&&(Xs===null?wl=Xs=t:Xs=Xs.next=t),Cl=!0,ef||(ef=!0,Vv())}function ao(t,n){if(!nf&&Cl){nf=!0;do for(var a=!1,s=wl;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var _=s.suspendedLanes,E=s.pingedLanes;f=(1<<31-Kt(42|t)+1)-1,f&=u&~(_&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Am(s,f))}else f=de,f=Me(s,s===Ne?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Se(s,f)||(a=!0,Am(s,f));s=s.next}while(a);nf=!1}}function Gv(){Em()}function Em(){Cl=ef=!1;var t=0;Sa!==0&&Jv()&&(t=Sa);for(var n=lt(),a=null,s=wl;s!==null;){var u=s.next,f=bm(s,n);f===0?(s.next=null,a===null?wl=u:a.next=u,u===null&&(Xs=a)):(a=s,(t!==0||(f&3)!==0)&&(Cl=!0)),s=u}tn!==0&&tn!==5||ao(t),Sa!==0&&(Sa=0)}function bm(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Kt(f),E=1<<_,B=u[_];B===-1?((E&a)===0||(E&s)!==0)&&(u[_]=sn(E,n)):B<=n&&(t.expiredLanes|=E),f&=~E}if(n=Ne,a=de,a=Me(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Ae===2||Ae===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&an(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Se(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&an(s),Ar(a)){case 2:case 8:a=Dt;break;case 32:a=Yt;break;case 268435456:a=gt;break;default:a=Yt}return s=Tm.bind(null,t),a=Jt(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&an(s),t.callbackPriority=2,t.callbackNode=null,2}function Tm(t,n){if(tn!==0&&tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Rl()&&t.callbackNode!==a)return null;var s=de;return s=Me(t,t===Ne?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(rm(t,s,n),bm(t,lt()),t.callbackNode!=null&&t.callbackNode===a?Tm.bind(null,t):null)}function Am(t,n){if(Rl())return null;rm(t,n,!0)}function Vv(){tx(function(){(be&6)!==0?Jt(At,Gv):Em()})}function af(){if(Sa===0){var t=ws;t===0&&(t=dt,dt<<=1,(dt&261888)===0&&(dt=256)),Sa=t}return Sa}function Rm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Bo(""+t)}function wm(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Xv(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=Rm((u[ct]||null).action),_=s.submitter;_&&(n=(n=_[ct]||null)?Rm(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var E=new Go("action","action",null,s,u);t.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Sa!==0){var B=_?wm(u,_):new FormData(u);Ec(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(E.preventDefault(),B=_?wm(u,_):new FormData(u),Ec(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var sf=0;sf<Hu.length;sf++){var rf=Hu[sf],kv=rf.toLowerCase(),Wv=rf[0].toUpperCase()+rf.slice(1);fi(kv,"on"+Wv)}fi(sd,"onAnimationEnd"),fi(rd,"onAnimationIteration"),fi(od,"onAnimationStart"),fi("dblclick","onDoubleClick"),fi("focusin","onFocus"),fi("focusout","onBlur"),fi(ov,"onTransitionRun"),fi(lv,"onTransitionStart"),fi(uv,"onTransitionCancel"),fi(ld,"onTransitionEnd"),An("onMouseEnter",["mouseout","mouseover"]),An("onMouseLeave",["mouseout","mouseover"]),An("onPointerEnter",["pointerout","pointerover"]),An("onPointerLeave",["pointerout","pointerover"]),ze("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ze("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ze("onBeforeInput",["compositionend","keypress","textInput","paste"]),ze("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ze("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ze("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(so));function Cm(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var _=s.length-1;0<=_;_--){var E=s[_],B=E.instance,J=E.currentTarget;if(E=E.listener,B!==f&&u.isPropagationStopped())break t;f=E,u.currentTarget=J;try{f(u)}catch(pt){ko(pt)}u.currentTarget=null,f=B}else for(_=0;_<s.length;_++){if(E=s[_],B=E.instance,J=E.currentTarget,E=E.listener,B!==f&&u.isPropagationStopped())break t;f=E,u.currentTarget=J;try{f(u)}catch(pt){ko(pt)}u.currentTarget=null,f=B}}}}function he(t,n){var a=n[jt];a===void 0&&(a=n[jt]=new Set);var s=t+"__bubble";a.has(s)||(Dm(n,t,2,!1),a.add(s))}function of(t,n,a){var s=0;n&&(s|=4),Dm(a,t,s,n)}var Dl="_reactListening"+Math.random().toString(36).slice(2);function lf(t){if(!t[Dl]){t[Dl]=!0,ce.forEach(function(a){a!=="selectionchange"&&(qv.has(a)||of(a,!1,t),of(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Dl]||(n[Dl]=!0,of("selectionchange",!1,n))}}function Dm(t,n,a,s){switch(sg(n)){case 2:var u=Sx;break;case 8:u=Mx;break;default:u=Ef}a=u.bind(null,n,a,t),u=void 0,!Ru||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function uf(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var _=s.tag;if(_===3||_===4){var E=s.stateNode.containerInfo;if(E===u)break;if(_===4)for(_=s.return;_!==null;){var B=_.tag;if((B===3||B===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;E!==null;){if(_=me(E),_===null)return;if(B=_.tag,B===5||B===6||B===26||B===27){s=f=_;continue t}E=E.parentNode}}s=s.return}zh(function(){var J=f,pt=Tu(a),xt=[];t:{var tt=ud.get(t);if(tt!==void 0){var ot=Go,zt=t;switch(t){case"keypress":if(Io(a)===0)break t;case"keydown":case"keyup":ot=I0;break;case"focusin":zt="focus",ot=Lu;break;case"focusout":zt="blur",ot=Lu;break;case"beforeblur":case"afterblur":ot=Lu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Fh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=R0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=V0;break;case sd:case rd:case od:ot=D0;break;case ld:ot=k0;break;case"scroll":case"scrollend":ot=T0;break;case"wheel":ot=q0;break;case"copy":case"cut":case"paste":ot=U0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Hh;break;case"toggle":case"beforetoggle":ot=Y0}var Zt=(n&4)!==0,Ue=!Zt&&(t==="scroll"||t==="scrollend"),q=Zt?tt!==null?tt+"Capture":null:tt;Zt=[];for(var G=J,Q;G!==null;){var _t=G;if(Q=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||Q===null||q===null||(_t=Rr(G,q),_t!=null&&Zt.push(ro(G,_t,Q))),Ue)break;G=G.return}0<Zt.length&&(tt=new ot(tt,zt,null,a,pt),xt.push({event:tt,listeners:Zt}))}}if((n&7)===0){t:{if(tt=t==="mouseover"||t==="pointerover",ot=t==="mouseout"||t==="pointerout",tt&&a!==bu&&(zt=a.relatedTarget||a.fromElement)&&(me(zt)||zt[Gt]))break t;if((ot||tt)&&(tt=pt.window===pt?pt:(tt=pt.ownerDocument)?tt.defaultView||tt.parentWindow:window,ot?(zt=a.relatedTarget||a.toElement,ot=J,zt=zt?me(zt):null,zt!==null&&(Ue=c(zt),Zt=zt.tag,zt!==Ue||Zt!==5&&Zt!==27&&Zt!==6)&&(zt=null)):(ot=null,zt=J),ot!==zt)){if(Zt=Fh,_t="onMouseLeave",q="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Zt=Hh,_t="onPointerLeave",q="onPointerEnter",G="pointer"),Ue=ot==null?tt:cn(ot),Q=zt==null?tt:cn(zt),tt=new Zt(_t,G+"leave",ot,a,pt),tt.target=Ue,tt.relatedTarget=Q,_t=null,me(pt)===J&&(Zt=new Zt(q,G+"enter",zt,a,pt),Zt.target=Q,Zt.relatedTarget=Ue,_t=Zt),Ue=_t,ot&&zt)e:{for(Zt=jv,q=ot,G=zt,Q=0,_t=q;_t;_t=Zt(_t))Q++;_t=0;for(var kt=G;kt;kt=Zt(kt))_t++;for(;0<Q-_t;)q=Zt(q),Q--;for(;0<_t-Q;)G=Zt(G),_t--;for(;Q--;){if(q===G||G!==null&&q===G.alternate){Zt=q;break e}q=Zt(q),G=Zt(G)}Zt=null}else Zt=null;ot!==null&&Lm(xt,tt,ot,Zt,!1),zt!==null&&Ue!==null&&Lm(xt,Ue,zt,Zt,!0)}}t:{if(tt=J?cn(J):window,ot=tt.nodeName&&tt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&tt.type==="file")var ye=Yh;else if(qh(tt))if(Zh)ye=av;else{ye=nv;var Ht=ev}else ot=tt.nodeName,!ot||ot.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?J&&Eu(J.elementType)&&(ye=Yh):ye=iv;if(ye&&(ye=ye(t,J))){jh(xt,ye,a,pt);break t}Ht&&Ht(t,tt,J),t==="focusout"&&J&&tt.type==="number"&&J.memoizedProps.value!=null&&yu(tt,"number",tt.value)}switch(Ht=J?cn(J):window,t){case"focusin":(qh(Ht)||Ht.contentEditable==="true")&&(Ss=Ht,Bu=J,zr=null);break;case"focusout":zr=Bu=Ss=null;break;case"mousedown":Fu=!0;break;case"contextmenu":case"mouseup":case"dragend":Fu=!1,id(xt,a,pt);break;case"selectionchange":if(rv)break;case"keydown":case"keyup":id(xt,a,pt)}var ae;if(Nu)t:{switch(t){case"compositionstart":var pe="onCompositionStart";break t;case"compositionend":pe="onCompositionEnd";break t;case"compositionupdate":pe="onCompositionUpdate";break t}pe=void 0}else xs?kh(t,a)&&(pe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(pe="onCompositionStart");pe&&(Gh&&a.locale!=="ko"&&(xs||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&xs&&(ae=Ph()):(aa=pt,wu="value"in aa?aa.value:aa.textContent,xs=!0)),Ht=Ll(J,pe),0<Ht.length&&(pe=new Ih(pe,t,null,a,pt),xt.push({event:pe,listeners:Ht}),ae?pe.data=ae:(ae=Wh(a),ae!==null&&(pe.data=ae)))),(ae=K0?Q0(t,a):J0(t,a))&&(pe=Ll(J,"onBeforeInput"),0<pe.length&&(Ht=new Ih("onBeforeInput","beforeinput",null,a,pt),xt.push({event:Ht,listeners:pe}),Ht.data=ae)),Xv(xt,t,J,a,pt)}Cm(xt,n)})}function ro(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Ll(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Rr(t,a),u!=null&&s.unshift(ro(t,u,f)),u=Rr(t,n),u!=null&&s.push(ro(t,u,f))),t.tag===3)return s;t=t.return}return[]}function jv(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Lm(t,n,a,s,u){for(var f=n._reactName,_=[];a!==null&&a!==s;){var E=a,B=E.alternate,J=E.stateNode;if(E=E.tag,B!==null&&B===s)break;E!==5&&E!==26&&E!==27||J===null||(B=J,u?(J=Rr(a,f),J!=null&&_.unshift(ro(a,J,B))):u||(J=Rr(a,f),J!=null&&_.push(ro(a,J,B)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var Yv=/\r\n?/g,Zv=/\u0000|\uFFFD/g;function Um(t){return(typeof t=="string"?t:""+t).replace(Yv,`
`).replace(Zv,"")}function Nm(t,n){return n=Um(n),Um(t)===n}function Le(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||gs(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&gs(t,""+s);break;case"className":ia(t,"class",s);break;case"tabIndex":ia(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":ia(t,a,s);break;case"style":Nh(t,s,f);break;case"data":if(n!=="object"){ia(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Bo(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Le(t,n,"name",u.name,u,null),Le(t,n,"formEncType",u.formEncType,u,null),Le(t,n,"formMethod",u.formMethod,u,null),Le(t,n,"formTarget",u.formTarget,u,null)):(Le(t,n,"encType",u.encType,u,null),Le(t,n,"method",u.method,u,null),Le(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Bo(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Di);break;case"onScroll":s!=null&&he("scroll",t);break;case"onScrollEnd":s!=null&&he("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Bo(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":he("beforetoggle",t),he("toggle",t),Kn(t,"popover",s);break;case"xlinkActuate":Ge(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ge(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ge(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ge(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ge(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ge(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Kn(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=E0.get(a)||a,Kn(t,a,s))}}function cf(t,n,a,s,u,f){switch(a){case"style":Nh(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?gs(t,s):(typeof s=="number"||typeof s=="bigint")&&gs(t,""+s);break;case"onScroll":s!=null&&he("scroll",t);break;case"onScrollEnd":s!=null&&he("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Di);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ds.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[ct]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Kn(t,a,s)}}}function mn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":he("error",t),he("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Le(t,n,f,_,a,null)}}u&&Le(t,n,"srcSet",a.srcSet,a,null),s&&Le(t,n,"src",a.src,a,null);return;case"input":he("invalid",t);var E=f=_=u=null,B=null,J=null;for(s in a)if(a.hasOwnProperty(s)){var pt=a[s];if(pt!=null)switch(s){case"name":u=pt;break;case"type":_=pt;break;case"checked":B=pt;break;case"defaultChecked":J=pt;break;case"value":f=pt;break;case"defaultValue":E=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(r(137,n));break;default:Le(t,n,s,pt,a,null)}}Ch(t,f,E,B,J,_,u,!1);return;case"select":he("invalid",t),s=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(E=a[u],E!=null))switch(u){case"value":f=E;break;case"defaultValue":_=E;break;case"multiple":s=E;default:Le(t,n,u,E,a,null)}n=f,a=_,t.multiple=!!s,n!=null?ms(t,!!s,n,!1):a!=null&&ms(t,!!s,a,!0);return;case"textarea":he("invalid",t),f=u=s=null;for(_ in a)if(a.hasOwnProperty(_)&&(E=a[_],E!=null))switch(_){case"value":s=E;break;case"defaultValue":u=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Le(t,n,_,E,a,null)}Lh(t,s,u,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(s=a[B],s!=null))switch(B){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Le(t,n,B,s,a,null)}return;case"dialog":he("beforetoggle",t),he("toggle",t),he("cancel",t),he("close",t);break;case"iframe":case"object":he("load",t);break;case"video":case"audio":for(s=0;s<so.length;s++)he(so[s],t);break;case"image":he("error",t),he("load",t);break;case"details":he("toggle",t);break;case"embed":case"source":case"link":he("error",t),he("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(s=a[J],s!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Le(t,n,J,s,a,null)}return;default:if(Eu(n)){for(pt in a)a.hasOwnProperty(pt)&&(s=a[pt],s!==void 0&&cf(t,n,pt,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&Le(t,n,E,s,a,null))}function Kv(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,E=null,B=null,J=null,pt=null;for(ot in a){var xt=a[ot];if(a.hasOwnProperty(ot)&&xt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":B=xt;default:s.hasOwnProperty(ot)||Le(t,n,ot,null,s,xt)}}for(var tt in s){var ot=s[tt];if(xt=a[tt],s.hasOwnProperty(tt)&&(ot!=null||xt!=null))switch(tt){case"type":f=ot;break;case"name":u=ot;break;case"checked":J=ot;break;case"defaultChecked":pt=ot;break;case"value":_=ot;break;case"defaultValue":E=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:ot!==xt&&Le(t,n,tt,ot,s,xt)}}Mu(t,_,E,B,J,pt,f,u);return;case"select":ot=_=E=tt=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ot=B;default:s.hasOwnProperty(f)||Le(t,n,f,null,s,B)}for(u in s)if(f=s[u],B=a[u],s.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":tt=f;break;case"defaultValue":E=f;break;case"multiple":_=f;default:f!==B&&Le(t,n,u,f,s,B)}n=E,a=_,s=ot,tt!=null?ms(t,!!a,tt,!1):!!s!=!!a&&(n!=null?ms(t,!!a,n,!0):ms(t,!!a,a?[]:"",!1));return;case"textarea":ot=tt=null;for(E in a)if(u=a[E],a.hasOwnProperty(E)&&u!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Le(t,n,E,null,s,u)}for(_ in s)if(u=s[_],f=a[_],s.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":tt=u;break;case"defaultValue":ot=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Le(t,n,_,u,s,f)}Dh(t,tt,ot);return;case"option":for(var zt in a)if(tt=a[zt],a.hasOwnProperty(zt)&&tt!=null&&!s.hasOwnProperty(zt))switch(zt){case"selected":t.selected=!1;break;default:Le(t,n,zt,null,s,tt)}for(B in s)if(tt=s[B],ot=a[B],s.hasOwnProperty(B)&&tt!==ot&&(tt!=null||ot!=null))switch(B){case"selected":t.selected=tt&&typeof tt!="function"&&typeof tt!="symbol";break;default:Le(t,n,B,tt,s,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Zt in a)tt=a[Zt],a.hasOwnProperty(Zt)&&tt!=null&&!s.hasOwnProperty(Zt)&&Le(t,n,Zt,null,s,tt);for(J in s)if(tt=s[J],ot=a[J],s.hasOwnProperty(J)&&tt!==ot&&(tt!=null||ot!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(r(137,n));break;default:Le(t,n,J,tt,s,ot)}return;default:if(Eu(n)){for(var Ue in a)tt=a[Ue],a.hasOwnProperty(Ue)&&tt!==void 0&&!s.hasOwnProperty(Ue)&&cf(t,n,Ue,void 0,s,tt);for(pt in s)tt=s[pt],ot=a[pt],!s.hasOwnProperty(pt)||tt===ot||tt===void 0&&ot===void 0||cf(t,n,pt,tt,s,ot);return}}for(var q in a)tt=a[q],a.hasOwnProperty(q)&&tt!=null&&!s.hasOwnProperty(q)&&Le(t,n,q,null,s,tt);for(xt in s)tt=s[xt],ot=a[xt],!s.hasOwnProperty(xt)||tt===ot||tt==null&&ot==null||Le(t,n,xt,tt,s,ot)}function Om(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Qv(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,_=u.initiatorType,E=u.duration;if(f&&E&&Om(_)){for(_=0,E=u.responseEnd,s+=1;s<a.length;s++){var B=a[s],J=B.startTime;if(J>E)break;var pt=B.transferSize,xt=B.initiatorType;pt&&Om(xt)&&(B=B.responseEnd,_+=pt*(B<E?1:(E-J)/(B-J)))}if(--s,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ff=null,hf=null;function Ul(t){return t.nodeType===9?t:t.ownerDocument}function zm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Pm(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function df(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var pf=null;function Jv(){var t=window.event;return t&&t.type==="popstate"?t===pf?!1:(pf=t,!0):(pf=null,!1)}var Bm=typeof setTimeout=="function"?setTimeout:void 0,$v=typeof clearTimeout=="function"?clearTimeout:void 0,Fm=typeof Promise=="function"?Promise:void 0,tx=typeof queueMicrotask=="function"?queueMicrotask:typeof Fm<"u"?function(t){return Fm.resolve(null).then(t).catch(ex)}:Bm;function ex(t){setTimeout(function(){throw t})}function Ma(t){return t==="head"}function Im(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),js(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")oo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,oo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,E=f.nodeName;f[ee]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&oo(t.ownerDocument.body);a=u}while(a);js(n)}function Hm(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function mf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":mf(a),re(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function nx(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[ee])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ai(t.nextSibling),t===null)break}return null}function ix(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ai(t.nextSibling),t===null))return null;return t}function Gm(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ai(t.nextSibling),t===null))return null;return t}function gf(t){return t.data==="$?"||t.data==="$~"}function _f(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ax(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ai(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var vf=null;function Vm(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ai(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Xm(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function km(t,n,a){switch(n=Ul(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function oo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);re(t)}var si=new Map,Wm=new Set;function Nl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var qi=W.d;W.d={f:sx,r:rx,D:ox,C:lx,L:ux,m:cx,X:hx,S:fx,M:dx};function sx(){var t=qi.f(),n=bl();return t||n}function rx(t){var n=Ve(t);n!==null&&n.tag===5&&n.type==="form"?lp(n):qi.r(t)}var ks=typeof document>"u"?null:document;function qm(t,n,a){var s=ks;if(s&&typeof n=="string"&&n){var u=Qn(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Wm.has(u)||(Wm.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),mn(n,"link",t),le(n),s.head.appendChild(n)))}}function ox(t){qi.D(t),qm("dns-prefetch",t,null)}function lx(t,n){qi.C(t,n),qm("preconnect",t,n)}function ux(t,n,a){qi.L(t,n,a);var s=ks;if(s&&t&&n){var u='link[rel="preload"][as="'+Qn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Qn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Qn(a.imageSizes)+'"]')):u+='[href="'+Qn(t)+'"]';var f=u;switch(n){case"style":f=Ws(t);break;case"script":f=qs(t)}si.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),si.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(lo(f))||n==="script"&&s.querySelector(uo(f))||(n=s.createElement("link"),mn(n,"link",t),le(n),s.head.appendChild(n)))}}function cx(t,n){qi.m(t,n);var a=ks;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Qn(s)+'"][href="'+Qn(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=qs(t)}if(!si.has(f)&&(t=x({rel:"modulepreload",href:t},n),si.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(uo(f)))return}s=a.createElement("link"),mn(s,"link",t),le(s),a.head.appendChild(s)}}}function fx(t,n,a){qi.S(t,n,a);var s=ks;if(s&&t){var u=Tn(s).hoistableStyles,f=Ws(t);n=n||"default";var _=u.get(f);if(!_){var E={loading:0,preload:null};if(_=s.querySelector(lo(f)))E.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=si.get(f))&&xf(t,a);var B=_=s.createElement("link");le(B),mn(B,"link",t),B._p=new Promise(function(J,pt){B.onload=J,B.onerror=pt}),B.addEventListener("load",function(){E.loading|=1}),B.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Ol(_,n,s)}_={type:"stylesheet",instance:_,count:1,state:E},u.set(f,_)}}}function hx(t,n){qi.X(t,n);var a=ks;if(a&&t){var s=Tn(a).hoistableScripts,u=qs(t),f=s.get(u);f||(f=a.querySelector(uo(u)),f||(t=x({src:t,async:!0},n),(n=si.get(u))&&Sf(t,n),f=a.createElement("script"),le(f),mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function dx(t,n){qi.M(t,n);var a=ks;if(a&&t){var s=Tn(a).hoistableScripts,u=qs(t),f=s.get(u);f||(f=a.querySelector(uo(u)),f||(t=x({src:t,async:!0,type:"module"},n),(n=si.get(u))&&Sf(t,n),f=a.createElement("script"),le(f),mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function jm(t,n,a,s){var u=(u=yt.current)?Nl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ws(a.href),a=Tn(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ws(a.href);var f=Tn(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(lo(t)))&&!f._p&&(_.instance=f,_.state.loading=5),si.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},si.set(t,a),f||px(u,t,a,_.state))),n&&s===null)throw Error(r(528,""));return _}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=qs(a),a=Tn(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Ws(t){return'href="'+Qn(t)+'"'}function lo(t){return'link[rel="stylesheet"]['+t+"]"}function Ym(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function px(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),mn(n,"link",a),le(n),t.head.appendChild(n))}function qs(t){return'[src="'+Qn(t)+'"]'}function uo(t){return"script[async]"+t}function Zm(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Qn(a.href)+'"]');if(s)return n.instance=s,le(s),s;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),le(s),mn(s,"style",u),Ol(s,a.precedence,t),n.instance=s;case"stylesheet":u=Ws(a.href);var f=t.querySelector(lo(u));if(f)return n.state.loading|=4,n.instance=f,le(f),f;s=Ym(a),(u=si.get(u))&&xf(s,u),f=(t.ownerDocument||t).createElement("link"),le(f);var _=f;return _._p=new Promise(function(E,B){_.onload=E,_.onerror=B}),mn(f,"link",s),n.state.loading|=4,Ol(f,a.precedence,t),n.instance=f;case"script":return f=qs(a.src),(u=t.querySelector(uo(f)))?(n.instance=u,le(u),u):(s=a,(u=si.get(f))&&(s=x({},a),Sf(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),le(u),mn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Ol(s,a.precedence,t));return n.instance}function Ol(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,_=0;_<s.length;_++){var E=s[_];if(E.dataset.precedence===n)f=E;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function xf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Sf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var zl=null;function Km(t,n,a){if(zl===null){var s=new Map,u=zl=new Map;u.set(a,s)}else u=zl,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[ee]||f[j]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var E=s.get(_);E?E.push(f):s.set(_,[f])}}return s}function Qm(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function mx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Jm(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function gx(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Ws(s.href),f=n.querySelector(lo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Pl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,le(f);return}f=n.ownerDocument||n,s=Ym(s),(u=si.get(u))&&xf(s,u),f=f.createElement("link"),le(f);var _=f;_._p=new Promise(function(E,B){_.onload=E,_.onerror=B}),mn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Pl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Mf=0;function _x(t,n){return t.stylesheets&&t.count===0&&Fl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Fl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Mf===0&&(Mf=62500*Qv());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Fl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Mf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function Pl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Fl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Bl=null;function Fl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Bl=new Map,n.forEach(vx,t),Bl=null,Pl.call(t))}function vx(t,n){if(!(n.state.loading&4)){var a=Bl.get(t);if(a)var s=a.get(null);else{a=new Map,Bl.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),s=_)}s&&a.set(null,s)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||s,f===s&&a.set(null,u),a.set(_,u),this.count++,s=Pl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var co={$$typeof:C,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function xx(t,n,a,s,u,f,_,E,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Pe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pe(0),this.hiddenUpdates=Pe(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function $m(t,n,a,s,u,f,_,E,B,J,pt,xt){return t=new xx(t,n,a,_,B,J,pt,xt,E),n=1,f===!0&&(n|=24),f=Bn(3,null,null,n),t.current=f,f.stateNode=t,n=$u(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},ic(f),t}function tg(t){return t?(t=Es,t):Es}function eg(t,n,a,s,u,f){u=tg(u),s.context===null?s.context=u:s.pendingContext=u,s=ca(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=fa(t,s,n),a!==null&&(Un(a,t,n),Vr(a,t,n))}function ng(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function yf(t,n){ng(t,n),(t=t.alternate)&&ng(t,n)}function ig(t){if(t.tag===13||t.tag===31){var n=Fa(t,67108864);n!==null&&Un(n,t,67108864),yf(t,67108864)}}function ag(t){if(t.tag===13||t.tag===31){var n=Vn();n=Tr(n);var a=Fa(t,n);a!==null&&Un(a,t,n),yf(t,n)}}var Il=!0;function Sx(t,n,a,s){var u=F.T;F.T=null;var f=W.p;try{W.p=2,Ef(t,n,a,s)}finally{W.p=f,F.T=u}}function Mx(t,n,a,s){var u=F.T;F.T=null;var f=W.p;try{W.p=8,Ef(t,n,a,s)}finally{W.p=f,F.T=u}}function Ef(t,n,a,s){if(Il){var u=bf(s);if(u===null)uf(t,n,s,Hl,a),rg(t,s);else if(Ex(u,t,n,a,s))s.stopPropagation();else if(rg(t,s),n&4&&-1<yx.indexOf(t)){for(;u!==null;){var f=Ve(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Ft(f.pendingLanes);if(_!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var B=1<<31-Kt(_);E.entanglements[1]|=B,_&=~B}Ti(f),(be&6)===0&&(yl=lt()+500,ao(0))}}break;case 31:case 13:E=Fa(f,2),E!==null&&Un(E,f,2),bl(),yf(f,2)}if(f=bf(s),f===null&&uf(t,n,s,Hl,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else uf(t,n,s,null,a)}}function bf(t){return t=Tu(t),Tf(t)}var Hl=null;function Tf(t){if(Hl=null,t=me(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Hl=t,null}function sg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Tt()){case At:return 2;case Dt:return 8;case Yt:case Pt:return 32;case gt:return 268435456;default:return 32}default:return 32}}var Af=!1,ya=null,Ea=null,ba=null,fo=new Map,ho=new Map,Ta=[],yx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function rg(t,n){switch(t){case"focusin":case"focusout":ya=null;break;case"dragenter":case"dragleave":Ea=null;break;case"mouseover":case"mouseout":ba=null;break;case"pointerover":case"pointerout":fo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ho.delete(n.pointerId)}}function po(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ve(n),n!==null&&ig(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Ex(t,n,a,s,u){switch(n){case"focusin":return ya=po(ya,t,n,a,s,u),!0;case"dragenter":return Ea=po(Ea,t,n,a,s,u),!0;case"mouseover":return ba=po(ba,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return fo.set(f,po(fo.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,ho.set(f,po(ho.get(f)||null,t,n,a,s,u)),!0}return!1}function og(t){var n=me(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,nt(t.priority,function(){ag(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,nt(t.priority,function(){ag(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=bf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);bu=s,a.target.dispatchEvent(s),bu=null}else return n=Ve(a),n!==null&&ig(n),t.blockedOn=a,!1;n.shift()}return!0}function lg(t,n,a){Gl(t)&&a.delete(n)}function bx(){Af=!1,ya!==null&&Gl(ya)&&(ya=null),Ea!==null&&Gl(Ea)&&(Ea=null),ba!==null&&Gl(ba)&&(ba=null),fo.forEach(lg),ho.forEach(lg)}function Vl(t,n){t.blockedOn===n&&(t.blockedOn=null,Af||(Af=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,bx)))}var Xl=null;function ug(t){Xl!==t&&(Xl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Xl===t&&(Xl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(Tf(s||a)===null)continue;break}var f=Ve(a);f!==null&&(t.splice(n,3),n-=3,Ec(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function js(t){function n(B){return Vl(B,t)}ya!==null&&Vl(ya,t),Ea!==null&&Vl(Ea,t),ba!==null&&Vl(ba,t),fo.forEach(n),ho.forEach(n);for(var a=0;a<Ta.length;a++){var s=Ta[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ta.length&&(a=Ta[0],a.blockedOn===null);)og(a),a.blockedOn===null&&Ta.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],_=u[ct]||null;if(typeof f=="function")_||ug(a);else if(_){var E=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[ct]||null)E=_.formAction;else if(Tf(u)!==null)continue}else E=_.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),ug(a)}}}function cg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Rf(t){this._internalRoot=t}kl.prototype.render=Rf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Vn();eg(a,s,t,n,null,null)},kl.prototype.unmount=Rf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;eg(t.current,2,null,t,null,null),bl(),n[Gt]=null}};function kl(t){this._internalRoot=t}kl.prototype.unstable_scheduleHydration=function(t){if(t){var n=w();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ta.length&&n!==0&&n<Ta[a].priority;a++);Ta.splice(a,0,t),a===0&&og(t)}};var fg=e.version;if(fg!=="19.2.3")throw Error(r(527,fg,"19.2.3"));W.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var Tx={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wl.isDisabled&&Wl.supportsFiber)try{Xt=Wl.inject(Tx),wt=Wl}catch{}}return go.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=vp,f=xp,_=Sp;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=$m(t,1,!1,null,null,a,s,null,u,f,_,cg),t[Gt]=n.current,lf(t),new Rf(n)},go.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=vp,_=xp,E=Sp,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=$m(t,1,!0,n,a??null,s,u,B,f,_,E,cg),n.context=tg(null),a=n.current,s=Vn(),s=Tr(s),u=ca(s),u.callback=null,fa(a,u,s),a=s,n.current.lanes=a,rn(n,a),Ti(n),t[Gt]=n.current,lf(t),new kl(n)},go.version="19.2.3",go}var Mg;function Px(){if(Mg)return Cf.exports;Mg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Cf.exports=zx(),Cf.exports}var Bx=Px();const Fx=Rx(Bx);var $e=Sh(),Mn=(o=>(o[o.START=0]="START",o[o.PLAYING=1]="PLAYING",o[o.PAUSED=2]="PAUSED",o[o.GAMEOVER=3]="GAMEOVER",o))(Mn||{}),fr=(o=>(o.RIFLE="rifle",o.SHOTGUN="shotgun",o.SNIPER="sniper",o.PISTOL="pistol",o.SMG="smg",o))(fr||{});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mh="152",Ix=0,yg=1,Hx=2,Gx=0,Y_=1,Vx=2,$i=3,Na=0,zn=1,wi=2,Ua=0,mr=1,Eg=2,bg=3,Tg=4,Xx=5,hr=100,kx=101,Wx=102,Ag=103,Rg=104,qx=200,jx=201,Yx=202,Zx=203,Z_=204,K_=205,Kx=206,Qx=207,Jx=208,$x=209,tS=210,eS=0,nS=1,iS=2,fh=3,aS=4,sS=5,rS=6,oS=7,yh=0,lS=1,uS=2,ta=0,cS=1,fS=2,hS=3,dS=4,pS=5,Q_=300,vr=301,xr=302,hh=303,dh=304,_u=306,ph=1e3,xi=1001,mh=1002,bn=1003,wg=1004,Of=1005,li=1006,mS=1007,To=1008,us=1009,gS=1010,_S=1011,J_=1012,vS=1013,as=1014,ss=1015,Ao=1016,xS=1017,SS=1018,gr=1020,MS=1021,Si=1023,yS=1024,ES=1025,rs=1026,Sr=1027,bS=1028,TS=1029,AS=1030,RS=1031,wS=1033,zf=33776,Pf=33777,Bf=33778,Ff=33779,Cg=35840,Dg=35841,Lg=35842,Ug=35843,CS=36196,Ng=37492,Og=37496,zg=37808,Pg=37809,Bg=37810,Fg=37811,Ig=37812,Hg=37813,Gg=37814,Vg=37815,Xg=37816,kg=37817,Wg=37818,qg=37819,jg=37820,Yg=37821,If=36492,DS=36283,Zg=36284,Kg=36285,Qg=36286,$_=3e3,os=3001,LS=3200,US=3201,t0=0,NS=1,ls="",oe="srgb",Ci="srgb-linear",e0="display-p3",Hf=7680,OS=519,Jg=35044,$g="300 es",gh=1035;class yr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gf=Math.PI/180,_h=180/Math.PI;function wo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(xn[o&255]+xn[o>>8&255]+xn[o>>16&255]+xn[o>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[i&63|128]+xn[i>>8&255]+"-"+xn[i>>16&255]+xn[i>>24&255]+xn[r&255]+xn[r>>8&255]+xn[r>>16&255]+xn[r>>24&255]).toLowerCase()}function On(o,e,i){return Math.max(e,Math.min(i,o))}function zS(o,e){return(o%e+e)%e}function Vf(o,e,i){return(1-i)*o+i*e}function t_(o){return(o&o-1)===0&&o!==0}function PS(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function ql(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Xn(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ce{constructor(e=0,i=0){Ce.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(On(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*l+e.x,this.y=c*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _e{constructor(){_e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,i,r,l,c,d,h,g,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=h,v[3]=i,v[4]=c,v[5]=g,v[6]=r,v[7]=d,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],h=r[3],g=r[6],p=r[1],v=r[4],x=r[7],S=r[2],y=r[5],A=r[8],T=l[0],M=l[3],m=l[6],U=l[1],C=l[4],N=l[7],z=l[2],I=l[5],P=l[8];return c[0]=d*T+h*U+g*z,c[3]=d*M+h*C+g*I,c[6]=d*m+h*N+g*P,c[1]=p*T+v*U+x*z,c[4]=p*M+v*C+x*I,c[7]=p*m+v*N+x*P,c[2]=S*T+y*U+A*z,c[5]=S*M+y*C+A*I,c[8]=S*m+y*N+A*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],g=e[6],p=e[7],v=e[8];return i*d*v-i*h*p-r*c*v+r*h*g+l*c*p-l*d*g}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],g=e[6],p=e[7],v=e[8],x=v*d-h*p,S=h*g-v*c,y=p*c-d*g,A=i*x+r*S+l*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=x*T,e[1]=(l*p-v*r)*T,e[2]=(h*r-l*d)*T,e[3]=S*T,e[4]=(v*i-l*g)*T,e[5]=(l*c-h*i)*T,e[6]=y*T,e[7]=(r*g-p*i)*T,e[8]=(d*i-r*c)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,d,h){const g=Math.cos(c),p=Math.sin(c);return this.set(r*g,r*p,-r*(g*d+p*h)+d+e,-l*p,l*g,-l*(-p*d+g*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Xf.makeScale(e,i)),this}rotate(e){return this.premultiply(Xf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Xf.makeTranslation(e,i)),this}makeTranslation(e,i){return this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xf=new _e;function n0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function mu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}const e_={};function bo(o){o in e_||(e_[o]=!0,console.warn(o))}function _r(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function kf(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const BS=new _e().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),FS=new _e().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function IS(o){return o.convertSRGBToLinear().applyMatrix3(FS)}function HS(o){return o.applyMatrix3(BS).convertLinearToSRGB()}const GS={[Ci]:o=>o,[oe]:o=>o.convertSRGBToLinear(),[e0]:IS},VS={[Ci]:o=>o,[oe]:o=>o.convertLinearToSRGB(),[e0]:HS},pi={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(o){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!o},get workingColorSpace(){return Ci},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,i){if(this.enabled===!1||e===i||!e||!i)return o;const r=GS[e],l=VS[i];if(r===void 0||l===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${i}".`);return l(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}};let Ys;class i0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ys===void 0&&(Ys=mu("canvas")),Ys.width=e.width,Ys.height=e.height;const r=Ys.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ys}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=mu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=_r(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(_r(i[r]/255)*255):i[r]=_r(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class a0{constructor(e=null){this.isSource=!0,this.uuid=wo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(Wf(l[d].image)):c.push(Wf(l[d]))}else c=Wf(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Wf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?i0.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let XS=0;class jn extends yr{constructor(e=jn.DEFAULT_IMAGE,i=jn.DEFAULT_MAPPING,r=xi,l=xi,c=li,d=To,h=Si,g=us,p=jn.DEFAULT_ANISOTROPY,v=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=wo(),this.name="",this.source=new a0(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=g,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof v=="string"?this.colorSpace=v:(bo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=v===os?oe:ls),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Q_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ph:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case mh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ph:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case mh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return bo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===oe?os:$_}set encoding(e){bo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===os?oe:ls}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=Q_;jn.DEFAULT_ANISOTROPY=1;class un{constructor(e=0,i=0,r=0,l=1){un.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const g=e.elements,p=g[0],v=g[4],x=g[8],S=g[1],y=g[5],A=g[9],T=g[2],M=g[6],m=g[10];if(Math.abs(v-S)<.01&&Math.abs(x-T)<.01&&Math.abs(A-M)<.01){if(Math.abs(v+S)<.1&&Math.abs(x+T)<.1&&Math.abs(A+M)<.1&&Math.abs(p+y+m-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const C=(p+1)/2,N=(y+1)/2,z=(m+1)/2,I=(v+S)/4,P=(x+T)/4,$=(A+M)/4;return C>N&&C>z?C<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(C),l=I/r,c=P/r):N>z?N<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),r=I/l,c=$/l):z<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),r=P/c,l=$/c),this.set(r,l,c,i),this}let U=Math.sqrt((M-A)*(M-A)+(x-T)*(x-T)+(S-v)*(S-v));return Math.abs(U)<.001&&(U=1),this.x=(M-A)/U,this.y=(x-T)/U,this.z=(S-v)/U,this.w=Math.acos((p+y+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cs extends yr{constructor(e=1,i=1,r={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new un(0,0,e,i),this.scissorTest=!1,this.viewport=new un(0,0,e,i);const l={width:e,height:i,depth:1};r.encoding!==void 0&&(bo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===os?oe:ls),this.texture=new jn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:li,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null,this.samples=r.samples!==void 0?r.samples:0}setSize(e,i,r=1){(this.width!==e||this.height!==i||this.depth!==r)&&(this.width=e,this.height=i,this.depth=r,this.texture.image.width=e,this.texture.image.height=i,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new a0(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class s0 extends jn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=bn,this.minFilter=bn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kS extends jn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=bn,this.minFilter=bn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Co{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,d,h){let g=r[l+0],p=r[l+1],v=r[l+2],x=r[l+3];const S=c[d+0],y=c[d+1],A=c[d+2],T=c[d+3];if(h===0){e[i+0]=g,e[i+1]=p,e[i+2]=v,e[i+3]=x;return}if(h===1){e[i+0]=S,e[i+1]=y,e[i+2]=A,e[i+3]=T;return}if(x!==T||g!==S||p!==y||v!==A){let M=1-h;const m=g*S+p*y+v*A+x*T,U=m>=0?1:-1,C=1-m*m;if(C>Number.EPSILON){const z=Math.sqrt(C),I=Math.atan2(z,m*U);M=Math.sin(M*I)/z,h=Math.sin(h*I)/z}const N=h*U;if(g=g*M+S*N,p=p*M+y*N,v=v*M+A*N,x=x*M+T*N,M===1-h){const z=1/Math.sqrt(g*g+p*p+v*v+x*x);g*=z,p*=z,v*=z,x*=z}}e[i]=g,e[i+1]=p,e[i+2]=v,e[i+3]=x}static multiplyQuaternionsFlat(e,i,r,l,c,d){const h=r[l],g=r[l+1],p=r[l+2],v=r[l+3],x=c[d],S=c[d+1],y=c[d+2],A=c[d+3];return e[i]=h*A+v*x+g*y-p*S,e[i+1]=g*A+v*S+p*x-h*y,e[i+2]=p*A+v*y+h*S-g*x,e[i+3]=v*A-h*x-g*S-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i){const r=e._x,l=e._y,c=e._z,d=e._order,h=Math.cos,g=Math.sin,p=h(r/2),v=h(l/2),x=h(c/2),S=g(r/2),y=g(l/2),A=g(c/2);switch(d){case"XYZ":this._x=S*v*x+p*y*A,this._y=p*y*x-S*v*A,this._z=p*v*A+S*y*x,this._w=p*v*x-S*y*A;break;case"YXZ":this._x=S*v*x+p*y*A,this._y=p*y*x-S*v*A,this._z=p*v*A-S*y*x,this._w=p*v*x+S*y*A;break;case"ZXY":this._x=S*v*x-p*y*A,this._y=p*y*x+S*v*A,this._z=p*v*A+S*y*x,this._w=p*v*x-S*y*A;break;case"ZYX":this._x=S*v*x-p*y*A,this._y=p*y*x+S*v*A,this._z=p*v*A-S*y*x,this._w=p*v*x+S*y*A;break;case"YZX":this._x=S*v*x+p*y*A,this._y=p*y*x+S*v*A,this._z=p*v*A-S*y*x,this._w=p*v*x-S*y*A;break;case"XZY":this._x=S*v*x-p*y*A,this._y=p*y*x-S*v*A,this._z=p*v*A+S*y*x,this._w=p*v*x+S*y*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],d=i[1],h=i[5],g=i[9],p=i[2],v=i[6],x=i[10],S=r+h+x;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(v-g)*y,this._y=(c-p)*y,this._z=(d-l)*y}else if(r>h&&r>x){const y=2*Math.sqrt(1+r-h-x);this._w=(v-g)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(c+p)/y}else if(h>x){const y=2*Math.sqrt(1+h-r-x);this._w=(c-p)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(g+v)/y}else{const y=2*Math.sqrt(1+x-r-h);this._w=(d-l)/y,this._x=(c+p)/y,this._y=(g+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(On(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,d=e._w,h=i._x,g=i._y,p=i._z,v=i._w;return this._x=r*v+d*h+l*p-c*g,this._y=l*v+d*g+c*h-r*p,this._z=c*v+d*p+r*g-l*h,this._w=d*v-r*h-l*g-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,d=this._w;let h=d*e._w+r*e._x+l*e._y+c*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=l,this._z=c,this;const g=1-h*h;if(g<=Number.EPSILON){const y=1-i;return this._w=y*d+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this._onChangeCallback(),this}const p=Math.sqrt(g),v=Math.atan2(p,h),x=Math.sin((1-i)*v)/p,S=Math.sin(i*v)/p;return this._w=d*x+this._w*S,this._x=r*x+this._x*S,this._y=l*x+this._y*S,this._z=c*x+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=Math.random(),i=Math.sqrt(1-e),r=Math.sqrt(e),l=2*Math.PI*Math.random(),c=2*Math.PI*Math.random();return this.set(i*Math.cos(l),r*Math.sin(c),r*Math.cos(c),i*Math.sin(l))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class it{constructor(e=0,i=0,r=0){it.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(n_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(n_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,d=e.y,h=e.z,g=e.w,p=g*i+d*l-h*r,v=g*r+h*i-c*l,x=g*l+c*r-d*i,S=-c*i-d*r-h*l;return this.x=p*g+S*-c+v*-h-x*-d,this.y=v*g+S*-d+x*-c-p*-h,this.z=x*g+S*-h+p*-d-v*-c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,d=i.x,h=i.y,g=i.z;return this.x=l*g-c*h,this.y=c*d-r*g,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return qf.copy(this).projectOnVector(e),this.sub(qf)}reflect(e){return this.sub(qf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(On(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(i),this.y=r*Math.sin(i),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qf=new it,n_=new Co;class hs{constructor(e=new it(1/0,1/0,1/0),i=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Yi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Yi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Yi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Zs.copy(e.boundingBox),Zs.applyMatrix4(e.matrixWorld),this.union(Zs);else{const l=e.geometry;if(l!==void 0)if(i&&l.attributes!==void 0&&l.attributes.position!==void 0){const c=l.attributes.position;for(let d=0,h=c.count;d<h;d++)Yi.fromBufferAttribute(c,d).applyMatrix4(e.matrixWorld),this.expandByPoint(Yi)}else l.boundingBox===null&&l.computeBoundingBox(),Zs.copy(l.boundingBox),Zs.applyMatrix4(e.matrixWorld),this.union(Zs)}const r=e.children;for(let l=0,c=r.length;l<c;l++)this.expandByObject(r[l],i);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yi),Yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_o),jl.subVectors(this.max,_o),Ks.subVectors(e.a,_o),Qs.subVectors(e.b,_o),Js.subVectors(e.c,_o),Ra.subVectors(Qs,Ks),wa.subVectors(Js,Qs),Qa.subVectors(Ks,Js);let i=[0,-Ra.z,Ra.y,0,-wa.z,wa.y,0,-Qa.z,Qa.y,Ra.z,0,-Ra.x,wa.z,0,-wa.x,Qa.z,0,-Qa.x,-Ra.y,Ra.x,0,-wa.y,wa.x,0,-Qa.y,Qa.x,0];return!jf(i,Ks,Qs,Js,jl)||(i=[1,0,0,0,1,0,0,0,1],!jf(i,Ks,Qs,Js,jl))?!1:(Yl.crossVectors(Ra,wa),i=[Yl.x,Yl.y,Yl.z],jf(i,Ks,Qs,Js,jl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ji=[new it,new it,new it,new it,new it,new it,new it,new it],Yi=new it,Zs=new hs,Ks=new it,Qs=new it,Js=new it,Ra=new it,wa=new it,Qa=new it,_o=new it,jl=new it,Yl=new it,Ja=new it;function jf(o,e,i,r,l){for(let c=0,d=o.length-3;c<=d;c+=3){Ja.fromArray(o,c);const h=l.x*Math.abs(Ja.x)+l.y*Math.abs(Ja.y)+l.z*Math.abs(Ja.z),g=e.dot(Ja),p=i.dot(Ja),v=r.dot(Ja);if(Math.max(-Math.max(g,p,v),Math.min(g,p,v))>h)return!1}return!0}const WS=new hs,vo=new it,Yf=new it;class Do{constructor(e=new it,i=-1){this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):WS.setFromPoints(e).getCenter(r);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vo.subVectors(e,this.center);const i=vo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(vo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vo.copy(e.center).add(Yf)),this.expandByPoint(vo.copy(e.center).sub(Yf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zi=new it,Zf=new it,Zl=new it,Ca=new it,Kf=new it,Kl=new it,Qf=new it;class r0{constructor(e=new it,i=new it(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Zi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,i),Zi.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Zf.copy(e).add(i).multiplyScalar(.5),Zl.copy(i).sub(e).normalize(),Ca.copy(this.origin).sub(Zf);const c=e.distanceTo(i)*.5,d=-this.direction.dot(Zl),h=Ca.dot(this.direction),g=-Ca.dot(Zl),p=Ca.lengthSq(),v=Math.abs(1-d*d);let x,S,y,A;if(v>0)if(x=d*g-h,S=d*h-g,A=c*v,x>=0)if(S>=-A)if(S<=A){const T=1/v;x*=T,S*=T,y=x*(x+d*S+2*h)+S*(d*x+S+2*g)+p}else S=c,x=Math.max(0,-(d*S+h)),y=-x*x+S*(S+2*g)+p;else S=-c,x=Math.max(0,-(d*S+h)),y=-x*x+S*(S+2*g)+p;else S<=-A?(x=Math.max(0,-(-d*c+h)),S=x>0?-c:Math.min(Math.max(-c,-g),c),y=-x*x+S*(S+2*g)+p):S<=A?(x=0,S=Math.min(Math.max(-c,-g),c),y=S*(S+2*g)+p):(x=Math.max(0,-(d*c+h)),S=x>0?c:Math.min(Math.max(-c,-g),c),y=-x*x+S*(S+2*g)+p);else S=d>0?-c:c,x=Math.max(0,-(d*S+h)),y=-x*x+S*(S+2*g)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Zf).addScaledVector(Zl,S),y}intersectSphere(e,i){Zi.subVectors(e.center,this.origin);const r=Zi.dot(this.direction),l=Zi.dot(Zi)-r*r,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=r-d,g=r+d;return g<0?null:h<0?this.at(g,i):this.at(h,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,d,h,g;const p=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),v>=0?(c=(e.min.y-S.y)*v,d=(e.max.y-S.y)*v):(c=(e.max.y-S.y)*v,d=(e.min.y-S.y)*v),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),x>=0?(h=(e.min.z-S.z)*x,g=(e.max.z-S.z)*x):(h=(e.max.z-S.z)*x,g=(e.min.z-S.z)*x),r>g||h>l)||((h>r||r!==r)&&(r=h),(g<l||l!==l)&&(l=g),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,i,r,l,c){Kf.subVectors(i,e),Kl.subVectors(r,e),Qf.crossVectors(Kf,Kl);let d=this.direction.dot(Qf),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ca.subVectors(this.origin,e);const g=h*this.direction.dot(Kl.crossVectors(Ca,Kl));if(g<0)return null;const p=h*this.direction.dot(Kf.cross(Ca));if(p<0||g+p>d)return null;const v=-h*Ca.dot(Qf);return v<0?null:this.at(v/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class We{constructor(){We.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,i,r,l,c,d,h,g,p,v,x,S,y,A,T,M){const m=this.elements;return m[0]=e,m[4]=i,m[8]=r,m[12]=l,m[1]=c,m[5]=d,m[9]=h,m[13]=g,m[2]=p,m[6]=v,m[10]=x,m[14]=S,m[3]=y,m[7]=A,m[11]=T,m[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/$s.setFromMatrixColumn(e,0).length(),c=1/$s.setFromMatrixColumn(e,1).length(),d=1/$s.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,d=Math.cos(r),h=Math.sin(r),g=Math.cos(l),p=Math.sin(l),v=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const S=d*v,y=d*x,A=h*v,T=h*x;i[0]=g*v,i[4]=-g*x,i[8]=p,i[1]=y+A*p,i[5]=S-T*p,i[9]=-h*g,i[2]=T-S*p,i[6]=A+y*p,i[10]=d*g}else if(e.order==="YXZ"){const S=g*v,y=g*x,A=p*v,T=p*x;i[0]=S+T*h,i[4]=A*h-y,i[8]=d*p,i[1]=d*x,i[5]=d*v,i[9]=-h,i[2]=y*h-A,i[6]=T+S*h,i[10]=d*g}else if(e.order==="ZXY"){const S=g*v,y=g*x,A=p*v,T=p*x;i[0]=S-T*h,i[4]=-d*x,i[8]=A+y*h,i[1]=y+A*h,i[5]=d*v,i[9]=T-S*h,i[2]=-d*p,i[6]=h,i[10]=d*g}else if(e.order==="ZYX"){const S=d*v,y=d*x,A=h*v,T=h*x;i[0]=g*v,i[4]=A*p-y,i[8]=S*p+T,i[1]=g*x,i[5]=T*p+S,i[9]=y*p-A,i[2]=-p,i[6]=h*g,i[10]=d*g}else if(e.order==="YZX"){const S=d*g,y=d*p,A=h*g,T=h*p;i[0]=g*v,i[4]=T-S*x,i[8]=A*x+y,i[1]=x,i[5]=d*v,i[9]=-h*v,i[2]=-p*v,i[6]=y*x+A,i[10]=S-T*x}else if(e.order==="XZY"){const S=d*g,y=d*p,A=h*g,T=h*p;i[0]=g*v,i[4]=-x,i[8]=p*v,i[1]=S*x+T,i[5]=d*v,i[9]=y*x-A,i[2]=A*x-y,i[6]=h*v,i[10]=T*x+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qS,e,jS)}lookAt(e,i,r){const l=this.elements;return kn.subVectors(e,i),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),Da.crossVectors(r,kn),Da.lengthSq()===0&&(Math.abs(r.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),Da.crossVectors(r,kn)),Da.normalize(),Ql.crossVectors(kn,Da),l[0]=Da.x,l[4]=Ql.x,l[8]=kn.x,l[1]=Da.y,l[5]=Ql.y,l[9]=kn.y,l[2]=Da.z,l[6]=Ql.z,l[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],h=r[4],g=r[8],p=r[12],v=r[1],x=r[5],S=r[9],y=r[13],A=r[2],T=r[6],M=r[10],m=r[14],U=r[3],C=r[7],N=r[11],z=r[15],I=l[0],P=l[4],$=l[8],b=l[12],O=l[1],ht=l[5],st=l[9],Y=l[13],at=l[2],rt=l[6],F=l[10],W=l[14],K=l[3],vt=l[7],et=l[11],D=l[15];return c[0]=d*I+h*O+g*at+p*K,c[4]=d*P+h*ht+g*rt+p*vt,c[8]=d*$+h*st+g*F+p*et,c[12]=d*b+h*Y+g*W+p*D,c[1]=v*I+x*O+S*at+y*K,c[5]=v*P+x*ht+S*rt+y*vt,c[9]=v*$+x*st+S*F+y*et,c[13]=v*b+x*Y+S*W+y*D,c[2]=A*I+T*O+M*at+m*K,c[6]=A*P+T*ht+M*rt+m*vt,c[10]=A*$+T*st+M*F+m*et,c[14]=A*b+T*Y+M*W+m*D,c[3]=U*I+C*O+N*at+z*K,c[7]=U*P+C*ht+N*rt+z*vt,c[11]=U*$+C*st+N*F+z*et,c[15]=U*b+C*Y+N*W+z*D,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],d=e[1],h=e[5],g=e[9],p=e[13],v=e[2],x=e[6],S=e[10],y=e[14],A=e[3],T=e[7],M=e[11],m=e[15];return A*(+c*g*x-l*p*x-c*h*S+r*p*S+l*h*y-r*g*y)+T*(+i*g*y-i*p*S+c*d*S-l*d*y+l*p*v-c*g*v)+M*(+i*p*x-i*h*y-c*d*x+r*d*y+c*h*v-r*p*v)+m*(-l*h*v-i*g*x+i*h*S+l*d*x-r*d*S+r*g*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],g=e[6],p=e[7],v=e[8],x=e[9],S=e[10],y=e[11],A=e[12],T=e[13],M=e[14],m=e[15],U=x*M*p-T*S*p+T*g*y-h*M*y-x*g*m+h*S*m,C=A*S*p-v*M*p-A*g*y+d*M*y+v*g*m-d*S*m,N=v*T*p-A*x*p+A*h*y-d*T*y-v*h*m+d*x*m,z=A*x*g-v*T*g-A*h*S+d*T*S+v*h*M-d*x*M,I=i*U+r*C+l*N+c*z;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return e[0]=U*P,e[1]=(T*S*c-x*M*c-T*l*y+r*M*y+x*l*m-r*S*m)*P,e[2]=(h*M*c-T*g*c+T*l*p-r*M*p-h*l*m+r*g*m)*P,e[3]=(x*g*c-h*S*c-x*l*p+r*S*p+h*l*y-r*g*y)*P,e[4]=C*P,e[5]=(v*M*c-A*S*c+A*l*y-i*M*y-v*l*m+i*S*m)*P,e[6]=(A*g*c-d*M*c-A*l*p+i*M*p+d*l*m-i*g*m)*P,e[7]=(d*S*c-v*g*c+v*l*p-i*S*p-d*l*y+i*g*y)*P,e[8]=N*P,e[9]=(A*x*c-v*T*c-A*r*y+i*T*y+v*r*m-i*x*m)*P,e[10]=(d*T*c-A*h*c+A*r*p-i*T*p-d*r*m+i*h*m)*P,e[11]=(v*h*c-d*x*c-v*r*p+i*x*p+d*r*y-i*h*y)*P,e[12]=z*P,e[13]=(v*T*l-A*x*l+A*r*S-i*T*S-v*r*M+i*x*M)*P,e[14]=(A*h*l-d*T*l-A*r*g+i*T*g+d*r*M-i*h*M)*P,e[15]=(d*x*l-v*h*l+v*r*g-i*x*g-d*r*S+i*h*S)*P,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=e.x,h=e.y,g=e.z,p=c*d,v=c*h;return this.set(p*d+r,p*h-l*g,p*g+l*h,0,p*h+l*g,v*h+r,v*g-l*d,0,p*g-l*h,v*g+l*d,c*g*g+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,d){return this.set(1,r,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,d=i._y,h=i._z,g=i._w,p=c+c,v=d+d,x=h+h,S=c*p,y=c*v,A=c*x,T=d*v,M=d*x,m=h*x,U=g*p,C=g*v,N=g*x,z=r.x,I=r.y,P=r.z;return l[0]=(1-(T+m))*z,l[1]=(y+N)*z,l[2]=(A-C)*z,l[3]=0,l[4]=(y-N)*I,l[5]=(1-(S+m))*I,l[6]=(M+U)*I,l[7]=0,l[8]=(A+C)*P,l[9]=(M-U)*P,l[10]=(1-(S+T))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=$s.set(l[0],l[1],l[2]).length();const d=$s.set(l[4],l[5],l[6]).length(),h=$s.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],mi.copy(this);const p=1/c,v=1/d,x=1/h;return mi.elements[0]*=p,mi.elements[1]*=p,mi.elements[2]*=p,mi.elements[4]*=v,mi.elements[5]*=v,mi.elements[6]*=v,mi.elements[8]*=x,mi.elements[9]*=x,mi.elements[10]*=x,i.setFromRotationMatrix(mi),r.x=c,r.y=d,r.z=h,this}makePerspective(e,i,r,l,c,d){const h=this.elements,g=2*c/(i-e),p=2*c/(r-l),v=(i+e)/(i-e),x=(r+l)/(r-l),S=-(d+c)/(d-c),y=-2*d*c/(d-c);return h[0]=g,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=p,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=y,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,l,c,d){const h=this.elements,g=1/(i-e),p=1/(r-l),v=1/(d-c),x=(i+e)*g,S=(r+l)*p,y=(d+c)*v;return h[0]=2*g,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*p,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=-2*v,h[14]=-y,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const $s=new it,mi=new We,qS=new it(0,0,0),jS=new it(1,1,1),Da=new it,Ql=new it,kn=new it,i_=new We,a_=new Co;class vu{constructor(e=0,i=0,r=0,l=vu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],d=l[4],h=l[8],g=l[1],p=l[5],v=l[9],x=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(On(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-On(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(g,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(On(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(g,c));break;case"ZYX":this._y=Math.asin(-On(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(g,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(On(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-On(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return i_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(i_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return a_.setFromEuler(this),this.setFromQuaternion(a_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vu.DEFAULT_ORDER="XYZ";class Eh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let YS=0;const s_=new it,tr=new Co,Ki=new We,Jl=new it,xo=new it,ZS=new it,KS=new Co,r_=new it(1,0,0),o_=new it(0,1,0),l_=new it(0,0,1),QS={type:"added"},u_={type:"removed"};class gn extends yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new it,i=new vu,r=new Co,l=new it(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new We},normalMatrix:{value:new _e}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Eh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return tr.setFromAxisAngle(e,i),this.quaternion.multiply(tr),this}rotateOnWorldAxis(e,i){return tr.setFromAxisAngle(e,i),this.quaternion.premultiply(tr),this}rotateX(e){return this.rotateOnAxis(r_,e)}rotateY(e){return this.rotateOnAxis(o_,e)}rotateZ(e){return this.rotateOnAxis(l_,e)}translateOnAxis(e,i){return s_.copy(e).applyQuaternion(this.quaternion),this.position.add(s_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(r_,e)}translateY(e){return this.translateOnAxis(o_,e)}translateZ(e){return this.translateOnAxis(l_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Jl.copy(e):Jl.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(xo,Jl,this.up):Ki.lookAt(Jl,xo,this.up),this.quaternion.setFromRotationMatrix(Ki),l&&(Ki.extractRotation(l.matrixWorld),tr.setFromRotationMatrix(Ki),this.quaternion.premultiply(tr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(QS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(u_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const i=this.children[e];i.parent=null,i.dispatchEvent(u_)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i){let r=[];this[e]===i&&r.push(this);for(let l=0,c=this.children.length;l<c;l++){const d=this.children[l].getObjectsByProperty(e,i);d.length>0&&(r=r.concat(d))}return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,e,ZS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,KS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++){const c=i[r];(c.matrixWorldAutoUpdate===!0||e===!0)&&c.updateMatrixWorld(e)}}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++){const h=l[c];h.matrixWorldAutoUpdate===!0&&h.updateWorldMatrix(!1,!0)}}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON()));function c(h,g){return h[g.uuid]===void 0&&(h[g.uuid]=g.toJSON(e)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const g=h.shapes;if(Array.isArray(g))for(let p=0,v=g.length;p<v;p++){const x=g[p];c(e.shapes,x)}else c(e.shapes,g)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let g=0,p=this.material.length;g<p;g++)h.push(c(e.materials,this.material[g]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const g=this.animations[h];l.animations.push(c(e.animations,g))}}if(i){const h=d(e.geometries),g=d(e.materials),p=d(e.textures),v=d(e.images),x=d(e.shapes),S=d(e.skeletons),y=d(e.animations),A=d(e.nodes);h.length>0&&(r.geometries=h),g.length>0&&(r.materials=g),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),x.length>0&&(r.shapes=x),S.length>0&&(r.skeletons=S),y.length>0&&(r.animations=y),A.length>0&&(r.nodes=A)}return r.object=l,r;function d(h){const g=[];for(const p in h){const v=h[p];delete v.metadata,g.push(v)}return g}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}gn.DEFAULT_UP=new it(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new it,Qi=new it,Jf=new it,Ji=new it,er=new it,nr=new it,c_=new it,$f=new it,th=new it,eh=new it;let $l=!1;class vi{constructor(e=new it,i=new it,r=new it){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),gi.subVectors(e,i),l.cross(gi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){gi.subVectors(l,i),Qi.subVectors(r,i),Jf.subVectors(e,i);const d=gi.dot(gi),h=gi.dot(Qi),g=gi.dot(Jf),p=Qi.dot(Qi),v=Qi.dot(Jf),x=d*p-h*h;if(x===0)return c.set(-2,-1,-1);const S=1/x,y=(p*g-h*v)*S,A=(d*v-h*g)*S;return c.set(1-y-A,A,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Ji),Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getUV(e,i,r,l,c,d,h,g){return $l===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$l=!0),this.getInterpolation(e,i,r,l,c,d,h,g)}static getInterpolation(e,i,r,l,c,d,h,g){return this.getBarycoord(e,i,r,l,Ji),g.setScalar(0),g.addScaledVector(c,Ji.x),g.addScaledVector(d,Ji.y),g.addScaledVector(h,Ji.z),g}static isFrontFacing(e,i,r,l){return gi.subVectors(r,i),Qi.subVectors(e,i),gi.cross(Qi).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),gi.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return vi.getBarycoord(e,this.a,this.b,this.c,i)}getUV(e,i,r,l,c){return $l===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$l=!0),vi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}getInterpolation(e,i,r,l,c){return vi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let d,h;er.subVectors(l,r),nr.subVectors(c,r),$f.subVectors(e,r);const g=er.dot($f),p=nr.dot($f);if(g<=0&&p<=0)return i.copy(r);th.subVectors(e,l);const v=er.dot(th),x=nr.dot(th);if(v>=0&&x<=v)return i.copy(l);const S=g*x-v*p;if(S<=0&&g>=0&&v<=0)return d=g/(g-v),i.copy(r).addScaledVector(er,d);eh.subVectors(e,c);const y=er.dot(eh),A=nr.dot(eh);if(A>=0&&y<=A)return i.copy(c);const T=y*p-g*A;if(T<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(r).addScaledVector(nr,h);const M=v*A-y*x;if(M<=0&&x-v>=0&&y-A>=0)return c_.subVectors(c,l),h=(x-v)/(x-v+(y-A)),i.copy(l).addScaledVector(c_,h);const m=1/(M+T+S);return d=T*m,h=S*m,i.copy(r).addScaledVector(er,d).addScaledVector(nr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let JS=0;class Lo extends yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=wo(),this.name="",this.type="Material",this.blending=mr,this.side=Na,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Z_,this.blendDst=K_,this.blendEquation=hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=fh,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=OS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hf,this.stencilZFail=Hf,this.stencilZPass=Hf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(r.blending=this.blending),this.side!==Na&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(r.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const h in c){const g=c[h];delete g.metadata,d.push(g)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const o0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},tu={h:0,s:0,l:0};function nh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class we{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,i===void 0&&r===void 0?this.set(e):this.setRGB(e,i,r)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=oe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pi.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=pi.workingColorSpace){return this.r=e,this.g=i,this.b=r,pi.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=pi.workingColorSpace){if(e=zS(e,1),i=On(i,0,1),r=On(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=nh(d,c,e+1/3),this.g=nh(d,c,e),this.b=nh(d,c,e-1/3)}return pi.toWorkingColorSpace(this,l),this}setStyle(e,i=oe){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=oe){const r=o0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}copyLinearToSRGB(e){return this.r=kf(e.r),this.g=kf(e.g),this.b=kf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oe){return pi.fromWorkingColorSpace(Sn.copy(this),e),Math.round(On(Sn.r*255,0,255))*65536+Math.round(On(Sn.g*255,0,255))*256+Math.round(On(Sn.b*255,0,255))}getHexString(e=oe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=pi.workingColorSpace){pi.fromWorkingColorSpace(Sn.copy(this),i);const r=Sn.r,l=Sn.g,c=Sn.b,d=Math.max(r,l,c),h=Math.min(r,l,c);let g,p;const v=(h+d)/2;if(h===d)g=0,p=0;else{const x=d-h;switch(p=v<=.5?x/(d+h):x/(2-d-h),d){case r:g=(l-c)/x+(l<c?6:0);break;case l:g=(c-r)/x+2;break;case c:g=(r-l)/x+4;break}g/=6}return e.h=g,e.s=p,e.l=v,e}getRGB(e,i=pi.workingColorSpace){return pi.fromWorkingColorSpace(Sn.copy(this),i),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=oe){pi.fromWorkingColorSpace(Sn.copy(this),e);const i=Sn.r,r=Sn.g,l=Sn.b;return e!==oe?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(_i),_i.h+=e,_i.s+=i,_i.l+=r,this.setHSL(_i.h,_i.s,_i.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(_i),e.getHSL(tu);const r=Vf(_i.h,tu.h,i),l=Vf(_i.s,tu.s,i),c=Vf(_i.l,tu.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new we;we.NAMES=o0;class ns extends Lo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Je=new it,eu=new Ce;class Mi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Jg,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)eu.fromBufferAttribute(this,i),eu.applyMatrix3(e),this.setXY(i,eu.x,eu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Je.fromBufferAttribute(this,i),Je.applyMatrix3(e),this.setXYZ(i,Je.x,Je.y,Je.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Je.fromBufferAttribute(this,i),Je.applyMatrix4(e),this.setXYZ(i,Je.x,Je.y,Je.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Je.fromBufferAttribute(this,i),Je.applyNormalMatrix(e),this.setXYZ(i,Je.x,Je.y,Je.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Je.fromBufferAttribute(this,i),Je.transformDirection(e),this.setXYZ(i,Je.x,Je.y,Je.z);return this}set(e,i=0){return this.array.set(e,i),this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ql(i,this.array)),i}setX(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ql(i,this.array)),i}setY(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ql(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ql(i,this.array)),i}setW(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array),l=Xn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array),l=Xn(l,this.array),c=Xn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jg&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class l0 extends Mi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class u0 extends Mi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Yn extends Mi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let $S=0;const ri=new We,ih=new gn,ir=new it,Wn=new hs,So=new hs,ln=new it;class ea extends yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=wo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(n0(e)?u0:l0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new _e().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,i,r){return ri.makeTranslation(e,i,r),this.applyMatrix4(ri),this}scale(e,i,r){return ri.makeScale(e,i,r),this.applyMatrix4(ri),this}lookAt(e){return ih.lookAt(e),ih.updateMatrix(),this.applyMatrix4(ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(e){const i=[];for(let r=0,l=e.length;r<l;r++){const c=e[r];i.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new Yn(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hs);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Wn.setFromBufferAttribute(c),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Do);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new it,1/0);return}if(e){const r=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];So.setFromBufferAttribute(h),this.morphTargetsRelative?(ln.addVectors(Wn.min,So.min),Wn.expandByPoint(ln),ln.addVectors(Wn.max,So.max),Wn.expandByPoint(ln)):(Wn.expandByPoint(So.min),Wn.expandByPoint(So.max))}Wn.getCenter(r);let l=0;for(let c=0,d=e.count;c<d;c++)ln.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(ln));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],g=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)ln.fromBufferAttribute(h,p),g&&(ir.fromBufferAttribute(e,p),ln.add(ir)),l=Math.max(l,r.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,l=i.position.array,c=i.normal.array,d=i.uv.array,h=l.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*h),4));const g=this.getAttribute("tangent").array,p=[],v=[];for(let O=0;O<h;O++)p[O]=new it,v[O]=new it;const x=new it,S=new it,y=new it,A=new Ce,T=new Ce,M=new Ce,m=new it,U=new it;function C(O,ht,st){x.fromArray(l,O*3),S.fromArray(l,ht*3),y.fromArray(l,st*3),A.fromArray(d,O*2),T.fromArray(d,ht*2),M.fromArray(d,st*2),S.sub(x),y.sub(x),T.sub(A),M.sub(A);const Y=1/(T.x*M.y-M.x*T.y);isFinite(Y)&&(m.copy(S).multiplyScalar(M.y).addScaledVector(y,-T.y).multiplyScalar(Y),U.copy(y).multiplyScalar(T.x).addScaledVector(S,-M.x).multiplyScalar(Y),p[O].add(m),p[ht].add(m),p[st].add(m),v[O].add(U),v[ht].add(U),v[st].add(U))}let N=this.groups;N.length===0&&(N=[{start:0,count:r.length}]);for(let O=0,ht=N.length;O<ht;++O){const st=N[O],Y=st.start,at=st.count;for(let rt=Y,F=Y+at;rt<F;rt+=3)C(r[rt+0],r[rt+1],r[rt+2])}const z=new it,I=new it,P=new it,$=new it;function b(O){P.fromArray(c,O*3),$.copy(P);const ht=p[O];z.copy(ht),z.sub(P.multiplyScalar(P.dot(ht))).normalize(),I.crossVectors($,ht);const Y=I.dot(v[O])<0?-1:1;g[O*4]=z.x,g[O*4+1]=z.y,g[O*4+2]=z.z,g[O*4+3]=Y}for(let O=0,ht=N.length;O<ht;++O){const st=N[O],Y=st.start,at=st.count;for(let rt=Y,F=Y+at;rt<F;rt+=3)b(r[rt+0]),b(r[rt+1]),b(r[rt+2])}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Mi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,y=r.count;S<y;S++)r.setXYZ(S,0,0,0);const l=new it,c=new it,d=new it,h=new it,g=new it,p=new it,v=new it,x=new it;if(e)for(let S=0,y=e.count;S<y;S+=3){const A=e.getX(S+0),T=e.getX(S+1),M=e.getX(S+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,T),d.fromBufferAttribute(i,M),v.subVectors(d,c),x.subVectors(l,c),v.cross(x),h.fromBufferAttribute(r,A),g.fromBufferAttribute(r,T),p.fromBufferAttribute(r,M),h.add(v),g.add(v),p.add(v),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(T,g.x,g.y,g.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),v.subVectors(d,c),x.subVectors(l,c),v.cross(x),r.setXYZ(S+0,v.x,v.y,v.z),r.setXYZ(S+1,v.x,v.y,v.z),r.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)ln.fromBufferAttribute(e,i),ln.normalize(),e.setXYZ(i,ln.x,ln.y,ln.z)}toNonIndexed(){function e(h,g){const p=h.array,v=h.itemSize,x=h.normalized,S=new p.constructor(g.length*v);let y=0,A=0;for(let T=0,M=g.length;T<M;T++){h.isInterleavedBufferAttribute?y=g[T]*h.data.stride+h.offset:y=g[T]*v;for(let m=0;m<v;m++)S[A++]=p[y++]}return new Mi(S,v,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ea,r=this.index.array,l=this.attributes;for(const h in l){const g=l[h],p=e(g,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const g=[],p=c[h];for(let v=0,x=p.length;v<x;v++){const S=p[v],y=e(S,r);g.push(y)}i.morphAttributes[h]=g}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,g=d.length;h<g;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const p in g)g[p]!==void 0&&(e[p]=g[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const g in r){const p=r[g];e.data.attributes[g]=p.toJSON(e.data)}const l={};let c=!1;for(const g in this.morphAttributes){const p=this.morphAttributes[g],v=[];for(let x=0,S=p.length;x<S;x++){const y=p[x];v.push(y.toJSON(e.data))}v.length>0&&(l[g]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=e.morphAttributes;for(const p in c){const v=[],x=c[p];for(let S=0,y=x.length;S<y;S++)v.push(x[S].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,v=d.length;p<v;p++){const x=d[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const g=e.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const f_=new We,Ai=new r0,nu=new Do,h_=new it,ar=new it,sr=new it,rr=new it,ah=new it,iu=new it,au=new Ce,su=new Ce,ru=new Ce,d_=new it,p_=new it,m_=new it,ou=new it,lu=new it;class Oe extends gn{constructor(e=new ea,i=new ns){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){iu.set(0,0,0);for(let g=0,p=c.length;g<p;g++){const v=h[g],x=c[g];v!==0&&(ah.fromBufferAttribute(x,e),d?iu.addScaledVector(ah,v):iu.addScaledVector(ah.sub(i),v))}i.add(iu)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),nu.copy(r.boundingSphere),nu.applyMatrix4(c),Ai.copy(e.ray).recast(e.near),!(nu.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(nu,h_)===null||Ai.origin.distanceToSquared(h_)>(e.far-e.near)**2))&&(f_.copy(c).invert(),Ai.copy(e.ray).applyMatrix4(f_),!(r.boundingBox!==null&&Ai.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i)))}_computeIntersections(e,i){let r;const l=this.geometry,c=this.material,d=l.index,h=l.attributes.position,g=l.attributes.uv,p=l.attributes.uv1,v=l.attributes.normal,x=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(c))for(let y=0,A=x.length;y<A;y++){const T=x[y],M=c[T.materialIndex],m=Math.max(T.start,S.start),U=Math.min(d.count,Math.min(T.start+T.count,S.start+S.count));for(let C=m,N=U;C<N;C+=3){const z=d.getX(C),I=d.getX(C+1),P=d.getX(C+2);r=uu(this,M,e,Ai,g,p,v,z,I,P),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=T.materialIndex,i.push(r))}}else{const y=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let T=y,M=A;T<M;T+=3){const m=d.getX(T),U=d.getX(T+1),C=d.getX(T+2);r=uu(this,c,e,Ai,g,p,v,m,U,C),r&&(r.faceIndex=Math.floor(T/3),i.push(r))}}else if(h!==void 0)if(Array.isArray(c))for(let y=0,A=x.length;y<A;y++){const T=x[y],M=c[T.materialIndex],m=Math.max(T.start,S.start),U=Math.min(h.count,Math.min(T.start+T.count,S.start+S.count));for(let C=m,N=U;C<N;C+=3){const z=C,I=C+1,P=C+2;r=uu(this,M,e,Ai,g,p,v,z,I,P),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=T.materialIndex,i.push(r))}}else{const y=Math.max(0,S.start),A=Math.min(h.count,S.start+S.count);for(let T=y,M=A;T<M;T+=3){const m=T,U=T+1,C=T+2;r=uu(this,c,e,Ai,g,p,v,m,U,C),r&&(r.faceIndex=Math.floor(T/3),i.push(r))}}}}function tM(o,e,i,r,l,c,d,h){let g;if(e.side===zn?g=r.intersectTriangle(d,c,l,!0,h):g=r.intersectTriangle(l,c,d,e.side===Na,h),g===null)return null;lu.copy(h),lu.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(lu);return p<i.near||p>i.far?null:{distance:p,point:lu.clone(),object:o}}function uu(o,e,i,r,l,c,d,h,g,p){o.getVertexPosition(h,ar),o.getVertexPosition(g,sr),o.getVertexPosition(p,rr);const v=tM(o,e,i,r,ar,sr,rr,ou);if(v){l&&(au.fromBufferAttribute(l,h),su.fromBufferAttribute(l,g),ru.fromBufferAttribute(l,p),v.uv=vi.getInterpolation(ou,ar,sr,rr,au,su,ru,new Ce)),c&&(au.fromBufferAttribute(c,h),su.fromBufferAttribute(c,g),ru.fromBufferAttribute(c,p),v.uv1=vi.getInterpolation(ou,ar,sr,rr,au,su,ru,new Ce),v.uv2=v.uv1),d&&(d_.fromBufferAttribute(d,h),p_.fromBufferAttribute(d,g),m_.fromBufferAttribute(d,p),v.normal=vi.getInterpolation(ou,ar,sr,rr,d_,p_,m_,new it),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:h,b:g,c:p,normal:new it,materialIndex:0};vi.getNormal(ar,sr,rr,x.normal),v.face=x}return v}class Nn extends ea{constructor(e=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const g=[],p=[],v=[],x=[];let S=0,y=0;A("z","y","x",-1,-1,r,i,e,d,c,0),A("z","y","x",1,-1,r,i,-e,d,c,1),A("x","z","y",1,1,e,r,i,l,d,2),A("x","z","y",1,-1,e,r,-i,l,d,3),A("x","y","z",1,-1,e,i,r,l,c,4),A("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(g),this.setAttribute("position",new Yn(p,3)),this.setAttribute("normal",new Yn(v,3)),this.setAttribute("uv",new Yn(x,2));function A(T,M,m,U,C,N,z,I,P,$,b){const O=N/P,ht=z/$,st=N/2,Y=z/2,at=I/2,rt=P+1,F=$+1;let W=0,K=0;const vt=new it;for(let et=0;et<F;et++){const D=et*ht-Y;for(let X=0;X<rt;X++){const V=X*O-st;vt[T]=V*U,vt[M]=D*C,vt[m]=at,p.push(vt.x,vt.y,vt.z),vt[T]=0,vt[M]=0,vt[m]=I>0?1:-1,v.push(vt.x,vt.y,vt.z),x.push(X/P),x.push(1-et/$),W+=1}}for(let et=0;et<$;et++)for(let D=0;D<P;D++){const X=S+D+rt*et,V=S+D+rt*(et+1),Z=S+(D+1)+rt*(et+1),mt=S+(D+1)+rt*et;g.push(X,V,mt),g.push(V,Z,mt),K+=6}h.addGroup(y,K,b),y+=K,S+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Mr(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function En(o){const e={};for(let i=0;i<o.length;i++){const r=Mr(o[i]);for(const l in r)e[l]=r[l]}return e}function eM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function c0(o){return o.getRenderTarget()===null?o.outputColorSpace:Ci}const nM={clone:Mr,merge:En};var iM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fs extends Lo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iM,this.fragmentShader=aM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mr(e.uniforms),this.uniformsGroups=eM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class f0 extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(-i[8],-i[9],-i[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ui extends f0{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=_h*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _h*2*Math.atan(Math.tan(Gf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,i,r,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Gf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const g=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/g,i-=d.offsetY*r/p,l*=d.width/g,r*=d.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const or=-90,lr=1;class sM extends gn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r;const l=new ui(or,lr,e,i);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(1,0,0),this.add(l);const c=new ui(or,lr,e,i);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(-1,0,0),this.add(c);const d=new ui(or,lr,e,i);d.layers=this.layers,d.up.set(0,0,-1),d.lookAt(0,1,0),this.add(d);const h=new ui(or,lr,e,i);h.layers=this.layers,h.up.set(0,0,1),h.lookAt(0,-1,0),this.add(h);const g=new ui(or,lr,e,i);g.layers=this.layers,g.up.set(0,1,0),g.lookAt(0,0,1),this.add(g);const p=new ui(or,lr,e,i);p.layers=this.layers,p.up.set(0,1,0),p.lookAt(0,0,-1),this.add(p)}update(e,i){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget,[l,c,d,h,g,p]=this.children,v=e.getRenderTarget(),x=e.toneMapping,S=e.xr.enabled;e.toneMapping=ta,e.xr.enabled=!1;const y=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0),e.render(i,l),e.setRenderTarget(r,1),e.render(i,c),e.setRenderTarget(r,2),e.render(i,d),e.setRenderTarget(r,3),e.render(i,h),e.setRenderTarget(r,4),e.render(i,g),r.texture.generateMipmaps=y,e.setRenderTarget(r,5),e.render(i,p),e.setRenderTarget(v),e.toneMapping=x,e.xr.enabled=S,r.texture.needsPMREMUpdate=!0}}class h0 extends jn{constructor(e,i,r,l,c,d,h,g,p,v){e=e!==void 0?e:[],i=i!==void 0?i:vr,super(e,i,r,l,c,d,h,g,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rM extends cs{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];i.encoding!==void 0&&(bo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===os?oe:ls),this.texture=new h0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:li}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Nn(5,5,5),c=new fs({name:"CubemapFromEquirect",uniforms:Mr(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:zn,blending:Ua});c.uniforms.tEquirect.value=i;const d=new Oe(l,c),h=i.minFilter;return i.minFilter===To&&(i.minFilter=li),new sM(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i,r,l){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(c)}}const sh=new it,oM=new it,lM=new _e;class ts{constructor(e=new it(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=sh.subVectors(r,i).cross(oM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(sh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||lM.getNormalMatrix(e),l=this.coplanarPoint(sh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $a=new Do,cu=new it;class bh{constructor(e=new ts,i=new ts,r=new ts,l=new ts,c=new ts,d=new ts){this.planes=[e,i,r,l,c,d]}set(e,i,r,l,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e){const i=this.planes,r=e.elements,l=r[0],c=r[1],d=r[2],h=r[3],g=r[4],p=r[5],v=r[6],x=r[7],S=r[8],y=r[9],A=r[10],T=r[11],M=r[12],m=r[13],U=r[14],C=r[15];return i[0].setComponents(h-l,x-g,T-S,C-M).normalize(),i[1].setComponents(h+l,x+g,T+S,C+M).normalize(),i[2].setComponents(h+c,x+p,T+y,C+m).normalize(),i[3].setComponents(h-c,x-p,T-y,C-m).normalize(),i[4].setComponents(h-d,x-v,T-A,C-U).normalize(),i[5].setComponents(h+d,x+v,T+A,C+U).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$a.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),$a.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($a)}intersectsSprite(e){return $a.center.set(0,0,0),$a.radius=.7071067811865476,$a.applyMatrix4(e.matrixWorld),this.intersectsSphere($a)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(cu.x=l.normal.x>0?e.max.x:e.min.x,cu.y=l.normal.y>0?e.max.y:e.min.y,cu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(cu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function d0(){let o=null,e=!1,i=null,r=null;function l(c,d){i(c,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function uM(o,e){const i=e.isWebGL2,r=new WeakMap;function l(p,v){const x=p.array,S=p.usage,y=o.createBuffer();o.bindBuffer(v,y),o.bufferData(v,x,S),p.onUploadCallback();let A;if(x instanceof Float32Array)A=o.FLOAT;else if(x instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(i)A=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else A=o.UNSIGNED_SHORT;else if(x instanceof Int16Array)A=o.SHORT;else if(x instanceof Uint32Array)A=o.UNSIGNED_INT;else if(x instanceof Int32Array)A=o.INT;else if(x instanceof Int8Array)A=o.BYTE;else if(x instanceof Uint8Array)A=o.UNSIGNED_BYTE;else if(x instanceof Uint8ClampedArray)A=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+x);return{buffer:y,type:A,bytesPerElement:x.BYTES_PER_ELEMENT,version:p.version}}function c(p,v,x){const S=v.array,y=v.updateRange;o.bindBuffer(x,p),y.count===-1?o.bufferSubData(x,0,S):(i?o.bufferSubData(x,y.offset*S.BYTES_PER_ELEMENT,S,y.offset,y.count):o.bufferSubData(x,y.offset*S.BYTES_PER_ELEMENT,S.subarray(y.offset,y.offset+y.count)),y.count=-1),v.onUploadCallback()}function d(p){return p.isInterleavedBufferAttribute&&(p=p.data),r.get(p)}function h(p){p.isInterleavedBufferAttribute&&(p=p.data);const v=r.get(p);v&&(o.deleteBuffer(v.buffer),r.delete(p))}function g(p,v){if(p.isGLBufferAttribute){const S=r.get(p);(!S||S.version<p.version)&&r.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const x=r.get(p);x===void 0?r.set(p,l(p,v)):x.version<p.version&&(c(x.buffer,p,v),x.version=p.version)}return{get:d,remove:h,update:g}}class La extends ea{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,d=i/2,h=Math.floor(r),g=Math.floor(l),p=h+1,v=g+1,x=e/h,S=i/g,y=[],A=[],T=[],M=[];for(let m=0;m<v;m++){const U=m*S-d;for(let C=0;C<p;C++){const N=C*x-c;A.push(N,-U,0),T.push(0,0,1),M.push(C/h),M.push(1-m/g)}}for(let m=0;m<g;m++)for(let U=0;U<h;U++){const C=U+p*m,N=U+p*(m+1),z=U+1+p*(m+1),I=U+1+p*m;y.push(C,N,I),y.push(N,z,I)}this.setIndex(y),this.setAttribute("position",new Yn(A,3)),this.setAttribute("normal",new Yn(T,3)),this.setAttribute("uv",new Yn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.width,e.height,e.widthSegments,e.heightSegments)}}var cM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,dM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gM="vec3 transformed = vec3( position );",_M=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,SM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,yM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,AM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,RM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,wM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,CM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,DM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,LM=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,UM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,PM="gl_FragColor = linearToOutputTexel( gl_FragColor );",BM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,FM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,IM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,HM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,GM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,XM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,YM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ZM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$M=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,ty=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ey=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ny=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ay=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,sy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ry=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,oy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ly=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,uy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dy=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,py=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,my=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_y=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,My=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,yy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ey=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,by=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ty=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ry=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Dy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ly=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Uy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ny=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Oy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Py=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,By=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Iy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Vy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ky=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,jy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ky=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$y=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,tE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,eE=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nE=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iE=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,aE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,oE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,uE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fE=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,dE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,_E=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xE=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,SE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ME=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,AE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,RE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,DE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,OE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zE=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,BE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ue={alphamap_fragment:cM,alphamap_pars_fragment:fM,alphatest_fragment:hM,alphatest_pars_fragment:dM,aomap_fragment:pM,aomap_pars_fragment:mM,begin_vertex:gM,beginnormal_vertex:_M,bsdfs:vM,iridescence_fragment:xM,bumpmap_pars_fragment:SM,clipping_planes_fragment:MM,clipping_planes_pars_fragment:yM,clipping_planes_pars_vertex:EM,clipping_planes_vertex:bM,color_fragment:TM,color_pars_fragment:AM,color_pars_vertex:RM,color_vertex:wM,common:CM,cube_uv_reflection_fragment:DM,defaultnormal_vertex:LM,displacementmap_pars_vertex:UM,displacementmap_vertex:NM,emissivemap_fragment:OM,emissivemap_pars_fragment:zM,encodings_fragment:PM,encodings_pars_fragment:BM,envmap_fragment:FM,envmap_common_pars_fragment:IM,envmap_pars_fragment:HM,envmap_pars_vertex:GM,envmap_physical_pars_fragment:$M,envmap_vertex:VM,fog_vertex:XM,fog_pars_vertex:kM,fog_fragment:WM,fog_pars_fragment:qM,gradientmap_pars_fragment:jM,lightmap_fragment:YM,lightmap_pars_fragment:ZM,lights_lambert_fragment:KM,lights_lambert_pars_fragment:QM,lights_pars_begin:JM,lights_toon_fragment:ty,lights_toon_pars_fragment:ey,lights_phong_fragment:ny,lights_phong_pars_fragment:iy,lights_physical_fragment:ay,lights_physical_pars_fragment:sy,lights_fragment_begin:ry,lights_fragment_maps:oy,lights_fragment_end:ly,logdepthbuf_fragment:uy,logdepthbuf_pars_fragment:cy,logdepthbuf_pars_vertex:fy,logdepthbuf_vertex:hy,map_fragment:dy,map_pars_fragment:py,map_particle_fragment:my,map_particle_pars_fragment:gy,metalnessmap_fragment:_y,metalnessmap_pars_fragment:vy,morphcolor_vertex:xy,morphnormal_vertex:Sy,morphtarget_pars_vertex:My,morphtarget_vertex:yy,normal_fragment_begin:Ey,normal_fragment_maps:by,normal_pars_fragment:Ty,normal_pars_vertex:Ay,normal_vertex:Ry,normalmap_pars_fragment:wy,clearcoat_normal_fragment_begin:Cy,clearcoat_normal_fragment_maps:Dy,clearcoat_pars_fragment:Ly,iridescence_pars_fragment:Uy,output_fragment:Ny,packing:Oy,premultiplied_alpha_fragment:zy,project_vertex:Py,dithering_fragment:By,dithering_pars_fragment:Fy,roughnessmap_fragment:Iy,roughnessmap_pars_fragment:Hy,shadowmap_pars_fragment:Gy,shadowmap_pars_vertex:Vy,shadowmap_vertex:Xy,shadowmask_pars_fragment:ky,skinbase_vertex:Wy,skinning_pars_vertex:qy,skinning_vertex:jy,skinnormal_vertex:Yy,specularmap_fragment:Zy,specularmap_pars_fragment:Ky,tonemapping_fragment:Qy,tonemapping_pars_fragment:Jy,transmission_fragment:$y,transmission_pars_fragment:tE,uv_pars_fragment:eE,uv_pars_vertex:nE,uv_vertex:iE,worldpos_vertex:aE,background_vert:sE,background_frag:rE,backgroundCube_vert:oE,backgroundCube_frag:lE,cube_vert:uE,cube_frag:cE,depth_vert:fE,depth_frag:hE,distanceRGBA_vert:dE,distanceRGBA_frag:pE,equirect_vert:mE,equirect_frag:gE,linedashed_vert:_E,linedashed_frag:vE,meshbasic_vert:xE,meshbasic_frag:SE,meshlambert_vert:ME,meshlambert_frag:yE,meshmatcap_vert:EE,meshmatcap_frag:bE,meshnormal_vert:TE,meshnormal_frag:AE,meshphong_vert:RE,meshphong_frag:wE,meshphysical_vert:CE,meshphysical_frag:DE,meshtoon_vert:LE,meshtoon_frag:UE,points_vert:NE,points_frag:OE,shadow_vert:zE,shadow_frag:PE,sprite_vert:BE,sprite_frag:FE},Ct={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaTest:{value:0}}},Ri={basic:{uniforms:En([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:En([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new we(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:En([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:En([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:En([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new we(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:En([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:En([Ct.points,Ct.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:En([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:En([Ct.common,Ct.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:En([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:En([Ct.sprite,Ct.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:En([Ct.common,Ct.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:En([Ct.lights,Ct.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Ri.physical={uniforms:En([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const fu={r:0,b:0,g:0};function IE(o,e,i,r,l,c,d){const h=new we(0);let g=c===!0?0:1,p,v,x=null,S=0,y=null;function A(M,m){let U=!1,C=m.isScene===!0?m.background:null;switch(C&&C.isTexture&&(C=(m.backgroundBlurriness>0?i:e).get(C)),C===null?T(h,g):C&&C.isColor&&(T(C,1),U=!0),o.xr.getEnvironmentBlendMode()){case"opaque":U=!0;break;case"additive":r.buffers.color.setClear(0,0,0,1,d),U=!0;break;case"alpha-blend":r.buffers.color.setClear(0,0,0,0,d),U=!0;break}(o.autoClear||U)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),C&&(C.isCubeTexture||C.mapping===_u)?(v===void 0&&(v=new Oe(new Nn(1,1,1),new fs({name:"BackgroundCubeMaterial",uniforms:Mr(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(I,P,$){this.matrixWorld.copyPosition($.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),v.material.uniforms.envMap.value=C,v.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,v.material.toneMapped=C.colorSpace!==oe,(x!==C||S!==C.version||y!==o.toneMapping)&&(v.material.needsUpdate=!0,x=C,S=C.version,y=o.toneMapping),v.layers.enableAll(),M.unshift(v,v.geometry,v.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new Oe(new La(2,2),new fs({name:"BackgroundMaterial",uniforms:Mr(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Na,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,p.material.toneMapped=C.colorSpace!==oe,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(x!==C||S!==C.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,x=C,S=C.version,y=o.toneMapping),p.layers.enableAll(),M.unshift(p,p.geometry,p.material,0,0,null))}function T(M,m){M.getRGB(fu,c0(o)),r.buffers.color.setClear(fu.r,fu.g,fu.b,m,d)}return{getClearColor:function(){return h},setClearColor:function(M,m=1){h.set(M),g=m,T(h,g)},getClearAlpha:function(){return g},setClearAlpha:function(M){g=M,T(h,g)},render:A}}function HE(o,e,i,r){const l=o.getParameter(o.MAX_VERTEX_ATTRIBS),c=r.isWebGL2?null:e.get("OES_vertex_array_object"),d=r.isWebGL2||c!==null,h={},g=M(null);let p=g,v=!1;function x(at,rt,F,W,K){let vt=!1;if(d){const et=T(W,F,rt);p!==et&&(p=et,y(p.object)),vt=m(at,W,F,K),vt&&U(at,W,F,K)}else{const et=rt.wireframe===!0;(p.geometry!==W.id||p.program!==F.id||p.wireframe!==et)&&(p.geometry=W.id,p.program=F.id,p.wireframe=et,vt=!0)}K!==null&&i.update(K,o.ELEMENT_ARRAY_BUFFER),(vt||v)&&(v=!1,$(at,rt,F,W),K!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,i.get(K).buffer))}function S(){return r.isWebGL2?o.createVertexArray():c.createVertexArrayOES()}function y(at){return r.isWebGL2?o.bindVertexArray(at):c.bindVertexArrayOES(at)}function A(at){return r.isWebGL2?o.deleteVertexArray(at):c.deleteVertexArrayOES(at)}function T(at,rt,F){const W=F.wireframe===!0;let K=h[at.id];K===void 0&&(K={},h[at.id]=K);let vt=K[rt.id];vt===void 0&&(vt={},K[rt.id]=vt);let et=vt[W];return et===void 0&&(et=M(S()),vt[W]=et),et}function M(at){const rt=[],F=[],W=[];for(let K=0;K<l;K++)rt[K]=0,F[K]=0,W[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:rt,enabledAttributes:F,attributeDivisors:W,object:at,attributes:{},index:null}}function m(at,rt,F,W){const K=p.attributes,vt=rt.attributes;let et=0;const D=F.getAttributes();for(const X in D)if(D[X].location>=0){const Z=K[X];let mt=vt[X];if(mt===void 0&&(X==="instanceMatrix"&&at.instanceMatrix&&(mt=at.instanceMatrix),X==="instanceColor"&&at.instanceColor&&(mt=at.instanceColor)),Z===void 0||Z.attribute!==mt||mt&&Z.data!==mt.data)return!0;et++}return p.attributesNum!==et||p.index!==W}function U(at,rt,F,W){const K={},vt=rt.attributes;let et=0;const D=F.getAttributes();for(const X in D)if(D[X].location>=0){let Z=vt[X];Z===void 0&&(X==="instanceMatrix"&&at.instanceMatrix&&(Z=at.instanceMatrix),X==="instanceColor"&&at.instanceColor&&(Z=at.instanceColor));const mt={};mt.attribute=Z,Z&&Z.data&&(mt.data=Z.data),K[X]=mt,et++}p.attributes=K,p.attributesNum=et,p.index=W}function C(){const at=p.newAttributes;for(let rt=0,F=at.length;rt<F;rt++)at[rt]=0}function N(at){z(at,0)}function z(at,rt){const F=p.newAttributes,W=p.enabledAttributes,K=p.attributeDivisors;F[at]=1,W[at]===0&&(o.enableVertexAttribArray(at),W[at]=1),K[at]!==rt&&((r.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](at,rt),K[at]=rt)}function I(){const at=p.newAttributes,rt=p.enabledAttributes;for(let F=0,W=rt.length;F<W;F++)rt[F]!==at[F]&&(o.disableVertexAttribArray(F),rt[F]=0)}function P(at,rt,F,W,K,vt){r.isWebGL2===!0&&(F===o.INT||F===o.UNSIGNED_INT)?o.vertexAttribIPointer(at,rt,F,K,vt):o.vertexAttribPointer(at,rt,F,W,K,vt)}function $(at,rt,F,W){if(r.isWebGL2===!1&&(at.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;C();const K=W.attributes,vt=F.getAttributes(),et=rt.defaultAttributeValues;for(const D in vt){const X=vt[D];if(X.location>=0){let V=K[D];if(V===void 0&&(D==="instanceMatrix"&&at.instanceMatrix&&(V=at.instanceMatrix),D==="instanceColor"&&at.instanceColor&&(V=at.instanceColor)),V!==void 0){const Z=V.normalized,mt=V.itemSize,yt=i.get(V);if(yt===void 0)continue;const H=yt.buffer,It=yt.type,Nt=yt.bytesPerElement;if(V.isInterleavedBufferAttribute){const Rt=V.data,ft=Rt.stride,Mt=V.offset;if(Rt.isInstancedInterleavedBuffer){for(let Et=0;Et<X.locationSize;Et++)z(X.location+Et,Rt.meshPerAttribute);at.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let Et=0;Et<X.locationSize;Et++)N(X.location+Et);o.bindBuffer(o.ARRAY_BUFFER,H);for(let Et=0;Et<X.locationSize;Et++)P(X.location+Et,mt/X.locationSize,It,Z,ft*Nt,(Mt+mt/X.locationSize*Et)*Nt)}else{if(V.isInstancedBufferAttribute){for(let Rt=0;Rt<X.locationSize;Rt++)z(X.location+Rt,V.meshPerAttribute);at.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Rt=0;Rt<X.locationSize;Rt++)N(X.location+Rt);o.bindBuffer(o.ARRAY_BUFFER,H);for(let Rt=0;Rt<X.locationSize;Rt++)P(X.location+Rt,mt/X.locationSize,It,Z,mt*Nt,mt/X.locationSize*Rt*Nt)}}else if(et!==void 0){const Z=et[D];if(Z!==void 0)switch(Z.length){case 2:o.vertexAttrib2fv(X.location,Z);break;case 3:o.vertexAttrib3fv(X.location,Z);break;case 4:o.vertexAttrib4fv(X.location,Z);break;default:o.vertexAttrib1fv(X.location,Z)}}}}I()}function b(){st();for(const at in h){const rt=h[at];for(const F in rt){const W=rt[F];for(const K in W)A(W[K].object),delete W[K];delete rt[F]}delete h[at]}}function O(at){if(h[at.id]===void 0)return;const rt=h[at.id];for(const F in rt){const W=rt[F];for(const K in W)A(W[K].object),delete W[K];delete rt[F]}delete h[at.id]}function ht(at){for(const rt in h){const F=h[rt];if(F[at.id]===void 0)continue;const W=F[at.id];for(const K in W)A(W[K].object),delete W[K];delete F[at.id]}}function st(){Y(),v=!0,p!==g&&(p=g,y(p.object))}function Y(){g.geometry=null,g.program=null,g.wireframe=!1}return{setup:x,reset:st,resetDefaultState:Y,dispose:b,releaseStatesOfGeometry:O,releaseStatesOfProgram:ht,initAttributes:C,enableAttribute:N,disableUnusedAttributes:I}}function GE(o,e,i,r){const l=r.isWebGL2;let c;function d(p){c=p}function h(p,v){o.drawArrays(c,p,v),i.update(v,c,1)}function g(p,v,x){if(x===0)return;let S,y;if(l)S=o,y="drawArraysInstanced";else if(S=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",S===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[y](c,p,v,x),i.update(v,c,x)}this.setMode=d,this.render=h,this.renderInstances=g}function VE(o,e,i){let r;function l(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function c(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let h=i.precision!==void 0?i.precision:"highp";const g=c(h);g!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const p=d||e.has("WEBGL_draw_buffers"),v=i.logarithmicDepthBuffer===!0,x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),S=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=o.getParameter(o.MAX_TEXTURE_SIZE),A=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),T=o.getParameter(o.MAX_VERTEX_ATTRIBS),M=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),m=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),C=S>0,N=d||e.has("OES_texture_float"),z=C&&N,I=d?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:d,drawBuffers:p,getMaxAnisotropy:l,getMaxPrecision:c,precision:h,logarithmicDepthBuffer:v,maxTextures:x,maxVertexTextures:S,maxTextureSize:y,maxCubemapSize:A,maxAttributes:T,maxVertexUniforms:M,maxVaryings:m,maxFragmentUniforms:U,vertexTextures:C,floatFragmentTextures:N,floatVertexTextures:z,maxSamples:I}}function XE(o){const e=this;let i=null,r=0,l=!1,c=!1;const d=new ts,h=new _e,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(x,S){const y=x.length!==0||S||r!==0||l;return l=S,r=x.length,y},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,S){i=v(x,S,0)},this.setState=function(x,S,y){const A=x.clippingPlanes,T=x.clipIntersection,M=x.clipShadows,m=o.get(x);if(!l||A===null||A.length===0||c&&!M)c?v(null):p();else{const U=c?0:r,C=U*4;let N=m.clippingState||null;g.value=N,N=v(A,S,C,y);for(let z=0;z!==C;++z)N[z]=i[z];m.clippingState=N,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=U}};function p(){g.value!==i&&(g.value=i,g.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(x,S,y,A){const T=x!==null?x.length:0;let M=null;if(T!==0){if(M=g.value,A!==!0||M===null){const m=y+T*4,U=S.matrixWorldInverse;h.getNormalMatrix(U),(M===null||M.length<m)&&(M=new Float32Array(m));for(let C=0,N=y;C!==T;++C,N+=4)d.copy(x[C]).applyMatrix4(U,h),d.normal.toArray(M,N),M[N+3]=d.constant}g.value=M,g.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,M}}function kE(o){let e=new WeakMap;function i(d,h){return h===hh?d.mapping=vr:h===dh&&(d.mapping=xr),d}function r(d){if(d&&d.isTexture&&d.isRenderTargetTexture===!1){const h=d.mapping;if(h===hh||h===dh)if(e.has(d)){const g=e.get(d).texture;return i(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const p=new rM(g.height/2);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class p0 extends f0{constructor(e=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,d=r+e,h=l+i,g=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=v*this.view.offsetY,g=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,g,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const dr=4,g_=[.125,.215,.35,.446,.526,.582],is=20,rh=new p0,__=new we;let oh=null;const es=(1+Math.sqrt(5))/2,ur=1/es,v_=[new it(1,1,1),new it(-1,1,1),new it(1,1,-1),new it(-1,1,-1),new it(0,es,ur),new it(0,es,-ur),new it(ur,0,es),new it(-ur,0,es),new it(es,ur,0),new it(-es,ur,0)];class x_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){oh=this._renderer.getRenderTarget(),this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=y_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=M_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oh),e.scissorTest=!1,hu(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===vr||e.mapping===xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oh=this._renderer.getRenderTarget();const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:li,minFilter:li,generateMipmaps:!1,type:Ao,format:Si,colorSpace:Ci,depthBuffer:!1},l=S_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=S_(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=WE(c)),this._blurMaterial=qE(c,e,i)}return l}_compileMaterial(e){const i=new Oe(this._lodPlanes[0],e);this._renderer.compile(i,rh)}_sceneToCubeUV(e,i,r,l){const h=new ui(90,1,i,r),g=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,S=v.toneMapping;v.getClearColor(__),v.toneMapping=ta,v.autoClear=!1;const y=new ns({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),A=new Oe(new Nn,y);let T=!1;const M=e.background;M?M.isColor&&(y.color.copy(M),e.background=null,T=!0):(y.color.copy(__),T=!0);for(let m=0;m<6;m++){const U=m%3;U===0?(h.up.set(0,g[m],0),h.lookAt(p[m],0,0)):U===1?(h.up.set(0,0,g[m]),h.lookAt(0,p[m],0)):(h.up.set(0,g[m],0),h.lookAt(0,0,p[m]));const C=this._cubeSize;hu(l,U*C,m>2?C:0,C,C),v.setRenderTarget(l),T&&v.render(A,h),v.render(e,h)}A.geometry.dispose(),A.material.dispose(),v.toneMapping=S,v.autoClear=x,e.background=M}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===vr||e.mapping===xr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=y_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=M_());const c=l?this._cubemapMaterial:this._equirectMaterial,d=new Oe(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=e;const g=this._cubeSize;hu(i,0,0,3*g,2*g),r.setRenderTarget(i),r.render(d,rh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=v_[(l-1)%v_.length];this._blur(e,l-1,l,c,d)}i.autoClear=r}_blur(e,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",c),this._halfBlur(d,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,d,h){const g=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,x=new Oe(this._lodPlanes[l],p),S=p.uniforms,y=this._sizeLods[r]-1,A=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*is-1),T=c/A,M=isFinite(c)?1+Math.floor(v*T):is;M>is&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${is}`);const m=[];let U=0;for(let P=0;P<is;++P){const $=P/T,b=Math.exp(-$*$/2);m.push(b),P===0?U+=b:P<M&&(U+=2*b)}for(let P=0;P<m.length;P++)m[P]=m[P]/U;S.envMap.value=e.texture,S.samples.value=M,S.weights.value=m,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:C}=this;S.dTheta.value=A,S.mipInt.value=C-r;const N=this._sizeLods[l],z=3*N*(l>C-dr?l-C+dr:0),I=4*(this._cubeSize-N);hu(i,z,I,3*N,2*N),g.setRenderTarget(i),g.render(x,rh)}}function WE(o){const e=[],i=[],r=[];let l=o;const c=o-dr+1+g_.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);i.push(h);let g=1/h;d>o-dr?g=g_[d-o+dr-1]:d===0&&(g=0),r.push(g);const p=1/(h-2),v=-p,x=1+p,S=[v,v,x,v,x,x,v,v,x,x,v,x],y=6,A=6,T=3,M=2,m=1,U=new Float32Array(T*A*y),C=new Float32Array(M*A*y),N=new Float32Array(m*A*y);for(let I=0;I<y;I++){const P=I%3*2/3-1,$=I>2?0:-1,b=[P,$,0,P+2/3,$,0,P+2/3,$+1,0,P,$,0,P+2/3,$+1,0,P,$+1,0];U.set(b,T*A*I),C.set(S,M*A*I);const O=[I,I,I,I,I,I];N.set(O,m*A*I)}const z=new ea;z.setAttribute("position",new Mi(U,T)),z.setAttribute("uv",new Mi(C,M)),z.setAttribute("faceIndex",new Mi(N,m)),e.push(z),l>dr&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function S_(o,e,i){const r=new cs(o,e,i);return r.texture.mapping=_u,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function hu(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function qE(o,e,i){const r=new Float32Array(is),l=new it(0,1,0);return new fs({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function M_(){return new fs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function y_(){return new fs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function Th(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jE(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const g=h.mapping,p=g===hh||g===dh,v=g===vr||g===xr;if(p||v)if(h.isRenderTargetTexture&&h.needsPMREMUpdate===!0){h.needsPMREMUpdate=!1;let x=e.get(h);return i===null&&(i=new x_(o)),x=p?i.fromEquirectangular(h,x):i.fromCubemap(h,x),e.set(h,x),x.texture}else{if(e.has(h))return e.get(h).texture;{const x=h.image;if(p&&x&&x.height>0||v&&x&&l(x)){i===null&&(i=new x_(o));const S=p?i.fromEquirectangular(h):i.fromCubemap(h);return e.set(h,S),h.addEventListener("dispose",c),S.texture}else return null}}}return h}function l(h){let g=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&g++;return g===p}function c(h){const g=h.target;g.removeEventListener("dispose",c);const p=e.get(g);p!==void 0&&(e.delete(g),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function YE(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(r){r.isWebGL2?i("EXT_color_buffer_float"):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(r){const l=i(r);return l===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function ZE(o,e,i,r){const l={},c=new WeakMap;function d(x){const S=x.target;S.index!==null&&e.remove(S.index);for(const A in S.attributes)e.remove(S.attributes[A]);S.removeEventListener("dispose",d),delete l[S.id];const y=c.get(S);y&&(e.remove(y),c.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(x,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function g(x){const S=x.attributes;for(const A in S)e.update(S[A],o.ARRAY_BUFFER);const y=x.morphAttributes;for(const A in y){const T=y[A];for(let M=0,m=T.length;M<m;M++)e.update(T[M],o.ARRAY_BUFFER)}}function p(x){const S=[],y=x.index,A=x.attributes.position;let T=0;if(y!==null){const U=y.array;T=y.version;for(let C=0,N=U.length;C<N;C+=3){const z=U[C+0],I=U[C+1],P=U[C+2];S.push(z,I,I,P,P,z)}}else{const U=A.array;T=A.version;for(let C=0,N=U.length/3-1;C<N;C+=3){const z=C+0,I=C+1,P=C+2;S.push(z,I,I,P,P,z)}}const M=new(n0(S)?u0:l0)(S,1);M.version=T;const m=c.get(x);m&&e.remove(m),c.set(x,M)}function v(x){const S=c.get(x);if(S){const y=x.index;y!==null&&S.version<y.version&&p(x)}else p(x);return c.get(x)}return{get:h,update:g,getWireframeAttribute:v}}function KE(o,e,i,r){const l=r.isWebGL2;let c;function d(S){c=S}let h,g;function p(S){h=S.type,g=S.bytesPerElement}function v(S,y){o.drawElements(c,y,h,S*g),i.update(y,c,1)}function x(S,y,A){if(A===0)return;let T,M;if(l)T=o,M="drawElementsInstanced";else if(T=e.get("ANGLE_instanced_arrays"),M="drawElementsInstancedANGLE",T===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}T[M](c,y,h,S*g,A),i.update(y,c,A)}this.setMode=d,this.setIndex=p,this.render=v,this.renderInstances=x}function QE(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(c/3);break;case o.LINES:i.lines+=h*(c/2);break;case o.LINE_STRIP:i.lines+=h*(c-1);break;case o.LINE_LOOP:i.lines+=h*c;break;case o.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.frame++,i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function JE(o,e){return o[0]-e[0]}function $E(o,e){return Math.abs(e[1])-Math.abs(o[1])}function tb(o,e,i){const r={},l=new Float32Array(8),c=new WeakMap,d=new un,h=[];for(let p=0;p<8;p++)h[p]=[p,0];function g(p,v,x){const S=p.morphTargetInfluences;if(e.isWebGL2===!0){const A=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=A!==void 0?A.length:0;let M=c.get(v);if(M===void 0||M.count!==T){let rt=function(){Y.dispose(),c.delete(v),v.removeEventListener("dispose",rt)};var y=rt;M!==void 0&&M.texture.dispose();const C=v.morphAttributes.position!==void 0,N=v.morphAttributes.normal!==void 0,z=v.morphAttributes.color!==void 0,I=v.morphAttributes.position||[],P=v.morphAttributes.normal||[],$=v.morphAttributes.color||[];let b=0;C===!0&&(b=1),N===!0&&(b=2),z===!0&&(b=3);let O=v.attributes.position.count*b,ht=1;O>e.maxTextureSize&&(ht=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const st=new Float32Array(O*ht*4*T),Y=new s0(st,O,ht,T);Y.type=ss,Y.needsUpdate=!0;const at=b*4;for(let F=0;F<T;F++){const W=I[F],K=P[F],vt=$[F],et=O*ht*4*F;for(let D=0;D<W.count;D++){const X=D*at;C===!0&&(d.fromBufferAttribute(W,D),st[et+X+0]=d.x,st[et+X+1]=d.y,st[et+X+2]=d.z,st[et+X+3]=0),N===!0&&(d.fromBufferAttribute(K,D),st[et+X+4]=d.x,st[et+X+5]=d.y,st[et+X+6]=d.z,st[et+X+7]=0),z===!0&&(d.fromBufferAttribute(vt,D),st[et+X+8]=d.x,st[et+X+9]=d.y,st[et+X+10]=d.z,st[et+X+11]=vt.itemSize===4?d.w:1)}}M={count:T,texture:Y,size:new Ce(O,ht)},c.set(v,M),v.addEventListener("dispose",rt)}let m=0;for(let C=0;C<S.length;C++)m+=S[C];const U=v.morphTargetsRelative?1:1-m;x.getUniforms().setValue(o,"morphTargetBaseInfluence",U),x.getUniforms().setValue(o,"morphTargetInfluences",S),x.getUniforms().setValue(o,"morphTargetsTexture",M.texture,i),x.getUniforms().setValue(o,"morphTargetsTextureSize",M.size)}else{const A=S===void 0?0:S.length;let T=r[v.id];if(T===void 0||T.length!==A){T=[];for(let N=0;N<A;N++)T[N]=[N,0];r[v.id]=T}for(let N=0;N<A;N++){const z=T[N];z[0]=N,z[1]=S[N]}T.sort($E);for(let N=0;N<8;N++)N<A&&T[N][1]?(h[N][0]=T[N][0],h[N][1]=T[N][1]):(h[N][0]=Number.MAX_SAFE_INTEGER,h[N][1]=0);h.sort(JE);const M=v.morphAttributes.position,m=v.morphAttributes.normal;let U=0;for(let N=0;N<8;N++){const z=h[N],I=z[0],P=z[1];I!==Number.MAX_SAFE_INTEGER&&P?(M&&v.getAttribute("morphTarget"+N)!==M[I]&&v.setAttribute("morphTarget"+N,M[I]),m&&v.getAttribute("morphNormal"+N)!==m[I]&&v.setAttribute("morphNormal"+N,m[I]),l[N]=P,U+=P):(M&&v.hasAttribute("morphTarget"+N)===!0&&v.deleteAttribute("morphTarget"+N),m&&v.hasAttribute("morphNormal"+N)===!0&&v.deleteAttribute("morphNormal"+N),l[N]=0)}const C=v.morphTargetsRelative?1:1-U;x.getUniforms().setValue(o,"morphTargetBaseInfluence",C),x.getUniforms().setValue(o,"morphTargetInfluences",l)}}return{update:g}}function eb(o,e,i,r){let l=new WeakMap;function c(g){const p=r.render.frame,v=g.geometry,x=e.get(g,v);return l.get(x)!==p&&(e.update(x),l.set(x,p)),g.isInstancedMesh&&(g.hasEventListener("dispose",h)===!1&&g.addEventListener("dispose",h),i.update(g.instanceMatrix,o.ARRAY_BUFFER),g.instanceColor!==null&&i.update(g.instanceColor,o.ARRAY_BUFFER)),x}function d(){l=new WeakMap}function h(g){const p=g.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}const m0=new jn,g0=new s0,_0=new kS,v0=new h0,E_=[],b_=[],T_=new Float32Array(16),A_=new Float32Array(9),R_=new Float32Array(4);function Er(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=E_[l];if(c===void 0&&(c=new Float32Array(l),E_[l]=c),e!==0){r.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(c,h)}return c}function en(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function nn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function xu(o,e){let i=b_[e];i===void 0&&(i=new Int32Array(e),b_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function nb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function ib(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(en(i,e))return;o.uniform2fv(this.addr,e),nn(i,e)}}function ab(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(en(i,e))return;o.uniform3fv(this.addr,e),nn(i,e)}}function sb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(en(i,e))return;o.uniform4fv(this.addr,e),nn(i,e)}}function rb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(en(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),nn(i,e)}else{if(en(i,r))return;R_.set(r),o.uniformMatrix2fv(this.addr,!1,R_),nn(i,r)}}function ob(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(en(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),nn(i,e)}else{if(en(i,r))return;A_.set(r),o.uniformMatrix3fv(this.addr,!1,A_),nn(i,r)}}function lb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(en(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),nn(i,e)}else{if(en(i,r))return;T_.set(r),o.uniformMatrix4fv(this.addr,!1,T_),nn(i,r)}}function ub(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function cb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(en(i,e))return;o.uniform2iv(this.addr,e),nn(i,e)}}function fb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(en(i,e))return;o.uniform3iv(this.addr,e),nn(i,e)}}function hb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(en(i,e))return;o.uniform4iv(this.addr,e),nn(i,e)}}function db(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function pb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(en(i,e))return;o.uniform2uiv(this.addr,e),nn(i,e)}}function mb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(en(i,e))return;o.uniform3uiv(this.addr,e),nn(i,e)}}function gb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(en(i,e))return;o.uniform4uiv(this.addr,e),nn(i,e)}}function _b(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2D(e||m0,l)}function vb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||_0,l)}function xb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||v0,l)}function Sb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||g0,l)}function Mb(o){switch(o){case 5126:return nb;case 35664:return ib;case 35665:return ab;case 35666:return sb;case 35674:return rb;case 35675:return ob;case 35676:return lb;case 5124:case 35670:return ub;case 35667:case 35671:return cb;case 35668:case 35672:return fb;case 35669:case 35673:return hb;case 5125:return db;case 36294:return pb;case 36295:return mb;case 36296:return gb;case 35678:case 36198:case 36298:case 36306:case 35682:return _b;case 35679:case 36299:case 36307:return vb;case 35680:case 36300:case 36308:case 36293:return xb;case 36289:case 36303:case 36311:case 36292:return Sb}}function yb(o,e){o.uniform1fv(this.addr,e)}function Eb(o,e){const i=Er(e,this.size,2);o.uniform2fv(this.addr,i)}function bb(o,e){const i=Er(e,this.size,3);o.uniform3fv(this.addr,i)}function Tb(o,e){const i=Er(e,this.size,4);o.uniform4fv(this.addr,i)}function Ab(o,e){const i=Er(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Rb(o,e){const i=Er(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function wb(o,e){const i=Er(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Cb(o,e){o.uniform1iv(this.addr,e)}function Db(o,e){o.uniform2iv(this.addr,e)}function Lb(o,e){o.uniform3iv(this.addr,e)}function Ub(o,e){o.uniform4iv(this.addr,e)}function Nb(o,e){o.uniform1uiv(this.addr,e)}function Ob(o,e){o.uniform2uiv(this.addr,e)}function zb(o,e){o.uniform3uiv(this.addr,e)}function Pb(o,e){o.uniform4uiv(this.addr,e)}function Bb(o,e,i){const r=this.cache,l=e.length,c=xu(i,l);en(r,c)||(o.uniform1iv(this.addr,c),nn(r,c));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||m0,c[d])}function Fb(o,e,i){const r=this.cache,l=e.length,c=xu(i,l);en(r,c)||(o.uniform1iv(this.addr,c),nn(r,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||_0,c[d])}function Ib(o,e,i){const r=this.cache,l=e.length,c=xu(i,l);en(r,c)||(o.uniform1iv(this.addr,c),nn(r,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||v0,c[d])}function Hb(o,e,i){const r=this.cache,l=e.length,c=xu(i,l);en(r,c)||(o.uniform1iv(this.addr,c),nn(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||g0,c[d])}function Gb(o){switch(o){case 5126:return yb;case 35664:return Eb;case 35665:return bb;case 35666:return Tb;case 35674:return Ab;case 35675:return Rb;case 35676:return wb;case 5124:case 35670:return Cb;case 35667:case 35671:return Db;case 35668:case 35672:return Lb;case 35669:case 35673:return Ub;case 5125:return Nb;case 36294:return Ob;case 36295:return zb;case 36296:return Pb;case 35678:case 36198:case 36298:case 36306:case 35682:return Bb;case 35679:case 36299:case 36307:return Fb;case 35680:case 36300:case 36308:case 36293:return Ib;case 36289:case 36303:case 36311:case 36292:return Hb}}class Vb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.setValue=Mb(i.type)}}class Xb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.size=i.size,this.setValue=Gb(i.type)}}class kb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(e,i[h.id],r)}}}const lh=/(\w+)(\])?(\[|\.)?/g;function w_(o,e){o.seq.push(e),o.map[e.id]=e}function Wb(o,e,i){const r=o.name,l=r.length;for(lh.lastIndex=0;;){const c=lh.exec(r),d=lh.lastIndex;let h=c[1];const g=c[2]==="]",p=c[3];if(g&&(h=h|0),p===void 0||p==="["&&d+2===l){w_(i,p===void 0?new Vb(h,o,e):new Xb(h,o,e));break}else{let x=i.map[h];x===void 0&&(x=new kb(h),w_(i,x)),i=x}}}class pu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),d=e.getUniformLocation(i,c.name);Wb(c,d,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],g=r[h.id];g.needsUpdate!==!1&&h.setValue(e,g.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function C_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}let qb=0;function jb(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}function Yb(o){switch(o){case Ci:return["Linear","( value )"];case oe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),["Linear","( value )"]}}function D_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+jb(o.getShaderSource(e),d)}else return l}function Zb(o,e){const i=Yb(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+i[0]+i[1]+"; }"}function Kb(o,e){let i;switch(e){case cS:i="Linear";break;case fS:i="Reinhard";break;case hS:i="OptimizedCineon";break;case dS:i="ACESFilmic";break;case pS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function Qb(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Eo).join(`
`)}function Jb(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function $b(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),d=c.name;let h=1;c.type===o.FLOAT_MAT2&&(h=2),c.type===o.FLOAT_MAT3&&(h=3),c.type===o.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Eo(o){return o!==""}function L_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function U_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tT=/^[ \t]*#include +<([\w\d./]+)>/gm;function vh(o){return o.replace(tT,eT)}function eT(o,e){const i=ue[e];if(i===void 0)throw new Error("Can not resolve #include <"+e+">");return vh(i)}const nT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function N_(o){return o.replace(nT,iT)}function iT(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function O_(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function aT(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Y_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Vx?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===$i&&(e="SHADOWMAP_TYPE_VSM"),e}function sT(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case vr:case xr:e="ENVMAP_TYPE_CUBE";break;case _u:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rT(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case xr:e="ENVMAP_MODE_REFRACTION";break}return e}function oT(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case yh:e="ENVMAP_BLENDING_MULTIPLY";break;case lS:e="ENVMAP_BLENDING_MIX";break;case uS:e="ENVMAP_BLENDING_ADD";break}return e}function lT(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function uT(o,e,i,r){const l=o.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const g=aT(i),p=sT(i),v=rT(i),x=oT(i),S=lT(i),y=i.isWebGL2?"":Qb(i),A=Jb(c),T=l.createProgram();let M,m,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=[A].filter(Eo).join(`
`),M.length>0&&(M+=`
`),m=[y,A].filter(Eo).join(`
`),m.length>0&&(m+=`
`)):(M=[O_(i),"#define SHADER_NAME "+i.shaderName,A,i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),m=[y,O_(i),"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+x:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ta?"#define TONE_MAPPING":"",i.toneMapping!==ta?ue.tonemapping_pars_fragment:"",i.toneMapping!==ta?Kb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ue.encodings_pars_fragment,Zb("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Eo).join(`
`)),d=vh(d),d=L_(d,i),d=U_(d,i),h=vh(h),h=L_(h,i),h=U_(h,i),d=N_(d),h=N_(h),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,M=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,m=["#define varying in",i.glslVersion===$g?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===$g?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const C=U+M+d,N=U+m+h,z=C_(l,l.VERTEX_SHADER,C),I=C_(l,l.FRAGMENT_SHADER,N);if(l.attachShader(T,z),l.attachShader(T,I),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T),o.debug.checkShaderErrors){const b=l.getProgramInfoLog(T).trim(),O=l.getShaderInfoLog(z).trim(),ht=l.getShaderInfoLog(I).trim();let st=!0,Y=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(st=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,T,z,I);else{const at=D_(l,z,"vertex"),rt=D_(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Program Info Log: `+b+`
`+at+`
`+rt)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(O===""||ht==="")&&(Y=!1);Y&&(this.diagnostics={runnable:st,programLog:b,vertexShader:{log:O,prefix:M},fragmentShader:{log:ht,prefix:m}})}l.deleteShader(z),l.deleteShader(I);let P;this.getUniforms=function(){return P===void 0&&(P=new pu(l,T)),P};let $;return this.getAttributes=function(){return $===void 0&&($=$b(l,T)),$},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.name=i.shaderName,this.id=qb++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=z,this.fragmentShader=I,this}let cT=0;class fT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new hT(e),i.set(e,r)),r}}class hT{constructor(e){this.id=cT++,this.code=e,this.usedTimes=0}}function dT(o,e,i,r,l,c,d){const h=new Eh,g=new fT,p=[],v=l.isWebGL2,x=l.logarithmicDepthBuffer,S=l.vertexTextures;let y=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return b===1?"uv1":b===2?"uv2":b===3?"uv3":"uv"}function M(b,O,ht,st,Y){const at=st.fog,rt=Y.geometry,F=b.isMeshStandardMaterial?st.environment:null,W=(b.isMeshStandardMaterial?i:e).get(b.envMap||F),K=W&&W.mapping===_u?W.image.height:null,vt=A[b.type];b.precision!==null&&(y=l.getMaxPrecision(b.precision),y!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",y,"instead."));const et=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,D=et!==void 0?et.length:0;let X=0;rt.morphAttributes.position!==void 0&&(X=1),rt.morphAttributes.normal!==void 0&&(X=2),rt.morphAttributes.color!==void 0&&(X=3);let V,Z,mt,yt;if(vt){const Me=Ri[vt];V=Me.vertexShader,Z=Me.fragmentShader}else V=b.vertexShader,Z=b.fragmentShader,g.update(b),mt=g.getVertexShaderID(b),yt=g.getFragmentShaderID(b);const H=o.getRenderTarget(),It=Y.isInstancedMesh===!0,Nt=!!b.map,Rt=!!b.matcap,ft=!!W,Mt=!!b.aoMap,Et=!!b.lightMap,Ut=!!b.bumpMap,$t=!!b.normalMap,Wt=!!b.displacementMap,ve=!!b.emissiveMap,xe=!!b.metalnessMap,Ot=!!b.roughnessMap,Jt=b.clearcoat>0,an=b.iridescence>0,L=b.sheen>0,R=b.transmission>0,lt=Jt&&!!b.clearcoatMap,Tt=Jt&&!!b.clearcoatNormalMap,At=Jt&&!!b.clearcoatRoughnessMap,Dt=an&&!!b.iridescenceMap,Yt=an&&!!b.iridescenceThicknessMap,Pt=L&&!!b.sheenColorMap,gt=L&&!!b.sheenRoughnessMap,Vt=!!b.specularMap,qt=!!b.specularColorMap,Xt=!!b.specularIntensityMap,wt=R&&!!b.transmissionMap,Bt=R&&!!b.thicknessMap,Kt=!!b.gradientMap,Te=!!b.alphaMap,He=b.alphaTest>0,k=!!b.extensions,dt=!!rt.attributes.uv1,bt=!!rt.attributes.uv2,Lt=!!rt.attributes.uv3;return{isWebGL2:v,shaderID:vt,shaderName:b.type,vertexShader:V,fragmentShader:Z,defines:b.defines,customVertexShaderID:mt,customFragmentShaderID:yt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:y,instancing:It,instancingColor:It&&Y.instanceColor!==null,supportsVertexTextures:S,outputColorSpace:H===null?o.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Ci,map:Nt,matcap:Rt,envMap:ft,envMapMode:ft&&W.mapping,envMapCubeUVHeight:K,aoMap:Mt,lightMap:Et,bumpMap:Ut,normalMap:$t,displacementMap:S&&Wt,emissiveMap:ve,normalMapObjectSpace:$t&&b.normalMapType===NS,normalMapTangentSpace:$t&&b.normalMapType===t0,metalnessMap:xe,roughnessMap:Ot,clearcoat:Jt,clearcoatMap:lt,clearcoatNormalMap:Tt,clearcoatRoughnessMap:At,iridescence:an,iridescenceMap:Dt,iridescenceThicknessMap:Yt,sheen:L,sheenColorMap:Pt,sheenRoughnessMap:gt,specularMap:Vt,specularColorMap:qt,specularIntensityMap:Xt,transmission:R,transmissionMap:wt,thicknessMap:Bt,gradientMap:Kt,opaque:b.transparent===!1&&b.blending===mr,alphaMap:Te,alphaTest:He,combine:b.combine,mapUv:Nt&&T(b.map.channel),aoMapUv:Mt&&T(b.aoMap.channel),lightMapUv:Et&&T(b.lightMap.channel),bumpMapUv:Ut&&T(b.bumpMap.channel),normalMapUv:$t&&T(b.normalMap.channel),displacementMapUv:Wt&&T(b.displacementMap.channel),emissiveMapUv:ve&&T(b.emissiveMap.channel),metalnessMapUv:xe&&T(b.metalnessMap.channel),roughnessMapUv:Ot&&T(b.roughnessMap.channel),clearcoatMapUv:lt&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:gt&&T(b.sheenRoughnessMap.channel),specularMapUv:Vt&&T(b.specularMap.channel),specularColorMapUv:qt&&T(b.specularColorMap.channel),specularIntensityMapUv:Xt&&T(b.specularIntensityMap.channel),transmissionMapUv:wt&&T(b.transmissionMap.channel),thicknessMapUv:Bt&&T(b.thicknessMap.channel),alphaMapUv:Te&&T(b.alphaMap.channel),vertexTangents:$t&&!!rt.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,vertexUv1s:dt,vertexUv2s:bt,vertexUv3s:Lt,pointsUvs:Y.isPoints===!0&&!!rt.attributes.uv&&(Nt||Te),fog:!!at,useFog:b.fog===!0,fogExp2:at&&at.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:x,skinning:Y.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:X,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&ht.length>0,shadowMapType:o.shadowMap.type,toneMapping:b.toneMapped?o.toneMapping:ta,useLegacyLights:o.useLegacyLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===wi,flipSided:b.side===zn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:k&&b.extensions.derivatives===!0,extensionFragDepth:k&&b.extensions.fragDepth===!0,extensionDrawBuffers:k&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:k&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:v||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:v||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:v||r.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function m(b){const O=[];if(b.shaderID?O.push(b.shaderID):(O.push(b.customVertexShaderID),O.push(b.customFragmentShaderID)),b.defines!==void 0)for(const ht in b.defines)O.push(ht),O.push(b.defines[ht]);return b.isRawShaderMaterial===!1&&(U(O,b),C(O,b),O.push(o.outputColorSpace)),O.push(b.customProgramCacheKey),O.join()}function U(b,O){b.push(O.precision),b.push(O.outputColorSpace),b.push(O.envMapMode),b.push(O.envMapCubeUVHeight),b.push(O.mapUv),b.push(O.alphaMapUv),b.push(O.lightMapUv),b.push(O.aoMapUv),b.push(O.bumpMapUv),b.push(O.normalMapUv),b.push(O.displacementMapUv),b.push(O.emissiveMapUv),b.push(O.metalnessMapUv),b.push(O.roughnessMapUv),b.push(O.clearcoatMapUv),b.push(O.clearcoatNormalMapUv),b.push(O.clearcoatRoughnessMapUv),b.push(O.iridescenceMapUv),b.push(O.iridescenceThicknessMapUv),b.push(O.sheenColorMapUv),b.push(O.sheenRoughnessMapUv),b.push(O.specularMapUv),b.push(O.specularColorMapUv),b.push(O.specularIntensityMapUv),b.push(O.transmissionMapUv),b.push(O.thicknessMapUv),b.push(O.combine),b.push(O.fogExp2),b.push(O.sizeAttenuation),b.push(O.morphTargetsCount),b.push(O.morphAttributeCount),b.push(O.numDirLights),b.push(O.numPointLights),b.push(O.numSpotLights),b.push(O.numSpotLightMaps),b.push(O.numHemiLights),b.push(O.numRectAreaLights),b.push(O.numDirLightShadows),b.push(O.numPointLightShadows),b.push(O.numSpotLightShadows),b.push(O.numSpotLightShadowsWithMaps),b.push(O.shadowMapType),b.push(O.toneMapping),b.push(O.numClippingPlanes),b.push(O.numClipIntersection),b.push(O.depthPacking)}function C(b,O){h.disableAll(),O.isWebGL2&&h.enable(0),O.supportsVertexTextures&&h.enable(1),O.instancing&&h.enable(2),O.instancingColor&&h.enable(3),O.matcap&&h.enable(4),O.envMap&&h.enable(5),O.normalMapObjectSpace&&h.enable(6),O.normalMapTangentSpace&&h.enable(7),O.clearcoat&&h.enable(8),O.iridescence&&h.enable(9),O.alphaTest&&h.enable(10),O.vertexColors&&h.enable(11),O.vertexAlphas&&h.enable(12),O.vertexUv1s&&h.enable(13),O.vertexUv2s&&h.enable(14),O.vertexUv3s&&h.enable(15),O.vertexTangents&&h.enable(16),b.push(h.mask),h.disableAll(),O.fog&&h.enable(0),O.useFog&&h.enable(1),O.flatShading&&h.enable(2),O.logarithmicDepthBuffer&&h.enable(3),O.skinning&&h.enable(4),O.morphTargets&&h.enable(5),O.morphNormals&&h.enable(6),O.morphColors&&h.enable(7),O.premultipliedAlpha&&h.enable(8),O.shadowMapEnabled&&h.enable(9),O.useLegacyLights&&h.enable(10),O.doubleSided&&h.enable(11),O.flipSided&&h.enable(12),O.useDepthPacking&&h.enable(13),O.dithering&&h.enable(14),O.transmission&&h.enable(15),O.sheen&&h.enable(16),O.opaque&&h.enable(17),O.pointsUvs&&h.enable(18),b.push(h.mask)}function N(b){const O=A[b.type];let ht;if(O){const st=Ri[O];ht=nM.clone(st.uniforms)}else ht=b.uniforms;return ht}function z(b,O){let ht;for(let st=0,Y=p.length;st<Y;st++){const at=p[st];if(at.cacheKey===O){ht=at,++ht.usedTimes;break}}return ht===void 0&&(ht=new uT(o,O,b,c),p.push(ht)),ht}function I(b){if(--b.usedTimes===0){const O=p.indexOf(b);p[O]=p[p.length-1],p.pop(),b.destroy()}}function P(b){g.remove(b)}function $(){g.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:N,acquireProgram:z,releaseProgram:I,releaseShaderCache:P,programs:p,dispose:$}}function pT(){let o=new WeakMap;function e(c){let d=o.get(c);return d===void 0&&(d={},o.set(c,d)),d}function i(c){o.delete(c)}function r(c,d,h){o.get(c)[d]=h}function l(){o=new WeakMap}return{get:e,remove:i,update:r,dispose:l}}function mT(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function z_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function P_(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function d(x,S,y,A,T,M){let m=o[e];return m===void 0?(m={id:x.id,object:x,geometry:S,material:y,groupOrder:A,renderOrder:x.renderOrder,z:T,group:M},o[e]=m):(m.id=x.id,m.object=x,m.geometry=S,m.material=y,m.groupOrder=A,m.renderOrder=x.renderOrder,m.z=T,m.group=M),e++,m}function h(x,S,y,A,T,M){const m=d(x,S,y,A,T,M);y.transmission>0?r.push(m):y.transparent===!0?l.push(m):i.push(m)}function g(x,S,y,A,T,M){const m=d(x,S,y,A,T,M);y.transmission>0?r.unshift(m):y.transparent===!0?l.unshift(m):i.unshift(m)}function p(x,S){i.length>1&&i.sort(x||mT),r.length>1&&r.sort(S||z_),l.length>1&&l.sort(S||z_)}function v(){for(let x=e,S=o.length;x<S;x++){const y=o[x];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:g,finish:v,sort:p}}function gT(){let o=new WeakMap;function e(r,l){const c=o.get(r);let d;return c===void 0?(d=new P_,o.set(r,[d])):l>=c.length?(d=new P_,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function _T(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new it,color:new we};break;case"SpotLight":i={position:new it,direction:new it,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new it,color:new we,distance:0,decay:0};break;case"HemisphereLight":i={direction:new it,skyColor:new we,groundColor:new we};break;case"RectAreaLight":i={color:new we,position:new it,halfWidth:new it,halfHeight:new it};break}return o[e.id]=i,i}}}function vT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let xT=0;function ST(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function MT(o,e){const i=new _T,r=vT(),l={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let v=0;v<9;v++)l.probe.push(new it);const c=new it,d=new We,h=new We;function g(v,x){let S=0,y=0,A=0;for(let ht=0;ht<9;ht++)l.probe[ht].set(0,0,0);let T=0,M=0,m=0,U=0,C=0,N=0,z=0,I=0,P=0,$=0;v.sort(ST);const b=x===!0?Math.PI:1;for(let ht=0,st=v.length;ht<st;ht++){const Y=v[ht],at=Y.color,rt=Y.intensity,F=Y.distance,W=Y.shadow&&Y.shadow.map?Y.shadow.map.texture:null;if(Y.isAmbientLight)S+=at.r*rt*b,y+=at.g*rt*b,A+=at.b*rt*b;else if(Y.isLightProbe)for(let K=0;K<9;K++)l.probe[K].addScaledVector(Y.sh.coefficients[K],rt);else if(Y.isDirectionalLight){const K=i.get(Y);if(K.color.copy(Y.color).multiplyScalar(Y.intensity*b),Y.castShadow){const vt=Y.shadow,et=r.get(Y);et.shadowBias=vt.bias,et.shadowNormalBias=vt.normalBias,et.shadowRadius=vt.radius,et.shadowMapSize=vt.mapSize,l.directionalShadow[T]=et,l.directionalShadowMap[T]=W,l.directionalShadowMatrix[T]=Y.shadow.matrix,N++}l.directional[T]=K,T++}else if(Y.isSpotLight){const K=i.get(Y);K.position.setFromMatrixPosition(Y.matrixWorld),K.color.copy(at).multiplyScalar(rt*b),K.distance=F,K.coneCos=Math.cos(Y.angle),K.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),K.decay=Y.decay,l.spot[m]=K;const vt=Y.shadow;if(Y.map&&(l.spotLightMap[P]=Y.map,P++,vt.updateMatrices(Y),Y.castShadow&&$++),l.spotLightMatrix[m]=vt.matrix,Y.castShadow){const et=r.get(Y);et.shadowBias=vt.bias,et.shadowNormalBias=vt.normalBias,et.shadowRadius=vt.radius,et.shadowMapSize=vt.mapSize,l.spotShadow[m]=et,l.spotShadowMap[m]=W,I++}m++}else if(Y.isRectAreaLight){const K=i.get(Y);K.color.copy(at).multiplyScalar(rt),K.halfWidth.set(Y.width*.5,0,0),K.halfHeight.set(0,Y.height*.5,0),l.rectArea[U]=K,U++}else if(Y.isPointLight){const K=i.get(Y);if(K.color.copy(Y.color).multiplyScalar(Y.intensity*b),K.distance=Y.distance,K.decay=Y.decay,Y.castShadow){const vt=Y.shadow,et=r.get(Y);et.shadowBias=vt.bias,et.shadowNormalBias=vt.normalBias,et.shadowRadius=vt.radius,et.shadowMapSize=vt.mapSize,et.shadowCameraNear=vt.camera.near,et.shadowCameraFar=vt.camera.far,l.pointShadow[M]=et,l.pointShadowMap[M]=W,l.pointShadowMatrix[M]=Y.shadow.matrix,z++}l.point[M]=K,M++}else if(Y.isHemisphereLight){const K=i.get(Y);K.skyColor.copy(Y.color).multiplyScalar(rt*b),K.groundColor.copy(Y.groundColor).multiplyScalar(rt*b),l.hemi[C]=K,C++}}U>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Ct.LTC_FLOAT_1,l.rectAreaLTC2=Ct.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(l.rectAreaLTC1=Ct.LTC_HALF_1,l.rectAreaLTC2=Ct.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),l.ambient[0]=S,l.ambient[1]=y,l.ambient[2]=A;const O=l.hash;(O.directionalLength!==T||O.pointLength!==M||O.spotLength!==m||O.rectAreaLength!==U||O.hemiLength!==C||O.numDirectionalShadows!==N||O.numPointShadows!==z||O.numSpotShadows!==I||O.numSpotMaps!==P)&&(l.directional.length=T,l.spot.length=m,l.rectArea.length=U,l.point.length=M,l.hemi.length=C,l.directionalShadow.length=N,l.directionalShadowMap.length=N,l.pointShadow.length=z,l.pointShadowMap.length=z,l.spotShadow.length=I,l.spotShadowMap.length=I,l.directionalShadowMatrix.length=N,l.pointShadowMatrix.length=z,l.spotLightMatrix.length=I+P-$,l.spotLightMap.length=P,l.numSpotLightShadowsWithMaps=$,O.directionalLength=T,O.pointLength=M,O.spotLength=m,O.rectAreaLength=U,O.hemiLength=C,O.numDirectionalShadows=N,O.numPointShadows=z,O.numSpotShadows=I,O.numSpotMaps=P,l.version=xT++)}function p(v,x){let S=0,y=0,A=0,T=0,M=0;const m=x.matrixWorldInverse;for(let U=0,C=v.length;U<C;U++){const N=v[U];if(N.isDirectionalLight){const z=l.directional[S];z.direction.setFromMatrixPosition(N.matrixWorld),c.setFromMatrixPosition(N.target.matrixWorld),z.direction.sub(c),z.direction.transformDirection(m),S++}else if(N.isSpotLight){const z=l.spot[A];z.position.setFromMatrixPosition(N.matrixWorld),z.position.applyMatrix4(m),z.direction.setFromMatrixPosition(N.matrixWorld),c.setFromMatrixPosition(N.target.matrixWorld),z.direction.sub(c),z.direction.transformDirection(m),A++}else if(N.isRectAreaLight){const z=l.rectArea[T];z.position.setFromMatrixPosition(N.matrixWorld),z.position.applyMatrix4(m),h.identity(),d.copy(N.matrixWorld),d.premultiply(m),h.extractRotation(d),z.halfWidth.set(N.width*.5,0,0),z.halfHeight.set(0,N.height*.5,0),z.halfWidth.applyMatrix4(h),z.halfHeight.applyMatrix4(h),T++}else if(N.isPointLight){const z=l.point[y];z.position.setFromMatrixPosition(N.matrixWorld),z.position.applyMatrix4(m),y++}else if(N.isHemisphereLight){const z=l.hemi[M];z.direction.setFromMatrixPosition(N.matrixWorld),z.direction.transformDirection(m),M++}}}return{setup:g,setupView:p,state:l}}function B_(o,e){const i=new MT(o,e),r=[],l=[];function c(){r.length=0,l.length=0}function d(x){r.push(x)}function h(x){l.push(x)}function g(x){i.setup(r,x)}function p(x){i.setupView(r,x)}return{init:c,state:{lightsArray:r,shadowsArray:l,lights:i},setupLights:g,setupLightsView:p,pushLight:d,pushShadow:h}}function yT(o,e){let i=new WeakMap;function r(c,d=0){const h=i.get(c);let g;return h===void 0?(g=new B_(o,e),i.set(c,[g])):d>=h.length?(g=new B_(o,e),h.push(g)):g=h[d],g}function l(){i=new WeakMap}return{get:r,dispose:l}}class ET extends Lo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=LS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bT extends Lo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const TT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function RT(o,e,i){let r=new bh;const l=new Ce,c=new Ce,d=new un,h=new ET({depthPacking:US}),g=new bT,p={},v=i.maxTextureSize,x={[Na]:zn,[zn]:Na,[wi]:wi},S=new fs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:TT,fragmentShader:AT}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const A=new ea;A.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Oe(A,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Y_;let m=this.type;this.render=function(z,I,P){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;const $=o.getRenderTarget(),b=o.getActiveCubeFace(),O=o.getActiveMipmapLevel(),ht=o.state;ht.setBlending(Ua),ht.buffers.color.setClear(1,1,1,1),ht.buffers.depth.setTest(!0),ht.setScissorTest(!1);const st=m!==$i&&this.type===$i,Y=m===$i&&this.type!==$i;for(let at=0,rt=z.length;at<rt;at++){const F=z[at],W=F.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const K=W.getFrameExtents();if(l.multiply(K),c.copy(W.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/K.x),l.x=c.x*K.x,W.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/K.y),l.y=c.y*K.y,W.mapSize.y=c.y)),W.map===null||st===!0||Y===!0){const et=this.type!==$i?{minFilter:bn,magFilter:bn}:{};W.map!==null&&W.map.dispose(),W.map=new cs(l.x,l.y,et),W.map.texture.name=F.name+".shadowMap",W.camera.updateProjectionMatrix()}o.setRenderTarget(W.map),o.clear();const vt=W.getViewportCount();for(let et=0;et<vt;et++){const D=W.getViewport(et);d.set(c.x*D.x,c.y*D.y,c.x*D.z,c.y*D.w),ht.viewport(d),W.updateMatrices(F,et),r=W.getFrustum(),N(I,P,W.camera,F,this.type)}W.isPointLightShadow!==!0&&this.type===$i&&U(W,P),W.needsUpdate=!1}m=this.type,M.needsUpdate=!1,o.setRenderTarget($,b,O)};function U(z,I){const P=e.update(T);S.defines.VSM_SAMPLES!==z.blurSamples&&(S.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new cs(l.x,l.y)),S.uniforms.shadow_pass.value=z.map.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,o.setRenderTarget(z.mapPass),o.clear(),o.renderBufferDirect(I,null,P,S,T,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,o.setRenderTarget(z.map),o.clear(),o.renderBufferDirect(I,null,P,y,T,null)}function C(z,I,P,$){let b=null;const O=P.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(O!==void 0)b=O;else if(b=P.isPointLight===!0?g:h,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const ht=b.uuid,st=I.uuid;let Y=p[ht];Y===void 0&&(Y={},p[ht]=Y);let at=Y[st];at===void 0&&(at=b.clone(),Y[st]=at),b=at}if(b.visible=I.visible,b.wireframe=I.wireframe,$===$i?b.side=I.shadowSide!==null?I.shadowSide:I.side:b.side=I.shadowSide!==null?I.shadowSide:x[I.side],b.alphaMap=I.alphaMap,b.alphaTest=I.alphaTest,b.map=I.map,b.clipShadows=I.clipShadows,b.clippingPlanes=I.clippingPlanes,b.clipIntersection=I.clipIntersection,b.displacementMap=I.displacementMap,b.displacementScale=I.displacementScale,b.displacementBias=I.displacementBias,b.wireframeLinewidth=I.wireframeLinewidth,b.linewidth=I.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const ht=o.properties.get(b);ht.light=P}return b}function N(z,I,P,$,b){if(z.visible===!1)return;if(z.layers.test(I.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&b===$i)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,z.matrixWorld);const st=e.update(z),Y=z.material;if(Array.isArray(Y)){const at=st.groups;for(let rt=0,F=at.length;rt<F;rt++){const W=at[rt],K=Y[W.materialIndex];if(K&&K.visible){const vt=C(z,K,$,b);o.renderBufferDirect(P,null,st,vt,z,W)}}}else if(Y.visible){const at=C(z,Y,$,b);o.renderBufferDirect(P,null,st,at,z,null)}}const ht=z.children;for(let st=0,Y=ht.length;st<Y;st++)N(ht[st],I,P,$,b)}}function wT(o,e,i){const r=i.isWebGL2;function l(){let k=!1;const dt=new un;let bt=null;const Lt=new un(0,0,0,0);return{setMask:function(Ft){bt!==Ft&&!k&&(o.colorMask(Ft,Ft,Ft,Ft),bt=Ft)},setLocked:function(Ft){k=Ft},setClear:function(Ft,Me,Se,sn,ci){ci===!0&&(Ft*=sn,Me*=sn,Se*=sn),dt.set(Ft,Me,Se,sn),Lt.equals(dt)===!1&&(o.clearColor(Ft,Me,Se,sn),Lt.copy(dt))},reset:function(){k=!1,bt=null,Lt.set(-1,0,0,0)}}}function c(){let k=!1,dt=null,bt=null,Lt=null;return{setTest:function(Ft){Ft?H(o.DEPTH_TEST):It(o.DEPTH_TEST)},setMask:function(Ft){dt!==Ft&&!k&&(o.depthMask(Ft),dt=Ft)},setFunc:function(Ft){if(bt!==Ft){switch(Ft){case eS:o.depthFunc(o.NEVER);break;case nS:o.depthFunc(o.ALWAYS);break;case iS:o.depthFunc(o.LESS);break;case fh:o.depthFunc(o.LEQUAL);break;case aS:o.depthFunc(o.EQUAL);break;case sS:o.depthFunc(o.GEQUAL);break;case rS:o.depthFunc(o.GREATER);break;case oS:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}bt=Ft}},setLocked:function(Ft){k=Ft},setClear:function(Ft){Lt!==Ft&&(o.clearDepth(Ft),Lt=Ft)},reset:function(){k=!1,dt=null,bt=null,Lt=null}}}function d(){let k=!1,dt=null,bt=null,Lt=null,Ft=null,Me=null,Se=null,sn=null,ci=null;return{setTest:function(Pe){k||(Pe?H(o.STENCIL_TEST):It(o.STENCIL_TEST))},setMask:function(Pe){dt!==Pe&&!k&&(o.stencilMask(Pe),dt=Pe)},setFunc:function(Pe,rn,Zn){(bt!==Pe||Lt!==rn||Ft!==Zn)&&(o.stencilFunc(Pe,rn,Zn),bt=Pe,Lt=rn,Ft=Zn)},setOp:function(Pe,rn,Zn){(Me!==Pe||Se!==rn||sn!==Zn)&&(o.stencilOp(Pe,rn,Zn),Me=Pe,Se=rn,sn=Zn)},setLocked:function(Pe){k=Pe},setClear:function(Pe){ci!==Pe&&(o.clearStencil(Pe),ci=Pe)},reset:function(){k=!1,dt=null,bt=null,Lt=null,Ft=null,Me=null,Se=null,sn=null,ci=null}}}const h=new l,g=new c,p=new d,v=new WeakMap,x=new WeakMap;let S={},y={},A=new WeakMap,T=[],M=null,m=!1,U=null,C=null,N=null,z=null,I=null,P=null,$=null,b=!1,O=null,ht=null,st=null,Y=null,at=null;const rt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,W=0;const K=o.getParameter(o.VERSION);K.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(K)[1]),F=W>=1):K.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),F=W>=2);let vt=null,et={};const D=o.getParameter(o.SCISSOR_BOX),X=o.getParameter(o.VIEWPORT),V=new un().fromArray(D),Z=new un().fromArray(X);function mt(k,dt,bt,Lt){const Ft=new Uint8Array(4),Me=o.createTexture();o.bindTexture(k,Me),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Se=0;Se<bt;Se++)r&&(k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY)?o.texImage3D(dt,0,o.RGBA,1,1,Lt,0,o.RGBA,o.UNSIGNED_BYTE,Ft):o.texImage2D(dt+Se,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ft);return Me}const yt={};yt[o.TEXTURE_2D]=mt(o.TEXTURE_2D,o.TEXTURE_2D,1),yt[o.TEXTURE_CUBE_MAP]=mt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(yt[o.TEXTURE_2D_ARRAY]=mt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),yt[o.TEXTURE_3D]=mt(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),h.setClear(0,0,0,1),g.setClear(1),p.setClear(0),H(o.DEPTH_TEST),g.setFunc(fh),Wt(!1),ve(yg),H(o.CULL_FACE),Ut(Ua);function H(k){S[k]!==!0&&(o.enable(k),S[k]=!0)}function It(k){S[k]!==!1&&(o.disable(k),S[k]=!1)}function Nt(k,dt){return y[k]!==dt?(o.bindFramebuffer(k,dt),y[k]=dt,r&&(k===o.DRAW_FRAMEBUFFER&&(y[o.FRAMEBUFFER]=dt),k===o.FRAMEBUFFER&&(y[o.DRAW_FRAMEBUFFER]=dt)),!0):!1}function Rt(k,dt){let bt=T,Lt=!1;if(k)if(bt=A.get(dt),bt===void 0&&(bt=[],A.set(dt,bt)),k.isWebGLMultipleRenderTargets){const Ft=k.texture;if(bt.length!==Ft.length||bt[0]!==o.COLOR_ATTACHMENT0){for(let Me=0,Se=Ft.length;Me<Se;Me++)bt[Me]=o.COLOR_ATTACHMENT0+Me;bt.length=Ft.length,Lt=!0}}else bt[0]!==o.COLOR_ATTACHMENT0&&(bt[0]=o.COLOR_ATTACHMENT0,Lt=!0);else bt[0]!==o.BACK&&(bt[0]=o.BACK,Lt=!0);Lt&&(i.isWebGL2?o.drawBuffers(bt):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(bt))}function ft(k){return M!==k?(o.useProgram(k),M=k,!0):!1}const Mt={[hr]:o.FUNC_ADD,[kx]:o.FUNC_SUBTRACT,[Wx]:o.FUNC_REVERSE_SUBTRACT};if(r)Mt[Ag]=o.MIN,Mt[Rg]=o.MAX;else{const k=e.get("EXT_blend_minmax");k!==null&&(Mt[Ag]=k.MIN_EXT,Mt[Rg]=k.MAX_EXT)}const Et={[qx]:o.ZERO,[jx]:o.ONE,[Yx]:o.SRC_COLOR,[Z_]:o.SRC_ALPHA,[tS]:o.SRC_ALPHA_SATURATE,[Jx]:o.DST_COLOR,[Kx]:o.DST_ALPHA,[Zx]:o.ONE_MINUS_SRC_COLOR,[K_]:o.ONE_MINUS_SRC_ALPHA,[$x]:o.ONE_MINUS_DST_COLOR,[Qx]:o.ONE_MINUS_DST_ALPHA};function Ut(k,dt,bt,Lt,Ft,Me,Se,sn){if(k===Ua){m===!0&&(It(o.BLEND),m=!1);return}if(m===!1&&(H(o.BLEND),m=!0),k!==Xx){if(k!==U||sn!==b){if((C!==hr||I!==hr)&&(o.blendEquation(o.FUNC_ADD),C=hr,I=hr),sn)switch(k){case mr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Eg:o.blendFunc(o.ONE,o.ONE);break;case bg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Tg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case mr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Eg:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case bg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Tg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}N=null,z=null,P=null,$=null,U=k,b=sn}return}Ft=Ft||dt,Me=Me||bt,Se=Se||Lt,(dt!==C||Ft!==I)&&(o.blendEquationSeparate(Mt[dt],Mt[Ft]),C=dt,I=Ft),(bt!==N||Lt!==z||Me!==P||Se!==$)&&(o.blendFuncSeparate(Et[bt],Et[Lt],Et[Me],Et[Se]),N=bt,z=Lt,P=Me,$=Se),U=k,b=!1}function $t(k,dt){k.side===wi?It(o.CULL_FACE):H(o.CULL_FACE);let bt=k.side===zn;dt&&(bt=!bt),Wt(bt),k.blending===mr&&k.transparent===!1?Ut(Ua):Ut(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.premultipliedAlpha),g.setFunc(k.depthFunc),g.setTest(k.depthTest),g.setMask(k.depthWrite),h.setMask(k.colorWrite);const Lt=k.stencilWrite;p.setTest(Lt),Lt&&(p.setMask(k.stencilWriteMask),p.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),p.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ot(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?H(o.SAMPLE_ALPHA_TO_COVERAGE):It(o.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(k){O!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),O=k)}function ve(k){k!==Ix?(H(o.CULL_FACE),k!==ht&&(k===yg?o.cullFace(o.BACK):k===Hx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):It(o.CULL_FACE),ht=k}function xe(k){k!==st&&(F&&o.lineWidth(k),st=k)}function Ot(k,dt,bt){k?(H(o.POLYGON_OFFSET_FILL),(Y!==dt||at!==bt)&&(o.polygonOffset(dt,bt),Y=dt,at=bt)):It(o.POLYGON_OFFSET_FILL)}function Jt(k){k?H(o.SCISSOR_TEST):It(o.SCISSOR_TEST)}function an(k){k===void 0&&(k=o.TEXTURE0+rt-1),vt!==k&&(o.activeTexture(k),vt=k)}function L(k,dt,bt){bt===void 0&&(vt===null?bt=o.TEXTURE0+rt-1:bt=vt);let Lt=et[bt];Lt===void 0&&(Lt={type:void 0,texture:void 0},et[bt]=Lt),(Lt.type!==k||Lt.texture!==dt)&&(vt!==bt&&(o.activeTexture(bt),vt=bt),o.bindTexture(k,dt||yt[k]),Lt.type=k,Lt.texture=dt)}function R(){const k=et[vt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function lt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Tt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function At(){try{o.texSubImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Dt(){try{o.texSubImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Yt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function gt(){try{o.texStorage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Vt(){try{o.texStorage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function qt(){try{o.texImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Xt(){try{o.texImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function wt(k){V.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),V.copy(k))}function Bt(k){Z.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),Z.copy(k))}function Kt(k,dt){let bt=x.get(dt);bt===void 0&&(bt=new WeakMap,x.set(dt,bt));let Lt=bt.get(k);Lt===void 0&&(Lt=o.getUniformBlockIndex(dt,k.name),bt.set(k,Lt))}function Te(k,dt){const Lt=x.get(dt).get(k);v.get(dt)!==Lt&&(o.uniformBlockBinding(dt,Lt,k.__bindingPointIndex),v.set(dt,Lt))}function He(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),r===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),S={},vt=null,et={},y={},A=new WeakMap,T=[],M=null,m=!1,U=null,C=null,N=null,z=null,I=null,P=null,$=null,b=!1,O=null,ht=null,st=null,Y=null,at=null,V.set(0,0,o.canvas.width,o.canvas.height),Z.set(0,0,o.canvas.width,o.canvas.height),h.reset(),g.reset(),p.reset()}return{buffers:{color:h,depth:g,stencil:p},enable:H,disable:It,bindFramebuffer:Nt,drawBuffers:Rt,useProgram:ft,setBlending:Ut,setMaterial:$t,setFlipSided:Wt,setCullFace:ve,setLineWidth:xe,setPolygonOffset:Ot,setScissorTest:Jt,activeTexture:an,bindTexture:L,unbindTexture:R,compressedTexImage2D:lt,compressedTexImage3D:Tt,texImage2D:qt,texImage3D:Xt,updateUBOMapping:Kt,uniformBlockBinding:Te,texStorage2D:gt,texStorage3D:Vt,texSubImage2D:At,texSubImage3D:Dt,compressedTexSubImage2D:Yt,compressedTexSubImage3D:Pt,scissor:wt,viewport:Bt,reset:He}}function CT(o,e,i,r,l,c,d){const h=l.isWebGL2,g=l.maxTextures,p=l.maxCubemapSize,v=l.maxTextureSize,x=l.maxSamples,S=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,y=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),A=new WeakMap;let T;const M=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function U(L,R){return m?new OffscreenCanvas(L,R):mu("canvas")}function C(L,R,lt,Tt){let At=1;if((L.width>Tt||L.height>Tt)&&(At=Tt/Math.max(L.width,L.height)),At<1||R===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const Dt=R?PS:Math.floor,Yt=Dt(At*L.width),Pt=Dt(At*L.height);T===void 0&&(T=U(Yt,Pt));const gt=lt?U(Yt,Pt):T;return gt.width=Yt,gt.height=Pt,gt.getContext("2d").drawImage(L,0,0,Yt,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Yt+"x"+Pt+")."),gt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function N(L){return t_(L.width)&&t_(L.height)}function z(L){return h?!1:L.wrapS!==xi||L.wrapT!==xi||L.minFilter!==bn&&L.minFilter!==li}function I(L,R){return L.generateMipmaps&&R&&L.minFilter!==bn&&L.minFilter!==li}function P(L){o.generateMipmap(L)}function $(L,R,lt,Tt,At=!1){if(h===!1)return R;if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Dt=R;return R===o.RED&&(lt===o.FLOAT&&(Dt=o.R32F),lt===o.HALF_FLOAT&&(Dt=o.R16F),lt===o.UNSIGNED_BYTE&&(Dt=o.R8)),R===o.RG&&(lt===o.FLOAT&&(Dt=o.RG32F),lt===o.HALF_FLOAT&&(Dt=o.RG16F),lt===o.UNSIGNED_BYTE&&(Dt=o.RG8)),R===o.RGBA&&(lt===o.FLOAT&&(Dt=o.RGBA32F),lt===o.HALF_FLOAT&&(Dt=o.RGBA16F),lt===o.UNSIGNED_BYTE&&(Dt=Tt===oe&&At===!1?o.SRGB8_ALPHA8:o.RGBA8),lt===o.UNSIGNED_SHORT_4_4_4_4&&(Dt=o.RGBA4),lt===o.UNSIGNED_SHORT_5_5_5_1&&(Dt=o.RGB5_A1)),(Dt===o.R16F||Dt===o.R32F||Dt===o.RG16F||Dt===o.RG32F||Dt===o.RGBA16F||Dt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),Dt}function b(L,R,lt){return I(L,lt)===!0||L.isFramebufferTexture&&L.minFilter!==bn&&L.minFilter!==li?Math.log2(Math.max(R.width,R.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?R.mipmaps.length:1}function O(L){return L===bn||L===wg||L===Of?o.NEAREST:o.LINEAR}function ht(L){const R=L.target;R.removeEventListener("dispose",ht),Y(R),R.isVideoTexture&&A.delete(R)}function st(L){const R=L.target;R.removeEventListener("dispose",st),rt(R)}function Y(L){const R=r.get(L);if(R.__webglInit===void 0)return;const lt=L.source,Tt=M.get(lt);if(Tt){const At=Tt[R.__cacheKey];At.usedTimes--,At.usedTimes===0&&at(L),Object.keys(Tt).length===0&&M.delete(lt)}r.remove(L)}function at(L){const R=r.get(L);o.deleteTexture(R.__webglTexture);const lt=L.source,Tt=M.get(lt);delete Tt[R.__cacheKey],d.memory.textures--}function rt(L){const R=L.texture,lt=r.get(L),Tt=r.get(R);if(Tt.__webglTexture!==void 0&&(o.deleteTexture(Tt.__webglTexture),d.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let At=0;At<6;At++)o.deleteFramebuffer(lt.__webglFramebuffer[At]),lt.__webglDepthbuffer&&o.deleteRenderbuffer(lt.__webglDepthbuffer[At]);else{if(o.deleteFramebuffer(lt.__webglFramebuffer),lt.__webglDepthbuffer&&o.deleteRenderbuffer(lt.__webglDepthbuffer),lt.__webglMultisampledFramebuffer&&o.deleteFramebuffer(lt.__webglMultisampledFramebuffer),lt.__webglColorRenderbuffer)for(let At=0;At<lt.__webglColorRenderbuffer.length;At++)lt.__webglColorRenderbuffer[At]&&o.deleteRenderbuffer(lt.__webglColorRenderbuffer[At]);lt.__webglDepthRenderbuffer&&o.deleteRenderbuffer(lt.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let At=0,Dt=R.length;At<Dt;At++){const Yt=r.get(R[At]);Yt.__webglTexture&&(o.deleteTexture(Yt.__webglTexture),d.memory.textures--),r.remove(R[At])}r.remove(R),r.remove(L)}let F=0;function W(){F=0}function K(){const L=F;return L>=g&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+g),F+=1,L}function vt(L){const R=[];return R.push(L.wrapS),R.push(L.wrapT),R.push(L.wrapR||0),R.push(L.magFilter),R.push(L.minFilter),R.push(L.anisotropy),R.push(L.internalFormat),R.push(L.format),R.push(L.type),R.push(L.generateMipmaps),R.push(L.premultiplyAlpha),R.push(L.flipY),R.push(L.unpackAlignment),R.push(L.colorSpace),R.join()}function et(L,R){const lt=r.get(L);if(L.isVideoTexture&&Jt(L),L.isRenderTargetTexture===!1&&L.version>0&&lt.__version!==L.version){const Tt=L.image;if(Tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{It(lt,L,R);return}}i.bindTexture(o.TEXTURE_2D,lt.__webglTexture,o.TEXTURE0+R)}function D(L,R){const lt=r.get(L);if(L.version>0&&lt.__version!==L.version){It(lt,L,R);return}i.bindTexture(o.TEXTURE_2D_ARRAY,lt.__webglTexture,o.TEXTURE0+R)}function X(L,R){const lt=r.get(L);if(L.version>0&&lt.__version!==L.version){It(lt,L,R);return}i.bindTexture(o.TEXTURE_3D,lt.__webglTexture,o.TEXTURE0+R)}function V(L,R){const lt=r.get(L);if(L.version>0&&lt.__version!==L.version){Nt(lt,L,R);return}i.bindTexture(o.TEXTURE_CUBE_MAP,lt.__webglTexture,o.TEXTURE0+R)}const Z={[ph]:o.REPEAT,[xi]:o.CLAMP_TO_EDGE,[mh]:o.MIRRORED_REPEAT},mt={[bn]:o.NEAREST,[wg]:o.NEAREST_MIPMAP_NEAREST,[Of]:o.NEAREST_MIPMAP_LINEAR,[li]:o.LINEAR,[mS]:o.LINEAR_MIPMAP_NEAREST,[To]:o.LINEAR_MIPMAP_LINEAR};function yt(L,R,lt){if(lt?(o.texParameteri(L,o.TEXTURE_WRAP_S,Z[R.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,Z[R.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,Z[R.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,mt[R.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,mt[R.minFilter])):(o.texParameteri(L,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(L,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(R.wrapS!==xi||R.wrapT!==xi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(L,o.TEXTURE_MAG_FILTER,O(R.magFilter)),o.texParameteri(L,o.TEXTURE_MIN_FILTER,O(R.minFilter)),R.minFilter!==bn&&R.minFilter!==li&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Tt=e.get("EXT_texture_filter_anisotropic");if(R.magFilter===bn||R.minFilter!==Of&&R.minFilter!==To||R.type===ss&&e.has("OES_texture_float_linear")===!1||h===!1&&R.type===Ao&&e.has("OES_texture_half_float_linear")===!1)return;(R.anisotropy>1||r.get(R).__currentAnisotropy)&&(o.texParameterf(L,Tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,l.getMaxAnisotropy())),r.get(R).__currentAnisotropy=R.anisotropy)}}function H(L,R){let lt=!1;L.__webglInit===void 0&&(L.__webglInit=!0,R.addEventListener("dispose",ht));const Tt=R.source;let At=M.get(Tt);At===void 0&&(At={},M.set(Tt,At));const Dt=vt(R);if(Dt!==L.__cacheKey){At[Dt]===void 0&&(At[Dt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,lt=!0),At[Dt].usedTimes++;const Yt=At[L.__cacheKey];Yt!==void 0&&(At[L.__cacheKey].usedTimes--,Yt.usedTimes===0&&at(R)),L.__cacheKey=Dt,L.__webglTexture=At[Dt].texture}return lt}function It(L,R,lt){let Tt=o.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(Tt=o.TEXTURE_2D_ARRAY),R.isData3DTexture&&(Tt=o.TEXTURE_3D);const At=H(L,R),Dt=R.source;i.bindTexture(Tt,L.__webglTexture,o.TEXTURE0+lt);const Yt=r.get(Dt);if(Dt.version!==Yt.__version||At===!0){i.activeTexture(o.TEXTURE0+lt),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.NONE);const Pt=z(R)&&N(R.image)===!1;let gt=C(R.image,Pt,!1,v);gt=an(R,gt);const Vt=N(gt)||h,qt=c.convert(R.format,R.colorSpace);let Xt=c.convert(R.type),wt=$(R.internalFormat,qt,Xt,R.colorSpace);yt(Tt,R,Vt);let Bt;const Kt=R.mipmaps,Te=h&&R.isVideoTexture!==!0,He=Yt.__version===void 0||At===!0,k=b(R,gt,Vt);if(R.isDepthTexture)wt=o.DEPTH_COMPONENT,h?R.type===ss?wt=o.DEPTH_COMPONENT32F:R.type===as?wt=o.DEPTH_COMPONENT24:R.type===gr?wt=o.DEPTH24_STENCIL8:wt=o.DEPTH_COMPONENT16:R.type===ss&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),R.format===rs&&wt===o.DEPTH_COMPONENT&&R.type!==J_&&R.type!==as&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),R.type=as,Xt=c.convert(R.type)),R.format===Sr&&wt===o.DEPTH_COMPONENT&&(wt=o.DEPTH_STENCIL,R.type!==gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),R.type=gr,Xt=c.convert(R.type))),He&&(Te?i.texStorage2D(o.TEXTURE_2D,1,wt,gt.width,gt.height):i.texImage2D(o.TEXTURE_2D,0,wt,gt.width,gt.height,0,qt,Xt,null));else if(R.isDataTexture)if(Kt.length>0&&Vt){Te&&He&&i.texStorage2D(o.TEXTURE_2D,k,wt,Kt[0].width,Kt[0].height);for(let dt=0,bt=Kt.length;dt<bt;dt++)Bt=Kt[dt],Te?i.texSubImage2D(o.TEXTURE_2D,dt,0,0,Bt.width,Bt.height,qt,Xt,Bt.data):i.texImage2D(o.TEXTURE_2D,dt,wt,Bt.width,Bt.height,0,qt,Xt,Bt.data);R.generateMipmaps=!1}else Te?(He&&i.texStorage2D(o.TEXTURE_2D,k,wt,gt.width,gt.height),i.texSubImage2D(o.TEXTURE_2D,0,0,0,gt.width,gt.height,qt,Xt,gt.data)):i.texImage2D(o.TEXTURE_2D,0,wt,gt.width,gt.height,0,qt,Xt,gt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Te&&He&&i.texStorage3D(o.TEXTURE_2D_ARRAY,k,wt,Kt[0].width,Kt[0].height,gt.depth);for(let dt=0,bt=Kt.length;dt<bt;dt++)Bt=Kt[dt],R.format!==Si?qt!==null?Te?i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,dt,0,0,0,Bt.width,Bt.height,gt.depth,qt,Bt.data,0,0):i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,dt,wt,Bt.width,Bt.height,gt.depth,0,Bt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?i.texSubImage3D(o.TEXTURE_2D_ARRAY,dt,0,0,0,Bt.width,Bt.height,gt.depth,qt,Xt,Bt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,dt,wt,Bt.width,Bt.height,gt.depth,0,qt,Xt,Bt.data)}else{Te&&He&&i.texStorage2D(o.TEXTURE_2D,k,wt,Kt[0].width,Kt[0].height);for(let dt=0,bt=Kt.length;dt<bt;dt++)Bt=Kt[dt],R.format!==Si?qt!==null?Te?i.compressedTexSubImage2D(o.TEXTURE_2D,dt,0,0,Bt.width,Bt.height,qt,Bt.data):i.compressedTexImage2D(o.TEXTURE_2D,dt,wt,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?i.texSubImage2D(o.TEXTURE_2D,dt,0,0,Bt.width,Bt.height,qt,Xt,Bt.data):i.texImage2D(o.TEXTURE_2D,dt,wt,Bt.width,Bt.height,0,qt,Xt,Bt.data)}else if(R.isDataArrayTexture)Te?(He&&i.texStorage3D(o.TEXTURE_2D_ARRAY,k,wt,gt.width,gt.height,gt.depth),i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,qt,Xt,gt.data)):i.texImage3D(o.TEXTURE_2D_ARRAY,0,wt,gt.width,gt.height,gt.depth,0,qt,Xt,gt.data);else if(R.isData3DTexture)Te?(He&&i.texStorage3D(o.TEXTURE_3D,k,wt,gt.width,gt.height,gt.depth),i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,qt,Xt,gt.data)):i.texImage3D(o.TEXTURE_3D,0,wt,gt.width,gt.height,gt.depth,0,qt,Xt,gt.data);else if(R.isFramebufferTexture){if(He)if(Te)i.texStorage2D(o.TEXTURE_2D,k,wt,gt.width,gt.height);else{let dt=gt.width,bt=gt.height;for(let Lt=0;Lt<k;Lt++)i.texImage2D(o.TEXTURE_2D,Lt,wt,dt,bt,0,qt,Xt,null),dt>>=1,bt>>=1}}else if(Kt.length>0&&Vt){Te&&He&&i.texStorage2D(o.TEXTURE_2D,k,wt,Kt[0].width,Kt[0].height);for(let dt=0,bt=Kt.length;dt<bt;dt++)Bt=Kt[dt],Te?i.texSubImage2D(o.TEXTURE_2D,dt,0,0,qt,Xt,Bt):i.texImage2D(o.TEXTURE_2D,dt,wt,qt,Xt,Bt);R.generateMipmaps=!1}else Te?(He&&i.texStorage2D(o.TEXTURE_2D,k,wt,gt.width,gt.height),i.texSubImage2D(o.TEXTURE_2D,0,0,0,qt,Xt,gt)):i.texImage2D(o.TEXTURE_2D,0,wt,qt,Xt,gt);I(R,Vt)&&P(Tt),Yt.__version=Dt.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function Nt(L,R,lt){if(R.image.length!==6)return;const Tt=H(L,R),At=R.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+lt);const Dt=r.get(At);if(At.version!==Dt.__version||Tt===!0){i.activeTexture(o.TEXTURE0+lt),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.NONE);const Yt=R.isCompressedTexture||R.image[0].isCompressedTexture,Pt=R.image[0]&&R.image[0].isDataTexture,gt=[];for(let dt=0;dt<6;dt++)!Yt&&!Pt?gt[dt]=C(R.image[dt],!1,!0,p):gt[dt]=Pt?R.image[dt].image:R.image[dt],gt[dt]=an(R,gt[dt]);const Vt=gt[0],qt=N(Vt)||h,Xt=c.convert(R.format,R.colorSpace),wt=c.convert(R.type),Bt=$(R.internalFormat,Xt,wt,R.colorSpace),Kt=h&&R.isVideoTexture!==!0,Te=Dt.__version===void 0||Tt===!0;let He=b(R,Vt,qt);yt(o.TEXTURE_CUBE_MAP,R,qt);let k;if(Yt){Kt&&Te&&i.texStorage2D(o.TEXTURE_CUBE_MAP,He,Bt,Vt.width,Vt.height);for(let dt=0;dt<6;dt++){k=gt[dt].mipmaps;for(let bt=0;bt<k.length;bt++){const Lt=k[bt];R.format!==Si?Xt!==null?Kt?i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt,0,0,Lt.width,Lt.height,Xt,Lt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt,Bt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt,0,0,Lt.width,Lt.height,Xt,wt,Lt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt,Bt,Lt.width,Lt.height,0,Xt,wt,Lt.data)}}}else{k=R.mipmaps,Kt&&Te&&(k.length>0&&He++,i.texStorage2D(o.TEXTURE_CUBE_MAP,He,Bt,gt[0].width,gt[0].height));for(let dt=0;dt<6;dt++)if(Pt){Kt?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,gt[dt].width,gt[dt].height,Xt,wt,gt[dt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Bt,gt[dt].width,gt[dt].height,0,Xt,wt,gt[dt].data);for(let bt=0;bt<k.length;bt++){const Ft=k[bt].image[dt].image;Kt?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt+1,0,0,Ft.width,Ft.height,Xt,wt,Ft.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt+1,Bt,Ft.width,Ft.height,0,Xt,wt,Ft.data)}}else{Kt?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Xt,wt,gt[dt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Bt,Xt,wt,gt[dt]);for(let bt=0;bt<k.length;bt++){const Lt=k[bt];Kt?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt+1,0,0,Xt,wt,Lt.image[dt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt+1,Bt,Xt,wt,Lt.image[dt])}}}I(R,qt)&&P(o.TEXTURE_CUBE_MAP),Dt.__version=At.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function Rt(L,R,lt,Tt,At){const Dt=c.convert(lt.format,lt.colorSpace),Yt=c.convert(lt.type),Pt=$(lt.internalFormat,Dt,Yt,lt.colorSpace);r.get(R).__hasExternalTextures||(At===o.TEXTURE_3D||At===o.TEXTURE_2D_ARRAY?i.texImage3D(At,0,Pt,R.width,R.height,R.depth,0,Dt,Yt,null):i.texImage2D(At,0,Pt,R.width,R.height,0,Dt,Yt,null)),i.bindFramebuffer(o.FRAMEBUFFER,L),Ot(R)?S.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Tt,At,r.get(lt).__webglTexture,0,xe(R)):(At===o.TEXTURE_2D||At>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&At<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Tt,At,r.get(lt).__webglTexture,0),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ft(L,R,lt){if(o.bindRenderbuffer(o.RENDERBUFFER,L),R.depthBuffer&&!R.stencilBuffer){let Tt=o.DEPTH_COMPONENT16;if(lt||Ot(R)){const At=R.depthTexture;At&&At.isDepthTexture&&(At.type===ss?Tt=o.DEPTH_COMPONENT32F:At.type===as&&(Tt=o.DEPTH_COMPONENT24));const Dt=xe(R);Ot(R)?S.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Dt,Tt,R.width,R.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,Dt,Tt,R.width,R.height)}else o.renderbufferStorage(o.RENDERBUFFER,Tt,R.width,R.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,L)}else if(R.depthBuffer&&R.stencilBuffer){const Tt=xe(R);lt&&Ot(R)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Tt,o.DEPTH24_STENCIL8,R.width,R.height):Ot(R)?S.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Tt,o.DEPTH24_STENCIL8,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,R.width,R.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,L)}else{const Tt=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let At=0;At<Tt.length;At++){const Dt=Tt[At],Yt=c.convert(Dt.format,Dt.colorSpace),Pt=c.convert(Dt.type),gt=$(Dt.internalFormat,Yt,Pt,Dt.colorSpace),Vt=xe(R);lt&&Ot(R)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Vt,gt,R.width,R.height):Ot(R)?S.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Vt,gt,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,gt,R.width,R.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Mt(L,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),et(R.depthTexture,0);const Tt=r.get(R.depthTexture).__webglTexture,At=xe(R);if(R.depthTexture.format===rs)Ot(R)?S.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Tt,0,At):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Tt,0);else if(R.depthTexture.format===Sr)Ot(R)?S.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Tt,0,At):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Tt,0);else throw new Error("Unknown depthTexture format")}function Et(L){const R=r.get(L),lt=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!R.__autoAllocateDepthBuffer){if(lt)throw new Error("target.depthTexture not supported in Cube render targets");Mt(R.__webglFramebuffer,L)}else if(lt){R.__webglDepthbuffer=[];for(let Tt=0;Tt<6;Tt++)i.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[Tt]),R.__webglDepthbuffer[Tt]=o.createRenderbuffer(),ft(R.__webglDepthbuffer[Tt],L,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=o.createRenderbuffer(),ft(R.__webglDepthbuffer,L,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ut(L,R,lt){const Tt=r.get(L);R!==void 0&&Rt(Tt.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D),lt!==void 0&&Et(L)}function $t(L){const R=L.texture,lt=r.get(L),Tt=r.get(R);L.addEventListener("dispose",st),L.isWebGLMultipleRenderTargets!==!0&&(Tt.__webglTexture===void 0&&(Tt.__webglTexture=o.createTexture()),Tt.__version=R.version,d.memory.textures++);const At=L.isWebGLCubeRenderTarget===!0,Dt=L.isWebGLMultipleRenderTargets===!0,Yt=N(L)||h;if(At){lt.__webglFramebuffer=[];for(let Pt=0;Pt<6;Pt++)lt.__webglFramebuffer[Pt]=o.createFramebuffer()}else{if(lt.__webglFramebuffer=o.createFramebuffer(),Dt)if(l.drawBuffers){const Pt=L.texture;for(let gt=0,Vt=Pt.length;gt<Vt;gt++){const qt=r.get(Pt[gt]);qt.__webglTexture===void 0&&(qt.__webglTexture=o.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(h&&L.samples>0&&Ot(L)===!1){const Pt=Dt?R:[R];lt.__webglMultisampledFramebuffer=o.createFramebuffer(),lt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,lt.__webglMultisampledFramebuffer);for(let gt=0;gt<Pt.length;gt++){const Vt=Pt[gt];lt.__webglColorRenderbuffer[gt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,lt.__webglColorRenderbuffer[gt]);const qt=c.convert(Vt.format,Vt.colorSpace),Xt=c.convert(Vt.type),wt=$(Vt.internalFormat,qt,Xt,Vt.colorSpace,L.isXRRenderTarget===!0),Bt=xe(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Bt,wt,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+gt,o.RENDERBUFFER,lt.__webglColorRenderbuffer[gt])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(lt.__webglDepthRenderbuffer=o.createRenderbuffer(),ft(lt.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(At){i.bindTexture(o.TEXTURE_CUBE_MAP,Tt.__webglTexture),yt(o.TEXTURE_CUBE_MAP,R,Yt);for(let Pt=0;Pt<6;Pt++)Rt(lt.__webglFramebuffer[Pt],L,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Pt);I(R,Yt)&&P(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Dt){const Pt=L.texture;for(let gt=0,Vt=Pt.length;gt<Vt;gt++){const qt=Pt[gt],Xt=r.get(qt);i.bindTexture(o.TEXTURE_2D,Xt.__webglTexture),yt(o.TEXTURE_2D,qt,Yt),Rt(lt.__webglFramebuffer,L,qt,o.COLOR_ATTACHMENT0+gt,o.TEXTURE_2D),I(qt,Yt)&&P(o.TEXTURE_2D)}i.unbindTexture()}else{let Pt=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(h?Pt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(Pt,Tt.__webglTexture),yt(Pt,R,Yt),Rt(lt.__webglFramebuffer,L,R,o.COLOR_ATTACHMENT0,Pt),I(R,Yt)&&P(Pt),i.unbindTexture()}L.depthBuffer&&Et(L)}function Wt(L){const R=N(L)||h,lt=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let Tt=0,At=lt.length;Tt<At;Tt++){const Dt=lt[Tt];if(I(Dt,R)){const Yt=L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,Pt=r.get(Dt).__webglTexture;i.bindTexture(Yt,Pt),P(Yt),i.unbindTexture()}}}function ve(L){if(h&&L.samples>0&&Ot(L)===!1){const R=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],lt=L.width,Tt=L.height;let At=o.COLOR_BUFFER_BIT;const Dt=[],Yt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pt=r.get(L),gt=L.isWebGLMultipleRenderTargets===!0;if(gt)for(let Vt=0;Vt<R.length;Vt++)i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Vt=0;Vt<R.length;Vt++){Dt.push(o.COLOR_ATTACHMENT0+Vt),L.depthBuffer&&Dt.push(Yt);const qt=Pt.__ignoreDepthValues!==void 0?Pt.__ignoreDepthValues:!1;if(qt===!1&&(L.depthBuffer&&(At|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&(At|=o.STENCIL_BUFFER_BIT)),gt&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[Vt]),qt===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[Yt]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[Yt])),gt){const Xt=r.get(R[Vt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Xt,0)}o.blitFramebuffer(0,0,lt,Tt,0,0,lt,Tt,At,o.NEAREST),y&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Dt)}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),gt)for(let Vt=0;Vt<R.length;Vt++){i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[Vt]);const qt=r.get(R[Vt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.TEXTURE_2D,qt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}}function xe(L){return Math.min(x,L.samples)}function Ot(L){const R=r.get(L);return h&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Jt(L){const R=d.render.frame;A.get(L)!==R&&(A.set(L,R),L.update())}function an(L,R){const lt=L.colorSpace,Tt=L.format,At=L.type;return L.isCompressedTexture===!0||L.format===gh||lt!==Ci&&lt!==ls&&(lt===oe?h===!1?e.has("EXT_sRGB")===!0&&Tt===Si?(L.format=gh,L.minFilter=li,L.generateMipmaps=!1):R=i0.sRGBToLinear(R):(Tt!==Si||At!==us)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",lt)),R}this.allocateTextureUnit=K,this.resetTextureUnits=W,this.setTexture2D=et,this.setTexture2DArray=D,this.setTexture3D=X,this.setTextureCube=V,this.rebindTextures=Ut,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=Ot}function DT(o,e,i){const r=i.isWebGL2;function l(c,d=ls){let h;if(c===us)return o.UNSIGNED_BYTE;if(c===xS)return o.UNSIGNED_SHORT_4_4_4_4;if(c===SS)return o.UNSIGNED_SHORT_5_5_5_1;if(c===gS)return o.BYTE;if(c===_S)return o.SHORT;if(c===J_)return o.UNSIGNED_SHORT;if(c===vS)return o.INT;if(c===as)return o.UNSIGNED_INT;if(c===ss)return o.FLOAT;if(c===Ao)return r?o.HALF_FLOAT:(h=e.get("OES_texture_half_float"),h!==null?h.HALF_FLOAT_OES:null);if(c===MS)return o.ALPHA;if(c===Si)return o.RGBA;if(c===yS)return o.LUMINANCE;if(c===ES)return o.LUMINANCE_ALPHA;if(c===rs)return o.DEPTH_COMPONENT;if(c===Sr)return o.DEPTH_STENCIL;if(c===gh)return h=e.get("EXT_sRGB"),h!==null?h.SRGB_ALPHA_EXT:null;if(c===bS)return o.RED;if(c===TS)return o.RED_INTEGER;if(c===AS)return o.RG;if(c===RS)return o.RG_INTEGER;if(c===wS)return o.RGBA_INTEGER;if(c===zf||c===Pf||c===Bf||c===Ff)if(d===oe)if(h=e.get("WEBGL_compressed_texture_s3tc_srgb"),h!==null){if(c===zf)return h.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(c===Pf)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(c===Bf)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(c===Ff)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(h=e.get("WEBGL_compressed_texture_s3tc"),h!==null){if(c===zf)return h.COMPRESSED_RGB_S3TC_DXT1_EXT;if(c===Pf)return h.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(c===Bf)return h.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(c===Ff)return h.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(c===Cg||c===Dg||c===Lg||c===Ug)if(h=e.get("WEBGL_compressed_texture_pvrtc"),h!==null){if(c===Cg)return h.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(c===Dg)return h.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(c===Lg)return h.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(c===Ug)return h.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(c===CS)return h=e.get("WEBGL_compressed_texture_etc1"),h!==null?h.COMPRESSED_RGB_ETC1_WEBGL:null;if(c===Ng||c===Og)if(h=e.get("WEBGL_compressed_texture_etc"),h!==null){if(c===Ng)return d===oe?h.COMPRESSED_SRGB8_ETC2:h.COMPRESSED_RGB8_ETC2;if(c===Og)return d===oe?h.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:h.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(c===zg||c===Pg||c===Bg||c===Fg||c===Ig||c===Hg||c===Gg||c===Vg||c===Xg||c===kg||c===Wg||c===qg||c===jg||c===Yg)if(h=e.get("WEBGL_compressed_texture_astc"),h!==null){if(c===zg)return d===oe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:h.COMPRESSED_RGBA_ASTC_4x4_KHR;if(c===Pg)return d===oe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:h.COMPRESSED_RGBA_ASTC_5x4_KHR;if(c===Bg)return d===oe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:h.COMPRESSED_RGBA_ASTC_5x5_KHR;if(c===Fg)return d===oe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:h.COMPRESSED_RGBA_ASTC_6x5_KHR;if(c===Ig)return d===oe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:h.COMPRESSED_RGBA_ASTC_6x6_KHR;if(c===Hg)return d===oe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:h.COMPRESSED_RGBA_ASTC_8x5_KHR;if(c===Gg)return d===oe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:h.COMPRESSED_RGBA_ASTC_8x6_KHR;if(c===Vg)return d===oe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:h.COMPRESSED_RGBA_ASTC_8x8_KHR;if(c===Xg)return d===oe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:h.COMPRESSED_RGBA_ASTC_10x5_KHR;if(c===kg)return d===oe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:h.COMPRESSED_RGBA_ASTC_10x6_KHR;if(c===Wg)return d===oe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:h.COMPRESSED_RGBA_ASTC_10x8_KHR;if(c===qg)return d===oe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:h.COMPRESSED_RGBA_ASTC_10x10_KHR;if(c===jg)return d===oe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:h.COMPRESSED_RGBA_ASTC_12x10_KHR;if(c===Yg)return d===oe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:h.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(c===If)if(h=e.get("EXT_texture_compression_bptc"),h!==null){if(c===If)return d===oe?h.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:h.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(c===DS||c===Zg||c===Kg||c===Qg)if(h=e.get("EXT_texture_compression_rgtc"),h!==null){if(c===If)return h.COMPRESSED_RED_RGTC1_EXT;if(c===Zg)return h.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(c===Kg)return h.COMPRESSED_RED_GREEN_RGTC2_EXT;if(c===Qg)return h.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return c===gr?r?o.UNSIGNED_INT_24_8:(h=e.get("WEBGL_depth_texture"),h!==null?h.UNSIGNED_INT_24_8_WEBGL:null):o[c]!==void 0?o[c]:null}return{convert:l}}class LT extends ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class pr extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const UT={type:"move"};class uh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,d=null;const h=this._targetRay,g=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const T of e.hand.values()){const M=i.getJointPose(T,r),m=this._getHandJoint(p,T);M!==null&&(m.matrix.fromArray(M.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=M.radius),m.visible=M!==null}const v=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],S=v.position.distanceTo(x.position),y=.02,A=.005;p.inputState.pinching&&S>y+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=y-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else g!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(g.matrix.fromArray(c.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,c.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(c.linearVelocity)):g.hasLinearVelocity=!1,c.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(c.angularVelocity)):g.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(UT)))}return h!==null&&(h.visible=l!==null),g!==null&&(g.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new pr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class NT extends jn{constructor(e,i,r,l,c,d,h,g,p,v){if(v=v!==void 0?v:rs,v!==rs&&v!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===rs&&(r=as),r===void 0&&v===Sr&&(r=gr),super(null,l,c,d,h,g,v,r,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=h!==void 0?h:bn,this.minFilter=g!==void 0?g:bn,this.flipY=!1,this.generateMipmaps=!1}}class OT extends yr{constructor(e,i){super();const r=this;let l=null,c=1,d=null,h="local-floor",g=1,p=null,v=null,x=null,S=null,y=null,A=null;const T=i.getContextAttributes();let M=null,m=null;const U=[],C=[],N=new Set,z=new Map,I=new ui;I.layers.enable(1),I.viewport=new un;const P=new ui;P.layers.enable(2),P.viewport=new un;const $=[I,P],b=new LT;b.layers.enable(1),b.layers.enable(2);let O=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Z=U[V];return Z===void 0&&(Z=new uh,U[V]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(V){let Z=U[V];return Z===void 0&&(Z=new uh,U[V]=Z),Z.getGripSpace()},this.getHand=function(V){let Z=U[V];return Z===void 0&&(Z=new uh,U[V]=Z),Z.getHandSpace()};function st(V){const Z=C.indexOf(V.inputSource);if(Z===-1)return;const mt=U[Z];mt!==void 0&&(mt.update(V.inputSource,V.frame,p||d),mt.dispatchEvent({type:V.type,data:V.inputSource}))}function Y(){l.removeEventListener("select",st),l.removeEventListener("selectstart",st),l.removeEventListener("selectend",st),l.removeEventListener("squeeze",st),l.removeEventListener("squeezestart",st),l.removeEventListener("squeezeend",st),l.removeEventListener("end",Y),l.removeEventListener("inputsourceschange",at);for(let V=0;V<U.length;V++){const Z=C[V];Z!==null&&(C[V]=null,U[V].disconnect(Z))}O=null,ht=null,e.setRenderTarget(M),y=null,S=null,x=null,l=null,m=null,X.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){c=V,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){h=V,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(V){p=V},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return x},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(V){if(l=V,l!==null){if(M=e.getRenderTarget(),l.addEventListener("select",st),l.addEventListener("selectstart",st),l.addEventListener("selectend",st),l.addEventListener("squeeze",st),l.addEventListener("squeezestart",st),l.addEventListener("squeezeend",st),l.addEventListener("end",Y),l.addEventListener("inputsourceschange",at),T.xrCompatible!==!0&&await i.makeXRCompatible(),l.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:l.renderState.layers===void 0?T.antialias:!0,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Z),l.updateRenderState({baseLayer:y}),m=new cs(y.framebufferWidth,y.framebufferHeight,{format:Si,type:us,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil})}else{let Z=null,mt=null,yt=null;T.depth&&(yt=T.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Z=T.stencil?Sr:rs,mt=T.stencil?gr:as);const H={colorFormat:i.RGBA8,depthFormat:yt,scaleFactor:c};x=new XRWebGLBinding(l,i),S=x.createProjectionLayer(H),l.updateRenderState({layers:[S]}),m=new cs(S.textureWidth,S.textureHeight,{format:Si,type:us,depthTexture:new NT(S.textureWidth,S.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0});const It=e.properties.get(m);It.__ignoreDepthValues=S.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(g),p=null,d=await l.requestReferenceSpace(h),X.setContext(l),X.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function at(V){for(let Z=0;Z<V.removed.length;Z++){const mt=V.removed[Z],yt=C.indexOf(mt);yt>=0&&(C[yt]=null,U[yt].disconnect(mt))}for(let Z=0;Z<V.added.length;Z++){const mt=V.added[Z];let yt=C.indexOf(mt);if(yt===-1){for(let It=0;It<U.length;It++)if(It>=C.length){C.push(mt),yt=It;break}else if(C[It]===null){C[It]=mt,yt=It;break}if(yt===-1)break}const H=U[yt];H&&H.connect(mt)}}const rt=new it,F=new it;function W(V,Z,mt){rt.setFromMatrixPosition(Z.matrixWorld),F.setFromMatrixPosition(mt.matrixWorld);const yt=rt.distanceTo(F),H=Z.projectionMatrix.elements,It=mt.projectionMatrix.elements,Nt=H[14]/(H[10]-1),Rt=H[14]/(H[10]+1),ft=(H[9]+1)/H[5],Mt=(H[9]-1)/H[5],Et=(H[8]-1)/H[0],Ut=(It[8]+1)/It[0],$t=Nt*Et,Wt=Nt*Ut,ve=yt/(-Et+Ut),xe=ve*-Et;Z.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(xe),V.translateZ(ve),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const Ot=Nt+ve,Jt=Rt+ve,an=$t-xe,L=Wt+(yt-xe),R=ft*Rt/Jt*Ot,lt=Mt*Rt/Jt*Ot;V.projectionMatrix.makePerspective(an,L,R,lt,Ot,Jt),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function K(V,Z){Z===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Z.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(l===null)return;b.near=P.near=I.near=V.near,b.far=P.far=I.far=V.far,(O!==b.near||ht!==b.far)&&(l.updateRenderState({depthNear:b.near,depthFar:b.far}),O=b.near,ht=b.far);const Z=V.parent,mt=b.cameras;K(b,Z);for(let yt=0;yt<mt.length;yt++)K(mt[yt],Z);mt.length===2?W(b,I,P):b.projectionMatrix.copy(I.projectionMatrix),vt(V,b,Z)};function vt(V,Z,mt){mt===null?V.matrix.copy(Z.matrixWorld):(V.matrix.copy(mt.matrixWorld),V.matrix.invert(),V.matrix.multiply(Z.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0);const yt=V.children;for(let H=0,It=yt.length;H<It;H++)yt[H].updateMatrixWorld(!0);V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=_h*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(S===null&&y===null))return g},this.setFoveation=function(V){g=V,S!==null&&(S.fixedFoveation=V),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=V)},this.getPlanes=function(){return N};let et=null;function D(V,Z){if(v=Z.getViewerPose(p||d),A=Z,v!==null){const mt=v.views;y!==null&&(e.setRenderTargetFramebuffer(m,y.framebuffer),e.setRenderTarget(m));let yt=!1;mt.length!==b.cameras.length&&(b.cameras.length=0,yt=!0);for(let H=0;H<mt.length;H++){const It=mt[H];let Nt=null;if(y!==null)Nt=y.getViewport(It);else{const ft=x.getViewSubImage(S,It);Nt=ft.viewport,H===0&&(e.setRenderTargetTextures(m,ft.colorTexture,S.ignoreDepthValues?void 0:ft.depthStencilTexture),e.setRenderTarget(m))}let Rt=$[H];Rt===void 0&&(Rt=new ui,Rt.layers.enable(H),Rt.viewport=new un,$[H]=Rt),Rt.matrix.fromArray(It.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(It.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),H===0&&(b.matrix.copy(Rt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),yt===!0&&b.cameras.push(Rt)}}for(let mt=0;mt<U.length;mt++){const yt=C[mt],H=U[mt];yt!==null&&H!==void 0&&H.update(yt,Z,p||d)}if(et&&et(V,Z),Z.detectedPlanes){r.dispatchEvent({type:"planesdetected",data:Z.detectedPlanes});let mt=null;for(const yt of N)Z.detectedPlanes.has(yt)||(mt===null&&(mt=[]),mt.push(yt));if(mt!==null)for(const yt of mt)N.delete(yt),z.delete(yt),r.dispatchEvent({type:"planeremoved",data:yt});for(const yt of Z.detectedPlanes)if(!N.has(yt))N.add(yt),z.set(yt,Z.lastChangedTime),r.dispatchEvent({type:"planeadded",data:yt});else{const H=z.get(yt);yt.lastChangedTime>H&&(z.set(yt,yt.lastChangedTime),r.dispatchEvent({type:"planechanged",data:yt}))}}A=null}const X=new d0;X.setAnimationLoop(D),this.setAnimationLoop=function(V){et=V},this.dispose=function(){}}}function zT(o,e){function i(M,m){M.matrixAutoUpdate===!0&&M.updateMatrix(),m.value.copy(M.matrix)}function r(M,m){m.color.getRGB(M.fogColor.value,c0(o)),m.isFog?(M.fogNear.value=m.near,M.fogFar.value=m.far):m.isFogExp2&&(M.fogDensity.value=m.density)}function l(M,m,U,C,N){m.isMeshBasicMaterial||m.isMeshLambertMaterial?c(M,m):m.isMeshToonMaterial?(c(M,m),x(M,m)):m.isMeshPhongMaterial?(c(M,m),v(M,m)):m.isMeshStandardMaterial?(c(M,m),S(M,m),m.isMeshPhysicalMaterial&&y(M,m,N)):m.isMeshMatcapMaterial?(c(M,m),A(M,m)):m.isMeshDepthMaterial?c(M,m):m.isMeshDistanceMaterial?(c(M,m),T(M,m)):m.isMeshNormalMaterial?c(M,m):m.isLineBasicMaterial?(d(M,m),m.isLineDashedMaterial&&h(M,m)):m.isPointsMaterial?g(M,m,U,C):m.isSpriteMaterial?p(M,m):m.isShadowMaterial?(M.color.value.copy(m.color),M.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function c(M,m){M.opacity.value=m.opacity,m.color&&M.diffuse.value.copy(m.color),m.emissive&&M.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(M.map.value=m.map,i(m.map,M.mapTransform)),m.alphaMap&&(M.alphaMap.value=m.alphaMap,i(m.alphaMap,M.alphaMapTransform)),m.bumpMap&&(M.bumpMap.value=m.bumpMap,i(m.bumpMap,M.bumpMapTransform),M.bumpScale.value=m.bumpScale,m.side===zn&&(M.bumpScale.value*=-1)),m.normalMap&&(M.normalMap.value=m.normalMap,i(m.normalMap,M.normalMapTransform),M.normalScale.value.copy(m.normalScale),m.side===zn&&M.normalScale.value.negate()),m.displacementMap&&(M.displacementMap.value=m.displacementMap,i(m.displacementMap,M.displacementMapTransform),M.displacementScale.value=m.displacementScale,M.displacementBias.value=m.displacementBias),m.emissiveMap&&(M.emissiveMap.value=m.emissiveMap,i(m.emissiveMap,M.emissiveMapTransform)),m.specularMap&&(M.specularMap.value=m.specularMap,i(m.specularMap,M.specularMapTransform)),m.alphaTest>0&&(M.alphaTest.value=m.alphaTest);const U=e.get(m).envMap;if(U&&(M.envMap.value=U,M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=m.reflectivity,M.ior.value=m.ior,M.refractionRatio.value=m.refractionRatio),m.lightMap){M.lightMap.value=m.lightMap;const C=o.useLegacyLights===!0?Math.PI:1;M.lightMapIntensity.value=m.lightMapIntensity*C,i(m.lightMap,M.lightMapTransform)}m.aoMap&&(M.aoMap.value=m.aoMap,M.aoMapIntensity.value=m.aoMapIntensity,i(m.aoMap,M.aoMapTransform))}function d(M,m){M.diffuse.value.copy(m.color),M.opacity.value=m.opacity,m.map&&(M.map.value=m.map,i(m.map,M.mapTransform))}function h(M,m){M.dashSize.value=m.dashSize,M.totalSize.value=m.dashSize+m.gapSize,M.scale.value=m.scale}function g(M,m,U,C){M.diffuse.value.copy(m.color),M.opacity.value=m.opacity,M.size.value=m.size*U,M.scale.value=C*.5,m.map&&(M.map.value=m.map,i(m.map,M.uvTransform)),m.alphaMap&&(M.alphaMap.value=m.alphaMap),m.alphaTest>0&&(M.alphaTest.value=m.alphaTest)}function p(M,m){M.diffuse.value.copy(m.color),M.opacity.value=m.opacity,M.rotation.value=m.rotation,m.map&&(M.map.value=m.map,i(m.map,M.mapTransform)),m.alphaMap&&(M.alphaMap.value=m.alphaMap),m.alphaTest>0&&(M.alphaTest.value=m.alphaTest)}function v(M,m){M.specular.value.copy(m.specular),M.shininess.value=Math.max(m.shininess,1e-4)}function x(M,m){m.gradientMap&&(M.gradientMap.value=m.gradientMap)}function S(M,m){M.metalness.value=m.metalness,m.metalnessMap&&(M.metalnessMap.value=m.metalnessMap,i(m.metalnessMap,M.metalnessMapTransform)),M.roughness.value=m.roughness,m.roughnessMap&&(M.roughnessMap.value=m.roughnessMap,i(m.roughnessMap,M.roughnessMapTransform)),e.get(m).envMap&&(M.envMapIntensity.value=m.envMapIntensity)}function y(M,m,U){M.ior.value=m.ior,m.sheen>0&&(M.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),M.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(M.sheenColorMap.value=m.sheenColorMap,i(m.sheenColorMap,M.sheenColorMapTransform)),m.sheenRoughnessMap&&(M.sheenRoughnessMap.value=m.sheenRoughnessMap,i(m.sheenRoughnessMap,M.sheenRoughnessMapTransform))),m.clearcoat>0&&(M.clearcoat.value=m.clearcoat,M.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(M.clearcoatMap.value=m.clearcoatMap,i(m.clearcoatMap,M.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,i(m.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(M.clearcoatNormalMap.value=m.clearcoatNormalMap,i(m.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===zn&&M.clearcoatNormalScale.value.negate())),m.iridescence>0&&(M.iridescence.value=m.iridescence,M.iridescenceIOR.value=m.iridescenceIOR,M.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(M.iridescenceMap.value=m.iridescenceMap,i(m.iridescenceMap,M.iridescenceMapTransform)),m.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=m.iridescenceThicknessMap,i(m.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),m.transmission>0&&(M.transmission.value=m.transmission,M.transmissionSamplerMap.value=U.texture,M.transmissionSamplerSize.value.set(U.width,U.height),m.transmissionMap&&(M.transmissionMap.value=m.transmissionMap,i(m.transmissionMap,M.transmissionMapTransform)),M.thickness.value=m.thickness,m.thicknessMap&&(M.thicknessMap.value=m.thicknessMap,i(m.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=m.attenuationDistance,M.attenuationColor.value.copy(m.attenuationColor)),M.specularIntensity.value=m.specularIntensity,M.specularColor.value.copy(m.specularColor),m.specularColorMap&&(M.specularColorMap.value=m.specularColorMap,i(m.specularColorMap,M.specularColorMapTransform)),m.specularIntensityMap&&(M.specularIntensityMap.value=m.specularIntensityMap,i(m.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,m){m.matcap&&(M.matcap.value=m.matcap)}function T(M,m){const U=e.get(m).light;M.referencePosition.value.setFromMatrixPosition(U.matrixWorld),M.nearDistance.value=U.shadow.camera.near,M.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function PT(o,e,i,r){let l={},c={},d=[];const h=i.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function g(U,C){const N=C.program;r.uniformBlockBinding(U,N)}function p(U,C){let N=l[U.id];N===void 0&&(A(U),N=v(U),l[U.id]=N,U.addEventListener("dispose",M));const z=C.program;r.updateUBOMapping(U,z);const I=e.render.frame;c[U.id]!==I&&(S(U),c[U.id]=I)}function v(U){const C=x();U.__bindingPointIndex=C;const N=o.createBuffer(),z=U.__size,I=U.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,z,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,C,N),N}function x(){for(let U=0;U<h;U++)if(d.indexOf(U)===-1)return d.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(U){const C=l[U.id],N=U.uniforms,z=U.__cache;o.bindBuffer(o.UNIFORM_BUFFER,C);for(let I=0,P=N.length;I<P;I++){const $=N[I];if(y($,I,z)===!0){const b=$.__offset,O=Array.isArray($.value)?$.value:[$.value];let ht=0;for(let st=0;st<O.length;st++){const Y=O[st],at=T(Y);typeof Y=="number"?($.__data[0]=Y,o.bufferSubData(o.UNIFORM_BUFFER,b+ht,$.__data)):Y.isMatrix3?($.__data[0]=Y.elements[0],$.__data[1]=Y.elements[1],$.__data[2]=Y.elements[2],$.__data[3]=Y.elements[0],$.__data[4]=Y.elements[3],$.__data[5]=Y.elements[4],$.__data[6]=Y.elements[5],$.__data[7]=Y.elements[0],$.__data[8]=Y.elements[6],$.__data[9]=Y.elements[7],$.__data[10]=Y.elements[8],$.__data[11]=Y.elements[0]):(Y.toArray($.__data,ht),ht+=at.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,b,$.__data)}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(U,C,N){const z=U.value;if(N[C]===void 0){if(typeof z=="number")N[C]=z;else{const I=Array.isArray(z)?z:[z],P=[];for(let $=0;$<I.length;$++)P.push(I[$].clone());N[C]=P}return!0}else if(typeof z=="number"){if(N[C]!==z)return N[C]=z,!0}else{const I=Array.isArray(N[C])?N[C]:[N[C]],P=Array.isArray(z)?z:[z];for(let $=0;$<I.length;$++){const b=I[$];if(b.equals(P[$])===!1)return b.copy(P[$]),!0}}return!1}function A(U){const C=U.uniforms;let N=0;const z=16;let I=0;for(let P=0,$=C.length;P<$;P++){const b=C[P],O={boundary:0,storage:0},ht=Array.isArray(b.value)?b.value:[b.value];for(let st=0,Y=ht.length;st<Y;st++){const at=ht[st],rt=T(at);O.boundary+=rt.boundary,O.storage+=rt.storage}if(b.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=N,P>0){I=N%z;const st=z-I;I!==0&&st-O.boundary<0&&(N+=z-I,b.__offset=N)}N+=O.storage}return I=N%z,I>0&&(N+=z-I),U.__size=N,U.__cache={},this}function T(U){const C={boundary:0,storage:0};return typeof U=="number"?(C.boundary=4,C.storage=4):U.isVector2?(C.boundary=8,C.storage=8):U.isVector3||U.isColor?(C.boundary=16,C.storage=12):U.isVector4?(C.boundary=16,C.storage=16):U.isMatrix3?(C.boundary=48,C.storage=48):U.isMatrix4?(C.boundary=64,C.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),C}function M(U){const C=U.target;C.removeEventListener("dispose",M);const N=d.indexOf(C.__bindingPointIndex);d.splice(N,1),o.deleteBuffer(l[C.id]),delete l[C.id],delete c[C.id]}function m(){for(const U in l)o.deleteBuffer(l[U]);d=[],l={},c={}}return{bind:g,update:p,dispose:m}}function BT(){const o=mu("canvas");return o.style.display="block",o}class x0{constructor(e={}){const{canvas:i=BT(),context:r=null,depth:l=!0,stencil:c=!0,alpha:d=!1,antialias:h=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1}=e;this.isWebGLRenderer=!0;let S;r!==null?S=r.getContextAttributes().alpha:S=d;let y=null,A=null;const T=[],M=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=oe,this.useLegacyLights=!0,this.toneMapping=ta,this.toneMappingExposure=1;const m=this;let U=!1,C=0,N=0,z=null,I=-1,P=null;const $=new un,b=new un;let O=null,ht=i.width,st=i.height,Y=1,at=null,rt=null;const F=new un(0,0,ht,st),W=new un(0,0,ht,st);let K=!1;const vt=new bh;let et=!1,D=!1,X=null;const V=new We,Z=new it,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function yt(){return z===null?Y:1}let H=r;function It(w,nt){for(let ut=0;ut<w.length;ut++){const j=w[ut],ct=i.getContext(j,nt);if(ct!==null)return ct}return null}try{const w={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:g,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Mh}`),i.addEventListener("webglcontextlost",Bt,!1),i.addEventListener("webglcontextrestored",Kt,!1),i.addEventListener("webglcontextcreationerror",Te,!1),H===null){const nt=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&nt.shift(),H=It(nt,w),H===null)throw It(nt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Nt,Rt,ft,Mt,Et,Ut,$t,Wt,ve,xe,Ot,Jt,an,L,R,lt,Tt,At,Dt,Yt,Pt,gt,Vt,qt;function Xt(){Nt=new YE(H),Rt=new VE(H,Nt,e),Nt.init(Rt),gt=new DT(H,Nt,Rt),ft=new wT(H,Nt,Rt),Mt=new QE(H),Et=new pT,Ut=new CT(H,Nt,ft,Et,Rt,gt,Mt),$t=new kE(m),Wt=new jE(m),ve=new uM(H,Rt),Vt=new HE(H,Nt,ve,Rt),xe=new ZE(H,ve,Mt,Vt),Ot=new eb(H,xe,ve,Mt),Dt=new tb(H,Rt,Ut),lt=new XE(Et),Jt=new dT(m,$t,Wt,Nt,Rt,Vt,lt),an=new zT(m,Et),L=new gT,R=new yT(Nt,Rt),At=new IE(m,$t,Wt,ft,Ot,S,g),Tt=new RT(m,Ot,Rt),qt=new PT(H,Mt,Rt,ft),Yt=new GE(H,Nt,Mt,Rt),Pt=new KE(H,Nt,Mt,Rt),Mt.programs=Jt.programs,m.capabilities=Rt,m.extensions=Nt,m.properties=Et,m.renderLists=L,m.shadowMap=Tt,m.state=ft,m.info=Mt}Xt();const wt=new OT(m,H);this.xr=wt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const w=Nt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Nt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(ht,st,!1))},this.getSize=function(w){return w.set(ht,st)},this.setSize=function(w,nt,ut=!0){if(wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ht=w,st=nt,i.width=Math.floor(w*Y),i.height=Math.floor(nt*Y),ut===!0&&(i.style.width=w+"px",i.style.height=nt+"px"),this.setViewport(0,0,w,nt)},this.getDrawingBufferSize=function(w){return w.set(ht*Y,st*Y).floor()},this.setDrawingBufferSize=function(w,nt,ut){ht=w,st=nt,Y=ut,i.width=Math.floor(w*ut),i.height=Math.floor(nt*ut),this.setViewport(0,0,w,nt)},this.getCurrentViewport=function(w){return w.copy($)},this.getViewport=function(w){return w.copy(F)},this.setViewport=function(w,nt,ut,j){w.isVector4?F.set(w.x,w.y,w.z,w.w):F.set(w,nt,ut,j),ft.viewport($.copy(F).multiplyScalar(Y).floor())},this.getScissor=function(w){return w.copy(W)},this.setScissor=function(w,nt,ut,j){w.isVector4?W.set(w.x,w.y,w.z,w.w):W.set(w,nt,ut,j),ft.scissor(b.copy(W).multiplyScalar(Y).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(w){ft.setScissorTest(K=w)},this.setOpaqueSort=function(w){at=w},this.setTransparentSort=function(w){rt=w},this.getClearColor=function(w){return w.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(w=!0,nt=!0,ut=!0){let j=0;w&&(j|=H.COLOR_BUFFER_BIT),nt&&(j|=H.DEPTH_BUFFER_BIT),ut&&(j|=H.STENCIL_BUFFER_BIT),H.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Bt,!1),i.removeEventListener("webglcontextrestored",Kt,!1),i.removeEventListener("webglcontextcreationerror",Te,!1),L.dispose(),R.dispose(),Et.dispose(),$t.dispose(),Wt.dispose(),Ot.dispose(),Vt.dispose(),qt.dispose(),Jt.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",Ft),wt.removeEventListener("sessionend",Me),X&&(X.dispose(),X=null),Se.stop()};function Bt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Kt(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const w=Mt.autoReset,nt=Tt.enabled,ut=Tt.autoUpdate,j=Tt.needsUpdate,ct=Tt.type;Xt(),Mt.autoReset=w,Tt.enabled=nt,Tt.autoUpdate=ut,Tt.needsUpdate=j,Tt.type=ct}function Te(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function He(w){const nt=w.target;nt.removeEventListener("dispose",He),k(nt)}function k(w){dt(w),Et.remove(w)}function dt(w){const nt=Et.get(w).programs;nt!==void 0&&(nt.forEach(function(ut){Jt.releaseProgram(ut)}),w.isShaderMaterial&&Jt.releaseShaderCache(w))}this.renderBufferDirect=function(w,nt,ut,j,ct,Gt){nt===null&&(nt=mt);const jt=ct.isMesh&&ct.matrixWorld.determinant()<0,Qt=Uo(w,nt,ut,j,ct);ft.setMaterial(j,jt);let ie=ut.index,se=1;j.wireframe===!0&&(ie=xe.getWireframeAttribute(ut),se=2);const ee=ut.drawRange,re=ut.attributes.position;let me=ee.start*se,Ve=(ee.start+ee.count)*se;Gt!==null&&(me=Math.max(me,Gt.start*se),Ve=Math.min(Ve,(Gt.start+Gt.count)*se)),ie!==null?(me=Math.max(me,0),Ve=Math.min(Ve,ie.count)):re!=null&&(me=Math.max(me,0),Ve=Math.min(Ve,re.count));const cn=Ve-me;if(cn<0||cn===1/0)return;Vt.setup(ct,j,Qt,ut,ie);let Tn,le=Yt;if(ie!==null&&(Tn=ve.get(ie),le=Pt,le.setIndex(Tn)),ct.isMesh)j.wireframe===!0?(ft.setLineWidth(j.wireframeLinewidth*yt()),le.setMode(H.LINES)):le.setMode(H.TRIANGLES);else if(ct.isLine){let ce=j.linewidth;ce===void 0&&(ce=1),ft.setLineWidth(ce*yt()),ct.isLineSegments?le.setMode(H.LINES):ct.isLineLoop?le.setMode(H.LINE_LOOP):le.setMode(H.LINE_STRIP)}else ct.isPoints?le.setMode(H.POINTS):ct.isSprite&&le.setMode(H.TRIANGLES);if(ct.isInstancedMesh)le.renderInstances(me,cn,ct.count);else if(ut.isInstancedBufferGeometry){const ce=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,ds=Math.min(ut.instanceCount,ce);le.renderInstances(me,cn,ds)}else le.render(me,cn)},this.compile=function(w,nt){function ut(j,ct,Gt){j.transparent===!0&&j.side===wi&&j.forceSinglePass===!1?(j.side=zn,j.needsUpdate=!0,Oa(j,ct,Gt),j.side=Na,j.needsUpdate=!0,Oa(j,ct,Gt),j.side=wi):Oa(j,ct,Gt)}A=R.get(w),A.init(),M.push(A),w.traverseVisible(function(j){j.isLight&&j.layers.test(nt.layers)&&(A.pushLight(j),j.castShadow&&A.pushShadow(j))}),A.setupLights(m.useLegacyLights),w.traverse(function(j){const ct=j.material;if(ct)if(Array.isArray(ct))for(let Gt=0;Gt<ct.length;Gt++){const jt=ct[Gt];ut(jt,w,j)}else ut(ct,w,j)}),M.pop(),A=null};let bt=null;function Lt(w){bt&&bt(w)}function Ft(){Se.stop()}function Me(){Se.start()}const Se=new d0;Se.setAnimationLoop(Lt),typeof self<"u"&&Se.setContext(self),this.setAnimationLoop=function(w){bt=w,wt.setAnimationLoop(w),w===null?Se.stop():Se.start()},wt.addEventListener("sessionstart",Ft),wt.addEventListener("sessionend",Me),this.render=function(w,nt){if(nt!==void 0&&nt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),nt.parent===null&&nt.matrixWorldAutoUpdate===!0&&nt.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(nt),nt=wt.getCamera()),w.isScene===!0&&w.onBeforeRender(m,w,nt,z),A=R.get(w,M.length),A.init(),M.push(A),V.multiplyMatrices(nt.projectionMatrix,nt.matrixWorldInverse),vt.setFromProjectionMatrix(V),D=this.localClippingEnabled,et=lt.init(this.clippingPlanes,D),y=L.get(w,T.length),y.init(),T.push(y),sn(w,nt,0,m.sortObjects),y.finish(),m.sortObjects===!0&&y.sort(at,rt),et===!0&&lt.beginShadows();const ut=A.state.shadowsArray;if(Tt.render(ut,w,nt),et===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset(),At.render(y,w),A.setupLights(m.useLegacyLights),nt.isArrayCamera){const j=nt.cameras;for(let ct=0,Gt=j.length;ct<Gt;ct++){const jt=j[ct];ci(y,w,jt,jt.viewport)}}else ci(y,w,nt);z!==null&&(Ut.updateMultisampleRenderTarget(z),Ut.updateRenderTargetMipmap(z)),w.isScene===!0&&w.onAfterRender(m,w,nt),Vt.resetDefaultState(),I=-1,P=null,M.pop(),M.length>0?A=M[M.length-1]:A=null,T.pop(),T.length>0?y=T[T.length-1]:y=null};function sn(w,nt,ut,j){if(w.visible===!1)return;if(w.layers.test(nt.layers)){if(w.isGroup)ut=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(nt);else if(w.isLight)A.pushLight(w),w.castShadow&&A.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||vt.intersectsSprite(w)){j&&Z.setFromMatrixPosition(w.matrixWorld).applyMatrix4(V);const jt=Ot.update(w),Qt=w.material;Qt.visible&&y.push(w,jt,Qt,ut,Z.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||vt.intersectsObject(w))){w.isSkinnedMesh&&w.skeleton.frame!==Mt.render.frame&&(w.skeleton.update(),w.skeleton.frame=Mt.render.frame);const jt=Ot.update(w),Qt=w.material;if(j&&(jt.boundingSphere===null&&jt.computeBoundingSphere(),Z.copy(jt.boundingSphere.center).applyMatrix4(w.matrixWorld).applyMatrix4(V)),Array.isArray(Qt)){const ie=jt.groups;for(let se=0,ee=ie.length;se<ee;se++){const re=ie[se],me=Qt[re.materialIndex];me&&me.visible&&y.push(w,jt,me,ut,Z.z,re)}}else Qt.visible&&y.push(w,jt,Qt,ut,Z.z,null)}}const Gt=w.children;for(let jt=0,Qt=Gt.length;jt<Qt;jt++)sn(Gt[jt],nt,ut,j)}function ci(w,nt,ut,j){const ct=w.opaque,Gt=w.transmissive,jt=w.transparent;A.setupLightsView(ut),et===!0&&lt.setGlobalState(m.clippingPlanes,ut),Gt.length>0&&Pe(ct,Gt,nt,ut),j&&ft.viewport($.copy(j)),ct.length>0&&rn(ct,nt,ut),Gt.length>0&&rn(Gt,nt,ut),jt.length>0&&rn(jt,nt,ut),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function Pe(w,nt,ut,j){if(X===null){const Qt=Rt.isWebGL2;X=new cs(1024,1024,{generateMipmaps:!0,type:Nt.has("EXT_color_buffer_half_float")?Ao:us,minFilter:To,samples:Qt&&h===!0?4:0})}const ct=m.getRenderTarget();m.setRenderTarget(X),m.clear();const Gt=m.toneMapping;m.toneMapping=ta,rn(w,ut,j),Ut.updateMultisampleRenderTarget(X),Ut.updateRenderTargetMipmap(X);let jt=!1;for(let Qt=0,ie=nt.length;Qt<ie;Qt++){const se=nt[Qt],ee=se.object,re=se.geometry,me=se.material,Ve=se.group;if(me.side===wi&&ee.layers.test(j.layers)){const cn=me.side;me.side=zn,me.needsUpdate=!0,Zn(ee,ut,j,re,me,Ve),me.side=cn,me.needsUpdate=!0,jt=!0}}jt===!0&&(Ut.updateMultisampleRenderTarget(X),Ut.updateRenderTargetMipmap(X)),m.setRenderTarget(ct),m.toneMapping=Gt}function rn(w,nt,ut){const j=nt.isScene===!0?nt.overrideMaterial:null;for(let ct=0,Gt=w.length;ct<Gt;ct++){const jt=w[ct],Qt=jt.object,ie=jt.geometry,se=j===null?jt.material:j,ee=jt.group;Qt.layers.test(ut.layers)&&Zn(Qt,nt,ut,ie,se,ee)}}function Zn(w,nt,ut,j,ct,Gt){w.onBeforeRender(m,nt,ut,j,ct,Gt),w.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ct.onBeforeRender(m,nt,ut,j,w,Gt),ct.transparent===!0&&ct.side===wi&&ct.forceSinglePass===!1?(ct.side=zn,ct.needsUpdate=!0,m.renderBufferDirect(ut,nt,j,ct,w,Gt),ct.side=Na,ct.needsUpdate=!0,m.renderBufferDirect(ut,nt,j,ct,w,Gt),ct.side=wi):m.renderBufferDirect(ut,nt,j,ct,w,Gt),w.onAfterRender(m,nt,ut,j,ct,Gt)}function Oa(w,nt,ut){nt.isScene!==!0&&(nt=mt);const j=Et.get(w),ct=A.state.lights,Gt=A.state.shadowsArray,jt=ct.state.version,Qt=Jt.getParameters(w,ct.state,Gt,nt,ut),ie=Jt.getProgramCacheKey(Qt);let se=j.programs;j.environment=w.isMeshStandardMaterial?nt.environment:null,j.fog=nt.fog,j.envMap=(w.isMeshStandardMaterial?Wt:$t).get(w.envMap||j.environment),se===void 0&&(w.addEventListener("dispose",He),se=new Map,j.programs=se);let ee=se.get(ie);if(ee!==void 0){if(j.currentProgram===ee&&j.lightsStateVersion===jt)return br(w,Qt),ee}else Qt.uniforms=Jt.getUniforms(w),w.onBuild(ut,Qt,m),w.onBeforeCompile(Qt,m),ee=Jt.acquireProgram(Qt,ie),se.set(ie,ee),j.uniforms=Qt.uniforms;const re=j.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(re.clippingPlanes=lt.uniform),br(w,Qt),j.needsLights=Ar(w),j.lightsStateVersion=jt,j.needsLights&&(re.ambientLightColor.value=ct.state.ambient,re.lightProbe.value=ct.state.probe,re.directionalLights.value=ct.state.directional,re.directionalLightShadows.value=ct.state.directionalShadow,re.spotLights.value=ct.state.spot,re.spotLightShadows.value=ct.state.spotShadow,re.rectAreaLights.value=ct.state.rectArea,re.ltc_1.value=ct.state.rectAreaLTC1,re.ltc_2.value=ct.state.rectAreaLTC2,re.pointLights.value=ct.state.point,re.pointLightShadows.value=ct.state.pointShadow,re.hemisphereLights.value=ct.state.hemi,re.directionalShadowMap.value=ct.state.directionalShadowMap,re.directionalShadowMatrix.value=ct.state.directionalShadowMatrix,re.spotShadowMap.value=ct.state.spotShadowMap,re.spotLightMatrix.value=ct.state.spotLightMatrix,re.spotLightMap.value=ct.state.spotLightMap,re.pointShadowMap.value=ct.state.pointShadowMap,re.pointShadowMatrix.value=ct.state.pointShadowMatrix);const me=ee.getUniforms(),Ve=pu.seqWithValue(me.seq,re);return j.currentProgram=ee,j.uniformsList=Ve,ee}function br(w,nt){const ut=Et.get(w);ut.outputColorSpace=nt.outputColorSpace,ut.instancing=nt.instancing,ut.skinning=nt.skinning,ut.morphTargets=nt.morphTargets,ut.morphNormals=nt.morphNormals,ut.morphColors=nt.morphColors,ut.morphTargetsCount=nt.morphTargetsCount,ut.numClippingPlanes=nt.numClippingPlanes,ut.numIntersection=nt.numClipIntersection,ut.vertexAlphas=nt.vertexAlphas,ut.vertexTangents=nt.vertexTangents,ut.toneMapping=nt.toneMapping}function Uo(w,nt,ut,j,ct){nt.isScene!==!0&&(nt=mt),Ut.resetTextureUnits();const Gt=nt.fog,jt=j.isMeshStandardMaterial?nt.environment:null,Qt=z===null?m.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Ci,ie=(j.isMeshStandardMaterial?Wt:$t).get(j.envMap||jt),se=j.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,ee=!!j.normalMap&&!!ut.attributes.tangent,re=!!ut.morphAttributes.position,me=!!ut.morphAttributes.normal,Ve=!!ut.morphAttributes.color,cn=j.toneMapped?m.toneMapping:ta,Tn=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,le=Tn!==void 0?Tn.length:0,ce=Et.get(j),ds=A.state.lights;if(et===!0&&(D===!0||w!==P)){const Ge=w===P&&j.id===I;lt.setState(j,w,Ge)}let ze=!1;j.version===ce.__version?(ce.needsLights&&ce.lightsStateVersion!==ds.state.version||ce.outputColorSpace!==Qt||ct.isInstancedMesh&&ce.instancing===!1||!ct.isInstancedMesh&&ce.instancing===!0||ct.isSkinnedMesh&&ce.skinning===!1||!ct.isSkinnedMesh&&ce.skinning===!0||ce.envMap!==ie||j.fog===!0&&ce.fog!==Gt||ce.numClippingPlanes!==void 0&&(ce.numClippingPlanes!==lt.numPlanes||ce.numIntersection!==lt.numIntersection)||ce.vertexAlphas!==se||ce.vertexTangents!==ee||ce.morphTargets!==re||ce.morphNormals!==me||ce.morphColors!==Ve||ce.toneMapping!==cn||Rt.isWebGL2===!0&&ce.morphTargetsCount!==le)&&(ze=!0):(ze=!0,ce.__version=j.version);let An=ce.currentProgram;ze===!0&&(An=Oa(j,nt,ct));let No=!1,na=!1,ps=!1;const fn=An.getUniforms(),Kn=ce.uniforms;if(ft.useProgram(An.program)&&(No=!0,na=!0,ps=!0),j.id!==I&&(I=j.id,na=!0),No||P!==w){if(fn.setValue(H,"projectionMatrix",w.projectionMatrix),Rt.logarithmicDepthBuffer&&fn.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),P!==w&&(P=w,na=!0,ps=!0),j.isShaderMaterial||j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshStandardMaterial||j.envMap){const Ge=fn.map.cameraPosition;Ge!==void 0&&Ge.setValue(H,Z.setFromMatrixPosition(w.matrixWorld))}(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&fn.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial||j.isShadowMaterial||ct.isSkinnedMesh)&&fn.setValue(H,"viewMatrix",w.matrixWorldInverse)}if(ct.isSkinnedMesh){fn.setOptional(H,ct,"bindMatrix"),fn.setOptional(H,ct,"bindMatrixInverse");const Ge=ct.skeleton;Ge&&(Rt.floatVertexTextures?(Ge.boneTexture===null&&Ge.computeBoneTexture(),fn.setValue(H,"boneTexture",Ge.boneTexture,Ut),fn.setValue(H,"boneTextureSize",Ge.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ia=ut.morphAttributes;if((ia.position!==void 0||ia.normal!==void 0||ia.color!==void 0&&Rt.isWebGL2===!0)&&Dt.update(ct,ut,An),(na||ce.receiveShadow!==ct.receiveShadow)&&(ce.receiveShadow=ct.receiveShadow,fn.setValue(H,"receiveShadow",ct.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Kn.envMap.value=ie,Kn.flipEnvMap.value=ie.isCubeTexture&&ie.isRenderTargetTexture===!1?-1:1),na&&(fn.setValue(H,"toneMappingExposure",m.toneMappingExposure),ce.needsLights&&Tr(Kn,ps),Gt&&j.fog===!0&&an.refreshFogUniforms(Kn,Gt),an.refreshMaterialUniforms(Kn,j,Y,st,X),pu.upload(H,ce.uniformsList,Kn,Ut)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(pu.upload(H,ce.uniformsList,Kn,Ut),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&fn.setValue(H,"center",ct.center),fn.setValue(H,"modelViewMatrix",ct.modelViewMatrix),fn.setValue(H,"normalMatrix",ct.normalMatrix),fn.setValue(H,"modelMatrix",ct.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Ge=j.uniformsGroups;for(let _n=0,Oo=Ge.length;_n<Oo;_n++)if(Rt.isWebGL2){const zo=Ge[_n];qt.update(zo,An),qt.bind(zo,An)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return An}function Tr(w,nt){w.ambientLightColor.needsUpdate=nt,w.lightProbe.needsUpdate=nt,w.directionalLights.needsUpdate=nt,w.directionalLightShadows.needsUpdate=nt,w.pointLights.needsUpdate=nt,w.pointLightShadows.needsUpdate=nt,w.spotLights.needsUpdate=nt,w.spotLightShadows.needsUpdate=nt,w.rectAreaLights.needsUpdate=nt,w.hemisphereLights.needsUpdate=nt}function Ar(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(w,nt,ut){Et.get(w.texture).__webglTexture=nt,Et.get(w.depthTexture).__webglTexture=ut;const j=Et.get(w);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=ut===void 0,j.__autoAllocateDepthBuffer||Nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,nt){const ut=Et.get(w);ut.__webglFramebuffer=nt,ut.__useDefaultFramebuffer=nt===void 0},this.setRenderTarget=function(w,nt=0,ut=0){z=w,C=nt,N=ut;let j=!0,ct=null,Gt=!1,jt=!1;if(w){const ie=Et.get(w);ie.__useDefaultFramebuffer!==void 0?(ft.bindFramebuffer(H.FRAMEBUFFER,null),j=!1):ie.__webglFramebuffer===void 0?Ut.setupRenderTarget(w):ie.__hasExternalTextures&&Ut.rebindTextures(w,Et.get(w.texture).__webglTexture,Et.get(w.depthTexture).__webglTexture);const se=w.texture;(se.isData3DTexture||se.isDataArrayTexture||se.isCompressedArrayTexture)&&(jt=!0);const ee=Et.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(ct=ee[nt],Gt=!0):Rt.isWebGL2&&w.samples>0&&Ut.useMultisampledRTT(w)===!1?ct=Et.get(w).__webglMultisampledFramebuffer:ct=ee,$.copy(w.viewport),b.copy(w.scissor),O=w.scissorTest}else $.copy(F).multiplyScalar(Y).floor(),b.copy(W).multiplyScalar(Y).floor(),O=K;if(ft.bindFramebuffer(H.FRAMEBUFFER,ct)&&Rt.drawBuffers&&j&&ft.drawBuffers(w,ct),ft.viewport($),ft.scissor(b),ft.setScissorTest(O),Gt){const ie=Et.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ie.__webglTexture,ut)}else if(jt){const ie=Et.get(w.texture),se=nt||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,ie.__webglTexture,ut||0,se)}I=-1},this.readRenderTargetPixels=function(w,nt,ut,j,ct,Gt,jt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qt=Et.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&jt!==void 0&&(Qt=Qt[jt]),Qt){ft.bindFramebuffer(H.FRAMEBUFFER,Qt);try{const ie=w.texture,se=ie.format,ee=ie.type;if(se!==Si&&gt.convert(se)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const re=ee===Ao&&(Nt.has("EXT_color_buffer_half_float")||Rt.isWebGL2&&Nt.has("EXT_color_buffer_float"));if(ee!==us&&gt.convert(ee)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ee===ss&&(Rt.isWebGL2||Nt.has("OES_texture_float")||Nt.has("WEBGL_color_buffer_float")))&&!re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}nt>=0&&nt<=w.width-j&&ut>=0&&ut<=w.height-ct&&H.readPixels(nt,ut,j,ct,gt.convert(se),gt.convert(ee),Gt)}finally{const ie=z!==null?Et.get(z).__webglFramebuffer:null;ft.bindFramebuffer(H.FRAMEBUFFER,ie)}}},this.copyFramebufferToTexture=function(w,nt,ut=0){const j=Math.pow(2,-ut),ct=Math.floor(nt.image.width*j),Gt=Math.floor(nt.image.height*j);Ut.setTexture2D(nt,0),H.copyTexSubImage2D(H.TEXTURE_2D,ut,0,0,w.x,w.y,ct,Gt),ft.unbindTexture()},this.copyTextureToTexture=function(w,nt,ut,j=0){const ct=nt.image.width,Gt=nt.image.height,jt=gt.convert(ut.format),Qt=gt.convert(ut.type);Ut.setTexture2D(ut,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,ut.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ut.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,ut.unpackAlignment),nt.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,j,w.x,w.y,ct,Gt,jt,Qt,nt.image.data):nt.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,j,w.x,w.y,nt.mipmaps[0].width,nt.mipmaps[0].height,jt,nt.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,j,w.x,w.y,jt,Qt,nt.image),j===0&&ut.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),ft.unbindTexture()},this.copyTextureToTexture3D=function(w,nt,ut,j,ct=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Gt=w.max.x-w.min.x+1,jt=w.max.y-w.min.y+1,Qt=w.max.z-w.min.z+1,ie=gt.convert(j.format),se=gt.convert(j.type);let ee;if(j.isData3DTexture)Ut.setTexture3D(j,0),ee=H.TEXTURE_3D;else if(j.isDataArrayTexture)Ut.setTexture2DArray(j,0),ee=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment);const re=H.getParameter(H.UNPACK_ROW_LENGTH),me=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Ve=H.getParameter(H.UNPACK_SKIP_PIXELS),cn=H.getParameter(H.UNPACK_SKIP_ROWS),Tn=H.getParameter(H.UNPACK_SKIP_IMAGES),le=ut.isCompressedTexture?ut.mipmaps[0]:ut.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,le.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,le.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,w.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,w.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,w.min.z),ut.isDataTexture||ut.isData3DTexture?H.texSubImage3D(ee,ct,nt.x,nt.y,nt.z,Gt,jt,Qt,ie,se,le.data):ut.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(ee,ct,nt.x,nt.y,nt.z,Gt,jt,Qt,ie,le.data)):H.texSubImage3D(ee,ct,nt.x,nt.y,nt.z,Gt,jt,Qt,ie,se,le),H.pixelStorei(H.UNPACK_ROW_LENGTH,re),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,me),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ve),H.pixelStorei(H.UNPACK_SKIP_ROWS,cn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Tn),ct===0&&j.generateMipmaps&&H.generateMipmap(ee),ft.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Ut.setTextureCube(w,0):w.isData3DTexture?Ut.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ut.setTexture2DArray(w,0):Ut.setTexture2D(w,0),ft.unbindTexture()},this.resetState=function(){C=0,N=0,z=null,ft.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===oe?os:$_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===os?oe:Ci}}class FT extends x0{}FT.prototype.isWebGL1Renderer=!0;class Ah{constructor(e,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new we(e),this.near=i,this.far=r}clone(){return new Ah(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class IT extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class F_ extends Mi{constructor(e,i,r,l=1){super(e,i,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const cr=new We,I_=new We,du=[],H_=new hs,HT=new We,Mo=new Oe,yo=new Do;class G_ extends Oe{constructor(e,i,r){super(e,i),this.isInstancedMesh=!0,this.instanceMatrix=new F_(new Float32Array(r*16),16),this.instanceColor=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<r;l++)this.setMatrixAt(l,HT)}computeBoundingBox(){const e=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new hs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,cr),H_.copy(e.boundingBox).applyMatrix4(cr),this.boundingBox.union(H_)}computeBoundingSphere(){const e=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Do),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,cr),yo.copy(e.boundingSphere).applyMatrix4(cr),this.boundingSphere.union(yo)}copy(e,i){return super.copy(e,i),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,i){i.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,i){i.fromArray(this.instanceMatrix.array,e*16)}raycast(e,i){const r=this.matrixWorld,l=this.count;if(Mo.geometry=this.geometry,Mo.material=this.material,Mo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yo.copy(this.boundingSphere),yo.applyMatrix4(r),e.ray.intersectsSphere(yo)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,cr),I_.multiplyMatrices(r,cr),Mo.matrixWorld=I_,Mo.raycast(e,du);for(let d=0,h=du.length;d<h;d++){const g=du[d];g.instanceId=c,g.object=this,i.push(g)}du.length=0}}setColorAt(e,i){this.instanceColor===null&&(this.instanceColor=new F_(new Float32Array(this.instanceMatrix.count*3),3)),i.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,i){i.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ro extends ea{constructor(e=1,i=1,r=1,l=32,c=1,d=!1,h=0,g=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:r,radialSegments:l,heightSegments:c,openEnded:d,thetaStart:h,thetaLength:g};const p=this;l=Math.floor(l),c=Math.floor(c);const v=[],x=[],S=[],y=[];let A=0;const T=[],M=r/2;let m=0;U(),d===!1&&(e>0&&C(!0),i>0&&C(!1)),this.setIndex(v),this.setAttribute("position",new Yn(x,3)),this.setAttribute("normal",new Yn(S,3)),this.setAttribute("uv",new Yn(y,2));function U(){const N=new it,z=new it;let I=0;const P=(i-e)/r;for(let $=0;$<=c;$++){const b=[],O=$/c,ht=O*(i-e)+e;for(let st=0;st<=l;st++){const Y=st/l,at=Y*g+h,rt=Math.sin(at),F=Math.cos(at);z.x=ht*rt,z.y=-O*r+M,z.z=ht*F,x.push(z.x,z.y,z.z),N.set(rt,P,F).normalize(),S.push(N.x,N.y,N.z),y.push(Y,1-O),b.push(A++)}T.push(b)}for(let $=0;$<l;$++)for(let b=0;b<c;b++){const O=T[b][$],ht=T[b+1][$],st=T[b+1][$+1],Y=T[b][$+1];v.push(O,ht,Y),v.push(ht,st,Y),I+=6}p.addGroup(m,I,0),m+=I}function C(N){const z=A,I=new Ce,P=new it;let $=0;const b=N===!0?e:i,O=N===!0?1:-1;for(let st=1;st<=l;st++)x.push(0,M*O,0),S.push(0,O,0),y.push(.5,.5),A++;const ht=A;for(let st=0;st<=l;st++){const at=st/l*g+h,rt=Math.cos(at),F=Math.sin(at);P.x=b*F,P.y=M*O,P.z=b*rt,x.push(P.x,P.y,P.z),S.push(0,O,0),I.x=rt*.5+.5,I.y=F*.5*O+.5,y.push(I.x,I.y),A++}for(let st=0;st<l;st++){const Y=z+st,at=ht+st;N===!0?v.push(at,at+1,Y):v.push(at+1,at,Y),$+=3}p.addGroup(m,$,N===!0?1:2),m+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ro(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gu extends Ro{constructor(e=1,i=1,r=32,l=1,c=!1,d=0,h=Math.PI*2){super(0,e,i,r,l,c,d,h),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:r,heightSegments:l,openEnded:c,thetaStart:d,thetaLength:h}}static fromJSON(e){return new gu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Rh extends ea{constructor(e=1,i=32,r=16,l=0,c=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const g=Math.min(d+h,Math.PI);let p=0;const v=[],x=new it,S=new it,y=[],A=[],T=[],M=[];for(let m=0;m<=r;m++){const U=[],C=m/r;let N=0;m===0&&d===0?N=.5/i:m===r&&g===Math.PI&&(N=-.5/i);for(let z=0;z<=i;z++){const I=z/i;x.x=-e*Math.cos(l+I*c)*Math.sin(d+C*h),x.y=e*Math.cos(d+C*h),x.z=e*Math.sin(l+I*c)*Math.sin(d+C*h),A.push(x.x,x.y,x.z),S.copy(x).normalize(),T.push(S.x,S.y,S.z),M.push(I+N,1-C),U.push(p++)}v.push(U)}for(let m=0;m<r;m++)for(let U=0;U<i;U++){const C=v[m][U+1],N=v[m][U],z=v[m+1][U],I=v[m+1][U+1];(m!==0||d>0)&&y.push(C,N,I),(m!==r-1||g<Math.PI)&&y.push(N,z,I)}this.setIndex(y),this.setAttribute("position",new Yn(A,3)),this.setAttribute("normal",new Yn(T,3)),this.setAttribute("uv",new Yn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class qn extends Lo{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=t0,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class S0 extends gn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}const ch=new We,V_=new it,X_=new it;class GT{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bh,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new un(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;V_.setFromMatrixPosition(e.matrixWorld),i.position.copy(V_),X_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(X_),i.updateMatrixWorld(),ch.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ch),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(ch)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class VT extends GT{constructor(){super(new p0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class XT extends S0{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new VT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class kT extends S0{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class WT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=k_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=k_();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function k_(){return(typeof performance>"u"?Date:performance).now()}class qT{constructor(e,i,r=0,l=1/0){this.ray=new r0(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new Eh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}intersectObject(e,i=!0,r=[]){return xh(e,this,r,i),r.sort(W_),r}intersectObjects(e,i=!0,r=[]){for(let l=0,c=e.length;l<c;l++)xh(e[l],this,r,i);return r.sort(W_),r}}function W_(o,e){return o.distance-e.distance}function xh(o,e,i,r){if(o.layers.test(e.layers)&&o.raycast(e,i),r===!0){const l=o.children;for(let c=0,d=l.length;c<d;c++)xh(l[c],e,i,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mh);const oi=200,jT=40,YT=15,q_=12,ZT=20,KT=({gameState:o,settings:e,onUpdateStats:i,onGameOver:r,onTogglePause:l,inputRef:c})=>{const d=$e.useRef(null),h=$e.useRef({v1:new it,v2:new it,v3:new it,v4:new it,v5:new it,v6:new it,raycaster:new qT,dummy:new gn}),g=$e.useRef({health:100,kills:0,alive:0,zoneRadius:oi,zoneTimer:60,verticalVelocity:0,fireCooldown:0,gameTime:0,pcInput:{forward:!1,backward:!1,left:!1,right:!1},tracersPool:[],activeTracers:[]}),p=$e.useRef(null),v=$e.useRef(null),x=$e.useRef([]),S=$e.useRef([]),y=$e.useRef([]),A=$e.useRef([]),T=$e.useRef(null);return $e.useEffect(()=>{if(!d.current)return;const M=new WT,m=h.current,U=new IT;U.background=new we(8900331),U.fog=new Ah(8900331,20,300),p.current=U;const C=new ui(e.fov,window.innerWidth/window.innerHeight,.1,500),N=new x0({antialias:!1,powerPreference:"high-performance"});N.setSize(window.innerWidth,window.innerHeight),N.setPixelRatio(Math.min(window.devicePixelRatio,1.2)),N.shadowMap.enabled=!0,N.shadowMap.type=Gx,d.current.appendChild(N.domElement);const z=new kT(16777215,.7);U.add(z);const I=new XT(16777215,.8);I.position.set(50,100,50),I.castShadow=!0,I.shadow.mapSize.set(1024,1024),I.shadow.camera.left=-100,I.shadow.camera.right=100,I.shadow.camera.top=100,I.shadow.camera.bottom=-100,U.add(I);const P=[],$=[];y.current=P,A.current=$;for(let ft=0;ft<80;ft++){const Mt=new Oe(new Rh(.15,4,4),new ns({color:16776960}));Mt.position.set(0,-900,0),Mt.visible=!1,U.add(Mt),g.current.tracersPool.push(Mt)}const b=new Oe(new La(oi*2,oi*2),new qn({color:3898683}));b.rotation.x=-Math.PI/2,b.receiveShadow=!0,U.add(b),T.current=b;const O=800,ht=new G_(new gu(2.5,7,6),new qn({color:1722906}),O),st=new G_(new Ro(.5,.6,2.5,5),new qn({color:4861466}),O);ht.castShadow=!0,st.castShadow=!0;let Y=0;const at=(ft,Mt)=>{Y>=O||(m.dummy.position.set(ft,1.25,Mt),m.dummy.scale.set(1,1,1),m.dummy.updateMatrix(),st.setMatrixAt(Y,m.dummy.matrix),m.dummy.position.set(ft,4.5,Mt),m.dummy.updateMatrix(),ht.setMatrixAt(Y,m.dummy.matrix),Y++)},rt=[],F=(ft,Mt,Et=1)=>{const Ut=Et*6,$t=10,Wt=new Oe(new Nn($t,Ut,$t),new qn({color:Et>1?14463630:14737632}));Wt.position.set(ft,Ut/2,Mt),Wt.castShadow=!0,Wt.receiveShadow=!0,U.add(Wt),P.push(Wt);const ve=new Oe(new gu(8,4,4),new qn({color:9127187}));ve.position.set(ft,Ut+2,Mt),ve.rotation.y=Math.PI/4,U.add(ve),P.push(ve);const xe=new Oe(new La($t+2,$t+2),new ns({visible:!1}));xe.rotation.x=-Math.PI/2,xe.position.set(ft,Ut,Mt),$.push(xe),rt.push({x:ft,z:Mt})},W=50,K=new qn({color:3355443});for(let ft=-4;ft<=4;ft++)for(let Mt=-4;Mt<=4;Mt++){const Et=ft*W,Ut=Mt*W,$t=new Oe(new La(12,W),K);$t.rotation.x=-Math.PI/2,$t.position.set(Et,.05,Ut),U.add($t);const Wt=new Oe(new La(W,12),K);Wt.rotation.x=-Math.PI/2,Wt.position.set(Et,.05,Ut),U.add(Wt),Math.random()>.3?F(Et+25,Ut+25,Math.random()>.7?2:1):at(Et+25,Ut+25)}U.add(ht),U.add(st);for(let ft=0;ft<15;ft++){const Mt=new pr;Mt.position.set((Math.random()-.5)*oi,1,(Math.random()-.5)*oi),Mt.add(new Oe(new Nn(1,.6,.4),new qn({color:16777215}))),Mt.add(new Oe(new Nn(.4,.2,.45),new qn({color:65280}))),U.add(Mt),S.current.push(Mt)}const vt=(ft,Mt)=>{const Et=new pr,Ut=new Oe(new Nn(.6,.7,.3),new qn({color:ft}));Ut.position.y=1.05,Et.add(Ut);const $t=new Oe(new Nn(.35,.35,.35),new qn({color:16764074}));$t.position.y=.65,Ut.add($t);const Wt=new Oe(new Nn(.1,.15,.6),new qn({color:273}));Wt.position.set(.3,0,.3),Ut.add(Wt);const ve=new Oe(new Nn(.2,.7,.2),new qn({color:546}));ve.position.set(-.2,-.7,0),Ut.add(ve);const xe=new Oe(new Nn(.2,.7,.2),new qn({color:546}));xe.position.set(.2,-.7,0),Ut.add(xe);const Ot=new Oe(new Nn(1,2,1),new ns({visible:!1}));if(Ot.position.y=1,Et.add(Ot),!Mt){const Jt=new Oe(new La(1,.15),new ns({color:16711680}));Jt.position.set(0,2.2,0),Et.add(Jt),Et.userData.hpBar=Jt}return Et.userData={limbs:{head:$t,gun:Wt,legL:ve,legR:xe,hitbox:Ot},isPlayer:Mt,hp:100,speed:q_,state:"patrol",patrolTarget:new it,verticalVelocity:0,isGrounded:!0},Et},et=vt(16776960,!0);et.position.set(0,5,0),U.add(et),v.current=et;for(let ft=0;ft<e.botCount;ft++){const Mt=vt(Math.random()*16777215,!1);if(Math.random()>.5&&rt.length>0){const Et=rt[Math.floor(Math.random()*rt.length)];Mt.position.set(Et.x,5,Et.z)}else{const Et=Math.random()*Math.PI*2,Ut=oi-10-Math.random()*20;Mt.position.set(Math.cos(Et)*Ut,5,Math.sin(Et)*Ut)}Mt.userData.patrolTarget.set((Math.random()-.5)*200,0,(Math.random()-.5)*200),U.add(Mt),x.current.push(Mt)}i({alive:e.botCount+1});const D=new Oe(new Ro(oi,oi,300,32,1,!0),new ns({color:58879,opacity:.2,transparent:!0,side:wi}));D.position.y=150,U.add(D),N.compile(U,C);const X=(ft,Mt)=>{const Et=g.current.pcInput;ft.code==="KeyW"&&(Et.forward=Mt),ft.code==="KeyS"&&(Et.backward=Mt),ft.code==="KeyA"&&(Et.left=Mt),ft.code==="KeyD"&&(Et.right=Mt),Mt&&ft.code==="Space"&&(c.current.jump=!0),ft.code==="ShiftLeft"&&(c.current.isSprinting=Mt),Mt&&ft.code==="Escape"&&l()},V=ft=>{if(document.pointerLockElement){const Mt=e.sens*.002;c.current.yaw=(c.current.yaw||0)-ft.movementX*Mt,c.current.pitch=Math.max(-1.4,Math.min(1.4,(c.current.pitch||0)+ft.movementY*Mt))}},Z=()=>{var ft;!document.pointerLockElement&&o===Mn.PLAYING?(ft=d.current)==null||ft.requestPointerLock():document.pointerLockElement&&(c.current.firing=!0)},mt=()=>c.current.firing=!1;document.addEventListener("keydown",ft=>X(ft,!0)),document.addEventListener("keyup",ft=>X(ft,!1)),document.addEventListener("mousemove",V),document.addEventListener("mousedown",Z),document.addEventListener("mouseup",mt);const yt=(ft,Mt)=>{m.v1.copy(ft.position).add(m.v2.set(0,1.5,0)),Mt?C.getWorldDirection(m.v3):v.current&&m.v3.subVectors(v.current.position,ft.position).normalize();const Et=g.current.tracersPool.find(Wt=>!Wt.visible);Et&&(Et.visible=!0,Et.position.copy(m.v1),g.current.activeTracers.push({mesh:Et,velX:m.v3.x*100,velY:m.v3.y*100,velZ:m.v3.z*100,life:.5})),m.raycaster.set(m.v1,m.v3);const Ut=Mt?x.current.map(Wt=>Wt.userData.limbs.hitbox):v.current?[v.current.userData.limbs.hitbox]:[],$t=m.raycaster.intersectObjects(Ut,!1);if($t.length>0&&$t[0].distance<100){const Wt=$t[0].object.parent;Wt&&(Wt.userData.hp-=34,Wt.userData.hpBar&&(Wt.userData.hpBar.scale.x=Math.max(0,Wt.userData.hp/100)),Wt.userData.hp<=0?Mt?(U.remove(Wt),x.current=x.current.filter(ve=>ve!==Wt),g.current.kills++,i({kills:g.current.kills}),x.current.length===0&&r(!0)):(i({health:0}),r(!1)):Mt||i({health:Wt.userData.hp}))}},H=(ft,Mt)=>{ft.userData.verticalVelocity-=jT*Mt,ft.position.y+=ft.userData.verticalVelocity*Mt,ft.position.y<0&&(ft.position.y=0,ft.userData.verticalVelocity=0,ft.userData.isGrounded=!0),m.v1.copy(ft.position).add(m.v2.set(0,1,0)),m.raycaster.set(m.v1,m.v3.set(0,-1,0));const Et=m.raycaster.intersectObjects(A.current);Et.length>0&&(ft.position.y=Et[0].point.y,ft.userData.verticalVelocity=0,ft.userData.isGrounded=!0)};let It;const Nt=()=>{if(o===Mn.PAUSED||o===Mn.GAMEOVER){o===Mn.PAUSED&&(N.render(U,C),It=requestAnimationFrame(Nt));return}const ft=Math.min(M.getDelta(),.1),Mt=g.current,Et=c.current;Mt.gameTime+=ft,Mt.zoneTimer>0?(Mt.zoneTimer-=ft,i({zoneTimer:Math.ceil(Mt.zoneTimer)})):(Mt.zoneRadius>10&&(Mt.zoneRadius-=2*ft),D.scale.set(Mt.zoneRadius/oi,1,Mt.zoneRadius/oi),i({isGasActive:!0}),et.position.length()>Mt.zoneRadius&&(Mt.health-=5*ft,i({health:Mt.health}),Mt.health<=0&&r(!1)));let Ut=Et.x,$t=Et.y;if(Mt.pcInput.forward&&($t-=1),Mt.pcInput.backward&&($t+=1),Mt.pcInput.left&&(Ut-=1),Mt.pcInput.right&&(Ut+=1),Ut!==0||$t!==0){const Ot=(Et.isSprinting?ZT:q_)*ft;m.v1.set(0,0,-1).applyQuaternion(C.quaternion),m.v1.y=0,m.v1.normalize(),m.v2.set(1,0,0).applyQuaternion(C.quaternion),m.v2.y=0,m.v2.normalize(),m.v3.copy(m.v1).multiplyScalar(-$t).add(m.v2.multiplyScalar(Ut)).normalize().multiplyScalar(Ot),m.v4.copy(et.position).add(m.v5.set(0,1,0)),m.v6.copy(m.v3).normalize(),m.raycaster.set(m.v4,m.v6),m.raycaster.intersectObjects(P,!0).length===0&&et.position.add(m.v3),m.v3.lengthSq()>1e-6&&(et.rotation.y=Math.atan2(m.v3.x,m.v3.z)),et.userData.limbs.legL.rotation.x=Math.sin(Mt.gameTime*15)*.8,et.userData.limbs.legR.rotation.x=Math.sin(Mt.gameTime*15+Math.PI)*.8}else et.userData.limbs.legL.rotation.x=0,et.userData.limbs.legR.rotation.x=0;Et.jump&&et.userData.isGrounded&&(et.userData.verticalVelocity=YT,et.userData.isGrounded=!1,Et.jump=!1),H(et,ft),Et.firing&&Mt.fireCooldown<=0&&(Mt.fireCooldown=.15,yt(et,!0)),Mt.fireCooldown>0&&(Mt.fireCooldown-=ft),x.current.forEach(Ot=>{H(Ot,ft);const Jt=Ot.position.distanceTo(et.position);Jt<50?(Ot.lookAt(et.position.x,Ot.position.y,et.position.z),Jt>5&&Ot.translateZ(Ot.userData.speed*ft),Math.random()<.02&&yt(Ot,!1)):(Ot.lookAt(Ot.userData.patrolTarget.x,Ot.position.y,Ot.userData.patrolTarget.z),Ot.translateZ(Ot.userData.speed*.6*ft),Ot.position.distanceTo(Ot.userData.patrolTarget)<2&&Ot.userData.patrolTarget.set((Math.random()-.5)*oi,0,(Math.random()-.5)*oi))});for(let Ot=Mt.activeTracers.length-1;Ot>=0;Ot--){const Jt=Mt.activeTracers[Ot];Jt.life-=ft,Jt.mesh.position.x+=Jt.velX*ft,Jt.mesh.position.y+=Jt.velY*ft,Jt.mesh.position.z+=Jt.velZ*ft,Jt.life<=0&&(Jt.mesh.visible=!1,Mt.activeTracers.splice(Ot,1))}S.current.forEach((Ot,Jt)=>{Ot.rotation.y+=2*ft,et.position.distanceTo(Ot.position)<2&&(Mt.health=Math.min(100,Mt.health+50),i({health:Mt.health}),U.remove(Ot),S.current.splice(Jt,1))});const Wt=Et.isADS?2:5,ve=et.position.y+1.8;m.v1.set(et.position.x,ve,et.position.z),m.v2.set(et.position.x+Math.sin(Et.yaw||0)*Math.cos(Et.pitch||-.2)*Wt,ve+Math.sin(Et.pitch||-.2)*Wt,et.position.z+Math.cos(Et.yaw||0)*Math.cos(Et.pitch||-.2)*Wt),m.v3.subVectors(m.v2,m.v1).normalize(),m.raycaster.set(m.v1,m.v3);const xe=m.raycaster.intersectObjects([T.current,...P],!0);xe.length>0&&xe[0].distance<Wt?C.position.copy(xe[0].point.sub(m.v3.multiplyScalar(.2))):C.position.copy(m.v2),C.lookAt(m.v1),i({alive:x.current.length+1}),N.render(U,C),It=requestAnimationFrame(Nt)};requestAnimationFrame(Nt);const Rt=()=>{C.aspect=window.innerWidth/window.innerHeight,C.updateProjectionMatrix(),N.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",Rt),()=>{cancelAnimationFrame(It),window.removeEventListener("resize",Rt),document.removeEventListener("keydown",ft=>X(ft,!0)),document.removeEventListener("keyup",ft=>X(ft,!1)),document.removeEventListener("mousemove",V),document.removeEventListener("mousedown",Z),document.removeEventListener("mouseup",mt),d.current&&(d.current.innerHTML="")}},[o]),St.jsx("div",{ref:d,className:"w-full h-full"})},QT=({gameState:o,stats:e,settings:i,setSettings:r,onTogglePause:l,inputRef:c})=>{const[d,h]=$e.useState({x:0,y:0}),[g,p]=$e.useState(!1),v=$e.useRef(null),x=$e.useRef(null),S=$e.useRef(null),y=o===Mn.PAUSED,A=P=>{const $=P.touches[0],b=P.currentTarget.getBoundingClientRect(),O=b.left+b.width/2,ht=b.top+b.height/2;$.clientX<window.innerWidth/2&&$.clientY>window.innerHeight/2&&(p(!0),x.current={x:$.clientX,y:$.clientY},M($.clientX,$.clientY,O,ht,b.width/2))},T=P=>{if(!g||!x.current)return;const $=P.touches[0],b=P.currentTarget.getBoundingClientRect(),O=b.left+b.width/2,ht=b.top+b.height/2;M($.clientX,$.clientY,O,ht,b.width/2)},M=(P,$,b,O,ht)=>{const st=P-b,Y=$-O,at=Math.min(Math.sqrt(st*st+Y*Y),ht),rt=Math.atan2(Y,st),F=Math.cos(rt)*at,W=Math.sin(rt)*at;h({x:F,y:W}),c.current.x=F/ht,c.current.y=W/ht},m=()=>{p(!1),h({x:0,y:0}),c.current.x=0,c.current.y=0},U=P=>{for(let $=0;$<P.touches.length;$++){const b=P.touches[$];if(b.clientX>window.innerWidth/2){S.current={x:b.clientX,y:b.clientY};break}}},C=P=>{if(S.current)for(let $=0;$<P.touches.length;$++){const b=P.touches[$];if(b.clientX>window.innerWidth/2){const O=b.clientX-S.current.x,ht=b.clientY-S.current.y;c.current.yaw=(c.current.yaw||0)-O*.005*i.sens,c.current.pitch=(c.current.pitch||0)+ht*.005*i.sens,S.current={x:b.clientX,y:b.clientY};break}}},N=e.weapons&&e.weapons[e.currentWeapon||0],z={[fr.RIFLE]:"fa-gun",[fr.SHOTGUN]:"fa-bullseye",[fr.SNIPER]:"fa-crosshairs",[fr.PISTOL]:"fa-circle-dot",[fr.SMG]:"fa-burst"},I=e.armor.level===3?"text-yellow-400":e.armor.level===2?"text-blue-400":"text-green-400";return St.jsxs("div",{className:"absolute inset-0 pointer-events-none text-white select-none overflow-hidden",onTouchStart:P=>{U(P)},onTouchMove:P=>{C(P)},children:[St.jsx("div",{className:"pointer-events-auto absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full border-2 border-white/30 backdrop-blur-sm touch-none",onTouchStart:A,onTouchMove:T,onTouchEnd:m,ref:v,children:St.jsx("div",{className:"absolute w-16 h-16 bg-white/50 rounded-full shadow-lg",style:{left:"50%",top:"50%",transform:`translate(calc(-50% + ${d.x}px), calc(-50% + ${d.y}px))`}})}),St.jsxs("div",{className:"absolute top-0 inset-x-0 p-5 flex justify-between items-start bg-gradient-to-b from-black/80 to-transparent",children:[St.jsxs("div",{className:"flex gap-4 items-center",children:[St.jsxs("div",{className:"w-28 h-28 rounded-full border-4 border-cyan-500/40 bg-black/60 backdrop-blur-2xl relative overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.3)]",children:[St.jsxs("div",{className:"absolute inset-0 flex items-center justify-center opacity-30",children:[St.jsx("div",{className:"w-full h-[1px] bg-cyan-400"}),St.jsx("div",{className:"w-[1px] h-full bg-cyan-400"})]}),St.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-400 rounded-full shadow-[0_0_15px_#facc15] z-10 animate-pulse border-2 border-white"}),St.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-[conic-gradient(from_0deg,transparent,rgba(6,182,212,0.2),transparent)] animate-[spin_3s_linear_infinite]"})]}),St.jsx("button",{className:"pointer-events-auto w-20 h-20 bg-red-500/50 rounded-full flex items-center justify-center border-4 border-red-400 active:scale-90 active:bg-red-500 transition-all absolute bottom-24 right-10 shadow-[0_0_30px_rgba(239,68,68,0.5)] z-50",onTouchStart:()=>{c.current.firing=!0},onTouchEnd:()=>{c.current.firing=!1},children:St.jsx("i",{className:"fas fa-crosshairs text-3xl"})}),St.jsx("button",{className:"pointer-events-auto w-14 h-14 bg-white/10 rounded-3xl flex items-center justify-center border border-white/20 active:scale-90 transition-transform",onClick:l,children:St.jsx("i",{className:"fas fa-th-large text-xl"})})]}),St.jsxs("div",{className:"absolute left-1/2 -translate-x-1/2 top-8 flex flex-col items-center gap-1",children:[St.jsx("div",{className:`px-10 py-3 rounded-full border-2 backdrop-blur-xl transition-all shadow-2xl ${e.zoneTimer<10?"bg-red-600/60 border-red-500 animate-pulse":"bg-black/60 border-cyan-500/50"}`,children:St.jsxs("span",{className:"text-xl font-black italic tracking-widest uppercase",children:["Zona: ",e.zoneTimer,"s"]})}),e.zoneTimer===0&&St.jsx("span",{className:"text-[10px] font-bold text-cyan-400 uppercase tracking-[0.4em] animate-pulse",children:"Encolhendo..."})]}),St.jsxs("div",{className:"flex flex-col items-end gap-3",children:[St.jsxs("div",{className:"flex gap-3",children:[St.jsxs("div",{className:"bg-black/60 px-6 py-2 rounded-2xl border border-white/10 text-right backdrop-blur-md",children:[St.jsx("div",{className:"text-[10px] font-black uppercase text-red-500 tracking-tighter mb-1",children:"Vivos"}),St.jsx("div",{className:"text-3xl font-black italic tracking-tighter leading-none",children:e.alive})]}),St.jsxs("div",{className:"bg-black/60 px-6 py-2 rounded-2xl border border-white/10 text-right backdrop-blur-md",children:[St.jsx("div",{className:"text-[10px] font-black uppercase text-yellow-500 tracking-tighter mb-1",children:"Kills"}),St.jsx("div",{className:"text-3xl font-black italic tracking-tighter leading-none",children:e.kills})]})]}),e.kills>0&&St.jsxs("div",{className:"kill-msg bg-yellow-400 text-slate-950 px-5 py-2 rounded-l-2xl text-xs font-black uppercase italic border-l-8 border-slate-900 shadow-xl",children:["Você abateu BOT_#",100+e.kills]})]})]}),St.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none",children:St.jsxs("div",{className:"relative w-12 h-12 flex items-center justify-center opacity-80",children:[St.jsx("div",{className:"absolute w-[2px] h-3 bg-red-500 top-0"}),St.jsx("div",{className:"absolute w-[2px] h-3 bg-red-500 bottom-0"}),St.jsx("div",{className:"absolute w-3 h-[2px] bg-red-500 left-0"}),St.jsx("div",{className:"absolute w-3 h-[2px] bg-red-500 right-0"}),St.jsx("div",{className:"w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_10px_red]"})]})}),St.jsxs("div",{className:"absolute bottom-32 left-1/2 -translate-x-1/2 w-[28rem]",children:[St.jsxs("div",{className:"flex justify-between items-end text-[12px] font-black uppercase px-4 mb-2 drop-shadow-md",children:[St.jsxs("span",{className:`flex items-center gap-2 ${I}`,children:[St.jsx("i",{className:"fas fa-shield-alt"})," Armadura Nv.",e.armor.level]}),St.jsx("span",{className:"text-2xl italic tracking-tighter",children:Math.ceil(e.armor.durability)})]}),St.jsx("div",{className:"h-4 bg-black/80 rounded-full border-2 border-white/10 overflow-hidden p-[3px] shadow-lg mb-3",children:St.jsx("div",{className:`h-full rounded-full transition-all duration-300 ${e.armor.level===3?"bg-gradient-to-r from-yellow-500 to-yellow-300":e.armor.level===2?"bg-gradient-to-r from-blue-500 to-blue-300":"bg-gradient-to-r from-green-500 to-green-300"}`,style:{width:`${e.armor.durability/e.armor.maxDurability*100}%`}})}),St.jsxs("div",{className:"flex justify-between items-end text-[12px] font-black uppercase px-4 mb-3 drop-shadow-md",children:[St.jsxs("span",{className:"text-red-400 flex items-center gap-2",children:[St.jsx("i",{className:"fas fa-heart"})," Vida"]}),St.jsxs("span",{className:"text-3xl italic tracking-tighter",children:[Math.ceil(e.health),"%"]})]}),St.jsx("div",{className:"h-6 bg-black/80 rounded-full border-2 border-white/10 overflow-hidden p-[4px] shadow-[0_10px_40px_rgba(0,0,0,0.5)]",children:St.jsx("div",{className:`h-full rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.3)] ${e.health<35?"bg-gradient-to-r from-red-600 via-red-500 to-red-400":"bg-gradient-to-r from-green-500 via-green-400 to-emerald-400"}`,style:{width:`${e.health}%`}})})]}),N&&St.jsxs("div",{className:"absolute bottom-12 right-8 bg-black/70 backdrop-blur-xl px-6 py-4 rounded-3xl border-2 border-white/20 shadow-2xl",children:[St.jsxs("div",{className:"flex items-center gap-4",children:[St.jsx("i",{className:`fas ${z[N.type]} text-4xl text-yellow-400`}),St.jsxs("div",{children:[St.jsx("div",{className:"text-xs font-bold text-white/40 uppercase tracking-wider",children:N.name}),St.jsxs("div",{className:"text-4xl font-black italic tracking-tight",children:[N.currentAmmo," ",St.jsxs("span",{className:"text-xl text-white/40",children:["/ ",N.reserveAmmo]})]})]})]}),e.weapons.length>1&&St.jsx("div",{className:"text-[10px] text-white/30 uppercase text-center mt-2 tracking-widest",children:"Arraste para trocar"})]}),y&&St.jsx("div",{className:"absolute inset-0 pointer-events-auto bg-black/95 backdrop-blur-3xl z-[100] flex items-center justify-center p-10",children:St.jsxs("div",{className:"w-full max-w-md space-y-12 p-16 bg-white/5 border-2 border-white/10 rounded-[5rem] text-center shadow-2xl relative overflow-hidden",children:[St.jsx("div",{className:"absolute -top-32 -left-32 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px]"}),St.jsx("h2",{className:"text-7xl font-black italic text-yellow-500 uppercase tracking-tighter",children:"Ajustes"}),St.jsxs("div",{className:"space-y-10",children:[St.jsxs("div",{className:"space-y-4",children:[St.jsxs("div",{className:"flex justify-between text-sm font-black text-white/40 uppercase tracking-widest",children:["Sensibilidade ",St.jsxs("span",{className:"text-yellow-500 text-xl",children:[i.sens,"x"]})]}),St.jsx("input",{type:"range",min:"0.1",max:"5",step:"0.1",value:i.sens,onChange:P=>r({...i,sens:parseFloat(P.target.value)}),className:"w-full h-3 bg-white/10 rounded-full appearance-none cursor-pointer"})]}),St.jsxs("div",{className:"space-y-4",children:[St.jsxs("div",{className:"flex justify-between text-sm font-black text-white/40 uppercase tracking-widest",children:["Qualidade ",St.jsx("span",{className:"text-yellow-500 text-xl",children:i.graphicsQuality})]}),St.jsx("div",{className:"grid grid-cols-4 gap-2",children:["low","medium","high","ultra"].map(P=>St.jsx("button",{onClick:()=>r({...i,graphicsQuality:P}),className:`py-2 rounded-xl text-[10px] font-black uppercase transition-all ${i.graphicsQuality===P?"bg-yellow-500 text-slate-950":"bg-white/5 text-white/40"}`,children:P},P))})]})]}),St.jsx("button",{className:"w-full py-10 bg-yellow-500 text-slate-950 font-black rounded-[3rem] uppercase italic text-4xl active:scale-95 shadow-2xl shadow-yellow-500/30 transition-transform",onClick:l,children:"Continuar"}),St.jsx("button",{className:"w-full py-5 text-red-500/40 text-xs font-black uppercase tracking-[0.6em] hover:text-red-500 transition-colors",onClick:()=>window.location.reload(),children:"Desistir da Partida"})]})})]})},JT=({onStart:o,settings:e,setSettings:i})=>St.jsxs("div",{className:"absolute inset-0 z-[200] flex flex-col items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 via-slate-950 to-black overflow-y-auto",children:[St.jsxs("div",{className:"text-center mb-12 animate-in fade-in zoom-in duration-700",children:[St.jsx("h1",{className:"text-7xl md:text-8xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 drop-shadow-[0_0_30px_rgba(251,191,36,0.3)]",children:"BATTLE CANAÃ"}),St.jsx("p",{className:"text-blue-300 text-sm uppercase tracking-[0.3em] font-bold mt-2",children:"Remastered Edition"})]}),St.jsxs("div",{className:"w-full max-w-sm bg-white/5 backdrop-blur-2xl p-8 rounded-[2rem] border border-white/10 shadow-2xl mb-12 space-y-6",children:[St.jsxs("div",{className:"flex items-center gap-3 text-white/80 border-b border-white/10 pb-4",children:[St.jsx("i",{className:"fas fa-sliders-h text-yellow-500"}),St.jsx("span",{className:"font-bold text-sm uppercase tracking-widest",children:"Partida Rápida"})]}),St.jsxs("div",{className:"space-y-4",children:[St.jsxs("div",{className:"space-y-2",children:[St.jsx("label",{className:"text-[10px] font-black text-white/40 uppercase",children:"Jogadores Bots"}),St.jsx("input",{type:"range",min:"5",max:"50",step:"5",value:e.botCount,onChange:r=>i({...e,botCount:parseInt(r.target.value)}),className:"w-full"}),St.jsxs("div",{className:"text-right text-xs font-bold text-yellow-500",children:[e.botCount," INIMIGOS"]})]}),St.jsxs("div",{className:"space-y-2",children:[St.jsx("label",{className:"text-[10px] font-black text-white/40 uppercase tracking-widest",children:"Dificuldade"}),St.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","normal","hard"].map(r=>St.jsx("button",{onClick:()=>i({...e,difficulty:r}),className:`py-2 rounded-xl text-[10px] font-black uppercase transition-all ${e.difficulty===r?"bg-yellow-500 text-slate-950":"bg-white/5 text-white/40"}`,children:r==="easy"?"Fácil":r==="normal"?"Médio":"Hard"},r))})]})]})]}),St.jsx("button",{onClick:o,className:"group relative px-16 py-6 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-black text-3xl rounded-3xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(251,191,36,0.4)]",children:St.jsxs("span",{className:"flex items-center gap-4 italic uppercase",children:[St.jsx("i",{className:"fas fa-parachute-box animate-bounce"})," Cair na Praça"]})}),St.jsxs("div",{className:"mt-12 flex gap-8 text-white/20 text-[10px] font-black uppercase tracking-[0.2em]",children:[St.jsx("span",{children:"Versão 2.0.0"}),St.jsx("span",{children:"Canaã Studio"}),St.jsx("span",{children:"High Performance"})]})]}),$T=({stats:o,onRestart:e})=>{const i=o.alive===1;return St.jsxs("div",{className:"absolute inset-0 z-[300] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md p-6",children:[St.jsxs("div",{className:"text-center mb-12 animate-in fade-in slide-in-from-bottom duration-1000",children:[St.jsx("h1",{className:`text-8xl font-black italic uppercase drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] ${i?"text-yellow-500":"text-red-600"}`,children:i?"BOOYAH!":"ELIMINADO"}),St.jsx("p",{className:"text-white/40 font-bold uppercase tracking-[0.5em] mt-4",children:"A partida terminou"})]}),St.jsxs("div",{className:"grid grid-cols-2 gap-6 w-full max-w-sm mb-16",children:[St.jsxs("div",{className:"bg-white/5 p-6 rounded-[2rem] border border-white/10 text-center shadow-2xl",children:[St.jsx("div",{className:"text-[10px] text-white/30 uppercase font-black tracking-widest mb-1",children:"Abates"}),St.jsx("div",{className:"text-5xl font-black italic",children:o.kills})]}),St.jsxs("div",{className:"bg-white/5 p-6 rounded-[2rem] border border-white/10 text-center shadow-2xl",children:[St.jsx("div",{className:"text-[10px] text-white/30 uppercase font-black tracking-widest mb-1",children:"Rank"}),St.jsxs("div",{className:"text-5xl font-black italic text-yellow-500",children:["#",o.alive]})]})]}),St.jsx("button",{onClick:e,className:"px-16 py-6 bg-white text-slate-950 font-black rounded-3xl hover:bg-slate-200 transition-all hover:scale-105 active:scale-95 text-2xl uppercase italic tracking-tighter",children:"Tentar Novamente"})]})},t1=()=>{const[o,e]=$e.useState(Mn.START),[i,r]=$e.useState({sens:1,volume:.5,fov:75,btnScale:1,botCount:15,difficulty:"normal",graphicsQuality:"high"}),[l,c]=$e.useState({health:100,armor:{level:1,durability:50,maxDurability:50},kills:0,alive:16,zoneTimer:60,isGasActive:!1,currentWeapon:0,weapons:[],grenades:new Map([["explosive",{type:"explosive",damage:80,radius:15,count:3}],["smoke",{type:"smoke",damage:0,radius:10,count:2}]]),activePowerUps:[]}),d=$e.useRef({x:0,y:0,yaw:0,pitch:0,firing:!1,isSprinting:!1,isADS:!1}),h=p=>{c(v=>({...v,...p}))},g=p=>{e(Mn.GAMEOVER)};return St.jsxs("div",{className:"relative w-full h-full bg-slate-950 overflow-hidden",children:[St.jsx(KT,{gameState:o,settings:i,onUpdateStats:h,onGameOver:g,inputRef:d}),o===Mn.START&&St.jsx(JT,{onStart:()=>e(Mn.PLAYING),settings:i,setSettings:r}),(o===Mn.PLAYING||o===Mn.PAUSED)&&St.jsx(QT,{gameState:o,stats:l,settings:i,setSettings:r,onTogglePause:()=>e(p=>p===Mn.PAUSED?Mn.PLAYING:Mn.PAUSED),inputRef:d}),o===Mn.GAMEOVER&&St.jsx($T,{stats:l,onRestart:()=>window.location.reload()})]})},j_=document.getElementById("root");j_&&Fx.createRoot(j_).render(St.jsx(t1,{}));
