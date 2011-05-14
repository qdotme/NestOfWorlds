window.addEvent("domready", function() {

  
    var AudioletApp = new Class({
        initialize: function() {
            this.audiolet = new Audiolet();
	    
	    this.sine = new Sine(this.audiolet, 440);

	    this.sine.connect(this.audiolet.output);
        }
    });

    this.audioletApp = new AudioletApp();
    
});

