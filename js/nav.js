var Nav = {
    init: function() {
        $('button').click(function(evt) {Nav.handle_button(evt.target.id)});
        Nav.dim_unimplemented_buttons();
    },

    dim_unimplemented_buttons: function() {
        $('button').each(function(idx, button) {
            console.log(Nav.get_handler(button.id));
            if (!Nav.get_handler(button.id)) {
                console.log('no: ' + button.id);
                button.addClass('inactive');
            }
        });
    },

    handle_button: function(id) {
        var handler = Nav.get_handler(id);
        if (handler)
            handler();
        else
            alert(id + ': not implemented yet');
    },

    get_handler: function(id) {
        return Nav[id.replace('-', '_')];
    },

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
    }
};
