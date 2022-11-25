//! УВАГА
const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let n=null;function r(){return document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(function(){n=setInterval(r,1e3),e.removeAttribute("disabled"),t.setAttribute("disabled",!0)})),e.addEventListener("click",(function(){clearInterval(n),t.removeAttribute("disabled"),e.setAttribute("disabled",!0)})),e.setAttribute("disabled",!0);
//# sourceMappingURL=01-color-switcher.7f5ea086.js.map
