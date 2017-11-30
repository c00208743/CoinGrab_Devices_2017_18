 /**
 * @fileoverview Coin class.
 * @author C00206167@itcarlow.ie (Sean Regan)
 * @author C00208743@itcarlow.ie (Jamie Murphy)
 */

class Coin
 {
   /**
  *   Constructor function to create sprite object
  * @param {context} context The 2D context for the canvas.
  * @param {Object} imageOptions An object describing the image and animation
  * @param {integer} fps The number of frames per second that the animation will run at
  */
  constructor(context, imageOptions, fps)
  {
    this.fps = fps;
    this.width = imageOptions.width;
	  this.height = imageOptions.height;
	  this.image = imageOptions.image;
    this.ctx = context;
    this.index = 0;
    this.ticksPerFrame = 1000 / this.fps;
    this.time = 0;

    this.fallSpeed = 5;
    this.x = Math.floor(Math.random() * 450);
    this.y = 0;


  }


  hit()
  {
      this.y = -25;
      this.x = Math.floor(Math.random() * 450);
  }

  /**
    *   Update loop
    *   @param {int} deltaTime  The amount of time that has passed since the last frame
    */
  update(deltaTime)
  {
    if(deltaTime != null)
     {
        this.time = this.time + deltaTime;
      }

     var canvas = document.getElementById('mycanvas');
     var ctx = canvas.getContext('2d');


     //Draw image
     this.ctx.drawImage(this.image, this.index * 100, 0, 100, 100, this.x, this.y, 25, 25);

     // Make sure enough time has passed
     if(this.ticksPerFrame < this.time)
     {
       // Go to next image on sprite sheet
       this.index = this.index + 1;
       // Loop back around
       if(this.index > 9)
       {
         this.index = 0;
       }

         this.time = 0;
     }

     this.y = this.y + this.fallSpeed;

     if(this.y > 875)
     {
       this.y = -25;
       this.x = Math.floor(Math.random() * 450);
     }
  }

}
