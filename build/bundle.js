(()=>{var ze=Object.defineProperty;var Ie=Object.getOwnPropertyDescriptor;var g=(i,e,t,r)=>{for(var n=r>1?void 0:r?Ie(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&ze(e,t,n),n};var J=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ce=Symbol(),de=new Map,te=class{constructor(e,t){if(this._$cssResult$=!0,t!==ce)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=de.get(this.cssText);return J&&e===void 0&&(de.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}},pe=i=>new te(typeof i=="string"?i:i+"",ce);var re=(i,e)=>{J?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let r=document.createElement("style"),n=window.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=t.cssText,i.appendChild(r)})},Z=J?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return pe(t)})(i):i;var ie,fe=window.trustedTypes,Be=fe?fe.emptyScript:"",me=window.reactiveElementPolyfillSupport,ne={toAttribute(i,e){switch(e){case Boolean:i=i?Be:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},ve=(i,e)=>e!==i&&(e==e||i==i),se={attribute:!0,type:String,converter:ne,reflect:!1,hasChanged:ve},w=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,r)=>{let n=this._$Eh(r,t);n!==void 0&&(this._$Eu.set(n,r),e.push(n))}),e}static createProperty(e,t=se){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let r=typeof e=="symbol"?Symbol():"__"+e,n=this.getPropertyDescriptor(e,r,t);n!==void 0&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(n){let s=this[e];this[t]=n,this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||se}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){let t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let n of r)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let n of r)t.unshift(Z(n))}else e!==void 0&&t.push(Z(e));return t}static _$Eh(e,t){let r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return re(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ES(e,t,r=se){var n,s;let o=this.constructor._$Eh(e,r);if(o!==void 0&&r.reflect===!0){let h=((s=(n=r.converter)===null||n===void 0?void 0:n.toAttribute)!==null&&s!==void 0?s:ne.toAttribute)(t,r.type);this._$Ei=e,h==null?this.removeAttribute(o):this.setAttribute(o,h),this._$Ei=null}}_$AK(e,t){var r,n,s;let o=this.constructor,h=o._$Eu.get(e);if(h!==void 0&&this._$Ei!==h){let a=o.getPropertyOptions(h),l=a.converter,p=(s=(n=(r=l)===null||r===void 0?void 0:r.fromAttribute)!==null&&n!==void 0?n:typeof l=="function"?l:null)!==null&&s!==void 0?s:ne.fromAttribute;this._$Ei=h,this[h]=p(t,a.type),this._$Ei=null}}requestUpdate(e,t,r){let n=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||ve)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Ei!==e&&(this._$E_===void 0&&(this._$E_=new Map),this._$E_.set(e,r))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((n,s)=>this[s]=n),this._$Et=void 0);let t=!1,r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$Eg)===null||e===void 0||e.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(r)):this._$EU()}catch(n){throw t=!1,this._$EU(),n}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostUpdated)===null||n===void 0?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$E_!==void 0&&(this._$E_.forEach((t,r)=>this._$ES(r,this[r],t)),this._$E_=void 0),this._$EU()}updated(e){}firstUpdated(e){}};w.finalized=!0,w.elementProperties=new Map,w.elementStyles=[],w.shadowRootOptions={mode:"open"},me==null||me({ReactiveElement:w}),((ie=globalThis.reactiveElementVersions)!==null&&ie!==void 0?ie:globalThis.reactiveElementVersions=[]).push("1.0.2");var oe,O=globalThis.trustedTypes,ge=O?O.createPolicy("lit-html",{createHTML:i=>i}):void 0,P=`lit$${(Math.random()+"").slice(9)}$`,ye="?"+P,Fe=`<${ye}>`,M=document,B=(i="")=>M.createComment(i),F=i=>i===null||typeof i!="object"&&typeof i!="function",$e=Array.isArray,We=i=>{var e;return $e(i)||typeof((e=i)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_e=/-->/g,Ae=/>/g,T=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Ee=/'/g,xe=/"/g,be=/^(?:script|style|textarea)$/i,Se=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),y=Se(1),at=Se(2),U=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),we=new WeakMap,Pe=(i,e,t)=>{var r,n;let s=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:e,o=s._$litPart$;if(o===void 0){let h=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:null;s._$litPart$=o=new D(e.insertBefore(B(),h),h,void 0,t??{})}return o._$AI(i),o},j=M.createTreeWalker(M,129,null,!1),Ve=(i,e)=>{let t=i.length-1,r=[],n,s=e===2?"<svg>":"",o=W;for(let a=0;a<t;a++){let l=i[a],p,u,d=-1,c=0;for(;c<l.length&&(o.lastIndex=c,u=o.exec(l),u!==null);)c=o.lastIndex,o===W?u[1]==="!--"?o=_e:u[1]!==void 0?o=Ae:u[2]!==void 0?(be.test(u[2])&&(n=RegExp("</"+u[2],"g")),o=T):u[3]!==void 0&&(o=T):o===T?u[0]===">"?(o=n??W,d=-1):u[1]===void 0?d=-2:(d=o.lastIndex-u[2].length,p=u[1],o=u[3]===void 0?T:u[3]==='"'?xe:Ee):o===xe||o===Ee?o=T:o===_e||o===Ae?o=W:(o=T,n=void 0);let v=o===T&&i[a+1].startsWith("/>")?" ":"";s+=o===W?l+Fe:d>=0?(r.push(p),l.slice(0,d)+"$lit$"+l.slice(d)+P+v):l+P+(d===-2?(r.push(void 0),a):v)}let h=s+(i[t]||"<?>")+(e===2?"</svg>":"");return[ge!==void 0?ge.createHTML(h):h,r]},L=class{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let s=0,o=0,h=e.length-1,a=this.parts,[l,p]=Ve(e,t);if(this.el=L.createElement(l,r),j.currentNode=this.el.content,t===2){let u=this.el.content,d=u.firstChild;d.remove(),u.append(...d.childNodes)}for(;(n=j.nextNode())!==null&&a.length<h;){if(n.nodeType===1){if(n.hasAttributes()){let u=[];for(let d of n.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(P)){let c=p[o++];if(u.push(d),c!==void 0){let v=n.getAttribute(c.toLowerCase()+"$lit$").split(P),$=/([.?@])?(.*)/.exec(c);a.push({type:1,index:s,name:$[2],strings:v,ctor:$[1]==="."?Re:$[1]==="?"?Te:$[1]==="@"?Ue:V})}else a.push({type:6,index:s})}for(let d of u)n.removeAttribute(d)}if(be.test(n.tagName)){let u=n.textContent.split(P),d=u.length-1;if(d>0){n.textContent=O?O.emptyScript:"";for(let c=0;c<d;c++)n.append(u[c],B()),j.nextNode(),a.push({type:2,index:++s});n.append(u[d],B())}}}else if(n.nodeType===8)if(n.data===ye)a.push({type:2,index:s});else{let u=-1;for(;(u=n.data.indexOf(P,u+1))!==-1;)a.push({type:7,index:s}),u+=P.length-1}s++}}static createElement(e,t){let r=M.createElement("template");return r.innerHTML=e,r}};function q(i,e,t=i,r){var n,s,o,h;if(e===U)return e;let a=r!==void 0?(n=t._$Cl)===null||n===void 0?void 0:n[r]:t._$Cu,l=F(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(i),a._$AT(i,t,r)),r!==void 0?((o=(h=t)._$Cl)!==null&&o!==void 0?o:h._$Cl=[])[r]=a:t._$Cu=a),a!==void 0&&(e=q(i,a._$AS(i,e.values),a,r)),e}var Ce=class{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;let{el:{content:r},parts:n}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:M).importNode(r,!0);j.currentNode=s;let o=j.nextNode(),h=0,a=0,l=n[0];for(;l!==void 0;){if(h===l.index){let p;l.type===2?p=new D(o,o.nextSibling,this,e):l.type===1?p=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(p=new Ne(o,this,e)),this.v.push(p),l=n[++a]}h!==(l==null?void 0:l.index)&&(o=j.nextNode(),h++)}return s}m(e){let t=0;for(let r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},D=class{constructor(e,t,r,n){var s;this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cg=(s=n==null?void 0:n.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=q(this,e,t),F(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==U&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.S(e):We(e)?this.M(e):this.$(e)}A(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}S(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==m&&F(this._$AH)?this._$AA.nextSibling.data=e:this.S(M.createTextNode(e)),this._$AH=e}T(e){var t;let{values:r,_$litType$:n}=e,s=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=L.createElement(n.h,this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.m(r);else{let o=new Ce(s,this),h=o.p(this.options);o.m(r),this.S(h),this._$AH=o}}_$AC(e){let t=we.get(e.strings);return t===void 0&&we.set(e.strings,t=new L(e)),t}M(e){$e(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,n=0;for(let s of e)n===t.length?t.push(r=new D(this.A(B()),this.A(B()),this,this.options)):r=t[n],r._$AI(s),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){let n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},V=class{constructor(e,t,r,n,s){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=m}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,n){let s=this.strings,o=!1;if(s===void 0)e=q(this,e,t,0),o=!F(e)||e!==this._$AH&&e!==U,o&&(this._$AH=e);else{let h=e,a,l;for(e=s[0],a=0;a<s.length-1;a++)l=q(this,h[r+a],t,a),l===U&&(l=this._$AH[a]),o||(o=!F(l)||l!==this._$AH[a]),l===m?e=m:e!==m&&(e+=(l??"")+s[a+1]),this._$AH[a]=l}o&&!n&&this.k(e)}k(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Re=class extends V{constructor(){super(...arguments),this.type=3}k(e){this.element[this.name]=e===m?void 0:e}},Ke=O?O.emptyScript:"",Te=class extends V{constructor(){super(...arguments),this.type=4}k(e){e&&e!==m?this.element.setAttribute(this.name,Ke):this.element.removeAttribute(this.name)}},Ue=class extends V{constructor(e,t,r,n,s){super(e,t,r,n,s),this.type=5}_$AI(e,t=this){var r;if((e=(r=q(this,e,t,0))!==null&&r!==void 0?r:m)===U)return;let n=this._$AH,s=e===m&&n!==m||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==m&&(n===m||s);s&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},Ne=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){q(this,e)}};var He=window.litHtmlPolyfillSupport;He==null||He(L,D),((oe=globalThis.litHtmlVersions)!==null&&oe!==void 0?oe:globalThis.litHtmlVersions=[]).push("2.0.2");var ae,le;var N=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;let r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Pe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return U}};N.finalized=!0,N._$litElement$=!0,(ae=globalThis.litElementHydrateSupport)===null||ae===void 0||ae.call(globalThis,{LitElement:N});var Oe=globalThis.litElementPolyfillSupport;Oe==null||Oe({LitElement:N});((le=globalThis.litElementVersions)!==null&&le!==void 0?le:globalThis.litElementVersions=[]).push("3.0.2");var A=i=>e=>typeof e=="function"?((t,r)=>(window.customElements.define(t,r),r))(i,e):((t,r)=>{let{kind:n,elements:s}=r;return{kind:n,elements:s,finisher(o){window.customElements.define(t,o)}}})(i,e);var Qe=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}};function E(i){return(e,t)=>t!==void 0?((r,n,s)=>{n.constructor.createProperty(s,r)})(i,e,t):Qe(i,e)}var x=class extends N{constructor(){super(...arguments);this.createRenderRoot=()=>this}};var C=class{static get(e){return e in this.store?this.store[e]:!1}static set(e,t){this.store[e]=t}static print(e=!1){console.log(e?JSON.stringify(this.store):this.store)}};C.store={};var H=class{constructor(){let e={...C.get("page"),hasParam:t=>t in e.params,hasQuery:t=>t in e.query};return e}static getQuery(e,t){let r=C.get("page");return console.log(r),e in r.query?r.query[e]:t}static getParam(e,t="default"){let r=C.get("page");return e in r.params?r.params[e]:t}};var Me=[{path:"/",title:"Home",component:y`<home-page></home-page>`},{path:"/hello/:name",title:async()=>`Hello 2 ${H.getParam("name")}`,component:y`<hello-name></hello-name>`}];function Je(i){for(var e=[],t=0;t<i.length;){var r=i[t];if(r==="*"||r==="+"||r==="?"){e.push({type:"MODIFIER",index:t,value:i[t++]});continue}if(r==="\\"){e.push({type:"ESCAPED_CHAR",index:t++,value:i[t++]});continue}if(r==="{"){e.push({type:"OPEN",index:t,value:i[t++]});continue}if(r==="}"){e.push({type:"CLOSE",index:t,value:i[t++]});continue}if(r===":"){for(var n="",s=t+1;s<i.length;){var o=i.charCodeAt(s);if(o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||o===95){n+=i[s++];continue}break}if(!n)throw new TypeError("Missing parameter name at "+t);e.push({type:"NAME",index:t,value:n}),t=s;continue}if(r==="("){var h=1,a="",s=t+1;if(i[s]==="?")throw new TypeError('Pattern cannot start with "?" at '+s);for(;s<i.length;){if(i[s]==="\\"){a+=i[s++]+i[s++];continue}if(i[s]===")"){if(h--,h===0){s++;break}}else if(i[s]==="("&&(h++,i[s+1]!=="?"))throw new TypeError("Capturing groups are not allowed at "+s);a+=i[s++]}if(h)throw new TypeError("Unbalanced pattern at "+t);if(!a)throw new TypeError("Missing pattern at "+t);e.push({type:"PATTERN",index:t,value:a}),t=s;continue}e.push({type:"CHAR",index:t,value:i[t++]})}return e.push({type:"END",index:t,value:""}),e}function Ze(i,e){e===void 0&&(e={});for(var t=Je(i),r=e.prefixes,n=r===void 0?"./":r,s="[^"+z(e.delimiter||"/#?")+"]+?",o=[],h=0,a=0,l="",p=function(_){if(a<t.length&&t[a].type===_)return t[a++].value},u=function(_){var I=p(_);if(I!==void 0)return I;var ue=t[a],qe=ue.type,De=ue.index;throw new TypeError("Unexpected "+qe+" at "+De+", expected "+_)},d=function(){for(var _="",I;I=p("CHAR")||p("ESCAPED_CHAR");)_+=I;return _};a<t.length;){var c=p("CHAR"),v=p("NAME"),$=p("PATTERN");if(v||$){var f=c||"";n.indexOf(f)===-1&&(l+=f,f=""),l&&(o.push(l),l=""),o.push({name:v||h++,prefix:f,suffix:"",pattern:$||s,modifier:p("MODIFIER")||""});continue}var b=c||p("ESCAPED_CHAR");if(b){l+=b;continue}l&&(o.push(l),l="");var R=p("OPEN");if(R){var f=d(),Q=p("NAME")||"",S=p("PATTERN")||"",ee=d();u("CLOSE"),o.push({name:Q||(S?h++:""),pattern:Q&&!S?s:S,prefix:f,suffix:ee,modifier:p("MODIFIER")||""});continue}u("END")}return o}function je(i,e){var t=[],r=X(i,t,e);return Ge(r,t,e)}function Ge(i,e,t){t===void 0&&(t={});var r=t.decode,n=r===void 0?function(s){return s}:r;return function(s){var o=i.exec(s);if(!o)return!1;for(var h=o[0],a=o.index,l=Object.create(null),p=function(d){if(o[d]===void 0)return"continue";var c=e[d-1];c.modifier==="*"||c.modifier==="+"?l[c.name]=o[d].split(c.prefix+c.suffix).map(function(v){return n(v,c)}):l[c.name]=n(o[d],c)},u=1;u<o.length;u++)p(u);return{path:h,index:a,params:l}}}function z(i){return i.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Le(i){return i&&i.sensitive?"":"i"}function Xe(i,e){if(!e)return i;for(var t=/\((?:\?<(.*?)>)?(?!\?)/g,r=0,n=t.exec(i.source);n;)e.push({name:n[1]||r++,prefix:"",suffix:"",modifier:"",pattern:""}),n=t.exec(i.source);return i}function Ye(i,e,t){var r=i.map(function(n){return X(n,e,t).source});return new RegExp("(?:"+r.join("|")+")",Le(t))}function ke(i,e,t){return et(Ze(i,t),e,t)}function et(i,e,t){t===void 0&&(t={});for(var r=t.strict,n=r===void 0?!1:r,s=t.start,o=s===void 0?!0:s,h=t.end,a=h===void 0?!0:h,l=t.encode,p=l===void 0?function(_){return _}:l,u="["+z(t.endsWith||"")+"]|$",d="["+z(t.delimiter||"/#?")+"]",c=o?"^":"",v=0,$=i;v<$.length;v++){var f=$[v];if(typeof f=="string")c+=z(p(f));else{var b=z(p(f.prefix)),R=z(p(f.suffix));if(f.pattern)if(e&&e.push(f),b||R)if(f.modifier==="+"||f.modifier==="*"){var Q=f.modifier==="*"?"?":"";c+="(?:"+b+"((?:"+f.pattern+")(?:"+R+b+"(?:"+f.pattern+"))*)"+R+")"+Q}else c+="(?:"+b+"("+f.pattern+")"+R+")"+f.modifier;else c+="("+f.pattern+")"+f.modifier;else c+="(?:"+b+R+")"+f.modifier}}if(a)n||(c+=d+"?"),c+=t.endsWith?"(?="+u+")":"$";else{var S=i[i.length-1],ee=typeof S=="string"?d.indexOf(S[S.length-1])>-1:S===void 0;n||(c+="(?:"+d+"(?="+u+"))?"),ee||(c+="(?="+d+"|"+u+")")}return new RegExp(c,Le(t))}function X(i,e,t){return i instanceof RegExp?Xe(i,e):Array.isArray(i)?Ye(i,e,t):ke(i,e,t)}var K=class extends x{constructor(){super(...arguments);this.routes=Me;this.currentPath=this.getPath()}getPath(){return window.location.pathname}setPageTitle(e){e()instanceof Promise?e().then(t=>document.title=t):document.title=e()}router(e){addEventListener("location-change",()=>{this.currentPath=this.getPath()}),addEventListener("popstate",()=>{this.currentPath=this.getPath()});let t=null;for(let r of this.routes){if(!("component"in r))return console.error(`El path: ${r.path} no tiene un componente definido`);let n=je(r.path);if(X(r.path).test(e)){let s=new URLSearchParams(window.location.search),o={};for(let a of s)o[a[0]]=a[1];let h=n(e);h.query=o,C.set("page",h),t=r.component,typeof r.title=="function"?this.setPageTitle(r.title):document.title=r.title}}if(t)return t;return y`<error-404></error-404>`;}render(){return this.router(this.currentPath)}};g([E({type:Array})],K.prototype,"routes",2),g([E({type:String})],K.prototype,"currentPath",2),K=g([A("main-app")],K);var Y=class extends x{constructor(){super(...arguments);this.name=H.getQuery("name","World")}render(){return y`<h1>Hello ${this.name}</h1>`}};g([E()],Y.prototype,"name",2),Y=g([A("home-page")],Y);var he=class extends x{render(){return y`<h1>Error 404</h1>`}};he=g([A("error-404")],he);var k=class extends x{constructor(){super(...arguments);this.name=H.getParam("name")}render(){return y`hello ${this.name}`}};g([E({type:String})],k.prototype,"name",2),k=g([A("hello-name")],k);})();
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
//! page not found
//! si no tinene un componente designado, se marca como error
//# sourceMappingURL=bundle.js.map
