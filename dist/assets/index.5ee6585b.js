import{j as L,u as M,r as l,R as A,a as O,B as I,b as B,c as q}from"./vendor.37ae456d.js";const Z=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))p(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&p(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function p(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}};Z();const e=L.exports.jsx,a=L.exports.jsxs,j=({title:c,href:t})=>{const o=M();return e("header",{className:"header",children:e("button",{onClick:()=>{o(t)},children:c})})};const F=({color:c})=>a("div",{className:"pokeball-vector",children:[e("svg",{width:"70",height:"32",viewBox:"0 0 70 32",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M12.2112 31.6494C9.3279 31.6494 6.44461 31.6494 3.56131 31.6494C0.709116 31.6494 0.629148 31.6317 1.18892 28.8594C4.01447 14.8917 12.1668 5.44653 25.8236 1.38593C45.8511 -4.5717 66.6651 9.36053 69.3129 30.0989C69.4551 31.214 69.3262 31.6894 68.0378 31.6761C61.978 31.6183 55.9138 31.6272 49.8495 31.6716C48.7566 31.6805 48.3923 31.254 48.0147 30.2678C45.9178 24.7766 41.3685 21.5646 35.8907 21.5557C30.2884 21.5468 25.868 24.7011 23.6689 30.4055C23.2779 31.4184 22.7714 31.6983 21.7452 31.6761C18.5687 31.6094 15.3877 31.6494 12.2112 31.6494Z",fill:"white",className:c})}),e("svg",{width:"70",height:"32",viewBox:"0 0 70 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M12.1445 0.327123C15.25 0.327123 18.3554 0.389321 21.4564 0.296025C22.6692 0.260483 23.2335 0.615898 23.6777 1.78876C25.748 7.23993 30.3373 10.4298 35.8418 10.4076C41.3285 10.3853 46.0466 7.11109 48.0103 1.75322C48.4234 0.624786 48.9032 0.296027 50.0317 0.304912C55.9449 0.353781 61.8581 0.367108 67.7668 0.296025C69.1752 0.278254 69.5084 0.620342 69.2907 2.05088C66.705 19.2174 52.7195 31.608 35.4952 31.9234C18.8663 32.2255 4.39653 20.1814 1.2289 3.39701C0.651352 0.327125 0.651352 0.327123 3.72124 0.327123C6.52457 0.322681 9.33678 0.327123 12.1445 0.327123Z",fill:"white"})})]}),T=({pokemonid:c,addPokemonToRemove:t})=>{const[o,p]=l.exports.useState([]);return l.exports.useEffect(()=>{c!=null&&fetch(`https://pokeapi.co/api/v2/pokemon/${c}`).then(s=>s.json()).then(s=>{p({sprite:s.sprites.front_default,color:s.types[0].type.name})})},[c]),a("div",{className:"pokeball",onClick:typeof t=="function"?s=>{const i=s.target.closest(".pokeball");c.length!=0&&c!=null&&t(c,i,p)}:null,children:[e(F,{color:o==null?void 0:o.color}),e("img",{className:"pokemon-img",src:o==null?void 0:o.sprite})]})},k=l.exports.createContext();function G({children:c}){const[t,o]=l.exports.useState(""),[p,r]=l.exports.useState(),[s,i]=l.exports.useState([]),[h,C]=l.exports.useState(new Array(6).fill(null)),[f,w]=l.exports.useState(""),[g,P]=l.exports.useState(""),v=document.querySelectorAll(".pokeball");l.exports.useEffect(()=>{fetch("https://pokeapi.co/api/v2/pokemon").then(n=>n.json()).then(n=>{i(n.results)})},[]),l.exports.useEffect(()=>{const n=document.querySelector(".sentinel"),m=new IntersectionObserver(u=>{u.some(x=>x.isIntersecting)&&y()});return n!=null&&m.observe(n),()=>m.disconnect()},[s]);const y=()=>{fetch(`https://pokeapi.co/api/v2/pokemon?offset=${s.length}&limit=20`).then(n=>n.json()).then(n=>{i([...s,...n.results])})},$=n=>{const m=[...h];for(let u=0;u<m.length;u+=1)if(!m[u]){m[u]=n,C(m),r("");break}},d=(n,m,u)=>{o(n),P({setPokemonDet:u}),console.log(g);for(let x=0;x<v.length;x++)v[x].classList.add("isGray");m.classList.remove("isGray")};l.exports.useEffect(()=>{for(let n=0;n<v.length;n++)t.length==0&&v[n].classList.remove("isGray")},[t]);const b=()=>{t.length!=0&&h!==null&&(C(h.map(n=>(n==null?void 0:n.id)===t?null+r(n.id):n)),o(""),g.setPokemonDet(""))},N=()=>{f.length!=0&&(S(),location.reload())},S=()=>{fetch("https://code-challenge--ibti-solutions.herokuapp.com/teams",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pokemonid:h.map(n=>n.id),owner:f})}).then(n=>n.json()).then(n=>{console.log(n)})},E={pokemons:s,setPokemons:i,pokemonSlot:h,setSlot:$,removedPokemon:t,addPokemonToRemove:d,removeFromSlot:b,removedId:p,createTeam:N,owner:f,setOwner:w};return e(k.Provider,{value:E,children:c})}const _=()=>e("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M0 7.91696V10H2.08304L8.22664 3.85641L6.14359 1.77337L0 7.91696ZM9.83752 2.24552C10.0542 2.02889 10.0542 1.67893 9.83752 1.4623L8.5377 0.162477C8.32107 -0.0541591 7.97112 -0.0541591 7.75448 0.162477L6.73795 1.179L8.821 3.26205L9.83752 2.24552Z",fill:"#333652"})});const H=({className:c=""})=>{const{pokemonSlot:t,addPokemonToRemove:o,owner:p,setOwner:r}=l.exports.useContext(k),s=i=>{/[@#$%¨*()&=+^~?/|:;><,!§+``´´"".-]/.test(i.target.value)?i.target.value="":r(i.target.value)};return a("div",{className:`teams ${c}`,children:[a("div",{className:"team-input",children:[e("input",{type:"text",placeholder:"My Team",onChange:s,value:p,maxLength:20}),e(_,{})]}),e("div",{className:"pokeball-container",children:t.map(i=>e(T,{pokemonid:i==null?void 0:i.id,addPokemonToRemove:o}))})]})};var R="/code-challenger--ibti-solutions/assets/cbutton.0c57e0bd.svg";const U=({items:c,count:t,setCount:o})=>{const{setSlot:p,removedId:r}=l.exports.useContext(k),[s,i]=l.exports.useState([]),[h,C]=l.exports.useState([]),[f,w]=l.exports.useState({id:"",color:"",sprite:""}),[g,P]=l.exports.useState({type1:"",type2:""}),[v,y]=l.exports.useState(!1),$=()=>{p(f),t<6&&(y(!0),o(t+1))};return l.exports.useEffect(()=>{fetch(`${c.url}`).then(d=>d.json()).then(d=>{var b,N,S;i(d.sprites.front_default),P({type1:(b=d.types[0])==null?void 0:b.type.name,type2:(N=d.types[1])==null?void 0:N.type.name}),w({id:d.id,color:(S=d.types[0])==null?void 0:S.type.name,sprite:d.sprites.front_default}),C(d.name[0].toUpperCase()+d.name.slice(1))})},[]),l.exports.useEffect(()=>{r===f.id&&t>0&&(y(!1),o(t-1))},[r]),a("div",{className:"pokemon",onClick:$,children:[a("div",{className:"pokemon-id",children:["#",f.id]}),a("div",{className:"pokemon-sprite",children:[v&&e("img",{src:R,className:"selected"}),e("img",{src:s})]}),a("div",{className:"pokemon-info",children:[e("h1",{children:h}),a("div",{className:"pokemon-types",children:[e("span",{className:`type1 ${g.type1}`}),e("span",{className:`type2 ${g.type2}`})]})]})]})};const V=()=>{const{pokemons:c}=l.exports.useContext(k),[t,o]=l.exports.useState(0);return a("div",{className:"pokedex-container",children:[e("h1",{children:"Choose 6 pok\xE9mons:"}),a("div",{className:"pokemons",children:[c.map(p=>e(U,{items:p,setCount:o,count:t})),e("span",{className:"sentinel"})]})]})};var J="/code-challenger--ibti-solutions/assets/dbutton.babf810a.svg";const K=()=>{var s;const{removeFromSlot:c,removedPokemon:t,createTeam:o,pokemonSlot:p}=l.exports.useContext(k),r={opacity:.3};return a("div",{className:"create-container",children:[e(j,{title:"teams",href:"/code-challenger--ibti-solutions/"}),a("div",{className:"main-create",children:[e(H,{}),a("div",{className:"button-container",children:[e("button",{style:t.length==0?r:null,onClick:c,children:e("img",{src:J,width:50})}),e("button",{style:((s=p.slice(5)[0])==null?void 0:s.id)===void 0?r:null,onClick:o,children:e("img",{src:R,width:50})})]}),e(V,{})]})]})};const z=({className:c="",data:t})=>a("div",{className:`teams ${c}`,children:[a("h1",{children:[t.owner,"'s Team"]}),e("div",{className:"pokeball-container",children:t.pokemonid.map(o=>e(T,{pokemonid:o}))})]});const D=()=>{const[c,t]=l.exports.useState([]);return l.exports.useEffect(()=>{fetch("https://code-challenge--ibti-solutions.herokuapp.com/teams").then(o=>o.json()).then(o=>{t(o)})},[]),a("div",{className:"team-container",children:[e(j,{title:"create new team",href:"/code-challenger--ibti-solutions/create"}),e("div",{className:"main-team",children:c.map(o=>e(z,{className:"bar",data:o}))})]})},Q=()=>a(A,{children:[e(O,{path:"/code-challenger--ibti-solutions/",element:e(D,{})}),e(O,{path:"/code-challenger--ibti-solutions/create",element:e(K,{})})]});function W(){return e("div",{className:"App",children:e(G,{children:e(I,{children:e(Q,{})})})})}B.render(e(q.StrictMode,{children:e(W,{})}),document.getElementById("root"));