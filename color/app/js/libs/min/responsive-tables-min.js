$(document).ready(function(){function n(n){n.wrap("<div class='table-wrapper' />");var e=n.clone();e.find("td:not(:first-child), th:not(:first-child)").css("display","none"),e.removeClass("responsive"),n.closest(".table-wrapper").append(e),e.wrap("<div class='pinned' />"),n.wrap("<div class='scrollable' />"),i(n,e)}function e(n){n.closest(".table-wrapper").find(".pinned").remove(),n.unwrap(),n.unwrap()}function i(n,e){var i=n.find("tr"),o=e.find("tr"),t=[];i.each(function(n){var e=$(this),i=e.find("th, td");i.each(function(){var e=$(this).outerHeight(!0);t[n]=t[n]||0,e>t[n]&&(t[n]=e)})}),o.each(function(n){$(this).height(t[n])})}var o=!0,t=function(){if($(window).width()<1023&&!o){return o=!0,$("table.responsive").each(function(e,i){n($(i))}),!0;console.log(o)}else o&&$(window).width()>1023&&(o=!1,$("table.responsive").each(function(n,i){e($(i))}),console.log(o))};$(window).load(t),$(window).on("redraw",function(){o=!1,t()}),$(window).on("resize",t)});