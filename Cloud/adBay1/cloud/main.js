Parse.Cloud.afterSave(Parse.User, function (request) {
    Parse.Cloud.useMasterKey();
    query = new Parse.Query(Parse.Role);
    query.equalTo("name", "Users");
    query.first({
        success: function (object) {
            object.relation("users").add(request.user);
            object.save();
        },
        error: function (error) {
            throw "Got an error " + error.code + " : " + error.message;
        }
    });
});

Parse.Cloud.afterSave("Disputes", function (request) {
    Parse.Cloud.useMasterKey();
    var orderId = request.object.attributes.orderId
    var comment = request.object.attributes.comment
    var name = request.object.attributes.userName
    var type = request.object.attributes.userType
    var time = request.object.createdAt
    query = new Parse.Query("Orders");
    query.equalTo("objectId", orderId);
    query.first({
        success: function (order) {
			var owner = order.attributes.owner
			var purchaser = order.attributes.purchaser
            order.set("message", name + ": " + comment);
            order.save();
			var Alert = Parse.Object.extend("Alerts");
			var addAlert = new Alert();
			var postACL = new Parse.ACL();
			postACL.setPublicReadAccess(false);
			postACL.setRoleReadAccess("Admins", true);
			postACL.setRoleWriteAccess("Admins", true);
			if(type == "advertiser") {
				postACL.setReadAccess(purchaser, true);
				postACL.setWriteAccess(purchaser, true);
			} else {
				postACL.setReadAccess(owner, true);
				postACL.setWriteAccess(owner, true);
			}
			addAlert.setACL(postACL);
			if(type == "advertiser") {
				addAlert.set("forUser", owner);
			} else {
				addAlert.set("forUser", purchaser);
				}
			addAlert.set("status", "online");
			addAlert.set("toPush", "yes");
			addAlert.set("campaign", orderId);
			addAlert.set("subject", "A new dispute comment has arrived.");
			if(type == "advertiser") {
				addAlert.set("body", "The Advertiser has left a new comment on the disputed campaign.");
			} else {
				addAlert.set("body", "The Publisher has left a new comment on the disputed campaign.");
			}
			addAlert.set("page", "disputed2");
			addAlert.save(null, {
				success: function (object1) {
				},
                    error: function (error) {
                        throw "Got an error3 " + error.code + " : " + error.message;
                    }
			})
        },
        error: function (error) {
            throw "Got an error " + error.code + " : " + error.message;
        }
    });
});

Parse.Cloud.afterSave("Orders", function (request) {
    Parse.Cloud.useMasterKey();
    var purchaser = request.object.attributes.purchaser;
    var owner = request.object.attributes.owner;
    var status = request.object.attributes.status;
    if (!request.object.attributes.adType) {
        if (request.object.attributes.status == "pending") {
            var Tracker = Parse.Object.extend("Tracker");
            var addTracker = new Tracker();
            var orderId = request.object.id;
            addTracker.set("orderId", orderId);
            addTracker.set("status", "pending");
            addTracker.save(null, {
                success: function (object) {
                    query = new Parse.Query(Parse.User);
                    query.equalTo("objectId", owner);
                    query.first({
                        success: function (user) {
                            var userAT = user.attributes.stripePublishableKey;
                            var productToModify = request.object.attributes.productId;
                            query = new Parse.Query("Products");
                            query.equalTo("objectId", productToModify);
                            query.first({
                                success: function (product) {
                                    var adType = product.attributes.adType;
                                    var adDescription = product.attributes.description;
                                    var adPublisher = product.attributes.publisher;
                                    var adCost = product.attributes.price;
                                    var city = product.attributes.city;
                                    var currency = product.attributes.currency;
                                    var currentQuantity = product.attributes.quantity;
                                    var stock = product.attributes.unlimitedStock;
                                    if (stock == 0) {
                                        product.set("quantity", (currentQuantity - 1));
                                    }
                                    product.save();
                                    query = new Parse.Query("Orders");
                                    query.equalTo("objectId", orderId);
                                    query.first({
                                        success: function (order) {
                                            order.set("adType", adType)
                                            order.set("adDescription", adDescription)
                                            order.set("adPublisher", adPublisher)
                                            order.set("currency", currency)
                                            order.set("city", city)
                                            order.set("stripePublishableKey", userAT)
                                            order.save();
                                            query = new Parse.Query("Tracker");
                                            query.equalTo("orderId", orderId);
                                            query.first({
                                                success: function (tracker) {
                                                    tracker.set("adPublisher", adPublisher);
                                                    tracker.set("purchaser", purchaser);
                                                    tracker.set("owner", owner);
                                                    tracker.set("cost", adCost);
                                                    tracker.save();
                                                },
                                                error: function (error) {
                                                    throw "Got an error7 " + error.code + " : " + error.message;
                                                }
                                            });
                                        },
                                        error: function (error) {
                                            throw "Got an error6 " + error.code + " : " + error.message;
                                        }
                                    });
                                },
                                error: function (error) {
                                    throw "Got an error5 " + error.code + " : " + error.message;
                                }
                            });
                        },
                        error: function (error) {
                            throw "Got an error4 " + error.code + " : " + error.message;
                        }
                    })
                },
                error: function (error) {
                    throw "Got an error1 " + error.code + " : " + error.message;
                }
            });
        }
    } else if (request.object.attributes.status == "complete") {
        query = new Parse.Query(Parse.Role);
        query.equalTo("name", request.object.id)
        query.first({
            success: function (role) {
                role.destroy()
                query = new Parse.Query("Disputes");
                query.equalTo("orderId", request.object.id)
                query.each(function (dispute) {
                    dispute.destroy()
                })
            },
            error: function (error) {
                throw "Got an error61 " + error.code + " : " + error.message;
            }
        });
    }
});

Parse.Cloud.afterSave("Tracker", function (request) {
    Parse.Cloud.useMasterKey();
    var orderId = request.object.attributes.orderId;
    var purchaser = request.object.attributes.purchaser;
    var owner = request.object.attributes.owner;
    var status = request.object.attributes.status;
	try { var adPublisher = request.object.attributes.adPublisher;} catch (e) { var adPublisher = "" }
    try { var stripeOid = request.object.attributes.stripeOid } catch (e) { var stripeOid = "" }
    try { var pId = request.object.attributes.pId } catch (e) { var pId = "" }
    if (status == "pending" && !!owner && !!purchaser) {
        var Alert = Parse.Object.extend("Alerts");
        var addAlert = new Alert();
        var postACL = new Parse.ACL();
        postACL.setPublicReadAccess(false);
        postACL.setRoleReadAccess("Admins", true);
        postACL.setRoleWriteAccess("Admins", true);
        postACL.setReadAccess(purchaser, true);
        postACL.setWriteAccess(purchaser, true);
        addAlert.setACL(postACL);
        addAlert.set("forUser", purchaser);
        addAlert.set("status", "online");
        addAlert.set("toPush", "yes");
        addAlert.set("campaign", orderId);
        addAlert.set("subject", "Your campaign is " + status + " (" + adPublisher + ").");
        addAlert.set("body", "The Publisher has been notified and will update your campaign soon.");
        addAlert.set("page", status);
        addAlert.save(null, {
            success: function (object1) {
                var Alert2 = Parse.Object.extend("Alerts");
                var addAlert2 = new Alert2();
                var postACL2 = new Parse.ACL();
                postACL2.setPublicReadAccess(false);
                postACL2.setRoleReadAccess("Admins", true);
                postACL2.setRoleWriteAccess("Admins", true);
                postACL2.setReadAccess(owner, true);
                postACL2.setWriteAccess(owner, true);
                addAlert2.setACL(postACL2);
                addAlert2.set("forUser", owner);
                addAlert2.set("status", "online");
                addAlert2.set("toPush", "yes");
                addAlert2.set("campaign", orderId);
                addAlert2.set("subject", "You have a new " + status + " campaign.");
                addAlert2.set("body", "The Advertiser is waiting for your response.");
                addAlert2.set("page", status);
                addAlert2.save(null, {
                    success: function (object2) {
                        query = new Parse.Query("Orders");
                        query.equalTo("objectId", orderId);
                        query.first({
                            success: function (order) {
                                order.set("secondPass", "complete")
                                order.set("status", "pending")
                                order.save();
                            },
                            error: function (error) {
                                throw "Got an error5 " + error.code + " : " + error.message;
                            }
                        });
                    },
                    error: function (error) {
                        throw "Got an error3 " + error.code + " : " + error.message;
                    }
                });
            },
            error: function (error) {
                throw "Got an error2 " + error.code + " : " + error.message;
            }
        });
    } else if (status == "queued" && !!owner && !!purchaser) {
        var Alert = Parse.Object.extend("Alerts");
        var addAlert = new Alert();
        var postACL = new Parse.ACL();
        postACL.setPublicReadAccess(false);
        postACL.setRoleReadAccess("Admins", true);
        postACL.setRoleWriteAccess("Admins", true);
        postACL.setReadAccess(purchaser, true);
        postACL.setWriteAccess(purchaser, true);
        addAlert.setACL(postACL);
        addAlert.set("forUser", purchaser);
        addAlert.set("status", "online");
        addAlert.set("toPush", "yes");
        addAlert.set("campaign", orderId);
        addAlert.set("subject", "Congratulations! The Publisher (" + adPublisher + ") has approved your campaign");
        addAlert.set("body", "Please review the date and time issued by the Publisher and make your payment today, to complete your booking.");
        addAlert.set("page", status);
        addAlert.save(null, {
            success: function (object1) {
                query = new Parse.Query("Orders");
                query.equalTo("objectId", orderId);
                query.first({
                    success: function (order) {
                        order.set("status", "queued")
                        order.save();
                    },
                    error: function (error) {
                        throw "Got an error5 " + error.code + " : " + error.message;
                    }
                });
            },
            error: function (error) {
                throw "Got an error2 " + error.code + " : " + error.message;
            }
        });
    } else if (status == "live" && !!owner && !!purchaser) {
        var Alert = Parse.Object.extend("Alerts");
        var addAlert = new Alert();
        var postACL = new Parse.ACL();
        postACL.setPublicReadAccess(false);
        postACL.setRoleReadAccess("Admins", true);
        postACL.setRoleWriteAccess("Admins", true);
        postACL.setReadAccess(purchaser, true);
        postACL.setWriteAccess(purchaser, true);
        addAlert.setACL(postACL);
        addAlert.set("forUser", purchaser);
        addAlert.set("status", "online");
        addAlert.set("toPush", "yes");
        addAlert.set("campaign", orderId);
        addAlert.set("subject", "Your campaign is now " + status + ".");
        addAlert.set("body", "The Publisher has been notified and will air your advert on the date and time issued.");
        addAlert.set("page", status);
        addAlert.save(null, {
            success: function (object1) {
                var Alert2 = Parse.Object.extend("Alerts");
                var addAlert2 = new Alert2();
                var postACL2 = new Parse.ACL();
                postACL2.setPublicReadAccess(false);
                postACL2.setRoleReadAccess("Admins", true);
                postACL2.setRoleWriteAccess("Admins", true);
                postACL2.setReadAccess(owner, true);
                postACL2.setWriteAccess(owner, true);
                addAlert2.setACL(postACL2);
                addAlert2.set("forUser", owner);
                addAlert2.set("status", "online");
                addAlert2.set("toPush", "yes");
                addAlert2.set("campaign", orderId);
                addAlert2.set("subject", "You have a new " + status + " campaign.");
                addAlert2.set("body", "The Advertiser has made payment. Please complete this campaign by airing the advert at the correct time and date.");
                addAlert2.set("page", status);
                addAlert2.save(null, {
                    success: function (object2) {
                        query = new Parse.Query("Orders");
                        query.equalTo("objectId", orderId);
                        query.first({
                            success: function (order) {
                                order.set("status", "live")
                                order.set("stripeOid", stripeOid)
                                order.set("pId", pId)
                                order.save();
                            },
                            error: function (error) {
                                throw "Got an error5 " + error.code + " : " + error.message;
                            }
                        });
                    },
                    error: function (error) {
                        throw "Got an error3 " + error.code + " : " + error.message;
                    }
                });
            },
            error: function (error) {
                throw "Got an error2 " + error.code + " : " + error.message;
            }
        });
    } else if (status == "disputed" && !!owner && !!purchaser) {
        var Alert = Parse.Object.extend("Alerts");
        var addAlert = new Alert();
        var postACL = new Parse.ACL();
        postACL.setPublicReadAccess(false);
        postACL.setRoleReadAccess("Admins", true);
        postACL.setRoleWriteAccess("Admins", true);
        postACL.setReadAccess(purchaser, true);
        postACL.setWriteAccess(purchaser, true);
        addAlert.setACL(postACL);
        addAlert.set("forUser", purchaser);
        addAlert.set("status", "online");
        addAlert.set("toPush", "yes");
        addAlert.set("campaign", orderId);
        addAlert.set("subject", "Your campaign is being " + status + ".");
        addAlert.set("body", "A campaign is now in a disputed state. Please use the comments system to communicate with the Publisher to resolve this dispute.");
        addAlert.set("page", status);
        addAlert.save(null, {
            success: function (object1) {
                var Alert2 = Parse.Object.extend("Alerts");
                var addAlert2 = new Alert2();
                var postACL2 = new Parse.ACL();
                postACL2.setPublicReadAccess(false);
                postACL2.setRoleReadAccess("Admins", true);
                postACL2.setRoleWriteAccess("Admins", true);
                postACL2.setReadAccess(owner, true);
                postACL2.setWriteAccess(owner, true);
                addAlert2.setACL(postACL2);
                addAlert2.set("forUser", owner);
                addAlert2.set("status", "online");
                addAlert2.set("toPush", "yes");
                addAlert2.set("campaign", orderId);
                addAlert2.set("subject", "A campaign is being " + status + ".");
                addAlert2.set("body", "A campaign is now in a disputed state. Please use the comments system to communicate with the Advertiser to resolve this dispute.");
                addAlert2.set("page", status);
                addAlert2.save(null, {
                    success: function (object2) {
                        query = new Parse.Query("Orders");
                        query.equalTo("objectId", orderId);
                        query.first({
                            success: function (order) {
                                order.set("status", "disputed")
                                order.save();
                            },
                            error: function (error) {
                                throw "Got an error5 " + error.code + " : " + error.message;
                            }
                        });
                    },
                    error: function (error) {
                        throw "Got an error3 " + error.code + " : " + error.message;
                    }
                });
            },
            error: function (error) {
                throw "Got an error2 " + error.code + " : " + error.message;
            }
        });
    } else if (status == "complete" && !!owner && !!purchaser) {
        var Alert = Parse.Object.extend("Alerts");
        var addAlert = new Alert();
        var postACL = new Parse.ACL();
        postACL.setPublicReadAccess(false);
        postACL.setRoleReadAccess("Admins", true);
        postACL.setRoleWriteAccess("Admins", true);
        postACL.setReadAccess(purchaser, true);
        postACL.setWriteAccess(purchaser, true);
        addAlert.setACL(postACL);
        addAlert.set("forUser", purchaser);
        addAlert.set("status", "online");
        addAlert.set("toPush", "yes");
        addAlert.set("campaign", orderId);
        addAlert.set("subject", "Your campaign is now " + status + ".");
        addAlert.set("body", "Thank you for using Pletho.");
        addAlert.set("page", status);
        addAlert.save(null, {
            success: function (object1) {
                var Alert2 = Parse.Object.extend("Alerts");
                var addAlert2 = new Alert2();
                var postACL2 = new Parse.ACL();
                postACL2.setPublicReadAccess(false);
                postACL2.setRoleReadAccess("Admins", true);
                postACL2.setRoleWriteAccess("Admins", true);
                postACL2.setReadAccess(owner, true);
                postACL2.setWriteAccess(owner, true);
                addAlert2.setACL(postACL2);
                addAlert2.set("forUser", owner);
                addAlert2.set("status", "online");
                addAlert2.set("toPush", "yes");
                addAlert2.set("campaign", orderId);
                addAlert2.set("subject", "A campaign is now " + status + ".");
                addAlert2.set("body", "Thank you for using Pletho.");
                addAlert2.set("page", status);
                addAlert2.save(null, {
                    success: function (object2) {
                        query = new Parse.Query("Orders");
                        query.equalTo("objectId", orderId);
                        query.first({
                            success: function (order) {
                                order.set("status", "complete")
                                order.save();
                            },
                            error: function (error) {
                                throw "Got an error5 " + error.code + " : " + error.message;
                            }
                        });
                    },
                    error: function (error) {
                        throw "Got an error3 " + error.code + " : " + error.message;
                    }
                });
            },
            error: function (error) {
                throw "Got an error2 " + error.code + " : " + error.message;
            }
        });
    } else if (status == "denied" && !!owner && !!purchaser) {
        var Alert = Parse.Object.extend("Alerts");
        var addAlert = new Alert();
        var postACL = new Parse.ACL();
        postACL.setPublicReadAccess(false);
        postACL.setRoleReadAccess("Admins", true);
        postACL.setRoleWriteAccess("Admins", true);
        postACL.setReadAccess(purchaser, true);
        postACL.setWriteAccess(purchaser, true);
        addAlert.setACL(postACL);
        addAlert.set("forUser", purchaser);
        addAlert.set("status", "online");
        addAlert.set("toPush", "yes");
        addAlert.set("campaign", orderId);
        addAlert.set("subject", "Your campaign has been " + status + ".");
        addAlert.set("body", "The Publisher has denied your campaign. Please visit your pending campaigns to see why it has not been approved.");
        addAlert.set("page", status);
        addAlert.save(null, {
            success: function (object1) {
                query = new Parse.Query("Orders");
                query.equalTo("objectId", orderId);
                query.first({
                    success: function (order) {
                        order.set("status", "denied")
                        order.save();
                    },
                    error: function (error) {
                        throw "Got an error5 " + error.code + " : " + error.message;
                    }
                });
            },
            error: function (error) {
                throw "Got an error2 " + error.code + " : " + error.message;
            }
        });
    } else if (status == "archived" && !!owner && !!purchaser) {
        var Alert = Parse.Object.extend("Alerts");
        var addAlert = new Alert();
        var postACL = new Parse.ACL();
        postACL.setPublicReadAccess(false);
        postACL.setRoleReadAccess("Admins", true);
        postACL.setRoleWriteAccess("Admins", true);
        postACL.setReadAccess(purchaser, true);
        postACL.setWriteAccess(purchaser, true);
        addAlert.setACL(postACL);
        addAlert.set("forUser", purchaser);
        addAlert.set("status", "online");
        addAlert.set("toPush", "yes");
        addAlert.set("campaign", orderId);
        addAlert.set("subject", "Your campaign has been " + status + ".");
        addAlert.set("body", "Thank you for using Pletho.");
        addAlert.set("page", status);
        addAlert.save(null, {
            success: function (object1) {
                var Alert2 = Parse.Object.extend("Alerts");
                var addAlert2 = new Alert2();
                var postACL2 = new Parse.ACL();
                postACL2.setPublicReadAccess(false);
                postACL2.setRoleReadAccess("Admins", true);
                postACL2.setRoleWriteAccess("Admins", true);
                postACL2.setReadAccess(owner, true);
                postACL2.setWriteAccess(owner, true);
                addAlert2.setACL(postACL2);
                addAlert2.set("forUser", owner);
                addAlert2.set("status", "online");
                addAlert2.set("toPush", "yes");
                addAlert2.set("campaign", orderId);
                addAlert2.set("subject", "A campaign has been " + status + ".");
                addAlert2.set("body", "The Advertiser has cancelled their campaign.");
                addAlert2.set("page", status);
                addAlert2.save(null, {
                    success: function (object2) {
                        query = new Parse.Query("Orders");
                        query.equalTo("objectId", orderId);
                        query.first({
                            success: function (order) {
                                order.set("status", "archived")
                                order.save();
                            },
                            error: function (error) {
                                throw "Got an error5 " + error.code + " : " + error.message;
                            }
                        });
                    },
                    error: function (error) {
                        throw "Got an error3 " + error.code + " : " + error.message;
                    }
                });
            },
            error: function (error) {
                throw "Got an error2 " + error.code + " : " + error.message;
            }
        });
    }
});

Parse.Cloud.afterSave("Alerts", function (request) {
    Parse.Cloud.useMasterKey();
    var alertId = request.object.id;
    var userToAlert = request.object.attributes.forUser;
    var pageToAlert = request.object.attributes.page;
    var toPush = request.object.attributes.toPush;
    var campaign = request.object.attributes.campaign;
    if (toPush == "yes") {
        var pTa = [];
        pTa.push(pageToAlert + "|" + campaign)
        query = new Parse.Query(Parse.User);
        query.equalTo("objectId", userToAlert);
        query.first({
            success: function (user) {
                var email = user.attributes.email
                user.addUnique("alert", pTa);
                user.save();
                var alerts = Parse.Object.extend("Alerts");
                var alerty = new Parse.Query(alerts);
                alerty.equalTo("objectId", alertId);
                alerty.first({
                    success: function (result) {
                        result.set("email", email);
                        result.set("toPush", "no");
                        result.save();
                    },
                    error: function (error) {
                        throw "Got an error 2 " + error.code + " : " + error.message;
                    }
                })
            },
            error: function (error) {
                throw "Got an error 1 " + error.code + " : " + error.message;
            }
        });
    }
});

Parse.Cloud.define("pendingApprove", function (request, response) {
    Parse.Cloud.useMasterKey();
    var orderId = request.params.orderId;
    var status = request.params.status;
    var cost = request.params.cost;
    var actualDate = request.params.actualDate;
    var actualTime = request.params.actualTime;
    if (!request.params.message) { var message = "Empty."; } else
    { var message = request.params.message; }
    query = new Parse.Query("Tracker");
    query.equalTo("orderId", orderId);
    query.first({
        success: function (results) {
            var trackedStatus = results.attributes.status;
            var trackedCost = results.attributes.cost;
            if (cost == trackedCost && status == trackedStatus) {
                /////////
                query = new Parse.Query("Orders");
                query.equalTo("objectId", orderId);
                query.first({
                    success: function (order) {
                        order.set("message", message)
                        order.set("actualDate", actualDate)
                        order.set("actualTime", actualTime)
                        order.save();
                        query = new Parse.Query("Tracker");
                        query.equalTo("orderId", orderId);
                        query.first({
                            success: function (tracker) {
                                tracker.set("status", "queued")
                                tracker.save();
                                response.success("Sorted.");
                            },
                            error: function (error) {
                                throw "Got an error " + error.code + " : " + error.message;
                            }
                        })
                    },
                    error: function (error) {
                        throw "Got an error " + error.code + " : " + error.message;
                    }
                });
            } else {
                ///Tracker and Order details do not match - flag this order
                throw "Sorry, there is a problem with this order. Please contact support. ";
            }
        },
        error: function (error) {
            throw "Got an error " + error.code + " : " + error.message;
        }
    });
});

Parse.Cloud.define("pendingDeny", function (request, response) {
    Parse.Cloud.useMasterKey();
    var orderId = request.params.orderId;
    var status = request.params.status;
    var cost = request.params.cost;
    if (!request.params.message) { var message = "Empty."; } else
    { var message = request.params.message; }
    query = new Parse.Query("Tracker");
    query.equalTo("orderId", orderId);
    query.first({
        success: function (results) {
            var trackedStatus = results.attributes.status;
            var trackedCost = results.attributes.cost;
            if (cost == trackedCost && status == trackedStatus) {
                /////////
                query = new Parse.Query("Orders");
                query.equalTo("objectId", orderId);
                query.first({
                    success: function (order) {
                        var productToModify = order.attributes.productId;
                        order.set("message", message)
                        order.save();
                        query = new Parse.Query("Tracker");
                        query.equalTo("orderId", orderId);
                        query.first({
                            success: function (tracker) {
                                tracker.set("status", "denied")
                                tracker.save();
                                query = new Parse.Query("Products");
                                query.equalTo("objectId", productToModify);
                                query.first({
                                    success: function (product) {
                                        var currentQuantity = product.attributes.quantity;
                                        var stock = product.attributes.unlimitedStock;
                                        if (stock == 0) {
                                            product.set("quantity", (currentQuantity + 1));
                                        }
                                        product.save();
                                        response.success("Sorted.");
                                    },
                                    error: function (error) {
                                        throw "Got an error " + error.code + " : " + error.message;
                                    }
                                });
                            },
                            error: function (error) {
                                throw "Got an error " + error.code + " : " + error.message;
                            }
                        })
                    },
                    error: function (error) {
                        throw "Got an error " + error.code + " : " + error.message;
                    }
                });
            } else {
                ///Tracker and Order details do not match - flag this order
                throw "Sorry, there is a problem with this order. Please contact support. ";
            }
        },
        error: function (error) {
            throw "Got an error " + error.code + " : " + error.message;
        }
    });
});

Parse.Cloud.define("pendingHide", function (request, response) {
    Parse.Cloud.useMasterKey();
    var orderId = request.params.orderId;
    var status = request.params.status;
    var cost = request.params.cost;
    if (!request.params.message) { var message = "Empty."; } else
    { var message = request.params.message; }
    query = new Parse.Query("Tracker");
    query.equalTo("orderId", orderId);
    query.first({
        success: function (results) {
            var trackedStatus = results.attributes.status;
            var trackedCost = results.attributes.cost;
            if (cost == trackedCost && status == trackedStatus) {
                /////////
                query = new Parse.Query("Orders");
                query.equalTo("objectId", orderId);
                query.first({
                    success: function (order) {
                        var productToModify = order.attributes.productId;
                        order.set("message", message)
                        order.save();
                        query = new Parse.Query("Tracker");
                        query.equalTo("orderId", orderId);
                        query.first({
                            success: function (tracker) {
                                tracker.set("status", "archived")
                                tracker.save();
                                query = new Parse.Query("Products");
                                query.equalTo("objectId", productToModify);
                                query.first({
                                    success: function (product) {
                                        var currentQuantity = product.attributes.quantity;
                                        var stock = product.attributes.unlimitedStock;
                                        if (stock == 0) {
                                            product.set("quantity", (currentQuantity + 1));
                                        }
                                        product.save();
                                        response.success("Sorted.");
                                    },
                                    error: function (error) {
                                        throw "Got an error " + error.code + " : " + error.message;
                                    }
                                });
                            },
                            error: function (error) {
                                throw "Got an error " + error.code + " : " + error.message;
                            }
                        });
                    },
                    error: function (error) {
                        throw "Got an error " + error.code + " : " + error.message;
                    }
                });
            } else {
                ///Tracker and Order details do not match - flag this order
                throw "Sorry, there is a problem with this order. Please contact support.";
            }
        },
        error: function (error) {
            throw "Got an error " + error.code + " : " + error.message;
        }
    });
});

Parse.Cloud.define("incomingFunctions", function (request, response) {
    Parse.Cloud.useMasterKey();
    var orderId = request.params.orderId;
    var status = request.params.status;
    var cost = request.params.cost;
    var token = request.params.token;
    if (!request.params.message) { var message = "Empty."; } else
    { var message = request.params.message; }
    query = new Parse.Query("Tracker");
    query.equalTo("orderId", orderId);
    query.first({
        success: function (results) {
            var trackedStatus = results.attributes.status;
            var trackedCost = results.attributes.cost;
            if (cost == trackedCost && status == trackedStatus) {
                /////////
                query = new Parse.Query("Orders");
                query.equalTo("objectId", orderId);
                query.first({
                    success: function (order) {
                        var ownerId = order.attributes.owner;
                        var currency = order.attributes.currency;
						if(currency.length > 3) {
							currency = currency.substring(0, currency.length - 4);
						} 
                        query = new Parse.Query(Parse.User);
                        query.equalTo("objectId", ownerId);
                        query.first({
                            success: function (user) {
                                var userAT = user.attributes.stripeAccessToken;
                                var Stripe = require("stripe");
                                var fee = Math.round(((parseInt(trackedCost) / 100) * 8))
                                Stripe.initialize(userAT);
                                Stripe.Charges.create({
                                    amount: trackedCost,
                                    currency: currency,
                                    application_fee: fee,
                                    card: token
                                }, {
                                    success: function (httpResponse) {
                                        var orderCompleteId = httpResponse.id
                                        results.set("pId", token)
                                        results.set("stripeOid", orderCompleteId)
                                        results.set("status", "live")
                                        results.save();
                                        response.success("Sorted.");                        
                                    },
                                    error: function (error) {
                                        throw "Got an error " + error.code + " : " + error.message;
                                    }
                                });
                            },
                            error: function (error) {
                                throw "Got an error " + error.code + " : " + error.message;
                            }
                        });
                    },
                    error: function (error) {
                        throw "Got an error " + error.code + " : " + error.message;
                    }
                })
            } else {
                throw "Tracker does not match";
            }
        },
        error: function (error) {
            throw "Got an error " + error.code + " : " + error.message;
        }
    })
})

Parse.Cloud.define("outgoingFunctions", function (request, response) {
    Parse.Cloud.useMasterKey();
    var orderId = request.params.orderId;
    var status = request.params.status;
    var cost = request.params.cost;
    if (!request.params.message) { var message = "Empty."; } else
    { var message = request.params.message; }
    query = new Parse.Query("Tracker");
    query.equalTo("orderId", orderId);
    query.first({
        success: function (results) {
            var trackedStatus = results.attributes.status;
            var trackedCost = results.attributes.cost;
            if (cost == trackedCost && status == trackedStatus) {
                results.set("status", "complete")
                results.save();
                response.success("Sorted.");
            } else {
                ///Tracker and Order details do not match - flag this order
                throw "Sorry, there is a problem with this order. Please contact support. ";
            }
        },
        error: function (error) {
            throw "Got an error1 " + error.code + " : " + error.message;
        }
    });
});

Parse.Cloud.define("updateUserWithConnectDetails", function (request, response) {
    Parse.Cloud.useMasterKey();
    var code = request.params.code;
    var userId = request.params.userId;
    Parse.Cloud.httpRequest({
        method: "POST",
        url: "https://connect.stripe.com/oauth/token",
        body: {
            "client_secret": '',
            "code": code,
            "grant_type": 'authorization_code'
        },
        success: function (httpResponse) {
            var stripePublishableKey = httpResponse.data.stripe_publishable_key;
            var stripeUserId = httpResponse.data.stripe_user_id;
            var stripeAccessToken = httpResponse.data.access_token;
            query = new Parse.Query(Parse.User);
            query.equalTo("objectId", userId);
            query.first({
                success: function (user) {
                    user.set("stripePublishableKey", stripePublishableKey);
                    user.set("stripeUserId", stripeUserId);
                    user.set("stripeAccessToken", stripeAccessToken);
                    user.save();
                    query = new Parse.Query("Publishers");
                    query.equalTo("PublisherID", userId);
                    query.first({
                        success: function (publisher) {
                            publisher.set("status", "authorised");
                            publisher.save();
                            query = new Parse.Query(Parse.Role);
                            query.equalTo("name", "Publishers");
                            query.first({
                                success: function (object) {
                                    var user1 = new Parse.User();
                                    user1.id = userId;
                                    object.relation("users").add(user1);
                                    object.save();
                                    Parse.Cloud.httpRequest({
                                        method: "GET",
                                        url: "https://" + stripeAccessToken + ":@api.stripe.com/v1/account",
                                        body: {
                                        },
                                        success: function (httpResponse) {
                                            var pubCur = httpResponse.data.default_currency;
                                            var pubCou = httpResponse.data.country;
                                            var pubNam = httpResponse.data.display_name;
                                            var verEma = httpResponse.data.email;
                                            query = new Parse.Query(Parse.User);
                                            query.equalTo("objectId", userId);
                                            query.first({
                                                success: function (user) {
                                                    user.set("stripeCurrency", pubCur);
                                                    user.set("stripeCountry", pubCou);
                                                    user.set("stripeName", pubNam);
                                                    user.set("stripeEmail", verEma);
                                                    user.save();
                                                    response.success("Sorted.");
                                                },
                                                error: function (error) {
                                                    throw "Got an error 64 " + error.code + " : " + error.message;
                                                }
                                            });
                                        },
                                        error: function (httpResponse) {
                                            console.error(httpResponse);
                                            response.error(httpResponse.status);
                                            throw "Got an error44 " + httpResponse.status;
                                        }
                                    });
                                },
                                error: function (error) {
                                    throw "Got an error 21 " + error.code + " : " + error.message;
                                }
                            });
                        },
                        error: function (error) {
                            throw "Got an error 78 " + error.code + " : " + error.message;
                        }
                    });
                },
                error: function (httpResponse) {
                    console.error(httpResponse);
                    response.error(httpResponse.status);
                    throw "Got an error40 " + httpResponse.status;
                }
            });
        },
        error: function (httpResponse) {
            console.error(httpResponse);
            response.error(httpResponse.status);
            throw "Got an error919 " + httpResponse.status;
        }
    })
})

Parse.Cloud.define("orderDisputedFunc", function (request, response) {
    Parse.Cloud.useMasterKey();
    var orderId = request.params.orderId;
    var status = request.params.status;
    var cost = request.params.cost;
    if (!request.params.message) { var message = "Empty."; } else
    { var message = request.params.message; }
    query = new Parse.Query("Tracker");
    query.equalTo("orderId", orderId);
    query.first({
        success: function (results) {
            var trackedStatus = results.attributes.status;
            var trackedCost = results.attributes.cost;
            if (cost == trackedCost && status == trackedStatus) {
                var roleACL = new Parse.ACL();
                roleACL.setPublicReadAccess(true);
                var role = new Parse.Role(orderId, roleACL);
                role.save();
                /////////
                query = new Parse.Query("Orders");
                query.equalTo("objectId", orderId);
                query.first({
                    success: function (order) {
                        var publisher = order.attributes.owner
                        var advertiser = order.attributes.purchaser
                        order.set("message", message)
                        order.save();
                        query = new Parse.Query("Tracker");
                        query.equalTo("orderId", orderId);
                        query.first({
                            success: function (tracker) {
                                tracker.set("status", "disputed")
                                tracker.save();
                                query = new Parse.Query(Parse.Role);
                                query.equalTo("name", orderId);
                                query.first({
                                    success: function (object) {
                                        var user1 = new Parse.User();
                                        user1.id = advertiser;
                                        object.relation("users").add(user1);
                                        var user2 = new Parse.User();
                                        user2.id = publisher;
                                        object.relation("users").add(user2);
                                        object.save();
                                        response.success("Sorted.");
                                    },
                                    error: function (error) {
                                        throw "Got an error " + error.code + " : " + error.message;
                                    }
                                });
                            }
                        })
                    },
                    error: function (error) {
                        throw "Got an error2 " + error.code + " : " + error.message;
                    }
                });

            } else {
                ///Tracker and Order details do not match - flag this order
                throw "Sorry, there is a problem with this order. Please contact support. ";
            }
        },
        error: function (error) {
            throw "Got an error1 " + error.code + " : " + error.message;
        }
    });
});

Parse.Cloud.define("publisherApprovalProcess1", function (request, response) {
    Parse.Cloud.useMasterKey();
    var PublisherID = request.params.PublisherID;
    var jobTitles = request.params.jobTitles;
    var jobSummaries = request.params.jobSummaries;
    var currentJob = request.params.currentJob;
    var workCompanies = request.params.workCompanies;
    var phoneNumbers = request.params.phoneNumbers;
    var email = request.params.email;
    var Publisher = Parse.Object.extend("Publishers");
    var incPub = new Publisher();
    incPub.set("PublisherID", PublisherID);
    incPub.set("jobTitles", jobTitles);
    incPub.set("jobSummaries", jobSummaries);
    incPub.set("currentJob", currentJob);
    incPub.set("workCompanies", workCompanies);
    incPub.set("phoneNumbers", phoneNumbers);
    incPub.set("email", email);
    incPub.set("status", "pendingApproval");
    incPub.save(null, {
        success: function (object) {
            response.success("Sorted.");
        },
        error: function (error) {
            throw "Got an error " + error.code + " : " + error.message;
        }
    });
})

Parse.Cloud.define("publisherApprovalCheck", function (request, response) {
    Parse.Cloud.useMasterKey();
    var PublisherID = request.params.PublisherID;
    query = new Parse.Query("Publishers");
    query.equalTo("PublisherID", PublisherID);
    query.first({
        success: function (results) {
            var status = results.attributes.status;
            response.success(status);
        },
        error: function (error) {
            throw "newPublisher";
        }
    })
})

Parse.Cloud.job("mailJob", function (request, status) {
    // Set up to modify user data
	var emailPart1 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> <html xmlns="http://www.w3.org/1999/xhtml"> <head> <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> <title>Pletho Email</title> </head> <body style="padding:0;margin:0;border:none;"> <div style="width:99%;height:auto;background-color:#424242;min-height:300px;padding-top:10px;"> <a href="https://pletho.com" target="_blank" style="border:none;"><div style="height:auto;width:100%;float:left;cursor:pointer;min-height:50px;text-align:center;"><img height="50px" width="auto" src="https://pletho.com/images/plethoLogo1.jpg"></img></div></a> <hr style="width:100%;float:left;" /> <div style="height:auto;width:100%;float:left;min-height:30px;font-size:16px;line-height:30px;color:lightgrey;text-align:center;font-family:Verdana, Geneva, sans-serif">'

var emailPart2 = '<hr style="width:100%;float:left;" /> <div style="height:auto;width:100%;float:left;min-height:30px;font-size:14px;line-height:30px;color:white;text-align:center;font-family:Verdana, Geneva, sans-serif">'

var emailPart3 = '<br/><br/><a href="https://pletho.com/#Campaigns" target="_blank" style="border:none;color:white;text-decoration:none;">Visit your campaigns section by clicking here</a>.<br/><br/></div> <div style="width:100%;float:left;background-color:black;height:auto;min-height:100px;text-align:center;color:#fbda55;line-height:40px;font-size:14px;font-family:Verdana, Geneva, sans-serif"> Tell your friends and family about Pletho <div style="float:left;width:100%;height:50px;text-align:center"> <a href="mailto:?subject=Check%20out%20Pletho:%20the%20advertising%20comparison%20platform&body=https%3A%2F%2Fpletho.com" target="_blank" style="border:none;"><img src="https://pletho.com/images/email/em1.png" style="max-width:18%;width:auto;cursor:pointer;" /></a> <a href="http://www.linkedin.com/shareArticle?mini=true&url=https://pletho.com&title=Pletho:%20the%20advertising%20comparison%20platform&summary=Pletho:%20the%20advertising%20comparison%20platform" target="_blank" style="border:none;"><img src="https://pletho.com/images/email/ln1.png" style="max-width:18%;width:auto;cursor:pointer;" /></a> <a href="https://www.facebook.com/sharer/sharer.php?u=https://pletho.com" target="_blank" style="border:none;"><img src="https://pletho.com/images/email/fb1.png" style="max-width:18%;width:auto;cursor:pointer;" /></a> <a href="http://twitter.com/home?status=Pletho:%20the%20advertising%20comparison%20platform%20https://pletho.com" target="_blank" style="border:none;"><img src="https://pletho.com/images/email/tw1.png" style="max-width:18%;width:auto;cursor:pointer;" /></a> <a href="https://plus.google.com/share?url=Check%20out%20Pletho:%20the%20advertising%20comparison%20platform%20https://pletho.com/?" target="_blank" style="border:none;"><img src="https://pletho.com/images/email/gg1.png" style="max-width:18%;width:auto;cursor:pointer;" /></a> </div> <div style="float:left;text-align:center;color:whitesmoke;width:100%;"><a href="https://pletho.com" target="_blank" style="border:none;color:white;text-decoration:none;">Pletho.com 2015</a> - <a href="https://pletho.com/terms.html" target="_blank" style="border:none;color:white;text-decoration:none;">Terms</a> - <a href="mailto:support@pletho.com" target="_blank" style="border:none;color:white;text-decoration:none;">Contact</a></div> </div> </body> </html>'
    var Mailgun = require('mailgun');
    Mailgun.initialize('*.mailgun.org', 'key-*');
    Parse.Cloud.useMasterKey();
    var to;
    var from = "support@pletho.com";
    var subject;
    var subject2;
	var id;
    var text;
    var text2;
    var status0;
    // Query for all users
    var query = new Parse.Query("Alerts");
    query.each(function (alert) {
        // Set and save the change
        to = alert.attributes.email;
        id = alert.attributes.campaign;
        subject = alert.attributes.subject + " ("+id+")";
        subject2 = alert.attributes.subject;
        text = alert.attributes.body;
		text2 = emailPart1 + subject2 + emailPart2 + text + emailPart3;
        status0 = alert.attributes.status;
        if (status0 == "online") {
            alert.set("status", "offline");
            Mailgun.sendEmail({
                to: to,
                from: from,
                subject: subject,
				html: text2,
                text: text
            })
        } else if (status0 == "offline") {
            alert.set("status", "forDeletion");
        }
        return alert.save();
    }).then(function () {
        // Set the job's success status
        status.success("Mailing complete.");
    }, function (error) {
        // Set the job's error status
        status.error("Uh oh, something went wrong.");
    });
});

Parse.Cloud.job("autoCompleteOldCampaigns", function (request, status) {
    Parse.Cloud.useMasterKey();
    query = new Parse.Query("Orders");
    query.equalTo("status", "live");
    query.each(function (order) {
        var actualDate = order.attributes.actualDate;
        var actualTime = order.attributes.actualTime;
        var orderDate = new Date(actualDate + " " + actualTime).getTime();
        var dateNow = new Date().getTime();
        var oD = orderDate + 604800000;
        if (oD < dateNow) {
            query2 = new Parse.Query("Tracker");
            query2.equalTo("orderId", order.id);
            query2.each(function (tracked) {
                tracked.set("status", "complete");
                tracked.save();
            })
            return order.save();
        }
    }).then(function () {
        // Set the job's success status
        status.success("Old campaigns completed.");
    }, function (error) {
        // Set the job's error status
        status.error("Uh oh, something went wrong.");
    });
});

Parse.Cloud.job("cleanOldAlerts", function (request, status) {
    Parse.Cloud.useMasterKey();
    query = new Parse.Query("Alerts");
    query.equalTo("status", "forDeletion");
    query.each(function (alert) {
        return alert.destroy()
    }).then(function () {
        // Set the job's success status
        status.success("Cleaned old alerts.");
    }, function (error) {
        // Set the job's error status
        status.error("Uh oh, something went wrong.");
    });
});

Parse.Cloud.job("cleanUnpaidCampaigns", function (request, status) {
    Parse.Cloud.useMasterKey();
    query = new Parse.Query("Orders");
    query.equalTo("status", "queued");
    query.each(function (order) {
        var actualDate = order.attributes.actualDate;
        var actualTime = order.attributes.actualTime;
        if (actualTime == "NA") actualTime = "23:00 PM";
        var orderDate = new Date(actualDate + " " + actualTime).getTime();
        var dateNow = new Date().getTime();
        var oD = orderDate + 1800000;
        if (oD < dateNow) {
            query2 = new Parse.Query("Tracker");
            query2.equalTo("orderId", order.id);
            query2.each(function (tracked) {
                tracked.set("status", "archived");
                tracked.save();
            })
            return order.save();
        }
    }).then(function () {
        // Set the job's success status
        status.success("Unpaid campaigns cleared.");
    }, function (error) {
        // Set the job's error status
        status.error("Uh oh, something went wrong.");
    });
});

Parse.Cloud.job("cleanDeniedCampaigns", function (request, status) {
    Parse.Cloud.useMasterKey();
    query = new Parse.Query("Orders");
    query.equalTo("status", "denied");
    query.each(function (order) {
        var actualDate = order.attributes.preferredDate;
        var actualTime = order.attributes.preferredTime;
        var orderDate = new Date(actualDate + " " + actualTime).getTime();
        var dateNow = new Date().getTime();
        var oD = orderDate + 604800000;
        if (oD < dateNow) {
            query2 = new Parse.Query("Tracker");
            query2.equalTo("orderId", order.id);
            query2.each(function (tracked) {
                tracked.set("status", "archived");
                tracked.save();
            })
            return order.save();
        }
    }).then(function () {
        // Set the job's success status
        status.success("Denied campaigns cleared.");
    }, function (error) {
        // Set the job's error status
        status.error("Uh oh, something went wrong.");
    });
});

Parse.Cloud.job("autoRepairMismatches", function (request, status) {
    Parse.Cloud.useMasterKey();
    var date = new Date();
    var orderId = "neverRun";
    var orderStatus = "neverRun";
    date.setDate(date.getDate()-1);
    query = new Parse.Query("Tracker");
    query.greaterThan("updatedAt", date);
    query.each(function (tracker) {
        orderId = tracker.attributes.orderId;
        trackerStatus = tracker.attributes.status;
    }).then(function () {
        query2 = new Parse.Query("Orders");
        query2.equalTo("objectId", orderId);
        query2.notEqualTo("status", trackerStatus);
        query2.each(function (order) {
            orderStatus = order.attributes.status;
            order.set("status", trackerStatus);
			return order.save();
     }).then(function () {
            // Set the job's success status
            status.success("Mismatched orders repaired. " + date + " | " + orderId+ " | " + orderStatus);
        }, function (error) {
            // Set the job's error status
            status.error("Uh oh, something went wrong.");
        });
    })
})

Parse.Cloud.define("mismatchManualCheck", function (request, response) {
    Parse.Cloud.useMasterKey();
    var id = request.params.id;
    query = new Parse.Query("Tracker");
    query.equalTo("orderId", id);
    query.first({
        success: function (tracker) {
            trackerStatus = tracker.attributes.status;
            query2 = new Parse.Query("Orders");
            query2.equalTo("objectId", id);
            query2.notEqualTo("status", trackerStatus);
            query2.first({
                success: function (order) {
                    if (!!order) {
                        order.set("status", trackerStatus);
                        order.save();
                        response.success("Updated.");
                    } else {
                        response.success("NoChange.");
                    }
                },
                error: function (error) {
                    throw error.message + " p2";
                }
            })
        },
        error: function (error) {
            throw error.message + " p1";
        }
    })
})

Parse.Cloud.job("backupEmailAddresses", function (request, status) {
    Parse.Cloud.useMasterKey();
    query = new Parse.Query(Parse.User);
    query.doesNotExist("oldEmail");
    query.each(function (user) {
        var id = user.id;
        var email = user.attributes.username;
        user.set("oldEmail", email);
        return user.save();
    }).then(function () {
        // Set the job's success status
        status.success("Emails have been backed-up.");
    }, function (error) {
        // Set the job's error status
        status.error("Uh oh, something went wrong.");
    });
});

Parse.Cloud.job("checkMismatchedEmails", function (request, status) {
    var Mailgun = require('mailgun');
    Mailgun.initialize('*.mailgun.org', 'key-*');
    Parse.Cloud.useMasterKey();
    var theUser;
    var id;
    var ts = new Date().getTime();
    var subject = "Pletho: Your email has been changed."
    var from = "support@pletho.com";
    var userQuery = new Parse.Query(Parse.User);
    userQuery.exists("oldEmail");
    userQuery.doesNotExist("ts");
    userQuery.each(function (user) {
        if (user.attributes.username != user.attributes.oldEmail) {
            theUser = user.attributes.oldEmail;
            id = user.id;
            var text = "If you did not authorise this change, please click on the link below: https://pletho.com/index.php?recovery=true&ts=" + ts + "&email=" + theUser + "&id=" + id;
            Mailgun.sendEmail({
                to: theUser,
                from: from,
                subject: subject,
                text: text
            })
            user.set("ts", ts);
            return user.save();
        }
    }).then(function () {
        // Set the job's success status
        status.success("Checked For Mismatched Emails.");
    }, function (error) {
        // Set the job's error status
        status.error("Uh oh, something went wrong.");
    });
});

Parse.Cloud.job("cleanEmailTimestamps", function (request, status) {
    Parse.Cloud.useMasterKey();
    query = new Parse.Query(Parse.User);
    query.exists("ts");
    query.each(function (user) {
        var ts = user.attributes.ts + 259200000;
        var now = new Date().getTime();
        if (ts < now) {
            user.unset("ts");
            user.unset("oldEmail");
            return user.save();
        }
    }).then(function () {
        // Set the job's success status
        status.success("Timestamps have been cleaned.");
    }, function (error) {
        // Set the job's error status
        status.error("Uh oh, something went wrong.");
    });
});

Parse.Cloud.define("recovery", function (request, response) {
    Parse.Cloud.useMasterKey();
    var id = request.params.id;
    var em = request.params.em;
    var ts = request.params.ts;
    query = new Parse.Query(Parse.User);
    query.equalTo("objectId", id);
    query.first({
        success: function (object) {
            if (object.attributes.ts == ts && object.attributes.oldEmail == em) {
                object.unset("ts");
                object.set("username", em);
                object.set("email", em);
                object.set("oldEmail", em);
                object.save(null, {
                    success: function (object) {
                        response.success("Sorted.");
                    },
                    error: function (error) {
                        throw "Got an error " + error.code + " : " + error.message + " : " + error.status + " : " + error.reponse;
                    }
                });
            }
        },
        error: function (error) {
            throw error.message;
        }
    })
})

Parse.Cloud.define("supportTicket", function (request, response) {
    Parse.Cloud.useMasterKey();
    var Mailgun = require('mailgun');
    Mailgun.initialize('*.mailgun.org', 'key-*');
    var msg = request.params.msg;
    var pId = request.params.pId;
    var publisher = request.params.publisher;
    var name = request.params.name;
    var user = request.params.user;
    var support = "support@pletho.com";
	var userid = request.params.userid;
    Mailgun.sendEmail({
        to: support,
        from: user,
        subject: "Support question from: " + name + " ("+userid+")",
        text: "Publisher: " + publisher + " | Advertiser: " + pId + " | Their message: " + msg
    })
    response.success("Sorted.");
})

Parse.Cloud.define("sendPass", function (request, response) {
    Parse.Cloud.useMasterKey();
	var fullHtmlEmail1 = '<html xmlns="http://www.w3.org/1999/xhtml"> <head> <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> <title>Pletho Email</title> </head> <body style="padding:0;margin:0;border:none;"> <div style="width:99%;height:auto;background-color:#424242;float:left;min-height:300px;padding-top:10px;"> <a href="https://pletho.com" target="_blank" style="border:none;"><div style="height:auto;width:100%;float:left;cursor:pointer;min-height:50px;text-align:center;"><img height="50px" width="auto" src="https://pletho.com/images/plethoLogo1.jpg"></img></div></a> <hr style="width:100%;float:left;" /> <div style="height:auto;width:100%;float:left;min-height:30px;font-size:16px;line-height:30px;color:lightgrey;text-align:center;font-family:Verdana, Geneva, sans-serif"><div style="float:left;width:100%;">Hi ';
	var fullHtmlEmail2 = ' and welcome to Pletho.<br /> Here are some tips on how to get started.</div><hr style="width:80%;float:left;margin-left:10%;" color="#fee686" /><div style="float:left;width:95%;padding:2.5%;"><img height="72px" width="auto" src="https://pletho.com/images/email/advertiserbutton.jpg"></img><br /><br />The Advertiser section is where you can find all of the advertisements available for sale on the Pletho marketplace. From here you can do an advanced search for a specific advert or casually browse all the advertisements on offer. You can then compare multiple adverts in the detailed view and when you are ready to purchase, highlight the order and click the buy button.<br /><br /> For a more detailed guide on how to use the Advertiser page, please <a href="https://pletho.com/#Help:Advertiser" target="_blank" style="border:none;color:white;text-decoration:none;">click here</a>.<br /><br /><hr style="width:80%;float:left;margin-left:10%;" color="white" /><img height="72px" width="auto" src="https://pletho.com/images/email/campbutton.jpg"></img><br /><br />After an advertisement has been ordered it is then forwarded to the Campaigns section. Campaigns always start their life as pending campaigns, once a campaign has been approved by the Publisher it then becomes queued. Once a queued campaign has been paid for it then becomes a live campaign before completion occurs.<br /><br /> For a more detailed guide on how to use the Campaigns page, please <a href="https://pletho.com/#Help:Campaigns" target="_blank" style="border:none;color:white;text-decoration:none;">click here</a>.<br /><br /><hr style="width:80%;float:left;margin-left:10%;" color="#fee686" /><img height="72px" width="auto" src="https://pletho.com/images/email/pubbutton.jpg"></img><br /><br />The Publisher section is where advertisement campaigns are added to Pletho by their owners. Before a publisher can advertise a campaign on the Pletho marketplace they first have to be approved. The approval process can take up to 72 hours to complete, during this time a member of the Pletho support staff will contact you. <br /><br /> For a more detailed guide on how to use the Publisher page, please <a href="https://pletho.com/#Help:Publisher" target="_blank" style="border:none;color:white;text-decoration:none;">click here</a>.<br /><br /><hr style="width:80%;float:left;margin-left:10%;" color="white" /><img height="72px" width="auto" src="https://pletho.com/images/email/alertbutton.jpg"></img><br /><br />Pletho will periodically send Alerts during the process of a campaign being ordered, paid for, aired and complete. To action an alert, click the alert button. Pletho will then take you to the campaign that created the alert and notify you at the top of the page what has changed. Pletho will also send emails to both Advertisers and Publishers as their campaigns progress.<br /><br /> If you would like to see the most frequently asked questions, please <a href="https://pletho.com/#Help:FAQ" target="_blank" style="border:none;color:white;text-decoration:none;">click here</a>.<br /><br /><hr style="width:80%;float:left;margin-left:10%;" color="#fee686" /><img height="72px" width="auto" src="https://pletho.com/images/email/helpbutton.jpg"></img><br /><br />If at any time you are confused, stuck or need a little advice, Pletho has a dedicated and thorough Help section with tips, tutorials and guides. From the Help page you can also change your email address or password and contact the Pletho Support Team directly.<br /><br /> To contact a member of the Pletho support team, please <a href="https://pletho.com/#Help:Support" target="_blank" style="border:none;color:white;text-decoration:none;">click here</a>.<br /><br /></div><div style="width:100%;float:left;background-color:black;height:auto;min-height:100px;text-align:center;color:#fbda55;line-height:40px;font-size:14px;font-family:Verdana, Geneva, sans-serif"> Tell your friends and family about Pletho <div style="float:left;width:100%;height:50px;text-align:center"> <a href="mailto:?subject=Check%20out%20Pletho:%20the%20advertising%20comparison%20platform&body=https%3A%2F%2Fpletho.com" target="_blank" style="border:none;"><img src="https://pletho.com/images/email/em1.png" style="max-width:18%;width:auto;cursor:pointer;" /></a> <a href="http://www.linkedin.com/shareArticle?mini=true&url=https://pletho.com&title=Pletho:%20the%20advertising%20comparison%20platform&summary=Pletho:%20the%20advertising%20comparison%20platform" target="_blank" style="border:none;"><img src="https://pletho.com/images/email/ln1.png" style="max-width:18%;width:auto;cursor:pointer;" /></a> <a href="https://www.facebook.com/sharer/sharer.php?u=https://pletho.com" target="_blank" style="border:none;"><img src="https://pletho.com/images/email/fb1.png" style="max-width:18%;width:auto;cursor:pointer;" /></a> <a href="http://twitter.com/home?status=Pletho:%20the%20advertising%20comparison%20platform%20https://pletho.com" target="_blank" style="border:none;"><img src="https://pletho.com/images/email/tw1.png" style="max-width:18%;width:auto;cursor:pointer;" /></a> <a href="https://plus.google.com/share?url=Check%20out%20Pletho:%20the%20advertising%20comparison%20platform%20https://pletho.com/?" target="_blank" style="border:none;"><img src="https://pletho.com/images/email/gg1.png" style="max-width:18%;width:auto;cursor:pointer;" /></a> </div> <div style="float:left;text-align:center;color:whitesmoke;width:100%;"><a href="https://pletho.com" target="_blank" style="border:none;color:white;text-decoration:none;">Pletho.com 2015</a> - <a href="https://pletho.com/terms.html" target="_blank" style="border:none;color:white;text-decoration:none;">Terms</a> - <a href="mailto:support@pletho.com" target="_blank" style="border:none;color:white;text-decoration:none;">Contact</a></div> </div> </body> </html>';
    var Mailgun = require('mailgun');
    Mailgun.initialize('*.mailgun.org', 'key-*');
    var pass = request.params.pass;
	//pass is users real name
    var user = request.params.user;
    var support = "support@pletho.com";
	var fullHtmlEmail3 = fullHtmlEmail1 + pass + fullHtmlEmail2;
    Mailgun.sendEmail({
        to: user,
        from: support,
        subject: "Welcome to Pletho",
		html: fullHtmlEmail3,
        text: "Welcome to Pletho"
    })
    response.success("Sorted.");
})

Parse.Cloud.define("sendBug", function (request, response) {
    Parse.Cloud.useMasterKey();
    var Mailgun = require('mailgun');
    Mailgun.initialize('*.mailgun.org', 'key-*');
    var error1 = request.params.error1;
    var error2 = request.params.error2;
    var user = request.params.user;
    var support = "hostmaster@pletho.com";
    Mailgun.sendEmail({
        to: support,
        from: support,
        subject: error1,
        text: error2 + " User: " + user
    })
    response.success("Sorted.");
})

Parse.Cloud.afterSave("Products", function (request) {
    Parse.Cloud.useMasterKey();
	try{var whoami = request.user.id;} catch(e) {var whoami ="master"}
	if(whoami != "master") {
    var owner = request.object.attributes.user;
    var orderId = request.object.id;
	var newStatus = request.object.attributes.status;
	var newPrice = request.object.attributes.price;
	var newQuantity = request.object.attributes.quantity;
	var newLead = request.object.attributes.leadTime;
	var newStock = request.object.attributes.unlimitedStock;
	var oldStatus = request.object.attributes.statusBackup;
	var oldPrice = request.object.attributes.priceBackup;
	var oldQuantity = request.object.attributes.quantityBackup;
	var oldLead = request.object.attributes.leadBackup;
	var oldStock = request.object.attributes.stockBackup;
	console.log(whoami + ' | '+ owner + ' | '+orderId+ ' | '+newPrice+ ' | '+oldPrice)
    query = new Parse.Query("Approvals");
    query.equalTo("userId", owner);
    query.count({
        success: function (count) {
            if (count > 0 && owner == whoami) {
				query = new Parse.Query("Products");
                query.equalTo("objectId", orderId);
                query.first({
                    success: function (product) {
                        product.set("statusBackup", newStatus);
                        product.set("priceBackup", newPrice);
                        product.set("quantityBackup", newQuantity);
                        product.set("leadBackup", newLead);
                        product.set("stockBackup", newStock);
                        product.save();
                    },
                    error: function (error) {
                        throw "Got an error " + error.code + " : " + error.message;
                    }
                })
            } else {
				if (owner == whoami) {
					query = new Parse.Query("Products");
					query.equalTo("objectId", orderId);
					query.first({
						success: function (product) {
							product.set("status", "offline");
							product.save();
						},
						error: function (error) {
							throw "Got an error " + error.code + " : " + error.message;
						}
					})
				} else {
					query = new Parse.Query("Products");
					query.equalTo("objectId", orderId);
					query.first({
						success: function (product) {
							product.set("status", oldStatus);
							product.set("price", oldPrice);
							product.set("quantity", oldQuantity);
							product.set("leadTime", oldLead);
							product.set("unlimitedStock", oldStock);
							product.save();
						},
						error: function (error) {
							throw "Got an error " + error.code + " : " + error.message;
						}
					})
				}
            }
        },
        error: function (error) {
            throw "Got an error " + error.code + " : " + error.message;
        }
    })
	}
});