var disputeRole;
var disputeName;
var disputeType;
var disputeComment;
var campType;
var disComTotal;
var liveChatter;
var liveChatterOID;
var liveChatterBox;

//var historyInterval = setInterval(historyPopper, 1000);

function liveChat() {
    var commentsOpen = document.getElementById("disputeComments").style.display;
    if (!!disComTotal && commentsOpen == "block") {
        var currentUser = Parse.User.current();
        disputeRole = liveChatterOID;
        disputeName = currentUser.attributes.firstName;
        disputeType = "advertiser";
        var allDisputePosts = Parse.Object.extend("Disputes");
        var disputePosts = new Parse.Query(allDisputePosts);
        var count = 0;
        disputePosts.equalTo("orderId", liveChatterOID)
        disputePosts.ascending("createdAt");
        disputePosts.find().then(function (results) {
            if (results.length > disComTotal) {
                document.getElementById("disputeComments").innerHTML = ""
                for (var i = 0; i < results.length; i++) {
                    disComTotal = results.length;
                    var userType = results[i].attributes.userType;
                    var comment = results[i].attributes.comment;
                    var userName = results[i].attributes.userName;
                    var dT = results[i].createdAt.toString().substr(0, 21);
                    count += 1;
                    if (userType == "advertiser") {
                        //right
                        document.getElementById("disputeComments").innerHTML += '<div class="disputeMessage2">' + comment + '<br/> <div class="dM2u">' + userName + ' @ ' + dT + '</div> </div>'
                    } else if (userType == "publisher") {
                        //left
                        document.getElementById("disputeComments").innerHTML += '<div class="disputeMessage1">' + comment + '<br/> <div class="dM1u">' + userName + ' @ ' + dT + '</div> </div>'
                    } else if (userType == "admin") {
                        //center
                        document.getElementById("disputeComments").innerHTML += '<div class="disputeMessage3">' + comment + '<br/> <div class="dM3u">' + userName + ' @ ' + dT + '</div> </div>'
                    }
                    if (count == results.length) {
                        var objDiv = document.getElementById("disputeComments");
                        objDiv.scrollTop = objDiv.scrollHeight;
                    }
                }
            }
        })
    } else {
        if (!!disComTotal && commentsOpen == "none") {
            var currentUser = Parse.User.current();
            disputeRole = liveChatterOID;
            disputeName = currentUser.attributes.firstName;
            disputeType = "advertiser";
            var allDisputePosts = Parse.Object.extend("Disputes");
            var disputePosts = new Parse.Query(allDisputePosts);
            var count = 0;
            disputePosts.equalTo("orderId", liveChatterOID)
            disputePosts.ascending("createdAt");
            disputePosts.find().then(function (results) {
                if (results.length > disComTotal) {
                    document.getElementById("serverMsgBox").innerHTML = "There is a new comment on your disputed campaign.";
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
                            clearInterval(liveChatter);
                        }, 700)
                    }, 4200)
                }
            })
        }
    }
}

function closeDisputeComments() {
    document.getElementById("cDc").style.display = "none"
    document.getElementById("disputeCommentsBack").style.display = "none"
    document.getElementById("disputeCommentsUnder").style.display = "none"
    document.getElementById("disputeComments").style.display = "none"
    document.getElementById("disputeMessageInput").style.display = "none"
}

function loadDisputeCommentsNow(orderId, boxType) {
    liveChatterOID = orderId;
    liveChatterBox = boxType;
    liveChatter = setInterval(liveChat, 300000);
    document.getElementById("cDc").style.display = "block"
    document.getElementById("disputeComments").innerHTML = ""
    campType = boxType
    if (boxType.indexOf('purchased') == -1) { } else {
        var currentUser = Parse.User.current();
        disputeRole = orderId;
        disputeName = currentUser.attributes.firstName;
        disputeType = "advertiser";
        var allDisputePosts = Parse.Object.extend("Disputes");
        var disputePosts = new Parse.Query(allDisputePosts);
        var count = 0;
        disputePosts.equalTo("orderId", orderId)
        disputePosts.ascending("createdAt");
        disputePosts.find().then(function (results) {
            //show loader gif
            for (var i = 0; i < results.length; i++) {
                disComTotal = results.length;
                var userType = results[i].attributes.userType;
                var comment = results[i].attributes.comment;
                var userName = results[i].attributes.userName;
                var dT = results[i].createdAt.toString().substr(0, 21);
                count += 1;
                if (userType == "advertiser") {
                    //right
                    document.getElementById("disputeComments").innerHTML += '<div class="disputeMessage2">' + comment + '<br/> <div class="dM2u">' + userName + ' @ ' + dT + '</div> </div>'
                } else if (userType == "publisher") {
                    //left
                    document.getElementById("disputeComments").innerHTML += '<div class="disputeMessage1">' + comment + '<br/> <div class="dM1u">' + userName + ' @ ' + dT + '</div> </div>'
                } else if (userType == "admin") {
                    //center
                    document.getElementById("disputeComments").innerHTML += '<div class="disputeMessage3">' + comment + '<br/> <div class="dM3u">' + userName + ' @ ' + dT + '</div> </div>'
                }
                if (count == results.length) {
                    var objDiv = document.getElementById("disputeComments");
                    objDiv.scrollTop = objDiv.scrollHeight;
                }
            }
        })
    }
    if (boxType.indexOf('sold') == -1) { } else {
        var currentUser = Parse.User.current();
        disputeRole = orderId;
        disputeName = currentUser.attributes.firstName;
        disputeType = "publisher";
        var allDisputePosts = Parse.Object.extend("Disputes");
        var disputePosts = new Parse.Query(allDisputePosts);
        var count = 0;
        disputePosts.equalTo("orderId", orderId)
        disputePosts.ascending("createdAt");
        disputePosts.find().then(function (results) {
            //show loader gif
            for (var i = 0; i < results.length; i++) {
                var userType = results[i].attributes.userType;
                var comment = results[i].attributes.comment;
                var userName = results[i].attributes.userName;
                var dT = results[i].createdAt.toString().substr(0, 21);
                count += 1;
                if (userType == "advertiser") {
                    //left
                    document.getElementById("disputeComments").innerHTML += '<div class="disputeMessage1">' + comment + '<br/> <div class="dM1u">' + userName + ' @ ' + dT + '</div> </div>'
                } else if (userType == "publisher") {
                    //right
                    document.getElementById("disputeComments").innerHTML += '<div class="disputeMessage2">' + comment + '<br/> <div class="dM2u">' + userName + ' @ ' + dT + '</div> </div>'
                } else if (userType == "admin") {
                    //center
                    document.getElementById("disputeComments").innerHTML += '<div class="disputeMessage3">' + comment + '<br/> <div class="dM3u">' + userName + ' @ ' + dT + '</div> </div>'
                }
                if (count == results.length) {
                    var objDiv = document.getElementById("disputeComments");
                    objDiv.scrollTop = objDiv.scrollHeight;
                }
            }

        })
    }
}

function writeDisputeCommentNow() {
    disputeComment = document.getElementById("disComVal").value;
    document.getElementById("disComVal").value = "";
    var postACL = new Parse.ACL(Parse.User.current());
    postACL.setPublicReadAccess(false);
    postACL.setRoleReadAccess("Admins", true);
    postACL.setRoleWriteAccess("Admins", true);
    postACL.setRoleReadAccess(disputeRole, true);
    var disputePost = Parse.Object.extend("Disputes");
    var disputeLog = new disputePost();
    disputeLog.set("userName", disputeName);
    disputeLog.set("userType", disputeType);
    disputeLog.set("comment", disputeComment);
    disputeLog.set("orderId", disputeRole);
    disputeLog.setACL(postACL);
    disputeLog.save(null, {
        success: function (disputeLog) {
            loadDisputeCommentsNow(disputeRole, campType)
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
                var error1 = "Line 126 - Disputes - Time: " + ts;
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
}

