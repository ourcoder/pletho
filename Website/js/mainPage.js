var lock = false;
var userFirstNameNew;
var userLastNameNew;
var userEmailNew;
var userPasswordNew;
var sessTok;
var typer0;
var doNotLogin = false;
var doNotLogin2 = false;
var loginErrorCount = 0;
var ordersAsOwner = 0;
var ordersAsPurchaser = 0;
var autoCampOpen = false;

if (window.location.hash == '#AdvertiserNew') {
	lock = true;
    setTimeout(function (args) {
        document.getElementById("mainPageLoader").style.display = "block"
        document.getElementById("mainPageLoader").style.opacity = "1";
        document.getElementById("loadingGraphic").src = "/images/loader/85p.jpg";
    }, 750)
	setTimeout(function (args) {
        document.getElementById("mainPageLoader").style.display = "block"
        document.getElementById("mainPageLoader").style.opacity = "1";
        document.getElementById("loadingGraphic").src = "/images/loader/85p.jpg";
    }, 1550)
    setTimeout(function (args) {
		doNotLogin = false
        loginMP()
    }, 1750)
}

function joinMP() {
	clearInterval(refreshInterval);
    if (window.location.hostname.toLowerCase() == "pletho.com" && window.location.protocol.toLowerCase() == "https:") {
        window.location = '#Join';
        navigating = true;
        document.getElementById("mainPageBlocker").style.display = "block";
        document.getElementById("mainPageBlocker").style.opacity = "1";
        setTimeout(function (args) {
            document.getElementById("joinPagePopup").style.display = "block";
            document.getElementById("mainPageLine").style.display = "block";
            document.getElementById("joinPagePopup").style.bottom = "0";
            document.getElementById("joinPagePopup").style.opacity = "1";
            document.getElementById("mainPageLine").style.opacity = "1";
        }, 250)
    } else {
        window.location = "https://pletho.com/#joinNow"
    }
}

function loginMP(skip) {
	clearInterval(refreshInterval);
	if(doNotLogin == true) {
		setTimeout(function (args) { doNotLogin = false; }, 1500)
		return;
	} else {
		userFirstNameNew = ""
		userLastNameNew = ""
    if (window.location.hostname.toLowerCase() == "pletho.com" && window.location.protocol.toLowerCase() == "https:") {
        window.location = '#Login';
        navigating = true;
        var x = document.cookie;
        var curSessTok;
        var oldST;
        if (!!x) {
            mainPageLoader()
            Parse.initialize("", "");
            var name = "sessionToken=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1);
                if (c.indexOf(name) != -1) curSessTok = c.substring(name.length, c.length);
            }
            try { oldST = curSessTok.replace("sessionToken=", ""); } catch (e) { oldST = "" }
            if (!!oldST) {
                Parse.User.become(oldST).then(function (user) {
                    //+1 currentUsers login count
                    var acl = new Parse.ACL(Parse.User.current());
                    var logins = user.attributes.logins;
                    acl.setPublicReadAccess(false);
                    var sessTok = user._sessionToken;
                    var time = new Date();
                    time.setDate(time.getDate() + 230);
                    var sT1 = "sessionToken=" + sessTok + ";"
                    var dT1 = "expires=" + time.toGMTString() + ";"
                    document.cookie = sT1 + dT1
                    user.set("logins", (logins + 1));
                    user.setACL(acl);
                    user.save(null, {
                        success: function (user, success) {
                            loginOldUserComplete()
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
                                var error1 = "Line 83 - MainPage - Time: " + ts;
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
                            }, 4200)
                        }
                    });
                }, function (error) {
                    var time = new Date();
                    time.setDate(time.getDate() + 230);
                    var sT1 = "sessionToken=;"
                    var dT1 = "expires=" + time.toGMTString() + ";"
                    document.cookie = sT1 + dT1
                    ////
                    if (skip == true) { } else {
                        setTimeout(function (args) {
                            document.getElementById("mainPageLoader").style.opacity = "0";
                            setTimeout(function (args) { document.getElementById("mainPageLoader").style.display = "none" }, 500)
                            //gotopostlogin	

                        }, 500)
                    }
                    ////
                    document.getElementById("mainPageBlocker").style.display = "block";
                    document.getElementById("mainPageBlocker").style.opacity = "1";
                    setTimeout(function (args) {
                        document.getElementById("loginPagePopup").style.display = "block";
                        document.getElementById("mainPageLine").style.display = "block";
                        document.getElementById("loginPagePopup").style.bottom = "0";
                        document.getElementById("loginPagePopup").style.opacity = "1";
                        document.getElementById("mainPageLine").style.opacity = "1";
                    }, 250)
                });
            } else {

                document.getElementById("lH").style.display = "block"
                document.getElementById("jT").style.display = "block"
                document.getElementById("lH").style.opacity = "1"
                document.getElementById("jT").style.opacity = "1"

                ////
                if (skip == true) { } else {
                    setTimeout(function (args) {
                        document.getElementById("mainPageLoader").style.opacity = "0";
                        setTimeout(function (args) { document.getElementById("mainPageLoader").style.display = "none" }, 500)
                        //gotopostlogin	

                    }, 500)
                }
                ////
                document.getElementById("mainPageBlocker").style.display = "block";
                document.getElementById("mainPageBlocker").style.opacity = "1";
                setTimeout(function (args) {
                    document.getElementById("loginPagePopup").style.display = "block";
                    document.getElementById("mainPageLine").style.display = "block";
                    document.getElementById("loginPagePopup").style.bottom = "0";
                    document.getElementById("loginPagePopup").style.opacity = "1";
                    document.getElementById("mainPageLine").style.opacity = "1";
                }, 250)
            }
        } else {
            ////
            if (skip == true) { } else {
                setTimeout(function (args) {
                    document.getElementById("mainPageLoader").style.opacity = "0";
                    setTimeout(function (args) { document.getElementById("mainPageLoader").style.display = "none" }, 500)
                    //gotopostlogin						
                }, 500)
            }
            ////
            document.getElementById("mainPageBlocker").style.display = "block";
            document.getElementById("mainPageBlocker").style.opacity = "1";
            setTimeout(function (args) {
                document.getElementById("loginPagePopup").style.display = "block";
                document.getElementById("mainPageLine").style.display = "block";
                document.getElementById("loginPagePopup").style.bottom = "0";
                document.getElementById("loginPagePopup").style.opacity = "1";
                document.getElementById("mainPageLine").style.opacity = "1";
            }, 250)
        }
    } else {
        window.location = "https://pletho.com/#loginNow"
    }
  }
}

function closeMainPagePopups() {
    document.getElementById("lH").style.opacity = "0";
    document.getElementById("jT").style.opacity = "0";
    document.getElementById("joinPagePopup").style.opacity = "0";
    document.getElementById("loginPagePopup").style.opacity = "0";
    document.getElementById("mainPageLine").style.display = "none";
    document.getElementById("mainPageBlocker").style.opacity = "0";
    document.getElementById("mainPageLine").style.opacity = "0";
    setTimeout(function (args) {
        document.getElementById("joinPagePopup").style.bottom = "1200px";
        document.getElementById("loginPagePopup").style.bottom = "1200px";
        document.getElementById("mainPageBlocker").style.display = "none";
        document.getElementById("loginPagePopup").style.display = "none";
        document.getElementById("joinPagePopup").style.display = "none";
        document.getElementById("lH").style.display = "none";
        document.getElementById("jT").style.display = "none";
        document.getElementById("lH2").style.display = "none";
        document.getElementById("jT2").style.display = "none";
    }, 500)
}

function popLinkedInButton() {
    if (document.getElementById("linkBut").style.width == "100%") {
        document.getElementById("linkBut").style.width = "58px";
        document.getElementById("linkBut").style.marginLeft = "6%";
        document.getElementById("linkBut").children[0].textContent = "";
        setTimeout(function (args) { document.getElementById("joinLink").style.display = "block"; }, 250)
        //popLinkedIn
        onLinkedInLoad();
        mainPageLoader()
    } else {
        document.getElementById("joinLink").style.display = "none";
        document.getElementById("linkBut").style.width = "100%";
        document.getElementById("linkBut").style.marginLeft = "4%";
        setTimeout(function (args) { document.getElementById("linkBut").children[0].textContent = "Join with LinkedIn"; }, 250)
    }
}

function postLinkedInDetails(userEmail, userFirstName, userLastName, userID) {
    setTimeout(function (args) {
        document.getElementById("loadingGraphic").src = "/images/loader/85p.jpg";
        setTimeout(function (args) {
            document.getElementById("mainPageLoader").style.opacity = "0";
            setTimeout(function (args) { document.getElementById("mainPageLoader").style.display = "none" }, 500)
        }, 850)
    }, 750)
    document.getElementById("firstName").value = userFirstName;
    document.getElementById("lastName").value = userLastName;
    document.getElementById("emailNew1").value = userEmail;
}

function mainPageLoader() {
	if(document.getElementById("loadingGraphic").src == "/images/loader/85p.jpg" || lock == true) {
		setTimeout(function (args) {
        document.getElementById("loadingGraphic").src = "/images/loader/85p.jpg";
        setTimeout(function (args) {
            document.getElementById("mainPageLoader").style.opacity = "0";
            setTimeout(function (args) { document.getElementById("mainPageLoader").style.display = "none" }, 500)
        }, 850)
    }, 11750)
		} else {
    document.getElementById("mainPageLoader").style.display = "block"
    document.getElementById("mainPageLoader").style.opacity = "1";
    document.getElementById("loadingGraphic").src = "/images/loader/18p.jpg";
    setTimeout(function (args) { document.getElementById("loadingGraphic").src = "/images/loader/30p.jpg"; }, 350)
    setTimeout(function (args) { document.getElementById("loadingGraphic").src = "/images/loader/52p.jpg"; }, 1350)
    setTimeout(function (args) { document.getElementById("loadingGraphic").src = "/images/loader/75p.jpg"; }, 2250)
    setTimeout(function (args) {
        document.getElementById("loadingGraphic").src = "/images/loader/85p.jpg";
        setTimeout(function (args) {
            document.getElementById("mainPageLoader").style.opacity = "0";
            setTimeout(function (args) { document.getElementById("mainPageLoader").style.display = "none" }, 500)
        }, 850)
    }, 11750)
	}
}

function signupNewUser() {
    window.location = '#LoggingIn';
    navigating = true;
    userFirstNameNew = document.getElementById("firstName").value;
    userLastNameNew = document.getElementById("lastName").value;
    userEmailNew = document.getElementById("emailNew1").value;
    userPasswordNew = document.getElementById("password1").value;
    document.getElementById("email").value = userEmailNew;
    document.getElementById("password").value = userPasswordNew;
    mainPageLoader()
	lock = true;
    closeMainPagePopups();
    setTimeout(function (args) {
        var skip = true
        loginMP(skip)
    }, 1150)
    setTimeout(function (args) {
        loginUser()
    }, 350)
}

function loginUser() {
    Parse.initialize("", "");
    if (!!userFirstNameNew && !!userLastNameNew) {
        var user = new Parse.User();
        user.set("username", userEmailNew);
        user.set("password", userPasswordNew);
        user.set("email", userEmailNew);
        user.set("firstName", userFirstNameNew);
        user.set("lastName", userLastNameNew);
        user.set("logins", 0);
        user.signUp(null, {
            success: function (user) {
                Parse.User.logIn(userEmailNew, userPasswordNew, {
                    success: function (user) {
                        //+1 currentUsers login count
                        var acl = new Parse.ACL(Parse.User.current());
                        var logins = user.attributes.logins;
                        acl.setPublicReadAccess(false);
                        sessTok = user._sessionToken;
                        var time = new Date();
                        time.setDate(time.getDate() + 230);
                        var sT1 = "sessionToken=" + sessTok + ";"
                        var dT1 = "expires=" + time.toGMTString() + ";"
                        document.cookie = sT1 + dT1
                        user.set("logins", (logins + 1));
                        user.setACL(acl);
                        user.save(null, {
                            success: function (user, success) {
								userFirstNameNew = user.attributes.firstName;
                                Parse.Cloud.run('sendPass', { user: userEmailNew, pass: userFirstNameNew }, {
                                    success: function (result) {
                                        newUserLoggingIn(sessTok);
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
                                            var error1 = "Line 295 - MainPage - Time: " + ts;
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
                                        }, 4200)
                                    }
                                });
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
                                    var error1 = "Line 326 - MainPage - Time: " + ts;
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
                                }, 4200)
                            }
                        });
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
                            var error1 = "Line 357 - MainPage - Time: " + ts;
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
                        }, 4200)
                    }
                });
            },
            error: function (error1, error2) {
				try{ var errorMsg1 = error1.message; if(!errorMsg1) {errorMsg1=""} } catch(e) { var errorMsg1 = "" }
				try{ var errorMsg2 = error2.message; if(!errorMsg2) {errorMsg1=""} } catch(e) { var errorMsg2 = "" }
				if(errorMsg1.indexOf("already taken") != -1 || errorMsg2.indexOf("already taken") != -1) {
					doNotLogin = true;		
					doNotLogin2 = true;					
                	document.getElementById("serverMsgBox").innerHTML = "There is already an account using that email address.";
					closeMainPagePopups()
					} else {				
                document.getElementById("serverMsgBox").innerHTML = "Sorry, there appears to be a problem. (Error Message: '" + error.message + "')";	
						}
                document.getElementById("mainPageLoader2").style.opacity = "0";
                document.getElementById("mainPageLoader2").style.display = "none"
                document.getElementById("loadingGraphic2").src = "/images/loader/18p.jpg";
                document.getElementById("serverMsgBackdrop").style.display = "block";
                document.getElementById("serverMsgBox").style.display = "block";
                document.getElementById("serverMsgBackdrop").style.opacity = "1";
                document.getElementById("serverMsgBox").style.opacity = "1";
                setTimeout(function (args) {
                    document.getElementById("serverMsgBackdrop").style.opacity = "0";
                    document.getElementById("serverMsgBox").style.opacity = "0";
                    //bugreport	
					if(errorMsg1.indexOf("already taken") != -1 || errorMsg2.indexOf("already taken") != -1) {
						var ts = new Date().getTime();
						try { var currentUser = Parse.User.current(); } catch (e) { var user = "offline" }
						try { var user = currentUser.attributes.username; } catch (e) { var user = "offline" }
						var error1 = "Line 388 - MainPage - Time: " + ts;
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
						if(doNotLogin == false && doNotLogin2 == false) {
                        window.location = "https://pletho.com";
						} else {
							doNotLogin2 = false;
							document.getElementById("joinPagePopup").children[1].children[2].style.borderColor = "red";
							joinMP()
							popLoginSideBox()
							}
                    }, 700)
                }, 4200)
            }
        });

    } else {
       
        userEmailNew = document.getElementById("email").value
        userPasswordNew = document.getElementById("password").value
		if(userEmailNew.indexOf("@") == -1) { 
			return;
		} else if (!!userEmailNew && !!userPasswordNew) {
			if (!typer0) { mainPageLoader() } else {
				document.getElementById("mainPageLoader").style.display = "block"
				document.getElementById("mainPageLoader").style.opacity = "1";
				document.getElementById("loadingGraphic").src = "/images/loader/18p.jpg";
			}
            Parse.User.logIn(userEmailNew, userPasswordNew, {
                success: function (user) {
                    //+1 currentUsers login count
                    var acl = new Parse.ACL(Parse.User.current());
                    var logins = user.attributes.logins;
                    acl.setPublicReadAccess(false);
                    var sessTok = user._sessionToken;
                    var time = new Date();
                    time.setDate(time.getDate() + 230);
                    var sT1 = "sessionToken=" + sessTok + ";"
                    var dT1 = "expires=" + time.toGMTString() + ";"
                    document.cookie = sT1 + dT1
                    user.set("logins", (logins + 1));
                    user.setACL(acl);
                    user.save(null, {
                        success: function (user, success) {
                            if (!typer0) {
                                loginOldUserComplete()
                            } else {
                                newUserLoggingIn(sessTok)
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
                                var error1 = "Line 442 - MainPage - Time: " + ts;
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
                            }, 4200)
                        }
                    });
                },
                error: function (error) {
					var errorData = error.message || "invalid";
					if(errorData.indexOf("invalid") != -1) {
						loginErrorCount += 1;
						document.getElementById("mainPageLoader2").style.opacity = "0";
						document.getElementById("mainPageLoader2").style.display = "none"
						document.getElementById("loadingGraphic2").src = "/images/loader/18p.jpg";
						if(loginErrorCount < 3) {
						document.getElementById("serverMsgBox").innerHTML = "The email or password you entered is incorrect. Please try again.";
						} else {
							document.getElementById("serverMsgBox").innerHTML = "If you have forgotten your password you can reset it by tapping on the Login Help button.";					
							document.getElementById("lH").style.borderColor = "red";
							}
						document.getElementById("loginForm2").children[0].style.borderColor = "red";
						document.getElementById("loginForm2").children[1].style.borderColor = "red";
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
					} else {
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
                        var error1 = "Line 473 - MainPage - Time: " + ts;
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
                    }, 4200)
                }
			  }
            });
        } else {
            return;
        }
    }
}

function newUserLoggingIn(sessTok) {
	clearInterval(refreshInterval);
    document.getElementById("loginForm2").onsubmit = "";
    document.getElementById("loginForm2").action = "index.php?sessionToken=" + sessTok;
    setTimeout(function (args) {
        document.getElementById("loginForm2").submit();
    }, 250)
}

function newUserSignInWithSessTok(sessTok2) {
	clearInterval(refreshInterval);
    Parse.initialize("", "");
	document.getElementById("loadingGraphic").src = "/images/loader/85p.jpg";
	lock = true;
    mainPageLoader()
    Parse.User.become(sessTok2).then(function (user) {
        var acl = new Parse.ACL(Parse.User.current());
        var logins = user.attributes.logins;
        acl.setPublicReadAccess(false);
        var sessTok = user._sessionToken;
        var time = new Date();
        time.setDate(time.getDate() + 230);
        var sT1 = "sessionToken=" + sessTok + ";"
        var dT1 = "expires=" + time.toGMTString() + ";"
        document.cookie = sT1 + dT1
        user.set("logins", (logins + 1));
        user.setACL(acl);
        user.save(null, {
            success: function (user, success) {
				document.getElementById("loadingGraphic").src = "/images/loader/85p.jpg";
                window.location = 'index.php#AdvertiserNew';
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
                    var error1 = "Line 536 - MainPage - Time: " + ts;
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
                }, 4200)
            }
        });
    }, function (error) {
    });
}

function loginOldUserComplete() {
	clearInterval(refreshInterval);
	if(doNotLogin == true) {
		setTimeout(function (args) { doNotLogin = false; }, 1500)
		return;
	} else {
		////////////////////////////////////////////////////////////////////////
		//CHECK FOR INCOMPLETE CAMPAIGNS BEFORE DECIDING WHERE THE USER WILL GO
		////////////////////////////////////////////////////////////////////////
		var allOrders = Parse.Object.extend("Orders");
		var getMatchedOrders1 = new Parse.Query(allOrders);
		var getMatchedOrders2 = new Parse.Query(allOrders);
		var thisUser = Parse.User.current();
		var userId = thisUser.id;
		getMatchedOrders1.equalTo("purchaser", userId);
        getMatchedOrders2.equalTo("owner", userId);
        getMatchedOrders1.notEqualTo("status", "archived");
        getMatchedOrders2.notEqualTo("status", "archived");
        getMatchedOrders1.limit(1000);
        getMatchedOrders2.limit(1000);
        var oneYearAgo = new Date();
        oneYearAgo.setMonth(oneYearAgo.getMonth() - 12);
        getMatchedOrders1.greaterThan("updatedAt", oneYearAgo);
        getMatchedOrders2.greaterThan("updatedAt", oneYearAgo);
		getMatchedOrders1.descending("updatedAt");
		getMatchedOrders2.descending("updatedAt");
		getMatchedOrders1.find({
            success: function (results) {
				var num1 = 0;
				var non = false;
				if(results.length == 0) { results.length = 1; non = true;}
				for (var i = 0; i < results.length; i++) {
					if(results.length != 1 && non != true) {
					num1 += 1;
				if(results[i].attributes.status == "queued" || results[i].attributes.status == "live" || results[i].attributes.status == "disputed") {
                    		ordersAsPurchaser += 1;
						} 
				} else {results.length = 0}
				if (num1 == results.length) {
							getMatchedOrders2.find({
				success: function (results) {
					var num2 = 0;
					var non2 = false;
					if(results.length == 0) { results.length = 1; non2 = true;}
					for (var i = 0; i < results.length; i++) {
						if(results.length != 1 && non2 != true) {
						num2 += 1;
					if(results[i].attributes.status == "pending" || results[i].attributes.status == "live" || results[i].attributes.status == "disputed") {
                    		ordersAsOwner += 1;
						} 
						} else {results.length = 0}
					}
					if (num2 == results.length) {
					var fullOrderCount = ordersAsOwner + ordersAsPurchaser
					if(fullOrderCount == 0) {
						var pppage = "ad"
						window.location = '#Advertiser';
					} else {
						var pppage = "ca"
						window.location = '#Campaigns:Pending';
					}
					navigating = true;
					lock = false;
					closeMainPagePopups()
					setTimeout(function (args) {
						document.getElementById("loadingGraphic").src = "/images/loader/85p.jpg";
						if(pppage == "ad") {
							advertiserPage1Load();
							checkAlerts()
							setTimeout(function (args) {
								document.getElementById("mainPageLoader").style.opacity = "0";
								setTimeout(function (args) { document.getElementById("mainPageLoader").style.display = "none" }, 500)
								document.getElementById("content").style.display = "block";
								document.getElementById("home").style.display = "none";
							}, 500)
						} else if(pppage == "ca") {
							advertiserPage1Load();
							setTimeout(function (args) {
								openCampaignsPage1();
								autoCampOpen = true;
								checkAlerts()
								setTimeout(function (args) {
									document.getElementById("mainPageLoader").style.opacity = "0";
									setTimeout(function (args) { document.getElementById("mainPageLoader").style.display = "none" }, 500)
									document.getElementById("content").style.display = "block";
									document.getElementById("home").style.display = "none";
								}, 500)
							}, 1200)
						} else {
							advertiserPage1Load();
							checkAlerts()
							setTimeout(function (args) {
								document.getElementById("mainPageLoader").style.opacity = "0";
								setTimeout(function (args) { document.getElementById("mainPageLoader").style.display = "none" }, 500)
								document.getElementById("content").style.display = "block";
								document.getElementById("home").style.display = "none";
							}, 500)
						}
						
					}, 2500)
					}
					 },
				error: function (error) {
					window.location = '#Advertiser';
					navigating = true;
					lock = false;
					closeMainPagePopups()
					setTimeout(function (args) {
						document.getElementById("loadingGraphic").src = "/images/loader/85p.jpg";
						advertiserPage1Load();
						checkAlerts()
						setTimeout(function (args) {
							document.getElementById("mainPageLoader").style.opacity = "0";
							setTimeout(function (args) { document.getElementById("mainPageLoader").style.display = "none" }, 500)
							document.getElementById("content").style.display = "block";
							document.getElementById("home").style.display = "none";
						}, 500)
					}, 2500)
				}})
							}
				}
				
				 },
            error: function (error) {
				window.location = '#Advertiser';
				navigating = true;
				lock = false;
				closeMainPagePopups()
				setTimeout(function (args) {
					document.getElementById("loadingGraphic").src = "/images/loader/85p.jpg";
					advertiserPage1Load();
					checkAlerts()
					setTimeout(function (args) {
						document.getElementById("mainPageLoader").style.opacity = "0";
						setTimeout(function (args) { document.getElementById("mainPageLoader").style.display = "none" }, 500)
						document.getElementById("content").style.display = "block";
						document.getElementById("home").style.display = "none";
			}, 500)
		}, 2500)
			}
		})
		/////////////////////////////
	}
}

$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            try { target = target.length ? target : $('[name=' + this.hash.slice(1) + ']'); } catch (e) { }
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

function pwdReset1() {
    var pwdReseter = document.getElementById("pwdReseter");
    var loginForm2 = document.getElementById("loginForm2").children[0].children[1].value;
    if (!!loginForm2) { pwdReseter.children[0].value = loginForm2 }
    pwdReseter.style.display = "block";
    document.getElementById("serverMsgBackdrop").style.display = "block";
    document.getElementById("serverMsgBackdrop").style.opacity = "1";
}

function pwdReset2(mail) {
    Parse.User.requestPasswordReset(mail, {
        success: function () {
            document.getElementById("mainPageLoader2").style.opacity = "0";
            document.getElementById("mainPageLoader2").style.display = "none"
            document.getElementById("loadingGraphic2").src = "/images/loader/18p.jpg";
            document.getElementById("serverMsgBox").innerHTML = "We have sent you an email with instructions on how to reset your password.";
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
                    window.location = "https://pletho.com";
                }, 700)
            }, 4200)
        },
        error: function (error) {
			if(error.message == "you must provide an email") {
				document.getElementById("serverMsgBox").innerHTML = "There is no account known by that email or the email is not valid.";
				} else {
					document.getElementById("serverMsgBox").innerHTML = "Sorry, there appears to be a problem. (Error Message: '" + error.message + "')";
					}
            document.getElementById("mainPageLoader2").style.opacity = "0";
            document.getElementById("mainPageLoader2").style.display = "none"
            document.getElementById("loadingGraphic2").src = "/images/loader/18p.jpg";
            
            document.getElementById("serverMsgBackdrop").style.display = "block";
            document.getElementById("serverMsgBox").style.display = "block";
            document.getElementById("serverMsgBackdrop").style.opacity = "1";
            document.getElementById("serverMsgBox").style.opacity = "1";
            setTimeout(function (args) {
                document.getElementById("serverMsgBackdrop").style.opacity = "0";
                document.getElementById("serverMsgBox").style.opacity = "0";
                //bugreport	
				if(error.message == "you must provide an email") {
						pwdReset1()
					 } else {
					var ts = new Date().getTime();
					try { var currentUser = Parse.User.current(); } catch (e) { var user = "offline" }
					try { var user = currentUser.attributes.username; } catch (e) { var user = "offline" }
					var error1 = "Line 536 - MainPage - Time: " + ts;
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
					if(error.message == "you must provide an email") { 
						document.getElementById("email1").style.borderColor = "red";
					} else {
                    window.location = "https://pletho.com";
					}
                }, 700)
            }, 4200)
        }
    });
}

function pwdCheckBoxer() {
    var pwdBox = document.getElementById("pwdReseter").style.display;
    if (pwdBox == "block") {
        document.getElementById("pwdReseter").style.display = "none";
        document.getElementById("serverMsgBackdrop").style.opacity = "0";
        document.getElementById("serverMsgBox").style.opacity = "0";
        setTimeout(function (args) {
            document.getElementById("serverMsgBackdrop").style.display = "none";
            document.getElementById("serverMsgBox").style.display = "none";
        }, 700)
    }
}

function shareUIPop() {	
        document.getElementById("shareUIPop1").style.display = "block";
	}
	
function shareUIPopClose() {	
        document.getElementById("shareUIPop1").style.display = "none";
	}

function popLoginSideBox() {
		document.getElementById("lH2").style.display = "block"
        document.getElementById("jT2").style.display = "block"
        document.getElementById("lH2").style.opacity = "1"
        document.getElementById("jT2").style.opacity = "1"
	}