!function(){var e,o=document.querySelector(".news-list-fav");console.log(o),e=localStorage.getItem("markup-news-card"),console.log(e),o.innerHTML=e,o.addEventListener("click",(function(e){if("BUTTON"===e.target.nodeName){var o=e.target;console.log(o),o.classList.contains("add-to-fav")&&localStorage.removeItem("markup-news-card")}}))}();
//# sourceMappingURL=favourite.9ba06aae.js.map
