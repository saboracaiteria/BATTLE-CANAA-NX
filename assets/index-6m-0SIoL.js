(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function Tx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Ef={exports:{}},po={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pg;function Ax(){if(pg)return po;pg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return po.Fragment=e,po.jsx=i,po.jsxs=i,po}var mg;function wx(){return mg||(mg=1,Ef.exports=Ax()),Ef.exports}var ct=wx(),bf={exports:{}},mo={},Tf={exports:{}},Af={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gg;function Rx(){return gg||(gg=1,(function(o){function e(I,X){var $=I.length;I.push(X);t:for(;0<$;){var xt=$-1>>>1,dt=I[xt];if(0<l(dt,X))I[xt]=X,I[$]=dt,$=xt;else break t}}function i(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var X=I[0],$=I.pop();if($!==X){I[0]=$;t:for(var xt=0,dt=I.length,P=dt>>>1;xt<P;){var k=2*(xt+1)-1,V=I[k],J=k+1,gt=I[J];if(0>l(V,$))J<dt&&0>l(gt,V)?(I[xt]=gt,I[J]=$,xt=J):(I[xt]=V,I[k]=$,xt=k);else if(J<dt&&0>l(gt,$))I[xt]=gt,I[J]=$,xt=J;else break t}}return X}function l(I,X){var $=I.sortIndex-X.sortIndex;return $!==0?$:I.id-X.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],v=1,x=null,S=3,y=!1,A=!1,T=!1,M=!1,g=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function U(I){for(var X=i(p);X!==null;){if(X.callback===null)r(p);else if(X.startTime<=I)r(p),X.sortIndex=X.expirationTime,e(m,X);else break;X=i(p)}}function z(I){if(T=!1,U(I),!A)if(i(m)!==null)A=!0,H||(H=!0,Z());else{var X=i(p);X!==null&&rt(z,X.startTime-I)}}var H=!1,O=-1,q=5,E=-1;function D(){return M?!0:!(o.unstable_now()-E<q)}function ut(){if(M=!1,H){var I=o.unstable_now();E=I;var X=!0;try{t:{A=!1,T&&(T=!1,N(O),O=-1),y=!0;var $=S;try{e:{for(U(I),x=i(m);x!==null&&!(x.expirationTime>I&&D());){var xt=x.callback;if(typeof xt=="function"){x.callback=null,S=x.priorityLevel;var dt=xt(x.expirationTime<=I);if(I=o.unstable_now(),typeof dt=="function"){x.callback=dt,U(I),X=!0;break e}x===i(m)&&r(m),U(I)}else r(m);x=i(m)}if(x!==null)X=!0;else{var P=i(p);P!==null&&rt(z,P.startTime-I),X=!1}}break t}finally{x=null,S=$,y=!1}X=void 0}}finally{X?Z():H=!1}}}var Z;if(typeof C=="function")Z=function(){C(ut)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,at=Q.port2;Q.port1.onmessage=ut,Z=function(){at.postMessage(null)}}else Z=function(){g(ut,0)};function rt(I,X){O=g(function(){I(o.unstable_now())},X)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(I){I.callback=null},o.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<I?Math.floor(1e3/I):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(I){switch(S){case 1:case 2:case 3:var X=3;break;default:X=S}var $=S;S=X;try{return I()}finally{S=$}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(I,X){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var $=S;S=I;try{return X()}finally{S=$}},o.unstable_scheduleCallback=function(I,X,$){var xt=o.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?xt+$:xt):$=xt,I){case 1:var dt=-1;break;case 2:dt=250;break;case 5:dt=1073741823;break;case 4:dt=1e4;break;default:dt=5e3}return dt=$+dt,I={id:v++,callback:X,priorityLevel:I,startTime:$,expirationTime:dt,sortIndex:-1},$>xt?(I.sortIndex=$,e(p,I),i(m)===null&&I===i(p)&&(T?(N(O),O=-1):T=!0,rt(z,$-xt))):(I.sortIndex=dt,e(m,I),A||y||(A=!0,H||(H=!0,Z()))),I},o.unstable_shouldYield=D,o.unstable_wrapCallback=function(I){var X=S;return function(){var $=S;S=X;try{return I.apply(this,arguments)}finally{S=$}}}})(Af)),Af}var _g;function Cx(){return _g||(_g=1,Tf.exports=Rx()),Tf.exports}var wf={exports:{}},Jt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vg;function Lx(){if(vg)return Jt;vg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),S=Symbol.iterator;function y(P){return P===null||typeof P!="object"?null:(P=S&&P[S]||P["@@iterator"],typeof P=="function"?P:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function g(P,k,V){this.props=P,this.context=k,this.refs=M,this.updater=V||A}g.prototype.isReactComponent={},g.prototype.setState=function(P,k){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,k,"setState")},g.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function N(){}N.prototype=g.prototype;function C(P,k,V){this.props=P,this.context=k,this.refs=M,this.updater=V||A}var U=C.prototype=new N;U.constructor=C,T(U,g.prototype),U.isPureReactComponent=!0;var z=Array.isArray;function H(){}var O={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function E(P,k,V){var J=V.ref;return{$$typeof:o,type:P,key:k,ref:J!==void 0?J:null,props:V}}function D(P,k){return E(P.type,k,P.props)}function ut(P){return typeof P=="object"&&P!==null&&P.$$typeof===o}function Z(P){var k={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(V){return k[V]})}var Q=/\/+/g;function at(P,k){return typeof P=="object"&&P!==null&&P.key!=null?Z(""+P.key):k.toString(36)}function rt(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(H,H):(P.status="pending",P.then(function(k){P.status==="pending"&&(P.status="fulfilled",P.value=k)},function(k){P.status==="pending"&&(P.status="rejected",P.reason=k)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function I(P,k,V,J,gt){var st=typeof P;(st==="undefined"||st==="boolean")&&(P=null);var R=!1;if(P===null)R=!0;else switch(st){case"bigint":case"string":case"number":R=!0;break;case"object":switch(P.$$typeof){case o:case e:R=!0;break;case v:return R=P._init,I(R(P._payload),k,V,J,gt)}}if(R)return gt=gt(P),R=J===""?"."+at(P,0):J,z(gt)?(V="",R!=null&&(V=R.replace(Q,"$&/")+"/"),I(gt,k,V,"",function(St){return St})):gt!=null&&(ut(gt)&&(gt=D(gt,V+(gt.key==null||P&&P.key===gt.key?"":(""+gt.key).replace(Q,"$&/")+"/")+R)),k.push(gt)),1;R=0;var yt=J===""?".":J+":";if(z(P))for(var Et=0;Et<P.length;Et++)J=P[Et],st=yt+at(J,Et),R+=I(J,k,V,st,gt);else if(Et=y(P),typeof Et=="function")for(P=Et.call(P),Et=0;!(J=P.next()).done;)J=J.value,st=yt+at(J,Et++),R+=I(J,k,V,st,gt);else if(st==="object"){if(typeof P.then=="function")return I(rt(P),k,V,J,gt);throw k=String(P),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return R}function X(P,k,V){if(P==null)return P;var J=[],gt=0;return I(P,J,"","",function(st){return k.call(V,st,gt++)}),J}function $(P){if(P._status===-1){var k=P._result;k=k(),k.then(function(V){(P._status===0||P._status===-1)&&(P._status=1,P._result=V)},function(V){(P._status===0||P._status===-1)&&(P._status=2,P._result=V)}),P._status===-1&&(P._status=0,P._result=k)}if(P._status===1)return P._result.default;throw P._result}var xt=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},dt={map:X,forEach:function(P,k,V){X(P,function(){k.apply(this,arguments)},V)},count:function(P){var k=0;return X(P,function(){k++}),k},toArray:function(P){return X(P,function(k){return k})||[]},only:function(P){if(!ut(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return Jt.Activity=x,Jt.Children=dt,Jt.Component=g,Jt.Fragment=i,Jt.Profiler=l,Jt.PureComponent=C,Jt.StrictMode=r,Jt.Suspense=m,Jt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,Jt.__COMPILER_RUNTIME={__proto__:null,c:function(P){return O.H.useMemoCache(P)}},Jt.cache=function(P){return function(){return P.apply(null,arguments)}},Jt.cacheSignal=function(){return null},Jt.cloneElement=function(P,k,V){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var J=T({},P.props),gt=P.key;if(k!=null)for(st in k.key!==void 0&&(gt=""+k.key),k)!q.call(k,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&k.ref===void 0||(J[st]=k[st]);var st=arguments.length-2;if(st===1)J.children=V;else if(1<st){for(var R=Array(st),yt=0;yt<st;yt++)R[yt]=arguments[yt+2];J.children=R}return E(P.type,gt,J)},Jt.createContext=function(P){return P={$$typeof:d,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:u,_context:P},P},Jt.createElement=function(P,k,V){var J,gt={},st=null;if(k!=null)for(J in k.key!==void 0&&(st=""+k.key),k)q.call(k,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(gt[J]=k[J]);var R=arguments.length-2;if(R===1)gt.children=V;else if(1<R){for(var yt=Array(R),Et=0;Et<R;Et++)yt[Et]=arguments[Et+2];gt.children=yt}if(P&&P.defaultProps)for(J in R=P.defaultProps,R)gt[J]===void 0&&(gt[J]=R[J]);return E(P,st,gt)},Jt.createRef=function(){return{current:null}},Jt.forwardRef=function(P){return{$$typeof:h,render:P}},Jt.isValidElement=ut,Jt.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:$}},Jt.memo=function(P,k){return{$$typeof:p,type:P,compare:k===void 0?null:k}},Jt.startTransition=function(P){var k=O.T,V={};O.T=V;try{var J=P(),gt=O.S;gt!==null&&gt(V,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(H,xt)}catch(st){xt(st)}finally{k!==null&&V.types!==null&&(k.types=V.types),O.T=k}},Jt.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},Jt.use=function(P){return O.H.use(P)},Jt.useActionState=function(P,k,V){return O.H.useActionState(P,k,V)},Jt.useCallback=function(P,k){return O.H.useCallback(P,k)},Jt.useContext=function(P){return O.H.useContext(P)},Jt.useDebugValue=function(){},Jt.useDeferredValue=function(P,k){return O.H.useDeferredValue(P,k)},Jt.useEffect=function(P,k){return O.H.useEffect(P,k)},Jt.useEffectEvent=function(P){return O.H.useEffectEvent(P)},Jt.useId=function(){return O.H.useId()},Jt.useImperativeHandle=function(P,k,V){return O.H.useImperativeHandle(P,k,V)},Jt.useInsertionEffect=function(P,k){return O.H.useInsertionEffect(P,k)},Jt.useLayoutEffect=function(P,k){return O.H.useLayoutEffect(P,k)},Jt.useMemo=function(P,k){return O.H.useMemo(P,k)},Jt.useOptimistic=function(P,k){return O.H.useOptimistic(P,k)},Jt.useReducer=function(P,k,V){return O.H.useReducer(P,k,V)},Jt.useRef=function(P){return O.H.useRef(P)},Jt.useState=function(P){return O.H.useState(P)},Jt.useSyncExternalStore=function(P,k,V){return O.H.useSyncExternalStore(P,k,V)},Jt.useTransition=function(){return O.H.useTransition()},Jt.version="19.2.3",Jt}var xg;function _h(){return xg||(xg=1,wf.exports=Lx()),wf.exports}var Rf={exports:{}},xn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg;function Dx(){if(Sg)return xn;Sg=1;var o=_h();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:v}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return xn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,xn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,v)},xn.flushSync=function(m){var p=d.T,v=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=v,r.d.f()}},xn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},xn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},xn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,x=h(v,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:y}):v==="script"&&r.d.X(m,{crossOrigin:x,integrity:S,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},xn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},xn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,x=h(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},xn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},xn.requestFormReset=function(m){r.d.r(m)},xn.unstable_batchedUpdates=function(m,p){return m(p)},xn.useFormState=function(m,p,v){return d.H.useFormState(m,p,v)},xn.useFormStatus=function(){return d.H.useHostTransitionStatus()},xn.version="19.2.3",xn}var Mg;function Ux(){if(Mg)return Rf.exports;Mg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Rf.exports=Dx(),Rf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yg;function Nx(){if(yg)return mo;yg=1;var o=Cx(),e=_h(),i=Ux();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var _=!1,b=c.child;b;){if(b===a){_=!0,a=c,s=f;break}if(b===s){_=!0,s=c,a=f;break}b=b.sibling}if(!_){for(b=f.child;b;){if(b===a){_=!0,a=f,s=c;break}if(b===s){_=!0,s=f,a=c;break}b=b.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,S=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),C=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),ut=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=ut&&t[ut]||t["@@iterator"],typeof t=="function"?t:null)}var Q=Symbol.for("react.client.reference");function at(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Q?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case g:return"Profiler";case M:return"StrictMode";case z:return"Suspense";case H:return"SuspenseList";case E:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case C:return t.displayName||"Context";case N:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return n=t.displayName||null,n!==null?n:at(t.type)||"Memo";case q:n=t._payload,t=t._init;try{return at(t(n))}catch{}}return null}var rt=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},xt=[],dt=-1;function P(t){return{current:t}}function k(t){0>dt||(t.current=xt[dt],xt[dt]=null,dt--)}function V(t,n){dt++,xt[dt]=t.current,t.current=n}var J=P(null),gt=P(null),st=P(null),R=P(null);function yt(t,n){switch(V(st,n),V(gt,t),V(J,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Bm(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Bm(n),t=Fm(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}k(J),V(J,t)}function Et(){k(J),k(gt),k(st)}function St(t){t.memoizedState!==null&&V(R,t);var n=J.current,a=Fm(n,t.type);n!==a&&(V(gt,t),V(J,a))}function Dt(t){gt.current===t&&(k(J),k(gt)),R.current===t&&(k(R),co._currentValue=$)}var Zt,Ut;function It(t){if(Zt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Zt=n&&n[1]||"",Ut=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zt+t+Ut}var ce=!1;function Wt(t,n){if(!t||ce)return"";ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Mt=function(){throw Error()};if(Object.defineProperty(Mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Mt,[])}catch(ot){var nt=ot}Reflect.construct(t,[],Mt)}else{try{Mt.call()}catch(ot){nt=ot}t.call(Mt.prototype)}}else{try{throw Error()}catch(ot){nt=ot}(Mt=t())&&typeof Mt.catch=="function"&&Mt.catch(function(){})}}catch(ot){if(ot&&nt&&typeof ot.stack=="string")return[ot.stack,nt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),_=f[0],b=f[1];if(_&&b){var F=_.split(`
`),et=b.split(`
`);for(c=s=0;s<F.length&&!F[s].includes("DetermineComponentFrameRoot");)s++;for(;c<et.length&&!et[c].includes("DetermineComponentFrameRoot");)c++;if(s===F.length||c===et.length)for(s=F.length-1,c=et.length-1;1<=s&&0<=c&&F[s]!==et[c];)c--;for(;1<=s&&0<=c;s--,c--)if(F[s]!==et[c]){if(s!==1||c!==1)do if(s--,c--,0>c||F[s]!==et[c]){var mt=`
`+F[s].replace(" at new "," at ");return t.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",t.displayName)),mt}while(1<=s&&0<=c);break}}}finally{ce=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?It(a):""}function qt(t,n){switch(t.tag){case 26:case 27:case 5:return It(t.type);case 16:return It("Lazy");case 13:return t.child!==n&&n!==null?It("Suspense Fallback"):It("Suspense");case 19:return It("SuspenseList");case 0:case 15:return Wt(t.type,!1);case 11:return Wt(t.type.render,!1);case 1:return Wt(t.type,!0);case 31:return It("Activity");default:return""}}function ee(t){try{var n="",a=null;do n+=qt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var de=Object.prototype.hasOwnProperty,Le=o.unstable_scheduleCallback,Ge=o.unstable_cancelCallback,B=o.unstable_shouldYield,w=o.unstable_requestPaint,lt=o.unstable_now,Tt=o.unstable_getCurrentPriorityLevel,At=o.unstable_ImmediatePriority,Ct=o.unstable_UserBlockingPriority,jt=o.unstable_NormalPriority,Ot=o.unstable_LowPriority,_t=o.unstable_IdlePriority,Ht=o.log,kt=o.unstable_setDisableYieldValue,Gt=null,wt=null;function zt(t){if(typeof Ht=="function"&&kt(t),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(Gt,t)}catch{}}var Kt=Math.clz32?Math.clz32:W,we=Math.log,Ve=Math.LN2;function W(t){return t>>>=0,t===0?32:31-(we(t)/Ve|0)|0}var pt=256,bt=262144,Lt=4194304;function Pt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ye(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var b=s&134217727;return b!==0?(s=b&~f,s!==0?c=Pt(s):(_&=b,_!==0?c=Pt(_):a||(a=b&~t,a!==0&&(c=Pt(a))))):(b=s&~f,b!==0?c=Pt(b):_!==0?c=Pt(_):a||(a=s&~t,a!==0&&(c=Pt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Me(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function on(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ui(){var t=Lt;return Lt<<=1,(Lt&62914560)===0&&(Lt=4194304),t}function Pe(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ln(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Zn(t,n,a,s,c,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,F=t.expirationTimes,et=t.hiddenUpdates;for(a=_&~a;0<a;){var mt=31-Kt(a),Mt=1<<mt;b[mt]=0,F[mt]=-1;var nt=et[mt];if(nt!==null)for(et[mt]=null,mt=0;mt<nt.length;mt++){var ot=nt[mt];ot!==null&&(ot.lane&=-536870913)}a&=~Mt}s!==0&&za(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function za(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Kt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Er(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Kt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Co(t,n){var a=n&-n;return a=(a&42)!==0?1:br(a),(a&(t.suspendedLanes|n))!==0?0:a}function br(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Tr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function L(){var t=X.p;return t!==0?t:(t=window.event,t===void 0?32:og(t.type))}function it(t,n){var a=X.p;try{return X.p=t,n()}finally{X.p=a}}var ft=Math.random().toString(36).slice(2),Y="__reactFiber$"+ft,ht="__reactProps$"+ft,Ft="__reactContainer$"+ft,Xt="__reactEvents$"+ft,Qt="__reactListeners$"+ft,ne="__reactHandles$"+ft,se="__reactResources$"+ft,$t="__reactMarker$"+ft;function re(t){delete t[Y],delete t[ht],delete t[Xt],delete t[Qt],delete t[ne]}function ge(t){var n=t[Y];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ft]||a[Y]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Wm(t);t!==null;){if(a=t[Y])return a;t=Wm(t)}return n}t=a,a=t.parentNode}return null}function Xe(t){if(t=t[Y]||t[Ft]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function fn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Tn(t){var n=t[se];return n||(n=t[se]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function oe(t){t[$t]=!0}var ue=new Set,hs={};function ze(t,n){An(t,n),An(t+"Capture",n)}function An(t,n){for(hs[t]=n,t=0;t<n.length;t++)ue.add(n[t])}var Lo=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ia={},ds={};function hn(t){return de.call(ds,t)?!0:de.call(ia,t)?!1:Lo.test(t)?ds[t]=!0:(ia[t]=!0,!1)}function Kn(t,n,a){if(hn(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function aa(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function ke(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function vn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Do(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Uo(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function mc(t){if(!t._valueTracker){var n=Do(t)?"checked":"value";t._valueTracker=Uo(t,n,""+t[n])}}function Lh(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Do(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function No(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var x_=/[\n"\\]/g;function Qn(t){return t.replace(x_,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function gc(t,n,a,s,c,f,_,b){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+vn(n)):t.value!==""+vn(n)&&(t.value=""+vn(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?_c(t,_,vn(n)):a!=null?_c(t,_,vn(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+vn(b):t.removeAttribute("name")}function Dh(t,n,a,s,c,f,_,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){mc(t);return}a=a!=null?""+vn(a):"",n=n!=null?""+vn(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=b?t.checked:!!s,t.defaultChecked=!!s,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),mc(t)}function _c(t,n,a){n==="number"&&No(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ps(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+vn(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Uh(t,n,a){if(n!=null&&(n=""+vn(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+vn(a):""}function Nh(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(rt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=vn(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),mc(t)}function ms(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var S_=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Oh(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||S_.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function zh(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Oh(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Oh(t,f,n[f])}function vc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var M_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),y_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Oo(t){return y_.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Di(){}var xc=null;function Sc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gs=null,_s=null;function Ph(t){var n=Xe(t);if(n&&(t=n.stateNode)){var a=t[ht]||null;t:switch(t=n.stateNode,n.type){case"input":if(gc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Qn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[ht]||null;if(!c)throw Error(r(90));gc(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Lh(s)}break t;case"textarea":Uh(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ps(t,!!a.multiple,n,!1)}}}var Mc=!1;function Bh(t,n,a){if(Mc)return t(n,a);Mc=!0;try{var s=t(n);return s}finally{if(Mc=!1,(gs!==null||_s!==null)&&(Ml(),gs&&(n=gs,t=_s,_s=gs=null,Ph(n),t)))for(n=0;n<t.length;n++)Ph(t[n])}}function Ar(t,n){var a=t.stateNode;if(a===null)return null;var s=a[ht]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yc=!1;if(Ui)try{var wr={};Object.defineProperty(wr,"passive",{get:function(){yc=!0}}),window.addEventListener("test",wr,wr),window.removeEventListener("test",wr,wr)}catch{yc=!1}var sa=null,Ec=null,zo=null;function Fh(){if(zo)return zo;var t,n=Ec,a=n.length,s,c="value"in sa?sa.value:sa.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var _=a-t;for(s=1;s<=_&&n[a-s]===c[f-s];s++);return zo=c.slice(t,1<s?1-s:void 0)}function Po(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Bo(){return!0}function Ih(){return!1}function wn(t){function n(a,s,c,f,_){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Bo:Ih,this.isPropagationStopped=Ih,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Bo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Bo)},persist:function(){},isPersistent:Bo}),n}var Pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fo=wn(Pa),Rr=x({},Pa,{view:0,detail:0}),E_=wn(Rr),bc,Tc,Cr,Io=x({},Rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Cr&&(Cr&&t.type==="mousemove"?(bc=t.screenX-Cr.screenX,Tc=t.screenY-Cr.screenY):Tc=bc=0,Cr=t),bc)},movementY:function(t){return"movementY"in t?t.movementY:Tc}}),Hh=wn(Io),b_=x({},Io,{dataTransfer:0}),T_=wn(b_),A_=x({},Rr,{relatedTarget:0}),Ac=wn(A_),w_=x({},Pa,{animationName:0,elapsedTime:0,pseudoElement:0}),R_=wn(w_),C_=x({},Pa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),L_=wn(C_),D_=x({},Pa,{data:0}),Gh=wn(D_),U_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},N_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},O_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function z_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=O_[t])?!!n[t]:!1}function wc(){return z_}var P_=x({},Rr,{key:function(t){if(t.key){var n=U_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Po(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?N_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wc,charCode:function(t){return t.type==="keypress"?Po(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Po(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),B_=wn(P_),F_=x({},Io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vh=wn(F_),I_=x({},Rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wc}),H_=wn(I_),G_=x({},Pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),V_=wn(G_),k_=x({},Io,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),X_=wn(k_),W_=x({},Pa,{newState:0,oldState:0}),q_=wn(W_),j_=[9,13,27,32],Rc=Ui&&"CompositionEvent"in window,Lr=null;Ui&&"documentMode"in document&&(Lr=document.documentMode);var Y_=Ui&&"TextEvent"in window&&!Lr,kh=Ui&&(!Rc||Lr&&8<Lr&&11>=Lr),Xh=" ",Wh=!1;function qh(t,n){switch(t){case"keyup":return j_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vs=!1;function Z_(t,n){switch(t){case"compositionend":return jh(n);case"keypress":return n.which!==32?null:(Wh=!0,Xh);case"textInput":return t=n.data,t===Xh&&Wh?null:t;default:return null}}function K_(t,n){if(vs)return t==="compositionend"||!Rc&&qh(t,n)?(t=Fh(),zo=Ec=sa=null,vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return kh&&n.locale!=="ko"?null:n.data;default:return null}}var Q_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Q_[t.type]:n==="textarea"}function Zh(t,n,a,s){gs?_s?_s.push(s):_s=[s]:gs=s,n=Rl(n,"onChange"),0<n.length&&(a=new Fo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Dr=null,Ur=null;function J_(t){Dm(t,0)}function Ho(t){var n=fn(t);if(Lh(n))return t}function Kh(t,n){if(t==="change")return n}var Qh=!1;if(Ui){var Cc;if(Ui){var Lc="oninput"in document;if(!Lc){var Jh=document.createElement("div");Jh.setAttribute("oninput","return;"),Lc=typeof Jh.oninput=="function"}Cc=Lc}else Cc=!1;Qh=Cc&&(!document.documentMode||9<document.documentMode)}function $h(){Dr&&(Dr.detachEvent("onpropertychange",td),Ur=Dr=null)}function td(t){if(t.propertyName==="value"&&Ho(Ur)){var n=[];Zh(n,Ur,t,Sc(t)),Bh(J_,n)}}function $_(t,n,a){t==="focusin"?($h(),Dr=n,Ur=a,Dr.attachEvent("onpropertychange",td)):t==="focusout"&&$h()}function tv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ho(Ur)}function ev(t,n){if(t==="click")return Ho(n)}function nv(t,n){if(t==="input"||t==="change")return Ho(n)}function iv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Pn=typeof Object.is=="function"?Object.is:iv;function Nr(t,n){if(Pn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!de.call(n,c)||!Pn(t[c],n[c]))return!1}return!0}function ed(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nd(t,n){var a=ed(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=ed(a)}}function id(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?id(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function ad(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=No(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=No(t.document)}return n}function Dc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var av=Ui&&"documentMode"in document&&11>=document.documentMode,xs=null,Uc=null,Or=null,Nc=!1;function sd(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Nc||xs==null||xs!==No(s)||(s=xs,"selectionStart"in s&&Dc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Or&&Nr(Or,s)||(Or=s,s=Rl(Uc,"onSelect"),0<s.length&&(n=new Fo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=xs)))}function Ba(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ss={animationend:Ba("Animation","AnimationEnd"),animationiteration:Ba("Animation","AnimationIteration"),animationstart:Ba("Animation","AnimationStart"),transitionrun:Ba("Transition","TransitionRun"),transitionstart:Ba("Transition","TransitionStart"),transitioncancel:Ba("Transition","TransitionCancel"),transitionend:Ba("Transition","TransitionEnd")},Oc={},rd={};Ui&&(rd=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function Fa(t){if(Oc[t])return Oc[t];if(!Ss[t])return t;var n=Ss[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in rd)return Oc[t]=n[a];return t}var od=Fa("animationend"),ld=Fa("animationiteration"),cd=Fa("animationstart"),sv=Fa("transitionrun"),rv=Fa("transitionstart"),ov=Fa("transitioncancel"),ud=Fa("transitionend"),fd=new Map,zc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zc.push("scrollEnd");function fi(t,n){fd.set(t,n),ze(n,[t])}var Go=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Jn=[],Ms=0,Pc=0;function Vo(){for(var t=Ms,n=Pc=Ms=0;n<t;){var a=Jn[n];Jn[n++]=null;var s=Jn[n];Jn[n++]=null;var c=Jn[n];Jn[n++]=null;var f=Jn[n];if(Jn[n++]=null,s!==null&&c!==null){var _=s.pending;_===null?c.next=c:(c.next=_.next,_.next=c),s.pending=c}f!==0&&hd(a,c,f)}}function ko(t,n,a,s){Jn[Ms++]=t,Jn[Ms++]=n,Jn[Ms++]=a,Jn[Ms++]=s,Pc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Bc(t,n,a,s){return ko(t,n,a,s),Xo(t)}function Ia(t,n){return ko(t,null,null,n),Xo(t)}function hd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Kt(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function Xo(t){if(50<no)throw no=0,qu=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ys={};function lv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,n,a,s){return new lv(t,n,a,s)}function Fc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ni(t,n){var a=t.alternate;return a===null?(a=Bn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function dd(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Wo(t,n,a,s,c,f){var _=0;if(s=t,typeof t=="function")Fc(t)&&(_=1);else if(typeof t=="string")_=dx(t,a,J.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case E:return t=Bn(31,a,n,c),t.elementType=E,t.lanes=f,t;case T:return Ha(a.children,c,f,n);case M:_=8,c|=24;break;case g:return t=Bn(12,a,n,c|2),t.elementType=g,t.lanes=f,t;case z:return t=Bn(13,a,n,c),t.elementType=z,t.lanes=f,t;case H:return t=Bn(19,a,n,c),t.elementType=H,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:_=10;break t;case N:_=9;break t;case U:_=11;break t;case O:_=14;break t;case q:_=16,s=null;break t}_=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Bn(_,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function Ha(t,n,a,s){return t=Bn(7,t,s,n),t.lanes=a,t}function Ic(t,n,a){return t=Bn(6,t,null,n),t.lanes=a,t}function pd(t){var n=Bn(18,null,null,0);return n.stateNode=t,n}function Hc(t,n,a){return n=Bn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var md=new WeakMap;function $n(t,n){if(typeof t=="object"&&t!==null){var a=md.get(t);return a!==void 0?a:(n={value:t,source:n,stack:ee(n)},md.set(t,n),n)}return{value:t,source:n,stack:ee(n)}}var Es=[],bs=0,qo=null,zr=0,ti=[],ei=0,ra=null,Mi=1,yi="";function Oi(t,n){Es[bs++]=zr,Es[bs++]=qo,qo=t,zr=n}function gd(t,n,a){ti[ei++]=Mi,ti[ei++]=yi,ti[ei++]=ra,ra=t;var s=Mi;t=yi;var c=32-Kt(s)-1;s&=~(1<<c),a+=1;var f=32-Kt(n)+c;if(30<f){var _=c-c%5;f=(s&(1<<_)-1).toString(32),s>>=_,c-=_,Mi=1<<32-Kt(n)+c|a<<c|s,yi=f+t}else Mi=1<<f|a<<c|s,yi=t}function Gc(t){t.return!==null&&(Oi(t,1),gd(t,1,0))}function Vc(t){for(;t===qo;)qo=Es[--bs],Es[bs]=null,zr=Es[--bs],Es[bs]=null;for(;t===ra;)ra=ti[--ei],ti[ei]=null,yi=ti[--ei],ti[ei]=null,Mi=ti[--ei],ti[ei]=null}function _d(t,n){ti[ei++]=Mi,ti[ei++]=yi,ti[ei++]=ra,Mi=n.id,yi=n.overflow,ra=t}var dn=null,Be=null,_e=!1,oa=null,ni=!1,kc=Error(r(519));function la(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Pr($n(n,t)),kc}function vd(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[Y]=t,n[ht]=s,a){case"dialog":he("cancel",n),he("close",n);break;case"iframe":case"object":case"embed":he("load",n);break;case"video":case"audio":for(a=0;a<ao.length;a++)he(ao[a],n);break;case"source":he("error",n);break;case"img":case"image":case"link":he("error",n),he("load",n);break;case"details":he("toggle",n);break;case"input":he("invalid",n),Dh(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":he("invalid",n);break;case"textarea":he("invalid",n),Nh(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||zm(n.textContent,a)?(s.popover!=null&&(he("beforetoggle",n),he("toggle",n)),s.onScroll!=null&&he("scroll",n),s.onScrollEnd!=null&&he("scrollend",n),s.onClick!=null&&(n.onclick=Di),n=!0):n=!1,n||la(t,!0)}function xd(t){for(dn=t.return;dn;)switch(dn.tag){case 5:case 31:case 13:ni=!1;return;case 27:case 3:ni=!0;return;default:dn=dn.return}}function Ts(t){if(t!==dn)return!1;if(!_e)return xd(t),_e=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||lf(t.type,t.memoizedProps)),a=!a),a&&Be&&la(t),xd(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Be=Xm(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Be=Xm(t)}else n===27?(n=Be,ya(t.type)?(t=df,df=null,Be=t):Be=n):Be=dn?ai(t.stateNode.nextSibling):null;return!0}function Ga(){Be=dn=null,_e=!1}function Xc(){var t=oa;return t!==null&&(Dn===null?Dn=t:Dn.push.apply(Dn,t),oa=null),t}function Pr(t){oa===null?oa=[t]:oa.push(t)}var Wc=P(null),Va=null,zi=null;function ca(t,n,a){V(Wc,n._currentValue),n._currentValue=a}function Pi(t){t._currentValue=Wc.current,k(Wc)}function qc(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function jc(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var F=0;F<n.length;F++)if(b.context===n[F]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),qc(f.return,a,t),s||(_=null);break t}f=b.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),qc(_,a,t),_=null}else _=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===t){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function As(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var b=c.type;Pn(c.pendingProps.value,_.value)||(t!==null?t.push(b):t=[b])}}else if(c===R.current){if(_=c.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(co):t=[co])}c=c.return}t!==null&&jc(n,t,a,s),n.flags|=262144}function jo(t){for(t=t.firstContext;t!==null;){if(!Pn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ka(t){Va=t,zi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function pn(t){return Sd(Va,t)}function Yo(t,n){return Va===null&&ka(t),Sd(t,n)}function Sd(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},zi===null){if(t===null)throw Error(r(308));zi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else zi=zi.next=n;return a}var cv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},uv=o.unstable_scheduleCallback,fv=o.unstable_NormalPriority,Ze={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yc(){return{controller:new cv,data:new Map,refCount:0}}function Br(t){t.refCount--,t.refCount===0&&uv(fv,function(){t.controller.abort()})}var Fr=null,Zc=0,ws=0,Rs=null;function hv(t,n){if(Fr===null){var a=Fr=[];Zc=0,ws=Ju(),Rs={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Zc++,n.then(Md,Md),n}function Md(){if(--Zc===0&&Fr!==null){Rs!==null&&(Rs.status="fulfilled");var t=Fr;Fr=null,ws=0,Rs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function dv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var yd=I.S;I.S=function(t,n){sm=lt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&hv(t,n),yd!==null&&yd(t,n)};var Xa=P(null);function Kc(){var t=Xa.current;return t!==null?t:Oe.pooledCache}function Zo(t,n){n===null?V(Xa,Xa.current):V(Xa,n.pool)}function Ed(){var t=Kc();return t===null?null:{parent:Ze._currentValue,pool:t}}var Cs=Error(r(460)),Qc=Error(r(474)),Ko=Error(r(542)),Qo={then:function(){}};function bd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Td(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Di,Di),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,wd(t),t;default:if(typeof n.status=="string")n.then(Di,Di);else{if(t=Oe,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,wd(t),t}throw qa=n,Cs}}function Wa(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(qa=a,Cs):a}}var qa=null;function Ad(){if(qa===null)throw Error(r(459));var t=qa;return qa=null,t}function wd(t){if(t===Cs||t===Ko)throw Error(r(483))}var Ls=null,Ir=0;function Jo(t){var n=Ir;return Ir+=1,Ls===null&&(Ls=[]),Td(Ls,t,n)}function Hr(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function $o(t,n){throw n.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Rd(t){function n(j,G){if(t){var tt=j.deletions;tt===null?(j.deletions=[G],j.flags|=16):tt.push(G)}}function a(j,G){if(!t)return null;for(;G!==null;)n(j,G),G=G.sibling;return null}function s(j){for(var G=new Map;j!==null;)j.key!==null?G.set(j.key,j):G.set(j.index,j),j=j.sibling;return G}function c(j,G){return j=Ni(j,G),j.index=0,j.sibling=null,j}function f(j,G,tt){return j.index=tt,t?(tt=j.alternate,tt!==null?(tt=tt.index,tt<G?(j.flags|=67108866,G):tt):(j.flags|=67108866,G)):(j.flags|=1048576,G)}function _(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function b(j,G,tt,vt){return G===null||G.tag!==6?(G=Ic(tt,j.mode,vt),G.return=j,G):(G=c(G,tt),G.return=j,G)}function F(j,G,tt,vt){var Vt=tt.type;return Vt===T?mt(j,G,tt.props.children,vt,tt.key):G!==null&&(G.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===q&&Wa(Vt)===G.type)?(G=c(G,tt.props),Hr(G,tt),G.return=j,G):(G=Wo(tt.type,tt.key,tt.props,null,j.mode,vt),Hr(G,tt),G.return=j,G)}function et(j,G,tt,vt){return G===null||G.tag!==4||G.stateNode.containerInfo!==tt.containerInfo||G.stateNode.implementation!==tt.implementation?(G=Hc(tt,j.mode,vt),G.return=j,G):(G=c(G,tt.children||[]),G.return=j,G)}function mt(j,G,tt,vt,Vt){return G===null||G.tag!==7?(G=Ha(tt,j.mode,vt,Vt),G.return=j,G):(G=c(G,tt),G.return=j,G)}function Mt(j,G,tt){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=Ic(""+G,j.mode,tt),G.return=j,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case y:return tt=Wo(G.type,G.key,G.props,null,j.mode,tt),Hr(tt,G),tt.return=j,tt;case A:return G=Hc(G,j.mode,tt),G.return=j,G;case q:return G=Wa(G),Mt(j,G,tt)}if(rt(G)||Z(G))return G=Ha(G,j.mode,tt,null),G.return=j,G;if(typeof G.then=="function")return Mt(j,Jo(G),tt);if(G.$$typeof===C)return Mt(j,Yo(j,G),tt);$o(j,G)}return null}function nt(j,G,tt,vt){var Vt=G!==null?G.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return Vt!==null?null:b(j,G,""+tt,vt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case y:return tt.key===Vt?F(j,G,tt,vt):null;case A:return tt.key===Vt?et(j,G,tt,vt):null;case q:return tt=Wa(tt),nt(j,G,tt,vt)}if(rt(tt)||Z(tt))return Vt!==null?null:mt(j,G,tt,vt,null);if(typeof tt.then=="function")return nt(j,G,Jo(tt),vt);if(tt.$$typeof===C)return nt(j,G,Yo(j,tt),vt);$o(j,tt)}return null}function ot(j,G,tt,vt,Vt){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return j=j.get(tt)||null,b(G,j,""+vt,Vt);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case y:return j=j.get(vt.key===null?tt:vt.key)||null,F(G,j,vt,Vt);case A:return j=j.get(vt.key===null?tt:vt.key)||null,et(G,j,vt,Vt);case q:return vt=Wa(vt),ot(j,G,tt,vt,Vt)}if(rt(vt)||Z(vt))return j=j.get(tt)||null,mt(G,j,vt,Vt,null);if(typeof vt.then=="function")return ot(j,G,tt,Jo(vt),Vt);if(vt.$$typeof===C)return ot(j,G,tt,Yo(G,vt),Vt);$o(G,vt)}return null}function Nt(j,G,tt,vt){for(var Vt=null,Ee=null,Bt=G,ie=G=0,me=null;Bt!==null&&ie<tt.length;ie++){Bt.index>ie?(me=Bt,Bt=null):me=Bt.sibling;var be=nt(j,Bt,tt[ie],vt);if(be===null){Bt===null&&(Bt=me);break}t&&Bt&&be.alternate===null&&n(j,Bt),G=f(be,G,ie),Ee===null?Vt=be:Ee.sibling=be,Ee=be,Bt=me}if(ie===tt.length)return a(j,Bt),_e&&Oi(j,ie),Vt;if(Bt===null){for(;ie<tt.length;ie++)Bt=Mt(j,tt[ie],vt),Bt!==null&&(G=f(Bt,G,ie),Ee===null?Vt=Bt:Ee.sibling=Bt,Ee=Bt);return _e&&Oi(j,ie),Vt}for(Bt=s(Bt);ie<tt.length;ie++)me=ot(Bt,j,ie,tt[ie],vt),me!==null&&(t&&me.alternate!==null&&Bt.delete(me.key===null?ie:me.key),G=f(me,G,ie),Ee===null?Vt=me:Ee.sibling=me,Ee=me);return t&&Bt.forEach(function(wa){return n(j,wa)}),_e&&Oi(j,ie),Vt}function Yt(j,G,tt,vt){if(tt==null)throw Error(r(151));for(var Vt=null,Ee=null,Bt=G,ie=G=0,me=null,be=tt.next();Bt!==null&&!be.done;ie++,be=tt.next()){Bt.index>ie?(me=Bt,Bt=null):me=Bt.sibling;var wa=nt(j,Bt,be.value,vt);if(wa===null){Bt===null&&(Bt=me);break}t&&Bt&&wa.alternate===null&&n(j,Bt),G=f(wa,G,ie),Ee===null?Vt=wa:Ee.sibling=wa,Ee=wa,Bt=me}if(be.done)return a(j,Bt),_e&&Oi(j,ie),Vt;if(Bt===null){for(;!be.done;ie++,be=tt.next())be=Mt(j,be.value,vt),be!==null&&(G=f(be,G,ie),Ee===null?Vt=be:Ee.sibling=be,Ee=be);return _e&&Oi(j,ie),Vt}for(Bt=s(Bt);!be.done;ie++,be=tt.next())be=ot(Bt,j,ie,be.value,vt),be!==null&&(t&&be.alternate!==null&&Bt.delete(be.key===null?ie:be.key),G=f(be,G,ie),Ee===null?Vt=be:Ee.sibling=be,Ee=be);return t&&Bt.forEach(function(bx){return n(j,bx)}),_e&&Oi(j,ie),Vt}function Ne(j,G,tt,vt){if(typeof tt=="object"&&tt!==null&&tt.type===T&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case y:t:{for(var Vt=tt.key;G!==null;){if(G.key===Vt){if(Vt=tt.type,Vt===T){if(G.tag===7){a(j,G.sibling),vt=c(G,tt.props.children),vt.return=j,j=vt;break t}}else if(G.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===q&&Wa(Vt)===G.type){a(j,G.sibling),vt=c(G,tt.props),Hr(vt,tt),vt.return=j,j=vt;break t}a(j,G);break}else n(j,G);G=G.sibling}tt.type===T?(vt=Ha(tt.props.children,j.mode,vt,tt.key),vt.return=j,j=vt):(vt=Wo(tt.type,tt.key,tt.props,null,j.mode,vt),Hr(vt,tt),vt.return=j,j=vt)}return _(j);case A:t:{for(Vt=tt.key;G!==null;){if(G.key===Vt)if(G.tag===4&&G.stateNode.containerInfo===tt.containerInfo&&G.stateNode.implementation===tt.implementation){a(j,G.sibling),vt=c(G,tt.children||[]),vt.return=j,j=vt;break t}else{a(j,G);break}else n(j,G);G=G.sibling}vt=Hc(tt,j.mode,vt),vt.return=j,j=vt}return _(j);case q:return tt=Wa(tt),Ne(j,G,tt,vt)}if(rt(tt))return Nt(j,G,tt,vt);if(Z(tt)){if(Vt=Z(tt),typeof Vt!="function")throw Error(r(150));return tt=Vt.call(tt),Yt(j,G,tt,vt)}if(typeof tt.then=="function")return Ne(j,G,Jo(tt),vt);if(tt.$$typeof===C)return Ne(j,G,Yo(j,tt),vt);$o(j,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,G!==null&&G.tag===6?(a(j,G.sibling),vt=c(G,tt),vt.return=j,j=vt):(a(j,G),vt=Ic(tt,j.mode,vt),vt.return=j,j=vt),_(j)):a(j,G)}return function(j,G,tt,vt){try{Ir=0;var Vt=Ne(j,G,tt,vt);return Ls=null,Vt}catch(Bt){if(Bt===Cs||Bt===Ko)throw Bt;var Ee=Bn(29,Bt,null,j.mode);return Ee.lanes=vt,Ee.return=j,Ee}finally{}}}var ja=Rd(!0),Cd=Rd(!1),ua=!1;function Jc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $c(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function fa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ha(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ae&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Xo(t),hd(t,null,a),n}return ko(t,s,n,a),Xo(t)}function Gr(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Er(t,a)}}function tu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var eu=!1;function Vr(){if(eu){var t=Rs;if(t!==null)throw t}}function kr(t,n,a,s){eu=!1;var c=t.updateQueue;ua=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var F=b,et=F.next;F.next=null,_===null?f=et:_.next=et,_=F;var mt=t.alternate;mt!==null&&(mt=mt.updateQueue,b=mt.lastBaseUpdate,b!==_&&(b===null?mt.firstBaseUpdate=et:b.next=et,mt.lastBaseUpdate=F))}if(f!==null){var Mt=c.baseState;_=0,mt=et=F=null,b=f;do{var nt=b.lane&-536870913,ot=nt!==b.lane;if(ot?(pe&nt)===nt:(s&nt)===nt){nt!==0&&nt===ws&&(eu=!0),mt!==null&&(mt=mt.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Nt=t,Yt=b;nt=n;var Ne=a;switch(Yt.tag){case 1:if(Nt=Yt.payload,typeof Nt=="function"){Mt=Nt.call(Ne,Mt,nt);break t}Mt=Nt;break t;case 3:Nt.flags=Nt.flags&-65537|128;case 0:if(Nt=Yt.payload,nt=typeof Nt=="function"?Nt.call(Ne,Mt,nt):Nt,nt==null)break t;Mt=x({},Mt,nt);break t;case 2:ua=!0}}nt=b.callback,nt!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[nt]:ot.push(nt))}else ot={lane:nt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},mt===null?(et=mt=ot,F=Mt):mt=mt.next=ot,_|=nt;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;ot=b,b=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);mt===null&&(F=Mt),c.baseState=F,c.firstBaseUpdate=et,c.lastBaseUpdate=mt,f===null&&(c.shared.lanes=0),_a|=_,t.lanes=_,t.memoizedState=Mt}}function Ld(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Dd(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Ld(a[t],n)}var Ds=P(null),tl=P(0);function Ud(t,n){t=Wi,V(tl,t),V(Ds,n),Wi=t|n.baseLanes}function nu(){V(tl,Wi),V(Ds,Ds.current)}function iu(){Wi=tl.current,k(Ds),k(tl)}var Fn=P(null),ii=null;function da(t){var n=t.alternate;V(je,je.current&1),V(Fn,t),ii===null&&(n===null||Ds.current!==null||n.memoizedState!==null)&&(ii=t)}function au(t){V(je,je.current),V(Fn,t),ii===null&&(ii=t)}function Nd(t){t.tag===22?(V(je,je.current),V(Fn,t),ii===null&&(ii=t)):pa()}function pa(){V(je,je.current),V(Fn,Fn.current)}function In(t){k(Fn),ii===t&&(ii=null),k(je)}var je=P(0);function el(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ff(a)||hf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Bi=0,te=null,De=null,Ke=null,nl=!1,Us=!1,Ya=!1,il=0,Xr=0,Ns=null,pv=0;function We(){throw Error(r(321))}function su(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Pn(t[a],n[a]))return!1;return!0}function ru(t,n,a,s,c,f){return Bi=f,te=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?gp:Mu,Ya=!1,f=a(s,c),Ya=!1,Us&&(f=zd(n,a,s,c)),Od(t),f}function Od(t){I.H=jr;var n=De!==null&&De.next!==null;if(Bi=0,Ke=De=te=null,nl=!1,Xr=0,Ns=null,n)throw Error(r(300));t===null||Qe||(t=t.dependencies,t!==null&&jo(t)&&(Qe=!0))}function zd(t,n,a,s){te=t;var c=0;do{if(Us&&(Ns=null),Xr=0,Us=!1,25<=c)throw Error(r(301));if(c+=1,Ke=De=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}I.H=_p,f=n(a,s)}while(Us);return f}function mv(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?Wr(n):n,t=t.useState()[0],(De!==null?De.memoizedState:null)!==t&&(te.flags|=1024),n}function ou(){var t=il!==0;return il=0,t}function lu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function cu(t){if(nl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}nl=!1}Bi=0,Ke=De=te=null,Us=!1,Xr=il=0,Ns=null}function yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?te.memoizedState=Ke=t:Ke=Ke.next=t,Ke}function Ye(){if(De===null){var t=te.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var n=Ke===null?te.memoizedState:Ke.next;if(n!==null)Ke=n,De=t;else{if(t===null)throw te.alternate===null?Error(r(467)):Error(r(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Ke===null?te.memoizedState=Ke=t:Ke=Ke.next=t}return Ke}function al(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wr(t){var n=Xr;return Xr+=1,Ns===null&&(Ns=[]),t=Td(Ns,t,n),n=te,(Ke===null?n.memoizedState:Ke.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?gp:Mu),t}function sl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Wr(t);if(t.$$typeof===C)return pn(t)}throw Error(r(438,String(t)))}function uu(t){var n=null,a=te.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=te.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=al(),te.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=D;return n.index++,a}function Fi(t,n){return typeof n=="function"?n(t):n}function rl(t){var n=Ye();return fu(n,De,t)}function fu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var b=_=null,F=null,et=n,mt=!1;do{var Mt=et.lane&-536870913;if(Mt!==et.lane?(pe&Mt)===Mt:(Bi&Mt)===Mt){var nt=et.revertLane;if(nt===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),Mt===ws&&(mt=!0);else if((Bi&nt)===nt){et=et.next,nt===ws&&(mt=!0);continue}else Mt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},F===null?(b=F=Mt,_=f):F=F.next=Mt,te.lanes|=nt,_a|=nt;Mt=et.action,Ya&&a(f,Mt),f=et.hasEagerState?et.eagerState:a(f,Mt)}else nt={lane:Mt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},F===null?(b=F=nt,_=f):F=F.next=nt,te.lanes|=Mt,_a|=Mt;et=et.next}while(et!==null&&et!==n);if(F===null?_=f:F.next=b,!Pn(f,t.memoizedState)&&(Qe=!0,mt&&(a=Rs,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=F,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function hu(t){var n=Ye(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=t(f,_.action),_=_.next;while(_!==c);Pn(f,n.memoizedState)||(Qe=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Pd(t,n,a){var s=te,c=Ye(),f=_e;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!Pn((De||c).memoizedState,a);if(_&&(c.memoizedState=a,Qe=!0),c=c.queue,mu(Id.bind(null,s,c,t),[t]),c.getSnapshot!==n||_||Ke!==null&&Ke.memoizedState.tag&1){if(s.flags|=2048,Os(9,{destroy:void 0},Fd.bind(null,s,c,a,n),null),Oe===null)throw Error(r(349));f||(Bi&127)!==0||Bd(s,n,a)}return a}function Bd(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=te.updateQueue,n===null?(n=al(),te.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Fd(t,n,a,s){n.value=a,n.getSnapshot=s,Hd(n)&&Gd(t)}function Id(t,n,a){return a(function(){Hd(n)&&Gd(t)})}function Hd(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Pn(t,a)}catch{return!0}}function Gd(t){var n=Ia(t,2);n!==null&&Un(n,t,2)}function du(t){var n=yn();if(typeof t=="function"){var a=t;if(t=a(),Ya){zt(!0);try{a()}finally{zt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:t},n}function Vd(t,n,a,s){return t.baseState=a,fu(t,De,typeof s=="function"?s:Fi)}function gv(t,n,a,s,c){if(cl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};I.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,kd(n,f)):(f.next=a.next,n.pending=a.next=f)}}function kd(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=I.T,_={};I.T=_;try{var b=a(c,s),F=I.S;F!==null&&F(_,b),Xd(t,n,b)}catch(et){pu(t,n,et)}finally{f!==null&&_.types!==null&&(f.types=_.types),I.T=f}}else try{f=a(c,s),Xd(t,n,f)}catch(et){pu(t,n,et)}}function Xd(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Wd(t,n,s)},function(s){return pu(t,n,s)}):Wd(t,n,a)}function Wd(t,n,a){n.status="fulfilled",n.value=a,qd(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,kd(t,a)))}function pu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,qd(n),n=n.next;while(n!==s)}t.action=null}function qd(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function jd(t,n){return n}function Yd(t,n){if(_e){var a=Oe.formState;if(a!==null){t:{var s=te;if(_e){if(Be){e:{for(var c=Be,f=ni;c.nodeType!==8;){if(!f){c=null;break e}if(c=ai(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Be=ai(c.nextSibling),s=c.data==="F!";break t}}la(s)}s=!1}s&&(n=a[0])}}return a=yn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jd,lastRenderedState:n},a.queue=s,a=dp.bind(null,te,s),s.dispatch=a,s=du(!1),f=Su.bind(null,te,!1,s.queue),s=yn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=gv.bind(null,te,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Zd(t){var n=Ye();return Kd(n,De,t)}function Kd(t,n,a){if(n=fu(t,n,jd)[0],t=rl(Fi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Wr(n)}catch(_){throw _===Cs?Ko:_}else s=n;n=Ye();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(te.flags|=2048,Os(9,{destroy:void 0},_v.bind(null,c,a),null)),[s,f,t]}function _v(t,n){t.action=n}function Qd(t){var n=Ye(),a=De;if(a!==null)return Kd(n,a,t);Ye(),n=n.memoizedState,a=Ye();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Os(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=te.updateQueue,n===null&&(n=al(),te.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Jd(){return Ye().memoizedState}function ol(t,n,a,s){var c=yn();te.flags|=t,c.memoizedState=Os(1|n,{destroy:void 0},a,s===void 0?null:s)}function ll(t,n,a,s){var c=Ye();s=s===void 0?null:s;var f=c.memoizedState.inst;De!==null&&s!==null&&su(s,De.memoizedState.deps)?c.memoizedState=Os(n,f,a,s):(te.flags|=t,c.memoizedState=Os(1|n,f,a,s))}function $d(t,n){ol(8390656,8,t,n)}function mu(t,n){ll(2048,8,t,n)}function vv(t){te.flags|=4;var n=te.updateQueue;if(n===null)n=al(),te.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function tp(t){var n=Ye().memoizedState;return vv({ref:n,nextImpl:t}),function(){if((Ae&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function ep(t,n){return ll(4,2,t,n)}function np(t,n){return ll(4,4,t,n)}function ip(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function ap(t,n,a){a=a!=null?a.concat([t]):null,ll(4,4,ip.bind(null,n,t),a)}function gu(){}function sp(t,n){var a=Ye();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&su(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function rp(t,n){var a=Ye();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&su(n,s[1]))return s[0];if(s=t(),Ya){zt(!0);try{t()}finally{zt(!1)}}return a.memoizedState=[s,n],s}function _u(t,n,a){return a===void 0||(Bi&1073741824)!==0&&(pe&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=om(),te.lanes|=t,_a|=t,a)}function op(t,n,a,s){return Pn(a,n)?a:Ds.current!==null?(t=_u(t,a,s),Pn(t,n)||(Qe=!0),t):(Bi&42)===0||(Bi&1073741824)!==0&&(pe&261930)===0?(Qe=!0,t.memoizedState=a):(t=om(),te.lanes|=t,_a|=t,n)}function lp(t,n,a,s,c){var f=X.p;X.p=f!==0&&8>f?f:8;var _=I.T,b={};I.T=b,Su(t,!1,n,a);try{var F=c(),et=I.S;if(et!==null&&et(b,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var mt=dv(F,s);qr(t,n,mt,Vn(t))}else qr(t,n,s,Vn(t))}catch(Mt){qr(t,n,{then:function(){},status:"rejected",reason:Mt},Vn())}finally{X.p=f,_!==null&&b.types!==null&&(_.types=b.types),I.T=_}}function xv(){}function vu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=cp(t).queue;lp(t,c,n,$,a===null?xv:function(){return up(t),a(s)})}function cp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:$},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function up(t){var n=cp(t);n.next===null&&(n=t.alternate.memoizedState),qr(t,n.next.queue,{},Vn())}function xu(){return pn(co)}function fp(){return Ye().memoizedState}function hp(){return Ye().memoizedState}function Sv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Vn();t=fa(a);var s=ha(n,t,a);s!==null&&(Un(s,n,a),Gr(s,n,a)),n={cache:Yc()},t.payload=n;return}n=n.return}}function Mv(t,n,a){var s=Vn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},cl(t)?pp(n,a):(a=Bc(t,n,a,s),a!==null&&(Un(a,t,s),mp(a,n,s)))}function dp(t,n,a){var s=Vn();qr(t,n,a,s)}function qr(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(cl(t))pp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,b=f(_,a);if(c.hasEagerState=!0,c.eagerState=b,Pn(b,_))return ko(t,n,c,0),Oe===null&&Vo(),!1}catch{}finally{}if(a=Bc(t,n,c,s),a!==null)return Un(a,t,s),mp(a,n,s),!0}return!1}function Su(t,n,a,s){if(s={lane:2,revertLane:Ju(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},cl(t)){if(n)throw Error(r(479))}else n=Bc(t,a,s,2),n!==null&&Un(n,t,2)}function cl(t){var n=t.alternate;return t===te||n!==null&&n===te}function pp(t,n){Us=nl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function mp(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Er(t,a)}}var jr={readContext:pn,use:sl,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useLayoutEffect:We,useInsertionEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useSyncExternalStore:We,useId:We,useHostTransitionStatus:We,useFormState:We,useActionState:We,useOptimistic:We,useMemoCache:We,useCacheRefresh:We};jr.useEffectEvent=We;var gp={readContext:pn,use:sl,useCallback:function(t,n){return yn().memoizedState=[t,n===void 0?null:n],t},useContext:pn,useEffect:$d,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ol(4194308,4,ip.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ol(4194308,4,t,n)},useInsertionEffect:function(t,n){ol(4,2,t,n)},useMemo:function(t,n){var a=yn();n=n===void 0?null:n;var s=t();if(Ya){zt(!0);try{t()}finally{zt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=yn();if(a!==void 0){var c=a(n);if(Ya){zt(!0);try{a(n)}finally{zt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=Mv.bind(null,te,t),[s.memoizedState,t]},useRef:function(t){var n=yn();return t={current:t},n.memoizedState=t},useState:function(t){t=du(t);var n=t.queue,a=dp.bind(null,te,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:gu,useDeferredValue:function(t,n){var a=yn();return _u(a,t,n)},useTransition:function(){var t=du(!1);return t=lp.bind(null,te,t.queue,!0,!1),yn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=te,c=yn();if(_e){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Oe===null)throw Error(r(349));(pe&127)!==0||Bd(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,$d(Id.bind(null,s,f,t),[t]),s.flags|=2048,Os(9,{destroy:void 0},Fd.bind(null,s,f,a,n),null),a},useId:function(){var t=yn(),n=Oe.identifierPrefix;if(_e){var a=yi,s=Mi;a=(s&~(1<<32-Kt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=il++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=pv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:xu,useFormState:Yd,useActionState:Yd,useOptimistic:function(t){var n=yn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Su.bind(null,te,!0,a),a.dispatch=n,[t,n]},useMemoCache:uu,useCacheRefresh:function(){return yn().memoizedState=Sv.bind(null,te)},useEffectEvent:function(t){var n=yn(),a={impl:t};return n.memoizedState=a,function(){if((Ae&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Mu={readContext:pn,use:sl,useCallback:sp,useContext:pn,useEffect:mu,useImperativeHandle:ap,useInsertionEffect:ep,useLayoutEffect:np,useMemo:rp,useReducer:rl,useRef:Jd,useState:function(){return rl(Fi)},useDebugValue:gu,useDeferredValue:function(t,n){var a=Ye();return op(a,De.memoizedState,t,n)},useTransition:function(){var t=rl(Fi)[0],n=Ye().memoizedState;return[typeof t=="boolean"?t:Wr(t),n]},useSyncExternalStore:Pd,useId:fp,useHostTransitionStatus:xu,useFormState:Zd,useActionState:Zd,useOptimistic:function(t,n){var a=Ye();return Vd(a,De,t,n)},useMemoCache:uu,useCacheRefresh:hp};Mu.useEffectEvent=tp;var _p={readContext:pn,use:sl,useCallback:sp,useContext:pn,useEffect:mu,useImperativeHandle:ap,useInsertionEffect:ep,useLayoutEffect:np,useMemo:rp,useReducer:hu,useRef:Jd,useState:function(){return hu(Fi)},useDebugValue:gu,useDeferredValue:function(t,n){var a=Ye();return De===null?_u(a,t,n):op(a,De.memoizedState,t,n)},useTransition:function(){var t=hu(Fi)[0],n=Ye().memoizedState;return[typeof t=="boolean"?t:Wr(t),n]},useSyncExternalStore:Pd,useId:fp,useHostTransitionStatus:xu,useFormState:Qd,useActionState:Qd,useOptimistic:function(t,n){var a=Ye();return De!==null?Vd(a,De,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:uu,useCacheRefresh:hp};_p.useEffectEvent=tp;function yu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Eu={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Vn(),c=fa(s);c.payload=n,a!=null&&(c.callback=a),n=ha(t,c,s),n!==null&&(Un(n,t,s),Gr(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Vn(),c=fa(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ha(t,c,s),n!==null&&(Un(n,t,s),Gr(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Vn(),s=fa(a);s.tag=2,n!=null&&(s.callback=n),n=ha(t,s,a),n!==null&&(Un(n,t,a),Gr(n,t,a))}};function vp(t,n,a,s,c,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,_):n.prototype&&n.prototype.isPureReactComponent?!Nr(a,s)||!Nr(c,f):!0}function xp(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Eu.enqueueReplaceState(n,n.state,null)}function Za(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Sp(t){Go(t)}function Mp(t){console.error(t)}function yp(t){Go(t)}function ul(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Ep(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function bu(t,n,a){return a=fa(a),a.tag=3,a.payload={element:null},a.callback=function(){ul(t,n)},a}function bp(t){return t=fa(t),t.tag=3,t}function Tp(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){Ep(n,a,s)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Ep(n,a,s),typeof c!="function"&&(va===null?va=new Set([this]):va.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})})}function yv(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&As(n,a,c,!0),a=Fn.current,a!==null){switch(a.tag){case 31:case 13:return ii===null?yl():a.alternate===null&&qe===0&&(qe=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===Qo?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Zu(t,s,c)),!1;case 22:return a.flags|=65536,s===Qo?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Zu(t,s,c)),!1}throw Error(r(435,a.tag))}return Zu(t,s,c),yl(),!1}if(_e)return n=Fn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==kc&&(t=Error(r(422),{cause:s}),Pr($n(t,a)))):(s!==kc&&(n=Error(r(423),{cause:s}),Pr($n(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=$n(s,a),c=bu(t.stateNode,s,c),tu(t,c),qe!==4&&(qe=2)),!1;var f=Error(r(520),{cause:s});if(f=$n(f,a),eo===null?eo=[f]:eo.push(f),qe!==4&&(qe=2),n===null)return!0;s=$n(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=bu(a.stateNode,s,t),tu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(va===null||!va.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=bp(c),Tp(c,t,a,s),tu(a,c),!1}a=a.return}while(a!==null);return!1}var Tu=Error(r(461)),Qe=!1;function mn(t,n,a,s){n.child=t===null?Cd(n,null,a,s):ja(n,t.child,a,s)}function Ap(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var _={};for(var b in s)b!=="ref"&&(_[b]=s[b])}else _=s;return ka(n),s=ru(t,n,a,_,f,c),b=ou(),t!==null&&!Qe?(lu(t,n,c),Ii(t,n,c)):(_e&&b&&Gc(n),n.flags|=1,mn(t,n,s,c),n.child)}function wp(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!Fc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Rp(t,n,f,s,c)):(t=Wo(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Nu(t,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Nr,a(_,s)&&t.ref===n.ref)return Ii(t,n,c)}return n.flags|=1,t=Ni(f,s),t.ref=n.ref,t.return=n,n.child=t}function Rp(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Nr(f,s)&&t.ref===n.ref)if(Qe=!1,n.pendingProps=s=f,Nu(t,c))(t.flags&131072)!==0&&(Qe=!0);else return n.lanes=t.lanes,Ii(t,n,c)}return Au(t,n,a,s,c)}function Cp(t,n,a,s){var c=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return Lp(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Zo(n,f!==null?f.cachePool:null),f!==null?Ud(n,f):nu(),Nd(n);else return s=n.lanes=536870912,Lp(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(Zo(n,f.cachePool),Ud(n,f),pa(),n.memoizedState=null):(t!==null&&Zo(n,null),nu(),pa());return mn(t,n,c,a),n.child}function Yr(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Lp(t,n,a,s,c){var f=Kc();return f=f===null?null:{parent:Ze._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Zo(n,null),nu(),Nd(n),t!==null&&As(t,n,s,!0),n.childLanes=c,null}function fl(t,n){return n=dl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Dp(t,n,a){return ja(n,t.child,null,a),t=fl(n,n.pendingProps),t.flags|=2,In(n),n.memoizedState=null,t}function Ev(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(_e){if(s.mode==="hidden")return t=fl(n,s),n.lanes=536870912,Yr(null,t);if(au(n),(t=Be)?(t=km(t,ni),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ra!==null?{id:Mi,overflow:yi}:null,retryLane:536870912,hydrationErrors:null},a=pd(t),a.return=n,n.child=a,dn=n,Be=null)):t=null,t===null)throw la(n);return n.lanes=536870912,null}return fl(n,s)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(au(n),c)if(n.flags&256)n.flags&=-257,n=Dp(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(Qe||As(t,n,a,!1),c=(a&t.childLanes)!==0,Qe||c){if(s=Oe,s!==null&&(_=Co(s,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Ia(t,_),Un(s,t,_),Tu;yl(),n=Dp(t,n,a)}else t=f.treeContext,Be=ai(_.nextSibling),dn=n,_e=!0,oa=null,ni=!1,t!==null&&_d(n,t),n=fl(n,s),n.flags|=4096;return n}return t=Ni(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function hl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Au(t,n,a,s,c){return ka(n),a=ru(t,n,a,s,void 0,c),s=ou(),t!==null&&!Qe?(lu(t,n,c),Ii(t,n,c)):(_e&&s&&Gc(n),n.flags|=1,mn(t,n,a,c),n.child)}function Up(t,n,a,s,c,f){return ka(n),n.updateQueue=null,a=zd(n,s,a,c),Od(t),s=ou(),t!==null&&!Qe?(lu(t,n,f),Ii(t,n,f)):(_e&&s&&Gc(n),n.flags|=1,mn(t,n,a,f),n.child)}function Np(t,n,a,s,c){if(ka(n),n.stateNode===null){var f=ys,_=a.contextType;typeof _=="object"&&_!==null&&(f=pn(_)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Eu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Jc(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?pn(_):ys,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(yu(n,a,_,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&Eu.enqueueReplaceState(f,f.state,null),kr(n,s,f,c),Vr(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var b=n.memoizedProps,F=Za(a,b);f.props=F;var et=f.context,mt=a.contextType;_=ys,typeof mt=="object"&&mt!==null&&(_=pn(mt));var Mt=a.getDerivedStateFromProps;mt=typeof Mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,mt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||et!==_)&&xp(n,f,s,_),ua=!1;var nt=n.memoizedState;f.state=nt,kr(n,s,f,c),Vr(),et=n.memoizedState,b||nt!==et||ua?(typeof Mt=="function"&&(yu(n,a,Mt,s),et=n.memoizedState),(F=ua||vp(n,a,F,s,nt,et,_))?(mt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=et),f.props=s,f.state=et,f.context=_,s=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,$c(t,n),_=n.memoizedProps,mt=Za(a,_),f.props=mt,Mt=n.pendingProps,nt=f.context,et=a.contextType,F=ys,typeof et=="object"&&et!==null&&(F=pn(et)),b=a.getDerivedStateFromProps,(et=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==Mt||nt!==F)&&xp(n,f,s,F),ua=!1,nt=n.memoizedState,f.state=nt,kr(n,s,f,c),Vr();var ot=n.memoizedState;_!==Mt||nt!==ot||ua||t!==null&&t.dependencies!==null&&jo(t.dependencies)?(typeof b=="function"&&(yu(n,a,b,s),ot=n.memoizedState),(mt=ua||vp(n,a,mt,s,nt,ot,F)||t!==null&&t.dependencies!==null&&jo(t.dependencies))?(et||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ot,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ot,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ot),f.props=s,f.state=ot,f.context=F,s=mt):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,hl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=ja(n,t.child,null,c),n.child=ja(n,null,a,c)):mn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Ii(t,n,c),t}function Op(t,n,a,s){return Ga(),n.flags|=256,mn(t,n,a,s),n.child}var wu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ru(t){return{baseLanes:t,cachePool:Ed()}}function Cu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Gn),t}function zp(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(je.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(_e){if(c?da(n):pa(),(t=Be)?(t=km(t,ni),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ra!==null?{id:Mi,overflow:yi}:null,retryLane:536870912,hydrationErrors:null},a=pd(t),a.return=n,n.child=a,dn=n,Be=null)):t=null,t===null)throw la(n);return hf(t)?n.lanes=32:n.lanes=536870912,null}var b=s.children;return s=s.fallback,c?(pa(),c=n.mode,b=dl({mode:"hidden",children:b},c),s=Ha(s,c,a,null),b.return=n,s.return=n,b.sibling=s,n.child=b,s=n.child,s.memoizedState=Ru(a),s.childLanes=Cu(t,_,a),n.memoizedState=wu,Yr(null,s)):(da(n),Lu(n,b))}var F=t.memoizedState;if(F!==null&&(b=F.dehydrated,b!==null)){if(f)n.flags&256?(da(n),n.flags&=-257,n=Du(t,n,a)):n.memoizedState!==null?(pa(),n.child=t.child,n.flags|=128,n=null):(pa(),b=s.fallback,c=n.mode,s=dl({mode:"visible",children:s.children},c),b=Ha(b,c,a,null),b.flags|=2,s.return=n,b.return=n,s.sibling=b,n.child=s,ja(n,t.child,null,a),s=n.child,s.memoizedState=Ru(a),s.childLanes=Cu(t,_,a),n.memoizedState=wu,n=Yr(null,s));else if(da(n),hf(b)){if(_=b.nextSibling&&b.nextSibling.dataset,_)var et=_.dgst;_=et,s=Error(r(419)),s.stack="",s.digest=_,Pr({value:s,source:null,stack:null}),n=Du(t,n,a)}else if(Qe||As(t,n,a,!1),_=(a&t.childLanes)!==0,Qe||_){if(_=Oe,_!==null&&(s=Co(_,a),s!==0&&s!==F.retryLane))throw F.retryLane=s,Ia(t,s),Un(_,t,s),Tu;ff(b)||yl(),n=Du(t,n,a)}else ff(b)?(n.flags|=192,n.child=t.child,n=null):(t=F.treeContext,Be=ai(b.nextSibling),dn=n,_e=!0,oa=null,ni=!1,t!==null&&_d(n,t),n=Lu(n,s.children),n.flags|=4096);return n}return c?(pa(),b=s.fallback,c=n.mode,F=t.child,et=F.sibling,s=Ni(F,{mode:"hidden",children:s.children}),s.subtreeFlags=F.subtreeFlags&65011712,et!==null?b=Ni(et,b):(b=Ha(b,c,a,null),b.flags|=2),b.return=n,s.return=n,s.sibling=b,n.child=s,Yr(null,s),s=n.child,b=t.child.memoizedState,b===null?b=Ru(a):(c=b.cachePool,c!==null?(F=Ze._currentValue,c=c.parent!==F?{parent:F,pool:F}:c):c=Ed(),b={baseLanes:b.baseLanes|a,cachePool:c}),s.memoizedState=b,s.childLanes=Cu(t,_,a),n.memoizedState=wu,Yr(t.child,s)):(da(n),a=t.child,t=a.sibling,a=Ni(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function Lu(t,n){return n=dl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function dl(t,n){return t=Bn(22,t,null,n),t.lanes=0,t}function Du(t,n,a){return ja(n,t.child,null,a),t=Lu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Pp(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),qc(t.return,n,a)}function Uu(t,n,a,s,c,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=s,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function Bp(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var _=je.current,b=(_&2)!==0;if(b?(_=_&1|2,n.flags|=128):_&=1,V(je,_),mn(t,n,s,a),s=_e?zr:0,!b&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pp(t,a,n);else if(t.tag===19)Pp(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&el(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Uu(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&el(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Uu(n,!0,a,null,f,s);break;case"together":Uu(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Ii(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),_a|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(As(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ni(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ni(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Nu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&jo(t)))}function bv(t,n,a){switch(n.tag){case 3:yt(n,n.stateNode.containerInfo),ca(n,Ze,t.memoizedState.cache),Ga();break;case 27:case 5:St(n);break;case 4:yt(n,n.stateNode.containerInfo);break;case 10:ca(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,au(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(da(n),n.flags|=128,null):(a&n.child.childLanes)!==0?zp(t,n,a):(da(n),t=Ii(t,n,a),t!==null?t.sibling:null);da(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(As(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Bp(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),V(je,je.current),s)break;return null;case 22:return n.lanes=0,Cp(t,n,a,n.pendingProps);case 24:ca(n,Ze,t.memoizedState.cache)}return Ii(t,n,a)}function Fp(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)Qe=!0;else{if(!Nu(t,a)&&(n.flags&128)===0)return Qe=!1,bv(t,n,a);Qe=(t.flags&131072)!==0}else Qe=!1,_e&&(n.flags&1048576)!==0&&gd(n,zr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=Wa(n.elementType),n.type=t,typeof t=="function")Fc(t)?(s=Za(t,s),n.tag=1,n=Np(null,n,t,s,a)):(n.tag=0,n=Au(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===U){n.tag=11,n=Ap(null,n,t,s,a);break t}else if(c===O){n.tag=14,n=wp(null,n,t,s,a);break t}}throw n=at(t)||t,Error(r(306,n,""))}}return n;case 0:return Au(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=Za(s,n.pendingProps),Np(t,n,s,c,a);case 3:t:{if(yt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,$c(t,n),kr(n,s,null,a);var _=n.memoizedState;if(s=_.cache,ca(n,Ze,s),s!==f.cache&&jc(n,[Ze],a,!0),Vr(),s=_.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Op(t,n,s,a);break t}else if(s!==c){c=$n(Error(r(424)),n),Pr(c),n=Op(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Be=ai(t.firstChild),dn=n,_e=!0,oa=null,ni=!0,a=Cd(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ga(),s===c){n=Ii(t,n,a);break t}mn(t,n,s,a)}n=n.child}return n;case 26:return hl(t,n),t===null?(a=Zm(n.type,null,n.pendingProps,null))?n.memoizedState=a:_e||(a=n.type,t=n.pendingProps,s=Cl(st.current).createElement(a),s[Y]=n,s[ht]=t,gn(s,a,t),oe(s),n.stateNode=s):n.memoizedState=Zm(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return St(n),t===null&&_e&&(s=n.stateNode=qm(n.type,n.pendingProps,st.current),dn=n,ni=!0,c=Be,ya(n.type)?(df=c,Be=ai(s.firstChild)):Be=c),mn(t,n,n.pendingProps.children,a),hl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&_e&&((c=s=Be)&&(s=tx(s,n.type,n.pendingProps,ni),s!==null?(n.stateNode=s,dn=n,Be=ai(s.firstChild),ni=!1,c=!0):c=!1),c||la(n)),St(n),c=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,s=f.children,lf(c,f)?s=null:_!==null&&lf(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=ru(t,n,mv,null,null,a),co._currentValue=c),hl(t,n),mn(t,n,s,a),n.child;case 6:return t===null&&_e&&((t=a=Be)&&(a=ex(a,n.pendingProps,ni),a!==null?(n.stateNode=a,dn=n,Be=null,t=!0):t=!1),t||la(n)),null;case 13:return zp(t,n,a);case 4:return yt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=ja(n,null,s,a):mn(t,n,s,a),n.child;case 11:return Ap(t,n,n.type,n.pendingProps,a);case 7:return mn(t,n,n.pendingProps,a),n.child;case 8:return mn(t,n,n.pendingProps.children,a),n.child;case 12:return mn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ca(n,n.type,s.value),mn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,ka(n),c=pn(c),s=s(c),n.flags|=1,mn(t,n,s,a),n.child;case 14:return wp(t,n,n.type,n.pendingProps,a);case 15:return Rp(t,n,n.type,n.pendingProps,a);case 19:return Bp(t,n,a);case 31:return Ev(t,n,a);case 22:return Cp(t,n,a,n.pendingProps);case 24:return ka(n),s=pn(Ze),t===null?(c=Kc(),c===null&&(c=Oe,f=Yc(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Jc(n),ca(n,Ze,c)):((t.lanes&a)!==0&&($c(t,n),kr(n,null,null,a),Vr()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ca(n,Ze,s)):(s=f.cache,ca(n,Ze,s),s!==c.cache&&jc(n,[Ze],a,!0))),mn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Hi(t){t.flags|=4}function Ou(t,n,a,s,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(fm())t.flags|=8192;else throw qa=Qo,Qc}else t.flags&=-16777217}function Ip(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!tg(n))if(fm())t.flags|=8192;else throw qa=Qo,Qc}function pl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ui():536870912,t.lanes|=n,Fs|=n)}function Zr(t,n){if(!_e)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Fe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Tv(t,n,a){var s=n.pendingProps;switch(Vc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(n),null;case 1:return Fe(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Pi(Ze),Et(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ts(n)?Hi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Xc())),Fe(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Hi(n),f!==null?(Fe(n),Ip(n,f)):(Fe(n),Ou(n,c,null,s,a))):f?f!==t.memoizedState?(Hi(n),Fe(n),Ip(n,f)):(Fe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Hi(n),Fe(n),Ou(n,c,t,s,a)),null;case 27:if(Dt(n),a=st.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Hi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Fe(n),null}t=J.current,Ts(n)?vd(n):(t=qm(c,s,a),n.stateNode=t,Hi(n))}return Fe(n),null;case 5:if(Dt(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Hi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Fe(n),null}if(f=J.current,Ts(n))vd(n);else{var _=Cl(st.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?_.createElement("select",{is:s.is}):_.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?_.createElement(c,{is:s.is}):_.createElement(c)}}f[Y]=n,f[ht]=s;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(gn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Hi(n)}}return Fe(n),Ou(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Hi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=st.current,Ts(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=dn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[Y]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||zm(t.nodeValue,a)),t||la(n,!0)}else t=Cl(t).createTextNode(s),t[Y]=n,n.stateNode=t}return Fe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Ts(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Y]=n}else Ga(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Fe(n),t=!1}else a=Xc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(In(n),n):(In(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Fe(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ts(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[Y]=n}else Ga(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Fe(n),c=!1}else c=Xc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(In(n),n):(In(n),null)}return In(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),pl(n,n.updateQueue),Fe(n),null);case 4:return Et(),t===null&&nf(n.stateNode.containerInfo),Fe(n),null;case 10:return Pi(n.type),Fe(n),null;case 19:if(k(je),s=n.memoizedState,s===null)return Fe(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)Zr(s,!1);else{if(qe!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=el(t),f!==null){for(n.flags|=128,Zr(s,!1),t=f.updateQueue,n.updateQueue=t,pl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)dd(a,t),a=a.sibling;return V(je,je.current&1|2),_e&&Oi(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&lt()>xl&&(n.flags|=128,c=!0,Zr(s,!1),n.lanes=4194304)}else{if(!c)if(t=el(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,pl(n,t),Zr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!_e)return Fe(n),null}else 2*lt()-s.renderingStartTime>xl&&a!==536870912&&(n.flags|=128,c=!0,Zr(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=lt(),t.sibling=null,a=je.current,V(je,c?a&1|2:a&1),_e&&Oi(n,s.treeForkCount),t):(Fe(n),null);case 22:case 23:return In(n),iu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Fe(n),n.subtreeFlags&6&&(n.flags|=8192)):Fe(n),a=n.updateQueue,a!==null&&pl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&k(Xa),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Pi(Ze),Fe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Av(t,n){switch(Vc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Pi(Ze),Et(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Dt(n),null;case 31:if(n.memoizedState!==null){if(In(n),n.alternate===null)throw Error(r(340));Ga()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(In(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ga()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return k(je),null;case 4:return Et(),null;case 10:return Pi(n.type),null;case 22:case 23:return In(n),iu(),t!==null&&k(Xa),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Pi(Ze),null;case 25:return null;default:return null}}function Hp(t,n){switch(Vc(n),n.tag){case 3:Pi(Ze),Et();break;case 26:case 27:case 5:Dt(n);break;case 4:Et();break;case 31:n.memoizedState!==null&&In(n);break;case 13:In(n);break;case 19:k(je);break;case 10:Pi(n.type);break;case 22:case 23:In(n),iu(),t!==null&&k(Xa);break;case 24:Pi(Ze)}}function Kr(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,_=a.inst;s=f(),_.destroy=s}a=a.next}while(a!==c)}}catch(b){Ce(n,n.return,b)}}function ma(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var _=s.inst,b=_.destroy;if(b!==void 0){_.destroy=void 0,c=n;var F=a,et=b;try{et()}catch(mt){Ce(c,F,mt)}}}s=s.next}while(s!==f)}}catch(mt){Ce(n,n.return,mt)}}function Gp(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Dd(n,a)}catch(s){Ce(t,t.return,s)}}}function Vp(t,n,a){a.props=Za(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ce(t,n,s)}}function Qr(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Ce(t,n,c)}}function Ei(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ce(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ce(t,n,c)}else a.current=null}function kp(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ce(t,t.return,c)}}function zu(t,n,a){try{var s=t.stateNode;Yv(s,t.type,a,n),s[ht]=n}catch(c){Ce(t,t.return,c)}}function Xp(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ya(t.type)||t.tag===4}function Pu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Xp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ya(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bu(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Di));else if(s!==4&&(s===27&&ya(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Bu(t,n,a),t=t.sibling;t!==null;)Bu(t,n,a),t=t.sibling}function ml(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&ya(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(ml(t,n,a),t=t.sibling;t!==null;)ml(t,n,a),t=t.sibling}function Wp(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);gn(n,s,a),n[Y]=t,n[ht]=a}catch(f){Ce(t,t.return,f)}}var Gi=!1,Je=!1,Fu=!1,qp=typeof WeakSet=="function"?WeakSet:Set,cn=null;function wv(t,n){if(t=t.containerInfo,rf=Pl,t=ad(t),Dc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,b=-1,F=-1,et=0,mt=0,Mt=t,nt=null;e:for(;;){for(var ot;Mt!==a||c!==0&&Mt.nodeType!==3||(b=_+c),Mt!==f||s!==0&&Mt.nodeType!==3||(F=_+s),Mt.nodeType===3&&(_+=Mt.nodeValue.length),(ot=Mt.firstChild)!==null;)nt=Mt,Mt=ot;for(;;){if(Mt===t)break e;if(nt===a&&++et===c&&(b=_),nt===f&&++mt===s&&(F=_),(ot=Mt.nextSibling)!==null)break;Mt=nt,nt=Mt.parentNode}Mt=ot}a=b===-1||F===-1?null:{start:b,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(of={focusedElem:t,selectionRange:a},Pl=!1,cn=n;cn!==null;)if(n=cn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,cn=t;else for(;cn!==null;){switch(n=cn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Nt=Za(a.type,c);t=s.getSnapshotBeforeUpdate(Nt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Yt){Ce(a,a.return,Yt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)uf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":uf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,cn=t;break}cn=n.return}}function jp(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ki(t,a),s&4&&Kr(5,a);break;case 1:if(ki(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Ce(a,a.return,_)}else{var c=Za(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Ce(a,a.return,_)}}s&64&&Gp(a),s&512&&Qr(a,a.return);break;case 3:if(ki(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Dd(t,n)}catch(_){Ce(a,a.return,_)}}break;case 27:n===null&&s&4&&Wp(a);case 26:case 5:ki(t,a),n===null&&s&4&&kp(a),s&512&&Qr(a,a.return);break;case 12:ki(t,a);break;case 31:ki(t,a),s&4&&Kp(t,a);break;case 13:ki(t,a),s&4&&Qp(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Pv.bind(null,a),nx(t,a))));break;case 22:if(s=a.memoizedState!==null||Gi,!s){n=n!==null&&n.memoizedState!==null||Je,c=Gi;var f=Je;Gi=s,(Je=n)&&!f?Xi(t,a,(a.subtreeFlags&8772)!==0):ki(t,a),Gi=c,Je=f}break;case 30:break;default:ki(t,a)}}function Yp(t){var n=t.alternate;n!==null&&(t.alternate=null,Yp(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&re(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ie=null,Rn=!1;function Vi(t,n,a){for(a=a.child;a!==null;)Zp(t,n,a),a=a.sibling}function Zp(t,n,a){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Gt,a)}catch{}switch(a.tag){case 26:Je||Ei(a,n),Vi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Je||Ei(a,n);var s=Ie,c=Rn;ya(a.type)&&(Ie=a.stateNode,Rn=!1),Vi(t,n,a),ro(a.stateNode),Ie=s,Rn=c;break;case 5:Je||Ei(a,n);case 6:if(s=Ie,c=Rn,Ie=null,Vi(t,n,a),Ie=s,Rn=c,Ie!==null)if(Rn)try{(Ie.nodeType===9?Ie.body:Ie.nodeName==="HTML"?Ie.ownerDocument.body:Ie).removeChild(a.stateNode)}catch(f){Ce(a,n,f)}else try{Ie.removeChild(a.stateNode)}catch(f){Ce(a,n,f)}break;case 18:Ie!==null&&(Rn?(t=Ie,Gm(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),qs(t)):Gm(Ie,a.stateNode));break;case 4:s=Ie,c=Rn,Ie=a.stateNode.containerInfo,Rn=!0,Vi(t,n,a),Ie=s,Rn=c;break;case 0:case 11:case 14:case 15:ma(2,a,n),Je||ma(4,a,n),Vi(t,n,a);break;case 1:Je||(Ei(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Vp(a,n,s)),Vi(t,n,a);break;case 21:Vi(t,n,a);break;case 22:Je=(s=Je)||a.memoizedState!==null,Vi(t,n,a),Je=s;break;default:Vi(t,n,a)}}function Kp(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{qs(t)}catch(a){Ce(n,n.return,a)}}}function Qp(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{qs(t)}catch(a){Ce(n,n.return,a)}}function Rv(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new qp),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new qp),n;default:throw Error(r(435,t.tag))}}function gl(t,n){var a=Rv(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=Bv.bind(null,t,s);s.then(c,c)}})}function Cn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,_=n,b=_;t:for(;b!==null;){switch(b.tag){case 27:if(ya(b.type)){Ie=b.stateNode,Rn=!1;break t}break;case 5:Ie=b.stateNode,Rn=!1;break t;case 3:case 4:Ie=b.stateNode.containerInfo,Rn=!0;break t}b=b.return}if(Ie===null)throw Error(r(160));Zp(f,_,c),Ie=null,Rn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Jp(n,t),n=n.sibling}var hi=null;function Jp(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Cn(n,t),Ln(t),s&4&&(ma(3,t,t.return),Kr(3,t),ma(5,t,t.return));break;case 1:Cn(n,t),Ln(t),s&512&&(Je||a===null||Ei(a,a.return)),s&64&&Gi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=hi;if(Cn(n,t),Ln(t),s&512&&(Je||a===null||Ei(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[$t]||f[Y]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),gn(f,s,a),f[Y]=t,oe(f),s=f;break t;case"link":var _=Jm("link","href",c).get(s+(a.href||""));if(_){for(var b=0;b<_.length;b++)if(f=_[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(b,1);break e}}f=c.createElement(s),gn(f,s,a),c.head.appendChild(f);break;case"meta":if(_=Jm("meta","content",c).get(s+(a.content||""))){for(b=0;b<_.length;b++)if(f=_[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(b,1);break e}}f=c.createElement(s),gn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[Y]=t,oe(f),s=f}t.stateNode=s}else $m(c,t.type,t.stateNode);else t.stateNode=Qm(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?$m(c,t.type,t.stateNode):Qm(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&zu(t,t.memoizedProps,a.memoizedProps)}break;case 27:Cn(n,t),Ln(t),s&512&&(Je||a===null||Ei(a,a.return)),a!==null&&s&4&&zu(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Cn(n,t),Ln(t),s&512&&(Je||a===null||Ei(a,a.return)),t.flags&32){c=t.stateNode;try{ms(c,"")}catch(Nt){Ce(t,t.return,Nt)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,zu(t,c,a!==null?a.memoizedProps:c)),s&1024&&(Fu=!0);break;case 6:if(Cn(n,t),Ln(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Nt){Ce(t,t.return,Nt)}}break;case 3:if(Ul=null,c=hi,hi=Ll(n.containerInfo),Cn(n,t),hi=c,Ln(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{qs(n.containerInfo)}catch(Nt){Ce(t,t.return,Nt)}Fu&&(Fu=!1,$p(t));break;case 4:s=hi,hi=Ll(t.stateNode.containerInfo),Cn(n,t),Ln(t),hi=s;break;case 12:Cn(n,t),Ln(t);break;case 31:Cn(n,t),Ln(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,gl(t,s)));break;case 13:Cn(n,t),Ln(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(vl=lt()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,gl(t,s)));break;case 22:c=t.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,et=Gi,mt=Je;if(Gi=et||c,Je=mt||F,Cn(n,t),Je=mt,Gi=et,Ln(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||F||Gi||Je||Ka(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,c)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{b=F.stateNode;var Mt=F.memoizedProps.style,nt=Mt!=null&&Mt.hasOwnProperty("display")?Mt.display:null;b.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(Nt){Ce(F,F.return,Nt)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=c?"":F.memoizedProps}catch(Nt){Ce(F,F.return,Nt)}}}else if(n.tag===18){if(a===null){F=n;try{var ot=F.stateNode;c?Vm(ot,!0):Vm(F.stateNode,!1)}catch(Nt){Ce(F,F.return,Nt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,gl(t,a))));break;case 19:Cn(n,t),Ln(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,gl(t,s)));break;case 30:break;case 21:break;default:Cn(n,t),Ln(t)}}function Ln(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Xp(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=Pu(t);ml(t,f,c);break;case 5:var _=a.stateNode;a.flags&32&&(ms(_,""),a.flags&=-33);var b=Pu(t);ml(t,b,_);break;case 3:case 4:var F=a.stateNode.containerInfo,et=Pu(t);Bu(t,et,F);break;default:throw Error(r(161))}}catch(mt){Ce(t,t.return,mt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function $p(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;$p(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ki(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)jp(t,n.alternate,n),n=n.sibling}function Ka(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ma(4,n,n.return),Ka(n);break;case 1:Ei(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Vp(n,n.return,a),Ka(n);break;case 27:ro(n.stateNode);case 26:case 5:Ei(n,n.return),Ka(n);break;case 22:n.memoizedState===null&&Ka(n);break;case 30:Ka(n);break;default:Ka(n)}t=t.sibling}}function Xi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:Xi(c,f,a),Kr(4,f);break;case 1:if(Xi(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(et){Ce(s,s.return,et)}if(s=f,c=s.updateQueue,c!==null){var b=s.stateNode;try{var F=c.shared.hiddenCallbacks;if(F!==null)for(c.shared.hiddenCallbacks=null,c=0;c<F.length;c++)Ld(F[c],b)}catch(et){Ce(s,s.return,et)}}a&&_&64&&Gp(f),Qr(f,f.return);break;case 27:Wp(f);case 26:case 5:Xi(c,f,a),a&&s===null&&_&4&&kp(f),Qr(f,f.return);break;case 12:Xi(c,f,a);break;case 31:Xi(c,f,a),a&&_&4&&Kp(c,f);break;case 13:Xi(c,f,a),a&&_&4&&Qp(c,f);break;case 22:f.memoizedState===null&&Xi(c,f,a),Qr(f,f.return);break;case 30:break;default:Xi(c,f,a)}n=n.sibling}}function Iu(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Br(a))}function Hu(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Br(t))}function di(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)tm(t,n,a,s),n=n.sibling}function tm(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:di(t,n,a,s),c&2048&&Kr(9,n);break;case 1:di(t,n,a,s);break;case 3:di(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Br(t)));break;case 12:if(c&2048){di(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,b=f.onPostCommit;typeof b=="function"&&b(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(F){Ce(n,n.return,F)}}else di(t,n,a,s);break;case 31:di(t,n,a,s);break;case 13:di(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?di(t,n,a,s):Jr(t,n):f._visibility&2?di(t,n,a,s):(f._visibility|=2,zs(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&Iu(_,n);break;case 24:di(t,n,a,s),c&2048&&Hu(n.alternate,n);break;default:di(t,n,a,s)}}function zs(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,b=a,F=s,et=_.flags;switch(_.tag){case 0:case 11:case 15:zs(f,_,b,F,c),Kr(8,_);break;case 23:break;case 22:var mt=_.stateNode;_.memoizedState!==null?mt._visibility&2?zs(f,_,b,F,c):Jr(f,_):(mt._visibility|=2,zs(f,_,b,F,c)),c&&et&2048&&Iu(_.alternate,_);break;case 24:zs(f,_,b,F,c),c&&et&2048&&Hu(_.alternate,_);break;default:zs(f,_,b,F,c)}n=n.sibling}}function Jr(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:Jr(a,s),c&2048&&Iu(s.alternate,s);break;case 24:Jr(a,s),c&2048&&Hu(s.alternate,s);break;default:Jr(a,s)}n=n.sibling}}var $r=8192;function Ps(t,n,a){if(t.subtreeFlags&$r)for(t=t.child;t!==null;)em(t,n,a),t=t.sibling}function em(t,n,a){switch(t.tag){case 26:Ps(t,n,a),t.flags&$r&&t.memoizedState!==null&&px(a,hi,t.memoizedState,t.memoizedProps);break;case 5:Ps(t,n,a);break;case 3:case 4:var s=hi;hi=Ll(t.stateNode.containerInfo),Ps(t,n,a),hi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=$r,$r=16777216,Ps(t,n,a),$r=s):Ps(t,n,a));break;default:Ps(t,n,a)}}function nm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function to(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];cn=s,am(s,t)}nm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)im(t),t=t.sibling}function im(t){switch(t.tag){case 0:case 11:case 15:to(t),t.flags&2048&&ma(9,t,t.return);break;case 3:to(t);break;case 12:to(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,_l(t)):to(t);break;default:to(t)}}function _l(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];cn=s,am(s,t)}nm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ma(8,n,n.return),_l(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,_l(n));break;default:_l(n)}t=t.sibling}}function am(t,n){for(;cn!==null;){var a=cn;switch(a.tag){case 0:case 11:case 15:ma(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Br(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,cn=s;else t:for(a=t;cn!==null;){s=cn;var c=s.sibling,f=s.return;if(Yp(s),s===a){cn=null;break t}if(c!==null){c.return=f,cn=c;break t}cn=f}}}var Cv={getCacheForType:function(t){var n=pn(Ze),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return pn(Ze).controller.signal}},Lv=typeof WeakMap=="function"?WeakMap:Map,Ae=0,Oe=null,fe=null,pe=0,Re=0,Hn=null,ga=!1,Bs=!1,Gu=!1,Wi=0,qe=0,_a=0,Qa=0,Vu=0,Gn=0,Fs=0,eo=null,Dn=null,ku=!1,vl=0,sm=0,xl=1/0,Sl=null,va=null,nn=0,xa=null,Is=null,qi=0,Xu=0,Wu=null,rm=null,no=0,qu=null;function Vn(){return(Ae&2)!==0&&pe!==0?pe&-pe:I.T!==null?Ju():L()}function om(){if(Gn===0)if((pe&536870912)===0||_e){var t=bt;bt<<=1,(bt&3932160)===0&&(bt=262144),Gn=t}else Gn=536870912;return t=Fn.current,t!==null&&(t.flags|=32),Gn}function Un(t,n,a){(t===Oe&&(Re===2||Re===9)||t.cancelPendingCommit!==null)&&(Hs(t,0),Sa(t,pe,Gn,!1)),ln(t,a),((Ae&2)===0||t!==Oe)&&(t===Oe&&((Ae&2)===0&&(Qa|=a),qe===4&&Sa(t,pe,Gn,!1)),bi(t))}function lm(t,n,a){if((Ae&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Me(t,n),c=s?Nv(t,n):Yu(t,n,!0),f=s;do{if(c===0){Bs&&!s&&Sa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Dv(a)){c=Yu(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var b=t;c=eo;var F=b.current.memoizedState.isDehydrated;if(F&&(Hs(b,_).flags|=256),_=Yu(b,_,!1),_!==2){if(Gu&&!F){b.errorRecoveryDisabledLanes|=f,Qa|=f,c=4;break t}f=Dn,Dn=c,f!==null&&(Dn===null?Dn=f:Dn.push.apply(Dn,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){Hs(t,0),Sa(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Sa(s,n,Gn,!ga);break t;case 2:Dn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=vl+300-lt(),10<c)){if(Sa(s,n,Gn,!ga),ye(s,0,!0)!==0)break t;qi=n,s.timeoutHandle=Im(cm.bind(null,s,a,Dn,Sl,ku,n,Gn,Qa,Fs,ga,f,"Throttled",-0,0),c);break t}cm(s,a,Dn,Sl,ku,n,Gn,Qa,Fs,ga,f,null,-0,0)}}break}while(!0);bi(t)}function cm(t,n,a,s,c,f,_,b,F,et,mt,Mt,nt,ot){if(t.timeoutHandle=-1,Mt=n.subtreeFlags,Mt&8192||(Mt&16785408)===16785408){Mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Di},em(n,f,Mt);var Nt=(f&62914560)===f?vl-lt():(f&4194048)===f?sm-lt():0;if(Nt=mx(Mt,Nt),Nt!==null){qi=f,t.cancelPendingCommit=Nt(_m.bind(null,t,n,f,a,s,c,_,b,F,mt,Mt,null,nt,ot)),Sa(t,f,_,!et);return}}_m(t,n,f,a,s,c,_,b,F)}function Dv(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Pn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Sa(t,n,a,s){n&=~Vu,n&=~Qa,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Kt(c),_=1<<f;s[f]=-1,c&=~_}a!==0&&za(t,a,n)}function Ml(){return(Ae&6)===0?(io(0),!1):!0}function ju(){if(fe!==null){if(Re===0)var t=fe.return;else t=fe,zi=Va=null,cu(t),Ls=null,Ir=0,t=fe;for(;t!==null;)Hp(t.alternate,t),t=t.return;fe=null}}function Hs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Qv(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),qi=0,ju(),Oe=t,fe=a=Ni(t.current,null),pe=n,Re=0,Hn=null,ga=!1,Bs=Me(t,n),Gu=!1,Fs=Gn=Vu=Qa=_a=qe=0,Dn=eo=null,ku=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Kt(s),f=1<<c;n|=t[c],s&=~f}return Wi=n,Vo(),a}function um(t,n){te=null,I.H=jr,n===Cs||n===Ko?(n=Ad(),Re=3):n===Qc?(n=Ad(),Re=4):Re=n===Tu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Hn=n,fe===null&&(qe=1,ul(t,$n(n,t.current)))}function fm(){var t=Fn.current;return t===null?!0:(pe&4194048)===pe?ii===null:(pe&62914560)===pe||(pe&536870912)!==0?t===ii:!1}function hm(){var t=I.H;return I.H=jr,t===null?jr:t}function dm(){var t=I.A;return I.A=Cv,t}function yl(){qe=4,ga||(pe&4194048)!==pe&&Fn.current!==null||(Bs=!0),(_a&134217727)===0&&(Qa&134217727)===0||Oe===null||Sa(Oe,pe,Gn,!1)}function Yu(t,n,a){var s=Ae;Ae|=2;var c=hm(),f=dm();(Oe!==t||pe!==n)&&(Sl=null,Hs(t,n)),n=!1;var _=qe;t:do try{if(Re!==0&&fe!==null){var b=fe,F=Hn;switch(Re){case 8:ju(),_=6;break t;case 3:case 2:case 9:case 6:Fn.current===null&&(n=!0);var et=Re;if(Re=0,Hn=null,Gs(t,b,F,et),a&&Bs){_=0;break t}break;default:et=Re,Re=0,Hn=null,Gs(t,b,F,et)}}Uv(),_=qe;break}catch(mt){um(t,mt)}while(!0);return n&&t.shellSuspendCounter++,zi=Va=null,Ae=s,I.H=c,I.A=f,fe===null&&(Oe=null,pe=0,Vo()),_}function Uv(){for(;fe!==null;)pm(fe)}function Nv(t,n){var a=Ae;Ae|=2;var s=hm(),c=dm();Oe!==t||pe!==n?(Sl=null,xl=lt()+500,Hs(t,n)):Bs=Me(t,n);t:do try{if(Re!==0&&fe!==null){n=fe;var f=Hn;e:switch(Re){case 1:Re=0,Hn=null,Gs(t,n,f,1);break;case 2:case 9:if(bd(f)){Re=0,Hn=null,mm(n);break}n=function(){Re!==2&&Re!==9||Oe!==t||(Re=7),bi(t)},f.then(n,n);break t;case 3:Re=7;break t;case 4:Re=5;break t;case 7:bd(f)?(Re=0,Hn=null,mm(n)):(Re=0,Hn=null,Gs(t,n,f,7));break;case 5:var _=null;switch(fe.tag){case 26:_=fe.memoizedState;case 5:case 27:var b=fe;if(_?tg(_):b.stateNode.complete){Re=0,Hn=null;var F=b.sibling;if(F!==null)fe=F;else{var et=b.return;et!==null?(fe=et,El(et)):fe=null}break e}}Re=0,Hn=null,Gs(t,n,f,5);break;case 6:Re=0,Hn=null,Gs(t,n,f,6);break;case 8:ju(),qe=6;break t;default:throw Error(r(462))}}Ov();break}catch(mt){um(t,mt)}while(!0);return zi=Va=null,I.H=s,I.A=c,Ae=a,fe!==null?0:(Oe=null,pe=0,Vo(),qe)}function Ov(){for(;fe!==null&&!B();)pm(fe)}function pm(t){var n=Fp(t.alternate,t,Wi);t.memoizedProps=t.pendingProps,n===null?El(t):fe=n}function mm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Up(a,n,n.pendingProps,n.type,void 0,pe);break;case 11:n=Up(a,n,n.pendingProps,n.type.render,n.ref,pe);break;case 5:cu(n);default:Hp(a,n),n=fe=dd(n,Wi),n=Fp(a,n,Wi)}t.memoizedProps=t.pendingProps,n===null?El(t):fe=n}function Gs(t,n,a,s){zi=Va=null,cu(n),Ls=null,Ir=0;var c=n.return;try{if(yv(t,c,n,a,pe)){qe=1,ul(t,$n(a,t.current)),fe=null;return}}catch(f){if(c!==null)throw fe=c,f;qe=1,ul(t,$n(a,t.current)),fe=null;return}n.flags&32768?(_e||s===1?t=!0:Bs||(pe&536870912)!==0?t=!1:(ga=t=!0,(s===2||s===9||s===3||s===6)&&(s=Fn.current,s!==null&&s.tag===13&&(s.flags|=16384))),gm(n,t)):El(n)}function El(t){var n=t;do{if((n.flags&32768)!==0){gm(n,ga);return}t=n.return;var a=Tv(n.alternate,n,Wi);if(a!==null){fe=a;return}if(n=n.sibling,n!==null){fe=n;return}fe=n=t}while(n!==null);qe===0&&(qe=5)}function gm(t,n){do{var a=Av(t.alternate,t);if(a!==null){a.flags&=32767,fe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){fe=t;return}fe=t=a}while(t!==null);qe=6,fe=null}function _m(t,n,a,s,c,f,_,b,F){t.cancelPendingCommit=null;do bl();while(nn!==0);if((Ae&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Pc,Zn(t,a,f,_,b,F),t===Oe&&(fe=Oe=null,pe=0),Is=n,xa=t,qi=a,Xu=f,Wu=c,rm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Fv(jt,function(){return ym(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=I.T,I.T=null,c=X.p,X.p=2,_=Ae,Ae|=4;try{wv(t,n,a)}finally{Ae=_,X.p=c,I.T=s}}nn=1,vm(),xm(),Sm()}}function vm(){if(nn===1){nn=0;var t=xa,n=Is,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var s=X.p;X.p=2;var c=Ae;Ae|=4;try{Jp(n,t);var f=of,_=ad(t.containerInfo),b=f.focusedElem,F=f.selectionRange;if(_!==b&&b&&b.ownerDocument&&id(b.ownerDocument.documentElement,b)){if(F!==null&&Dc(b)){var et=F.start,mt=F.end;if(mt===void 0&&(mt=et),"selectionStart"in b)b.selectionStart=et,b.selectionEnd=Math.min(mt,b.value.length);else{var Mt=b.ownerDocument||document,nt=Mt&&Mt.defaultView||window;if(nt.getSelection){var ot=nt.getSelection(),Nt=b.textContent.length,Yt=Math.min(F.start,Nt),Ne=F.end===void 0?Yt:Math.min(F.end,Nt);!ot.extend&&Yt>Ne&&(_=Ne,Ne=Yt,Yt=_);var j=nd(b,Yt),G=nd(b,Ne);if(j&&G&&(ot.rangeCount!==1||ot.anchorNode!==j.node||ot.anchorOffset!==j.offset||ot.focusNode!==G.node||ot.focusOffset!==G.offset)){var tt=Mt.createRange();tt.setStart(j.node,j.offset),ot.removeAllRanges(),Yt>Ne?(ot.addRange(tt),ot.extend(G.node,G.offset)):(tt.setEnd(G.node,G.offset),ot.addRange(tt))}}}}for(Mt=[],ot=b;ot=ot.parentNode;)ot.nodeType===1&&Mt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<Mt.length;b++){var vt=Mt[b];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}Pl=!!rf,of=rf=null}finally{Ae=c,X.p=s,I.T=a}}t.current=n,nn=2}}function xm(){if(nn===2){nn=0;var t=xa,n=Is,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var s=X.p;X.p=2;var c=Ae;Ae|=4;try{jp(t,n.alternate,n)}finally{Ae=c,X.p=s,I.T=a}}nn=3}}function Sm(){if(nn===4||nn===3){nn=0,w();var t=xa,n=Is,a=qi,s=rm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?nn=5:(nn=0,Is=xa=null,Mm(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(va=null),Tr(a),n=n.stateNode,wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Gt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=I.T,c=X.p,X.p=2,I.T=null;try{for(var f=t.onRecoverableError,_=0;_<s.length;_++){var b=s[_];f(b.value,{componentStack:b.stack})}}finally{I.T=n,X.p=c}}(qi&3)!==0&&bl(),bi(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===qu?no++:(no=0,qu=t):no=0,io(0)}}function Mm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Br(n)))}function bl(){return vm(),xm(),Sm(),ym()}function ym(){if(nn!==5)return!1;var t=xa,n=Xu;Xu=0;var a=Tr(qi),s=I.T,c=X.p;try{X.p=32>a?32:a,I.T=null,a=Wu,Wu=null;var f=xa,_=qi;if(nn=0,Is=xa=null,qi=0,(Ae&6)!==0)throw Error(r(331));var b=Ae;if(Ae|=4,im(f.current),tm(f,f.current,_,a),Ae=b,io(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Gt,f)}catch{}return!0}finally{X.p=c,I.T=s,Mm(t,n)}}function Em(t,n,a){n=$n(a,n),n=bu(t.stateNode,n,2),t=ha(t,n,2),t!==null&&(ln(t,2),bi(t))}function Ce(t,n,a){if(t.tag===3)Em(t,t,a);else for(;n!==null;){if(n.tag===3){Em(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(va===null||!va.has(s))){t=$n(a,t),a=bp(2),s=ha(n,a,2),s!==null&&(Tp(a,s,n,t),ln(s,2),bi(s));break}}n=n.return}}function Zu(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Lv;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(Gu=!0,c.add(a),t=zv.bind(null,t,n,a),n.then(t,t))}function zv(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Oe===t&&(pe&a)===a&&(qe===4||qe===3&&(pe&62914560)===pe&&300>lt()-vl?(Ae&2)===0&&Hs(t,0):Vu|=a,Fs===pe&&(Fs=0)),bi(t)}function bm(t,n){n===0&&(n=ui()),t=Ia(t,n),t!==null&&(ln(t,n),bi(t))}function Pv(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),bm(t,a)}function Bv(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),bm(t,a)}function Fv(t,n){return Le(t,n)}var Tl=null,Vs=null,Ku=!1,Al=!1,Qu=!1,Ma=0;function bi(t){t!==Vs&&t.next===null&&(Vs===null?Tl=Vs=t:Vs=Vs.next=t),Al=!0,Ku||(Ku=!0,Hv())}function io(t,n){if(!Qu&&Al){Qu=!0;do for(var a=!1,s=Tl;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var _=s.suspendedLanes,b=s.pingedLanes;f=(1<<31-Kt(42|t)+1)-1,f&=c&~(_&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Rm(s,f))}else f=pe,f=ye(s,s===Oe?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Me(s,f)||(a=!0,Rm(s,f));s=s.next}while(a);Qu=!1}}function Iv(){Tm()}function Tm(){Al=Ku=!1;var t=0;Ma!==0&&Kv()&&(t=Ma);for(var n=lt(),a=null,s=Tl;s!==null;){var c=s.next,f=Am(s,n);f===0?(s.next=null,a===null?Tl=c:a.next=c,c===null&&(Vs=a)):(a=s,(t!==0||(f&3)!==0)&&(Al=!0)),s=c}nn!==0&&nn!==5||io(t),Ma!==0&&(Ma=0)}function Am(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Kt(f),b=1<<_,F=c[_];F===-1?((b&a)===0||(b&s)!==0)&&(c[_]=on(b,n)):F<=n&&(t.expiredLanes|=b),f&=~b}if(n=Oe,a=pe,a=ye(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Re===2||Re===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Ge(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Me(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Ge(s),Tr(a)){case 2:case 8:a=Ct;break;case 32:a=jt;break;case 268435456:a=_t;break;default:a=jt}return s=wm.bind(null,t),a=Le(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Ge(s),t.callbackPriority=2,t.callbackNode=null,2}function wm(t,n){if(nn!==0&&nn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(bl()&&t.callbackNode!==a)return null;var s=pe;return s=ye(t,t===Oe?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(lm(t,s,n),Am(t,lt()),t.callbackNode!=null&&t.callbackNode===a?wm.bind(null,t):null)}function Rm(t,n){if(bl())return null;lm(t,n,!0)}function Hv(){Jv(function(){(Ae&6)!==0?Le(At,Iv):Tm()})}function Ju(){if(Ma===0){var t=ws;t===0&&(t=pt,pt<<=1,(pt&261888)===0&&(pt=256)),Ma=t}return Ma}function Cm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Oo(""+t)}function Lm(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Gv(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Cm((c[ht]||null).action),_=s.submitter;_&&(n=(n=_[ht]||null)?Cm(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var b=new Fo("action","action",null,s,c);t.push({event:b,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ma!==0){var F=_?Lm(c,_):new FormData(c);vu(a,{pending:!0,data:F,method:c.method,action:f},null,F)}}else typeof f=="function"&&(b.preventDefault(),F=_?Lm(c,_):new FormData(c),vu(a,{pending:!0,data:F,method:c.method,action:f},f,F))},currentTarget:c}]})}}for(var $u=0;$u<zc.length;$u++){var tf=zc[$u],Vv=tf.toLowerCase(),kv=tf[0].toUpperCase()+tf.slice(1);fi(Vv,"on"+kv)}fi(od,"onAnimationEnd"),fi(ld,"onAnimationIteration"),fi(cd,"onAnimationStart"),fi("dblclick","onDoubleClick"),fi("focusin","onFocus"),fi("focusout","onBlur"),fi(sv,"onTransitionRun"),fi(rv,"onTransitionStart"),fi(ov,"onTransitionCancel"),fi(ud,"onTransitionEnd"),An("onMouseEnter",["mouseout","mouseover"]),An("onMouseLeave",["mouseout","mouseover"]),An("onPointerEnter",["pointerout","pointerover"]),An("onPointerLeave",["pointerout","pointerover"]),ze("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ze("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ze("onBeforeInput",["compositionend","keypress","textInput","paste"]),ze("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ze("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ze("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ao));function Dm(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var _=s.length-1;0<=_;_--){var b=s[_],F=b.instance,et=b.currentTarget;if(b=b.listener,F!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=et;try{f(c)}catch(mt){Go(mt)}c.currentTarget=null,f=F}else for(_=0;_<s.length;_++){if(b=s[_],F=b.instance,et=b.currentTarget,b=b.listener,F!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=et;try{f(c)}catch(mt){Go(mt)}c.currentTarget=null,f=F}}}}function he(t,n){var a=n[Xt];a===void 0&&(a=n[Xt]=new Set);var s=t+"__bubble";a.has(s)||(Um(n,t,2,!1),a.add(s))}function ef(t,n,a){var s=0;n&&(s|=4),Um(a,t,s,n)}var wl="_reactListening"+Math.random().toString(36).slice(2);function nf(t){if(!t[wl]){t[wl]=!0,ue.forEach(function(a){a!=="selectionchange"&&(Xv.has(a)||ef(a,!1,t),ef(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[wl]||(n[wl]=!0,ef("selectionchange",!1,n))}}function Um(t,n,a,s){switch(og(n)){case 2:var c=vx;break;case 8:c=xx;break;default:c=vf}a=c.bind(null,n,a,t),c=void 0,!yc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function af(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var _=s.tag;if(_===3||_===4){var b=s.stateNode.containerInfo;if(b===c)break;if(_===4)for(_=s.return;_!==null;){var F=_.tag;if((F===3||F===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;b!==null;){if(_=ge(b),_===null)return;if(F=_.tag,F===5||F===6||F===26||F===27){s=f=_;continue t}b=b.parentNode}}s=s.return}Bh(function(){var et=f,mt=Sc(a),Mt=[];t:{var nt=fd.get(t);if(nt!==void 0){var ot=Fo,Nt=t;switch(t){case"keypress":if(Po(a)===0)break t;case"keydown":case"keyup":ot=B_;break;case"focusin":Nt="focus",ot=Ac;break;case"focusout":Nt="blur",ot=Ac;break;case"beforeblur":case"afterblur":ot=Ac;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Hh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=T_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=H_;break;case od:case ld:case cd:ot=R_;break;case ud:ot=V_;break;case"scroll":case"scrollend":ot=E_;break;case"wheel":ot=X_;break;case"copy":case"cut":case"paste":ot=L_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Vh;break;case"toggle":case"beforetoggle":ot=q_}var Yt=(n&4)!==0,Ne=!Yt&&(t==="scroll"||t==="scrollend"),j=Yt?nt!==null?nt+"Capture":null:nt;Yt=[];for(var G=et,tt;G!==null;){var vt=G;if(tt=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||tt===null||j===null||(vt=Ar(G,j),vt!=null&&Yt.push(so(G,vt,tt))),Ne)break;G=G.return}0<Yt.length&&(nt=new ot(nt,Nt,null,a,mt),Mt.push({event:nt,listeners:Yt}))}}if((n&7)===0){t:{if(nt=t==="mouseover"||t==="pointerover",ot=t==="mouseout"||t==="pointerout",nt&&a!==xc&&(Nt=a.relatedTarget||a.fromElement)&&(ge(Nt)||Nt[Ft]))break t;if((ot||nt)&&(nt=mt.window===mt?mt:(nt=mt.ownerDocument)?nt.defaultView||nt.parentWindow:window,ot?(Nt=a.relatedTarget||a.toElement,ot=et,Nt=Nt?ge(Nt):null,Nt!==null&&(Ne=u(Nt),Yt=Nt.tag,Nt!==Ne||Yt!==5&&Yt!==27&&Yt!==6)&&(Nt=null)):(ot=null,Nt=et),ot!==Nt)){if(Yt=Hh,vt="onMouseLeave",j="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Yt=Vh,vt="onPointerLeave",j="onPointerEnter",G="pointer"),Ne=ot==null?nt:fn(ot),tt=Nt==null?nt:fn(Nt),nt=new Yt(vt,G+"leave",ot,a,mt),nt.target=Ne,nt.relatedTarget=tt,vt=null,ge(mt)===et&&(Yt=new Yt(j,G+"enter",Nt,a,mt),Yt.target=tt,Yt.relatedTarget=Ne,vt=Yt),Ne=vt,ot&&Nt)e:{for(Yt=Wv,j=ot,G=Nt,tt=0,vt=j;vt;vt=Yt(vt))tt++;vt=0;for(var Vt=G;Vt;Vt=Yt(Vt))vt++;for(;0<tt-vt;)j=Yt(j),tt--;for(;0<vt-tt;)G=Yt(G),vt--;for(;tt--;){if(j===G||G!==null&&j===G.alternate){Yt=j;break e}j=Yt(j),G=Yt(G)}Yt=null}else Yt=null;ot!==null&&Nm(Mt,nt,ot,Yt,!1),Nt!==null&&Ne!==null&&Nm(Mt,Ne,Nt,Yt,!0)}}t:{if(nt=et?fn(et):window,ot=nt.nodeName&&nt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&nt.type==="file")var Ee=Kh;else if(Yh(nt))if(Qh)Ee=nv;else{Ee=tv;var Bt=$_}else ot=nt.nodeName,!ot||ot.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?et&&vc(et.elementType)&&(Ee=Kh):Ee=ev;if(Ee&&(Ee=Ee(t,et))){Zh(Mt,Ee,a,mt);break t}Bt&&Bt(t,nt,et),t==="focusout"&&et&&nt.type==="number"&&et.memoizedProps.value!=null&&_c(nt,"number",nt.value)}switch(Bt=et?fn(et):window,t){case"focusin":(Yh(Bt)||Bt.contentEditable==="true")&&(xs=Bt,Uc=et,Or=null);break;case"focusout":Or=Uc=xs=null;break;case"mousedown":Nc=!0;break;case"contextmenu":case"mouseup":case"dragend":Nc=!1,sd(Mt,a,mt);break;case"selectionchange":if(av)break;case"keydown":case"keyup":sd(Mt,a,mt)}var ie;if(Rc)t:{switch(t){case"compositionstart":var me="onCompositionStart";break t;case"compositionend":me="onCompositionEnd";break t;case"compositionupdate":me="onCompositionUpdate";break t}me=void 0}else vs?qh(t,a)&&(me="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(me="onCompositionStart");me&&(kh&&a.locale!=="ko"&&(vs||me!=="onCompositionStart"?me==="onCompositionEnd"&&vs&&(ie=Fh()):(sa=mt,Ec="value"in sa?sa.value:sa.textContent,vs=!0)),Bt=Rl(et,me),0<Bt.length&&(me=new Gh(me,t,null,a,mt),Mt.push({event:me,listeners:Bt}),ie?me.data=ie:(ie=jh(a),ie!==null&&(me.data=ie)))),(ie=Y_?Z_(t,a):K_(t,a))&&(me=Rl(et,"onBeforeInput"),0<me.length&&(Bt=new Gh("onBeforeInput","beforeinput",null,a,mt),Mt.push({event:Bt,listeners:me}),Bt.data=ie)),Gv(Mt,t,et,a,mt)}Dm(Mt,n)})}function so(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Rl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ar(t,a),c!=null&&s.unshift(so(t,c,f)),c=Ar(t,n),c!=null&&s.push(so(t,c,f))),t.tag===3)return s;t=t.return}return[]}function Wv(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Nm(t,n,a,s,c){for(var f=n._reactName,_=[];a!==null&&a!==s;){var b=a,F=b.alternate,et=b.stateNode;if(b=b.tag,F!==null&&F===s)break;b!==5&&b!==26&&b!==27||et===null||(F=et,c?(et=Ar(a,f),et!=null&&_.unshift(so(a,et,F))):c||(et=Ar(a,f),et!=null&&_.push(so(a,et,F)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var qv=/\r\n?/g,jv=/\u0000|\uFFFD/g;function Om(t){return(typeof t=="string"?t:""+t).replace(qv,`
`).replace(jv,"")}function zm(t,n){return n=Om(n),Om(t)===n}function Ue(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||ms(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&ms(t,""+s);break;case"className":aa(t,"class",s);break;case"tabIndex":aa(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":aa(t,a,s);break;case"style":zh(t,s,f);break;case"data":if(n!=="object"){aa(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Oo(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ue(t,n,"name",c.name,c,null),Ue(t,n,"formEncType",c.formEncType,c,null),Ue(t,n,"formMethod",c.formMethod,c,null),Ue(t,n,"formTarget",c.formTarget,c,null)):(Ue(t,n,"encType",c.encType,c,null),Ue(t,n,"method",c.method,c,null),Ue(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Oo(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Di);break;case"onScroll":s!=null&&he("scroll",t);break;case"onScrollEnd":s!=null&&he("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Oo(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":he("beforetoggle",t),he("toggle",t),Kn(t,"popover",s);break;case"xlinkActuate":ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ke(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ke(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ke(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ke(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Kn(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=M_.get(a)||a,Kn(t,a,s))}}function sf(t,n,a,s,c,f){switch(a){case"style":zh(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?ms(t,s):(typeof s=="number"||typeof s=="bigint")&&ms(t,""+s);break;case"onScroll":s!=null&&he("scroll",t);break;case"onScrollEnd":s!=null&&he("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Di);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!hs.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[ht]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Kn(t,a,s)}}}function gn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":he("error",t),he("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ue(t,n,f,_,a,null)}}c&&Ue(t,n,"srcSet",a.srcSet,a,null),s&&Ue(t,n,"src",a.src,a,null);return;case"input":he("invalid",t);var b=f=_=c=null,F=null,et=null;for(s in a)if(a.hasOwnProperty(s)){var mt=a[s];if(mt!=null)switch(s){case"name":c=mt;break;case"type":_=mt;break;case"checked":F=mt;break;case"defaultChecked":et=mt;break;case"value":f=mt;break;case"defaultValue":b=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(r(137,n));break;default:Ue(t,n,s,mt,a,null)}}Dh(t,f,b,F,et,_,c,!1);return;case"select":he("invalid",t),s=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":_=b;break;case"multiple":s=b;default:Ue(t,n,c,b,a,null)}n=f,a=_,t.multiple=!!s,n!=null?ps(t,!!s,n,!1):a!=null&&ps(t,!!s,a,!0);return;case"textarea":he("invalid",t),f=c=s=null;for(_ in a)if(a.hasOwnProperty(_)&&(b=a[_],b!=null))switch(_){case"value":s=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Ue(t,n,_,b,a,null)}Nh(t,s,c,f);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(s=a[F],s!=null))switch(F){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ue(t,n,F,s,a,null)}return;case"dialog":he("beforetoggle",t),he("toggle",t),he("cancel",t),he("close",t);break;case"iframe":case"object":he("load",t);break;case"video":case"audio":for(s=0;s<ao.length;s++)he(ao[s],t);break;case"image":he("error",t),he("load",t);break;case"details":he("toggle",t);break;case"embed":case"source":case"link":he("error",t),he("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(s=a[et],s!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ue(t,n,et,s,a,null)}return;default:if(vc(n)){for(mt in a)a.hasOwnProperty(mt)&&(s=a[mt],s!==void 0&&sf(t,n,mt,s,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(s=a[b],s!=null&&Ue(t,n,b,s,a,null))}function Yv(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,b=null,F=null,et=null,mt=null;for(ot in a){var Mt=a[ot];if(a.hasOwnProperty(ot)&&Mt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":F=Mt;default:s.hasOwnProperty(ot)||Ue(t,n,ot,null,s,Mt)}}for(var nt in s){var ot=s[nt];if(Mt=a[nt],s.hasOwnProperty(nt)&&(ot!=null||Mt!=null))switch(nt){case"type":f=ot;break;case"name":c=ot;break;case"checked":et=ot;break;case"defaultChecked":mt=ot;break;case"value":_=ot;break;case"defaultValue":b=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:ot!==Mt&&Ue(t,n,nt,ot,s,Mt)}}gc(t,_,b,F,et,mt,f,c);return;case"select":ot=_=b=nt=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":ot=F;default:s.hasOwnProperty(f)||Ue(t,n,f,null,s,F)}for(c in s)if(f=s[c],F=a[c],s.hasOwnProperty(c)&&(f!=null||F!=null))switch(c){case"value":nt=f;break;case"defaultValue":b=f;break;case"multiple":_=f;default:f!==F&&Ue(t,n,c,f,s,F)}n=b,a=_,s=ot,nt!=null?ps(t,!!a,nt,!1):!!s!=!!a&&(n!=null?ps(t,!!a,n,!0):ps(t,!!a,a?[]:"",!1));return;case"textarea":ot=nt=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!s.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ue(t,n,b,null,s,c)}for(_ in s)if(c=s[_],f=a[_],s.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":nt=c;break;case"defaultValue":ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ue(t,n,_,c,s,f)}Uh(t,nt,ot);return;case"option":for(var Nt in a)if(nt=a[Nt],a.hasOwnProperty(Nt)&&nt!=null&&!s.hasOwnProperty(Nt))switch(Nt){case"selected":t.selected=!1;break;default:Ue(t,n,Nt,null,s,nt)}for(F in s)if(nt=s[F],ot=a[F],s.hasOwnProperty(F)&&nt!==ot&&(nt!=null||ot!=null))switch(F){case"selected":t.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Ue(t,n,F,nt,s,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Yt in a)nt=a[Yt],a.hasOwnProperty(Yt)&&nt!=null&&!s.hasOwnProperty(Yt)&&Ue(t,n,Yt,null,s,nt);for(et in s)if(nt=s[et],ot=a[et],s.hasOwnProperty(et)&&nt!==ot&&(nt!=null||ot!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:Ue(t,n,et,nt,s,ot)}return;default:if(vc(n)){for(var Ne in a)nt=a[Ne],a.hasOwnProperty(Ne)&&nt!==void 0&&!s.hasOwnProperty(Ne)&&sf(t,n,Ne,void 0,s,nt);for(mt in s)nt=s[mt],ot=a[mt],!s.hasOwnProperty(mt)||nt===ot||nt===void 0&&ot===void 0||sf(t,n,mt,nt,s,ot);return}}for(var j in a)nt=a[j],a.hasOwnProperty(j)&&nt!=null&&!s.hasOwnProperty(j)&&Ue(t,n,j,null,s,nt);for(Mt in s)nt=s[Mt],ot=a[Mt],!s.hasOwnProperty(Mt)||nt===ot||nt==null&&ot==null||Ue(t,n,Mt,nt,s,ot)}function Pm(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Zv(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,_=c.initiatorType,b=c.duration;if(f&&b&&Pm(_)){for(_=0,b=c.responseEnd,s+=1;s<a.length;s++){var F=a[s],et=F.startTime;if(et>b)break;var mt=F.transferSize,Mt=F.initiatorType;mt&&Pm(Mt)&&(F=F.responseEnd,_+=mt*(F<b?1:(b-et)/(F-et)))}if(--s,n+=8*(f+_)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var rf=null,of=null;function Cl(t){return t.nodeType===9?t:t.ownerDocument}function Bm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Fm(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function lf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var cf=null;function Kv(){var t=window.event;return t&&t.type==="popstate"?t===cf?!1:(cf=t,!0):(cf=null,!1)}var Im=typeof setTimeout=="function"?setTimeout:void 0,Qv=typeof clearTimeout=="function"?clearTimeout:void 0,Hm=typeof Promise=="function"?Promise:void 0,Jv=typeof queueMicrotask=="function"?queueMicrotask:typeof Hm<"u"?function(t){return Hm.resolve(null).then(t).catch($v)}:Im;function $v(t){setTimeout(function(){throw t})}function ya(t){return t==="head"}function Gm(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),qs(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")ro(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,ro(a);for(var f=a.firstChild;f;){var _=f.nextSibling,b=f.nodeName;f[$t]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&ro(t.ownerDocument.body);a=c}while(a);qs(n)}function Vm(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function uf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":uf(a),re(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function tx(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[$t])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ai(t.nextSibling),t===null)break}return null}function ex(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ai(t.nextSibling),t===null))return null;return t}function km(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ai(t.nextSibling),t===null))return null;return t}function ff(t){return t.data==="$?"||t.data==="$~"}function hf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function nx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ai(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var df=null;function Xm(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ai(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Wm(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function qm(t,n,a){switch(n=Cl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function ro(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);re(t)}var si=new Map,jm=new Set;function Ll(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ji=X.d;X.d={f:ix,r:ax,D:sx,C:rx,L:ox,m:lx,X:ux,S:cx,M:fx};function ix(){var t=ji.f(),n=Ml();return t||n}function ax(t){var n=Xe(t);n!==null&&n.tag===5&&n.type==="form"?up(n):ji.r(t)}var ks=typeof document>"u"?null:document;function Ym(t,n,a){var s=ks;if(s&&typeof n=="string"&&n){var c=Qn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),jm.has(c)||(jm.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),gn(n,"link",t),oe(n),s.head.appendChild(n)))}}function sx(t){ji.D(t),Ym("dns-prefetch",t,null)}function rx(t,n){ji.C(t,n),Ym("preconnect",t,n)}function ox(t,n,a){ji.L(t,n,a);var s=ks;if(s&&t&&n){var c='link[rel="preload"][as="'+Qn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Qn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Qn(a.imageSizes)+'"]')):c+='[href="'+Qn(t)+'"]';var f=c;switch(n){case"style":f=Xs(t);break;case"script":f=Ws(t)}si.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),si.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(oo(f))||n==="script"&&s.querySelector(lo(f))||(n=s.createElement("link"),gn(n,"link",t),oe(n),s.head.appendChild(n)))}}function lx(t,n){ji.m(t,n);var a=ks;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Qn(s)+'"][href="'+Qn(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Ws(t)}if(!si.has(f)&&(t=x({rel:"modulepreload",href:t},n),si.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(lo(f)))return}s=a.createElement("link"),gn(s,"link",t),oe(s),a.head.appendChild(s)}}}function cx(t,n,a){ji.S(t,n,a);var s=ks;if(s&&t){var c=Tn(s).hoistableStyles,f=Xs(t);n=n||"default";var _=c.get(f);if(!_){var b={loading:0,preload:null};if(_=s.querySelector(oo(f)))b.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=si.get(f))&&pf(t,a);var F=_=s.createElement("link");oe(F),gn(F,"link",t),F._p=new Promise(function(et,mt){F.onload=et,F.onerror=mt}),F.addEventListener("load",function(){b.loading|=1}),F.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Dl(_,n,s)}_={type:"stylesheet",instance:_,count:1,state:b},c.set(f,_)}}}function ux(t,n){ji.X(t,n);var a=ks;if(a&&t){var s=Tn(a).hoistableScripts,c=Ws(t),f=s.get(c);f||(f=a.querySelector(lo(c)),f||(t=x({src:t,async:!0},n),(n=si.get(c))&&mf(t,n),f=a.createElement("script"),oe(f),gn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function fx(t,n){ji.M(t,n);var a=ks;if(a&&t){var s=Tn(a).hoistableScripts,c=Ws(t),f=s.get(c);f||(f=a.querySelector(lo(c)),f||(t=x({src:t,async:!0,type:"module"},n),(n=si.get(c))&&mf(t,n),f=a.createElement("script"),oe(f),gn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Zm(t,n,a,s){var c=(c=st.current)?Ll(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Xs(a.href),a=Tn(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Xs(a.href);var f=Tn(c).hoistableStyles,_=f.get(t);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=c.querySelector(oo(t)))&&!f._p&&(_.instance=f,_.state.loading=5),si.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},si.set(t,a),f||hx(c,t,a,_.state))),n&&s===null)throw Error(r(528,""));return _}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ws(a),a=Tn(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Xs(t){return'href="'+Qn(t)+'"'}function oo(t){return'link[rel="stylesheet"]['+t+"]"}function Km(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function hx(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),gn(n,"link",a),oe(n),t.head.appendChild(n))}function Ws(t){return'[src="'+Qn(t)+'"]'}function lo(t){return"script[async]"+t}function Qm(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Qn(a.href)+'"]');if(s)return n.instance=s,oe(s),s;var c=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),oe(s),gn(s,"style",c),Dl(s,a.precedence,t),n.instance=s;case"stylesheet":c=Xs(a.href);var f=t.querySelector(oo(c));if(f)return n.state.loading|=4,n.instance=f,oe(f),f;s=Km(a),(c=si.get(c))&&pf(s,c),f=(t.ownerDocument||t).createElement("link"),oe(f);var _=f;return _._p=new Promise(function(b,F){_.onload=b,_.onerror=F}),gn(f,"link",s),n.state.loading|=4,Dl(f,a.precedence,t),n.instance=f;case"script":return f=Ws(a.src),(c=t.querySelector(lo(f)))?(n.instance=c,oe(c),c):(s=a,(c=si.get(f))&&(s=x({},a),mf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),oe(c),gn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Dl(s,a.precedence,t));return n.instance}function Dl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,_=0;_<s.length;_++){var b=s[_];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function pf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function mf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ul=null;function Jm(t,n,a){if(Ul===null){var s=new Map,c=Ul=new Map;c.set(a,s)}else c=Ul,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[$t]||f[Y]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var b=s.get(_);b?b.push(f):s.set(_,[f])}}return s}function $m(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function dx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function tg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function px(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Xs(s.href),f=n.querySelector(oo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Nl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,oe(f);return}f=n.ownerDocument||n,s=Km(s),(c=si.get(c))&&pf(s,c),f=f.createElement("link"),oe(f);var _=f;_._p=new Promise(function(b,F){_.onload=b,_.onerror=F}),gn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Nl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var gf=0;function mx(t,n){return t.stylesheets&&t.count===0&&zl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&zl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&gf===0&&(gf=62500*Zv());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&zl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>gf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Nl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)zl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ol=null;function zl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ol=new Map,n.forEach(gx,t),Ol=null,Nl.call(t))}function gx(t,n){if(!(n.state.loading&4)){var a=Ol.get(t);if(a)var s=a.get(null);else{a=new Map,Ol.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),s=_)}s&&a.set(null,s)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||s,f===s&&a.set(null,c),a.set(_,c),this.count++,s=Nl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var co={$$typeof:C,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function _x(t,n,a,s,c,f,_,b,F){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Pe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pe(0),this.hiddenUpdates=Pe(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function eg(t,n,a,s,c,f,_,b,F,et,mt,Mt){return t=new _x(t,n,a,_,F,et,mt,Mt,b),n=1,f===!0&&(n|=24),f=Bn(3,null,null,n),t.current=f,f.stateNode=t,n=Yc(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Jc(f),t}function ng(t){return t?(t=ys,t):ys}function ig(t,n,a,s,c,f){c=ng(c),s.context===null?s.context=c:s.pendingContext=c,s=fa(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ha(t,s,n),a!==null&&(Un(a,t,n),Gr(a,t,n))}function ag(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function _f(t,n){ag(t,n),(t=t.alternate)&&ag(t,n)}function sg(t){if(t.tag===13||t.tag===31){var n=Ia(t,67108864);n!==null&&Un(n,t,67108864),_f(t,67108864)}}function rg(t){if(t.tag===13||t.tag===31){var n=Vn();n=br(n);var a=Ia(t,n);a!==null&&Un(a,t,n),_f(t,n)}}var Pl=!0;function vx(t,n,a,s){var c=I.T;I.T=null;var f=X.p;try{X.p=2,vf(t,n,a,s)}finally{X.p=f,I.T=c}}function xx(t,n,a,s){var c=I.T;I.T=null;var f=X.p;try{X.p=8,vf(t,n,a,s)}finally{X.p=f,I.T=c}}function vf(t,n,a,s){if(Pl){var c=xf(s);if(c===null)af(t,n,s,Bl,a),lg(t,s);else if(Mx(c,t,n,a,s))s.stopPropagation();else if(lg(t,s),n&4&&-1<Sx.indexOf(t)){for(;c!==null;){var f=Xe(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Pt(f.pendingLanes);if(_!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;_;){var F=1<<31-Kt(_);b.entanglements[1]|=F,_&=~F}bi(f),(Ae&6)===0&&(xl=lt()+500,io(0))}}break;case 31:case 13:b=Ia(f,2),b!==null&&Un(b,f,2),Ml(),_f(f,2)}if(f=xf(s),f===null&&af(t,n,s,Bl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else af(t,n,s,null,a)}}function xf(t){return t=Sc(t),Sf(t)}var Bl=null;function Sf(t){if(Bl=null,t=ge(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Bl=t,null}function og(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Tt()){case At:return 2;case Ct:return 8;case jt:case Ot:return 32;case _t:return 268435456;default:return 32}default:return 32}}var Mf=!1,Ea=null,ba=null,Ta=null,uo=new Map,fo=new Map,Aa=[],Sx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function lg(t,n){switch(t){case"focusin":case"focusout":Ea=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":Ta=null;break;case"pointerover":case"pointerout":uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(n.pointerId)}}function ho(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Xe(n),n!==null&&sg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Mx(t,n,a,s,c){switch(n){case"focusin":return Ea=ho(Ea,t,n,a,s,c),!0;case"dragenter":return ba=ho(ba,t,n,a,s,c),!0;case"mouseover":return Ta=ho(Ta,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return uo.set(f,ho(uo.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,fo.set(f,ho(fo.get(f)||null,t,n,a,s,c)),!0}return!1}function cg(t){var n=ge(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,it(t.priority,function(){rg(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,it(t.priority,function(){rg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=xf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);xc=s,a.target.dispatchEvent(s),xc=null}else return n=Xe(a),n!==null&&sg(n),t.blockedOn=a,!1;n.shift()}return!0}function ug(t,n,a){Fl(t)&&a.delete(n)}function yx(){Mf=!1,Ea!==null&&Fl(Ea)&&(Ea=null),ba!==null&&Fl(ba)&&(ba=null),Ta!==null&&Fl(Ta)&&(Ta=null),uo.forEach(ug),fo.forEach(ug)}function Il(t,n){t.blockedOn===n&&(t.blockedOn=null,Mf||(Mf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,yx)))}var Hl=null;function fg(t){Hl!==t&&(Hl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Hl===t&&(Hl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Sf(s||a)===null)continue;break}var f=Xe(a);f!==null&&(t.splice(n,3),n-=3,vu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function qs(t){function n(F){return Il(F,t)}Ea!==null&&Il(Ea,t),ba!==null&&Il(ba,t),Ta!==null&&Il(Ta,t),uo.forEach(n),fo.forEach(n);for(var a=0;a<Aa.length;a++){var s=Aa[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Aa.length&&(a=Aa[0],a.blockedOn===null);)cg(a),a.blockedOn===null&&Aa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],_=c[ht]||null;if(typeof f=="function")_||fg(a);else if(_){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[ht]||null)b=_.formAction;else if(Sf(c)!==null)continue}else b=_.action;typeof b=="function"?a[s+1]=b:(a.splice(s,3),s-=3),fg(a)}}}function hg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function yf(t){this._internalRoot=t}Gl.prototype.render=yf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Vn();ig(a,s,t,n,null,null)},Gl.prototype.unmount=yf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;ig(t.current,2,null,t,null,null),Ml(),n[Ft]=null}};function Gl(t){this._internalRoot=t}Gl.prototype.unstable_scheduleHydration=function(t){if(t){var n=L();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Aa.length&&n!==0&&n<Aa[a].priority;a++);Aa.splice(a,0,t),a===0&&cg(t)}};var dg=e.version;if(dg!=="19.2.3")throw Error(r(527,dg,"19.2.3"));X.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var Ex={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vl.isDisabled&&Vl.supportsFiber)try{Gt=Vl.inject(Ex),wt=Vl}catch{}}return mo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=Sp,f=Mp,_=yp;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=eg(t,1,!1,null,null,a,s,null,c,f,_,hg),t[Ft]=n.current,nf(t),new yf(n)},mo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=Sp,_=Mp,b=yp,F=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=eg(t,1,!0,n,a??null,s,c,F,f,_,b,hg),n.context=ng(null),a=n.current,s=Vn(),s=br(s),c=fa(s),c.callback=null,ha(a,c,s),a=s,n.current.lanes=a,ln(n,a),bi(n),t[Ft]=n.current,nf(t),new Gl(n)},mo.version="19.2.3",mo}var Eg;function Ox(){if(Eg)return bf.exports;Eg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),bf.exports=Nx(),bf.exports}var zx=Ox();const Px=Tx(zx);var ci=_h(),Nn=(o=>(o[o.START=0]="START",o[o.PLAYING=1]="PLAYING",o[o.PAUSED=2]="PAUSED",o[o.GAMEOVER=3]="GAMEOVER",o))(Nn||{}),cr=(o=>(o.RIFLE="rifle",o.SHOTGUN="shotgun",o.SNIPER="sniper",o.PISTOL="pistol",o.SMG="smg",o))(cr||{});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vh="152",Bx=0,bg=1,Fx=2,W0=1,q0=2,ta=3,Oa=0,zn=1,Ri=2,Na=0,dr=1,Tg=2,Ag=3,wg=4,Ix=5,ur=100,Hx=101,Gx=102,Rg=103,Cg=104,Vx=200,kx=201,Xx=202,Wx=203,j0=204,Y0=205,qx=206,jx=207,Yx=208,Zx=209,Kx=210,Qx=0,Jx=1,$x=2,lh=3,tS=4,eS=5,nS=6,iS=7,xh=0,aS=1,sS=2,ea=0,rS=1,oS=2,lS=3,Z0=4,cS=5,K0=300,gr=301,_r=302,ch=303,uh=304,hc=306,fh=1e3,xi=1001,hh=1002,bn=1003,Lg=1004,Cf=1005,li=1006,uS=1007,Eo=1008,cs=1009,fS=1010,hS=1011,Q0=1012,dS=1013,as=1014,ss=1015,bo=1016,pS=1017,mS=1018,pr=1020,gS=1021,Si=1023,_S=1024,vS=1025,rs=1026,vr=1027,xS=1028,SS=1029,MS=1030,yS=1031,ES=1033,Lf=33776,Df=33777,Uf=33778,Nf=33779,Dg=35840,Ug=35841,Ng=35842,Og=35843,bS=36196,zg=37492,Pg=37496,Bg=37808,Fg=37809,Ig=37810,Hg=37811,Gg=37812,Vg=37813,kg=37814,Xg=37815,Wg=37816,qg=37817,jg=37818,Yg=37819,Zg=37820,Kg=37821,Of=36492,TS=36283,Qg=36284,Jg=36285,$g=36286,J0=3e3,os=3001,AS=3200,wS=3201,Sh=0,RS=1,ls="",ae="srgb",Li="srgb-linear",$0="display-p3",zf=7680,CS=519,t0=35044,e0="300 es",dh=1035;class Sr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pf=Math.PI/180,ph=180/Math.PI;function Ao(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Sn[o&255]+Sn[o>>8&255]+Sn[o>>16&255]+Sn[o>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[i&63|128]+Sn[i>>8&255]+"-"+Sn[i>>16&255]+Sn[i>>24&255]+Sn[r&255]+Sn[r>>8&255]+Sn[r>>16&255]+Sn[r>>24&255]).toLowerCase()}function On(o,e,i){return Math.max(e,Math.min(i,o))}function LS(o,e){return(o%e+e)%e}function Bf(o,e,i){return(1-i)*o+i*e}function n0(o){return(o&o-1)===0&&o!==0}function DS(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function kl(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function kn(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class xe{constructor(e=0,i=0){xe.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(On(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ve{constructor(){ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,i,r,l,u,d,h,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=h,v[3]=i,v[4]=u,v[5]=m,v[6]=r,v[7]=d,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],v=r[4],x=r[7],S=r[2],y=r[5],A=r[8],T=l[0],M=l[3],g=l[6],N=l[1],C=l[4],U=l[7],z=l[2],H=l[5],O=l[8];return u[0]=d*T+h*N+m*z,u[3]=d*M+h*C+m*H,u[6]=d*g+h*U+m*O,u[1]=p*T+v*N+x*z,u[4]=p*M+v*C+x*H,u[7]=p*g+v*U+x*O,u[2]=S*T+y*N+A*z,u[5]=S*M+y*C+A*H,u[8]=S*g+y*U+A*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8];return i*d*v-i*h*p-r*u*v+r*h*m+l*u*p-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8],x=v*d-h*p,S=h*m-v*u,y=p*u-d*m,A=i*x+r*S+l*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=x*T,e[1]=(l*p-v*r)*T,e[2]=(h*r-l*d)*T,e[3]=S*T,e[4]=(v*i-l*m)*T,e[5]=(l*u-h*i)*T,e[6]=y*T,e[7]=(r*m-p*i)*T,e[8]=(d*i-r*u)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Ff.makeScale(e,i)),this}rotate(e){return this.premultiply(Ff.makeRotation(-e)),this}translate(e,i){return this.premultiply(Ff.makeTranslation(e,i)),this}makeTranslation(e,i){return this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ff=new ve;function t_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function fc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}const i0={};function yo(o){o in i0||(i0[o]=!0,console.warn(o))}function mr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function If(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const US=new ve().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),NS=new ve().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function OS(o){return o.convertSRGBToLinear().applyMatrix3(NS)}function zS(o){return o.applyMatrix3(US).convertLinearToSRGB()}const PS={[Li]:o=>o,[ae]:o=>o.convertSRGBToLinear(),[$0]:OS},BS={[Li]:o=>o,[ae]:o=>o.convertLinearToSRGB(),[$0]:zS},pi={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(o){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!o},get workingColorSpace(){return Li},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,i){if(this.enabled===!1||e===i||!e||!i)return o;const r=PS[e],l=BS[i];if(r===void 0||l===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${i}".`);return l(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}};let js;class e_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{js===void 0&&(js=fc("canvas")),js.width=e.width,js.height=e.height;const r=js.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=js}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=fc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=mr(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(mr(i[r]/255)*255):i[r]=mr(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class n_{constructor(e=null){this.isSource=!0,this.uuid=Ao(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(Hf(l[d].image)):u.push(Hf(l[d]))}else u=Hf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Hf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?e_.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let FS=0;class jn extends Sr{constructor(e=jn.DEFAULT_IMAGE,i=jn.DEFAULT_MAPPING,r=xi,l=xi,u=li,d=Eo,h=Si,m=cs,p=jn.DEFAULT_ANISOTROPY,v=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=Ao(),this.name="",this.source=new n_(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof v=="string"?this.colorSpace=v:(yo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=v===os?ae:ls),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==K0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fh:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case hh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fh:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case hh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return yo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ae?os:J0}set encoding(e){yo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===os?ae:ls}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=K0;jn.DEFAULT_ANISOTROPY=1;class He{constructor(e=0,i=0,r=0,l=1){He.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],v=m[4],x=m[8],S=m[1],y=m[5],A=m[9],T=m[2],M=m[6],g=m[10];if(Math.abs(v-S)<.01&&Math.abs(x-T)<.01&&Math.abs(A-M)<.01){if(Math.abs(v+S)<.1&&Math.abs(x+T)<.1&&Math.abs(A+M)<.1&&Math.abs(p+y+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const C=(p+1)/2,U=(y+1)/2,z=(g+1)/2,H=(v+S)/4,O=(x+T)/4,q=(A+M)/4;return C>U&&C>z?C<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(C),l=H/r,u=O/r):U>z?U<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),r=H/l,u=q/l):z<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(z),r=O/u,l=q/u),this.set(r,l,u,i),this}let N=Math.sqrt((M-A)*(M-A)+(x-T)*(x-T)+(S-v)*(S-v));return Math.abs(N)<.001&&(N=1),this.x=(M-A)/N,this.y=(x-T)/N,this.z=(S-v)/N,this.w=Math.acos((p+y+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class us extends Sr{constructor(e=1,i=1,r={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new He(0,0,e,i),this.scissorTest=!1,this.viewport=new He(0,0,e,i);const l={width:e,height:i,depth:1};r.encoding!==void 0&&(yo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===os?ae:ls),this.texture=new jn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:li,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null,this.samples=r.samples!==void 0?r.samples:0}setSize(e,i,r=1){(this.width!==e||this.height!==i||this.depth!==r)&&(this.width=e,this.height=i,this.depth=r,this.texture.image.width=e,this.texture.image.height=i,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new n_(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class i_ extends jn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=bn,this.minFilter=bn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class IS extends jn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=bn,this.minFilter=bn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],v=r[l+2],x=r[l+3];const S=u[d+0],y=u[d+1],A=u[d+2],T=u[d+3];if(h===0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=x;return}if(h===1){e[i+0]=S,e[i+1]=y,e[i+2]=A,e[i+3]=T;return}if(x!==T||m!==S||p!==y||v!==A){let M=1-h;const g=m*S+p*y+v*A+x*T,N=g>=0?1:-1,C=1-g*g;if(C>Number.EPSILON){const z=Math.sqrt(C),H=Math.atan2(z,g*N);M=Math.sin(M*H)/z,h=Math.sin(h*H)/z}const U=h*N;if(m=m*M+S*U,p=p*M+y*U,v=v*M+A*U,x=x*M+T*U,M===1-h){const z=1/Math.sqrt(m*m+p*p+v*v+x*x);m*=z,p*=z,v*=z,x*=z}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=x}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],v=r[l+3],x=u[d],S=u[d+1],y=u[d+2],A=u[d+3];return e[i]=h*A+v*x+m*y-p*S,e[i+1]=m*A+v*S+p*x-h*y,e[i+2]=p*A+v*y+h*S-m*x,e[i+3]=v*A-h*x-m*S-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(r/2),v=h(l/2),x=h(u/2),S=m(r/2),y=m(l/2),A=m(u/2);switch(d){case"XYZ":this._x=S*v*x+p*y*A,this._y=p*y*x-S*v*A,this._z=p*v*A+S*y*x,this._w=p*v*x-S*y*A;break;case"YXZ":this._x=S*v*x+p*y*A,this._y=p*y*x-S*v*A,this._z=p*v*A-S*y*x,this._w=p*v*x+S*y*A;break;case"ZXY":this._x=S*v*x-p*y*A,this._y=p*y*x+S*v*A,this._z=p*v*A+S*y*x,this._w=p*v*x-S*y*A;break;case"ZYX":this._x=S*v*x-p*y*A,this._y=p*y*x+S*v*A,this._z=p*v*A-S*y*x,this._w=p*v*x+S*y*A;break;case"YZX":this._x=S*v*x+p*y*A,this._y=p*y*x+S*v*A,this._z=p*v*A-S*y*x,this._w=p*v*x-S*y*A;break;case"XZY":this._x=S*v*x-p*y*A,this._y=p*y*x-S*v*A,this._z=p*v*A+S*y*x,this._w=p*v*x+S*y*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],v=i[6],x=i[10],S=r+h+x;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(v-m)*y,this._y=(u-p)*y,this._z=(d-l)*y}else if(r>h&&r>x){const y=2*Math.sqrt(1+r-h-x);this._w=(v-m)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(u+p)/y}else if(h>x){const y=2*Math.sqrt(1+h-r-x);this._w=(u-p)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(m+v)/y}else{const y=2*Math.sqrt(1+x-r-h);this._w=(d-l)/y,this._x=(u+p)/y,this._y=(m+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(On(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+d*h+l*p-u*m,this._y=l*v+d*m+u*h-r*p,this._z=u*v+d*p+r*m-l*h,this._w=d*v-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,d=this._w;let h=d*e._w+r*e._x+l*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const y=1-i;return this._w=y*d+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*u+i*this._z,this.normalize(),this._onChangeCallback(),this}const p=Math.sqrt(m),v=Math.atan2(p,h),x=Math.sin((1-i)*v)/p,S=Math.sin(i*v)/p;return this._w=d*x+this._w*S,this._x=r*x+this._x*S,this._y=l*x+this._y*S,this._z=u*x+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=Math.random(),i=Math.sqrt(1-e),r=Math.sqrt(e),l=2*Math.PI*Math.random(),u=2*Math.PI*Math.random();return this.set(i*Math.cos(l),r*Math.sin(u),r*Math.cos(u),i*Math.sin(l))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,i=0,r=0){K.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(a0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(a0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,m=e.w,p=m*i+d*l-h*r,v=m*r+h*i-u*l,x=m*l+u*r-d*i,S=-u*i-d*r-h*l;return this.x=p*m+S*-u+v*-h-x*-d,this.y=v*m+S*-d+x*-u-p*-h,this.z=x*m+S*-h+p*-d-v*-u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Gf.copy(this).projectOnVector(e),this.sub(Gf)}reflect(e){return this.sub(Gf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(On(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(i),this.y=r*Math.sin(i),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gf=new K,a0=new wo;class Ro{constructor(e=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Zi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Zi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Zi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ys.copy(e.boundingBox),Ys.applyMatrix4(e.matrixWorld),this.union(Ys);else{const l=e.geometry;if(l!==void 0)if(i&&l.attributes!==void 0&&l.attributes.position!==void 0){const u=l.attributes.position;for(let d=0,h=u.count;d<h;d++)Zi.fromBufferAttribute(u,d).applyMatrix4(e.matrixWorld),this.expandByPoint(Zi)}else l.boundingBox===null&&l.computeBoundingBox(),Ys.copy(l.boundingBox),Ys.applyMatrix4(e.matrixWorld),this.union(Ys)}const r=e.children;for(let l=0,u=r.length;l<u;l++)this.expandByObject(r[l],i);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zi),Zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(go),Xl.subVectors(this.max,go),Zs.subVectors(e.a,go),Ks.subVectors(e.b,go),Qs.subVectors(e.c,go),Ra.subVectors(Ks,Zs),Ca.subVectors(Qs,Ks),Ja.subVectors(Zs,Qs);let i=[0,-Ra.z,Ra.y,0,-Ca.z,Ca.y,0,-Ja.z,Ja.y,Ra.z,0,-Ra.x,Ca.z,0,-Ca.x,Ja.z,0,-Ja.x,-Ra.y,Ra.x,0,-Ca.y,Ca.x,0,-Ja.y,Ja.x,0];return!Vf(i,Zs,Ks,Qs,Xl)||(i=[1,0,0,0,1,0,0,0,1],!Vf(i,Zs,Ks,Qs,Xl))?!1:(Wl.crossVectors(Ra,Ca),i=[Wl.x,Wl.y,Wl.z],Vf(i,Zs,Ks,Qs,Xl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yi=[new K,new K,new K,new K,new K,new K,new K,new K],Zi=new K,Ys=new Ro,Zs=new K,Ks=new K,Qs=new K,Ra=new K,Ca=new K,Ja=new K,go=new K,Xl=new K,Wl=new K,$a=new K;function Vf(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){$a.fromArray(o,u);const h=l.x*Math.abs($a.x)+l.y*Math.abs($a.y)+l.z*Math.abs($a.z),m=e.dot($a),p=i.dot($a),v=r.dot($a);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const HS=new Ro,_o=new K,kf=new K;class Mh{constructor(e=new K,i=-1){this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):HS.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_o.subVectors(e,this.center);const i=_o.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(_o,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_o.copy(e.center).add(kf)),this.expandByPoint(_o.copy(e.center).sub(kf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ki=new K,Xf=new K,ql=new K,La=new K,Wf=new K,jl=new K,qf=new K;class a_{constructor(e=new K,i=new K(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ki.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,i),Ki.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Xf.copy(e).add(i).multiplyScalar(.5),ql.copy(i).sub(e).normalize(),La.copy(this.origin).sub(Xf);const u=e.distanceTo(i)*.5,d=-this.direction.dot(ql),h=La.dot(this.direction),m=-La.dot(ql),p=La.lengthSq(),v=Math.abs(1-d*d);let x,S,y,A;if(v>0)if(x=d*m-h,S=d*h-m,A=u*v,x>=0)if(S>=-A)if(S<=A){const T=1/v;x*=T,S*=T,y=x*(x+d*S+2*h)+S*(d*x+S+2*m)+p}else S=u,x=Math.max(0,-(d*S+h)),y=-x*x+S*(S+2*m)+p;else S=-u,x=Math.max(0,-(d*S+h)),y=-x*x+S*(S+2*m)+p;else S<=-A?(x=Math.max(0,-(-d*u+h)),S=x>0?-u:Math.min(Math.max(-u,-m),u),y=-x*x+S*(S+2*m)+p):S<=A?(x=0,S=Math.min(Math.max(-u,-m),u),y=S*(S+2*m)+p):(x=Math.max(0,-(d*u+h)),S=x>0?u:Math.min(Math.max(-u,-m),u),y=-x*x+S*(S+2*m)+p);else S=d>0?-u:u,x=Math.max(0,-(d*S+h)),y=-x*x+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Xf).addScaledVector(ql,S),y}intersectSphere(e,i){Ki.subVectors(e.center,this.origin);const r=Ki.dot(this.direction),l=Ki.dot(Ki)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,m;const p=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),v>=0?(u=(e.min.y-S.y)*v,d=(e.max.y-S.y)*v):(u=(e.max.y-S.y)*v,d=(e.min.y-S.y)*v),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),x>=0?(h=(e.min.z-S.z)*x,m=(e.max.z-S.z)*x):(h=(e.max.z-S.z)*x,m=(e.min.z-S.z)*x),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,i,r,l,u){Wf.subVectors(i,e),jl.subVectors(r,e),qf.crossVectors(Wf,jl);let d=this.direction.dot(qf),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;La.subVectors(this.origin,e);const m=h*this.direction.dot(jl.crossVectors(La,jl));if(m<0)return null;const p=h*this.direction.dot(Wf.cross(La));if(p<0||m+p>d)return null;const v=-h*La.dot(qf);return v<0?null:this.at(v/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,i,r,l,u,d,h,m,p,v,x,S,y,A,T,M){const g=this.elements;return g[0]=e,g[4]=i,g[8]=r,g[12]=l,g[1]=u,g[5]=d,g[9]=h,g[13]=m,g[2]=p,g[6]=v,g[10]=x,g[14]=S,g[3]=y,g[7]=A,g[11]=T,g[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/Js.setFromMatrixColumn(e,0).length(),u=1/Js.setFromMatrixColumn(e,1).length(),d=1/Js.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const S=d*v,y=d*x,A=h*v,T=h*x;i[0]=m*v,i[4]=-m*x,i[8]=p,i[1]=y+A*p,i[5]=S-T*p,i[9]=-h*m,i[2]=T-S*p,i[6]=A+y*p,i[10]=d*m}else if(e.order==="YXZ"){const S=m*v,y=m*x,A=p*v,T=p*x;i[0]=S+T*h,i[4]=A*h-y,i[8]=d*p,i[1]=d*x,i[5]=d*v,i[9]=-h,i[2]=y*h-A,i[6]=T+S*h,i[10]=d*m}else if(e.order==="ZXY"){const S=m*v,y=m*x,A=p*v,T=p*x;i[0]=S-T*h,i[4]=-d*x,i[8]=A+y*h,i[1]=y+A*h,i[5]=d*v,i[9]=T-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const S=d*v,y=d*x,A=h*v,T=h*x;i[0]=m*v,i[4]=A*p-y,i[8]=S*p+T,i[1]=m*x,i[5]=T*p+S,i[9]=y*p-A,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const S=d*m,y=d*p,A=h*m,T=h*p;i[0]=m*v,i[4]=T-S*x,i[8]=A*x+y,i[1]=x,i[5]=d*v,i[9]=-h*v,i[2]=-p*v,i[6]=y*x+A,i[10]=S-T*x}else if(e.order==="XZY"){const S=d*m,y=d*p,A=h*m,T=h*p;i[0]=m*v,i[4]=-x,i[8]=p*v,i[1]=S*x+T,i[5]=d*v,i[9]=y*x-A,i[2]=A*x-y,i[6]=h*v,i[10]=T*x+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GS,e,VS)}lookAt(e,i,r){const l=this.elements;return Xn.subVectors(e,i),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),Da.crossVectors(r,Xn),Da.lengthSq()===0&&(Math.abs(r.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),Da.crossVectors(r,Xn)),Da.normalize(),Yl.crossVectors(Xn,Da),l[0]=Da.x,l[4]=Yl.x,l[8]=Xn.x,l[1]=Da.y,l[5]=Yl.y,l[9]=Xn.y,l[2]=Da.z,l[6]=Yl.z,l[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],v=r[1],x=r[5],S=r[9],y=r[13],A=r[2],T=r[6],M=r[10],g=r[14],N=r[3],C=r[7],U=r[11],z=r[15],H=l[0],O=l[4],q=l[8],E=l[12],D=l[1],ut=l[5],Z=l[9],Q=l[13],at=l[2],rt=l[6],I=l[10],X=l[14],$=l[3],xt=l[7],dt=l[11],P=l[15];return u[0]=d*H+h*D+m*at+p*$,u[4]=d*O+h*ut+m*rt+p*xt,u[8]=d*q+h*Z+m*I+p*dt,u[12]=d*E+h*Q+m*X+p*P,u[1]=v*H+x*D+S*at+y*$,u[5]=v*O+x*ut+S*rt+y*xt,u[9]=v*q+x*Z+S*I+y*dt,u[13]=v*E+x*Q+S*X+y*P,u[2]=A*H+T*D+M*at+g*$,u[6]=A*O+T*ut+M*rt+g*xt,u[10]=A*q+T*Z+M*I+g*dt,u[14]=A*E+T*Q+M*X+g*P,u[3]=N*H+C*D+U*at+z*$,u[7]=N*O+C*ut+U*rt+z*xt,u[11]=N*q+C*Z+U*I+z*dt,u[15]=N*E+C*Q+U*X+z*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],m=e[9],p=e[13],v=e[2],x=e[6],S=e[10],y=e[14],A=e[3],T=e[7],M=e[11],g=e[15];return A*(+u*m*x-l*p*x-u*h*S+r*p*S+l*h*y-r*m*y)+T*(+i*m*y-i*p*S+u*d*S-l*d*y+l*p*v-u*m*v)+M*(+i*p*x-i*h*y-u*d*x+r*d*y+u*h*v-r*p*v)+g*(-l*h*v-i*m*x+i*h*S+l*d*x-r*d*S+r*m*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8],x=e[9],S=e[10],y=e[11],A=e[12],T=e[13],M=e[14],g=e[15],N=x*M*p-T*S*p+T*m*y-h*M*y-x*m*g+h*S*g,C=A*S*p-v*M*p-A*m*y+d*M*y+v*m*g-d*S*g,U=v*T*p-A*x*p+A*h*y-d*T*y-v*h*g+d*x*g,z=A*x*m-v*T*m-A*h*S+d*T*S+v*h*M-d*x*M,H=i*N+r*C+l*U+u*z;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/H;return e[0]=N*O,e[1]=(T*S*u-x*M*u-T*l*y+r*M*y+x*l*g-r*S*g)*O,e[2]=(h*M*u-T*m*u+T*l*p-r*M*p-h*l*g+r*m*g)*O,e[3]=(x*m*u-h*S*u-x*l*p+r*S*p+h*l*y-r*m*y)*O,e[4]=C*O,e[5]=(v*M*u-A*S*u+A*l*y-i*M*y-v*l*g+i*S*g)*O,e[6]=(A*m*u-d*M*u-A*l*p+i*M*p+d*l*g-i*m*g)*O,e[7]=(d*S*u-v*m*u+v*l*p-i*S*p-d*l*y+i*m*y)*O,e[8]=U*O,e[9]=(A*x*u-v*T*u-A*r*y+i*T*y+v*r*g-i*x*g)*O,e[10]=(d*T*u-A*h*u+A*r*p-i*T*p-d*r*g+i*h*g)*O,e[11]=(v*h*u-d*x*u-v*r*p+i*x*p+d*r*y-i*h*y)*O,e[12]=z*O,e[13]=(v*T*l-A*x*l+A*r*S-i*T*S-v*r*M+i*x*M)*O,e[14]=(A*h*l-d*T*l-A*r*m+i*T*m+d*r*M-i*h*M)*O,e[15]=(d*x*l-v*h*l+v*r*m-i*x*m-d*r*S+i*h*S)*O,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,m=e.z,p=u*d,v=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+r,v*m-l*d,0,p*m-l*h,v*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,v=d+d,x=h+h,S=u*p,y=u*v,A=u*x,T=d*v,M=d*x,g=h*x,N=m*p,C=m*v,U=m*x,z=r.x,H=r.y,O=r.z;return l[0]=(1-(T+g))*z,l[1]=(y+U)*z,l[2]=(A-C)*z,l[3]=0,l[4]=(y-U)*H,l[5]=(1-(S+g))*H,l[6]=(M+N)*H,l[7]=0,l[8]=(A+C)*O,l[9]=(M-N)*O,l[10]=(1-(S+T))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=Js.set(l[0],l[1],l[2]).length();const d=Js.set(l[4],l[5],l[6]).length(),h=Js.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],mi.copy(this);const p=1/u,v=1/d,x=1/h;return mi.elements[0]*=p,mi.elements[1]*=p,mi.elements[2]*=p,mi.elements[4]*=v,mi.elements[5]*=v,mi.elements[6]*=v,mi.elements[8]*=x,mi.elements[9]*=x,mi.elements[10]*=x,i.setFromRotationMatrix(mi),r.x=u,r.y=d,r.z=h,this}makePerspective(e,i,r,l,u,d){const h=this.elements,m=2*u/(i-e),p=2*u/(r-l),v=(i+e)/(i-e),x=(r+l)/(r-l),S=-(d+u)/(d-u),y=-2*d*u/(d-u);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=p,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=y,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,l,u,d){const h=this.elements,m=1/(i-e),p=1/(r-l),v=1/(d-u),x=(i+e)*m,S=(r+l)*p,y=(d+u)*v;return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*p,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=-2*v,h[14]=-y,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Js=new K,mi=new en,GS=new K(0,0,0),VS=new K(1,1,1),Da=new K,Yl=new K,Xn=new K,s0=new en,r0=new wo;class dc{constructor(e=0,i=0,r=0,l=dc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],v=l[9],x=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(On(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-On(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(On(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-On(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(On(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-On(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-v,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return s0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(s0,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return r0.setFromEuler(this),this.setFromQuaternion(r0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dc.DEFAULT_ORDER="XYZ";class yh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kS=0;const o0=new K,$s=new wo,Qi=new en,Zl=new K,vo=new K,XS=new K,WS=new wo,l0=new K(1,0,0),c0=new K(0,1,0),u0=new K(0,0,1),qS={type:"added"},f0={type:"removed"};class _n extends Sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=Ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const e=new K,i=new dc,r=new wo,l=new K(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new ve}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new yh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return $s.setFromAxisAngle(e,i),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,i){return $s.setFromAxisAngle(e,i),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(l0,e)}rotateY(e){return this.rotateOnAxis(c0,e)}rotateZ(e){return this.rotateOnAxis(u0,e)}translateOnAxis(e,i){return o0.copy(e).applyQuaternion(this.quaternion),this.position.add(o0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(l0,e)}translateY(e){return this.translateOnAxis(c0,e)}translateZ(e){return this.translateOnAxis(u0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Zl.copy(e):Zl.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(vo,Zl,this.up):Qi.lookAt(Zl,vo,this.up),this.quaternion.setFromRotationMatrix(Qi),l&&(Qi.extractRotation(l.matrixWorld),$s.setFromRotationMatrix(Qi),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(qS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(f0)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const i=this.children[e];i.parent=null,i.dispatchEvent(f0)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i){let r=[];this[e]===i&&r.push(this);for(let l=0,u=this.children.length;l<u;l++){const d=this.children[l].getObjectsByProperty(e,i);d.length>0&&(r=r.concat(d))}return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,e,XS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,WS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++){const u=i[r];(u.matrixWorldAutoUpdate===!0||e===!0)&&u.updateMatrixWorld(e)}}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++){const h=l[u];h.matrixWorldAutoUpdate===!0&&h.updateWorldMatrix(!1,!0)}}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const x=m[p];u(e.shapes,x)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),v=d(e.images),x=d(e.shapes),S=d(e.skeletons),y=d(e.animations),A=d(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),x.length>0&&(r.shapes=x),S.length>0&&(r.skeletons=S),y.length>0&&(r.animations=y),A.length>0&&(r.nodes=A)}return r.object=l,r;function d(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}_n.DEFAULT_UP=new K(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new K,Ji=new K,jf=new K,$i=new K,tr=new K,er=new K,h0=new K,Yf=new K,Zf=new K,Kf=new K;let Kl=!1;class vi{constructor(e=new K,i=new K,r=new K){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),gi.subVectors(e,i),l.cross(gi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){gi.subVectors(l,i),Ji.subVectors(r,i),jf.subVectors(e,i);const d=gi.dot(gi),h=gi.dot(Ji),m=gi.dot(jf),p=Ji.dot(Ji),v=Ji.dot(jf),x=d*p-h*h;if(x===0)return u.set(-2,-1,-1);const S=1/x,y=(p*m-h*v)*S,A=(d*v-h*m)*S;return u.set(1-y-A,A,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,$i),$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getUV(e,i,r,l,u,d,h,m){return Kl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Kl=!0),this.getInterpolation(e,i,r,l,u,d,h,m)}static getInterpolation(e,i,r,l,u,d,h,m){return this.getBarycoord(e,i,r,l,$i),m.setScalar(0),m.addScaledVector(u,$i.x),m.addScaledVector(d,$i.y),m.addScaledVector(h,$i.z),m}static isFrontFacing(e,i,r,l){return gi.subVectors(r,i),Ji.subVectors(e,i),gi.cross(Ji).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),gi.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return vi.getBarycoord(e,this.a,this.b,this.c,i)}getUV(e,i,r,l,u){return Kl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Kl=!0),vi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}getInterpolation(e,i,r,l,u){return vi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;tr.subVectors(l,r),er.subVectors(u,r),Yf.subVectors(e,r);const m=tr.dot(Yf),p=er.dot(Yf);if(m<=0&&p<=0)return i.copy(r);Zf.subVectors(e,l);const v=tr.dot(Zf),x=er.dot(Zf);if(v>=0&&x<=v)return i.copy(l);const S=m*x-v*p;if(S<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(r).addScaledVector(tr,d);Kf.subVectors(e,u);const y=tr.dot(Kf),A=er.dot(Kf);if(A>=0&&y<=A)return i.copy(u);const T=y*p-m*A;if(T<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(r).addScaledVector(er,h);const M=v*A-y*x;if(M<=0&&x-v>=0&&y-A>=0)return h0.subVectors(u,l),h=(x-v)/(x-v+(y-A)),i.copy(l).addScaledVector(h0,h);const g=1/(M+T+S);return d=T*g,h=S*g,i.copy(r).addScaledVector(tr,d).addScaledVector(er,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let jS=0;class Mr extends Sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=Ao(),this.name="",this.type="Material",this.blending=dr,this.side=Oa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=j0,this.blendDst=Y0,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=lh,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=CS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zf,this.stencilZFail=zf,this.stencilZPass=zf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(r.blending=this.blending),this.side!==Oa&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(r.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const s_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Ql={h:0,s:0,l:0};function Qf(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Te{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,i===void 0&&r===void 0?this.set(e):this.setRGB(e,i,r)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ae){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pi.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=pi.workingColorSpace){return this.r=e,this.g=i,this.b=r,pi.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=pi.workingColorSpace){if(e=LS(e,1),i=On(i,0,1),r=On(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=Qf(d,u,e+1/3),this.g=Qf(d,u,e),this.b=Qf(d,u,e-1/3)}return pi.toWorkingColorSpace(this,l),this}setStyle(e,i=ae){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ae){const r=s_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}copyLinearToSRGB(e){return this.r=If(e.r),this.g=If(e.g),this.b=If(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ae){return pi.fromWorkingColorSpace(Mn.copy(this),e),Math.round(On(Mn.r*255,0,255))*65536+Math.round(On(Mn.g*255,0,255))*256+Math.round(On(Mn.b*255,0,255))}getHexString(e=ae){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=pi.workingColorSpace){pi.fromWorkingColorSpace(Mn.copy(this),i);const r=Mn.r,l=Mn.g,u=Mn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const v=(h+d)/2;if(h===d)m=0,p=0;else{const x=d-h;switch(p=v<=.5?x/(d+h):x/(2-d-h),d){case r:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-r)/x+2;break;case u:m=(r-l)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=pi.workingColorSpace){return pi.fromWorkingColorSpace(Mn.copy(this),i),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=ae){pi.fromWorkingColorSpace(Mn.copy(this),e);const i=Mn.r,r=Mn.g,l=Mn.b;return e!==ae?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(_i),_i.h+=e,_i.s+=i,_i.l+=r,this.setHSL(_i.h,_i.s,_i.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(_i),e.getHSL(Ql);const r=Bf(_i.h,Ql.h,i),l=Bf(_i.s,Ql.s,i),u=Bf(_i.l,Ql.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new Te;Te.NAMES=s_;class fr extends Mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $e=new K,Jl=new xe;class Ci{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=t0,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Jl.fromBufferAttribute(this,i),Jl.applyMatrix3(e),this.setXY(i,Jl.x,Jl.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)$e.fromBufferAttribute(this,i),$e.applyMatrix3(e),this.setXYZ(i,$e.x,$e.y,$e.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)$e.fromBufferAttribute(this,i),$e.applyMatrix4(e),this.setXYZ(i,$e.x,$e.y,$e.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)$e.fromBufferAttribute(this,i),$e.applyNormalMatrix(e),this.setXYZ(i,$e.x,$e.y,$e.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)$e.fromBufferAttribute(this,i),$e.transformDirection(e),this.setXYZ(i,$e.x,$e.y,$e.z);return this}set(e,i=0){return this.array.set(e,i),this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=kl(i,this.array)),i}setX(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=kl(i,this.array)),i}setY(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=kl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=kl(i,this.array)),i}setW(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array),l=kn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array),l=kn(l,this.array),u=kn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==t0&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class r_ extends Ci{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class o_ extends Ci{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Yn extends Ci{constructor(e,i,r){super(new Float32Array(e),i,r)}}let YS=0;const ri=new en,Jf=new _n,nr=new K,Wn=new Ro,xo=new Ro,un=new K;class na extends Sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=Ao(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(t_(e)?o_:r_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ve().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,i,r){return ri.makeTranslation(e,i,r),this.applyMatrix4(ri),this}scale(e,i,r){return ri.makeScale(e,i,r),this.applyMatrix4(ri),this}lookAt(e){return Jf.lookAt(e),Jf.updateMatrix(),this.applyMatrix4(Jf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){const i=[];for(let r=0,l=e.length;r<l;r++){const u=e[r];i.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new Yn(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ro);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Wn.setFromBufferAttribute(u),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mh);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new K,1/0);return}if(e){const r=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];xo.setFromBufferAttribute(h),this.morphTargetsRelative?(un.addVectors(Wn.min,xo.min),Wn.expandByPoint(un),un.addVectors(Wn.max,xo.max),Wn.expandByPoint(un)):(Wn.expandByPoint(xo.min),Wn.expandByPoint(xo.max))}Wn.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)un.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(un));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)un.fromBufferAttribute(h,p),m&&(nr.fromBufferAttribute(e,p),un.add(nr)),l=Math.max(l,r.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,l=i.position.array,u=i.normal.array,d=i.uv.array,h=l.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ci(new Float32Array(4*h),4));const m=this.getAttribute("tangent").array,p=[],v=[];for(let D=0;D<h;D++)p[D]=new K,v[D]=new K;const x=new K,S=new K,y=new K,A=new xe,T=new xe,M=new xe,g=new K,N=new K;function C(D,ut,Z){x.fromArray(l,D*3),S.fromArray(l,ut*3),y.fromArray(l,Z*3),A.fromArray(d,D*2),T.fromArray(d,ut*2),M.fromArray(d,Z*2),S.sub(x),y.sub(x),T.sub(A),M.sub(A);const Q=1/(T.x*M.y-M.x*T.y);isFinite(Q)&&(g.copy(S).multiplyScalar(M.y).addScaledVector(y,-T.y).multiplyScalar(Q),N.copy(y).multiplyScalar(T.x).addScaledVector(S,-M.x).multiplyScalar(Q),p[D].add(g),p[ut].add(g),p[Z].add(g),v[D].add(N),v[ut].add(N),v[Z].add(N))}let U=this.groups;U.length===0&&(U=[{start:0,count:r.length}]);for(let D=0,ut=U.length;D<ut;++D){const Z=U[D],Q=Z.start,at=Z.count;for(let rt=Q,I=Q+at;rt<I;rt+=3)C(r[rt+0],r[rt+1],r[rt+2])}const z=new K,H=new K,O=new K,q=new K;function E(D){O.fromArray(u,D*3),q.copy(O);const ut=p[D];z.copy(ut),z.sub(O.multiplyScalar(O.dot(ut))).normalize(),H.crossVectors(q,ut);const Q=H.dot(v[D])<0?-1:1;m[D*4]=z.x,m[D*4+1]=z.y,m[D*4+2]=z.z,m[D*4+3]=Q}for(let D=0,ut=U.length;D<ut;++D){const Z=U[D],Q=Z.start,at=Z.count;for(let rt=Q,I=Q+at;rt<I;rt+=3)E(r[rt+0]),E(r[rt+1]),E(r[rt+2])}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ci(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,y=r.count;S<y;S++)r.setXYZ(S,0,0,0);const l=new K,u=new K,d=new K,h=new K,m=new K,p=new K,v=new K,x=new K;if(e)for(let S=0,y=e.count;S<y;S+=3){const A=e.getX(S+0),T=e.getX(S+1),M=e.getX(S+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,M),v.subVectors(d,u),x.subVectors(l,u),v.cross(x),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,T),p.fromBufferAttribute(r,M),h.add(v),m.add(v),p.add(v),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(T,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),v.subVectors(d,u),x.subVectors(l,u),v.cross(x),r.setXYZ(S+0,v.x,v.y,v.z),r.setXYZ(S+1,v.x,v.y,v.z),r.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)un.fromBufferAttribute(e,i),un.normalize(),e.setXYZ(i,un.x,un.y,un.z)}toNonIndexed(){function e(h,m){const p=h.array,v=h.itemSize,x=h.normalized,S=new p.constructor(m.length*v);let y=0,A=0;for(let T=0,M=m.length;T<M;T++){h.isInterleavedBufferAttribute?y=m[T]*h.data.stride+h.offset:y=m[T]*v;for(let g=0;g<v;g++)S[A++]=p[y++]}return new Ci(S,v,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new na,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let v=0,x=p.length;v<x;v++){const S=p[v],y=e(S,r);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let x=0,S=p.length;x<S;x++){const y=p[x];v.push(y.toJSON(e.data))}v.length>0&&(l[m]=v,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const u=e.morphAttributes;for(const p in u){const v=[],x=u[p];for(let S=0,y=x.length;S<y;S++)v.push(x[S].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,v=d.length;p<v;p++){const x=d[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const d0=new en,Ti=new a_,$l=new Mh,p0=new K,ir=new K,ar=new K,sr=new K,$f=new K,tc=new K,ec=new xe,nc=new xe,ic=new xe,m0=new K,g0=new K,_0=new K,ac=new K,sc=new K;class Se extends _n{constructor(e=new na,i=new fr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){tc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const v=h[m],x=u[m];v!==0&&($f.fromBufferAttribute(x,e),d?tc.addScaledVector($f,v):tc.addScaledVector($f.sub(i),v))}i.add(tc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),$l.copy(r.boundingSphere),$l.applyMatrix4(u),Ti.copy(e.ray).recast(e.near),!($l.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere($l,p0)===null||Ti.origin.distanceToSquared(p0)>(e.far-e.near)**2))&&(d0.copy(u).invert(),Ti.copy(e.ray).applyMatrix4(d0),!(r.boundingBox!==null&&Ti.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i)))}_computeIntersections(e,i){let r;const l=this.geometry,u=this.material,d=l.index,h=l.attributes.position,m=l.attributes.uv,p=l.attributes.uv1,v=l.attributes.normal,x=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(u))for(let y=0,A=x.length;y<A;y++){const T=x[y],M=u[T.materialIndex],g=Math.max(T.start,S.start),N=Math.min(d.count,Math.min(T.start+T.count,S.start+S.count));for(let C=g,U=N;C<U;C+=3){const z=d.getX(C),H=d.getX(C+1),O=d.getX(C+2);r=rc(this,M,e,Ti,m,p,v,z,H,O),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=T.materialIndex,i.push(r))}}else{const y=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let T=y,M=A;T<M;T+=3){const g=d.getX(T),N=d.getX(T+1),C=d.getX(T+2);r=rc(this,u,e,Ti,m,p,v,g,N,C),r&&(r.faceIndex=Math.floor(T/3),i.push(r))}}else if(h!==void 0)if(Array.isArray(u))for(let y=0,A=x.length;y<A;y++){const T=x[y],M=u[T.materialIndex],g=Math.max(T.start,S.start),N=Math.min(h.count,Math.min(T.start+T.count,S.start+S.count));for(let C=g,U=N;C<U;C+=3){const z=C,H=C+1,O=C+2;r=rc(this,M,e,Ti,m,p,v,z,H,O),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=T.materialIndex,i.push(r))}}else{const y=Math.max(0,S.start),A=Math.min(h.count,S.start+S.count);for(let T=y,M=A;T<M;T+=3){const g=T,N=T+1,C=T+2;r=rc(this,u,e,Ti,m,p,v,g,N,C),r&&(r.faceIndex=Math.floor(T/3),i.push(r))}}}}function ZS(o,e,i,r,l,u,d,h){let m;if(e.side===zn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,e.side===Oa,h),m===null)return null;sc.copy(h),sc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(sc);return p<i.near||p>i.far?null:{distance:p,point:sc.clone(),object:o}}function rc(o,e,i,r,l,u,d,h,m,p){o.getVertexPosition(h,ir),o.getVertexPosition(m,ar),o.getVertexPosition(p,sr);const v=ZS(o,e,i,r,ir,ar,sr,ac);if(v){l&&(ec.fromBufferAttribute(l,h),nc.fromBufferAttribute(l,m),ic.fromBufferAttribute(l,p),v.uv=vi.getInterpolation(ac,ir,ar,sr,ec,nc,ic,new xe)),u&&(ec.fromBufferAttribute(u,h),nc.fromBufferAttribute(u,m),ic.fromBufferAttribute(u,p),v.uv1=vi.getInterpolation(ac,ir,ar,sr,ec,nc,ic,new xe),v.uv2=v.uv1),d&&(m0.fromBufferAttribute(d,h),g0.fromBufferAttribute(d,m),_0.fromBufferAttribute(d,p),v.normal=vi.getInterpolation(ac,ir,ar,sr,m0,g0,_0,new K),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new K,materialIndex:0};vi.getNormal(ir,ar,sr,x.normal),v.face=x}return v}class tn extends na{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],v=[],x=[];let S=0,y=0;A("z","y","x",-1,-1,r,i,e,d,u,0),A("z","y","x",1,-1,r,i,-e,d,u,1),A("x","z","y",1,1,e,r,i,l,d,2),A("x","z","y",1,-1,e,r,-i,l,d,3),A("x","y","z",1,-1,e,i,r,l,u,4),A("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Yn(p,3)),this.setAttribute("normal",new Yn(v,3)),this.setAttribute("uv",new Yn(x,2));function A(T,M,g,N,C,U,z,H,O,q,E){const D=U/O,ut=z/q,Z=U/2,Q=z/2,at=H/2,rt=O+1,I=q+1;let X=0,$=0;const xt=new K;for(let dt=0;dt<I;dt++){const P=dt*ut-Q;for(let k=0;k<rt;k++){const V=k*D-Z;xt[T]=V*N,xt[M]=P*C,xt[g]=at,p.push(xt.x,xt.y,xt.z),xt[T]=0,xt[M]=0,xt[g]=H>0?1:-1,v.push(xt.x,xt.y,xt.z),x.push(k/O),x.push(1-dt/q),X+=1}}for(let dt=0;dt<q;dt++)for(let P=0;P<O;P++){const k=S+P+rt*dt,V=S+P+rt*(dt+1),J=S+(P+1)+rt*(dt+1),gt=S+(P+1)+rt*dt;m.push(k,V,gt),m.push(V,J,gt),$+=6}h.addGroup(y,$,E),y+=$,S+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xr(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function En(o){const e={};for(let i=0;i<o.length;i++){const r=xr(o[i]);for(const l in r)e[l]=r[l]}return e}function KS(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function l_(o){return o.getRenderTarget()===null?o.outputColorSpace:Li}const QS={clone:xr,merge:En};var JS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$S=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fs extends Mr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JS,this.fragmentShader=$S,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xr(e.uniforms),this.uniformsGroups=KS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class c_ extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(-i[8],-i[9],-i[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class qn extends c_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=ph*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ph*2*Math.atan(Math.tan(Pf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Pf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const rr=-90,or=1;class tM extends _n{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r;const l=new qn(rr,or,e,i);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(1,0,0),this.add(l);const u=new qn(rr,or,e,i);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(-1,0,0),this.add(u);const d=new qn(rr,or,e,i);d.layers=this.layers,d.up.set(0,0,-1),d.lookAt(0,1,0),this.add(d);const h=new qn(rr,or,e,i);h.layers=this.layers,h.up.set(0,0,1),h.lookAt(0,-1,0),this.add(h);const m=new qn(rr,or,e,i);m.layers=this.layers,m.up.set(0,1,0),m.lookAt(0,0,1),this.add(m);const p=new qn(rr,or,e,i);p.layers=this.layers,p.up.set(0,1,0),p.lookAt(0,0,-1),this.add(p)}update(e,i){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget,[l,u,d,h,m,p]=this.children,v=e.getRenderTarget(),x=e.toneMapping,S=e.xr.enabled;e.toneMapping=ea,e.xr.enabled=!1;const y=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0),e.render(i,l),e.setRenderTarget(r,1),e.render(i,u),e.setRenderTarget(r,2),e.render(i,d),e.setRenderTarget(r,3),e.render(i,h),e.setRenderTarget(r,4),e.render(i,m),r.texture.generateMipmaps=y,e.setRenderTarget(r,5),e.render(i,p),e.setRenderTarget(v),e.toneMapping=x,e.xr.enabled=S,r.texture.needsPMREMUpdate=!0}}class u_ extends jn{constructor(e,i,r,l,u,d,h,m,p,v){e=e!==void 0?e:[],i=i!==void 0?i:gr,super(e,i,r,l,u,d,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eM extends us{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];i.encoding!==void 0&&(yo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===os?ae:ls),this.texture=new u_(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:li}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new tn(5,5,5),u=new fs({name:"CubemapFromEquirect",uniforms:xr(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:zn,blending:Na});u.uniforms.tEquirect.value=i;const d=new Se(l,u),h=i.minFilter;return i.minFilter===Eo&&(i.minFilter=li),new tM(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i,r,l){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}const th=new K,nM=new K,iM=new ve;class es{constructor(e=new K(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=th.subVectors(r,i).cross(nM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(th),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||iM.getNormalMatrix(e),l=this.coplanarPoint(th).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new Mh,oc=new K;class Eh{constructor(e=new es,i=new es,r=new es,l=new es,u=new es,d=new es){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e){const i=this.planes,r=e.elements,l=r[0],u=r[1],d=r[2],h=r[3],m=r[4],p=r[5],v=r[6],x=r[7],S=r[8],y=r[9],A=r[10],T=r[11],M=r[12],g=r[13],N=r[14],C=r[15];return i[0].setComponents(h-l,x-m,T-S,C-M).normalize(),i[1].setComponents(h+l,x+m,T+S,C+M).normalize(),i[2].setComponents(h+u,x+p,T+y,C+g).normalize(),i[3].setComponents(h-u,x-p,T-y,C-g).normalize(),i[4].setComponents(h-d,x-v,T-A,C-N).normalize(),i[5].setComponents(h+d,x+v,T+A,C+N).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ts.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(oc.x=l.normal.x>0?e.max.x:e.min.x,oc.y=l.normal.y>0?e.max.y:e.min.y,oc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(oc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function f_(){let o=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function aM(o,e){const i=e.isWebGL2,r=new WeakMap;function l(p,v){const x=p.array,S=p.usage,y=o.createBuffer();o.bindBuffer(v,y),o.bufferData(v,x,S),p.onUploadCallback();let A;if(x instanceof Float32Array)A=o.FLOAT;else if(x instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(i)A=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else A=o.UNSIGNED_SHORT;else if(x instanceof Int16Array)A=o.SHORT;else if(x instanceof Uint32Array)A=o.UNSIGNED_INT;else if(x instanceof Int32Array)A=o.INT;else if(x instanceof Int8Array)A=o.BYTE;else if(x instanceof Uint8Array)A=o.UNSIGNED_BYTE;else if(x instanceof Uint8ClampedArray)A=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+x);return{buffer:y,type:A,bytesPerElement:x.BYTES_PER_ELEMENT,version:p.version}}function u(p,v,x){const S=v.array,y=v.updateRange;o.bindBuffer(x,p),y.count===-1?o.bufferSubData(x,0,S):(i?o.bufferSubData(x,y.offset*S.BYTES_PER_ELEMENT,S,y.offset,y.count):o.bufferSubData(x,y.offset*S.BYTES_PER_ELEMENT,S.subarray(y.offset,y.offset+y.count)),y.count=-1),v.onUploadCallback()}function d(p){return p.isInterleavedBufferAttribute&&(p=p.data),r.get(p)}function h(p){p.isInterleavedBufferAttribute&&(p=p.data);const v=r.get(p);v&&(o.deleteBuffer(v.buffer),r.delete(p))}function m(p,v){if(p.isGLBufferAttribute){const S=r.get(p);(!S||S.version<p.version)&&r.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const x=r.get(p);x===void 0?r.set(p,l(p,v)):x.version<p.version&&(u(x.buffer,p,v),x.version=p.version)}return{get:d,remove:h,update:m}}class Ai extends na{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,v=m+1,x=e/h,S=i/m,y=[],A=[],T=[],M=[];for(let g=0;g<v;g++){const N=g*S-d;for(let C=0;C<p;C++){const U=C*x-u;A.push(U,-N,0),T.push(0,0,1),M.push(C/h),M.push(1-g/m)}}for(let g=0;g<m;g++)for(let N=0;N<h;N++){const C=N+p*g,U=N+p*(g+1),z=N+1+p*(g+1),H=N+1+p*g;y.push(C,U,H),y.push(U,z,H)}this.setIndex(y),this.setAttribute("position",new Yn(A,3)),this.setAttribute("normal",new Yn(T,3)),this.setAttribute("uv",new Yn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.width,e.height,e.widthSegments,e.heightSegments)}}var sM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,lM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fM="vec3 transformed = vec3( position );",hM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pM=`#ifdef USE_IRIDESCENCE
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
#endif`,mM=`#ifdef USE_BUMPMAP
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
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,SM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,MM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,EM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,bM=`#define PI 3.141592653589793
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
} // validated`,TM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,AM=`vec3 transformedNormal = objectNormal;
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
#endif`,wM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,RM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DM="gl_FragColor = linearToOutputTexel( gl_FragColor );",UM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,NM=`#ifdef USE_ENVMAP
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
#endif`,OM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zM=`#ifdef USE_ENVMAP
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
#endif`,PM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,BM=`#ifdef USE_ENVMAP
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
#endif`,FM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,HM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,VM=`#ifdef USE_GRADIENTMAP
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
}`,kM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,XM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,WM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jM=`uniform bool receiveShadow;
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
#endif`,YM=`#if defined( USE_ENVMAP )
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
#endif`,ZM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,KM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$M=`PhysicalMaterial material;
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
#endif`,ty=`struct PhysicalMaterial {
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
}`,ey=`
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
#endif`,ny=`#if defined( RE_IndirectDiffuse )
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
#endif`,iy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ay=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ry=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,oy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ly=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,cy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fy=`#if defined( USE_POINTS_UV )
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
#endif`,hy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,py=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,my=`#ifdef USE_MORPHNORMALS
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
#endif`,gy=`#ifdef USE_MORPHTARGETS
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
#endif`,_y=`#ifdef USE_MORPHTARGETS
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
#endif`,vy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,xy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,My=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ey=`#ifdef USE_NORMALMAP
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
#endif`,by=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ty=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ay=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ry=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ly=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ny=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Oy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Py=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,By=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Iy=`float getShadowMask() {
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
}`,Hy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gy=`#ifdef USE_SKINNING
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
#endif`,Vy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ky=`#ifdef USE_SKINNING
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
#endif`,Xy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yy=`#ifdef USE_TRANSMISSION
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
#endif`,Zy=`#ifdef USE_TRANSMISSION
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
#endif`,Ky=`#ifdef USE_UV
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
#endif`,Qy=`#ifdef USE_UV
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
#endif`,Jy=`#ifdef USE_UV
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
#endif`,$y=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,nE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,aE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,rE=`#include <common>
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
}`,oE=`#if DEPTH_PACKING == 3200
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
}`,lE=`#define DISTANCE
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
}`,cE=`#define DISTANCE
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
}`,uE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hE=`uniform float scale;
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
}`,dE=`uniform vec3 diffuse;
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
}`,pE=`#include <common>
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
}`,mE=`uniform vec3 diffuse;
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
}`,gE=`#define LAMBERT
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
}`,_E=`#define LAMBERT
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
}`,vE=`#define MATCAP
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
}`,xE=`#define MATCAP
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
}`,SE=`#define NORMAL
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
}`,ME=`#define NORMAL
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
}`,yE=`#define PHONG
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
}`,EE=`#define PHONG
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
}`,bE=`#define STANDARD
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
}`,TE=`#define STANDARD
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
}`,AE=`#define TOON
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
}`,wE=`#define TOON
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
}`,RE=`uniform float size;
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
}`,CE=`uniform vec3 diffuse;
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
}`,LE=`#include <common>
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
}`,DE=`uniform vec3 color;
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
}`,UE=`uniform float rotation;
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
}`,NE=`uniform vec3 diffuse;
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
}`,le={alphamap_fragment:sM,alphamap_pars_fragment:rM,alphatest_fragment:oM,alphatest_pars_fragment:lM,aomap_fragment:cM,aomap_pars_fragment:uM,begin_vertex:fM,beginnormal_vertex:hM,bsdfs:dM,iridescence_fragment:pM,bumpmap_pars_fragment:mM,clipping_planes_fragment:gM,clipping_planes_pars_fragment:_M,clipping_planes_pars_vertex:vM,clipping_planes_vertex:xM,color_fragment:SM,color_pars_fragment:MM,color_pars_vertex:yM,color_vertex:EM,common:bM,cube_uv_reflection_fragment:TM,defaultnormal_vertex:AM,displacementmap_pars_vertex:wM,displacementmap_vertex:RM,emissivemap_fragment:CM,emissivemap_pars_fragment:LM,encodings_fragment:DM,encodings_pars_fragment:UM,envmap_fragment:NM,envmap_common_pars_fragment:OM,envmap_pars_fragment:zM,envmap_pars_vertex:PM,envmap_physical_pars_fragment:YM,envmap_vertex:BM,fog_vertex:FM,fog_pars_vertex:IM,fog_fragment:HM,fog_pars_fragment:GM,gradientmap_pars_fragment:VM,lightmap_fragment:kM,lightmap_pars_fragment:XM,lights_lambert_fragment:WM,lights_lambert_pars_fragment:qM,lights_pars_begin:jM,lights_toon_fragment:ZM,lights_toon_pars_fragment:KM,lights_phong_fragment:QM,lights_phong_pars_fragment:JM,lights_physical_fragment:$M,lights_physical_pars_fragment:ty,lights_fragment_begin:ey,lights_fragment_maps:ny,lights_fragment_end:iy,logdepthbuf_fragment:ay,logdepthbuf_pars_fragment:sy,logdepthbuf_pars_vertex:ry,logdepthbuf_vertex:oy,map_fragment:ly,map_pars_fragment:cy,map_particle_fragment:uy,map_particle_pars_fragment:fy,metalnessmap_fragment:hy,metalnessmap_pars_fragment:dy,morphcolor_vertex:py,morphnormal_vertex:my,morphtarget_pars_vertex:gy,morphtarget_vertex:_y,normal_fragment_begin:vy,normal_fragment_maps:xy,normal_pars_fragment:Sy,normal_pars_vertex:My,normal_vertex:yy,normalmap_pars_fragment:Ey,clearcoat_normal_fragment_begin:by,clearcoat_normal_fragment_maps:Ty,clearcoat_pars_fragment:Ay,iridescence_pars_fragment:wy,output_fragment:Ry,packing:Cy,premultiplied_alpha_fragment:Ly,project_vertex:Dy,dithering_fragment:Uy,dithering_pars_fragment:Ny,roughnessmap_fragment:Oy,roughnessmap_pars_fragment:zy,shadowmap_pars_fragment:Py,shadowmap_pars_vertex:By,shadowmap_vertex:Fy,shadowmask_pars_fragment:Iy,skinbase_vertex:Hy,skinning_pars_vertex:Gy,skinning_vertex:Vy,skinnormal_vertex:ky,specularmap_fragment:Xy,specularmap_pars_fragment:Wy,tonemapping_fragment:qy,tonemapping_pars_fragment:jy,transmission_fragment:Yy,transmission_pars_fragment:Zy,uv_pars_fragment:Ky,uv_pars_vertex:Qy,uv_vertex:Jy,worldpos_vertex:$y,background_vert:tE,background_frag:eE,backgroundCube_vert:nE,backgroundCube_frag:iE,cube_vert:aE,cube_frag:sE,depth_vert:rE,depth_frag:oE,distanceRGBA_vert:lE,distanceRGBA_frag:cE,equirect_vert:uE,equirect_frag:fE,linedashed_vert:hE,linedashed_frag:dE,meshbasic_vert:pE,meshbasic_frag:mE,meshlambert_vert:gE,meshlambert_frag:_E,meshmatcap_vert:vE,meshmatcap_frag:xE,meshnormal_vert:SE,meshnormal_frag:ME,meshphong_vert:yE,meshphong_frag:EE,meshphysical_vert:bE,meshphysical_frag:TE,meshtoon_vert:AE,meshtoon_frag:wE,points_vert:RE,points_frag:CE,shadow_vert:LE,shadow_frag:DE,sprite_vert:UE,sprite_frag:NE},Rt={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ve},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaTest:{value:0}}},wi={basic:{uniforms:En([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:En([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Te(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:En([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:En([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:En([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new Te(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:En([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:En([Rt.points,Rt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:En([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:En([Rt.common,Rt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:En([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:En([Rt.sprite,Rt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:En([Rt.common,Rt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:En([Rt.lights,Rt.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};wi.physical={uniforms:En([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ve},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ve},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ve},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ve},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ve}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const lc={r:0,b:0,g:0};function OE(o,e,i,r,l,u,d){const h=new Te(0);let m=u===!0?0:1,p,v,x=null,S=0,y=null;function A(M,g){let N=!1,C=g.isScene===!0?g.background:null;switch(C&&C.isTexture&&(C=(g.backgroundBlurriness>0?i:e).get(C)),C===null?T(h,m):C&&C.isColor&&(T(C,1),N=!0),o.xr.getEnvironmentBlendMode()){case"opaque":N=!0;break;case"additive":r.buffers.color.setClear(0,0,0,1,d),N=!0;break;case"alpha-blend":r.buffers.color.setClear(0,0,0,0,d),N=!0;break}(o.autoClear||N)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),C&&(C.isCubeTexture||C.mapping===hc)?(v===void 0&&(v=new Se(new tn(1,1,1),new fs({name:"BackgroundCubeMaterial",uniforms:xr(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(H,O,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),v.material.uniforms.envMap.value=C,v.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,v.material.toneMapped=C.colorSpace!==ae,(x!==C||S!==C.version||y!==o.toneMapping)&&(v.material.needsUpdate=!0,x=C,S=C.version,y=o.toneMapping),v.layers.enableAll(),M.unshift(v,v.geometry,v.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new Se(new Ai(2,2),new fs({name:"BackgroundMaterial",uniforms:xr(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Oa,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,p.material.toneMapped=C.colorSpace!==ae,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(x!==C||S!==C.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,x=C,S=C.version,y=o.toneMapping),p.layers.enableAll(),M.unshift(p,p.geometry,p.material,0,0,null))}function T(M,g){M.getRGB(lc,l_(o)),r.buffers.color.setClear(lc.r,lc.g,lc.b,g,d)}return{getClearColor:function(){return h},setClearColor:function(M,g=1){h.set(M),m=g,T(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(M){m=M,T(h,m)},render:A}}function zE(o,e,i,r){const l=o.getParameter(o.MAX_VERTEX_ATTRIBS),u=r.isWebGL2?null:e.get("OES_vertex_array_object"),d=r.isWebGL2||u!==null,h={},m=M(null);let p=m,v=!1;function x(at,rt,I,X,$){let xt=!1;if(d){const dt=T(X,I,rt);p!==dt&&(p=dt,y(p.object)),xt=g(at,X,I,$),xt&&N(at,X,I,$)}else{const dt=rt.wireframe===!0;(p.geometry!==X.id||p.program!==I.id||p.wireframe!==dt)&&(p.geometry=X.id,p.program=I.id,p.wireframe=dt,xt=!0)}$!==null&&i.update($,o.ELEMENT_ARRAY_BUFFER),(xt||v)&&(v=!1,q(at,rt,I,X),$!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,i.get($).buffer))}function S(){return r.isWebGL2?o.createVertexArray():u.createVertexArrayOES()}function y(at){return r.isWebGL2?o.bindVertexArray(at):u.bindVertexArrayOES(at)}function A(at){return r.isWebGL2?o.deleteVertexArray(at):u.deleteVertexArrayOES(at)}function T(at,rt,I){const X=I.wireframe===!0;let $=h[at.id];$===void 0&&($={},h[at.id]=$);let xt=$[rt.id];xt===void 0&&(xt={},$[rt.id]=xt);let dt=xt[X];return dt===void 0&&(dt=M(S()),xt[X]=dt),dt}function M(at){const rt=[],I=[],X=[];for(let $=0;$<l;$++)rt[$]=0,I[$]=0,X[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:rt,enabledAttributes:I,attributeDivisors:X,object:at,attributes:{},index:null}}function g(at,rt,I,X){const $=p.attributes,xt=rt.attributes;let dt=0;const P=I.getAttributes();for(const k in P)if(P[k].location>=0){const J=$[k];let gt=xt[k];if(gt===void 0&&(k==="instanceMatrix"&&at.instanceMatrix&&(gt=at.instanceMatrix),k==="instanceColor"&&at.instanceColor&&(gt=at.instanceColor)),J===void 0||J.attribute!==gt||gt&&J.data!==gt.data)return!0;dt++}return p.attributesNum!==dt||p.index!==X}function N(at,rt,I,X){const $={},xt=rt.attributes;let dt=0;const P=I.getAttributes();for(const k in P)if(P[k].location>=0){let J=xt[k];J===void 0&&(k==="instanceMatrix"&&at.instanceMatrix&&(J=at.instanceMatrix),k==="instanceColor"&&at.instanceColor&&(J=at.instanceColor));const gt={};gt.attribute=J,J&&J.data&&(gt.data=J.data),$[k]=gt,dt++}p.attributes=$,p.attributesNum=dt,p.index=X}function C(){const at=p.newAttributes;for(let rt=0,I=at.length;rt<I;rt++)at[rt]=0}function U(at){z(at,0)}function z(at,rt){const I=p.newAttributes,X=p.enabledAttributes,$=p.attributeDivisors;I[at]=1,X[at]===0&&(o.enableVertexAttribArray(at),X[at]=1),$[at]!==rt&&((r.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](at,rt),$[at]=rt)}function H(){const at=p.newAttributes,rt=p.enabledAttributes;for(let I=0,X=rt.length;I<X;I++)rt[I]!==at[I]&&(o.disableVertexAttribArray(I),rt[I]=0)}function O(at,rt,I,X,$,xt){r.isWebGL2===!0&&(I===o.INT||I===o.UNSIGNED_INT)?o.vertexAttribIPointer(at,rt,I,$,xt):o.vertexAttribPointer(at,rt,I,X,$,xt)}function q(at,rt,I,X){if(r.isWebGL2===!1&&(at.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;C();const $=X.attributes,xt=I.getAttributes(),dt=rt.defaultAttributeValues;for(const P in xt){const k=xt[P];if(k.location>=0){let V=$[P];if(V===void 0&&(P==="instanceMatrix"&&at.instanceMatrix&&(V=at.instanceMatrix),P==="instanceColor"&&at.instanceColor&&(V=at.instanceColor)),V!==void 0){const J=V.normalized,gt=V.itemSize,st=i.get(V);if(st===void 0)continue;const R=st.buffer,yt=st.type,Et=st.bytesPerElement;if(V.isInterleavedBufferAttribute){const St=V.data,Dt=St.stride,Zt=V.offset;if(St.isInstancedInterleavedBuffer){for(let Ut=0;Ut<k.locationSize;Ut++)z(k.location+Ut,St.meshPerAttribute);at.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Ut=0;Ut<k.locationSize;Ut++)U(k.location+Ut);o.bindBuffer(o.ARRAY_BUFFER,R);for(let Ut=0;Ut<k.locationSize;Ut++)O(k.location+Ut,gt/k.locationSize,yt,J,Dt*Et,(Zt+gt/k.locationSize*Ut)*Et)}else{if(V.isInstancedBufferAttribute){for(let St=0;St<k.locationSize;St++)z(k.location+St,V.meshPerAttribute);at.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let St=0;St<k.locationSize;St++)U(k.location+St);o.bindBuffer(o.ARRAY_BUFFER,R);for(let St=0;St<k.locationSize;St++)O(k.location+St,gt/k.locationSize,yt,J,gt*Et,gt/k.locationSize*St*Et)}}else if(dt!==void 0){const J=dt[P];if(J!==void 0)switch(J.length){case 2:o.vertexAttrib2fv(k.location,J);break;case 3:o.vertexAttrib3fv(k.location,J);break;case 4:o.vertexAttrib4fv(k.location,J);break;default:o.vertexAttrib1fv(k.location,J)}}}}H()}function E(){Z();for(const at in h){const rt=h[at];for(const I in rt){const X=rt[I];for(const $ in X)A(X[$].object),delete X[$];delete rt[I]}delete h[at]}}function D(at){if(h[at.id]===void 0)return;const rt=h[at.id];for(const I in rt){const X=rt[I];for(const $ in X)A(X[$].object),delete X[$];delete rt[I]}delete h[at.id]}function ut(at){for(const rt in h){const I=h[rt];if(I[at.id]===void 0)continue;const X=I[at.id];for(const $ in X)A(X[$].object),delete X[$];delete I[at.id]}}function Z(){Q(),v=!0,p!==m&&(p=m,y(p.object))}function Q(){m.geometry=null,m.program=null,m.wireframe=!1}return{setup:x,reset:Z,resetDefaultState:Q,dispose:E,releaseStatesOfGeometry:D,releaseStatesOfProgram:ut,initAttributes:C,enableAttribute:U,disableUnusedAttributes:H}}function PE(o,e,i,r){const l=r.isWebGL2;let u;function d(p){u=p}function h(p,v){o.drawArrays(u,p,v),i.update(v,u,1)}function m(p,v,x){if(x===0)return;let S,y;if(l)S=o,y="drawArraysInstanced";else if(S=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",S===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[y](u,p,v,x),i.update(v,u,x)}this.setMode=d,this.render=h,this.renderInstances=m}function BE(o,e,i){let r;function l(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let h=i.precision!==void 0?i.precision:"highp";const m=u(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const p=d||e.has("WEBGL_draw_buffers"),v=i.logarithmicDepthBuffer===!0,x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),S=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=o.getParameter(o.MAX_TEXTURE_SIZE),A=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),T=o.getParameter(o.MAX_VERTEX_ATTRIBS),M=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),g=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),C=S>0,U=d||e.has("OES_texture_float"),z=C&&U,H=d?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:d,drawBuffers:p,getMaxAnisotropy:l,getMaxPrecision:u,precision:h,logarithmicDepthBuffer:v,maxTextures:x,maxVertexTextures:S,maxTextureSize:y,maxCubemapSize:A,maxAttributes:T,maxVertexUniforms:M,maxVaryings:g,maxFragmentUniforms:N,vertexTextures:C,floatFragmentTextures:U,floatVertexTextures:z,maxSamples:H}}function FE(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new es,h=new ve,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,S){const y=x.length!==0||S||r!==0||l;return l=S,r=x.length,y},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,S){i=v(x,S,0)},this.setState=function(x,S,y){const A=x.clippingPlanes,T=x.clipIntersection,M=x.clipShadows,g=o.get(x);if(!l||A===null||A.length===0||u&&!M)u?v(null):p();else{const N=u?0:r,C=N*4;let U=g.clippingState||null;m.value=U,U=v(A,S,C,y);for(let z=0;z!==C;++z)U[z]=i[z];g.clippingState=U,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(x,S,y,A){const T=x!==null?x.length:0;let M=null;if(T!==0){if(M=m.value,A!==!0||M===null){const g=y+T*4,N=S.matrixWorldInverse;h.getNormalMatrix(N),(M===null||M.length<g)&&(M=new Float32Array(g));for(let C=0,U=y;C!==T;++C,U+=4)d.copy(x[C]).applyMatrix4(N,h),d.normal.toArray(M,U),M[U+3]=d.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,M}}function IE(o){let e=new WeakMap;function i(d,h){return h===ch?d.mapping=gr:h===uh&&(d.mapping=_r),d}function r(d){if(d&&d.isTexture&&d.isRenderTargetTexture===!1){const h=d.mapping;if(h===ch||h===uh)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new eM(m.height/2);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class h_ extends c_{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const hr=4,v0=[.125,.215,.35,.446,.526,.582],is=20,eh=new h_,x0=new Te;let nh=null;const ns=(1+Math.sqrt(5))/2,lr=1/ns,S0=[new K(1,1,1),new K(-1,1,1),new K(1,1,-1),new K(-1,1,-1),new K(0,ns,lr),new K(0,ns,-lr),new K(lr,0,ns),new K(-lr,0,ns),new K(ns,lr,0),new K(-ns,lr,0)];class M0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){nh=this._renderer.getRenderTarget(),this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=b0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=E0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nh),e.scissorTest=!1,cc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===gr||e.mapping===_r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nh=this._renderer.getRenderTarget();const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:li,minFilter:li,generateMipmaps:!1,type:bo,format:Si,colorSpace:Li,depthBuffer:!1},l=y0(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=y0(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HE(u)),this._blurMaterial=GE(u,e,i)}return l}_compileMaterial(e){const i=new Se(this._lodPlanes[0],e);this._renderer.compile(i,eh)}_sceneToCubeUV(e,i,r,l){const h=new qn(90,1,i,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,S=v.toneMapping;v.getClearColor(x0),v.toneMapping=ea,v.autoClear=!1;const y=new fr({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),A=new Se(new tn,y);let T=!1;const M=e.background;M?M.isColor&&(y.color.copy(M),e.background=null,T=!0):(y.color.copy(x0),T=!0);for(let g=0;g<6;g++){const N=g%3;N===0?(h.up.set(0,m[g],0),h.lookAt(p[g],0,0)):N===1?(h.up.set(0,0,m[g]),h.lookAt(0,p[g],0)):(h.up.set(0,m[g],0),h.lookAt(0,0,p[g]));const C=this._cubeSize;cc(l,N*C,g>2?C:0,C,C),v.setRenderTarget(l),T&&v.render(A,h),v.render(e,h)}A.geometry.dispose(),A.material.dispose(),v.toneMapping=S,v.autoClear=x,e.background=M}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===gr||e.mapping===_r;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=b0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=E0());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new Se(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;cc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,eh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=S0[(l-1)%S0.length];this._blur(e,l-1,l,u,d)}i.autoClear=r}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,x=new Se(this._lodPlanes[l],p),S=p.uniforms,y=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*is-1),T=u/A,M=isFinite(u)?1+Math.floor(v*T):is;M>is&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${is}`);const g=[];let N=0;for(let O=0;O<is;++O){const q=O/T,E=Math.exp(-q*q/2);g.push(E),O===0?N+=E:O<M&&(N+=2*E)}for(let O=0;O<g.length;O++)g[O]=g[O]/N;S.envMap.value=e.texture,S.samples.value=M,S.weights.value=g,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:C}=this;S.dTheta.value=A,S.mipInt.value=C-r;const U=this._sizeLods[l],z=3*U*(l>C-hr?l-C+hr:0),H=4*(this._cubeSize-U);cc(i,z,H,3*U,2*U),m.setRenderTarget(i),m.render(x,eh)}}function HE(o){const e=[],i=[],r=[];let l=o;const u=o-hr+1+v0.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>o-hr?m=v0[d-o+hr-1]:d===0&&(m=0),r.push(m);const p=1/(h-2),v=-p,x=1+p,S=[v,v,x,v,x,x,v,v,x,x,v,x],y=6,A=6,T=3,M=2,g=1,N=new Float32Array(T*A*y),C=new Float32Array(M*A*y),U=new Float32Array(g*A*y);for(let H=0;H<y;H++){const O=H%3*2/3-1,q=H>2?0:-1,E=[O,q,0,O+2/3,q,0,O+2/3,q+1,0,O,q,0,O+2/3,q+1,0,O,q+1,0];N.set(E,T*A*H),C.set(S,M*A*H);const D=[H,H,H,H,H,H];U.set(D,g*A*H)}const z=new na;z.setAttribute("position",new Ci(N,T)),z.setAttribute("uv",new Ci(C,M)),z.setAttribute("faceIndex",new Ci(U,g)),e.push(z),l>hr&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function y0(o,e,i){const r=new us(o,e,i);return r.texture.mapping=hc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function cc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function GE(o,e,i){const r=new Float32Array(is),l=new K(0,1,0);return new fs({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:bh(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function E0(){return new fs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bh(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function b0(){return new fs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function bh(){return`

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
	`}function VE(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===ch||m===uh,v=m===gr||m===_r;if(p||v)if(h.isRenderTargetTexture&&h.needsPMREMUpdate===!0){h.needsPMREMUpdate=!1;let x=e.get(h);return i===null&&(i=new M0(o)),x=p?i.fromEquirectangular(h,x):i.fromCubemap(h,x),e.set(h,x),x.texture}else{if(e.has(h))return e.get(h).texture;{const x=h.image;if(p&&x&&x.height>0||v&&x&&l(x)){i===null&&(i=new M0(o));const S=p?i.fromEquirectangular(h):i.fromCubemap(h);return e.set(h,S),h.addEventListener("dispose",u),S.texture}else return null}}}return h}function l(h){let m=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function kE(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(r){r.isWebGL2?i("EXT_color_buffer_float"):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(r){const l=i(r);return l===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function XE(o,e,i,r){const l={},u=new WeakMap;function d(x){const S=x.target;S.index!==null&&e.remove(S.index);for(const A in S.attributes)e.remove(S.attributes[A]);S.removeEventListener("dispose",d),delete l[S.id];const y=u.get(S);y&&(e.remove(y),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(x,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(x){const S=x.attributes;for(const A in S)e.update(S[A],o.ARRAY_BUFFER);const y=x.morphAttributes;for(const A in y){const T=y[A];for(let M=0,g=T.length;M<g;M++)e.update(T[M],o.ARRAY_BUFFER)}}function p(x){const S=[],y=x.index,A=x.attributes.position;let T=0;if(y!==null){const N=y.array;T=y.version;for(let C=0,U=N.length;C<U;C+=3){const z=N[C+0],H=N[C+1],O=N[C+2];S.push(z,H,H,O,O,z)}}else{const N=A.array;T=A.version;for(let C=0,U=N.length/3-1;C<U;C+=3){const z=C+0,H=C+1,O=C+2;S.push(z,H,H,O,O,z)}}const M=new(t_(S)?o_:r_)(S,1);M.version=T;const g=u.get(x);g&&e.remove(g),u.set(x,M)}function v(x){const S=u.get(x);if(S){const y=x.index;y!==null&&S.version<y.version&&p(x)}else p(x);return u.get(x)}return{get:h,update:m,getWireframeAttribute:v}}function WE(o,e,i,r){const l=r.isWebGL2;let u;function d(S){u=S}let h,m;function p(S){h=S.type,m=S.bytesPerElement}function v(S,y){o.drawElements(u,y,h,S*m),i.update(y,u,1)}function x(S,y,A){if(A===0)return;let T,M;if(l)T=o,M="drawElementsInstanced";else if(T=e.get("ANGLE_instanced_arrays"),M="drawElementsInstancedANGLE",T===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}T[M](u,y,h,S*m,A),i.update(y,u,A)}this.setMode=d,this.setIndex=p,this.render=v,this.renderInstances=x}function qE(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.frame++,i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function jE(o,e){return o[0]-e[0]}function YE(o,e){return Math.abs(e[1])-Math.abs(o[1])}function ZE(o,e,i){const r={},l=new Float32Array(8),u=new WeakMap,d=new He,h=[];for(let p=0;p<8;p++)h[p]=[p,0];function m(p,v,x){const S=p.morphTargetInfluences;if(e.isWebGL2===!0){const A=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=A!==void 0?A.length:0;let M=u.get(v);if(M===void 0||M.count!==T){let rt=function(){Q.dispose(),u.delete(v),v.removeEventListener("dispose",rt)};var y=rt;M!==void 0&&M.texture.dispose();const C=v.morphAttributes.position!==void 0,U=v.morphAttributes.normal!==void 0,z=v.morphAttributes.color!==void 0,H=v.morphAttributes.position||[],O=v.morphAttributes.normal||[],q=v.morphAttributes.color||[];let E=0;C===!0&&(E=1),U===!0&&(E=2),z===!0&&(E=3);let D=v.attributes.position.count*E,ut=1;D>e.maxTextureSize&&(ut=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const Z=new Float32Array(D*ut*4*T),Q=new i_(Z,D,ut,T);Q.type=ss,Q.needsUpdate=!0;const at=E*4;for(let I=0;I<T;I++){const X=H[I],$=O[I],xt=q[I],dt=D*ut*4*I;for(let P=0;P<X.count;P++){const k=P*at;C===!0&&(d.fromBufferAttribute(X,P),Z[dt+k+0]=d.x,Z[dt+k+1]=d.y,Z[dt+k+2]=d.z,Z[dt+k+3]=0),U===!0&&(d.fromBufferAttribute($,P),Z[dt+k+4]=d.x,Z[dt+k+5]=d.y,Z[dt+k+6]=d.z,Z[dt+k+7]=0),z===!0&&(d.fromBufferAttribute(xt,P),Z[dt+k+8]=d.x,Z[dt+k+9]=d.y,Z[dt+k+10]=d.z,Z[dt+k+11]=xt.itemSize===4?d.w:1)}}M={count:T,texture:Q,size:new xe(D,ut)},u.set(v,M),v.addEventListener("dispose",rt)}let g=0;for(let C=0;C<S.length;C++)g+=S[C];const N=v.morphTargetsRelative?1:1-g;x.getUniforms().setValue(o,"morphTargetBaseInfluence",N),x.getUniforms().setValue(o,"morphTargetInfluences",S),x.getUniforms().setValue(o,"morphTargetsTexture",M.texture,i),x.getUniforms().setValue(o,"morphTargetsTextureSize",M.size)}else{const A=S===void 0?0:S.length;let T=r[v.id];if(T===void 0||T.length!==A){T=[];for(let U=0;U<A;U++)T[U]=[U,0];r[v.id]=T}for(let U=0;U<A;U++){const z=T[U];z[0]=U,z[1]=S[U]}T.sort(YE);for(let U=0;U<8;U++)U<A&&T[U][1]?(h[U][0]=T[U][0],h[U][1]=T[U][1]):(h[U][0]=Number.MAX_SAFE_INTEGER,h[U][1]=0);h.sort(jE);const M=v.morphAttributes.position,g=v.morphAttributes.normal;let N=0;for(let U=0;U<8;U++){const z=h[U],H=z[0],O=z[1];H!==Number.MAX_SAFE_INTEGER&&O?(M&&v.getAttribute("morphTarget"+U)!==M[H]&&v.setAttribute("morphTarget"+U,M[H]),g&&v.getAttribute("morphNormal"+U)!==g[H]&&v.setAttribute("morphNormal"+U,g[H]),l[U]=O,N+=O):(M&&v.hasAttribute("morphTarget"+U)===!0&&v.deleteAttribute("morphTarget"+U),g&&v.hasAttribute("morphNormal"+U)===!0&&v.deleteAttribute("morphNormal"+U),l[U]=0)}const C=v.morphTargetsRelative?1:1-N;x.getUniforms().setValue(o,"morphTargetBaseInfluence",C),x.getUniforms().setValue(o,"morphTargetInfluences",l)}}return{update:m}}function KE(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,v=m.geometry,x=e.get(m,v);return l.get(x)!==p&&(e.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER)),x}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const d_=new jn,p_=new i_,m_=new IS,g_=new u_,T0=[],A0=[],w0=new Float32Array(16),R0=new Float32Array(9),C0=new Float32Array(4);function yr(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=T0[l];if(u===void 0&&(u=new Float32Array(l),T0[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function sn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function rn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function pc(o,e){let i=A0[e];i===void 0&&(i=new Int32Array(e),A0[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function QE(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function JE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(sn(i,e))return;o.uniform2fv(this.addr,e),rn(i,e)}}function $E(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(sn(i,e))return;o.uniform3fv(this.addr,e),rn(i,e)}}function tb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(sn(i,e))return;o.uniform4fv(this.addr,e),rn(i,e)}}function eb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(sn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),rn(i,e)}else{if(sn(i,r))return;C0.set(r),o.uniformMatrix2fv(this.addr,!1,C0),rn(i,r)}}function nb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(sn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),rn(i,e)}else{if(sn(i,r))return;R0.set(r),o.uniformMatrix3fv(this.addr,!1,R0),rn(i,r)}}function ib(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(sn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),rn(i,e)}else{if(sn(i,r))return;w0.set(r),o.uniformMatrix4fv(this.addr,!1,w0),rn(i,r)}}function ab(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function sb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(sn(i,e))return;o.uniform2iv(this.addr,e),rn(i,e)}}function rb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(sn(i,e))return;o.uniform3iv(this.addr,e),rn(i,e)}}function ob(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(sn(i,e))return;o.uniform4iv(this.addr,e),rn(i,e)}}function lb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function cb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(sn(i,e))return;o.uniform2uiv(this.addr,e),rn(i,e)}}function ub(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(sn(i,e))return;o.uniform3uiv(this.addr,e),rn(i,e)}}function fb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(sn(i,e))return;o.uniform4uiv(this.addr,e),rn(i,e)}}function hb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2D(e||d_,l)}function db(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||m_,l)}function pb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||g_,l)}function mb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||p_,l)}function gb(o){switch(o){case 5126:return QE;case 35664:return JE;case 35665:return $E;case 35666:return tb;case 35674:return eb;case 35675:return nb;case 35676:return ib;case 5124:case 35670:return ab;case 35667:case 35671:return sb;case 35668:case 35672:return rb;case 35669:case 35673:return ob;case 5125:return lb;case 36294:return cb;case 36295:return ub;case 36296:return fb;case 35678:case 36198:case 36298:case 36306:case 35682:return hb;case 35679:case 36299:case 36307:return db;case 35680:case 36300:case 36308:case 36293:return pb;case 36289:case 36303:case 36311:case 36292:return mb}}function _b(o,e){o.uniform1fv(this.addr,e)}function vb(o,e){const i=yr(e,this.size,2);o.uniform2fv(this.addr,i)}function xb(o,e){const i=yr(e,this.size,3);o.uniform3fv(this.addr,i)}function Sb(o,e){const i=yr(e,this.size,4);o.uniform4fv(this.addr,i)}function Mb(o,e){const i=yr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function yb(o,e){const i=yr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Eb(o,e){const i=yr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function bb(o,e){o.uniform1iv(this.addr,e)}function Tb(o,e){o.uniform2iv(this.addr,e)}function Ab(o,e){o.uniform3iv(this.addr,e)}function wb(o,e){o.uniform4iv(this.addr,e)}function Rb(o,e){o.uniform1uiv(this.addr,e)}function Cb(o,e){o.uniform2uiv(this.addr,e)}function Lb(o,e){o.uniform3uiv(this.addr,e)}function Db(o,e){o.uniform4uiv(this.addr,e)}function Ub(o,e,i){const r=this.cache,l=e.length,u=pc(i,l);sn(r,u)||(o.uniform1iv(this.addr,u),rn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||d_,u[d])}function Nb(o,e,i){const r=this.cache,l=e.length,u=pc(i,l);sn(r,u)||(o.uniform1iv(this.addr,u),rn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||m_,u[d])}function Ob(o,e,i){const r=this.cache,l=e.length,u=pc(i,l);sn(r,u)||(o.uniform1iv(this.addr,u),rn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||g_,u[d])}function zb(o,e,i){const r=this.cache,l=e.length,u=pc(i,l);sn(r,u)||(o.uniform1iv(this.addr,u),rn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||p_,u[d])}function Pb(o){switch(o){case 5126:return _b;case 35664:return vb;case 35665:return xb;case 35666:return Sb;case 35674:return Mb;case 35675:return yb;case 35676:return Eb;case 5124:case 35670:return bb;case 35667:case 35671:return Tb;case 35668:case 35672:return Ab;case 35669:case 35673:return wb;case 5125:return Rb;case 36294:return Cb;case 36295:return Lb;case 36296:return Db;case 35678:case 36198:case 36298:case 36306:case 35682:return Ub;case 35679:case 36299:case 36307:return Nb;case 35680:case 36300:case 36308:case 36293:return Ob;case 36289:case 36303:case 36311:case 36292:return zb}}class Bb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.setValue=gb(i.type)}}class Fb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.size=i.size,this.setValue=Pb(i.type)}}class Ib{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const ih=/(\w+)(\])?(\[|\.)?/g;function L0(o,e){o.seq.push(e),o.map[e.id]=e}function Hb(o,e,i){const r=o.name,l=r.length;for(ih.lastIndex=0;;){const u=ih.exec(r),d=ih.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){L0(i,p===void 0?new Bb(h,o,e):new Fb(h,o,e));break}else{let x=i.map[h];x===void 0&&(x=new Ib(h),L0(i,x)),i=x}}}class uc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);Hb(u,d,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function D0(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}let Gb=0;function Vb(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}function kb(o){switch(o){case Li:return["Linear","( value )"];case ae:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),["Linear","( value )"]}}function U0(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+Vb(o.getShaderSource(e),d)}else return l}function Xb(o,e){const i=kb(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+i[0]+i[1]+"; }"}function Wb(o,e){let i;switch(e){case rS:i="Linear";break;case oS:i="Reinhard";break;case lS:i="OptimizedCineon";break;case Z0:i="ACESFilmic";break;case cS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function qb(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Mo).join(`
`)}function jb(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function Yb(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Mo(o){return o!==""}function N0(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function O0(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zb=/^[ \t]*#include +<([\w\d./]+)>/gm;function mh(o){return o.replace(Zb,Kb)}function Kb(o,e){const i=le[e];if(i===void 0)throw new Error("Can not resolve #include <"+e+">");return mh(i)}const Qb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function z0(o){return o.replace(Qb,Jb)}function Jb(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function P0(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $b(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===W0?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===q0?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ta&&(e="SHADOWMAP_TYPE_VSM"),e}function tT(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case gr:case _r:e="ENVMAP_TYPE_CUBE";break;case hc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function eT(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case _r:e="ENVMAP_MODE_REFRACTION";break}return e}function nT(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case xh:e="ENVMAP_BLENDING_MULTIPLY";break;case aS:e="ENVMAP_BLENDING_MIX";break;case sS:e="ENVMAP_BLENDING_ADD";break}return e}function iT(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function aT(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=$b(i),p=tT(i),v=eT(i),x=nT(i),S=iT(i),y=i.isWebGL2?"":qb(i),A=jb(u),T=l.createProgram();let M,g,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=[A].filter(Mo).join(`
`),M.length>0&&(M+=`
`),g=[y,A].filter(Mo).join(`
`),g.length>0&&(g+=`
`)):(M=[P0(i),"#define SHADER_NAME "+i.shaderName,A,i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mo).join(`
`),g=[y,P0(i),"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+x:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ea?"#define TONE_MAPPING":"",i.toneMapping!==ea?le.tonemapping_pars_fragment:"",i.toneMapping!==ea?Wb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",le.encodings_pars_fragment,Xb("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Mo).join(`
`)),d=mh(d),d=N0(d,i),d=O0(d,i),h=mh(h),h=N0(h,i),h=O0(h,i),d=z0(d),h=z0(h),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,M=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,g=["#define varying in",i.glslVersion===e0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===e0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const C=N+M+d,U=N+g+h,z=D0(l,l.VERTEX_SHADER,C),H=D0(l,l.FRAGMENT_SHADER,U);if(l.attachShader(T,z),l.attachShader(T,H),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T),o.debug.checkShaderErrors){const E=l.getProgramInfoLog(T).trim(),D=l.getShaderInfoLog(z).trim(),ut=l.getShaderInfoLog(H).trim();let Z=!0,Q=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(Z=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,T,z,H);else{const at=U0(l,z,"vertex"),rt=U0(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Program Info Log: `+E+`
`+at+`
`+rt)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(D===""||ut==="")&&(Q=!1);Q&&(this.diagnostics={runnable:Z,programLog:E,vertexShader:{log:D,prefix:M},fragmentShader:{log:ut,prefix:g}})}l.deleteShader(z),l.deleteShader(H);let O;this.getUniforms=function(){return O===void 0&&(O=new uc(l,T)),O};let q;return this.getAttributes=function(){return q===void 0&&(q=Yb(l,T)),q},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.name=i.shaderName,this.id=Gb++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=z,this.fragmentShader=H,this}let sT=0;class rT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new oT(e),i.set(e,r)),r}}class oT{constructor(e){this.id=sT++,this.code=e,this.usedTimes=0}}function lT(o,e,i,r,l,u,d){const h=new yh,m=new rT,p=[],v=l.isWebGL2,x=l.logarithmicDepthBuffer,S=l.vertexTextures;let y=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(E){return E===1?"uv1":E===2?"uv2":E===3?"uv3":"uv"}function M(E,D,ut,Z,Q){const at=Z.fog,rt=Q.geometry,I=E.isMeshStandardMaterial?Z.environment:null,X=(E.isMeshStandardMaterial?i:e).get(E.envMap||I),$=X&&X.mapping===hc?X.image.height:null,xt=A[E.type];E.precision!==null&&(y=l.getMaxPrecision(E.precision),y!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",y,"instead."));const dt=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,P=dt!==void 0?dt.length:0;let k=0;rt.morphAttributes.position!==void 0&&(k=1),rt.morphAttributes.normal!==void 0&&(k=2),rt.morphAttributes.color!==void 0&&(k=3);let V,J,gt,st;if(xt){const ye=wi[xt];V=ye.vertexShader,J=ye.fragmentShader}else V=E.vertexShader,J=E.fragmentShader,m.update(E),gt=m.getVertexShaderID(E),st=m.getFragmentShaderID(E);const R=o.getRenderTarget(),yt=Q.isInstancedMesh===!0,Et=!!E.map,St=!!E.matcap,Dt=!!X,Zt=!!E.aoMap,Ut=!!E.lightMap,It=!!E.bumpMap,ce=!!E.normalMap,Wt=!!E.displacementMap,qt=!!E.emissiveMap,ee=!!E.metalnessMap,de=!!E.roughnessMap,Le=E.clearcoat>0,Ge=E.iridescence>0,B=E.sheen>0,w=E.transmission>0,lt=Le&&!!E.clearcoatMap,Tt=Le&&!!E.clearcoatNormalMap,At=Le&&!!E.clearcoatRoughnessMap,Ct=Ge&&!!E.iridescenceMap,jt=Ge&&!!E.iridescenceThicknessMap,Ot=B&&!!E.sheenColorMap,_t=B&&!!E.sheenRoughnessMap,Ht=!!E.specularMap,kt=!!E.specularColorMap,Gt=!!E.specularIntensityMap,wt=w&&!!E.transmissionMap,zt=w&&!!E.thicknessMap,Kt=!!E.gradientMap,we=!!E.alphaMap,Ve=E.alphaTest>0,W=!!E.extensions,pt=!!rt.attributes.uv1,bt=!!rt.attributes.uv2,Lt=!!rt.attributes.uv3;return{isWebGL2:v,shaderID:xt,shaderName:E.type,vertexShader:V,fragmentShader:J,defines:E.defines,customVertexShaderID:gt,customFragmentShaderID:st,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:y,instancing:yt,instancingColor:yt&&Q.instanceColor!==null,supportsVertexTextures:S,outputColorSpace:R===null?o.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Li,map:Et,matcap:St,envMap:Dt,envMapMode:Dt&&X.mapping,envMapCubeUVHeight:$,aoMap:Zt,lightMap:Ut,bumpMap:It,normalMap:ce,displacementMap:S&&Wt,emissiveMap:qt,normalMapObjectSpace:ce&&E.normalMapType===RS,normalMapTangentSpace:ce&&E.normalMapType===Sh,metalnessMap:ee,roughnessMap:de,clearcoat:Le,clearcoatMap:lt,clearcoatNormalMap:Tt,clearcoatRoughnessMap:At,iridescence:Ge,iridescenceMap:Ct,iridescenceThicknessMap:jt,sheen:B,sheenColorMap:Ot,sheenRoughnessMap:_t,specularMap:Ht,specularColorMap:kt,specularIntensityMap:Gt,transmission:w,transmissionMap:wt,thicknessMap:zt,gradientMap:Kt,opaque:E.transparent===!1&&E.blending===dr,alphaMap:we,alphaTest:Ve,combine:E.combine,mapUv:Et&&T(E.map.channel),aoMapUv:Zt&&T(E.aoMap.channel),lightMapUv:Ut&&T(E.lightMap.channel),bumpMapUv:It&&T(E.bumpMap.channel),normalMapUv:ce&&T(E.normalMap.channel),displacementMapUv:Wt&&T(E.displacementMap.channel),emissiveMapUv:qt&&T(E.emissiveMap.channel),metalnessMapUv:ee&&T(E.metalnessMap.channel),roughnessMapUv:de&&T(E.roughnessMap.channel),clearcoatMapUv:lt&&T(E.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&T(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&T(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&T(E.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&T(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&T(E.sheenColorMap.channel),sheenRoughnessMapUv:_t&&T(E.sheenRoughnessMap.channel),specularMapUv:Ht&&T(E.specularMap.channel),specularColorMapUv:kt&&T(E.specularColorMap.channel),specularIntensityMapUv:Gt&&T(E.specularIntensityMap.channel),transmissionMapUv:wt&&T(E.transmissionMap.channel),thicknessMapUv:zt&&T(E.thicknessMap.channel),alphaMapUv:we&&T(E.alphaMap.channel),vertexTangents:ce&&!!rt.attributes.tangent,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,vertexUv1s:pt,vertexUv2s:bt,vertexUv3s:Lt,pointsUvs:Q.isPoints===!0&&!!rt.attributes.uv&&(Et||we),fog:!!at,useFog:E.fog===!0,fogExp2:at&&at.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:x,skinning:Q.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:k,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&ut.length>0,shadowMapType:o.shadowMap.type,toneMapping:E.toneMapped?o.toneMapping:ea,useLegacyLights:o.useLegacyLights,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ri,flipSided:E.side===zn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:W&&E.extensions.derivatives===!0,extensionFragDepth:W&&E.extensions.fragDepth===!0,extensionDrawBuffers:W&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:W&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:v||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:v||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:v||r.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()}}function g(E){const D=[];if(E.shaderID?D.push(E.shaderID):(D.push(E.customVertexShaderID),D.push(E.customFragmentShaderID)),E.defines!==void 0)for(const ut in E.defines)D.push(ut),D.push(E.defines[ut]);return E.isRawShaderMaterial===!1&&(N(D,E),C(D,E),D.push(o.outputColorSpace)),D.push(E.customProgramCacheKey),D.join()}function N(E,D){E.push(D.precision),E.push(D.outputColorSpace),E.push(D.envMapMode),E.push(D.envMapCubeUVHeight),E.push(D.mapUv),E.push(D.alphaMapUv),E.push(D.lightMapUv),E.push(D.aoMapUv),E.push(D.bumpMapUv),E.push(D.normalMapUv),E.push(D.displacementMapUv),E.push(D.emissiveMapUv),E.push(D.metalnessMapUv),E.push(D.roughnessMapUv),E.push(D.clearcoatMapUv),E.push(D.clearcoatNormalMapUv),E.push(D.clearcoatRoughnessMapUv),E.push(D.iridescenceMapUv),E.push(D.iridescenceThicknessMapUv),E.push(D.sheenColorMapUv),E.push(D.sheenRoughnessMapUv),E.push(D.specularMapUv),E.push(D.specularColorMapUv),E.push(D.specularIntensityMapUv),E.push(D.transmissionMapUv),E.push(D.thicknessMapUv),E.push(D.combine),E.push(D.fogExp2),E.push(D.sizeAttenuation),E.push(D.morphTargetsCount),E.push(D.morphAttributeCount),E.push(D.numDirLights),E.push(D.numPointLights),E.push(D.numSpotLights),E.push(D.numSpotLightMaps),E.push(D.numHemiLights),E.push(D.numRectAreaLights),E.push(D.numDirLightShadows),E.push(D.numPointLightShadows),E.push(D.numSpotLightShadows),E.push(D.numSpotLightShadowsWithMaps),E.push(D.shadowMapType),E.push(D.toneMapping),E.push(D.numClippingPlanes),E.push(D.numClipIntersection),E.push(D.depthPacking)}function C(E,D){h.disableAll(),D.isWebGL2&&h.enable(0),D.supportsVertexTextures&&h.enable(1),D.instancing&&h.enable(2),D.instancingColor&&h.enable(3),D.matcap&&h.enable(4),D.envMap&&h.enable(5),D.normalMapObjectSpace&&h.enable(6),D.normalMapTangentSpace&&h.enable(7),D.clearcoat&&h.enable(8),D.iridescence&&h.enable(9),D.alphaTest&&h.enable(10),D.vertexColors&&h.enable(11),D.vertexAlphas&&h.enable(12),D.vertexUv1s&&h.enable(13),D.vertexUv2s&&h.enable(14),D.vertexUv3s&&h.enable(15),D.vertexTangents&&h.enable(16),E.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.skinning&&h.enable(4),D.morphTargets&&h.enable(5),D.morphNormals&&h.enable(6),D.morphColors&&h.enable(7),D.premultipliedAlpha&&h.enable(8),D.shadowMapEnabled&&h.enable(9),D.useLegacyLights&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),E.push(h.mask)}function U(E){const D=A[E.type];let ut;if(D){const Z=wi[D];ut=QS.clone(Z.uniforms)}else ut=E.uniforms;return ut}function z(E,D){let ut;for(let Z=0,Q=p.length;Z<Q;Z++){const at=p[Z];if(at.cacheKey===D){ut=at,++ut.usedTimes;break}}return ut===void 0&&(ut=new aT(o,D,E,u),p.push(ut)),ut}function H(E){if(--E.usedTimes===0){const D=p.indexOf(E);p[D]=p[p.length-1],p.pop(),E.destroy()}}function O(E){m.remove(E)}function q(){m.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:U,acquireProgram:z,releaseProgram:H,releaseShaderCache:O,programs:p,dispose:q}}function cT(){let o=new WeakMap;function e(u){let d=o.get(u);return d===void 0&&(d={},o.set(u,d)),d}function i(u){o.delete(u)}function r(u,d,h){o.get(u)[d]=h}function l(){o=new WeakMap}return{get:e,remove:i,update:r,dispose:l}}function uT(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function B0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function F0(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(x,S,y,A,T,M){let g=o[e];return g===void 0?(g={id:x.id,object:x,geometry:S,material:y,groupOrder:A,renderOrder:x.renderOrder,z:T,group:M},o[e]=g):(g.id=x.id,g.object=x,g.geometry=S,g.material=y,g.groupOrder=A,g.renderOrder=x.renderOrder,g.z=T,g.group=M),e++,g}function h(x,S,y,A,T,M){const g=d(x,S,y,A,T,M);y.transmission>0?r.push(g):y.transparent===!0?l.push(g):i.push(g)}function m(x,S,y,A,T,M){const g=d(x,S,y,A,T,M);y.transmission>0?r.unshift(g):y.transparent===!0?l.unshift(g):i.unshift(g)}function p(x,S){i.length>1&&i.sort(x||uT),r.length>1&&r.sort(S||B0),l.length>1&&l.sort(S||B0)}function v(){for(let x=e,S=o.length;x<S;x++){const y=o[x];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:v,sort:p}}function fT(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new F0,o.set(r,[d])):l>=u.length?(d=new F0,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function hT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new K,color:new Te};break;case"SpotLight":i={position:new K,direction:new K,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new Te,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":i={color:new Te,position:new K,halfWidth:new K,halfHeight:new K};break}return o[e.id]=i,i}}}function dT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let pT=0;function mT(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function gT(o,e){const i=new hT,r=dT(),l={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let v=0;v<9;v++)l.probe.push(new K);const u=new K,d=new en,h=new en;function m(v,x){let S=0,y=0,A=0;for(let ut=0;ut<9;ut++)l.probe[ut].set(0,0,0);let T=0,M=0,g=0,N=0,C=0,U=0,z=0,H=0,O=0,q=0;v.sort(mT);const E=x===!0?Math.PI:1;for(let ut=0,Z=v.length;ut<Z;ut++){const Q=v[ut],at=Q.color,rt=Q.intensity,I=Q.distance,X=Q.shadow&&Q.shadow.map?Q.shadow.map.texture:null;if(Q.isAmbientLight)S+=at.r*rt*E,y+=at.g*rt*E,A+=at.b*rt*E;else if(Q.isLightProbe)for(let $=0;$<9;$++)l.probe[$].addScaledVector(Q.sh.coefficients[$],rt);else if(Q.isDirectionalLight){const $=i.get(Q);if($.color.copy(Q.color).multiplyScalar(Q.intensity*E),Q.castShadow){const xt=Q.shadow,dt=r.get(Q);dt.shadowBias=xt.bias,dt.shadowNormalBias=xt.normalBias,dt.shadowRadius=xt.radius,dt.shadowMapSize=xt.mapSize,l.directionalShadow[T]=dt,l.directionalShadowMap[T]=X,l.directionalShadowMatrix[T]=Q.shadow.matrix,U++}l.directional[T]=$,T++}else if(Q.isSpotLight){const $=i.get(Q);$.position.setFromMatrixPosition(Q.matrixWorld),$.color.copy(at).multiplyScalar(rt*E),$.distance=I,$.coneCos=Math.cos(Q.angle),$.penumbraCos=Math.cos(Q.angle*(1-Q.penumbra)),$.decay=Q.decay,l.spot[g]=$;const xt=Q.shadow;if(Q.map&&(l.spotLightMap[O]=Q.map,O++,xt.updateMatrices(Q),Q.castShadow&&q++),l.spotLightMatrix[g]=xt.matrix,Q.castShadow){const dt=r.get(Q);dt.shadowBias=xt.bias,dt.shadowNormalBias=xt.normalBias,dt.shadowRadius=xt.radius,dt.shadowMapSize=xt.mapSize,l.spotShadow[g]=dt,l.spotShadowMap[g]=X,H++}g++}else if(Q.isRectAreaLight){const $=i.get(Q);$.color.copy(at).multiplyScalar(rt),$.halfWidth.set(Q.width*.5,0,0),$.halfHeight.set(0,Q.height*.5,0),l.rectArea[N]=$,N++}else if(Q.isPointLight){const $=i.get(Q);if($.color.copy(Q.color).multiplyScalar(Q.intensity*E),$.distance=Q.distance,$.decay=Q.decay,Q.castShadow){const xt=Q.shadow,dt=r.get(Q);dt.shadowBias=xt.bias,dt.shadowNormalBias=xt.normalBias,dt.shadowRadius=xt.radius,dt.shadowMapSize=xt.mapSize,dt.shadowCameraNear=xt.camera.near,dt.shadowCameraFar=xt.camera.far,l.pointShadow[M]=dt,l.pointShadowMap[M]=X,l.pointShadowMatrix[M]=Q.shadow.matrix,z++}l.point[M]=$,M++}else if(Q.isHemisphereLight){const $=i.get(Q);$.skyColor.copy(Q.color).multiplyScalar(rt*E),$.groundColor.copy(Q.groundColor).multiplyScalar(rt*E),l.hemi[C]=$,C++}}N>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Rt.LTC_FLOAT_1,l.rectAreaLTC2=Rt.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(l.rectAreaLTC1=Rt.LTC_HALF_1,l.rectAreaLTC2=Rt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),l.ambient[0]=S,l.ambient[1]=y,l.ambient[2]=A;const D=l.hash;(D.directionalLength!==T||D.pointLength!==M||D.spotLength!==g||D.rectAreaLength!==N||D.hemiLength!==C||D.numDirectionalShadows!==U||D.numPointShadows!==z||D.numSpotShadows!==H||D.numSpotMaps!==O)&&(l.directional.length=T,l.spot.length=g,l.rectArea.length=N,l.point.length=M,l.hemi.length=C,l.directionalShadow.length=U,l.directionalShadowMap.length=U,l.pointShadow.length=z,l.pointShadowMap.length=z,l.spotShadow.length=H,l.spotShadowMap.length=H,l.directionalShadowMatrix.length=U,l.pointShadowMatrix.length=z,l.spotLightMatrix.length=H+O-q,l.spotLightMap.length=O,l.numSpotLightShadowsWithMaps=q,D.directionalLength=T,D.pointLength=M,D.spotLength=g,D.rectAreaLength=N,D.hemiLength=C,D.numDirectionalShadows=U,D.numPointShadows=z,D.numSpotShadows=H,D.numSpotMaps=O,l.version=pT++)}function p(v,x){let S=0,y=0,A=0,T=0,M=0;const g=x.matrixWorldInverse;for(let N=0,C=v.length;N<C;N++){const U=v[N];if(U.isDirectionalLight){const z=l.directional[S];z.direction.setFromMatrixPosition(U.matrixWorld),u.setFromMatrixPosition(U.target.matrixWorld),z.direction.sub(u),z.direction.transformDirection(g),S++}else if(U.isSpotLight){const z=l.spot[A];z.position.setFromMatrixPosition(U.matrixWorld),z.position.applyMatrix4(g),z.direction.setFromMatrixPosition(U.matrixWorld),u.setFromMatrixPosition(U.target.matrixWorld),z.direction.sub(u),z.direction.transformDirection(g),A++}else if(U.isRectAreaLight){const z=l.rectArea[T];z.position.setFromMatrixPosition(U.matrixWorld),z.position.applyMatrix4(g),h.identity(),d.copy(U.matrixWorld),d.premultiply(g),h.extractRotation(d),z.halfWidth.set(U.width*.5,0,0),z.halfHeight.set(0,U.height*.5,0),z.halfWidth.applyMatrix4(h),z.halfHeight.applyMatrix4(h),T++}else if(U.isPointLight){const z=l.point[y];z.position.setFromMatrixPosition(U.matrixWorld),z.position.applyMatrix4(g),y++}else if(U.isHemisphereLight){const z=l.hemi[M];z.direction.setFromMatrixPosition(U.matrixWorld),z.direction.transformDirection(g),M++}}}return{setup:m,setupView:p,state:l}}function I0(o,e){const i=new gT(o,e),r=[],l=[];function u(){r.length=0,l.length=0}function d(x){r.push(x)}function h(x){l.push(x)}function m(x){i.setup(r,x)}function p(x){i.setupView(r,x)}return{init:u,state:{lightsArray:r,shadowsArray:l,lights:i},setupLights:m,setupLightsView:p,pushLight:d,pushShadow:h}}function _T(o,e){let i=new WeakMap;function r(u,d=0){const h=i.get(u);let m;return h===void 0?(m=new I0(o,e),i.set(u,[m])):d>=h.length?(m=new I0(o,e),h.push(m)):m=h[d],m}function l(){i=new WeakMap}return{get:r,dispose:l}}class vT extends Mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=AS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xT extends Mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ST=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MT=`uniform sampler2D shadow_pass;
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
}`;function yT(o,e,i){let r=new Eh;const l=new xe,u=new xe,d=new He,h=new vT({depthPacking:wS}),m=new xT,p={},v=i.maxTextureSize,x={[Oa]:zn,[zn]:Oa,[Ri]:Ri},S=new fs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:ST,fragmentShader:MT}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const A=new na;A.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Se(A,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=W0;let g=this.type;this.render=function(z,H,O){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;const q=o.getRenderTarget(),E=o.getActiveCubeFace(),D=o.getActiveMipmapLevel(),ut=o.state;ut.setBlending(Na),ut.buffers.color.setClear(1,1,1,1),ut.buffers.depth.setTest(!0),ut.setScissorTest(!1);const Z=g!==ta&&this.type===ta,Q=g===ta&&this.type!==ta;for(let at=0,rt=z.length;at<rt;at++){const I=z[at],X=I.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;l.copy(X.mapSize);const $=X.getFrameExtents();if(l.multiply($),u.copy(X.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/$.x),l.x=u.x*$.x,X.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/$.y),l.y=u.y*$.y,X.mapSize.y=u.y)),X.map===null||Z===!0||Q===!0){const dt=this.type!==ta?{minFilter:bn,magFilter:bn}:{};X.map!==null&&X.map.dispose(),X.map=new us(l.x,l.y,dt),X.map.texture.name=I.name+".shadowMap",X.camera.updateProjectionMatrix()}o.setRenderTarget(X.map),o.clear();const xt=X.getViewportCount();for(let dt=0;dt<xt;dt++){const P=X.getViewport(dt);d.set(u.x*P.x,u.y*P.y,u.x*P.z,u.y*P.w),ut.viewport(d),X.updateMatrices(I,dt),r=X.getFrustum(),U(H,O,X.camera,I,this.type)}X.isPointLightShadow!==!0&&this.type===ta&&N(X,O),X.needsUpdate=!1}g=this.type,M.needsUpdate=!1,o.setRenderTarget(q,E,D)};function N(z,H){const O=e.update(T);S.defines.VSM_SAMPLES!==z.blurSamples&&(S.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new us(l.x,l.y)),S.uniforms.shadow_pass.value=z.map.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,o.setRenderTarget(z.mapPass),o.clear(),o.renderBufferDirect(H,null,O,S,T,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,o.setRenderTarget(z.map),o.clear(),o.renderBufferDirect(H,null,O,y,T,null)}function C(z,H,O,q){let E=null;const D=O.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(D!==void 0)E=D;else if(E=O.isPointLight===!0?m:h,o.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0){const ut=E.uuid,Z=H.uuid;let Q=p[ut];Q===void 0&&(Q={},p[ut]=Q);let at=Q[Z];at===void 0&&(at=E.clone(),Q[Z]=at),E=at}if(E.visible=H.visible,E.wireframe=H.wireframe,q===ta?E.side=H.shadowSide!==null?H.shadowSide:H.side:E.side=H.shadowSide!==null?H.shadowSide:x[H.side],E.alphaMap=H.alphaMap,E.alphaTest=H.alphaTest,E.map=H.map,E.clipShadows=H.clipShadows,E.clippingPlanes=H.clippingPlanes,E.clipIntersection=H.clipIntersection,E.displacementMap=H.displacementMap,E.displacementScale=H.displacementScale,E.displacementBias=H.displacementBias,E.wireframeLinewidth=H.wireframeLinewidth,E.linewidth=H.linewidth,O.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const ut=o.properties.get(E);ut.light=O}return E}function U(z,H,O,q,E){if(z.visible===!1)return;if(z.layers.test(H.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&E===ta)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,z.matrixWorld);const Z=e.update(z),Q=z.material;if(Array.isArray(Q)){const at=Z.groups;for(let rt=0,I=at.length;rt<I;rt++){const X=at[rt],$=Q[X.materialIndex];if($&&$.visible){const xt=C(z,$,q,E);o.renderBufferDirect(O,null,Z,xt,z,X)}}}else if(Q.visible){const at=C(z,Q,q,E);o.renderBufferDirect(O,null,Z,at,z,null)}}const ut=z.children;for(let Z=0,Q=ut.length;Z<Q;Z++)U(ut[Z],H,O,q,E)}}function ET(o,e,i){const r=i.isWebGL2;function l(){let W=!1;const pt=new He;let bt=null;const Lt=new He(0,0,0,0);return{setMask:function(Pt){bt!==Pt&&!W&&(o.colorMask(Pt,Pt,Pt,Pt),bt=Pt)},setLocked:function(Pt){W=Pt},setClear:function(Pt,ye,Me,on,ui){ui===!0&&(Pt*=on,ye*=on,Me*=on),pt.set(Pt,ye,Me,on),Lt.equals(pt)===!1&&(o.clearColor(Pt,ye,Me,on),Lt.copy(pt))},reset:function(){W=!1,bt=null,Lt.set(-1,0,0,0)}}}function u(){let W=!1,pt=null,bt=null,Lt=null;return{setTest:function(Pt){Pt?R(o.DEPTH_TEST):yt(o.DEPTH_TEST)},setMask:function(Pt){pt!==Pt&&!W&&(o.depthMask(Pt),pt=Pt)},setFunc:function(Pt){if(bt!==Pt){switch(Pt){case Qx:o.depthFunc(o.NEVER);break;case Jx:o.depthFunc(o.ALWAYS);break;case $x:o.depthFunc(o.LESS);break;case lh:o.depthFunc(o.LEQUAL);break;case tS:o.depthFunc(o.EQUAL);break;case eS:o.depthFunc(o.GEQUAL);break;case nS:o.depthFunc(o.GREATER);break;case iS:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}bt=Pt}},setLocked:function(Pt){W=Pt},setClear:function(Pt){Lt!==Pt&&(o.clearDepth(Pt),Lt=Pt)},reset:function(){W=!1,pt=null,bt=null,Lt=null}}}function d(){let W=!1,pt=null,bt=null,Lt=null,Pt=null,ye=null,Me=null,on=null,ui=null;return{setTest:function(Pe){W||(Pe?R(o.STENCIL_TEST):yt(o.STENCIL_TEST))},setMask:function(Pe){pt!==Pe&&!W&&(o.stencilMask(Pe),pt=Pe)},setFunc:function(Pe,ln,Zn){(bt!==Pe||Lt!==ln||Pt!==Zn)&&(o.stencilFunc(Pe,ln,Zn),bt=Pe,Lt=ln,Pt=Zn)},setOp:function(Pe,ln,Zn){(ye!==Pe||Me!==ln||on!==Zn)&&(o.stencilOp(Pe,ln,Zn),ye=Pe,Me=ln,on=Zn)},setLocked:function(Pe){W=Pe},setClear:function(Pe){ui!==Pe&&(o.clearStencil(Pe),ui=Pe)},reset:function(){W=!1,pt=null,bt=null,Lt=null,Pt=null,ye=null,Me=null,on=null,ui=null}}}const h=new l,m=new u,p=new d,v=new WeakMap,x=new WeakMap;let S={},y={},A=new WeakMap,T=[],M=null,g=!1,N=null,C=null,U=null,z=null,H=null,O=null,q=null,E=!1,D=null,ut=null,Z=null,Q=null,at=null;const rt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,X=0;const $=o.getParameter(o.VERSION);$.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec($)[1]),I=X>=1):$.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),I=X>=2);let xt=null,dt={};const P=o.getParameter(o.SCISSOR_BOX),k=o.getParameter(o.VIEWPORT),V=new He().fromArray(P),J=new He().fromArray(k);function gt(W,pt,bt,Lt){const Pt=new Uint8Array(4),ye=o.createTexture();o.bindTexture(W,ye),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Me=0;Me<bt;Me++)r&&(W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY)?o.texImage3D(pt,0,o.RGBA,1,1,Lt,0,o.RGBA,o.UNSIGNED_BYTE,Pt):o.texImage2D(pt+Me,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Pt);return ye}const st={};st[o.TEXTURE_2D]=gt(o.TEXTURE_2D,o.TEXTURE_2D,1),st[o.TEXTURE_CUBE_MAP]=gt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(st[o.TEXTURE_2D_ARRAY]=gt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),st[o.TEXTURE_3D]=gt(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),h.setClear(0,0,0,1),m.setClear(1),p.setClear(0),R(o.DEPTH_TEST),m.setFunc(lh),Wt(!1),qt(bg),R(o.CULL_FACE),It(Na);function R(W){S[W]!==!0&&(o.enable(W),S[W]=!0)}function yt(W){S[W]!==!1&&(o.disable(W),S[W]=!1)}function Et(W,pt){return y[W]!==pt?(o.bindFramebuffer(W,pt),y[W]=pt,r&&(W===o.DRAW_FRAMEBUFFER&&(y[o.FRAMEBUFFER]=pt),W===o.FRAMEBUFFER&&(y[o.DRAW_FRAMEBUFFER]=pt)),!0):!1}function St(W,pt){let bt=T,Lt=!1;if(W)if(bt=A.get(pt),bt===void 0&&(bt=[],A.set(pt,bt)),W.isWebGLMultipleRenderTargets){const Pt=W.texture;if(bt.length!==Pt.length||bt[0]!==o.COLOR_ATTACHMENT0){for(let ye=0,Me=Pt.length;ye<Me;ye++)bt[ye]=o.COLOR_ATTACHMENT0+ye;bt.length=Pt.length,Lt=!0}}else bt[0]!==o.COLOR_ATTACHMENT0&&(bt[0]=o.COLOR_ATTACHMENT0,Lt=!0);else bt[0]!==o.BACK&&(bt[0]=o.BACK,Lt=!0);Lt&&(i.isWebGL2?o.drawBuffers(bt):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(bt))}function Dt(W){return M!==W?(o.useProgram(W),M=W,!0):!1}const Zt={[ur]:o.FUNC_ADD,[Hx]:o.FUNC_SUBTRACT,[Gx]:o.FUNC_REVERSE_SUBTRACT};if(r)Zt[Rg]=o.MIN,Zt[Cg]=o.MAX;else{const W=e.get("EXT_blend_minmax");W!==null&&(Zt[Rg]=W.MIN_EXT,Zt[Cg]=W.MAX_EXT)}const Ut={[Vx]:o.ZERO,[kx]:o.ONE,[Xx]:o.SRC_COLOR,[j0]:o.SRC_ALPHA,[Kx]:o.SRC_ALPHA_SATURATE,[Yx]:o.DST_COLOR,[qx]:o.DST_ALPHA,[Wx]:o.ONE_MINUS_SRC_COLOR,[Y0]:o.ONE_MINUS_SRC_ALPHA,[Zx]:o.ONE_MINUS_DST_COLOR,[jx]:o.ONE_MINUS_DST_ALPHA};function It(W,pt,bt,Lt,Pt,ye,Me,on){if(W===Na){g===!0&&(yt(o.BLEND),g=!1);return}if(g===!1&&(R(o.BLEND),g=!0),W!==Ix){if(W!==N||on!==E){if((C!==ur||H!==ur)&&(o.blendEquation(o.FUNC_ADD),C=ur,H=ur),on)switch(W){case dr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Tg:o.blendFunc(o.ONE,o.ONE);break;case Ag:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case wg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case dr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Tg:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Ag:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case wg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}U=null,z=null,O=null,q=null,N=W,E=on}return}Pt=Pt||pt,ye=ye||bt,Me=Me||Lt,(pt!==C||Pt!==H)&&(o.blendEquationSeparate(Zt[pt],Zt[Pt]),C=pt,H=Pt),(bt!==U||Lt!==z||ye!==O||Me!==q)&&(o.blendFuncSeparate(Ut[bt],Ut[Lt],Ut[ye],Ut[Me]),U=bt,z=Lt,O=ye,q=Me),N=W,E=!1}function ce(W,pt){W.side===Ri?yt(o.CULL_FACE):R(o.CULL_FACE);let bt=W.side===zn;pt&&(bt=!bt),Wt(bt),W.blending===dr&&W.transparent===!1?It(Na):It(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.premultipliedAlpha),m.setFunc(W.depthFunc),m.setTest(W.depthTest),m.setMask(W.depthWrite),h.setMask(W.colorWrite);const Lt=W.stencilWrite;p.setTest(Lt),Lt&&(p.setMask(W.stencilWriteMask),p.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),p.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),de(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?R(o.SAMPLE_ALPHA_TO_COVERAGE):yt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(W){D!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),D=W)}function qt(W){W!==Bx?(R(o.CULL_FACE),W!==ut&&(W===bg?o.cullFace(o.BACK):W===Fx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):yt(o.CULL_FACE),ut=W}function ee(W){W!==Z&&(I&&o.lineWidth(W),Z=W)}function de(W,pt,bt){W?(R(o.POLYGON_OFFSET_FILL),(Q!==pt||at!==bt)&&(o.polygonOffset(pt,bt),Q=pt,at=bt)):yt(o.POLYGON_OFFSET_FILL)}function Le(W){W?R(o.SCISSOR_TEST):yt(o.SCISSOR_TEST)}function Ge(W){W===void 0&&(W=o.TEXTURE0+rt-1),xt!==W&&(o.activeTexture(W),xt=W)}function B(W,pt,bt){bt===void 0&&(xt===null?bt=o.TEXTURE0+rt-1:bt=xt);let Lt=dt[bt];Lt===void 0&&(Lt={type:void 0,texture:void 0},dt[bt]=Lt),(Lt.type!==W||Lt.texture!==pt)&&(xt!==bt&&(o.activeTexture(bt),xt=bt),o.bindTexture(W,pt||st[W]),Lt.type=W,Lt.texture=pt)}function w(){const W=dt[xt];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function lt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Tt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function At(){try{o.texSubImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ct(){try{o.texSubImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function jt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ot(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _t(){try{o.texStorage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ht(){try{o.texStorage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function kt(){try{o.texImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Gt(){try{o.texImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function wt(W){V.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),V.copy(W))}function zt(W){J.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),J.copy(W))}function Kt(W,pt){let bt=x.get(pt);bt===void 0&&(bt=new WeakMap,x.set(pt,bt));let Lt=bt.get(W);Lt===void 0&&(Lt=o.getUniformBlockIndex(pt,W.name),bt.set(W,Lt))}function we(W,pt){const Lt=x.get(pt).get(W);v.get(pt)!==Lt&&(o.uniformBlockBinding(pt,Lt,W.__bindingPointIndex),v.set(pt,Lt))}function Ve(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),r===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),S={},xt=null,dt={},y={},A=new WeakMap,T=[],M=null,g=!1,N=null,C=null,U=null,z=null,H=null,O=null,q=null,E=!1,D=null,ut=null,Z=null,Q=null,at=null,V.set(0,0,o.canvas.width,o.canvas.height),J.set(0,0,o.canvas.width,o.canvas.height),h.reset(),m.reset(),p.reset()}return{buffers:{color:h,depth:m,stencil:p},enable:R,disable:yt,bindFramebuffer:Et,drawBuffers:St,useProgram:Dt,setBlending:It,setMaterial:ce,setFlipSided:Wt,setCullFace:qt,setLineWidth:ee,setPolygonOffset:de,setScissorTest:Le,activeTexture:Ge,bindTexture:B,unbindTexture:w,compressedTexImage2D:lt,compressedTexImage3D:Tt,texImage2D:kt,texImage3D:Gt,updateUBOMapping:Kt,uniformBlockBinding:we,texStorage2D:_t,texStorage3D:Ht,texSubImage2D:At,texSubImage3D:Ct,compressedTexSubImage2D:jt,compressedTexSubImage3D:Ot,scissor:wt,viewport:zt,reset:Ve}}function bT(o,e,i,r,l,u,d){const h=l.isWebGL2,m=l.maxTextures,p=l.maxCubemapSize,v=l.maxTextureSize,x=l.maxSamples,S=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,y=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),A=new WeakMap;let T;const M=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(B,w){return g?new OffscreenCanvas(B,w):fc("canvas")}function C(B,w,lt,Tt){let At=1;if((B.width>Tt||B.height>Tt)&&(At=Tt/Math.max(B.width,B.height)),At<1||w===!0)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap){const Ct=w?DS:Math.floor,jt=Ct(At*B.width),Ot=Ct(At*B.height);T===void 0&&(T=N(jt,Ot));const _t=lt?N(jt,Ot):T;return _t.width=jt,_t.height=Ot,_t.getContext("2d").drawImage(B,0,0,jt,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+jt+"x"+Ot+")."),_t}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),B;return B}function U(B){return n0(B.width)&&n0(B.height)}function z(B){return h?!1:B.wrapS!==xi||B.wrapT!==xi||B.minFilter!==bn&&B.minFilter!==li}function H(B,w){return B.generateMipmaps&&w&&B.minFilter!==bn&&B.minFilter!==li}function O(B){o.generateMipmap(B)}function q(B,w,lt,Tt,At=!1){if(h===!1)return w;if(B!==null){if(o[B]!==void 0)return o[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Ct=w;return w===o.RED&&(lt===o.FLOAT&&(Ct=o.R32F),lt===o.HALF_FLOAT&&(Ct=o.R16F),lt===o.UNSIGNED_BYTE&&(Ct=o.R8)),w===o.RG&&(lt===o.FLOAT&&(Ct=o.RG32F),lt===o.HALF_FLOAT&&(Ct=o.RG16F),lt===o.UNSIGNED_BYTE&&(Ct=o.RG8)),w===o.RGBA&&(lt===o.FLOAT&&(Ct=o.RGBA32F),lt===o.HALF_FLOAT&&(Ct=o.RGBA16F),lt===o.UNSIGNED_BYTE&&(Ct=Tt===ae&&At===!1?o.SRGB8_ALPHA8:o.RGBA8),lt===o.UNSIGNED_SHORT_4_4_4_4&&(Ct=o.RGBA4),lt===o.UNSIGNED_SHORT_5_5_5_1&&(Ct=o.RGB5_A1)),(Ct===o.R16F||Ct===o.R32F||Ct===o.RG16F||Ct===o.RG32F||Ct===o.RGBA16F||Ct===o.RGBA32F)&&e.get("EXT_color_buffer_float"),Ct}function E(B,w,lt){return H(B,lt)===!0||B.isFramebufferTexture&&B.minFilter!==bn&&B.minFilter!==li?Math.log2(Math.max(w.width,w.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?w.mipmaps.length:1}function D(B){return B===bn||B===Lg||B===Cf?o.NEAREST:o.LINEAR}function ut(B){const w=B.target;w.removeEventListener("dispose",ut),Q(w),w.isVideoTexture&&A.delete(w)}function Z(B){const w=B.target;w.removeEventListener("dispose",Z),rt(w)}function Q(B){const w=r.get(B);if(w.__webglInit===void 0)return;const lt=B.source,Tt=M.get(lt);if(Tt){const At=Tt[w.__cacheKey];At.usedTimes--,At.usedTimes===0&&at(B),Object.keys(Tt).length===0&&M.delete(lt)}r.remove(B)}function at(B){const w=r.get(B);o.deleteTexture(w.__webglTexture);const lt=B.source,Tt=M.get(lt);delete Tt[w.__cacheKey],d.memory.textures--}function rt(B){const w=B.texture,lt=r.get(B),Tt=r.get(w);if(Tt.__webglTexture!==void 0&&(o.deleteTexture(Tt.__webglTexture),d.memory.textures--),B.depthTexture&&B.depthTexture.dispose(),B.isWebGLCubeRenderTarget)for(let At=0;At<6;At++)o.deleteFramebuffer(lt.__webglFramebuffer[At]),lt.__webglDepthbuffer&&o.deleteRenderbuffer(lt.__webglDepthbuffer[At]);else{if(o.deleteFramebuffer(lt.__webglFramebuffer),lt.__webglDepthbuffer&&o.deleteRenderbuffer(lt.__webglDepthbuffer),lt.__webglMultisampledFramebuffer&&o.deleteFramebuffer(lt.__webglMultisampledFramebuffer),lt.__webglColorRenderbuffer)for(let At=0;At<lt.__webglColorRenderbuffer.length;At++)lt.__webglColorRenderbuffer[At]&&o.deleteRenderbuffer(lt.__webglColorRenderbuffer[At]);lt.__webglDepthRenderbuffer&&o.deleteRenderbuffer(lt.__webglDepthRenderbuffer)}if(B.isWebGLMultipleRenderTargets)for(let At=0,Ct=w.length;At<Ct;At++){const jt=r.get(w[At]);jt.__webglTexture&&(o.deleteTexture(jt.__webglTexture),d.memory.textures--),r.remove(w[At])}r.remove(w),r.remove(B)}let I=0;function X(){I=0}function $(){const B=I;return B>=m&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+m),I+=1,B}function xt(B){const w=[];return w.push(B.wrapS),w.push(B.wrapT),w.push(B.wrapR||0),w.push(B.magFilter),w.push(B.minFilter),w.push(B.anisotropy),w.push(B.internalFormat),w.push(B.format),w.push(B.type),w.push(B.generateMipmaps),w.push(B.premultiplyAlpha),w.push(B.flipY),w.push(B.unpackAlignment),w.push(B.colorSpace),w.join()}function dt(B,w){const lt=r.get(B);if(B.isVideoTexture&&Le(B),B.isRenderTargetTexture===!1&&B.version>0&&lt.__version!==B.version){const Tt=B.image;if(Tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{yt(lt,B,w);return}}i.bindTexture(o.TEXTURE_2D,lt.__webglTexture,o.TEXTURE0+w)}function P(B,w){const lt=r.get(B);if(B.version>0&&lt.__version!==B.version){yt(lt,B,w);return}i.bindTexture(o.TEXTURE_2D_ARRAY,lt.__webglTexture,o.TEXTURE0+w)}function k(B,w){const lt=r.get(B);if(B.version>0&&lt.__version!==B.version){yt(lt,B,w);return}i.bindTexture(o.TEXTURE_3D,lt.__webglTexture,o.TEXTURE0+w)}function V(B,w){const lt=r.get(B);if(B.version>0&&lt.__version!==B.version){Et(lt,B,w);return}i.bindTexture(o.TEXTURE_CUBE_MAP,lt.__webglTexture,o.TEXTURE0+w)}const J={[fh]:o.REPEAT,[xi]:o.CLAMP_TO_EDGE,[hh]:o.MIRRORED_REPEAT},gt={[bn]:o.NEAREST,[Lg]:o.NEAREST_MIPMAP_NEAREST,[Cf]:o.NEAREST_MIPMAP_LINEAR,[li]:o.LINEAR,[uS]:o.LINEAR_MIPMAP_NEAREST,[Eo]:o.LINEAR_MIPMAP_LINEAR};function st(B,w,lt){if(lt?(o.texParameteri(B,o.TEXTURE_WRAP_S,J[w.wrapS]),o.texParameteri(B,o.TEXTURE_WRAP_T,J[w.wrapT]),(B===o.TEXTURE_3D||B===o.TEXTURE_2D_ARRAY)&&o.texParameteri(B,o.TEXTURE_WRAP_R,J[w.wrapR]),o.texParameteri(B,o.TEXTURE_MAG_FILTER,gt[w.magFilter]),o.texParameteri(B,o.TEXTURE_MIN_FILTER,gt[w.minFilter])):(o.texParameteri(B,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(B,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(B===o.TEXTURE_3D||B===o.TEXTURE_2D_ARRAY)&&o.texParameteri(B,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(w.wrapS!==xi||w.wrapT!==xi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(B,o.TEXTURE_MAG_FILTER,D(w.magFilter)),o.texParameteri(B,o.TEXTURE_MIN_FILTER,D(w.minFilter)),w.minFilter!==bn&&w.minFilter!==li&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Tt=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===bn||w.minFilter!==Cf&&w.minFilter!==Eo||w.type===ss&&e.has("OES_texture_float_linear")===!1||h===!1&&w.type===bo&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||r.get(w).__currentAnisotropy)&&(o.texParameterf(B,Tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,l.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy)}}function R(B,w){let lt=!1;B.__webglInit===void 0&&(B.__webglInit=!0,w.addEventListener("dispose",ut));const Tt=w.source;let At=M.get(Tt);At===void 0&&(At={},M.set(Tt,At));const Ct=xt(w);if(Ct!==B.__cacheKey){At[Ct]===void 0&&(At[Ct]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,lt=!0),At[Ct].usedTimes++;const jt=At[B.__cacheKey];jt!==void 0&&(At[B.__cacheKey].usedTimes--,jt.usedTimes===0&&at(w)),B.__cacheKey=Ct,B.__webglTexture=At[Ct].texture}return lt}function yt(B,w,lt){let Tt=o.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Tt=o.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Tt=o.TEXTURE_3D);const At=R(B,w),Ct=w.source;i.bindTexture(Tt,B.__webglTexture,o.TEXTURE0+lt);const jt=r.get(Ct);if(Ct.version!==jt.__version||At===!0){i.activeTexture(o.TEXTURE0+lt),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.NONE);const Ot=z(w)&&U(w.image)===!1;let _t=C(w.image,Ot,!1,v);_t=Ge(w,_t);const Ht=U(_t)||h,kt=u.convert(w.format,w.colorSpace);let Gt=u.convert(w.type),wt=q(w.internalFormat,kt,Gt,w.colorSpace);st(Tt,w,Ht);let zt;const Kt=w.mipmaps,we=h&&w.isVideoTexture!==!0,Ve=jt.__version===void 0||At===!0,W=E(w,_t,Ht);if(w.isDepthTexture)wt=o.DEPTH_COMPONENT,h?w.type===ss?wt=o.DEPTH_COMPONENT32F:w.type===as?wt=o.DEPTH_COMPONENT24:w.type===pr?wt=o.DEPTH24_STENCIL8:wt=o.DEPTH_COMPONENT16:w.type===ss&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===rs&&wt===o.DEPTH_COMPONENT&&w.type!==Q0&&w.type!==as&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=as,Gt=u.convert(w.type)),w.format===vr&&wt===o.DEPTH_COMPONENT&&(wt=o.DEPTH_STENCIL,w.type!==pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=pr,Gt=u.convert(w.type))),Ve&&(we?i.texStorage2D(o.TEXTURE_2D,1,wt,_t.width,_t.height):i.texImage2D(o.TEXTURE_2D,0,wt,_t.width,_t.height,0,kt,Gt,null));else if(w.isDataTexture)if(Kt.length>0&&Ht){we&&Ve&&i.texStorage2D(o.TEXTURE_2D,W,wt,Kt[0].width,Kt[0].height);for(let pt=0,bt=Kt.length;pt<bt;pt++)zt=Kt[pt],we?i.texSubImage2D(o.TEXTURE_2D,pt,0,0,zt.width,zt.height,kt,Gt,zt.data):i.texImage2D(o.TEXTURE_2D,pt,wt,zt.width,zt.height,0,kt,Gt,zt.data);w.generateMipmaps=!1}else we?(Ve&&i.texStorage2D(o.TEXTURE_2D,W,wt,_t.width,_t.height),i.texSubImage2D(o.TEXTURE_2D,0,0,0,_t.width,_t.height,kt,Gt,_t.data)):i.texImage2D(o.TEXTURE_2D,0,wt,_t.width,_t.height,0,kt,Gt,_t.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){we&&Ve&&i.texStorage3D(o.TEXTURE_2D_ARRAY,W,wt,Kt[0].width,Kt[0].height,_t.depth);for(let pt=0,bt=Kt.length;pt<bt;pt++)zt=Kt[pt],w.format!==Si?kt!==null?we?i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,pt,0,0,0,zt.width,zt.height,_t.depth,kt,zt.data,0,0):i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,pt,wt,zt.width,zt.height,_t.depth,0,zt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?i.texSubImage3D(o.TEXTURE_2D_ARRAY,pt,0,0,0,zt.width,zt.height,_t.depth,kt,Gt,zt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,pt,wt,zt.width,zt.height,_t.depth,0,kt,Gt,zt.data)}else{we&&Ve&&i.texStorage2D(o.TEXTURE_2D,W,wt,Kt[0].width,Kt[0].height);for(let pt=0,bt=Kt.length;pt<bt;pt++)zt=Kt[pt],w.format!==Si?kt!==null?we?i.compressedTexSubImage2D(o.TEXTURE_2D,pt,0,0,zt.width,zt.height,kt,zt.data):i.compressedTexImage2D(o.TEXTURE_2D,pt,wt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?i.texSubImage2D(o.TEXTURE_2D,pt,0,0,zt.width,zt.height,kt,Gt,zt.data):i.texImage2D(o.TEXTURE_2D,pt,wt,zt.width,zt.height,0,kt,Gt,zt.data)}else if(w.isDataArrayTexture)we?(Ve&&i.texStorage3D(o.TEXTURE_2D_ARRAY,W,wt,_t.width,_t.height,_t.depth),i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,kt,Gt,_t.data)):i.texImage3D(o.TEXTURE_2D_ARRAY,0,wt,_t.width,_t.height,_t.depth,0,kt,Gt,_t.data);else if(w.isData3DTexture)we?(Ve&&i.texStorage3D(o.TEXTURE_3D,W,wt,_t.width,_t.height,_t.depth),i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,kt,Gt,_t.data)):i.texImage3D(o.TEXTURE_3D,0,wt,_t.width,_t.height,_t.depth,0,kt,Gt,_t.data);else if(w.isFramebufferTexture){if(Ve)if(we)i.texStorage2D(o.TEXTURE_2D,W,wt,_t.width,_t.height);else{let pt=_t.width,bt=_t.height;for(let Lt=0;Lt<W;Lt++)i.texImage2D(o.TEXTURE_2D,Lt,wt,pt,bt,0,kt,Gt,null),pt>>=1,bt>>=1}}else if(Kt.length>0&&Ht){we&&Ve&&i.texStorage2D(o.TEXTURE_2D,W,wt,Kt[0].width,Kt[0].height);for(let pt=0,bt=Kt.length;pt<bt;pt++)zt=Kt[pt],we?i.texSubImage2D(o.TEXTURE_2D,pt,0,0,kt,Gt,zt):i.texImage2D(o.TEXTURE_2D,pt,wt,kt,Gt,zt);w.generateMipmaps=!1}else we?(Ve&&i.texStorage2D(o.TEXTURE_2D,W,wt,_t.width,_t.height),i.texSubImage2D(o.TEXTURE_2D,0,0,0,kt,Gt,_t)):i.texImage2D(o.TEXTURE_2D,0,wt,kt,Gt,_t);H(w,Ht)&&O(Tt),jt.__version=Ct.version,w.onUpdate&&w.onUpdate(w)}B.__version=w.version}function Et(B,w,lt){if(w.image.length!==6)return;const Tt=R(B,w),At=w.source;i.bindTexture(o.TEXTURE_CUBE_MAP,B.__webglTexture,o.TEXTURE0+lt);const Ct=r.get(At);if(At.version!==Ct.__version||Tt===!0){i.activeTexture(o.TEXTURE0+lt),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.NONE);const jt=w.isCompressedTexture||w.image[0].isCompressedTexture,Ot=w.image[0]&&w.image[0].isDataTexture,_t=[];for(let pt=0;pt<6;pt++)!jt&&!Ot?_t[pt]=C(w.image[pt],!1,!0,p):_t[pt]=Ot?w.image[pt].image:w.image[pt],_t[pt]=Ge(w,_t[pt]);const Ht=_t[0],kt=U(Ht)||h,Gt=u.convert(w.format,w.colorSpace),wt=u.convert(w.type),zt=q(w.internalFormat,Gt,wt,w.colorSpace),Kt=h&&w.isVideoTexture!==!0,we=Ct.__version===void 0||Tt===!0;let Ve=E(w,Ht,kt);st(o.TEXTURE_CUBE_MAP,w,kt);let W;if(jt){Kt&&we&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ve,zt,Ht.width,Ht.height);for(let pt=0;pt<6;pt++){W=_t[pt].mipmaps;for(let bt=0;bt<W.length;bt++){const Lt=W[bt];w.format!==Si?Gt!==null?Kt?i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,bt,0,0,Lt.width,Lt.height,Gt,Lt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,bt,zt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,bt,0,0,Lt.width,Lt.height,Gt,wt,Lt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,bt,zt,Lt.width,Lt.height,0,Gt,wt,Lt.data)}}}else{W=w.mipmaps,Kt&&we&&(W.length>0&&Ve++,i.texStorage2D(o.TEXTURE_CUBE_MAP,Ve,zt,_t[0].width,_t[0].height));for(let pt=0;pt<6;pt++)if(Ot){Kt?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,_t[pt].width,_t[pt].height,Gt,wt,_t[pt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,zt,_t[pt].width,_t[pt].height,0,Gt,wt,_t[pt].data);for(let bt=0;bt<W.length;bt++){const Pt=W[bt].image[pt].image;Kt?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,bt+1,0,0,Pt.width,Pt.height,Gt,wt,Pt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,bt+1,zt,Pt.width,Pt.height,0,Gt,wt,Pt.data)}}else{Kt?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Gt,wt,_t[pt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,zt,Gt,wt,_t[pt]);for(let bt=0;bt<W.length;bt++){const Lt=W[bt];Kt?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,bt+1,0,0,Gt,wt,Lt.image[pt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,bt+1,zt,Gt,wt,Lt.image[pt])}}}H(w,kt)&&O(o.TEXTURE_CUBE_MAP),Ct.__version=At.version,w.onUpdate&&w.onUpdate(w)}B.__version=w.version}function St(B,w,lt,Tt,At){const Ct=u.convert(lt.format,lt.colorSpace),jt=u.convert(lt.type),Ot=q(lt.internalFormat,Ct,jt,lt.colorSpace);r.get(w).__hasExternalTextures||(At===o.TEXTURE_3D||At===o.TEXTURE_2D_ARRAY?i.texImage3D(At,0,Ot,w.width,w.height,w.depth,0,Ct,jt,null):i.texImage2D(At,0,Ot,w.width,w.height,0,Ct,jt,null)),i.bindFramebuffer(o.FRAMEBUFFER,B),de(w)?S.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Tt,At,r.get(lt).__webglTexture,0,ee(w)):(At===o.TEXTURE_2D||At>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&At<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Tt,At,r.get(lt).__webglTexture,0),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Dt(B,w,lt){if(o.bindRenderbuffer(o.RENDERBUFFER,B),w.depthBuffer&&!w.stencilBuffer){let Tt=o.DEPTH_COMPONENT16;if(lt||de(w)){const At=w.depthTexture;At&&At.isDepthTexture&&(At.type===ss?Tt=o.DEPTH_COMPONENT32F:At.type===as&&(Tt=o.DEPTH_COMPONENT24));const Ct=ee(w);de(w)?S.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ct,Tt,w.width,w.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,Ct,Tt,w.width,w.height)}else o.renderbufferStorage(o.RENDERBUFFER,Tt,w.width,w.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,B)}else if(w.depthBuffer&&w.stencilBuffer){const Tt=ee(w);lt&&de(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Tt,o.DEPTH24_STENCIL8,w.width,w.height):de(w)?S.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Tt,o.DEPTH24_STENCIL8,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,B)}else{const Tt=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let At=0;At<Tt.length;At++){const Ct=Tt[At],jt=u.convert(Ct.format,Ct.colorSpace),Ot=u.convert(Ct.type),_t=q(Ct.internalFormat,jt,Ot,Ct.colorSpace),Ht=ee(w);lt&&de(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ht,_t,w.width,w.height):de(w)?S.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ht,_t,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,_t,w.width,w.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Zt(B,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,B),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),dt(w.depthTexture,0);const Tt=r.get(w.depthTexture).__webglTexture,At=ee(w);if(w.depthTexture.format===rs)de(w)?S.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Tt,0,At):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Tt,0);else if(w.depthTexture.format===vr)de(w)?S.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Tt,0,At):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Tt,0);else throw new Error("Unknown depthTexture format")}function Ut(B){const w=r.get(B),lt=B.isWebGLCubeRenderTarget===!0;if(B.depthTexture&&!w.__autoAllocateDepthBuffer){if(lt)throw new Error("target.depthTexture not supported in Cube render targets");Zt(w.__webglFramebuffer,B)}else if(lt){w.__webglDepthbuffer=[];for(let Tt=0;Tt<6;Tt++)i.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[Tt]),w.__webglDepthbuffer[Tt]=o.createRenderbuffer(),Dt(w.__webglDepthbuffer[Tt],B,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=o.createRenderbuffer(),Dt(w.__webglDepthbuffer,B,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function It(B,w,lt){const Tt=r.get(B);w!==void 0&&St(Tt.__webglFramebuffer,B,B.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D),lt!==void 0&&Ut(B)}function ce(B){const w=B.texture,lt=r.get(B),Tt=r.get(w);B.addEventListener("dispose",Z),B.isWebGLMultipleRenderTargets!==!0&&(Tt.__webglTexture===void 0&&(Tt.__webglTexture=o.createTexture()),Tt.__version=w.version,d.memory.textures++);const At=B.isWebGLCubeRenderTarget===!0,Ct=B.isWebGLMultipleRenderTargets===!0,jt=U(B)||h;if(At){lt.__webglFramebuffer=[];for(let Ot=0;Ot<6;Ot++)lt.__webglFramebuffer[Ot]=o.createFramebuffer()}else{if(lt.__webglFramebuffer=o.createFramebuffer(),Ct)if(l.drawBuffers){const Ot=B.texture;for(let _t=0,Ht=Ot.length;_t<Ht;_t++){const kt=r.get(Ot[_t]);kt.__webglTexture===void 0&&(kt.__webglTexture=o.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(h&&B.samples>0&&de(B)===!1){const Ot=Ct?w:[w];lt.__webglMultisampledFramebuffer=o.createFramebuffer(),lt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,lt.__webglMultisampledFramebuffer);for(let _t=0;_t<Ot.length;_t++){const Ht=Ot[_t];lt.__webglColorRenderbuffer[_t]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,lt.__webglColorRenderbuffer[_t]);const kt=u.convert(Ht.format,Ht.colorSpace),Gt=u.convert(Ht.type),wt=q(Ht.internalFormat,kt,Gt,Ht.colorSpace,B.isXRRenderTarget===!0),zt=ee(B);o.renderbufferStorageMultisample(o.RENDERBUFFER,zt,wt,B.width,B.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+_t,o.RENDERBUFFER,lt.__webglColorRenderbuffer[_t])}o.bindRenderbuffer(o.RENDERBUFFER,null),B.depthBuffer&&(lt.__webglDepthRenderbuffer=o.createRenderbuffer(),Dt(lt.__webglDepthRenderbuffer,B,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(At){i.bindTexture(o.TEXTURE_CUBE_MAP,Tt.__webglTexture),st(o.TEXTURE_CUBE_MAP,w,jt);for(let Ot=0;Ot<6;Ot++)St(lt.__webglFramebuffer[Ot],B,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ot);H(w,jt)&&O(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ct){const Ot=B.texture;for(let _t=0,Ht=Ot.length;_t<Ht;_t++){const kt=Ot[_t],Gt=r.get(kt);i.bindTexture(o.TEXTURE_2D,Gt.__webglTexture),st(o.TEXTURE_2D,kt,jt),St(lt.__webglFramebuffer,B,kt,o.COLOR_ATTACHMENT0+_t,o.TEXTURE_2D),H(kt,jt)&&O(o.TEXTURE_2D)}i.unbindTexture()}else{let Ot=o.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(h?Ot=B.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(Ot,Tt.__webglTexture),st(Ot,w,jt),St(lt.__webglFramebuffer,B,w,o.COLOR_ATTACHMENT0,Ot),H(w,jt)&&O(Ot),i.unbindTexture()}B.depthBuffer&&Ut(B)}function Wt(B){const w=U(B)||h,lt=B.isWebGLMultipleRenderTargets===!0?B.texture:[B.texture];for(let Tt=0,At=lt.length;Tt<At;Tt++){const Ct=lt[Tt];if(H(Ct,w)){const jt=B.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,Ot=r.get(Ct).__webglTexture;i.bindTexture(jt,Ot),O(jt),i.unbindTexture()}}}function qt(B){if(h&&B.samples>0&&de(B)===!1){const w=B.isWebGLMultipleRenderTargets?B.texture:[B.texture],lt=B.width,Tt=B.height;let At=o.COLOR_BUFFER_BIT;const Ct=[],jt=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ot=r.get(B),_t=B.isWebGLMultipleRenderTargets===!0;if(_t)for(let Ht=0;Ht<w.length;Ht++)i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ht,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ht,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Ht=0;Ht<w.length;Ht++){Ct.push(o.COLOR_ATTACHMENT0+Ht),B.depthBuffer&&Ct.push(jt);const kt=Ot.__ignoreDepthValues!==void 0?Ot.__ignoreDepthValues:!1;if(kt===!1&&(B.depthBuffer&&(At|=o.DEPTH_BUFFER_BIT),B.stencilBuffer&&(At|=o.STENCIL_BUFFER_BIT)),_t&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ot.__webglColorRenderbuffer[Ht]),kt===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[jt]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[jt])),_t){const Gt=r.get(w[Ht]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Gt,0)}o.blitFramebuffer(0,0,lt,Tt,0,0,lt,Tt,At,o.NEAREST),y&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ct)}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),_t)for(let Ht=0;Ht<w.length;Ht++){i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ht,o.RENDERBUFFER,Ot.__webglColorRenderbuffer[Ht]);const kt=r.get(w[Ht]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ht,o.TEXTURE_2D,kt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}}function ee(B){return Math.min(x,B.samples)}function de(B){const w=r.get(B);return h&&B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Le(B){const w=d.render.frame;A.get(B)!==w&&(A.set(B,w),B.update())}function Ge(B,w){const lt=B.colorSpace,Tt=B.format,At=B.type;return B.isCompressedTexture===!0||B.format===dh||lt!==Li&&lt!==ls&&(lt===ae?h===!1?e.has("EXT_sRGB")===!0&&Tt===Si?(B.format=dh,B.minFilter=li,B.generateMipmaps=!1):w=e_.sRGBToLinear(w):(Tt!==Si||At!==cs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",lt)),w}this.allocateTextureUnit=$,this.resetTextureUnits=X,this.setTexture2D=dt,this.setTexture2DArray=P,this.setTexture3D=k,this.setTextureCube=V,this.rebindTextures=It,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=St,this.useMultisampledRTT=de}function TT(o,e,i){const r=i.isWebGL2;function l(u,d=ls){let h;if(u===cs)return o.UNSIGNED_BYTE;if(u===pS)return o.UNSIGNED_SHORT_4_4_4_4;if(u===mS)return o.UNSIGNED_SHORT_5_5_5_1;if(u===fS)return o.BYTE;if(u===hS)return o.SHORT;if(u===Q0)return o.UNSIGNED_SHORT;if(u===dS)return o.INT;if(u===as)return o.UNSIGNED_INT;if(u===ss)return o.FLOAT;if(u===bo)return r?o.HALF_FLOAT:(h=e.get("OES_texture_half_float"),h!==null?h.HALF_FLOAT_OES:null);if(u===gS)return o.ALPHA;if(u===Si)return o.RGBA;if(u===_S)return o.LUMINANCE;if(u===vS)return o.LUMINANCE_ALPHA;if(u===rs)return o.DEPTH_COMPONENT;if(u===vr)return o.DEPTH_STENCIL;if(u===dh)return h=e.get("EXT_sRGB"),h!==null?h.SRGB_ALPHA_EXT:null;if(u===xS)return o.RED;if(u===SS)return o.RED_INTEGER;if(u===MS)return o.RG;if(u===yS)return o.RG_INTEGER;if(u===ES)return o.RGBA_INTEGER;if(u===Lf||u===Df||u===Uf||u===Nf)if(d===ae)if(h=e.get("WEBGL_compressed_texture_s3tc_srgb"),h!==null){if(u===Lf)return h.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(u===Df)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(u===Uf)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(u===Nf)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(h=e.get("WEBGL_compressed_texture_s3tc"),h!==null){if(u===Lf)return h.COMPRESSED_RGB_S3TC_DXT1_EXT;if(u===Df)return h.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(u===Uf)return h.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(u===Nf)return h.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(u===Dg||u===Ug||u===Ng||u===Og)if(h=e.get("WEBGL_compressed_texture_pvrtc"),h!==null){if(u===Dg)return h.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(u===Ug)return h.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(u===Ng)return h.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(u===Og)return h.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(u===bS)return h=e.get("WEBGL_compressed_texture_etc1"),h!==null?h.COMPRESSED_RGB_ETC1_WEBGL:null;if(u===zg||u===Pg)if(h=e.get("WEBGL_compressed_texture_etc"),h!==null){if(u===zg)return d===ae?h.COMPRESSED_SRGB8_ETC2:h.COMPRESSED_RGB8_ETC2;if(u===Pg)return d===ae?h.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:h.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(u===Bg||u===Fg||u===Ig||u===Hg||u===Gg||u===Vg||u===kg||u===Xg||u===Wg||u===qg||u===jg||u===Yg||u===Zg||u===Kg)if(h=e.get("WEBGL_compressed_texture_astc"),h!==null){if(u===Bg)return d===ae?h.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:h.COMPRESSED_RGBA_ASTC_4x4_KHR;if(u===Fg)return d===ae?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:h.COMPRESSED_RGBA_ASTC_5x4_KHR;if(u===Ig)return d===ae?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:h.COMPRESSED_RGBA_ASTC_5x5_KHR;if(u===Hg)return d===ae?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:h.COMPRESSED_RGBA_ASTC_6x5_KHR;if(u===Gg)return d===ae?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:h.COMPRESSED_RGBA_ASTC_6x6_KHR;if(u===Vg)return d===ae?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:h.COMPRESSED_RGBA_ASTC_8x5_KHR;if(u===kg)return d===ae?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:h.COMPRESSED_RGBA_ASTC_8x6_KHR;if(u===Xg)return d===ae?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:h.COMPRESSED_RGBA_ASTC_8x8_KHR;if(u===Wg)return d===ae?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:h.COMPRESSED_RGBA_ASTC_10x5_KHR;if(u===qg)return d===ae?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:h.COMPRESSED_RGBA_ASTC_10x6_KHR;if(u===jg)return d===ae?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:h.COMPRESSED_RGBA_ASTC_10x8_KHR;if(u===Yg)return d===ae?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:h.COMPRESSED_RGBA_ASTC_10x10_KHR;if(u===Zg)return d===ae?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:h.COMPRESSED_RGBA_ASTC_12x10_KHR;if(u===Kg)return d===ae?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:h.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(u===Of)if(h=e.get("EXT_texture_compression_bptc"),h!==null){if(u===Of)return d===ae?h.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:h.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(u===TS||u===Qg||u===Jg||u===$g)if(h=e.get("EXT_texture_compression_rgtc"),h!==null){if(u===Of)return h.COMPRESSED_RED_RGTC1_EXT;if(u===Qg)return h.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(u===Jg)return h.COMPRESSED_RED_GREEN_RGTC2_EXT;if(u===$g)return h.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return u===pr?r?o.UNSIGNED_INT_24_8:(h=e.get("WEBGL_depth_texture"),h!==null?h.UNSIGNED_INT_24_8_WEBGL:null):o[u]!==void 0?o[u]:null}return{convert:l}}class AT extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ua extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wT={type:"move"};class ah{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ua,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ua,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ua,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const T of e.hand.values()){const M=i.getJointPose(T,r),g=this._getHandJoint(p,T);M!==null&&(g.matrix.fromArray(M.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=M.radius),g.visible=M!==null}const v=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],S=v.position.distanceTo(x.position),y=.02,A=.005;p.inputState.pinching&&S>y+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=y-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(wT)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Ua;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class RT extends jn{constructor(e,i,r,l,u,d,h,m,p,v){if(v=v!==void 0?v:rs,v!==rs&&v!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===rs&&(r=as),r===void 0&&v===vr&&(r=pr),super(null,l,u,d,h,m,v,r,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=h!==void 0?h:bn,this.minFilter=m!==void 0?m:bn,this.flipY=!1,this.generateMipmaps=!1}}class CT extends Sr{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,v=null,x=null,S=null,y=null,A=null;const T=i.getContextAttributes();let M=null,g=null;const N=[],C=[],U=new Set,z=new Map,H=new qn;H.layers.enable(1),H.viewport=new He;const O=new qn;O.layers.enable(2),O.viewport=new He;const q=[H,O],E=new AT;E.layers.enable(1),E.layers.enable(2);let D=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let J=N[V];return J===void 0&&(J=new ah,N[V]=J),J.getTargetRaySpace()},this.getControllerGrip=function(V){let J=N[V];return J===void 0&&(J=new ah,N[V]=J),J.getGripSpace()},this.getHand=function(V){let J=N[V];return J===void 0&&(J=new ah,N[V]=J),J.getHandSpace()};function Z(V){const J=C.indexOf(V.inputSource);if(J===-1)return;const gt=N[J];gt!==void 0&&(gt.update(V.inputSource,V.frame,p||d),gt.dispatchEvent({type:V.type,data:V.inputSource}))}function Q(){l.removeEventListener("select",Z),l.removeEventListener("selectstart",Z),l.removeEventListener("selectend",Z),l.removeEventListener("squeeze",Z),l.removeEventListener("squeezestart",Z),l.removeEventListener("squeezeend",Z),l.removeEventListener("end",Q),l.removeEventListener("inputsourceschange",at);for(let V=0;V<N.length;V++){const J=C[V];J!==null&&(C[V]=null,N[V].disconnect(J))}D=null,ut=null,e.setRenderTarget(M),y=null,S=null,x=null,l=null,g=null,k.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){u=V,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){h=V,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(V){p=V},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return x},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(V){if(l=V,l!==null){if(M=e.getRenderTarget(),l.addEventListener("select",Z),l.addEventListener("selectstart",Z),l.addEventListener("selectend",Z),l.addEventListener("squeeze",Z),l.addEventListener("squeezestart",Z),l.addEventListener("squeezeend",Z),l.addEventListener("end",Q),l.addEventListener("inputsourceschange",at),T.xrCompatible!==!0&&await i.makeXRCompatible(),l.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:l.renderState.layers===void 0?T.antialias:!0,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,J),l.updateRenderState({baseLayer:y}),g=new us(y.framebufferWidth,y.framebufferHeight,{format:Si,type:cs,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil})}else{let J=null,gt=null,st=null;T.depth&&(st=T.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,J=T.stencil?vr:rs,gt=T.stencil?pr:as);const R={colorFormat:i.RGBA8,depthFormat:st,scaleFactor:u};x=new XRWebGLBinding(l,i),S=x.createProjectionLayer(R),l.updateRenderState({layers:[S]}),g=new us(S.textureWidth,S.textureHeight,{format:Si,type:cs,depthTexture:new RT(S.textureWidth,S.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0});const yt=e.properties.get(g);yt.__ignoreDepthValues=S.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),k.setContext(l),k.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function at(V){for(let J=0;J<V.removed.length;J++){const gt=V.removed[J],st=C.indexOf(gt);st>=0&&(C[st]=null,N[st].disconnect(gt))}for(let J=0;J<V.added.length;J++){const gt=V.added[J];let st=C.indexOf(gt);if(st===-1){for(let yt=0;yt<N.length;yt++)if(yt>=C.length){C.push(gt),st=yt;break}else if(C[yt]===null){C[yt]=gt,st=yt;break}if(st===-1)break}const R=N[st];R&&R.connect(gt)}}const rt=new K,I=new K;function X(V,J,gt){rt.setFromMatrixPosition(J.matrixWorld),I.setFromMatrixPosition(gt.matrixWorld);const st=rt.distanceTo(I),R=J.projectionMatrix.elements,yt=gt.projectionMatrix.elements,Et=R[14]/(R[10]-1),St=R[14]/(R[10]+1),Dt=(R[9]+1)/R[5],Zt=(R[9]-1)/R[5],Ut=(R[8]-1)/R[0],It=(yt[8]+1)/yt[0],ce=Et*Ut,Wt=Et*It,qt=st/(-Ut+It),ee=qt*-Ut;J.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ee),V.translateZ(qt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const de=Et+qt,Le=St+qt,Ge=ce-ee,B=Wt+(st-ee),w=Dt*St/Le*de,lt=Zt*St/Le*de;V.projectionMatrix.makePerspective(Ge,B,w,lt,de,Le),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function $(V,J){J===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(J.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(l===null)return;E.near=O.near=H.near=V.near,E.far=O.far=H.far=V.far,(D!==E.near||ut!==E.far)&&(l.updateRenderState({depthNear:E.near,depthFar:E.far}),D=E.near,ut=E.far);const J=V.parent,gt=E.cameras;$(E,J);for(let st=0;st<gt.length;st++)$(gt[st],J);gt.length===2?X(E,H,O):E.projectionMatrix.copy(H.projectionMatrix),xt(V,E,J)};function xt(V,J,gt){gt===null?V.matrix.copy(J.matrixWorld):(V.matrix.copy(gt.matrixWorld),V.matrix.invert(),V.matrix.multiply(J.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0);const st=V.children;for(let R=0,yt=st.length;R<yt;R++)st[R].updateMatrixWorld(!0);V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ph*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(S===null&&y===null))return m},this.setFoveation=function(V){m=V,S!==null&&(S.fixedFoveation=V),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=V)},this.getPlanes=function(){return U};let dt=null;function P(V,J){if(v=J.getViewerPose(p||d),A=J,v!==null){const gt=v.views;y!==null&&(e.setRenderTargetFramebuffer(g,y.framebuffer),e.setRenderTarget(g));let st=!1;gt.length!==E.cameras.length&&(E.cameras.length=0,st=!0);for(let R=0;R<gt.length;R++){const yt=gt[R];let Et=null;if(y!==null)Et=y.getViewport(yt);else{const Dt=x.getViewSubImage(S,yt);Et=Dt.viewport,R===0&&(e.setRenderTargetTextures(g,Dt.colorTexture,S.ignoreDepthValues?void 0:Dt.depthStencilTexture),e.setRenderTarget(g))}let St=q[R];St===void 0&&(St=new qn,St.layers.enable(R),St.viewport=new He,q[R]=St),St.matrix.fromArray(yt.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(yt.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(Et.x,Et.y,Et.width,Et.height),R===0&&(E.matrix.copy(St.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),st===!0&&E.cameras.push(St)}}for(let gt=0;gt<N.length;gt++){const st=C[gt],R=N[gt];st!==null&&R!==void 0&&R.update(st,J,p||d)}if(dt&&dt(V,J),J.detectedPlanes){r.dispatchEvent({type:"planesdetected",data:J.detectedPlanes});let gt=null;for(const st of U)J.detectedPlanes.has(st)||(gt===null&&(gt=[]),gt.push(st));if(gt!==null)for(const st of gt)U.delete(st),z.delete(st),r.dispatchEvent({type:"planeremoved",data:st});for(const st of J.detectedPlanes)if(!U.has(st))U.add(st),z.set(st,J.lastChangedTime),r.dispatchEvent({type:"planeadded",data:st});else{const R=z.get(st);st.lastChangedTime>R&&(z.set(st,st.lastChangedTime),r.dispatchEvent({type:"planechanged",data:st}))}}A=null}const k=new f_;k.setAnimationLoop(P),this.setAnimationLoop=function(V){dt=V},this.dispose=function(){}}}function LT(o,e){function i(M,g){M.matrixAutoUpdate===!0&&M.updateMatrix(),g.value.copy(M.matrix)}function r(M,g){g.color.getRGB(M.fogColor.value,l_(o)),g.isFog?(M.fogNear.value=g.near,M.fogFar.value=g.far):g.isFogExp2&&(M.fogDensity.value=g.density)}function l(M,g,N,C,U){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(M,g):g.isMeshToonMaterial?(u(M,g),x(M,g)):g.isMeshPhongMaterial?(u(M,g),v(M,g)):g.isMeshStandardMaterial?(u(M,g),S(M,g),g.isMeshPhysicalMaterial&&y(M,g,U)):g.isMeshMatcapMaterial?(u(M,g),A(M,g)):g.isMeshDepthMaterial?u(M,g):g.isMeshDistanceMaterial?(u(M,g),T(M,g)):g.isMeshNormalMaterial?u(M,g):g.isLineBasicMaterial?(d(M,g),g.isLineDashedMaterial&&h(M,g)):g.isPointsMaterial?m(M,g,N,C):g.isSpriteMaterial?p(M,g):g.isShadowMaterial?(M.color.value.copy(g.color),M.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(M,g){M.opacity.value=g.opacity,g.color&&M.diffuse.value.copy(g.color),g.emissive&&M.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(M.map.value=g.map,i(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.bumpMap&&(M.bumpMap.value=g.bumpMap,i(g.bumpMap,M.bumpMapTransform),M.bumpScale.value=g.bumpScale,g.side===zn&&(M.bumpScale.value*=-1)),g.normalMap&&(M.normalMap.value=g.normalMap,i(g.normalMap,M.normalMapTransform),M.normalScale.value.copy(g.normalScale),g.side===zn&&M.normalScale.value.negate()),g.displacementMap&&(M.displacementMap.value=g.displacementMap,i(g.displacementMap,M.displacementMapTransform),M.displacementScale.value=g.displacementScale,M.displacementBias.value=g.displacementBias),g.emissiveMap&&(M.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,M.emissiveMapTransform)),g.specularMap&&(M.specularMap.value=g.specularMap,i(g.specularMap,M.specularMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest);const N=e.get(g).envMap;if(N&&(M.envMap.value=N,M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=g.reflectivity,M.ior.value=g.ior,M.refractionRatio.value=g.refractionRatio),g.lightMap){M.lightMap.value=g.lightMap;const C=o.useLegacyLights===!0?Math.PI:1;M.lightMapIntensity.value=g.lightMapIntensity*C,i(g.lightMap,M.lightMapTransform)}g.aoMap&&(M.aoMap.value=g.aoMap,M.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,M.aoMapTransform))}function d(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,g.map&&(M.map.value=g.map,i(g.map,M.mapTransform))}function h(M,g){M.dashSize.value=g.dashSize,M.totalSize.value=g.dashSize+g.gapSize,M.scale.value=g.scale}function m(M,g,N,C){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.size.value=g.size*N,M.scale.value=C*.5,g.map&&(M.map.value=g.map,i(g.map,M.uvTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function p(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.rotation.value=g.rotation,g.map&&(M.map.value=g.map,i(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function v(M,g){M.specular.value.copy(g.specular),M.shininess.value=Math.max(g.shininess,1e-4)}function x(M,g){g.gradientMap&&(M.gradientMap.value=g.gradientMap)}function S(M,g){M.metalness.value=g.metalness,g.metalnessMap&&(M.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,M.metalnessMapTransform)),M.roughness.value=g.roughness,g.roughnessMap&&(M.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,M.roughnessMapTransform)),e.get(g).envMap&&(M.envMapIntensity.value=g.envMapIntensity)}function y(M,g,N){M.ior.value=g.ior,g.sheen>0&&(M.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),M.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(M.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,M.sheenColorMapTransform)),g.sheenRoughnessMap&&(M.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,M.sheenRoughnessMapTransform))),g.clearcoat>0&&(M.clearcoat.value=g.clearcoat,M.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(M.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,M.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(M.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===zn&&M.clearcoatNormalScale.value.negate())),g.iridescence>0&&(M.iridescence.value=g.iridescence,M.iridescenceIOR.value=g.iridescenceIOR,M.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(M.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,M.iridescenceMapTransform)),g.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),g.transmission>0&&(M.transmission.value=g.transmission,M.transmissionSamplerMap.value=N.texture,M.transmissionSamplerSize.value.set(N.width,N.height),g.transmissionMap&&(M.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,M.transmissionMapTransform)),M.thickness.value=g.thickness,g.thicknessMap&&(M.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=g.attenuationDistance,M.attenuationColor.value.copy(g.attenuationColor)),M.specularIntensity.value=g.specularIntensity,M.specularColor.value.copy(g.specularColor),g.specularColorMap&&(M.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,M.specularColorMapTransform)),g.specularIntensityMap&&(M.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,g){g.matcap&&(M.matcap.value=g.matcap)}function T(M,g){const N=e.get(g).light;M.referencePosition.value.setFromMatrixPosition(N.matrixWorld),M.nearDistance.value=N.shadow.camera.near,M.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function DT(o,e,i,r){let l={},u={},d=[];const h=i.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function m(N,C){const U=C.program;r.uniformBlockBinding(N,U)}function p(N,C){let U=l[N.id];U===void 0&&(A(N),U=v(N),l[N.id]=U,N.addEventListener("dispose",M));const z=C.program;r.updateUBOMapping(N,z);const H=e.render.frame;u[N.id]!==H&&(S(N),u[N.id]=H)}function v(N){const C=x();N.__bindingPointIndex=C;const U=o.createBuffer(),z=N.__size,H=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,z,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,C,U),U}function x(){for(let N=0;N<h;N++)if(d.indexOf(N)===-1)return d.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(N){const C=l[N.id],U=N.uniforms,z=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,C);for(let H=0,O=U.length;H<O;H++){const q=U[H];if(y(q,H,z)===!0){const E=q.__offset,D=Array.isArray(q.value)?q.value:[q.value];let ut=0;for(let Z=0;Z<D.length;Z++){const Q=D[Z],at=T(Q);typeof Q=="number"?(q.__data[0]=Q,o.bufferSubData(o.UNIFORM_BUFFER,E+ut,q.__data)):Q.isMatrix3?(q.__data[0]=Q.elements[0],q.__data[1]=Q.elements[1],q.__data[2]=Q.elements[2],q.__data[3]=Q.elements[0],q.__data[4]=Q.elements[3],q.__data[5]=Q.elements[4],q.__data[6]=Q.elements[5],q.__data[7]=Q.elements[0],q.__data[8]=Q.elements[6],q.__data[9]=Q.elements[7],q.__data[10]=Q.elements[8],q.__data[11]=Q.elements[0]):(Q.toArray(q.__data,ut),ut+=at.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,E,q.__data)}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(N,C,U){const z=N.value;if(U[C]===void 0){if(typeof z=="number")U[C]=z;else{const H=Array.isArray(z)?z:[z],O=[];for(let q=0;q<H.length;q++)O.push(H[q].clone());U[C]=O}return!0}else if(typeof z=="number"){if(U[C]!==z)return U[C]=z,!0}else{const H=Array.isArray(U[C])?U[C]:[U[C]],O=Array.isArray(z)?z:[z];for(let q=0;q<H.length;q++){const E=H[q];if(E.equals(O[q])===!1)return E.copy(O[q]),!0}}return!1}function A(N){const C=N.uniforms;let U=0;const z=16;let H=0;for(let O=0,q=C.length;O<q;O++){const E=C[O],D={boundary:0,storage:0},ut=Array.isArray(E.value)?E.value:[E.value];for(let Z=0,Q=ut.length;Z<Q;Z++){const at=ut[Z],rt=T(at);D.boundary+=rt.boundary,D.storage+=rt.storage}if(E.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=U,O>0){H=U%z;const Z=z-H;H!==0&&Z-D.boundary<0&&(U+=z-H,E.__offset=U)}U+=D.storage}return H=U%z,H>0&&(U+=z-H),N.__size=U,N.__cache={},this}function T(N){const C={boundary:0,storage:0};return typeof N=="number"?(C.boundary=4,C.storage=4):N.isVector2?(C.boundary=8,C.storage=8):N.isVector3||N.isColor?(C.boundary=16,C.storage=12):N.isVector4?(C.boundary=16,C.storage=16):N.isMatrix3?(C.boundary=48,C.storage=48):N.isMatrix4?(C.boundary=64,C.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),C}function M(N){const C=N.target;C.removeEventListener("dispose",M);const U=d.indexOf(C.__bindingPointIndex);d.splice(U,1),o.deleteBuffer(l[C.id]),delete l[C.id],delete u[C.id]}function g(){for(const N in l)o.deleteBuffer(l[N]);d=[],l={},u={}}return{bind:m,update:p,dispose:g}}function UT(){const o=fc("canvas");return o.style.display="block",o}class __{constructor(e={}){const{canvas:i=UT(),context:r=null,depth:l=!0,stencil:u=!0,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1}=e;this.isWebGLRenderer=!0;let S;r!==null?S=r.getContextAttributes().alpha:S=d;let y=null,A=null;const T=[],M=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=ae,this.useLegacyLights=!0,this.toneMapping=ea,this.toneMappingExposure=1;const g=this;let N=!1,C=0,U=0,z=null,H=-1,O=null;const q=new He,E=new He;let D=null,ut=i.width,Z=i.height,Q=1,at=null,rt=null;const I=new He(0,0,ut,Z),X=new He(0,0,ut,Z);let $=!1;const xt=new Eh;let dt=!1,P=!1,k=null;const V=new en,J=new K,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function st(){return z===null?Q:1}let R=r;function yt(L,it){for(let ft=0;ft<L.length;ft++){const Y=L[ft],ht=i.getContext(Y,it);if(ht!==null)return ht}return null}try{const L={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${vh}`),i.addEventListener("webglcontextlost",zt,!1),i.addEventListener("webglcontextrestored",Kt,!1),i.addEventListener("webglcontextcreationerror",we,!1),R===null){const it=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&it.shift(),R=yt(it,L),R===null)throw yt(it)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Et,St,Dt,Zt,Ut,It,ce,Wt,qt,ee,de,Le,Ge,B,w,lt,Tt,At,Ct,jt,Ot,_t,Ht,kt;function Gt(){Et=new kE(R),St=new BE(R,Et,e),Et.init(St),_t=new TT(R,Et,St),Dt=new ET(R,Et,St),Zt=new qE(R),Ut=new cT,It=new bT(R,Et,Dt,Ut,St,_t,Zt),ce=new IE(g),Wt=new VE(g),qt=new aM(R,St),Ht=new zE(R,Et,qt,St),ee=new XE(R,qt,Zt,Ht),de=new KE(R,ee,qt,Zt),Ct=new ZE(R,St,It),lt=new FE(Ut),Le=new lT(g,ce,Wt,Et,St,Ht,lt),Ge=new LT(g,Ut),B=new fT,w=new _T(Et,St),At=new OE(g,ce,Wt,Dt,de,S,m),Tt=new yT(g,de,St),kt=new DT(R,Zt,St,Dt),jt=new PE(R,Et,Zt,St),Ot=new WE(R,Et,Zt,St),Zt.programs=Le.programs,g.capabilities=St,g.extensions=Et,g.properties=Ut,g.renderLists=B,g.shadowMap=Tt,g.state=Dt,g.info=Zt}Gt();const wt=new CT(g,R);this.xr=wt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const L=Et.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Et.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(L){L!==void 0&&(Q=L,this.setSize(ut,Z,!1))},this.getSize=function(L){return L.set(ut,Z)},this.setSize=function(L,it,ft=!0){if(wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ut=L,Z=it,i.width=Math.floor(L*Q),i.height=Math.floor(it*Q),ft===!0&&(i.style.width=L+"px",i.style.height=it+"px"),this.setViewport(0,0,L,it)},this.getDrawingBufferSize=function(L){return L.set(ut*Q,Z*Q).floor()},this.setDrawingBufferSize=function(L,it,ft){ut=L,Z=it,Q=ft,i.width=Math.floor(L*ft),i.height=Math.floor(it*ft),this.setViewport(0,0,L,it)},this.getCurrentViewport=function(L){return L.copy(q)},this.getViewport=function(L){return L.copy(I)},this.setViewport=function(L,it,ft,Y){L.isVector4?I.set(L.x,L.y,L.z,L.w):I.set(L,it,ft,Y),Dt.viewport(q.copy(I).multiplyScalar(Q).floor())},this.getScissor=function(L){return L.copy(X)},this.setScissor=function(L,it,ft,Y){L.isVector4?X.set(L.x,L.y,L.z,L.w):X.set(L,it,ft,Y),Dt.scissor(E.copy(X).multiplyScalar(Q).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(L){Dt.setScissorTest($=L)},this.setOpaqueSort=function(L){at=L},this.setTransparentSort=function(L){rt=L},this.getClearColor=function(L){return L.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(L=!0,it=!0,ft=!0){let Y=0;L&&(Y|=R.COLOR_BUFFER_BIT),it&&(Y|=R.DEPTH_BUFFER_BIT),ft&&(Y|=R.STENCIL_BUFFER_BIT),R.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",zt,!1),i.removeEventListener("webglcontextrestored",Kt,!1),i.removeEventListener("webglcontextcreationerror",we,!1),B.dispose(),w.dispose(),Ut.dispose(),ce.dispose(),Wt.dispose(),de.dispose(),Ht.dispose(),kt.dispose(),Le.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",Pt),wt.removeEventListener("sessionend",ye),k&&(k.dispose(),k=null),Me.stop()};function zt(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Kt(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const L=Zt.autoReset,it=Tt.enabled,ft=Tt.autoUpdate,Y=Tt.needsUpdate,ht=Tt.type;Gt(),Zt.autoReset=L,Tt.enabled=it,Tt.autoUpdate=ft,Tt.needsUpdate=Y,Tt.type=ht}function we(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Ve(L){const it=L.target;it.removeEventListener("dispose",Ve),W(it)}function W(L){pt(L),Ut.remove(L)}function pt(L){const it=Ut.get(L).programs;it!==void 0&&(it.forEach(function(ft){Le.releaseProgram(ft)}),L.isShaderMaterial&&Le.releaseShaderCache(L))}this.renderBufferDirect=function(L,it,ft,Y,ht,Ft){it===null&&(it=gt);const Xt=ht.isMesh&&ht.matrixWorld.determinant()<0,Qt=Co(L,it,ft,Y,ht);Dt.setMaterial(Y,Xt);let ne=ft.index,se=1;Y.wireframe===!0&&(ne=ee.getWireframeAttribute(ft),se=2);const $t=ft.drawRange,re=ft.attributes.position;let ge=$t.start*se,Xe=($t.start+$t.count)*se;Ft!==null&&(ge=Math.max(ge,Ft.start*se),Xe=Math.min(Xe,(Ft.start+Ft.count)*se)),ne!==null?(ge=Math.max(ge,0),Xe=Math.min(Xe,ne.count)):re!=null&&(ge=Math.max(ge,0),Xe=Math.min(Xe,re.count));const fn=Xe-ge;if(fn<0||fn===1/0)return;Ht.setup(ht,Y,Qt,ft,ne);let Tn,oe=jt;if(ne!==null&&(Tn=qt.get(ne),oe=Ot,oe.setIndex(Tn)),ht.isMesh)Y.wireframe===!0?(Dt.setLineWidth(Y.wireframeLinewidth*st()),oe.setMode(R.LINES)):oe.setMode(R.TRIANGLES);else if(ht.isLine){let ue=Y.linewidth;ue===void 0&&(ue=1),Dt.setLineWidth(ue*st()),ht.isLineSegments?oe.setMode(R.LINES):ht.isLineLoop?oe.setMode(R.LINE_LOOP):oe.setMode(R.LINE_STRIP)}else ht.isPoints?oe.setMode(R.POINTS):ht.isSprite&&oe.setMode(R.TRIANGLES);if(ht.isInstancedMesh)oe.renderInstances(ge,fn,ht.count);else if(ft.isInstancedBufferGeometry){const ue=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,hs=Math.min(ft.instanceCount,ue);oe.renderInstances(ge,fn,hs)}else oe.render(ge,fn)},this.compile=function(L,it){function ft(Y,ht,Ft){Y.transparent===!0&&Y.side===Ri&&Y.forceSinglePass===!1?(Y.side=zn,Y.needsUpdate=!0,za(Y,ht,Ft),Y.side=Oa,Y.needsUpdate=!0,za(Y,ht,Ft),Y.side=Ri):za(Y,ht,Ft)}A=w.get(L),A.init(),M.push(A),L.traverseVisible(function(Y){Y.isLight&&Y.layers.test(it.layers)&&(A.pushLight(Y),Y.castShadow&&A.pushShadow(Y))}),A.setupLights(g.useLegacyLights),L.traverse(function(Y){const ht=Y.material;if(ht)if(Array.isArray(ht))for(let Ft=0;Ft<ht.length;Ft++){const Xt=ht[Ft];ft(Xt,L,Y)}else ft(ht,L,Y)}),M.pop(),A=null};let bt=null;function Lt(L){bt&&bt(L)}function Pt(){Me.stop()}function ye(){Me.start()}const Me=new f_;Me.setAnimationLoop(Lt),typeof self<"u"&&Me.setContext(self),this.setAnimationLoop=function(L){bt=L,wt.setAnimationLoop(L),L===null?Me.stop():Me.start()},wt.addEventListener("sessionstart",Pt),wt.addEventListener("sessionend",ye),this.render=function(L,it){if(it!==void 0&&it.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),it.parent===null&&it.matrixWorldAutoUpdate===!0&&it.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(it),it=wt.getCamera()),L.isScene===!0&&L.onBeforeRender(g,L,it,z),A=w.get(L,M.length),A.init(),M.push(A),V.multiplyMatrices(it.projectionMatrix,it.matrixWorldInverse),xt.setFromProjectionMatrix(V),P=this.localClippingEnabled,dt=lt.init(this.clippingPlanes,P),y=B.get(L,T.length),y.init(),T.push(y),on(L,it,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(at,rt),dt===!0&&lt.beginShadows();const ft=A.state.shadowsArray;if(Tt.render(ft,L,it),dt===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset(),At.render(y,L),A.setupLights(g.useLegacyLights),it.isArrayCamera){const Y=it.cameras;for(let ht=0,Ft=Y.length;ht<Ft;ht++){const Xt=Y[ht];ui(y,L,Xt,Xt.viewport)}}else ui(y,L,it);z!==null&&(It.updateMultisampleRenderTarget(z),It.updateRenderTargetMipmap(z)),L.isScene===!0&&L.onAfterRender(g,L,it),Ht.resetDefaultState(),H=-1,O=null,M.pop(),M.length>0?A=M[M.length-1]:A=null,T.pop(),T.length>0?y=T[T.length-1]:y=null};function on(L,it,ft,Y){if(L.visible===!1)return;if(L.layers.test(it.layers)){if(L.isGroup)ft=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(it);else if(L.isLight)A.pushLight(L),L.castShadow&&A.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||xt.intersectsSprite(L)){Y&&J.setFromMatrixPosition(L.matrixWorld).applyMatrix4(V);const Xt=de.update(L),Qt=L.material;Qt.visible&&y.push(L,Xt,Qt,ft,J.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||xt.intersectsObject(L))){L.isSkinnedMesh&&L.skeleton.frame!==Zt.render.frame&&(L.skeleton.update(),L.skeleton.frame=Zt.render.frame);const Xt=de.update(L),Qt=L.material;if(Y&&(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),J.copy(Xt.boundingSphere.center).applyMatrix4(L.matrixWorld).applyMatrix4(V)),Array.isArray(Qt)){const ne=Xt.groups;for(let se=0,$t=ne.length;se<$t;se++){const re=ne[se],ge=Qt[re.materialIndex];ge&&ge.visible&&y.push(L,Xt,ge,ft,J.z,re)}}else Qt.visible&&y.push(L,Xt,Qt,ft,J.z,null)}}const Ft=L.children;for(let Xt=0,Qt=Ft.length;Xt<Qt;Xt++)on(Ft[Xt],it,ft,Y)}function ui(L,it,ft,Y){const ht=L.opaque,Ft=L.transmissive,Xt=L.transparent;A.setupLightsView(ft),dt===!0&&lt.setGlobalState(g.clippingPlanes,ft),Ft.length>0&&Pe(ht,Ft,it,ft),Y&&Dt.viewport(q.copy(Y)),ht.length>0&&ln(ht,it,ft),Ft.length>0&&ln(Ft,it,ft),Xt.length>0&&ln(Xt,it,ft),Dt.buffers.depth.setTest(!0),Dt.buffers.depth.setMask(!0),Dt.buffers.color.setMask(!0),Dt.setPolygonOffset(!1)}function Pe(L,it,ft,Y){if(k===null){const Qt=St.isWebGL2;k=new us(1024,1024,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")?bo:cs,minFilter:Eo,samples:Qt&&h===!0?4:0})}const ht=g.getRenderTarget();g.setRenderTarget(k),g.clear();const Ft=g.toneMapping;g.toneMapping=ea,ln(L,ft,Y),It.updateMultisampleRenderTarget(k),It.updateRenderTargetMipmap(k);let Xt=!1;for(let Qt=0,ne=it.length;Qt<ne;Qt++){const se=it[Qt],$t=se.object,re=se.geometry,ge=se.material,Xe=se.group;if(ge.side===Ri&&$t.layers.test(Y.layers)){const fn=ge.side;ge.side=zn,ge.needsUpdate=!0,Zn($t,ft,Y,re,ge,Xe),ge.side=fn,ge.needsUpdate=!0,Xt=!0}}Xt===!0&&(It.updateMultisampleRenderTarget(k),It.updateRenderTargetMipmap(k)),g.setRenderTarget(ht),g.toneMapping=Ft}function ln(L,it,ft){const Y=it.isScene===!0?it.overrideMaterial:null;for(let ht=0,Ft=L.length;ht<Ft;ht++){const Xt=L[ht],Qt=Xt.object,ne=Xt.geometry,se=Y===null?Xt.material:Y,$t=Xt.group;Qt.layers.test(ft.layers)&&Zn(Qt,it,ft,ne,se,$t)}}function Zn(L,it,ft,Y,ht,Ft){L.onBeforeRender(g,it,ft,Y,ht,Ft),L.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ht.onBeforeRender(g,it,ft,Y,L,Ft),ht.transparent===!0&&ht.side===Ri&&ht.forceSinglePass===!1?(ht.side=zn,ht.needsUpdate=!0,g.renderBufferDirect(ft,it,Y,ht,L,Ft),ht.side=Oa,ht.needsUpdate=!0,g.renderBufferDirect(ft,it,Y,ht,L,Ft),ht.side=Ri):g.renderBufferDirect(ft,it,Y,ht,L,Ft),L.onAfterRender(g,it,ft,Y,ht,Ft)}function za(L,it,ft){it.isScene!==!0&&(it=gt);const Y=Ut.get(L),ht=A.state.lights,Ft=A.state.shadowsArray,Xt=ht.state.version,Qt=Le.getParameters(L,ht.state,Ft,it,ft),ne=Le.getProgramCacheKey(Qt);let se=Y.programs;Y.environment=L.isMeshStandardMaterial?it.environment:null,Y.fog=it.fog,Y.envMap=(L.isMeshStandardMaterial?Wt:ce).get(L.envMap||Y.environment),se===void 0&&(L.addEventListener("dispose",Ve),se=new Map,Y.programs=se);let $t=se.get(ne);if($t!==void 0){if(Y.currentProgram===$t&&Y.lightsStateVersion===Xt)return Er(L,Qt),$t}else Qt.uniforms=Le.getUniforms(L),L.onBuild(ft,Qt,g),L.onBeforeCompile(Qt,g),$t=Le.acquireProgram(Qt,ne),se.set(ne,$t),Y.uniforms=Qt.uniforms;const re=Y.uniforms;(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(re.clippingPlanes=lt.uniform),Er(L,Qt),Y.needsLights=Tr(L),Y.lightsStateVersion=Xt,Y.needsLights&&(re.ambientLightColor.value=ht.state.ambient,re.lightProbe.value=ht.state.probe,re.directionalLights.value=ht.state.directional,re.directionalLightShadows.value=ht.state.directionalShadow,re.spotLights.value=ht.state.spot,re.spotLightShadows.value=ht.state.spotShadow,re.rectAreaLights.value=ht.state.rectArea,re.ltc_1.value=ht.state.rectAreaLTC1,re.ltc_2.value=ht.state.rectAreaLTC2,re.pointLights.value=ht.state.point,re.pointLightShadows.value=ht.state.pointShadow,re.hemisphereLights.value=ht.state.hemi,re.directionalShadowMap.value=ht.state.directionalShadowMap,re.directionalShadowMatrix.value=ht.state.directionalShadowMatrix,re.spotShadowMap.value=ht.state.spotShadowMap,re.spotLightMatrix.value=ht.state.spotLightMatrix,re.spotLightMap.value=ht.state.spotLightMap,re.pointShadowMap.value=ht.state.pointShadowMap,re.pointShadowMatrix.value=ht.state.pointShadowMatrix);const ge=$t.getUniforms(),Xe=uc.seqWithValue(ge.seq,re);return Y.currentProgram=$t,Y.uniformsList=Xe,$t}function Er(L,it){const ft=Ut.get(L);ft.outputColorSpace=it.outputColorSpace,ft.instancing=it.instancing,ft.skinning=it.skinning,ft.morphTargets=it.morphTargets,ft.morphNormals=it.morphNormals,ft.morphColors=it.morphColors,ft.morphTargetsCount=it.morphTargetsCount,ft.numClippingPlanes=it.numClippingPlanes,ft.numIntersection=it.numClipIntersection,ft.vertexAlphas=it.vertexAlphas,ft.vertexTangents=it.vertexTangents,ft.toneMapping=it.toneMapping}function Co(L,it,ft,Y,ht){it.isScene!==!0&&(it=gt),It.resetTextureUnits();const Ft=it.fog,Xt=Y.isMeshStandardMaterial?it.environment:null,Qt=z===null?g.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Li,ne=(Y.isMeshStandardMaterial?Wt:ce).get(Y.envMap||Xt),se=Y.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,$t=!!Y.normalMap&&!!ft.attributes.tangent,re=!!ft.morphAttributes.position,ge=!!ft.morphAttributes.normal,Xe=!!ft.morphAttributes.color,fn=Y.toneMapped?g.toneMapping:ea,Tn=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,oe=Tn!==void 0?Tn.length:0,ue=Ut.get(Y),hs=A.state.lights;if(dt===!0&&(P===!0||L!==O)){const ke=L===O&&Y.id===H;lt.setState(Y,L,ke)}let ze=!1;Y.version===ue.__version?(ue.needsLights&&ue.lightsStateVersion!==hs.state.version||ue.outputColorSpace!==Qt||ht.isInstancedMesh&&ue.instancing===!1||!ht.isInstancedMesh&&ue.instancing===!0||ht.isSkinnedMesh&&ue.skinning===!1||!ht.isSkinnedMesh&&ue.skinning===!0||ue.envMap!==ne||Y.fog===!0&&ue.fog!==Ft||ue.numClippingPlanes!==void 0&&(ue.numClippingPlanes!==lt.numPlanes||ue.numIntersection!==lt.numIntersection)||ue.vertexAlphas!==se||ue.vertexTangents!==$t||ue.morphTargets!==re||ue.morphNormals!==ge||ue.morphColors!==Xe||ue.toneMapping!==fn||St.isWebGL2===!0&&ue.morphTargetsCount!==oe)&&(ze=!0):(ze=!0,ue.__version=Y.version);let An=ue.currentProgram;ze===!0&&(An=za(Y,it,ht));let Lo=!1,ia=!1,ds=!1;const hn=An.getUniforms(),Kn=ue.uniforms;if(Dt.useProgram(An.program)&&(Lo=!0,ia=!0,ds=!0),Y.id!==H&&(H=Y.id,ia=!0),Lo||O!==L){if(hn.setValue(R,"projectionMatrix",L.projectionMatrix),St.logarithmicDepthBuffer&&hn.setValue(R,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),O!==L&&(O=L,ia=!0,ds=!0),Y.isShaderMaterial||Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshStandardMaterial||Y.envMap){const ke=hn.map.cameraPosition;ke!==void 0&&ke.setValue(R,J.setFromMatrixPosition(L.matrixWorld))}(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&hn.setValue(R,"isOrthographic",L.isOrthographicCamera===!0),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial||Y.isShadowMaterial||ht.isSkinnedMesh)&&hn.setValue(R,"viewMatrix",L.matrixWorldInverse)}if(ht.isSkinnedMesh){hn.setOptional(R,ht,"bindMatrix"),hn.setOptional(R,ht,"bindMatrixInverse");const ke=ht.skeleton;ke&&(St.floatVertexTextures?(ke.boneTexture===null&&ke.computeBoneTexture(),hn.setValue(R,"boneTexture",ke.boneTexture,It),hn.setValue(R,"boneTextureSize",ke.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const aa=ft.morphAttributes;if((aa.position!==void 0||aa.normal!==void 0||aa.color!==void 0&&St.isWebGL2===!0)&&Ct.update(ht,ft,An),(ia||ue.receiveShadow!==ht.receiveShadow)&&(ue.receiveShadow=ht.receiveShadow,hn.setValue(R,"receiveShadow",ht.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Kn.envMap.value=ne,Kn.flipEnvMap.value=ne.isCubeTexture&&ne.isRenderTargetTexture===!1?-1:1),ia&&(hn.setValue(R,"toneMappingExposure",g.toneMappingExposure),ue.needsLights&&br(Kn,ds),Ft&&Y.fog===!0&&Ge.refreshFogUniforms(Kn,Ft),Ge.refreshMaterialUniforms(Kn,Y,Q,Z,k),uc.upload(R,ue.uniformsList,Kn,It)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(uc.upload(R,ue.uniformsList,Kn,It),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&hn.setValue(R,"center",ht.center),hn.setValue(R,"modelViewMatrix",ht.modelViewMatrix),hn.setValue(R,"normalMatrix",ht.normalMatrix),hn.setValue(R,"modelMatrix",ht.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const ke=Y.uniformsGroups;for(let vn=0,Do=ke.length;vn<Do;vn++)if(St.isWebGL2){const Uo=ke[vn];kt.update(Uo,An),kt.bind(Uo,An)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return An}function br(L,it){L.ambientLightColor.needsUpdate=it,L.lightProbe.needsUpdate=it,L.directionalLights.needsUpdate=it,L.directionalLightShadows.needsUpdate=it,L.pointLights.needsUpdate=it,L.pointLightShadows.needsUpdate=it,L.spotLights.needsUpdate=it,L.spotLightShadows.needsUpdate=it,L.rectAreaLights.needsUpdate=it,L.hemisphereLights.needsUpdate=it}function Tr(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(L,it,ft){Ut.get(L.texture).__webglTexture=it,Ut.get(L.depthTexture).__webglTexture=ft;const Y=Ut.get(L);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=ft===void 0,Y.__autoAllocateDepthBuffer||Et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,it){const ft=Ut.get(L);ft.__webglFramebuffer=it,ft.__useDefaultFramebuffer=it===void 0},this.setRenderTarget=function(L,it=0,ft=0){z=L,C=it,U=ft;let Y=!0,ht=null,Ft=!1,Xt=!1;if(L){const ne=Ut.get(L);ne.__useDefaultFramebuffer!==void 0?(Dt.bindFramebuffer(R.FRAMEBUFFER,null),Y=!1):ne.__webglFramebuffer===void 0?It.setupRenderTarget(L):ne.__hasExternalTextures&&It.rebindTextures(L,Ut.get(L.texture).__webglTexture,Ut.get(L.depthTexture).__webglTexture);const se=L.texture;(se.isData3DTexture||se.isDataArrayTexture||se.isCompressedArrayTexture)&&(Xt=!0);const $t=Ut.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(ht=$t[it],Ft=!0):St.isWebGL2&&L.samples>0&&It.useMultisampledRTT(L)===!1?ht=Ut.get(L).__webglMultisampledFramebuffer:ht=$t,q.copy(L.viewport),E.copy(L.scissor),D=L.scissorTest}else q.copy(I).multiplyScalar(Q).floor(),E.copy(X).multiplyScalar(Q).floor(),D=$;if(Dt.bindFramebuffer(R.FRAMEBUFFER,ht)&&St.drawBuffers&&Y&&Dt.drawBuffers(L,ht),Dt.viewport(q),Dt.scissor(E),Dt.setScissorTest(D),Ft){const ne=Ut.get(L.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+it,ne.__webglTexture,ft)}else if(Xt){const ne=Ut.get(L.texture),se=it||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,ne.__webglTexture,ft||0,se)}H=-1},this.readRenderTargetPixels=function(L,it,ft,Y,ht,Ft,Xt){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qt=Ut.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Xt!==void 0&&(Qt=Qt[Xt]),Qt){Dt.bindFramebuffer(R.FRAMEBUFFER,Qt);try{const ne=L.texture,se=ne.format,$t=ne.type;if(se!==Si&&_t.convert(se)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const re=$t===bo&&(Et.has("EXT_color_buffer_half_float")||St.isWebGL2&&Et.has("EXT_color_buffer_float"));if($t!==cs&&_t.convert($t)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_TYPE)&&!($t===ss&&(St.isWebGL2||Et.has("OES_texture_float")||Et.has("WEBGL_color_buffer_float")))&&!re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}it>=0&&it<=L.width-Y&&ft>=0&&ft<=L.height-ht&&R.readPixels(it,ft,Y,ht,_t.convert(se),_t.convert($t),Ft)}finally{const ne=z!==null?Ut.get(z).__webglFramebuffer:null;Dt.bindFramebuffer(R.FRAMEBUFFER,ne)}}},this.copyFramebufferToTexture=function(L,it,ft=0){const Y=Math.pow(2,-ft),ht=Math.floor(it.image.width*Y),Ft=Math.floor(it.image.height*Y);It.setTexture2D(it,0),R.copyTexSubImage2D(R.TEXTURE_2D,ft,0,0,L.x,L.y,ht,Ft),Dt.unbindTexture()},this.copyTextureToTexture=function(L,it,ft,Y=0){const ht=it.image.width,Ft=it.image.height,Xt=_t.convert(ft.format),Qt=_t.convert(ft.type);It.setTexture2D(ft,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,ft.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ft.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,ft.unpackAlignment),it.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Y,L.x,L.y,ht,Ft,Xt,Qt,it.image.data):it.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Y,L.x,L.y,it.mipmaps[0].width,it.mipmaps[0].height,Xt,it.mipmaps[0].data):R.texSubImage2D(R.TEXTURE_2D,Y,L.x,L.y,Xt,Qt,it.image),Y===0&&ft.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),Dt.unbindTexture()},this.copyTextureToTexture3D=function(L,it,ft,Y,ht=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ft=L.max.x-L.min.x+1,Xt=L.max.y-L.min.y+1,Qt=L.max.z-L.min.z+1,ne=_t.convert(Y.format),se=_t.convert(Y.type);let $t;if(Y.isData3DTexture)It.setTexture3D(Y,0),$t=R.TEXTURE_3D;else if(Y.isDataArrayTexture)It.setTexture2DArray(Y,0),$t=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,Y.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,Y.unpackAlignment);const re=R.getParameter(R.UNPACK_ROW_LENGTH),ge=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Xe=R.getParameter(R.UNPACK_SKIP_PIXELS),fn=R.getParameter(R.UNPACK_SKIP_ROWS),Tn=R.getParameter(R.UNPACK_SKIP_IMAGES),oe=ft.isCompressedTexture?ft.mipmaps[0]:ft.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,oe.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,oe.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,L.min.x),R.pixelStorei(R.UNPACK_SKIP_ROWS,L.min.y),R.pixelStorei(R.UNPACK_SKIP_IMAGES,L.min.z),ft.isDataTexture||ft.isData3DTexture?R.texSubImage3D($t,ht,it.x,it.y,it.z,Ft,Xt,Qt,ne,se,oe.data):ft.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),R.compressedTexSubImage3D($t,ht,it.x,it.y,it.z,Ft,Xt,Qt,ne,oe.data)):R.texSubImage3D($t,ht,it.x,it.y,it.z,Ft,Xt,Qt,ne,se,oe),R.pixelStorei(R.UNPACK_ROW_LENGTH,re),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ge),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Xe),R.pixelStorei(R.UNPACK_SKIP_ROWS,fn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Tn),ht===0&&Y.generateMipmaps&&R.generateMipmap($t),Dt.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?It.setTextureCube(L,0):L.isData3DTexture?It.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?It.setTexture2DArray(L,0):It.setTexture2D(L,0),Dt.unbindTexture()},this.resetState=function(){C=0,U=0,z=null,Dt.reset(),Ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ae?os:J0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===os?ae:Li}}class NT extends __{}NT.prototype.isWebGL1Renderer=!0;class Th{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Te(e),this.density=i}clone(){return new Th(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class OT extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class To extends na{constructor(e=1,i=1,r=1,l=32,u=1,d=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:r,radialSegments:l,heightSegments:u,openEnded:d,thetaStart:h,thetaLength:m};const p=this;l=Math.floor(l),u=Math.floor(u);const v=[],x=[],S=[],y=[];let A=0;const T=[],M=r/2;let g=0;N(),d===!1&&(e>0&&C(!0),i>0&&C(!1)),this.setIndex(v),this.setAttribute("position",new Yn(x,3)),this.setAttribute("normal",new Yn(S,3)),this.setAttribute("uv",new Yn(y,2));function N(){const U=new K,z=new K;let H=0;const O=(i-e)/r;for(let q=0;q<=u;q++){const E=[],D=q/u,ut=D*(i-e)+e;for(let Z=0;Z<=l;Z++){const Q=Z/l,at=Q*m+h,rt=Math.sin(at),I=Math.cos(at);z.x=ut*rt,z.y=-D*r+M,z.z=ut*I,x.push(z.x,z.y,z.z),U.set(rt,O,I).normalize(),S.push(U.x,U.y,U.z),y.push(Q,1-D),E.push(A++)}T.push(E)}for(let q=0;q<l;q++)for(let E=0;E<u;E++){const D=T[E][q],ut=T[E+1][q],Z=T[E+1][q+1],Q=T[E][q+1];v.push(D,ut,Q),v.push(ut,Z,Q),H+=6}p.addGroup(g,H,0),g+=H}function C(U){const z=A,H=new xe,O=new K;let q=0;const E=U===!0?e:i,D=U===!0?1:-1;for(let Z=1;Z<=l;Z++)x.push(0,M*D,0),S.push(0,D,0),y.push(.5,.5),A++;const ut=A;for(let Z=0;Z<=l;Z++){const at=Z/l*m+h,rt=Math.cos(at),I=Math.sin(at);O.x=E*I,O.y=M*D,O.z=E*rt,x.push(O.x,O.y,O.z),S.push(0,D,0),H.x=rt*.5+.5,H.y=I*.5*D+.5,y.push(H.x,H.y),A++}for(let Z=0;Z<l;Z++){const Q=z+Z,at=ut+Z;U===!0?v.push(at,at+1,Q):v.push(at+1,at,Q),q+=3}p.addGroup(g,q,U===!0?1:2),g+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new To(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ah extends To{constructor(e=1,i=1,r=32,l=1,u=!1,d=0,h=Math.PI*2){super(0,e,i,r,l,u,d,h),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:r,heightSegments:l,openEnded:u,thetaStart:d,thetaLength:h}}static fromJSON(e){return new Ah(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wh extends na{constructor(e=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:r,detail:l};const u=[],d=[];h(l),p(r),v(),this.setAttribute("position",new Yn(u,3)),this.setAttribute("normal",new Yn(u.slice(),3)),this.setAttribute("uv",new Yn(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(N){const C=new K,U=new K,z=new K;for(let H=0;H<i.length;H+=3)y(i[H+0],C),y(i[H+1],U),y(i[H+2],z),m(C,U,z,N)}function m(N,C,U,z){const H=z+1,O=[];for(let q=0;q<=H;q++){O[q]=[];const E=N.clone().lerp(U,q/H),D=C.clone().lerp(U,q/H),ut=H-q;for(let Z=0;Z<=ut;Z++)Z===0&&q===H?O[q][Z]=E:O[q][Z]=E.clone().lerp(D,Z/ut)}for(let q=0;q<H;q++)for(let E=0;E<2*(H-q)-1;E++){const D=Math.floor(E/2);E%2===0?(S(O[q][D+1]),S(O[q+1][D]),S(O[q][D])):(S(O[q][D+1]),S(O[q+1][D+1]),S(O[q+1][D]))}}function p(N){const C=new K;for(let U=0;U<u.length;U+=3)C.x=u[U+0],C.y=u[U+1],C.z=u[U+2],C.normalize().multiplyScalar(N),u[U+0]=C.x,u[U+1]=C.y,u[U+2]=C.z}function v(){const N=new K;for(let C=0;C<u.length;C+=3){N.x=u[C+0],N.y=u[C+1],N.z=u[C+2];const U=M(N)/2/Math.PI+.5,z=g(N)/Math.PI+.5;d.push(U,1-z)}A(),x()}function x(){for(let N=0;N<d.length;N+=6){const C=d[N+0],U=d[N+2],z=d[N+4],H=Math.max(C,U,z),O=Math.min(C,U,z);H>.9&&O<.1&&(C<.2&&(d[N+0]+=1),U<.2&&(d[N+2]+=1),z<.2&&(d[N+4]+=1))}}function S(N){u.push(N.x,N.y,N.z)}function y(N,C){const U=N*3;C.x=e[U+0],C.y=e[U+1],C.z=e[U+2]}function A(){const N=new K,C=new K,U=new K,z=new K,H=new xe,O=new xe,q=new xe;for(let E=0,D=0;E<u.length;E+=9,D+=6){N.set(u[E+0],u[E+1],u[E+2]),C.set(u[E+3],u[E+4],u[E+5]),U.set(u[E+6],u[E+7],u[E+8]),H.set(d[D+0],d[D+1]),O.set(d[D+2],d[D+3]),q.set(d[D+4],d[D+5]),z.copy(N).add(C).add(U).divideScalar(3);const ut=M(z);T(H,D+0,N,ut),T(O,D+2,C,ut),T(q,D+4,U,ut)}}function T(N,C,U,z){z<0&&N.x===1&&(d[C]=N.x-1),U.x===0&&U.z===0&&(d[C]=z/2/Math.PI+.5)}function M(N){return Math.atan2(N.z,-N.x)}function g(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wh(e.vertices,e.indices,e.radius,e.details)}}class Rh extends wh{constructor(e=1,i=0){const r=(1+Math.sqrt(5))/2,l=1/r,u=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-l,-r,0,-l,r,0,l,-r,0,l,r,-l,-r,0,-l,r,0,l,-r,0,l,r,0,-r,0,-l,r,0,-l,-r,0,l,r,0,l],d=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(u,d,e,i),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Rh(e.radius,e.detail)}}class oi extends Mr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sh,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sh extends Mr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sh,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ch extends _n{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}class zT extends Ch{constructor(e,i,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const rh=new en,H0=new K,G0=new K;class v_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eh,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;H0.setFromMatrixPosition(e.matrixWorld),i.position.copy(H0),G0.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(G0),i.updateMatrixWorld(),rh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(rh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const V0=new en,So=new K,oh=new K;class PT extends v_{constructor(){super(new qn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new He(2,1,1,1),new He(0,1,1,1),new He(3,1,1,1),new He(1,1,1,1),new He(3,0,1,1),new He(1,0,1,1)],this._cubeDirections=[new K(1,0,0),new K(-1,0,0),new K(0,0,1),new K(0,0,-1),new K(0,1,0),new K(0,-1,0)],this._cubeUps=[new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,0,1),new K(0,0,-1)]}updateMatrices(e,i=0){const r=this.camera,l=this.matrix,u=e.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),So.setFromMatrixPosition(e.matrixWorld),r.position.copy(So),oh.copy(r.position),oh.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(oh),r.updateMatrixWorld(),l.makeTranslation(-So.x,-So.y,-So.z),V0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(V0)}}class BT extends Ch{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new PT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class FT extends v_{constructor(){super(new h_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class IT extends Ch{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new FT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class HT{constructor(e,i,r=0,l=1/0){this.ray=new a_(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new yh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}intersectObject(e,i=!0,r=[]){return gh(e,this,r,i),r.sort(k0),r}intersectObjects(e,i=!0,r=[]){for(let l=0,u=e.length;l<u;l++)gh(e[l],this,r,i);return r.sort(k0),r}}function k0(o,e){return o.distance-e.distance}function gh(o,e,i,r){if(o.layers.test(e.layers)&&o.raycast(e,i),r===!0){const l=o.children;for(let u=0,d=l.length;u<d;u++)gh(l[u],e,i,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vh);const an=280,GT=120,VT=({gameState:o,settings:e,onUpdateStats:i,onGameOver:r,inputRef:l})=>{const u=ci.useRef(null),d=ci.useRef({health:100,kills:0,alive:0,zoneRadius:an,zoneTimer:60,verticalVelocity:0,fireCooldown:0,nadeCooldown:0,gameTime:0});return ci.useEffect(()=>{if(!u.current)return;const h=new OT;h.background=new Te(8900331),h.fog=new Th(8900331,.0015);const m=new qn(e.fov,window.innerWidth/window.innerHeight,.1,5e3),p=new __({antialias:!0,powerPreference:"high-performance",alpha:!1});p.setSize(window.innerWidth,window.innerHeight),p.setPixelRatio(Math.min(window.devicePixelRatio,2)),p.shadowMap.enabled=!0,p.shadowMap.type=q0,p.toneMapping=Z0,p.outputColorSpace=ae,u.current.appendChild(p.domElement);const v=new zT(8900331,4025917,.8);h.add(v);const x=new IT(16777215,2);x.position.set(250,450,150),x.castShadow=!0,x.shadow.mapSize.set(1024,1024),x.shadow.camera.left=-an,x.shadow.camera.right=an,x.shadow.camera.top=an,x.shadow.camera.bottom=-an,x.shadow.bias=-1e-4,h.add(x);const S=[],y=[],A=[],T=[],M=[],g=new Ai(an*20,an*20),N=new sh({color:3898683,emissive:333061}),C=new Se(g,N);C.rotation.x=-Math.PI/2,C.receiveShadow=!0,h.add(C);const U=(st,R)=>{const yt=new Ua,Et=new Se(new To(.5,.8,5,6),new oi({color:5125166}));Et.position.y=2.5;const St=new Se(new Rh(3.5,0),new oi({color:3046706}));St.position.y=6,yt.add(Et,St),yt.position.set(st,0,R),yt.castShadow=!0,yt.receiveShadow=!0,h.add(yt),S.push(Et)},z=(st,R,yt=1)=>{const Et=new Ua;Et.position.set(st,0,R);const St=7*yt,Dt=15,Zt=15,Ut=new oi({color:15658734}),It=[new Se(new tn(Dt,St,1),Ut),new Se(new tn(1,St,Zt),Ut),new Se(new tn(1,St,Zt),Ut)];It[0].position.set(0,St/2,-Zt/2),It[1].position.set(-Dt/2,St/2,0),It[2].position.set(Dt/2,St/2,0),It.forEach(qt=>{qt.castShadow=!0,qt.receiveShadow=!0,Et.add(qt),S.push(qt)});const ce=new Se(new Ah(12.5,6,4),new oi({color:7162945}));ce.position.y=St+3,ce.rotation.y=Math.PI/4,ce.castShadow=!0,Et.add(ce),S.push(ce);const Wt=new Se(new tn(Dt+2,1,Zt+2),new fr({visible:!1}));if(Wt.position.y=St,Et.add(Wt),y.push(Wt),yt>1){const qt=new Se(new tn(5,.8,18),new oi({color:4073251}));qt.position.set(Dt/2+2,3.5,0),qt.rotation.x=-.42,Et.add(qt),y.push(qt)}h.add(Et),M.push({x:st,z:R})},H=(st,R)=>{const yt=new Ua,Et=new Se(new tn(1.2,.7,.5),new oi({color:16777215})),St=new Se(new tn(.3,.5,.52),new fr({color:5025616}));yt.add(Et,St),yt.position.set(st,.6,R),h.add(yt),T.push(yt)},O=14,q=60,E=new sh({color:3355443}),D=new sh({color:10066329});for(let st=-4;st<=4;st++){const R=st*q,yt=new Se(new Ai(O,an*4),E);yt.rotation.x=-Math.PI/2,yt.position.set(R,.05,0),yt.receiveShadow=!0,h.add(yt);const Et=new Se(new Ai(2,an*4),D);Et.rotation.x=-Math.PI/2,Et.position.set(R-O/2-1,.06,0),h.add(Et);const St=new Se(new Ai(2,an*4),D);St.rotation.x=-Math.PI/2,St.position.set(R+O/2+1,.06,0),h.add(St)}for(let st=-4;st<=4;st++){const R=st*q,yt=new Se(new Ai(an*4,O),E);yt.rotation.x=-Math.PI/2,yt.position.set(0,.05,R),yt.receiveShadow=!0,h.add(yt);const Et=new Se(new Ai(an*4,2),D);Et.rotation.x=-Math.PI/2,Et.position.set(0,.06,R-O/2-1),h.add(Et);const St=new Se(new Ai(an*4,2),D);St.rotation.x=-Math.PI/2,St.position.set(0,.06,R+O/2+1),h.add(St)}for(let st=-4;st<4;st++)for(let R=-4;R<4;R++){const yt=st*q+q/2,Et=R*q+q/2;if(Math.random()>.2){const St=yt+(Math.random()-.5)*10,Dt=Et+(Math.random()-.5)*10;z(St,Dt,Math.random()>.7?2:1)}for(let St=0;St<3;St++){const Dt=yt+(Math.random()-.5)*30,Zt=Et+(Math.random()-.5)*30;Math.abs(Dt%q)>O&&Math.abs(Zt%q)>O&&U(Dt,Zt)}Math.random()>.8&&H(yt+(Math.random()-.5)*20,Et+(Math.random()-.5)*20)}const ut=(st,R=!1)=>{const yt=new Ua,Et=new Se(new tn(.8,1,.5),new oi({color:st,metalness:.3}));Et.position.y=1.3,Et.castShadow=!0;const St=new Se(new tn(.6,.6,.6),new oi({color:16767916}));St.position.y=.85,Et.add(St),St.castShadow=!0;const Dt=new Se(new tn(.3,.9,.3),new oi({color:st}));Dt.position.set(-.6,.05,0),Et.add(Dt);const Zt=new Se(new tn(.3,.9,.3),new oi({color:st}));Zt.position.set(.6,.05,0),Et.add(Zt);const Ut=new oi({color:2236962}),It=new Se(new tn(.35,1,.35),Ut);It.position.set(-.22,-.5,0),Et.add(It);const ce=new Se(new tn(.35,1,.35),Ut);ce.position.set(.22,-.5,0),Et.add(ce);const Wt=new Se(new tn(.2,.3,1.1),new oi({color:1118481,metalness:.9}));Wt.position.set(.3,.2,.6),Et.add(Wt);const qt=new BT(16755200,0,8);qt.position.set(0,0,.8),Wt.add(qt),yt.add(Et);const ee=new Se(new tn(2,4,2),new fr({visible:!1}));return ee.position.y=2,yt.add(ee),yt.userData={hp:100,isPlayer:R,flash:qt,hb:ee,fireTimer:Math.random()*2,limbs:{body:Et,head:St,armL:Dt,armR:Zt,legL:It,legR:ce}},yt},Z=ut(16761095,!0);Z.position.set((Math.random()-.5)*an*.8,2,(Math.random()-.5)*an*.8),h.add(Z);const Q=Math.min(e.botCount,M.length),at=M.sort(()=>.5-Math.random());for(let st=0;st<Q;st++){const R=ut(Math.random()*16777215),yt=at[st];R.position.set(yt.x,2,yt.z),A.push(R),h.add(R)}i({alive:A.length+1});const rt=new Se(new To(an,an,300,64,1,!0),new fr({color:58879,opacity:.15,transparent:!0,side:Ri}));rt.position.y=150,h.add(rt);let I;const X=new HT;let $=null;const xt=()=>{if(o===Nn.GAMEOVER)return;const st=.016,R=d.current,yt=l.current;if(R.gameTime+=st,o===Nn.PLAYING){let Et=yt.isSprinting?.48:.26;if(yt.x!==0||yt.y!==0){const Wt=new K(yt.x,0,yt.y).applyAxisAngle(new K(0,1,0),yt.yaw||0).normalize();X.set(Z.position.clone().add(new K(0,.5,0)),Wt);const qt=X.intersectObjects(S,!0);(qt.length===0||qt[0].distance>1.8)&&Z.position.addScaledVector(Wt,Et),Z.rotation.y=Math.atan2(Wt.x,Wt.z);const ee=Math.sin(R.gameTime*12);Z.userData.limbs.legL.rotation.x=ee*.6,Z.userData.limbs.legR.rotation.x=-ee*.6,Z.userData.limbs.armL.rotation.x=-ee*.4,Z.userData.limbs.armR.rotation.x=ee*.4}else Z.userData.limbs.legL.rotation.x=0,Z.userData.limbs.legR.rotation.x=0,Z.userData.limbs.armL.rotation.x=0,Z.userData.limbs.armR.rotation.x=0;R.verticalVelocity-=.024,Z.position.y+=R.verticalVelocity,X.set(Z.position.clone().add(new K(0,2,0)),new K(0,-1,0));const St=X.intersectObjects([...y,C],!0),Dt=St.length>0?St[0].point.y:0;Z.position.y<Dt&&(Z.position.y=Dt,R.verticalVelocity=0);const Zt=yt.yaw||0,Ut=Math.max(-1.1,Math.min(1.1,yt.pitch||-.2)),It=yt.isADS?3.5:9.5,ce=Z.position.clone().add(new K(0,3,0));if(m.position.set(ce.x+Math.sin(Zt)*Math.cos(Ut)*It,ce.y+Math.sin(Ut)*It,ce.z+Math.cos(Zt)*Math.cos(Ut)*It),m.lookAt(ce),yt.firing&&R.fireCooldown<=0){R.fireCooldown=10,Z.userData.flash.intensity=10,setTimeout(()=>{Z.userData.flash&&(Z.userData.flash.intensity=0)},50),X.setFromCamera(new xe(0,0),m);const Wt=X.intersectObjects(A.map(qt=>qt.userData.hb),!0);if(Wt.length>0){const qt=A.find(ee=>ee.userData.hb===Wt[0].object);qt&&(qt.userData.hp-=35,qt.userData.hp<=0&&(h.remove(qt),A.splice(A.indexOf(qt),1),R.kills++,i({kills:R.kills,alive:A.length+1}),A.length===0&&r(!0)))}}R.fireCooldown>0&&R.fireCooldown--;for(let Wt=T.length-1;Wt>=0;Wt--){const qt=T[Wt];qt.rotation.y+=.08,qt.position.distanceTo(Z.position)<3&&(R.health=Math.min(100,R.health+40),i({health:R.health}),h.remove(qt),T.splice(Wt,1))}A.forEach((Wt,qt)=>{const ee=Wt.userData,de=Wt.position.distanceTo(Z.position);if(ee.limbs&&(Wt.lookAt(Z.position.x,Wt.position.y,Z.position.z),de<GT)){if(de>25){Wt.translateZ(.22);const Ge=Math.sin(R.gameTime*10+qt);Wt.userData.limbs.legL.rotation.x=Ge*.5,Wt.userData.limbs.legR.rotation.x=-Ge*.5}else Wt.userData.limbs.legL.rotation.x=0,Wt.userData.limbs.legR.rotation.x=0;ee.fireTimer+=st;const Le=e.difficulty==="hard"?1.5:2.5;if(ee.fireTimer>=Le){ee.fireTimer=0,ee.flash.intensity=8,setTimeout(()=>{ee.flash&&(ee.flash.intensity=0)},50);const Ge=e.difficulty==="hard"?6:4;R.health-=Ge,i({health:R.health}),$||($=document.getElementById("damage-flash")),$&&($.style.opacity="1",setTimeout(()=>{$&&($.style.opacity="0")},100)),R.health<=0&&r(!1)}}}),R.zoneTimer>0?(R.zoneTimer-=st,i({zoneTimer:Math.ceil(R.zoneTimer)})):(R.zoneRadius>80&&(R.zoneRadius-=.1),rt.scale.set(R.zoneRadius/an,1,R.zoneRadius/an),Z.position.distanceTo(new K(0,0,0))>R.zoneRadius&&(R.health-=.5,i({health:R.health}),R.health<=0&&r(!1)))}p.render(h,m),I=requestAnimationFrame(xt)};xt();const dt=()=>{m.aspect=window.innerWidth/window.innerHeight,m.updateProjectionMatrix(),p.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",dt);const P=st=>{const R=st.code;(R==="KeyW"||R==="ArrowUp")&&(l.current.y=-1),(R==="KeyS"||R==="ArrowDown")&&(l.current.y=1),(R==="KeyA"||R==="ArrowLeft")&&(l.current.x=-1),(R==="KeyD"||R==="ArrowRight")&&(l.current.x=1),R==="ShiftLeft"&&(l.current.isSprinting=!0)},k=st=>{const R=st.code;(R==="KeyW"||R==="ArrowUp")&&l.current.y===-1&&(l.current.y=0),(R==="KeyS"||R==="ArrowDown")&&l.current.y===1&&(l.current.y=0),(R==="KeyA"||R==="ArrowLeft")&&l.current.x===-1&&(l.current.x=0),(R==="KeyD"||R==="ArrowRight")&&l.current.x===1&&(l.current.x=0),R==="ShiftLeft"&&(l.current.isSprinting=!1)},V=()=>{l.current.firing=!0,document.body.requestPointerLock&&document.body.requestPointerLock()},J=()=>{l.current.firing=!1},gt=st=>{if(document.pointerLockElement===document.body){l.current.yaw=(l.current.yaw||0)-st.movementX*.002*e.sens;const R=(l.current.pitch||0)+st.movementY*.002*e.sens;l.current.pitch=Math.max(-1.5,Math.min(1.5,R))}};return window.addEventListener("keydown",P),window.addEventListener("keyup",k),window.addEventListener("mousedown",V),window.addEventListener("mouseup",J),window.addEventListener("mousemove",gt),()=>{for(window.removeEventListener("resize",dt),window.removeEventListener("keydown",P),window.removeEventListener("keyup",k),window.removeEventListener("mousedown",V),window.removeEventListener("mouseup",J),window.removeEventListener("mousemove",gt),document.pointerLockElement&&document.exitPointerLock(),cancelAnimationFrame(I),p.dispose(),u.current&&p.domElement&&u.current.removeChild(p.domElement);h.children.length>0;)h.remove(h.children[0])}},[o]),ct.jsx("div",{ref:u,className:"w-full h-full bg-black"})},kT=({gameState:o,stats:e,settings:i,setSettings:r,onTogglePause:l,inputRef:u})=>{const[d,h]=ci.useState({x:0,y:0}),[m,p]=ci.useState(!1),v=ci.useRef(null),x=ci.useRef(null),S=ci.useRef(null),y=o===Nn.PAUSED,A=O=>{const q=O.touches[0],E=O.currentTarget.getBoundingClientRect(),D=E.left+E.width/2,ut=E.top+E.height/2;q.clientX<window.innerWidth/2&&q.clientY>window.innerHeight/2&&(p(!0),x.current={x:q.clientX,y:q.clientY},M(q.clientX,q.clientY,D,ut,E.width/2))},T=O=>{if(!m||!x.current)return;const q=O.touches[0],E=O.currentTarget.getBoundingClientRect(),D=E.left+E.width/2,ut=E.top+E.height/2;M(q.clientX,q.clientY,D,ut,E.width/2)},M=(O,q,E,D,ut)=>{const Z=O-E,Q=q-D,at=Math.min(Math.sqrt(Z*Z+Q*Q),ut),rt=Math.atan2(Q,Z),I=Math.cos(rt)*at,X=Math.sin(rt)*at;h({x:I,y:X}),u.current.x=I/ut,u.current.y=X/ut},g=()=>{p(!1),h({x:0,y:0}),u.current.x=0,u.current.y=0},N=O=>{for(let q=0;q<O.touches.length;q++){const E=O.touches[q];if(E.clientX>window.innerWidth/2){S.current={x:E.clientX,y:E.clientY};break}}},C=O=>{if(S.current)for(let q=0;q<O.touches.length;q++){const E=O.touches[q];if(E.clientX>window.innerWidth/2){const D=E.clientX-S.current.x,ut=E.clientY-S.current.y;u.current.yaw=(u.current.yaw||0)-D*.005*i.sens,u.current.pitch=(u.current.pitch||0)+ut*.005*i.sens,S.current={x:E.clientX,y:E.clientY};break}}},U=e.weapons&&e.weapons[e.currentWeapon||0],z={[cr.RIFLE]:"fa-gun",[cr.SHOTGUN]:"fa-bullseye",[cr.SNIPER]:"fa-crosshairs",[cr.PISTOL]:"fa-circle-dot",[cr.SMG]:"fa-burst"},H=e.armor.level===3?"text-yellow-400":e.armor.level===2?"text-blue-400":"text-green-400";return ct.jsxs("div",{className:"absolute inset-0 pointer-events-none text-white select-none overflow-hidden",onTouchStart:O=>{N(O)},onTouchMove:O=>{C(O)},children:[ct.jsx("div",{id:"damage-flash",className:"fixed inset-0 bg-red-600/40 opacity-0 pointer-events-none transition-opacity duration-75 z-[60]"}),ct.jsx("div",{className:"pointer-events-auto absolute bottom-10 left-10 w-40 h-40 bg-white/20 rounded-full border-4 border-white/50 backdrop-blur-md touch-none shadow-xl",onTouchStart:A,onTouchMove:T,onTouchEnd:g,ref:v,children:ct.jsx("div",{className:"absolute w-16 h-16 bg-white rounded-full shadow-lg",style:{left:"50%",top:"50%",transform:`translate(calc(-50% + ${d.x}px), calc(-50% + ${d.y}px))`}})}),ct.jsxs("div",{className:"absolute top-0 inset-x-0 p-5 flex justify-between items-start bg-gradient-to-b from-black/80 to-transparent",children:[ct.jsxs("div",{className:"flex gap-4 items-center",children:[ct.jsxs("div",{className:"w-28 h-28 rounded-full border-4 border-cyan-500/40 bg-black/60 backdrop-blur-2xl relative overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.3)]",children:[ct.jsxs("div",{className:"absolute inset-0 flex items-center justify-center opacity-30",children:[ct.jsx("div",{className:"w-full h-[1px] bg-cyan-400"}),ct.jsx("div",{className:"w-[1px] h-full bg-cyan-400"})]}),ct.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-400 rounded-full shadow-[0_0_15px_#facc15] z-10 animate-pulse border-2 border-white"}),ct.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-[conic-gradient(from_0deg,transparent,rgba(6,182,212,0.2),transparent)] animate-[spin_3s_linear_infinite]"})]}),ct.jsx("button",{className:"pointer-events-auto w-24 h-24 bg-red-600 rounded-full flex items-center justify-center border-4 border-white/50 active:scale-90 active:bg-red-700 transition-all absolute bottom-24 right-10 shadow-[0_0_30px_rgba(220,38,38,0.8)] z-50",onTouchStart:()=>{u.current.firing=!0},onTouchEnd:()=>{u.current.firing=!1},onMouseDown:()=>{u.current.firing=!0},onMouseUp:()=>{u.current.firing=!1},children:ct.jsx("i",{className:"fas fa-crosshairs text-4xl text-white"})}),ct.jsx("button",{className:"pointer-events-auto w-14 h-14 bg-white/10 rounded-3xl flex items-center justify-center border border-white/20 active:scale-90 transition-transform",onClick:l,children:ct.jsx("i",{className:"fas fa-th-large text-xl"})})]}),ct.jsxs("div",{className:"absolute left-1/2 -translate-x-1/2 top-8 flex flex-col items-center gap-1",children:[ct.jsx("div",{className:`px-10 py-3 rounded-full border-2 backdrop-blur-xl transition-all shadow-2xl ${e.zoneTimer<10?"bg-red-600/60 border-red-500 animate-pulse":"bg-black/60 border-cyan-500/50"}`,children:ct.jsxs("span",{className:"text-xl font-black italic tracking-widest uppercase",children:["Zona: ",e.zoneTimer,"s"]})}),e.zoneTimer===0&&ct.jsx("span",{className:"text-[10px] font-bold text-cyan-400 uppercase tracking-[0.4em] animate-pulse",children:"Encolhendo..."})]}),ct.jsxs("div",{className:"flex flex-col items-end gap-3",children:[ct.jsxs("div",{className:"flex gap-3",children:[ct.jsxs("div",{className:"bg-black/60 px-6 py-2 rounded-2xl border border-white/10 text-right backdrop-blur-md",children:[ct.jsx("div",{className:"text-[10px] font-black uppercase text-red-500 tracking-tighter mb-1",children:"Vivos"}),ct.jsx("div",{className:"text-3xl font-black italic tracking-tighter leading-none",children:e.alive})]}),ct.jsxs("div",{className:"bg-black/60 px-6 py-2 rounded-2xl border border-white/10 text-right backdrop-blur-md",children:[ct.jsx("div",{className:"text-[10px] font-black uppercase text-yellow-500 tracking-tighter mb-1",children:"Kills"}),ct.jsx("div",{className:"text-3xl font-black italic tracking-tighter leading-none",children:e.kills})]})]}),e.kills>0&&ct.jsxs("div",{className:"kill-msg bg-yellow-400 text-slate-950 px-5 py-2 rounded-l-2xl text-xs font-black uppercase italic border-l-8 border-slate-900 shadow-xl",children:["Você abateu BOT_#",100+e.kills]})]})]}),ct.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none",children:ct.jsxs("div",{className:"relative w-12 h-12 flex items-center justify-center opacity-80",children:[ct.jsx("div",{className:"absolute w-[2px] h-3 bg-red-500 top-0"}),ct.jsx("div",{className:"absolute w-[2px] h-3 bg-red-500 bottom-0"}),ct.jsx("div",{className:"absolute w-3 h-[2px] bg-red-500 left-0"}),ct.jsx("div",{className:"absolute w-3 h-[2px] bg-red-500 right-0"}),ct.jsx("div",{className:"w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_10px_red]"})]})}),ct.jsxs("div",{className:"absolute bottom-32 left-1/2 -translate-x-1/2 w-[28rem]",children:[ct.jsxs("div",{className:"flex justify-between items-end text-[12px] font-black uppercase px-4 mb-2 drop-shadow-md",children:[ct.jsxs("span",{className:`flex items-center gap-2 ${H}`,children:[ct.jsx("i",{className:"fas fa-shield-alt"})," Armadura Nv.",e.armor.level]}),ct.jsx("span",{className:"text-2xl italic tracking-tighter",children:Math.ceil(e.armor.durability)})]}),ct.jsx("div",{className:"h-4 bg-black/80 rounded-full border-2 border-white/10 overflow-hidden p-[3px] shadow-lg mb-3",children:ct.jsx("div",{className:`h-full rounded-full transition-all duration-300 ${e.armor.level===3?"bg-gradient-to-r from-yellow-500 to-yellow-300":e.armor.level===2?"bg-gradient-to-r from-blue-500 to-blue-300":"bg-gradient-to-r from-green-500 to-green-300"}`,style:{width:`${e.armor.durability/e.armor.maxDurability*100}%`}})}),ct.jsxs("div",{className:"flex justify-between items-end text-[12px] font-black uppercase px-4 mb-3 drop-shadow-md",children:[ct.jsxs("span",{className:"text-red-400 flex items-center gap-2",children:[ct.jsx("i",{className:"fas fa-heart"})," Vida"]}),ct.jsxs("span",{className:"text-3xl italic tracking-tighter",children:[Math.ceil(e.health),"%"]})]}),ct.jsx("div",{className:"h-6 bg-black/80 rounded-full border-2 border-white/10 overflow-hidden p-[4px] shadow-[0_10px_40px_rgba(0,0,0,0.5)]",children:ct.jsx("div",{className:`h-full rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.3)] ${e.health<35?"bg-gradient-to-r from-red-600 via-red-500 to-red-400":"bg-gradient-to-r from-green-500 via-green-400 to-emerald-400"}`,style:{width:`${e.health}%`}})})]}),U&&ct.jsxs("div",{className:"absolute bottom-12 right-8 bg-black/70 backdrop-blur-xl px-6 py-4 rounded-3xl border-2 border-white/20 shadow-2xl",children:[ct.jsxs("div",{className:"flex items-center gap-4",children:[ct.jsx("i",{className:`fas ${z[U.type]} text-4xl text-yellow-400`}),ct.jsxs("div",{children:[ct.jsx("div",{className:"text-xs font-bold text-white/40 uppercase tracking-wider",children:U.name}),ct.jsxs("div",{className:"text-4xl font-black italic tracking-tight",children:[U.currentAmmo," ",ct.jsxs("span",{className:"text-xl text-white/40",children:["/ ",U.reserveAmmo]})]})]})]}),e.weapons.length>1&&ct.jsx("div",{className:"text-[10px] text-white/30 uppercase text-center mt-2 tracking-widest",children:"Arraste para trocar"})]}),y&&ct.jsx("div",{className:"absolute inset-0 pointer-events-auto bg-black/90 backdrop-blur-2xl z-[100] flex items-center justify-center p-4",children:ct.jsxs("div",{className:"w-full max-w-lg space-y-6 p-8 bg-slate-900/80 border border-white/10 rounded-3xl shadow-2xl relative overflow-hidden",children:[ct.jsx("h2",{className:"text-3xl font-black italic text-orange-500 uppercase tracking-tighter text-center",children:"CONFIGURAÇÕES"}),ct.jsxs("div",{className:"space-y-6",children:[ct.jsxs("div",{className:"space-y-2",children:[ct.jsxs("div",{className:"flex justify-between text-[10px] font-black text-white/60 uppercase tracking-widest",children:["Sensibilidade ",ct.jsx("span",{children:i.sens.toFixed(1)})]}),ct.jsx("input",{type:"range",min:"0.1",max:"5",step:"0.1",value:i.sens,onChange:O=>r({...i,sens:parseFloat(O.target.value)}),className:"w-full h-1.5 bg-white/20 rounded-full appearance-none cursor-pointer accent-cyan-500"})]}),ct.jsxs("div",{className:"space-y-2",children:[ct.jsxs("div",{className:"flex justify-between text-[10px] font-black text-white/60 uppercase tracking-widest",children:["Volume ",ct.jsx("span",{children:i.volume.toFixed(1)})]}),ct.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:i.volume,onChange:O=>r({...i,volume:parseFloat(O.target.value)}),className:"w-full h-1.5 bg-white/20 rounded-full appearance-none cursor-pointer accent-cyan-500"})]}),ct.jsxs("div",{className:"space-y-2",children:[ct.jsxs("div",{className:"flex justify-between text-[10px] font-black text-white/60 uppercase tracking-widest",children:["FOV ",ct.jsx("span",{children:i.fov})]}),ct.jsx("input",{type:"range",min:"60",max:"120",step:"1",value:i.fov,onChange:O=>r({...i,fov:parseInt(O.target.value)}),className:"w-full h-1.5 bg-white/20 rounded-full appearance-none cursor-pointer accent-cyan-500"})]}),ct.jsxs("div",{className:"space-y-2",children:[ct.jsxs("div",{className:"flex justify-between text-[10px] font-black text-white/60 uppercase tracking-widest",children:["Tamanho Botões ",ct.jsx("span",{children:i.btnScale.toFixed(1)})]}),ct.jsx("input",{type:"range",min:"0.5",max:"2",step:"0.1",value:i.btnScale,onChange:O=>r({...i,btnScale:parseFloat(O.target.value)}),className:"w-full h-1.5 bg-white/20 rounded-full appearance-none cursor-pointer accent-cyan-500"})]})]}),ct.jsx("div",{className:"h-px bg-white/10 my-4"}),ct.jsxs("div",{className:"space-y-4",children:[ct.jsx("h3",{className:"text-xl font-black italic text-white uppercase tracking-tighter text-center",children:"Nova Partida"}),ct.jsxs("div",{className:"space-y-2",children:[ct.jsx("label",{className:"text-[10px] font-black text-white/40 uppercase tracking-widest block",children:"Qtd. Bots"}),ct.jsx("input",{type:"number",value:i.botCount,onChange:O=>r({...i,botCount:Math.max(1,parseInt(O.target.value)||1)}),className:"w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white font-bold"})]}),ct.jsxs("div",{className:"space-y-2",children:[ct.jsx("label",{className:"text-[10px] font-black text-white/40 uppercase tracking-widest block",children:"Dificuldade"}),ct.jsxs("select",{value:i.difficulty,onChange:O=>r({...i,difficulty:O.target.value}),className:"w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white font-bold appearance-none",children:[ct.jsx("option",{value:"easy",children:"Easy"}),ct.jsx("option",{value:"normal",children:"Normal"}),ct.jsx("option",{value:"hard",children:"Hard"})]})]})]}),ct.jsxs("div",{className:"flex flex-col gap-3 pt-2",children:[ct.jsx("button",{className:"w-full py-4 bg-indigo-600 text-white font-black rounded-xl uppercase italic text-sm active:scale-95 transition-transform shadow-lg shadow-indigo-600/20",children:"MOVER BOTÕES"}),ct.jsx("button",{className:"w-full py-4 bg-rose-600 text-white font-black rounded-xl uppercase italic text-sm active:scale-95 transition-transform shadow-lg shadow-rose-600/20",children:"RESETAR HUD"}),ct.jsx("button",{className:"w-full py-4 bg-orange-500 text-slate-950 font-black rounded-xl uppercase italic text-xl active:scale-95 transition-transform shadow-lg shadow-orange-500/20",onClick:l,children:"CONTINUAR"})]}),ct.jsx("button",{className:"w-full pt-4 text-white/30 text-[10px] font-black uppercase tracking-[0.3em] hover:text-red-500 transition-colors",onClick:()=>window.location.reload(),children:"Desistir da Partida"})]})})]})},XT=({onStart:o,settings:e,setSettings:i})=>ct.jsxs("div",{className:"absolute inset-0 z-[200] flex flex-col items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 via-slate-950 to-black overflow-y-auto",children:[ct.jsxs("div",{className:"text-center mb-12 animate-in fade-in zoom-in duration-700",children:[ct.jsx("h1",{className:"text-7xl md:text-8xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 drop-shadow-[0_0_30px_rgba(251,191,36,0.3)]",children:"BATTLE CANAÃ"}),ct.jsx("p",{className:"text-blue-300 text-sm uppercase tracking-[0.3em] font-bold mt-2",children:"Remastered Edition"})]}),ct.jsxs("div",{className:"w-full max-w-sm bg-white/5 backdrop-blur-2xl p-8 rounded-[2rem] border border-white/10 shadow-2xl mb-12 space-y-6",children:[ct.jsxs("div",{className:"flex items-center gap-3 text-white/80 border-b border-white/10 pb-4",children:[ct.jsx("i",{className:"fas fa-sliders-h text-yellow-500"}),ct.jsx("span",{className:"font-bold text-sm uppercase tracking-widest",children:"Partida Rápida"})]}),ct.jsxs("div",{className:"space-y-4",children:[ct.jsxs("div",{className:"space-y-2",children:[ct.jsx("label",{className:"text-[10px] font-black text-white/40 uppercase",children:"Jogadores Bots"}),ct.jsx("input",{type:"range",min:"5",max:"50",step:"5",value:e.botCount,onChange:r=>i({...e,botCount:parseInt(r.target.value)}),className:"w-full"}),ct.jsxs("div",{className:"text-right text-xs font-bold text-yellow-500",children:[e.botCount," INIMIGOS"]})]}),ct.jsxs("div",{className:"space-y-2",children:[ct.jsx("label",{className:"text-[10px] font-black text-white/40 uppercase tracking-widest",children:"Dificuldade"}),ct.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","normal","hard"].map(r=>ct.jsx("button",{onClick:()=>i({...e,difficulty:r}),className:`py-2 rounded-xl text-[10px] font-black uppercase transition-all ${e.difficulty===r?"bg-yellow-500 text-slate-950":"bg-white/5 text-white/40"}`,children:r==="easy"?"Fácil":r==="normal"?"Médio":"Hard"},r))})]})]})]}),ct.jsx("button",{onClick:o,className:"group relative px-16 py-6 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-black text-3xl rounded-3xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(251,191,36,0.4)]",children:ct.jsxs("span",{className:"flex items-center gap-4 italic uppercase",children:[ct.jsx("i",{className:"fas fa-parachute-box animate-bounce"})," Cair na Praça"]})}),ct.jsxs("div",{className:"mt-12 flex gap-8 text-white/20 text-[10px] font-black uppercase tracking-[0.2em]",children:[ct.jsx("span",{children:"Versão 2.0.0"}),ct.jsx("span",{children:"Canaã Studio"}),ct.jsx("span",{children:"High Performance"})]})]}),WT=({stats:o,onRestart:e})=>{const i=o.alive===1;return ct.jsxs("div",{className:"absolute inset-0 z-[300] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md p-6",children:[ct.jsxs("div",{className:"text-center mb-12 animate-in fade-in slide-in-from-bottom duration-1000",children:[ct.jsx("h1",{className:`text-8xl font-black italic uppercase drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] ${i?"text-yellow-500":"text-red-600"}`,children:i?"BOOYAH!":"ELIMINADO"}),ct.jsx("p",{className:"text-white/40 font-bold uppercase tracking-[0.5em] mt-4",children:"A partida terminou"})]}),ct.jsxs("div",{className:"grid grid-cols-2 gap-6 w-full max-w-sm mb-16",children:[ct.jsxs("div",{className:"bg-white/5 p-6 rounded-[2rem] border border-white/10 text-center shadow-2xl",children:[ct.jsx("div",{className:"text-[10px] text-white/30 uppercase font-black tracking-widest mb-1",children:"Abates"}),ct.jsx("div",{className:"text-5xl font-black italic",children:o.kills})]}),ct.jsxs("div",{className:"bg-white/5 p-6 rounded-[2rem] border border-white/10 text-center shadow-2xl",children:[ct.jsx("div",{className:"text-[10px] text-white/30 uppercase font-black tracking-widest mb-1",children:"Rank"}),ct.jsxs("div",{className:"text-5xl font-black italic text-yellow-500",children:["#",o.alive]})]})]}),ct.jsx("button",{onClick:e,className:"px-16 py-6 bg-white text-slate-950 font-black rounded-3xl hover:bg-slate-200 transition-all hover:scale-105 active:scale-95 text-2xl uppercase italic tracking-tighter",children:"Tentar Novamente"})]})},qT=()=>{const[o,e]=ci.useState(Nn.START),[i,r]=ci.useState({sens:1,volume:.5,fov:75,btnScale:1,botCount:15,difficulty:"normal",graphicsQuality:"high"}),[l,u]=ci.useState({health:100,armor:{level:1,durability:50,maxDurability:50},kills:0,alive:16,zoneTimer:60,isGasActive:!1,currentWeapon:0,weapons:[],grenades:new Map([["explosive",{type:"explosive",damage:80,radius:15,count:3}],["smoke",{type:"smoke",damage:0,radius:10,count:2}]]),activePowerUps:[]}),d=ci.useRef({x:0,y:0,yaw:0,pitch:0,firing:!1,isSprinting:!1,isADS:!1}),h=p=>{u(v=>({...v,...p}))},m=p=>{e(Nn.GAMEOVER)};return ct.jsxs("div",{className:"relative w-full h-full bg-slate-950 overflow-hidden",children:[ct.jsx(VT,{gameState:o,settings:i,onUpdateStats:h,onGameOver:m,inputRef:d}),o===Nn.START&&ct.jsx(XT,{onStart:()=>e(Nn.PLAYING),settings:i,setSettings:r}),(o===Nn.PLAYING||o===Nn.PAUSED)&&ct.jsx(kT,{gameState:o,stats:l,settings:i,setSettings:r,onTogglePause:()=>e(p=>p===Nn.PAUSED?Nn.PLAYING:Nn.PAUSED),inputRef:d}),o===Nn.GAMEOVER&&ct.jsx(WT,{stats:l,onRestart:()=>window.location.reload()})]})},X0=document.getElementById("root");X0&&Px.createRoot(X0).render(ct.jsx(qT,{}));
