function onScroll(o){var n=$(document).scrollTop()+200;$('.navbar-nav a[href^="#"]').each(function(){var o=$(this),t=$(o.attr("href"));t&&t.position().top<=n&&t.position().top+t.height()>n?($(".navbar-nav ul li a").removeClass("active"),o.addClass("active")):o.removeClass("active")})}window.currentSlide="brand_i_1",$(function(){$(".brands-sl-item").click(function(){var o=$(this).data("id");window.currentSlide!=o&&(window.currentSlide=o,$(".brands-item").slideUp(300),$(".brands-items").find("[data-id='"+o+"']").slideDown(300))}),$(".brands-sl").slick({slidesToShow:5,slidesToScroll:1,arrows:!0,infinite:!0,centerMode:!0,variableWidth:!0,focusOnSelect:!0})}),$(document).ready(function(){$(document).on("scroll",onScroll),$('a[href^="#"]').on("click",function(o){o.preventDefault(),$(document).off("scroll"),$("a").each(function(){$(this).removeClass("active")}),$(this).addClass("active");var n=this.hash;$target=$(n),$("html, body").stop().animate({scrollTop:$target.offset().top-100},500,"swing",function(){$(document).on("scroll",onScroll)})})});