var w = window.innerWidth;

function openNav(){
    if(w > 500){
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }
    else{
        document.getElementById("mySidenav").style.width = "100%";
    }
}

function closeNav()
{
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
