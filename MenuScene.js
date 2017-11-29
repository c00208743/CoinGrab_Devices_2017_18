/**
 * main is the entry point for Javascript programs.
 *
 */
class MenuScene
{
  constructor(title)
  {
    this.title = title;
    this.createDiv("divId");
    this.createDiv2("divId2");

  }


   createDiv(divId)
  {
  	var div = document.createElement("div");
  	div.id = divId;
    div.innerHTML = '<img src=\'Play.png\'>';
    div.addEventListener("touchstart", onTouchStart,false);
    document.body.appendChild(div);
  }

  createDiv2(divId2)
  {

  	var div2 = document.createElement("div");
    div2.innerHTML = '<img src=\'Quit.png\'>';
  	div2.id = divId2;
  	div2.addEventListener("touchstart", onTouchStart,false);
    document.body.appendChild(div2);

  }


  /**
   * The Render method creates a background with a hex value
   * and prompts text with this.title string message
   *
   */
  render()
  {
    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.font = 'Impact Regular';
    ctx.fillText(this.title, 10, 50);
    document.body.style.backgroundColor = "#0000ff";

  }


}
