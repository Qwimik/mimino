(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();new Swiper(".mySwiper",{slidesPerView:2,spaceBetween:25,freeMode:!0,breakpointsBase:"container",loop:!0,navigation:{nextEl:".button-next",prevEl:".button-prev"}});new Swiper(".room-hero-swiper",{slidesPerView:1,spaceBetween:0,navigation:{nextEl:".btn-next",prevEl:".btn-prev"}});new Swiper(".details-slider",{slidesPerView:"auto",spaceBetween:86,loop:!0,navigation:{nextEl:".details-btn-next",prevEl:".details-btn-prev"}});(function(i){typeof i.matches!="function"&&(i.matches=i.msMatchesSelector||i.mozMatchesSelector||i.webkitMatchesSelector||function(n){for(var o=this,r=(o.document||o.ownerDocument).querySelectorAll(n),e=0;r[e]&&r[e]!==o;)++e;return Boolean(r[e])}),typeof i.closest!="function"&&(i.closest=function(n){for(var o=this;o&&o.nodeType===1;){if(o.matches(n))return o;o=o.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var i=document.querySelectorAll(".js-open-modal"),n=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");i.forEach(function(r){r.addEventListener("click",function(e){e.preventDefault();var t=this.getAttribute("data-modal"),c=document.querySelector('.modal[data-modal="'+t+'"]');c.classList.add("active"),n.classList.add("active")})}),o.forEach(function(r){r.addEventListener("click",function(e){var t=this.closest(".modal");t.classList.remove("active"),n.classList.remove("active")})}),document.body.addEventListener("keyup",function(r){var e=r.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),n.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});
