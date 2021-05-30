canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");

    CAR1_width = 100;
    CAR1_height = 90;

    background_image = "racing track 1.jpg";
    CAR1_image = "CAR 1.png";

    CAR1_X = 10;
    CAR1_Y =  10;

    CAR2_IMAGE = "CAR 2.png";
    CAR2_X = 10;
    CAR2_Y =  10;
    
    CAR2_width = 100;
    CAR2_height = 90;



    function add() 
    {
        background_imgtag= new Image();
        background_imgtag.onload = uploadBackground;
        background_imgtag.src= background_image;

        CAR1_imgtag= new Image();
        CAR1_imgtag.onload = uploadCAR1;
        CAR1_imgtag.src= CAR1_image;

        CAR2_imgtag= new Image();
        CAR2_imgtag.onload = uploadCAR2;
        CAR2_imgtag.src= CAR2_image;
        
    }

    function uploadBackground(e)
    {
        ctx.drawImage(background_imgtag, 0,0, canvas.width,canvas.height );
    }

    function uploadCAR1(e)
    {
        ctx.drawImage(CAR1_imgtag,CAR1_X,CAR1_Y,CAR1_width,CAR1_height);
    }

function uploadCAR2(e)
    {
        ctx.drawImage(CAR2_imgtag,CAR2_X,CAR2_Y,CAR2_width,CAR2_height);
    }

    window.addEventListener("keydown", my_keydown);

    
    function my_keydown(e)
    {
        key_pressdown = e.keyCode;
        console.log(key_pressdown);

        if(key_pressdown== "38"){

        up();
        console.log("up")
        }

        if(key_pressdown== "40"){

            down();
            console.log("down");

        }

         if(key_pressdown== "37"){

            left();
            console.log("left");

        }
        
        if(key_pressdown== "39"){

            right();
            console.log("right");

        }
