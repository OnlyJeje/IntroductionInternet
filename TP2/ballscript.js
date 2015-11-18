$(document).ready(function () {
		 var interval = setInterval(moveball, 100);

});

//function check(ball, add, sub) {


//    if (imgRight >= windowWidth && sub != null) {
//        ball.stop(true);
//        ball.animate({ left: sub, top: add }, 100);
//    }

//     if (ball.offset().left <= 0) {
//        ball.stop(true);
//            ball.animate({ left: add, top: add }, 100);
//    }

//    if (imgLower >= windowHeight) {
//        ball.stop(true);
//            ball.animate({ left: sub, top: sub },100);
//    }

//     if (ball.offset().top <= 0) {
//        ball.stop(true);
//        ball.animate({ left: add, top: add }, 100);
//    }

     

//}

var X = "+";
	var Y = "+";

function moveball() {

    var ball = $('#ball');
    var speed = $(window).width() / 10;
	
		if (X == "+" && Y == "+")
		{
			ball.animate({ left: "+=" + speed, top: "+=" + speed }, {
            step: function (now, fx) {
                var windowWidth = $(window).innerWidth();
                var windowHeight = $(window).innerHeight();
                var imgRight = ball.offset().left + ball.width() + 5;
                var imgLower = ball.offset().top + ball.height() + 10;

                if (imgRight >= windowWidth) {
                    X = "-";
                    ball.stop(true);
                }
                else if (imgLower >= windowHeight) {
					Y="-";
                    ball.stop(true);
                }
            }
        });
		}
		 if (X == "-" && Y == "+")
		{
			ball.animate({ left: "-=" + speed, top: "+=" + speed }, {
            step: function (now, fx) {
                var windowHeight = $(window).innerHeight();
                var imgLower = ball.offset().top + ball.height() + 10;

                if (ball.offset().left <= 0) {
                    X = "+";
                    ball.stop(true);
                }
                else if (imgLower >= windowHeight) {
					Y="-";
                    ball.stop(true);
                }
            }
        });
		}
		
		else if (X == "-" && Y =="-")
		{
			ball.animate({ left: "-=" + speed, top: "-=" + speed }, {
            step: function (now, fx) {
                if (ball.offset().left <= 0) {
                    X = "+";
                    ball.stop(true);
                }
                else if (ball.offset().top <= 0) {
					Y="+";
                    ball.stop(true);
                }
            }
        });
		}
		
		else if (X == "+" && Y == "-")
		{
			ball.animate({ left: "+=" + speed, top: "-=" + speed }, {
            step: function (now, fx) {
                var windowWidth = $(window).innerWidth();
                var imgRight = ball.offset().left + ball.width() + 5;

                if (imgRight >= windowWidth) {
                    X = "-";
                    ball.stop(true);
                }
                else if (ball.offset().top <= 0) {
					Y="+";
                    ball.stop(true);
                }
            }
        });
		}
        
    }

