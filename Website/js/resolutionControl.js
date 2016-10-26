
try {
    var windowWidth = parseInt(window.innerWidth); //firefox 0?
    var windowHeight = parseInt(window.innerHeight); //firefox 0?
} catch (e) { }

try {
    window.addEventListener('resize', onSizeChanged, false);
} catch (e) {$( window ).resize(function() { onSizeChanged() }) }

setTimeout(function (args) {
    onSizeChanged();
}, 1550)

setTimeout(function (args) {
	var blankBoxCheck = document.getElementById('addBookmarkContainer').innerHTML;
	if(!blankBoxCheck) {
		document.getElementById('addBookmarkContainer').style.display = "none";
		document.getElementById('loggedOutMessage').style.height = "115px";
	} else {
		document.getElementById('addBookmarkContainer').style.display = "block";
		document.getElementById('loggedOutMessage').style.height = "165px";
	}
}, 3550)

function onSizeChanged() {
    try {
        windowWidth = parseInt(window.innerWidth);
        windowHeight = parseInt(window.innerHeight);
		if(windowWidth <= 500)  {
			document.getElementById("mainPlethoLogo1").src = "images/pletho-logo-small.png";
			document.getElementById("mainPlethoLogo1").style.width = "90%";
			document.getElementById("mainPlethoLogo1").style.marginTop = "17%";
			document.getElementById("sloganBoxButton").style.paddingTop = "20px";
			document.getElementById("sloganBox").style.paddingTop = "20px";
			document.getElementById("mainPlethoBar1").style.width = "76%";
			document.getElementById("mainPlethoBar1").style.marginRight = "3%";
			document.getElementById("video2").style.height = Math.floor(((windowWidth/100 * 70)/100) * (52)) + "px";
		} else if(windowWidth <= 1000)  {
			document.getElementById("mainPlethoLogo1").src = "images/pletho-logo-medium.png";
			document.getElementById("mainPlethoLogo1").style.width = "75%";
			document.getElementById("mainPlethoLogo1").style.marginTop = "5%";
			if(windowHeight >= 650){
				document.getElementById("sloganBoxButton").style.paddingTop = "60px";
				document.getElementById("sloganBox").style.paddingTop = "60px";
			} else {
				document.getElementById("sloganBoxButton").style.paddingTop = "20px";
				document.getElementById("sloganBox").style.paddingTop = "20px";
			}
			document.getElementById("mainPlethoBar1").style.width = "70%";
			document.getElementById("mainPlethoBar1").style.marginRight = "3%";
			document.getElementById("video2").style.height = Math.floor(((windowWidth/100 * 70)/100) * (54)) + "px";
		} else {
			document.getElementById("mainPlethoLogo1").src = "images/pletho-logo-large.png";
			document.getElementById("mainPlethoLogo1").style.width = "65%";
			if(windowHeight >= 650){
				document.getElementById("sloganBoxButton").style.paddingTop = "120px";
				document.getElementById("sloganBox").style.paddingTop = "120px";
			} else {
				document.getElementById("sloganBoxButton").style.paddingTop = "20px";
				document.getElementById("sloganBox").style.paddingTop = "20px";
			}
			document.getElementById("mainPlethoLogo1").style.marginTop = ".5%";
			document.getElementById("mainPlethoBar1").style.width = "58%";
			document.getElementById("mainPlethoBar1").style.marginRight = "3%";
			document.getElementById("video2").style.height = Math.floor(((windowWidth/100 * 70)/100) * (54.6)) + "px";
		}
		if(!windowWidth || windowWidth == "NaN") {
        	windowWidth = parseInt(document.body.clientWidth);
        	windowHeight = parseInt(document.body.clientHeight);
		}
		if(windowHeight == 0) windowHeight = parseInt(document.documentElement.clientHeight);
		if(windowWidth == 0) windowWidth = parseInt(document.documentElement.clientWidth);
		var heightCalc = Math.round(windowWidth / 2.7);
		document.getElementById("mainPicDisplay").style.minHeight = heightCalc + "px";
		document.getElementById("mainPicDisplay").style.height = (windowHeight - 80) + "px";
		
		if(heightCalc < 290) {
			document.getElementById("mainPicDisplay").style.minHeight = "290px"
			}
		
        if (!!windowHeight) {
            //var mainPiccy = windowHeight - 80;
            //document.getElementById("mainPicDisplay").style.height = mainPiccy.toString() + "px";
			document.getElementById("mainPicDisplay").style.minHeight = "290px"
        }
        if (windowWidth < 730) {
            document.getElementById("plethoFooter3").style.display = "none";
        } else {
            document.getElementById("plethoFooter3").style.display = "block";
        }
        if (document.getElementById("searchBox").style.display == "block") {
            if (windowWidth < 730) {
                    document.getElementById("adShareButton").style.display = "block";
                if (document.getElementById("advancedSearchButton").className == "hide") {
                    document.getElementById("searchAllButton").style.display = "block";
                    document.getElementById("normalSearchButton").style.display = "block";
                    document.getElementById("buyAdSlotButton").style.display = "none";
    				document.getElementById("ShareWideAdSlotButton").style.display = "none";
                    document.getElementById("sortResultsButton").style.display = "none";
                }
                if (document.getElementById("advertiserPage1Div").style.display == "block") {
                    document.getElementById("buttonFooterSearch").style.backgroundColor = "#424242"
            		document.getElementById("advertiserPage2Div").style.bottom = "271px";
            		document.getElementById("buttonFooterSearch").style.bottom = "0px";
    				document.getElementById("plethoFooter").style.display = "none";
                } else {
                    document.getElementById("buttonFooterSearch").style.backgroundColor = "white";
                    document.getElementById("advertiserPage2Div").style.bottom = "70px";
            		document.getElementById("buttonFooterSearch").style.bottom = "27px";
    				if (windowWidth < 730) {
					document.getElementById("plethoFooter").style.display = "block";
				} else {
					document.getElementById("plethoFooter").style.display = "none";
					}
					
                }
                document.getElementById("plethoFooter2").style.display = "none";
            } else {
                document.getElementById("adShareButton").style.display = "none";
            	document.getElementById("buttonFooterSearch").style.bottom = "27px";
    			document.getElementById("plethoFooter").style.display = "none";
                if (document.getElementById("advancedSearchButton").className == "hide") {
                    document.getElementById("searchAllButton").style.display = "none";
                    document.getElementById("normalSearchButton").style.display = "none";
                    document.getElementById("normalSearchButton2").style.display = "block";
                    document.getElementById("buyAdSlotButton").style.display = "block";
    				document.getElementById("ShareWideAdSlotButton").style.display = "block";
                    document.getElementById("sortResultsButton").style.display = "none";
                }
                document.getElementById("buttonFooterSearch").style.backgroundColor = "#424242"
                document.getElementById("plethoFooter").style.display = "none";
                document.getElementById("plethoFooter2").style.display = "block";
                if (document.getElementById("advertiserPage1Div").style.display == "block") {
                    document.getElementById("advertiserPage2Div").style.bottom = "230px";
                } else {
                    document.getElementById("advertiserPage2Div").style.bottom = "0px";
                }
            }
        } else {
            if (windowWidth < 730) {
                document.getElementById("buttonFooterSearch").style.backgroundColor = "white";
                document.getElementById("plethoFooter").style.display = "block";
                document.getElementById("plethoFooter2").style.display = "none";
            } else {
                document.getElementById("buttonFooterSearch").style.backgroundColor = "#424242";
                document.getElementById("plethoFooter").style.display = "none";
                document.getElementById("plethoFooter2").style.display = "block";
            }

        }
    } catch (e) { }
}
