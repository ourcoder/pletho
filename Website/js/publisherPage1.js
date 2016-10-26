
var runOnlyOnce = 0;
var pCount = 0;
var pNCount = 0;
var jobTitles = []
var jobSummaries = []
var jobCurrent = []
var companyIds = []
var companies = []
var PhoneNumbers = []
var done1;
var done2;
var publisherStatus;

function openPublisherPage() {
    mainPageLoader2()
    document.getElementById("advertiserPage2Div").style.bottom = "70px";
    document.getElementById("buttonFooterSearch").style.bottom = "27px";
    if (windowWidth < 730) {
    	document.getElementById("plethoFooter").style.display = "block";
	} else {
		document.getElementById("plethoFooter").style.display = "none";
		}
    document.getElementById("plethoFooter3").style.display = "none";
    document.getElementById("adShareButton").style.opacity = "0.25";
    document.getElementById("searchBox").style.display = "none";
    document.getElementById("mobileGoButton").style.display = "none";
    document.getElementById("advertiserLink").style.opacity = "1";
    document.getElementById("campaignsLink").style.opacity = "1";
    document.getElementById("publisherLink").style.opacity = "1";
    document.getElementById("campaignButton1").style.display = "none";
    document.getElementById("campaignButton2").style.display = "none";
    document.getElementById("campaignShareButton1").style.display = "none";
    document.getElementById("campaignHelpButton1").style.display = "none";
    document.getElementById("publisherHelpButton1").style.display = "block";
    document.getElementById("buttonBreaker1").style.opacity = "0";
    document.getElementById("buttonBreaker1").style.opacity = "0";
    document.getElementById("plethoFooter3").style.display = "none";
    document.getElementById("searchAllButton").style.display = "none";
    document.getElementById("normalSearchButton").style.display = "none";
    document.getElementById("advSearchButton").style.display = "none";
    document.getElementById("advancedSearchButtonMk2").style.display = "none";
    document.getElementById("helpLink").style.opacity = "1";
    document.getElementById("advertiserLink").style.backgroundImage = "url('../images/atiser.png')";
    document.getElementById("campaignsLink").style.backgroundImage = "url('../images/campaigns.png')";
    document.getElementById("publisherLink").style.backgroundImage = "url('../images/publisher2.png')";
    document.getElementById("helpLink").style.backgroundImage = "url('../images/help.png')";
    document.getElementById("campaignsLink").style.color = "white";
    document.getElementById("advertiserLink").style.color = "white";
    document.getElementById("helpLink").style.color = "white";
    document.getElementById("publisherLink").style.color = "#fde38a";
    document.getElementById("helpDiv").style.display = "none";
    ////document.getElementById("loggingin").style.backgroundColor = "rgba(0,0,0,.25)";
    ////document.getElementById("loggingin").innerHTML = "<br\>Loading publisher details...";
    ////document.getElementById("loggingin").style.display = "block";
    document.getElementById("advertiserPage2Div").innerHTML = "";
    document.getElementById("advertiserPage0Div").style.display = "none";
    document.getElementById("advertiserPage1Div").style.display = "none";
    document.getElementById("advertiserPage2Div").style.display = "none";
    document.getElementById("campaignsPage1Div").style.display = "none";
    document.getElementById("publisherPage1Div").style.display = "block"
    document.getElementById("sortResultsButton").style.display = "none";
    document.getElementById("buyAdSlotButton").style.display = "none";
    document.getElementById("ShareWideAdSlotButton").style.display = "none";
    document.getElementById("adCounterButton").style.display = "none";
    document.getElementById("debug").innerText = "(publisherPage1)";
    document.getElementById("debug").textContent = "(publisherPage1)";
    document.body.className = "bkg4";

    //check user privileges
    var currentUser = Parse.User.current();
    var currentUserId = currentUser.id;
    Parse.Cloud.run('publisherApprovalCheck', { PublisherID: currentUserId }, {
        success: function (result) {
            publisherStatus = result;
            continuePublisherPageLoad()
        },
        error: function (result) {
            publisherStatus = "newPublisher";
            continuePublisherPageLoad()
        }
    });
    function continuePublisherPageLoad() {
        //1. more details from linkedin	
        if (!publisherStatus || publisherStatus == "newPublisher") {
            document.getElementById("approvalProcessPublishers").style.display = "block"
            document.getElementById("app1").style.display = "block";
            document.getElementById("app2").style.display = "none";
            document.getElementById("publisherHelpButton1").style.display = "none";
            document.getElementById("publisherButton3").style.display = "block";
            document.getElementById("publisherButton4").style.display = "none";
            document.getElementById("publisherButton5").style.display = "none";
            document.getElementById("approvalProcessQueue1").style.display = "none"
            document.getElementById("approvalProcessQueue2").style.display = "none"
            document.getElementById("approvalProcessQueue3").style.display = "none"
            document.getElementById("stripeConnector").style.display = "none"
            document.getElementById("activatedMerchant").style.display = "none"
        } else
            //2. waiting for manual confirmation from pletho
            if (publisherStatus == "pendingApproval") {
            	document.getElementById("publisherHelpButton1").style.display = "block";
            	document.getElementById("publisherHelpButton1").style.display = "none";
                document.getElementById("approvalProcessPublishers").style.display = "none"
                document.getElementById("approvalProcessQueue1").style.display = "none"
                document.getElementById("approvalProcessQueue2").style.display = "none"
                document.getElementById("approvalProcessQueue3").style.display = "block"
                document.getElementById("stripeConnector").style.display = "none"
                document.getElementById("activatedMerchant").style.display = "none"
                    document.getElementById("publisherButton5").style.display = "none"
                    document.getElementById("publisherButton4").style.display = "none"
            } else
                //3. please create your stripe merchant account
                if (publisherStatus == "approved") {
                    var currentUser = Parse.User.current();
                    document.getElementById("approvalProcessPublishers").style.display = "none"
                    document.getElementById("approvalProcessQueue1").style.display = "none"
                    document.getElementById("publisherButton5").style.display = "none"
                    document.getElementById("publisherButton4").style.display = "none"
                    document.getElementById("approvalProcessQueue2").style.display = "none"
                    document.getElementById("approvalProcessQueue3").style.display = "none"
                    document.getElementById("stripeConnector").style.display = "block"
                    document.getElementById("activatedMerchant").style.display = "none"
                    document.getElementById("stripe-connect").href = "https://connect.stripe.com/oauth/authorize?response_type=code&amp;scope=read_write&amp;stripe_landing=register&amp;client_id=ca_4ZCXM2jRJ9CJXjTxtDklQxqI5iBN9IyF&amp;stripe_user[email]=" + currentUser.attributes.email + "&amp;stripe_user[first_name]=" + currentUser.attributes.firstName + "&amp;stripe_user[last_name]=" + currentUser.attributes.lastName
                }
        //4. load product uploading page
        if (publisherStatus == "authorised") {
            document.getElementById("approvalProcessPublishers").style.display = "none"
            document.getElementById("approvalProcessQueue1").style.display = "none"
            document.getElementById("approvalProcessQueue2").style.display = "none"
            document.getElementById("approvalProcessQueue3").style.display = "none"
            document.getElementById("stripeConnector").style.display = "none"
            document.getElementById("activatedMerchant").style.display = "block"
            goToAddProductFunc()
        }
    }
    setTimeout(function (args) {
        document.getElementById("loadingGraphic2").src = "/images/loader/85p.jpg";
        document.getElementById("mainPageLoader2").style.opacity = "0";
        setTimeout(function (args) {
            document.getElementById("mainPageLoader2").style.display = "none"
            document.getElementById("loadingGraphic2").src = "/images/loader/18p.jpg";
        }, 500)
    }, 100)
}

function beginApprovalProcess() {
    document.getElementById("loadingGraphic2").src = "/images/loader/52p.jpg";
    //document.getElementById("approvalProcessPublishers").style.display = "none"
    //document.getElementById("approvalProcessQueue1").style.display = "block"
    upPubAppToDb()

    function upPubAppToDb() {
        var interval2 = setInterval(doneChecker, 500);
        var interval3 = setInterval(doneChecker3, 500);
        var interval4 = setInterval(doneChecker4, 500);
        var incHeadline = headline;
        var incIndustry = industry;
        var incConnections = connections;
        var incPositions = positions;
        var incPhoneNumbers = phoneNumbers;

        function doneChecker3() {
            if (!!incPositions) {
                for (var i = 0; i < incPositions.length; i++) {
                    pCount += 1
                    if (pCount > incPositions.length) {
                        done1 = true;
                        document.getElementById("loadingGraphic2").src = "/images/loader/75p.jpg";
                    } else {
                        var sits = incPositions
                        var jobTitle = sits[i].title
                        if (!!jobTitle) jobTitles.push(jobTitle)
                        var jobSummary = sits[i].summary
                        if (!!jobSummary) jobSummaries.push(jobSummary)
                        var jobCur = sits[i].isCurrent
                        if (!!jobCur) jobCurrent.push(jobCur)
                        var companyId = sits[i].company.id
                        if (!!companyId) companyIds.push(companyId)
                        var company = sits[i].company.name + ", " + sits[i].company.size + ", " + sits[i].company.type + "."
                        if (!!company) companies.push(company)
                    }
                }
            } else {
                done1 = true;
                document.getElementById("loadingGraphic2").src = "/images/loader/75p.jpg";
            }
        }

        function doneChecker4() {
            if (!!incPhoneNumbers) {
                for (var j = 0; j < incPhoneNumbers.length; j++) {
                    pNCount += 1
                    if (pNCount > incPhoneNumbers.length) {
                        done2 = true
                        document.getElementById("loadingGraphic2").src = "/images/loader/85p.jpg";
                    } else {
                        var numa = incPhoneNumbers
                        var pNum = numa[j].phoneNumber
                        if (!!pNum) PhoneNumbers.push(pNum)
                    }
                }
            } else {
                done2 = true
                document.getElementById("loadingGraphic2").src = "/images/loader/85p.jpg";
            }
        }

        function doneChecker() {
            if (done1 == true && done2 == true) {
                clearInterval(interval2);
                clearInterval(interval3);
                clearInterval(interval4);
                var currentUser = Parse.User.current();
                var currentUserId = currentUser.id;
                var emailPublisher = currentUser.attributes.email;
                papJT = jobTitles
                if (!!papJT[0]) document.getElementById("pubTitle").value = papJT[0];
                document.getElementById("pubMail").value = emailPublisher
                papJS = jobSummaries
                if (!!papJS[0]) document.getElementById("pubSum").value = papJS[0];
                papCO = companies
                if (!!papCO[0]) document.getElementById("pubCur").value = papCO[0];
                papPN = PhoneNumbers
                if (!!papPN[0]) document.getElementById("pubTel").value = papPN[0];
                ////updatex
                if (!!papJT[1]) document.getElementById("pubHist").value += papJT[1] + " at ";
                while (papCO[1].indexOf(', undefined,') != -1) papCO[1] = papCO[1].replace(', undefined,', '');
                while (papCO[1].indexOf(' undefined.') != -1) papCO[1] = papCO[1].replace(' undefined.', '.');
                if (!!papCO[1]) document.getElementById("pubHist").value += papCO[1] + " ";
                if (!!papJT[2]) document.getElementById("pubHist").value += papJT[2] + " at ";
                while (papCO[2].indexOf(', undefined,') != -1) papCO[2] = papCO[2].replace(', undefined,', '');
                while (papCO[2].indexOf(' undefined.') != -1) papCO[2] = papCO[2].replace(' undefined.', '.');
                if (!!papCO[2]) document.getElementById("pubHist").value += papCO[2] + " ";
                if (!!papJT[3]) document.getElementById("pubHist").value += papJT[3] + " at ";
                while (papCO[3].indexOf(', undefined,') != -1) papCO[3] = papCO[3].replace(', undefined,', '');
                while (papCO[3].indexOf(' undefined.') != -1) papCO[3] = papCO[3].replace(' undefined.', '.');
                if (!!papCO[3]) document.getElementById("pubHist").value += papCO[3];
                setTimeout(function (args) {
                    document.getElementById("mainPageLoader2").style.opacity = "0";
                    setTimeout(function (args) {
                        document.getElementById("mainPageLoader2").style.display = "none";
                        document.getElementById("loadingGraphic2").src = "/images/loader/18p.jpg";
                    }, 500)
                }, 850)
            }
        }
    }
}

function showAPP() {
    document.getElementById("app1").style.display = "none";
    document.getElementById("app2").style.display = "block";
    document.getElementById("publisherButton3").style.display = "none";
    document.getElementById("publisherButton4").style.display = "block";
    document.getElementById("publisherButton5").style.display = "block";
}

function submitAPP() {	
	var tosCheckBox1 = document.getElementById("tosCheckBox").checked;
	if(tosCheckBox1 != true) {
		document.getElementById("tosCheckBoxDiv").style.border = "1px solid red";
	} else {
		document.getElementById("tosCheckBoxDiv").style.border = "0px solid red";
		mainPageLoader2()
		var currentUser = Parse.User.current();
		var currentUserId = currentUser.id;
		var emailPublisher = currentUser.attributes.email;
		var pubTel = document.getElementById("pubTel").value;
		var pubSum = document.getElementById("pubSum").value;
		var pubTitle = document.getElementById("pubTitle").value;
		var pubHist = document.getElementById("pubHist").value;
		var pubMail = document.getElementById("pubMail").value;
		var pubCur = document.getElementById("pubCur").value;
		//companyIds
		if (!!pubCur || !!pubMail || !!pubHist || !!pubTitle || !!pubSum || !!pubTel) {
			Parse.Cloud.run('publisherApprovalProcess1', { PublisherID: currentUserId, jobTitles: pubTitle, jobSummaries: pubSum, currentJob: pubCur, workCompanies: pubHist, phoneNumbers: pubTel, email: pubMail }, {
				success: function (ratings) {
					document.getElementById("approvalProcessQueue1").style.display = "none"
					document.getElementById("app1").style.display = "none";
					document.getElementById("app2").style.display = "none";
					document.getElementById("approvalProcessQueue2").style.display = "block"
					setTimeout(function (args) {
						document.getElementById("loadingGraphic2").src = "/images/loader/85p.jpg";
						setTimeout(function (args) {
							document.getElementById("mainPageLoader2").style.opacity = "0";
							setTimeout(function (args) {
								document.getElementById("mainPageLoader2").style.display = "none"
								document.getElementById("loadingGraphic2").src = "/images/loader/18p.jpg";
							}, 500)
						}, 850)
					}, 2400)
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
						var error1 = "Line 198 - PublisherPage1 - Time: " + ts;
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
		} else {
			document.getElementById("mainPageLoader2").style.opacity = "0";
			document.getElementById("mainPageLoader2").style.display = "none"
			document.getElementById("loadingGraphic2").src = "/images/loader/18p.jpg";
			document.getElementById("serverMsgBox").innerHTML = "All fields must be completed.";
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
	}
}

function lnbPBoxHelp() {
	document.getElementById("dateTimeLeadInformation").style.display = "block";
	document.getElementById("dateTimeLeadInformation").style.opacity = "1";
	document.getElementById("dateTimeLeadInformation").style.backgroundColor = "black";
		document.getElementById("dateTimeLeadInformation").style.color = "white";
		document.getElementById("dateTimeLeadInformation").style.fontSize = "12px";
		document.getElementById("dateTimeLeadInformation").style.textDecoration = "none";
		document.getElementById("dateTimeLeadInformation").style.height = "auto";
		document.getElementById("dateTimeLeadInformation").textContent = "Choose whether your campaign is advertising locally or nationally."
		setTimeout(function (args) {
			if(document.getElementById("dateTimeLeadInformation").textContent == "Choose whether your campaign is advertising locally or nationally.") {
				document.getElementById("dateTimeLeadInformation").style.display = "none";
				document.getElementById("dateTimeLeadInformation").style.opacity = "0";
				document.getElementById("dateTimeLeadInformation").style.backgroundColor = "white";
				document.getElementById("dateTimeLeadInformation").style.color = "black";
				document.getElementById("dateTimeLeadInformation").style.fontSize = "16px";
				document.getElementById("dateTimeLeadInformation").style.height = "30px";
				document.getElementById("dateTimeLeadInformation").style.textDecoration = "underline";
				document.getElementById("dateTimeLeadInformation").textContent = dateMsg;
			}
		}, 8200)
	}

function pricePBoxHelp() {
	document.getElementById("dateTimeLeadInformation").style.display = "block";
	document.getElementById("dateTimeLeadInformation").style.opacity = "1";
	document.getElementById("dateTimeLeadInformation").style.backgroundColor = "black";
		document.getElementById("dateTimeLeadInformation").style.color = "white";
		document.getElementById("dateTimeLeadInformation").style.fontSize = "12px";
		document.getElementById("dateTimeLeadInformation").style.textDecoration = "none";
		document.getElementById("dateTimeLeadInformation").style.height = "auto";
		document.getElementById("dateTimeLeadInformation").textContent = "Enter the full cost amount of the campaign here."
		setTimeout(function (args) {
			if(document.getElementById("dateTimeLeadInformation").textContent == "Enter the full cost amount of the campaign here.") {
				document.getElementById("dateTimeLeadInformation").style.display = "none";
				document.getElementById("dateTimeLeadInformation").style.opacity = "0";
				document.getElementById("dateTimeLeadInformation").style.backgroundColor = "white";
				document.getElementById("dateTimeLeadInformation").style.color = "black";
				document.getElementById("dateTimeLeadInformation").style.fontSize = "16px";
				document.getElementById("dateTimeLeadInformation").style.height = "30px";
				document.getElementById("dateTimeLeadInformation").style.textDecoration = "underline";
				document.getElementById("dateTimeLeadInformation").textContent = dateMsg;
			}
		}, 8200)
	}

function cityPBoxHelp() {
	document.getElementById("dateTimeLeadInformation").style.display = "block";
	document.getElementById("dateTimeLeadInformation").style.opacity = "1";
	document.getElementById("dateTimeLeadInformation").style.backgroundColor = "black";
		document.getElementById("dateTimeLeadInformation").style.color = "white";
		document.getElementById("dateTimeLeadInformation").style.fontSize = "12px";
		document.getElementById("dateTimeLeadInformation").style.textDecoration = "none";
		document.getElementById("dateTimeLeadInformation").style.height = "auto";
		document.getElementById("dateTimeLeadInformation").textContent = "Choose the main city where this advert will air or where you are based."
		setTimeout(function (args) {
			if(document.getElementById("dateTimeLeadInformation").textContent == "Choose the main city where this advert will air or where you are based.") {
				document.getElementById("dateTimeLeadInformation").style.display = "none";
				document.getElementById("dateTimeLeadInformation").style.opacity = "0";
				document.getElementById("dateTimeLeadInformation").style.backgroundColor = "white";
				document.getElementById("dateTimeLeadInformation").style.color = "black";
				document.getElementById("dateTimeLeadInformation").style.fontSize = "16px";
				document.getElementById("dateTimeLeadInformation").style.height = "30px";
				document.getElementById("dateTimeLeadInformation").style.textDecoration = "underline";
				document.getElementById("dateTimeLeadInformation").textContent = dateMsg;
			}
		}, 8200)
	}

function adTypePBoxHelp() {
	document.getElementById("dateTimeLeadInformation").style.display = "block";
	document.getElementById("dateTimeLeadInformation").style.opacity = "1";
	document.getElementById("dateTimeLeadInformation").style.backgroundColor = "black";
		document.getElementById("dateTimeLeadInformation").style.color = "white";
		document.getElementById("dateTimeLeadInformation").style.fontSize = "12px";
		document.getElementById("dateTimeLeadInformation").style.textDecoration = "none";
		document.getElementById("dateTimeLeadInformation").style.height = "auto";
		document.getElementById("dateTimeLeadInformation").textContent = "Choose the type of advert that is being aired for this campaign."
		setTimeout(function (args) {
			if(document.getElementById("dateTimeLeadInformation").textContent == "Choose the type of advert that is being aired for this campaign.") {
				document.getElementById("dateTimeLeadInformation").style.display = "none";
				document.getElementById("dateTimeLeadInformation").style.opacity = "0";
				document.getElementById("dateTimeLeadInformation").style.backgroundColor = "white";
				document.getElementById("dateTimeLeadInformation").style.color = "black";
				document.getElementById("dateTimeLeadInformation").style.fontSize = "16px";
				document.getElementById("dateTimeLeadInformation").style.height = "30px";
				document.getElementById("dateTimeLeadInformation").style.textDecoration = "underline";
				document.getElementById("dateTimeLeadInformation").textContent = dateMsg;
			}
		}, 8200)
	}

function leadTimePBoxHelp() {
	document.getElementById("dateTimeLeadInformation").style.display = "block";
	document.getElementById("dateTimeLeadInformation").style.opacity = "1";
	document.getElementById("dateTimeLeadInformation").style.backgroundColor = "black";
		document.getElementById("dateTimeLeadInformation").style.color = "white";
		document.getElementById("dateTimeLeadInformation").style.fontSize = "12px";
		document.getElementById("dateTimeLeadInformation").style.textDecoration = "none";
		document.getElementById("dateTimeLeadInformation").style.height = "auto";
		document.getElementById("dateTimeLeadInformation").textContent = "The amount of lead time that you require to air this campaign."
		setTimeout(function (args) {
			if(document.getElementById("dateTimeLeadInformation").textContent == "The amount of lead time that you require to air this campaign.") {
				document.getElementById("dateTimeLeadInformation").style.display = "none";
				document.getElementById("dateTimeLeadInformation").style.opacity = "0";
				document.getElementById("dateTimeLeadInformation").style.backgroundColor = "white";
				document.getElementById("dateTimeLeadInformation").style.color = "black";
				document.getElementById("dateTimeLeadInformation").style.fontSize = "16px";
				document.getElementById("dateTimeLeadInformation").style.height = "30px";
				document.getElementById("dateTimeLeadInformation").style.textDecoration = "underline";
				document.getElementById("dateTimeLeadInformation").textContent = dateMsg;
			}
		}, 8200)
	}

function tagsPBoxHelp() {
	document.getElementById("dateTimeLeadInformation").style.display = "block";
	document.getElementById("dateTimeLeadInformation").style.opacity = "1";
	document.getElementById("dateTimeLeadInformation").style.backgroundColor = "black";
		document.getElementById("dateTimeLeadInformation").style.color = "white";
		document.getElementById("dateTimeLeadInformation").style.fontSize = "12px";
		document.getElementById("dateTimeLeadInformation").style.textDecoration = "none";
		document.getElementById("dateTimeLeadInformation").style.height = "auto";
		document.getElementById("dateTimeLeadInformation").textContent = "Enter tags/keywords here that will help buyers find your campaign."
		setTimeout(function (args) {
			if(document.getElementById("dateTimeLeadInformation").textContent == "Enter tags/keywords here that will help buyers find your campaign.") {
				document.getElementById("dateTimeLeadInformation").style.display = "none";
				document.getElementById("dateTimeLeadInformation").style.opacity = "0";
				document.getElementById("dateTimeLeadInformation").style.backgroundColor = "white";
				document.getElementById("dateTimeLeadInformation").style.color = "black";
				document.getElementById("dateTimeLeadInformation").style.fontSize = "16px";
				document.getElementById("dateTimeLeadInformation").style.height = "30px";
				document.getElementById("dateTimeLeadInformation").style.textDecoration = "underline";
				document.getElementById("dateTimeLeadInformation").textContent = dateMsg;
			}
		}, 8200)
	}

function reachPBoxHelp() {
	document.getElementById("dateTimeLeadInformation").style.display = "block";
	document.getElementById("dateTimeLeadInformation").style.opacity = "1";
	document.getElementById("dateTimeLeadInformation").style.backgroundColor = "black";
		document.getElementById("dateTimeLeadInformation").style.color = "white";
		document.getElementById("dateTimeLeadInformation").style.fontSize = "12px";
		document.getElementById("dateTimeLeadInformation").style.textDecoration = "none";
		document.getElementById("dateTimeLeadInformation").style.height = "auto";
		document.getElementById("dateTimeLeadInformation").textContent = "The amount of people this advert campaign reaches on an average basis."
		setTimeout(function (args) {
			if(document.getElementById("dateTimeLeadInformation").textContent == "The amount of people this advert campaign reaches on an average basis.") {
				document.getElementById("dateTimeLeadInformation").style.display = "none";
				document.getElementById("dateTimeLeadInformation").style.opacity = "0";
				document.getElementById("dateTimeLeadInformation").style.backgroundColor = "white";
				document.getElementById("dateTimeLeadInformation").style.color = "black";
				document.getElementById("dateTimeLeadInformation").style.fontSize = "16px";
				document.getElementById("dateTimeLeadInformation").style.height = "30px";
				document.getElementById("dateTimeLeadInformation").style.textDecoration = "underline";
				document.getElementById("dateTimeLeadInformation").textContent = dateMsg;
			}
		}, 8200)
	}

function campLPInputBoxHelp() {
	document.getElementById("dateTimeLeadInformation").style.display = "block";
	document.getElementById("dateTimeLeadInformation").style.opacity = "1";
	document.getElementById("dateTimeLeadInformation").style.backgroundColor = "black";
		document.getElementById("dateTimeLeadInformation").style.color = "white";
		document.getElementById("dateTimeLeadInformation").style.fontSize = "12px";
		document.getElementById("dateTimeLeadInformation").style.textDecoration = "none";
		document.getElementById("dateTimeLeadInformation").style.height = "auto";
		document.getElementById("dateTimeLeadInformation").textContent = "The length of time the campaign or advert will be broadcast for."
		setTimeout(function (args) {
			if(document.getElementById("dateTimeLeadInformation").textContent == "The length of time the campaign or advert will be broadcast for.") {
				document.getElementById("dateTimeLeadInformation").style.display = "none";
				document.getElementById("dateTimeLeadInformation").style.opacity = "0";
				document.getElementById("dateTimeLeadInformation").style.backgroundColor = "white";
				document.getElementById("dateTimeLeadInformation").style.color = "black";
				document.getElementById("dateTimeLeadInformation").style.fontSize = "16px";
				document.getElementById("dateTimeLeadInformation").style.height = "30px";
				document.getElementById("dateTimeLeadInformation").style.textDecoration = "underline";
				document.getElementById("dateTimeLeadInformation").textContent = dateMsg;
			}
		}, 8200)
	}

function descPBoxInputHelp() {
	document.getElementById("dateTimeLeadInformation").style.display = "block";
	document.getElementById("dateTimeLeadInformation").style.opacity = "1";
	document.getElementById("dateTimeLeadInformation").style.backgroundColor = "black";
		document.getElementById("dateTimeLeadInformation").style.color = "white";
		document.getElementById("dateTimeLeadInformation").style.fontSize = "12px";
		document.getElementById("dateTimeLeadInformation").style.textDecoration = "none";
		document.getElementById("dateTimeLeadInformation").style.height = "auto";
		document.getElementById("dateTimeLeadInformation").textContent = "Write as much additional and detailed information as you can about the campaign here."
		setTimeout(function (args) {
			if(document.getElementById("dateTimeLeadInformation").textContent == "Write as much additional and detailed information as you can about the campaign here.") {
				document.getElementById("dateTimeLeadInformation").style.display = "none";
				document.getElementById("dateTimeLeadInformation").style.opacity = "0";
				document.getElementById("dateTimeLeadInformation").style.backgroundColor = "white";
				document.getElementById("dateTimeLeadInformation").style.color = "black";
				document.getElementById("dateTimeLeadInformation").style.fontSize = "16px";
				document.getElementById("dateTimeLeadInformation").style.height = "30px";
				document.getElementById("dateTimeLeadInformation").style.textDecoration = "underline";
				document.getElementById("dateTimeLeadInformation").textContent = dateMsg;
			}
		}, 8200)
	}

function publisherPBoxHelp() {
	document.getElementById("dateTimeLeadInformation").style.display = "block";
	document.getElementById("dateTimeLeadInformation").style.opacity = "1";
	document.getElementById("dateTimeLeadInformation").style.backgroundColor = "black";
		document.getElementById("dateTimeLeadInformation").style.color = "white";
		document.getElementById("dateTimeLeadInformation").style.fontSize = "12px";
		document.getElementById("dateTimeLeadInformation").style.textDecoration = "none";
		document.getElementById("dateTimeLeadInformation").style.height = "auto";
		document.getElementById("dateTimeLeadInformation").textContent = "This is your publisher identity that was provided by Stripe."
		setTimeout(function (args) {
			if(document.getElementById("dateTimeLeadInformation").textContent == "This is your publisher identity that was provided by Stripe.") {
				document.getElementById("dateTimeLeadInformation").style.display = "none";
				document.getElementById("dateTimeLeadInformation").style.opacity = "0";
				document.getElementById("dateTimeLeadInformation").style.backgroundColor = "white";
				document.getElementById("dateTimeLeadInformation").style.color = "black";
				document.getElementById("dateTimeLeadInformation").style.fontSize = "16px";
				document.getElementById("dateTimeLeadInformation").style.height = "30px";
				document.getElementById("dateTimeLeadInformation").style.textDecoration = "underline";
				document.getElementById("dateTimeLeadInformation").textContent = dateMsg;
			}
		}, 8200)
	}

function currencyPBoxHelp() {
	document.getElementById("dateTimeLeadInformation").style.display = "block";
	document.getElementById("dateTimeLeadInformation").style.opacity = "1";
	document.getElementById("dateTimeLeadInformation").style.backgroundColor = "black";
		document.getElementById("dateTimeLeadInformation").style.color = "white";
		document.getElementById("dateTimeLeadInformation").style.fontSize = "12px";
		document.getElementById("dateTimeLeadInformation").style.textDecoration = "none";
		document.getElementById("dateTimeLeadInformation").style.height = "auto";
		document.getElementById("dateTimeLeadInformation").textContent = "This is the currency that you require payment in."
		setTimeout(function (args) {
			if(document.getElementById("dateTimeLeadInformation").textContent == "This is the currency that you require payment in.") {
				document.getElementById("dateTimeLeadInformation").style.display = "none";
				document.getElementById("dateTimeLeadInformation").style.opacity = "0";
				document.getElementById("dateTimeLeadInformation").style.backgroundColor = "white";
				document.getElementById("dateTimeLeadInformation").style.color = "black";
				document.getElementById("dateTimeLeadInformation").style.fontSize = "16px";
				document.getElementById("dateTimeLeadInformation").style.height = "30px";
				document.getElementById("dateTimeLeadInformation").style.textDecoration = "underline";
				document.getElementById("dateTimeLeadInformation").textContent = dateMsg;
			}
		}, 8200)
	}

function countryPBoxHelp() {
	document.getElementById("dateTimeLeadInformation").style.display = "block";
	document.getElementById("dateTimeLeadInformation").style.opacity = "1";
	document.getElementById("dateTimeLeadInformation").style.backgroundColor = "black";
		document.getElementById("dateTimeLeadInformation").style.color = "white";
		document.getElementById("dateTimeLeadInformation").style.fontSize = "12px";
		document.getElementById("dateTimeLeadInformation").style.textDecoration = "none";
		document.getElementById("dateTimeLeadInformation").style.height = "auto";
		document.getElementById("dateTimeLeadInformation").textContent = "Choose the country where this campaign will be aired."
		setTimeout(function (args) {
			if(document.getElementById("dateTimeLeadInformation").textContent == "Choose the country where this campaign will be aired.") {
				document.getElementById("dateTimeLeadInformation").style.display = "none";
				document.getElementById("dateTimeLeadInformation").style.opacity = "0";
				document.getElementById("dateTimeLeadInformation").style.backgroundColor = "white";
				document.getElementById("dateTimeLeadInformation").style.color = "black";
				document.getElementById("dateTimeLeadInformation").style.fontSize = "16px";
				document.getElementById("dateTimeLeadInformation").style.height = "30px";
				document.getElementById("dateTimeLeadInformation").style.textDecoration = "underline";
				document.getElementById("dateTimeLeadInformation").textContent = dateMsg;
			}
		}, 8200)
	}

function quantityPBoxHelp() {
	document.getElementById("dateTimeLeadInformation").style.display = "block";
	document.getElementById("dateTimeLeadInformation").style.opacity = "1";
	document.getElementById("dateTimeLeadInformation").style.backgroundColor = "black";
		document.getElementById("dateTimeLeadInformation").style.color = "white";
		document.getElementById("dateTimeLeadInformation").style.fontSize = "12px";
		document.getElementById("dateTimeLeadInformation").style.textDecoration = "none";
		document.getElementById("dateTimeLeadInformation").style.height = "auto";
		document.getElementById("dateTimeLeadInformation").textContent = "The quantity of this campaign you have for sale. Tick 'Unlimited' to bypass stock control."
		setTimeout(function (args) {
			if(document.getElementById("dateTimeLeadInformation").textContent == "The quantity of this campaign you have for sale. Tick 'Unlimited' to bypass stock control.") {
				document.getElementById("dateTimeLeadInformation").style.display = "none";
				document.getElementById("dateTimeLeadInformation").style.opacity = "0";
				document.getElementById("dateTimeLeadInformation").style.backgroundColor = "white";
				document.getElementById("dateTimeLeadInformation").style.color = "black";
				document.getElementById("dateTimeLeadInformation").style.fontSize = "16px";
				document.getElementById("dateTimeLeadInformation").style.height = "30px";
				document.getElementById("dateTimeLeadInformation").style.textDecoration = "underline";
				document.getElementById("dateTimeLeadInformation").textContent = dateMsg;
			}
		}, 8200)
	}

function imgPBoxHelp() {
	document.getElementById("dateTimeLeadInformation").style.display = "block";
	document.getElementById("dateTimeLeadInformation").style.opacity = "1";
	document.getElementById("dateTimeLeadInformation").style.backgroundColor = "black";
		document.getElementById("dateTimeLeadInformation").style.color = "white";
		document.getElementById("dateTimeLeadInformation").style.fontSize = "12px";
		document.getElementById("dateTimeLeadInformation").style.textDecoration = "none";
		document.getElementById("dateTimeLeadInformation").style.height = "auto";
		document.getElementById("dateTimeLeadInformation").textContent = "Upload an image for this campaign here, such as your publisher/business logo."
		setTimeout(function (args) {
			if(document.getElementById("dateTimeLeadInformation").textContent == "Upload an image for this campaign here, such as your publisher/business logo.") {
				document.getElementById("dateTimeLeadInformation").style.display = "none";
				document.getElementById("dateTimeLeadInformation").style.opacity = "0";
				document.getElementById("dateTimeLeadInformation").style.backgroundColor = "white";
				document.getElementById("dateTimeLeadInformation").style.color = "black";
				document.getElementById("dateTimeLeadInformation").style.fontSize = "16px";
				document.getElementById("dateTimeLeadInformation").style.height = "30px";
				document.getElementById("dateTimeLeadInformation").style.textDecoration = "underline";
				document.getElementById("dateTimeLeadInformation").textContent = dateMsg;
			}
		}, 8200)
	}

function tsaPBoxHelp() {
	document.getElementById("dateTimeLeadInformation").style.display = "block";
	document.getElementById("dateTimeLeadInformation").style.opacity = "1";
	document.getElementById("dateTimeLeadInformation").style.backgroundColor = "black";
		document.getElementById("dateTimeLeadInformation").style.color = "white";
		document.getElementById("dateTimeLeadInformation").style.fontSize = "12px";
		document.getElementById("dateTimeLeadInformation").style.textDecoration = "none";
		document.getElementById("dateTimeLeadInformation").style.height = "auto";
		document.getElementById("dateTimeLeadInformation").textContent = "The total survey area for this advert campaign."
		setTimeout(function (args) {
			if(document.getElementById("dateTimeLeadInformation").textContent == "The total survey area for this advert campaign.") {
				document.getElementById("dateTimeLeadInformation").style.display = "none";
				document.getElementById("dateTimeLeadInformation").style.opacity = "0";
				document.getElementById("dateTimeLeadInformation").style.backgroundColor = "white";
				document.getElementById("dateTimeLeadInformation").style.color = "black";
				document.getElementById("dateTimeLeadInformation").style.fontSize = "16px";
				document.getElementById("dateTimeLeadInformation").style.height = "30px";
				document.getElementById("dateTimeLeadInformation").style.textDecoration = "underline";
				document.getElementById("dateTimeLeadInformation").textContent = dateMsg;
			}
		}, 8200)
	}

function avghourPBoxHelp() {
	document.getElementById("dateTimeLeadInformation").style.display = "block";
	document.getElementById("dateTimeLeadInformation").style.opacity = "1";
	document.getElementById("dateTimeLeadInformation").style.backgroundColor = "black";
		document.getElementById("dateTimeLeadInformation").style.color = "white";
		document.getElementById("dateTimeLeadInformation").style.fontSize = "12px";
		document.getElementById("dateTimeLeadInformation").style.textDecoration = "none";
		document.getElementById("dateTimeLeadInformation").style.height = "auto";
		document.getElementById("dateTimeLeadInformation").textContent = "The average amount of time your viewers/listeners are tuning in per week, month, etc."
		setTimeout(function (args) {
			if(document.getElementById("dateTimeLeadInformation").textContent == "The average amount of time your viewers/listeners are tuning in per week, month, etc.") {
				document.getElementById("dateTimeLeadInformation").style.display = "none";
				document.getElementById("dateTimeLeadInformation").style.opacity = "0";
				document.getElementById("dateTimeLeadInformation").style.backgroundColor = "white";
				document.getElementById("dateTimeLeadInformation").style.color = "black";
				document.getElementById("dateTimeLeadInformation").style.fontSize = "16px";
				document.getElementById("dateTimeLeadInformation").style.height = "30px";
				document.getElementById("dateTimeLeadInformation").style.textDecoration = "underline";
				document.getElementById("dateTimeLeadInformation").textContent = dateMsg;
			}
		}, 8200)
	}

function abcPBoxHelp() {
	document.getElementById("dateTimeLeadInformation").style.display = "block";
	document.getElementById("dateTimeLeadInformation").style.opacity = "1";
	document.getElementById("dateTimeLeadInformation").style.backgroundColor = "black";
		document.getElementById("dateTimeLeadInformation").style.color = "white";
		document.getElementById("dateTimeLeadInformation").style.fontSize = "12px";
		document.getElementById("dateTimeLeadInformation").style.textDecoration = "none";
		document.getElementById("dateTimeLeadInformation").style.height = "auto";
		document.getElementById("dateTimeLeadInformation").textContent = "The social grading demographics of your viewers/listeners."
		setTimeout(function (args) {
			if(document.getElementById("dateTimeLeadInformation").textContent == "The social grading demographics of your viewers/listeners.") {
				document.getElementById("dateTimeLeadInformation").style.display = "none";
				document.getElementById("dateTimeLeadInformation").style.opacity = "0";
				document.getElementById("dateTimeLeadInformation").style.backgroundColor = "white";
				document.getElementById("dateTimeLeadInformation").style.color = "black";
				document.getElementById("dateTimeLeadInformation").style.fontSize = "16px";
				document.getElementById("dateTimeLeadInformation").style.height = "30px";
				document.getElementById("dateTimeLeadInformation").style.textDecoration = "underline";
				document.getElementById("dateTimeLeadInformation").textContent = dateMsg;
			}
		}, 8200)
	}

function genratPBoxHelp() {
	document.getElementById("dateTimeLeadInformation").style.display = "block";
	document.getElementById("dateTimeLeadInformation").style.opacity = "1";
	document.getElementById("dateTimeLeadInformation").style.backgroundColor = "black";
		document.getElementById("dateTimeLeadInformation").style.color = "white";
		document.getElementById("dateTimeLeadInformation").style.fontSize = "12px";
		document.getElementById("dateTimeLeadInformation").style.textDecoration = "none";
		document.getElementById("dateTimeLeadInformation").style.height = "auto";
		document.getElementById("dateTimeLeadInformation").textContent = "The gender ratio of the audience for this campaign."
		setTimeout(function (args) {
			if(document.getElementById("dateTimeLeadInformation").textContent == "The gender ratio of the audience for this campaign.") {
				document.getElementById("dateTimeLeadInformation").style.display = "none";
				document.getElementById("dateTimeLeadInformation").style.opacity = "0";
				document.getElementById("dateTimeLeadInformation").style.backgroundColor = "white";
				document.getElementById("dateTimeLeadInformation").style.color = "black";
				document.getElementById("dateTimeLeadInformation").style.fontSize = "16px";
				document.getElementById("dateTimeLeadInformation").style.height = "30px";
				document.getElementById("dateTimeLeadInformation").style.textDecoration = "underline";
				document.getElementById("dateTimeLeadInformation").textContent = dateMsg;
			}
		}, 8200)
	}

function demogPBoxHelp() {
	document.getElementById("dateTimeLeadInformation").style.display = "block";
	document.getElementById("dateTimeLeadInformation").style.opacity = "1";
	document.getElementById("dateTimeLeadInformation").style.backgroundColor = "black";
		document.getElementById("dateTimeLeadInformation").style.color = "white";
		document.getElementById("dateTimeLeadInformation").style.fontSize = "12px";
		document.getElementById("dateTimeLeadInformation").style.textDecoration = "none";
		document.getElementById("dateTimeLeadInformation").style.height = "auto";
		document.getElementById("dateTimeLeadInformation").textContent = "The age demographic data for this campaign."
		setTimeout(function (args) {
			if(document.getElementById("dateTimeLeadInformation").textContent == "The age demographic data for this campaign.") {
				document.getElementById("dateTimeLeadInformation").style.display = "none";
				document.getElementById("dateTimeLeadInformation").style.opacity = "0";
				document.getElementById("dateTimeLeadInformation").style.backgroundColor = "white";
				document.getElementById("dateTimeLeadInformation").style.color = "black";
				document.getElementById("dateTimeLeadInformation").style.fontSize = "16px";
				document.getElementById("dateTimeLeadInformation").style.height = "30px";
				document.getElementById("dateTimeLeadInformation").style.textDecoration = "underline";
				document.getElementById("dateTimeLeadInformation").textContent = dateMsg;
			}
		}, 8200)
	}

function sourcePBoxHelp() {
	document.getElementById("dateTimeLeadInformation").style.display = "block";
	document.getElementById("dateTimeLeadInformation").style.opacity = "1";
	document.getElementById("dateTimeLeadInformation").style.backgroundColor = "black";
		document.getElementById("dateTimeLeadInformation").style.color = "white";
		document.getElementById("dateTimeLeadInformation").style.fontSize = "12px";
		document.getElementById("dateTimeLeadInformation").style.textDecoration = "none";
		document.getElementById("dateTimeLeadInformation").style.height = "auto";
		document.getElementById("dateTimeLeadInformation").textContent = "A source by which to corroborate the details you have given about this campaigns."
		setTimeout(function (args) {
			if(document.getElementById("dateTimeLeadInformation").textContent == "A source by which to corroborate the details you have given about this campaigns.") {
				document.getElementById("dateTimeLeadInformation").style.display = "none";
				document.getElementById("dateTimeLeadInformation").style.opacity = "0";
				document.getElementById("dateTimeLeadInformation").style.backgroundColor = "white";
				document.getElementById("dateTimeLeadInformation").style.color = "black";
				document.getElementById("dateTimeLeadInformation").style.fontSize = "16px";
				document.getElementById("dateTimeLeadInformation").style.height = "30px";
				document.getElementById("dateTimeLeadInformation").style.textDecoration = "underline";
				document.getElementById("dateTimeLeadInformation").textContent = dateMsg;
			}
		}, 8200)
	}

function pubHelpButtonPop1() {
		cHshareId = "";
		var currentUser = Parse.User.current();
    	cHcurrentUserId = currentUser.id;
		cHorderProgress = "";
		document.getElementById("pubHelpMessageBackDrop").style.display = "block";
		document.getElementById("pubHelpMessageBox").style.display = "block";
}