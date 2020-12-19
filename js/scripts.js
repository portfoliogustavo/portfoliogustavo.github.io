//Script Scroll
        $("a[href^='#']").click(function (e) {
            e.preventDefault();

            var position = $($(this).attr("href")).offset().top;

            $("body, html").animate({
                scrollTop: position
            }, 1200);
        });

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
