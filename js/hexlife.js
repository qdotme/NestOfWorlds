      function HexLife()
      {
	this.dimx = 45;
	this.dimy = this.dimx;
	this.offx = Math.floor(this.dimx/2);
	this.offy = this.offx;

	this.HexArray = new Array(this.dimx);
	
	

	for (var i=0; i< this.dimx; i++) {
	  this.HexArray[i] = new Array(this.dimy);
	}

	this.foreach = function(what) {
	  for (var i=0; i< this.dimx; i++) {
	    for (var j=0; j< this.dimy; j++) {
	      what(this, i, j);
	    }
	  }
	}

	this.foreach( function(hl, x, y) { hl.HexArray[x][y] = new HexNode(hl, x, y) });

	this.get = function(x ,y) {
	  return this.HexArray[x+this.offx][y+this.offy];
	}


	this.seed = function() {
	  this.foreach( function(hl, x, y) { hl.HexArray[x][y].val = 0 } );
	  this.HexArray[this.offx][this.offy].val = 1;
	  this.HexArray[this.offx+1][this.offy].val = 1;
	  this.HexArray[this.offx+2][this.offy].val = 1;
	  this.HexArray[this.offx][this.offy+1].val = 1;
	  this.HexArray[this.offx][this.offy+2].val = 1;

	  this.HexArray[this.offx+1][this.offy+1].val = 1;
	  //this.HexArray[this.offx+1][this.offy+1].audio = new Sine(document.hs.ha.audiolet, 440);
	  
	  // this.HexArray[this.offx+1][this.offy+1].audio.connect(document.hs.ha.audiolet.output);
	  // this.HexArray[this.offx+1][this.offy+1].audio.remove();
//	  document.hs.ha.audiolet.output.disconnect(this.HexArray[this.offx+1][this.offy+1].audio);
	  return this;
	}

	this.update = function() {
	  this.foreach( function(hl, x, y) { hl.HexArray[x][y].update() } );
	  this.foreach( function(hl, x, y) { hl.HexArray[x][y].swap() } );
	  return this;
	}



      }
