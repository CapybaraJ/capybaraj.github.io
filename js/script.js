// build time:Thu Apr 02 2020 15:45:28 GMT+0800 (中国标准时间)
(function(e){var t=1e3;var a=e("#totop");var r=500;e(window).scroll(function(){var r=e(document).scrollTop();if(r>t){e(a).stop().fadeTo(300,1)}else{e(a).stop().fadeTo(300,0)}});e(a).click(function(){e("html, body").animate({scrollTop:0},r);return false});var i=function(){return"ActiveXObject"in window};if(i()){e("#contenedor").hide()}else{var n=e(".cube"),o=e("#contenedor").offset(),s=o.left+50,l=o.top+50;n.on({mousemove:function(t){e(this).css("transform","rotateX("+(t.pageY-l)+"deg) rotateY("+(t.pageX-s)+"deg)");e(this).addClass("noanimar").removeClass("animar")},mouseout:function(){e(this).css("transform","rotateX(-25deg) rotateY(32deg)");e(this).addClass("animar").removeClass("noanimar")}})}e("body").on("click",function(){e(".article-share-box.on").removeClass("on");e(".qrcode").hide()}).on("click",".article-share-link",function(t){t.stopPropagation();var a=e(this),r=a.attr("data-share"),i=a.offset();var n=a.attr("data-url"),o=encodeURIComponent(n),s="article-share-box-"+a.attr("data-id");if(e("#"+s).length){var l=e("#"+s);if(l.hasClass("on")){l.removeClass("on");return}}else{var c=['<div id="'+s+'" class="article-share-box">','<input class="article-share-input" value="'+n+'">','<div class="article-share-links">','<a href="https://twitter.com/intent/tweet?url='+o+'" class="article-share-twitter" target="_blank" title="Twitter"></a>','<a href="https://www.facebook.com/sharer.php?u='+o+'" class="article-share-facebook" target="_blank" title="Facebook"></a>','<a href="https://plus.google.com/share?url='+o+'" class="article-share-google" target="_blank" title="Google+"></a>','<a href="https://www.linkedin.com/shareArticle?url='+o+'" class="article-share-linkedin" target="_blank" title="Linkedin"></a>','<a href="http://service.weibo.com/share/share.php?url='+o+'" class="article-share-weibo" target="_blank" title="Weibo"></a>','<a href="http://share.renren.com/share/buttonshare.do?link='+o+'" class="article-share-renren" target="_blank" title="Renren"></a>','<a href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+o+'" class="article-share-qq" target="_blank" title="Qzone"></a>','<a class="article-share-weixin" target="_blank" title="Weixin"></a>',"</div>","</div>"].join("");var l=e(c);e("body").append(l)}l.css({top:i.top+25,left:i.left}).addClass("on");e(".article-share-weixin").click(function(){var t=e(this).parents(".article-share-box").next(".qrcode");if(t.length){t.show()}else{e(this).parents(".article-share-box").after('<div class="qrcode"></div>');t=e(this).parents(".article-share-box").next(".qrcode");t.qrcode({render:"div",size:180,text:encodeURI(n)});t.css({top:i.top+20,left:i.left-150})}})}).on("click",".article-share-box",function(e){e.stopPropagation()}).on("click",".article-share-box-input",function(){e(this).select()}).on("click",".article-share-box-link",function(e){e.preventDefault();e.stopPropagation();window.open(this.href,"article-share-box-window-"+Date.now(),"width=500,height=450")});e(".article-entry").each(function(t){e(this).find("img").each(function(){if(e(this).parent().hasClass("fancybox"))return;var t=this.alt;if(t)e(this).after('<span class="caption">'+t+"</span>");e(this).wrap('<a href="'+this.src+'" title="'+t+'" class="fancybox"></a>')});e(this).find(".fancybox").each(function(){e(this).attr("rel","article"+t)})});if(e.fancybox){e(".fancybox").fancybox()}var c=e("#container"),h=false,f=200;var d=function(){h=true};var u=function(){setTimeout(function(){h=false},f)};e("#main-nav-toggle").on("click",function(){if(h)return;d();c.toggleClass("mobile-nav-on");u()});e("#wrap").on("click",function(){if(h||!c.hasClass("mobile-nav-on"))return;c.removeClass("mobile-nav-on")})})(jQuery);
//rebuild by neat 