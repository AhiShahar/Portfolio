var activeIndex = 0,
    limit = 0,
    disabled = false,
    $stage = void 0,
    canvas = false;

// set index pages for all panes of the animation, to reference while spinning
var setIndexes = function () {
    $('.spinner').children().each(function (i, el) {
        $(el).attr('data-index', i);
        limit++;
    });
};

// creates opposite spinner and set it to spin the opposite direction
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

// spin the carousel
var spin = function () {
    // check if there was a call for a specific pane or just next
    var inc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;


    if (disabled) return;

    // prevents from recalling the same pane
    if (!inc) return;

    // set the activeIndex to the requested index
    activeIndex += inc;

    // update the spin callback
    disabled = true;

    if (activeIndex >= limit) {
        activeIndex = 0;
    }
    // two condition to reset going from first pane to -1 and from last to over the length
    if (activeIndex < 0) {
        activeIndex = limit - 1;
    }

    // readjust all the classes for the requested pane and current pane
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

// reset all the current classes and end the animation so the next one can be called
var spinCallback = function (inc) {
    $('.js-active').removeClass('js-active');
    $('.js-next').removeClass('js-next').addClass('js-active');
    $stage.addClass('js-transitions-disabled').removeClass('js-spin-top').removeClass('js-spin-bottom');

    $('.js-active').each(function (i, el) {
        var $el = $(el);
        $el.prependTo($el.parent());
    });

    // function the classes is removed before it is called so added a cb delay
    window.setTimeout(function () {
        $stage.removeClass('js-transitions-disabled');
        disabled = false;
    }, 100);
};

var attachListeners = function () {
    // attach all the events after the creation of the carousel, to get the currect index.
    $(".arrowUp").click( function() {
        spin(-1);
    });
    $(".arrowDown").click( function() {
        spin(1);
    });
    $("li").on("click", function(e) {
      spin(e.target.dataset.index - activeIndex);
    });
    $(".goBack").on("click", function(e) {
      spin(e.target.dataset.index - activeIndex);
    });
    document.onkeyup = function (e) {
        switch (e.keyCode) {
            case 38: // arrow key up
                spin(-1);
                break;
            case 40: // arrow key down
                spin(1);
                break;
        }
    };

};

var assignEls = function () {
    // save the first panes after load
    $stage = $('.static-display');
};

var init = function () {
    assignEls();
    prepareDom();
    attachListeners();
};

function createCarousel(){
    var newCarousel = $('<div class="static-display"><div class="spinner spinner--left"></div></div>');
    $('.carousel').append(newCarousel);
}

$(document).ready(function () {

    createCarousel();

    var cubeSize = parseInt($("#carousel")[0].dataset.panes); // the number of panes to view
    var paragraphs = $(".static-context"); // an array of all the right panes contexts
    var images = $(".static-image"); // an array of all the left panes contexts

    for (var i = 0 ; i < cubeSize ; i++ ) {

        // clean the data to push into the carousel panes
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

    var itsSafary = function() { // light adjustments for safary browser compatibility
        $(".contact").css("top","15vh");
        $(".intro").css("top","25vh");
        $(".projectLinks").css("top","25vh");
    };

    if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
        itsSafary();
    }

    init();
});
