function setup(){
    canvas = createCanvas(600, 600);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 200, 200, 200, 200);

    fill(255, 0, 40);
    stroke(0,0,0);
    circle(50, 50, 80);
    circle(550, 50, 80);
    circle(50, 550, 80);
    circle(550, 550, 80);
    fill(40, 0, 255);
    stroke(0,0,0);
    rect(525, 90, 40, 420);
    rect(90, 535, 420, 40);
    rect(30, 90, 40, 420);
    rect(90, 30, 420, 40);
}

function take_snapshot(){
    save('fancy iFrame.png');
}

