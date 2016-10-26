function helpPrefDate() {
		document.getElementById("dateTimeLeadInformation").style.backgroundColor = "black";
		document.getElementById("dateTimeLeadInformation").style.color = "white";
		document.getElementById("dateTimeLeadInformation").style.fontSize = "12px";
		document.getElementById("dateTimeLeadInformation").style.textDecoration = "none";
		document.getElementById("dateTimeLeadInformation").style.height = "auto";
		document.getElementById("dateTimeLeadInformation").textContent = "The date you would prefer your advert to be shown on. Click here for more help."
		setTimeout(function (args) {
			if(document.getElementById("dateTimeLeadInformation").textContent == "The date you would prefer your advert to be shown on. Click here for more help.") {
				document.getElementById("dateTimeLeadInformation").style.backgroundColor = "white";
				document.getElementById("dateTimeLeadInformation").style.color = "black";
				document.getElementById("dateTimeLeadInformation").style.fontSize = "16px";
				document.getElementById("dateTimeLeadInformation").style.height = "30px";
				document.getElementById("dateTimeLeadInformation").style.textDecoration = "underline";
				document.getElementById("dateTimeLeadInformation").textContent = dateMsg;
			}
		}, 8200)
}

function helpPrefTime() {
		document.getElementById("dateTimeLeadInformation").style.backgroundColor = "black";
		document.getElementById("dateTimeLeadInformation").style.color = "white";
		document.getElementById("dateTimeLeadInformation").style.fontSize = "12px";
		document.getElementById("dateTimeLeadInformation").style.textDecoration = "none";
		document.getElementById("dateTimeLeadInformation").style.height = "auto";
		document.getElementById("dateTimeLeadInformation").textContent = "The time you would prefer your advert to be shown at. Click here for more help."
		setTimeout(function (args) {
			if(document.getElementById("dateTimeLeadInformation").textContent == "The time you would prefer your advert to be shown at. Click here for more help.") {
				document.getElementById("dateTimeLeadInformation").style.backgroundColor = "white";
				document.getElementById("dateTimeLeadInformation").style.color = "black";
				document.getElementById("dateTimeLeadInformation").style.fontSize = "16px";
				document.getElementById("dateTimeLeadInformation").style.height = "30px";
				document.getElementById("dateTimeLeadInformation").style.textDecoration = "underline";
				document.getElementById("dateTimeLeadInformation").textContent = dateMsg;
			}
		}, 8200)
}

function helpPrefFlex() {
		document.getElementById("dateTimeLeadInformation").style.backgroundColor = "black";
		document.getElementById("dateTimeLeadInformation").style.color = "white";
		document.getElementById("dateTimeLeadInformation").style.fontSize = "12px";
		document.getElementById("dateTimeLeadInformation").style.textDecoration = "none";
		document.getElementById("dateTimeLeadInformation").style.height = "auto";
		document.getElementById("dateTimeLeadInformation").textContent = "The amount of time from your preferred date/time that your advert should be shown. Click here for more help."
		setTimeout(function (args) {
			if(document.getElementById("dateTimeLeadInformation").textContent == "The amount of time from your preferred date/time that your advert should be shown. Click here for more help.") {
				document.getElementById("dateTimeLeadInformation").style.backgroundColor = "white";
				document.getElementById("dateTimeLeadInformation").style.color = "black";
				document.getElementById("dateTimeLeadInformation").style.fontSize = "16px";
				document.getElementById("dateTimeLeadInformation").style.height = "30px";
				document.getElementById("dateTimeLeadInformation").style.textDecoration = "underline";
				document.getElementById("dateTimeLeadInformation").textContent = dateMsg;
			}
		}, 8200)
}

function helpPrefUri() {
		document.getElementById("dateTimeLeadInformation").style.backgroundColor = "black";
		document.getElementById("dateTimeLeadInformation").style.color = "white";
		document.getElementById("dateTimeLeadInformation").style.fontSize = "12px";
		document.getElementById("dateTimeLeadInformation").style.textDecoration = "none";
		document.getElementById("dateTimeLeadInformation").style.height = "auto";
		document.getElementById("dateTimeLeadInformation").textContent = "An internet address where your advert can be downloaded by the Publisher. Click here for more help."
		setTimeout(function (args) {
			if(document.getElementById("dateTimeLeadInformation").textContent == "An internet address where your advert can be downloaded by the Publisher. Click here for more help.") {
				document.getElementById("dateTimeLeadInformation").style.backgroundColor = "white";
				document.getElementById("dateTimeLeadInformation").style.color = "black";
				document.getElementById("dateTimeLeadInformation").style.fontSize = "16px";
				document.getElementById("dateTimeLeadInformation").style.height = "30px";
				document.getElementById("dateTimeLeadInformation").style.textDecoration = "underline";
				document.getElementById("dateTimeLeadInformation").textContent = dateMsg;
			}
		}, 8200)
}

function helpClicker(data) {
		if(document.getElementById("dateTimeLeadInformation").style.backgroundColor == "black") {			
			navigating=true;
				helpClickedClosePops1();
			window.location = "#Help:Advertiser:Buying";
			openHelpPage();
			toggleHelpPage("Advertiser");
			setTimeout(function (args) {
				navigating=true;
				helpClickedClosePops1();
				window.location = "#Help:Advertiser:Buying";
				}, 1750)
			}
	}

function helpAdvPan() {
			unCount = 1
			navigating=true;
				helpClickedClosePops1();
			window.location = "#Help:Advertiser:AdvancedSearch";
			openHelpPage();
			toggleHelpPage("Advertiser");
			setTimeout(function (args) {
				navigating=true;
				helpClickedClosePops1();
				window.location = "#Help:Advertiser:AdvancedSearch";
				}, 1750)
	}
	
function campaignHelpSection() {
	unCount = 1
		if(campStatus=="pending") {
			navigating=true;
				helpClickedClosePops1();
			window.location = "#Help:Campaigns:Pending";
			openHelpPage();
			toggleHelpPage("Campaigns");
			setTimeout(function (args) {
				navigating=true;
				helpClickedClosePops1();
				window.location = "#Help:Campaigns:Pending";
				}, 1750)
			} else if(campStatus=="queued") {
			navigating=true;
			window.location = "#Help:Campaigns:Queued";
			openHelpPage();
			toggleHelpPage("Campaigns");
			setTimeout(function (args) {
				navigating=true;
				helpClickedClosePops1();
				window.location = "#Help:Campaigns:Queued";
				}, 1750)
			} else if(campStatus=="live") {
			window.location = "#Help:Campaigns:Live";
			openHelpPage();
			toggleHelpPage("Campaigns");
			setTimeout(function (args) {
				navigating=true;
				helpClickedClosePops1();
				window.location = "#Help:Campaigns:Live";
				}, 1750)
			} else if(campStatus=="disputed") {
			navigating=true;
				helpClickedClosePops1();
			window.location = "#Help:Campaigns:Disputes";
			openHelpPage();
			toggleHelpPage("Campaigns");
			setTimeout(function (args) {
				navigating=true;
				helpClickedClosePops1();
				window.location = "#Help:Campaigns:Disputes";
				}, 1750)
			} else if(campStatus=="complete") {
			navigating=true;
				helpClickedClosePops1();
			window.location = "#Help:Campaigns:Completed";
			openHelpPage();
			toggleHelpPage("Campaigns");
			setTimeout(function (args) {
				navigating=true;
				helpClickedClosePops1();
				window.location = "#Help:Campaigns:Completed";
				}, 1750)
			}
	}//
	
function help4pub() {
	unCount = 1
	navigating=true;
				helpClickedClosePops1();
	window.location = "#Help:Publisher:AddingAdverts";
			openHelpPage();
			toggleHelpPage("Publisher");
			setTimeout(function (args) {
				navigating=true;
				helpClickedClosePops1();
				window.location = "#Help:Publisher:AddingAdverts";
				}, 1750)
}

function printThisHelp(text) {
    var newWindow = window.open('', 'Printing...', 'height=400,width=600');
    newWindow.document.write('<html><head><title>Pletho is printing...</title><style>.cOD1,.cOD2{text-transform:capitalize;}div{padding:4px;width:100%;text-align:center;font-size:16px;}</style>');
    newWindow.document.write('</head><body >');
    newWindow.document.write(text);
    newWindow.document.write('</body></html>');
    newWindow.document.close();
    newWindow.focus();
    newWindow.print();
    newWindow.close();
    return true;
}

function helpClickedClosePops1() {
				document.getElementById("urlCheckerBox").style.display = "none";
				document.getElementById("reasonMessageBox").style.display = "none";
				document.getElementById("disputeCommentsBack").style.display = "none";
				document.getElementById("disputeCommentsUnder").style.display = "none";
				document.getElementById("completedOrderDetails").style.display = "none";
				document.getElementById("campaignsPage2Div").style.display = "none";
				document.getElementById("sharedMessageBackDrop").style.display = "none";
				document.getElementById("campHelpMessageBackDrop").style.display = "none";
				document.getElementById("campHelpMessageBox").style.display = "none";
				document.getElementById("sharedMessage").style.display = "none";
				document.getElementById("resultsOverlay").style.display = "none";
				document.getElementById("productOrderingBox").style.display = "none";
				document.getElementById("dateTimeLeadInformation").style.display = "none";
				document.getElementById("campHelpMessageBox").style.display = "none";
				document.getElementById("campHelpMessageBackDrop").style.display = "none";
	}