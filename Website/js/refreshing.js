var refreshInterval = setInterval(loginCheckRefresh, 500);

window.onbeforeunload = function(event)
    {
		if (window.location.hash == "#") {
			var lastPage = prevHit;
			window.history.go(-1);
		}
	}
      
function loginCheckRefresh() {
	Parse.initialize("", "");
	var currentUser = "offline"
	try { var currentUser = Parse.User.current() || "offline"; } catch (e) { 
		var currentUser = "offline" 
	}
	try { var homepage = document.getElementById("home").style.display;} catch (e) { }
	if(window.location.search.indexOf("recovery") != -1) {recoveryPleaseWait()}
	if (!!window.location.hash && currentUser != "offline" && homepage == "display" && lock == false || !!window.location.hash && currentUser != "offline" && homepage == "" && lock == false) {
		doNotLogin = true
		clearInterval(refreshInterval);
        setTimeout(function (args) {
			if (window.location.hash == "#Join") {
				doNotLogin = false
				joinMP()
            }else if (window.location.hash == "#Login") {
				doNotLogin = false
				loginMP()
            }else if (window.location.hash == "#" || window.location.hash == "") {
				doNotLogin = false
            }else if (window.location.hash == "#Advertiser") {
				refreshingNotification()
                	advertiserPage1Load()
            }else if (window.location.hash.indexOf('-tag') != -1) {
				var adIdLinked1 = window.location.hash.split('-');
				var adIdLinked2 = adIdLinked1[0].replace('#','');
				reOrderVal = adIdLinked2;
				refreshingNotification();
                	advertiserPage1Load();
					searchTaggedListings(); 
            }else if (window.location.hash.indexOf('-end') != -1) {
				refreshingNotification()
                	advertiserPage1Load()
			} else if (window.location.hash.indexOf("#Advertiser:Search-Tags+") != -1) {
				if (window.location.hash.indexOf("Options:") != -1) { 
				refreshingNotification()
					advertiserPage1Load()
					setTimeout(function (args) {
						//tags and keywords
						var newOptions;
						var keyNopts = window.location.hash;
						keyNopts = keyNopts.replace('#Advertiser:Search-Tags+','')
						keyNopts = keyNopts.split('Options:')
						try {
						if(keyNopts[0].indexOf("Keywords:") != -1 ) { 
							keyNopts[0] = keyNopts[0].replace('Keywords:', '');
							keyNopts[0] = keyNopts[0].replace("+", " ");
							document.getElementById("searchInput").value = keyNopts[0].replace("+", "");
							if(document.getElementById("searchInput").value.length <= 2) {
								document.getElementById("searchInput").value = "";
								}
						} 
						else if (keyNopts[1].indexOf("Keywords:") != -1 ){
							keyNopts[1] = keyNopts[1].replace('Keywords:', '');
							keyNopts[1] = keyNopts[1].replace("+", " ");
							document.getElementById("searchInput").value = keyNopts[1].replace("+", "");
							if(document.getElementById("searchInput").value.length <= 2) {
								document.getElementById("searchInput").value = "";
								}		
							} 
						else if(keyNopts[2].indexOf("Keywords:") != -1 ) {
							keyNopts[2] = keyNopts[2].replace('Keywords:', '');
							keyNopts[2] = keyNopts[2].replace("+", " ");
							document.getElementById("searchInput").value = keyNopts[2].replace("+", "");
							if(document.getElementById("searchInput").value.length <= 2) {
								document.getElementById("searchInput").value = "";
								}
							}
						}catch(e) {}
						try {
						if(keyNopts[0].indexOf("SLH-") != -1 ) { 
							newOptions = keyNopts[0];
						} 
						else if (keyNopts[1].indexOf("SLH-") != -1 ){
							newOptions = keyNopts[1];	
						} 
						else if(keyNopts[2].indexOf("SLH-") != -1 ) {
							newOptions = keyNopts[2];
						} 
						else if(keyNopts[3].indexOf("SLH-") != -1 ) {
							newOptions = keyNopts[3];
						}
						}catch(e) {}
						setTimeout(function (args) {
						if (!!newOptions) {
							var newOptions1 = newOptions.split('SLH-');
							var newOptions2 = newOptions1[1].split('SLL-');
							var newOptions3 = newOptions2[1].split('SPH-');
							var newOptions4 = newOptions3[1].split('SPO-');
							var newOptions5 = newOptions4[1].split('SLNB-');
							var newOptions6 = newOptions5[1].split('SCI-');
							var newOptions7 = newOptions6[1].split('SCO-');
							var newOptions8 = newOptions7[1].split('SCL-');
							var newOptions9 = newOptions8[1].split('SPL-');
							var newOptions0 = newOptions9[1].split('SAA-');
							selectedCity = newOptions7[0].replace("+", "");
							var newCountry = newOptions8[0].replace("+", "");
							selectedCountry = newCountry.replace("-", " ");
							var newPub = newOptions0[0].replace("+", "");
							selectedPubLength = newPub.replace("-", " ");
							var newAds = newOptions0[1]; 
							newAds = newAds.split("+");
							selectedCampLength = newOptions9[0].replace("+", "");;
							var newCampLength = newOptions9[0].replace("+", "");
							campLength = selectedCampLength;
							if(!!campLength) {
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
							}
							selectedLnb = newOptions6[0].replace("+", "");
							selectedPriceLow = newOptions5[0].replace("+", "");
							selectedPriceHigh = newOptions4[0].replace("+", "");
							selectedLeadLow = parseInt(newOptions3[0].replace("+", ""));
							selectedLeadHigh = parseInt(newOptions2[0].replace("+", ""));
							if(!!selectedCountry) {
							var ccCountry = document.getElementById("countrySelectionBox1").children;
							for (var i = 0; i < ccCountry.length; i++) {
								if (selectedCountry == "none" || !selectedCountry || selectedCountry.length <= 2) { selectedCountry = "" } else {
									if (ccCountry[i].textContent.toLowerCase() == selectedCountry.toLowerCase()) ccCountry[i].selected = true
								}
							}
							}
							if(!!selectedCity) {
							var ccCity = document.getElementById("cityLengthSelectionBox1").children;
							for (var i = 0; i < ccCity.length; i++) {
								if (selectedCity == "none"|| !selectedCity || selectedCity.length <= 2) { selectedCity = "" } else {
									if (ccCity[i].textContent.toLowerCase() == selectedCity.toLowerCase() ) {
										ccCity[i].selected = true;
										selectedCity = ccCity[i].textContent;
										}
								}
							}
							}
							selectedCampLength = campLength;
							if(!!selectedCampLength || selectedCampLength.indexOf('NaN') == -1) {
							var ccCampLength = document.getElementById("campLengthSelectionBox1").children;
								for (var i = 0; i < ccCampLength.length; i++) {
									if (selectedCampLength == "none"|| !selectedCampLength || selectedCampLength.length <= 2) { selectedCampLength = "" } else {
										if (ccCampLength[i].textContent == selectedCampLength) {
											ccCampLength[i].selected = true; 
											selectedCampLength = newCampLength;
											}
									}
								}
							}
							if(!!selectedPubLength) {
								var ccPubLength = document.getElementById("pubLengthSelectionBox1").children;
								for (var i = 0; i < ccPubLength.length; i++) {
									if (selectedPubLength == "none"|| !selectedPubLength || selectedPubLength.length <= 2) { selectedPubLength = "" } else {
									  if (ccPubLength[i].textContent.toLowerCase() == selectedPubLength.toLowerCase()) {
										  ccPubLength[i].selected = true; 
									 	  selectedPubLength = ccPubLength[i].textContent};
									}
								}
							}
							if(!!selectedLnb) {
								var lnbChilds = document.getElementById("lnbBox").children;
								for (var i = 0; i < lnbChilds.length; i++) {
									if (selectedLnb == "none"|| !selectedLnb || selectedLnb.length <= 2) { selectedLnb = "" } else {
										if (lnbChilds[i].textContent == selectedLnb) {
											lnbChilds[i].style.textDecoration = "underline"
										} else {
											lnbChilds[i].style.textDecoration = "none"
										}
									}
								}
							}
						if(!!selectedPriceLow && !!selectedPriceHigh) {
							if(!selectedPriceLow) selectedPriceLow = priceLow;
							if(!selectedPriceHigh) selectedPriceHigh = priceHigh;
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
							}
						if(!!selectedLeadLow && !!selectedLeadHigh) {
							if(!selectedLeadLow) selectedLeadLow = leadLow;
							if(!selectedLeadHigh) selectedLeadHigh = leadHigh;
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
							document.getElementById("leadTimeBox").children[1].value = selectedLeadLow + "h - " + selectedLeadHigh + "h";
						}
						if(!!newAds[0]) {
							var adBoxy = document.getElementById("adTypeBox").children;
								//repop-search-adv-after-adtypebox-population
								for (var q = 0; q < adBoxy.length; q++) {
									adBoxy[q].children[0].checked = false
								}
								for (var p = 0; p < newAds.length; p++) {
									for (var q = 0; q < adBoxy.length; q++) {
										var adText = adBoxy[q].textContent.toLowerCase()
										if (adText == newAds[p]) {
											adBoxy[q].children[0].checked = true
											adTypeArray.push(adBoxy[q].textContent);
										}
									}
								}
						}
							//SLH-121h+SLL-77h+SPH-2047100+SPO-115600+SLNB-local+SCI-manchester+SCO-united-kingdom+SCL-31557600+SPL-first-bus+SAA-bus+radio
							}
							setTimeout(function (args) {
								advancedSearch()
									setTimeout(function (args) {
										advSearchRePopulate()
									}, 1000)
								}, 750)
							}, 500) 
						}, 500)    
				} else {
					refreshingNotification()
					advertiserPage1Load()
					setTimeout(function (args) {
						//keywords only
						var keyWordz = window.location.hash;
						keyWordz = keyWordz.replace('#Advertiser:Search-Tags+Keywords:', '')
						keyWordz = keyWordz.replace("+", " ");
						document.getElementById("searchInput").value = keyWordz.replace("+", "");;
						setTimeout(function (args) {
							searchTaggedListings()
							}, 500)
						}, 500)    
					}	
            } else if(window.location.hash == "#Advertiser:Search-Tags") {
				refreshingNotification()
					advertiserPage1Load()
					setTimeout(function (args) {			
               		searchTaggedListings()
						}, 1000)
            } else if (window.location.hash == "#Advertiser:Search-All") {
				refreshingNotification()
					advertiserPage1Load()
					setTimeout(function (args) {	
                	searchAllListings()
						}, 500)
            } else if (window.location.hash == "#Campaigns:Pending") {
				refreshingNotification()
					advertiserPage1Load()
					setTimeout(function (args) {
                	var pastPage = "pending";
                	openCampaignsPage1(pastPage)
						}, 500)
            } else if (window.location.hash == "#Campaigns:Queue") {
				refreshingNotification()
					advertiserPage1Load()	
					setTimeout(function (args) {		
                	var pastPage = "queued";
                	openCampaignsPage1(pastPage)
						}, 500)
            } else if (window.location.hash == "#Campaigns:Live") {
				refreshingNotification()
					advertiserPage1Load()
					setTimeout(function (args) {
                	var pastPage = "live";
                	openCampaignsPage1(pastPage)
						}, 500)
            } else if (window.location.hash == "#Campaigns:Disputes") {
				refreshingNotification()
					advertiserPage1Load()
					setTimeout(function (args) {
                	var pastPage = "dispute";
                	openCampaignsPage1(pastPage)
						}, 500)
            } else if (window.location.hash == "#Campaigns:Complete") {
				refreshingNotification()
					advertiserPage1Load()
					setTimeout(function (args) {	
                	var pastPage = "complete";
                	openCampaignsPage1(pastPage)
						}, 500)
             } else if (window.location.hash == "#Campaigns") {
				refreshingNotification()
					advertiserPage1Load()
					setTimeout(function (args) {
                	openCampaignsPage1()
						}, 500)
            } else if (window.location.hash == "#Publisher") {
				refreshingNotification()
					advertiserPage1Load()
					setTimeout(function (args) {
                		openPublisherPage()
						}, 500)
            } else if (window.location.hash == "#Publisher:Required-Fields") {
				refreshingNotification()
					advertiserPage1Load()
					setTimeout(function (args) {
                		openPublisherPage()
						hideShowRequiredFields1()
						}, 500)
            } else if (window.location.hash == "#Publisher:Campaign-Description") {
				refreshingNotification()
					advertiserPage1Load()
					setTimeout(function (args) {
                		openPublisherPage()
						hideShowDescBox1()
						}, 500)
            } else if (window.location.hash == "#Publisher:Automatic-Fields") {
				refreshingNotification()
					advertiserPage1Load()
					setTimeout(function (args) {
                		openPublisherPage()
						hideShowAutoFields1()
						}, 500)
            } else if (window.location.hash == "#Publisher:Publisher-Logo") {
				refreshingNotification()
					advertiserPage1Load()
					setTimeout(function (args) {
                		openPublisherPage()
						hideShowImgFields1()
						}, 500)
            } else if (window.location.hash == "#Publisher:Optional-Fields") {
				refreshingNotification()
					advertiserPage1Load()
					setTimeout(function (args) {
                		openPublisherPage()
						hideOptionalFields1()
						}, 500)
            } else if (window.location.hash == "#Help") {
				refreshingNotification()
					advertiserPage1Load()
					setTimeout(function (args) {
                		openHelpPage();
						}, 500)
            } else if (window.location.hash == "#Help:Advertiser") {
				refreshingNotification()
					advertiserPage1Load()
					setTimeout(function (args) {
                		openHelpPage();
						toggleHelpPage("Advertiser");
						}, 500)
			} else if (window.location.hash == "#Help:FAQ") {
				refreshingNotification()
					advertiserPage1Load()
					setTimeout(function (args) {
                		openHelpPage();
						toggleHelpPage("FAQ");
						}, 500)
			} else if (window.location.hash == "#Help:Publisher") {
				refreshingNotification()
					advertiserPage1Load()
					setTimeout(function (args) {
                		openHelpPage();
						toggleHelpPage("Publisher");
						}, 500)
			} else if (window.location.hash == "#Help:Campaigns") {
				refreshingNotification()
					advertiserPage1Load()
					setTimeout(function (args) {
                		openHelpPage();
						toggleHelpPage("Campaigns");
						}, 500)
			} else if (window.location.hash == "#Help:Password") {
				refreshingNotification()
					advertiserPage1Load()
					setTimeout(function (args) {
                		openHelpPage();
						toggleHelpPage("Password");
						}, 500)
			} else if (window.location.hash == "#Help:Email") {
				refreshingNotification()
					advertiserPage1Load()
					setTimeout(function (args) {
                		openHelpPage();
						toggleHelpPage("Email");
						}, 500)
			} else if (window.location.hash == "#Help:Support") {
				refreshingNotification()
					advertiserPage1Load()
					setTimeout(function (args) {
                		openHelpPage();
						toggleHelpPage("Support");
						}, 500)
			} else if (window.location.hash.indexOf("#Help:Advertiser:") != -1) {
				refreshingNotification()
					advertiserPage1Load()
					setTimeout(function (args) {
                		openHelpPage();
						toggleHelpPage("Advertiser");
						setTimeout(function (args) {
							window.location.hash=window.location.hash;
							}, 500)
						}, 500)
            } else if (window.location.hash.indexOf("#Help:Campaigns:") != -1) {
				refreshingNotification()
					advertiserPage1Load()
					setTimeout(function (args) {
                		openHelpPage();
						toggleHelpPage("Campaigns");
						setTimeout(function (args) {
							window.location.hash=window.location.hash;
							}, 500)
						}, 500)
            } else if (window.location.hash.indexOf("#Help:Publisher:") != -1) {
				refreshingNotification()
					advertiserPage1Load()
					setTimeout(function (args) {
                		openHelpPage();
						toggleHelpPage("Publisher");
						setTimeout(function (args) {
							window.location.hash=window.location.hash;
							}, 500)
						}, 500)
            } else {
				doNotLogin = false
				}
			setTimeout(function (args) {			
				document.getElementById("refreshingWhitedrop").style.display = "none";
				document.getElementById("refreshingBackdrop").style.opacity = "0";
				document.getElementById("refreshingBox").style.opacity = "0";	
					setTimeout(function (args) {	
					document.getElementById("refreshingBackdrop").style.display = "none";
					document.getElementById("refreshingBox").style.display = "none";
					}, 1000)	
				}, 1000)
			}, 1700)
		} else {
			clearInterval(refreshInterval);
			}
}

function refreshingNotification() {
		setTimeout(function (args) {checkAlerts()}, 3700)
		if(document.getElementById("processingNewMerchant").style.display == "block") {} else {
			document.getElementById("refreshingWhitedrop").style.display = "block";
			document.getElementById("refreshingBackdrop").style.display = "block";
			document.getElementById("refreshingBox").style.display = "block";
			document.getElementById("refreshingBackdrop").style.opacity = "1";
			document.getElementById("refreshingBox").style.opacity = "1";
			document.getElementById("content").style.display = "block";
			document.getElementById("home").style.display = "none";
		}
	}