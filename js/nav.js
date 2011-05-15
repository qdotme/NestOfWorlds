var Nav = {
    init: function() {
        $('button').click(function(evt) {Nav.handle_button(evt.target)});
        Nav.dim_unimplemented_buttons();
    },

    dim_unimplemented_buttons: function() {
        $('button').each(function(idx, button) {
            if (!Nav.get_handler(button.id))
                button.addClass('inactive');
        });
    },

    hide_popups: function() {
        $('.popup').css({display: 'none'});
    },

    show_popup: function(name) {
        Nav.hide_popups()
        $('.popup-' + name).css({display: 'block'});
    },

    handle_button: function(button) {
        var handler = Nav.get_handler(button.id);
        if (handler) {
            handler();
        } else
            alert(button.id + ': not implemented yet');
    },

    get_handler: function(id) {
        return Nav[id.replace(/-/g, '_')];
    },

    bt_save: function(id) {
        $('#popup-save').css({display: 'block'});
        $('#popup-save-name').focus();
    },

    bt_save_cancel: function(id) {
        Nav.show_popup('save');
    },

    bt_save_submit: function(id) {
        $.post('/_js/world/add/', {name: $('#popup-save-name').val(),
                                   content: 'TODO'},
               function() {
                   Nav.hide_popups();
               })
    },

/*
    bt_about: function() { Nav.popup('about') },
    bt_howto: function() { Nav.popup('howto') },
    bt_credits: function() { Nav.popup('credits') },
    bt_contact: function() { Nav.popup('contact') },
*/

    bt_seed: function(id) {
        document.hs.hl.seed();
    },

    bt_redraw: function(id) {
        document.hs.hv.redraw(document.hs.hl);
    },

    bt_step: function(id) {
        document.hs.step();
    },

    bt_play: function(id) {
        document.hs.play();
    },

    bt_stop: function(id) {
        document.hs.stop();
    },
    
    bt_clear: function(id) {
	document.hs.clear();
    },
    
    bt_random: function(id) {
	document.hs.hl.random();
	document.hs.hv.redraw(document.hs.hl);
    },

    popup: function(name) {
        $('popup-' + name).css({display: 'block'});
    }
};
