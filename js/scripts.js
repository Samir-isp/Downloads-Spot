
if ( 'addEventListener' in document ) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach( document.body );
    }, false );
}

( function ( $ ) {
	$( function () {
        /**
         * Slidebars Controller
         */

        // Init
		var controller = new slidebars();
		controller.init();

		// Toggle main menu
		$( '.js-toggle-main-menu' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'main-menu' );
		} );

		// Toggle author menu
		$( '.js-toggle-author-menu' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'author-menu' );
		} );

		// Toggle help menu
		$( '.js-toggle-help-menu' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'help-menu' );
		} );

		// Toggle demo menu
		$( '.js-toggle-demos-menu' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'demos-menu' );
		} );

		// Close any
		$( document ).on( 'click', '.js-close-any', function ( event ) {
			if ( controller.getActiveSlidebar() ) {
				event.preventDefault();
				event.stopPropagation();
				controller.close();
			}
		} );

		// Close Slidebar links
		$( '[off-canvas] a' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();

			var url = $( this ).attr( 'href' ),
			target = $( this ).attr( 'target' ) ? $( this ).attr( 'target' ) : '_self';

			controller.close( function () {
				window.open( url, target );
			} );
		} );

		// Add close class to canvas container when Slidebar is opened
		$( controller.events ).on( 'opening', function ( event ) {
			$( '[canvas]' ).addClass( 'js-close-any' );
		} );

		// Add close class to canvas container when Slidebar is opened
		$( controller.events ).on( 'closing', function ( event ) {
			$( '[canvas]' ).removeClass( 'js-close-any' );
		} );
        // Left demo
        $( '.js-open-demo-left' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.open( 'demo-left' );
		} );

        $( '.js-toggle-demo-left' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'demo-left' );
		} );

        $( '.js-close-demo-left' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.close( 'demo-left' );
		} );

        // Right demo
        $( '.js-open-demo-right' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.open( 'demo-right' );
		} );

        $( '.js-toggle-demo-right' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'demo-right' );
		} );

        $( '.js-close-demo-right' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.close( 'demo-right' );
		} );

        // Top demo
        $( '.js-open-demo-top' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.open( 'demo-top' );
		} );

        $( '.js-toggle-demo-top' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'demo-top' );
		} );

        $( '.js-close-demo-top' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.close( 'demo-top' );
		} );

        // Bottom demo
        $( '.js-open-demo-bottom' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.open( 'demo-bottom' );
		} );

        $( '.js-toggle-demo-bottom' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'demo-bottom' );
		} );

        $( '.js-close-demo-bottom' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.close( 'demo-bottom' );
		} );

        // Left 2 demo
        $( '.js-open-demo-left-2' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.open( 'demo-left-2' );
		} );

        $( '.js-toggle-demo-left-2' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'demo-left-2' );
		} );

        $( '.js-close-demo-left-2' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.close( 'demo-left-2' );
		} );

        // Reveal demo
        $( '.js-open-demo-reveal' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.open( 'demo-reveal' );
		} );

        $( '.js-toggle-demo-reveal' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'demo-reveal' );
		} );

        $( '.js-close-demo-reveal' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.close( 'demo-reveal' );
		} );

        // Push demo
        $( '.js-open-demo-push' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.open( 'demo-push' );
		} );

        $( '.js-toggle-demo-push' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'demo-push' );
		} );

        $( '.js-close-demo-push' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.close( 'demo-push' );
		} );

        // Overlay demo
        $( '.js-open-demo-overlay' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.open( 'demo-overlay' );
		} );

        $( '.js-toggle-demo-overlay' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'demo-overlay' );
		} );

        $( '.js-close-demo-overlay' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.close( 'demo-overlay' );
		} );

        // Shift demo
        $( '.js-open-demo-shift' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.open( 'demo-shift' );
		} );

        $( '.js-toggle-demo-shift' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'demo-shift' );
		} );

        $( '.js-close-demo-shift' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.close( 'demo-shift' );
		} );

        // Mobile only
        var windowWidth,
        mobileOnly = function () {
            windowWidth = $( window ).width();

            if ( windowWidth > 600 ) {
                controller.close( 'demo-mobile-only' );
            }
        };

        mobileOnly();
        $( window ).on( 'resize', mobileOnly );

        $( '.js-open-demo-mobile-only' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();

            if ( windowWidth < 601 ) {
                controller.open( 'demo-mobile-only' );
            }
		} );

        $( '.js-toggle-demo-mobile-only' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();

            if ( windowWidth < 601 ) {
                controller.toggle( 'demo-mobile-only' );
            }
		} );

        $( '.js-close-demo-mobile-only' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.close( 'demo-mobile-only' );
		} );

        // Custom fixed width
        $( '.js-open-demo-custom-fixed-width' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.open( 'demo-custom-fixed-width' );
		} );

        $( '.js-toggle-demo-custom-fixed-width' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'demo-custom-fixed-width' );
		} );

        $( '.js-close-demo-custom-fixed-width' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.close( 'demo-custom-fixed-width' );
		} );

        // Custom fluid height
        $( '.js-open-demo-custom-fluid-height' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.open( 'demo-custom-fluid-height' );
		} );

        $( '.js-toggle-demo-custom-fluid-height' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'demo-custom-fluid-height' );
		} );

        $( '.js-close-demo-custom-fluid-height' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.close( 'demo-demo-custom-fluid-height' );
		} );

        // Custom responsive width
        $( '.js-open-demo-custom-responsive-width' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.open( 'demo-custom-responsive-width' );
		} );

        $( '.js-toggle-demo-custom-responsive-width' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'demo-custom-responsive-width' );
		} );

        $( '.js-close-demo-custom-responsive-width' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.close( 'demo-custom-responsive-width' );
		} );

        // Custom transition duration
        $( '.js-open-demo-custom-transition-duration' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.open( 'demo-custom-transition-duration' );
		} );

        $( '.js-toggle-demo-custom-transition-duration' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'demo-custom-transition-duration' );
		} );

        $( '.js-close-demo-custom-transition-duration' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.close( 'demo-custom-transition-duration' );
		} );

        // Custom transition duration 2
        $( '.js-open-demo-custom-transition-duration-2' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.open( 'demo-custom-transition-duration-2' );
		} );

        $( '.js-toggle-demo-custom-transition-duration-2' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'demo-custom-transition-duration-2' );
		} );

        $( '.js-close-demo-custom-transition-duration-2' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.close( 'demo-custom-transition-duration-2' );
		} );

        // Events
        $( '.js-events-init' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
            controller.init();
		} );

        $( '.js-events-exit' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
            controller.exit();
		} );

        $( '.js-events-css' ).on( 'click', function ( event ) {
            event.preventDefault();
            event.stopPropagation();
            controller.css();
        } );

        $( '.js-open-demo-events' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.open( 'demo-events' );
		} );

        $( '.js-toggle-demo-events' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'demo-events' );
		} );

        $( '.js-close-demo-events' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.close( 'demo-events' );
		} );

        // Event demo listeners
        if ( /demos\/events/.test( window.location.href ) ) {
            $( controller.events ).on( 'init', function () {
                console.log( 'init - Slidebars has been initialized.' );
            } );

            $( controller.events ).on( 'exit', function () {
                console.log( 'exit - Slidebars has been disabled.' );
            } );

            $( controller.events ).on( 'css', function () {
                console.log( 'css - Slidebars css has been reset.' );
            } );

            $( controller.events ).on( 'opening', function ( event, id ) {
                if ( id === 'demo-events' ) {
                    console.log( 'opening - The events demo Slidebar is opening.' );
                }
            } );

            $( controller.events ).on( 'opened', function ( event, id ) {
                if ( id === 'demo-events' ) {
                    console.log( 'opened - The events demo Slidebar is opened.' );
                }
            } );

            $( controller.events ).on( 'closing', function ( event, id ) {
                if ( id === 'demo-events' ) {
                    console.log( 'closing - The events demo Slidebar is closing.' );
                }
            } );

            $( controller.events ).on( 'closed', function ( event, id ) {
                if ( id === 'demo-events' ) {
                    console.log( 'closed - The events demo Slidebar is closed.' );
                }
            } );
        }

        // Callbacks demo
        $( '.js-callbacks-init' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
            controller.init( function () {
                console.log( 'This message was logged by a callback after initializing Slidebars.' );
            } );
		} );

        $( '.js-callbacks-exit' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
            controller.exit( function () {
                console.log( 'This message was logged by a callback after exiting Slidebars.' );
            } );
		} );

        $( '.js-callbacks-css' ).on( 'click', function ( event ) {
            event.preventDefault();
            event.stopPropagation();
            controller.css( function () {
                console.log( 'This message was logged by a callback after resetting Slidebars CSS.' );
            } );
        } );

        $( '.js-open-demo-callbacks' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.open( 'demo-callbacks', function () {
                console.log( 'This message was logged by a callback after opening the Slidebar.' );
            } );
		} );

        $( '.js-toggle-demo-callbacks' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.toggle( 'demo-callbacks', function () {
                console.log( 'This message was logged by a callback after toggling the Slidebar.' );
            }  );
		} );

        $( '.js-close-demo-callbacks' ).on( 'click', function ( event ) {
			event.preventDefault();
			event.stopPropagation();
			controller.close( 'demo-callbacks', function () {
                console.log( 'This message was logged by a callback after closing the Slidebar.' );
            }  );
		} );

        /**
         * Google Analytics
         */

        $( '.ga-download-direct' ).on( 'click', function ( event ) {
            ga( 'send', {
                hitType: 'event',
                eventCategory: 'Get Slidebars',
                eventAction: 'Direct Download',
                eventLabel: 'Download 2.0.2'
            } );
        } );

        $( '.ga-download-pwat' ).on( 'click', function ( event ) {
            ga( 'send', {
                hitType: 'event',
                eventCategory: 'Get Slidebars',
                eventAction: 'Pay with a Tweet',
                eventLabel: 'Download 2.0.2'
            } );
        } );

        $( '.ga-download-github' ).on( 'click', function ( event ) {
            ga( 'send', {
                hitType: 'event',
                eventCategory: 'Get Slidebars',
                eventAction: 'GitHub',
                eventLabel: 'Download 2.0.2'
            } );
        } );

        $( '.ga-donate-text' ).on( 'click', function ( event ) {
            ga( 'send', {
                hitType: 'event',
                eventCategory: 'Donation',
                eventAction: 'PayPal',
                eventLabel: 'Donation Text'
            } );
        } );

        $( '.ga-donate-button' ).on( 'click', function ( event ) {
            ga( 'send', {
                hitType: 'event',
                eventCategory: 'Donation',
                eventAction: 'PayPal',
                eventLabel: 'Donation Button'
            } );
        } );

        $( '.ga-external-github' ).on( 'click', function ( event ) {
            ga( 'send', {
                hitType: 'event',
                eventCategory: 'External Link',
                eventAction: 'GitHub',
                eventLabel: 'External Link'
            } );
        } );
	} );
} ) ( jQuery );