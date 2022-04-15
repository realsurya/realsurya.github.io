let fontBold, fontLight,fontRegular, fontMedium;

function preload(){
    fontBold = loadFont('../assets/fonts/spacegrotesk/SpaceGrotesk-Bold.ttf')
    fontMedium = loadFont('../assets/fonts/spacegrotesk/SpaceGrotesk-Medium.ttf')
    fontRegular = loadFont('../assets/fonts/spacegrotesk/SpaceGrotesk-Regular.ttf')
    fontLight = loadFont('../assets/fonts/spacegrotesk/SpaceGrotesk-Light.ttf')
}

function setup(){
    createCanvas(windowWidth , windowHeight);

    background(0,0,0);
}

function draw(){
    background(0,0,0);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }