


    var Synth = new Class({
        Extends: AudioletGroup,
        initialize: function(audiolet, frequency, volume) {
            AudioletGroup.prototype.initialize.apply(this, [audiolet, 0,
1]);
            this.sine = new Sine(this.audiolet, frequency);
            this.modulator = new Saw(this.audiolet, frequency * 2);
            this.modulatorMulAdd = new MulAdd(this.audiolet, frequency / 2,
                                              frequency);

	    this.volume = volume;
	    
            this.gain = new Gain(this.audiolet, volume);
            this.envelope = new PercussiveEnvelope(this.audiolet, 1, 0.2,
0.5,
                function() {
                    this.audiolet.scheduler.addRelative(0,

this.remove.bind(this));
                }.bind(this)
            );

            this.modulator.connect(this.modulatorMulAdd);
            this.modulatorMulAdd.connect(this.sine);

//            this.envelope.connect(this.gain, 0, 1);
            this.sine.connect(this.gain);

            this.gain.connect(this.outputs[0]);
        }
    });
	

      function HexAudio() 
      {
	this.audiolet = new Audiolet(22050);


	
	this.update = function(hl) {
	  
	  // console.log(hl.trigger);
	  console.log(hl.trigger);
	  console.log("Playing: " + hl.scount + "; " + "Budget: " + hl.budget);
	  /*
	    $.each(hl.trigger.keys, function(i, item) {
	      console.log("item" + item);
	    }); 
	  */
	}	
      }
