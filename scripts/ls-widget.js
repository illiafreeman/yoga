!function(n){n(document).ready(function(){n("body").on("click","h3.ls-widget-heading",function(){var e=n(this).next();e.hasClass("group-open")?(e.removeClass("group-open"),n(this).children("span").text("+")):(e.addClass("group-open"),n(this).children("span").text("-"))}),n(document).on("click",".wppb-builder-edit-panel [data-ywc-widget-checkbox]",function(){n(this).attr("value",this.checked?1:0)}),n(document).on("change",".wppb-builder-edit-panel [data-ywc-widget-image]",function(){n(this).parent().find("img").attr("src",n(this).val())}),n(document).on("click",".wppb-builder-edit-panel [data-ywc-widget-multi-checkbox]",function(){var e=n(this).attr("name"),t=n("input[name='"+e+"']:checked").map(function(e,t){return t.value}).toArray().join(",");n("input[name='"+e.replace("_item","")+"']").attr("value",t)})})}(jQuery);
//# sourceMappingURL=ls-widget.js.map
