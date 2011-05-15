      function NearNeighbour(x, y) {
	this.val = 1.0;
	this.x = x; 
	this.y = y;
      }

      function FarNeighbour(x, y) {
	this.val = 0.3;
	this.x = x; 
	this.y = y;
      }
      
  
      var Neighbours = new Array();
      Neighbours.push(new NearNeighbour(-1, 1));
      Neighbours.push(new NearNeighbour(0, 1));
      Neighbours.push(new NearNeighbour(1, 0));
      Neighbours.push(new NearNeighbour(1, -1));
      Neighbours.push(new NearNeighbour(0, -1));
      Neighbours.push(new NearNeighbour(-1, 0));

      Neighbours.push(new FarNeighbour(-1, 2));
      Neighbours.push(new FarNeighbour(1, 1));
      Neighbours.push(new FarNeighbour(2, -1));
      Neighbours.push(new FarNeighbour(1, -2));
      Neighbours.push(new FarNeighbour(-1, -1));
      Neighbours.push(new FarNeighbour(-2, 1));

function HexNode(life, x, y)
      {

	this.x = x;
	this.y = y;
	this.val = 0;
	this.newval = 0;

		this.life = life;
	
	this.update = function() {
	  var sum = 0;
	  for (var i=0; i<Neighbours.length; i++) {
	    if 
	      (
	      (this.life.get(this.x+Neighbours[i].x,this.y+Neighbours[i].y) != undefined) &&
	      (this.life.get(this.x+Neighbours[i].x,this.y+Neighbours[i].y).val == 1))
	      sum += Neighbours[i].val;
	  }

//	  console.log (sum);

	  this.newval = this.val;

	  if ((this.val == 1) && (sum < 2.0))
	    this.newval = 0;
	  if ((this.val == 1) && (sum > 3.3))
	    this.newval = 0;

	  if ((this.val == 0) && (sum >=2.3) && (sum <= 2.9))
	    this.newval = 1;
/*
	  if ((this.val == 1) && (sum < 2.0))
	    this.newval = 0;
	  if ((this.val == 1) && (sum > 3.3))
	    this.newval = 0;
	  if ((this.val == 0) && (sum >=2.0) && (sum <= 3.1))
	    this.newval = 1;	  
*/	  
	}
	this.swap = function () {
	  if (this.newval != this.val) {
	    this.val = this.newval;	
 
	    if (this.audiofreq == undefined) {
	      console.info("Missing sound... Really, we miss you!", this);
	    }
	    
	    if ((this.audio != undefined) && (this.val == 0)) {
 	      // console.log("Removing: ", this, this.life.scount);



	      this.life.budget += this.audio.volume;
	      if (this.life.budget > this.life.startbudget) 
		this.life.budget = this.life.startbudget;
	      this.life.scount --;
	      this.audio.remove();
	      this.audio = undefined;
	      // this.audio.disconnect(document.hs.ha.audiolet.output);
	      // document.hs.ha.audiolet.output.disconnect(this.audio);
	      // this.audio.disconnect(document.hs.ha.audiolet.output);
	      // console.log("Removing: ", this, this.life.scount);
	    }
	    
	    if ((this.audiofreq != undefined) && 
	        (this.val == 1) 
		&& (this.audio == undefined)
	       // && (this.life.trigger[this.audiofreq] == undefined)
	       ) {
	      // console.log("Triggering: ", this, this.life.scount);
	      var volume = this.life.budget * 0.2;
	      if (volume > 0.02) {
		this.life.budget -= volume;
		
		this.life.scount++;  
		if (this.life.trigger[this.audiofreq] == undefined){
		  this.life.trigger[this.audiofreq]=0;
		}
		this.life.trigger[this.audiofreq]++;
		
		this.audio = new Synth(document.hs.ha.audiolet, this.audiofreq, volume);
		this.audio.connect(document.hs.ha.audiolet.output);
	      }
	      // console.log("Triggering: ", this, this.life.scount);
	      // this.life.scount;
	    }

	  }
	}
      }
