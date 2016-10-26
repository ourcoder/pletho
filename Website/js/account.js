
function showAccount1() {
    var currentUser = Parse.User.current();
	document.getElementById('accBoxBackDrop').style.display = 'block';
	document.getElementById('accBoxBox').style.display = 'block';
	document.getElementById('fnlnaccBox1').textContent = currentUser.attributes.firstName + " " + currentUser.attributes.lastName;
	document.getElementById('mailaccBox2').textContent = currentUser.attributes.email;
	document.getElementById('pwaccBox3').textContent = '*********';
	var dateSpaceless1 = currentUser.createdAt.toString().split(" ");
	document.getElementById('dateaccBox4').textContent = dateSpaceless1[0] + " " + dateSpaceless1[1] + " " + dateSpaceless1[2] + " " + dateSpaceless1[3] ;
	if(!currentUser.attributes.stripeUserId) {
		document.getElementById('ftypeaccBox5').textContent = 'Advertiser';
	} else {
		document.getElementById('ftypeaccBox5').textContent = 'Publisher';
	}
}

function hideAccBoxes() {
	document.getElementById('accBoxBackDrop').style.display = 'none';
	document.getElementById('accBoxBox').style.display = 'none';
}