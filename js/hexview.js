      function HexView() 
      {
	this.canvas = document.getElementById("hexcanvas");
	this.ctx = this.canvas.getContext("2d");

	this.yx = Math.sqrt(3)/2;

	this.coords = function(x, y) {
	  var rval = new Object;

	  rval.x = x + y/2;
	  rval.y = y*this.yx;

	  return rval;
	}

	this.drawpoint = function(ctx, x, y, r) {
	  this.ctx.beginPath();
	  this.ctx.arc(x, y, r, 0, Math.PI*2, true);
	  this.ctx.closePath();
	  this.ctx.fill();
	}

	this.redraw = function(life) {
	  this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
	  var hv = this;

	  var r = Math.min(this.ctx.canvas.width/(2*life.dimx*1.5), this.ctx.canvas.height/(2*life.dimy*this.yx));

	  life.foreach( function(hl, x, y) { 
	      var coords = hv.coords(x, y);
	      if (hl.HexArray[x][y].val == 1)
		hv.drawpoint(hv.ctx, r+coords.x * 2*r, r+coords.y * 2*r, r);
	  });
	}

      }
