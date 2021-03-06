/**
 * Copyright 2013 GetHuman LLC
 * Author: Jeff Whelpley
 * Date: 8/18/13
 *
 * This module contains mappings from ISO-2 country code to country name
 * and vice versa.
 *
 * @param _ lodash
 */
module.exports = function (_) {

    var codeToName = {
        'AF': 'Afghanistan',
        'AX': 'Åland Islands',
        'AL': 'Albania',
        'DZ': 'Algeria (El Djazaïr)',
        'AS': 'American Samoa',
        'AD': 'Andorra',
        'AO': 'Angola',
        'AI': 'Anguilla',
        'AQ': 'Antarctica',
        'AG': 'Antigua and Barbuda',
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
        'BA': 'Bosnia and Herzegovina',
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
        'CG': 'Congo, Republic Of',
        'CD': 'Congo, The Democratic Republic of the (formerly Zaire)',
        'CK': 'Cook Islands',
        'CR': 'Costa Rica',
        'CI': 'CÔte D\'Ivoire (Ivory Coast)',
        'HR': 'Croatia (hrvatska)',
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
        'FO': 'Faeroe Islands',
        'FK': 'Falkland Islands (Malvinas)',
        'FJ': 'Fiji',
        'FI': 'Finland',
        'FR': 'France',
        'GF': 'French Guiana',
        'PF': 'French Polynesia',
        'TF': 'French Southern Territories',
        'GA': 'Gabon',
        'GM': 'Gambia, The',
        'GE': 'Georgia',
        'DE': 'Germany (Deutschland)',
        'GH': 'Ghana',
        'GI': 'Gibraltar',
        'GR': 'Greece',
        'GL': 'Greenland',
        'GD': 'Grenada',
        'GP': 'Guadeloupe',
        'GU': 'Guam',
        'GT': 'Guatemala',
        'GN': 'Guinea',
        'GW': 'Guinea-bissau',
        'GY': 'Guyana',
        'HT': 'Haiti',
        'HM': 'Heard Island and Mcdonald Islands',
        'HN': 'Honduras',
        'HK': 'Hong Kong (Special Administrative Region of China)',
        'HU': 'Hungary',
        'IS': 'Iceland',
        'IN': 'India',
        'ID': 'Indonesia',
        'IR': 'Iran (Islamic Republic of Iran)',
        'IQ': 'Iraq',
        'IE': 'Ireland',
        'IL': 'Israel',
        'IT': 'Italy',
        'JM': 'Jamaica',
        'JP': 'Japan',
        'JO': 'Jordan (Hashemite Kingdom of Jordan)',
        'KZ': 'Kazakhstan',
        'KE': 'Kenya',
        'KI': 'Kiribati',
        'KP': 'Korea (Democratic Peoples Republic pf [North] Korea)',
        'KR': 'Korea (Republic of [South] Korea)',
        'KW': 'Kuwait',
        'KG': 'Kyrgyzstan',
        'LA': 'Lao People\'s Democratic Republic',
        'LV': 'Latvia',
        'LB': 'Lebanon',
        'LS': 'Lesotho',
        'LR': 'Liberia',
        'LY': 'Libya (Libyan Arab Jamahirya)',
        'LI': 'Liechtenstein (Fürstentum Liechtenstein)',
        'LT': 'Lithuania',
        'LU': 'Luxembourg',
        'MO': 'Macao (Special Administrative Region of China)',
        'MK': 'Macedonia (Former Yugoslav Republic of Macedonia)',
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
        'FM': 'Micronesia (Federated States of Micronesia)',
        'MD': 'Moldova',
        'MC': 'Monaco',
        'MN': 'Mongolia',
        'MS': 'Montserrat',
        'MA': 'Morocco',
        'MZ': 'Mozambique (Moçambique)',
        'MM': 'Myanmar (formerly Burma)',
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
        'PS': 'Palestinian Territories',
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
        'RE': 'RÉunion',
        'RO': 'Romania',
        'RU': 'Russian Federation',
        'RW': 'Rwanda',
        'SH': 'Saint Helena',
        'KN': 'Saint Kitts and Nevis',
        'LC': 'Saint Lucia',
        'PM': 'Saint Pierre and Miquelon',
        'VC': 'Saint Vincent and the Grenadines',
        'WS': 'Samoa (formerly Western Samoa)',
        'SM': 'San Marino (Republic of)',
        'ST': 'Sao Tome and Principe',
        'SA': 'Saudi Arabia (Kingdom of Saudi Arabia)',
        'SN': 'Senegal',
        'CS': 'Serbia and Montenegro (formerly Yugoslavia)',
        'SC': 'Seychelles',
        'SL': 'Sierra Leone',
        'SG': 'Singapore',
        'SK': 'Slovakia (Slovak Republic)',
        'SI': 'Slovenia',
        'SB': 'Solomon Islands',
        'SO': 'Somalia',
        'ZA': 'South Africa (zuid Afrika)',
        'GS': 'South Georgia and the South Sandwich Islands',
        'ES': 'Spain (españa)',
        'LK': 'Sri Lanka',
        'SD': 'Sudan',
        'SR': 'Suriname',
        'SJ': 'Svalbard and Jan Mayen',
        'SZ': 'Swaziland',
        'SE': 'Sweden',
        'CH': 'Switzerland (Confederation of Helvetia)',
        'SY': 'Syrian Arab Republic',
        'TW': 'Taiwan ("Chinese Taipei" for IOC)',
        'TJ': 'Tajikistan',
        'TZ': 'Tanzania',
        'TH': 'Thailand',
        'TL': 'Timor-Leste (formerly East Timor)',
        'TG': 'Togo',
        'TK': 'Tokelau',
        'TO': 'Tonga',
        'TT': 'Trinidad and Tobago',
        'TN': 'Tunisia',
        'TR': 'Turkey',
        'TM': 'Turkmenistan',
        'TC': 'Turks and Caicos Islands',
        'TV': 'Tuvalu',
        'UG': 'Uganda',
        'UA': 'Ukraine',
        'AE': 'United Arab Emirates',
        'GB': 'United Kingdom (Great Britain)',
        'US': 'United States',
        'UM': 'United States Minor Outlying Islands',
        'UY': 'Uruguay',
        'UZ': 'Uzbekistan',
        'VU': 'Vanuatu',
        'VA': 'Vatican City (Holy See)',
        'VE': 'Venezuela',
        'VN': 'Viet Nam',
        'VG': 'Virgin Islands, British',
        'VI': 'Virgin Islands, U.S.',
        'WF': 'Wallis and Futuna',
        'EH': 'Western Sahara (formerly Spanish Sahara)',
        'YE': 'Yemen (Arab Republic)',
        'ZM': 'Zambia',
        'ZW': 'Zimbabwe'
    };

    var nameToCode = {};
    _.each(codeToName, function (name, code) {
        nameToCode[name] = code;
    });

    return {
        codeToName: codeToName,
        nameToCode: nameToCode
    };
};

