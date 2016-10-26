var topAlert;
var allAlerts;
var intervalUserObjectUpdate = setInterval(updateUserObjectDetails, 60000);
var intervalAlerts = setInterval(checkAlerts, 65000);
var topCampaignAlerter = 0;
var pageAlert;
var campaignAlert;
var rememberMe;

function updateUserObjectDetails() {
    try {
        var currentUser = Parse.User.current();
        currentUser.fetch()
    } catch (e) { }
}

function checkAlerts() {
    try {
		var tagCounter = 0;
        var currentUser = Parse.User.current();
        var alerts = currentUser.attributes.alert;
		alerts.reverse();
        try { topAlert = alerts[0][0]; } catch (e) { }
        var preCount = alerts.length;
        var count = alerts.length;
		var actualAlerts = [];
		var alertList = "";
		
		///BREAKDOWN-ALERTS
			for (var i = 0; i < preCount; i++) {
				var tagCounter;
				var alertBreaker = alerts[i][0].split("|");
				var alertedOrder = alertBreaker[1];
				tagCounter += 1
				if(alertList.indexOf(alertedOrder) != -1) {
					count -= 1
				} else {
					alertList += alertedOrder + "||";
					actualAlerts.push(alerts[i]);
				}
				if(tagCounter == preCount) {
				 currentUser.set("alert", actualAlerts);
				 currentUser.save();
				 alerts = currentUser.attributes.alert;
				}
			}
		///BREAKDOWN-ALERTS
        allAlerts = alerts;
        if (count > 0) {
            document.getElementById("alertsLink").style.backgroundImage = "url('/images/events2.png')";
            document.getElementById("alertsLink").style.opacity = "1";
            document.getElementById("alertsLink").style.color = "lightyellow";
            if (count > 9) { count = 9 }
            document.getElementById("alertCount").innerText = count;
            document.getElementById("alertCount").textContent = count;
        } else {
            document.getElementById("alertsLink").style.backgroundImage = "url('/images/events.png')";
            document.getElementById("alertsLink").style.opacity = "1";
            document.getElementById("alertsLink").style.color = "white";
            document.getElementById("alertCount").innerText = "";
            document.getElementById("alertCount").textContent = "";
        }
    } catch (e) { }
}

function alertClick() {
    if (!!document.getElementById("alertCount").innerText && !!document.getElementById("alertCount").textContent) {
        var currentUser = Parse.User.current();
        allAlerts.splice(0, 1);
        currentUser.set("alert", allAlerts);
        currentUser.save();

        ///////////
        document.getElementById("dateTimeLeadInformation").style.display = "block";
        document.getElementById("dateTimeLeadInformation").style.opacity = "1";
        //////////

        var alertSplitter = topAlert.split("|")
        pageAlert = alertSplitter[0];
        campaignAlert = alertSplitter[1];

        if (pageAlert == "pending") {
            var nav = "pending"
            openCampaignsPage1(nav)
            checkAlerts()
            /////////////
            topCampaignAlerter = 1;

            rememberMe = document.getElementById("dateTimeLeadInformation").textContent;
            document.getElementById("dateTimeLeadInformation").style.backgroundColor = "black";
            document.getElementById("dateTimeLeadInformation").style.color = "white";
            document.getElementById("dateTimeLeadInformation").style.fontSize = "12px";
            document.getElementById("dateTimeLeadInformation").style.textDecoration = "none";
            document.getElementById("dateTimeLeadInformation").style.height = "auto";
            document.getElementById("dateTimeLeadInformation").textContent = "You have a new pending campaign."
            setTimeout(function (args) {
                if (document.getElementById("dateTimeLeadInformation").textContent == "You have a new pending campaign.") {
                    document.getElementById("dateTimeLeadInformation").style.backgroundColor = "white";
                    document.getElementById("dateTimeLeadInformation").style.color = "black";
                    document.getElementById("dateTimeLeadInformation").style.fontSize = "16px";
                    document.getElementById("dateTimeLeadInformation").style.height = "30px";
                    document.getElementById("dateTimeLeadInformation").style.textDecoration = "underline";
                    document.getElementById("dateTimeLeadInformation").textContent = rememberMe;

                    ///////////
                    document.getElementById("dateTimeLeadInformation").style.display = "none";
                    document.getElementById("dateTimeLeadInformation").style.opacity = "0";
                    //////////

                }
            }, 8200)
            setTimeout(function (args) { passOverAlertDetails() }, 2200)
            /////////////
        }
        else if (pageAlert == "queued") {
            var nav = "queued"
            openCampaignsPage1(nav)
            checkAlerts()
            /////////////
            topCampaignAlerter = 1;

            rememberMe = document.getElementById("dateTimeLeadInformation").textContent;
            document.getElementById("dateTimeLeadInformation").style.backgroundColor = "black";
            document.getElementById("dateTimeLeadInformation").style.color = "white";
            document.getElementById("dateTimeLeadInformation").style.fontSize = "12px";
            document.getElementById("dateTimeLeadInformation").style.textDecoration = "none";
            document.getElementById("dateTimeLeadInformation").style.height = "auto";
            document.getElementById("dateTimeLeadInformation").textContent = "You have a new queued campaign."
            setTimeout(function (args) {
                if (document.getElementById("dateTimeLeadInformation").textContent == "You have a new queued campaign.") {
                    document.getElementById("dateTimeLeadInformation").style.backgroundColor = "white";
                    document.getElementById("dateTimeLeadInformation").style.color = "black";
                    document.getElementById("dateTimeLeadInformation").style.fontSize = "16px";
                    document.getElementById("dateTimeLeadInformation").style.height = "30px";
                    document.getElementById("dateTimeLeadInformation").style.textDecoration = "underline";
                    document.getElementById("dateTimeLeadInformation").textContent = rememberMe;

                    ///////////
                    document.getElementById("dateTimeLeadInformation").style.display = "none";
                    document.getElementById("dateTimeLeadInformation").style.opacity = "0";
                    //////////

                }
            }, 8200)
            setTimeout(function (args) { passOverAlertDetails() }, 2200)
            /////////////
        }
        else if (pageAlert == "live") {
            var nav = "live"
            openCampaignsPage1(nav)
            checkAlerts()
            /////////////
            topCampaignAlerter = 1;

             rememberMe = document.getElementById("dateTimeLeadInformation").textContent;
            document.getElementById("dateTimeLeadInformation").style.backgroundColor = "black";
            document.getElementById("dateTimeLeadInformation").style.color = "white";
            document.getElementById("dateTimeLeadInformation").style.fontSize = "12px";
            document.getElementById("dateTimeLeadInformation").style.textDecoration = "none";
            document.getElementById("dateTimeLeadInformation").style.height = "auto";
            document.getElementById("dateTimeLeadInformation").textContent = "You have a new live campaign."
            setTimeout(function (args) {
                if (document.getElementById("dateTimeLeadInformation").textContent == "You have a new live campaign.") {
                    document.getElementById("dateTimeLeadInformation").style.backgroundColor = "white";
                    document.getElementById("dateTimeLeadInformation").style.color = "black";
                    document.getElementById("dateTimeLeadInformation").style.fontSize = "16px";
                    document.getElementById("dateTimeLeadInformation").style.height = "30px";
                    document.getElementById("dateTimeLeadInformation").style.textDecoration = "underline";
                    document.getElementById("dateTimeLeadInformation").textContent = rememberMe;

                    ///////////
                    document.getElementById("dateTimeLeadInformation").style.display = "none";
                    document.getElementById("dateTimeLeadInformation").style.opacity = "0";
                    //////////

                }
            }, 8200)
            setTimeout(function (args) { passOverAlertDetails() }, 2200)
            /////////////
        }
        else if (pageAlert == "denied") {
            var nav = "pending"
            openCampaignsPage1(nav)
            checkAlerts()
            /////////////
            topCampaignAlerter = 1;

             rememberMe = document.getElementById("dateTimeLeadInformation").textContent;
            document.getElementById("dateTimeLeadInformation").style.backgroundColor = "black";
            document.getElementById("dateTimeLeadInformation").style.color = "white";
            document.getElementById("dateTimeLeadInformation").style.fontSize = "12px";
            document.getElementById("dateTimeLeadInformation").style.textDecoration = "none";
            document.getElementById("dateTimeLeadInformation").style.height = "auto";
            document.getElementById("dateTimeLeadInformation").textContent = "You have a denied campaign message."
            setTimeout(function (args) {
                if (document.getElementById("dateTimeLeadInformation").textContent == "You have a denied campaign message.") {
                    document.getElementById("dateTimeLeadInformation").style.backgroundColor = "white";
                    document.getElementById("dateTimeLeadInformation").style.color = "black";
                    document.getElementById("dateTimeLeadInformation").style.fontSize = "16px";
                    document.getElementById("dateTimeLeadInformation").style.height = "30px";
                    document.getElementById("dateTimeLeadInformation").style.textDecoration = "underline";
                    document.getElementById("dateTimeLeadInformation").textContent = rememberMe;

                    ///////////
                    document.getElementById("dateTimeLeadInformation").style.display = "none";
                    document.getElementById("dateTimeLeadInformation").style.opacity = "0";
                    //////////

                }
            }, 8200)
            setTimeout(function (args) { passOverAlertDetails() }, 2200)
            /////////////
        }
        else if (pageAlert == "archived") {
            var nav = "pending"
            openCampaignsPage1(nav)
            checkAlerts()
            /////////////
             rememberMe = document.getElementById("dateTimeLeadInformation").textContent;
            document.getElementById("dateTimeLeadInformation").style.backgroundColor = "black";
            document.getElementById("dateTimeLeadInformation").style.color = "white";
            document.getElementById("dateTimeLeadInformation").style.fontSize = "12px";
            document.getElementById("dateTimeLeadInformation").style.textDecoration = "none";
            document.getElementById("dateTimeLeadInformation").style.height = "auto";
            document.getElementById("dateTimeLeadInformation").textContent = "The campaign has been removed."
            setTimeout(function (args) {
                if (document.getElementById("dateTimeLeadInformation").textContent == "The campaign has been removed.") {
                    document.getElementById("dateTimeLeadInformation").style.backgroundColor = "white";
                    document.getElementById("dateTimeLeadInformation").style.color = "black";
                    document.getElementById("dateTimeLeadInformation").style.fontSize = "16px";
                    document.getElementById("dateTimeLeadInformation").style.height = "30px";
                    document.getElementById("dateTimeLeadInformation").style.textDecoration = "underline";
                    document.getElementById("dateTimeLeadInformation").textContent = rememberMe;

                    ///////////
                    document.getElementById("dateTimeLeadInformation").style.display = "none";
                    document.getElementById("dateTimeLeadInformation").style.opacity = "0";
                    //////////

                }
            }, 8200)
            setTimeout(function (args) { passOverAlertDetails() }, 2200)
            /////////////
        }
        else if (pageAlert == "complete") {
            var nav = "complete"
            openCampaignsPage1(nav)
            checkAlerts()
            /////////////
            topCampaignAlerter = 1;

             rememberMe = document.getElementById("dateTimeLeadInformation").textContent;
            document.getElementById("dateTimeLeadInformation").style.backgroundColor = "black";
            document.getElementById("dateTimeLeadInformation").style.color = "white";
            document.getElementById("dateTimeLeadInformation").style.fontSize = "12px";
            document.getElementById("dateTimeLeadInformation").style.textDecoration = "none";
            document.getElementById("dateTimeLeadInformation").style.height = "auto";
            document.getElementById("dateTimeLeadInformation").textContent = "The campaign is now complete."
            setTimeout(function (args) {
                if (document.getElementById("dateTimeLeadInformation").textContent == "The campaign is now complete.") {
                    document.getElementById("dateTimeLeadInformation").style.backgroundColor = "white";
                    document.getElementById("dateTimeLeadInformation").style.color = "black";
                    document.getElementById("dateTimeLeadInformation").style.fontSize = "16px";
                    document.getElementById("dateTimeLeadInformation").style.height = "30px";
                    document.getElementById("dateTimeLeadInformation").style.textDecoration = "underline";
                    document.getElementById("dateTimeLeadInformation").textContent = rememberMe;

                    ///////////
                    document.getElementById("dateTimeLeadInformation").style.display = "none";
                    document.getElementById("dateTimeLeadInformation").style.opacity = "0";
                    //////////

                }
            }, 8200)
            setTimeout(function (args) { passOverAlertDetails() }, 2200)
            /////////////
        } else if (pageAlert == "disputed") {
            var nav = "dispute"
            openCampaignsPage1(nav)
            checkAlerts()
            /////////////
            topCampaignAlerter = 1;

             rememberMe = document.getElementById("dateTimeLeadInformation").textContent;
            document.getElementById("dateTimeLeadInformation").style.backgroundColor = "black";
            document.getElementById("dateTimeLeadInformation").style.color = "white";
            document.getElementById("dateTimeLeadInformation").style.fontSize = "12px";
            document.getElementById("dateTimeLeadInformation").style.textDecoration = "none";
            document.getElementById("dateTimeLeadInformation").style.height = "auto";
            document.getElementById("dateTimeLeadInformation").textContent = "You have a new disputed campaign."
            setTimeout(function (args) {
                if (document.getElementById("dateTimeLeadInformation").textContent == "You have a new disputed campaign.") {
                    document.getElementById("dateTimeLeadInformation").style.backgroundColor = "white";
                    document.getElementById("dateTimeLeadInformation").style.color = "black";
                    document.getElementById("dateTimeLeadInformation").style.fontSize = "16px";
                    document.getElementById("dateTimeLeadInformation").style.height = "30px";
                    document.getElementById("dateTimeLeadInformation").style.textDecoration = "underline";
                    document.getElementById("dateTimeLeadInformation").textContent = rememberMe;

                    ///////////
                    document.getElementById("dateTimeLeadInformation").style.display = "none";
                    document.getElementById("dateTimeLeadInformation").style.opacity = "0";
                    //////////

                }
            }, 8200)
            setTimeout(function (args) { passOverAlertDetails() }, 2200)
            /////////////
        } else if (pageAlert == "disputed2") {
            var nav = "dispute"
            openCampaignsPage1(nav)
            checkAlerts()
            /////////////
            topCampaignAlerter = 1;

             rememberMe = document.getElementById("dateTimeLeadInformation").textContent;
            document.getElementById("dateTimeLeadInformation").style.backgroundColor = "black";
            document.getElementById("dateTimeLeadInformation").style.color = "white";
            document.getElementById("dateTimeLeadInformation").style.fontSize = "12px";
            document.getElementById("dateTimeLeadInformation").style.textDecoration = "none";
            document.getElementById("dateTimeLeadInformation").style.height = "auto";
            document.getElementById("dateTimeLeadInformation").textContent = "There is a new dispute comment."
            setTimeout(function (args) {
                if (document.getElementById("dateTimeLeadInformation").textContent == "There is a new dispute comment.") {
                    document.getElementById("dateTimeLeadInformation").style.backgroundColor = "white";
                    document.getElementById("dateTimeLeadInformation").style.color = "black";
                    document.getElementById("dateTimeLeadInformation").style.fontSize = "16px";
                    document.getElementById("dateTimeLeadInformation").style.height = "30px";
                    document.getElementById("dateTimeLeadInformation").style.textDecoration = "underline";
                    document.getElementById("dateTimeLeadInformation").textContent = rememberMe;

                    ///////////
                    document.getElementById("dateTimeLeadInformation").style.display = "none";
                    document.getElementById("dateTimeLeadInformation").style.opacity = "0";
                    //////////

                }
            }, 8200)
            setTimeout(function (args) { passOverAlertDetails() }, 2200)
            /////////////
        }
    } else {
        document.getElementById("serverMsgBox").innerHTML = "It's pretty quiet around here.<br/>You'll start to get notifications when you book a campaign.";
        document.getElementById("serverMsgBackdrop").style.display = "block";
        document.getElementById("serverMsgBox").style.display = "block";
        document.getElementById("serverMsgBackdrop").style.opacity = "1";
        document.getElementById("serverMsgBox").style.opacity = "1";
        setTimeout(function (args) {
            document.getElementById("serverMsgBackdrop").style.opacity = "0";
            document.getElementById("serverMsgBox").style.opacity = "0";
            setTimeout(function (args) {
                document.getElementById("serverMsgBackdrop").style.display = "none";
                document.getElementById("serverMsgBox").style.display = "none";
            }, 700)
        }, 4200)
    }

    function passOverAlertDetails() {
		try{
			var passOID = campaignAlert;
			var passCS = document.getElementById([passOID]).accessKey;
			if(!passCS) {
				var passCS = document.getElementById([passOID]).title;
			}
			var passCN = document.getElementById([passOID]).className;
			passOverCampaignDetails(passOID, passCS, passCN)
		} catch(e) {}
    }
}
