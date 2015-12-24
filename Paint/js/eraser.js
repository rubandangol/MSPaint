function Eraser(canvas, ctx, mouse, start_mouse, mousePoints) {
	
	this.init = function() {
		
		// Saving all the points in an array
		mousePoints.push({x: mouse.x, y: mouse.y});
		
		ctx.globalCompositeOperation = 'destination-out';
		ctx.fillStyle = 'rgba(0,0,0,1)';
		ctx.strokeStyle = 'rgba(0,0,0,1)';
		
		if (mousePoints.length < 3) {
			var b = mousePoints[0];
			ctx.beginPath();
			//ctx.moveTo(b.x, b.y);
			//ctx.lineTo(b.x+50, b.y+50);
			ctx.arc(b.x, b.y, ctx.lineWidth / 2, 0, Math.PI * 2, !0);
			ctx.fill();
			ctx.closePath();
			
			return;
		}
		
		// Tmp canvas is always cleared up before drawing.
		// ctx.clearRect(0, 0, canvas.width, canvas.height);
		
		ctx.beginPath();
		ctx.moveTo(mousePoints[0].x, mousePoints[0].y);
		
		for (var i = 1; i < mousePoints.length - 2; i++) {
			var c = (mousePoints[i].x + mousePoints[i + 1].x) / 2;
			var d = (mousePoints[i].y + mousePoints[i + 1].y) / 2;
			
			ctx.quadraticCurveTo(mousePoints[i].x, mousePoints[i].y, c, d);
		}
		
		// For the last 2 points
		ctx.quadraticCurveTo(
			mousePoints[i].x,
			mousePoints[i].y,
			mousePoints[i + 1].x,
			mousePoints[i + 1].y
		);
		ctx.stroke();
	};

}
