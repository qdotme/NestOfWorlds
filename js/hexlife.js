      function HexLife()
      {
	this.dimx = 46;
	this.dimy = Math.floor(this.dimx/2);
	this.offx = Math.floor(this.dimx/4);
	this.offy = Math.floor(this.dimy/4);

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
	  if (x > this.dimx) 
	    x -= this.dimx;
	  return this.HexArray[x][y];
	}

	this.count = function () { 
	  var count = 0;
	  this.foreach( function(hl, x, y) { count += hl.HexArray[x][y].val; } );
	  return count;
	}

	this.sound = function() {
	  this.foreach ( function(hl, x, y) { hl.HexArray[x][y].audiofreq = x*50+y; });
	  
	  this.HexArray[this.offx][this.offy+2].audiofreq = 880;
	  this.HexArray[this.offx+1][this.offy+1].audiofreq = 440;
	  
	}
/*
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
*/

	// glider
	this.seed = function() {
	  this.foreach( function(hl, x, y) { hl.HexArray[x][y].val = 0 } );
	  this.HexArray[this.offx+1][this.offy].val = 1;
	  this.HexArray[this.offx][this.offy+1].val = 1;
	  this.HexArray[this.offx-1][this.offy+1].val = 1;
	  this.HexArray[this.offx-1][this.offy].val = 1;
	  this.HexArray[this.offx+2][this.offy-1].val = 1;
	}

	this.update = function() {
	  var count=0;
	  this.foreach( function(hl, x, y) { count+=hl.HexArray[x][y].update() } );
	  this.foreach( function(hl, x, y) { hl.HexArray[x][y].swap() } );
	  return this;
	}



      }
