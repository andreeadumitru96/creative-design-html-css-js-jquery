
let resetAccordion = () => {
    $('.accordion-item__content').css({'display':'none'});
    $('.accordion-item__title').removeClass('accordion__title--black');
    $('.accordion-item__title').find('i').remove();
    $('.accordion-item__title').append('<i class="fas fa-angle-down"></i>');
};

let bindEventHandlers = () => {
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
};

$(document).ready(() => {
	bindEventHandlers();
})