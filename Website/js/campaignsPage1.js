var process;
var campId;
var campCost;
var campStatus;
var catcher;
var currency;
var stripePublishableKey;
var cHshareId;
var cHcurrentUserId;
var cHorderProgress;
var curCampSortType;
var curCampSortMode;
var passedOverUrl2Check;
var urlSafetyJson;
var urlChecking = false;
var pendingTotalCount = 0;
var queuedTotalCount = 0;
var liveTotalCount = 0;
var disputeTotalCount = 0;
var completeTotalCount = 0;
var deniedTotalCount = 0;
var pendingTotalCount2 = 0;
var queuedTotalCount2 = 0;
var liveTotalCount2 = 0;
var disputeTotalCount2 = 0;
var completeTotalCount2 = 0;
var prevUrlText;
var fakeNumx;

var pendingPurchasedCampaignHeader = '<div class="pibRow15"> <div onclick="sortCampsByPub(\'pending\')" class="pibCountry2231">Publisher</div> <div onclick="sortCampsByType(\'pending\')" class="pibCampTime2231">Ad Type</div> <div onclick="sortCampsByCost(\'pending\')" class="pibCity2231" >Cost</div> <div onclick="sortCampsByDate1(\'pending\')" class="pibAdType2231" >Date</div>  <div onclick="sortCampsByDate1(\'pending\')" class="pibReach2231">Time</div> <div class="pibCost2231" >Flex</div>  </div>';
var pendingPurchasedCampaignFooter = '<div class="pibRow16"> <div class="pibCountry22312">Advert Description</div> <div class="pibCampTime22312">Advert To Air</div> </div>';
var deniedPurchasedCampaignHeader = '<div class="pibRow15"> <div onclick="sortCampsByPub(\'pending\')" class="pibCountry2231">Publisher</div> <div onclick="sortCampsByType(\'pending\')" class="pibCampTime2231">Ad Type</div> <div onclick="sortCampsByCost(\'pending\')" class="pibCity2231" >Cost</div> <div class="pibCampTime22312" >Campaign Status</div>  </div>';
var deniedPurchasedCampaignFooter = '<div class="pibRow16"> <div class="pibCountry22312">Advert Description</div> <div class="pibCampTime22312">Publisher Message</div> </div>';
var purchasedQueuedCampaignHeader = '<div class="pibRow15"> <div onclick="sortCampsByPub(\'queued\')" class="pibCountry2231">Publisher</div> <div onclick="sortCampsByType(\'queued\')" class="pibCampTime2231">Ad Type</div> <div onclick="sortCampsByCost(\'queued\')" class="pibCity2231" >Cost</div> <div onclick="sortCampsByDate2(\'queued\')" class="pibCampTime2237">Air Date</div> <div onclick="sortCampsByDate2(\'queued\')" class="pibCity22312" >Air Time</div> </div>';
purchasedQueuedCampaignHeader2 = '<div class="pibRow15"> <div onclick="sortCampsByPub(\'live\')" class="pibCountry2231">Publisher</div> <div onclick="sortCampsByType(\'live\')" class="pibCampTime2231">Ad Type</div> <div onclick="sortCampsByCost(\'live\')" class="pibCity2231" >Cost</div> <div onclick="sortCampsByDate2(\'live\')" class="pibCampTime2237">Air Date</div> <div onclick="sortCampsByDate2(\'live\')" class="pibCity22312" >Air Time</div> </div>';
var purchasedQueuedCampaignFooter = '<div class="pibRow16"> <div class="pibCountry22312">Advert Description</div> <div class="pibCampTime22312">Pletho Message</div> </div>';
var purchasedQueuedCampaignFooter2 = '<div class="pibRow16"> <div class="pibCountry22312">Advert Description</div> <div class="pibCampTime22312">Advert To Air</div> </div>';
var purchasedDisputedCampaignHeader = '<div class="pibRow15"> <div onclick="sortCampsByPub(\'dispute\')" class="pibCountry2231">Publisher</div> <div onclick="sortCampsByType(\'dispute\')" class="pibCampTime2231">Ad Type</div> <div onclick="sortCampsByCost(\'dispute\')" class="pibCity2231" >Cost</div> <div class="pibCountry22312" >Pletho Message</div> </div>';
var purchasedDisputedCampaignFooter = '<div class="pibRow16"> <div class="pibCountry22312">Advert Description</div> <div class="pibCampTime22312">Last Message</div> </div>';
var soldDisputedCampaignHeader = '<div class="pibRow15"> <div onclick="sortCampsByPay(\'dispute\')" class="pibCountry22317">Payment ID</div> <div onclick="sortCampsByCost(\'dispute\')" class="pibCity2231" >Cost</div> <div onclick="sortCampsByDate2(\'dispute\')" class="pibCampTime2237">Aired Date</div> <div onclick="sortCampsByDate2(\'dispute\')" class="pibCity22312" >Aired Time</div> </div>';
var soldDisputedCampaignFooter = '<div class="pibRow16"> <div class="pibCountry22312">Aired Advert</div> <div class="pibCampTime22312">Last Message</div> </div>';
var purchasedCompletedCampaignHeader = '<div class="pibRow15"> <div onclick="sortCampsByPub(\'complete\')" class="pibCountry2231">Publisher</div> <div onclick="sortCampsByType(\'complete\')" class="pibCampTime2231">Ad Type</div> <div onclick="sortCampsByCost(\'complete\')" class="pibCity2231" >Cost</div> <div onclick="sortCampsByDate2(\'complete\')" class="pibCampTime2237">Aired Date</div> <div class="pibCity22312" onclick="sortCampsByDate2(\'complete\')" >Aired Time</div> </div>';
var purchasedCompletedCampaignFooter = '<div class="pibRow16"> <div class="pibCountry22312">Advert Description</div> <div class="pibCampTime22312">Aired Advert</div> </div>';

function openCampaignsPage1(nav) {
    mainPageLoader2();
	pendingTotalCount = 0;
	queuedTotalCount = 0;
	liveTotalCount = 0;
	disputeTotalCount = 0;
	completeTotalCount = 0;
	deniedTotalCount = 0;
	pendingTotalCount2 = 0;
	queuedTotalCount2 = 0;
	liveTotalCount2 = 0;
	disputeTotalCount2 = 0;
	completeTotalCount2 = 0;
    document.getElementById("advertiserPage2Div").style.bottom = "70px";
    document.getElementById("buttonFooterSearch").style.bottom = "27px";
    if (windowWidth < 730) {
    	document.getElementById("plethoFooter").style.display = "block";
	} else {
		document.getElementById("plethoFooter").style.display = "none";
		}
    document.getElementById("publisherButton3").style.display = "none";
    document.getElementById("publisherButton4").style.display = "none";
    document.getElementById("publisherButton5").style.display = "none";
    document.getElementById("adShareButton").style.opacity = "0.25";
    document.getElementById("plethoFooter3").style.display = "none";
    document.getElementById("advertiserLink").style.backgroundImage = "url('../images/atiser.png')";
    document.getElementById("campaignsLink").style.backgroundImage = "url('../images/campaigns2.png')";
    document.getElementById("publisherLink").style.backgroundImage = "url('../images/publisher.png')";
    document.getElementById("helpLink").style.backgroundImage = "url('../images/help.png')";
    document.getElementById("campaignsLink").style.color = "#fde38a";
    document.getElementById("advertiserLink").style.color = "white";
    document.getElementById("helpLink").style.color = "white";
    document.getElementById("publisherLink").style.color = "white";
    document.getElementById("helpDiv").style.display = "none";
    document.getElementById("plethoFooter3").style.display = "none";
    document.getElementById("searchBox").style.display = "none";
    document.getElementById("publisherButton1").style.display = "none";
    document.getElementById("publisherButton2").style.display = "none";
    document.getElementById("normalSearchButton").style.display = "none";
    document.getElementById("normalSearchButton2").style.display = "none";
    document.getElementById("publisherHelpButton1").style.display = "none";
    document.getElementById("searchAllButton").style.display = "none";
    document.getElementById("buyAdSlotButton").style.display = "none";
    document.getElementById("ShareWideAdSlotButton").style.display = "none";
    document.getElementById("adCounterButton").style.display = "none";
    document.getElementById("mobileGoButton").style.display = "none";
    document.getElementById("advancedSearchButtonMk2").style.display = "none";
    if (windowWidth < 730) {
        document.getElementById("buttonFooterSearch").style.backgroundColor = "white";
    } else {
        document.getElementById("buttonFooterSearch").style.backgroundColor = "#424242";
    }
    document.getElementById("advSearchButton").style.display = "none";
    document.getElementById("pendingCampaignsPage1").innerHTML = "";
    document.getElementById("queuedCampaignsPage1").innerHTML = "";
    document.getElementById("liveCampaignsPage1").innerHTML = "";
    document.getElementById("completedCampaignsPage1").innerHTML = "";
    document.getElementById("disputedCampaignsPage1").innerHTML = "";
    document.getElementById("advertiserLink").style.opacity = "1";
    document.getElementById("campaignsLink").style.opacity = "1";
    document.getElementById("publisherLink").style.opacity = "1";
    document.getElementById("helpLink").style.opacity = "1";
    //document.getElementById("loggingin").style.backgroundColor = "rgba(0,0,0,.25)";
    //document.getElementById("loggingin").innerHTML = "<br\>Loading campaigns...";
    //document.getElementById("loggingin").style.display = "block";
    document.getElementById("advertiserPage2Div").innerHTML = "";
    document.getElementById("advertiserPage0Div").style.display = "none";
    document.getElementById("advertiserPage1Div").style.display = "none";
    document.getElementById("advertiserPage2Div").style.display = "none";
    document.getElementById("campaignsPage1Div").style.display = "block";
    document.getElementById("campaignsPage1Div").style.opacity = "0.3";
    document.getElementById("campaignsPage2Div").style.display = "none";
    document.getElementById("publisherPage1Div").style.display = "none";
    document.getElementById("publisherPage2Div").style.display = "none";
    document.getElementById("sortResultsButton").style.display = "none";
    document.getElementById("buyAdSlotButton").style.display = "none";
    document.getElementById("ShareWideAdSlotButton").style.display = "none";
    document.getElementById("adCounterButton").style.display = "none";
    document.getElementById("debug").innerText = "(pendingCampaignsPage1)";
    document.getElementById("debug").textContent = "(pendingCampaignsPage1)";
    document.body.className = "bkg1";
    ////////////////
    var allOrders = Parse.Object.extend("Orders");
    var getMatchedOrders1 = new Parse.Query(allOrders);
    var getMatchedOrders2 = new Parse.Query(allOrders);
    var count1 = 0;
    var count2 = 0;
    var thisUser = Parse.User.current();
    var userId = thisUser.id;
    checkOrdersAsPurchaser()
	
    function checkOrdersAsPurchaser() {
        getMatchedOrders1.equalTo("purchaser", userId)
        getMatchedOrders1.limit(1000);
        var oneYearAgo = new Date();
        oneYearAgo.setMonth(oneYearAgo.getMonth() - 12);
        getMatchedOrders1.greaterThan("updatedAt", oneYearAgo);
        //getMatchedOrders1.equalTo("owner", userId)	
		if(!!curCampSortType) {
			if(curCampSortType == "pub") {
				if(curCampSortMode == "ascending") {
				getMatchedOrders1.ascending("adPublisher");
				} else {
				getMatchedOrders1.descending("adPublisher");
				}
			} else if (curCampSortType == "cost"){
				if(curCampSortMode == "ascending") {
				getMatchedOrders1.ascending("price");
				} else {
				getMatchedOrders1.descending("price");
				}
			} else if (curCampSortType == "def"){
				getMatchedOrders1.descending("updatedAt");
			} else if (curCampSortType == "pay"){
				if(curCampSortMode == "ascending") {
				getMatchedOrders1.ascending("stripeOid");
				} else {
				getMatchedOrders1.descending("stripeOid");
				}
			} else if (curCampSortType == "date1"){
				if(curCampSortMode == "ascending") {
				getMatchedOrders1.ascending("preferredDate,preferredTime");
				} else {
				getMatchedOrders1.descending("preferredDate,preferredTime");
				}
			} else if (curCampSortType == "date2"){
				if(curCampSortMode == "ascending") {
				getMatchedOrders1.ascending("actualDate,actualTime");
				} else {
				getMatchedOrders1.descending("actualDate,actualTime");
				}
			} else if (curCampSortType == "type"){
				if(curCampSortMode == "ascending") {
				getMatchedOrders1.ascending("adType");
				} else {
				getMatchedOrders1.descending("adType");
				}
			} 
		} else {			
        getMatchedOrders1.descending("updatedAt");
		}
        getMatchedOrders1.find({
            success: function (results) {
                if (results.length == 0) {
                    checkOrdersAsOwner()
                }
                for (var i = 0; i < results.length; i++) {
                    count1 += 1;
                    //insert html data for purchaser stripePublishableKey 
                    var cur = results[i].attributes.currency.toUpperCase();
                    var str = results[i].attributes.price;
                    var strlength = str.toString().length;
                    var prcA = str.toString().substr(0, strlength - 2);
                    var prcB = str.toString().substr(strlength - 2, 2);
                    if (cur != "eur") {
                        var prc = prcA + "." + prcB;
                    } else {
                        var prc = prcA + "," + prcB;
                    }
                    //
                    if (results[i].id == campaignAlert && topCampaignAlerter == 1) {
                        topCampaignAlerter = 0;
                        if (results[i].attributes.status == "pending") {
							pendingTotalCount += 1;
                            document.getElementById("pendingCampaignsPage1").innerHTML += pendingPurchasedCampaignHeader + '<div id="' + results[i].id + '" accessKey="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" title="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" onClick="passOverCampaignDetails(this.id, this.accessKey, this.className,this.title)" class="purchasedPendingCampaignAlert"> <div class="halfCamp"> <div class="ppcPublisher">' + results[i].attributes.adPublisher + '</div> <div class="ppcType">' + results[i].attributes.adType + '</div> <div class="ppcCost">' + cur + ':<br/>' + prc + '</div> <div class="ppcDescription">' + results[i].attributes.adDescription + '</div> </div> <div class="halfCamp"> <div class="ppcDate">' + results[i].attributes.preferredDate + '</div> <div class="ppcTime">' + results[i].attributes.preferredTime + '</div> <div class="ppcFlex">' + results[i].attributes.flexibility + '</div> <div class="ppcUri"><b onclick="checkUrlSafety(this)" style="font-weight:300;text-decoration:underline;">' + results[i].attributes.advert + '</b></div> </div> </div>' + pendingPurchasedCampaignFooter;
                        } else if (results[i].attributes.status == "queued") {
							queuedTotalCount += 1;
                            document.getElementById("queuedCampaignsPage1").innerHTML += purchasedQueuedCampaignHeader + '<div id="' + results[i].id + '" accessKey="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" title="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" onClick="passOverCampaignDetails(this.id, this.accessKey, this.className,this.title)" class="purchasedQueuedCampaignAlert"> <div class="halfCamp"> <div class="ppcPublisher">' + results[i].attributes.adPublisher + '</div> <div class="ppcType">' + results[i].attributes.adType + '</div> <div class="ppcCost">' + cur + ':<br/>' + prc + '</div> <div class="ppcDescription">' + results[i].attributes.adDescription + '</div> </div> <div class="halfCamp"> <div class="ppcDate2">' + results[i].attributes.actualDate + '</div> <div class="ppcTime2">' + results[i].attributes.actualTime + '</div> <div class="ppcUri">If you are happy with the date and time set by the publisher, please tap here and then proceed with making payment. </div> </div> </div>' + purchasedQueuedCampaignFooter;
                        } else if (results[i].attributes.status == "live") {
							liveTotalCount += 1;
                            document.getElementById("liveCampaignsPage1").innerHTML += purchasedQueuedCampaignHeader2 + '<div id="' + results[i].id + '" accessKey="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" title="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" onClick="passOverCampaignDetails(this.id, this.accessKey, this.className,this.title)" class="purchasedLiveCampaignAlert"> <div class="halfCamp"> <div class="ppcPublisher">' + results[i].attributes.adPublisher + '</div> <div class="ppcType">' + results[i].attributes.adType + '</div> <div class="ppcCost">' + cur + ':<br/>' + prc + '</div> <div class="ppcDescription">' + results[i].attributes.adDescription + '</div> </div> <div class="halfCamp"> <div class="ppcDate2">' + results[i].attributes.actualDate + '</div> <div class="ppcTime2" accessKey="'+results[i].attributes.city+'">' + results[i].attributes.actualTime + '</div> <div class="ppcUri">When your advert has been aired, please tap here and confirm the order as complete.<br/><br/>Advert that will air: <b onclick="checkUrlSafety(this)" style="font-weight:300;text-decoration:underline;">'+results[i].attributes.advert+'</b></div> </div> </div>' + purchasedQueuedCampaignFooter;
                        } else if (results[i].attributes.status == "complete") {
							completeTotalCount += 1;
                            document.getElementById("completedCampaignsPage1").innerHTML += purchasedCompletedCampaignHeader + '<div id="' + results[i].id + '" accessKey="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" title="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" onClick="passOverCampaignDetails(this.id, this.accessKey, this.className,this.title)" class="purchasedCompletedCampaignAlert"> <div class="halfCamp"> <div class="ppcPublisher">' + results[i].attributes.adPublisher + '</div> <div class="ppcType">' + results[i].attributes.adType + '</div> <div class="ppcCost">' + cur + ':<br/>' + prc + '</div> <div class="ppcDescription">' + results[i].attributes.adDescription + '</div> </div> <div class="halfCamp"> <div class="ppcDate2">' + results[i].attributes.actualDate + '</div> <div class="ppcTime2" accessKey="'+results[i].attributes.city+'">' + results[i].attributes.actualTime + '</div> <div class="ppcUri"><b onclick="checkUrlSafety(this)" style="font-weight:300;text-decoration:underline;">' + results[i].attributes.advert + '</b></div> </div> </div>' + purchasedCompletedCampaignFooter;
                        } else if (results[i].attributes.status == "denied") {
							deniedTotalCount += 1;
                            document.getElementById("pendingCampaignsPage1").innerHTML += deniedPurchasedCampaignHeader + '<div id="' + results[i].id + '" accessKey="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" title="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" onClick="passOverCampaignDetails(this.id, this.accessKey, this.className,this.title)" class="deniedPendingCampaignAlert"> <div class="halfCamp"> <div class="ppcPublisher">' + results[i].attributes.adPublisher + '</div> <div class="ppcType">' + results[i].attributes.adType + '</div> <div class="ppcCost">' + cur + ':<br/>' + prc + '</div> <div class="ppcDescription">' + results[i].attributes.adDescription + '</div> </div> <div class="halfCamp"> <div class="ppcDenied">Denied by Publisher</div> <div class="ppcReason">' + results[i].attributes.message + '</div> </div> </div>' + deniedPurchasedCampaignFooter;
                        } else if (results[i].attributes.status == "disputed") {
							disputeTotalCount += 1;
                            document.getElementById("disputedCampaignsPage1").innerHTML += purchasedDisputedCampaignHeader + '<div id="' + results[i].id + '" accessKey="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" title="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" onClick="passOverCampaignDetails(this.id, this.accessKey, this.className,this.title)" class="purchasedDisputedCampaignAlert"> <div class="halfCamp"> <div class="ppcPublisher">' + results[i].attributes.adPublisher + '</div> <div class="ppcType">' + results[i].attributes.adType + '</div> <div class="ppcCost">' + cur + ':<br/>' + prc + '</div> <div class="ppcDescription">' + results[i].attributes.adDescription + '</div> </div> <div class="halfCamp"> <div class="ppcDenied">Pletho Support Notified</div> <div class="ppcReason">' + results[i].attributes.message + '</div> </div> </div>' + purchasedDisputedCampaignFooter;
                        }
                    } else
                        if (results[i].attributes.status == "pending") {
							pendingTotalCount += 1;
                            document.getElementById("pendingCampaignsPage1").innerHTML += pendingPurchasedCampaignHeader + '<div id="' + results[i].id + '" accessKey="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" title="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" onClick="passOverCampaignDetails(this.id, this.accessKey, this.className,this.title)" class="purchasedPendingCampaign"> <div class="halfCamp"> <div class="ppcPublisher">' + results[i].attributes.adPublisher + '</div> <div class="ppcType">' + results[i].attributes.adType + '</div> <div class="ppcCost">' + cur + ':<br/>' + prc + '</div> <div class="ppcDescription">' + results[i].attributes.adDescription + '</div> </div> <div class="halfCamp"> <div class="ppcDate">' + results[i].attributes.preferredDate + '</div> <div class="ppcTime">' + results[i].attributes.preferredTime + '</div> <div class="ppcFlex">' + results[i].attributes.flexibility + '</div> <div class="ppcUri"><b onclick="checkUrlSafety(this)" style="font-weight:300;text-decoration:underline;">' + results[i].attributes.advert + '</b></div> </div> </div>' + pendingPurchasedCampaignFooter;
                        } else if (results[i].attributes.status == "queued") {
							queuedTotalCount += 1;
                            document.getElementById("queuedCampaignsPage1").innerHTML += purchasedQueuedCampaignHeader + '<div id="' + results[i].id + '" accessKey="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" title="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" onClick="passOverCampaignDetails(this.id, this.accessKey, this.className,this.title)" class="purchasedQueuedCampaign"> <div class="halfCamp"> <div class="ppcPublisher">' + results[i].attributes.adPublisher + '</div> <div class="ppcType">' + results[i].attributes.adType + '</div> <div class="ppcCost">' + cur + ':<br/>' + prc + '</div> <div class="ppcDescription">' + results[i].attributes.adDescription + '</div> </div> <div class="halfCamp"> <div class="ppcDate2">' + results[i].attributes.actualDate + '</div> <div class="ppcTime2">' + results[i].attributes.actualTime + '</div> <div class="ppcUri">If you are happy with the date and time set by the publisher, please tap here and then proceed with making payment. </div> </div> </div>' + purchasedQueuedCampaignFooter;
                        } else if (results[i].attributes.status == "live") {
							liveTotalCount += 1;
                            document.getElementById("liveCampaignsPage1").innerHTML += purchasedQueuedCampaignHeader2 + '<div id="' + results[i].id + '" accessKey="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" title="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" onClick="passOverCampaignDetails(this.id, this.accessKey, this.className,this.title)" class="purchasedLiveCampaign"> <div class="halfCamp"> <div class="ppcPublisher">' + results[i].attributes.adPublisher + '</div> <div class="ppcType">' + results[i].attributes.adType + '</div> <div class="ppcCost">' + cur + ':<br/>' + prc + '</div> <div class="ppcDescription">' + results[i].attributes.adDescription + '</div> </div> <div class="halfCamp"> <div class="ppcDate2">' + results[i].attributes.actualDate + '</div> <div class="ppcTime2" accessKey="'+results[i].attributes.city+'">' + results[i].attributes.actualTime + '</div> <div class="ppcUri">When your advert has been aired, please tap here and confirm the order as complete.<br/><br/>Advert that will air: <b onclick="checkUrlSafety(this)" style="font-weight:300;text-decoration:underline;">'+results[i].attributes.advert+'</b></div> </div> </div>' + purchasedQueuedCampaignFooter;
                        } else if (results[i].attributes.status == "complete") {
							completeTotalCount += 1;
                            document.getElementById("completedCampaignsPage1").innerHTML += purchasedCompletedCampaignHeader + '<div id="' + results[i].id + '" accessKey="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" title="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" onClick="passOverCampaignDetails(this.id, this.accessKey, this.className,this.title)" class="purchasedCompletedCampaign"> <div class="halfCamp"> <div class="ppcPublisher">' + results[i].attributes.adPublisher + '</div> <div class="ppcType">' + results[i].attributes.adType + '</div> <div class="ppcCost">' + cur + ':<br/>' + prc + '</div> <div class="ppcDescription">' + results[i].attributes.adDescription + '</div> </div> <div class="halfCamp"> <div class="ppcDate2">' + results[i].attributes.actualDate + '</div> <div class="ppcTime2" accessKey="'+results[i].attributes.city+'">' + results[i].attributes.actualTime + '</div> <div class="ppcUri"><b onclick="checkUrlSafety(this)" style="font-weight:300;text-decoration:underline;">' + results[i].attributes.advert + '</b></div> </div> </div>' + purchasedCompletedCampaignFooter;
                        } else if (results[i].attributes.status == "denied") {
							deniedTotalCount += 1;
                            document.getElementById("pendingCampaignsPage1").innerHTML += deniedPurchasedCampaignHeader + '<div id="' + results[i].id + '" accessKey="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" title="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" onClick="passOverCampaignDetails(this.id, this.accessKey, this.className,this.title)" class="deniedPendingCampaign"> <div class="halfCamp"> <div class="ppcPublisher">' + results[i].attributes.adPublisher + '</div> <div class="ppcType">' + results[i].attributes.adType + '</div> <div class="ppcCost">' + cur + ':<br/>' + prc + '</div> <div class="ppcDescription">' + results[i].attributes.adDescription + '</div> </div> <div class="halfCamp"> <div class="ppcDenied">Denied by Publisher</div> <div class="ppcReason">' + results[i].attributes.message + '</div> </div> </div>' + deniedPurchasedCampaignFooter;
                        } else if (results[i].attributes.status == "disputed") {
							disputeTotalCount += 1;
                            document.getElementById("disputedCampaignsPage1").innerHTML += purchasedDisputedCampaignHeader + '<div id="' + results[i].id + '" accessKey="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" title="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" onClick="passOverCampaignDetails(this.id, this.accessKey, this.className,this.title)" class="purchasedDisputedCampaign"> <div class="halfCamp"> <div class="ppcPublisher">' + results[i].attributes.adPublisher + '</div> <div class="ppcType">' + results[i].attributes.adType + '</div> <div class="ppcCost">' + cur + ':<br/>' + prc + '</div> <div class="ppcDescription">' + results[i].attributes.adDescription + '</div> </div> <div class="halfCamp"> <div class="ppcDenied">Pletho Support Notified</div> <div class="ppcReason">' + results[i].attributes.message + '</div> </div> </div>' + purchasedDisputedCampaignFooter;
                        }
                    if (count1 == results.length) {
                        checkOrdersAsOwner()
                    }
                }
            },
            error: function (error) {
                //document.getElementById("loggingin").innerHTML = "<br\>Sorry, there has been a problem.";					
                if (document.getElementById("pendingCampaignsPage1").innerHTML == "") document.getElementById("pendingCampaignsPage1").innerHTML = "<div style='height: 45px; line-height: 45px;'>You have no pending campaigns.</div>";
                if (document.getElementById("queuedCampaignsPage1").innerHTML == "") document.getElementById("queuedCampaignsPage1").innerHTML = "<div style='height: 45px; line-height: 45px;'>You have no queued campaigns.</div>";
                if (document.getElementById("liveCampaignsPage1").innerHTML == "") document.getElementById("liveCampaignsPage1").innerHTML = "<div style='height: 45px; line-height: 45px;'>You have no live campaigns.</div>";
                if (document.getElementById("completedCampaignsPage1").innerHTML == "") document.getElementById("completedCampaignsPage1").innerHTML = "<div style='height: 45px; line-height: 45px;'>You have no completed campaigns.</div>";
                if (document.getElementById("disputedCampaignsPage1").innerHTML == "") document.getElementById("disputedCampaignsPage1").innerHTML = "<div style='height: 45px; line-height: 45px;'>You have no disputed campaigns.</div>";
                if (!nav) { goToPendingCampaigns() }
                else if (nav == "pending") {
                    goToPendingCampaigns()
                } else if (nav == "queued") {
                    goToQueuedCampaigns()
                } else if (nav == "live") {
                    goToLiveCampaigns()
                } else if (nav == "dispute") {
                    goToDisputedCampaigns()
                } else if (nav == "complete") {
                    goToCompletedCampaigns()
                }
            }
        });
    }

    function checkOrdersAsOwner() {
        //getMatchedOrders1.equalTo("purchaser", userId)
        getMatchedOrders2.equalTo("owner", userId)
        getMatchedOrders2.limit(1000);
        var oneYearAgo = new Date();
        oneYearAgo.setMonth(oneYearAgo.getMonth() - 12);
        getMatchedOrders2.greaterThan("updatedAt", oneYearAgo);
		if(!!curCampSortType) {
			if(curCampSortType == "pub") {
				if(curCampSortMode == "ascending") {
				getMatchedOrders2.ascending("adPublisher");
				} else {
				getMatchedOrders2.descending("adPublisher");
				}
			} else if (curCampSortType == "cost"){
				if(curCampSortMode == "ascending") {
				getMatchedOrders2.ascending("price");
				} else {
				getMatchedOrders2.descending("price");
				}
			} else if (curCampSortType == "def"){
				getMatchedOrders2.descending("updatedAt");
			} else if (curCampSortType == "pay"){
				if(curCampSortMode == "ascending") {
				getMatchedOrders2.ascending("stripeOid");
				} else {
				getMatchedOrders2.descending("stripeOid");
				}
			} else if (curCampSortType == "date1"){
				if(curCampSortMode == "ascending") {
				getMatchedOrders2.ascending("preferredDate,preferredTime");
				} else {
				getMatchedOrders2.descending("preferredDate,preferredTime");
				}
			} else if (curCampSortType == "date2"){
				if(curCampSortMode == "ascending") {
				getMatchedOrders2.ascending("actualDate,actualTime");
				} else {
				getMatchedOrders2.descending("actualDate,actualTime");
				}
			} else if (curCampSortType == "type"){
				if(curCampSortMode == "ascending") {
				getMatchedOrders2.ascending("adType");
				} else {
				getMatchedOrders2.descending("adType");
				}
			} 
		} else {			
        getMatchedOrders2.descending("updatedAt");
		}
        getMatchedOrders2.find({
            success: function (results) {
                if (results.length == 0) {
                    if (document.getElementById("pendingCampaignsPage1").innerHTML == "") document.getElementById("pendingCampaignsPage1").innerHTML = "<div style='height: 45px; line-height: 45px;'>You have no pending campaigns.</div>";
                    if (document.getElementById("queuedCampaignsPage1").innerHTML == "") document.getElementById("queuedCampaignsPage1").innerHTML = "<div style='height: 45px; line-height: 45px;'>You have no queued campaigns.</div>";
                    if (document.getElementById("liveCampaignsPage1").innerHTML == "") document.getElementById("liveCampaignsPage1").innerHTML = "<div style='height: 45px; line-height: 45px;'>You have no live campaigns.</div>";
                    if (document.getElementById("completedCampaignsPage1").innerHTML == "") document.getElementById("completedCampaignsPage1").innerHTML = "<div style='height: 45px; line-height: 45px;'>You have no completed campaigns.</div>";
                    if (document.getElementById("disputedCampaignsPage1").innerHTML == "") document.getElementById("disputedCampaignsPage1").innerHTML = "<div style='height: 45px; line-height: 45px;'>You have no disputed campaigns.</div>";
                    if (!nav) { goToPendingCampaigns() }
                    else if (nav == "pending") {
                        goToPendingCampaigns()
                    } else if (nav == "queued") {
                        goToQueuedCampaigns()
                    } else if (nav == "live") {
                        goToLiveCampaigns()
                    } else if (nav == "dispute") {
                        goToDisputedCampaigns()
                    } else if (nav == "complete") {
                        goToCompletedCampaigns()
                    }
                }
                for (var i = 0; i < results.length; i++) {
                    count2 += 1;
                    //insert html data for owner
                    var cur = results[i].attributes.currency.toUpperCase();
                    var str = results[i].attributes.price;
                    var strlength = str.toString().length;
                    var prcA = str.toString().substr(0, strlength - 2);
                    var prcB = str.toString().substr(strlength - 2, 2);
                    if (cur != "eur") {
                        var prc = prcA + "." + prcB;
                    } else {
                        var prc = prcA + "," + prcB;
                    }
                    //
                    if (results[i].id == campaignAlert && topCampaignAlerter == 1) {
                        topCampaignAlerter = 0;
                        if (results[i].attributes.status == "pending") {
							pendingTotalCount2 += 1;
                            document.getElementById("pendingCampaignsPage1").innerHTML += pendingPurchasedCampaignHeader + '<div id="' + results[i].id + '" accessKey="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" title="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" onClick="passOverCampaignDetails(this.id, this.accessKey, this.className,this.title)" class="soldPendingCampaignAlert"> <div class="halfCamp"> <div class="ppcPublisher">' + results[i].attributes.adPublisher + '</div> <div class="ppcType">' + results[i].attributes.adType + '</div> <div class="ppcCost">' + cur + ':<br/>' + prc + '</div> <div class="ppcDescription">' + results[i].attributes.adDescription + '</div> </div> <div class="halfCamp"> <div class="ppcDate">' + results[i].attributes.preferredDate + '</div> <div class="ppcTime">' + results[i].attributes.preferredTime + '</div> <div class="ppcFlex">' + results[i].attributes.flexibility + '</div> <div class="ppcUri"><b onclick="checkUrlSafety(this)" style="font-weight:300;text-decoration:underline;">' + results[i].attributes.advert + '</b></div> </div> </div>' + pendingPurchasedCampaignFooter;
                        } else if (results[i].attributes.status == "queued") {
							queuedTotalCount2 += 1;
                            document.getElementById("queuedCampaignsPage1").innerHTML += purchasedQueuedCampaignHeader + '<div id="' + results[i].id + '" accessKey="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" title="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" onClick="passOverCampaignDetails(this.id, this.accessKey, this.className,this.title)" class="soldQueuedCampaignAlert"> <div class="halfCamp"> <div class="ppcPublisher">' + results[i].attributes.adPublisher + '</div> <div class="ppcType">' + results[i].attributes.adType + '</div> <div class="ppcCost">' + cur + ':<br/>' + prc + '</div> <div class="ppcDescription">' + results[i].attributes.adDescription + '</div> </div> <div class="halfCamp"> <div class="ppcDate2">' + results[i].attributes.actualDate + '</div> <div class="ppcTime2">' + results[i].attributes.actualTime + '</div> <div class="ppcUri">Awaiting payment from advertiser.</div> </div> </div>' + purchasedQueuedCampaignFooter;
                        } else if (results[i].attributes.status == "live") {
							liveTotalCount2 += 1;
                            document.getElementById("liveCampaignsPage1").innerHTML += purchasedQueuedCampaignHeader2 + '<div id="' + results[i].id + '" accessKey="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" title="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" onClick="passOverCampaignDetails(this.id, this.accessKey, this.className,this.title)" class="soldLiveCampaignAlert"> <div class="halfCamp"> <div class="ppcPublisher">' + results[i].attributes.adPublisher + '</div> <div class="ppcType">' + results[i].attributes.adType + '</div> <div class="ppcCost">' + cur + ':<br/>' + prc + '</div> <div class="ppcDescription">' + results[i].attributes.adDescription + '</div> </div> <div class="halfCamp"> <div class="ppcDate2">' + results[i].attributes.actualDate + '</div> <div class="ppcTime2" accessKey="'+results[i].attributes.city+'">' + results[i].attributes.actualTime + '</div> <div class="ppcUri"><b onclick="checkUrlSafety(this)" style="font-weight:300;text-decoration:underline;">' + results[i].attributes.advert + '</b></div> </div> </div>' + purchasedQueuedCampaignFooter2;
                        } else if (results[i].attributes.status == "complete") {
							completeTotalCount2 += 1;
                            document.getElementById("completedCampaignsPage1").innerHTML += purchasedCompletedCampaignHeader + '<div id="' + results[i].id + '" accessKey="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" title="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" onClick="passOverCampaignDetails(this.id, this.accessKey, this.className,this.title)" class="soldCompletedCampaignAlert"> <div class="halfCamp"> <div class="ppcPublisher">' + results[i].attributes.adPublisher + '</div> <div class="ppcType">' + results[i].attributes.adType + '</div> <div class="ppcCost">' + cur + ':<br/>' + prc + '</div> <div class="ppcDescription">' + results[i].attributes.adDescription + '</div> </div> <div class="halfCamp"> <div class="ppcDate2">' + results[i].attributes.actualDate + '</div> <div class="ppcTime2" accessKey="'+results[i].attributes.city+'">' + results[i].attributes.actualTime + '</div> <div class="ppcUri"><b onclick="checkUrlSafety(this)" style="font-weight:300;text-decoration:underline;">' + results[i].attributes.advert + '</b></div> </div> </div>' + purchasedCompletedCampaignFooter;
                        } else if (results[i].attributes.status == "disputed") {
							disputeTotalCount2 += 1;
                            document.getElementById("disputedCampaignsPage1").innerHTML += soldDisputedCampaignHeader + '<div id="' + results[i].id + '" accessKey="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" title="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" onClick="passOverCampaignDetails(this.id, this.accessKey, this.className,this.title)" class="soldDisputedCampaignAlert"> <div class="halfCamp"> <div class="orderDetailsDispute"><a target="_blank" href="https://dashboard.stripe.com/test/payments/' + results[i].attributes.stripeOid + '">' + results[i].attributes.stripeOid + '</a></div> <div class="ppcCost">' + cur + ':<br/>' + prc + '</div> <div class="ppcDescription"><b onclick="checkUrlSafety(this)" style="font-weight:300;text-decoration:underline;">' + results[i].attributes.advert + '</b></div> </div> <div class="halfCamp"> <div class="ppcDate2">' + results[i].attributes.actualDate + '</div> <div class="ppcTime2">' + results[i].attributes.actualTime + '</div> <div class="ppcReason">' + results[i].attributes.message + '</div> </div> </div>' + soldDisputedCampaignFooter;
                        }
                    } else
                        if (results[i].attributes.status == "pending") {
							pendingTotalCount2 += 1;
                            document.getElementById("pendingCampaignsPage1").innerHTML += pendingPurchasedCampaignHeader + '<div id="' + results[i].id + '" accessKey="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" title="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" onClick="passOverCampaignDetails(this.id, this.accessKey, this.className,this.title)" class="soldPendingCampaign"> <div class="halfCamp"> <div class="ppcPublisher">' + results[i].attributes.adPublisher + '</div> <div class="ppcType">' + results[i].attributes.adType + '</div> <div class="ppcCost">' + cur + ':<br/>' + prc + '</div> <div class="ppcDescription">' + results[i].attributes.adDescription + '</div> </div> <div class="halfCamp"> <div class="ppcDate">' + results[i].attributes.preferredDate + '</div> <div class="ppcTime">' + results[i].attributes.preferredTime + '</div> <div class="ppcFlex">' + results[i].attributes.flexibility + '</div> <div class="ppcUri"><b onclick="checkUrlSafety(this)" style="font-weight:300;text-decoration:underline;">' + results[i].attributes.advert + '</b></div> </div> </div>' + pendingPurchasedCampaignFooter;
                        } else if (results[i].attributes.status == "queued") {
							queuedTotalCount2 += 1;
                            document.getElementById("queuedCampaignsPage1").innerHTML += purchasedQueuedCampaignHeader + '<div id="' + results[i].id + '" accessKey="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" title="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" onClick="passOverCampaignDetails(this.id, this.accessKey, this.className,this.title)" class="soldQueuedCampaign"> <div class="halfCamp"> <div class="ppcPublisher">' + results[i].attributes.adPublisher + '</div> <div class="ppcType">' + results[i].attributes.adType + '</div> <div class="ppcCost">' + cur + ':<br/>' + prc + '</div> <div class="ppcDescription">' + results[i].attributes.adDescription + '</div> </div> <div class="halfCamp"> <div class="ppcDate2">' + results[i].attributes.actualDate + '</div> <div class="ppcTime2">' + results[i].attributes.actualTime + '</div> <div class="ppcUri">Awaiting payment from advertiser.</div> </div> </div>' + purchasedQueuedCampaignFooter;
                        } else if (results[i].attributes.status == "live") {
							liveTotalCount2 += 1;
                            document.getElementById("liveCampaignsPage1").innerHTML += purchasedQueuedCampaignHeader2 + '<div id="' + results[i].id + '" accessKey="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" title="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" onClick="passOverCampaignDetails(this.id, this.accessKey, this.className, this.title)" class="soldLiveCampaign"> <div class="halfCamp"> <div class="ppcPublisher">' + results[i].attributes.adPublisher + '</div> <div class="ppcType">' + results[i].attributes.adType + '</div> <div class="ppcCost">' + cur + ':<br/>' + prc + '</div> <div class="ppcDescription">' + results[i].attributes.adDescription + '</div> </div> <div class="halfCamp"> <div class="ppcDate2">' + results[i].attributes.actualDate + '</div> <div class="ppcTime2" accessKey="'+results[i].attributes.city+'" title="'+results[i].attributes.city+'">' + results[i].attributes.actualTime + '</div> <div class="ppcUri"><b onclick="checkUrlSafety(this)" style="font-weight:300;text-decoration:underline;">' + results[i].attributes.advert + '</b></div> </div> </div>' + purchasedQueuedCampaignFooter2;
                        } else if (results[i].attributes.status == "complete") {
							completeTotalCount2 += 1;
                            document.getElementById("completedCampaignsPage1").innerHTML += purchasedCompletedCampaignHeader + '<div id="' + results[i].id + '" title="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" accessKey="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" onClick="passOverCampaignDetails(this.id, this.accessKey, this.className,this.title)" class="soldCompletedCampaign"> <div class="halfCamp"> <div class="ppcPublisher">' + results[i].attributes.adPublisher + '</div> <div class="ppcType">' + results[i].attributes.adType + '</div> <div class="ppcCost">' + cur + ':<br/>' + prc + '</div> <div class="ppcDescription">' + results[i].attributes.adDescription + '</div> </div> <div class="halfCamp"> <div class="ppcDate2">' + results[i].attributes.actualDate + '</div> <div class="ppcTime2" title="'+results[i].attributes.city+'" accessKey="'+results[i].attributes.city+'">' + results[i].attributes.actualTime + '</div> <div class="ppcUri" onclick="checkUrlSafety(this)"><b onclick="checkUrlSafety(this)" style="font-weight:300;text-decoration:underline;">' + results[i].attributes.advert + '</b></div> </div> </div>' + purchasedCompletedCampaignFooter;
                        } else if (results[i].attributes.status == "disputed") {
							disputeTotalCount2 += 1;
                            document.getElementById("disputedCampaignsPage1").innerHTML += soldDisputedCampaignHeader + '<div id="' + results[i].id + '" title="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" accessKey="' + results[i].attributes.price + '|' + results[i].attributes.status + '|' + results[i].attributes.stripePublishableKey + '|' + results[i].attributes.currency + '" onClick="passOverCampaignDetails(this.id, this.accessKey, this.className,this.title)" class="soldDisputedCampaign"> <div class="halfCamp"> <div class="orderDetailsDispute"><a target="_blank" href="https://dashboard.stripe.com/test/payments/' + results[i].attributes.stripeOid + '">' + results[i].attributes.stripeOid + '</a></div> <div class="ppcCost">' + cur + ':<br/>' + prc + '</div> <div onclick="checkUrlSafety(this)" class="ppcDescription"><b onclick="checkUrlSafety(this)" style="font-weight:300;text-decoration:underline;">' + results[i].attributes.advert + '</b></div> </div> <div class="halfCamp"> <div class="ppcDate2">' + results[i].attributes.actualDate + '</div> <div class="ppcTime2">' + results[i].attributes.actualTime + '</div> <div class="ppcReason">' + results[i].attributes.message + '</div> </div> </div>' + soldDisputedCampaignFooter;
                        }
                    if (count2 == results.length) {
                        if (document.getElementById("pendingCampaignsPage1").innerHTML == "") document.getElementById("pendingCampaignsPage1").innerHTML = "<div style='height: 45px; line-height: 45px;'>You have no pending campaigns.</div>";
                        if (document.getElementById("queuedCampaignsPage1").innerHTML == "") document.getElementById("queuedCampaignsPage1").innerHTML = "<div style='height: 45px; line-height: 45px;'>You have no queued campaigns.</div>";
                        if (document.getElementById("liveCampaignsPage1").innerHTML == "") document.getElementById("liveCampaignsPage1").innerHTML = "<div style='height: 45px; line-height: 45px;'>You have no live campaigns.</div>";
                        if (document.getElementById("completedCampaignsPage1").innerHTML == "") document.getElementById("completedCampaignsPage1").innerHTML = "<div style='height: 45px; line-height: 45px;'>You have no completed campaigns.</div>";
                        if (document.getElementById("disputedCampaignsPage1").innerHTML == "") document.getElementById("disputedCampaignsPage1").innerHTML = "<div style='height: 45px; line-height: 45px;'>You have no disputed campaigns.</div>";
                        if (!nav) { goToPendingCampaigns() }
                        else if (nav == "pending") {
                            goToPendingCampaigns()
                        } else if (nav == "queued") {
                            goToQueuedCampaigns()
                        } else if (nav == "live") {
                            goToLiveCampaigns()
                        } else if (nav == "dispute") {
                            goToDisputedCampaigns()
                        } else if (nav == "complete") {
                            goToCompletedCampaigns()
                        }
                    }
                }
            },
            error: function (error) {
                if (document.getElementById("pendingCampaignsPage1").innerHTML == "") document.getElementById("pendingCampaignsPage1").innerHTML = "<div style='height: 45px; line-height: 45px;'>You have no pending campaigns.</div>";
                if (document.getElementById("queuedCampaignsPage1").innerHTML == "") document.getElementById("queuedCampaignsPage1").innerHTML = "<div style='height: 45px; line-height: 45px;'>You have no queued campaigns.</div>";
                if (document.getElementById("liveCampaignsPage1").innerHTML == "") document.getElementById("liveCampaignsPage1").innerHTML = "<div style='height: 45px; line-height: 45px;'>You have no live campaigns.</div>";
                if (document.getElementById("completedCampaignsPage1").innerHTML == "") document.getElementById("completedCampaignsPage1").innerHTML = "<div style='height: 45px; line-height: 45px;'>You have no completed campaigns.</div>";
                if (document.getElementById("disputedCampaignsPage1").innerHTML == "") document.getElementById("disputedCampaignsPage1").innerHTML = "<div style='height: 45px; line-height: 45px;'>You have no disputed campaigns.</div>";
                //document.getElementById("loggingin").innerHTML = "<br\>Sorry, there has been a problem.";
                if (!nav) { goToPendingCampaigns() }
                else if (nav == "pending") {
                    goToPendingCampaigns()
                } else if (nav == "queued") {
                    goToQueuedCampaigns()
                } else if (nav == "live") {
                    goToLiveCampaigns()
                } else if (nav == "dispute") {
                    goToDisputedCampaigns()
                } else if (nav == "complete") {
                    goToCompletedCampaigns()
                }
            }
        });
    }
}

function goToPendingCampaigns() {
	if(autoCampOpen == true) {
		calcCampTotalCounts('reload');
	} else {
		if(autoCampOpen == 'complete') {
			autoCampOpen = false;
			} else {
				calcCampTotalCounts();
				}
		process = "pendingCampaign";
		window.location = '#Campaigns:Pending';
		navigating = true;
		document.getElementById("pendingMenuItem1").style.backgroundColor = "#ffe588";
		document.getElementById("queuedMenuItem1").style.backgroundColor = "#eee";
		document.getElementById("liveMenuItem1").style.backgroundColor = "#eee";
		document.getElementById("disputedMenuItem1").style.backgroundColor = "#eee";
		document.getElementById("completedMenuItem1").style.backgroundColor = "#eee";
		document.getElementById("campaignsPage1Div").style.opacity = "1";
		document.getElementById("debug").innerText = "(pendingCampaignsPage1)";
		document.getElementById("debug").textContent = "(pendingCampaignsPage1)";
		document.getElementById("pendingCampaignsPage1").style.display = "block";
		document.getElementById("queuedCampaignsPage1").style.display = "none";
		document.getElementById("liveCampaignsPage1").style.display = "none";
		document.getElementById("completedCampaignsPage1").style.display = "none";
		document.getElementById("disputedCampaignsPage1").style.display = "none";
		document.getElementById("pendingMenuItem1").style.opacity = "1";
		document.getElementById("queuedMenuItem1").style.opacity = "1";
		document.getElementById("liveMenuItem1").style.opacity = "1";
		document.getElementById("completedMenuItem1").style.opacity = "1";
		document.getElementById("disputedMenuItem1").style.opacity = "1";
		//document.getElementById("loggingin").style.display = "none";
		document.getElementById("campaignButton1").style.display = "block";
		document.getElementById("campaignButton1").style.opacity = "0.25";
		document.getElementById("campaignShareButton1").style.display = "block";
		document.getElementById("campaignHelpButton1").style.display = "block";
		document.getElementById("buttonBreaker1").style.opacity = "1";
		document.getElementById("campaignShareButton1").style.opacity = "0.25";
		document.getElementById("campaignHelpButton1").style.opacity = "0.25";
		document.getElementById("campaignButton1").children[0].innerText = "Cancel";
		document.getElementById("campaignButton1").children[0].textContent = "Cancel";
		document.getElementById("campaignButton2").style.display = "block";
		document.getElementById("campaignButton2").style.opacity = "0.25";
		document.getElementById("campaignButton2").children[0].innerText = "Approve";
		document.getElementById("campaignButton2").children[0].textContent = "Approve";
		setTimeout(function (args) {
			document.getElementById("loadingGraphic2").src = "/images/loader/85p.jpg";
			document.getElementById("mainPageLoader2").style.opacity = "0";
			setTimeout(function (args) {
				document.getElementById("mainPageLoader2").style.display = "none"
				document.getElementById("loadingGraphic2").src = "/images/loader/18p.jpg";
			}, 500)
		}, 100)
	}
}

function goToQueuedCampaigns() {
	calcCampTotalCounts();
    process = "queuedCampaign";
    window.location = '#Campaigns:Queue';
    navigating = true;
    document.getElementById("pendingMenuItem1").style.backgroundColor = "#eee";
    document.getElementById("queuedMenuItem1").style.backgroundColor = "#ffe588";
    document.getElementById("liveMenuItem1").style.backgroundColor = "#eee";
    document.getElementById("disputedMenuItem1").style.backgroundColor = "#eee";
    document.getElementById("completedMenuItem1").style.backgroundColor = "#eee";
    document.getElementById("campaignsPage1Div").style.opacity = "1";
    document.getElementById("debug").innerText = "(queuedCampaignsPage1)";
    document.getElementById("debug").textContent = "(queuedCampaignsPage1)";
    document.getElementById("pendingCampaignsPage1").style.display = "none";
    document.getElementById("queuedCampaignsPage1").style.display = "block";
    document.getElementById("liveCampaignsPage1").style.display = "none";
    document.getElementById("completedCampaignsPage1").style.display = "none";
    document.getElementById("disputedCampaignsPage1").style.display = "none";
    document.getElementById("pendingMenuItem1").style.opacity = "1";
    document.getElementById("queuedMenuItem1").style.opacity = "1";
    document.getElementById("liveMenuItem1").style.opacity = "1";
    document.getElementById("completedMenuItem1").style.opacity = "1";
    document.getElementById("disputedMenuItem1").style.opacity = "1";
    //document.getElementById("loggingin").style.display = "none";
    document.getElementById("campaignButton1").style.display = "block";
    document.getElementById("campaignButton1").style.opacity = "0.25";
    document.getElementById("campaignShareButton1").style.display = "block";
    document.getElementById("campaignHelpButton1").style.display = "block";
    document.getElementById("buttonBreaker1").style.opacity = "1";
    document.getElementById("campaignShareButton1").style.opacity = "0.25";
    document.getElementById("campaignHelpButton1").style.opacity = "0.25";
    document.getElementById("campaignButton1").children[0].innerText = "Cancel";
    document.getElementById("campaignButton1").children[0].textContent = "Cancel";
    document.getElementById("campaignButton2").style.display = "block";
    document.getElementById("campaignButton2").style.opacity = "0.25";
    document.getElementById("campaignButton2").children[0].innerText = "Pay";
    document.getElementById("campaignButton2").children[0].textContent = "Pay";
    setTimeout(function (args) {
        document.getElementById("loadingGraphic2").src = "/images/loader/85p.jpg";
        document.getElementById("mainPageLoader2").style.opacity = "0";
        setTimeout(function (args) {
            document.getElementById("mainPageLoader2").style.display = "none"
            document.getElementById("loadingGraphic2").src = "/images/loader/18p.jpg";
        }, 500)
    }, 100)
}

function goToLiveCampaigns() {
	clearInterval(stripeOpenChecker);
	calcCampTotalCounts();
    process = "liveCampaign";
    window.location = '#Campaigns:Live';
    navigating = true;
    document.getElementById("pendingMenuItem1").style.backgroundColor = "#eee";
    document.getElementById("queuedMenuItem1").style.backgroundColor = "#eee";
    document.getElementById("liveMenuItem1").style.backgroundColor = "#ffe588";
    document.getElementById("disputedMenuItem1").style.backgroundColor = "#eee";
    document.getElementById("completedMenuItem1").style.backgroundColor = "#eee";
    document.getElementById("campaignsPage1Div").style.opacity = "1";
    document.getElementById("debug").innerText = "(liveCampaignsPage1)";
    document.getElementById("debug").textContent = "(liveCampaignsPage1)";
    document.getElementById("pendingCampaignsPage1").style.display = "none";
    document.getElementById("queuedCampaignsPage1").style.display = "none";
    document.getElementById("liveCampaignsPage1").style.display = "block";
    document.getElementById("completedCampaignsPage1").style.display = "none";
    document.getElementById("disputedCampaignsPage1").style.display = "none";
    document.getElementById("pendingMenuItem1").style.opacity = "1";
    document.getElementById("queuedMenuItem1").style.opacity = "1";
    document.getElementById("disputedMenuItem1").style.opacity = "1";
    document.getElementById("liveMenuItem1").style.opacity = "1";
    document.getElementById("completedMenuItem1").style.opacity = "1";
    //document.getElementById("loggingin").style.display = "none";
    document.getElementById("campaignButton1").style.display = "block";
    document.getElementById("campaignButton1").style.opacity = "0.25";
    document.getElementById("campaignShareButton1").style.display = "block";
    document.getElementById("campaignHelpButton1").style.display = "block";
    document.getElementById("buttonBreaker1").style.opacity = "1";
    document.getElementById("campaignShareButton1").style.opacity = "0.25";
    document.getElementById("campaignHelpButton1").style.opacity = "0.25";
    document.getElementById("campaignButton1").children[0].innerText = "Dispute";
    document.getElementById("campaignButton1").children[0].textContent = "Dispute";
    document.getElementById("campaignButton2").style.display = "block";
    document.getElementById("campaignButton2").style.opacity = "0.25";
    document.getElementById("campaignButton2").children[0].innerText = "Complete";
    document.getElementById("campaignButton2").children[0].textContent = "Complete";
	if(paymentCompleted1 != true) {
		setTimeout(function (args) {
			document.getElementById("loadingGraphic2").src = "/images/loader/85p.jpg";
			document.getElementById("mainPageLoader2").style.opacity = "0";
			setTimeout(function (args) {
				document.getElementById("mainPageLoader2").style.display = "none"
				document.getElementById("loadingGraphic2").src = "/images/loader/18p.jpg";
			}, 500)
		}, 100)
	}
}

function goToDisputedCampaigns() {
	calcCampTotalCounts();
    process = "disputedCampaign";
    window.location = '#Campaigns:Disputes';
    navigating = true;
    document.getElementById("pendingMenuItem1").style.backgroundColor = "#eee";
    document.getElementById("queuedMenuItem1").style.backgroundColor = "#eee";
    document.getElementById("liveMenuItem1").style.backgroundColor = "#eee";
    document.getElementById("disputedMenuItem1").style.backgroundColor = "#ffe588";
    document.getElementById("completedMenuItem1").style.backgroundColor = "#eee";
    document.getElementById("campaignsPage1Div").style.opacity = "1";
    document.getElementById("debug").innerText = "(disputedCampaignsPage1)";
    document.getElementById("debug").textContent = "(disputedCampaignsPage1)";
    document.getElementById("pendingCampaignsPage1").style.display = "none";
    document.getElementById("queuedCampaignsPage1").style.display = "none";
    document.getElementById("liveCampaignsPage1").style.display = "none";
    document.getElementById("completedCampaignsPage1").style.display = "none";
    document.getElementById("disputedCampaignsPage1").style.display = "block";
    document.getElementById("pendingMenuItem1").style.opacity = "1";
    document.getElementById("disputedMenuItem1").style.opacity = "1";
    document.getElementById("queuedMenuItem1").style.opacity = "1";
    document.getElementById("liveMenuItem1").style.opacity = "1";
    document.getElementById("completedMenuItem1").style.opacity = "1";
    //document.getElementById("loggingin").style.display = "none";
    document.getElementById("campaignButton1").style.display = "block";
    document.getElementById("campaignButton1").style.opacity = "0.25";
    document.getElementById("campaignShareButton1").style.display = "block";
    document.getElementById("campaignHelpButton1").style.display = "block";
    document.getElementById("buttonBreaker1").style.opacity = "1";
    document.getElementById("campaignShareButton1").style.opacity = "0.25";
    document.getElementById("campaignHelpButton1").style.opacity = "0.25";
    document.getElementById("campaignButton1").children[0].innerText = "Close";
    document.getElementById("campaignButton1").children[0].textContent = "Close";
    document.getElementById("campaignButton2").style.display = "block";
    document.getElementById("campaignButton2").style.opacity = "0.25";
    document.getElementById("campaignButton2").children[0].innerText = "Comments";
    document.getElementById("campaignButton2").children[0].textContent = "Comments";
    setTimeout(function (args) {
        document.getElementById("loadingGraphic2").src = "/images/loader/85p.jpg";
        document.getElementById("mainPageLoader2").style.opacity = "0";
        setTimeout(function (args) {
            document.getElementById("mainPageLoader2").style.display = "none"
            document.getElementById("loadingGraphic2").src = "/images/loader/18p.jpg";
        }, 500)
    }, 100)
}

function goToCompletedCampaigns() {
	calcCampTotalCounts();
    process = "completedCampaign";
    window.location = '#Campaigns:Complete';
    navigating = true;
    document.getElementById("pendingMenuItem1").style.backgroundColor = "#eee";
    document.getElementById("queuedMenuItem1").style.backgroundColor = "#eee";
    document.getElementById("liveMenuItem1").style.backgroundColor = "#eee";
    document.getElementById("disputedMenuItem1").style.backgroundColor = "#eee";
    document.getElementById("completedMenuItem1").style.backgroundColor = "#ffe588";
    document.getElementById("campaignsPage1Div").style.opacity = "1";
    document.getElementById("debug").innerText = "(completedCampaignsPage1)";
    document.getElementById("debug").textContent = "(completedCampaignsPage1)";
    document.getElementById("pendingCampaignsPage1").style.display = "none";
    document.getElementById("queuedCampaignsPage1").style.display = "none";
    document.getElementById("liveCampaignsPage1").style.display = "none";
    document.getElementById("completedCampaignsPage1").style.display = "block";
    document.getElementById("disputedCampaignsPage1").style.display = "none";
    document.getElementById("pendingMenuItem1").style.opacity = "1";
    document.getElementById("disputedMenuItem1").style.opacity = "1";
    document.getElementById("queuedMenuItem1").style.opacity = "1";
    document.getElementById("liveMenuItem1").style.opacity = "1";
    document.getElementById("completedMenuItem1").style.opacity = "1";
    //document.getElementById("loggingin").style.display = "none";
    document.getElementById("campaignButton1").style.display = "block";
    document.getElementById("campaignButton1").style.opacity = "0.25";
    document.getElementById("campaignShareButton1").style.display = "block";
    document.getElementById("campaignHelpButton1").style.display = "block";
    document.getElementById("buttonBreaker1").style.opacity = "1";
    document.getElementById("campaignShareButton1").style.opacity = "0.25";
    document.getElementById("campaignHelpButton1").style.opacity = "0.25";
    document.getElementById("campaignButton1").children[0].innerText = "Listing";
    document.getElementById("campaignButton1").children[0].textContent = "Listing";
    document.getElementById("campaignButton2").style.display = "block";
    document.getElementById("campaignButton2").style.opacity = "0.25";
    document.getElementById("campaignButton2").children[0].innerText = "Print";
    document.getElementById("campaignButton2").children[0].textContent = "Print";
    setTimeout(function (args) {
        document.getElementById("loadingGraphic2").src = "/images/loader/85p.jpg";
        document.getElementById("mainPageLoader2").style.opacity = "0";
        setTimeout(function (args) {
            document.getElementById("mainPageLoader2").style.display = "none"
            document.getElementById("loadingGraphic2").src = "/images/loader/18p.jpg";
        }, 500)
    }, 100)
}

function passOverCampaignDetails(theOrderId, costStatus, className, bypass) {
	if(!costStatus) {costStatus = bypass}
    campId = theOrderId;
	campShareButtonPop(campId)
    var curItemBkg = document.getElementById([campId]).style.backgroundColor
    if (curItemBkg == "rgba(254,229,136,0.2)" || curItemBkg == "rgba(254, 229, 136, 0.2)") {
		if(urlChecking == false) unHighlightCampaignsNav()
    } else {
        var number1 = 0;
        var number2 = 0;
        var number3 = 0;
        if (className == "purchasedPendingCampaignAlert") document.getElementById([theOrderId]).className = "purchasedPendingCampaign";
        if (className == "soldPendingCampaignAlert") document.getElementById([theOrderId]).className = "soldPendingCampaign";
        if (className == "deniedPendingCampaignAlert") document.getElementById([theOrderId]).className = "deniedPendingCampaign";
        if (className == "soldQueuedCampaignAlert") document.getElementById([theOrderId]).className = "soldQueuedCampaign";
        if (className == "purchasedQueuedCampaignAlert") document.getElementById([theOrderId]).className = "purchasedQueuedCampaign";
        if (className == "soldDisputedCampaignAlert") document.getElementById([theOrderId]).className = "soldDisputedCampaign";
        if (className == "purchasedLiveCampaignAlert") document.getElementById([theOrderId]).className = "purchasedLiveCampaign";
        if (className == "soldLiveCampaignAlert") document.getElementById([theOrderId]).className = "soldLiveCampaign";
        if (className == "purchasedCompletedCampaignAlert") document.getElementById([theOrderId]).className = "purchasedCompletedCampaign";
        if (className == "purchasedDisputedCampaignAlert") document.getElementById([theOrderId]).className = "purchasedDisputedCampaign";
        if (className == "soldCompletedCampaignAlert") document.getElementById([theOrderId]).className = "soldCompletedCampaign";
        var splitCostStatus = costStatus.split("|");
        campCost = splitCostStatus[0];
        campStatus = splitCostStatus[1];
        stripePublishableKey = splitCostStatus[2];
        currency = splitCostStatus[3];
        var interval77 = setInterval(cleanCompute, 50);
        if (process == "pendingCampaign") {
            var campBoxes1 = document.getElementsByClassName("purchasedPendingCampaign");
            var campBoxes2 = document.getElementsByClassName("soldPendingCampaign");
            var campBoxes3 = document.getElementsByClassName("deniedPendingCampaign");
            var cB1 = 0; var cB2 = 0; var cB3 = 0;
            if (campBoxes1.length == 0) { var cB1 = 1; }
            if (campBoxes2.length == 0) { var cB2 = 1; }
            if (campBoxes3.length == 0) { var cB3 = 1; }
            for (var i = 0; i < campBoxes1.length; i++) {
                number1 += 1;
                campBoxes1[i].style.backgroundColor = "transparent";
                if (number1 == campBoxes1.length) {
                    cB1 = 1;
                }
            }
            for (var j = 0; j < campBoxes2.length; j++) {
                number2 += 1;
                campBoxes2[j].style.backgroundColor = "transparent";
                if (number2 == campBoxes2.length) {
                    cB2 = 1;
                }
            }
            for (var z = 0; z < campBoxes3.length; z++) {
                number3 += 1;
                campBoxes3[z].style.backgroundColor = "transparent";
                if (number3 == campBoxes3.length) {
                    cB3 = 1;
                }
            }
            if (campBoxes1.length == 0) { cB1 = 1; }
            if (campBoxes2.length == 0) { cB2 = 1; }
            if (campBoxes3.length == 0) { cB3 = 1; }
        } else if (process == "queuedCampaign") {
            cB3 = 1
            var campBoxes1 = document.getElementsByClassName("purchasedQueuedCampaign");
            var campBoxes2 = document.getElementsByClassName("soldQueuedCampaign");
            var cB1 = 0; var cB2 = 0;
            if (campBoxes1.length == 0) { var cB1 = 1; }
            if (campBoxes2.length == 0) { var cB2 = 1; }
            for (var i = 0; i < campBoxes1.length; i++) {
                number1 += 1;
                campBoxes1[i].style.backgroundColor = "transparent";
                if (number1 == campBoxes1.length) {
                    cB1 = 1;
                }
            }
            for (var j = 0; j < campBoxes2.length; j++) {
                number2 += 1;
                campBoxes2[j].style.backgroundColor = "transparent";
                if (number2 == campBoxes2.length) {
                    cB2 = 1;
                }
            }
            if (campBoxes1.length == 0) { cB1 = 1; }
            if (campBoxes2.length == 0) { cB2 = 1; }

        } else if (process == "liveCampaign") {
            cB3 = 1
            var campBoxes1 = document.getElementsByClassName("purchasedLiveCampaign");
            var campBoxes2 = document.getElementsByClassName("soldLiveCampaign");
            var cB1 = 0; var cB2 = 0;
            if (campBoxes1.length == 0) { var cB1 = 1; }
            if (campBoxes2.length == 0) { var cB2 = 1; }
            for (var i = 0; i < campBoxes1.length; i++) {
                number1 += 1;
                campBoxes1[i].style.backgroundColor = "transparent";
                if (number1 == campBoxes1.length) {
                    cB1 = 1;
                }
            }
            for (var j = 0; j < campBoxes2.length; j++) {
                number2 += 1;
                campBoxes2[j].style.backgroundColor = "transparent";
                if (number2 == campBoxes2.length) {
                    cB2 = 1;
                }
            }
            if (campBoxes1.length == 0) { cB1 = 1; }
            if (campBoxes2.length == 0) { cB2 = 1; }

        } else if (process == "completedCampaign") {
            cB3 = 1
            var campBoxes1 = document.getElementsByClassName("purchasedCompletedCampaign");
            var campBoxes2 = document.getElementsByClassName("soldCompletedCampaign");
            var cB1 = 0; var cB2 = 0;
            if (campBoxes1.length == 0) { var cB1 = 1; }
            if (campBoxes2.length == 0) { var cB2 = 1; }
            for (var i = 0; i < campBoxes1.length; i++) {
                number1 += 1;
                campBoxes1[i].style.backgroundColor = "transparent";
                if (number1 == campBoxes1.length) {
                    cB1 = 1;
                }
            }
            for (var j = 0; j < campBoxes2.length; j++) {
                number2 += 1;
                campBoxes2[j].style.backgroundColor = "transparent";
                if (number2 == campBoxes2.length) {
                    cB2 = 1;
                }
            }
            if (campBoxes1.length == 0) { cB1 = 1; }
            if (campBoxes2.length == 0) { cB2 = 1; }
        } else if (process == "disputedCampaign") {
            cB3 = 1
            var campBoxes1 = document.getElementsByClassName("purchasedDisputedCampaign");
            var campBoxes2 = document.getElementsByClassName("soldDisputedCampaign");
            var cB1 = 0; var cB2 = 0;
            if (campBoxes1.length == 0) { var cB1 = 1; }
            if (campBoxes2.length == 0) { var cB2 = 1; }
            for (var i = 0; i < campBoxes1.length; i++) {
                number1 += 1;
                campBoxes1[i].style.backgroundColor = "transparent";
                if (number1 == campBoxes1.length) {
                    cB1 = 1;
                }
            }
            for (var j = 0; j < campBoxes2.length; j++) {
                number2 += 1;
                campBoxes2[j].style.backgroundColor = "transparent";
                if (number2 == campBoxes2.length) {
                    cB2 = 1;
                }
            }
            if (campBoxes1.length == 0) { cB1 = 1; }
            if (campBoxes2.length == 0) { cB2 = 1; }
        }

        
    }
	
	function cleanCompute() {
            if (cB1 == 1 && cB2 == 1 && cB3 == 1) {
                clearInterval(interval77);
                document.getElementById([campId]).style.backgroundColor = "rgba(254,229,136,0.2)";
                if (document.getElementById([campId]).className == "purchasedCompletedCampaign") {
                    document.getElementById("campaignButton1").style.opacity = "1";
                    document.getElementById("campaignButton2").style.opacity = "1";
					document.getElementById("campaignShareButton1").style.opacity = "1";
					document.getElementById("campaignHelpButton1").style.opacity = "1";
                    catcher = "purchasedCompletedCampaign"
                } else if (document.getElementById([campId]).className == "soldCompletedCampaign") {
                    document.getElementById("campaignButton1").style.opacity = "1";
                    document.getElementById("campaignButton2").style.opacity = "1";
					document.getElementById("campaignShareButton1").style.opacity = "1";
					document.getElementById("campaignHelpButton1").style.opacity = "1";
                    catcher = "soldCompletedCampaign"
                } else if (document.getElementById([campId]).className == "purchasedLiveCampaign") {
                    document.getElementById("campaignButton1").style.opacity = "1";
                    document.getElementById("campaignButton2").style.opacity = "1";
					document.getElementById("campaignShareButton1").style.opacity = "1";
					document.getElementById("campaignHelpButton1").style.opacity = "1";
                    catcher = "purchasedLiveCampaign"
                } else if (document.getElementById([campId]).className == "soldLiveCampaign") {
                    document.getElementById("campaignButton1").style.opacity = "1";
                    document.getElementById("campaignButton2").style.opacity = "0.25";
					document.getElementById("campaignShareButton1").style.opacity = "1";
					document.getElementById("campaignHelpButton1").style.opacity = "1";
                    catcher = "soldLiveCampaign"
                } else if (document.getElementById([campId]).className == "purchasedQueuedCampaign") {
                    document.getElementById("campaignButton1").style.opacity = "1";
                    document.getElementById("campaignButton2").style.opacity = "1";
					document.getElementById("campaignShareButton1").style.opacity = "0.25";
					document.getElementById("campaignHelpButton1").style.opacity = "1";
                    catcher = "purchasedQueuedCampaign"
                } else if (document.getElementById([campId]).className == "soldQueuedCampaign") {
                    document.getElementById("campaignButton1").style.opacity = "0.25";
                    document.getElementById("campaignButton2").style.opacity = "0.25";
					document.getElementById("campaignShareButton1").style.opacity = "0.25";
					document.getElementById("campaignHelpButton1").style.opacity = "1";
                    catcher = "soldPendingCampaign"
                } else if (document.getElementById([campId]).className == "purchasedPendingCampaign") {
                    document.getElementById("campaignButton1").style.opacity = "1";
                    document.getElementById("campaignButton2").style.opacity = "0.25";
					document.getElementById("campaignShareButton1").style.opacity = "0.25";
					document.getElementById("campaignHelpButton1").style.opacity = "1";
                    catcher = "purchasedPendingCampaign"
                } else if (document.getElementById([campId]).className == "soldPendingCampaign") {
                    document.getElementById("campaignButton1").style.opacity = "1";
                    document.getElementById("campaignButton2").style.opacity = "1";
					document.getElementById("campaignShareButton1").style.opacity = "0.25";
					document.getElementById("campaignHelpButton1").style.opacity = "1";
                    catcher = "soldPendingCampaign"
                } else if (document.getElementById([campId]).className == "deniedPendingCampaign") {
                    document.getElementById("campaignButton1").style.opacity = "1";
                    document.getElementById("campaignButton2").style.opacity = "0.25";
					document.getElementById("campaignShareButton1").style.opacity = "0.25";
					document.getElementById("campaignHelpButton1").style.opacity = "1";
                    catcher = "deniedPendingCampaign"
                } else if (document.getElementById([campId]).className == "purchasedDisputedCampaign") {
                    document.getElementById("campaignButton1").style.opacity = "1";
                    document.getElementById("campaignButton2").style.opacity = "1";
					document.getElementById("campaignShareButton1").style.opacity = "0.25";
					document.getElementById("campaignHelpButton1").style.opacity = "1";
                    catcher = "purchasedDisputedCampaign"
                } else if (document.getElementById([campId]).className == "soldDisputedCampaign") {
                    document.getElementById("campaignButton1").style.opacity = "0.25";
                    document.getElementById("campaignButton2").style.opacity = "1";
					document.getElementById("campaignShareButton1").style.opacity = "0.25";
					document.getElementById("campaignHelpButton1").style.opacity = "1";
                    catcher = "soldDisputedCampaign"
                }
            }
        }
}


function unHighlightCampaignsNav() {
    document.getElementById("campaignButton1").style.opacity = "0.25";
    document.getElementById("campaignButton2").style.opacity = "0.25";
    var number1;
    var number2;
    var number3;
    if (process == "pendingCampaign") {
        var campBoxes1 = document.getElementsByClassName("purchasedPendingCampaign");
        var campBoxes2 = document.getElementsByClassName("soldPendingCampaign");
        var campBoxes3 = document.getElementsByClassName("deniedPendingCampaign");
        var cB1 = 0; var cB2 = 0; var cB3 = 0;
        if (campBoxes1.length == 0) { var cB1 = 1; }
        if (campBoxes2.length == 0) { var cB2 = 1; }
        if (campBoxes3.length == 0) { var cB3 = 1; }
        for (var i = 0; i < campBoxes1.length; i++) {
            number1 += 1;
            campBoxes1[i].style.backgroundColor = "transparent";
            if (number1 == campBoxes1.length) {
                cB1 = 1;
            }
        }
        for (var j = 0; j < campBoxes2.length; j++) {
            number2 += 1;
            campBoxes2[j].style.backgroundColor = "transparent";
            if (number2 == campBoxes2.length) {
                cB2 = 1;
            }
        }
        for (var z = 0; z < campBoxes3.length; z++) {
            number3 += 1;
            campBoxes3[z].style.backgroundColor = "transparent";
            if (number3 == campBoxes3.length) {
                cB3 = 1;
            }
        }
        if (campBoxes1.length == 0) { cB1 = 1; }
        if (campBoxes2.length == 0) { cB2 = 1; }
        if (campBoxes3.length == 0) { cB3 = 1; }
    } else if (process == "queuedCampaign") {
        cB3 = 1
        var campBoxes1 = document.getElementsByClassName("purchasedQueuedCampaign");
        var campBoxes2 = document.getElementsByClassName("soldQueuedCampaign");
        var cB1 = 0; var cB2 = 0;
        if (campBoxes1.length == 0) { var cB1 = 1; }
        if (campBoxes2.length == 0) { var cB2 = 1; }
        for (var i = 0; i < campBoxes1.length; i++) {
            number1 += 1;
            campBoxes1[i].style.backgroundColor = "transparent";
            if (number1 == campBoxes1.length) {
                cB1 = 1;
            }
        }
        for (var j = 0; j < campBoxes2.length; j++) {
            number2 += 1;
            campBoxes2[j].style.backgroundColor = "transparent";
            if (number2 == campBoxes2.length) {
                cB2 = 1;
            }
        }
        if (campBoxes1.length == 0) { cB1 = 1; }
        if (campBoxes2.length == 0) { cB2 = 1; }

    } else if (process == "liveCampaign") {
        cB3 = 1
        var campBoxes1 = document.getElementsByClassName("purchasedLiveCampaign");
        var campBoxes2 = document.getElementsByClassName("soldLiveCampaign");
        var cB1 = 0; var cB2 = 0;
        if (campBoxes1.length == 0) { var cB1 = 1; }
        if (campBoxes2.length == 0) { var cB2 = 1; }
        for (var i = 0; i < campBoxes1.length; i++) {
            number1 += 1;
            campBoxes1[i].style.backgroundColor = "transparent";
            if (number1 == campBoxes1.length) {
                cB1 = 1;
            }
        }
        for (var j = 0; j < campBoxes2.length; j++) {
            number2 += 1;
            campBoxes2[j].style.backgroundColor = "transparent";
            if (number2 == campBoxes2.length) {
                cB2 = 1;
            }
        }
        if (campBoxes1.length == 0) { cB1 = 1; }
        if (campBoxes2.length == 0) { cB2 = 1; }

    } else if (process == "completedCampaign") {
        cB3 = 1
        var campBoxes1 = document.getElementsByClassName("purchasedCompletedCampaign");
        var campBoxes2 = document.getElementsByClassName("soldCompletedCampaign");
        var cB1 = 0; var cB2 = 0;
        if (campBoxes1.length == 0) { var cB1 = 1; }
        if (campBoxes2.length == 0) { var cB2 = 1; }
        for (var i = 0; i < campBoxes1.length; i++) {
            number1 += 1;
            campBoxes1[i].style.backgroundColor = "transparent";
            if (number1 == campBoxes1.length) {
                cB1 = 1;
            }
        }
        for (var j = 0; j < campBoxes2.length; j++) {
            number2 += 1;
            campBoxes2[j].style.backgroundColor = "transparent";
            if (number2 == campBoxes2.length) {
                cB2 = 1;
            }
        }
        if (campBoxes1.length == 0) { cB1 = 1; }
        if (campBoxes2.length == 0) { cB2 = 1; }
    } else if (process == "disputedCampaign") {
        cB3 = 1
        var campBoxes1 = document.getElementsByClassName("purchasedDisputedCampaign");
        var campBoxes2 = document.getElementsByClassName("soldDisputedCampaign");
        var cB1 = 0; var cB2 = 0;
        if (campBoxes1.length == 0) { var cB1 = 1; }
        if (campBoxes2.length == 0) { var cB2 = 1; }
        for (var i = 0; i < campBoxes1.length; i++) {
            number1 += 1;
            campBoxes1[i].style.backgroundColor = "transparent";
            if (number1 == campBoxes1.length) {
                cB1 = 1;
            }
        }
        for (var j = 0; j < campBoxes2.length; j++) {
            number2 += 1;
            campBoxes2[j].style.backgroundColor = "transparent";
            if (number2 == campBoxes2.length) {
                cB2 = 1;
            }
        }
        if (campBoxes1.length == 0) { cB1 = 1; }
        if (campBoxes2.length == 0) { cB2 = 1; }
    }
}

function calcCampTotalCounts(str) {
		var pTC1 = pendingTotalCount;
		var qTC1 = queuedTotalCount;
		var lTC1 = liveTotalCount;
		var diTC1 = disputeTotalCount;
		var cTC1 = completeTotalCount;
		var dTC1 = deniedTotalCount;
		var pTC2 = pendingTotalCount2;
		var qTC2 = queuedTotalCount2;
		var lTC2 = liveTotalCount2;
		var diTC2 = disputeTotalCount2;
		var cTC2 = completeTotalCount2;
		///
		//CALC PENDING - publisher-alert/advertiser-noalert/none-noalert/both-pubalertonly
		if(dTC1 < 1 ) {
			if(pTC1 == 0 && pTC2 > 0) {
				document.getElementById("pendingTotalCountDiv").innerHTML = "(<b style='color:#E00000;font-weight:300;'>"+pTC2+"</b>/"+pTC2+")";
			} else if (pTC1 > 0 && pTC2 == 0) {
				document.getElementById("pendingTotalCountDiv").innerHTML = "(<b style='color:#E00000;font-weight:300;'>0</b>/"+pTC1+")";
			} else if (pTC1 == 0 && pTC2 == 0) {
				document.getElementById("pendingTotalCountDiv").innerHTML = "(<b style='color:#E00000;font-weight:300;'>0</b>/0)";
			} else {
				var pTC3 = pTC1 + pTC2
				document.getElementById("pendingTotalCountDiv").innerHTML = "(<b style='color:#E00000;font-weight:300;'>"+pTC2+"</b>/"+pTC3+")";
			}
		} else {
			var pTC4 = dTC1 + pTC2;
			var pTC5 = pTC1 + dTC1;
			if(pTC1 == 0 && pTC2 > 0) {
				document.getElementById("pendingTotalCountDiv").innerHTML = "(<b style='color:#E00000;font-weight:300;'>"+pTC4+"</b>/"+pTC4+")";
			} else if (pTC1 > 0 && pTC2 == 0) {
				document.getElementById("pendingTotalCountDiv").innerHTML = "(<b style='color:#E00000;font-weight:300;'>"+dTC1+"</b>/"+pTC5+")";
			} else if (pTC1 == 0 && pTC2 == 0) {
				document.getElementById("pendingTotalCountDiv").innerHTML = "(<b style='color:#E00000;font-weight:300;'>"+dTC1+"</b>/"+dTC1+")";
			} else {
				var pTC3 = pTC1 + pTC2 + dTC1;
				document.getElementById("pendingTotalCountDiv").innerHTML = "(<b style='color:#E00000;font-weight:300;'>"+pTC4+"</b>/"+pTC3+")";
			}
		}
		///
		//CALC QUEUED - publisher-noalert/advertiser-alert/none-noalert/both-advalertonly
		if(qTC1 == 0 && qTC2 > 0) {
				document.getElementById("queuedTotalCountDiv").innerHTML = "(<b style='color:#E00000;font-weight:300;'>0</b>/"+qTC2+")";
			} else if (qTC1 > 0 && qTC2 == 0) {
				document.getElementById("queuedTotalCountDiv").innerHTML = "(<b style='color:#E00000;font-weight:300;'>"+qTC1+"</b>/"+qTC1+")";
			} else if (qTC1 == 0 && qTC2 == 0) {
				document.getElementById("queuedTotalCountDiv").innerHTML = "(<b style='color:#E00000;font-weight:300;'>0</b>/0)";
			} else {
				var qTC3 = qTC1 + qTC2
				document.getElementById("queuedTotalCountDiv").innerHTML = "(<b style='color:#E00000;font-weight:300;'>"+qTC1+"</b>/"+qTC3+")";
			}
		///	
		//CALC LIVE - publisher-alert/advertiser-alert/none-noalert/both-allalert
		if(lTC1 == 0 && lTC2 > 0) {
				document.getElementById("liveTotalCountDiv").innerHTML = "(<b style='color:#E00000;font-weight:300;'>"+lTC2+"</b>/"+lTC2+")";
			} else if (lTC1 > 0 && lTC2 == 0) {
				document.getElementById("liveTotalCountDiv").innerHTML = "(<b style='color:#E00000;font-weight:300;'>"+lTC1+"</b>/"+lTC1+")";
			} else if (lTC1 == 0 && lTC2 == 0) {
				document.getElementById("liveTotalCountDiv").innerHTML = "(<b style='color:#E00000;font-weight:300;'>0</b>/0)";
			} else {
				var qTC3 = lTC1 + lTC2
				document.getElementById("liveTotalCountDiv").innerHTML = "(<b style='color:#E00000;font-weight:300;'>"+lTC3+"</b>/"+lTC3+")";
			}
		///		
		//CALC DISPUTED - publisher-allalert/advertiser-allalert/none-allalert/both-allalert
		if(diTC1 == 0 && diTC2 > 0) {
				document.getElementById("disputeTotalCountDiv").innerHTML = "(<b style='color:#E00000;font-weight:300;'>"+diTC2+"</b>/"+diTC2+")";
			} else if (diTC1 > 0 && diTC2 == 0) {
				document.getElementById("disputeTotalCountDiv").innerHTML = "(<b style='color:#E00000;font-weight:300;'>"+diTC1+"</b>/"+diTC1+")";
			} else if (diTC1 == 0 && diTC2 == 0) {
				document.getElementById("disputeTotalCountDiv").innerHTML = "(<b style='color:#E00000;font-weight:300;'>0</b>/0)";
			} else {
				var diTC3 = diTC1 + diTC2
				document.getElementById("disputeTotalCountDiv").innerHTML = "(<b style='color:#E00000;font-weight:300;'>"+diTC3+"</b>/"+diTC3+")";
			}
		///		
		//CALC COMPLETED - publisher-noalert/advertiser-noalert/none-noalert/both-noalert
		if(cTC1 == 0 && cTC2 > 0) {
				document.getElementById("completeTotalCountDiv").innerHTML = "(<b style='color:#E00000;font-weight:300;'>0</b>/"+cTC2+")";
			} else if (cTC1 > 0 && cTC2 == 0) {
				document.getElementById("completeTotalCountDiv").innerHTML = "(<b style='color:#E00000;font-weight:300;'>0</b>/"+cTC1+")";
			} else if (cTC1 == 0 && cTC2 == 0) {
				document.getElementById("completeTotalCountDiv").innerHTML = "(<b style='color:#E00000;font-weight:300;'>0</b>/0)";
			} else {
				var cTC3 = cTC1 + cTC2
				document.getElementById("completeTotalCountDiv").innerHTML = "(<b style='color:#E00000;font-weight:300;'>0</b>/"+cTC3+")";
			}		
	if(str == 'reload') {
		var redCountChecker1 = document.getElementById("campaignsMenu").innerHTML;
		var redCountChecker2 = redCountChecker1.split("<div");
		var pendingRed = redCountChecker2[1];
		var queuedRed = redCountChecker2[2];
		var liveRed = redCountChecker2[3];
		var disputedRed = redCountChecker2[4];
		var completedRed = redCountChecker2[5];
		var pendingSplitCount = "";
		var queuedSplitCount = "";
		var livedSplitCount = "";
		var disputedSplitCount = "";
		var completedSplitCount = "";
		if(pendingRed.indexOf("color: rgb(224, 0, 0)") != -1) {
			try{
				var pendingSplitCheck1 = pendingRed.split('<b ');
				var pendingSplitCheck2 = pendingSplitCheck1[1].replace('style=\"color: rgb(224, 0, 0); font-weight: 300;\">','').split('</b>');
				pendingSplitCount = parseInt(pendingSplitCheck2[0]);
			}catch(e){}
		}
		if(queuedRed.indexOf("color: rgb(224, 0, 0)") != -1) {
			try{
				var queuedSplitCheck1 = queuedRed.split('<b ');
				var queuedSplitCheck2 = queuedSplitCheck1[1].replace('style=\"color: rgb(224, 0, 0); font-weight: 300;\">','').split('</b>');
				queuedSplitCount = parseInt(queuedSplitCheck2[0]);
			}catch(e){}
		}
		if(liveRed.indexOf("color: rgb(224, 0, 0)") != -1) {
			try{
				var liveSplitCheck1 = liveRed.split('<b ');
				var liveSplitCheck2 = liveSplitCheck1[1].replace('style=\"color: rgb(224, 0, 0); font-weight: 300;\">','').split('</b>');
				livedSplitCount = parseInt(liveSplitCheck2[0]);
			}catch(e){}
		}
		if(disputedRed.indexOf("color: rgb(224, 0, 0)") != -1) {
			try{
				var disputedSplitCheck1 = disputedRed.split('<b ');
				var disputedSplitCheck2 = disputedSplitCheck1[1].replace('style=\"color: rgb(224, 0, 0); font-weight: 300;\">','').split('</b>');
				disputedSplitCount = parseInt(disputedSplitCheck2[0]);
				}catch(e){}
		}
		if(completedRed.indexOf("color: rgb(224, 0, 0)") != -1) {
			try{
				var completedSplitCheck1 = completedRed.split('<b ');
				var completedSplitCheck2 = completedSplitCheck1[1].replace('style=\"color: rgb(224, 0, 0); font-weight: 300;\">','').split('</b>');
				completedSplitCount = parseInt(completedSplitCheck2[0]);
			}catch(e){}
		  }	
		  if(pendingSplitCount >= 1) {
				autoCampOpen = 'complete';
			  goToPendingCampaigns();
			  
			} else if(queuedSplitCount >= 1) {
				autoCampOpen = 'complete';
			  goToQueuedCampaigns();
			  
			} else if(livedSplitCount >= 1) {
				autoCampOpen = 'complete';
			  goToLiveCampaigns();
			  
			} else if(disputedSplitCount >= 1) {
				autoCampOpen = 'complete';
			  goToDisputedCampaigns();
			  
			} else if(completedSplitCount >= 1) { 
				autoCampOpen = 'complete';
			  goToCompletedCampaigns();
			} else {
				autoCampOpen = 'complete';
			  goToPendingCampaigns();
			}
		}
	}
	
	

function campShareButtonPop(shareId) {
	document.getElementById("campaignShareButton1").accessKey = shareId;
	document.getElementById("campaignHelpButton1").accessKey = shareId;
	document.getElementById("campaignShareButton1").title = shareId;
	document.getElementById("campaignHelpButton1").title = shareId;
	document.getElementById("campaignShareButton1").children[0].accessKey = shareId;
	document.getElementById("campaignHelpButton1").children[0].accessKey = shareId;
	document.getElementById("campaignShareButton1").children[0].title = shareId;
	document.getElementById("campaignHelpButton1").children[0].title = shareId;
}

function campShareButtonPop2(data) {
	if (data.className == "campaignShareButton2" && data.parentElement.style.opacity == "1") {
		document.getElementById("shareMsgBox").textContent = "Loading...";
		var shareId = data.accessKey;
		if(!shareId){
			var shareId = data.title;
		}
		var pub = document.getElementById([shareId]).children[0].children[0].textContent;
		var adt = document.getElementById([shareId]).children[0].children[1].textContent;
		var adlink = document.getElementById([shareId]).children[1].children[2].textContent;
		var date = document.getElementById([shareId]).children[1].children[0].textContent;
		var time = document.getElementById([shareId]).children[1].children[1].textContent;
		var city = document.getElementById([shareId]).children[1].children[1].accessKey;	
		if(!city){
			var city = document.getElementById([shareId]).children[1].children[1].title;
		}
		if (catcher.indexOf("Live") == -1) { 
			var show = "%20showed%20";
		} else {
			var show = "%20will%20show%20";
		}
		if (adlink.indexOf("When your advert") != -1) {
		 	 adlink = adlink.replace("When your advert has been aired, please tap here and confirm the order as complete.Advert that will air: ", "")
		}
		sharePopulate2(pub,adt,adlink,date,time,show,city);
		document.getElementById("shareThisWhat").textContent = "Advert";
		document.getElementById("sharedMessage").style.display = "block";
		document.getElementById("sharedMessageBackDrop").style.display = "block";
		setTimeout(function (args) {
			document.getElementById("shareMsgBox").innerHTML = shareHTML;
		}, 1200)
	} else if (data.className == "campaignHelpButton2" && data.parentElement.style.opacity == "1") {
		cHshareId = data.accessKey;
		if(!cHshareId){
			cHshareId = data.title;
		}
		var currentUser = Parse.User.current();
    	cHcurrentUserId = currentUser.id;
		cHorderProgress = catcher;
		document.getElementById("campHelpMessageBackDrop").style.display = "block";
		document.getElementById("campHelpMessageBox").style.display = "block";
	}
}

function hideHelpMessageBoxes() {
	document.getElementById("campHelpMessageBackDrop").style.display = "none";
	document.getElementById("campHelpMessageBox").style.display = "none";
}

function hideHelpMessageBoxes2() {
	document.getElementById("pubHelpMessageBackDrop").style.display = "none";
	document.getElementById("pubHelpMessageBox").style.display = "none";
}

function submitNewTicket2() {
    var currentUser = Parse.User.current();
    var userid = currentUser.id;
    var user = currentUser.attributes.username;
    var name = currentUser.attributes.firstName;
    var publisher = currentUser.attributes.stripeEmail;
    var pId = currentUser.attributes.pId;
	var orderProgress = cHorderProgress;
	var orderId = cHshareId;
	var oldCstHtml = document.getElementById("cstReplacer").innerHTML;
    var msg = document.getElementById("messageCampSupp").value;
    if (!publisher) { publisher = "Unknown" } else { publisher = "True" }
    if (!pId) { pId = "Unknown" } else { pId = "True" }
    if (!msg || msg == "Please detail the problem you are having with this campaign here...") {
        document.getElementById("ticketMessage").style.borderColor = "red";
    } else {
		msg = "Order Progress is: " + orderProgress + ", the OrderId is: " + orderId + " and " + name + " ("+user+") is reporting: " + msg;
        Parse.Cloud.run('supportTicket', { user: user, name: name, publisher: publisher, pId: pId, msg: msg , userid:userid }, {
            success: function (result) {
                document.getElementById("cstReplacer").innerHTML = "<center style='color:grey'>Your ticket has been sent.<br/>Pletho Support will reply to your campaign help ticket shortly. </center>";
                setTimeout(function (args) {
					document.getElementById("campHelpMessageBackDrop").style.display = "none";
					document.getElementById("campHelpMessageBox").style.display = "none";
                    document.getElementById("cstReplacer").innerHTML = oldCstHtml;
                    document.getElementById("messageCampSupp").textContent = "";
					try{
						 setTimeout(function (args) {document.getElementById("messageCampSupp").focus();}, 200)
						 setTimeout(function (args) {document.getElementById("messageCampSupp").blur();}, 600)
					}catch(e) {}
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
                    var error1 = "Line 173 - Help - Time: " + ts;
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

function sortCampsByPub(page) {
	if(curCampSortType == "pub") {
		if(curCampSortMode == "descending") {
			document.getElementById("dateTimeLeadInformation").textContent = "Campaigns displayed by newest first";
			popSortAlertInfo();
			curCampSortType = "def";
			curCampSortMode = "def";
			openCampaignsPage1(page)
		} else {
			document.getElementById("dateTimeLeadInformation").textContent = "Campaigns displayed by Publisher in descending order";
			popSortAlertInfo();
			curCampSortType = "pub";
			curCampSortMode = "descending";
			openCampaignsPage1(page);
		}
	} else {
		document.getElementById("dateTimeLeadInformation").textContent = "Campaigns displayed by Publisher in ascending order";
		popSortAlertInfo();
		curCampSortType = "pub";
		curCampSortMode = "ascending";
		openCampaignsPage1(page)
	}
}

function sortCampsByPay(page) {
	if(curCampSortType == "pay") {
		if(curCampSortMode == "descending") {
			document.getElementById("dateTimeLeadInformation").textContent = "Campaigns displayed by newest first";
			popSortAlertInfo();
			curCampSortType = "def";
			curCampSortMode = "def";
			openCampaignsPage1(page)
		} else {
			document.getElementById("dateTimeLeadInformation").textContent = "Campaigns displayed by Payment in descending order";
			popSortAlertInfo();
			curCampSortType = "pay";
			curCampSortMode = "descending";
			openCampaignsPage1(page);
		}
	} else {
		document.getElementById("dateTimeLeadInformation").textContent = "Campaigns displayed by Payment in ascending order";
		popSortAlertInfo();
		curCampSortType = "pay";
		curCampSortMode = "ascending";
		openCampaignsPage1(page)
	}
}

function sortCampsByCost(page) {
	if(curCampSortType == "cost") {
		if(curCampSortMode == "descending") {
			document.getElementById("dateTimeLeadInformation").textContent = "Campaigns displayed by newest first";
			popSortAlertInfo();
			curCampSortType = "def";
			curCampSortMode = "def";
			openCampaignsPage1(page)
		} else {
			document.getElementById("dateTimeLeadInformation").textContent = "Campaigns displayed by Cost in descending order";
			popSortAlertInfo();
			curCampSortType = "cost";
			curCampSortMode = "descending";
			openCampaignsPage1(page);
		}
	} else {
		document.getElementById("dateTimeLeadInformation").textContent = "Campaigns displayed by Cost in ascending order";
		popSortAlertInfo();
		curCampSortType = "cost";
		curCampSortMode = "ascending";
		openCampaignsPage1(page)
	}
}

function sortCampsByDate1(page) {
	if(curCampSortType == "date1") {
		if(curCampSortMode == "descending") {
			document.getElementById("dateTimeLeadInformation").textContent = "Campaigns displayed by newest first";
			popSortAlertInfo();
			curCampSortType = "def";
			curCampSortMode = "def";
			openCampaignsPage1(page)
		} else {
			document.getElementById("dateTimeLeadInformation").textContent = "Campaigns displayed by Date/Time in descending order";
			popSortAlertInfo();
			curCampSortType = "date1";
			curCampSortMode = "descending";
			openCampaignsPage1(page);
		}
	} else {
		document.getElementById("dateTimeLeadInformation").textContent = "Campaigns displayed by Date/Time in ascending order";
		popSortAlertInfo();
		curCampSortType = "date1";
		curCampSortMode = "ascending";
		openCampaignsPage1(page)
	}
	
}

function sortCampsByDate2(page) {
	if(curCampSortType == "date2") {
		if(curCampSortMode == "descending") {
			document.getElementById("dateTimeLeadInformation").textContent = "Campaigns displayed by newest first";
			popSortAlertInfo();
			curCampSortType = "def";
			curCampSortMode = "def";
			openCampaignsPage1(page);
		} else {
			document.getElementById("dateTimeLeadInformation").textContent = "Campaigns displayed by Date/Time in descending order";
			popSortAlertInfo();
			curCampSortType = "date2";
			curCampSortMode = "descending";
			openCampaignsPage1(page);
		}
	} else {
		document.getElementById("dateTimeLeadInformation").textContent = "Campaigns displayed by Date/Time in ascending order";
		popSortAlertInfo();
		curCampSortType = "date2";
		curCampSortMode = "ascending";
		openCampaignsPage1(page)
	}
}

function sortCampsByType(page) {
	if(curCampSortType == "type") {
		if(curCampSortMode == "descending") {
			document.getElementById("dateTimeLeadInformation").textContent = "Campaigns displayed by newest first";
			popSortAlertInfo();
			curCampSortType = "def";
			curCampSortMode = "def";
			openCampaignsPage1(page);
		} else {
			document.getElementById("dateTimeLeadInformation").textContent = "Campaigns displayed by Type in descending order";
			popSortAlertInfo();
			curCampSortType = "type";
			curCampSortMode = "descending";
			openCampaignsPage1(page);
		}
	} else {
		document.getElementById("dateTimeLeadInformation").textContent = "Campaigns displayed by Type in ascending order";
		popSortAlertInfo();
		curCampSortType = "type";
		curCampSortMode = "ascending";
		openCampaignsPage1(page)
	}
}

function popSortAlertInfo() {
			fakeNumx += 1;
			if(document.getElementById("dateTimeLeadInformation").style.display == "none") {
				 rememberMe = document.getElementById("dateTimeLeadInformation").textContent;
			}	
			document.getElementById("dateTimeLeadInformation").style.borderBottom = "2px #424242 solid";
			document.getElementById("dateTimeLeadInformation").style.borderLeft = "2px #424242 solid";
			document.getElementById("dateTimeLeadInformation").style.backgroundColor = "#fbda55";
			document.getElementById("dateTimeLeadInformation").style.color = "#424242";
			document.getElementById("dateTimeLeadInformation").style.left = "auto";
			document.getElementById("dateTimeLeadInformation").style.right = "0px";
			document.getElementById("dateTimeLeadInformation").style.paddingLeft = "11px";
			document.getElementById("dateTimeLeadInformation").style.paddingRight = "11px";
			document.getElementById("dateTimeLeadInformation").style.width = "auto";
			document.getElementById("dateTimeLeadInformation").style.display = "block";
			document.getElementById("dateTimeLeadInformation").style.textDecoration = "none";
            document.getElementById("dateTimeLeadInformation").style.opacity = "1";
			var doppleCheck = document.getElementById("dateTimeLeadInformation").textContent + fakeNum;
			setTimeout(function (args) {
			  var curSortText = document.getElementById("dateTimeLeadInformation").textContent + fakeNum;
			  if(curSortText == doppleCheck) {
				document.getElementById("dateTimeLeadInformation").style.opacity = "0";
				setTimeout(function (args) {
					document.getElementById("dateTimeLeadInformation").textContent = rememberMe;
					document.getElementById("dateTimeLeadInformation").style.display = "none";	
					document.getElementById("dateTimeLeadInformation").style.textDecoration = "underline";
					document.getElementById("dateTimeLeadInformation").style.borderBottom = "none";
					document.getElementById("dateTimeLeadInformation").style.borderLeft = "none";
					document.getElementById("dateTimeLeadInformation").style.backgroundColor = "white";
					document.getElementById("dateTimeLeadInformation").style.color = "black";
					document.getElementById("dateTimeLeadInformation").style.width = "100%";
					document.getElementById("dateTimeLeadInformation").style.left = "0px";
					document.getElementById("dateTimeLeadInformation").style.right = "";
					document.getElementById("dateTimeLeadInformation").style.paddingLeft = "0px";
					document.getElementById("dateTimeLeadInformation").style.paddingRight = "0px";
				}, 1200)
			  }
			}, 4200)
}

function checkUrlSafety(advert) {
	if(advert.parentElement.parentElement.parentElement.style.backgroundColor == "rgba(254, 229, 136, 0.2)" || advert.parentElement.parentElement.style.backgroundColor == "rgba(254,229,136,0.2)") {
		passedOverUrl2Check = advert.textContent;
		if(passedOverUrl2Check.indexOf('http://') == -1 && passedOverUrl2Check.indexOf('https://') == -1) {
			passedOverUrl2Check = "http://" + passedOverUrl2Check;
		}
		validURL(passedOverUrl2Check);
		
	} else {	
		urlChecking = false;
	}
}

function validURL(str) {
		  var pattern = new RegExp("^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$");
		  if(!pattern.test(str)) {
			  urlChecking = false;
		  } else {
			urlChecking = true;
			var url2check = 'https://api.mywot.com/0.4/public_link_json2?hosts=' + passedOverUrl2Check + '/&key=7577f8926f41b759a832baa55ba26d70518bba51'
				$.post('check.php', { url: url2check }, function(data) {
					urlSafetyJson = JSON.parse(data, runIt);
					urlChecking = false;
						document.getElementById("urlCheckerBox").accessKey = passedOverUrl2Check;
						document.getElementById("urlCheckerBox").title = passedOverUrl2Check;
						document.getElementById("urlCheckerBox").style.display = "block";
						document.getElementById("campaignsPage2Div").style.display = "block";
					function runIt(key, value) {
						try {var value = value[0][0]} catch(e) { var value = ""}
						if(passedOverUrl2Check.indexOf(key) != -1) {
							if(!!value) {
								var rating = value;
								prevUrlText = document.getElementById("urlCheckerBox2").innerHTML;
								if(value >= 60) {
									var trust = "<b style='color:darkgreen'>SAFE</b>"
								} else if(value >= 40 && value <= 59) {
									var trust = "<b style='color:goldenrod'>NEUTRAL</b>"
								} else if(value <= 39) {
									var trust = "<b style='color:darkred'>UNSAFE</b>"
								} 
							} else {
								var trust = "<b style='color:goldenrod'>UNKNOWN</b>"
								}
							document.getElementById("urlCheckerBox2").innerHTML = "<br/>We have determined a trust rating for this website as: " + trust;
							document.getElementById("urlCheckerBox").children[2].style.textDecoration = "";
						}
					}
				});
		 	}
		}

function closeUrlCheckerUi() {
		document.getElementById("urlCheckerBox2").innerHTML = prevUrlText;
		document.getElementById("urlCheckerBox").children[2].style.textDecoration = "line-through";
		document.getElementById("urlCheckerBox").style.display = "none";
		document.getElementById("campaignsPage2Div").style.display = "none";
	}