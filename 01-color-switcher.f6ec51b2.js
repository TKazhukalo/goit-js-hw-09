!function(){var t=document.querySelector("body"),e=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");a.disabled=!0,e.addEventListener("click",(function(){d=setInterval(n,1e3),e.disabled=!0,a.disabled=!1})),a.addEventListener("click",(function(){e.disabled=!1,a.disabled=!0,clearInterval(d)}));var d=null;function n(){t.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}}();
//# sourceMappingURL=01-color-switcher.f6ec51b2.js.map