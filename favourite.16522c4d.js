const e=document.querySelector(".news-list-fav");console.log(e),function(){const o=localStorage.getItem("markup-news-card");console.log(o),e.innerHTML=o}(),e.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;const o=e.target;console.log(o),o.classList.contains("add-to-fav")&&localStorage.removeItem("markup-news-card")}));
//# sourceMappingURL=favourite.16522c4d.js.map
