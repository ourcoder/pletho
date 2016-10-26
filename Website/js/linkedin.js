
var userEmail;
var userFirstName;
var userLastName;
var userID;
var area;
var headline;
var industry;
var connections;
var positions;
var phoneNumbers;

function onLinkedInLoad() {
    try { var currentUser = Parse.User.current(); } catch (e) { var currentUserId = "none" }
    try { var currentUserId = currentUser.id; } catch (e) { var currentUserId = "none" }
    if (currentUserId == "none") {
        area = "user"
        IN.UI.Authorize().params({ "scope": ["r_emailaddress", "r_basicprofile"] }).place();
    } else {
        mainPageLoader2()
        area = "publish"
        IN.UI.Authorize().params({ "scope": ["r_contactinfo", "r_fullprofile"] }).place();
    }
    IN.Event.on(IN, "auth", loadFields);
}

function loadFields() {
    if (area == "user") {
        IN.API.Profile("me")
        .fields(["id", "firstName", "lastName", "emailAddress"])
        .result(function (me) {
            profile = me.values[0];
            userEmail = profile.emailAddress;
            userFirstName = profile.firstName;
            userLastName = profile.lastName;
            userID = profile.id;
            postLinkedInDetails(userEmail, userFirstName, userLastName, userID)
        })
        .error(function (error) {
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
        })
    } else if (area == "publish") {
        IN.API.Profile("me")
        .fields(["positions,phone-numbers,num-connections,industry,headline"])
        .result(function (me) {
            profile = me.values[0];
            try { headline = profile.headline; } catch (e) { }
            try { industry = profile.industry; } catch (e) { }
            try { connections = profile.numConnections; } catch (e) { }
            try { positions = profile.positions.values; } catch (e) { }
            try { phoneNumbers = profile.phoneNumbers.values; } catch (e) { }
            document.getElementById("loadingGraphic2").src = "/images/loader/30p.jpg";
            beginApprovalProcess()
        })
        .error(function (error) {
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
        })
    }
}