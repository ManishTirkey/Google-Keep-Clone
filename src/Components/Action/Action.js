const Action=(target)=>{
    const tar = document.getElementById(target);
    var checked = tar.checked;

    const container = document.getElementsByClassName("container-1")[0];
    const text = document.getElementsByClassName("label-text");
    const icons = document.getElementsByClassName("icon");
    const Licons = document.getElementsByClassName("label-Icon");
    const footer = document.getElementsByClassName("footer")[0];
    const iconbtn = document.getElementsByClassName("selection-btn");

    if (checked){
        Array.from(Licons).forEach((li)=>{
            li.style.marginLeft = "0";
        })


        Array.from(icons).forEach((icon)=>{
            icon.style.marginLeft = "12px";
            icon.style.display = "grid";
            icon.style.placeItems = "center";
            icon.style.width = "45px";
            icon.style.height = "45px";
            icon.style.borderRadius = "50%";
        })
        
        Array.from(text).forEach((txt)=>{
            txt.style.display = "none";
        })

        container.style.flex = "0 0 65px";
        footer.style.display = 'none';



         Array.from(iconbtn).forEach((ib)=>{
            ib.style.borderRadius = '50%';
        })


    }else{
        Array.from(Licons).forEach((li)=>{
            li.style.marginLeft = "12px";
        })

        Array.from(icons).forEach((icon)=>{
            icon.style.marginLeft = "0px";
            icon.style.display = "flex";
            icon.style.marginLeft = "0";
            icon.style.width = "100%";
            icon.style.height = "100%";
            icon.style.borderRadius = "0 20px 20px 0";
        })
        Array.from(text).forEach((txt)=>{
            txt.style.display = "block";
        })

        container.style.flex = "1 0 280px";
        footer.style.display = 'block';


        Array.from(iconbtn).forEach((ib)=>{
            ib.style.borderRadius = '0 20px 20px 0';
        })
    }







}
export default Action;