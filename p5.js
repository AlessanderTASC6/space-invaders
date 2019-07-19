    let x = 500;
    let y = 550;
    
    function setup() {
    createCanvas(1000,600)
    background(0)
    }
    function draw() {
    background(0)
    if (keyIsDown(LEFT_ARROW)) {
        x -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        x += 5;
    }
    fill(0, 0, 255)
    square(x, y, 50,)//SpaceShip
    fill(255, 4, 0)
    ellipse(500,100,70,70)//alien
    }
//shot and bullet 
let BulletY = y-1 
if (keyIsDown(32)){
    BulletY-=5;
    square(x+15,BulletY,20)
}

        


// 


// if (keyIsDown(UP_ARROW) {
//     y += 5;
//     }
// fill()
// ellipse(x+25, y, 10, 10)



    // function draw() {
    //   ellipse(x+25, y, 10, 10)
    //   if (keyIsDown(LEFT_ARROW)) {
    //     x -= 5;
    //   }
    
    //   if (keyIsDown(RIGHT_ARROW)) {
    //     x += 5;
    //   }
    
    //   if (keyIsDown(KEY_SPACE)) {
    //     y += 5;
    //   }
    // Fill(84, 13, 12) ;
    // }







