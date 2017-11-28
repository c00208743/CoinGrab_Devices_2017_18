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

   this.move = false;
   this.touchX = 0;
   this.touchY = 0;

   // Jump
   this.mass = 20;
   this.velocityY = 0;
   this.accelY = 0;
   this.gravity = 0.1 * this.mass;
   this.jumpForce = -5 * this.mass;
   this.jumping = false;

  }



  /**
 * Function that gets the position where the screen was first touched.
 * @param {Event} e Used to handle event variables.
 */
 touchStart(e)
 {
   this.move = true;
   this.touches = e.touches;
   // Print out (x,y) co-ords of touch: touches[0].clientX contains
   //  the x position.
	 this.touchX = this.touches[0].clientX;
	 this.touchY = this.touches[0].clientY;

   this.time1 = new Date();
   this.startX = this.touchX;
   this.startY = this.touchY;
   this.lastX = this.startX;
   this.lastY = this.startY;

  }

  /**
   * Function that gets the position where the screen was currently being touched.
   * Draws a line from its current position to its previous position.
   * @param {Event} e Used to handle event variables.
   */
  touchMove(e)
  {
  	e.preventDefault();



    this.touches = e.touches;
    // Print out (x,y) co-ords of touch: touches[0].clientX contains
    //  the x position.
    this.touchX = this.touches[0].clientX;
    this.touchY = this.touches[0].clientY;


  }

  applyForceY(f)
  {
    f = f / this.mass;
    this.accelY = this.accelY + f;
  }

  /**
 * Function that gets the position where the screen was last being touched.
 * If a swipe is detected the screen will clear.
 * @param {Event} e Used to handle event variables.
 */
touchEnd(e)
{
    this.move = false;
    this.touchX = this.x + (this.width / 2);

    var aboveTime = 0;
    var belowTime = 150;
    var maxDistance = 500;

    var time2 = new Date();
    var timeTaken = time2 - this.time1;
    var touches = e.changedTouches;
    var endX = touches[0].clientX;
    var endY = touches[0].clientY;

    var a = endX - this.startX;
    var b = endY - this.startY;
    var dist = (a * a) + (b * b);
    dist = Math.sqrt(dist);

    if(!this.jumping && aboveTime < timeTaken && belowTime > timeTaken && dist < maxDistance)
    {
      this.applyForceY(this.jumpForce);
      this.jumping = true;
      console.log("Swipe");
    }
}

update()
{
  if(this.touchX > this.x + (this.width / 2))
  {
    // Move left
    this.x += 5;
  }

  if(this.touchX < this.x + (this.width / 2))
  {
    //Move Right
    this.x -= 5;
  }

  if(this.y > 500)
  {
    this.y = 500;
    this.jumping = false;
  }
  else
  {
    this.applyForceY(this.gravity);
  }

  this.velocityY = this.velocityY + this.accelY;
  this.y = this.y + this.velocityY;
  this.accelY = 0;
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




}
