(function(){
    //toggle side bar 
    let bar=document.querySelector(".toggle-sidebar");
    let sidebar=document.querySelector(".sidebar");
    let contentArea=document.querySelector(".content-area");
    let logo=document.querySelector(".page .sidebar .logo");

    bar.addEventListener("click",(e)=>{
        if(window.innerWidth>= 1024)
        {

        sidebar.classList.toggle("no-sidebar");
        contentArea.classList.toggle("no-sidebar");
        }else{
            sidebar.classList.remove("no-sidebar");
            contentArea.classList.remove("no-sidebar");
        sidebar.classList.toggle("no-sidebar-sm");
        contentArea.classList.toggle("no-sidebar-sm");
            document.querySelector(".page").style.cssText="overflow:hidden";
            
        }
        if(sidebar.classList.contains("no-sidebar-sm"))
        {
            let closdiv=document.createElement("div");
            closdiv.className="close-sidebar-sm";
            let icon=document.createElement("ion-icon");
            icon.setAttribute("name","menu-outline");
            closdiv.appendChild(icon);
            logo.appendChild(closdiv);
            let closeSideBar=document.querySelector(".close-sidebar-sm");
            closeSideBar.addEventListener("click",(e)=>{
            sidebar.classList.remove("no-sidebar-sm");
            contentArea.classList.remove("no-sidebar-sm");
            document.querySelector(".page").style.cssText="overflow:auto";

                e.target.closest(".close-sidebar-sm").remove();
        });
      
        }
    });

    //add class active to links 
    let links =document.querySelectorAll(".sidebar .links li");
    links.forEach(link=>{
        link.addEventListener("click",(e)=>{
            links.forEach(li=>{
                li.classList.remove("active");
            });
            e.target.closest("li").classList.add("active");
        });
    });

    
}());