
/* OUVERTURE/FERMETURE SIDEBAR */

var w = window.innerWidth;

function openNav(){
    if(w > 750){
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




/* SIDEBAR: MENU ACCORDEON */

$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}

	var accordion = new Accordion($('#accordion'), false);
});




/* SMOOTH SCROLL */

$(function() {
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
