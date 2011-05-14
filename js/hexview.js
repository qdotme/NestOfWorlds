      function HexView() 
      {
	this.canvas = document.getElementById("hexcanvas");
	this.ctx = this.canvas.getContext("2d");

	var canvas = this.canvas;
	
	this.r = 0;
	this.yx = Math.sqrt(3)/2;
	
	this.rcoords = function(x, y) {
	  x -= 2*this.r;
	  y -= 2*this.r;
	  x /= 2*this.r;
	  y /= 2*this.r;

	  y /= this.yx; 
	  x -= y/2; 
	  
	  var rval = new Object;
	  rval.x = Math.round(x);
	  rval.y = Math.round(y);
	  
	  return rval;
	}
	
	this.onClick = function(e) {

	  
	  var x; var y;
	  var hv = this;
	  
	  if (e.pageX != undefined && e.pageY != undefined) {
	    x = e.pageX;
	    y = e.pageY;
	  } else {
	    x = e.clientX + document.body.scrollLeft + 
		document.documentElement.scrollLeft;
	    y = e.clientY + document.body.scrollTop + 
		document.documentElement.scrollTop;
	  }
	  x -= canvas.offsetLeft;
	  y -= canvas.offsetTop;
	  console.log(" " + x + " " + y + " ");	    
	  
	  var rval = document.hs.hv.rcoords(x, y);
	  
	  console.log(rval);
	  
	  document.hs.hl.trigger = Array();
	  
	  if (document.hs.hl.HexArray[rval.x][rval.y].val == 1)
	    document.hs.hl.HexArray[rval.x][rval.y].newval = 0;
	  else if (document.hs.hl.HexArray[rval.x][rval.y].val == 0)
	    document.hs.hl.HexArray[rval.x][rval.y].newval = 1;
	  
	  document.hs.hl.HexArray[rval.x][rval.y].swap();
	  document.hs.hv.redraw(document.hs.hl);
	}
	
	
	this.canvas.addEventListener("click", this.onClick, false);
	
	

	
	
	this.coords = function(x, y) {
	  var rval = new Object;

	  rval.x = x + y/2;
	  rval.y = y*this.yx;

	  return rval;
	}

	this.drawpoint = function(ctx, x, y, rr, cc) {
	  this.ctx.beginPath();
	  this.ctx.arc(x, y, rr, 0, Math.PI*2, true);
	  this.ctx.closePath();
	  this.ctx.fillStyle = cc;
	  this.ctx.fill();
	}

	this.redraw = function(life) {
	  this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
	  var hv = this;

	  var r = Math.min(this.ctx.canvas.width/(2*(life.dimx+0.5*life.dimy)), this.ctx.canvas.height/(2*life.dimy*this.yx));
	  this.r = r;

	  life.foreach( function(hl, x, y) { 
	      var coords = hv.coords(x, y);
	      if (hl.HexArray[x][y].val == 1)
		hv.drawpoint(hv.ctx, r+coords.x * 2*r, r+coords.y * 2*r, r, '#FFF');
	      else
		hv.drawpoint(hv.ctx, r+coords.x * 2*r, r+coords.y * 2*r, r, '#111');
	  });
	}

      }
