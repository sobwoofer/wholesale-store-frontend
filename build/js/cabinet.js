function retrairMenu(){var e=300;$("body").addClass(CLASS_MENU_RETRAIDO);var t={left:-280,opacity:0};$("#menu").stop(!0,!0).animate(t,e),$("#hit-menu").stop(!0,!0).show(),$("#header .button-menu-mobile").stop(!0,!0).show(),$("#header .button-menu-mobile").stop(!0,!0).animate({opacity:1},e),$("#header .menu-modulos .menu-modulosInner").stop(!0,!0).animate({paddingLeft:0},e),$("#conteudo .conteudo-inner").stop(!0,!0).animate({paddingLeft:0},e),hideBackgroundMenuMobile()}function expandirMenu(){$("body").removeClass(CLASS_MENU_RETRAIDO);var e={left:0,opacity:1};$("#menu").stop(!0,!0).animate(e),$("#hit-menu").stop(!0,!0).hide(),$("#conteudo .conteudo-inner").stop(!0,!0).animate({paddingLeft:260}),$("#header .button-menu-mobile").stop(!0,!0).animate({opacity:0},function(){$("#header .button-menu-mobile").stop(!0,!0).hide()}),$("#header .menu-modulos .menu-modulosInner").stop(!0,!0).animate({paddingLeft:280}),$(window).width()<=768&&showBackgroundMenuMobile()}function resizeWindow(){var e=$(window).width();e>MAX_WIDTH?($("body").hasClass(CLASS_MENU_RETRAIDO)&&"closed"!=statusMenu&&expandirMenu(),"open_by_menu_mobile"==statusMenu&&(statusMenu="open")):$("body").hasClass(CLASS_MENU_RETRAIDO)||"open_by_menu_mobile"!=statusMenu&&retrairMenu(),e>=768?$(".menu-mobile-background").hasClass("on")&&hideBackgroundMenuMobile():"open_by_menu_mobile"==statusMenu&&showBackgroundMenuMobile()}function initMenu(){menu_width=$("#menu .menu").width(),$(".menu-back").click(function(){var e=$(".menu-slider").position().left+menu_width,t=$(this).closest(".submenu");return $(".menu-slider").stop().animate({left:e},300,function(){t.hide()}),!1}),$(".menu-anchor").click(function(){var e=$(this).data("menu");return $(".submenu").each(function(){var t=$(this).data("menu");if(t==e){$(this).show();var n=$(".menu-slider").position().left-menu_width;return $(".menu-slider").stop(!0,!0).animate({left:n},300),!1}}),!1}),$(".header-controlMenuButton").click(function(){return statusMenu="closed",retrairMenu(),!1}),$(".button-menu-mobile").click(function(){return statusMenu="open_by_menu_mobile",expandirMenu(),!1}),$(".menu-mobile-background").mousedown(function(){retrairMenu()}),$("#hit-menu").mouseenter(function(){statusHitMenu=!0,expandirMenu()}),$("#menu").mouseleave(function(){statusHitMenu&&(statusHitMenu=!1,retrairMenu())})}function hideBackgroundMenuMobile(){$(".menu-mobile-background").removeClass("on"),$(".menu-mobile-background").stop(!0,!0).animate({opacity:0},function(){$(".menu-mobile-background").stop(!0,!0).hide(),$(".menu-mobile-background").removeAttr("style")})}function showBackgroundMenuMobile(){$(".menu-mobile-background").addClass("on"),$(".menu-mobile-background").stop(!0,!0).show(),$(".menu-mobile-background").stop(!0,!0).animate({opacity:1})}function ShowCartErrorPopup(){$("#cartErrorPopup").modal("show")}$.fn.extend({treed:function(e){var t="fa fa-minus",n="fa fa-plus";"undefined"!=typeof e&&("undefined"!=typeof e.openedClass&&(t=e.openedClass),"undefined"!=typeof e.closedClass&&(n=e.closedClass));var i=$(this);i.addClass("tree"),i.find("li").has("ul").each(function(){var e=$(this);e.prepend("<i class='indicator glyphicon "+n+"'></i>"),e.addClass("branch"),e.on("click",function(e){if(this==e.target){var i=$(this).children("i:first");i.toggleClass(t+" "+n),$(this).children().children().toggle()}}),e.children().children().toggle()}),i.find(".branch .indicator").each(function(){$(this).on("click",function(){$(this).closest("li").click()})}),i.find(".branch>button").each(function(){$(this).on("click",function(e){$(this).closest("li").click(),e.preventDefault()})})}}),$(function(){$("#tree1").treed(),$("#tree2").treed({openedClass:"glyphicon-folder-open",closedClass:"glyphicon-folder-close"}),$("#tree3").treed({openedClass:"glyphicon-chevron-right",closedClass:"glyphicon-chevron-down"})}),$(function(){$('[data-toggle="tooltip"]').tooltip()}),$(function(){$("#DateCountdown").TimeCircles()}),$(function(){$(".filter_cat_wrp .toggle-btn").click(function(e){$($(this).parent().parent(".filter_cat_wrp")).toggleClass("active")}),$("#slider-range").slider({min:0,max:1e3,values:[0,1e3],range:!0,stop:function(e,t){$("input#minCost").val($("#slider-range").slider("values",0)),$("input#maxCost").val($("#slider-range").slider("values",1))},slide:function(e,t){$("input#minCost").val($("#slider-range").slider("values",0)),$("input#maxCost").val($("#slider-range").slider("values",1))}})}),$(function(){$("#showSide").click(function(e){$(".side-content").slideToggle()})}),$(function(){$(".search-input").click(function(){$(this).toggleClass("act"),$(".top-serch-block--result").toggleClass("act")})}),$(function(){$(".cart-btn, .wishlist-btn").on("click",function(){var e=$(this);e.popover("show"),setTimeout(function(){e.popover("hide")},1500)}),$('.cart-btn[data-added="false"]').popover({title:"Товар добавлен в корзину",html:!0,content:'Товаров в корзине: 14<br>Сума: 1258 грн<br><a href="#">Перейти в корзину</a>',trigger:"manual"}),$('.remove-from-cart, .cart-btn[data-added="true"]').popover({title:"Товар удален из корзины",html:!0,content:'Товаров в корзине: 14<br>Сума: 1258 грн<br><a href="#">Перейти в корзину</a>',trigger:"manual"}),$('.wishlist-btn[data-added="false"]').popover({title:"Товар добавлен в избранное",html:!0,content:'Товаров в избранном: 14<br><a href="#">Перейти в избранное</a>',trigger:"manual"}),$('.wishlist-btn[data-added="true"]').popover({title:"Товар удален из избранного",html:!0,content:'Товаров в избранном: 14<br><a href="#">Перейти в избранное</a>',trigger:"manual"})});var MAX_WIDTH=1e3,MENU_CLASS="menu-hide",menu_width,statusHitMenu=!1,not_loaded=!1,statusMenu="open",CLASS_MENU_RETRAIDO="menu-retraido";jQuery(document).ready(function(){initMenu(),$(window).resize(resizeWindow),resizeWindow(),$(".button-actions").click(function(){return $(this).hasClass("active")?($(".boxWrapperActions-wrapper").removeClass("active"),$(".boxWrapperActions-wrapper").stop(!0,!0).slideUp(300),$(".button-actions").removeClass("active")):($(".boxWrapperActions-wrapper").addClass("active"),$(".boxWrapperActions-wrapper").stop(!0,!0).slideDown(300),$(".button-actions").addClass("active")),!1}),$("#bt_item_user").click(function(){return $(this).hasClass("active")?($("#bt_item_user").removeClass("active"),$(".boxOptions-item_user .boxOptionsWrapper-container").stop(!0,!0).fadeOut(300)):($("#bt_item_user").addClass("active"),$(".boxOptions-item_user .boxOptionsWrapper-container").stop(!0,!0).fadeIn(300)),!1})}),$(function(){$(".catalog-btn").click(function(e){$(".second-menu .catalog").toggleClass("active")})}),$(function(){$(".menu > li").hover(function(){var e=this;setTimeout(function(){($(e).is(":hover")||$(e).hasClass("active"))&&($(e).toggleClass("active"),$(e).hasClass("active")?$(".level2",e).show(50):$(".level2",e).hide(50))},200)}),window.menuGrid=!1,$(".level2 > li").hover(function(){var e=this;setTimeout(function(){($(e).is(":hover")||$(e).hasClass("active"))&&($(e).toggleClass("active"),$(e).hasClass("active")?($(".sub_menu",e).fadeIn(100),window.menuGrid&&$(".grid").masonry("destroy"),window.menuGrid=$(".grid").masonry({columnWidth:280,itemSelector:".item",isFitWidth:!0})):$(".sub_menu",e).fadeOut(150))},200)})}),$(function(){function e(e,t){var n=[],i=[],o=0,a=t.length%e;t.each(function(s,r){n.push(parseInt($(r).height())),i.push(parseInt(s)),t.length-s<=a&&(e=a),(s+1)%e==0&&(o=Math.max.apply(null,n),i.forEach(function(e,t){$(".categories .item:nth-child("+(e+1)+")").height(o)}),n=[],i=[],o=0)})}$(window).width()>991?e(4,$(".categories .item")):$(window).width()>768&&$(window).width()<=991?e(3,$(".categories .item")):$(window).width()>575&&$(window).width()<=768&&e(2,$(".categories .item"))});