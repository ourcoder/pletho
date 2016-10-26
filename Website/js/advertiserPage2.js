var productSearchResultsAll = [];
var objectId;
var productOwner;
var costAmount;
var costAmount2;
var splitTags;
var searchType;
var adTypeSelct;
var sorter = [];
var sort1 = "";
var sort0 = "";
var selLead;
var totalAdCounter0 = 0;
var totalAdCounter1 = 0;
var dateMsg;
var fakeNum = 0;
var splitTags3;

function searchTaggedListings() {
    mainPageLoader2()
    if (windowWidth < 730) {
        document.getElementById("advertiserPage1Div").style.height = "0px";
        document.getElementById("buttonFooterSearch").style.backgroundColor = "white";
        document.getElementById("advertiserPage1Div").style.backgroundColor = "white";
        document.getElementById("advertiserPage2Div").style.bottom = "70px";
        document.getElementById("advancedSearchButton").className = "show"
        document.getElementById("advancedSearchButtonMk2").style.backgroundImage = "url('../images/dblArrowUp.png')";
    }
    searchType = "tagged";
    searchMethod = "tagged";
    sorter = [];
    document.getElementById("advertiserLink").style.opacity = "1";
    document.getElementById("campaignsLink").style.opacity = "1";
    document.getElementById("publisherLink").style.opacity = "1";
    document.getElementById("helpLink").style.opacity = "1";
    //document.getElementById("loggingin").style.backgroundColor = "rgba(0,0,0,.7)";
    //document.getElementById("loggingin").innerHTML = "<br\>Loading search results...";
    //document.getElementById("loggingin").style.display = "block";
    document.getElementById("debug").innerText = "(advertiserPage2)";
    document.getElementById("debug").textContent = "(advertiserPage2)";
    document.body.className = "bkg1";

    //buttons
	document.getElementById("publisherButton1").style.display = "none";
    document.getElementById("publisherButton2").style.display = "none";
    document.getElementById("campaignButton1").style.display = "none";
    document.getElementById("campaignButton2").style.display = "none";
    document.getElementById("campaignShareButton1").style.display = "none";
    document.getElementById("buttonBreaker1").style.opacity = "0";
    document.getElementById("campaignHelpButton1").style.display = "none";
    document.getElementById("publisherHelpButton1").style.display = "none";
    document.getElementById("searchAllButton").style.display = "none";
    document.getElementById("advSearchButton").style.display = "block";
    document.getElementById("normalSearchButton").style.display = "none";
    document.getElementById("normalSearchButton2").style.display = "block";
    document.getElementById("sortResultsButton").style.display = "none";
    document.getElementById("buyAdSlotButton").style.display = "block";
    document.getElementById("ShareWideAdSlotButton").style.display = "block";
    document.getElementById("adCounterButton").style.display = "block";
    //buttons

    document.getElementById("searchBox").style.display = "block";
    document.getElementById("advertiserPage0Div").style.display = "none";
    document.getElementById("advertiserPage2Div").style.display = "block";
    document.getElementById("campaignsPage1Div").style.display = "none";
    document.getElementById("campaignsPage2Div").style.display = "none";
    document.getElementById("publisherPage1Div").style.display = "none";
    document.getElementById("publisherPage2Div").style.display = "none";
    document.getElementById("sortResultsButton").style.display = "none";
    document.getElementById("buyAdSlotButton").style.display = "block";
    document.getElementById("ShareWideAdSlotButton").style.display = "block";
    document.getElementById("buyAdSlotButton").style.opacity = "0.25";
    document.getElementById("ShareWideAdSlotButton").style.opacity = "0.25";
    document.getElementById("adShareButton").style.opacity = "0.25";
    getAllTaggedSearchResults()
}

function getAllTaggedSearchResults(skip) {
    var currentUser = Parse.User.current();
    var currentUserId = currentUser.id;
    mainPageLoader2()
    document.getElementById("advertiserPage2Div").style.opacity = "0.3";
    var counter = 0;
    var allTaggedProductsSearch = Parse.Object.extend("Products");
    var getTaggedProductSearch1 = new Parse.Query(allTaggedProductsSearch);
    getTaggedProductSearch1.equalTo("status", "online")
	if(!!skip) { 
		getTaggedProductSearch1.limit(10);
		getTaggedProductSearch1.skip(skip);
		iGATSskip += 10;
		popLoadingMoreResults();
	 } else {
		clearInterval(iGASRI);
		clearInterval(iGATS);
		incrementalGetAllTaggedSearchResultsInterval()
		getTaggedProductSearch1.limit(10);
		iGATSskip = 10;
	 }
    if (!reOrderVal || reOrderVal == "") {
        if (!selectedPubLength || selectedPubLength == "" || selectedPubLength == undefined || selectedPubLength == "Publisher") {
        } else {
            getTaggedProductSearch1.equalTo("publisher", selectedPubLength)
        }
        if (!selectedCampLength || selectedCampLength == "" | selectedCampLength == undefined || selectedCampLength == "Campaign Length") {
        } else {
            getTaggedProductSearch1.equalTo("campLength", selectedCampLength)
        }
        if (!selectedCountry || selectedCountry == "" || selectedCountry == undefined || selectedCountry == "Country") {
        } else {
            while (selectedCountry.indexOf(' ') != -1) selectedCountry = selectedCountry.replace(' ', '-');
            getTaggedProductSearch1.equalTo("country", selectedCountry.toLowerCase())
        }
        if (!selectedCity || selectedCity == "" || selectedCity == undefined || selectedCity == "City") {
        } else {
            getTaggedProductSearch1.equalTo("city", selectedCity)
        }
        if (!selectedLnb || selectedLnb == "" || selectedLnb == undefined) {
        } else {
            getTaggedProductSearch1.equalTo("lnb", selectedLnb.toLowerCase())
        }
        if (!adTypeArray || adTypeArray == "" || adTypeArray == " " || adTypeArray == undefined) {
        } else {
            getTaggedProductSearch1.containedIn("adType", adTypeArray)
        }
        if (!selectedPriceLow || selectedPriceLow == "" || selectedPriceLow == " " || selectedPriceLow == undefined) {
        } else {
            getTaggedProductSearch1.greaterThan("price", parseInt(selectedPriceLow))
        }
        if (!selectedPriceHigh || selectedPriceHigh == "" || selectedPriceHigh == " " || selectedPriceHigh == undefined) {
        } else {
            getTaggedProductSearch1.lessThan("price", parseInt(selectedPriceHigh))
        }
        if (!selectedLeadLow || selectedLeadLow == "" || selectedLeadLow == " " || selectedLeadLow == undefined) {
        } else {
            getTaggedProductSearch1.greaterThan("leadTime", parseInt(selectedLeadLow))
        }
        if (!selectedLeadHigh || selectedLeadHigh == "" || selectedLeadHigh == " " || selectedLeadHigh == undefined) {
        } else {
            getTaggedProductSearch1.lessThan("leadTime", parseInt(selectedLeadHigh))
        }
        try { var tags = document.getElementById("searchInput").value.toLowerCase() } catch (e) { var tags = "" }
        if (!tags) { } else {
            while (tags.indexOf(',') != -1) tags = tags.replace(',', ' ');
            while (tags.indexOf('.') != -1) tags = tags.replace('.', ' ');
            while (tags.indexOf('#') != -1) tags = tags.replace('#', ' ');
            var splitTags1 = tags.replace(/\s{2,}/g, ' ');
            splitTags3 = splitTags1.replace(/ /g, '+');
            var splitTags2 = splitTags1.split(" ");
            getTaggedProductSearch1.containsAll("tags", splitTags2);
        }
        if (!sorter[1]) {
            getTaggedProductSearch1.ascending("price");
        } else {
			if(sorter[1] == "publisher") { var sortMeth = "Publisher"} else
			if(sorter[1] == "adType") { var sortMeth = "Advert Type"} else
			if(sorter[1] == "city") { var sortMeth = "City"} else
			if(sorter[1] == "campLength") { var sortMeth = "Campaign Length"} else
			if(sorter[1] == "reach") { var sortMeth = "Reach"} else
			if(sorter[1] == "price") { var sortMeth = "Cost"}
            if (sorter[0] == "Ascending") {
                getTaggedProductSearch1.ascending(sorter[1]);
				fakeNum += 1;
				//Results are shown by sorter[1] in ascending order
				if(document.getElementById("dateTimeLeadInformation").style.display == "none") {
					rememberMe = document.getElementById("dateTimeLeadInformation").textContent;
				}
				if(!!skip) {
					document.getElementById("dateTimeLeadInformation").textContent = "Loading more results...";
				} else {
					document.getElementById("dateTimeLeadInformation").textContent = "Results displayed by "+sortMeth+" in ascending order";
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
            } else {
                getTaggedProductSearch1.descending(sorter[1]);
				fakeNum += 1;
				//Results are shown by sorter[1] in descending order
				if(document.getElementById("dateTimeLeadInformation").style.display == "none") {
					 rememberMe = document.getElementById("dateTimeLeadInformation").textContent;
				}
				if(!!skip) {
					document.getElementById("dateTimeLeadInformation").textContent = "Loading more results...";
				} else {
					document.getElementById("dateTimeLeadInformation").textContent = "Results displayed by "+sortMeth+" in descending order";
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
        }
    } else {
        getTaggedProductSearch1.equalTo("objectId", reOrderVal)
    }
    getTaggedProductSearch1.find({
        success: function (results) {
            reOrderVal = "";
            totalAdCounter1 = 0;
            if(!!skip) { 
        		totalAdCounter0 = totalAdCounter0 + results.length
				} else {totalAdCounter0 = results.length}
            if (results.length == 0) {
				clearInterval(iGATS);
				clearInterval(iGASRI);
                if(!!skip) { 
        		totalAdCounter0 = totalAdCounter0 + results.length
				} else {totalAdCounter0 = results.length}
				if(!!skip) {  } else {
                document.getElementById("advertiserPage2Div").innerHTML = "";
                document.getElementById("advertiserPage2Div").innerHTML += '<div class="pibRow5"> <div class="pibCountry223" accesskey="publisher" title="publisher"  onclick="sortResultsSubmit(this.accessKey,this.title)">Publisher</div> <div class="pibAdType223" accesskey="adType" title="adType" title="adType" onclick="sortResultsSubmit(this.accessKey,this.title)">Ad Type</div> <div class="pibCity223" accesskey="city" title="city" onclick="sortResultsSubmit(this.accessKey,this.title)">City</div> <div class="pibCampTime223" onclick="sortResultsSubmit(this.accessKey,this.title)"  title="campLength" accesskey="campLength">Length</div>  <div class="pibReach223" accesskey="reach" title="reach" onclick="sortResultsSubmit(this.accessKey,this.title)">Reach</div> <div class="pibCost223" accesskey="price" title="price" onclick="sortResultsSubmit(this.accessKey,this.title)">Cost</div>  </div><br/><div style="text-align:center;width:97.7%;">Sorry, there is no results for this search.</div>';
				}
				iGATSrunning = 0;
                endSearchResultPost()
            } else {
				if(!skip) {
                document.getElementById("advertiserPage2Div").innerHTML = "";
                document.getElementById("advertiserPage2Div").innerHTML += '<div class="pibRow5"> <div class="pibCountry223" accesskey="publisher" title="publisher"  onclick="sortResultsSubmit(this.accessKey,this.title)">Publisher</div> <div class="pibAdType223" accesskey="adType" title="adType" title="adType" onclick="sortResultsSubmit(this.accessKey,this.title)">Ad Type</div> <div class="pibCity223" accesskey="city" title="city" onclick="sortResultsSubmit(this.accessKey,this.title)">City</div> <div class="pibCampTime223" onclick="sortResultsSubmit(this.accessKey,this.title)"  title="campLength" accesskey="campLength">Length</div>  <div class="pibReach223" accesskey="reach" title="reach" onclick="sortResultsSubmit(this.accessKey,this.title)">Reach</div> <div class="pibCost223" accesskey="price" title="price" onclick="sortResultsSubmit(this.accessKey,this.title)">Cost</div>  </div>';
				}
                for (var i = 0; i < results.length; i++) {
					if(results.length < 10) { clearInterval(iGATS); clearInterval(iGASRI); }
                    counter += 1;
                    var id = results[i].id
                    var seller = results[i].attributes.user
                    var quantity = results[i].attributes.quantity
                	var stock = results[i].attributes.unlimitedStock
                    var country = results[i].attributes.country
                    var country2 = country;
                    while (country2.indexOf('-') != -1) country2 = country2.replace('-', ' ');
                    var reach = results[i].attributes.reach
					var rpMk1 = parseInt(reach);
					var rpMk1b = rpMk1.toString();
					if(rpMk1b.length < 5) {
						var rpMk2 = Math.ceil(rpMk1/100.0)* 100;
					} else if(rpMk1b.length >= 5 && rpMk1b.length < 7) {
						var rpMk2 = Math.ceil(rpMk1/1000.0)* 1000;
					}else if(rpMk1b.length >= 7 && rpMk1b.length < 9) {
						var rpMk2 = Math.ceil(rpMk1/10000.0)* 10000;
					}else if(rpMk1b.length >= 9) {
						var rpMk2 = Math.ceil(rpMk1/100000.0)* 100000;
					}
					var reachWithCommas = rpMk2.toLocaleString("en");		
					if(reachWithCommas.indexOf(",") == -1) {
						while (/(\d+)(\d{3})/.test(reachWithCommas.toString())){
      						reachWithCommas = reachWithCommas.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    					}
					}		
					var parts = reachWithCommas.split(",");
					if(parts.length > 2){
						reach = (parseInt(parts.join(""), 10) / Math.pow(1000, parts.length-1));
						reach += ["K", "M", "B"][parts.length-2]; 
					} else{
						reach = Math.round(parseInt(parts.join(""), 10) / Math.pow(1000, parts.length-1));
						reach += ["K", "M", "B"][parts.length-2];   
					} 
                    var city = results[i].attributes.city
                    var price = results[i].attributes.price
                    var adType = results[i].attributes.adType
                    var lead = results[i].attributes.leadTime
                    var publisher = results[i].attributes.publisher
                    var description = results[i].attributes.description
                    var lnb = results[i].attributes.lnb
                    var campLength = results[i].attributes.campLength
                    if (parseInt(campLength) % 2629800 == 0) {
                        if (parseInt(campLength) / 2629800 > 1) {
                            campLength = (parseInt(campLength) / 2629800) + " Months"
                        } else { campLength = "1 Month" }
                    }
                    else if (parseInt(campLength) % 604800 == 0) {
                        if (parseInt(campLength) / 604800 > 1) {
                            campLength = (parseInt(campLength) / 604800) + " Weeks"
                        } else { campLength = "1 Week" }
                    }
                    else if (parseInt(campLength) % 86400 == 0) {
                        if (parseInt(campLength) / 86400 > 1) {
                            campLength = (parseInt(campLength) / 86400) + " Days"
                        } else { campLength = "1 Day" }
                    }
                    else if (parseInt(campLength) % 3600 == 0) {
                        if (parseInt(campLength) / 3600 > 1) {
                            campLength = (parseInt(campLength) / 3600) + " Hours"
                        } else { campLength = "1 Hour" }
                    }
                    else if (parseInt(campLength) % 60 == 0) {
                        if (parseInt(campLength) / 60 > 1) {
                            campLength = (parseInt(campLength) / 60) + " Minutes"
                        } else { campLength = "1 Minute" }
                    }
                    else { campLength = parseInt(campLength) + " Seconds" }
                    if (lnb == "both") { lnb = "Local & National" }
                    var cur = results[i].attributes.currency.toUpperCase();
                    var str = results[i].attributes.price.toString();
                    var strlength = str.length;
                    var prcA = str.substr(0, strlength - 2);
                    var prcB = str.substr(strlength - 2, 2);
                    if (cur != "eur") {
                        var prc = prcA + "." + prcB;
                    } else {
                        var prc = prcA + "," + prcB;
                    }
                    try { var logo = "https://s3.amazonaws.com/files.parsetfss.com/341d971a-dd60-4cb5-97bb-1c043c536442/" + results[i].attributes.logo._name.replace(/\s+/g, '%20') || "" } catch (e) { var logo = "../images/exampleLogo.png" }
                    if (!logo || logo == "") { logo = "../images/exampleLogo.png" }
                    if (quantity == "0" && seller != currentUserId && stock == 1) {
                        totalAdCounter1 += 1;
                    } else {
                        document.getElementById("advertiserPage2Div").innerHTML += '<div class="pibRow4" onclick="hideShowProductLine(this,this.accessKey,this.title)" title='+ id +' accessKey='+ id +'> <div class="pibCountry22">' + publisher + '</div> <div class="pibAdType22">' + adType + '</div> <div class="pibCity22">' + city + '</div> <div class="pibCampTime22">' + campLength + '</div>  <div class="pibReach22">' + reach + '</div> <div class="pibCost22">' + cur + ':<br/>' + prc + '</div><a name="'+ id +'-end" id="'+ id +'-end"></a> </div><div class="productInformationBox" id="' + id + '" title="' + seller + '|' + price + '" accessKey="' + seller + '|' + price + '" onclick="highlightSearchResult(this.id,this.accessKey,this.children[2].children[4].textContent,this)"><a onclick="navigating=true" name="'+ id +'-tag" id="'+ id +'-tag"></a> <div class="pibRow1"> <div class="pibCountry1">Country</div> <div class="pibCity1">City</div> <div class="pibLnb1">Ad Type</div> <div class="pibReach1">Reach</div> <div class="pibCost1">Cost</div> <div class="pibLeadTime1">Lead Time</div> </div> <div class="pibRow2"> <div class="pibCountry2" style="background-image:url(../images/countries/' + country.toLowerCase() + '.png)">' + country2 + '</div> <div class="pibCity2">' + city + '</div> <div class="pibLnb2">' + adType + '</div> <div class="pibReach2">' + reach + '</div> <div class="pibCost2">' + cur + ':<br/>' + prc + '</div> <div class="pibLeadTime2" id="' + stock + '" accessKey="' + quantity + '" title="' + quantity + '">' + lead + ' hours</div> </div> <div class="pibRow3"> <div class="pibPublisher" style="background-image:url(' + logo + ')" ><img class="pibImg" src=' + logo + ' /><br/>' + publisher + '</div> <div class="pibLnb"> ' + lnb + ' </div><div class="pibCampLength"> Length: ' + campLength + ' </div><div class="pibDescription"> ' + description + ' </div> </div> <div> </div> </div>'
                    }
                    if (counter == results.length) {
                        //document.getElementById("loggingin").innerHTML = "<br\>"+ results.length +" results found...";
						if(!!splitTags3) {
							if(splitTags3.charAt(0) == '+') { 
								splitTags3 = splitTags3.substring(1);
							}
							window.location = '#Advertiser:Search-Tags+Keywords:' + splitTags3;
							navigating = true;
						}
						iGATSrunning = 0;
                        endSearchResultPost()
                    }
                }
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
                var error1 = "Line 190 - AdvertiserPage2 - Time: " + ts;
                try { var error2 = error.message; } catch (e) { var error2 = "Unknown - Use timestamp to locate in DB logs" }
                Parse.Cloud.run('sendBug', { user: user, error1: error1, error2: error2 }, {
                    success: function (result) { },
                    error: function (result) { }
                });
                //bugreport					
                var exit = true
                endSearchResultPost(exit)
                setTimeout(function (args) {
                    document.getElementById("serverMsgBackdrop").style.display = "none";
                    document.getElementById("serverMsgBox").style.display = "none";
                }, 700)
            }, 4200)
        }
    });
}

function searchAllListings() {
    mainPageLoader2()
    if (windowWidth < 730) {
        var advertiserPage1Div = document.getElementById('advertiserPage1Div').style.display;
        if (advertiserPage1Div == 'block') {
            advancedSearch()
        }
        document.getElementById("advertiserPage1Div").style.height = "0px";
        document.getElementById("buttonFooterSearch").style.backgroundColor = "white";
        document.getElementById("advertiserPage1Div").style.backgroundColor = "white";
        document.getElementById("advertiserPage2Div").style.bottom = "70px";

    }
    searchType = "all";
    searchMethod = "all";
    sorter = [];
    document.getElementById("advertiserLink").style.opacity = "1";
    document.getElementById("campaignsLink").style.opacity = "1";
    document.getElementById("publisherLink").style.opacity = "1";
    document.getElementById("helpLink").style.opacity = "1";
    //document.getElementById("loggingin").style.backgroundColor = "rgba(0,0,0,.7)";
    //document.getElementById("loggingin").innerHTML = "<br\>Loading all...";
    //document.getElementById("loggingin").style.display = "block";
    document.getElementById("debug").innerText = "(advertiserPage2)";
    document.getElementById("debug").textContent = "(advertiserPage2)";
    document.body.className = "bkg3";
    document.getElementById("advertiserPage0Div").style.display = "none";
    document.getElementById("advertiserPage2Div").style.display = "block";
    //buttons
	document.getElementById("publisherButton1").style.display = "none";
    document.getElementById("publisherButton2").style.display = "none";
    document.getElementById("campaignButton1").style.display = "none";
    document.getElementById("campaignButton2").style.display = "none";
    document.getElementById("campaignShareButton1").style.display = "none";
    document.getElementById("buttonBreaker1").style.opacity = "0";
    document.getElementById("campaignHelpButton1").style.display = "none";
    document.getElementById("publisherHelpButton1").style.display = "none";
    document.getElementById("searchAllButton").style.display = "none";
    document.getElementById("advSearchButton").style.display = "block";
    document.getElementById("normalSearchButton").style.display = "none";
    document.getElementById("normalSearchButton2").style.display = "block";
    document.getElementById("sortResultsButton").style.display = "none";
    document.getElementById("buyAdSlotButton").style.display = "block";
    document.getElementById("ShareWideAdSlotButton").style.display = "block";
    //buttons
    document.getElementById("searchBox").style.display = "block";
    document.getElementById("campaignsPage1Div").style.display = "none";
    document.getElementById("campaignsPage2Div").style.display = "none";
    document.getElementById("publisherPage1Div").style.display = "none";
    document.getElementById("publisherPage2Div").style.display = "none";
    document.getElementById("sortResultsButton").style.display = "none";
    document.getElementById("buyAdSlotButton").style.display = "block";
    document.getElementById("ShareWideAdSlotButton").style.display = "block";
    document.getElementById("buyAdSlotButton").style.opacity = "0.25";
    document.getElementById("ShareWideAdSlotButton").style.opacity = "0.25";
    document.getElementById("adShareButton").style.opacity = "0.25";
    getAllSearchResults()
}

function getAllSearchResults(skip) {
    var currentUser = Parse.User.current();
    var currentUserId = currentUser.id;
    mainPageLoader2()
    document.getElementById("advertiserPage2Div").style.opacity = "0.3";
    var counter = 0;
    var allProductsSearch = Parse.Object.extend("Products");
    var getProductSearch1 = new Parse.Query(allProductsSearch);
    getProductSearch1.equalTo("status", "online")
	if(!!skip) { 
		getProductSearch1.limit(10);
		getProductSearch1.skip(skip);
		iGASRIskip += 10;
		popLoadingMoreResults();
	 } else {
		clearInterval(iGASRI);
		clearInterval(iGATS);
		incrementalGetAllSearchResultsInterval()
		getProductSearch1.limit(10);
		iGASRIskip = 10;
	 }
    if (!sorter[1]) {
        getProductSearch1.ascending("price");
    } else {
		if(sorter[1] == "publisher") { var sortMeth = "Publisher"} else
		if(sorter[1] == "adType") { var sortMeth = "Advert Type"} else
		if(sorter[1] == "city") { var sortMeth = "City"} else
		if(sorter[1] == "campLength") { var sortMeth = "Campaign Length"} else
		if(sorter[1] == "reach") { var sortMeth = "Reach"} else
		if(sorter[1] == "price") { var sortMeth = "Cost"}
        if (sorter[0] == "Ascending") {
            getProductSearch1.ascending(sorter[1]);
			fakeNum += 1;
			//Results are shown by sorter[1] in ascending order 
			if(document.getElementById("dateTimeLeadInformation").style.display == "none") {
				 rememberMe = document.getElementById("dateTimeLeadInformation").textContent;
			}
			if(!!skip) {
				document.getElementById("dateTimeLeadInformation").textContent = "Loading more results...";
			} else {
				document.getElementById("dateTimeLeadInformation").textContent = "Results displayed by "+sortMeth+" in ascending order";
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
        } else {
            getProductSearch1.descending(sorter[1]);
			fakeNum += 1;
			//Results are shown by sorter[1] in descending order
			if(document.getElementById("dateTimeLeadInformation").style.display == "none") {
				 rememberMe = document.getElementById("dateTimeLeadInformation").textContent;
			}
			if(!!skip) {
				document.getElementById("dateTimeLeadInformation").textContent = "Loading more results...";
			} else {
				document.getElementById("dateTimeLeadInformation").textContent = "Results displayed by "+sortMeth+" in descending order";
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
    }
    getProductSearch1.find().then(function (results) {
        totalAdCounter1 = 0;
		if(!!skip) { 
        totalAdCounter0 = totalAdCounter0 + results.length
		} else {totalAdCounter0 = results.length}
        if (results.length == 0) {
			clearInterval(iGASRI);
			clearInterval(iGATS);
			if(!!skip) { } else {
            document.getElementById("advertiserPage2Div").innerHTML = "";
            document.getElementById("advertiserPage2Div").innerHTML += '<div class="pibRow5"> <div class="pibCountry223" accesskey="publisher" title="publisher"  onclick="sortResultsSubmit(this.accessKey,this.title)">Publisher</div> <div class="pibAdType223" accesskey="adType" title="adType" title="adType" onclick="sortResultsSubmit(this.accessKey,this.title)">Ad Type</div> <div class="pibCity223" accesskey="city" title="city" onclick="sortResultsSubmit(this.accessKey,this.title)">City</div> <div class="pibCampTime223" onclick="sortResultsSubmit(this.accessKey,this.title)"  title="campLength" accesskey="campLength">Length</div>  <div class="pibReach223" accesskey="reach" title="reach" onclick="sortResultsSubmit(this.accessKey,this.title)">Reach</div> <div class="pibCost223" accesskey="price" title="price" onclick="sortResultsSubmit(this.accessKey,this.title)">Cost</div>  </div><br/><div style="text-align:center;width:97.7%;">Sorry, there is no results for this search.</div>';
			}
			iGASRIrunning = 0;
            endSearchResultPost()	
        } else {
			if (!skip) {
            document.getElementById("advertiserPage2Div").innerHTML = "";
            document.getElementById("advertiserPage2Div").innerHTML += '<div class="pibRow5"> <div class="pibCountry223" accesskey="publisher" title="publisher"  onclick="sortResultsSubmit(this.accessKey,this.title)">Publisher</div> <div class="pibAdType223" accesskey="adType" title="adType" title="adType" onclick="sortResultsSubmit(this.accessKey,this.title)">Ad Type</div> <div class="pibCity223" accesskey="city" title="city" onclick="sortResultsSubmit(this.accessKey,this.title)">City</div> <div class="pibCampTime223" onclick="sortResultsSubmit(this.accessKey,this.title)"  title="campLength" accesskey="campLength">Length</div>  <div class="pibReach223" accesskey="reach" title="reach" onclick="sortResultsSubmit(this.accessKey,this.title)">Reach</div> <div class="pibCost223" accesskey="price" title="price" onclick="sortResultsSubmit(this.accessKey,this.title)">Cost</div>  </div>';
			}
            for (var i = 0; i < results.length; i++) {
				if(results.length < 10) { clearInterval(iGASRI); clearInterval(iGATS); }
                counter += 1;
                var id = results[i].id
                var seller = results[i].attributes.user
                var country = results[i].attributes.country
                var quantity = results[i].attributes.quantity
                var stock = results[i].attributes.unlimitedStock
                var country2 = country;
                while (country2.indexOf('-') != -1) country2 = country2.replace('-', ' ');
                    var reach = results[i].attributes.reach
					var rpMk1 = parseInt(reach);
					var rpMk1b = rpMk1.toString();
					if(rpMk1b.length < 5) {
						var rpMk2 = Math.ceil(rpMk1/100.0)* 100;
					} else if(rpMk1b.length >= 5 && rpMk1b.length < 7) {
						var rpMk2 = Math.ceil(rpMk1/1000.0)* 1000;
					}else if(rpMk1b.length >= 7 && rpMk1b.length < 9) {
						var rpMk2 = Math.ceil(rpMk1/10000.0)* 10000;
					}else if(rpMk1b.length >= 9) {
						var rpMk2 = Math.ceil(rpMk1/100000.0)* 100000;
					}
					var reachWithCommas = rpMk2.toLocaleString("en");	
					if(reachWithCommas.indexOf(",") == -1) {
						while (/(\d+)(\d{3})/.test(reachWithCommas.toString())){
      						reachWithCommas = reachWithCommas.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    					}
					}		
					var parts = reachWithCommas.split(",");
					if(parts.length > 2){
						reach = (parseInt(parts.join(""), 10) / Math.pow(1000, parts.length-1));
						reach += ["K", "M", "B"][parts.length-2]; 
					} else{
						reach = Math.round(parseInt(parts.join(""), 10) / Math.pow(1000, parts.length-1));
						reach += ["K", "M", "B"][parts.length-2];   
					} 
                var city = results[i].attributes.city
                var price = results[i].attributes.price
                var adType = results[i].attributes.adType
                var lead = results[i].attributes.leadTime
                var publisher = results[i].attributes.publisher
                var description = results[i].attributes.description
                var lnb = results[i].attributes.lnb
                var campLength = results[i].attributes.campLength
                if (parseInt(campLength) % 2629800 == 0) {
                    if (parseInt(campLength) / 2629800 > 1) {
                        campLength = (parseInt(campLength) / 2629800) + " Months"
                    } else { campLength = "1 Month" }
                }
                else if (parseInt(campLength) % 604800 == 0) {
                    if (parseInt(campLength) / 604800 > 1) {
                        campLength = (parseInt(campLength) / 604800) + " Weeks"
                    } else { campLength = "1 Week" }
                }
                else if (parseInt(campLength) % 86400 == 0) {
                    if (parseInt(campLength) / 86400 > 1) {
                        campLength = (parseInt(campLength) / 86400) + " Days"
                    } else { campLength = "1 Day" }
                }
                else if (parseInt(campLength) % 3600 == 0) {
                    if (parseInt(campLength) / 3600 > 1) {
                        campLength = (parseInt(campLength) / 3600) + " Hours"
                    } else { campLength = "1 Hour" }
                }
                else if (parseInt(campLength) % 60 == 0) {
                    if (parseInt(campLength) / 60 > 1) {
                        campLength = (parseInt(campLength) / 60) + " Minutes"
                    } else { campLength = "1 Minute" }
                }
                else { campLength = parseInt(campLength) + " Seconds" }
                if (lnb == "both") { lnb = "Local & National" }
                var cur = results[i].attributes.currency.toUpperCase();
                var str = results[i].attributes.price.toString();
                var strlength = str.length;
                var prcA = str.substr(0, strlength - 2);
                var prcB = str.substr(strlength - 2, 2);
                if (cur != "eur") {
                    var prc = prcA + "." + prcB;
                } else {
                    var prc = prcA + "," + prcB;
                }
                var description = results[i].attributes.description
                try { var logo = "https://s3.amazonaws.com/files.parsetfss.com/341d971a-dd60-4cb5-97bb-1c043c536442/" + results[i].attributes.logo._name.replace(/\s+/g, '%20') || "" } catch (e) { var logo = "../images/exampleLogo.png" }
                if (!logo || logo == "") { logo = "../images/exampleLogo.png" }
                if (quantity == "0" && seller != currentUserId && stock == 1) {
                    totalAdCounter1 += 1;
                } else {
                    document.getElementById("advertiserPage2Div").innerHTML += '<div class="pibRow4" onclick="hideShowProductLine(this,this.accessKey,this.title)" title='+ id +' accessKey='+ id +'> <div class="pibCountry22">' + publisher + '</div> <div class="pibAdType22">' + adType + '</div> <div class="pibCity22">' + city + '</div> <div class="pibCampTime22">' + campLength + '</div>  <div class="pibReach22">' + reach + '</div> <div class="pibCost22">' + cur + ':<br/>' + prc + '</div><a name="'+ id +'-end" id="'+ id +'-end"></a> </div><div class="productInformationBox" id="' + id + '" title="' + seller + '|' + price + '" accessKey="' + seller + '|' + price + '" onclick="highlightSearchResult(this.id,this.accessKey,this.children[2].children[4].textContent,this)"><a onclick="navigating=true" name="'+ id +'-tag" id="'+ id +'-tag"></a> <div class="pibRow1"> <div class="pibCountry1">Country</div> <div class="pibCity1">City</div> <div class="pibLnb1">Ad Type</div> <div class="pibReach1">Reach</div> <div class="pibCost1">Cost</div> <div class="pibLeadTime1">Lead Time</div> </div> <div class="pibRow2"> <div class="pibCountry2" style="background-image:url(../images/countries/' + country.toLowerCase() + '.png)">' + country2 + '</div> <div class="pibCity2">' + city + '</div> <div class="pibLnb2">' + adType + '</div> <div class="pibReach2">' + reach + '</div> <div class="pibCost2">' + cur + ':<br/>' + prc + '</div> <div class="pibLeadTime2" id="' + stock + '" accessKey="' + quantity + '" title="' + quantity + '">' + lead + ' hours</div> </div> <div class="pibRow3"> <div class="pibPublisher" style="background-image:url(' + logo + ')" ><img class="pibImg" src=' + logo + ' /><br/>' + publisher + '</div> <div class="pibLnb"> ' + lnb + ' </div><div class="pibCampLength"> Length: ' + campLength + ' </div><div class="pibDescription"> ' + description + ' </div> </div> <div> </div> </div>'
                }
                if (counter == results.length) {
                    //document.getElementById("loggingin").innerHTML = "<br\>"+ results.length +" results found...";
					iGASRIrunning = 0;
                    endSearchResultPost()
                }
            }
        }
    });
}

function endSearchResultPost(exit) {
    /////////// LOAD COMPLETE - HIDE LOAD SCREEN  
	if(totalAdCounter0 - totalAdCounter1 != 0) {
    document.getElementById("adCounterButton").children[1].innerHTML = (totalAdCounter0 - totalAdCounter1).toString() + "/" + totalAdCounter.toString() + "<p class='comAds'>(Comparable Adverts)</p>";}
    document.getElementById("advertiserPage2Div").style.opacity = "1";
    setTimeout(function (args) {
        document.getElementById("loadingGraphic2").src = "/images/loader/85p.jpg";
        document.getElementById("mainPageLoader2").style.opacity = "0";
        setTimeout(function (args) {
            document.getElementById("mainPageLoader2").style.display = "none";
            document.getElementById("loadingGraphic2").src = "/images/loader/18p.jpg";
        }, 500)
    }, 100)
    if (!exit) { } else {
        setTimeout(function (args) {
            advertiserPage1Load()
        }, 100)
    }
}

function highlightSearchResult(product, ownerPrice, other, data) {
	if(!ownerPrice){
		ownerPrice = data.title;
	}
    if (data.style.backgroundColor == "rgba(254, 229, 136, 0.2)" || data.style.backgroundColor == "rgba(254,229,136,0.2)" ) {		
		setTimeout(function (args) { 
			window.location.hash = "#" + product + "-end";	
			document.getElementById("content").style.height = parseInt(window.innerHeight) + "px";	
			setTimeout(function (args) { 
				window.location.hash = "#" + product + "-end";
				document.getElementById("content").style.height = "100%";	
	 		}, 100)
	 	}, 100)
        data.style.backgroundColor = "transparent";
        data.style.border = "transparent";
        data.style.display = "none";
        data.previousElementSibling.style.display = "block";
        document.getElementById("buyAdSlotButton").style.opacity = "0.25";
    	document.getElementById("ShareWideAdSlotButton").style.opacity = "0.25";
    	document.getElementById("adShareButton").style.opacity = "0.25";
    } else {	
		navigating=true;
		setTimeout(function (args) { 
			window.location.hash = "#" + product + "-tag";
	 	}, 100)
		document.getElementById("content").style.height = parseInt(window.innerHeight) + "px";			
		navigating=true;
		setTimeout(function (args) { 
			window.location.hash = "#" + product + "-tag";
			document.getElementById("content").style.height = "100%";	
	 	}, 100)
		adShareButtonPop(product);
        selLead = data.children[2].children[5].textContent;
        var number = 0;
        objectId = product;
        var jumble = ownerPrice.split("|")
        productOwner = jumble[0];
        costAmount = jumble[1];
        costAmount2 = other;
        var productBoxes = document.getElementsByClassName("productInformationBox");
        for (var i = 0; i < productBoxes.length; i++) {
            number += 1;
            productBoxes[i].style.backgroundColor = "transparent";
            productBoxes[i].style.border = "transparent";
            if (number == productBoxes.length) {
                if (windowWidth < 730 && document.getElementById("advancedSearchButton").className == "hide") {
                    advancedSearch()
                }
                document.getElementById([product]).style.backgroundColor = "rgba(254, 229, 136, 0.2)";
                document.getElementById([product]).style.borderRightStyle = "solid";
                document.getElementById([product]).style.borderRightWidth = "7px";
                document.getElementById([product]).style.borderRightColor = "rgba(254,229,136,0.05)";
                document.getElementById("buyAdSlotButton").style.opacity = "1";
    			document.getElementById("ShareWideAdSlotButton").style.opacity = "1";
                var currentUser = Parse.User.current();
                var currentUserId = currentUser.id;
                if (productOwner == currentUserId) {
                    var modPrice = costAmount2.split(':');
                    var modQuantity = data.children[2].children[5].accessKey;
					if(!modQuantity){
                    	var modQuantity = data.children[2].children[5].title;
					}
                    var modStock = data.children[2].children[5].id;
                    var modLeadTime = data.children[2].children[5].textContent;
                    document.getElementById("modQuantity").value = modQuantity;
					if(modStock == 0) {
						document.getElementById("modQuantity").disabled = false
						document.getElementById("modStock").checked = false
					} else {
						document.getElementById("modQuantity").disabled = true
						document.getElementById("modStock").checked = true
					}
                    document.getElementById("modPrice").value = modPrice[1];
                    document.getElementById("modLeadTime").value = modLeadTime;
                    document.getElementById("buyAdSlotButton").children[0].innerText = "Modify";
                    document.getElementById("buyAdSlotButton").children[0].textContent = "Modify";
                } else {
                    adTypeSelct = data.children[2].children[2].textContent.toLowerCase();
                    document.getElementById("buyAdSlotButton").children[0].innerText = "Buy";
                    document.getElementById("buyAdSlotButton").children[0].textContent = "Buy";
                }
            }
        }
    }
}

function sortResultsButton() {
    if (document.getElementById("sortResultsButton").style.opacity == "0.25") { } else {
        toggleAscDesc()
        if (document.getElementById("sortResultsButton").children[0].textContent == "Asc") {
            document.getElementById("sortResultsButton").children[0].textContent = "Desc";
        }
        else {
            document.getElementById("sortResultsButton").children[0].textContent = "Asc";
        }
    }
}

function exitSortResults() {
    document.getElementById("resultsOverlay").style.display = "none";
    document.getElementById("sortingHat").style.display = "none";
}

function exitBuyBox() {
	document.getElementById("costConfirmBox4").style.opacity = "0";
    document.getElementById("resultsOverlay").style.display = "none";
    document.getElementById("productOrderingBox").style.display = "none";
    document.getElementById("dateTimeLeadInformation").style.opacity = "0";
    setTimeout(function (args) { document.getElementById("dateTimeLeadInformation").style.display = "none"; }, 500)

}

function sortResultsSubmit(selected,bypass) {
	if(!selected) {selected = bypass}
		clearInterval(iGASRI);
		clearInterval(iGATS);
    try {
        var advertiserPage1Div = document.getElementById('advertiserPage1Div').style.display;
        if (windowWidth < 730 && advertiserPage1Div == 'block') {
            advancedSearch()
        } else {
            continueSort()
        }
    } catch (e) {
        continueSort()
    }
    function continueSort() {
        if (searchType == "tagged") {
            if (selected == sort0) {
                sort1 = "Descending";
                sort0 = "";
            } else {
                sort1 = "Ascending";
                sort0 = selected;
            }
            var sort2 = selected;
            sorter = [sort1, sort2];
            document.getElementById("advertiserPage2Div").innerHTML = "";
            //document.getElementById("loggingin").style.backgroundColor = "rgba(0,0,0,.7)";
            //document.getElementById("loggingin").innerHTML = "<br\>Loading search results...";
            document.getElementById("buyAdSlotButton").style.opacity = "0.25";
    		document.getElementById("adShareButton").style.opacity = "0.25";
   		 	document.getElementById("ShareWideAdSlotButton").style.opacity = "0.25";
            //document.getElementById("loggingin").style.display = "block";
            exitSortResults()
            getAllTaggedSearchResults()
        }
        else {
            if (selected == sort0) {
                sort1 = "Descending";
                sort0 = "";
            } else {
                sort1 = "Ascending";
                sort0 = selected;
            }
            var sort2 = selected;
            sorter = [sort1, sort2];
            document.getElementById("advertiserPage2Div").innerHTML = "";
            //document.getElementById("loggingin").style.backgroundColor = "rgba(0,0,0,.7)";
            //document.getElementById("loggingin").innerHTML = "<br\>Loading search results...";
            document.getElementById("buyAdSlotButton").style.opacity = "0.25";
    		document.getElementById("adShareButton").style.opacity = "0.25";
   		 	document.getElementById("ShareWideAdSlotButton").style.opacity = "0.25";
            //document.getElementById("loggingin").style.display = "block";
            exitSortResults()
            getAllSearchResults()
        }
    }
}

function toggleAscDesc() {
    if (document.getElementById("ascDesc").innerText == "Descending" || document.getElementById("ascDesc").textContent == "Descending") {
        document.getElementById("ascDesc").innerText = "Ascending";
        document.getElementById("ascDesc").textContent = "Ascending";
    } else {
        document.getElementById("ascDesc").innerText = "Descending";
        document.getElementById("ascDesc").textContent = "Descending";
    }
}

function buyAdSlotButton() {
    if (document.getElementById("buyAdSlotButton").children[0].innerText != "Modify" ||
		document.getElementById("buyAdSlotButton").children[0].textContent != "Modify") {
        if (document.getElementById("buyAdSlotButton").style.opacity == "0.25") { } else {
            //popup purchase box with ad url box, calendar for date/time and flexibility	
			document.getElementById("dateTimeLeadInformation").style.backgroundColor = "white";
			document.getElementById("dateTimeLeadInformation").style.color = "black";
			document.getElementById("dateTimeLeadInformation").style.fontSize = "16px";
			document.getElementById("dateTimeLeadInformation").style.height = "30px";
			document.getElementById("dateTimeLeadInformation").style.textDecoration = "underline";		
            document.getElementById("dateTimeLeadInformation").style.display = "block";
            document.getElementById("dateTimeLeadInformation").style.opacity = "1";
            runLeadCalc()
            if (adTypeSelct == "radio" || adTypeSelct == "tv") {
                document.getElementById("pickaTime").style.opacity = "1";
                document.getElementById("pickaTime").style.height = "18px";
                document.getElementById("pickaTime").style.display = "block";
            } else {
                document.getElementById("pickaTime").style.opacity = "0";
                document.getElementById("pickaTime").style.height = "0px";
                document.getElementById("pickaTime").style.display = "none";
            }
            document.getElementById("resultsOverlay").style.display = "block";
            document.getElementById("productOrderingBox").style.display = "block";
			var costAmount3 = costAmount2.split(':');
            document.getElementById("costConfirmBox2").textContent = costAmount3[1];
			var selBoxes = document.getElementById("costConfirmBox3").children.length;
			var selBox = document.getElementById("costConfirmBox3").children
			for (var i = 0; i < selBoxes; i++) {
				var thisBox = selBox[i];
				if(costAmount3[0].length > 3) {
					if (thisBox.value.toLowerCase() == costAmount3[0].substring(0, costAmount3[0].length - 4).toLowerCase()) {
						thisBox.selected = true
					}
				} else {
					if (thisBox.value.toLowerCase() == costAmount3[0].toLowerCase()) {
						thisBox.selected = true
					}
				}
			}	
        }
    } else {
        productOwnerModifyPopup()
    }
}

function pickaDate() {
    $('.pickaDate').pickadate()
}

function pickaTime() {
    $('.pickaTime').pickatime()
}

function purchaseConfirmed() {
    //check ad-url/date/flexibility
    var prefDate = document.getElementById("chosenDate").value;
    var prefTime = document.getElementById("chosenTime").value;
    if (!!prefTime && !!prefDate) {
        var lT = parseInt(selLead) * 3600000;
        var orderDate = (new Date(prefDate + " " + prefTime).getTime());
        var dateNow = new Date().getTime();
        var dateMath = orderDate - dateNow;
        if (dateMath > lT) { var inTime = true } else { var inTime = false }
    } else if (!!prefDate) {
        var lT = parseInt(selLead) * 3600000;
        var orderDate = (new Date(prefDate + " 4:00").getTime());
        var dateNow = new Date().getTime();
        var dateMath = orderDate - dateNow;
        if (dateMath > lT) { var inTime = true } else { var inTime = false }
    }
    if (inTime == false) {
        document.getElementById("serverMsgBox").innerHTML = "The chosen date/time is outside of the lead time. Please choose a later date/time.";
        document.getElementById("serverMsgBackdrop").style.display = "block";
        document.getElementById("serverMsgBox").style.display = "block";
        document.getElementById("serverMsgBackdrop").style.opacity = "1";
        document.getElementById("serverMsgBox").style.opacity = "1";
        document.getElementById("advertiserPage2Div").style.opacity = "0.3";
        setTimeout(function (args) {
            document.getElementById("serverMsgBackdrop").style.opacity = "0";
            document.getElementById("serverMsgBox").style.opacity = "0";
            document.getElementById("resultsOverlay").style.display = "block";
            document.getElementById("productOrderingBox").style.display = "block";
            document.getElementById("advertiserPage2Div").style.opacity = "1";
            setTimeout(function (args) {
                document.getElementById("serverMsgBackdrop").style.display = "none";
                document.getElementById("serverMsgBox").style.display = "none";
            }, 700)
        }, 5200)
    } else {
        var theFlex = document.getElementById("chosenFlex").value;
        var adUri = document.getElementById("chosenUri").value;
        var adToBuy = objectId;
        var owner = productOwner;
        var payPrice = costAmount;
        if (adTypeSelct == "radio" || adTypeSelct == "tv") {
        } else {
            prefTime = "N/A"
        }
        if (!prefDate || !prefTime || !theFlex || !adUri) {
            //error all fields must be completed	
            document.getElementById("resultsOverlay").style.display = "none";
            document.getElementById("productOrderingBox").style.display = "none";
            document.getElementById("serverMsgBox").innerHTML = "<br\>All fields must be complete";
            document.getElementById("serverMsgBackdrop").style.display = "block";
            document.getElementById("serverMsgBox").style.display = "block";
            document.getElementById("serverMsgBackdrop").style.opacity = "1";
            document.getElementById("serverMsgBox").style.opacity = "1";
            document.getElementById("advertiserPage2Div").style.opacity = "0.3";
            setTimeout(function (args) {
                document.getElementById("serverMsgBackdrop").style.opacity = "0";
                document.getElementById("serverMsgBox").style.opacity = "0";
                document.getElementById("resultsOverlay").style.display = "block";
                document.getElementById("productOrderingBox").style.display = "block";
                document.getElementById("advertiserPage2Div").style.opacity = "1";
                setTimeout(function (args) {
                    document.getElementById("serverMsgBackdrop").style.display = "none";
                    document.getElementById("serverMsgBox").style.display = "none";
                }, 700)
            }, 2400)
        } else if (!adToBuy || !owner || !payPrice) {
            //sorry, something went wrong	
            exitBuyBox()
            document.getElementById("resultsOverlay").style.display = "none";
            document.getElementById("productOrderingBox").style.display = "none";
            document.getElementById("serverMsgBox").innerHTML = "<br\>All fields must be complete";
            document.getElementById("serverMsgBackdrop").style.display = "block";
            document.getElementById("serverMsgBox").style.display = "block";
            document.getElementById("serverMsgBackdrop").style.opacity = "1";
            document.getElementById("serverMsgBox").style.opacity = "1";
            document.getElementById("advertiserPage2Div").style.opacity = "0.3";
            setTimeout(function (args) {
                document.getElementById("serverMsgBackdrop").style.opacity = "0";
                document.getElementById("serverMsgBox").style.opacity = "0";
                document.getElementById("resultsOverlay").style.display = "block";
                document.getElementById("productOrderingBox").style.display = "block";
                document.getElementById("advertiserPage2Div").style.opacity = "1";
                advertiserPage1Load()
                setTimeout(function (args) {
                    document.getElementById("serverMsgBackdrop").style.display = "none";
                    document.getElementById("serverMsgBox").style.display = "none";
                }, 700)
            }, 2400)
        } else if (prefDate == " " || prefTime == " " || theFlex == " " || adUri == " ") {
            //sorry, something went wrong	
            exitBuyBox()
            document.getElementById("resultsOverlay").style.display = "none";
            document.getElementById("productOrderingBox").style.display = "none";
            document.getElementById("advertiserPage2Div").style.opacity = "0.3";
            //
            document.getElementById("serverMsgBox").innerHTML = "<br\>All fields must be complete";
            document.getElementById("serverMsgBackdrop").style.display = "block";
            document.getElementById("serverMsgBox").style.display = "block";
            document.getElementById("serverMsgBackdrop").style.opacity = "1";
            document.getElementById("serverMsgBox").style.opacity = "1";
            setTimeout(function (args) {
                document.getElementById("serverMsgBackdrop").style.opacity = "0";
                document.getElementById("serverMsgBox").style.opacity = "0";
                //
                document.getElementById("resultsOverlay").style.display = "block";
                document.getElementById("productOrderingBox").style.display = "block";
                document.getElementById("advertiserPage2Div").style.opacity = "1";
                advertiserPage1Load()
                setTimeout(function (args) {
                    document.getElementById("serverMsgBackdrop").style.display = "none";
                    document.getElementById("serverMsgBox").style.display = "none";
                }, 700)
            }, 2400)
        } else {
            //process order
            exitBuyBox()
            document.getElementById("advertiserPage2Div").style.opacity = "0.3";
            mainPageLoader2()
            beginCloudOrder1(prefDate, prefTime, theFlex, adUri, adToBuy, owner, payPrice)
        }
    }
}

function beginCloudOrder1(prefDate, prefTime, theFlex, adUri, adToBuy, owner, payPrice) {
    //document.getElementById("loggingin").innerHTML = "<br\>Processing order....";
    //document.getElementById("loggingin").style.backgroundColor = "rgba(0,0,0,.7)";
    //document.getElementById("loggingin").style.display = "block";

    var currentUser = Parse.User.current();
    var currentUserId = currentUser.id;
    var userList = [owner, currentUserId];
    if (owner == currentUserId) {
        //document.getElementById("loggingin").innerHTML = "<br\>Sorry, that doesn't compute.";
        setTimeout(function (args) {
            document.getElementById("advertiserPage2Div").style.opacity = "1";
            //document.getElementById("loggingin").style.display = "none";	
        }, 2400)
    } else {
        var Order = Parse.Object.extend("Orders");
        var groupOrder = new Order();
        var groupACL = new Parse.ACL();
        for (var i = 0; i < userList.length; i++) {
            groupACL.setReadAccess(userList[i], true);
            groupACL.setWriteAccess(userList[i], true);
        }
        groupOrder.set("status", "pending");
        groupOrder.set("productId", adToBuy);
        groupOrder.set("owner", owner);
        groupOrder.set("purchaser", currentUserId);
        groupOrder.set("price", parseInt(payPrice));
        groupOrder.set("preferredDate", prefDate);
        groupOrder.set("preferredTime", prefTime);
        groupOrder.set("flexibility", theFlex);
        groupOrder.set("advert", adUri);
        groupOrder.setACL(groupACL);
        groupOrder.save(null, {
            success: function (groupOrder) {
                document.getElementById("advertiserPage2Div").style.opacity = "1";
                var nav = "pending";
                openCampaignsPage1(nav)
                setTimeout(function (args) {
                    document.getElementById("loadingGraphic2").src = "/images/loader/85p.jpg";
                    setTimeout(function (args) {
                        document.getElementById("mainPageLoader2").style.opacity = "0";
                        setTimeout(function (args) {
                            document.getElementById("mainPageLoader2").style.display = "none";
                            document.getElementById("loadingGraphic2").src = "/images/loader/18p.jpg";
                            document.getElementById("chosenDate").value = "";
                            document.getElementById("chosenTime").value = "";
                            document.getElementById("chosenFlex").value = "";
                            document.getElementById("chosenUri").value = "";
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
                    var error1 = "Line 636 - AdvertiserPage2 - Time: " + ts;
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
    /////////////////////
}

function productOwnerModifyPopup() {
    document.getElementById("modifyProductBacker").style.display = "block";
    document.getElementById("modifyProductContainer").style.display = "block";
    document.getElementById("modifyProductContainer").style.opacity = "1";
	var stocky = document.getElementById("modStock");
	stocky.addEventListener("click", modStocky, false);
}

function productOwnerModifyPopdown() {	
    document.getElementById("modifyProductBacker").style.display = "none";
    document.getElementById("modifyProductContainer").style.opacity = "0";
    setTimeout(function (args) {
        document.getElementById("modifyProductContainer").style.display = "none";
    }, 500)
}

function deleteProduct() {
    /////
    //document.getElementById("loggingin").style.backgroundColor = "rgba(0,0,0,.7)";
    //document.getElementById("loggingin").innerHTML = "<br\>Loading...";
    //document.getElementById("loggingin").style.display = "block";
    /////
    var modProds = Parse.Object.extend("Products");
    var modProduct = new modProds();
    modProduct.set("objectId", objectId)
    modProduct.set("status", "offline");
    modProduct.save(null, {
        success: function (prod) {
            document.getElementById("advertiserPage2Div").innerHTML = "";
            reOrderVal = objectId
            productOwnerModifyPopdown()
            searchTaggedListings()
            setTimeout(function (args) {
                //document.getElementById("loggingin").style.display = "none";
            }, 1200)
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
                var error1 = "Line 704 - AdvertiserPage2 - Time: " + ts;
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

function updateProduct() {
    /////
    //document.getElementById("loggingin").style.backgroundColor = "rgba(0,0,0,.7)";
    //document.getElementById("loggingin").innerHTML = "<br\>Loading...";
    //document.getElementById("loggingin").style.display = "block";
    /////
    var modProds = Parse.Object.extend("Products");
    var modProduct = new modProds();
    modProduct.set("objectId", objectId)
    if (!!document.getElementById("modPrice").value) {
        var pc = document.getElementById("modPrice").value
        while (pc.indexOf(',') != -1) pc = pc.replace(',', '');
        while (pc.indexOf('.') != -1) pc = pc.replace('.', '');
        var newPrice = parseInt(pc);
        modProduct.set("price", newPrice);
    }
    if (!!document.getElementById("modQuantity").value && document.getElementById("modStock").checked == false) {
        var nq = document.getElementById("modQuantity").value
        var newQuantity = parseInt(nq);
        modProduct.set("quantity", newQuantity);
		modProduct.set("unlimitedStock", 0);
    } else if (document.getElementById("modStock").checked == true) {
		modProduct.set("quantity", 1);
		modProduct.set("unlimitedStock", 1);
		}
    if (!!document.getElementById("modLeadTime").value) {
        var lt = document.getElementById("modLeadTime").value
        var newLeadTime = parseInt(lt);
        modProduct.set("leadTime", newLeadTime);
    }
    modProduct.save(null, {
        success: function (prod) {
            document.getElementById("advertiserPage2Div").innerHTML = "";
            reOrderVal = objectId
            productOwnerModifyPopdown()
            searchTaggedListings()
            setTimeout(function (args) {
                //document.getElementById("loggingin").style.display = "none";
            }, 1200)
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
                var error1 = "Line 772 - AdvertiserPage2 - Time: " + ts;
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

function hideShowProductLine(prod,product,bypass) {
	if(!product) {product = bypass}
	var productBoxes = document.getElementsByClassName("productInformationBox");
    for (var i = 0; i < productBoxes.length; i++) {
       productBoxes[i].style.backgroundColor = "transparent";
       productBoxes[i].style.border = "transparent";
	}
	document.getElementById("buyAdSlotButton").style.opacity = "0.25";
    document.getElementById("ShareWideAdSlotButton").style.opacity = "0.25";
    document.getElementById("adShareButton").style.opacity = "0.25";
	navigating=true;
	setTimeout(function (args) { window.location.hash = "#" + product + "-tag";	
		document.getElementById("content").style.height = parseInt(window.innerHeight) + "px";				
		navigating=true;
		setTimeout(function (args) { window.location.hash = "#" + product + "-tag"; 
			document.getElementById("content").style.height = "100%";	
	 	}, 100)
	 }, 100)
    prod.style.display = "none";
	var grabH1 = document.getElementById("content2").style.height;
    prod.nextElementSibling.style.display = "block";
}

function checkForEnteredSearch(e) {
	try{var e1 = event.charCode} catch(e) {var e1 = "error"}
	try{var e2 = event.which} catch(e) {var e2 = "error"}
	try{var e3 = event.keyCode} catch(e) {var e3 = "error"}
	try{var e4 = e.charCode} catch(e) {var e4 = "error"}
	try{var e5 = e.which} catch(e) {var e5 = "error"}
	try{var e6 = e.keyCode} catch(e) {var e6 = "error"}
    if (e1 == 13 || e2 == 13 || e3 == 13 || e4 == 13 || e5 == 13 || e6 == 13) {
        searchTaggedListings(); navigating = true;
    }
};

function runLeadCalc() {
    var lT = parseInt(selLead) * 3600000;
    var dateNow = new Date().getTime();
    var dateMath = dateNow + lT;
    var orderDate = (new Date(dateMath));
    document.getElementById("dateTimeLeadInformation").textContent = "Earliest Date: " + orderDate.getDate() + "/"
            + (orderDate.getMonth() + 1) + "/"
            + orderDate.getFullYear() + " @ "
            + orderDate.getHours() + ":"
            + orderDate.getMinutes() + ":"
            + orderDate.getSeconds();
	dateMsg = document.getElementById("dateTimeLeadInformation").textContent;
}

function estimationExplaination() {
		document.getElementById("dateTimeLeadInformation").style.backgroundColor = "black";
		document.getElementById("dateTimeLeadInformation").style.color = "white";
		document.getElementById("dateTimeLeadInformation").style.fontSize = "12px";
		document.getElementById("dateTimeLeadInformation").style.textDecoration = "none";
		document.getElementById("dateTimeLeadInformation").style.height = "auto";
		document.getElementById("dateTimeLeadInformation").textContent = "Your bank may charge you transaction and conversion fees for purchases made in a foreign currency."
		setTimeout(function (args) {
			if(document.getElementById("dateTimeLeadInformation").textContent == "Your bank may charge you transaction and conversion fees for purchases made in a foreign currency.") {
				document.getElementById("dateTimeLeadInformation").style.backgroundColor = "white";
				document.getElementById("dateTimeLeadInformation").style.color = "black";
				document.getElementById("dateTimeLeadInformation").style.fontSize = "16px";
				document.getElementById("dateTimeLeadInformation").style.height = "30px";
				document.getElementById("dateTimeLeadInformation").style.textDecoration = "underline";
				document.getElementById("dateTimeLeadInformation").textContent = dateMsg;
			}
		}, 8200)
}

$(function() {
    $("#costConfirmBox3").change(function() {
       currencyConversion()
    });
});

function currencyConversion() {	
			var curTotals = costAmount2.split(':');
			if(curTotals[0].length > 3) {
				curTotals[0] = curTotals[0].substr(0,curTotals[0].length - 4);
			}
			var convertFrom = curTotals[0];
			var amountToConvert = curTotals[1];
			var convertTo = document.getElementById("costConfirmBox3").value
			var convUrl = "https://www.google.com/finance/converter?a="+amountToConvert+"&from="+convertFrom+"&to="+convertTo;
			if(convertFrom == convertTo) {			
				document.getElementById("costConfirmBox4").style.opacity = "0";
				document.getElementById("costConfirmBox2").textContent = amountToConvert;
				} else {
					document.getElementById("costConfirmBox4").style.opacity = "0.8";
					$.post('post.php', { url: convUrl }, function(data) {
					var convAm = parseInt(data).toFixed(2)
					document.getElementById("costConfirmBox2").textContent = convAm +"*";
				});
			}						
}

function modStocky() {
	var stocky = document.getElementById("modStock");
	if(stocky.checked == true) {
			document.getElementById("modQuantity").disabled = true;
		} else {
			document.getElementById("modQuantity").disabled = false;
			}
}

function adShareButtonPop(shareId) {
	document.getElementById("adShareButton").accessKey = shareId;
	document.getElementById("adShareButton").title = shareId;
	document.getElementById("adShareButton").style.opacity = "1";
	document.getElementById("ShareWideAdSlotButton2").accessKey = shareId;
	document.getElementById("ShareWideAdSlotButton2").title = shareId;
	document.getElementById("ShareWideAdSlotButton").style.opacity = "1";
}

function adShareButtonPop2(data) {
	if (data.style.opacity == "1" || data.className == "ShareWideAdSlotButton2" && data.parentElement.style.opacity == "1") {
		document.getElementById("shareMsgBox").textContent = "Loading...";
		var shareId = data.accessKey;
		if(!shareId){
			var shareId = data.title;
		}
		var pub = document.getElementById([shareId]).children[2].children[0].textContent;
		var adt = document.getElementById([shareId]).children[1].children[2].textContent;
		var city = document.getElementById([shareId]).children[1].children[1].textContent;
		var reach = document.getElementById([shareId]).children[1].children[3].textContent;
		sharePopulate(pub,adt,city,reach);
		document.getElementById("shareThisWhat").textContent = "Advert";
		document.getElementById("sharedMessage").style.display = "block";
		document.getElementById("sharedMessageBackDrop").style.display = "block";
		setTimeout(function (args) {
				document.getElementById("shareMsgBox").innerHTML = shareHTML;
			}, 1200)
		} 
}

function hideShareBoxes() {	
		document.getElementById("sharedMessage").style.display = "none";
		document.getElementById("sharedMessageBackDrop").style.display = "none";
	}