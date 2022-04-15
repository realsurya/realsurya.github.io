//---------------------------------------//
//           ___           ___           //
//          /\__\         /\  \          //
//         /:/ _/_       |::\  \         //
//        /:/ /\  \      |:|:\  \        //
//       /:/ /::\  \   __|:|\:\  \       //
//      /:/_/:/\:\__\ /::::|_\:\__\      //
//      \:\/:/ /:/  / \:\~~\  \/__/      //
//       \::/ /:/  /   \:\  \            //
//        \/_/:/  /     \:\  \           //
//          /:/  /       \:\__\          //
//          \/__/         \/__/          //
//                                       //
//           ~Github Pages JS~           //
//             Apr. 15, 2022             //
//                                       //
//           Surya Manikhandan           //
//    Aerospace Eng. Student @ Purdue    //
//                                       //
//        [E]:smanikha@purdue.edu        //
//  [In]:linkedin.com/in/aerospacesurya  //
//      [Git]: github.com/realsurya      //
//---------------------------------------//

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

    // Title
    push();
        fontSize = 50;
        fill(255,255,255);
        textFont(fontBold);
        textSize(fontSize);
        textAlign(CENTER);
        text("Surya.page", width / 2, fontSize)
    pop();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }