      function HexLife()
      {
	this.dimx = 46;
	this.dimy = Math.floor(this.dimx/2);
	this.offx = Math.floor(this.dimx/2);
	this.offy = Math.floor(this.dimy/2);

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


	this.sound = function() {
	  this.foreach ( function(hl, x, y) { hl.HexArray[x][y].audiofreq = x*50+y; });
	  
	  this.HexArray[this.offx][this.offy+2].audiofreq = 880;
	  this.HexArray[this.offx+1][this.offy+1].audiofreq = 440;
	  
	}

	this.seed = function() {
	  this.foreach( function(hl, x, y) { hl.HexArray[x][y].val = 0 } );
	  this.HexArray[this.offx][this.offy].val = 1;
	  this.HexArray[this.offx+1][this.offy].val = 1;
	  this.HexArray[this.offx+2][this.offy].val = 1;
	  this.HexArray[this.offx][this.offy+1].val = 1;
	  this.HexArray[this.offx][this.offy+2].val = 1;
	  this.HexArray[this.offx+1][this.offy+1].val = 1;
	  
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
