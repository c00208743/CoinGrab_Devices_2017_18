 /**
 * @fileoverview Player class.
 * @author C00206167@itcarlow.ie (Sean Regan)
 * @author C00208743@itcarlow.ie (Jamie Murphy)
 */

class Player
 {
   /**
  * A player.
  * @constructor
  * @param {integer} x The x position of the square.
  * @param {integer} y The y position of the square.
  * @param {integer} width The width of the square.
  * @param {integer} height The height of the square.
  * @param {Vector3} colour The rgb value of the colour for the square.
  */
  constructor(x, y, width, height, colour)
  {
	 this.x = x;
	 this.y = y;
	 this.width = width;
	 this.height = height;
	 this.colour = colour;

	document.addEventListener("touchstart", onTouchStart);
	document.addEventListener("touchmove", onTouchMove, {passive: false});
	document.addEventListener("touchend", onTouchEnd);

  }



  /**
  * draw function for the player class.
  */
  render()
  {

	 var canvas = document.getElementById('mycanvas');
	 var ctx = canvas.getContext('2d');

	 // fill the square with this (rgb value) colour
	 ctx.fillStyle = rgb(this.colour[0],this.colour[1],this.colour[2]);
	 // args are x,y,width,height
	 ctx.fillRect(this.x, this.y, this.width, this.height);

  }


  /**
  * Move player left
  */
  moveLeft()
  {
    this.x -= 1;
  }

  /**
  * Move player right
  */
  moveRight()
  {
    this.x += 1;
  }
}
