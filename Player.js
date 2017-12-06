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
    //width is assinged 50
	  this.height = height;
	  this.colour = colour;
    this.move = false;
    this.touchX = x;
    this.touchY = y;

    // Jump
    this.mass = 20;
    this.velocityY = 0;
    this.accelY = 0;
    this.gravity = 0.1 * this.mass;
    this.jumpForce = -5 * this.mass;
    this.jumping = false;
    this.score = 0;

    this.touchStart = this.touchStart.bind(this);
    this.touchMove = this.touchMove.bind(this);
    this.touchEnd = this.touchEnd.bind(this);
  }

  init()
  {

    document.addEventListener("touchstart", gameNS.game.player.touchStart);
    document.addEventListener("touchmove", gameNS.game.player.touchMove, {passive: false});
    document.addEventListener("touchend", gameNS.game.player.touchEnd);
  }

  /**
 * Function that gets the position where the screen was first touched.
 * @param {Event} e Used to handle event variables.
 */
 touchStart(e)
 {
   console.log("start");
   this.move = true;
   this.touches = e.touches;
   console.log(this.width);
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
    console.log("swipe");
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
  console.log("ends");
    this.move = false;
    this.touchX = this.x + (this.width / 2);

    var aboveTime = 20;
    var belowTime = 300;
    var minDist = 50;
    var maxDist = 700;

    var time2 = new Date();
    var timeTaken = time2 - this.time1;
    var touches = e.changedTouches;
    var endX = touches[0].clientX;
    var endY = touches[0].clientY;

    var a = endX - this.startX;
    var b = endY - this.startY;
    var dist = (a * a) + (b * b);
    dist = Math.sqrt(dist);

    if(sceneManager.getScene() === "Game Screen" && this.jumping == false && aboveTime < timeTaken && belowTime > timeTaken && dist > minDist && dist < maxDist)
    {
      this.applyForceY(this.jumpForce);
      this.jumping = true;
    }
}

hitCoin()
{
  this.score++;
  //console.log(this.score);
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

  if(this.y > 700)
  {
    this.y = 700;
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
