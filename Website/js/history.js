var navigating = true;
var lastHit;
var prevHit;
var unCount = 0;

//  var interval = setInterval(cleanCompute, 50);

//   clearInterval(interval);


//setTimeout(function (args) {beginMainPageLoad()}, 2400)


var historyInterval = setInterval(historyPopper, 1000);
function historyPopper() {
    if (navigating == true) {
        navigating = false;
        lastHit = window.location.hash;
    } else {
        if (lastHit != window.location.hash) {
			prevHit = lastHit;
            lastHit = window.location.hash;
			if(document.getElementById("completedOrderDetails").style.display == "block" || document.getElementById("urlCheckerBox").style.display == "block" || document.getElementById("reasonMessageBox").style.display == "block" || document.getElementById("disputeCommentsUnder").style.display == "block" || document.getElementById("sharedMessage").style.display == "block" || document.getElementById("productOrderingBox").style.display == "block" || document.getElementById("productOrderingBox").style.display == "block" || document.getElementById("campHelpMessageBox").style.display == "block" || document.getElementById("accBoxBox").style.display == "block" ) {
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
				document.getElementById("accBoxBox").style.display = "none";
				document.getElementById("accBoxBackDrop").style.display = "none";
				if(unCount == 0) {
					window.location.hash = prevHit;
					} else {
						unCount = 0;
						}
			} else if (lastHit == "#Advertiser") {
                advertiserPage1Load()
            } else if (lastHit == "#Advertiser:Search-Tags") {
				if(document.getElementById("productOrderingBox").style.display == "block") {
					exitBuyBox()
    				window.location = '#Advertiser:Search-Tags';
				} else if (document.getElementById("modifyProductContainer").style.display == "block") {
					productOwnerModifyPopdown()
    				window.location = '#Advertiser:Search-Tags';
				} else {
               		searchTaggedListings()
				}
            } else if (lastHit == "#Advertiser:Search-All") {
				if(document.getElementById("productOrderingBox").style.display == "block") {
					exitBuyBox()
    				window.location = '#Advertiser:Search-All';
				} else if (document.getElementById("modifyProductContainer").style.display == "block") {
					productOwnerModifyPopdown()
    				window.location = '#Advertiser:Search-All';
				} else {
                searchAllListings()
				}
            } else if (lastHit == "#Campaigns:Pending") {
				if(document.getElementById("approvalMessageBox").style.display == "block") {
					returnToCampaignsView()
				} else if (document.getElementById("reasonMessageBox").style.display == "block") {
					returnToCampaignsView()
				} else {
                	var pastPage = "pending";
                	openCampaignsPage1(pastPage)
				}
            } else if (lastHit == "#Campaigns:Queue") {
				if(document.getElementById("approvalMessageBox").style.display == "block") {
					returnToCampaignsView()
					window.location = '#Campaigns:Queue';
				} else if (document.getElementById("reasonMessageBox").style.display == "block") {
					returnToCampaignsView()
					window.location = '#Campaigns:Queue';
				} else {
					try {
						var stripeBoxCount = document.getElementsByClassName("stripe_checkout_app");
						if(!stripeBoxCount || stripeBoxCount.length == 0) {					
                			var pastPage = "queued";
                			openCampaignsPage1(pastPage)
							}
						for (var i = 0; i < stripeBoxCount.length; i++) {
							var sBc = stripeBoxCount[i].style.display = "none";
						}
					} catch(e) {			
                		var pastPage = "queue";
                		openCampaignsPage1(pastPage)
					}
				}
            } else if (lastHit == "#Campaigns:Live") {
				if(document.getElementById("approvalMessageBox").style.display == "block") {
					returnToCampaignsView()
				} else if (document.getElementById("reasonMessageBox").style.display == "block") {
					returnToCampaignsView()
				} else {
                	var pastPage = "live";
                	openCampaignsPage1(pastPage)
				}
            } else if (lastHit == "#Campaigns:Disputes") {
				if (document.getElementById("disputeComments").style.display == "block") {
					closeDisputeComments()
				} else if (document.getElementById("reasonMessageBox").style.display == "block") {
					returnToCampaignsView()
				} else {
                	var pastPage = "dispute";
                	openCampaignsPage1(pastPage)
				}
            } else if (lastHit == "#Campaigns:Complete") {
				if(document.getElementById("completedOrderDetails").style.display == "block") {
					returnToCampaignsView()
				} else {
                	var pastPage = "complete";
                	openCampaignsPage1(pastPage)
				}
            } else if (lastHit == "#Publisher") {
                openPublisherPage()
            } else if (lastHit == "#Login") {
				if(document.getElementById("home").style.display == "block" || document.getElementById("home").style.display == "") {
					closeMainPagePopups()	
                	setTimeout(function (args) { loginMP() }, 700)
				}
			} else if (lastHit == "#Join") {
				if(document.getElementById("home").style.display == "block" || document.getElementById("home").style.display == "") {
					closeMainPagePopups()
                	setTimeout(function (args) { joinMP() }, 700)
				}
			} else if (lastHit.indexOf('-tag') != -1) {
				var adIdLinked1 = window.location.hash.split('-');
				var adIdLinked2 = adIdLinked1[0].replace('#','');
				reOrderVal = adIdLinked2;
                	advertiserPage1Load();
					searchTaggedListings(); 
			}else if (lastHit == "") {
				closeMainPagePopups()
			}
        }
    }
}