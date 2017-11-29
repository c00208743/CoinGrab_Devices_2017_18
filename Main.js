/**
 * main is the entry point for Javascript programs.
 * @author {Jamie Murphy}
 */
var sceneManager;
var gameNS = {};

function main()
{

  initCanvas();

  var game;

  var titleScene = new TitleScene('Title Screen');
  var menuScene = new MenuScene('Menu Screen');
  var gameScene = new GameScene('Game Screen');
  var endScene = new EndScene('End Screen');
  sceneManager = new SceneManager();
  sceneManager.addScene(titleScene);
  sceneManager.addScene(menuScene);
  sceneManager.addScene(gameScene);
  sceneManager.addScene(endScene);
  sceneManager.goToScene('Title Screen');


  draw(sceneManager);
  document.addEventListener("touchstart", clickHandler.bind(null, sceneManager));
  document.addEventListener("touchstart", onTouchStart);
  document.addEventListener("touchmove", onTouchMove, {passive: false});
  document.addEventListener("touchend", onTouchEnd);

  game = new Game();
  gameNS.game = game;
  game.init();

//  document.addEventListener("click", clickHandler.bind(null, sceneManager));
  update();
}

/**
* Function that gets the position where the screen was first touched.
* @param {Event} e Used to handle event variables.
*/
function onTouchStart(e)
{
  gameNS.game.player.touchStart(e);
}

/**
 * Function that gets the position where the screen was currently being touched.
 * Draws a line from its current position to its previous position.
 * @param {Event} e Used to handle event variables.
 */
function onTouchMove(e)
{
  gameNS.game.player.touchMove(e);
}

/**
* Function that gets the position where the screen was last being touched.
* If a swipe is detected the screen will clear.
* @param {Event} e Used to handle event variables.
*/
function onTouchEnd(e)
{
  gameNS.game.player.touchEnd(e);
}

function initCanvas()
{
  // Use the document object to create a new element canvas.
  var canvas = document.createElement("canvas");
  // Assign the canvas an id so we can reference it elsewhere.
  canvas.id = 'mycanvas';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // We want this to be a 2D canvas.
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0,0, canvas.width, canvas.height);
  // Adds the canvas element to the document.
  document.body.appendChild(canvas);

}
/**
 * The clickHandler is called when a native click event is fired
 * @param {Class} sceneManager passes access to the sceneManager
 *the methods goToScene and render in the sceneManager are called
 */

function clickHandler ( e)
{
  if(sceneManager.getScene() != "Game Screen")
  {
    sceneManager.goToNextScene();	// Use a method on the sceneManager
  }
  console.log("Click");
}


/**
 * The clickHandler is called when a native click event is fired
 * @param {Class} SceneManager passes access to the sceneManager
 *the render in the sceneManager are called
 * Ross said this would become unessary try take it out
 */
function draw()
{
  sceneManager.render();
}

function update()
{
  draw();

  if(sceneManager.getScene() === "Game Screen")
  {
    gameNS.game.update(sceneManager);
  }

  //if (sceneManager) {
  //      return;
  //  }


  window.requestAnimationFrame(update);
}

/**
 * Helper function that clamps value between min and max and returns value.
 * Example: clamp(10, 1, 3) will return 3
 * @param {Integer} value integer value to be clamped.
 * @param {Integer} min lower range value.
 * @param {Integer} max upper range value.
* @return {Integer} min if value is less than min, max if max is less than value, otherwise value.
 */
function clamp(value, min, max)
{
	if(max<min) {
		var temp = min;
		min = max;
		max = temp;
	}
	return Math.max(min, Math.min(value, max));
}

/**
 * Helper function that returns a string of the form 'rgb(r,g,b)' where
 * r,g and b are numeric values.
 * @param {Number} r assumed numeric value for red.
 * @param {Number} g assumed numeric value for green.
 * @param {Number} b assumed numeric value for blue.
* @return {String} a string of the form 'rgb(r,g,b)' where r,g and b are integers clamped between 0 and 255.
 */

function rgb(r, g, b)
{
	return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
}
