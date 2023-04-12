var canvas = new fabric.Canvas('myCanvas');
 function new_image(get_image)
 {
    fabric.Image.fromURL(get_image, function(Img){
        blockImageObject = Img;
        blockImageObject.scaleToWidth(700);
        blockImageObject.scaleToWidth(510);
        blockImageObject.set({
            top:0,
            left:0
        });
        canvas.add(blockImageObject);
        });
 }
 window.addEventListener("keydown", myKeyDown);
  if(keyPressed == '82') 
  {
    new_image('rr1.jpg')
    console.log("r")
  }
  if(keyPressed == '82') 
  {
    new_image('br.png')
    console.log("a")
  }
  if(keyPressed == '82') 
  {
    new_image('pr.png')
    console.log("e")
  }
  if(keyPressed == '82') 
  {
    new_image('yr.png')
    console.log("v")
  }
  if(keyPressed == '82') 
  {
    new_image('gr.png')
    console.log("i")
  }