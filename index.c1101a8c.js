function e(e){return e&&e.__esModule?e.default:e}(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),r=()=>{const o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open");bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",r),o.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",(o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})();const t=document.querySelector(".pagination"),o=document.querySelector(".pagination-next"),r=document.querySelector(".pagination-previous"),n=document.querySelector(".first-btn"),c=document.querySelector(".second-btn"),s=document.querySelector(".third-btn"),l=document.querySelector(".four-btn"),i=document.querySelector(".last-btn"),d=document.querySelector(".pagination-ellipsis_item1"),u=document.querySelector(".pagination-ellipsis_item2");let a;i.textContent=10,t.addEventListener("click",(function(e){if(m=document.querySelector(".is-current"),o.disabled=!1,r.disabled=!1,"A"!==e.target.nodeName&&"BUTTON"!==e.target.nodeName)return;if(e.target.dataset.prev)if(i.classList.contains("is-current"))i.classList.remove("is-current"),l.classList.add("is-current");else if(l.classList.contains("is-current"))l.classList.remove("is-current"),s.classList.add("is-current");else if(s.classList.contains("is-current"))s.classList.remove("is-current"),c.classList.add("is-current");else if("2"!==c.textContent&&"3"!==s.textContent&&"4"!==l.textContent)c.textContent--,s.textContent--,l.textContent--;else{if(!c.classList.contains("is-current"))return;c.classList.remove("is-current"),n.classList.add("is-current"),r.disabled=!0}e.target.dataset.next&&(n.classList.contains("is-current")?(n.classList.remove("is-current"),c.classList.add("is-current")):c.classList.contains("is-current")?(c.classList.remove("is-current"),s.classList.add("is-current")):s.classList.contains("is-current")?(s.classList.remove("is-current"),l.classList.add("is-current")):l.textContent!==String(i.textContent-1)?(c.textContent++,s.textContent++,l.textContent++):l.textContent===String(i.textContent-1)&&(l.classList.remove("is-current"),i.classList.add("is-current"),o.disabled=!0));if("A"===e.target.nodeName){m.classList.remove("is-current"),e.target.classList.add("is-current"),e.target.dataset.last?(l.textContent=i.textContent-1,s.textContent=i.textContent-2,c.textContent=i.textContent-3,o.disabled=!0):e.target.dataset.first&&(c.textContent=Number(n.textContent)+1,s.textContent=Number(n.textContent)+2,l.textContent=Number(n.textContent)+3,r.disabled=!0)}Number(l.textContent)>=5?d.classList.remove("hidden-elm"):d.classList.add("hidden-elm");Number(l.textContent)===Number(i.textContent)-1?u.classList.add("hidden-elm"):u.classList.remove("hidden-elm");a=document.querySelector(".is-current").textContent,console.log(a)}));let m=document.querySelector(".is-current");const y=document.querySelector(".theme-toggle");console.log(" --\x3e",y);const g=document.querySelector(".body"),S=document.getElementById("toggle-text-left");console.log(" --\x3e",S);const h=document.getElementById("toggle-text-right");console.log(" --\x3e",h);const q=document.querySelector(".logo"),b=document.querySelector(".nav__list"),p=document.querySelector(".input-search"),L=document.querySelector(".nav__svg"),x=document.querySelector(".burger-menu"),_=document.querySelector(".theme-toggle-svg-light"),k=document.querySelector(".theme-toggle-svg-dark"),C=document.querySelector(".sun-icon"),w=document.querySelector(".moon-icon"),f=document.querySelector(".theme-toggle__switcher--light"),v=(document.querySelector(".theme-toggle-light__text--left"),document.querySelector(".theme-toggle-light__text--right"),document.querySelector(".dropdown__link"),document.querySelector(".dropdown__others"),document.querySelector(".dropdown__btn-icon-arrow-up"),document.querySelector(".dropdown__btn-icon-arrow-down "),document.querySelector(".dropdown__btn ")),E=(document.querySelector(".dropdown__content "),document.querySelector(".dropdown__link"),document.querySelector(".filter__link-desktop"),document.querySelector(".filter-section__text"));document.querySelector(".datetime-picker__input"),document.querySelector(".datetime-picker__input-icon-calender"),document.querySelector(".datetime-picker__input-icon-arrow-up "),document.querySelector(".datetime-picker__input-icon-arrow-down"),document.querySelector(".title "),document.querySelector(".subtitle"),document.querySelector(".date"),document.querySelector(".hyperlink"),document.querySelector(".link-add "),document.querySelector(".add-icon "),document.querySelector(".filter-descr "),document.querySelector(".pagination-link "),document.querySelector(".pagination-previous"),document.querySelector(".pagination-next"),document.querySelector("pagination-ellipsis ");S.addEventListener("click",(function(){y.classList.contains("toggle-light")&&(g.style.backgroundColor="white")})),h.addEventListener("click",(function(){y.classList.contains("toggle-light")?(y.classList.toggle("toggle-dark"),k.classList.toggle("is-hidden"),_.classList.toggle("is-hidden"),g.style.backgroundColor="#2E2E2E",q.style.color="white",b.style.color="white",p.style.backgroundColor="transparent",p.style.color="white",p.style.borderSolid="red",L.style.fill="white",x.style.stroke="white",C.style.color="white",w.style.color="white",f.style.borderSolid="white",v.style.color="$theme-svg-on-color",v.style.backgroundColor="$white-color",E.style.color="white"):(y.classList.toggle("toggle-light"),k.classList.toggle("is-hidden"),_.classList.toggle("is-hidden"),g.classList.add("body-light"),q.style.color="black",b.style.color="black",p.style.backgroundColor="transparent",p.style.color="black",p.style.borderSolid="red",L.style.fill="black",x.style.stroke="black",C.style.color="black",w.style.color="black",f.style.borderSolid="black")}));var N={};Object.defineProperty(N,"__esModule",{value:!0}),N.default=function(e,t,o){t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o;return e};new class{call(e,t={}){const o=new URLSearchParams({...t}).toString();return fetch(`${this.baseUrl}${e}?${o}`,{headers:this.headers}).then((e=>e.json())).then((e=>e))}status(){return this.call("status")}info(e){return this.call("info",e)}constructor(t=""){e(N)(this,"baseUrl","https://api.ipbase.com/v2/"),this.headers={apikey:t}}}("1hRsRE5cxGAM9Eqz9iMCGOmmPnhGRIoacjJXuXFw"),document.querySelector(".degrees"),document.querySelector(".sky"),document.querySelector(".current-city"),document.querySelector(".weatheh-image"),document.querySelector(".weather-for-week");const j=document.querySelector(".current-data"),A=new Date;j.textContent=A.toDateString();
//# sourceMappingURL=index.c1101a8c.js.map
