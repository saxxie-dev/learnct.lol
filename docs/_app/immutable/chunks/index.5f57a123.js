function $(){}function F(t,n){for(const e in n)t[e]=n[e];return t}function k(t){return t()}function C(){return Object.create(null)}function g(t){t.forEach(k)}function B(t){return typeof t=="function"}function lt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function L(t){return Object.keys(t).length===0}function G(t,...n){if(t==null)return $;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ot(t,n,e){t.$$.on_destroy.push(G(n,e))}function ut(t,n,e,i){if(t){const r=H(t,n,e,i);return t[0](r)}}function H(t,n,e,i){return t[1]&&i?F(e.ctx.slice(),t[1](i(n))):e.ctx}function st(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const s=[],c=Math.max(n.dirty.length,r.length);for(let u=0;u<c;u+=1)s[u]=n.dirty[u]|r[u];return s}return n.dirty|r}return n.dirty}function ft(t,n,e,i,r,s){if(r){const c=H(n,e,i,s);t.p(c,r)}}function at(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function dt(t){return t??""}let w=!1;function I(){w=!0}function J(){w=!1}function K(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let o=0;o<n.length;o++){const a=n[o];a.claim_order!==void 0&&l.push(a)}n=l}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const o=n[l].claim_order,a=(r>0&&n[e[r]].claim_order<=o?r+1:K(1,r,x=>n[e[x]].claim_order,o))-1;i[l]=e[a]+1;const f=a+1;e[f]=l,r=Math.max(f,r)}const s=[],c=[];let u=n.length-1;for(let l=e[r]+1;l!=0;l=i[l-1]){for(s.push(n[l-1]);u>=l;u--)c.push(n[u]);u--}for(;u>=0;u--)c.push(n[u]);s.reverse(),c.sort((l,o)=>l.claim_order-o.claim_order);for(let l=0,o=0;l<c.length;l++){for(;o<s.length&&c[l].claim_order>=s[o].claim_order;)o++;const a=o<s.length?s[o]:null;t.insertBefore(c[l],a)}}function W(t,n){if(w){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function _t(t,n,e){w&&!e?W(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function Q(t){t.parentNode&&t.parentNode.removeChild(t)}function ht(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function U(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function mt(){return v(" ")}function pt(){return v("")}function yt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function V(t){return Array.from(t.childNodes)}function X(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,n,e,i,r=!1){X(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(n(u)){const l=e(u);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(n(u)){const l=e(u);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function Y(t,n,e,i){return O(t,r=>r.nodeName===n,r=>{const s=[];for(let c=0;c<r.attributes.length;c++){const u=r.attributes[c];e[u.name]||s.push(u.name)}s.forEach(c=>r.removeAttribute(c))},()=>i(n))}function gt(t,n,e){return Y(t,n,e,U)}function Z(t,n){return O(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>v(n),!0)}function xt(t){return Z(t," ")}function bt(t,n){n=""+n,t.data!==n&&(t.data=n)}function $t(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function wt(t,n){const e=[];let i=0;for(const r of n.childNodes)if(r.nodeType===8){const s=r.textContent.trim();s===`HEAD_${t}_END`?(i-=1,e.push(r)):s===`HEAD_${t}_START`&&(i+=1,e.push(r))}else i>0&&e.push(r);return e}function Et(t,n){return new t(n)}let y;function p(t){y=t}function S(){if(!y)throw new Error("Function called outside component initialization");return y}function Nt(t){S().$$.on_mount.push(t)}function At(t){S().$$.after_update.push(t)}function vt(t){S().$$.on_destroy.push(t)}const h=[],D=[];let m=[];const M=[],P=Promise.resolve();let N=!1;function q(){N||(N=!0,P.then(z))}function St(){return q(),P}function A(t){m.push(t)}const E=new Set;let _=0;function z(){if(_!==0)return;const t=y;do{try{for(;_<h.length;){const n=h[_];_++,p(n),tt(n.$$)}}catch(n){throw h.length=0,_=0,n}for(p(null),h.length=0,_=0;D.length;)D.pop()();for(let n=0;n<m.length;n+=1){const e=m[n];E.has(e)||(E.add(e),e())}m.length=0}while(h.length);for(;M.length;)M.pop()();N=!1,E.clear(),p(t)}function tt(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}function nt(t){const n=[],e=[];m.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),m=n}const b=new Set;let d;function jt(){d={r:0,c:[],p:d}}function Tt(){d.r||g(d.c),d=d.p}function et(t,n){t&&t.i&&(b.delete(t),t.i(n))}function Ct(t,n,e,i){if(t&&t.o){if(b.has(t))return;b.add(t),d.c.push(()=>{b.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}const Dt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Mt(t){t&&t.c()}function kt(t,n){t&&t.l(n)}function it(t,n,e,i){const{fragment:r,after_update:s}=t.$$;r&&r.m(n,e),i||A(()=>{const c=t.$$.on_mount.map(k).filter(B);t.$$.on_destroy?t.$$.on_destroy.push(...c):g(c),t.$$.on_mount=[]}),s.forEach(A)}function rt(t,n){const e=t.$$;e.fragment!==null&&(nt(e.after_update),g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ct(t,n){t.$$.dirty[0]===-1&&(h.push(t),q(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Bt(t,n,e,i,r,s,c,u=[-1]){const l=y;p(t);const o=t.$$={fragment:null,ctx:[],props:s,update:$,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(l?l.$$.context:[])),callbacks:C(),dirty:u,skip_bound:!1,root:n.target||l.$$.root};c&&c(o.root);let a=!1;if(o.ctx=e?e(t,n.props||{},(f,x,...j)=>{const T=j.length?j[0]:x;return o.ctx&&r(o.ctx[f],o.ctx[f]=T)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](T),a&&ct(t,f)),x}):[],o.update(),a=!0,g(o.before_update),o.fragment=i?i(o.ctx):!1,n.target){if(n.hydrate){I();const f=V(n.target);o.fragment&&o.fragment.l(f),f.forEach(Q)}else o.fragment&&o.fragment.c();n.intro&&et(t.$$.fragment),it(t,n.target,n.anchor,n.customElement),J(),z()}p(l)}class Ht{$destroy(){rt(this,1),this.$destroy=$}$on(n,e){if(!B(e))return $;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!L(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{it as A,rt as B,W as C,$ as D,ut as E,ft as F,at as G,st as H,ot as I,ht as J,vt as K,dt as L,wt as M,Dt as N,Ht as S,mt as a,_t as b,xt as c,Ct as d,pt as e,Tt as f,et as g,Q as h,Bt as i,At as j,U as k,gt as l,V as m,yt as n,Nt as o,$t as p,v as q,Z as r,lt as s,St as t,bt as u,jt as v,D as w,Et as x,Mt as y,kt as z};
