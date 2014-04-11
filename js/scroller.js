    'use strict';
    $(function() {
        $('.adScroller').each(function(i) {
            var div = $(this);
            var startScroll = setInterval(function() {
                var pos = div.scrollTop();
                div.scrollTop(pos + 2);
            }, $(this).data('speed'));

            div.mouseover(function() {
                clearInterval(startScroll);
            });
        });
    })();