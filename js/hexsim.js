      function HexSim()
      {
	this.ha = new HexAudio();

	this.hv = new HexView();
	this.hl = new HexLife();


	this.step = function() {
	  this.hl.update();
	  this.hv.redraw(this.hl);
	}

	this.play = function () {
	  var start = new Date().getTime();
	  this.step();
	  var end = new Date().getTime();
	  console.log("Execution time: " + (end-start));
	  this.timer = setTimeout("document.hs.play()", 200);
	}

	this.stop = function () {
	  clearTimeout(this.timer);
	}
      }
