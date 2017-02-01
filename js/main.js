var activeIndex = 0,
    limit = 0,
    disabled = false,
    $stage = void 0,
    canvas = false;

var setIndexes = function () {
    $('.spinner').children().each(function (i, el) {
        $(el).attr('data-index', i);
        limit++;
    });
};

var duplicateSpinner = function () {
    var $el = $('.spinner').parent();
    var html = $('.spinner').parent().html();
    $el.append(html);
    $('.spinner').last().addClass('turn-right');
    $('.turn-right').removeClass('turn-left');
};

var prepareDom = function () {
    setIndexes();
    duplicateSpinner();
};

var spin = function () {
    var inc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    if (disabled) return;
    if (!inc) return;
    activeIndex += inc;
    disabled = true;

    if (activeIndex >= limit) {
        activeIndex = 0;
    }

    if (activeIndex < 0) {
        activeIndex = limit - 1;
    }

    var $activeEls = $('.front-side.js-active');
    var $nextEls = $('.front-side[data-index=' + activeIndex + ']');
    $nextEls.addClass('js-next');

    if (inc > 0) {
        $stage.addClass('js-spin-top');
    } else {
        $stage.addClass('js-spin-bottom');
    }

    window.setTimeout(function () {
        spinCallback(inc);
    }, 1500, inc);
};

var spinCallback = function (inc) {
    $('.js-active').removeClass('js-active');
    $('.js-next').removeClass('js-next').addClass('js-active');
    $stage.addClass('js-transitions-disabled').removeClass('js-spin-top').removeClass('js-spin-bottom');

    $('.js-active').each(function (i, el) {
        var $el = $(el);
        $el.prependTo($el.parent());
    });
    window.setTimeout(function () {
        $stage.removeClass('js-transitions-disabled');
        disabled = false;
    }, 100);
};

var attachListeners = function () {

    $("li").on("click", function(e) {
      spin(e.target.dataset.index - activeIndex);
    });

    $(".goBack").on("click", function(e) {
      spin(e.target.dataset.index - activeIndex);
    });

    document.onkeyup = function (e) {
        switch (e.keyCode) {
            case 38:
                spin(-1);
                break;
            case 40:
                spin(1);
                break;
        }
    };

};

var assignEls = function () {
    $stage = $('.static-display');
};

var init = function () {
    assignEls();
    prepareDom();
    attachListeners();
};

function createCarousel(){
    // var newCarousel = $('<div class="controls"></div><div class="static-display"><div class="spinner spinner--left"></div></div>');
    var newCarousel = $('<div class="static-display"><div class="spinner spinner--left"></div></div>');
    $('.carousel').append(newCarousel);
}

$(document).ready(function () {

    createCarousel();

    var cubeSize = parseInt($("#carousel")[0].dataset.panes);
    var paragraphs = $(".static-context");
    var images = $(".static-image");
    console.log(paragraphs);
    for (var i = 0 ; i < cubeSize ; i++ ) {

        var $newContext = $(paragraphs[i].innerHTML) || "";
        var $newImage = $(images[i].innerHTML) || "";

        var staticCarousel = paragraphs[i].parentNode;
        staticCarousel.removeChild(paragraphs[i]);

        var staticImage = images[i].parentNode;
        staticImage.removeChild(images[i]);

        var $newPane = $('<div class="front-side"><div class="content" data-pic=' + i + '><div class="mask"><div class="static-left-window pane' + i + '"></div><div class="static-right-window"></div></div></div></div>');

        $(".spinner").append($newPane);

        $leftWindow = $('.content .static-left-window').last();
        $rightWindow = $('.content .static-right-window').last();

        $newContext.appendTo($rightWindow);
        $leftWindow.css("background", "rgba(" + (124-((i+1)*10)) + "," + (239-((i+1)*10)) + "," + (255-((i+1)*10)) + ",1)");
        // $rightWindow.css("background", "url(assets/diving" + (i+1)%4 + ".jpg)");
        $rightWindow.css("background", "rgba(" + (200+((i+1)*7)) + "," + (149+((i+1)*7)) + "," + (202+((i+1)*7)) + ",1)");
        $newImage.appendTo($leftWindow);

        if ( i === 0 ) {
            $(".front-side").addClass("js-active");
            $leftWindow.css("background", "none");
            $rightWindow.css("background", "none");
            $('.content').css("background", "url(assets/diving.jpg)");
        }
    }

    // $("li").on("click", function(e) {
    //   spin(e.target.dataset.index - activeIndex);
    // });

    var whatever = false;

    init();
});
