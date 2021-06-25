var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;


var player_object = "";
var block_image_object = "";

function player_update() {
    fabric.Image.fromURL("https://www.herorealms.com/wp-content/uploads/2017/08/Ranger-Character-Male-496x675.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (e.shiftKey && keyPressed == '77') {
        console.log("m and shift pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
    if (keyPressed == '87') {
        new_image('wall.jpg');
        console.log("w");
    }
    if (keyPressed == '71') {
        new_image('https://e7.pngegg.com/pngimages/587/907/png-clipart-fedora-sea-doo-cowboy-hat-boat-park-ranger-hat-brown-hat.png');
        console.log("g");
    }
    if (keyPressed == '76') {
        new_image('https://www.pngkey.com/png/detail/142-1425699_texas-ranger-png-banner-transparent-library-chuck-norris.png');
        console.log("l");
    }
    if (keyPressed == '84') {
        new_image('data:image/jpeg;base64,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');
        console.log("t");
    }
    if (keyPressed == '82') {
        new_image('https://cdn.modesens.com/media/65918586');
        console.log("r");
    }
    if (keyPressed == '89') {
        new_image('yellow_wall.png');
        console.log("y");
    }
    if (keyPressed == '68') {
        new_image('dark_green.png');
        console.log("d");
    }
    if (keyPressed == '85') {
        new_image('unique.png');
        console.log("u");
    }
    if (keyPressed == '67') {
        new_image('cloud.jpg');
        console.log("c");
    }
}
function up()
{
    if(player_y >=0)
    {
        player_y = player_y - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When Up arrow key is pressed, X = " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down()
{
    if(player_y <=500)
    {
        player_y = player_y + block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When Down arrow key is pressed, X = " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left()
{
    if(player_x >0)
    {
        player_x = player_x - block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When Left arrow key is pressed, X = " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right()
{
    if(player_x <=850)
    {
        player_x = player_x + block_image_width;
        console.log("block image height = " + block_image_height);
        console.log("When Right arrow key is pressed, X = " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
