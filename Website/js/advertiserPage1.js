var countries = [];
var lnbs = [];
var cities = [];
var adTypes = [];
var prices = [];
var leads = [];
var campLengths = [];
var pubLengths = [];
var adTypeArray = [];
var floc = "countries: ";
var flol = "lnbs: ";
var floy = "cities: ";
var flot = "adTypes: ";
var flop = "campLength: ";
var flob = "publishers: ";
var priceHigh;
var priceLow;
var leadHigh;
var leadLow;
var selectedCountry;
var selectedLnb;
var selectedCity;
var selectedAdType;
var selectedCampLength;
var selectedPubLength;
var selectedPriceLow;
var selectedPriceHigh;
var selectedLeadLow;
var selectedLeadHigh;
var advSearchRunning = false;
var totalAdCounter = 0;
var searchMethod;

function advertiserPage1Load() {
		clearInterval(iGASRI);
		clearInterval(iGATS);
    mainPageLoader2()
    getProductData1();
    document.getElementById("advertiserPage2Div").style.bottom = "70px";
    document.getElementById("buttonFooterSearch").style.bottom = "27px";
	if (windowWidth < 730) {
    	document.getElementById("plethoFooter").style.display = "block";
	} else {
		document.getElementById("plethoFooter").style.display = "none";
		}
    document.getElementById("publisherButton3").style.display = "none";
    document.getElementById("adShareButton").style.opacity = "0.25";
    document.getElementById("publisherButton4").style.display = "none";
    document.getElementById("publisherButton5").style.display = "none";
    document.getElementById("plethoFooter3").style.display = "none";
    document.getElementById("publisherButton1").style.display = "none";
    document.getElementById("publisherButton2").style.display = "none";
    document.getElementById("campaignButton1").style.display = "none";
    document.getElementById("campaignButton2").style.display = "none";
    document.getElementById("campaignShareButton1").style.display = "none";
    document.getElementById("buttonBreaker1").style.opacity = "0";
    document.getElementById("campaignHelpButton1").style.display = "none";
    document.getElementById("publisherHelpButton1").style.display = "none";
    document.getElementById("mobileGoButton").style.display = "block";
    document.getElementById("plethoFooter3").style.display = "none";
    document.getElementById("advancedSearchButtonMk2").style.display = "none";
    document.getElementById("advertiserLink").style.backgroundImage = "url('../images/atiser2.png')";
    document.getElementById("campaignsLink").style.backgroundImage = "url('../images/campaigns.png')";
    document.getElementById("publisherLink").style.backgroundImage = "url('../images/publisher.png')";
    document.getElementById("helpLink").style.backgroundImage = "url('../images/help.png')";
    document.getElementById("campaignsLink").style.color = "white";
    document.getElementById("advertiserLink").style.color = "#fde38a";
    document.getElementById("helpLink").style.color = "white";
    document.getElementById("publisherLink").style.color = "white";
    document.getElementById("helpDiv").style.display = "none";
    document.getElementById("advSearchButton").children[0].style.backgroundColor = "#646464";
    document.getElementById("lnbBox").innerHTML = "";
    document.getElementById("countrySelectionBox1").innerHTML = "";
    document.getElementById("pubLengthSelectionBox1").innerHTML = "";
    document.getElementById("cityLengthSelectionBox1").innerHTML = "";
    document.getElementById("adTypeBox").innerHTML = "";
    document.getElementById("campLengthSelectionBox1").innerHTML = "";
    countries = [];
    lnbs = [];
    cities = [];
    adTypes = [];
    prices = [];
    leads = [];
    campLengths = [];
    pubLengths = [];
    adTypeArray = [];
    floc = "countries: ";
    flol = "lnbs: ";
    floy = "cities: ";
    flot = "adTypes: ";
    flop = "campLength: ";
    flob = "publishers: ";
    priceHigh = "";
    priceLow = "";
    leadHigh = "";
    leadLow = "";
    selectedCountry = "";
    selectedLnb = "";
    selectedCity = "";
    selectedAdType = "";
    selectedCampLength = "";
    selectedPubLength = "";
    selectedPriceLow = "";
    selectedPriceHigh = "";
    selectedLeadLow = "";
    selectedLeadHigh = "";
    ///
    document.getElementById("advertiserPage1Div").style.height = "0px";
    if (windowWidth < 730) {
        document.getElementById("buttonFooterSearch").style.backgroundColor = "white";
        document.getElementById("advertiserPage2Div").style.bottom = "70px";
    } else {
        document.getElementById("buttonFooterSearch").style.backgroundColor = "#424242";
        document.getElementById("advertiserPage2Div").style.bottom = "0px";
    }
    document.getElementById("advertiserPage1Div").style.backgroundColor = "white";
    document.getElementById("advancedSearchButton").className = "show"
    document.getElementById("advancedSearchButtonMk2").style.backgroundImage = "url('../images/dblArrowUp.png')";
    ///
    document.getElementById("advertiserLink").style.opacity = "1";
    document.getElementById("campaignsLink").style.opacity = "1";
    document.getElementById("publisherLink").style.opacity = "1";
    document.getElementById("helpLink").style.opacity = "1";
    ////document.getElementById("loggingin").style.backgroundColor = "rgba(0,0,0,.25)";
    document.getElementById("advertiserPage2Div").innerHTML = "";
    document.getElementById("advertiserPage0Div").style.display = "block";
    document.getElementById("advertiserPage1Div").style.display = "none";
    document.getElementById("advertiserPage2Div").style.display = "none";
    //buttons
    document.getElementById("searchAllButton").style.display = "block";
    document.getElementById("advSearchButton").style.display = "block";
    document.getElementById("normalSearchButton").style.display = "block";
    document.getElementById("normalSearchButton2").style.display = "none";
    document.getElementById("sortResultsButton").style.display = "none";
    document.getElementById("buyAdSlotButton").style.display = "none";
    document.getElementById("ShareWideAdSlotButton").style.display = "none";
    document.getElementById("adCounterButton").style.display = "block";
    //buttons
    document.getElementById("campaignsPage1Div").style.display = "none";
    document.getElementById("campaignsPage2Div").style.display = "none";
    document.getElementById("publisherPage1Div").style.display = "none";
    document.getElementById("publisherPage2Div").style.display = "none";
    document.getElementById("sortResultsButton").style.display = "none";
    document.getElementById("buyAdSlotButton").style.display = "none";
    document.getElementById("ShareWideAdSlotButton").style.display = "none";
    document.getElementById("debug").innerText = "(advertiserPage1)";
    document.getElementById("debug").textContent = "(advertiserPage1)";
    document.body.className = "bkg2";
    ////document.getElementById("loggingin").innerHTML = "<br\>Loading interface...";	
    document.getElementById("alertsLink").style.display = "block";
    document.getElementById("advertiserLink").style.display = "block";
    document.getElementById("campaignsLink").style.display = "block";
    document.getElementById("publisherLink").style.display = "block";
    document.getElementById("helpLink").style.display = "block";
    document.getElementById("menuBar").style.display = "block";
    ////document.getElementById("loggingin").innerHTML = "<br\><br\>Loading interface...";	
    document.getElementById("searchBox").style.display = "block";
    document.getElementById("mobileGoButton").style.opacity = "1";
    document.getElementById("searchAllButton").style.display = "block";
    document.getElementById("normalSearchButton").style.display = "block";
    document.getElementById("advancedSearchButton").style.display = "block";
}

function getProductData1() {
    var currentUser = Parse.User.current();
    var currentUserId = currentUser.id;
    var allProducts = Parse.Object.extend("Products");
    var getProductDataset1 = new Parse.Query(allProducts);
    var count = 0;
    getProductDataset1.select("country", "lnb", "city", "adType", "price", "leadTime", "campLength", "publisher", "quantity", "user");
    getProductDataset1.equalTo("status", "online")
    getProductDataset1.greaterThan("quantity", 0)
    getProductDataset1.find().then(function (results) {
        totalAdCounter = results.length;
        for (var i = 0; i < results.length; i++) {
            count += 1;
            if (results[i].attributes.quantity == "0" && results[i].attributes.user != currentUserId && results[i].attributes.unlimitedStock == 1) { } else {
                var country = results[i].attributes.country
                countries.push(country)
                var lnb = results[i].attributes.lnb
                lnbs.push(lnb)
                var city = results[i].attributes.city.toLowerCase();
                cities.push(city)
                var adType = results[i].attributes.adType
                adTypes.push(adType)
                var price = results[i].attributes.price
                prices.push(price)
                var lead = results[i].attributes.leadTime
                leads.push(lead)
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
                campLengths.push(campLength)
                var pubLength = results[i].attributes.publisher
                pubLengths.push(pubLength)
            }
            if (count == results.length) {
                countries.sort();
                lnbs.sort();
                cities.sort();
                adTypes.sort();
                prices.sort();
                leads.sort();
                campLengths.sort(function (a, b) {
                    a = a.toLowerCase(); b = b.toLowerCase();
                    if (a.indexOf('seconds') != -1) { a.replace('seconds', ''); a = parseInt(a) }
                    else if (a.indexOf('second') != -1) { a.replace('second', ''); a = parseInt(a) }
                    else if (a.indexOf('minutes') != -1) { a.replace('minutes', ''); a = parseInt(a) * 60 }
                    else if (a.indexOf('minute') != -1) { a.replace('minutes', ''); a = parseInt(a) * 60 }
                    else if (a.indexOf('hours') != -1) { a.replace('hours', ''); a = parseInt(a) * 3600 }
                    else if (a.indexOf('hour') != -1) { a.replace('hour', ''); a = parseInt(a) * 3600 }
                    else if (a.indexOf('days') != -1) { a.replace('days', ''); a = parseInt(a) * 86400 }
                    else if (a.indexOf('day') != -1) { a.replace('day', ''); a = parseInt(a) * 86400 }
                    else if (a.indexOf('weeks') != -1) { a.replace('weeks', ''); a = parseInt(a) * 604800 }
                    else if (a.indexOf('week') != -1) { a.replace('week', ''); a = parseInt(a) * 604800 }
                    else if (a.indexOf('months') != -1) { a.replace('months', ''); a = parseInt(a) * 2629800 }
                    else if (a.indexOf('month') != -1) { a.replace('month', ''); a = parseInt(a) * 2629800 }
                    else { a = parseInt(a) }
                    if (b.indexOf('seconds') != -1) { b.replace('seconds', ''); b = parseInt(b) }
                    else if (b.indexOf('second') != -1) { b.replace('second', ''); b = parseInt(b) }
                    else if (b.indexOf('minutes') != -1) { b.replace('minutes', ''); b = parseInt(b) * 60 }
                    else if (b.indexOf('minute') != -1) { b.replace('minutes', ''); b = parseInt(b) * 60 }
                    else if (b.indexOf('hours') != -1) { b.replace('hours', ''); b = parseInt(b) * 3600 }
                    else if (b.indexOf('hour') != -1) { b.replace('hour', ''); b = parseInt(b) * 3600 }
                    else if (b.indexOf('days') != -1) { b.replace('days', ''); b = parseInt(b) * 86400 }
                    else if (b.indexOf('day') != -1) { b.replace('day', ''); b = parseInt(b) * 86400 }
                    else if (b.indexOf('weeks') != -1) { b.replace('weeks', ''); b = parseInt(b) * 604800 }
                    else if (b.indexOf('week') != -1) { b.replace('week', ''); b = parseInt(b) * 604800 }
                    else if (b.indexOf('months') != -1) { b.replace('months', ''); b = parseInt(b) * 2629800 }
                    else if (b.indexOf('month') != -1) { b.replace('month', ''); b = parseInt(b) * 2629800 }
                    else { b = parseInt(b) * 60 }
                    return a - b;
                });
                pubLengths.sort();
                updateAdvertiserPage1Elements()
                document.getElementById("adCounterButton").children[1].innerHTML = totalAdCounter.toString() + "<p class='comAds'>(Comparable Adverts)</p>";
            }
        }
    });
}

function updateAdvertiserPage1Elements() {
    /////////// POPULATE CAMPLENGTH BOX
    document.getElementById("campLengthSelectionBox1").innerHTML = "<option>Campaign Length"
    for (var i = 0; i < campLengths.length; i++) {
        var campLength = campLengths[i];
        if (flop.indexOf(campLength) == -1) {
            document.getElementById("campLengthSelectionBox1").innerHTML += '<option>' + campLength;
            var campLengthsList = document.getElementById("campLengthSelectionBox1").children;
            for (var j = 0; j < campLengthsList.length; j++) {
                flop = flop + campLengthsList[j].textContent + "|";
            }
        }
    }
    /////////// POPULATE PUBLENGTH BOX
    document.getElementById("pubLengthSelectionBox1").innerHTML = "<option>Publisher"
    for (var i = 0; i < pubLengths.length; i++) {
        var pubLength = pubLengths[i];
        if (flob.toLowerCase().indexOf(pubLength.toLowerCase()) == -1) {
            document.getElementById("pubLengthSelectionBox1").innerHTML += '<option>' + pubLength.charAt(0).toUpperCase() + pubLength.slice(1);
            var pubLengthsList = document.getElementById("pubLengthSelectionBox1").children;
            for (var j = 0; j < pubLengthsList.length; j++) {
                flob = flob + pubLengthsList[j].textContent + "|";
            }
        }
    }
    /////////// POPULATE COUNTRY BOX
    document.getElementById("countrySelectionBox1").innerHTML = "<option>Country"
    for (var i = 0; i < countries.length; i++) {
        var countryName = countries[i];
        if (floc.toLowerCase().indexOf(countryName.replace(/-/g, " ").toLowerCase()) == -1) {
			var countryNameSL = countryName.replace(/-/g, " ")
			var newCountryName = countryNameSL.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
            document.getElementById("countrySelectionBox1").innerHTML += '<option>' + newCountryName;
            var countriesList = document.getElementById("countrySelectionBox1").children;
            for (var j = 0; j < countriesList.length; j++) {
                floc = floc + countriesList[j].textContent + "|";
            }
        }
    }
    /////////// POPULATE LNB BOX
    for (var i = 0; i < lnbs.length; i++) {
        var lnbName = lnbs[i];
        if (flol.toLowerCase().indexOf(lnbName.toLowerCase()) == -1) {
            document.getElementById("lnbBox").innerHTML = document.getElementById("lnbBox").innerHTML + '<div onclick="lnbClicker(this)" class="singleLnbBox">' + lnbName + '</div>';
            var lnbsList = document.getElementById("lnbBox").children;
            for (var j = 0; j < lnbsList.length; j++) {
                flol = flol + lnbsList[j].textContent + "|";
            }
        }
    }
    /////////// POPULATE CITY BOX
    document.getElementById("cityLengthSelectionBox1").innerHTML = "<option>City"
    for (var i = 0; i < cities.length; i++) {
        var cityName = cities[i];
        if (floy.toLowerCase().indexOf(cityName.toLowerCase()) == -1) {			
			var cityNameSL = cityName.replace(/-/g, " ")
			var newCityName = cityNameSL.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
            document.getElementById("cityLengthSelectionBox1").innerHTML += '<option>' + newCityName;
            var citiesList = document.getElementById("cityLengthSelectionBox1").children;
            for (var j = 0; j < citiesList.length; j++) {
                floy = floy + citiesList[j].textContent + "|";
            }
        }
    }
    /////////// POPULATE RADIUS BAR
    /////////// POPULATE BUDGET BAR
    priceHigh = Math.max.apply(Math, prices);
    priceLow = Math.min.apply(Math, prices);
    var strlength1 = priceHigh.toString().length
    var strlength2 = priceLow.toString().length
    var priceHigh2 = priceHigh.toString().substr(0, strlength1 - 2);
    var priceLow2 = priceLow.toString().substr(0, strlength2 - 2);
    priceHigh2 = parseInt(priceHigh2) + 1;
    priceLow2 = parseInt(priceLow2) - 1;
    $("#budget-range").slider({
        range: true,
        min: parseInt(priceLow2),
        max: parseInt(priceHigh2),
        values: [priceLow2, priceHigh2],
        slide: function (event, ui) {
            $("#budgetNumbers").val(ui.values[0] + " - " + ui.values[1]);
        }
    });
    $("#budgetNumbers").val($("#budget-range").slider("values", 0) +
      " - " + $("#budget-range").slider("values", 1));
    /////////// POPULATE LEADTIME BAR
    leadHigh = Math.max.apply(Math, leads) + 1;
    leadLow = Math.min.apply(Math, leads) - 1;
    $("#leadTime-range").slider({
        range: true,
        min: leadLow,
        max: leadHigh,
        values: [leadLow, leadHigh],
        slide: function (event, ui) {
            $("#leadTimeNumbers").val(ui.values[0] + "h - " + ui.values[1] + "h");
        }
    });
    $("#leadTimeNumbers").val($("#leadTime-range").slider("values", 0) +
      "h - " + $("#leadTime-range").slider("values", 1) + "h");

    /////////// POPULATE AD-TYPES BOX
    for (var i = 0; i < adTypes.length; i++) {
        var adTypeName = adTypes[i];
        if (flot.toLowerCase().indexOf(adTypeName.toLowerCase()) == -1) {
            document.getElementById("adTypeBox").innerHTML += '<div class="adOpts"><input onchange="adTypePickList(this)" type="checkbox" style="text-transform:capitalize;" name="' + adTypeName + '" value="' + adTypeName + '">' + adTypeName.charAt(0).toUpperCase() + adTypeName.slice(1) + '</div>';
            var adTypesList = document.getElementById("adTypeBox").children;
            for (var j = 0; j < adTypesList.length; j++) {
                flot = flot + adTypesList[j].children[0].defaultValue + "|";
            }
        }
    }


    /////////// LOAD COMPLETE - HIDE LOAD SCREEN
    setTimeout(function (args) {
        document.getElementById("loadingGraphic2").src = "/images/loader/85p.jpg";
        document.getElementById("mainPageLoader2").style.opacity = "0";
        setTimeout(function (args) {
            document.getElementById("mainPageLoader2").style.display = "none";
            document.getElementById("loadingGraphic2").src = "/images/loader/18p.jpg";
        }, 500)
    }, 100)

}


function countryClicker(box) {
    var number = 0;
    selectedCountry = box.textContent.replace(/ /g, "-");
    var selectionBoxes = document.getElementsByClassName("singleCountryBox");
    for (var i = 0; i < selectionBoxes.length; i++) {
        number += 1;
        selectionBoxes[i].style.border = "1px dashed transparent"
        selectionBoxes[i].style.backgroundColor = "rgba(255,255,255,0)"
        if (number == selectionBoxes.length) { box.style.backgroundColor = "rgba(255,255,255,0.1)"; box.style.border = "1px dashed white" }
    }
}

function lnbClicker(box) {
    var number = 0;
    var oldSelection = selectedLnb;
    selectedLnb = box.textContent;
    var selectionBoxes = document.getElementsByClassName("singleLnbBox");
    for (var i = 0; i < selectionBoxes.length; i++) {
        number += 1;
        selectionBoxes[i].style.textDecoration = "none"
        if (number == selectionBoxes.length) {
            if (oldSelection != selectedLnb) {
                box.style.textDecoration = "underline";
                advSearchRePopulate()
            } else {
                selectedLnb = ""
                box.style.textDecoration = "none";
                advSearchRePopulate()
            }
        }
    }
}

function cityClicker(box) {
    selectedCity = box.value;
    advSearchRePopulate()
}

function countryClicker(box) {
    selectedCountry = box.value;
    advSearchRePopulate()
}

function campLengthClicker(box) {
    selectedCampLength = box.value.toLowerCase();
    ///campaignLengthToNum
    if (selectedCampLength.indexOf('seconds') != -1) { selectedCampLength.replace('minutes', ''); selectedCampLength = parseInt(selectedCampLength) }
    else if (selectedCampLength.indexOf('second') != -1) { selectedCampLength.replace('minutes', ''); selectedCampLength = parseInt(selectedCampLength) }
    else if (selectedCampLength.indexOf('minutes') != -1) { selectedCampLength.replace('minutes', ''); selectedCampLength = parseInt(selectedCampLength) * 60 }
    else if (selectedCampLength.indexOf('minute') != -1) { selectedCampLength.replace('minutes', ''); selectedCampLength = parseInt(selectedCampLength) * 60 }
    else if (selectedCampLength.indexOf('hours') != -1) { selectedCampLength.replace('hours', ''); selectedCampLength = parseInt(selectedCampLength) * 3600 }
    else if (selectedCampLength.indexOf('hour') != -1) { selectedCampLength.replace('hour', ''); selectedCampLength = parseInt(selectedCampLength) * 3600 }
    else if (selectedCampLength.indexOf('days') != -1) { selectedCampLength.replace('days', ''); selectedCampLength = parseInt(selectedCampLength) * 86400 }
    else if (selectedCampLength.indexOf('day') != -1) { selectedCampLength.replace('day', ''); selectedCampLength = parseInt(selectedCampLength) * 86400 }
    else if (selectedCampLength.indexOf('weeks') != -1) { selectedCampLength.replace('weeks', ''); selectedCampLength = parseInt(selectedCampLength) * 604800 }
    else if (selectedCampLength.indexOf('week') != -1) { selectedCampLength.replace('week', ''); selectedCampLength = parseInt(selectedCampLength) * 604800 }
    else if (selectedCampLength.indexOf('months') != -1) { selectedCampLength.replace('months', ''); selectedCampLength = parseInt(selectedCampLength) * 2629800 }
    else if (selectedCampLength.indexOf('month') != -1) { selectedCampLength.replace('month', ''); selectedCampLength = parseInt(selectedCampLength) * 2629800 }
    else { selectedCampLength = parseInt(selectedCampLength) }
    ///
    advSearchRePopulate()
}

function publisherClicker(box) {
    selectedPubLength = box.value;
    advSearchRePopulate()
}

function adTypePickList(box) {
    var curAdType = box.value
    if (box.checked == false) {
        for (var i = adTypeArray.length - 1; i >= 0; i--) {
            if (adTypeArray[i] == curAdType) {
                adTypeArray.splice(i, 1);
                advSearchRePopulate()
            }
        }
    } else {
        if (adTypeArray.indexOf(curAdType) == -1) {
            adTypeArray.push(curAdType)
            advSearchRePopulate()
        } else {
            adTypeArray = adTypeArray.replace(curAdType, '');
            advSearchRePopulate()
        }
    }
}

function adTypeClicker(box) {
    var number = 0;
    selectedAdType = box.textContent;
    var selectionBoxes = document.getElementsByClassName("singleAdTypeBox");
    for (var i = 0; i < selectionBoxes.length; i++) {
        number += 1;
        selectionBoxes[i].style.border = "1px dashed transparent"
        selectionBoxes[i].style.backgroundColor = "rgba(255,255,255,0)"
        if (number == selectionBoxes.length) {
            box.style.backgroundColor = "rgba(255,255,255,0.1)";
            box.style.border = "1px dashed white"
        }
    }
}
function advancedSearch() {
	var innerHtmlCheck = document.getElementById("advertiserPage2Div").innerHTML;
    if (innerHtmlCheck == "") {
        searchTaggedListings()
    }
    if (document.getElementById("advancedSearchButton").className == "show") {
        document.getElementById("buttonFooterSearch").style.transition = "all 0.3s ease-in-out";
        document.getElementById("advancedSearchButton").className = "hide";
        document.getElementById("advSearchButton").children[0].style.backgroundColor = "#8cb82b";
        document.getElementById("advancedSearchButton").style.backgroundImage = "url('../images/back.png')";
        document.getElementById("advancedSearchButtonMk2").style.backgroundImage = "url('../images/dblArrowDown.png')";
        document.getElementById("advertiserPage1Div").style.display = "block";
        document.getElementById("advertiserPage0Div").style.display = "none";
        document.getElementById("advertiserPage2Div").style.display = "block";
        if (windowWidth < 730) {
            //buttons
            document.getElementById("searchAllButton").style.display = "block";
            document.getElementById("normalSearchButton").style.display = "block";
            document.getElementById("normalSearchButton2").style.display = "none";
            document.getElementById("sortResultsButton").style.display = "none";
    		document.getElementById("ShareWideAdSlotButton").style.display = "none";
            document.getElementById("buyAdSlotButton").style.display = "none";
            document.getElementById("advertiserPage1Div").style.height = "230px";
            document.getElementById("buttonFooterSearch").style.backgroundColor = "#424242";
            document.getElementById("advertiserPage1Div").style.backgroundColor = "#424242";
            document.getElementById("advertiserPage2Div").style.bottom = "271px";
            document.getElementById("buttonFooterSearch").style.bottom = "0px";
    		document.getElementById("plethoFooter").style.display = "none";
        } else {
            document.getElementById("advertiserPage1Div").style.height = "230px";
            document.getElementById("buttonFooterSearch").style.backgroundColor = "#424242";
            document.getElementById("advertiserPage1Div").style.backgroundColor = "#424242";
            document.getElementById("advertiserPage2Div").style.bottom = "232px";
            document.getElementById("buttonFooterSearch").style.bottom = "27px";
    		document.getElementById("plethoFooter").style.display = "none";
        }
        //buttons
        document.getElementById("advancedSearchButton").style.width = "40px"
        document.getElementById("advancedSearchButton").style.height = "40px"
        document.getElementById("advancedSearchButton").style.left = "1px"
        document.getElementById("countryBox").style.display = "block";
        document.getElementById("campLengthBox").style.display = "block";
        document.getElementById("pubLengthBox").style.display = "block";
        document.getElementById("advSearchLoad").style.display = "block";
        document.getElementById("advSearchSave").style.display = "block";
        document.getElementById("advSearchReset").style.display = "block";
        document.getElementById("lnbBox").style.display = "block";
        document.getElementById("cityBox").style.display = "block";
        document.getElementById("budgetBox").style.display = "block";
        document.getElementById("leadTimeBox").style.display = "block";
        document.getElementById("adTypeBox").style.display = "block";
    } else {
        document.getElementById("buttonFooterSearch").style.bottom = "27px";
    	if (windowWidth < 730) {
    	document.getElementById("plethoFooter").style.display = "block";
	} else {
		document.getElementById("plethoFooter").style.display = "none";
		}
        document.getElementById("buttonFooterSearch").style.transition = "all 0.62s ease-in-out";
        document.getElementById("advSearchButton").children[0].style.backgroundColor = "#646464";
        var sb1 = document.getElementsByClassName("singleCityBox");
        var sb2 = document.getElementsByClassName("singleLnbBox");
        var sb3 = document.getElementsByClassName("singleCountryBox");
        var sb4 = document.getElementsByClassName("singleAdTypeBox");
        for (var i = 0; i < sb1.length; i++) {
            sb1[i].style.border = "1px dashed transparent"
            sb1[i].style.backgroundColor = "rgba(255,255,255,0)"
        }
        for (var i = 0; i < sb2.length; i++) {
            sb2[i].style.border = "1px dashed transparent"
            sb2[i].style.backgroundColor = "rgba(255,255,255,0)"
        }
        for (var i = 0; i < sb3.length; i++) {
            sb3[i].style.border = "1px dashed transparent"
            sb3[i].style.backgroundColor = "rgba(255,255,255,0)"
        }
        for (var i = 0; i < sb4.length; i++) {
            sb4[i].style.border = "1px dashed transparent"
            sb4[i].style.backgroundColor = "rgba(255,255,255,0)"
        }
        document.getElementById("advancedSearchButton").className = "show";
        document.getElementById("advancedSearchButton").style.backgroundImage = "url('../images/forward.png')";
        document.getElementById("advancedSearchButtonMk2").style.backgroundImage = "url('../images/dblArrowUp.png')";
        document.getElementById("advancedSearchButton").style.width = "75px"
        document.getElementById("advancedSearchButton").style.height = "75px"
        document.getElementById("advancedSearchButton").style.left = "-5px"
        if (windowWidth < 730) {
            document.getElementById("advertiserPage1Div").style.height = "0px";
            document.getElementById("buttonFooterSearch").style.backgroundColor = "white";
            document.getElementById("advertiserPage1Div").style.backgroundColor = "white";
            document.getElementById("advertiserPage2Div").style.bottom = "70px";
        } else {
            document.getElementById("advertiserPage1Div").style.height = "0px";
            document.getElementById("buttonFooterSearch").style.backgroundColor = "#424242";
            document.getElementById("advertiserPage1Div").style.backgroundColor = "white";
            document.getElementById("advertiserPage2Div").style.bottom = "0px";
        }
        //buttons
        if (document.getElementById("advertiserPage2Div").innerHTML != "") {
            setTimeout(function (args) {
                document.getElementById("advertiserPage1Div").style.display = "none";
            }, 650)
            document.getElementById("advertiserPage0Div").style.display = "none";
            document.getElementById("advertiserPage2Div").style.display = "block";
            document.getElementById("searchAllButton").style.display = "none";
            document.getElementById("normalSearchButton").style.display = "none";
            document.getElementById("normalSearchButton2").style.display = "block";
    document.getElementById("ShareWideAdSlotButton").style.display = "block";
            document.getElementById("sortResultsButton").style.display = "none";
            document.getElementById("buyAdSlotButton").style.display = "block";
        }
        //buttons
        document.getElementById("countryBox").style.display = "none";
        document.getElementById("campLengthBox").style.display = "none";
        document.getElementById("pubLengthBox").style.display = "none";
        document.getElementById("advSearchLoad").style.display = "none";
        document.getElementById("advSearchSave").style.display = "none";
        document.getElementById("advSearchReset").style.display = "none";
        document.getElementById("lnbBox").style.display = "none";
        document.getElementById("cityBox").style.display = "none";
        document.getElementById("budgetBox").style.display = "none";
        document.getElementById("leadTimeBox").style.display = "none";
        document.getElementById("adTypeBox").style.display = "none";
    }
}

function getBudget() {
    var budgetValues = document.getElementById("budgetNumbers").value;
    var budgetValuesStripped = budgetValues.replace(/\u00A3/g, "");
    var budgetValuesSplit = budgetValuesStripped.split(" - ");
    selectedPriceLow = budgetValuesSplit[0] + "00";
    selectedPriceHigh = budgetValuesSplit[1] + "00";
    advSearchRePopulate()
}

function getLeadTime() {
    var leadValues = document.getElementById("leadTimeNumbers").value;
    var leadValuesStripped = leadValues.replace(/ hours/g, "");
    var leadValuesSplit = leadValuesStripped.split(" - ");
    selectedLeadLow = leadValuesSplit[0];
    selectedLeadHigh = leadValuesSplit[1];
    advSearchRePopulate()
}

function mainPageLoader2() {
	if(document.getElementById("loadingGraphic2").src != "/images/loader/85p.jpg" || lock == false) {
    document.getElementById("loadingGraphic2").src = "/images/loader/18p.jpg";
    var mplOpacity = document.getElementById("mainPageLoader2").style.opacity
    var mplSrc = document.getElementById("loadingGraphic2").src
    document.getElementById("mainPageLoader2").style.display = "block"
    document.getElementById("mainPageLoader2").style.opacity = "1";
    setTimeout(function (args) {
        if (mplSrc == "https://pletho.com/images/loader/18p.jpg") {
            document.getElementById("loadingGraphic2").src = "/images/loader/30p.jpg";
        }
    }, 350)
    setTimeout(function (args) {
        if (mplSrc == "https://pletho.com/images/loader/30p.jpg") {
            document.getElementById("loadingGraphic2").src = "/images/loader/52p.jpg";
        }
    }, 1350)
    setTimeout(function (args) {
        if (mplSrc == "https://pletho.com/images/loader/52p.jpg") {
            document.getElementById("loadingGraphic2").src = "/images/loader/75p.jpg";
        }
    }, 2250)
    setTimeout(function (args) {
        document.getElementById("loadingGraphic2").src = "/images/loader/85p.jpg";
        setTimeout(function (args) {
            document.getElementById("mainPageLoader2").style.opacity = "0";
            setTimeout(function (args) {
                document.getElementById("mainPageLoader2").style.display = "none";
                document.getElementById("loadingGraphic2").src = "/images/loader/18p.jpg";
            }, 500)
        }, 850)
    }, 11750)
	} else { mainPageLoader() }
}

function advSearchRePopulate(skip) {
    searchType = "tagged";
    searchMethod = "advSearch";
    advSearchRunning = true;
	if(!skip) { 
		document.getElementById("advertiserPage2Div").innerHTML = "";
		document.getElementById("advertiserPage2Div").innerHTML += '<div class="pibRow15"> <div class="pibCountry223" title="publisher" accesskey="publisher" onclick="sortResultsSubmit(this.accessKey,this.title)">Publisher</div> <div class="pibAdType223" title="adType" accesskey="adType" onclick="sortResultsSubmit(this.accessKey,this.title)">Ad Type</div> <div class="pibCity223" title="city" accesskey="city" onclick="sortResultsSubmit(this.accessKey,this.title)">City</div> <div class="pibCampTime223" onclick="sortResultsSubmit(this.accessKey,this.title)" accesskey="campLength" title="campLength">Length</div>  <div class="pibReach223" accesskey="reach"  title="reach" onclick="sortResultsSubmit(this.accessKey,this.title)">Reach</div> <div class="pibCost223" title="price" accesskey="price" onclick="sortResultsSubmit(this.accessKey,this.title)">Cost</div>  </div><br/><div style="text-align:center">Loading results...</div>';
	}
    var currentUser = Parse.User.current();
    var currentUserId = currentUser.id;
    var rePopulateSearchBoxes = Parse.Object.extend("Products");
    var newSearchBoxData = new Parse.Query(rePopulateSearchBoxes);
    newSearchBoxData.equalTo("status", "online")
	if(!!skip) { 
		newSearchBoxData.limit(10);
		newSearchBoxData.skip(skip);
		iGATSskip += 10;
		popLoadingMoreResults();
	 } else {
		clearInterval(iGASRI);
		clearInterval(iGATS);
		incrementalGetAllTaggedSearchResultsInterval()
		newSearchBoxData.limit(10);
		iGATSskip = 10;
	 }
    if (!selectedPubLength || selectedPubLength == "" || selectedPubLength == undefined || selectedPubLength == "Publisher") {
    } else {
        newSearchBoxData.equalTo("publisher", selectedPubLength)
    }
    if (!selectedCampLength || selectedCampLength == "" | selectedCampLength == undefined || selectedCampLength == "Campaign Length") {
    } else {
        newSearchBoxData.equalTo("campLength", parseInt(selectedCampLength))
    }
    if (!selectedCountry || selectedCountry == "" || selectedCountry == undefined || selectedCountry == "Country") {
    } else {
        while (selectedCountry.indexOf(' ') != -1) selectedCountry = selectedCountry.replace(' ', '-');
        newSearchBoxData.equalTo("country", selectedCountry.toLowerCase())
    }
    if (!selectedCity || selectedCity == "" || selectedCity == undefined || selectedCity == "City") {
    } else {
        newSearchBoxData.equalTo("city", selectedCity)
    }
    if (!selectedLnb || selectedLnb == "" || selectedLnb == undefined) {
    } else {
        newSearchBoxData.equalTo("lnb", selectedLnb.toLowerCase())
    }
    if (!adTypeArray || adTypeArray == "" || adTypeArray == " " || adTypeArray == undefined) {
    } else {
        newSearchBoxData.containedIn("adType", adTypeArray)
    }
    if (!selectedPriceLow || selectedPriceLow == "" || selectedPriceLow == " " || selectedPriceLow == undefined) {
    } else {
        newSearchBoxData.greaterThan("price", parseInt(selectedPriceLow))
    }
    if (!selectedPriceHigh || selectedPriceHigh == "" || selectedPriceHigh == " " || selectedPriceHigh == undefined) {
    } else {
        newSearchBoxData.lessThan("price", parseInt(selectedPriceHigh))
    }
    if (!selectedLeadLow || selectedLeadLow == "" || selectedLeadLow == " " || selectedLeadLow == undefined) {
    } else {
        newSearchBoxData.greaterThan("leadTime", parseInt(selectedLeadLow))
    }
    if (!selectedLeadHigh || selectedLeadHigh == "" || selectedLeadHigh == " " || selectedLeadHigh == undefined) {
    } else {
        newSearchBoxData.lessThan("leadTime", parseInt(selectedLeadHigh))
    }
	try { var tags = document.getElementById("searchInput").value.toLowerCase() } catch (e) { var tags = "" }
        if (!tags) { } else {
            while (tags.indexOf(',') != -1) tags = tags.replace(',', ' ');
            while (tags.indexOf('.') != -1) tags = tags.replace('.', ' ');
            while (tags.indexOf('#') != -1) tags = tags.replace('#', ' ');
            var splitTags1 = tags.replace(/\s{2,}/g, ' ');
            splitTags3 = splitTags1.replace(/ /g, '+');
            var splitTags2 = splitTags1.split(" ");
            newSearchBoxData.containsAll("tags", splitTags2);
        }
    newSearchBoxData.find({
        success: function (results) {
            totalAdCounter1 = 0;
            totalAdCounter0 = results.length;
			if(!!skip) { 
        		totalAdCounter0 = totalAdCounter0 + results.length
			} else {totalAdCounter0 = results.length}
            var counter = 0;
            if (results.length == 0) {
				clearInterval(iGATS);
				clearInterval(iGASRI);
                if(!!skip) { 
        		totalAdCounter0 = totalAdCounter0 + results.length
				} else {totalAdCounter0 = results.length}
				if(!!skip) {  } else {
                document.getElementById("advertiserPage2Div").innerHTML = "";
                document.getElementById("advertiserPage2Div").innerHTML += '<div class="pibRow5"> <div class="pibCountry223" accesskey="publisher" title="publisher" onclick="sortResultsSubmit(this.accessKey,this.title)">Publisher</div> <div class="pibAdType223" accesskey="adType" title="adType" onclick="sortResultsSubmit(this.accessKey,this.title)">Ad Type</div> <div class="pibCity223" accesskey="city" title="city" onclick="sortResultsSubmit(this.accessKey,this.title)">City</div> <div class="pibCampTime223" onclick="sortResultsSubmit(this.accessKey,this.title)" accesskey="campLength">Length</div>  <div class="pibReach223" accesskey="reach" title="reach" onclick="sortResultsSubmit(this.accessKey,this.title)">Reach</div> <div class="pibCost223" accesskey="price" title="price" onclick="sortResultsSubmit(this.accessKey,this.title)">Cost</div>  </div><br/><div style="text-align:center;width:97.7%;">Sorry, there is no results for this search.</div>';
                setTimeout(function (args) { advSearchRunning = false; }, 850)
				if(!!skip) { totalAdCounter0 = totalAdCounter0 + skip};
				document.getElementById("adCounterButton").children[1].innerHTML = (totalAdCounter0 - totalAdCounter1).toString() + "/" + totalAdCounter.toString() + "<p class='comAds'>(Comparable Adverts)</p>";
				}
				iGATSrunning = 0;
                endSearchResultPost()
            } else {
				if(!skip) {
                document.getElementById("advertiserPage2Div").innerHTML = "";
                document.getElementById("advertiserPage2Div").innerHTML += '<div class="pibRow5"> <div class="pibCountry223" accesskey="publisher" title="publisher" onclick="sortResultsSubmit(this.accessKey,this.title)">Publisher</div> <div class="pibAdType223" accesskey="adType" title="adType" onclick="sortResultsSubmit(this.accessKey,this.title)">Ad Type</div> <div class="pibCity223" accesskey="city" title="city" onclick="sortResultsSubmit(this.accessKey,this.title)">City</div> <div class="pibCampTime223" onclick="sortResultsSubmit(this.accessKey,this.title)" accesskey="campLength" title="campLength">Length</div>  <div class="pibReach223" accesskey="reach"  title="reach" onclick="sortResultsSubmit(this.accessKey,this.title)">Reach</div> <div class="pibCost223" accesskey="price" title="price" onclick="sortResultsSubmit(this.accessKey,this.title)">Cost</div>  </div>';
				}
                for (var i = 0; i < results.length; i++) {
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
                        document.getElementById("advertiserPage2Div").innerHTML += '<div class="pibRow4" onclick="hideShowProductLine(this,this.accessKey, this.title)" title='+ id +' accessKey='+ id +'> <div class="pibCountry22">' + publisher + '</div> <div class="pibAdType22">' + adType + '</div> <div class="pibCity22">' + city + '</div> <div class="pibCampTime22">' + campLength + '</div>  <div class="pibReach22">' + reach + '</div> <div class="pibCost22">' + cur + ':<br/>' + prc + '</div><a name="'+ id +'-end" id="'+ id +'-end"></a> </div><div class="productInformationBox" id="' + id + '" title="' + seller + '|' + price + '" accessKey="' + seller + '|' + price + '" onclick="highlightSearchResult(this.id,this.accessKey,this.children[2].children[4].textContent,this)"><a onclick="navigating=true" name="'+ id +'-tag" id="'+ id +'-tag"></a> <div class="pibRow1"> <div class="pibCountry1">Country</div> <div class="pibCity1">City</div> <div class="pibLnb1">Ad Type</div> <div class="pibReach1">Reach</div> <div class="pibCost1">Cost</div> <div class="pibLeadTime1">Lead Time</div> </div> <div class="pibRow2"> <div class="pibCountry2" style="background-image:url(../images/countries/' + country.toLowerCase() + '.png)">' + country2 + '</div> <div class="pibCity2">' + city + '</div> <div class="pibLnb2">' + adType + '</div> <div class="pibReach2">' + reach + '</div> <div class="pibCost2">' + cur + ':<br/>' + prc + '</div> <div class="pibLeadTime2" id="' + stock + '" accessKey="' + quantity + '" title="' + quantity + '">' + lead + ' hours</div> </div> <div class="pibRow3"> <div class="pibPublisher" style="background-image:url(' + logo + ')" ><img class="pibImg" src=' + logo + ' /><br/>' + publisher + '</div> <div class="pibLnb"> ' + lnb + ' </div><div class="pibCampLength"> Length: ' + campLength + ' </div><div class="pibDescription"> ' + description + ' </div> </div> <div> </div> </div>';
                    }
                    if (counter == results.length) {
						iGATSrunning = 0;
						if(!!splitTags3) {
							if(splitTags3.charAt(0) == '+') { 
								splitTags3 = splitTags3.substring(1);
							}
							var adTypeArrayString1 = adTypeArray.toString();
							var selectedPubLength1 = selectedPubLength;
							while (adTypeArrayString1.indexOf(',') != -1) adTypeArrayString1 = adTypeArrayString1.replace(',', '+');
							while (adTypeArrayString1.indexOf(' ') != -1) adTypeArrayString1 = adTypeArrayString1.replace(' ', '+');
							while (selectedPubLength1.indexOf(' ') != -1) selectedPubLength1 = selectedPubLength1.replace(' ', '-');	
							window.location = '#Advertiser:Search-Tags+Keywords:' + splitTags3 + '+Options:SLH-'+selectedLeadHigh +'+SLL-'+selectedLeadLow+'+SPH-'+selectedPriceHigh+'+SPO-'+selectedPriceLow+'+SLNB-'+selectedLnb.toLowerCase()+'+SCI-'+selectedCity+'+SCO-'+selectedCountry.toLowerCase()+'+SCL-'+selectedCampLength+'+SPL-'+selectedPubLength1.toLowerCase()+'+SAA-'+adTypeArrayString1.toLowerCase();
							navigating = true;
						} else {
							var adTypeArrayString1 = adTypeArray.toString();
							var selectedPubLength1 = selectedPubLength;
							while (adTypeArrayString1.indexOf(',') != -1) adTypeArrayString1 = adTypeArrayString1.replace(',', '+');
							while (adTypeArrayString1.indexOf(' ') != -1) adTypeArrayString1 = adTypeArrayString1.replace(' ', '+');	
							while (selectedPubLength1.indexOf(' ') != -1) selectedPubLength1 = selectedPubLength1.replace(' ', '-');		
							window.location = '#Advertiser:Search-Tags+Options:SLH-'+selectedLeadHigh +'+SLL-'+selectedLeadLow+'+SPH-'+selectedPriceHigh+'+SPO-'+selectedPriceLow+'+SLNB-'+selectedLnb.toLowerCase()+'+SCI-'+selectedCity+'+SCO-'+selectedCountry.toLowerCase()+'+SCL-'+selectedCampLength+'+SPL-'+selectedPubLength1.toLowerCase()+'+SAA-'+adTypeArrayString1.toLowerCase();
							navigating = true;
							}
                        setTimeout(function (args) { advSearchRunning = false; }, 850)
						if(!!skip) { totalAdCounter0 = totalAdCounter0 + skip};
                        document.getElementById("adCounterButton").children[1].innerHTML = (totalAdCounter0 - totalAdCounter1).toString() + "/" + totalAdCounter.toString() + "<p class='comAds'>(Comparable Adverts)</p>";
						
						///SEARCH URL EXAMPLE::
		//#Advertiser:Search-Tags+Keywords:bus+Options:SLH-121h+SLL-77h+SPH-2047100+SPO-115600+SLNB-local+SCI-manchester+SCO-united-kingdom+SCL-31557600+SPL-first-bus+SAA-bus+radio
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
                var error1 = "Line 650 - AdvertiserPage1 - Time: " + ts;
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
    })
}

function loadCustomSearch() {
    setTimeout(function (args) {
        document.getElementById("advSearchLoad").textContent = "Loading";
        document.getElementById("advSearchLoad").style.backgroundColor = "darkgoldenrod";
        setTimeout(function (args) {
            document.getElementById("advSearchLoad").textContent = "Load";
            document.getElementById("advSearchLoad").style.backgroundColor = "black";
        }, 1650)
    }, 50)
    var x = document.cookie;
    var curSavedSearch;
    var oldSS;
    if (!!x) {
        var name = "savedSearch1=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) != -1) curSavedSearch = c.substring(name.length, c.length);
        }
        try{ oldSS = curSavedSearch.replace("savedSearch1=", ""); } catch(e) {  
			fakeNumx +=1
			if(document.getElementById("dateTimeLeadInformation").style.display == "none") {
				rememberMe = document.getElementById("dateTimeLeadInformation").textContent;
			}
			document.getElementById("dateTimeLeadInformation").textContent = "There is no saved search to load from...";
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
			var doppleCheck = document.getElementById("dateTimeLeadInformation").textContent + fakeNumx;
			setTimeout(function (args) {
			  var curSortText = document.getElementById("dateTimeLeadInformation").textContent + fakeNumx;
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
        if (!!oldSS) {
            //split | saved-search data and populate variables then elements
            var ssArray = oldSS.split("|");
            selectedPubLength = ssArray[0];
            selectedCampLength = ssArray[1];
            selectedCountry = ssArray[2];
            selectedCity = ssArray[3];
            selectedLnb = ssArray[4];

            //adTypeArray = ssArray[5];
            adTypeArray = []
            var aTa = ssArray[5].split(",")
            for (var j = 0; j < aTa.length; j++) {
                if (aTa[j] != "none") adTypeArray.push(aTa[j])
            }
            //
            selectedPriceLow = ssArray[6];
            selectedPriceHigh = ssArray[7];
            selectedLeadLow = ssArray[8];
            selectedLeadHigh = ssArray[9];
            //
            var ccCountry = document.getElementById("countrySelectionBox1").children;
            for (var i = 0; i < ccCountry.length; i++) {
                if (selectedCountry == "none") { selectedCountry = "" } else {
                    if (ccCountry[i].textContent.toLowerCase() == selectedCountry) ccCountry[i].selected = true
                }
            }
            var ccCity = document.getElementById("cityLengthSelectionBox1").children;
            for (var i = 0; i < ccCity.length; i++) {
                if (selectedCity == "none") { selectedCity = "" } else {
                    if (ccCity[i].textContent.toLowerCase() == selectedCity) ccCity[i].selected = true
                }
            }
            var ccCampLength = document.getElementById("campLengthSelectionBox1").children;
            for (var i = 0; i < ccCampLength.length; i++) {
                if (selectedCampLength == "none") { selectedCampLength = "" } else {
                    if (ccCampLength[i].textContent.toLowerCase() == selectedCampLength) ccCampLength[i].selected = true
                }
            }
            var ccPubLength = document.getElementById("pubLengthSelectionBox1").children;
            for (var i = 0; i < ccPubLength.length; i++) {
                if (selectedPubLength == "none") { selectedPubLength = "" } else {
                    if (ccPubLength[i].textContent == selectedPubLength) ccPubLength[i].selected = true
                }
            }
            //////
            var lnbChilds = document.getElementById("lnbBox").children;
            for (var i = 0; i < lnbChilds.length; i++) {
                if (selectedLnb == "none") { selectedLnb = "" } else {
                    if (lnbChilds[i].textContent == selectedLnb) {
                        lnbChilds[i].style.textDecoration = "underline"
                    } else {
                        lnbChilds[i].style.textDecoration = "none"
                    }
                }
            }

            if (selectedPriceLow == "none") { selectedPriceLow = priceLow - 1 }
            if (selectedPriceHigh == "none") { selectedPriceHigh = priceHigh + 1 }
            var costChilds = document.getElementById("budgetBox").children[2];
            var pricePercLow = parseInt(selectedPriceLow - priceLow) / (priceHigh - priceLow) * 100
            var pricePercHi = parseInt(selectedPriceHigh - priceLow) / (priceHigh - priceLow) * 100
            costChilds.children[0].style.left = pricePercLow.toFixed(2) + "%";
            costChilds.children[1].style.left = pricePercLow.toFixed(2) + "%";
            var widthCC = (pricePercHi.toFixed(2) - pricePercLow.toFixed(2))
            costChilds.children[0].style.width = widthCC + "%";
            costChilds.children[2].style.left = pricePercHi + "%";
            try { document.getElementById("budgetBox").children[1].value = selectedPriceLow.substr(0, selectedPriceLow.length - 2) + " - " + selectedPriceHigh.substr(0, selectedPriceHigh.length - 2) } catch (e) {
                document.getElementById("budgetBox").children[1].value = selectedPriceLow.toString().substr(0, selectedPriceLow.toString().length - 2) + " - " + selectedPriceHigh.toString().substr(0, selectedPriceHigh.toString().length - 2)
            }

            if (selectedLeadLow == "none") { selectedLeadLow = leadLow }
            if (selectedLeadHigh == "none") { selectedLeadHigh = leadHigh }
            var leadChilds = document.getElementById("leadTimeBox").children[2];
            var leadPercLow = parseInt(selectedLeadLow - leadLow) / (leadHigh - leadLow) * 100
            var leadPercHi = parseInt(selectedLeadHigh - leadLow) / (leadHigh - leadLow) * 100
            leadChilds.children[0].style.left = leadPercLow.toFixed(2) + "%";
            leadChilds.children[1].style.left = leadPercLow.toFixed(2) + "%";
            var widthLC = (leadPercHi.toFixed(2) - leadPercLow.toFixed(2))
            leadChilds.children[0].style.width = widthLC + "%";
            leadChilds.children[2].style.left = leadPercHi + "%";
            document.getElementById("leadTimeBox").children[1].value = selectedLeadLow + "h - " + selectedLeadHigh + "h"

            var adBoxy = document.getElementById("adTypeBox").children;
            //repop-search-adv-after-adtypebox-population
            for (var q = 0; q < adBoxy.length; q++) {
                adBoxy[q].children[0].checked = false
            }
            for (var p = 0; p < adTypeArray.length; p++) {
                for (var q = 0; q < adBoxy.length; q++) {
                    var adText = adBoxy[q].textContent.toLowerCase()
                    if (adText == adTypeArray[p]) {
                        adBoxy[q].children[0].checked = true
                    }
                }
            }
            advSearchRePopulate()
        }
    }
}

function saveCustomSearch() {
    if (!selectedPubLength || selectedPubLength == "" || selectedPubLength == undefined || selectedPubLength == "Publisher" || selectedPubLength == NaN) {
        var ss1 = "none";
    } else {
        var ss1 = selectedPubLength;
    }
    if (!selectedCampLength || selectedCampLength == "" | selectedCampLength == undefined || selectedCampLength == "Campaign Length" || selectedCampLength == NaN) {
        var ss2 = "none";
    } else {
        var ss2 = selectedCampLength
    }
    if (!selectedCountry || selectedCountry == "" || selectedCountry == undefined || selectedCountry == "Country" || selectedCountry == NaN) {
        var ss3 = "none";
    } else {
        while (selectedCountry.indexOf(' ') != -1) selectedCountry = selectedCountry.replace(' ', '-');
        var ss3 = selectedCountry.toLowerCase()
    }
    if (!selectedCity || selectedCity == "" || selectedCity == undefined || selectedCity == "City" || selectedCity == NaN) {
        var ss4 = "none";
    } else {
        var ss4 = selectedCity
    }
    if (!selectedLnb || selectedLnb == "" || selectedLnb == undefined || selectedLnb == NaN) {
        var ss5 = "none";
    } else {
        var ss5 = selectedLnb.toLowerCase()
    }
    if (!adTypeArray || adTypeArray == "" || adTypeArray == " " || adTypeArray == undefined || adTypeArray == NaN) {
        var ss6 = "none";
    } else {
        var ss6 = adTypeArray
    }
    if (!selectedPriceLow || selectedPriceLow == "" || selectedPriceLow == " " || selectedPriceLow == undefined || selectedPriceLow == NaN) {
        var ss7 = "none";
    } else {
        var ss7 = parseInt(selectedPriceLow)
    }
    if (!selectedPriceHigh || selectedPriceHigh == "" || selectedPriceHigh == " " || selectedPriceHigh == undefined || selectedPriceHigh == NaN) {
        var ss8 = "none";
    } else {
        var ss8 = parseInt(selectedPriceHigh)
    }
    if (!selectedLeadLow || selectedLeadLow == "" || selectedLeadLow == " " || selectedLeadLow == undefined || selectedLeadLow == NaN) {
        var ss9 = "none";
    } else {
        var ss9 = parseInt(selectedLeadLow)
    }
    if (!selectedLeadHigh || selectedLeadHigh == "" || selectedLeadHigh == " " || selectedLeadHigh == undefined || selectedLeadHigh == NaN) {
        var ss10 = "none";
    } else {
        var ss10 = parseInt(selectedLeadHigh)
    }
    //split elements with | and add to saved-search string
    var savedSearch = ss1 + "|" + ss2 + "|" + ss3 + "|" + ss4 + "|" + ss5 + "|" + ss6 + "|" + ss7 + "|" + ss8 + "|" + ss9 + "|" + ss10;
    var time = new Date();
    time.setDate(time.getDate() + 230);
    var sS1 = "savedSearch1=" + savedSearch + ";"
    var dT1 = "expires=" + time.toGMTString() + ";"
    document.cookie = sS1 + dT1
    setTimeout(function (args) {
        document.getElementById("advSearchSave").textContent = "Saved";
        document.getElementById("advSearchSave").style.backgroundColor = "green";
        setTimeout(function (args) {
            document.getElementById("advSearchSave").textContent = "Save";
            document.getElementById("advSearchSave").style.backgroundColor = "black";
        }, 1650)
    }, 50)
}

function resetAdvSearchPanel() {
    advertiserPage1Load();
	setTimeout(function (args) {
		var innerHtmlCheck = document.getElementById("advertiserPage2Div").innerHTML;
    	if (innerHtmlCheck != "") {
			document.getElementById("advertiserPage2Div").innerHTML = "";
		}
		}, 650)
    setTimeout(function (args) { advancedSearch() }, 850)
}

function popLoadingMoreResults() {
	var dtliDiv = document.getElementById("dateTimeLeadInformation");
		if(dtliDiv.textContent.indexOf("more results") == -1) {
			rememberMe = document.getElementById("dateTimeLeadInformation").textContent;
			document.getElementById("dateTimeLeadInformation").textContent = "Loading more results..."
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
				  }, 1850)
			}
	}