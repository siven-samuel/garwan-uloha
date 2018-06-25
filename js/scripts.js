(function(app, $, undefined) {
    app.Menu = {};

    app.Menu.init = function() {
        $( document ).ready(function() {    
				$( ".burger" ).click(function() {
					$( this ).toggleClass( "rotate" );
					$( "#left-col" ).toggleClass( "hide-menu" );
				});

		});

	  }
}( window.app = window.app || {}, jQuery ));

app.Menu.init();