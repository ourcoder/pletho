var iGASRIskip;
var iGASRIrunning = 0;
var iGASRI;
var iGATSskip;
var iGATSrunning = 0;
var iGATS;

function incrementalGetAllSearchResultsInterval() {
	iGASRI = setInterval(incrementalGetAllSearchResults, 500);	
	//clearInterval(iGASRI);
}

function incrementalGetAllSearchResults() {
		var advertiserPage2DivScroll = document.getElementById("advertiserPage2Div").clientHeight;
		var advertiserPage2DivScrollTop = document.getElementById("advertiserPage2Div").scrollTop;
		var advertiserPage2DivScrollHeight = document.getElementById("advertiserPage2Div").scrollHeight;
		if(advertiserPage2DivScroll + advertiserPage2DivScrollTop == advertiserPage2DivScrollHeight && iGASRIrunning == 0) {
			iGASRIrunning = 1;
			getAllSearchResults(iGASRIskip)
		}
}

function incrementalGetAllTaggedSearchResultsInterval() {
	iGATS = setInterval(incrementalGetAllTaggedSearchResults, 500);	
	//clearInterval(iGATS);
}

function incrementalGetAllTaggedSearchResults() {
		var advertiserPage2Divie = document.getElementById("advertiserPage2Div").innerHTML;
		var advertiserPage2DivScroll = document.getElementById("advertiserPage2Div").clientHeight;
		var advertiserPage2DivScrollTop = document.getElementById("advertiserPage2Div").scrollTop;
		var advertiserPage2DivScrollHeight = document.getElementById("advertiserPage2Div").scrollHeight;
		if(advertiserPage2DivScroll + advertiserPage2DivScrollTop == advertiserPage2DivScrollHeight && iGATSrunning == 0) {
			if(advertiserPage2Divie.indexOf("Loading results...") != -1) {} else {
				iGATSrunning = 1;
				if (searchMethod == "advSearch") {
					advSearchRePopulate(iGATSskip)
				} else {
					getAllTaggedSearchResults(iGATSskip)
				}
			}
		}
}