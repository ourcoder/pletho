var resultFromStripe;
var forPrinting1;
var reOrderVal;
var stripeOpenChecker;
var sBcHolder = "";
var paymentCompleted1;

//red button
function campaignButton1() {
    var campaign = catcher;
    if (document.getElementById("campaignButton1").style.opacity == "0.25") { } else {
        //pendingDeny-orderId-status-cost-message
        //pendingHide-orderId-status-cost

        if (campaign == "purchasedPendingCampaign") {
            //throw dialog for message
            document.getElementById("campaignsPage2Div").style.display = "block"
            document.getElementById("reasonMessageBox").style.display = "block"
			document.getElementById("messageDenyBox").setAttribute('placeholder', 'Enter a reason for removing this order here...');

        } else

            if (campaign == "soldPendingCampaign") {
                //throw dialog for message
                document.getElementById("campaignsPage2Div").style.display = "block"
                document.getElementById("reasonMessageBox").style.display = "block"
				document.getElementById("messageDenyBox").setAttribute('placeholder', 'Enter a reason for removing this order here...');

            } else if (campaign == "deniedPendingCampaign") {
                    mainPageLoader2()
                    //just run cc and reload list oncomplete
                    /////
                    //document.getElementById("loggingin").style.backgroundColor = "rgba(0,0,0,.7)";
                    //document.getElementById("loggingin").innerHTML = "<br\>Loading...";
                    //document.getElementById("loggingin").style.display = "block";
                    /////
                    Parse.Cloud.run('pendingHide', { orderId: campId, status: campStatus, cost: campCost }, {
                        success: function (ratings) {
						setTimeout(function (args) {
                            var nav = "pending";
                            openCampaignsPage1(nav);
                            returnToCampaignsView();
							alertRemover(campId);
                            setTimeout(function (args) {
                                document.getElementById("loadingGraphic2").src = "/images/loader/85p.jpg";
                                document.getElementById("mainPageLoader2").style.opacity = "0";
                                setTimeout(function (args) {
                                    document.getElementById("mainPageLoader2").style.display = "none"
                                    document.getElementById("loadingGraphic2").src = "/images/loader/18p.jpg";
                                }, 500)
                            }, 100)
						}, 5500)
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
                                var error1 = "Line 66 - CampaignsPage2 - Time: " + ts;
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
                } else if (campaign == "purchasedQueuedCampaign") {
                        //throw confirm (are you sure; yes/no) dialog
                        document.getElementById("campaignsPage2Div").style.display = "block"
                        document.getElementById("reasonMessageBox").style.display = "block"
						document.getElementById("messageDenyBox").setAttribute('placeholder', 'Enter a reason for removing this order here...');
                    } else if (campaign == "purchasedLiveCampaign") {
                            //throw confirm (are you sure; yes/no) dialog	
                            document.getElementById("messageDenyBox").setAttribute('placeholder', 'Please enter a reason for disputing this order along with your preferred resolution. Eg. A refund or a re-attempted advert delivery.');
                            document.getElementById("campaignsPage2Div").style.display = "block"
                            document.getElementById("reasonMessageBox").style.display = "block"
                        } else if (campaign == "soldLiveCampaign") {
                                //throw confirm (are you sure; yes/no) dialog	
                                document.getElementById("messageDenyBox").setAttribute('placeholder', 'Please enter a reason for disputing this order along with your preferred resolution. Eg. A refund or a re-attempted advert delivery.');
                                document.getElementById("campaignsPage2Div").style.display = "block"
                                document.getElementById("reasonMessageBox").style.display = "block"

                            } else if (campaign == "purchasedDisputedCampaign") {
                                    //throw confirm (are you sure; yes/no/msg) dialog
                                    document.getElementById("messageDenyBox").setAttribute('placeholder', 'Are you happy with the solution provided by the Publisher?');
                                    document.getElementById("campaignsPage2Div").style.display = "block"
                                    document.getElementById("reasonMessageBox").style.display = "block"
                                } else {
                                    //do re-order advertiserpage2
                                    reOrder()
                                }
    }
}

//green button
function campaignButton2() {
    var campaign = catcher;
    if (document.getElementById("campaignButton2").style.opacity == "0.25") { } else {
        //pendingApprove-orderId-status-cost-actualDate-actualTime
        //incomingFunctions-orderId-status-cost-token
        //outgoingFunctions-orderId-status-cost
        if (campaign == "soldPendingCampaign") {
            //throw confirm (are you sure; yes/no) dialog			
            document.getElementById("campaignsPage2Div").style.display = "block"
            document.getElementById("approvalMessageBox").style.display = "block"
        } else if (campaign == "purchasedQueuedCampaign") {
            //throw payment dialog			
            document.getElementById("mainPageLoader2").style.display = "block"
            document.getElementById("mainPageLoader2").style.opacity = "1";
            document.getElementById("loadingGraphic2").src = "/images/loader/18p.jpg";
            document.getElementById("plethoFooter").style.textAlign = "right";

            ////////////
            Parse.Cloud.run('mismatchManualCheck', { id: campId }, {
                success: function (result) {
                    if (result.indexOf("Updated") != -1) {
                        setTimeout(function (args) {
                             var nav = "live";
                             openCampaignsPage1(nav);
                             returnToCampaignsView();
							 alertRemover(campId);
                        }, 1550)
                    } else {
                        setTimeout(function (args) { document.getElementById("loadingGraphic2").src = "/images/loader/30p.jpg"; }, 750)
                        setTimeout(function (args) {
                            stripeOpenChecker = setInterval(stripeOpenCheck, 1000);
                        }, 2750)
                        var currentUser = Parse.User.current();
                        var currentUserEmail = currentUser.attributes.email;
                        if (currency.length > 3) {
                            currency = currency.substring(0, currency.length - 4);
                        }
                        var handler = StripeCheckout.configure({
                            key: stripePublishableKey,
                            image: 'images/tinyLogo2.png',
                            currency: currency,
                            email: currentUserEmail,
                            token: function (token) {
                                // Use the token to create the charge with a server-side script.
                                // You can access the token ID with `token.id`
                                var pId = token.id;
                                Parse.Cloud.run('incomingFunctions',
                                                { orderId: campId, status: campStatus, cost: campCost, token: pId }, {
                                                    success: function (ratings) {
														paymentCompleted1 = true;
                                                        setTimeout(function (args) {			
															document.getElementById("mainPageLoader2").style.display = "block"
															document.getElementById("mainPageLoader2").style.opacity = "1";
                                                            document.getElementById("loadingGraphic2").src = "/images/loader/52p.jpg";
                                                            setTimeout(function (args) {
                                                                document.getElementById("loadingGraphic2").src = "/images/loader/75p.jpg";
                                                                var nav = "live";
                                                                openCampaignsPage1(nav);
                                                                returnToCampaignsView();
																alertRemover(campId);
                                                            }, 550)
                                                            setTimeout(function (args) {
                                                                //document.getElementById("loggingin").style.display = "none";
                                                                document.getElementById("loadingGraphic2").src = "/images/loader/85p.jpg";
                                                                document.getElementById("mainPageLoader2").style.opacity = "0";
                                                                setTimeout(function (args) {
                                                                    document.getElementById("mainPageLoader2").style.display = "none"
                                                                    document.getElementById("loadingGraphic2").src = "/images/loader/18p.jpg";
																	paymentCompleted1 = false;
                                                                }, 1500)
                                                                document.getElementById("plethoFooter").style.textAlign = "center";
                                                            }, 2200)
                                                        }, 5500)
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
                                                            document.getElementById("plethoFooter").style.textAlign = "center";
                                                            document.getElementById("serverMsgBackdrop").style.opacity = "0";
                                                            document.getElementById("serverMsgBox").style.opacity = "0";
                                                            //bugreport	
                                                            var ts = new Date().getTime();
                                                            try { var currentUser = Parse.User.current(); } catch (e) { var user = "offline" }
                                                            try { var user = currentUser.attributes.username; } catch (e) { var user = "offline" }
                                                            var error1 = "Line 196 - CampaignsPage2 - Time: " + ts;
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
                        });

                        // Open Checkout with further options
                        handler.open({
                            name: 'Pletho',
                            description: 'Ad Campaign',
                            amount: campCost
                        });
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
                        document.getElementById("plethoFooter").style.textAlign = "center";
                        document.getElementById("serverMsgBackdrop").style.opacity = "0";
                        document.getElementById("serverMsgBox").style.opacity = "0";
                        //bugreport	
                        var ts = new Date().getTime();
                        try { var currentUser = Parse.User.current(); } catch (e) { var user = "offline" }
                        try { var user = currentUser.attributes.username; } catch (e) { var user = "offline" }
                        var error1 = "Line 196 - CampaignsPage2 - Time: " + ts;
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
            })
            ////////////

        } else

            if (campaign == "purchasedLiveCampaign") {
                mainPageLoader2()
                //throw confirm (are you sure; yes/no) dialog
                /////
                //document.getElementById("loggingin").style.backgroundColor = "rgba(0,0,0,.7)";
                //document.getElementById("loggingin").innerHTML = "<br\>Loading...";
                //document.getElementById("loggingin").style.display = "block";
                /////
                Parse.Cloud.run('outgoingFunctions', { orderId: campId, status: campStatus, cost: campCost }, {
                    success: function (ratings) {
                        setTimeout(function (args) {
                            var nav = "complete";
                            openCampaignsPage1(nav);
                            returnToCampaignsView();
							alertRemover(campId);
                            setTimeout(function (args) {
                                document.getElementById("loadingGraphic2").src = "/images/loader/85p.jpg";
                                document.getElementById("mainPageLoader2").style.opacity = "0";
                                setTimeout(function (args) {
                                    document.getElementById("mainPageLoader2").style.display = "none"
                                    document.getElementById("loadingGraphic2").src = "/images/loader/18p.jpg";
                                }, 500)
                            }, 100)
                        }, 5500)
                    },
                    error: function (error) {
                        document.getElementById("mainPageLoader2").style.opacity = "0";
                        document.getElementById("mainPageLoader2").style.display = "none"
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
                            var error1 = "Line 262 - CampaignsPage2 - Time: " + ts;
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


            } else
                if (campaign == "soldDisputedCampaign") {
                    //throw confirm (are you sure; yes/no) dialog			
                    document.getElementById("disputeCommentsBack").style.display = "block"
                    document.getElementById("disputeCommentsUnder").style.display = "block"
                    document.getElementById("disputeComments").style.display = "block"
                    document.getElementById("disputeMessageInput").style.display = "block"
                    loadDisputeCommentsNow(campId, campaign)
					alertRemover(campId);

                } else if (campaign == "purchasedDisputedCampaign") {
                    //throw confirm (are you sure; yes/no) dialog		
                    document.getElementById("disputeCommentsBack").style.display = "block"
                    document.getElementById("disputeCommentsUnder").style.display = "block"
                    document.getElementById("disputeComments").style.display = "block"
                    document.getElementById("disputeMessageInput").style.display = "block"
                    loadDisputeCommentsNow(campId, campaign)
					alertRemover(campId);

                } else {
                    //throw details 
                    var orderId = campId;
                    var orders = Parse.Object.extend("Orders");
                    var orderFinder = new Parse.Query(orders);
                    orderFinder.equalTo("objectId", orderId)
                    orderFinder.find({
                        success: function (results) {
                            var actualDate = results[0].attributes.actualDate;
                            var actualTime = results[0].attributes.actualTime;
                            var adDescription = results[0].attributes.adDescription;
                            var adPublisher = results[0].attributes.adPublisher;
                            var adType = results[0].attributes.adType;
                            var advert = results[0].attributes.advert;
                            var currency = results[0].attributes.currency;
                            var flexibility = results[0].attributes.flexibility;
                            var preferredDate = results[0].attributes.preferredDate;
                            var preferredTime = results[0].attributes.preferredTime;
                            var str = results[0].attributes.price.toString();
                            var strlength = str.length;
                            var prcA = str.substr(0, strlength - 2);
                            var prcB = str.substr(strlength - 2, 2);
                            if (currency != "eur") {
                                var prc = prcA + "." + prcB;
                            } else {
                                var prc = prcA + "," + prcB;
                            }
                            var status = results[0].attributes.status;
                            var createdAt = results[0].createdAt;
                            var completedAt = results[0].updatedAt;
                            var transactionId = results[0].attributes.stripeOid;
                            forPrinting1 = '<div class="cOD1"><b>Advert Type:</b> ' + adType + '</div> <div class="cOD2"><b>Status:</b> ' + status + '</div> <div class="cOD3"><b>Transaction:</b> ' + transactionId + '</div> <div class="cOD4"><b>Completed at:</b> ' + completedAt + '</div> <div class="cOD5"><b>Price:</b> ' + currency.toUpperCase() + ' ' + prc + '</div> <div class="cOD6"><b>Advert:</b> ' + advert + '</div> <div class="cOD7"><b>Published:</b> ' + actualTime + ' - ' + actualDate + '</div> <div class="cOD8"><b>Published By:</b> ' + adPublisher + '</div> <div class="cOD9"><b>Description:</b> ' + adDescription + '</div> <div class="cOD10"><b>Created:</b> ' + createdAt + '</div> <div class="cOD11"><b>For:</b> ' + preferredTime + ' - ' + preferredDate + '</div>'
                            document.getElementById("completedOrderDetails").innerHTML = '<div class="cOD12" onclick="printThis()"><b>Tap to print</b></div> <div class="cOD13" onclick="returnToCampaignsView()"><b>Tap to close</b></div>' + forPrinting1
                            document.getElementById("campaignsPage2Div").style.display = "block"
                            document.getElementById("completedOrderDetails").style.display = "block"
                        }
                    })
                }
    }
}

function printThis() {
    var newWindow = window.open('', 'Printing...', 'height=400,width=600');
    newWindow.document.write('<html><head><title>Pletho is printing...</title><style>.cOD1,.cOD2{text-transform:capitalize;}div{padding:4px;width:100%;text-align:center;font-size:16px;}</style>');
    newWindow.document.write('</head><body >');
    newWindow.document.write(forPrinting1);
    newWindow.document.write('</body></html>');
    newWindow.document.close();
    newWindow.focus();
    newWindow.print();
    newWindow.close();
    return true;
}

function reOrder() {
    mainPageLoader2()
    /////
    //document.getElementById("loggingin").style.backgroundColor = "rgba(0,0,0,.7)";
    //document.getElementById("loggingin").innerHTML = "<br\>Loading...";
    //document.getElementById("loggingin").style.display = "block";
    /////
    var orderId = campId;
    var orderCheck = Parse.Object.extend("Orders");
    var orderProduct = new Parse.Query(orderCheck);
    orderProduct.equalTo("objectId", orderId)
    orderProduct.find({
        success: function (results) {
            reOrderVal = results[0].attributes.productId;
            if (!reOrderVal) { } else {
                advertiserPage1Load()
                searchTaggedListings()
    			window.location = '#Advertiser:Search-Tags';
				navigating = true;
            }
        }
    })
}

function returnToCampaignsView() {
    document.getElementById("campaignsPage2Div").style.display = "none"
    document.getElementById("reasonMessageBox").style.display = "none"
    document.getElementById("approvalMessageBox").style.display = "none"
    document.getElementById("completedOrderDetails").style.display = "none"
}

function submitOrderRemovalWithReason() {
    var campaign = catcher;
    if (campaign == "purchasedPendingCampaign") {
        var message = document.getElementById("messageDenyBox").value;
        if (!message || message == "This box cannot be empty.") {
            document.getElementById("messageDenyBox").value = "This box cannot be empty.";
            document.getElementById("messageDenyBox").style.border = "1px dashed red";
        } else {
            mainPageLoader2()
            /////
            //document.getElementById("loggingin").style.backgroundColor = "rgba(0,0,0,.7)";
            //document.getElementById("loggingin").innerHTML = "<br\>Loading...";
            //document.getElementById("loggingin").style.display = "block";
            /////
            Parse.Cloud.run('pendingHide', { orderId: campId, status: campStatus, cost: campCost, message: message }, {
                success: function (ratings) {
                setTimeout(function (args) {
                    var nav = "pending";
                    openCampaignsPage1(nav);
                    returnToCampaignsView();
					alertRemover(campId);
                    setTimeout(function (args) {
                        document.getElementById("loadingGraphic2").src = "/images/loader/85p.jpg";
                        document.getElementById("mainPageLoader2").style.opacity = "0";
                        setTimeout(function (args) {
                            document.getElementById("mainPageLoader2").style.display = "none"
                            document.getElementById("loadingGraphic2").src = "/images/loader/18p.jpg";
                            document.getElementById("messageDenyBox").value = "";
							document.getElementById("messageDenyBox").textContent = "";
							try{
								 setTimeout(function (args) {document.getElementById("messageDenyBox").focus();}, 200)
								 setTimeout(function (args) {document.getElementById("messageDenyBox").blur();}, 600)
							}catch(e) {}
                        }, 500)
                    }, 100)
				}, 5500)
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
                        var error1 = "Line 430 - CampaignsPage2 - Time: " + ts;
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
    } else if (campaign == "soldPendingCampaign") {
        /////
        //document.getElementById("loggingin").style.backgroundColor = "rgba(0,0,0,.7)";
        //document.getElementById("loggingin").innerHTML = "<br\>Loading...";
        //document.getElementById("loggingin").style.display = "block";
        /////
        var message = document.getElementById("messageDenyBox").value;
        if (!message || message == "This box cannot be empty.") {
            document.getElementById("messageDenyBox").value = "This box cannot be empty.";
            document.getElementById("messageDenyBox").style.border = "1px dashed red";
        } else {
            mainPageLoader2()
            Parse.Cloud.run('pendingDeny', { orderId: campId, status: campStatus, cost: campCost, message: message }, {
                success: function (ratings) {
				setTimeout(function (args) {
                    var nav = "pending";
                    openCampaignsPage1(nav);
                    returnToCampaignsView();
					alertRemover(campId);
                    setTimeout(function (args) {
                        document.getElementById("loadingGraphic2").src = "/images/loader/85p.jpg";
                        document.getElementById("mainPageLoader2").style.opacity = "0";
                        setTimeout(function (args) {
                            document.getElementById("mainPageLoader2").style.display = "none"
                            document.getElementById("loadingGraphic2").src = "/images/loader/18p.jpg";
                        }, 500)
                    }, 100)
                }, 5500)
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
                        var error1 = "Line 488 - CampaignsPage2 - Time: " + ts;
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
    } else if (campaign == "purchasedQueuedCampaign") {
        /////
        //document.getElementById("loggingin").style.backgroundColor = "rgba(0,0,0,.7)";
        //document.getElementById("loggingin").innerHTML = "<br\>Loading...";
        //document.getElementById("loggingin").style.display = "block";
        /////
        var message = document.getElementById("messageDenyBox").value;
        if (!message || message == "This box cannot be empty.") {
            document.getElementById("messageDenyBox").value = "This box cannot be empty.";
            document.getElementById("messageDenyBox").style.border = "1px dashed red";
        } else {
            mainPageLoader2()
            Parse.Cloud.run('pendingHide', { orderId: campId, status: campStatus, cost: campCost, message: message }, {
                success: function (ratings) {
				setTimeout(function (args) {
                    var nav = "queued";
                    openCampaignsPage1(nav);
                    returnToCampaignsView();
					alertRemover(campId);
                    setTimeout(function (args) {
                        document.getElementById("loadingGraphic2").src = "/images/loader/85p.jpg";
                        document.getElementById("mainPageLoader2").style.opacity = "0";
                        setTimeout(function (args) {
                            document.getElementById("mainPageLoader2").style.display = "none"
                            document.getElementById("loadingGraphic2").src = "/images/loader/18p.jpg";
                            document.getElementById("messageDenyBox").value = "";
							document.getElementById("messageDenyBox").textContent = "";
							try{
								 setTimeout(function (args) {document.getElementById("messageDenyBox").focus();}, 200)
								 setTimeout(function (args) {document.getElementById("messageDenyBox").blur();}, 600)
							}catch(e) {}
                        }, 500)
                    }, 100)
				}, 5500)
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
                        var error1 = "Line 547 - CampaignsPage2 - Time: " + ts;
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
    } else if (campaign == "purchasedLiveCampaign" || campaign == "soldLiveCampaign") {
        var message = document.getElementById("messageDenyBox").value;
        if (!message || message == "This box cannot be empty.") {
            document.getElementById("messageDenyBox").value = "This box cannot be empty.";
            document.getElementById("messageDenyBox").style.border = "1px dashed red";
        } else {
            mainPageLoader2()
            /////
            //document.getElementById("loggingin").style.backgroundColor = "rgba(0,0,0,.7)";
            //document.getElementById("loggingin").innerHTML = "<br\>Loading...";
            //document.getElementById("loggingin").style.display = "block";
            /////
            Parse.Cloud.run('orderDisputedFunc', { orderId: campId, status: campStatus, cost: campCost, message: message }, {
                success: function (ratings) {
                    var disComment = message;
                    var currentUser = Parse.User.current();
                    var postName = currentUser.attributes.firstName;
                    var postACL = new Parse.ACL(Parse.User.current());
                    postACL.setPublicReadAccess(false);
                    postACL.setRoleReadAccess("Admins", true);
                    postACL.setRoleWriteAccess("Admins", true);
                    postACL.setRoleReadAccess(campId, true);
                    var disputePost = Parse.Object.extend("Disputes");
                    var disputeLog = new disputePost();
                    disputeLog.set("userName", postName);
                    if (campaign == "purchasedLiveCampaign") {
                        disputeLog.set("userType", "advertiser");
                    } else {
                        disputeLog.set("userType", "publisher");
                    }
                    disputeLog.set("comment", disComment);
                    disputeLog.set("orderId", campId);
                    disputeLog.setACL(postACL);
                    disputeLog.save(null, {
                        success: function (disputeLog) {
                            var nav = "dispute";
                            openCampaignsPage1(nav);
                            returnToCampaignsView();
							alertRemover(campId);
                            setTimeout(function (args) {
                                document.getElementById("loadingGraphic2").src = "/images/loader/85p.jpg";
                                setTimeout(function (args) {
                                    document.getElementById("mainPageLoader2").style.opacity = "0";
                                    setTimeout(function (args) {
                                        document.getElementById("mainPageLoader2").style.display = "none"
                                        document.getElementById("loadingGraphic2").src = "/images/loader/18p.jpg";
                                        document.getElementById("messageDenyBox").value = "";
										document.getElementById("messageDenyBox").textContent = "";
										try{
								 		setTimeout(function (args) {document.getElementById("messageDenyBox").focus();}, 200)
								 		setTimeout(function (args) {document.getElementById("messageDenyBox").blur();}, 600)
										}catch(e) {}
                                    }, 500)
                                }, 850)
                            }, 5500)
                        },
                        error: function (disputeLog, error) {
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
                                var error1 = "Line 626 - CampaignsPage2 - Time: " + ts;
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
                    })
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
                        var error1 = "Line 658 - CampaignsPage2 - Time: " + ts;
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
    } else if (campaign == "purchasedDisputedCampaign") {
        mainPageLoader2()
        /////
        //document.getElementById("loggingin").style.backgroundColor = "rgba(0,0,0,.7)";
        //document.getElementById("loggingin").innerHTML = "<br\>Loading...";
        //document.getElementById("loggingin").style.display = "block";
        /////
        var message = document.getElementById("messageDenyBox").value;
        Parse.Cloud.run('outgoingFunctions', { orderId: campId, status: campStatus, cost: campCost }, {
            success: function (ratings) {
			setTimeout(function (args) {
                var nav = "complete";
                openCampaignsPage1(nav);
                returnToCampaignsView();
				alertRemover(campId);
                setTimeout(function (args) {
                    document.getElementById("loadingGraphic2").src = "/images/loader/85p.jpg";
                    document.getElementById("mainPageLoader2").style.opacity = "0";
                    setTimeout(function (args) {
                        document.getElementById("mainPageLoader2").style.display = "none"
                        document.getElementById("loadingGraphic2").src = "/images/loader/18p.jpg";
                    }, 500)
                }, 100)
            }, 5500)
            },
            error: function (error) {
                document.getElementById("mainPageLoader2").style.opacity = "0";
                document.getElementById("mainPageLoader2").style.display = "none"
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
                    var error1 = "Line 712 - CampaignsPage2 - Time: " + ts;
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

function submitOrderApproval() {
    /////
    //document.getElementById("loggingin").style.backgroundColor = "rgba(0,0,0,.7)";
    //document.getElementById("loggingin").innerHTML = "<br\>Loading...";
    //document.getElementById("loggingin").style.display = "block";
    /////
    var actualDate = document.getElementById("chosenActualDate").value;
    var actualTime = document.getElementById("chosenActualTime").value;
    if (!actualTime) { actualTime = "TBD" }
    if (!actualDate) { document.getElementById("chosenActualDate").style.border = "1px dashed red" } else {
        mainPageLoader2()
        Parse.Cloud.run('pendingApprove', { orderId: campId, status: campStatus, cost: campCost, actualDate: actualDate, actualTime: actualTime }, {
            success: function (ratings) {
			setTimeout(function (args) {
                var nav = "queued";
                openCampaignsPage1(nav);
                returnToCampaignsView();
				alertRemover(campId);
                setTimeout(function (args) {
                    document.getElementById("loadingGraphic2").src = "/images/loader/85p.jpg";
                    document.getElementById("mainPageLoader2").style.opacity = "0";
                    setTimeout(function (args) {
                        document.getElementById("mainPageLoader2").style.display = "none"
                        document.getElementById("loadingGraphic2").src = "/images/loader/18p.jpg";	
						document.getElementById("chosenActualDate").value = "";	
						document.getElementById("chosenActualTime").value = "";
                    }, 500)
                }, 100)
            }, 5500)
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
                    var error1 = "Line 772 - CampaignsPage2 - Time: " + ts;
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

function stripeOpenCheck() {
	var sBcCounter = 0;
	sBcHolder = "";
	try {
    var stripeBoxCount = document.getElementsByClassName("stripe_checkout_app");
    var sBc = stripeBoxCount[0].style.display;
	for (var i = 0; i < stripeBoxCount.length; i++) {
		sBcCounter += 1
		sBcHolder = sBcHolder + stripeBoxCount[i].style.display;
		var blockCheck = sBcHolder.indexOf("block");
		if(sBcCounter == stripeBoxCount.length && blockCheck == -1)
			{
			sBcHolder = "";
			setTimeout(function (args) {
			if(paymentCompleted1 != true) {
				setTimeout(function (args) {
					document.getElementById("loadingGraphic2").src = "/images/loader/85p.jpg";
					document.getElementById("mainPageLoader2").style.opacity = "0";
					setTimeout(function (args) {
						document.getElementById("mainPageLoader2").style.display = "none"
						document.getElementById("loadingGraphic2").src = "/images/loader/18p.jpg";
						clearInterval(stripeOpenChecker);
					}, 300)
					document.getElementById("plethoFooter").style.textAlign = "center";
				}, 300)
			} else {
				clearInterval(stripeOpenChecker);
			}}, 1600)
        } else {			
            document.getElementById("mainPageLoader2").style.display = "block"
            document.getElementById("mainPageLoader2").style.opacity = "1";
            document.getElementById("loadingGraphic2").src = "/images/loader/18p.jpg";
            document.getElementById("plethoFooter").style.textAlign = "right";
		}
	  }
    } catch (e) { }
}

function alertRemover(campId) {
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
				if(alertList.indexOf(alertedOrder) != -1 || alertedOrder == campId) {
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


	