import{S as ce,i as he,s as de,a as x,k as h,q as p,M as fe,h as o,c as T,l as d,m as f,r as v,n as c,b as ee,C as e,D as ae,J as ue}from"../chunks/index.ac08d18a.js";import{j as _}from"../chunks/books.c0403d97.js";function ne(i,t,r){const a=i.slice();return a[1]=t[r],a}function pe(i){let t,r,a=_[i[1]].stars+"",n,j;return{c(){t=h("a"),r=p("⭐"),n=p(a),j=p("/5"),this.h()},l(y){t=d(y,"A",{class:!0,href:!0});var b=f(t);r=v(b,"⭐"),n=v(b,a),j=v(b,"/5"),b.forEach(o),this.h()},h(){c(t,"class","hover:dark:bg-slate-800 hover:bg-stone-400 pr-4 pl-1 py-1 rounded"),c(t,"href",_[i[1]].grUrl)},m(y,b){ee(y,t,b),e(t,r),e(t,n),e(t,j)},p:ae,d(y){y&&o(t)}}}function ve(i){let t,r;return{c(){t=h("a"),r=p("Find it on Amazon⏵"),this.h()},l(a){t=d(a,"A",{href:!0,class:!0});var n=f(t);r=v(n,"Find it on Amazon⏵"),n.forEach(o),this.h()},h(){c(t,"href",_[i[1]].amznUrl),c(t,"class",i[0])},m(a,n){ee(a,t,n),e(t,r)},p:ae,d(a){a&&o(t)}}}function ge(i){let t,r;return{c(){t=h("a"),r=p("Free PDF⏵"),this.h()},l(a){t=d(a,"A",{href:!0,class:!0});var n=f(t);r=v(n,"Free PDF⏵"),n.forEach(o),this.h()},h(){c(t,"href",_[i[1]].pdfUrl),c(t,"class",i[0])},m(a,n){ee(a,t,n),e(t,r)},p:ae,d(a){a&&o(t)}}}function ie(i){let t,r,a,n,j=_[i[1]].name+"",y,b,C,E,Q=_[i[1]].author+"",z,R,W,A,g,P,O,N=i[1]+"",X,Y,$,S,Z=(_[i[1]].comment??"")+"",B,F,U,V,J,k=_[i[1]].stars&&pe(i),w=_[i[1]].amznUrl&&ve(i),m=_[i[1]].pdfUrl&&ge(i);return{c(){t=h("section"),r=h("div"),a=h("h2"),n=h("a"),y=p(j),b=x(),C=h("div"),E=h("span"),z=p(Q),R=x(),k&&k.c(),W=x(),A=h("div"),g=h("p"),P=p("For a "),O=h("b"),X=p(N),Y=p(" looking to learn about Categories."),$=x(),S=h("p"),B=p(Z),F=x(),U=h("footer"),w&&w.c(),V=x(),m&&m.c(),J=x(),this.h()},l(l){t=d(l,"SECTION",{class:!0});var s=f(t);r=d(s,"DIV",{class:!0});var I=f(r);a=d(I,"H2",{id:!0,class:!0});var u=f(a);n=d(u,"A",{href:!0,class:!0});var D=f(n);y=v(D,j),D.forEach(o),u.forEach(o),b=T(I),C=d(I,"DIV",{class:!0});var M=f(C);E=d(M,"SPAN",{});var te=f(E);z=v(te,Q),te.forEach(o),R=T(M),k&&k.l(M),M.forEach(o),I.forEach(o),W=T(s),A=d(s,"DIV",{class:!0});var H=f(A);g=d(H,"P",{class:!0});var G=f(g);P=v(G,"For a "),O=d(G,"B",{});var q=f(O);X=v(q,N),q.forEach(o),Y=v(G," looking to learn about Categories."),G.forEach(o),$=T(H),S=d(H,"P",{});var K=f(S);B=v(K,Z),K.forEach(o),H.forEach(o),F=T(s),U=d(s,"FOOTER",{class:!0});var L=f(U);w&&w.l(L),V=T(L),m&&m.l(L),L.forEach(o),J=T(s),s.forEach(o),this.h()},h(){c(n,"href",_[i[1]].amznUrl??_[i[1]].pdfUrl),c(n,"class","hover:underline"),c(a,"id",i[1]),c(a,"class","text-xl"),c(C,"class","dark:text-slate-400 text-stone-700 gap-8"),c(r,"class","px-8 py-4"),c(g,"class","pb-2"),c(A,"class","px-8 pb-8 pt-0"),c(U,"class","bg-stone-300 dark:bg-slate-800 divide-x dark:divide-slate-900 divide-stone-50 flex border-t cursor-pointer border-t-stone-300 dark:border-t-slate-800"),c(t,"class","text-left border w-full max-w-2xl bg-stone-50 border-stone-300 dark:bg-slate-900 dark:border-slate-800 rounded-lg overflow-hidden")},m(l,s){ee(l,t,s),e(t,r),e(r,a),e(a,n),e(n,y),e(r,b),e(r,C),e(C,E),e(E,z),e(C,R),k&&k.m(C,null),e(t,W),e(t,A),e(A,g),e(g,P),e(g,O),e(O,X),e(g,Y),e(A,$),e(A,S),e(S,B),e(t,F),e(t,U),w&&w.m(U,null),e(U,V),m&&m.m(U,null),e(t,J)},p(l,s){_[l[1]].stars&&k.p(l,s),_[l[1]].amznUrl&&w.p(l,s),_[l[1]].pdfUrl&&m.p(l,s)},d(l){l&&o(t),k&&k.d(),w&&w.d(),m&&m.d()}}}function _e(i){let t,r,a,n,j,y,b,C,E,Q,z,R,W,A,g,P,O,N,X,Y,$,S,Z,B,F,U,V,J,k,w,m=Object.keys(_),l=[];for(let s=0;s<m.length;s+=1)l[s]=ie(ne(i,m,s));return{c(){t=x(),r=h("section"),a=h("div"),n=h("h1"),j=p("Category Theory for "),y=h("span"),b=p("Everyone"),C=x(),E=h("aside"),Q=p("Category Theory is a 🔥"),z=h("span"),R=p("hot"),W=p("🔥 new nonsense language for communicating across various fields of math, science, philosophy, and more. Here's how you can get in on the action"),A=x(),g=h("div"),P=h("p"),O=p("Though there are tons of great "),N=h("a"),X=p("general introductions"),Y=p(` to category theory out there,
        the field is extremely diverse and interdisciplinary. You can - and should - bring your viewpoint and experience
        with you into the wild worlds of objects and morphisms.`),$=x(),S=h("p"),Z=p(`Whatever career or interests you have, there's a decent chance
        someone has already written about category theory in a way that resonates with your existing knowledge.`),B=x(),F=h("p"),U=p("This page is an extremely loosely curated list of these domain-specific "),V=h("i"),J=p("Category Theory for X"),k=p(` -style 
        books, papers, and presentations.`),w=x();for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){fe("svelte-14vjb27",document.head).forEach(o),t=T(s),r=d(s,"SECTION",{class:!0});var u=f(r);a=d(u,"DIV",{class:!0});var D=f(a);n=d(D,"H1",{class:!0});var M=f(n);j=v(M,"Category Theory for "),y=d(M,"SPAN",{class:!0});var te=f(y);b=v(te,"Everyone"),te.forEach(o),M.forEach(o),C=T(D),E=d(D,"ASIDE",{class:!0});var H=f(E);Q=v(H,"Category Theory is a 🔥"),z=d(H,"SPAN",{class:!0});var G=f(z);R=v(G,"hot"),G.forEach(o),W=v(H,"🔥 new nonsense language for communicating across various fields of math, science, philosophy, and more. Here's how you can get in on the action"),H.forEach(o),A=T(D),g=d(D,"DIV",{class:!0});var q=f(g);P=d(q,"P",{class:!0});var K=f(P);O=v(K,"Though there are tons of great "),N=d(K,"A",{class:!0,href:!0});var L=f(N);X=v(L,"general introductions"),L.forEach(o),Y=v(K,` to category theory out there,
        the field is extremely diverse and interdisciplinary. You can - and should - bring your viewpoint and experience
        with you into the wild worlds of objects and morphisms.`),K.forEach(o),$=T(q),S=d(q,"P",{class:!0});var oe=f(S);Z=v(oe,`Whatever career or interests you have, there's a decent chance
        someone has already written about category theory in a way that resonates with your existing knowledge.`),oe.forEach(o),B=T(q),F=d(q,"P",{});var se=f(F);U=v(se,"This page is an extremely loosely curated list of these domain-specific "),V=d(se,"I",{});var le=f(V);J=v(le,"Category Theory for X"),le.forEach(o),k=v(se,` -style 
        books, papers, and presentations.`),se.forEach(o),q.forEach(o),D.forEach(o),w=T(u);for(let re=0;re<l.length;re+=1)l[re].l(u);u.forEach(o),this.h()},h(){document.title="Category Theory Resources",c(y,"class","underline"),c(n,"class","text-4xl"),c(z,"class","text-orange-500"),c(E,"class","text-stone-700 dark:text-slate-400 py-8 text-lg"),c(N,"class","underline cursor-pointer"),c(N,"href","https://amzn.to/3UygfVN"),c(P,"class","pb-8"),c(S,"class","pb-8"),c(g,"class","text-lg dark:text-slate-300 text-stone-800"),c(a,"class","w-full max-w-3xl pt-8 px-8"),c(r,"class","flex-grow flex flex-col items-center gap-8 font-sans p-2")},m(s,I){ee(s,t,I),ee(s,r,I),e(r,a),e(a,n),e(n,j),e(n,y),e(y,b),e(a,C),e(a,E),e(E,Q),e(E,z),e(z,R),e(E,W),e(a,A),e(a,g),e(g,P),e(P,O),e(P,N),e(N,X),e(P,Y),e(g,$),e(g,S),e(S,Z),e(g,B),e(g,F),e(F,U),e(F,V),e(V,J),e(F,k),e(r,w);for(let u=0;u<l.length;u+=1)l[u]&&l[u].m(r,null)},p(s,[I]){if(I&1){m=Object.keys(_);let u;for(u=0;u<m.length;u+=1){const D=ne(s,m,u);l[u]?l[u].p(D,I):(l[u]=ie(D),l[u].c(),l[u].m(r,null))}for(;u<l.length;u+=1)l[u].d(1);l.length=m.length}},i:ae,o:ae,d(s){s&&o(t),s&&o(r),ue(l,s)}}}function ye(i){return[`text-center p-1 flex-grow
    hover:dark:bg-slate-900 hover:bg-stone-50 transition-all`]}class Ee extends ce{constructor(t){super(),he(this,t,ye,_e,de,{})}}export{Ee as default};
