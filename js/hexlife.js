      function HexLife() 
      {
	var self = this;
	
	this.dimx = 34;
	this.dimy = Math.floor(this.dimx/2);
	this.offx = Math.floor(this.dimx/2);
	this.offy = Math.floor(this.dimy/2);

	this.HexArray = new Array(this.dimx);
	
	this.trigger = Object();

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
	  if (x >= this.dimx) {
	    x -= this.dimx;
	  }
	  if (x < 0 ) {
	    x += this.dimx;
	  }
	  if (this.HexArray[x] == undefined)
	    return undefined;
	  return this.HexArray[x][y];
	}

	this.count = function () { 
	  var count = 0;
	  this.foreach( function(hl, x, y) { count += hl.HexArray[x][y].val; } );
	  return count;
	}

	this.octaves = [261.63, 293.66, 329.63, 392, 440, 523.25, 587.33,  659.26,  783.99,  880, 1046.5, 1174.66, 1318.51, 1567.98, 1760]

	this.sound = function() {
	  // this.foreach ( function(hl, x, y) { hl.HexArray[x][y].audiofreq = 200 + Math.floor(Math.random()*2000); });
//	  this.foreach ( function(hl, x, y) { hl.HexArray[x][y].audiofreq = 200 + 20*x + y });

	  var octave2=[523.25, 587.33,  659.26,  783.99,  880];
	  var octave3=[1046.5, 1174.66, 1318.51, 1567.98, 1760];
	  // var octave2=[];
	  // var octave3=[];

	    var y=0; // this.offy;
	    var x=0;
	    
	    this.HexArray[x][y].audiofreq = octave2[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave2[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave3[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave2[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = 261.63; x++;
	    this.HexArray[x][y].audiofreq = octave3[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave2[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave3[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave2[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave2[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = 293.66; x++;
	    this.HexArray[x][y].audiofreq = octave2[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave3[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave2[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave3[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = 329.63; x++;
	    this.HexArray[x][y].audiofreq = octave3[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave3[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave2[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave3[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = 392; x++;
	    this.HexArray[x][y].audiofreq = octave2[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave2[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave2[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave3[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = 440; x++;
	    this.HexArray[x][y].audiofreq = octave2[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave3[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave3[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave2[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = 523.25; x++;
	    this.HexArray[x][y].audiofreq = octave2[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave3[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave3[Math.floor(Math.random() * 5)]; x++;
	  
	    
	  for (var x=0; x<this.dimx; x++) {
	    for (var y=1; y<this.dimy; y+=1) {
	      this.HexArray[x][y].audiofreq = this.HexArray[x][y-1].audiofreq;
	    }
	  }
	  
	    
	    

	  /*
	  this.HexArray[17][0].audiofreq = 261.63;
	  this.HexArray[17][0].audiofreq
	  */
	  // this.HexArray[this.offx][this.offy+2].audiofreq = 880;
	  // this.HexArray[this.offx+1][this.offy+1].audiofreq = 440;
	  
	}

	this.clear = function() {
	  this.foreach( function(hl, x, y) { hl.HexArray[x][y].val = 0 } );
	  this.foreach( function(hl, x, y) { hl.HexArray[x][y].newval = 0 } );
	}

	this.coreseed = function() {
	  this.clear();
	  this.HexArray[this.offx][this.offy].newval = 1;
	  this.HexArray[this.offx+1][this.offy].newval = 1;
	  this.HexArray[this.offx+2][this.offy].newval = 1;
	  this.HexArray[this.offx][this.offy+1].newval = 1;
	  this.HexArray[this.offx][this.offy+2].newval = 1;
	  this.HexArray[this.offx+1][this.offy+1].newval = 1;
	  
	  // this.HexArray[this.offx+1][this.offy+1].audio.remove();
//	  document.hs.ha.audiolet.output.disconnect(this.HexArray[this.offx+1][this.offy+1].audio);
	  this.foreach( function(hl, x, y) { hl.HexArray[x][y].swap() } );
	  return this;
	}


	// glider

	this.glider = function() {
	  this.clear();
	  this.HexArray[this.offx+1][this.offy].val = 1;
	  this.HexArray[this.offx][this.offy+1].val = 1;
	  this.HexArray[this.offx-1][this.offy+1].val = 1;
	  this.HexArray[this.offx-1][this.offy].val = 1;
	  this.HexArray[this.offx+2][this.offy-1].val = 1;
	}
	
	this.jsonurl = "foo.json";
	
	
	
	this.json = function() {
	  this.clear();
	  $.getJSON(self.jsonurl, function(json) {
	    $.each(json, function(i, item){
	      self.HexArray[item.x][item.y].x = item.x;
	      self.HexArray[item.x][item.y].y = item.y;
	      self.HexArray[item.x][item.y].val = item.val;
	    });
	  });
	}
	
	this.seed = this.json;
	/*
	this.seed = function() {
	}
	*/
	this.update = function() {
	  var count=0;
	  this.foreach( function(hl, x, y) { count+=hl.HexArray[x][y].update() } );
	  this.trigger = Object();
	  this.foreach( function(hl, x, y) { hl.HexArray[x][y].swap() } );
	  return this;
	}

    this.save = function() {
        JSON.stringify(hl.HexArray);
    }



      }
