!function(){let e=document.querySelector(".toggle-sidebar"),s=document.querySelector(".sidebar"),t=document.querySelector(".content-area"),o=document.querySelector(".page .sidebar .logo");e.addEventListener("click",e=>{if(window.innerWidth>=1024?(s.classList.toggle("no-sidebar"),t.classList.toggle("no-sidebar")):(s.classList.remove("no-sidebar"),t.classList.remove("no-sidebar"),s.classList.toggle("no-sidebar-sm"),t.classList.toggle("no-sidebar-sm"),document.querySelector(".page").style.cssText="overflow:hidden"),s.classList.contains("no-sidebar-sm")){let e=document.createElement("div");e.className="close-sidebar-sm";let c=document.createElement("ion-icon");c.setAttribute("name","menu-outline"),e.appendChild(c),o.appendChild(e),document.querySelector(".close-sidebar-sm").addEventListener("click",e=>{s.classList.remove("no-sidebar-sm"),t.classList.remove("no-sidebar-sm"),document.querySelector(".page").style.cssText="overflow:auto",e.target.closest(".close-sidebar-sm").remove()})}});let c=document.querySelectorAll(".sidebar .links li");c.forEach(e=>{e.addEventListener("click",e=>{c.forEach(e=>{e.classList.remove("active")}),e.target.closest("li").classList.add("active")})})}();