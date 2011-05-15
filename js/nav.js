var Nav = {
    init: function() {
        $('button').click(function(evt) {Nav.handle_button(evt.target)});
        Nav.dim_unimplemented_buttons();
    },

    dim_unimplemented_buttons: function() {
        $('button').each(function(idx, button) {
            if (button.id && !Nav.get_handler(button.id))
                button.addClass('inactive');
        });
    },

    hide_popups: function() {
        $('.popup').css({display: 'none'});
    },

    show_popup: function(name) {
        Nav.hide_popups()
        $('#popup-' + name).css({display: 'block'});
    },

    handle_button: function(button) {
        var handler = Nav.get_handler(button.id);
        console.log("id: " + button.id);
        if (button.id) {
            if (handler) {
                handler();
            } else
                alert(button.id + ': not implemented yet');
        }
    },

    get_handler: function(id) {
        return Nav[id.replace(/-/g, '_')];
    },

    disabled_bt_save: function(id) {
        Nav.show_popup('save');
        $('#popup-save-name').focus();
    },

    bt_save_cancel: function(id) {
        Nav.hide_popups();
    },

    bt_save_submit: function(id) {
        $.post('/_js/world/add/', {name: $('#popup-save-name').val(),
                                   content: document.hs.hl.as_json()},
               function() {
                   Nav.hide_popups();
               })
    },

    disabled_bt_load: function(id) {
        Nav.show_popup('load');
        $('#popup-load-content').empty().html('<p>loading...</p>');
        $.getJSON('/_js/world/list/', {},
                  function (data) {
                      console.log('loaded');
                      var items = [];
                      
                      $.each(data['worlds'], function(idx, world) {
                          items.push('<li id="world-' + world['id'] + '">'
                                     + '<a class="load-world" href="#world-' + world['id'] + '">'
                                     + world['name'] + ', '
                                     + world['timestamp'] + '</a></li>');
                          console.log(items[items.length - 1]);
                      });
                      
                      $('#popup-load-content').empty();
                      $('<ul/>', {
                          html: (items.join('')
                                 + items.join('')
                                 + items.join('')
                                 + items.join('')
                                 + items.join('')
                                 + items.join('')
                                 + items.join('')
                                 + items.join('')
                                 + items.join('')
                                 + items.join('')
                                 + items.join('')
                                 + items.join('')
                                 + items.join('')
                                 + items.join('')
                                 + items.join(''))
                      }).appendTo('#popup-load-content');
                      $("#popup-load-content .load-world").click(function(evt) {
                          var id = evt.target.href.replace(/.*#world-/, '');
                          document.hs.hl.jsonurl = '/_js/world/' + id + '/';
                          console.log(document.hs.hl.jsonurl);
                          document.hs.hl.json();
                          Nav.hide_popups();
                          return false;
                      });
                  });
    },

    bt_load_cancel: function(id) {
        Nav.hide_popups();
    },

    bt_about: function() { Nav.show_popup('about'); },
    bt_howto: function() { Nav.show_popup('howto') },
    bt_credits: function() { Nav.show_popup('credits') },
/*    bt_contact: function() { Nav.show_popup('contact') },*/

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
