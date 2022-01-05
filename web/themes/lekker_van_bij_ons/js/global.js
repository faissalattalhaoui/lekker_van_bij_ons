(function ($, Drupal) {

    'use strict';

    Drupal.behaviors.lekker_van_bij_ons = {
        attach: function (context, settings) {
            $("#rm-person").once().click(function () {
                console.log("remove person")
            })

            $("#add-person").once().click(function () {
                console.log("add person")
            })
        }
    }
})(jQuery, Drupal);