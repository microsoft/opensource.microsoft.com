// ---------------------------------------------------------------------
// Global JavaScript
// Authors: Andrew Ross & a little help from my friends
// ---------------------------------------------------------------------

var AROSSMN = AROSSMN || {};

(function($, APP) {

    $(function() {
        APP.Global.init();
        APP.Viewport.init();
        APP.Header.init();
        APP.Tabs.init();
        APP.Accordion.init();
        APP.Draw.init();
    });

// ---------------------------------------------------------------------
// Browser and Feature Detection
// ---------------------------------------------------------------------

APP.Global = {
    init: function() {

        $(function(){
            document.body.classList.add("page-ready");
            // var subscribe = document.getElementById('subscribe'),
            //     sh = subscribe.offsetHeight;
            // subscribe.style.minHeight = sh + 'px';
        });

    	if ( ! ('ontouchstart' in window) ) {
            document.documentElement.classList.add('no-touch');
        }

    	if ( 'ontouchstart' in window ) {
            document.documentElement.classList.add('is-touch');
        }

    	if (document.documentMode || /Edge/.test(navigator.userAgent)) {
            if(navigator.appVersion.indexOf('Trident') === -1) {
                document.documentElement.classList.add('isEDGE');
            } else {
                $('html').addClass('isIE isIE11');
            }
        }

        var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

        if(isSafari){
            document.body.classList.add('browser-safari');
        }

        if(window.location.hostname == 'localhost' | window.location.hostname == '127.0.0.1'){
            document.body.classList.add('localhost');
        }

        $('.js-subscribe').click(function(e){
            e.preventDefault();
            document.body.classList.add('modal-is-active');
            document.getElementById('subscribe-modal').classList.add('is-active');
            $('#mc_embed_signup').appendTo("#subscribe-modal .modal");
        });

        $('.js-subscribe-close').click(function(e){
            e.preventDefault();
            document.body.classList.remove('modal-is-active');
            document.getElementById('subscribe-modal').classList.remove('is-active');
            $('#mc_embed_signup').appendTo("#subscribe-wrap");
        });


        var bd = $('body');
        $('.search-trigger').click(function(){
            if( bd.hasClass('search-is-open') ) {
                bd.removeClass('search-is-open');
            } else {
                bd.addClass('search-is-open');
            }
        });
    }
}



// ---------------------------------------------------------------------
// header
// ---------------------------------------------------------------------

APP.Header = {
    init: function() {
        var header = document.getElementById('site-header'),
            w = $(window);

        var lastScrollTop = 0;

        document.addEventListener("scroll", function(){
            if (w.scrollTop() >= 120) {
				header.classList.add('is-sticky');
			} else {
				header.classList.remove('is-sticky');
			}

            var st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop){
                if( header.classList.contains('scrolling-up') ){
                    header.classList.remove('scrolling-up');
                }
            } else {
                if( !header.classList.contains('scrolling-up') ){
                    header.classList.add('scrolling-up');
                }
            }
            lastScrollTop = st <= 0 ? 0 : st;
        }, false);


        $('.js-menu-trigger').click(function(e){
            e.preventDefault();
            if( $('body').hasClass('menu-is-open') ) {
                $('body').removeClass('menu-is-open');
            } else {
                $('body').addClass('menu-is-open');
            }
        });

        var mobileMenuLink = $('.main-nav a');

        mobileMenuLink.each(function(){
            if( $(this).is(":focus") ) {
                $('body').addClass('menu-is-open');
            }
        });

        // $(document).ready(function(){
        //     if ($(window).width() < 800) {
        //         //$('.site-header__search').attr('tabindex', '3');
        //         //$('.search-form-mobile .search-form').attr('tabindex', '3');
        //     }
        // });

        $(window).keyup(function (e) {
            var code = (e.keyCode ? e.keyCode : e.which);
            if (code == 9){
                if ($(window).width() < 800) {
                    if ( $('.main-nav a:focus, .main-nav input:focus').length) {
                        $('body').addClass('menu-is-open');
                    } else {
                        $('body').removeClass('menu-is-open');
                    }

                    // if (code == 9 && $('#mobile-search:focus').length) {
                    //     //$('body').addClass('search-is-open');
                    //     alert('asdfas');
                    //     //  $('.search-form-mobile input').focus();
                    // } else {
                    //     $(':focus').addClass('asfasfasfasdf')
                    //     //$('body').removeClass('search-is-open');
                    // }

                }

            }

        });


        // var playBtn = document.getElementById('arctic-vault-video-play');
        // if( playBtn ) {
        //     video = document.getElementById('arctic-vault-video');
        //     bd = document.body;
        //     safari = false;
        //
        //     if(document.body.classList.contains('browser-safari')){
        //         safari = true;
        //     }
        //
        // 	playBtn.onclick = function() {
        //         if(safari){
        //             video.webkitRequestFullscreen();
        //         } else {
        //             video.requestFullscreen();
        //         }
        //         video.play();
        // 	}
        // }
    }
}



// ---------------------------------------------------------------------
// Detect when an element is in the viewport
// ---------------------------------------------------------------------

APP.Viewport = {
    init: function() {
        var items = document.querySelectorAll('*[data-animate-in], *[data-detect-viewport]'),
            pageOffset = window.pageYOffset;

        function isScrolledIntoView(el) {
            var rect = el.getBoundingClientRect(),
                elemTop = rect.top,
                elemBottom = rect.top + el.offsetHeight,
                bottomWin = pageOffset + window.innerHeight;

            return (elemTop < bottomWin && elemBottom > 0);
        }

        function detect() {
            for(var i = 0; i < items.length; i++) {
                if ( isScrolledIntoView(items[i]) ) {
                    if( !items[i].classList.contains('in-view') ) {
                        items[i].classList.add('in-view');
                    }
                }
            }
        }

        window.addEventListener('scroll', detect);
        window.addEventListener('resize', detect);

    	for(var i = 0; i < items.length; i++) {
    		var d = 0,
    			el = items[i];

    		if( items[i].getAttribute('data-animate-in-delay') ) {
    			d = items[i].getAttribute('data-animate-in-delay') / 1000 + 's';
    		} else {
    			d = 0;
    		}
            el.style.transitionDelay = d;
    	}

        setTimeout(function(){
            detect();
        }, 500);
    }
}




// ---------------------------------------------------------------------
// Scroll to
// Used for smooth scrolling to elements
// ---------------------------------------------------------------------

APP.ScrollTo = {

    init: function() {
        if( $('*[data-scroll-to]').length ) {
            this.bind();
        } else {
            return;
        }
    },

    bind: function() {

        $('*[data-scroll-to]').on('click touchstart:not(touchmove)', function(e) {
            e.preventDefault();

            var trigger = $(this).attr('data-scroll-to'),
                target = $("#" + trigger),
                ss = 1400, //scroll speed
                o = 0; // offset

            if( $(this).attr('data-scroll-speed') ) {
                ss = $(this).attr('data-scroll-speed');
            }

            if( $(this).attr('data-scroll-offset') ) {
                o = $(this).attr('data-scroll-offset');
            }

            $('html, body').animate({
                scrollTop: target.offset().top - o
            }, ss);

            document.body.classList.remove('menu-is-open');
        });


    }
};


// ---------------------------------------------------------------------
// Accordion
// ---------------------------------------------------------------------

APP.Accordion = {

    init: function() {
        if( $('.accordion').length ) {
            this.bind();
        } else {
            return;
        }
    },

    bind: function() {

        var acc = document.getElementsByClassName("accordion__hd");

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.parentNode.classList.toggle("is-open");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight){
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });

            // Panels should start closed
            var panel = acc[i].nextElementSibling;
            panel.style.maxHeight = null;
        }

        var expand = $('.accordions__expand-all');
        expand.click(function(){
            if( expand.hasClass('is-open') ) {
                expand.removeClass('is-open');
                for (i = 0; i < acc.length; i++) {
                    acc[i].parentNode.classList.remove("is-open");
                    var panel = acc[i].nextElementSibling;
                    panel.style.maxHeight = null;
                }
            } else {
                expand.addClass('is-open');

                for (i = 0; i < acc.length; i++) {
                    acc[i].parentNode.classList.add("is-open");
                    var panel = acc[i].nextElementSibling;
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            }
        });
    }
};



// ---------------------------------------------------------------------
// Draw
// ---------------------------------------------------------------------

APP.Draw = {
    init: function() {
        if( $('#draw-svg').length ) {
            this.bind();
        } else {
            return;
        }
    },

    bind: function() {

        var svg = $('#draw-svg'),
			path = $('#draw-svg path'),
            rect = $(' #draw-svg rect'),
            circle = $('#draw-svg circle'),
			done = false,
            rotate = $('.rotate'),
            square = $('.square rect'),
            heroAccessibilityControls = $('#hero-accessibility-controls');

        var activeGsapHandlers = [];

        gsap.fromTo(circle, 0, {drawSVG:0}, {duration: 0, drawSVG:false});
        gsap.fromTo(rect, 0, {drawSVG:0}, {duration: 0, drawSVG:false});

        if (heroAccessibilityControls.length) {
            heroAccessibilityControls.on('hero-pause', function () {
                activeGsapHandlers.forEach(function (tween) {
                    tween.pause();
                });
            });
            heroAccessibilityControls.bind('hero-resume', function () {
                activeGsapHandlers.forEach(function (tween) {
                    tween.resume();
                });
            });
        }

        function detect(){
            //if( svg.hasClass('in-view')) {
				if(done) return;

				setTimeout(function(){
					gsap.fromTo(circle, {drawSVG: "20% 20%"}, {duration: 5, drawSVG: "0% 100%"});
                    gsap.fromTo(rect, {drawSVG: "20% 20%"}, {duration: 3, drawSVG: "0% 100%"});

				}, 1500);
			//	done = true;
			//}
		}
        function randNum(min, max) { // min and max included
          return Math.floor(Math.random() * (max - min + 1) + min);
        }
        activeGsapHandlers.push(gsap.to(rotate, 10, {rotation:"360", ease:Linear.easeNone, repeat:-1, transformOrigin:"50% 50%"}));
        square.each(function(){
            var el = $(this),
                speed = randNum(.5, 4),
                scale = randNum(0, .5);
            activeGsapHandlers.push(gsap.to(el, speed, {scaleX:scale, ease:Linear.easeNone, repeat:-1, transformOrigin:"50% 50%", yoyo: true}));
        });

		$(document).ready(function(){
			detect();
		});

		// window.addEventListener('scroll', detect);
        // window.addEventListener('resize', detect);
    }
};


// ---------------------------------------------------------------------
// Tabs
// ---------------------------------------------------------------------

APP.Tabs = {

    init: function() {
        if( $('.tabs').length ) {
            this.bind();
        } else {
            return;
        }
    },

    bind: function() {
        var tab = $('.tabs__tab'),
            tabBody = $('.tabs__content'),
            tabLink = $('.tabs__link');
        tabBody.hide();
        $('.tabs__content.is-active').show();
        tab.click(function() { // tab interface
            var group = $(this).parents('.tabs'),
            tabs = group.find('.tabs__tab'),
            tabsBody = group.find('.tabs__content');
            tabs.removeClass('is-active');
            $(this).addClass('is-active');
            tabs.children('a').attr('aria-selected', false);
            var subLinks = $(this).children('a');
            subLinks.attr('aria-selected', true);
            $('.tabs__content').hide().removeClass('is-active');
            var tabId = $(this).attr('data-tab');
                // target = $('#' + tabId);
            tabsBody.each(function(){
                if( $(this).attr('data-tab') == tabId) {
                    $(this).addClass('is-active');
                    $(this).fadeIn(300).addClass('is-active');
                }
            })
            history.replaceState(null, '', '#' + tabId);
            $(window).trigger('resize');
        });
        tabLink.click(function() { // accessible link
            var group = $(this).parents('.tabs'),
            tabs = group.find('.tabs__tab'),
            tabsBody = group.find('.tabs__content');
            tabs.removeClass('is-active');
            tabs.children('a').attr('aria-selected', false);
            $(this).parent().addClass('is-active');
            $('.tabs__content').hide().removeClass('is-active');
            var tabId = $(this).parent().attr('data-tab');
                // target = $('#' + tabId);
            tabsBody.each(function(){
                if( $(this).attr('data-tab') == tabId) {
                    $(this).addClass('is-active');
                    $(this).fadeIn(300).addClass('is-active');
                }
            })
            $(this).attr('aria-selected', true);
            history.replaceState(null, '', '#' + tabId);
            $(window).trigger('resize');
            return false; // prevent default
        });
        $(document).ready(function(){
            var hash = window.location.hash.replace('#', '');
            $('.tabs__tab').each(function() {
                var el = $(this),
                    tabId = el.attr('data-tab');
                if( tabId === hash && tabId != '' ) {
                    el.click();
                }
            });
        });


    }
};



}(jQuery, AROSSMN));
