var interval = setInterval(moveball, 100);
var  n = 1;
function moveball(){
alert(window.outerHeight)
	alert('Move ball' + n);
	if (n == 5)
		clearInterval(interval);
}