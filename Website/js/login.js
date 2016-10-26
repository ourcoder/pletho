var oldUserEmail;

function login(userEmail, userFirstName, userLastName, userID) {

    Parse.initialize("", "");

    var x = document.cookie;
    var curSessTok;
    var oldST;
    if (!!x) {
        var name = "sessionToken=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) != -1) curSessTok = c.substring(name.length, c.length);
        }
        oldST = curSessTok.replace("sessionToken=", "");
        if (!!oldST) {
            Parse.User.become(oldST).then(function (user) {
                var oldUser = true;
                loginComplete(oldUser, userFirstName);
            }, function (error) {
                var time = new Date();
                time.setDate(time.getDate() + 230);
                var sT1 = "sessionToken=;"
                var dT1 = "expires=" + time.toGMTString() + ";"
                document.cookie = sT1 + dT1
                return login()
            });
        }
    }

    if (!oldST) {

        var retVal;
        var length = 8,
        charset = "abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }

        setTimeout(function (args) {
            var user = new Parse.User();
            user.set("username", userEmail);
            user.set("password", retVal);
            user.set("email", userEmail);
            user.set("firstName", userFirstName);
            user.set("lastName", userLastName);
            user.set("logins", 0);
            user.signUp(null, {
                success: function (user) {
                    Parse.User.logIn(userEmail, retVal, {
                        success: function (user) {
                            //+1 currentUsers login count
                            var acl = new Parse.ACL(Parse.User.current());
                            var logins = user.attributes.logins;
                            acl.setPublicReadAccess(false);
                            user.set("logins", (logins + 1));
                            user.setACL(acl);
                            user.save(null, {
                                success: function (user, success) {
									userFirstName = user.attributes.firstName;
                                    Parse.Cloud.run('sendPass', { user: userEmail, pass: userFirstName }, {
                                        success: function (result) {
                                            //document.getElementById("loggingin").innerText = "Creating account...";
                                            //document.getElementById("loggingin").textContent = "Creating account...";
                                            var oldUser = false;
                                            loginComplete(oldUser, userFirstName)
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
                                                var error1 = "Line 86 - Login - Time: " + ts;
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
                                        var error1 = "Line 117 - Login - Time: " + ts;
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
                                var error1 = "Line 148 - Login - Time: " + ts;
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
                        var error1 = "Line 179 - Login - Time: " + ts;
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
        }, 600)
    }
}

function showPassBox(userEmail) {
    document.getElementById("username").value = userEmail;
    setTimeout(function (args) {
        //document.getElementById("loggingin").style.display = "none";
        document.getElementById("loggingin2").style.display = "block";
        document.getElementById("passwordReminder").innerHTML = "We sent your password to " + userEmail + " when you first signed up.<br/>Click here to reset it.";
    }, 1500)
    oldUserEmail = userEmail;
}

function loginOldUser() {
    userEmail = oldUserEmail;
    var passy = document.getElementById("password").value;
    Parse.User.logIn(userEmail, passy, {
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
                    var oldUser = true;
                    loginComplete(oldUser, userFirstName)
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
                        var error1 = "Line 245 - Login - Time: " + ts;
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
                var error1 = "Line 276 - Login - Time: " + ts;
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
}

////////////////////////

function loginComplete(oldUser, userFirstName) {
    if (oldUser == true) {
        document.getElementById("loggingin2").style.display = "none";
        setTimeout(function (args) { beginMainPageLoad() }, 100)
    } else {
        setTimeout(function (args) { beginMainPageLoad() }, 100)
    }
}

////////////////////////

function beginMainPageLoad() {
    setTimeout(function (args) {
        window.location = '#Advertiser';
        navigating = true;
        advertiserPage1Load();
        checkAlerts()
    }, 300)
}

function logOut() {
    document.getElementById("logoutControl").style.display = "block";
    setTimeout(function (args) {
        document.getElementById("logOutNum").textContent = "4 seconds";
        setTimeout(function (args) {
            document.getElementById("logOutNum").textContent = "3 seconds";
            setTimeout(function (args) {
                document.getElementById("logOutNum").textContent = "2 seconds";
                setTimeout(function (args) {
                    document.getElementById("logOutNum").textContent = "1 second";
                    setTimeout(function (args) {
                        window.location = "https://pletho.com/index.php?nav=loggedOut";
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}

function fullLogout() {
    var sT1 = "sessionToken=;"
    document.cookie = sT1
    document.getElementById("fullLogout").textContent = ""
}

function typer() {
    typer0 = true;
}