/*----------------------------------------------------------------------------*
	$PAGE--FULL
*----------------------------------------------------------------------------*/
const sections = new fullpage('#fullPage', {
	autoScrolling:true,
	menu: ['#fullpage-menu', '#popup_menu'],
	anchors:['inicio', 'events', 'shows','photos','videos'],
	navigation: false
});
/*----------------------------------------------------------------------------*
	$SLIDER
*----------------------------------------------------------------------------*/
$(document).ready(function(){
	$('.c-home__slider').slick({
		infinite: true,
		autoplay: true,
		slidesToShow: 1,
		fade: true,
		speed: 500,
		arrows: false,
		draggable: false,
		pauseOnHover: false,
		pauseOnFocus: false,
		autoplaySpeed: 5000,
		speed: 3200
	});
});
/*----------------------------------------------------------------------------*
	$Magnific PopUp
*----------------------------------------------------------------------------*/



$('#js-menuMovil').magnificPopup({
	delegate: 'a',
	removalDelay: 500,
	callbacks: {
		beforeOpen: function() {
			this.st.mainClass = this.st.el.attr('data-effect');
		}
	}
});

$('.close').click( function(e){
	$.magnificPopup.close();
});



// $(document).on("click", "js-menuMovil", function(t){
// 	t.preventDefault(),
// 	$.magnificPopup.open({
// 		items: { src: '<div><h1>Hola mundo!</h1></div>', type: "inline"},
// 		mainClass: "mfp-zoom-out  mfp-popUp"
// 	})
// })

// const lista = `
// <div class="menuMovil mfp-with-anim">
// 	<div class="c-popup">
// 		<ul class="c-popup__menu" id="menu">
// 			<li class="active" data-menuanchor="inicio"><a class="h4" href="#inicio">Inicio<i class="icon-home2"></i></a></li>
// 			<li data-menuanchor="events"><a class="h4" href="#events">Próximos Eventos<i class="icon-calendar2"></i></a></li>
// 			<li data-menuanchor="shows"> <a class="h4" href="#shows">Set's<i class="icon-album"></i></a></li>
// 			<li data-menuanchor="photos"> <a class="h4" href="#photos">Galería<i class="icon-image4"></i></a></li>
// 			<li data-menuanchor="videos"><a class="h4" href="#videos">Videos <i class="icon-play"></i></a></li>
// 		</ul>
// 	</div>
// </div>`;
