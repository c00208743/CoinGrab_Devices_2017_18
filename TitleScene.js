/**
 * main is the entry point for Javascript programs.
 *
 */
class TitleScene
{
  constructor(title)
  {
    this.title = title;
    this.createDiv3("divId3");
  }

  createDiv3(divId3)
  {

  	var div3 = document.createElement("div");
    div3.innerHTML = '<img src=\'Untitled.png\'>';
  	div3.id = divId3;
  	document.body.appendChild(div3);

  }


  render()
  {
    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.font = 'Impact Regular';
    ctx.fillText(this.title, 10, 50);
    document.body.style.backgroundColor = "#ff0000";

  }

}
