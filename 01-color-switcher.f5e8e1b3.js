!function(){
//! УВАГА
var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=null;function r(){return document.body.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.addEventListener("click",(function(){n=setInterval(r,1e3),e.removeAttribute("disabled"),t.setAttribute("disabled",!0)})),e.addEventListener("click",(function(){clearInterval(n),t.removeAttribute("disabled"),e.setAttribute("disabled",!0)})),e.setAttribute("disabled",!0)}();
//# sourceMappingURL=01-color-switcher.f5e8e1b3.js.map
