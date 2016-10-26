var stripeUserCode;

if (window.top.location.href.indexOf("?scope=read_write&code=") != -1) {
    var curHeadLoc = window.top.location;
    try {
        var toStrip1 = curHeadLoc.search;
        var toStrip2 = toStrip1.replace('?scope=read_write&code=', '');
        stripeUserCode = toStrip2;
        setTimeout(function (args) {
   		 document.getElementById("processingNewMerchant").style.display = "block"
            if (!!stripeUserCode) {
                window.location = '#newMerchant:' + stripeUserCode;
                curHeadLoc.search = "";
                navigating = true
            }
        }, 500)
    } catch (e) { }
}

if (window.top.location.href.indexOf("#newMerchant:") != -1) {
    var curHeadLoc = window.top.location.hash;
    try {
        var toStrip2 = curHeadLoc.replace('#newMerchant:', '');
        stripeUserCode = toStrip2;
        setTimeout(function (args) {
		 document.getElementById("processingNewMerchant").innerText = "Processing New Publisher..."
   		 document.getElementById("processingNewMerchant").style.display = "block"
            if (!!stripeUserCode) {
                window.location = '#newMerchant';
                navigating = true;
				doNotLogin = false;
                loginMP()
                //pop hello to new merchant			
                //document.getElementById("login").innerText = "Re-login to complete the update:";
                //document.getElementById("login").textContent = "Re-login to complete the update:";
            }
        }, 500)
    } catch (e) { }
}

var interval0 = setInterval(checkForStripeData, 2500);
function checkForStripeData() {
    try { var currentUser = Parse.User.current(); } catch (e) { }
    if (!currentUser) { } else {
        if (!stripeUserCode) { } else {
            clearInterval(interval0);
            var currentUserId = currentUser.id;
            Parse.Cloud.run('updateUserWithConnectDetails', { code: stripeUserCode, userId: currentUserId }, {
                success: function (ratings) {
                    addedNewMerch()
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
                        var error1 = "Line 63 - Stripe - Time: " + ts;
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
}

function addedNewMerch() {
    document.getElementById("processingNewMerchant").style.display = "block"
		document.getElementById("processingNewMerchant").innerText = "Saving New Publisher..."
    setTimeout(function (args) {
        openPublisherPage();
        window.location = '#Publisher';
        navigating = true;
		document.getElementById("processingNewMerchant").innerText = "Complete!"
        setTimeout(function (args) { 
		document.getElementById("processingNewMerchant").style.display = "none";
		document.getElementById("processingNewMerchant").innerText = "Processing New Publisher..."
		 }, 1000)
    }, 3500)
}