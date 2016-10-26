<?php include('/var/sites/p/pletho.com/liveState.php'); $livestate = $liveState; $host = $_SERVER['SERVER_NAME']  . $_SERVER['REQUEST_URI']; ?>
<?php if (strpos($host,'Kommand') !== false) { $admin = 'true'; } else { $admin = 'false'; } ?>
    
<!------DOC--------->    
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="user-scalable=no, width=device-width" />
    
    <!--KEYWORDS/DESCRIPTION/CONTENT/ROBOT-->
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="ROBOTS" content="NOODP" />
    <meta name="description" content="Pletho is a global advertising comparison platform and marketplace. Created to help both Advertisers and Publishers operate more efficiently and effectively." />
    <meta name="keywords" content="pletho, advertising, comparison, market, marketplace, platform, adverts, sale, buy, traditional, tv, radio,television, billboard, bus, taxi, newspaper, magazine, cinema, compare, local, national, worldwide, global, campaign, publisher, advertiser, budget, lead, reach, city, country, payment, sell" />
    
    <!--OPENGRAPH-->
    <meta prefix="og: http://ogp.me/ns#" property="og:title" content="Pletho - The Advertising Comparison Platform & Marketplace" />
    <meta prefix="og: http://ogp.me/ns#" property="og:site_name" content="Pletho - The Advertising Comparison Platform & Marketplace" />
    <meta prefix="og: http://ogp.me/ns#" property="og:see_also" content="https://pletho.com" />
    <meta prefix="og: http://ogp.me/ns#" property="og:type" content="website" />
    <meta prefix="og: http://ogp.me/ns#" property="og:url" content="https://pletho.com" />
    <meta prefix="og: http://ogp.me/ns#" property="og:image" content="http://pletho.com/images/media.jpg" />
    <meta prefix="og: http://ogp.me/ns#" property="og:description" content="Pletho is a global advertising comparison platform and marketplace. Created to help both Advertisers and Publishers operate more efficiently and effectively." />
    
    <!--G+-->
    <meta itemprop="name" content="Pletho - The Advertising Comparison Platform & Marketplace" />
	<meta itemprop="description" content="Pletho is a global advertising comparison platform and marketplace. Created to help both Advertisers and Publishers operate more efficiently and effectively." />
	<meta itemprop="image" content="http://pletho.com/images/media.jpg" />
    
    <!--TWITTER-->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:url" content="https://pletho.com">
    <meta name="twitter:title" content="Pletho - The Advertising Comparison Platform & Marketplace">
    <meta name="twitter:description" content="Pletho is a global advertising comparison platform and marketplace. Created to help both Advertisers and Publishers operate more efficiently and effectively.">
    <meta name="twitter:image" content="http://pletho.com/images/media.jpg">
 
    
    <!--TITLE/ICONS-->
    <title>Pletho - The Advertising Comparison Platform & Marketplace</title>
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="shortcut icon" href="/favicon.gif" />
    <link rel="image_src" href="http://pletho.com/images/media.jpg" />
 
    
    <!--JQUERY-->
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
    <link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.0/themes/smoothness/jquery-ui.css" />
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.0/jquery-ui.min.js"></script>
    <script type="text/javascript" src="touchPunch/jquery.ui.touch-punch.min.js"></script>


    <!--CSS FILES-->
    <link rel="stylesheet" type="text/css" href="/css/page0.css">
    <link rel="stylesheet" type="text/css" href="/css/page1.css">
    <link rel="stylesheet" type="text/css" href="/css/page2.css">
    <link rel="stylesheet" type="text/css" href="/css/page3.css">
    <link rel="stylesheet" type="text/css" href="/css/page4.css">
    <link rel="stylesheet" type="text/css" href="/css/page5.css">
    <link rel="stylesheet" type="text/css" href="/css/page6.css">
    <link rel="stylesheet" type="text/css" href="/css/page7.css">
    <link rel="stylesheet" type="text/css" href="/css/page8.css">
    <link rel="stylesheet" type="text/css" href="/css/page9.css">


    <!--FONTS-->
    <link href='https://fonts.googleapis.com/css?family=Ubuntu' rel='stylesheet' type='text/css'>


    <!--RESOLUTION CONTROL-->
    <script type="text/javascript" src="/js/resolutionControl.js"></script>
    <link rel="stylesheet" type="text/css" href="css/resolutionControl.css">
    <script src="/buggyFill/viewport-units-buggyfill.js"></script>
    <script>window.viewportUnitsBuggyfill.init();</script>
    
<?php if (strpos($admin,'true') !== false) {   ?>
	<!--ADMIN FILES-->   
<?php } ?>

<?php if (strpos($livestate,'false') !== false && strpos($admin,'false') !== false) { } else {   ?>
    <!--LOGIN-->
    <script type="text/javascript" src="/parse/db.js"></script>
    <script type="text/javascript" src="/js/login.js"></script>
    <script type="text/javascript" src="https://platform.linkedin.com/in.js">
        api_key: 77hsod6r7igaak
        authorize: true
    </script>


    <!--JS PAGES-->
    <script type="text/javascript" src="/js/advertiserPage1.js"></script>
    <script type="text/javascript" src="/js/advertiserPage2.js"></script>
    <script type="text/javascript" src="/js/campaignsPage1.js"></script>
    <script type="text/javascript" src="/js/campaignsPage2.js"></script>
    <script type="text/javascript" src="/js/disputes.js"></script>
    <script type="text/javascript" src="/js/publisherPage1.js"></script>
    <script type="text/javascript" src="/js/publisherPage2.js"></script>
    <script type="text/javascript" src="/js/alerts.js"></script>
    <script type="text/javascript" src="/js/help.js"></script>
    <script type="text/javascript" src="/js/recovery.js"></script>
    <script type="text/javascript" src="/js/mainPage.js"></script>
    <script type="text/javascript" src="/js/linkedin.js"></script>
    <script type="text/javascript" src="/js/helpPops.js"></script>
	<script type="text/javascript" src="/js/refreshing.js"></script>
	<script type="text/javascript" src="/js/incrementals.js"></script>
	<script type="text/javascript" src="/js/share.js"></script>
	<script type="text/javascript" src="/js/account.js"></script>
  
  
	<!--ADDFAV-->
    <script src="/addFav/add_bookmark.jquery.js"></script>

   
    <!--HISTORY-->
    <script type="text/javascript" src="/js/history.js"></script>


    <!--STRIPE-->
    <script src="https://checkout.stripe.com/checkout.js"></script>
    <script type="text/javascript" src="https://js.stripe.com/v2/"></script>
    <script type="text/javascript" src="/js/stripe.js"></script>
    
<?php } ?>    

    <!--SHARETOOL-->
    <link rel="stylesheet" href="/shareTool/css/rrssb.css" />

</head>

<body style="margin:0;">

	<?php include_once("analyticstracking.php") ?>
    
    <!--REFRESHING-BOX-->
    <div id="refreshingWhitedrop"></div>
    <div id="refreshingBackdrop"></div>
    <div id="refreshingBox">Refreshing...</div>
    <!--REFRESHING-BOX-->
    
    <!--SERVER-MSG-BOX-->
    <div id="serverMsgBackdrop" onclick="pwdCheckBoxer()"></div>
    <div id="serverMsgBox"></div>
    <!--SERVER-MSG-BOX-->
    
    <!--SHARE-MSG-BOX-->
    <div id="sharedMessageBackDrop" onclick="hideShareBoxes()" style="position:absolute;display:none;z-index: 7000;top:0;bottom:0;left:0;right:0;width:100%;height:100%;margin:auto;background-color:rgba(0,0,0,0.51);"></div>
    <div id="sharedMessage" style="position:absolute;display:none;z-index: 7001;top:0;bottom:0;left:0;right:0;width:269px;height:229px;margin:auto;background-color:white;text-align:center;border:7px solid #fbda55;border-radius:22px;">
    	<div style="float:left;height:230px;width:100%;text-align:center;line-height:30px;font-size:20px;background-color:#ccc;color:#777;border-radius:16px;">
        	Share This <b id="shareThisWhat" style="font-weight:300;"></b>
            <ul id="shareMsgBox" class="rrssb-buttons" style="width:264px;margin-left:3px;color:rgba(0,0,0,0.64);font-size:18px;height:36px;">
        		
            </ul>
        </div>
        <img onclick="hideShareBoxes()" src="/images/arrowExit.png" style="position:absolute;top:-13px;right:-13px;cursor:pointer;" />
    </div>
    <!--SHARE-MSG-BOX-->
    <!--ACCOUNT-BOX-->
    <div id="accBoxBackDrop" onclick="hideAccBoxes()" style="position:absolute;display:none;z-index: 7000;top:0;bottom:0;left:0;right:0;width:100%;height:100%;margin:auto;background-color:rgba(0,0,0,0.51);"></div>
    <div id="accBoxBox" class="campPopup" style="z-index: 7001;">
    <img onclick="hideAccBoxes()" src="/images/arrowExit.png" style="position:absolute;top:-13px;right:-13px;cursor:pointer;" />
    <div style="width:100%;height:auto;">
    	<div style="float:right;width:100%;text-align:center;color:#7e6a35;line-height:38px;height:42px;font-size:24px;background-color:rgb(251, 218, 85);">User Account</div>
    	<div style="float:right;width:90%;text-align:left;padding-top:7px;">Name: <b id="fnlnaccBox1" style="font-weight:normal;color:grey;">John Smith</b></div>
    	<div onclick="openHelpPage();toggleHelpPage('Email');hideAccBoxes()" style="cursor:pointer;float:right;width:90%;text-align:left;background-image:url(/images/editIcon3.png);background-position:top right;background-repeat:no-repeat;background-size:auto;">Email: <b id="mailaccBox2" style="font-weight:normal;color:grey;overflow:hidden;">john.smith@aol.com</b></div>
    	<div onclick="openHelpPage();toggleHelpPage('Password');hideAccBoxes()" style="cursor:pointer;float:right;width:80%;margin-right:10%;text-align:left;background-image:url(/images/editIcon3.png);background-position:top right;background-repeat:no-repeat;background-size:auto;">Password: <b id="pwaccBox3" style="font-weight:normal;color:grey;overflow:hidden;">********</b></div>
    	<div style="float:right;width:90%;text-align:left;">Created: <b id="dateaccBox4" style="font-weight:normal;color:grey;overflow:hidden;">01-01-2001</b></div>
    	<div style="float:right;width:90%;text-align:left;">Account Type: <b id="ftypeaccBox5" style="font-weight:normal;color:grey;overflow:hidden;">Publisher</b></div>
    </div>
        </div>
    <!--ACCOUNT-BOX-->
    <!--SUPPORT-HELP-MSG-BOX-->
    <div id="campHelpMessageBackDrop" onclick="hideHelpMessageBoxes()" style="position:absolute;display:none;z-index: 7000;top:0;bottom:0;left:0;right:0;width:100%;height:100%;margin:auto;background-color:rgba(0,0,0,0.51);"></div>
    <div id="campHelpMessageBox" class="campPopup" style="z-index: 7001;">
        <img onclick="hideHelpMessageBoxes()" src="/images/arrowExit.png" style="position:absolute;top:-13px;right:-13px;cursor:pointer;" />
            Campaign Support Ticket
            <div style="float:left;width:99%;text-align:center;font-size:11px;text-decoration:underline;line-height:12px;padding-bottom:12px;cursor:pointer;color:red;" onclick="campaignHelpSection()">Please check the Help section before submitting!</div>
            <div id="cstReplacer">
            <textarea cols="50" id="messageCampSupp" placeholder="Please detail the problem you are having with this campaign here..."
                      rows="4" name="comment" class="reasonBox2"></textarea>
            </div>
            <div class="greenCampButton" id="buttonSubmitCampHelp" onclick="submitNewTicket2()">Submit</div>
        </div>
    <!--SUPPORT-HELP-MSG-BOX-->
    <!--SUPPORT-HELP-MSG-BOX-PUB-->
    <div id="pubHelpMessageBackDrop" onclick="hideHelpMessageBoxes2()" style="position:absolute;display:none;z-index: 7000;top:0;bottom:0;left:0;right:0;width:100%;height:100%;margin:auto;background-color:rgba(0,0,0,0.51);"></div>
    <div id="pubHelpMessageBox" class="campPopup" style="z-index: 7001;">
        <img onclick="hideHelpMessageBoxes2()" src="/images/arrowExit.png" style="position:absolute;top:-13px;right:-13px;cursor:pointer;" />
            Publisher Support Ticket
            <div style="float:left;width:99%;text-align:center;font-size:11px;text-decoration:underline;line-height:12px;padding-bottom:12px;cursor:pointer;color:red;" onclick="help4pub()">Please check the Help section before submitting!</div>
            <div id="cstReplacer2">
            <textarea cols="50" id="messagePubSupp" placeholder="Please detail the problem you are having here..."
                      rows="4" name="comment" class="reasonBox2"></textarea>
            </div>
            <div class="greenCampButton" id="buttonSubmitCampHelp2" onclick="submitNewTicket()">Submit</div>
        </div>
    <!--SUPPORT-HELP-MSG-BOX-PUB-->
    <!--LOGOUT-MSG-BOX-->
    <div id="loggedOutMessageBackDrop" style="position:absolute;display:none;z-index: 7000;top:0;bottom:0;left:0;right:0;width:100%;height:100%;margin:auto;background-color:rgba(0,0,0,0.51);"></div>
    <div id="loggedOutMessage" style="position:absolute;display:none;z-index: 7001;top:0;bottom:0;left:0;right:0;width:270px;height:115px;margin:auto;background-color:white;text-align:center;border:7px solid #fbda55;border-radius:22px;">
    	<div style="float:left;height:40px;width:100%;text-align:center;line-height:40px;font-size:24px;background-color:#444;color:white;border-top-right-radius:16px;border-top-left-radius:16px;">Before you go...</div>
    	<div style="float:left;display:none;height:50px;width:100%;text-align:center;line-height:50px;font-size:18px;background-color:#888;color:#ddd;cursor:pointer;" class="addBookmarkContainer" id="addBookmarkContainer"></div>
    	<div style="float:left;height:75px;width:100%;text-align:center;line-height:30px;font-size:20px;background-color:#ccc;color:#777;border-bottom-right-radius:16px;border-bottom-left-radius:16px;">
        	Share This Page
            <ul class="rrssb-buttons clearfix" style="width:264px;margin-left:3px;">
        		<?php include("share.html"); ?>
            </ul>
        </div>
        <img onclick="window.location='https://pletho.com'" src="/images/arrowExit.png" style="position:absolute;top:-13px;right:-13px;cursor:pointer;" />
    </div>
    <!--LOGOUT-MSG-BOX-->
    
    <!--PWD-REM-BOX-->  
        <div style="position:absolute;display:none;z-index: 5001;top:0;bottom:0;width:100%;height:87px;margin:auto;background-color:white;text-align:center;padding-top:15px;" id="pwdReseter" >
        	<img style="top: -13px; right: 13px; position: absolute; cursor: pointer;" onclick="pwdCheckBoxer()" src="/images/arrowExit.png">
            Enter your email below to request a password reset:<br/><br/>
        	<input type="email" name="email" id="email1" class="email3" placeholder="my@email.com" style="color:black;height:30px;font-size:22px;width:260px;" required />
            <div onclick="pwdReset2(this.parentElement.children[0].value);this.parentElement.style.display='none'" style="cursor:pointer;height:35px;margin-top:6px;background-color:black;color:white;line-height:35px;font-size:24px;">Submit</div>
        </div> 
    <!--PWD-REM-BOX-->
    
    <div id="dateTimeLeadInformation" onclick="helpClicker(this)">
    </div>

    <a name="Top" id="Top"></a>
    <!--RESOLUTION CONTROL-->
    <div id="resolutionControl"><br><br><br>Window size is too small.<br><br>Please re-size or rotate.</div>
    <!--RESOLUTION CONTROL-->
    
    
    <!--LOGOUT CONTROL-->
    <div id="logoutControl">Logging out in <a id="logOutNum" class="logOutNum">5 seconds</a>...<br/><br/><a id="fullLogout" class="fullLogout" onclick="fullLogout()">(clear cookie)</a></div>
    <!--LOGOUT CONTROL-->

    <div id="home">
    
    	<div id="jT" onMouseOver="this.style.backgroundColor='#fbda55';this.style.color='black'" onMouseOut="this.style.backgroundColor='transparent';this.style.color='#fbda55'" onclick="closeMainPagePopups(); setTimeout(function (args) { joinMP() }, 600)" style="position:absolute;left:25px;top:5px;width:auto;height:22px;border:1px solid #fbda55;color:#fbda55;font-size:16px;line-height:21px;padding-left:7px;cursor:pointer;padding-right:7px;z-index:550;display:none;opacity:0;transition:all .5s;">Join Today</div>
    	<div id="lH" onclick="pwdReset1()" onMouseOver="this.style.backgroundColor='#fbda55';this.style.color='black'" onMouseOut="this.style.backgroundColor='transparent';this.style.color='#fbda55'" style="position:absolute;right:25px;top:5px;width:auto;height:22px;border:1px solid #fbda55;color:#fbda55;font-size:16px;line-height:21px;cursor:pointer;padding-left:7px;padding-right:7px;z-index:550;display:none;opacity:0;transition:all .5s;">Login Help</div>
        
        <div id="jT2" onMouseOver="this.style.backgroundColor='#fbda55';this.style.color='black'" onMouseOut="this.style.backgroundColor='transparent';this.style.color='#fbda55'" onclick="closeMainPagePopups(); setTimeout(function (args) { loginMP() }, 600)" style="position:absolute;left:25px;top:5px;width:auto;height:22px;border:1px solid #fbda55;color:#fbda55;font-size:16px;line-height:21px;padding-left:7px;cursor:pointer;padding-right:7px;z-index:550;display:none;opacity:0;transition:all .5s;">Login Now</div>
    	<div id="lH2" onclick="pwdReset1()" onMouseOver="this.style.backgroundColor='#fbda55';this.style.color='black'" onMouseOut="this.style.backgroundColor='transparent';this.style.color='#fbda55'" style="position:absolute;right:25px;top:5px;width:auto;height:22px;border:1px solid #fbda55;color:#fbda55;font-size:16px;line-height:21px;cursor:pointer;padding-left:7px;padding-right:7px;z-index:550;display:none;opacity:0;transition:all .5s;">Login Help</div>

        <div id="mainPageLoader">
            <img id="loadingGraphic" src="/images/loader/18p.jpg" width="75" height="75" />
        </div>

        <div id="mainPageBlocker" onclick="closeMainPagePopups()"></div>


        <div id="mainPageLine"></div>

        <div id="joinPagePopup">
            <img onclick="closeMainPagePopups()" src="/images/arrowExit.png" style="position:absolute;top:-13px;right:-13px;cursor:pointer;" />
            <form id="loginForm1" autocomplete="on" method="POST" onsubmit="signupNewUser(); return false;">
            <div class="cmPP1">
                <div class="joinTag">First Name:</div><input type="text" name="firstName" id="firstName" class="cmPP2" required />
            </div>
            <div class="cmPP1">
                <div class="joinTag">Last Name:</div><input type="text" name="lastName" id="lastName" class="cmPP2" required />
            </div>        
                <div class="cmPP1">
                    <div class="joinTag">Email:</div><input type="email" name="email" id="emailNew1" class="email2" required />
                </div>
                <div class="cmPP1">
                    <div class="joinTag">Password:</div><input type="password" name="password" id="password1" class="cmPP2" required />
                </div>
                <div class="ljPopFoot">
                    <div id="linkBut" onclick="popLinkedInButton()"><div class="linkBut2"></div></div>
                    <input id="joinLink" type="submit" value="Join" />
            </form>
        </div>
    </div>

    <div id="loginPagePopup">
        <img onclick="closeMainPagePopups()" src="/images/arrowExit.png" style="position:absolute;top:-13px;right:-13px;cursor:pointer;" />
        <form id="loginForm2" autocomplete="on" method="POST" onsubmit="return false;">
            <div class="lPP1">
                <div class="joinTag">Email:</div><input type="email" name="email" id="email" class="email1" required />
            </div>
            <div class="lPP1">
                <div class="joinTag" style="padding-right:6px;">Password:</div><input type="password" name="password" class="password1" id="password" onkeydown="typer()" required />
            </div>
            <div class="ljPopFoot">
                <input id="loginLink" type="submit" onclick="loginUser()" value="Login" />
            </div>
        </form>
    </div>

    <div id="mainPageContainer" style="width:100%;height:auto">

        <div id="mainPicDisplay">
            <div id="mainPicDisplayBox" style="width:100%;min-height:170px;text-align:center;">
            <img id="mainPlethoLogo1" alt="Pletho Logo" style="width:45%;height:auto;opacity:0.92;margin-top:3%;" src="images/pletho-logo-medium.png" width="1500" height="275"><br/>
            <img id="mainPlethoBar1" alt="Pletho Bar" style="width:50%;height:auto;opacity:0.92;" src="images/plethobar4.png" width="938" height="10">
            </div>
            <div id="sloganBox" style="float:left;text-align: center; color: white; width:100%;padding-top:20px;"><h1 class="headerTags">the advertising comparison platform</h1></div>
            <div id="sloganBoxButton" style="float:left;width:100%;padding-top:20px;">
            	<div onclick="joinMP()" id="loginMPgo" title="<?php echo $livestate; ?>" accessKey="<?php echo $livestate; ?>">JOIN FOR FREE</div>
        	</div>
        </div>

        <div id="actionBox">
            <a class="homePageUrl1" href="#Learn" onclick="document.getElementById('video2').src='//www.youtube.com/embed/xijIuRf87_A?rel=0&autoplay=1&controls=1&showinfo=0'"><div class="learnMoreButs">LEARN<br />MORE</div></a>
            <div class="joinActbut"></div>
            <div onclick="loginMP()" id="joinMPbutton">LOGIN</div>
        </div>

        <div style="width:100%;height:auto;background-color:#fbda55;float:left;">
            <div class="aboutHeader" style="color:#707070;">ABOUT</div>
            <div id="aboutImg1" style="display:none"></div>
            <div id="aboutText1" style="width:auto;float:left;text-align:center;padding-bottom:4%;">         
            <a name="Learn" id="Learn"></a>
                <h2 class="headerTags">Pletho is a global advertising comparison platform and marketplace. <br /><br />Created to help both Advertisers and Publishers operate more efficiently and effectively, in what is a hugely competitive and confusing marketplace.</h2>
            </div>
            <div id="inPageVideo1" style="text-align:center;width:98%;float:left;">
            	<iframe id="video2" src="//www.youtube.com/embed/xijIuRf87_A?rel=0&autoplay=0&controls=1&showinfo=0" style="width:70%;height:38.9vw" frameborder="0" allowfullscreen></iframe>
            </div>
            <a class="Advertisers" href="#Advertisers">
                <div class="arrowDown">
                </div>
            </a>
        </div>

        <div style="width:100%;height:auto;background-color:#fff;float:left;">
            <a name="Advertisers" id="Advertisers"></a>
            <div class="aboutHeader" style="color:black;">ADVERTISERS</div>
            <div id="aboutImg2"></div>
            <div id="aboutText2">
                <br />
                <b style="line-height:40px;">Who is an Advertiser?</b>
                
                <div class="centralText"><h3 class="headerTags">An Advertiser can be anyone looking to promote their business, product or service.  This includes everyone from a sole trader, limited company to a major PLC.<br /><br /></h3>
                </div>
                
                <b  style="line-height:40px;">Why use Pletho?</b>
                
                <div class="bullets">
                ✔ <h5 class="headerTags">Compare the cost of thousands of different marketing campaigns<br /></h5>
                ✔ Make better informed decisions with your marketing investments<br />
                ✔ Take the stress out of advertising and spend more time focusing on your business<br />
                ✔ <a class="JoinLink1" onclick="joinMP()" href="#Top" style="cursor:pointer">Free to join</a>
                </div>
                
            </div>
            <a class="Publishers" href="#Publishers">
                <div class="arrowDown">
                </div>
            </a>
        </div>

        <div style="width:100%;height:auto; min-height:60px;background-color:#424242;font-size:18px;text-align:center;color:white;line-height:28px;float:left;">
            <a name="Publishers" id="Publishers"></a>
            <div class="aboutHeader" style="color:white;">PUBLISHERS</div>
            <div id="aboutImg3"></div>
            <div id="aboutText3">
                <br />
                <b style="line-height:40px;">Who is a Publisher? </b>
                
                <div class="centralText">
                <h4 class="headerTags">A Publisher is a company which provides advertising solutions for our Advertisers.  These cover a broad range of companies but typically include TV Stations, Radio Stations, Newspapers, Motorway Service Stations, Cinema Advertising and Billboards etc.<br /><br /></h4></div>
                
                <b style="line-height:40px;">Why use Pletho?</b>
                
                <div class="bullets">
                ✔ <h6 class="headerTags">List your entire advertising inventory in a place where Advertisers are actively looking to buy<br /></h6>
                ✔ Generate advertising sales without the need for expensive telemarketing departments<br />
                ✔ Advertisers pay up front for each campaign<br />
                ✔ <a class="JoinLink2" onclick="joinMP()" href="#Top" style="cursor:pointer">Free to join</a>
                </div>
                
            </div>
            <div style="float:left;width:100%;height:35px;"></div>
        </div>

        <div id="aboutFooter" style="color:#ccc;line-height:30px;font-size:16px;">
            <a class="Top" href="#Top">- Go Back To Top -</a><br />
            <ul class="rrssb-buttons clearfix" style="width:90%;margin-left:5%;margin-top:7px;margin-bottom:5px;">
        		<?php include("share.html"); ?>
            </ul>
            © Pletho.com 2015 - Terms - Contact
            <br />
        </div>
    </div>

    </div>


    <div id="content">
    
    <div id="mainPageLoader2" onclick="">
            <img id="loadingGraphic2" src="/images/loader/85p.jpg" width="75" height="75" />
        </div>

        <!--DEBUG BOX-->
        <div id="debug">(login)</div>
        <!--DEBUG BOX-->
        <!--CSS PAGE1 / LOGIN-->
        <div id="previewProductBacker" onclick="closePreview()"></div>
                <div id="previewProductContainer">
                	<img onclick="closePreview()" src="/images/arrowExit.png" style="position:absolute;top:-1px;right:-1px;cursor:pointer;" />
                	<div class="previewBox">Preview</div>
                    <div id="previewProductUpload"></div>
                    <div id="previewProductButtons" >
                        <div onclick="submitNewProductConfirmed()" class="submitPubPrev">Confirm</div>
                    </div>
                </div>
        <!--CSS PAGE2 / ADVERTISER PAGE1-->
        <!--MENU-->
        <!--ADVERTISER PAGE1 DIV-->
        <div id="content2">
            <div id="alertsLink" onmouseover="this.style.opacity='0.95'" onmouseout="this.style.opacity='1'" onclick="alertClick()">
                <img class="blanker2" src="/images/blanker.png">
                ALERTS
                <div id="alertCount"></div>
            </div>
            <div id="advertiserLink" onmouseover="this.style.opacity='0.95'" onmouseout="this.style.opacity='1'" onclick="advertiserPage1Load(); window.location='#Advertiser';navigating=true">
                <img class="blanker2" src="/images/blanker.png">
                ADVERTISER
            </div>
            <div id="campaignsLink" onmouseover="this.style.opacity='0.95'" onmouseout="this.style.opacity='1'" onclick="openCampaignsPage1();navigating=true">
                <img class="blanker2" src="/images/blanker.png">
                CAMPAIGNS
            </div>
            <div id="publisherLink" onmouseover="this.style.opacity='0.95'" onmouseout="this.style.opacity='1'" onclick="openPublisherPage(); window.location='#Publisher';navigating=true">
                <img class="blanker2" src="/images/blanker.png">
                PUBLISHER
            </div>
            <div id="helpLink" onmouseover="this.style.opacity='0.95'" onmouseout="this.style.opacity='1'" onclick="openHelpPage();window.location='#Help';navigating=true">
                <img class="blanker2" src="/images/blanker.png">
            HELP
            </div>

            <div id="menuBar"></div>
            <!--SEARCH-->
            <div id="searchBox">
                <input type="text" id="searchInput" onkeydown="checkForEnteredSearch(event)" placeholder="Search... #london #tv" />
            </div>
            <div id="mobileGoButton">
                <div style="height:41px;width:100%;background-image:url(images/searchBar.jpg);background-size:auto 29px;">
                    <div style="width:82px;height:41px;float:right;">
                        <a href="#Advertiser:Search-Tags" onclick="searchTaggedListings(); navigating = true;"><img src="/images/searchButton.jpg" width="82" height="29" /></a>
                    </div>
                </div>
            </div>
            
			<div id="advertiserPage0Div">
            	<div style="padding-top:5px;"><br />
                Welcome to Pletho, the advertising comparison platform. <br /><br />
                You can compare advertising campaigns by using the search box above.<br /><br />
                Or you can tap the 'Show All' button to view all advertising campaigns available.<br /><br />
                For a more custom search, tap the 'Advanced' button to show a detailed search panel.<br /><br />
                If you need any further help or support please tap the 'Help' button on the menu.<br /><br />
            	Thank you for using Pletho.
                </div>
            </div>

            <div id="advertiserPage1Div">
            	<img onclick="helpAdvPan()" src="/images/more-info-icon2.png" onMouseOver="this.style.opacity='1';" onMouseOut="this.style.opacity='0.55';" onMouseDown="this.style.opacity='1';" style="position:absolute;right:0px;padding-right:3px;padding-top:3px;opacity:0.55;transition:1s all ease-in-out;cursor:pointer;">
                <!--LNB-->
                <div id="lnbBox">
                </div>
                <!--BUDGET-->
                <div id="budgetBox">
                    <label for="budgetText">Budget:</label>
                    <input type="text" id="budgetNumbers"
                           readonly class="budLeadBoxes">
                    <div onmouseup="getBudget()" id="budget-range"></div>
                </div>
                <!--LEAD-TIME-->
                <div id="leadTimeBox">
                    <label for="leadTimeText">Lead:</label>
                    <input type="text" id="leadTimeNumbers"
                           readonly class="budLeadBoxes">
                    <div onmouseup="getLeadTime()" id="leadTime-range"></div>
                </div>
                <!--COUNTRY-->
                <div id="countryBox">
                    <select onchange="countryClicker(this)" name='country'  id='countrySelectionBox1'>
                    </select>
                </div>
                <!--CITY-->
                <div id="cityBox">
                    <select onchange="cityClicker(this)" name='cityLength' id='cityLengthSelectionBox1'>
                    </select>
                </div>
                <!--CAMPLENGTHS-->
                <div id="campLengthBox">
                    <select onchange="campLengthClicker(this)" name='campLength' id='campLengthSelectionBox1'>
                    </select>
                </div>
                <!--PUBLENGTHS-->
                <div id="pubLengthBox">
                    <select onchange="publisherClicker(this)" name='pubLength' id='pubLengthSelectionBox1'>
                    </select>
                </div>
                <!--AD-TYPES-->
                <div id="adTypeBox">
                </div>
                <!--RADIUS-->
                <!--BUTTONS-->
				<div class="advSearchFormButtons" onclick="resetAdvSearchPanel()" id="advSearchReset">Reset</div>
				<div class="advSearchFormButtons" onclick="saveCustomSearch()" id="advSearchSave">Save</div>
				<div class="advSearchFormButtons" onclick="loadCustomSearch()" id="advSearchLoad">Load</div>      
                <!--BUTTONS--> 
                <div id="advancedSearchButton" onclick="advancedSearch()" class="show"> </div>
            </div>
            
            <div id="advertiserPage2Div">
        	</div>

            <div id="buttonFooterSearch">
  
                <div id="normalSearchButton">
                    <a href="#Advertiser:Search-Tags" onclick="searchTaggedListings(); navigating = true;"
                       class="normalSearchButton">Search</a>
                </div>
                
                
                <div id="normalSearchButton2">
                    <a href="#Advertiser:Search-Tags" onclick="searchTaggedListings(); navigating = true;"
                       class="normalSearchButton">Search</a>
                </div>
                           
                <div id="searchAllButton">
                    <a href="#Advertiser:Search-All" onclick="searchAllListings(); navigating = true;"
                       class="searchAllButton">Show All</a>
                </div>
                
                <div id="buyAdSlotButton">
            		<a href="javascript:void(0)" onclick="buyAdSlotButton()" class="buyAdSlotButton">Buy</a>
        		</div>
                
                <div id="ShareWideAdSlotButton">
            		<a href="javascript:void(0)" onclick="adShareButtonPop2(this)" id="ShareWideAdSlotButton2" class="ShareWideAdSlotButton2">Share</a>
        		</div>
                
                <div id="advancedSearchButtonMk2" onclick="advancedSearch()"></div>
            
				<div id="advSearchButton">
                    <a onclick="advancedSearch()" class="advSearchButton">Advanced</a>
                </div>
                
                <div id="adCounterButton">
                    <div onclick="adShareButtonPop2(this)" id="adShareButton" class="adShareButton">SHARE</div>
            		<div class="adCounterButton">All/All</div>
        		</div>
                
				<div id="sortResultsButton">
            		<a href="javascript:void(0)" onclick="sortResultsButton()" class="sortResultsButton">Asc</a>
        		</div>
                
                <div id="campaignButton2">
                    <a href="javascript:void(0)" onclick="campaignButton2()" class="campaignButton2"></a>
                </div>
                    
                <div id="campaignButton1">
                    <a href="javascript:void(0)" onclick="campaignButton1()" class="campaignButton1 redButton"></a>
                </div>
                
                <hr id="buttonBreaker1" class="hideMobi" />
                
                <div id="campaignShareButton1">
                    <a href="javascript:void(0)" onclick="campShareButtonPop2(this)" class="campaignShareButton2">Share</a>
                </div>
                
                <div id="campaignHelpButton1">
                	<a href="javascript:void(0)" onclick="campShareButtonPop2(this)" class="campaignHelpButton2">Help</a>
            	</div>
                
                <div id="publisherButton1">
                	<a href="javascript:void(0)" onclick="startPublishing1(this)" class="publisherHelpButton2">Start</a>
            	</div>
                
                <div id="publisherButton2">
                    <a href="javascript:void(0)" onclick="publishThisForm()" class="publisherButton2">Publish</a>
                </div>
            
            	<div id="publisherHelpButton1">
                    <a href="javascript:void(0)" onclick="clearPublisherForm()" class="publisherButton1 redButton">Clear</a>
                </div>
     
                <div id="publisherButton3">
                    <a href="javascript:void(0)" onclick="showAPP()" class="publisherButton3">Start</a>
                </div>
     
                <div id="publisherButton4">
                    <a href="javascript:void(0)" onclick="onLinkedInLoad()" class="publisherButton4">LinkedIn</a>
                </div>
     
                <div id="publisherButton5">
                    <a href="javascript:void(0)" onclick="submitAPP()" class="publisherButton5">Submit</a>
                </div>
            </div>

            <div id="plethoFooter" style="font-size:12px" >
                <div style="float:left;width:54%">
                	<img src="/images/plethoLogo1.jpg" class="pfLogo" style="width:auto;height:18px!important;padding-top:1px;" />
                    <div style="font-size:9px;margin-top:-5px; line-height: 10px;">the advertising comparison platform</div>
                </div>
                <div style="float:right;width:44%;line-height:13px;">
                © Pletho.com 2015 <br/><a class="Top" style="cursor:pointer;" onclick="showAccount1()">User</a> - Terms - <a class="Top" style="cursor:pointer;" onclick="logOut()">Logout</a>
                </div>
            </div>

            <div id="plethoFooter2" >
            	<a class="Top" style="cursor:pointer;" onclick="showAccount1()">User</a> - Terms - <a class="Top" style="cursor:pointer;" onclick="logOut()">Logout</a><br/>
            	<img src="/images/plethoLogo1.jpg" class="pfLogo" style="width:auto;height:28px;padding-top:3px;" />
                <div class="tacp">the advertising comparison platform</div>
                © Pletho.com 2015  
            </div>

            <div id="plethoFooter3" >
            	<a class="Top" style="cursor:pointer;" onclick="showAccount1()">User</a> - Terms - <a class="Top" style="cursor:pointer;" onclick="logOut()">Logout</a><br/>
            	<img src="/images/plethoLogo1.jpg" class="pfLogo" style="width:auto;height:28px;padding-top:3px;" />
                <div class="tacp">the advertising comparison platform</div>
                © Pletho.com 2015 
            </div>
        </div>

        <!--CSS PAGE3 / ADVERTISER PAGE2-->    
        <div id="resultsOverlay" onclick="exitSortResults();exitBuyBox();">
        </div>
        <div id="sortingHat">
            <div id="ascDesc" onclick="toggleAscDesc()">Ascending</div>
            <hr class="hr3" />
            <div class="sortModes" title="price" accesskey="price" onclick="sortResultsSubmit(this.accessKey,this.title)">Price</div>
            <div class="sortModes" title="leadTime" accesskey="leadTime" onclick="sortResultsSubmit(this.accessKey,this.title)">Lead Time</div>
            <div class="sortModes" title="reach" accesskey="reach" onclick="sortResultsSubmit(this.accessKey,this.title)">Reach</div>
            <div class="sortModes" title="adType" accesskey="adType" onclick="sortResultsSubmit(this.accessKey,this.title)">Ad Type</div>
        </div>

        <div id="productOrderingBox">
            <div id="costConfirmBox">
                <select id="costConfirmBox3" style="float: left; font-size: 18px; margin-right: 4px; margin-top: 3px; border: none; color: rgb(156, 146, 83); background-color: rgb(251, 218, 85); ">
<option>AED</option><option>AFN</option><option>ALL</option><option>AMD</option><option>ANG</option><option>AOA</option><option>ARS</option><option>AUD</option><option>AWG</option><option>AZN</option><option>BAM</option><option>BBD</option><option>BDT</option><option>BGN</option><option>BMD</option><option>BND</option><option>BOB</option><option>BRL</option><option>BSD</option><option>BWP</option><option>BZD</option><option>CAD</option><option>CDF</option><option>CHF</option><option>CNY</option><option>COP</option><option>CRC</option><option>CVE</option><option>CZK</option><option>DKK</option><option>DOP</option><option>DZD</option><option>EEK</option><option>EGP</option><option>ETB</option><option>EUR</option><option>FJD</option><option>FKP</option><option>GBP</option><option>GEL</option><option>GIP</option><option>GMD</option><option>GTQ</option><option>GYD</option><option>HKD</option><option>HNL</option><option>HRK</option><option>HTG</option><option>HUF</option><option>IDR</option><option>ILS</option><option>INR</option><option>ISK</option><option>JMD</option><option>KES</option><option>KGS</option><option>KHR</option><option>KYD</option><option>KZT</option><option>LAK</option><option>LBP</option><option>LKR</option><option>LRD</option><option>LSL</option><option>LTL</option><option>LVL</option><option>MAD</option><option>MDL</option><option>MKD</option><option>MNT</option><option>MOP</option><option>MRO</option><option>MUR</option><option>MVR</option><option>MWK</option><option>MXN</option><option>MYR</option><option>MZN</option><option>NAD</option><option>NGN</option><option>NIO</option><option>NOK</option><option>NPR</option><option>NZD</option><option>PAB</option><option>PEN</option><option>PGK</option><option>PHP</option><option>PKR</option><option>PLN</option><option>QAR</option><option>RON</option><option>RSD</option><option>RUB</option><option>SAR</option><option>SBD</option><option>SCR</option><option>SEK</option><option>SGD</option><option>SHP</option><option>SLL</option><option>SOS</option><option>SRD</option><option>STD</option><option>SVC</option><option>SZL</option><option>THB</option><option>TJS</option><option>TOP</option><option>TRY</option><option>TTD</option><option>TWD</option><option>TZS</option><option>UAH</option><option>UGX</option><option>USD</option><option>UYU</option><option>UZS</option><option>WST</option><option>XCD</option><option>YER</option><option>ZAR</option><option>ZMW</option>
</select>
            	<div id="costConfirmBox2" style="float:left;font-size:18px;pointer-events:none;"></div>
                <div id="costConfirmBox4" style="opacity:0;float:left;font-size:10px;color:black;width:90%;cursor:pointer;" onclick="estimationExplaination()">* Estimated (?)</div>
            </div>
            <br />
            <div id="pickaDate">
                Preferred Date:
                <input type="text" onclick="pickaDate(); return;" id="chosenDate" placeholder="Tap to pick..." class="pickaDate" />
                <img onclick="helpPrefDate()" src="/images/more-info-icon.png" onMouseOver="this.style.opacity='1';" onMouseOut="this.style.opacity='0.55';" onMouseDown="this.style.opacity='1';" style="float:right;padding-right:3px;opacity:0.55;transition:1s all ease-in-out;cursor:pointer;">
            </div>
            <div id="pickaTime">
                Preferred Time:
                <input type="text" onclick="pickaTime()" id="chosenTime" placeholder="Tap to choose..." class="pickaTime" />
                <img onclick="helpPrefTime()" src="/images/more-info-icon.png" onMouseOver="this.style.opacity='1';" onMouseOut="this.style.opacity='0.55';" onMouseDown="this.style.opacity='1';" style="float:right;padding-right:3px;opacity:0.55;transition:1s all ease-in-out;cursor:pointer;">
            </div>
            <div id="pickaFlex">
                Flexibility:
                <input type="text" id="chosenFlex" placeholder="eg. 2 days" class="pickaFlex" />
                <img onclick="helpPrefFlex()" src="/images/more-info-icon.png" onMouseOver="this.style.opacity='1';" onMouseOut="this.style.opacity='0.55';" onMouseDown="this.style.opacity='1';" style="float:right;padding-right:3px;opacity:0.55;transition:1s all ease-in-out;cursor:pointer;">
            </div>
            <div id="pickaUri">
                Advert Url:
                <input type="text" id="chosenUri" placeholder="vimeo.com/14504562" class="pickaUri" />
                <img onclick="helpPrefUri()" src="/images/more-info-icon.png" onMouseOver="this.style.opacity='1';" onMouseOut="this.style.opacity='0.55';" onMouseDown="this.style.opacity='1';" style="float:right;padding-right:3px;opacity:0.55;transition:1s all ease-in-out;cursor:pointer;">
            </div>
            <img style="top: -13px; right: -13px; position: absolute; cursor: pointer;" onclick="exitBuyBox()" src="/images/arrowExit.png">
            <div class="pOBott" onClick="purchaseConfirmed()">Buy<img src="/images/transparent.png" width="16" height="6" /></div>
        </div>

        <div id="modifyProductBacker" onclick="productOwnerModifyPopdown()" style="display:none;width:100%;height:100%;left:0;top:0;position:absolute;z-index:150;background-color:rgba(0,0,0,0.87);"></div>
        <div id="modifyProductContainer" style="z-index:151;display:none;position:absolute;width:270px;bottom:0;left:0;top:0;right:0;margin:auto;height:265px;background-color:#fff;opacity:0;transition:all .5s;border:7px solid #fbda55;border-radius:22px">
        <img onclick="productOwnerModifyPopdown()" src="/images/arrowExit.png" style="position:absolute;top:-13px;right:-13px;cursor:pointer;" />
            <div id="modifyProductDetails" style="">
                <div style="width:225px;margin-left:19px;line-height:24px;text-align:center;margin-top:3px;">
                    Quantity<br />
                    <input type="text" id="modQuantity" style="width:50%;height:35px;font-size:20px;text-align:center;" placeholder="eg 200" />
                    <input type="checkbox" id="modStock" style="font-size:10px;text-align:center;" checked/>Unlimited
                </div>
                <div style="width:225px;margin-left:19px;line-height:24px;text-align:center;">
                    Price<br />
                    <input type="text" id="modPrice" style="width:100%;height:35px;font-size:20px;text-align:center;" placeholder="eg 450.00" />
                </div>
                <div style="width:225px;margin-left:19px;line-height:24px;text-align:center;">
                    Lead Time<br />
                    <input type="text" id="modLeadTime" style="width:100%;height:35px;font-size:20px;text-align:center;" placeholder="eg 270 Hours" />
                </div>
            </div>
            <div id="modifyProductButtons" style="position:absolute; bottom:0px; left:0px; line-height: 56px; height: 60px; width: 100.5%; background-color:#fbda55;">
                <div onclick="deleteProduct()" style="float: left; text-align: center; width: 48%; margin-top: 5px; height: 90%; color: #803936; cursor: pointer; border-right: #fff3c3 solid 4px; font-size: 30px; ">Delete</div>
                <div onclick="updateProduct()" style="float: right; width: 49%; margin-top: 5px; height: 90%; text-align: center; color: #7e6a35; margin-left: 1%; cursor: pointer; font-size: 30px; ">Update</div>
            </div>
        </div>

        <!--CSS PAGE4 / CAMPAIGNS PAGE1-->
        <div id="campaignsPage1Div">

            <div id="campaignsMenu">
                <div id="pendingMenuItem1" onclick="goToPendingCampaigns();unHighlightCampaignsNav();">Pending<br/><p class="campTotalCount" id="pendingTotalCountDiv"></p></div>
                <div id="queuedMenuItem1" onclick="goToQueuedCampaigns();unHighlightCampaignsNav();">Queue<br/><p class="campTotalCount" id="queuedTotalCountDiv"></p></div>
                <div id="liveMenuItem1" onclick="goToLiveCampaigns();unHighlightCampaignsNav();">Live<br/><p class="campTotalCount" id="liveTotalCountDiv"></p></div>
                <div id="disputedMenuItem1" onclick="goToDisputedCampaigns();unHighlightCampaignsNav();">Disputes<br/><p class="campTotalCount" id="disputeTotalCountDiv"></p></div>
                <div id="completedMenuItem1" onclick="goToCompletedCampaigns();unHighlightCampaignsNav();">Complete<br/><p class="campTotalCount" id="completeTotalCountDiv"></p></div>
            </div>

            <div id="pendingCampaignsPage1">
            </div>
            <div id="queuedCampaignsPage1">
            </div>
            <div id="liveCampaignsPage1">
            </div>
            <div id="disputedCampaignsPage1">
            </div>
            <div id="completedCampaignsPage1">
            </div>

            

        </div>

        <!--CSS PAGE5 / CAMPAIGNS PAGE2-->
        <div id="campaignsPage2Div" onclick="returnToCampaignsView();closeUrlCheckerUi()"></div>

        <div id="reasonMessageBox" class="campPopup">
        <img onclick="returnToCampaignsView()" src="/images/arrowExit.png" style="position:absolute;top:-13px;right:-13px;cursor:pointer;" />
            Please enter a reason
            <textarea cols="50" id="messageDenyBox" placeholder="Enter your reason for removing this order here..."
                      rows="4" name="comment" class="reasonBox"></textarea>
            <div class="greenCampButton" onclick="submitOrderRemovalWithReason()">Submit</div>
        </div>

        <div id="approvalMessageBox" class="campPopup">
        <img onclick="returnToCampaignsView()" src="/images/arrowExit.png" style="position:absolute;top:-13px;right:-13px;cursor:pointer;" />
            Choose an accurate date and time
            <div id="pickaDate">
                Actual Date:
                <input type="text" onclick="pickaDate()" id="chosenActualDate" style="width: auto;max-width: 60%;" placeholder="Tap to pick..." class="pickaDate dateTimeBoxes" />
            </div>
            <div id="pickaTime">
                Actual Time:
                <input type="text" onclick="pickaTime()" id="chosenActualTime" style="width: auto;max-width: 60%;" placeholder="Tap to choose..." class="pickaTime dateTimeBoxes" />
            </div>
            <div class="greenCampButton" onclick="submitOrderApproval()">Confirm</div>
        </div>

        <div id="completedOrderDetails">

        </div>

        <!--CSS PAGE6 / DISPUTES-->
        <div id="disputeCommentsBack" onclick="closeDisputeComments()"></div>
        <div id="disputeCommentsUnder"></div>
        <div id="disputeComments"></div>
        <img onclick="closeDisputeComments()" id="cDc" src="/images/arrowExit.png" 
        style="position: absolute;top: 2px;left: 280px;margin: auto;right: 0px;z-index: 1337;cursor: pointer;display:none;" />
        <div id="disputeMessageInput">
            <img class="bkCom" onclick="closeDisputeComments()" src="/images/backComments.png">
            <input type="text" id="disComVal" placeholder="Type your message here..." />
            <div onclick="writeDisputeCommentNow()" id="writeDisputeCommentNow">Send</div>
        </div>

        <!--------CSS PAGE7 / PUBLISHER PAGE 1-------->
        <div id="publisherPage1Div">

            <!-----EXTENDED LINKEDIN DETAILS------>
            <div id="approvalProcessPublishers">
                <div class="fs22">Publisher Approval Process</div><br/>
                <div id="app1" style="display:block;float:left;text-align:center;width:98%;padding:1%;height:auto;">
                Before Publishers can list adverts for sale on the Pletho marketplace they have to go through an approval process.<br/><br/>
                This approval process consists of several stages designed to ensure that the adverts being listed on Pletho are being added by reputable Publishers whom are genuine and 			trustworthy.<br/><br/>
                The process by which Pletho's Publishers are approved is controlled by only a handful of specially trained staff members. If any Publisher doesn't meet or exceed the criteria required, they will not be approved and their adverts will not appear on the marketplace.<br/><br/>
                <hr />       
                To list advertisements for sale on the Pletho marketplace you first have to register your interest.<br/><br/>
                To begin this process please press the 'Start' button.<br/><br/>
                </div>
                <div id="app2" style="display:none;float:left;width:98%;padding:1%;height:auto;">
                <div style="width:100%;text-align:center;float:left;"><img onclick="onLinkedInLoad()" src="images/linkedin_signup1.png" href="javascript:void(0);" style="padding-bottom:15px;" width="293" height="47" alt="Populate with LinkedIn" longdesc="Populate Publisher Approval Process fields with details from LinkedIn"></div>
                
                    <div class="pubApp">
                        <label style="float:left;margin-left:.65%;font-size:12px;height: 16px; " for="name">Your LinkedIn Profile</label>
                        <input type="text" id="pubHist" placeholder="https://uk.linkedin.com/company/pletho" style="width:100%;font-size:18px;" /></input>
                    </div>
                    <div class="pubApp">
                        <label style="float:left;margin-left:.65%;font-size:12px;height: 16px; " for="name">Your Employer</label>
                        <input type="text" id="pubCur" placeholder="ABC Advertising" style="width:100%;font-size:18px;" />
                    </div>
                    <div class="pubApp">
                        <label style="float:left;margin-left:.65%;font-size:12px;height: 16px; " for="name">Your Email</label>
                        <input type="email" id="pubMail" placeholder="my.name@abc.com" style="width:100%;font-size:18px;" />
                    </div>
                    <div class="pubApp">
                        <label style="float:left;margin-left:.65%;font-size:12px;height: 16px; " for="name">Your Job Title</label>
                        <input type="text" id="pubTitle" placeholder="Marketer" style="width:100%;font-size:18px;" />
                    </div>
                    <div class="pubApp">
                        <label style="float:left;margin-left:.65%;font-size:12px;height: 16px; " for="name">Contact Phone Numbers</label>
                        <textarea type="tel" id="pubTel" placeholder="0123-456-7890" style="width:100%;font-size:18px;height:100px;" /></textarea>
                    </div>
                    <div class="pubApp">
                        <label style="float:left;margin-left:.65%;font-size:12px;height: 16px; " for="name">Your Job Summary</label>
                        <textarea type="text" id="pubSum" placeholder="I am in control of our advertisement stock." style="width:100%;font-size:18px;height:100px;" /></textarea>
                    </div>
                    <div id="tosCheckBoxDiv" style="width:95%;text-align:center;float:left;margin-left:5%">
                    	<input id="tosCheckBox" type="checkbox" style="width:14px;height:14px;float:left;" unchecked /> 
                        <div style="float:left;font-size:12px;height:20px;line-height:20px;"><b style="font-weight:normal;" onclick="if(this.parentElement.parentElement.children[0].checked != true){this.parentElement.parentElement.children[0].checked = true;this.parentElement.parentElement.children[0].unchecked = false} else {this.parentElement.parentElement.children[0].unchecked = true;this.parentElement.parentElement.children[0].checked = false}">Tick this box to accept the </b><u onclick="this.parentElement.nextElementSibling.style.display = 'block'">terms of service</u> <i style="color:red;" onclick="if(this.parentElement.parentElement.children[0].checked != true){this.parentElement.parentElement.children[0].checked = true;this.parentElement.parentElement.children[0].unchecked = false} else {this.parentElement.parentElement.children[0].unchecked = true;this.parentElement.parentElement.children[0].checked = false}">*</i>
                        </div>
                        <div style="display:none;text-align:left;font-size:18px;width:100%;"><br/>The terms of service is as follows:<br/><br/>
                        Fees: 10%<br/><br/>
                        <b onclick="this.parentElement.style.display = 'none'">Close this window</b>
                        </div>
                    </div>
                </div>
                <!--<img id="pubAppLinkImg" onclick="onLinkedInLoad()" class="pubImages" src="/images/approveLinkedinButton.png">---->
            </div>
            <!-----APPROVAL QUEUE------>
            <div id="approvalProcessQueue1" class="noDis">
                <div class="fs23">Your application is being automatically generated...<br /><br />Please wait...</div>
            </div>
            <div id="approvalProcessQueue2" class="noDis">
                <div class="fs23">Your application has been sent!<br /><br />You will receive an email in the next 72 hours.</div>
            </div>
            <div id="approvalProcessQueue3" class="noDis">
                <div class="fs23">Your application is pending approval.<br /><br />You will be updated via email soon.</div>
            </div>
            <!--------STRIPE MERCHANT CONNECT-------->
            <div id="stripeConnector" class="noDis22">
                Your application has been approved.<br /><br />Please connect with Stripe by tapping below:
                <p abp="148"><a class="stripe-connect" id="stripe-connect" href="https://connect.stripe.com/oauth/authorize?response_type=code&amp;scope=read_write&amp;stripe_landing=register&amp;client_id=ca_4ZCXM2jRJ9CJXjTxtDklQxqI5iBN9IyF" abp="149"><img class="pubImages" src="/images/stripeMerch.jpg"></a></p>
            </div>

        </div>  <!-----publisherPage1Div End------>

        <div id="publisherPage2Div">
            <!--CSS PAGE8 / PUBLISHER PAGE 2-->
            <!-----ADD PRODUCT------>
            <div id="activatedMerchant" class="noDis22">
            	<img onclick="help4pub()" src="/images/more-info-icon.png" onMouseOver="this.style.opacity='1';" onMouseOut="this.style.opacity='0.85';" onMouseDown="this.style.opacity='1';" style="float:right;padding-right:3px;padding-top:3px;opacity:0.85;transition:1s all ease-in-out;cursor:pointer;">
				<div style="width:98%;text-align:center;font-size:18px;color:black;text-decoration:underline;padding:1%;">Submit New Advertising Listing</div>
                
                <div class="requiredPublisherFields">
                <div style="width: 72%;margin-top: 2%;padding: 5px;float: left;text-align: left;font-size: 16px;color:black;cursor:pointer;" onclick="hideShowRequiredFields1()">
                Required Fields</div>
                <hr color="black" style="width:96%;color:black;height:1.1px;margin-top:0;float:left;cursor:pointer;" onclick="hideShowRequiredFields1()" />
                <a id="Publisher:Required-Fields" name="Publisher:Required-Fields" href="#Publisher:Required-Fields"></a>
                <div id="requiredPubBoxes1" style="display:none">
                <!--LNB-->
                <div id="lnbPBox">
                Area:<div id="pubLNBlocal" onclick="lnbPClicker(this.id)" class="singlePLnbBox" style="background-color:transparent">Local</div><div id="pubLNBnational" onclick="lnbPClicker(this.id)" class="singlePLnbBox" style="background-color:transparent">National</div>
                <div style="width: 25px; height: 25px; margin-top: 0px; margin-left: 5px; float: right;">
                    <img style="transition:1s ease-in-out; right: 0px; padding-top: 3px; padding-right: 3px; cursor: pointer; opacity: 0.55;" onmouseover="this.style.opacity='1';" onmouseout="this.style.opacity='0.55';" onmousedown="this.style.opacity='1';" onclick="lnbPBoxHelp()" src="/images/more-info-icon.png" abp="266">
                    </div>
                </div> 

                <!--COST-->
                <div id="pricePBox">
                    <u>Price (inc taxes):</u><input type="number" id="pricePInput"  placeholder="eg. 900" />
                    <div style="width: 25px; height: 25px; margin-top: 3px; margin-left: 5px; float: right;">
                    <img style="transition:1s ease-in-out; right: 0px; padding-top: 3px; padding-right: 3px; cursor: pointer; opacity: 0.55;" onmouseover="this.style.opacity='1';" onmouseout="this.style.opacity='0.55';" onmousedown="this.style.opacity='1';" onclick="pricePBoxHelp()" src="/images/more-info-icon.png" abp="266">
                    </div>
                </div>

                <!--CITY-->
                <div id="cityPBox">
                    City:<input type="text" id="cityPInput" placeholder="eg. Manchester" list="cityList" onKeyPress="matchCity(this)" />
                    <datalist id="cityList">
                        <option id="cityListBox1" value="">
                        <option id="cityListBox2" value="">
                        <option id="cityListBox3" value="">
                        <option id="cityListBox4" value="">
                    </datalist>
                    <div style="width: 25px; height: 25px; margin-top: 3px; margin-left: 5px; float: right;">
                    <img style="transition:1s ease-in-out; right: 0px; padding-top: 3px; padding-right: 3px; cursor: pointer; opacity: 0.55;" onmouseover="this.style.opacity='1';" onmouseout="this.style.opacity='0.55';" onmousedown="this.style.opacity='1';" onclick="cityPBoxHelp()" src="/images/more-info-icon.png" abp="266">
                    </div>
                </div>

                <!--AD TYPE-->
                <div id="adTypePBox">
                    Ad Type:<select id="adTypePInput">
                        <option selected="selected">Choose an ad type</option>
                        <option>Billboard</option>
                        <option>Bus</option>
                        <option>Cinema</option>
                        <option>Magazine</option>
                        <option>Newspaper</option>
                        <option>Radio</option>
                        <option>Taxi</option>
                        <option>Tube</option>
                        <option>TV</option>
                   </select>
                   <div style="width: 25px; height: 25px; margin-top: 3px; margin-left: 5px; float: right;">
                    <img style="transition:1s ease-in-out; right: 0px; padding-top: 3px; padding-right: 3px; cursor: pointer; opacity: 0.55;" onmouseover="this.style.opacity='1';" onmouseout="this.style.opacity='0.55';" onmousedown="this.style.opacity='1';" onclick="adTypePBoxHelp()" src="/images/more-info-icon.png" abp="266">
                    </div>
                </div>

                <!--LEAD TIME-->
                <div id="leadTimePBox">
                    Lead Time:<input id="leadTimePInput" onFocus="checkForHoursValue1()" onBlur="checkForHoursValue2()" placeholder="eg. 200 Hours" />
                    <div style="width: 25px; height: 25px; margin-top: 3px; margin-left: 5px; float: right;">
                    <img style="transition:1s ease-in-out; right: 0px; padding-top: 3px; padding-right: 3px; cursor: pointer; opacity: 0.55;" onmouseover="this.style.opacity='1';" onmouseout="this.style.opacity='0.55';" onmousedown="this.style.opacity='1';" onclick="leadTimePBoxHelp()" src="/images/more-info-icon.png" abp="266">
                    </div>
                </div>

                <!--TAGS-->
                <div id="tagsPBox">
                    Tags:<input type="text" id="tagsPInput" placeholder="eg. #manchester #tv #radio" />
                    <div style="width: 25px; height: 25px; margin-top: 3px; margin-left: 5px; float: right;">
                    <img style="transition:1s ease-in-out; right: 0px; padding-top: 3px; padding-right: 3px; cursor: pointer; opacity: 0.55;" onmouseover="this.style.opacity='1';" onmouseout="this.style.opacity='0.55';" onmousedown="this.style.opacity='1';" onclick="tagsPBoxHelp()" src="/images/more-info-icon.png" abp="266">
                    </div>
                </div>

                <!--REACH-->
                <div id="reachPBox">
                    Reach:<input id="reachPInput" onKeyUp="addCommasToReach()" placeholder="eg. 30,000" />
                    <div style="width: 25px; height: 25px; margin-top: 3px; margin-left: 5px; float: right;">
                    <img style="transition:1s ease-in-out; right: 0px; padding-top: 3px; padding-right: 3px; cursor: pointer; opacity: 0.55;" onmouseover="this.style.opacity='1';" onmouseout="this.style.opacity='0.55';" onmousedown="this.style.opacity='1';" onclick="reachPBoxHelp()" src="/images/more-info-icon.png" abp="266">
                    </div>
                </div>

                <!--CAMPLENGTH-->
                <div id="campLPInputBox">
                    Campaign Length:<input type="number" id="campLPInput1" placeholder="eg 22" /><select id="campLPInput2">
                        <option>Seconds</option>
                        <option selected="selected">Minutes</option>
                        <option>Hours</option>
                        <option>Days</option>
                        <option>Weeks</option>
                        <option>Months</option>
                   </select>
                   <div style="width: 25px; height: 25px; margin-top: 3px; margin-left: 5px; float: right;">
                    <img style="transition:1s ease-in-out; right: 0px; padding-top: 3px; padding-right: 3px; cursor: pointer; opacity: 0.55;" onmouseover="this.style.opacity='1';" onmouseout="this.style.opacity='0.55';" onmousedown="this.style.opacity='1';" onclick="campLPInputBoxHelp()" src="/images/more-info-icon.png" abp="266">
                    </div>
                    </div>
                </div>
                
                
                <!--DESC-->
                <div style="width: 72%;margin-top: 2%;padding: 5px;float: left;text-align: left;font-size: 16px;color:black;cursor:pointer;" onclick="hideShowDescBox1()">Campaign Description (required)</div>
                <hr color="black" style="width:96%;color:black;height:1.1px;margin-top:0;float:left;" onclick="hideShowDescBox1()" /> 
                <a id="#Publisher:Campaign-Description" name="#Publisher:Campaign-Description" href="#Publisher:Campaign-Description"></a>
                <div id="descPBox1" style="display:none">
                    <textarea id="descPBoxInput" placeholder="Please give as many details as possible about this advert listing here."></textarea>
                    <div style="width: 25px; height: 25px; margin-top: 3px; margin-left: 5px; float: right;">
                    <img style="transition:1s ease-in-out; right: 0px; padding-top: 3px; padding-right: 3px; cursor: pointer; opacity: 0.55;" onmouseover="this.style.opacity='1';" onmouseout="this.style.opacity='0.55';" onmousedown="this.style.opacity='1';" onclick="descPBoxInputHelp()" src="/images/more-info-icon.png" abp="266">
                    </div>
                </div>   
            
            </div>
            
            
            <div class="autoPublisherFields">
                <div style="width: 72%;margin-top: 2%;padding: 5px;float: left;text-align: left;font-size: 16px;color:black;cursor:pointer;" onclick="hideShowAutoFields1()">Automatic Fields</div>
                <hr color="black" style="width:96%;color:black;height:1.1px;margin-top:0;float:left;cursor:pointer;" onclick="hideShowAutoFields1()" /> 
				<a id="#Publisher:Automatic-Fields" name="#Publisher:Automatic-Fields" href="#Publisher:Automatic-Fields"></a>
				<div id="autoPubBoxes1" style="display:none">
                <!--PUBLISHER-->
                <div id="publisherPBox">
                    Publisher:<input type="text" id="publisherPInput" placeholder="eg. Ace Advertising" disabled/>
                    <div style="width: 25px; height: 25px; margin-top: 3px; margin-left: 5px; float: right;">
                    <img style="transition:1s ease-in-out; right: 0px; padding-top: 3px; padding-right: 3px; cursor: pointer; opacity: 0.55;" onmouseover="this.style.opacity='1';" onmouseout="this.style.opacity='0.55';" onmousedown="this.style.opacity='1';" onclick="publisherPBoxHelp()" src="/images/more-info-icon.png" abp="266">
                    </div>
                </div>
                
                <!--CURRENCY-->
                <div id="currencyPBox">
                    Currency:<select id="currencyPInput"><option selected="selected">Choose a currency</option>
<option>AED (د.إ)</option><option>AFN (؋)</option><option>ALL (L)</option><option>AMD (֏)</option><option>ANG (ƒ)</option><option>AOA (Kz)</option><option>ARS ($)</option><option>AUD ($)</option><option>AWG (ƒ)</option><option>AZN (ман)</option><option>BAM (KM)</option><option>BBD ($)</option><option>BDT (Tk)</option><option>BGN (лв)</option><option>BMD ($)</option><option>BND ($)</option><option>BOB ($b)</option><option>BRL (R$)</option><option>BSD ($)</option><option>BWP (P)</option><option>BZD (BZ$)</option><option>CAD ($)</option><option>CDF</option><option>CHF</option><option>CNY (¥)</option><option>COP ($)</option><option>CRC (₡)</option><option>CVE ($)</option><option>CZK (Kč)</option><option>DKK (kr)</option><option>DOP (RD$)</option><option>DZD</option><option>EEK (kr)</option><option>EGP (£)</option><option>ETB (Br)</option><option>EUR (€)</option><option>FJD</option><option>FKP</option><option>GBP (£)</option><option>GEL</option><option>GIP (£)</option><option>GMD</option><option>GTQ (Q)</option><option>GYD ($)</option><option>HKD (HK$)</option><option>HNL (L)</option><option>HRK (kn)</option><option>HTG (G)</option><option>HUF (Ft)</option><option>IDR (Rp)</option><option>ILS (₪)</option><option>INR (₹)</option><option>ISK (kr)</option><option>JMD (J$)</option><option>KES (KSh)</option><option>KGS (лв)</option><option>KHR (៛)</option><option>KYD ($)</option><option>KZT</option><option>LAK (₭)</option><option>LBP (ل)</option><option>LKR (₨)</option><option>LRD ($)</option><option>LSL</option><option>LTL (Lt)</option><option>MAD</option><option>MDL</option><option>MKD (ден)</option><option>MNT (₮)</option><option>MOP ($)</option><option>MRO</option><option>MUR (₨)</option><option>MVR</option><option>MWK (MK)</option><option>MXN ($)</option><option>MYR (RM)</option><option>MZN (MT)</option><option>NAD ($)</option><option>NGN (₦)</option><option>NIO (C$)</option><option>NOK (kr)</option><option>NPR (₨)</option><option>NZD ($)</option><option>PAB (B)</option><option>PEN (S)</option><option>PGK (K)</option><option>PHP (₱)</option><option>PKR (₨)</option><option>PLN (zł)</option><option>QAR (﷼)</option><option>RON (lei)</option><option>RSD (Д)</option><option>RUB (руб)</option><option>SAR (﷼)</option><option>SBD ($)</option><option>SCR (₨)</option><option>SEK (kr)</option><option>SGD ($)</option><option>SHP (£)</option><option>SLL (Le)</option><option>SOS (S)</option><option>SRD ($)</option><option>STD</option><option>SVC ($)</option><option>SZL</option><option>THB (฿)</option><option>TJS</option><option>TOP (T$)</option><option>TRY</option><option>TTD (TT$)</option><option>TWD (NT$)</option><option>TZS</option><option>UAH (₴)</option><option>UGX (USh)</option><option>USD ($)</option><option>UYU ($U)</option><option>UZS (лв)</option><option>WST ($)</option><option>XCD ($)</option><option>YER (﷼)</option><option>ZAR (R)</option><option>ZMW (ZK)</option>
</select>
					<div style="width: 25px; height: 25px; margin-top: 3px; margin-left: 5px; float: right;">
                    	<img style="transition:1s ease-in-out; right: 0px; padding-top: 3px; padding-right: 3px; cursor: pointer; opacity: 0.55;" onmouseover="this.style.opacity='1';" onmouseout="this.style.opacity='0.55';" onmousedown="this.style.opacity='1';" onclick="currencyPBoxHelp()" src="/images/more-info-icon.png" abp="266">
                    </div>
                </div>
                
                <!--COUNTRY-->
                <div id="countryPBox">
                    Country:<select id="countryPInput" onChange="clearOldCities()"><option selected="selected">Choose a country</option>
<option>Afghanistan</option><option>Albania</option><option>Algeria</option><option>Andorra</option><option>Andorra</option><option>Angola</option><option>Argentina</option><option>Armenia</option><option>Aruba</option><option>Australia</option><option>Austria</option><option>Azerbaijan</option><option>Bangladesh</option><option>Barbados</option><option>Belgium</option><option>Belize</option><option>Bermuda</option><option>Bolivia</option><option>Bosnia and Herzegovina</option><option>Botswana</option><option>Brazil</option><option>Brunei</option><option>Bulgaria</option><option>Cambodia</option><option>Canada</option><option>Cape Verde</option><option>Caribbean</option><option>Cayman Islands</option><option>China</option><option>Colombia</option><option>Costa Rica</option><option>Croatia</option><option>Cyprus</option><option>Czech Republic</option><option>Denmark</option><option>Dominican Republic</option><option>Egypt</option><option>Estonia</option><option>Estonia</option><option>Ethiopia</option><option>Falkland Islands</option><option>Fiji</option><option>Finland</option><option>France</option><option>Gambia</option><option>Georgia</option><option>Germany</option><option>Gibraltar</option><option>Greece</option><option>Guatemala</option><option>Guyana</option><option>Haiti</option><option>Honduras</option><option>Hong Kong</option><option>Hungaria</option><option>Iceland</option><option>India</option><option>Indonesia</option><option>Ireland</option><option>Israel</option><option>Italy</option><option>Jamaica</option><option>Kazakhstan</option><option>Kenya</option><option>Kosovo</option><option>Kyrgyzstan</option><option>Lao</option><option>Latvia</option><option>Latvia</option><option>Lebanon</option><option>Lesotho</option><option>Liberia</option><option>Lithuania</option><option>Luxembourg</option><option>Macau</option><option>Macedonia</option><option>Malawi</option><option>Malaysia</option><option>Maldive Islands</option><option>Malta</option><option>Mauritania</option><option>Mauritius</option><option>Mexico</option><option>Moldova</option><option>Mongolia</option><option>Montenegro</option><option>Morocca</option><option>MZN</option><option>Namibia</option><option>Nepal</option><option>Netherlands</option><option>Netherlands</option><option>New Zealand</option><option>Nicaragua</option><option>Nigeria</option><option>Norway</option><option>Pakistan</option><option>Panama</option><option>Papua New Guinea</option><option>Peru</option><option>Philippines</option><option>Poland</option><option>Portugal</option><option>Qatari</option><option>Republic of Congo</option><option>Romania</option><option>Russia</option><option>Saint Helens</option><option>Salvador</option><option>Samoa</option><option>San Marino</option><option>Sao Tome and Principe</option><option>Saudi Arabia</option><option>Serbia</option><option>Seychelles</option><option>Sierra Leone</option><option>Singapore</option><option>Slovakia</option><option>Slovenia</option><option>Solomon Islands</option><option>Somalia</option><option>South Africa</option><option>Spain</option><option>Sri Lanka</option><option>Suriname</option><option>Swaziland</option><option>Sweden</option><option>Switzerland</option><option>Taiwan</option><option>Tajikistan</option><option>Tanzania</option><option>Thailand</option><option>The Bahamas</option><option>Tonga</option><option>Trinidad and Tobago</option><option>Turkey</option><option>Uganda</option><option>Ukraine</option><option>United Arab Emirates</option><option>United Kingdom</option><option>United States</option><option>Uruguay</option><option>Uzbekistan</option><option>Vatican City</option><option>Yemen</option><option>Zambia</option>
</select>
					<div style="width: 25px; height: 25px; margin-top: 3px; margin-left: 5px; float: right;">
                   		<img style="transition:1s ease-in-out; right: 0px; padding-top: 3px; padding-right: 3px; cursor: pointer; opacity: 0.55;" onmouseover="this.style.opacity='1';" onmouseout="this.style.opacity='0.55';" onmousedown="this.style.opacity='1';" onclick="countryPBoxHelp()" src="/images/more-info-icon.png" abp="266">
                    </div>
                </div>
                
                <!--QUANTITY-->
                <div id="quantityPBox">
                    Quantity:<input type="number" id="quantityPInput" placeholder="eg. 100" disabled/>
                    <div id="quantityUnlimited">
                    	<input type="checkbox" id="unlimitedQuantity" value="Unlimited" style="height:12px;" checked>
                        Unlimited
                        <div style="width: 25px; height: 25px; margin-top: 3px; margin-left: 5px; float: right;">
                    <img style="transition:1s ease-in-out; right: 0px; padding-top: 3px; padding-right: 3px; cursor: pointer; opacity: 0.55;" onmouseover="this.style.opacity='1';" onmouseout="this.style.opacity='0.55';" onmousedown="this.style.opacity='1';" onclick="quantityPBoxHelp()" src="/images/more-info-icon.png" abp="266">
                    </div>
                    </div>
                    </div>
                </div>
                
                <!--IMG-->
                <div style="width: 72%;margin-top: 2%;padding: 5px;float: left;text-align: left;font-size: 16px;color:black;cursor:pointer;" onclick="hideShowImgFields1()">Publisher Logo (required)</div>
                <hr color="black" style="width:96%;color:black;height:1.1px;margin-top:0;float:left;cursor:pointer;" onclick="hideShowImgFields1()" />
                <a id="#Publisher:Publisher-Logo" name="#Publisher:Publisher-Logo" href="#Publisher:Publisher-Logo"></a>
                <div id="imgPubBoxes1" style="display:none">
                <div id="imgPBox">
                    <div id="pubBkgPreview" class="imgPublisher">
                        <img src="/images/exampleLogo.png" id="previewImage" class="publisherImg" />
                    </div>
                    <input type="file" id="logoPhotoFileUpload" />
                    <div style="width: 25px; height: 25px; margin-top: 3px; margin-left: 5px; float: right;">
                    <img style="transition:1s ease-in-out; right: 0px; padding-top: 3px; padding-right: 3px; cursor: pointer; opacity: 0.55;" onmouseover="this.style.opacity='1';" onmouseout="this.style.opacity='0.55';" onmousedown="this.style.opacity='1';" onclick="imgPBoxHelp()" src="/images/more-info-icon.png" abp="266">
                    </div>
                    
                </div>
                </div>
            </div>
            
            <div class="optionalPublisherFields">
            	<div style="width: 72%;margin-top: 2%;padding: 5px;float: left;text-align: left;font-size: 16px;color:black;cursor:pointer;" onclick="hideOptionalFields1()">Optional Fields</div>
                <hr color="black" style="width:96%;color:black;height:1.1px;margin-top:0;float:left;cursor:pointer;" onclick="hideOptionalFields1()" />
				<a id="#Publisher:Optional-Fields" name="#Publisher:Optional-Fields" href="#Publisher:Optional-Fields"></a>
                <div id="optionalPubBoxes1" style="display:none">
                <!--Reach in TSA-->
                <div id="tsaPBox">
                    Reach in TSA:<input type="text" id="tsaPInput" placeholder="eg. 10 Million" />
                    <div style="width: 25px; height: 25px; margin-top: 3px; margin-left: 5px; float: right;">
                    <img style="transition:1s ease-in-out; right: 0px; padding-top: 3px; padding-right: 3px; cursor: pointer; opacity: 0.55;" onmouseover="this.style.opacity='1';" onmouseout="this.style.opacity='0.55';" onmousedown="this.style.opacity='1';" onclick="tsaPBoxHelp()" src="/images/more-info-icon.png" abp="266">
                    </div>
                </div>
                

                <!--Average Hours-->
                <div id="avghourPBox">
                    Average Hours:<input type="text" id="avghourPInput" placeholder="eg. 10 Hours Weekly" />
                    <div style="width: 25px; height: 25px; margin-top: 3px; margin-left: 5px; float: right;">
                    <img style="transition:1s ease-in-out; right: 0px; padding-top: 3px; padding-right: 3px; cursor: pointer; opacity: 0.55;" onmouseover="this.style.opacity='1';" onmouseout="this.style.opacity='0.55';" onmousedown="this.style.opacity='1';" onclick="avghourPBoxHelp()" src="/images/more-info-icon.png" abp="266">
                    </div>
                </div>
                

                <!--ABC1 profile %-->
                <div id="abcPBox">
                    ABC1 Profile:<select id="abcPInput"><option selected="selected">Choose profile...</option><option>A</option><option>B</option><option>C1</option><option>C2</option><option>D</option><option>E</option></select>
                    <div style="width: 25px; height: 25px; margin-top: 3px; margin-left: 5px; float: right;">
                    <img style="transition:1s ease-in-out; right: 0px; padding-top: 3px; padding-right: 3px; cursor: pointer; opacity: 0.55;" onmouseover="this.style.opacity='1';" onmouseout="this.style.opacity='0.55';" onmousedown="this.style.opacity='1';" onclick="abcPBoxHelp()" src="/images/more-info-icon.png" abp="266">
                    </div>
                </div>
                

                <!-- Gender Ratio (F/M)-->
                <div id="genratPBox">
                    Gender Ratio:<select id="genratPInput"><option selected="selected">Choose ratio...</option><option>50%/50%</option><option>60% Male</option><option>70% Male</option><option>80% Male</option><option>90% Male</option><option>60% Female</option><option>70% Female</option><option>80% Female</option><option>90% Female</option></select>
                    <div style="width: 25px; height: 25px; margin-top: 3px; margin-left: 5px; float: right;">
                    <img style="transition:1s ease-in-out; right: 0px; padding-top: 3px; padding-right: 3px; cursor: pointer; opacity: 0.55;" onmouseover="this.style.opacity='1';" onmouseout="this.style.opacity='0.55';" onmousedown="this.style.opacity='1';" onclick="genratPBoxHelp()" src="/images/more-info-icon.png" abp="266">
                    </div>
                </div>
                

                <!--Target Demographic Age-->
                <div id="demogPBox">
                    Age Demographic:<select id="demogPInput"><option selected="selected">Choose demographic...</option><option>15-24</option><option>25-34</option><option>35-44</option><option>45-54</option><option>55-64</option><option>65+</option></select>
                    <div style="width: 25px; height: 25px; margin-top: 3px; margin-left: 5px; float: right;">
                    <img style="transition:1s ease-in-out; right: 0px; padding-top: 3px; padding-right: 3px; cursor: pointer; opacity: 0.55;" onmouseover="this.style.opacity='1';" onmouseout="this.style.opacity='0.55';" onmousedown="this.style.opacity='1';" onclick="demogPBoxHelp()" src="/images/more-info-icon.png" abp="266">
                    </div>
                </div>
                
                
                <!--Source (proof) for reach metrics/data-->
                <div id="sourcePBox">
                    Source:<input type="text" id="sourcePInput" placeholder="eg. Need an example address for this" />
                    <div style="width: 25px; height: 25px; margin-top: 3px; margin-left: 5px; float: right;">
                    <img style="transition:1s ease-in-out; right: 0px; padding-top: 3px; padding-right: 3px; cursor: pointer; opacity: 0.55;" onmouseover="this.style.opacity='1';" onmouseout="this.style.opacity='0.55';" onmousedown="this.style.opacity='1';" onclick="sourcePBoxHelp()" src="/images/more-info-icon.png" abp="266">
                    </div>
                </div>
               </div>
               <div style="height:50px;width:80%;float:right;"></div>
               </div>
            </div><!-----ADD PRODUCT END------>
        </div>

        <!-----HELP OPEN------> <!--CSS PAGE9 / HELP-->
        <div id="helpUnder" onclick="closeHelpPage()">
        </div>

        <div id="helpDiv">
            <div id="helpContent">

                <?php include("help.html"); ?>

            </div>
            <div id="helpMenu">
                <div class="helpMenuItem" onclick="toggleHelpPage(this.children[0].textContent);window.location='#Help:FAQ'">
                    <div class="helpMenuLink">FAQ</div>
                </div>
                <div class="helpMenuItem" onclick="toggleHelpPage(this.children[0].textContent);window.location='#Help:Advertiser'">
                    <div class="helpMenuLink">Advertiser</div>
                </div>
                <div class="helpMenuItem" onclick="toggleHelpPage(this.children[0].textContent);window.location='#Help:Campaigns'">
                    <div class="helpMenuLink">Campaigns</div>
                </div>
                <div class="helpMenuItem" onclick="toggleHelpPage(this.children[0].textContent);window.location='#Help:Publisher'">
                    <div class="helpMenuLink">Publisher</div>
                </div>
                <div class="helpMenuItem" onclick="toggleHelpPage(this.children[0].textContent);window.location='#Help:Password'">
                    <div class="helpMenuLink">Password</div>
                </div>
                <div class="helpMenuItem" onclick="toggleHelpPage(this.children[0].textContent);window.location='#Help:Email'">
                    <div class="helpMenuLink">Email</div>
                </div>
                <div class="helpMenuItem" onclick="toggleHelpPage(this.children[0].textContent);window.location='#Help:Support'">
                    <div class="helpMenuLink">Support</div>
                </div>
            </div>


        </div>
        <!-----HELP END------>
        <!--------CONTENT END-------->
    </div>
    
    <div id="urlCheckerBox" style="height:160px;" class="campPopup">
        <img onclick="closeUrlCheckerUi()" src="/images/arrowExit.png" style="position:absolute;top:-13px;right:-13px;cursor:pointer;" />
        <div id="urlCheckerBox2" style="float:left;"><br/>Please wait while we check the safety of this website...<br/></div>
         <div class="greenCampButton" onclick="if(this.style.textDecoration == 'line-through'){}else{window.open(this.parentElement.accessKey||this.parentElement.title);}" style="text-decoration:line-through;">Continue</div>
     </div>

    <!--------NEW MERCHANT-------->
    <div id="processingNewMerchant">Creating New Publisher...</div>


    <!--------PAGE END-------->
    <!--DATE/TIME-Picker-(http://amsul.ca/pickadate.js/)-->
    <link rel="stylesheet" type="text/css" href="/datePicker/themes/default.css">
    <link rel="stylesheet" type="text/css" href="/datePicker/themes/default.date.css">
    <link rel="stylesheet" type="text/css" href="/datePicker/themes/default.time.css">
    <script type="text/javascript" src="/datePicker/picker.js"></script>
    <script type="text/javascript" src="/datePicker/picker.time.js"></script>
    <script type="text/javascript" src="/datePicker/picker.date.js"></script>

    <!------RECOVERY--------->
    <?php
    $recovery = $_GET['recovery'];
    $ts = $_GET['ts'];
    $email = $_GET['email'];
    $id = $_GET['id'];
    $nav = $_GET['nav'];
    ?>
    <script>
	var nav = "<?php echo $nav; ?>";
	if(nav == "loggedOut") {
		document.getElementById("loggedOutMessage").style.display = "block";
		document.getElementById("loggedOutMessageBackDrop").style.display = "block";
		setTimeout(function (args) {
			try {
				document.getElementById("addBookmarkContainer").children[0].className = "addBookmarkContainer";
			} catch(e) {}
		}, 650)
	}
	
        setTimeout(function (args) {
            var recovery = "<?php echo $recovery; ?>";
            var ts = "<?php echo $ts; ?>";
            var email = "<?php echo $email; ?>";
            var id = "<?php echo $id; ?>";
            
            if(recovery == "true" && !!ts && !!email && !!id) {
                recoveryFunc(ts, email, id);
            }
			
        }, 5200)
    </script>
    <!------NEWUSEREGISTRATION--------->
    <?php
    $sessTok2 = $_GET['sessionToken'];
    ?>
    <script>
        var sessTok2 = "<?php echo $sessTok2; ?>";
        if(!!sessTok2) {
			document.getElementById("loadingGraphic").src == "/images/loader/85p.jpg"
            newUserSignInWithSessTok(sessTok2);
        }
    </script>
    
    <!------HTTPS-LOGIN-JOIN-CHECK--------->
    <script>
       //check for #loginNow/#joinNow
	   if(window.location.hash == "#loginNow") {
		   doNotLogin = false
		   loginMP()
		   }
	   if(window.location.hash == "#joinNow") {
		   doNotLogin = false
		   joinMP()
		   }
    </script>
    
    <!------GOOGLEAPIS--------->
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?libraries=places"></script>
    <div style="display:none;" id="map"></div>
	<div id="somediv" style="display:none;"></div>
    
	<!------SHARETOOL--------->
    <script src="/shareTool/js/rrssb.min.js"></script>
    
    <!------VIDEO--------->
    <div id="fullscreenVideoIntro" style="display:none"></div>
    <div id="fullscreenVideoIntroSkipper" style="display:none;line-height:60px;font-size:26px;color:white;text-align:center;opacity:0;transition:opacity 1s ease-in-out;text-shadow:2px 2px black;" onclick="videoSkip1(this)" style="display:none">
    Tap again to skip this video...</div>
    <script>
		function videoSkip1(div) {
			
				if(div.style.opacity != "0") {
						document.getElementById('fullscreenVideoIntroSkipper').style.display = "none";
						document.getElementById('mainPageContainer').style.display = "block";
						document.getElementById('fullscreenVideoIntro').style.opacity = "0";
						setTimeout(function (args) {
							document.getElementById('fullscreenVideoIntro').innerHTML = "";
							document.getElementById('fullscreenVideoIntro').style.display = "none";
						},  4000)
					} else {
						div.style.opacity = '1'
						setTimeout(function (args) {
							div.style.opacity = '0'
						},  4000)
					}
			}
	
		function setCookie(c_name,value,exdays) {
			var exdate=new Date();
			exdate.setDate(exdate.getDate() + exdays);
			var c_value=escape(value) + ((exdays==null) ? "" : ";     expires="+exdate.toUTCString());
			document.cookie=c_name + "=" + c_value;
		}

			if(window.location.hash == "#video1") {
				setTimeout(function (args) {
				document.getElementById('fullscreenVideoIntro').innerHTML = '<iframe id="video1" src="//www.youtube.com/embed/xijIuRf87_A?rel=0&autoplay=1&controls=0&showinfo=0" style="width:100%;height:100%" frameborder="0" allowfullscreen></iframe>';
				document.getElementById('mainPageContainer').style.display = "none";
				document.getElementById('fullscreenVideoIntroSkipper').style.display = "block";
				document.getElementById('fullscreenVideoIntro').style.display = "block";
				document.getElementById('fullscreenVideoIntroSkipper').style.zIndex = "5000";
				document.getElementById('fullscreenVideoIntro').style.zIndex = "4999";
				document.getElementById('fullscreenVideoIntroSkipper').style.width = "100%";
				document.getElementById('fullscreenVideoIntroSkipper').style.height = "100%";
				document.getElementById('fullscreenVideoIntroSkipper').style.position = "absolute";
				document.getElementById('fullscreenVideoIntroSkipper').style.top = "0px";
				document.getElementById('fullscreenVideoIntroSkipper').style.left = "0px";
				document.getElementById('fullscreenVideoIntro').style.width = "100%";
				document.getElementById('fullscreenVideoIntro').style.height = "100%";
				document.getElementById('fullscreenVideoIntro').style.position = "absolute";
				document.getElementById('fullscreenVideoIntro').style.top = "0px";
				document.getElementById('fullscreenVideoIntro').style.left = "0px";
				document.getElementById('fullscreenVideoIntro').style.opacity = "1";
				document.getElementById('fullscreenVideoIntro').style.transition = "opacity 4s ease-in-out";
				setTimeout(function (args) {
					document.getElementById('fullscreenVideoIntroSkipper').style.display = "none";
					document.getElementById('mainPageContainer').style.display = "block";
					document.getElementById('fullscreenVideoIntro').style.opacity = "0";
					setTimeout(function (args) {
						document.getElementById('fullscreenVideoIntro').style.display = "none";
					},  4000)
				}, 120500)
					},  1000)
			}
		
    </script>
</body>
</html>