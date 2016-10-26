function recoveryPleaseWait() {
		document.getElementById("serverMsgBox").innerHTML = "Please wait...";
		document.getElementById("serverMsgBackdrop").style.display = "block";
		document.getElementById("serverMsgBox").style.display = "block";
		document.getElementById("serverMsgBackdrop").style.opacity = "1";
		document.getElementById("serverMsgBox").style.opacity = "1";
	}

function recoveryFunc(ts1, email1, id1) {

    Parse.initialize("", "");

    Parse.Cloud.run('recovery', { em: email1, ts: ts1, id: id1 }, {
        success: function (result) {
            Parse.User.requestPasswordReset(email1, {
                success: function () {
                    // Password reset request was sent successfully
                    document.getElementById("mainPageLoader2").style.opacity = "0";
					document.getElementById("mainPageLoader2").style.display = "none"
					document.getElementById("loadingGraphic2").src = "/images/loader/18p.jpg";
					document.getElementById("serverMsgBox").innerHTML = "You have reversed the changes made to your account. We have emailed a password reset link to you, please use it!";
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
					}, 7200)
                },
                error: function (error) {
                    //dberror
                    // Show the error message somewhere
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
						var error1 = "Line 37 - Recovery - Time: " + ts;
						try { var error2 = error.message; } catch (e) { var error2 = "Unknown - Use timestamp to locate in DB logs" }
						Parse.Cloud.run('sendBug', { user: user, error1: error1, error2: error2 }, {
							success: function (result) { },
							error: function (result) { }
						});
						//bugreport
						setTimeout(function (args) {
							document.getElementById("serverMsgBackdrop").style.display = "none";
							document.getElementById("serverMsgBox").style.display = "none";
							window.location = "https://pletho.com";
						}, 700)
					}, 7200)
                }
            });
        },
        error: function (error) {
            document.getElementById("mainPageLoader2").style.opacity = "0";
            document.getElementById("mainPageLoader2").style.display = "none"
            document.getElementById("loadingGraphic2").src = "/images/loader/18p.jpg";
			if(error.message.indexOf("success") != -1) {
		document.getElementById("serverMsgBox").innerHTML = "You have either already completed this action or the action has expired. Please contact support@pletho.com if you require help.";
				} else {
            document.getElementById("serverMsgBox").innerHTML = "Sorry, there appears to be a problem. (Error Message: '" + error.message + "')";
				}
            document.getElementById("serverMsgBackdrop").style.display = "block";
            document.getElementById("serverMsgBox").style.display = "block";
            document.getElementById("serverMsgBackdrop").style.opacity = "1";
            document.getElementById("serverMsgBox").style.opacity = "1";
            setTimeout(function (args) {
                document.getElementById("serverMsgBackdrop").style.opacity = "0";
                document.getElementById("serverMsgBox").style.opacity = "0";
                //bugreport	
				if(error.message.indexOf("success") != -1) { } else {
                var ts = new Date().getTime();
                try { var currentUser = Parse.User.current(); } catch (e) { var user = "offline" }
                try { var user = currentUser.attributes.username; } catch (e) { var user = "offline" }
                var error1 = "Line 37 - Recovery - Time: " + ts;
                try { var error2 = error.message; } catch (e) { var error2 = "Unknown - Use timestamp to locate in DB logs" }
                Parse.Cloud.run('sendBug', { user: user, error1: error1, error2: error2 }, {
                    success: function (result) { },
                    error: function (result) { }
                });
				}
                //bugreport
                setTimeout(function (args) {
                    document.getElementById("serverMsgBackdrop").style.display = "none";
                    document.getElementById("serverMsgBox").style.display = "none";
					if(error.message.indexOf("success") != -1) { } else {
                    window.location = "https://pletho.com";
					}
                }, 700)
            }, 7200)
        }
    });
}