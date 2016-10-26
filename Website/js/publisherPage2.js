var logoImg;
var countryPub;
var lnbPub;
var cityPub;
var splitTags2;
var adTypePub;
var reachPub;
var quantityPub;
var descriptionPub;
var publisherPub;
var logoPub;
var userPub;
var statusPub;
var leadTimePub;
var currencyPub;
var currencyPub2;
var prcPub;
var pricePub;
var tagsPub;
var countryPub2;
var tagsPub2;
var campLPub;
var campLPub2;
var stockPub;
var reachPubMK;
var pubFormCount1 = 0;

var isoCountries1 = {
    'AF': 'Afghanistan',
    'AX': 'Aland Islands',
    'AL': 'Albania',
    'DZ': 'Algeria',
    'AS': 'American Samoa',
    'AD': 'Andorra',
    'AO': 'Angola',
    'AI': 'Anguilla',
    'AQ': 'Antarctica',
    'AG': 'Antigua And Barbuda',
    'AR': 'Argentina',
    'AM': 'Armenia',
    'AW': 'Aruba',
    'AU': 'Australia',
    'AT': 'Austria',
    'AZ': 'Azerbaijan',
    'BS': 'Bahamas',
    'BH': 'Bahrain',
    'BD': 'Bangladesh',
    'BB': 'Barbados',
    'BY': 'Belarus',
    'BE': 'Belgium',
    'BZ': 'Belize',
    'BJ': 'Benin',
    'BM': 'Bermuda',
    'BT': 'Bhutan',
    'BO': 'Bolivia',
    'BA': 'Bosnia And Herzegovina',
    'BW': 'Botswana',
    'BV': 'Bouvet Island',
    'BR': 'Brazil',
    'IO': 'British Indian Ocean Territory',
    'BN': 'Brunei Darussalam',
    'BG': 'Bulgaria',
    'BF': 'Burkina Faso',
    'BI': 'Burundi',
    'KH': 'Cambodia',
    'CM': 'Cameroon',
    'CA': 'Canada',
    'CV': 'Cape Verde',
    'KY': 'Cayman Islands',
    'CF': 'Central African Republic',
    'TD': 'Chad',
    'CL': 'Chile',
    'CN': 'China',
    'CX': 'Christmas Island',
    'CC': 'Cocos (Keeling) Islands',
    'CO': 'Colombia',
    'KM': 'Comoros',
    'CG': 'Congo',
    'CD': 'Congo, Democratic Republic',
    'CK': 'Cook Islands',
    'CR': 'Costa Rica',
    'CI': 'Cote D\'Ivoire',
    'HR': 'Croatia',
    'CU': 'Cuba',
    'CY': 'Cyprus',
    'CZ': 'Czech Republic',
    'DK': 'Denmark',
    'DJ': 'Djibouti',
    'DM': 'Dominica',
    'DO': 'Dominican Republic',
    'EC': 'Ecuador',
    'EG': 'Egypt',
    'SV': 'El Salvador',
    'GQ': 'Equatorial Guinea',
    'ER': 'Eritrea',
    'EE': 'Estonia',
    'ET': 'Ethiopia',
    'FK': 'Falkland Islands (Malvinas)',
    'FO': 'Faroe Islands',
    'FJ': 'Fiji',
    'FI': 'Finland',
    'FR': 'France',
    'GF': 'French Guiana',
    'PF': 'French Polynesia',
    'TF': 'French Southern Territories',
    'GA': 'Gabon',
    'GM': 'Gambia',
    'GE': 'Georgia',
    'DE': 'Germany',
    'GH': 'Ghana',
    'GI': 'Gibraltar',
    'GR': 'Greece',
    'GL': 'Greenland',
    'GD': 'Grenada',
    'GP': 'Guadeloupe',
    'GU': 'Guam',
    'GT': 'Guatemala',
    'GG': 'Guernsey',
    'GN': 'Guinea',
    'GW': 'Guinea-Bissau',
    'GY': 'Guyana',
    'HT': 'Haiti',
    'HM': 'Heard Island & Mcdonald Islands',
    'VA': 'Holy See (Vatican City State)',
    'HN': 'Honduras',
    'HK': 'Hong Kong',
    'HU': 'Hungary',
    'IS': 'Iceland',
    'IN': 'India',
    'ID': 'Indonesia',
    'IR': 'Iran, Islamic Republic Of',
    'IQ': 'Iraq',
    'IE': 'Ireland',
    'IM': 'Isle Of Man',
    'IL': 'Israel',
    'IT': 'Italy',
    'JM': 'Jamaica',
    'JP': 'Japan',
    'JE': 'Jersey',
    'JO': 'Jordan',
    'KZ': 'Kazakhstan',
    'KE': 'Kenya',
    'KI': 'Kiribati',
    'KR': 'Korea',
    'KW': 'Kuwait',
    'KG': 'Kyrgyzstan',
    'LA': 'Lao People\'s Democratic Republic',
    'LV': 'Latvia',
    'LB': 'Lebanon',
    'LS': 'Lesotho',
    'LR': 'Liberia',
    'LY': 'Libyan Arab Jamahiriya',
    'LI': 'Liechtenstein',
    'LT': 'Lithuania',
    'LU': 'Luxembourg',
    'MO': 'Macao',
    'MK': 'Macedonia',
    'MG': 'Madagascar',
    'MW': 'Malawi',
    'MY': 'Malaysia',
    'MV': 'Maldives',
    'ML': 'Mali',
    'MT': 'Malta',
    'MH': 'Marshall Islands',
    'MQ': 'Martinique',
    'MR': 'Mauritania',
    'MU': 'Mauritius',
    'YT': 'Mayotte',
    'MX': 'Mexico',
    'FM': 'Micronesia, Federated States Of',
    'MD': 'Moldova',
    'MC': 'Monaco',
    'MN': 'Mongolia',
    'ME': 'Montenegro',
    'MS': 'Montserrat',
    'MA': 'Morocco',
    'MZ': 'Mozambique',
    'MM': 'Myanmar',
    'NA': 'Namibia',
    'NR': 'Nauru',
    'NP': 'Nepal',
    'NL': 'Netherlands',
    'AN': 'Netherlands Antilles',
    'NC': 'New Caledonia',
    'NZ': 'New Zealand',
    'NI': 'Nicaragua',
    'NE': 'Niger',
    'NG': 'Nigeria',
    'NU': 'Niue',
    'NF': 'Norfolk Island',
    'MP': 'Northern Mariana Islands',
    'NO': 'Norway',
    'OM': 'Oman',
    'PK': 'Pakistan',
    'PW': 'Palau',
    'PS': 'Palestinian Territory, Occupied',
    'PA': 'Panama',
    'PG': 'Papua New Guinea',
    'PY': 'Paraguay',
    'PE': 'Peru',
    'PH': 'Philippines',
    'PN': 'Pitcairn',
    'PL': 'Poland',
    'PT': 'Portugal',
    'PR': 'Puerto Rico',
    'QA': 'Qatar',
    'RE': 'Reunion',
    'RO': 'Romania',
    'RU': 'Russian Federation',
    'RW': 'Rwanda',
    'BL': 'Saint Barthelemy',
    'SH': 'Saint Helena',
    'KN': 'Saint Kitts And Nevis',
    'LC': 'Saint Lucia',
    'MF': 'Saint Martin',
    'PM': 'Saint Pierre And Miquelon',
    'VC': 'Saint Vincent And Grenadines',
    'WS': 'Samoa',
    'SM': 'San Marino',
    'ST': 'Sao Tome And Principe',
    'SA': 'Saudi Arabia',
    'SN': 'Senegal',
    'RS': 'Serbia',
    'SC': 'Seychelles',
    'SL': 'Sierra Leone',
    'SG': 'Singapore',
    'SK': 'Slovakia',
    'SI': 'Slovenia',
    'SB': 'Solomon Islands',
    'SO': 'Somalia',
    'ZA': 'South Africa',
    'GS': 'South Georgia And Sandwich Isl.',
    'ES': 'Spain',
    'LK': 'Sri Lanka',
    'SD': 'Sudan',
    'SR': 'Suriname',
    'SJ': 'Svalbard And Jan Mayen',
    'SZ': 'Swaziland',
    'SE': 'Sweden',
    'CH': 'Switzerland',
    'SY': 'Syrian Arab Republic',
    'TW': 'Taiwan',
    'TJ': 'Tajikistan',
    'TZ': 'Tanzania',
    'TH': 'Thailand',
    'TL': 'Timor-Leste',
    'TG': 'Togo',
    'TK': 'Tokelau',
    'TO': 'Tonga',
    'TT': 'Trinidad And Tobago',
    'TN': 'Tunisia',
    'TR': 'Turkey',
    'TM': 'Turkmenistan',
    'TC': 'Turks And Caicos Islands',
    'TV': 'Tuvalu',
    'UG': 'Uganda',
    'UA': 'Ukraine',
    'AE': 'United Arab Emirates',
    'GB': 'United Kingdom',
    'US': 'United States',
    'UM': 'United States Outlying Islands',
    'UY': 'Uruguay',
    'UZ': 'Uzbekistan',
    'VU': 'Vanuatu',
    'VE': 'Venezuela',
    'VN': 'Viet Nam',
    'VG': 'Virgin Islands, British',
    'VI': 'Virgin Islands, U.S.',
    'WF': 'Wallis And Futuna',
    'EH': 'Western Sahara',
    'YE': 'Yemen',
    'ZM': 'Zambia',
    'ZW': 'Zimbabwe'
};

var isoCountries2 = {
    'Afghanistan': 'AF',
    'Aland Islands': 'AX',
    'Albania': 'AL',
    'Algeria': 'DZ',
    'American Samoa': 'AS',
    'Andorra': 'AD',
    'Angola': 'AO',
    'Anguilla': 'AI',
    'Antarctica': 'AQ',
    'Antigua And Barbuda': 'AG',
    'Argentina': 'AR',
    'Armenia': 'AM',
    'Aruba': 'AW',
    'Australia': 'AU',
    'Austria': 'AT',
    'Azerbaijan': 'AZ',
    'Bahamas': 'BS',
    'Bahrain': 'BH',
    'Bangladesh': 'BD',
    'Barbados': 'BB',
    'Belarus': 'BY',
    'Belgium': 'BE',
    'Belize': 'BZ',
    'Benin': 'BJ',
    'Bermuda': 'BM',
    'Bhutan': 'BT',
    'Bolivia': 'BO',
    'Bosnia And Herzegovina': 'BA',
    'Botswana': 'BW',
    'Bouvet Island': 'BV',
    'Brazil': 'BR',
    'British Indian Ocean Territory': 'IO',
    'Brunei Darussalam': 'BN',
    'Bulgaria': 'BG',
    'Burkina Faso': 'BF',
    'Burundi': 'BI',
    'Cambodia': 'KH',
    'Cameroon': 'CM',
    'Canada': 'CA',
    'Cape Verde': 'CV',
    'Cayman Islands': 'KY',
    'Central African Republic': 'CF',
    'Chad': 'TD',
    'Chile': 'CL',
    'China': 'CN',
    'Christmas Island': 'CX',
    'Cocos (Keeling) Islands': 'CC',
    'Colombia': 'CO',
    'Comoros': 'KM',
    'Congo': 'CG',
    'Cook Islands': 'CK',
    'Costa Rica': 'CR',
    'Cote D\'Ivoire': 'CI',
    'Croatia': 'HR',
    'Cuba': 'CU',
    'Cyprus': 'CY',
    'Czech Republic': 'CZ',
    'Denmark': 'DK',
    'Djibouti': 'DJ',
    'Dominica': 'DM',
    'Dominican Republic': 'DO',
    'Ecuador': 'EC',
    'Egypt': 'EG',
    'El Salvador': 'SV',
    'Equatorial Guinea': 'GQ',
    'Eritrea': 'ER',
    'Estonia': 'EE',
    'Ethiopia': 'ET',
    'Falkland Islands (Malvinas)': 'FK',
    'Faroe Islands': 'FO',
    'Fiji': 'FJ',
    'Finland': 'FI',
    'France': 'FR',
    'French Guiana': 'GF',
    'French Polynesia': 'PF',
    'French Southern Territories': 'TF',
    'Gabon': 'GA',
    'Gambia': 'GM',
    'Georgia': 'GE',
    'Germany': 'DE',
    'Ghana': 'GH',
    'Gibraltar': 'GI',
    'Greece': 'GR',
    'Greenland': 'GL',
    'Grenada': 'GD',
    'Guadeloupe': 'GP',
    'Guam': 'GU',
    'Guatemala': 'GT',
    'Guernsey': 'GG',
    'Guinea': 'GN',
    'Guinea-Bissau': 'GW',
    'Guyana': 'GY',
    'Haiti': 'HT',
    'Heard Island & Mcdonald Islands': 'HM',
    'Holy See (Vatican City State)': 'VA',
    'Honduras': 'HN',
    'Hong Kong': 'HK',
    'Hungary': 'HU',
    'Iceland': 'IS',
    'India': 'IN',
    'Indonesia': 'ID',
    'Iran': 'IR',
    'Iraq': 'IQ',
    'Ireland': 'IE',
    'Isle Of Man': 'IM',
    'Israel': 'IL',
    'Italy': 'IT',
    'Jamaica': 'JM',
    'Japan': 'JP',
    'Jersey': 'JE',
    'Jordan': 'JO',
    'Kazakhstan': 'KZ',
    'Kenya': 'KE',
    'Kiribati': 'KI',
    'Korea': 'KR',
    'Kuwait': 'KW',
    'Kyrgyzstan': 'KG',
    'Lao People\'s Democratic Republic': 'LA',
    'Latvia': 'LV',
    'Lebanon': 'LB',
    'Lesotho': 'LS',
    'Liberia': 'LR',
    'Libya': 'LY',
    'Libyan Arab Jamahiriya': 'LY',
    'Liechtenstein': 'LI',
    'Lithuania': 'LT',
    'Luxembourg': 'LU',
    'Macao': 'MO',
    'Macedonia': 'MK',
    'Madagascar': 'MG',
    'Malawi': 'AX',
    'Malaysia': 'MY',
    'Maldives': 'MV',
    'Mali': 'ML',
    'Malta': 'MT',
    'Marshall Islands': 'MH',
    'Martinique': 'MQ',
    'Mauritania': 'MR',
    'Mauritius': 'MU',
    'Mayotte': 'YT',
    'Mexico': 'MX',
    'Micronesia': 'FM',
    'Moldova': 'MD',
    'Monaco': 'MC',
    'Mongolia': 'MN',
    'Montenegro': 'ME',
    'Montserrat': 'MS',
    'Morocco': 'MA',
    'Mozambique': 'MZ',
    'Myanmar': 'MM',
    'Namibia': 'NA',
    'Nauru': 'NR',
    'Nepal': 'NP',
    'Netherlands': 'NL',
    'Netherlands Antilles': 'AN',
    'New Caledonia': 'NC',
    'New Zealand': 'NZ',
    'Nicaragua': 'NI',
    'Niger': 'NE',
    'Nigeria': 'NG',
    'Niue': 'NU',
    'Norfolk Island': 'NF',
    'Northern Mariana Islands': 'MP',
    'Norway': 'NO',
    'Oman': 'OM',
    'Pakistan': 'PK',
    'Palau': 'PW',
    'Palestinian Territory': 'PS',
    'Panama': 'PA',
    'Papua New Guinea': 'PG',
    'Paraguay': 'PY',
    'Peru': 'PE',
    'Philippines': 'PH',
    'Pitcairn': 'PN',
    'Poland': 'PL',
    'Portugal': 'PT',
    'Puerto Rico': 'PR',
    'Qatar': 'QA',
    'Reunion': 'RE',
    'Romania': 'RO',
    'Russia': 'RU',
    'Russian Federation': 'RU',
    'Rwanda': 'RW',
    'Saint Barthelemy': 'BL',
    'Saint Helena': 'SH',
    'Saint Kitts And Nevis': 'KN',
    'Saint Lucia': 'LC',
    'Saint Martin': 'MF',
    'Saint Pierre And Miquelon': 'PM',
    'Saint Vincent And Grenadines': 'VC',
    'Samoa': 'WS',
    'San Marino': 'SM',
    'Sao Tome And Principe': 'ST',
    'Saudi Arabia': 'SA',
    'Senegal': 'SN',
    'Serbia': 'RS',
    'Seychelles': 'SC',
    'Sierra Leone': 'SL',
    'Singapore': 'SG',
    'Slovakia': 'SK',
    'Slovenia': 'SI',
    'Solomon Islands': 'SB',
    'Somalia': 'SO',
    'South Africa': 'ZA',
    'South Georgia And Sandwich Isl.': 'GS',
    'Spain': 'ES',
    'Sri Lanka': 'LK',
    'Sudan': 'SD',
    'Suriname': 'SR',
    'Svalbard And Jan Mayen': 'SJ',
    'Swaziland': 'SZ',
    'Sweden': 'SE',
    'Switzerland': 'CH',
    'Syrian Arab Republic': 'SY',
    'Taiwan': 'TW',
    'Tajikistan': 'TJ',
    'Tanzania': 'TZ',
    'Thailand': 'TH',
    'Timor-Leste': 'TL',
    'Togo': 'TG',
    'Tokelau': 'TK',
    'Tonga': 'TO',
    'Trinidad And Tobago': 'TT',
    'Tunisia': 'TN',
    'Turkey': 'TR',
    'Turkmenistan': 'TM',
    'Turks And Caicos Islands': 'TC',
    'Tuvalu': 'TV',
    'Uganda': 'UG',
    'Ukraine': 'UA',
    'United Arab Emirates': 'AE',
    'United Kingdom': 'GB',
    'United States': 'US',
    'United States Outlying Islands': 'UM',
    'Uruguay': 'UY',
    'Uzbekistan': 'UZ',
    'Vanuatu': 'VU',
    'Venezuela': 'VE',
    'Viet Nam': 'VN',
    'Virgin Islands, U.S': 'VI',
    'Wallis And Futuna': 'WF',
    'Western Sahara': 'EH',
    'Yemen': 'YE',
    'Zambia': 'ZM',
    'Zimbabwe': 'ZW'
};

function goToAddProductFunc() {
	
	var quantified = document.getElementById("unlimitedQuantity");
	quantified.addEventListener("click", stockUpdate, false);
	
    document.getElementById("publisherPage1Div").style.display = "none"
    document.getElementById("publisherPage2Div").style.display = "block"
    document.getElementById("publisherButton1").style.display = "block"
    document.getElementById("publisherButton2").style.display = "block"
    document.getElementById("normalSearchButton2").style.display = "none"
    var currentUser = Parse.User.current();
    var country = currentUser.attributes.stripeCountry;
    var currency = currentUser.attributes.stripeCurrency;
    var pubName = currentUser.attributes.stripeName;
    if(!pubName) {pubName = "Demo"}
    try { document.getElementById("countryPInput").value = country; } catch (e) { }
    try { document.getElementById("currencyPInput").value = currency.toUpperCase(); } catch (e) { }
    try { document.getElementById("publisherPInput").value = pubName; } catch (e) { }
    //check for previous product details
    if (!!currentUser.attributes.stripeCountry) {
        var code;
        if (isoCountries1.hasOwnProperty(country)) {
            code = isoCountries1[country];
        }
        var selBoxes = document.getElementById("countryPInput").children.length;
        var selBox = document.getElementById("countryPInput").children
        for (var i = 0; i < selBoxes; i++) {
            var thisBox = selBox[i];
            if (thisBox.value.toLowerCase() == code.toLowerCase()) {
                thisBox.selected = true
            }
        }
    }
    if (!!currentUser.attributes.lnb) {
        if (currentUser.attributes.lnb == "Local") {
            document.getElementById("pubLNBlocal").style.backgroundColor = "rgba(0, 0, 0, 0.1)"
            document.getElementById("pubLNBlocal").style.border = "1px dashed white"
            document.getElementById("pubLNBlocal").accessKey = "true"
            document.getElementById("pubLNBlocal").title = "true"
        }
        if (currentUser.attributes.lnb == "National") {
            document.getElementById("pubLNBnational").style.backgroundColor = "rgba(0, 0, 0, 0.1)"
            document.getElementById("pubLNBnational").style.border = "1px dashed white"
            document.getElementById("pubLNBnational").accessKey = "true"
            document.getElementById("pubLNBnational").title = "true"
        }
    }
    if (!!currentUser.attributes.city) {
        document.getElementById("cityPInput").value = currentUser.attributes.city
    }
    if (!!currentUser.attributes.tags) {
        document.getElementById("tagsPInput").value = currentUser.attributes.tags
    }
    if (!!currentUser.attributes.adType) {
        var selBoxes = document.getElementById("adTypePInput").children.length;
        var selBox = document.getElementById("adTypePInput").children
        for (var i = 0; i < selBoxes; i++) {
            var thisBox = selBox[i];
            if (thisBox.value.toLowerCase() == currentUser.attributes.adType.toLowerCase()) {
                thisBox.selected = true
            }
        }
    }
    if (!!currentUser.attributes.reach) {
        document.getElementById("reachPInput").value = currentUser.attributes.reach.toLocaleString("en")
    }
    if (!!currentUser.attributes.quantity) {
        document.getElementById("quantityPInput").value = currentUser.attributes.quantity
    }
    if (!!currentUser.attributes.description) {
        document.getElementById("descPBoxInput").value = currentUser.attributes.description
    }
    if (!!currentUser.attributes.publisher) {
        document.getElementById("publisherPInput").value = currentUser.attributes.stripeName
        if (document.getElementById("publisherPInput").value == "") document.getElementById("publisherPInput").value = "Demo"
    }
    if (!!currentUser.attributes.logo) {
        $('#previewImage').attr('src', "https://s3.amazonaws.com/files.parsetfss.com/341d971a-dd60-4cb5-97bb-1c043c536442/" + currentUser.attributes.logo._name.replace(/\s+/g, '%20'));
        document.getElementById('pubBkgPreview').style.backgroundImage = "url('https://s3.amazonaws.com/files.parsetfss.com/341d971a-dd60-4cb5-97bb-1c043c536442/" + currentUser.attributes.logo._name.replace(/\s+/g, '%20') + "')";
    }
    if (!!currentUser.attributes.leadTime) {
        document.getElementById("leadTimePInput").value = currentUser.attributes.leadTime + " Hours"
    }
    if (!!currentUser.attributes.stripeCurrency) {
        var selBoxes = document.getElementById("currencyPInput").children.length;
        var selBox = document.getElementById("currencyPInput").children
        for (var i = 0; i < selBoxes; i++) {
            var thisBox = selBox[i];
			if (thisBox.value.length > 3) {
				if (thisBox.value.substring(0, thisBox.value.length - 4) == currentUser.attributes.stripeCurrency.toUpperCase()) {
					thisBox.selected = true
					}
				} else {
				if (thisBox.value == currentUser.attributes.stripeCurrency.toUpperCase()) {
					thisBox.selected = true
				}
			}
        }
    }
    if (!!currentUser.attributes.price) {
        document.getElementById("pricePInput").value = currentUser.attributes.price
    }
    if (!!currentUser.attributes.campLength) {
        document.getElementById("campLPInput1").value = parseInt(currentUser.attributes.campLength)
        var selBoxes = document.getElementById("campLPInput2").children.length;
        var selBox = document.getElementById("campLPInput2").children
        var cmpLen = currentUser.attributes.campLength.replace(/[0-9]/g, '');
        var cmpLen2 = cmpLen.replace(/\s/g, '');
        for (var i = 0; i < selBoxes; i++) {
            var thisBox = selBox[i];
            if (thisBox.value.toLowerCase() == cmpLen2) {
                thisBox.selected = true
            }
        }
    }
}

$(document).ready(function () {
    $('#logoPhotoFileUpload').bind("change", function (e) {
        readURL(this);
        uploadProduct1()
    })
})

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#previewImage').attr('src', e.target.result);
            document.getElementById('pubBkgPreview').style.backgroundImage = "url('" + e.target.result + "')";
        }
        reader.readAsDataURL(input.files[0]);
    }
}


function uploadProduct1() {
    var fileUploadControl = $("#logoPhotoFileUpload")[0];
    if (fileUploadControl.files.length > 0) {
        var file = fileUploadControl.files[0];
        var name = file.name.replace(/\s+/g, '%20');
		file.name = name;
        var parseFile = new Parse.File(name, file);

        parseFile.save().then
        (
          function () {
              logoImg = parseFile;
          },
          function (error) {
              document.getElementById("serverMsgBox").innerHTML = "Error Message: " + error.message;
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
          }
        );
    }
};

function lnbPClicker(id) {
    document.getElementById("pubLNBlocal").style.backgroundColor = "transparent"
    document.getElementById("pubLNBnational").style.backgroundColor = "transparent"
    document.getElementById("pubLNBlocal").style.border = "none"
    document.getElementById("pubLNBnational").style.border = "none"
    document.getElementById("pubLNBlocal").accessKey = "none"
    document.getElementById("pubLNBlocal").title = "none"
    document.getElementById("pubLNBnational").accessKey = "none"
    document.getElementById("pubLNBnational").title = "none"
    document.getElementById([id]).style.backgroundColor = "rgba(0, 0, 0, 0.1)"
    document.getElementById([id]).style.border = "1px dashed white"
    document.getElementById([id]).accessKey = "true"
    document.getElementById([id]).title = "true"
}

function clearPublisherForm() { 
	var currentUser = Parse.User.current();
    var country = currentUser.attributes.stripeCountry;
    var currency = currentUser.attributes.stripeCurrency;
    document.getElementById("pubLNBlocal").style.backgroundColor = "transparent"
    document.getElementById("pubLNBnational").style.backgroundColor = "transparent"
    document.getElementById("pubLNBlocal").accessKey = "none"
    document.getElementById("pubLNBnational").accessKey = "none"
    document.getElementById("pubLNBlocal").title = "none"
    document.getElementById("pubLNBnational").title = "none"
    document.getElementById("pubLNBlocal").style.border = "none"
    document.getElementById("pubLNBnational").style.border = "none"
    try { 
		if (!!currentUser.attributes.stripeCurrency) {
			var selBoxes = document.getElementById("currencyPInput").children.length;
			var selBox = document.getElementById("currencyPInput").children
			for (var i = 0; i < selBoxes; i++) {
				var thisBox = selBox[i];
				if (thisBox.value.length > 3) {
					if (thisBox.value.substring(0, thisBox.value.length - 4) == currentUser.attributes.stripeCurrency.toUpperCase()) {
						thisBox.selected = true
						}
					} else {
					if (thisBox.value == currentUser.attributes.stripeCurrency.toUpperCase()) {
						thisBox.selected = true
					}
				}
			}
		}
	} catch (e) { 
		document.getElementById("currencyPInput").options[0].selected = "selected"
	}
    document.getElementById("campLPInput1").value = ""
    try { 
		if (!!currentUser.attributes.stripeCountry) {
			var code;
			if (isoCountries1.hasOwnProperty(country)) {
				code = isoCountries1[country];
			}
			var selBoxes = document.getElementById("countryPInput").children.length;
			var selBox = document.getElementById("countryPInput").children
			for (var i = 0; i < selBoxes; i++) {
				var thisBox = selBox[i];
				if (thisBox.value.toLowerCase() == code.toLowerCase()) {
					thisBox.selected = true
				}
			}
		}
	} catch (e) { 
		document.getElementById("countryPInput").options[0].selected = "selected";
	}
    document.getElementById("pricePInput").value = "";
    document.getElementById("cityPInput").value = "";
    document.getElementById("quantityPInput").value = "1";
    document.getElementById("adTypePInput").options[0].selected = "selected";
    document.getElementById("campLPInput2").options[1].selected = "selected";
    document.getElementById("leadTimePInput").value = "";
    document.getElementById("tagsPInput").value = "";
    document.getElementById("reachPInput").value = "";
    document.getElementById("previewImage").src = "/images/exampleLogo.png";
    document.getElementById("pubBkgPreview").style.backgroundImage = "url('/images/exampleLogo.png')";
    document.getElementById("tsaPInput").value = "";
    document.getElementById("avghourPInput").value = "";
    document.getElementById("abcPInput").options[0].selected = "selected";
    document.getElementById("genratPInput").options[0].selected = "selected";
    document.getElementById("demogPInput").options[0].selected = "selected";
    document.getElementById("sourcePInput").value = "";
    $("#logoPhotoFileUpload").val("");
    document.getElementById("descPBoxInput").value = "";
    document.getElementById("publisherPInput").style.border = "none";
    document.getElementById("currencyPInput").style.border = "none";
    document.getElementById("countryPInput").style.border = "none";
    document.getElementById("pricePInput").style.border = "none";
    document.getElementById("cityPInput").style.border = "none";
    document.getElementById("quantityPInput").style.border = "none";
    document.getElementById("adTypePInput").style.border = "none";
    document.getElementById("leadTimePInput").style.border = "none";
    document.getElementById("tagsPInput").style.border = "none";
    document.getElementById("reachPInput").style.border = "none";
    document.getElementById("descPBoxInput").style.border = "none";
    document.getElementById("lnbPBox").style.border = "none";

}

function publishThisForm() {
    var formFull = true;
    if (document.getElementById("pubLNBlocal").style.backgroundColor == "transparent" && document.getElementById("pubLNBnational").style.backgroundColor == "transparent") {
        document.getElementById("lnbPBox").style.border = "1px red solid";
        formFull = false; hideShowRequiredFields1()
    } else { 
        document.getElementById("lnbPBox").style.border = "none";
	}
    if (!document.getElementById("publisherPInput").value) {
        document.getElementById("publisherPInput").style.border = "1px red solid"
        formFull = false; hideShowAutoFields1()
    } else { 
        document.getElementById("publisherPInput").style.border ="none"
	}
    if (!document.getElementById("currencyPInput").value || document.getElementById("currencyPInput").value == "Choose a currency") {
        document.getElementById("currencyPInput").style.border = "1px red solid"
        formFull = false; hideShowAutoFields1()
    } else { 
        document.getElementById("currencyPInput").style.border = "none"
	}
    if (!document.getElementById("countryPInput").value || document.getElementById("countryPInput").value == "Choose a country") {
        document.getElementById("countryPInput").style.border = "1px red solid"
        formFull = false; hideShowAutoFields1()
    } else { 
        document.getElementById("countryPInput").style.border = "none"
	}
    if (!document.getElementById("pricePInput").value || document.getElementById("pricePInput").value < 0) {
        document.getElementById("pricePInput").style.border = "1px red solid"
        formFull = false; hideShowRequiredFields1()
    } else { 
        document.getElementById("pricePInput").style.border = "none"
	}
    if (!document.getElementById("cityPInput").value) {
        document.getElementById("cityPInput").style.border = "1px red solid"
        formFull = false;  hideShowRequiredFields1()
    } else { 
        document.getElementById("cityPInput").style.border = "none"
	}
    if (!document.getElementById("quantityPInput").value && document.getElementById("unlimitedQuantity").checked == false) {
        document.getElementById("quantityPInput").style.border = "1px red solid"
        formFull = false; hideShowAutoFields1()
    } else { 
        document.getElementById("quantityPInput").style.border = "none"
	}
    if (!document.getElementById("adTypePInput").value || document.getElementById("adTypePInput").value == "Choose an ad type") {
        document.getElementById("adTypePInput").style.border = "1px red solid"
        formFull = false;  hideShowRequiredFields1()
    } else { 
        document.getElementById("adTypePInput").style.border = "none"
	}
    if (!document.getElementById("campLPInput1").value || document.getElementById("campLPInput1").value < 0) {
        document.getElementById("campLPInput1").style.border = "1px red solid"
        formFull = false;  hideShowRequiredFields1()
    } else { 
        document.getElementById("campLPInput1").style.border = "none"
	}
	var leadTimeValueChecker = parseInt(document.getElementById("leadTimePInput").value)
    if (!leadTimeValueChecker || leadTimeValueChecker < 0) {
        document.getElementById("leadTimePInput").style.border = "1px red solid"
        formFull = false;  hideShowRequiredFields1()
    } else { 
        document.getElementById("leadTimePInput").style.border = "none"
	}
    if (!document.getElementById("tagsPInput").value) {
        document.getElementById("tagsPInput").style.border = "1px red solid"
        formFull = false;  hideShowRequiredFields1()
    } else { 
        document.getElementById("tagsPInput").style.border = "none"
	}
    if (!document.getElementById("reachPInput").value || parseInt(document.getElementById("reachPInput").value.split(",").join("")) < 0) {
        document.getElementById("reachPInput").style.border = "1px red solid"
        formFull = false; hideShowRequiredFields1()
    } else { 
        document.getElementById("reachPInput").style.border = "none"
	}
    if (!document.getElementById("descPBoxInput").value) {
        document.getElementById("descPBoxInput").style.border = "1px red solid"
        formFull = false; hideShowDescBox1()
    } else { 
        document.getElementById("descPBoxInput").style.border = "none"
	}

    if (formFull == true) {
        if (document.getElementById("pubLNBlocal").accessKey == "true" || document.getElementById("pubLNBlocal").title == "true") {
            lnbPub = "local"
        }
        if (document.getElementById("pubLNBnational").accessKey == "true" || document.getElementById("pubLNBnational").title == "true") {
            lnbPub = "national"
        }
        var currentUser = Parse.User.current();
        var userId = currentUser.id;
        publisherPub = document.getElementById("publisherPInput").value
		var cIVSel = document.getElementById("currencyPInput").value
        currencyPub = cIVSel.toLowerCase();
		if(currencyPub.length > 3) {
        	currencyPub2 = cIVSel.substring(0, cIVSel.length - 4).toLowerCase();
		} else {
			currencyPub2 = currencyPub;
			}
        countryPub = document.getElementById("countryPInput").value.toLowerCase();
        campLPubPre = document.getElementById("campLPInput1").value + " " + document.getElementById("campLPInput2").value.toLowerCase();
        campLPub = campLPubPre
        campLPub2 = campLPubPre
        countryPub2 = countryPub.replace(' ', '-');
		//var ppPub1 = document.getElementById("pricePInput").value.split(" ")
		//var ppPub2 = ppPub1[0];
		//if(pricePInputVAT.checked != true) {
		//	var ppPub2 = parseFloat(ppPub2) + (parseFloat(ppPub2)/100 * 20);
		//}
        pricePub = parseFloat(document.getElementById("pricePInput").value).toFixed(2).toString();
        price = parseFloat(document.getElementById("pricePInput").value).toFixed(2).toString();
		reachPubMK = document.getElementById("reachPInput").value;
		var rpMk1 = parseInt(reachPubMK.replace(/,/g,''));
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
		reachPubMK = rpMk2.toLocaleString("en");
		if(reachPubMK.indexOf(",") == -1) {
						while (/(\d+)(\d{3})/.test(reachPubMK.toString())){
      						reachPubMK = reachPubMK.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    					}
					}		
		var parts = reachPubMK.split(",");
		if(parts.length > 2){
			reachPub2 = (parseInt(parts.join(""), 10) / Math.pow(1000, parts.length-1));
			reachPub2 += ["K", "M", "B"][parts.length-2]; 
		} else{
			reachPub2 = Math.round(parseInt(parts.join(""), 10) / Math.pow(1000, parts.length-1));
			reachPub2 += ["K", "M", "B"][parts.length-2];   
		}  
        if (price.indexOf(',') == -1 && price.indexOf('.') == -1 && currencyPub != "eur") price = price + ".00"
        if (pricePub.indexOf(',') == -1 && pricePub.indexOf('.') == -1 && currencyPub != "eur") pricePub = pricePub + ".00"
        if (price.indexOf(',') == -1 && price.indexOf('.') == -1 && currencyPub == "eur") price = price + ",00"
        if (pricePub.indexOf(',') == -1 && pricePub.indexOf('.') == -1 && currencyPub == "eur") pricePub = pricePub + ",00"
        if (!price) { } else {
            while (price.indexOf(',') != -1) price = price.replace(',', '');
            while (price.indexOf('.') != -1) price = price.replace('.', '');
            prcPub = parseInt(price);
        }
        cityPub = document.getElementById("cityPInput").value;
		if(document.getElementById("unlimitedQuantity").checked == false){
        quantityPub = parseInt(document.getElementById("quantityPInput").value);
        stockPub = 0;
		} else {		
        quantityPub = 1;
        stockPub = 1;
			}
        adTypePub = document.getElementById("adTypePInput").value;
        leadTimePub = parseInt(document.getElementById("leadTimePInput").value);
        tagsPub = document.getElementById("tagsPInput").value.toLowerCase();
        tagsPub2 = document.getElementById("tagsPInput").value.toLowerCase();
        if (!tagsPub) { } else {
            while (tagsPub.indexOf(',') != -1) tagsPub = tagsPub.replace(',', ' ');
            while (tagsPub.indexOf('.') != -1) tagsPub = tagsPub.replace('.', ' ');
            while (tagsPub.indexOf('#') != -1) tagsPub = tagsPub.replace('#', ' ');
            var splitTags1 = tagsPub.replace(/\s{2,}/g, ' ');
            splitTags2 = splitTags1.split(" ");
        }
        reachPub = parseInt(document.getElementById("reachPInput").value.split(",").join(""));
        descriptionPub = document.getElementById("descPBoxInput").value;
        logoPub = logoImg;
        statusPub = "online";
        userPub = userId;
        //throw confirmation with preview of product - allow edit or submit
        $('html').animate({ scrollTop: 100 }, 'slow');
        $('body').animate({ scrollTop: 100 }, 'slow');
        document.getElementById("previewProductBacker").style.display = "block";
        document.getElementById("previewProductContainer").style.display = "block";
        if (!logoPub) {
            var imgx = "object";
            try { imgx = "https://s3.amazonaws.com/files.parsetfss.com/341d971a-dd60-4cb5-97bb-1c043c536442/" + currentUser.attributes.logo._name.replace(/\s+/g, '%20') } catch (e) {
                imgx = "/images/exampleLogo.png"
            }
        } else {
            var imgx = "https://s3.amazonaws.com/files.parsetfss.com/341d971a-dd60-4cb5-97bb-1c043c536442/" + logoPub._name.replace(/\s+/g, '%20');
        }
		var additionalDesc = "";
		if(!!document.getElementById("tsaPInput").value) {
			additionalDesc += "<u>Reach in TSA:</u> " + document.getElementById("tsaPInput").value + "<br/>";
		} if(!!document.getElementById("avghourPInput").value) {
			additionalDesc += "<u>Average Hours:</u> " + document.getElementById("avghourPInput").value + "<br/>";
		} if(!!document.getElementById("abcPInput").value && document.getElementById("abcPInput").value != "Choose profile...") {
			additionalDesc += "<u>ABC1 Profile:</u> " + document.getElementById("abcPInput").value + "<br/>";
		} if(!!document.getElementById("genratPInput").value && document.getElementById("genratPInput").value != "Choose ratio...") {
			additionalDesc += "<u>Gender Ratio:</u> " + document.getElementById("genratPInput").value + "<br/>";
		} if(!!document.getElementById("demogPInput").value && document.getElementById("demogPInput").value != "Choose demographic...") {
			additionalDesc += "<u>Age Demographic:</u> " + document.getElementById("demogPInput").value + "<br/>";
		} if(!!document.getElementById("sourcePInput").value) {
			additionalDesc += "<u>Source:</u> " + document.getElementById("sourcePInput").value + "<br/>";
		}
		if(!!additionalDesc) {
			additionalDesc = "<div style='text-align: right; font-size: 11px;'>" + additionalDesc + "<br/></div>"
			}
        document.getElementById("previewProductUpload").innerHTML = '<div class="productInformationBox2"> <div class="pibRow1x"> <div class="pibCountry1">Country</div> <div class="pibCity1">City</div> <div class="pibLnb1">Ad Type</div> <div class="pibReach1">Reach</div> <div class="pibCost1">Cost</div> <div class="pibLeadTime1">Lead Time</div> </div> <div class="pibRow2x"> <div class="pibCountry2x" style="background-image:url(../images/countries/' + countryPub2.toLowerCase() + '.png)"></div> <div class="pibCity2">' + cityPub + '</div> <div class="pibLnb2">' + adTypePub + '</div> <div class="pibReach2">' + reachPub2 + '</div> <div class="pibCost2">' + currencyPub + ':<br/>' + pricePub + '</div> <div class="pibLeadTime2">' + leadTimePub + ' hours</div> </div> <div class="pibRow3x"> <div class="pibPublisherx" style="background-image:url(' + imgx + ')" ><img class="pibImgx" src=' + imgx + ' /><br/>' + publisherPub + '</div> <div class="pibLnbx"> ' + lnbPub + ' </div><div class="pibCampLengthx"> Length: ' + campLPub2 + ' </div><div id="sampleHtmlDesc" class="pibDescriptionx"> ' + additionalDesc + descriptionPub + ' </div> </div> <div> </div> </div>'
    }
}

function submitNewProductConfirmed() {
    var currentUser = Parse.User.current();
    var postACL = new Parse.ACL(Parse.User.current());
    postACL.setPublicReadAccess(true);
    postACL.setRoleReadAccess("Admins", true);
    postACL.setRoleWriteAccess("Admins", true);
    var products = Parse.Object.extend("Products");
    var product = new products();
    var countryPub2 = countryPub;
	var descriptionPub2 = document.getElementById("sampleHtmlDesc").innerHTML;
    while (countryPub2.indexOf(' ') != -1) countryPub2 = countryPub2.replace(' ', '-');
    splitTags2.push(countryPub.toLowerCase()); splitTags2.push(lnbPub.toLowerCase()); splitTags2.push(cityPub.toLowerCase()); splitTags2.push(adTypePub.toLowerCase());
    splitTags2.push(currencyPub2.toLowerCase()); splitTags2.push(publisherPub.toLowerCase());
    product.set("country", countryPub2);
    product.set("lnb", lnbPub);
    product.set("city", cityPub);
    product.set("tags", splitTags2);
    product.set("adType", adTypePub); 
    product.set("reach", reachPub);
    product.set("quantity", quantityPub);
    product.set("unlimitedStock", stockPub);
    product.set("description", descriptionPub2);
    product.set("publisher", publisherPub);
    ///campaignLengthToNum
    if (campLPub.indexOf('seconds') != -1) { campLPub.replace('seconds', ''); campLPub = parseInt(campLPub) }
    else if (campLPub.indexOf('second') != -1) { campLPub.replace('second', ''); campLPub = parseInt(campLPub) }
    else if (campLPub.indexOf('minutes') != -1) { campLPub.replace('minutes', ''); campLPub = parseInt(campLPub) * 60 }
    else if (campLPub.indexOf('minute') != -1) { campLPub.replace('minutes', ''); campLPub = parseInt(campLPub) * 60 }
    else if (campLPub.indexOf('hours') != -1) { campLPub.replace('hours', ''); campLPub = parseInt(campLPub) * 3600 }
    else if (campLPub.indexOf('hour') != -1) { campLPub.replace('hour', ''); campLPub = parseInt(campLPub) * 3600 }
    else if (campLPub.indexOf('days') != -1) { campLPub.replace('days', ''); campLPub = parseInt(campLPub) * 86400 }
    else if (campLPub.indexOf('day') != -1) { campLPub.replace('day', ''); campLPub = parseInt(campLPub) * 86400 }
    else if (campLPub.indexOf('weeks') != -1) { campLPub.replace('weeks', ''); campLPub = parseInt(campLPub) * 604800 }
    else if (campLPub.indexOf('week') != -1) { campLPub.replace('week', ''); campLPub = parseInt(campLPub) * 604800 }
    else if (campLPub.indexOf('months') != -1) { campLPub.replace('months', ''); campLPub = parseInt(campLPub) * 2629800 }
    else if (campLPub.indexOf('month') != -1) { campLPub.replace('month', ''); campLPub = parseInt(campLPub) * 2629800 }
    else { campLPub = parseInt(campLPub) }
    ///
    if (!logoPub) {
        var oldLogoPub = currentUser.attributes.logo;
        product.set("logo", oldLogoPub);
    } else {
        product.set("logo", logoPub);
    }
    product.set("campLength", campLPub);
    product.set("user", userPub);
    product.set("status", statusPub);
    product.set("leadTime", leadTimePub);
    product.set("currency", currencyPub);
    product.set("price", prcPub);
    product.setACL(postACL);
    product.save(null, {
        success: function (product) {
            //add to user					
            var currentUser = Parse.User.current();
            var productId = product.id
            currentUser.set("country", countryPub);
            currentUser.set("lnb", lnbPub);
            currentUser.set("city", cityPub);
            currentUser.set("tags", tagsPub2);
            currentUser.set("adType", adTypePub);
            currentUser.set("reach", reachPub);
            currentUser.set("quantity", quantityPub);
            currentUser.set("campLength", campLPub2);
            currentUser.set("description", descriptionPub);
            currentUser.set("publisher", publisherPub);
            if (!logoPub) { } else {
                currentUser.set("logo", logoPub);
            }
            currentUser.set("status", statusPub);
            currentUser.set("leadTime", leadTimePub);
            currentUser.set("currency", currencyPub);
            currentUser.set("price", pricePub);
            currentUser.save(null, {
                success: function (user, error) {
                    reOrderVal = productId;
                    clearPublisherForm()
                    closePreview()
                    advertiserPage1Load()
                    searchTaggedListings()
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
                        var error1 = "Line 615 - PublisherPage2 - Time: " + ts;
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
                var error1 = "Line 646 - PublisherPage2 - Time: " + ts;
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

function closePreview() {
    document.getElementById("previewProductBacker").style.display = "none";
    document.getElementById("previewProductContainer").style.display = "none";
}


function matchCountry(e) {
    setTimeout(function (args) {
        var place = document.getElementById('countryPInput').value;
        if (!!place) {
            service = new google.maps.places.AutocompleteService();
            var request = {
                input: place,
                types: ['(regions)'],
            };
            service.getPlacePredictions(request, countryPredictor);
        }
    }, 150)
}

function countryPredictor(predictions, status) {
    try {
        if (!!predictions[0].description) {
            var countryName1 = predictions[0].description;
            var countryName1Split = countryName1.split(",");
            document.getElementById('countryListBox1').value = countryName1Split[0];
        }
    } catch (e) { }
    try {
        if (!!predictions[1].description) {
            var countryName2 = predictions[1].description;
            var countryName2Split = countryName2.split(",");
            document.getElementById('countryListBox2').value = countryName2Split[0];
        }
    } catch (e) { }
    try {
        if (!!predictions[2].description) {
            var countryName3 = predictions[2].description;
            var countryName3Split = countryName3.split(",");
            document.getElementById('countryListBox3').value = countryName3Split[0];
        }
    } catch (e) { }
    try {
        if (!!predictions[3].description) {
            var countryName4 = predictions[3].description;
            var countryName4Split = countryName4.split(",");
            document.getElementById('countryListBox4').value = countryName4Split[0];
        }
    } catch (e) { }
}

function matchCity(e) {
    setTimeout(function (args) {
        var city = document.getElementById("cityPInput").value;
        var place = document.getElementById('countryPInput').value
        if (!!city) {
            service = new google.maps.places.AutocompleteService();
            if (!place) {
                var request = {
                    input: city,
                    types: ['(cities)'],
                };
            } else {
                var code;
                if (isoCountries2.hasOwnProperty(place)) {
                    code = isoCountries2[place];
                    var request = {
                        input: city,
                        types: ['(cities)'],
                        componentRestrictions: { country: code }
                    };
                } else {
                    var request = {
                        input: city,
                        types: ['(cities)'],
                    };
                }
            }
            service.getPlacePredictions(request, cityPredictor);
        }
    }, 150)
}

function cityPredictor(predictions, status) {
    try {
        if (!!predictions[0].description) {
            var cityName1 = predictions[0].description;
            var cityName1Split = cityName1.split(",");
            document.getElementById('cityListBox1').value = cityName1Split[0];
        }
    } catch (e) { }
    try {
        if (!!predictions[1].description) {
            var cityName2 = predictions[1].description;
            var cityName2Split = cityName2.split(",");
            document.getElementById('cityListBox2').value = cityName2Split[0];
        }
    } catch (e) { }
    try {
        if (!!predictions[2].description) {
            var cityName3 = predictions[2].description;
            var cityName3Split = cityName3.split(",");
            document.getElementById('cityListBox3').value = cityName3Split[0];
        }
    } catch (e) { }
    try {
        if (!!predictions[3].description) {
            var cityName4 = predictions[3].description;
            var cityName4Split = cityName4.split(",");
            document.getElementById('cityListBox4').value = cityName4Split[0];
        }
    } catch (e) { }
}

function clearOldCities() {
	document.getElementById('cityListBox1').value = ""
	document.getElementById('cityListBox2').value = ""
	document.getElementById('cityListBox3').value = ""
	document.getElementById('cityListBox4').value = ""
}

function stockUpdate() {
	var quantified = document.getElementById("unlimitedQuantity");
	if(quantified.checked == true) {
			document.getElementById("quantityPInput").disabled = true;
		} else {
			document.getElementById("quantityPInput").disabled = false;
			}
}

function checkForHoursValue1() {
		var hoursValue = document.getElementById("leadTimePInput").value
		if (!!hoursValue) document.getElementById("leadTimePInput").value = parseInt(hoursValue);
		if (document.getElementById("leadTimePInput").value.indexOf('NaN') != -1) document.getElementById("leadTimePInput").value = hoursValue;
		var el = document.getElementById("leadTimePInput");
		moveCursorToEnd(el)
	}
	
function checkForHoursValue2() {
		var hoursValue = document.getElementById("leadTimePInput").value
		if (!!hoursValue) document.getElementById("leadTimePInput").value = parseInt(hoursValue) + " Hours";
		if (document.getElementById("leadTimePInput").value.indexOf('NaN') != -1) document.getElementById("leadTimePInput").value = hoursValue;
		var el = document.getElementById("leadTimePInput");
		el.blur();
	}
	
function moveCursorToEnd(el,num) {
    if (typeof el.selectionStart == "number") {
		if(!!num) { el.selectionStart = num }else {
        el.selectionStart = el.selectionEnd = el.value.length;
		}
    } else if (typeof el.createTextRange != "undefined") {
        el.focus();
        var range = el.createTextRange();
        range.collapse(false);
        range.select();
    }
}

function addCommasToReach() {
	var aCR1 = document.getElementById("reachPInput").value.split(",").join("");
	var aCR2 = parseInt(aCR1);
	var newACR = aCR2.toLocaleString("en");
	if(newACR.indexOf(",") == -1) {
						while (/(\d+)(\d{3})/.test(newACR.toString())){
      						newACR = newACR.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    					}
					}		
	if(!!newACR && newACR != NaN && newACR != "NaN") document.getElementById("reachPInput").value = newACR;
	var el = document.getElementById("reachPInput");
	moveCursorToEnd(el)
}

function calculateVAT(e) {
	try{var e1 = event.charCode} catch(e) {var e1 = "error"}
	try{var e2 = event.which} catch(e) {var e2 = "error"}
	try{var e3 = event.keyCode} catch(e) {var e3 = "error"}
	try{var e4 = e.charCode} catch(e) {var e4 = "error"}
	try{var e5 = e.which} catch(e) {var e5 = "error"}
	try{var e6 = e.keyCode} catch(e) {var e6 = "error"}
    if (e1 == 46 || e2 == 46 || e3 == 46 || e4 == 46 || e5 == 46 || e6 == 46 || e1 == 8 || e2 == 8 || e3 == 8 || e4 == 8 || e5 == 8 || e6 == 8) { } else {
	var toggle = document.getElementById("pricePInputVAT");
	var cvaCR1 = document.getElementById("pricePInput").value.split(" ");
	var skipVAT = "F";
	var num1 = cvaCR1[0].length;
	if(cvaCR1[0].indexOf(".") != -1) {
	try{var cvaCR1b = cvaCR1[0].split("."); }catch(e){ var skipVAT = "F";}
	try{if(!parseInt(cvaCR1b[1])) { var skipVAT = "T"}}catch(e){ var skipVAT = "F";}}
	if(skipVAT == "F") {
		var cvaCR2 = parseFloat(cvaCR1[0]);
		if(toggle.checked == true) { var vatText1 = "exc VAT "} else { var vatText1 = "inc VAT "}
		var vatText2a = parseFloat(cvaCR2 + (cvaCR2/100 * 20));
		if(vatText2a.toString().indexOf(".") != -1) { var vatText2b = vatText2a.toFixed(2);} else {var vatText2b = vatText2a} 
		document.getElementById("pricePInput").value = cvaCR2 + " (" + vatText1 + vatText2b + ")";
		var el = document.getElementById("pricePInput");
		moveCursorToEnd(el,num1)
	}
  }
}

function switchVatAround(toggle){
		var priceInf1 = document.getElementById("pricePInput").value;
		var pIz55 = "F";
		if(!priceInf1) { var priceInf1 = document.getElementById("pricePInput").placeholder.replace("eg. ",""); pIz55 = "T";}
		var priceInf2 = priceInf1.split(" ")
		var priceInf3 = parseFloat(priceInf2[3].split(")").join())	
		if(toggle.checked == true) { var vatText1 = "exc VAT "} else { var vatText1 = "inc VAT "}
		var priceInf4 = priceInf3 + " (" + vatText1 + parseFloat(priceInf2[0]) + ")";
		if(pIz55 == "T") { 
		priceInf4 = "eg. " + priceInf4;
		document.getElementById("pricePInput").placeholder = priceInf4;
		} else {
			document.getElementById("pricePInput").value = priceInf4;
	}
}

function startPublishing1(sP) {
		if(sP.textContent == "Start") {
			sP.textContent = "Next";
			hideShowRequiredFields1()
			pubFormCount1 += 1;
		} else if(sP.textContent == "Previous") {
			 if(pubFormCount1 == 0) {
				hideShowRequiredFields1();			
				sP.textContent = "Next";
				pubFormCount1 += 1;
			} else if(pubFormCount1 == 1) {
				hideShowDescBox1()
				pubFormCount1 -= 1;
			} else if(pubFormCount1 == 2) {
				hideShowAutoFields1()
				pubFormCount1 -= 1;
			} else if(pubFormCount1 == 3) {
				hideShowImgFields1()
				pubFormCount1 -= 1;
			} 
		} else {
			if(pubFormCount1 == 1) {
				hideShowDescBox1()
				pubFormCount1 += 1;
			} else if(pubFormCount1 == 2) {
				hideShowAutoFields1()
				pubFormCount1 += 1;
			} else if(pubFormCount1 == 3) {
				hideShowImgFields1()
				pubFormCount1 += 1;
			} else if(pubFormCount1 == 4) {
				hideOptionalFields1()
				sP.textContent = "Previous";
				pubFormCount1 -= 1;
			}
	}
}

function hideShowRequiredFields1(){
	var requiredPubBoxes1 = document.getElementById("requiredPubBoxes1");
	var descPBox1 = document.getElementById("descPBox1");
	var autoPubBoxes1 = document.getElementById("autoPubBoxes1");
	var imgPubBoxes1 = document.getElementById("imgPubBoxes1");
	var optionalPubBoxes1 = document.getElementById("optionalPubBoxes1");
	if(requiredPubBoxes1.style.display == "block") { requiredPubBoxes1.style.display = "none" } else { 
	requiredPubBoxes1.style.display = "block";
	descPBox1.style.display = "none";
	autoPubBoxes1.style.display = "none";
	imgPubBoxes1.style.display = "none";
	optionalPubBoxes1.style.display = "none";
	navigating=true;
	window.location = "#Publisher:Required-Fields";
	}
}

function hideShowDescBox1(){
	var requiredPubBoxes1 = document.getElementById("requiredPubBoxes1");
	var descPBox1 = document.getElementById("descPBox1");
	var autoPubBoxes1 = document.getElementById("autoPubBoxes1");
	var imgPubBoxes1 = document.getElementById("imgPubBoxes1");
	var optionalPubBoxes1 = document.getElementById("optionalPubBoxes1");
	if(descPBox1.style.display == "block") { descPBox1.style.display = "none" } else { 
	requiredPubBoxes1.style.display = "none";
	descPBox1.style.display = "block";
	autoPubBoxes1.style.display = "none";
	imgPubBoxes1.style.display = "none";
	optionalPubBoxes1.style.display = "none";
	navigating=true;
	window.location = "#Publisher:Campaign-Description";
	}
}

function hideShowAutoFields1(){
	var requiredPubBoxes1 = document.getElementById("requiredPubBoxes1");
	var descPBox1 = document.getElementById("descPBox1");
	var autoPubBoxes1 = document.getElementById("autoPubBoxes1");
	var imgPubBoxes1 = document.getElementById("imgPubBoxes1");
	var optionalPubBoxes1 = document.getElementById("optionalPubBoxes1");
	if(autoPubBoxes1.style.display == "block") { autoPubBoxes1.style.display = "none" } else { 
	requiredPubBoxes1.style.display = "none";
	descPBox1.style.display = "none";
	autoPubBoxes1.style.display = "block";
	imgPubBoxes1.style.display = "none";
	optionalPubBoxes1.style.display = "none";
	navigating=true;
	window.location = "#Publisher:Automatic-Fields";
	}
}

function hideShowImgFields1(){
	var requiredPubBoxes1 = document.getElementById("requiredPubBoxes1");
	var descPBox1 = document.getElementById("descPBox1");
	var autoPubBoxes1 = document.getElementById("autoPubBoxes1");
	var imgPubBoxes1 = document.getElementById("imgPubBoxes1");
	var optionalPubBoxes1 = document.getElementById("optionalPubBoxes1");
	if(imgPubBoxes1.style.display == "block") { imgPubBoxes1.style.display = "none" } else { 
	requiredPubBoxes1.style.display = "none";
	descPBox1.style.display = "none";
	autoPubBoxes1.style.display = "none";
	imgPubBoxes1.style.display = "block";
	optionalPubBoxes1.style.display = "none";
	navigating=true;
	window.location = "#Publisher:Publisher-Logo";
	}
}

function hideOptionalFields1(){
	var requiredPubBoxes1 = document.getElementById("requiredPubBoxes1");
	var descPBox1 = document.getElementById("descPBox1");
	var autoPubBoxes1 = document.getElementById("autoPubBoxes1");
	var imgPubBoxes1 = document.getElementById("imgPubBoxes1");
	var optionalPubBoxes1 = document.getElementById("optionalPubBoxes1");
	if(optionalPubBoxes1.style.display == "block") { optionalPubBoxes1.style.display = "none" } else { 
	requiredPubBoxes1.style.display = "none";
	descPBox1.style.display = "none";
	autoPubBoxes1.style.display = "none";
	imgPubBoxes1.style.display = "none";
	optionalPubBoxes1.style.display = "block";
	navigating=true;
	window.location = "#Publisher:Optional-Fields";
	}
}