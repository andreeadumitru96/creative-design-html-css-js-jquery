
let resetAccordion = () => {
    $('.accordion-item__content').css({'display':'none'});
    $('.accordion-item__title').removeClass('accordion__title--black');
    $('.accordion-item__title').find('i').remove();
    $('.accordion-item__title').append('<i class="fas fa-angle-down"></i>');
};

let doNavigationStickyScroll = () => {
    
    let $navigation = $('.navigation');
    let headerWidthOffset = $navigation.height() + 3;
    
    if($(window).scrollTop() > headerWidthOffset) {
        $navigation.addClass("js-navigation-sticky");
    } else {
        $navigation.removeClass("js-navigation-sticky");
    }
}

let bindEventHandlers = () => {
    $(window).on('scroll', doNavigationStickyScroll);

    $('.main__carousel').flickity({   
        cellAlign: 'left',
        contain: true
    });

    $('.js-toggle-accordion').on('click', function() {
        let $content = $(this).next();

        if($content.css('display') === 'flex') {
            resetAccordion();
        } else {
            resetAccordion();
            $content.css({'display': 'flex'});
            $(this).addClass('accordion__title--black');
            $(this).find('i').remove();
            $(this).append('<i class="fas fa-angle-up"></i>');         
        }
    });

    $('.mobile-list-button').on('click', () => {
        $('.mobile-list').toggle('fast');
    });

    $(document).on('click', (e) => {
        let $mobileList = $('.mobile-list');
        let $mobileListBtn = $('.mobile-list-button')

        if (!$mobileListBtn.is(e.target) && $mobileListBtn.has(e.target).length === 0) {
            $mobileList.hide();
        }
    
    })
};

$(document).ready(() => {
	bindEventHandlers();
})