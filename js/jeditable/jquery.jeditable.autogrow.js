/*
 * Autogrow textarea for Jeditable
 *
 * Copyright (c) 2008 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 * 
 * Depends on Autogrow jQuery plugin by Chrys Bader:
 *   http://www.aclevercookie.com/facebook-like-auto-growing-textarea/
 *
 * Project home:
 *   http://www.appelsiini.net/projects/jeditable
 *
 * Revision: $Id$
 *
 */
 
jQuery.editable.addInputType('autogrow', {
    element : function(settings, original) {
        var textarea = jQuery('<textarea />');
        if (settings.rows) {
            textarea.attr('rows', settings.rows);
        } else {
            textarea.height(settings.height);
        }
        if (settings.cols) {
            textarea.attr('cols', settings.cols);
        } else {
            textarea.width(settings.width);
        }
        jQuery(this).append(textarea);
        return(textarea);
    },
    plugin : function(settings, original) {
        jQuery('textarea', this).autogrow(settings.autogrow);
    }
});
