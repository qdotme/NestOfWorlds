      function HexLife() 
      {
	var self = this;
	
	this.dimx = 34;
	this.dimy = Math.floor(this.dimx/2);
	this.offx = Math.floor(this.dimx/2);
	this.offy = Math.floor(this.dimy/2);

	this.HexArray = new Array(this.dimx);
	
	this.trigger = Object();

	this.startbudget = 0.5;
	this.budget = this.startbudget;
	this.scount = 0;
	
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

	this.octave0 = [130.81,  146.83,  164.81,  192,     220 ];
	this.octave1 = [261.63,  293.66,  329.63,  392,     440 ];
	this.octave2 = [523.25,  587.33,  659.26,  784,     880 ];
	this.octave3 = [1046.5,  1174.66, 1318.51, 1567.98, 1760];

	this.octaves = this.octave0.concat(
		       this.octave1.concat(
		       this.octave2 ));
	
	this.sound_model_randoctave = function () {
	  self.foreach ( function(hl, x, y) 
	    { hl.HexArray[x][y].audiofreq = 
		self.octaves[Math.floor(Math.random() * self.octaves.length)] } )
	};
		
	
	this.sound_model_sat = function() {
	  // this.foreach ( function(hl, x, y) { hl.HexArray[x][y].audiofreq = 200 + Math.floor(Math.random()*2000); });
//	  this.foreach ( function(hl, x, y) { hl.HexArray[x][y].audiofreq = 200 + 20*x + y });

	    var octave1=this.octave0;
	    var octave2=this.octave1;
	    var octave3=this.octave2;

	    var y=0; // this.offy;
	    var x=0;
	    
	    this.HexArray[x][y].audiofreq = octave2[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave2[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave3[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave2[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave1[0]; x++;
	    this.HexArray[x][y].audiofreq = octave3[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave2[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave3[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave2[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave2[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave1[1]; x++;
	    this.HexArray[x][y].audiofreq = octave2[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave3[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave2[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave3[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave1[2]; x++;
	    this.HexArray[x][y].audiofreq = octave3[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave3[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave2[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave3[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave1[3]; x++;
	    this.HexArray[x][y].audiofreq = octave2[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave2[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave2[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave3[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave1[4]; x++;
	    this.HexArray[x][y].audiofreq = octave2[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave3[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave3[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave2[Math.floor(Math.random() * 5)]; x++;
	    this.HexArray[x][y].audiofreq = octave2[0]; x++;
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
	
	this.sound = this.sound_model_randoctave;

	this.clear = function() {
	  this.foreach( function(hl, x, y) { hl.HexArray[x][y].newval = 0 } );
	  this.swap();
	  console.log("B: " + this.budget + "; C: " + this.scount);
	  this.budget = this.startbudget;
	  this.scount = 0;
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
	  this.HexArray[this.offx+1][this.offy].newval = 1;
	  this.HexArray[this.offx][this.offy+1].newval = 1;
	  this.HexArray[this.offx-1][this.offy+1].newval = 1;
	  this.HexArray[this.offx-1][this.offy].newval = 1;
	  this.HexArray[this.offx+2][this.offy-1].newval = 1;
	  this.swap();
	}
	
	this.random = function () {
	  this.clear();
	  this.foreach( function(hl, x, y) 
	    { hl.HexArray[x][y].newval = Math.floor(Math.random()*2); });
	  this.swap();
	}
	
	this.jsonurl = "repo/glider.json";
	
	
	
	this.json = function() {
// 	  console.log("Fetching JSON, " + self.jsonurl);
	  self.clear();
	  $.ajaxSetup( { "async": false } );
	      // For now..
	  $.getJSON(self.jsonurl, function(json) {
// 	    console.log("JSON: " + json);
	    $.each(json, function(i, item){
	      
	      self.HexArray[item.x][item.y].x = item.x;
	      self.HexArray[item.x][item.y].y = item.y;
	      // self.HexArray[item.x][item.y].val = item.val;
	      self.HexArray[item.x][item.y].newval = item.val;
// 	      console.log(self.HexArray[item.x][item.y]);
	    });
	    
	    self.swap();
	    
	    document.hs.hv.redraw(document.hs.hl);
	  });
	}
	
	this.seed = this.json;
	/*
	this.seed = function() {
	}
	*/
	
	this.swap = function() {

	  console.log("Pre -Swap: B: " + this.budget + ", S: " + this.scount + ", C: " + Object.keys(this.trigger).length);
	  this.trigger = Object();
	  this.foreach( function(hl, x, y) { hl.HexArray[x][y].swap() } );
	  console.log("Post-Swap: B: " + this.budget + ", S: " + this.scount + ", C: " + Object.keys(this.trigger).length);
	}
	
	this.update = function() {
	  var count=0;
	  this.foreach( function(hl, x, y) { count+=hl.HexArray[x][y].update() } );
	  this.swap();
	  return this;
	}

    this.as_json = function() {
	var savearray= new Array;
	var i = 0;
	
	this.foreach ( function (hl, x, y) 
	  { 
	    if (hl.HexArray[x][y].val == 1) {
	      savearray[i] = new Object;
	      savearray[i].x = hl.HexArray[x][y].x;
	      savearray[i].y = hl.HexArray[x][y].y;
	      savearray[i].val = hl.HexArray[x][y].val;
	      i++;
	    }
	  } );
	    
        return JSON.stringify(savearray);
    }



      }
