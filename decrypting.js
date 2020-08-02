/*creating the global variables*/
var fgImage = null;
var canvas1;
var secImage = null;
function clearImages(){
    clearScreen(canvas1);
    clearScreen(canvas2);
}

function clearScreen(canvas){
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width, canvas.height);
}

/*code for decrypting the images*/
function secImg(){
    canvas1 =document.getElementById('can1');
    var imgFile = document.getElementById('secret_img');
    secImage = new SimpleImage(imgFile);
    secImage.drawTo(canvas1);
}

function decrypting(){
        if(secImage == null || !secImage.complete() ){
            alert("secret image not loaded properly");
            return;
        }
        var result = decryptingImage();
        var canvas2 = document.getElementById('can2');
        result.drawTo(canvas2);
}

function decryptingImage(){
    var decryptedImg = new SimpleImage(secImage.getWidth(), secImage.getHeight());
    for (var pixel of decryptedImg.values()){
        var x = pixel.getX();
        var y = pixel.getY();
        var img = secImage.getPixel(x,y);
        pixel.setRed((img.getRed()%16)*16);
        pixel.setBlue((img.getBlue()%16)*16);
        pixel.setGreen((img.getGreen()%16)*16);
    }
return decryptedImg; 
}