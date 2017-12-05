/**
 * Game is the entry point for Javascript programs.
 *
 */

class Game
{

  constructor()
  {
    var sceneManager = new SceneManager();
    document.addEventListener("touchstart", this.onTouchStart);
    document.addEventListener("touchmove", this.onTouchMove, {passive: false});
    document.addEventListener("touchend", this.onTouchEnd);

    this.img = new Image();
    this.img.src = 'Images/coin.png';

    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');

    this.coin = new Coin(ctx, {
      width: 1000,
      height: 100,
      image: this.img
    }, 10)

    var x = 100;
    var y = 700;
    var width = 50;
    var height = 50;
    var r = 255;
    var g = 255;
    var b = 255;
    var colour = [r, g, b];
    this.player = new Player(x, y, width, height, colour);

    this.update = this.update.bind(this);
    //this.update = this.update.bind(this);
  }
  init()
  {
      console.log('Initialising game');
      this.previousTime = Date.now();
  }

  /**
  * Function that gets the position where the screen was first touched.
  * @param {Event} e Used to handle event variables.
  */
  onTouchStart(e)
  {
    console.log("HI");
  }

  onTouchMove(e)
  {
    console.log("move");
    //gameNS.game.player.touchMove(e);
  }
  onTouchEnd(e)
  {
    console.log("end");
    //gameNS.game.player.touchEnd(e);
  }

  update ()
  {
    this.render(sceneManager);
    this.player.update();

    var now = Date.now();
    var deltaTime = (now - this.previousTime)
    this.previousTime = now;

    this.coin.update(deltaTime);
  }

  render ()
  {
    this.player.render();
  }

}
