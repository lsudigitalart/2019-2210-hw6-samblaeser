var pic1;
var flying;
var ipod;
var pic2;
var pic3;
var pic4;
var pic5;
var pic6;
var pic7;
var pic8;
var pic9;
var pic10;
var pic11;
var pic12;
var pic13;
var bgpic;
var pic14;
var pic15;
var pic16;
var pic17;
var pic18;
var s = 10;
var s2 = 10;
var s3 = 10;
var s4 = 10;
var s5 = 10;
var s6 = 10;
var s7 = 10;
var s8 = 10;
var s9 = 10;
var s10 = 10;
var s11 = 10;
var s12 = 10;
var s13 = 10;
var s14 = 10;
var s15 = 10;
var s16 = 10;
var s17 = 10;
var s177 = 10;



function preload() {
ipod = loadImage("gifss/ipodmouse.png");

bgpic = loadImage("gifss/bg1.jpg")
pic1 = loadImage("gifss/dc diamonds.png");
pic2 = loadImage("gifss/avril cellphone.png")
pic3 = loadImage("gifss/paris hoodie.png")
pic4 = loadImage("gifss/xtina.png")
pic5 = loadImage("gifss/ririno.png")
pic6 = loadImage("gifss/gaga blood.png")
pic7 = loadImage("gifss/bey fur denim.png")
pic8 = loadImage("gifss/like a boy.jpg")
pic9 = loadImage("gifss/doubledenim.jpg")
pic10 = loadImage("gifss/lilkim.png")
pic11 = loadImage("gifss/gng.jpg")
pic12 = loadImage("gifss/lilkimbling.png")
pic13 = loadImage("gifss/bey diamond hat.png")
pic14 = loadImage("gifss/paristhatshot.png")
pic15 = loadImage("gifss/ciara.jpg")
pic16 = loadImage("gifss/riri.png")
pic17 = loadImage("gifss/lohan dress.png")
pic18 - loadImage("gifss/longneck.png")

}
function setup() {
    createCanvas(900,700);
    noCursor();
          frameRate(100);
}

function draw() {
    background(225,98,0);
push();
image(bgpic,0,0,900,700)
pop();
    
    push();
    scale(.2);
    image(pic9,970+s9,1200)
    s9+=-.2
    pop();

    push();
    scale(3);
    image(pic11,90,840+s11)
    s11+=-.2
    pop();

    push();
    scale(.4);
    image(pic14,20,-1800+s14)
    s14+=.6
    pop();


    push();
    scale(.7);
    image(pic8,-70+s8,10)
    s8+=.1
    pop();

 
    push();
    scale(.32);
    image(pic1,20+s,200)
    s+=1
    pop();

      
    push();
    scale(.3);
    image(pic2,1980+s2,0)
    s2+=-1.2
    pop();

    
    push();
    scale(.3);
    image(pic4,8220+s4,950)
    s4+=-5
    pop();
  
    push();
   scale(.3);
   image(pic3,5820-s3,10+(s3/5))
   s3+=5
   pop();
    
   push();
   scale(.4);
   image(pic5,-2220-s5,250)
   s5+=-2
   pop();

   push();
   scale(.45);
   image(pic6,20,-30+s6)
   s6+=1.3
   pop();

   push();
   scale(.5);
   image(pic7,5720-s7,550)
   s7+=2
   pop();

   push();
    scale(.32);
    image(pic10,-5520+s10,200)
    s10+=3
    pop();
    
    push();
    scale(.32);
    image(pic12,20,-9200-s12)
    s12+=-3.5
    pop();


    push();
    scale(.32);
    image(pic13,2088,9600-s13)
    s13+=3.5
    pop();

    push();
    scale(.4);
    image(pic15,1778,11600-s15)
    s15+=3.5
    pop();

    push();
    scale(.3);
    image(pic16,20,-11200-s16)
    s16+=-3.5
    pop();

    push();
    scale(.32);
    image(pic17,1150,11840-s17)
    s17+=3.5
    pop();


    image(ipod,mouseX,mouseY,100,110)
}