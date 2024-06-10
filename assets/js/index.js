$(document).ready(function () {
    $('#toggle').change(function () {
        if ($(this).is(':checked')) {
            $('.pricing-num').each(function () {
                var annualPrice = $(this).data('annually');
                $(this).text(`${annualPrice}`);
            });

            $('.pricing-desc').each(function () {
                var annualDesc = $(this).data('annually');
                $(this).text(`${annualDesc}`);
            });

            $('.toggle-prices').toggleClass('left');
            $('.toggle-prices').toggleClass('right');
            $('.col:nth-last-child(2) .pricing-card').removeClass('selected-pricing');
            $('.col:last-child .pricing-card').addClass('selected-pricing');
            $('.pricing-desc').css('color', 'var(--primary-bolder-color)');
            $('.pricing-desc').css('color', 'var(--primary-bolder-color)');
            $('.pricing-desc').css('font-size', '1.8rem');
            $('.pricing-desc').css('font-size', '1.8rem');

        } else {
            $('.pricing-num').each(function () {
                var monthlyPrice = $(this).data('monthly');
                $(this).text(`${monthlyPrice}`);
            });

            $('.pricing-desc').each(function () {
                var monthlyDesc = $(this).data('monthly');
                $(this).text(`${monthlyDesc}`);
            });

            $('.toggle-prices').toggleClass('left');
            $('.toggle-prices').toggleClass('right');
            $('.col:nth-last-child(2) .pricing-card').addClass('selected-pricing');
            $('.col:last-child .pricing-card').removeClass('selected-pricing');
            $('.pricing-desc').css('color', 'unset');
            $('.pricing-desc').css('color', 'unset');
            $('.pricing-desc').css('font-size', '1.5rem');
            $('.pricing-desc').css('font-size', '1.5rem');
        }
    });

    $('#toggle').trigger('change');
});