const menuItem = document.querySelectorAll(".menu_item a");
menuItem[0].style.background = "linear-gradient(#a65cfa, #1e5ed4)";
menuItem[0].style.color = "#fff";
menuItem.forEach((element)=>{
    element.onclick = (e)=>{
        menuItem.forEach(el=>{
            el.style.background = "#fff";
            el.style.color = "black";
        })
        e.target.style.background = 'linear-gradient(#a65cfa, #1e5ed4)';
        e.target.style.color = "#fff";
    }
})