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

$(function() {
    /**
    * Smooth scroll
    **/
    $("a[href*='#']:not([href='#'])").click(function() {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 700);
            }
        }
    });
});

var weather = new XMLHttpRequest();
weather.open("GET", "http://api.wunderground.com/api/34773823e5211b63/conditions/lang:FR/q/France/Limoges.json", false);
weather.send(null);

var r = JSON.parse(weather.response);
var weather = "Localisation: " + r.current_observation.display_location.full;
var temp = r.current_observation.temperature_string;
var meteo = r.current_observation.weather;

document.getElementById("weather").innerHTML = weather;
document.getElementById("temp").innerHTML = temp;
document.getElementById("meteo").innerHTML = meteo;
