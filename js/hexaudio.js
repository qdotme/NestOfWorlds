


    var Synth = new Class({
        Extends: AudioletGroup,
        initialize: function(audiolet, frequency) {
            AudioletGroup.prototype.initialize.apply(this, [audiolet, 0,
1]);
            this.sine = new Sine(this.audiolet, frequency);
            this.modulator = new Saw(this.audiolet, frequency * 2);
            this.modulatorMulAdd = new MulAdd(this.audiolet, frequency / 2,
                                              frequency);

            this.gain = new Gain(this.audiolet);
            this.envelope = new PercussiveEnvelope(this.audiolet, 1, 0.2,
0.5,
                function() {
                    this.audiolet.scheduler.addRelative(0,

this.remove.bind(this));
                }.bind(this)
            );

            this.modulator.connect(this.modulatorMulAdd);
            this.modulatorMulAdd.connect(this.sine);

            this.envelope.connect(this.gain, 0, 1);
            this.sine.connect(this.gain);

            this.gain.connect(this.outputs[0]);
        }
    });
	

      function HexAudio() 
      {
	this.audiolet = new Audiolet(22050);
      }
