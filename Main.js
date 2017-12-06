/**
 * main is the entry point for Javascript programs.
 * @author {Jamie Murphy and Sean Regan}
 */
var sceneManager;
var gameNS = {};

function main()
{
  initCanvas();

  var game

  gameNS.game = game;

  game = new Game();

  var titleScene = new TitleScene('Title Screen');
  var menuScene = new MenuScene('Menu Screen');
  var gameScene = new GameScene('Game Screen');
  var endScene = new EndScene('End Screen');

  sceneManager = new SceneManager();

  game.init();


  sceneManager.addScene(titleScene);
  sceneManager.addScene(menuScene);
  sceneManager.addScene(gameScene);
  sceneManager.addScene(endScene);
  sceneManager.goToScene('Title Screen');

  draw(sceneManager);

  gameNS.game = game;

  gameNS.game.player.init();

  update();
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
function update()
{
  draw();

  if(sceneManager.getScene() === "Game Screen")
  {
    gameNS.game.update(sceneManager);
  }

  window.requestAnimationFrame(update);

}
/**
 * The clickHandler is called when a native click event is fired
 *the methods goToScene and render in the sceneManager are called
 */

function onChangeScreen(e)
{
  console.log()
  if(sceneManager.getScene() == "End Screen")
  {
    var temp = new MenuScene('Menu Screen');
    sceneManager.setScene(temp);
    sceneManager.goToScene("Menu Screen");
  }
  else if(sceneManager.getScene() != "Game Screen")
  {
    sceneManager.goToNextScene();	// Use a method on the sceneManager
    if(sceneManager.getScene() === "Game Screen")
    {
      gameNS.game.restart();
    }
  }
}


/**
 * The clickHandler is called when a native click event is fired
 * @param {Class} SceneManager passes access to the sceneManager
 *the render in the sceneManager are called
 * Ross said this would become unessary try take it out
 */
function draw(SceneManager)
{
  sceneManager.render();
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
