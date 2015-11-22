function calcul () {
	var done = false;
	var kmP = document.getElementById('kilometresParcourus').value;
	var lC = document.getElementById('litresConsommes').value;
	var res = (lC * 100) / kmP;
	var mpg = (235.21) / (Math.round(res * 100) / 100);
	$('table.add').remove();
	$('#myForm').after("<table class='add'><tr><td>Kilométrage</td><td>" + res + " litres aux 100 kms</td></tr><tr><td>Millage </td><td>" + mpg + " miles au gallon</td></tr></table>");
}

window.onload = ok;