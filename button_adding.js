



function drawLogos(){
    // GUI
    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");



    var button1 = BABYLON.GUI.Button.CreateImageOnlyButton("but1", "./vjti_logo.png");
    button1.width = "112px"
    button1.height = "163px";
    button1.color = "transparent";
    button1.cornerRadius = 20;
    button1.background = "transparent";
    button1.horizontalAlignment = 1; //align right
    button1.verticalAlignment = 0; //align top. 1 aligns it bottom
    button1.paddingTop = "10px";
    button1.paddingRight = "10px";
    button1.onPointerUpObservable.add(function() {
        window.open(
            "https://vjti.ac.in/", "_blank"); 
    });
    advancedTexture.addControl(button1);


    var button2 = BABYLON.GUI.Button.CreateImageOnlyButton("but2", "./prati_white.png");
    button2.width = "152px"
    button2.height = "139px";
    button2.color = "transparent";
    button2.cornerRadius = 20;
    button2.background = "transparent";
    button2.horizontalAlignment = 0; //align right
    button2.verticalAlignment = 0; //align top. 1 aligns it bottom
    button2.paddingTop = "10px";
    button2.paddingLeft = "10px";
    button2.onPointerUpObservable.add(function() {
        window.open(
            "https://pratibimbvjti.in/", "_blank"); 
    });
    advancedTexture.addControl(button2);




    var button3 = BABYLON.GUI.Button.CreateImageOnlyButton("but3", "./nav_menu_buttons/quad1.png");
    button3.width = "160px"
    button3.height = "48px";
    button3.color = "transparent";
    
    button3.background = "transparent";
    //button3.left = "40%"; 
    button3.horizontalAlignment = 1;
    button3.top = "-26%"; 
    button3.paddingTop = "10px";
    button3.paddingRight = "10px";
    button3.onPointerUpObservable.add(function() {
        window.open(
            "./main.html", "_blank"); 
    });
    advancedTexture.addControl(button3);



    var button4 = BABYLON.GUI.Button.CreateImageOnlyButton("but4", "./nav_menu_buttons/audi1.png");
    button4.width = "160px"
    button4.height = "48px";
    button4.color = "transparent";

    button4.background = "transparent";

    button4.horizontalAlignment = 1;
    button4.top = "-21%"; 
    button4.paddingTop = "10px";
    button4.paddingRight = "10px";
    button4.onPointerUpObservable.add(function() {
        window.open(
            "./audi.html", "_blank"); 
    });
    advancedTexture.addControl(button4);


    var button5 = BABYLON.GUI.Button.CreateImageOnlyButton("but5", "./nav_menu_buttons/dep1_1.png");
    button5.width = "160px"
    button5.height = "48px";
    button5.color = "transparent";

    button5.background = "transparent";

    button5.horizontalAlignment = 1;
    button5.top = "-16%"; 
    button5.paddingTop = "10px";
    button5.paddingRight = "10px";
    button5.onPointerUpObservable.add(function() {
        window.open(
            "./dep.html", "_blank"); 
    });
    advancedTexture.addControl(button5);



    var button6 = BABYLON.GUI.Button.CreateImageOnlyButton("but5", "./nav_menu_buttons/canteen1.png");
    button6.width = "160px"
    button6.height = "48px";
    button6.color = "transparent";

    button6.background = "transparent";

    button6.horizontalAlignment = 1;
    button6.top = "-11%"; 
    button6.paddingTop = "10px";
    button6.paddingRight = "10px";
    button6.onPointerUpObservable.add(function() {
        window.open(
            "./canteen.html", "_blank"); 
    });
    advancedTexture.addControl(button6);

}