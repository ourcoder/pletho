
function openHelpPage() {
	toggleHelpPage("FAQ");
    //document.getElementById("helpUnder").style.display = "block";
    document.getElementById("advertiserPage2Div").style.bottom = "70px";
    document.getElementById("buttonFooterSearch").style.bottom = "27px";
    if (windowWidth < 730) {
    	document.getElementById("plethoFooter").style.display = "block";
	} else {
		document.getElementById("plethoFooter").style.display = "none";
		}
    document.getElementById("helpDiv").style.display = "block";
    document.getElementById("adShareButton").style.opacity = "0.25";
    document.getElementById("publisherButton3").style.display = "none";
    document.getElementById("publisherButton4").style.display = "none";
    document.getElementById("publisherButton5").style.display = "none";
    document.getElementById("advertiserLink").style.backgroundImage = "url('../images/atiser.png')";
    document.getElementById("campaignsLink").style.backgroundImage = "url('../images/campaigns.png')";
    document.getElementById("publisherLink").style.backgroundImage = "url('../images/publisher.png')";
    document.getElementById("helpLink").style.backgroundImage = "url('../images/help2.png')";
    document.getElementById("campaignsLink").style.color = "white";
    document.getElementById("advertiserLink").style.color = "white";
    document.getElementById("helpLink").style.color = "#fde38a";
    document.getElementById("publisherLink").style.color = "white";
    document.getElementById("advertiserPage1Div").style.display = "none";
    document.getElementById("advertiserPage2Div").style.display = "none";
    document.getElementById("searchAllButton").style.display = "none";
    document.getElementById("normalSearchButton").style.display = "none";
    document.getElementById("advSearchButton").style.display = "none";
    document.getElementById("campaignButton1").style.display = "none";
    document.getElementById("campaignButton2").style.display = "none";
    document.getElementById("campaignShareButton1").style.display = "none";
    document.getElementById("buttonBreaker1").style.opacity = "0";
    document.getElementById("campaignHelpButton1").style.display = "none";
    document.getElementById("publisherHelpButton1").style.display = "none";
    document.getElementById("publisherButton1").style.display = "none";
    document.getElementById("publisherButton2").style.display = "none";
    document.getElementById("normalSearchButton2").style.display = "none";
    document.getElementById("advancedSearchButtonMk2").style.display = "none";
    document.getElementById("buyAdSlotButton").style.display = "none";
    document.getElementById("ShareWideAdSlotButton").style.display = "none";
    document.getElementById("adCounterButton").style.display = "none";
    if (windowWidth < 730) {
        document.getElementById("plethoFooter3").style.display = "none";
    } else {
        document.getElementById("plethoFooter3").style.display = "block";
    }
    document.getElementById("helpMenu").children[0].children[0].style.backgroundColor = "#ffe588"
}

function closeHelpPage() {
    //document.getElementById("helpUnder").style.display = "none";
    document.getElementById("helpDiv").style.display = "none";
}

function toggleHelpPage(pageID) {
    //helpFAQ helpADV helpCAM helpPUB helpPAS helpEMA helpSUB
    document.getElementById("helpFAQ").style.display = "none";
    document.getElementById("helpADV").style.display = "none";
    document.getElementById("helpCAM").style.display = "none";
    document.getElementById("helpPUB").style.display = "none";
    document.getElementById("helpPAS").style.display = "none";
    document.getElementById("helpEMA").style.display = "none";
    document.getElementById("helpSUB").style.display = "none";
    document.getElementById("helpMenu").children[0].children[0].style.backgroundColor = "#eee";
    document.getElementById("helpMenu").children[1].children[0].style.backgroundColor = "#eee";
    document.getElementById("helpMenu").children[2].children[0].style.backgroundColor = "#eee";
    document.getElementById("helpMenu").children[3].children[0].style.backgroundColor = "#eee";
    document.getElementById("helpMenu").children[4].children[0].style.backgroundColor = "#eee";
    document.getElementById("helpMenu").children[5].children[0].style.backgroundColor = "#eee";
    document.getElementById("helpMenu").children[6].children[0].style.backgroundColor = "#eee";

    if (pageID == "FAQ") {
        document.getElementById("helpFAQ").style.display = "block";
        document.getElementById("helpMenu").children[0].children[0].style.backgroundColor = "#ffe588";
    } else if (pageID == "Advertiser") {
        document.getElementById("helpADV").style.display = "block";
        document.getElementById("helpMenu").children[1].children[0].style.backgroundColor = "#ffe588";
    } else if (pageID == "Campaigns") {
        document.getElementById("helpCAM").style.display = "block";
        document.getElementById("helpMenu").children[2].children[0].style.backgroundColor = "#ffe588";
    } else if (pageID == "Publisher") {
        document.getElementById("helpPUB").style.display = "block";
        document.getElementById("helpMenu").children[3].children[0].style.backgroundColor = "#ffe588";
    } else if (pageID == "Password") {
        document.getElementById("helpPAS").style.display = "block";
        document.getElementById("helpMenu").children[4].children[0].style.backgroundColor = "#ffe588";
    } else if (pageID == "Email") {
        document.getElementById("helpEMA").style.display = "block";
        document.getElementById("helpMenu").children[5].children[0].style.backgroundColor = "#ffe588";
    } else if (pageID == "Support") {
        document.getElementById("helpSUB").style.display = "block";
        document.getElementById("helpMenu").children[6].children[0].style.backgroundColor = "#ffe588";
    }

}

function submitNewEmail() {
    var currentUser = Parse.User.current();
    var username = currentUser.attributes.username;
    var oE = currentUser.attributes.oldEmail;
    var newEmail = document.getElementById("newEmail").value
    if (!newEmail) {
        document.getElementById("newEmail").style.borderColor = "red";
    } else if (newEmail.indexOf('@') == -1) {
        document.getElementById("newEmail").style.borderColor = "red";
    } else if (!oE || oE == "") {
        var oldHTML = document.getElementById("helpEMA").innerHTML;
        document.getElementById("helpEMA").innerHTML = "<br/><b>Email</b><br/><br/>Sorry, you cannot do this. Please contact us by submitting a support ticket.";
        setTimeout(function (args) {
            document.getElementById("helpEMA").innerHTML = oldHTML;
        }, 5500)
    } else {
        currentUser.set("email", newEmail);
        currentUser.set("username", newEmail);
        currentUser.save(null, {
            success: function (user, error) {
                var oldHTML = document.getElementById("helpEMA").innerHTML;
                document.getElementById("helpEMA").innerHTML = "<br/><b>Email</b><br/><br/>Your email has been updated.<br/>The next time you login, remember to use this new email address.";
                setTimeout(function (args) {
                    document.getElementById("helpEMA").innerHTML = oldHTML;
                }, 5500)
            },
            error: function (user, error) {
                var oldHTML = document.getElementById("helpEMA").innerHTML;
                document.getElementById("helpEMA").innerHTML = "<br/><b>Email</b><br/><br/>" + error.message;
                setTimeout(function (args) {
                    document.getElementById("helpEMA").innerHTML = oldHTML;
                }, 5500)
            }
        });
    }
}

function submitNewPassword() {
    var currentUser = Parse.User.current();
    var email1 = currentUser.attributes.username;
    Parse.User.requestPasswordReset(email1, {
        success: function () {
            var oldHTML = document.getElementById("helpPAS").innerHTML;
            document.getElementById("helpPAS").innerHTML = "<br/><b>Email</b><br/><br/>You will receive an email shortly.<br/>Follow the instructions provided in the email to change your password.";
            setTimeout(function (args) {
                document.getElementById("helpPAS").innerHTML = oldHTML;
            }, 5500)
        },
        error: function (error) {
            var oldHTML = document.getElementById("helpPAS").innerHTML;
            document.getElementById("helpPAS").innerHTML = "<br/><b>Email</b><br/><br/>" + error.message;
            setTimeout(function (args) {
                document.getElementById("helpPAS").innerHTML = oldHTML;
            }, 5500)
        }
    });

}

function submitNewTicket() {
    var currentUser = Parse.User.current();
    var userid = currentUser.id;
    var user = currentUser.attributes.username;
    var name = currentUser.attributes.firstName;
    var publisher = currentUser.attributes.stripeEmail;
    var pId = currentUser.attributes.pId;
	if(document.getElementById("pubHelpMessageBox").style.display == "block") {
		var msg = document.getElementById("messagePubSupp").value;
	} else {
    	var msg = document.getElementById("ticketMessage").value;
	}
	if(document.getElementById("pubHelpMessageBox").style.display == "block") {
    	var oldMsg = document.getElementById("cstReplacer2").innerHTML;
	} else {
		var oldMsg = document.getElementById("helpSUB").innerHTML;
		}
    if (!publisher) { publisher = "Unknown" } else { publisher = "True" }
    if (!pId) { pId = "Unknown" } else { pId = "True" }
    if (!msg || msg == "Please enter your support question here...") {
        document.getElementById("ticketMessage").style.borderColor = "red";
        if (!!msg2){document.getElementById("messagePubSupp").style.borderColor = "red";}
    } else {
        Parse.Cloud.run('supportTicket', { user: user, name: name, publisher: publisher, pId: pId, msg: msg, userid:userid }, {
            success: function (result) {
				if(document.getElementById("pubHelpMessageBox").style.display == "block") {
					document.getElementById("cstReplacer2").innerHTML = "<center style='color:grey'>Your ticket has been sent.<br/>Pletho Support will reply to your publisher help ticket shortly. </center>";
					setTimeout(function (args) {
						hideHelpMessageBoxes2()
						document.getElementById("cstReplacer2").innerHTML = oldMsg;
						try{
							 setTimeout(function (args) {document.getElementById("messagePubSupp").focus();}, 200)
							 setTimeout(function (args) {document.getElementById("messagePubSupp").blur();}, 600)
						}catch(e) {}
						document.getElementById("messagePubSupp").textContent = "";
					}, 5500)
						} else {
					document.getElementById("helpSUB").innerHTML = "<br/><b>Ticket Submission</b><br/><br/>Your ticket has been sent.<br/>Pletho Support will reply to your support ticket shortly. ";
					setTimeout(function (args) {
						document.getElementById("helpSUB").innerHTML = oldMsg;
						try{
							 setTimeout(function (args) {document.getElementById("ticketMessage").focus();}, 200)
							 setTimeout(function (args) {document.getElementById("ticketMessage").blur();}, 600)
						}catch(e) {}
						document.getElementById("ticketMessage").textContent = "";
					}, 5500)
			  }
            },
            error: function (error) {
                document.getElementById("mainPageLoader2").style.opacity = "0";
                document.getElementById("mainPageLoader2").style.display = "none"
                document.getElementById("loadingGraphic2").src = "/images/loader/18p.jpg";
                document.getElementById("serverMsgBox").innerHTML = "Sorry, there appears to be a problem. (Error Message: '" + error.message + "')";
                document.getElementById("serverMsgBackdrop").style.display = "block";
                document.getElementById("serverMsgBox").style.display = "block";
                document.getElementById("serverMsgBackdrop").style.opacity = "1";
                document.getElementById("serverMsgBox").style.opacity = "1";
                setTimeout(function (args) {
                    document.getElementById("serverMsgBackdrop").style.opacity = "0";
                    document.getElementById("serverMsgBox").style.opacity = "0";
                    //bugreport	
                    var ts = new Date().getTime();
                    try { var currentUser = Parse.User.current(); } catch (e) { var user = "offline" }
                    try { var user = currentUser.attributes.username; } catch (e) { var user = "offline" }
                    var error1 = "Line 173 - Help - Time: " + ts;
                    try { var error2 = error.message; } catch (e) { var error2 = "Unknown - Use timestamp to locate in DB logs" }
                    Parse.Cloud.run('sendBug', { user: user, error1: error1, error2: error2 }, {
                        success: function (result) { },
                        error: function (result) { }
                    });
                    //bugreport	
                    advertiserPage1Load()
                    setTimeout(function (args) {
                        document.getElementById("serverMsgBackdrop").style.display = "none";
                        document.getElementById("serverMsgBox").style.display = "none";
                    }, 700)
                }, 4200)
            }
        });
    }
}
