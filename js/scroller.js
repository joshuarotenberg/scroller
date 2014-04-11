    'use strict';
    $(function() {
        $('.adScroller').each(function() {
            var div = $(this);
            var startScroll = setInterval(function() {
                var pos = div.scrollTop();
                div.scrollTop(pos + 2);
            }, $(this).data('speed'));

            div.mouseover(function() {
                clearInterval(startScroll);
            });
        });
        $('img.restart').each(function() {
            var img = $(this);
            var src = img.attr('src');
            img.attr('src', src+'?'+Date.now());
        });
    });