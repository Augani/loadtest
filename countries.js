const fs = require("fs");
const g =
  "Afghanistan,Albania,Algeria,Andorra,Angola,Antigua & Deps,Argentina,Armenia,Australia,Austria,Azerbaijan,Bahamas,Bahrain,Bangladesh,Barbados,Belarus,Belgium,Belize,Benin,Bhutan,Bolivia,Bosnia Herzegovina,Botswana,Brazil,Brunei,Bulgaria,Burkina,Burundi,Cambodia,Cameroon,Canada,Cape Verde,Central African Rep,Chad,Chile,China,Colombia,Comoros,Congo,Congo {Democratic Rep},Costa Rica,Croatia,Cuba,Cyprus,Czech Republic,Denmark,Djibouti,Dominica,Dominican Republic,East Timor,Ecuador,Egypt,El Salvador,Equatorial Guinea,Eritrea,Estonia,Ethiopia,Fiji,Finland,France,Gabon,Gambia,Georgia,Germany,Ghana,Greece,Grenada,Guatemala,Guinea,Guinea-Bissau,Guyana,Haiti,Honduras,Hungary,Iceland,India,Indonesia,Iran,Iraq,Ireland {Republic},Israel,Italy,Ivory Coast,Jamaica,Japan,Jordan,Kazakhstan,Kenya,Kiribati,Korea North,Korea South,Kosovo,Kuwait,Kyrgyzstan,Laos,Latvia,Lebanon,Lesotho,Liberia,Libya,Liechtenstein,Lithuania,Luxembourg,Macedonia,Madagascar,Malawi,Malaysia,Maldives,Mali,Malta,Marshall Islands,Mauritania,Mauritius,Mexico,Micronesia,Moldova,Monaco,Mongolia,Montenegro,Morocco,Mozambique,Myanmar, {Burma},Namibia,Nauru,Nepal,Netherlands,New Zealand,Nicaragua,Niger,Nigeria,Norway,Oman,Pakistan,Palau,Panama,Papua New Guinea,Paraguay,Peru,Philippines,Poland,Portugal,Qatar,Romania,Russian Federation,Rwanda,St Kitts & Nevis,St Lucia,Saint Vincent & the Grenadines,Samoa,San Marino,Sao Tome & Principe,Saudi Arabia,Senegal,Serbia,Seychelles,Sierra Leone,Singapore,Slovakia,Slovenia,Solomon Islands,Somalia,South Africa,South Sudan,Spain,Sri Lanka,Sudan,Suriname,Swaziland,Sweden,Switzerland,Syria,Taiwan,Tajikistan,Tanzania,Thailand,Togo,Tonga,Trinidad & Tobago,Tunisia,Turkey,Turkmenistan,Tuvalu,Uganda,Ukraine,United Arab Emirates,United Kingdom,United States,Uruguay,Uzbekistan,Vanuatu,Vatican City,Venezuela,Vietnam,Yemen,Zambia,Zimbabwe";

let countries = g.split(",");
console.log(countries);

// let x = [
//   {
//     cty_code: "AI",
//     cty_name: "ANGUILLA",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+1264",
//   },
//   {
//     cty_code: "AN",
//     cty_name: "NETHERLANDS ANTILLES",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+599",
//   },
//   {
//     cty_code: "AQ",
//     cty_name: "ANTARTICA",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+672",
//   },
//   {
//     cty_code: "AS",
//     cty_name: "AMERICAN SAMOA",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+1684",
//   },
//   {
//     cty_code: "BM",
//     cty_name: "BERMUDA",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+1441",
//   },
//   {
//     cty_code: "CC",
//     cty_name: "COCOS (KEELING) ISLANDS",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+61",
//   },
//   {
//     cty_code: "CK",
//     cty_name: "COOK ISLANDS",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+682",
//   },
//   {
//     cty_code: "CS",
//     cty_name: "SERBIA AND MONTENENGRO",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: null,
//   },
//   {
//     cty_code: "CX",
//     cty_name: "CHRISTMAS ISLAND",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+61",
//   },
//   {
//     cty_code: "EH",
//     cty_name: "WESTERN SAHARA",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: null,
//   },
//   {
//     cty_code: "FK",
//     cty_name: "FALKLANDS ISLANDS (MALVINAS)",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+500",
//   },
//   {
//     cty_code: "FO",
//     cty_name: "FAROE ISLANDS",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+298",
//   },
//   {
//     cty_code: "GF",
//     cty_name: "FRENCH GUIANA",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+594",
//   },
//   {
//     cty_code: "GI",
//     cty_name: "GIBRALTAR",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+350",
//   },
//   {
//     cty_code: "GL",
//     cty_name: "GREENLAND",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+299",
//   },
//   {
//     cty_code: "GP",
//     cty_name: "GUADELOUPE",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+590",
//   },
//   {
//     cty_code: "GS",
//     cty_name: "SOUTH GEORGIA SANDWICH ISLANDS",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+500",
//   },
//   {
//     cty_code: "GU",
//     cty_name: "GUAM",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+1671",
//   },
//   {
//     cty_code: "HM",
//     cty_name: "HEARD AND MCDONALD ISLANDS",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: null,
//   },
//   {
//     cty_code: "IO",
//     cty_name: "BRIT. IND. OCEAN TERRITORY",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+246",
//   },
//   {
//     cty_code: "KN",
//     cty_name: "ST KITTS AND NEVIS",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+1869",
//   },
//   {
//     cty_code: "KY",
//     cty_name: "CAYMAN ISLANDS",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+ 345",
//   },
//   {
//     cty_code: "AL",
//     cty_name: "ALBANIE",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/albania_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+355",
//   },
//   {
//     cty_code: "AD",
//     cty_name: "ANDORRA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/andorra_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+376",
//   },
//   {
//     cty_code: "AO",
//     cty_name: "ANGOLA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/angola_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+244",
//   },
//   {
//     cty_code: "AR",
//     cty_name: "ARGENTINA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/argentina_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+54",
//   },
//   {
//     cty_code: "AM",
//     cty_name: "ARMENIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/armenia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+374",
//   },
//   {
//     cty_code: "AW",
//     cty_name: "ARUBA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/aruba_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+297",
//   },
//   {
//     cty_code: "AT",
//     cty_name: "AUSTRIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/austria_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+43",
//   },
//   {
//     cty_code: "AZ",
//     cty_name: "AZERBAIJAN",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/azerbaijan_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+994",
//   },
//   {
//     cty_code: "BS",
//     cty_name: "BAHAMAS",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/bahamas_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+1242",
//   },
//   {
//     cty_code: "BD",
//     cty_name: "BANGLADESH",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/bangladesh_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+880",
//   },
//   {
//     cty_code: "BB",
//     cty_name: "BARBADOS",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/barbados_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+1246",
//   },
//   {
//     cty_code: "BE",
//     cty_name: "BELGIUM",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/belgium_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+32",
//   },
//   {
//     cty_code: "BZ",
//     cty_name: "BELIZE",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/belize_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+501",
//   },
//   {
//     cty_code: "BJ",
//     cty_name: "BENIN",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/benin_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+229",
//   },
//   {
//     cty_code: "BO",
//     cty_name: "BOLIVIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/bolivia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+591",
//   },
//   {
//     cty_code: "BW",
//     cty_name: "BOTSWANA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/botswana_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+267",
//   },
//   {
//     cty_code: "BV",
//     cty_name: "BOUVET ISLAND",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/bouvet-island_cty.svg",
//     cty_upd_rem: null,
//     call_code: null,
//   },
//   {
//     cty_code: "BR",
//     cty_name: "BRAZIL",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/brazil_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+55",
//   },
//   {
//     cty_code: "BG",
//     cty_name: "BULGARIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/bulgaria_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+359",
//   },
//   {
//     cty_code: "BF",
//     cty_name: "BURKINA FASO",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/burkina-faso_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+226",
//   },
//   {
//     cty_code: "BI",
//     cty_name: "BURUNDI",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/burundi_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+257",
//   },
//   {
//     cty_code: "CM",
//     cty_name: "CAMEROON",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/cameroon_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+237",
//   },
//   {
//     cty_code: "CA",
//     cty_name: "CANADA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/canada_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+1",
//   },
//   {
//     cty_code: "CV",
//     cty_name: "CAPE VERDE",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/cape-verde_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+238",
//   },
//   {
//     cty_code: "CL",
//     cty_name: "CHILE",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/chile_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+56",
//   },
//   {
//     cty_code: "CN",
//     cty_name: "CHINA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/china_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+86",
//   },
//   {
//     cty_code: "CO",
//     cty_name: "COLOMBIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/colombia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+57",
//   },
//   {
//     cty_code: "CG",
//     cty_name: "CONGO",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/congo_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+242",
//   },
//   {
//     cty_code: "CR",
//     cty_name: "COSTA RICA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/costa-rica_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+506",
//   },
//   {
//     cty_code: "HR",
//     cty_name: "CROATIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/croatia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+385",
//   },
//   {
//     cty_code: "CU",
//     cty_name: "CUBA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/cuba_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+53",
//   },
//   {
//     cty_code: "CZ",
//     cty_name: "CZECH REPUBLIC",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/czech-repubic_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+420",
//   },
//   {
//     cty_code: "DK",
//     cty_name: "DENMARK",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/denmark_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+45",
//   },
//   {
//     cty_code: "DM",
//     cty_name: "DOMINICA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/dominica_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+1767",
//   },
//   {
//     cty_code: "DO",
//     cty_name: "DOMINICAN REPUBLIC",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/dominican-republic_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+1849",
//   },
//   {
//     cty_code: "EC",
//     cty_name: "ECUADOR",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/ecuador_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+593",
//   },
//   {
//     cty_code: "EG",
//     cty_name: "EGYPT",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/egypt_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+20",
//   },
//   {
//     cty_code: "GQ",
//     cty_name: "EQUATORIAL GUINEA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/equitorial-guinea_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+240",
//   },
//   {
//     cty_code: "ER",
//     cty_name: "ERITREA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/eritrea_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+291",
//   },
//   {
//     cty_code: "ET",
//     cty_name: "ETHIOPIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/ethiopia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+251",
//   },
//   {
//     cty_code: "FJ",
//     cty_name: "FIJI",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/fiji_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+679",
//   },
//   {
//     cty_code: "FR",
//     cty_name: "FRANCE",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/france_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+33",
//   },
//   {
//     cty_code: "GA",
//     cty_name: "GABON",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/gabon_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+241",
//   },
//   {
//     cty_code: "GM",
//     cty_name: "GAMBIA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/gambia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+220",
//   },
//   {
//     cty_code: "DE",
//     cty_name: "GERMANY",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/germany_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+49",
//   },
//   {
//     cty_code: "GR",
//     cty_name: "GREECE",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/greece_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+30",
//   },
//   {
//     cty_code: "GD",
//     cty_name: "GRENADA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/grenada_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+1473",
//   },
//   {
//     cty_code: "GN",
//     cty_name: "GUINEA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/guinea_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+224",
//   },
//   {
//     cty_code: "GW",
//     cty_name: "GUINEA BISSAU",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/guinea-bissau_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+245",
//   },
//   {
//     cty_code: "HT",
//     cty_name: "HAITI",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/haiti_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+509",
//   },
//   {
//     cty_code: "HN",
//     cty_name: "HONDURAS",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/honduras_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+504",
//   },
//   {
//     cty_code: "HU",
//     cty_name: "HUNGARY",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/hungary_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+36",
//   },
//   {
//     cty_code: "IS",
//     cty_name: "ICELAND",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/iceland_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+354",
//   },
//   {
//     cty_code: "IN",
//     cty_name: "INDIA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/india_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+91",
//   },
//   {
//     cty_code: "IR",
//     cty_name: "IRAN",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/iran_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+98",
//   },
//   {
//     cty_code: "IQ",
//     cty_name: "IRAQ",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/iraq_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+964",
//   },
//   {
//     cty_code: "IE",
//     cty_name: "IRELAND",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/ireland_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+353",
//   },
//   {
//     cty_code: "IT",
//     cty_name: "ITALY",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/italy_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+39",
//   },
//   {
//     cty_code: "CI",
//     cty_name: "COTE D IVOIRE",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/ivory-coast_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+225",
//   },
//   {
//     cty_code: "JM",
//     cty_name: "JAMAICA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/jamaica_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+1876",
//   },
//   {
//     cty_code: "JO",
//     cty_name: "JORDAN",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/jordan_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+962",
//   },
//   {
//     cty_code: "KZ",
//     cty_name: "KAZAKHSTAN",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/kazakhstan_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+77",
//   },
//   {
//     cty_code: "KI",
//     cty_name: "KIRIBATI",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/kiribati_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+686",
//   },
//   {
//     cty_code: "KW",
//     cty_name: "KUWAIT",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/kuwait_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+965",
//   },
//   {
//     cty_code: "LB",
//     cty_name: "LEBANON",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/lebanon_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+961",
//   },
//   {
//     cty_code: "LS",
//     cty_name: "KINGDOM OF LESOTHO",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/lesotho_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+266",
//   },
//   {
//     cty_code: "LR",
//     cty_name: "LIBERIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/liberia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+231",
//   },
//   {
//     cty_code: "LT",
//     cty_name: "LITHUANIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/lithuania_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+370",
//   },
//   {
//     cty_code: "FM",
//     cty_name: "MICRONESIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/micronesia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+691",
//   },
//   {
//     cty_code: "LC",
//     cty_name: "SAINT LUCIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/saint-lucia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+1758",
//   },
//   {
//     cty_code: "KR",
//     cty_name: "KOREA, REPUBLIC OF",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/south-korea_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+82",
//   },
//   {
//     cty_code: "ES",
//     cty_name: "SPAIN",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/spain_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+34",
//   },
//   {
//     cty_code: "CH",
//     cty_name: "SWITZERLAND",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/switzerland_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+41",
//   },
//   {
//     cty_code: "AE",
//     cty_name: "UNITED ARAB EMIRATES",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/uae_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+971",
//   },
//   {
//     cty_code: "GB",
//     cty_name: "UNITED KINGDOM",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/uk_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+44",
//   },
//   {
//     cty_code: "HS",
//     cty_name: "HOLY SEE (VATICAN CITY)",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/holy-see_cty.svg",
//     cty_upd_rem: null,
//     call_code: null,
//   },
//   {
//     cty_code: "MK",
//     cty_name: "MACEDONIA (F.Y.R)",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+389",
//   },
//   {
//     cty_code: "MO",
//     cty_name: "MACAU",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+853",
//   },
//   {
//     cty_code: "MP",
//     cty_name: "NORTHERN MARIANA ISLANDS",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+1670",
//   },
//   {
//     cty_code: "MQ",
//     cty_name: "MARTINIQUE",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+596",
//   },
//   {
//     cty_code: "MS",
//     cty_name: "MONSERRAT",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+1664",
//   },
//   {
//     cty_code: "NC",
//     cty_name: "NEW CALEDONIA",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+687",
//   },
//   {
//     cty_code: "NF",
//     cty_name: "NORFOLK ISLAND",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+672",
//   },
//   {
//     cty_code: "NT",
//     cty_name: "NEUTRAL ZONE",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: null,
//   },
//   {
//     cty_code: "NU",
//     cty_name: "NIUE",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+683",
//   },
//   {
//     cty_code: "PF",
//     cty_name: "FRENCH POLYNESIA",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+689",
//   },
//   {
//     cty_code: "PM",
//     cty_name: "ST PIERRE ET MIQUELON",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+508",
//   },
//   {
//     cty_code: "PN",
//     cty_name: "PITCAIRN",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+872",
//   },
//   {
//     cty_code: "PR",
//     cty_name: "PUERTO RICO",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+1939",
//   },
//   {
//     cty_code: "RE",
//     cty_name: "REUNION",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+262",
//   },
//   {
//     cty_code: "SH",
//     cty_name: "ST. HELENA",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+290",
//   },
//   {
//     cty_code: "SJ",
//     cty_name: "SVALBARD AND JAN MEYEN ISL.",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+47",
//   },
//   {
//     cty_code: "TC",
//     cty_name: "TURKS AND CAICOS ISLANDS",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+1649",
//   },
//   {
//     cty_code: "TF",
//     cty_name: "FRENCH SOUTHERN TERRITORIES",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: null,
//   },
//   {
//     cty_code: "TK",
//     cty_name: "TOKELAU",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+690",
//   },
//   {
//     cty_code: "TW",
//     cty_name: "TAIWAN",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+886",
//   },
//   {
//     cty_code: "UK",
//     cty_name: "UNKNOWN",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: null,
//   },
//   {
//     cty_code: "UM",
//     cty_name: "U.S. MINOR OUTLYING ISLANDS",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: null,
//   },
//   {
//     cty_code: "UN",
//     cty_name: "UNKNOWN",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: null,
//   },
//   {
//     cty_code: "UNK",
//     cty_name: "UNKNOWN",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: null,
//   },
//   {
//     cty_code: "VA",
//     cty_name: "VATICAN",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+379",
//   },
//   {
//     cty_code: "VG",
//     cty_name: "BRITISH VIRGIN ISLANDS",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+1284",
//   },
//   {
//     cty_code: "WF",
//     cty_name: "WALLIS AND FUTUNA ISLANDS",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+681",
//   },
//   {
//     cty_code: "XK",
//     cty_name: "KOSOVO",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: null,
//   },
//   {
//     cty_code: "YT",
//     cty_name: "MAYOTTE",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+262",
//   },
//   {
//     cty_code: "YU",
//     cty_name: "YUGOSLAVIA",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: null,
//   },
//   {
//     cty_code: "AF",
//     cty_name: "AFGHANISTAN",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/afghanistan_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+93",
//   },
//   {
//     cty_code: "DZ",
//     cty_name: "ALGERIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/algeria_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+213",
//   },
//   {
//     cty_code: "AG",
//     cty_name: "ANTIGUA & BARBUDA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/antigua-and-barbuda_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+1268",
//   },
//   {
//     cty_code: "AU",
//     cty_name: "AUSTRALIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/australia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+61",
//   },
//   {
//     cty_code: "BH",
//     cty_name: "BAHRAIN",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/bahrain_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+973",
//   },
//   {
//     cty_code: "ZR",
//     cty_name: "ZAIRE",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/congo_cty.svg",
//     cty_upd_rem: null,
//     call_code: null,
//   },
//   {
//     cty_code: "SV",
//     cty_name: "EL SALVADOR",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/el-salvador_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+503",
//   },
//   {
//     cty_code: "LV",
//     cty_name: "LATVIA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/latvia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+371",
//   },
//   {
//     cty_code: "LY",
//     cty_name: "LIBYA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/libya_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+218",
//   },
//   {
//     cty_code: "MG",
//     cty_name: "MADAGASCAR",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/madagascar_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+261",
//   },
//   {
//     cty_code: "MW",
//     cty_name: "REPUBLIC OF MALAWI",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/malawi_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+265",
//   },
//   {
//     cty_code: "MV",
//     cty_name: "MALDIVES",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/maldives_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+960",
//   },
//   {
//     cty_code: "ML",
//     cty_name: "MALI",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/mali_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+223",
//   },
//   {
//     cty_code: "MT",
//     cty_name: "MALTA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/malta_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+356",
//   },
//   {
//     cty_code: "MR",
//     cty_name: "MAURITANIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/mauritania_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+222",
//   },
//   {
//     cty_code: "MU",
//     cty_name: "MAURITIUS",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/mauritius_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+230",
//   },
//   {
//     cty_code: "MX",
//     cty_name: "MEXICO",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/mexico_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+52",
//   },
//   {
//     cty_code: "MC",
//     cty_name: "MONACO",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/monaco_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+377",
//   },
//   {
//     cty_code: "MN",
//     cty_name: "MONGOLIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/mongolia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+976",
//   },
//   {
//     cty_code: "MA",
//     cty_name: "MOROCCO",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/morocco_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+212",
//   },
//   {
//     cty_code: "MZ",
//     cty_name: "MOZAMBIQUE",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/mozambique_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+258",
//   },
//   {
//     cty_code: "NA",
//     cty_name: "NAMIBIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/namibia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+264",
//   },
//   {
//     cty_code: "NR",
//     cty_name: "NAURU",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/nauru_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+674",
//   },
//   {
//     cty_code: "NP",
//     cty_name: "NEPAL",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/nepal_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+977",
//   },
//   {
//     cty_code: "NL",
//     cty_name: "NETHERLANDS",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/netherlands_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+31",
//   },
//   {
//     cty_code: "NI",
//     cty_name: "NICARAGUA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/nicaragua_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+505",
//   },
//   {
//     cty_code: "NE",
//     cty_name: "NIGER",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/niger_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+227",
//   },
//   {
//     cty_code: "NO",
//     cty_name: "NORWAY",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/norway_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+47",
//   },
//   {
//     cty_code: "OM",
//     cty_name: "OMAN",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/oman_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+968",
//   },
//   {
//     cty_code: "PW",
//     cty_name: "PALAU",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/palau_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+680",
//   },
//   {
//     cty_code: "PA",
//     cty_name: "PANAMA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/panama_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+507",
//   },
//   {
//     cty_code: "PY",
//     cty_name: "PARAGUAY",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/paraguay_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+595",
//   },
//   {
//     cty_code: "PE",
//     cty_name: "PERU",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/peru_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+51",
//   },
//   {
//     cty_code: "PH",
//     cty_name: "PHILLIPINES",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/philippines_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+63",
//   },
//   {
//     cty_code: "PL",
//     cty_name: "POLAND",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/poland_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+48",
//   },
//   {
//     cty_code: "QA",
//     cty_name: "QATAR",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/qatar_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+974",
//   },
//   {
//     cty_code: "RO",
//     cty_name: "ROMANIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/romania_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+40",
//   },
//   {
//     cty_code: "RW",
//     cty_name: "RWANDESE REPUBLIC",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/rwanda_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+250",
//   },
//   {
//     cty_code: "VC",
//     cty_name: "SAINT VINCENT & THE GRENADINES",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/saint-vicent-and-the-grenadines_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+1784",
//   },
//   {
//     cty_code: "WS",
//     cty_name: "SAMOA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/samoa_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+685",
//   },
//   {
//     cty_code: "ST",
//     cty_name: "SAO TOME AND PRINCIPE",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/sao-tome-and-principe_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+239",
//   },
//   {
//     cty_code: "SN",
//     cty_name: "SENEGAL",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/senegal_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+221",
//   },
//   {
//     cty_code: "RS",
//     cty_name: "SERBIA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/serbia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+381",
//   },
//   {
//     cty_code: "SC",
//     cty_name: "SEYCHELLES",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/seychelles_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+248",
//   },
//   {
//     cty_code: "SG",
//     cty_name: "SINGAPORE",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/singapore_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+65",
//   },
//   {
//     cty_code: "SK",
//     cty_name: "SLOVAKIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/slovakia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+421",
//   },
//   {
//     cty_code: "SI",
//     cty_name: "SLOVENIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/slovenia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+386",
//   },
//   {
//     cty_code: "SO",
//     cty_name: "SOMALI DEMOCRATIC REPUBLIC",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/somalia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+252",
//   },
//   {
//     cty_code: "SR",
//     cty_name: "SURINAME",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/suriname_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+597",
//   },
//   {
//     cty_code: "SE",
//     cty_name: "SWEDEN",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/sweden_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+46",
//   },
//   {
//     cty_code: "TJ",
//     cty_name: "TAJIKISTAN",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/tajikistan_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+992",
//   },
//   {
//     cty_code: "TZ",
//     cty_name: "UNITED REPUBLIC OF TANZANIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/tanzania_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+255",
//   },
//   {
//     cty_code: "TH",
//     cty_name: "THAILAND",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/thailand_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+66",
//   },
//   {
//     cty_code: "TG",
//     cty_name: "TOGO",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/togo_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+228",
//   },
//   {
//     cty_code: "TO",
//     cty_name: "TONGA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/tonga_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+676",
//   },
//   {
//     cty_code: "TN",
//     cty_name: "TUNISIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/tunisia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+216",
//   },
//   {
//     cty_code: "TR",
//     cty_name: "TURKEY",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/turkey_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+90",
//   },
//   {
//     cty_code: "TM",
//     cty_name: "TURKMENISTAN",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/turkmenistan_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+993",
//   },
//   {
//     cty_code: "TV",
//     cty_name: "TUVALU",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/tuvalu_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+688",
//   },
//   {
//     cty_code: "UA",
//     cty_name: "UKRAINE",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/ukraine_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+380",
//   },
//   {
//     cty_code: "UY",
//     cty_name: "URUGUAY",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/uruguay_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+598",
//   },
//   {
//     cty_code: "US",
//     cty_name: "UNITED STATES",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/usa_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+1",
//   },
//   {
//     cty_code: "VU",
//     cty_name: "VANUATU",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/vanuatu_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+678",
//   },
//   {
//     cty_code: "VE",
//     cty_name: "VENEZUELA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/venezuela_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+58",
//   },
//   {
//     cty_code: "VN",
//     cty_name: "VIETNAM",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/vietnam_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+84",
//   },
//   {
//     cty_code: "YD",
//     cty_name: "DEMOCRATIC YEMEN",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/yemen_cty.svg",
//     cty_upd_rem: null,
//     call_code: null,
//   },
//   {
//     cty_code: "YE",
//     cty_name: "YEMEN",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/yemen_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+967",
//   },
//   {
//     cty_code: "ZM",
//     cty_name: "REPUBLIC OF ZAMBIA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/zambia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+260",
//   },
//   {
//     cty_code: "GH",
//     cty_name: "GHANA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/ghana_cty.svg",
//     cty_upd_rem: "A",
//     call_code: "+233",
//   },
//   {
//     cty_code: "BY",
//     cty_name: "BELARUS",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/belarus_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+375",
//   },
//   {
//     cty_code: "BT",
//     cty_name: "BHUTAN",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/bhutan_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+975",
//   },
//   {
//     cty_code: "BA",
//     cty_name: "BOSNIA & HERZEGOVINA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/bosnia-and-herzegovina_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+387",
//   },
//   {
//     cty_code: "BN",
//     cty_name: "BRUNEI DARUSSALAM",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/brunei-darussalam_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+673",
//   },
//   {
//     cty_code: "KH",
//     cty_name: "CAMBODIA -KAMPUCHEA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/cambodia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+855",
//   },
//   {
//     cty_code: "CF",
//     cty_name: "CENTRAL AFRICAN REPUBLIC",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/central-african-republic_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+236",
//   },
//   {
//     cty_code: "TD",
//     cty_name: "CHAD",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/chad_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+235",
//   },
//   {
//     cty_code: "KM",
//     cty_name: "FEDERAL ISLM. REP OF COMOROS",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/comoros_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+269",
//   },
//   {
//     cty_code: "CY",
//     cty_name: "CYPRUS",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/cyprus_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+357",
//   },
//   {
//     cty_code: "DJ",
//     cty_name: "REPUBLIC OF DJIBOUTI",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/djibouti_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+253",
//   },
//   {
//     cty_code: "CD",
//     cty_name: "DEMOCRATIC REPUBLIC OF CONGO",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/dr-congo_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+243",
//   },
//   {
//     cty_code: "EE",
//     cty_name: "ESTONIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/estonia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+372",
//   },
//   {
//     cty_code: "SZ",
//     cty_name: "KINGDOM OF SWAZILAND",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/eswatini_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+268",
//   },
//   {
//     cty_code: "FI",
//     cty_name: "FINLAND",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/finland_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+358",
//   },
//   {
//     cty_code: "GE",
//     cty_name: "GEORGIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/georgia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+995",
//   },
//   {
//     cty_code: "GT",
//     cty_name: "GUATEMALA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/guatemala_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+502",
//   },
//   {
//     cty_code: "GY",
//     cty_name: "GUYANA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/guyana_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+595",
//   },
//   {
//     cty_code: "HK",
//     cty_name: "HONG KONG",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/hong-kong_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+852",
//   },
//   {
//     cty_code: "ID",
//     cty_name: "INDONESIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/indonesia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+62",
//   },
//   {
//     cty_code: "IL",
//     cty_name: "ISRAEL",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/israel_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+972",
//   },
//   {
//     cty_code: "JP",
//     cty_name: "JAPAN",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/jampa_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+81",
//   },
//   {
//     cty_code: "KG",
//     cty_name: "KYRGYZSTAN",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/kyrgyzstan_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+996",
//   },
//   {
//     cty_code: "LI",
//     cty_name: "LIECHTENSTEIN",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/liechtenstein_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+423",
//   },
//   {
//     cty_code: "LU",
//     cty_name: "LUXEMBOURG",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/luxembourg_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+352",
//   },
//   {
//     cty_code: "MY",
//     cty_name: "MALAYSIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/malaysia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+60",
//   },
//   {
//     cty_code: "MH",
//     cty_name: "MARSHALL ISLANDS",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/marshall-islands_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+692",
//   },
//   {
//     cty_code: "MD",
//     cty_name: "MOLDOVA, REP. OF",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/moldova_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+373",
//   },
//   {
//     cty_code: "ME",
//     cty_name: "MONTENEGRO.",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/montenegro_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+382",
//   },
//   {
//     cty_code: "MM",
//     cty_name: "BURMA - MYANMA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/myanmar_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+95",
//   },
//   {
//     cty_code: "NZ",
//     cty_name: "NEW ZEALAND",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/new-zealand_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+64",
//   },
//   {
//     cty_code: "KP",
//     cty_name: "KOREA, DEMOCRATIC",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/north-korea_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+850",
//   },
//   {
//     cty_code: "PK",
//     cty_name: "PAKISTAN",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/pakistan_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+92",
//   },
//   {
//     cty_code: "PG",
//     cty_name: "PAPUA NEW GUINEA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/papua-new-guinea_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+675",
//   },
//   {
//     cty_code: "PT",
//     cty_name: "PORTUGAL",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/portugal_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+351",
//   },
//   {
//     cty_code: "RU",
//     cty_name: "RUSSIAN FEDERATION",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/russia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+7",
//   },
//   {
//     cty_code: "SM",
//     cty_name: "SAN MARINO",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/san-marino_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+378",
//   },
//   {
//     cty_code: "SA",
//     cty_name: "SAUDI ARABIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/saudi-arabia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+966",
//   },
//   {
//     cty_code: "SL",
//     cty_name: "SIERRA LEONE",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/sierra-leone_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+232",
//   },
//   {
//     cty_code: "SB",
//     cty_name: "SOLOMON ISLANDS",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/solomon-islands_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+677",
//   },
//   {
//     cty_code: "LK",
//     cty_name: "SRI LANKA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/sri-lanka_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+94",
//   },
//   {
//     cty_code: "SD",
//     cty_name: "SUDAN",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/sudan_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+249",
//   },
//   {
//     cty_code: "SY",
//     cty_name: "SYRIAN ARAB REPUBLIC",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/syria_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+963",
//   },
//   {
//     cty_code: "TP",
//     cty_name: "EAST TIMOR",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/timor-leste_cty.svg",
//     cty_upd_rem: null,
//     call_code: null,
//   },
//   {
//     cty_code: "TT",
//     cty_name: "TRINIDAD AND TOBAGO",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/trinidad-and-tobago_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+1868",
//   },
//   {
//     cty_code: "UG",
//     cty_name: "REPUBLIC OF UGANDA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/uganda_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+256",
//   },
//   {
//     cty_code: "UZ",
//     cty_name: "UZBEKISTAN",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/uzbekistan_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+998",
//   },
//   {
//     cty_code: "VI",
//     cty_name: "VIRGIN ISLANDS U.S",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/virgin-islands_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+1340",
//   },
//   {
//     cty_code: "ZW",
//     cty_name: "REPUBLIC OF ZIMBABWE",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/zimbabwe_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+263",
//   },
//   {
//     cty_code: "LA",
//     cty_name: "LAO,PEOPLE'S DEMOCRATIC REPUBL",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/laos_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+856",
//   },
//   {
//     cty_code: "ZA",
//     cty_name: "SOUTH AFRICA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/south-africa_cty.svg",
//     cty_upd_rem: "A",
//     call_code: "+27",
//   },
//   {
//     cty_code: "KE",
//     cty_name: "KENYA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/kenya_cty.svg",
//     cty_upd_rem: "A",
//     call_code: "+254",
//   },
//   {
//     cty_code: "NG",
//     cty_name: "NIGERIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/nigeria_cty.svg",
//     cty_upd_rem: "A",
//     call_code: "+234",
//   },
// ];

// let z = [];
// let y = countries.map((h) => {
//   let v = x.filter((b) => h.toUpperCase() == b.cty_name);
//   if (v.length) {
//     return v[0];
//   } else {
//     z.push(h);
//   }
// });

// // write to file the contents of y and write to another file the contents of z

// fs.writeFile("y.json", JSON.stringify(y), (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });

// fs.writeFile("z.json", JSON.stringify(z), (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });

// let as = [
//   {
//     cty_code: "AF",
//     cty_name: "AFGHANISTAN",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/afghanistan_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+93",
//   },
//   null,
//   {
//     cty_code: "DZ",
//     cty_name: "ALGERIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/algeria_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+213",
//   },
//   {
//     cty_code: "AD",
//     cty_name: "ANDORRA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/andorra_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+376",
//   },
//   {
//     cty_code: "AO",
//     cty_name: "ANGOLA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/angola_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+244",
//   },
//   null,
//   {
//     cty_code: "AR",
//     cty_name: "ARGENTINA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/argentina_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+54",
//   },
//   {
//     cty_code: "AM",
//     cty_name: "ARMENIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/armenia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+374",
//   },
//   {
//     cty_code: "AU",
//     cty_name: "AUSTRALIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/australia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+61",
//   },
//   {
//     cty_code: "AT",
//     cty_name: "AUSTRIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/austria_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+43",
//   },
//   {
//     cty_code: "AZ",
//     cty_name: "AZERBAIJAN",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/azerbaijan_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+994",
//   },
//   {
//     cty_code: "BS",
//     cty_name: "BAHAMAS",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/bahamas_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+1242",
//   },
//   {
//     cty_code: "BH",
//     cty_name: "BAHRAIN",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/bahrain_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+973",
//   },
//   {
//     cty_code: "BD",
//     cty_name: "BANGLADESH",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/bangladesh_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+880",
//   },
//   {
//     cty_code: "BB",
//     cty_name: "BARBADOS",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/barbados_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+1246",
//   },
//   {
//     cty_code: "BY",
//     cty_name: "BELARUS",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/belarus_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+375",
//   },
//   {
//     cty_code: "BE",
//     cty_name: "BELGIUM",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/belgium_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+32",
//   },
//   {
//     cty_code: "BZ",
//     cty_name: "BELIZE",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/belize_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+501",
//   },
//   {
//     cty_code: "BJ",
//     cty_name: "BENIN",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/benin_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+229",
//   },
//   {
//     cty_code: "BT",
//     cty_name: "BHUTAN",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/bhutan_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+975",
//   },
//   {
//     cty_code: "BO",
//     cty_name: "BOLIVIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/bolivia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+591",
//   },
//   null,
//   {
//     cty_code: "BW",
//     cty_name: "BOTSWANA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/botswana_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+267",
//   },
//   {
//     cty_code: "BR",
//     cty_name: "BRAZIL",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/brazil_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+55",
//   },
//   null,
//   {
//     cty_code: "BG",
//     cty_name: "BULGARIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/bulgaria_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+359",
//   },
//   null,
//   {
//     cty_code: "BI",
//     cty_name: "BURUNDI",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/burundi_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+257",
//   },
//   null,
//   {
//     cty_code: "CM",
//     cty_name: "CAMEROON",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/cameroon_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+237",
//   },
//   {
//     cty_code: "CA",
//     cty_name: "CANADA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/canada_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+1",
//   },
//   {
//     cty_code: "CV",
//     cty_name: "CAPE VERDE",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/cape-verde_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+238",
//   },
//   null,
//   {
//     cty_code: "TD",
//     cty_name: "CHAD",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/chad_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+235",
//   },
//   {
//     cty_code: "CL",
//     cty_name: "CHILE",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/chile_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+56",
//   },
//   {
//     cty_code: "CN",
//     cty_name: "CHINA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/china_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+86",
//   },
//   {
//     cty_code: "CO",
//     cty_name: "COLOMBIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/colombia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+57",
//   },
//   null,
//   {
//     cty_code: "CG",
//     cty_name: "CONGO",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/congo_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+242",
//   },
//   null,
//   {
//     cty_code: "CR",
//     cty_name: "COSTA RICA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/costa-rica_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+506",
//   },
//   {
//     cty_code: "HR",
//     cty_name: "CROATIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/croatia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+385",
//   },
//   {
//     cty_code: "CU",
//     cty_name: "CUBA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/cuba_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+53",
//   },
//   {
//     cty_code: "CY",
//     cty_name: "CYPRUS",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/cyprus_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+357",
//   },
//   {
//     cty_code: "CZ",
//     cty_name: "CZECH REPUBLIC",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/czech-repubic_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+420",
//   },
//   {
//     cty_code: "DK",
//     cty_name: "DENMARK",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/denmark_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+45",
//   },
//   null,
//   {
//     cty_code: "DM",
//     cty_name: "DOMINICA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/dominica_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+1767",
//   },
//   {
//     cty_code: "DO",
//     cty_name: "DOMINICAN REPUBLIC",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/dominican-republic_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+1849",
//   },
//   {
//     cty_code: "TP",
//     cty_name: "EAST TIMOR",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/timor-leste_cty.svg",
//     cty_upd_rem: null,
//     call_code: null,
//   },
//   {
//     cty_code: "EC",
//     cty_name: "ECUADOR",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/ecuador_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+593",
//   },
//   {
//     cty_code: "EG",
//     cty_name: "EGYPT",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/egypt_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+20",
//   },
//   {
//     cty_code: "SV",
//     cty_name: "EL SALVADOR",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/el-salvador_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+503",
//   },
//   {
//     cty_code: "GQ",
//     cty_name: "EQUATORIAL GUINEA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/equitorial-guinea_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+240",
//   },
//   {
//     cty_code: "ER",
//     cty_name: "ERITREA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/eritrea_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+291",
//   },
//   {
//     cty_code: "EE",
//     cty_name: "ESTONIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/estonia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+372",
//   },
//   {
//     cty_code: "ET",
//     cty_name: "ETHIOPIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/ethiopia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+251",
//   },
//   {
//     cty_code: "FJ",
//     cty_name: "FIJI",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/fiji_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+679",
//   },
//   {
//     cty_code: "FI",
//     cty_name: "FINLAND",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/finland_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+358",
//   },
//   {
//     cty_code: "FR",
//     cty_name: "FRANCE",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/france_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+33",
//   },
//   {
//     cty_code: "GA",
//     cty_name: "GABON",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/gabon_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+241",
//   },
//   {
//     cty_code: "GM",
//     cty_name: "GAMBIA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/gambia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+220",
//   },
//   {
//     cty_code: "GE",
//     cty_name: "GEORGIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/georgia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+995",
//   },
//   {
//     cty_code: "DE",
//     cty_name: "GERMANY",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/germany_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+49",
//   },
//   {
//     cty_code: "GH",
//     cty_name: "GHANA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/ghana_cty.svg",
//     cty_upd_rem: "A",
//     call_code: "+233",
//   },
//   {
//     cty_code: "GR",
//     cty_name: "GREECE",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/greece_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+30",
//   },
//   {
//     cty_code: "GD",
//     cty_name: "GRENADA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/grenada_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+1473",
//   },
//   {
//     cty_code: "GT",
//     cty_name: "GUATEMALA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/guatemala_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+502",
//   },
//   {
//     cty_code: "GN",
//     cty_name: "GUINEA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/guinea_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+224",
//   },
//   null,
//   {
//     cty_code: "GY",
//     cty_name: "GUYANA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/guyana_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+595",
//   },
//   {
//     cty_code: "HT",
//     cty_name: "HAITI",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/haiti_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+509",
//   },
//   {
//     cty_code: "HN",
//     cty_name: "HONDURAS",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/honduras_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+504",
//   },
//   {
//     cty_code: "HU",
//     cty_name: "HUNGARY",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/hungary_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+36",
//   },
//   {
//     cty_code: "IS",
//     cty_name: "ICELAND",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/iceland_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+354",
//   },
//   {
//     cty_code: "IN",
//     cty_name: "INDIA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/india_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+91",
//   },
//   {
//     cty_code: "ID",
//     cty_name: "INDONESIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/indonesia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+62",
//   },
//   {
//     cty_code: "IR",
//     cty_name: "IRAN",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/iran_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+98",
//   },
//   {
//     cty_code: "IQ",
//     cty_name: "IRAQ",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/iraq_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+964",
//   },
//   null,
//   {
//     cty_code: "IL",
//     cty_name: "ISRAEL",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/israel_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+972",
//   },
//   {
//     cty_code: "IT",
//     cty_name: "ITALY",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/italy_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+39",
//   },
//   null,
//   {
//     cty_code: "JM",
//     cty_name: "JAMAICA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/jamaica_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+1876",
//   },
//   {
//     cty_code: "JP",
//     cty_name: "JAPAN",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/jampa_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+81",
//   },
//   {
//     cty_code: "JO",
//     cty_name: "JORDAN",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/jordan_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+962",
//   },
//   {
//     cty_code: "KZ",
//     cty_name: "KAZAKHSTAN",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/kazakhstan_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+77",
//   },
//   {
//     cty_code: "KE",
//     cty_name: "KENYA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/kenya_cty.svg",
//     cty_upd_rem: "A",
//     call_code: "+254",
//   },
//   {
//     cty_code: "KI",
//     cty_name: "KIRIBATI",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/kiribati_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+686",
//   },
//   null,
//   null,
//   {
//     cty_code: "XK",
//     cty_name: "KOSOVO",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: null,
//   },
//   {
//     cty_code: "KW",
//     cty_name: "KUWAIT",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/kuwait_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+965",
//   },
//   {
//     cty_code: "KG",
//     cty_name: "KYRGYZSTAN",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/kyrgyzstan_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+996",
//   },
//   null,
//   {
//     cty_code: "LV",
//     cty_name: "LATVIA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/latvia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+371",
//   },
//   {
//     cty_code: "LB",
//     cty_name: "LEBANON",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/lebanon_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+961",
//   },
//   null,
//   {
//     cty_code: "LR",
//     cty_name: "LIBERIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/liberia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+231",
//   },
//   {
//     cty_code: "LY",
//     cty_name: "LIBYA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/libya_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+218",
//   },
//   {
//     cty_code: "LI",
//     cty_name: "LIECHTENSTEIN",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/liechtenstein_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+423",
//   },
//   {
//     cty_code: "LT",
//     cty_name: "LITHUANIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/lithuania_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+370",
//   },
//   {
//     cty_code: "LU",
//     cty_name: "LUXEMBOURG",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/luxembourg_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+352",
//   },
//   null,
//   {
//     cty_code: "MG",
//     cty_name: "MADAGASCAR",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/madagascar_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+261",
//   },
//   null,
//   {
//     cty_code: "MY",
//     cty_name: "MALAYSIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/malaysia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+60",
//   },
//   {
//     cty_code: "MV",
//     cty_name: "MALDIVES",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/maldives_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+960",
//   },
//   {
//     cty_code: "ML",
//     cty_name: "MALI",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/mali_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+223",
//   },
//   {
//     cty_code: "MT",
//     cty_name: "MALTA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/malta_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+356",
//   },
//   {
//     cty_code: "MH",
//     cty_name: "MARSHALL ISLANDS",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/marshall-islands_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+692",
//   },
//   {
//     cty_code: "MR",
//     cty_name: "MAURITANIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/mauritania_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+222",
//   },
//   {
//     cty_code: "MU",
//     cty_name: "MAURITIUS",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/mauritius_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+230",
//   },
//   {
//     cty_code: "MX",
//     cty_name: "MEXICO",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/mexico_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+52",
//   },
//   {
//     cty_code: "FM",
//     cty_name: "MICRONESIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/micronesia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+691",
//   },
//   null,
//   {
//     cty_code: "MC",
//     cty_name: "MONACO",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/monaco_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+377",
//   },
//   {
//     cty_code: "MN",
//     cty_name: "MONGOLIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/mongolia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+976",
//   },
//   null,
//   {
//     cty_code: "MA",
//     cty_name: "MOROCCO",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/morocco_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+212",
//   },
//   {
//     cty_code: "MZ",
//     cty_name: "MOZAMBIQUE",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/mozambique_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+258",
//   },
//   null,
//   null,
//   {
//     cty_code: "NA",
//     cty_name: "NAMIBIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/namibia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+264",
//   },
//   {
//     cty_code: "NR",
//     cty_name: "NAURU",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/nauru_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+674",
//   },
//   {
//     cty_code: "NP",
//     cty_name: "NEPAL",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/nepal_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+977",
//   },
//   {
//     cty_code: "NL",
//     cty_name: "NETHERLANDS",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/netherlands_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+31",
//   },
//   {
//     cty_code: "NZ",
//     cty_name: "NEW ZEALAND",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/new-zealand_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+64",
//   },
//   {
//     cty_code: "NI",
//     cty_name: "NICARAGUA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/nicaragua_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+505",
//   },
//   {
//     cty_code: "NE",
//     cty_name: "NIGER",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/niger_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+227",
//   },
//   {
//     cty_code: "NG",
//     cty_name: "NIGERIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/nigeria_cty.svg",
//     cty_upd_rem: "A",
//     call_code: "+234",
//   },
//   {
//     cty_code: "NO",
//     cty_name: "NORWAY",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/norway_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+47",
//   },
//   {
//     cty_code: "OM",
//     cty_name: "OMAN",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/oman_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+968",
//   },
//   {
//     cty_code: "PK",
//     cty_name: "PAKISTAN",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/pakistan_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+92",
//   },
//   {
//     cty_code: "PW",
//     cty_name: "PALAU",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/palau_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+680",
//   },
//   {
//     cty_code: "PA",
//     cty_name: "PANAMA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/panama_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+507",
//   },
//   {
//     cty_code: "PG",
//     cty_name: "PAPUA NEW GUINEA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/papua-new-guinea_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+675",
//   },
//   {
//     cty_code: "PY",
//     cty_name: "PARAGUAY",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/paraguay_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+595",
//   },
//   {
//     cty_code: "PE",
//     cty_name: "PERU",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/peru_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+51",
//   },
//   null,
//   {
//     cty_code: "PL",
//     cty_name: "POLAND",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/poland_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+48",
//   },
//   {
//     cty_code: "PT",
//     cty_name: "PORTUGAL",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/portugal_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+351",
//   },
//   {
//     cty_code: "QA",
//     cty_name: "QATAR",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/qatar_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+974",
//   },
//   {
//     cty_code: "RO",
//     cty_name: "ROMANIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/romania_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+40",
//   },
//   {
//     cty_code: "RU",
//     cty_name: "RUSSIAN FEDERATION",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/russia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+7",
//   },
//   null,
//   null,
//   null,
//   {
//     cty_code: "VC",
//     cty_name: "SAINT VINCENT & THE GRENADINES",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/saint-vicent-and-the-grenadines_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+1784",
//   },
//   {
//     cty_code: "WS",
//     cty_name: "SAMOA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/samoa_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+685",
//   },
//   {
//     cty_code: "SM",
//     cty_name: "SAN MARINO",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/san-marino_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+378",
//   },
//   null,
//   {
//     cty_code: "SA",
//     cty_name: "SAUDI ARABIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/saudi-arabia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+966",
//   },
//   {
//     cty_code: "SN",
//     cty_name: "SENEGAL",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/senegal_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+221",
//   },
//   {
//     cty_code: "RS",
//     cty_name: "SERBIA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/serbia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+381",
//   },
//   {
//     cty_code: "SC",
//     cty_name: "SEYCHELLES",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/seychelles_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+248",
//   },
//   {
//     cty_code: "SL",
//     cty_name: "SIERRA LEONE",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/sierra-leone_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+232",
//   },
//   {
//     cty_code: "SG",
//     cty_name: "SINGAPORE",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/singapore_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+65",
//   },
//   {
//     cty_code: "SK",
//     cty_name: "SLOVAKIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/slovakia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+421",
//   },
//   {
//     cty_code: "SI",
//     cty_name: "SLOVENIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/slovenia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+386",
//   },
//   {
//     cty_code: "SB",
//     cty_name: "SOLOMON ISLANDS",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/solomon-islands_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+677",
//   },
//   null,
//   {
//     cty_code: "ZA",
//     cty_name: "SOUTH AFRICA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/south-africa_cty.svg",
//     cty_upd_rem: "A",
//     call_code: "+27",
//   },
//   null,
//   {
//     cty_code: "ES",
//     cty_name: "SPAIN",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/spain_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+34",
//   },
//   {
//     cty_code: "LK",
//     cty_name: "SRI LANKA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/sri-lanka_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+94",
//   },
//   {
//     cty_code: "SD",
//     cty_name: "SUDAN",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/sudan_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+249",
//   },
//   {
//     cty_code: "SR",
//     cty_name: "SURINAME",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/suriname_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+597",
//   },
//   null,
//   {
//     cty_code: "SE",
//     cty_name: "SWEDEN",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/sweden_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+46",
//   },
//   {
//     cty_code: "CH",
//     cty_name: "SWITZERLAND",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/switzerland_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+41",
//   },
//   null,
//   {
//     cty_code: "TW",
//     cty_name: "TAIWAN",
//     cty_flag_name: null,
//     cty_upd_rem: null,
//     call_code: "+886",
//   },
//   {
//     cty_code: "TJ",
//     cty_name: "TAJIKISTAN",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/tajikistan_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+992",
//   },
//   null,
//   {
//     cty_code: "TH",
//     cty_name: "THAILAND",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/thailand_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+66",
//   },
//   {
//     cty_code: "TG",
//     cty_name: "TOGO",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/togo_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+228",
//   },
//   {
//     cty_code: "TO",
//     cty_name: "TONGA",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/tonga_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+676",
//   },
//   null,
//   {
//     cty_code: "TN",
//     cty_name: "TUNISIA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/tunisia_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+216",
//   },
//   {
//     cty_code: "TR",
//     cty_name: "TURKEY",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/turkey_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+90",
//   },
//   {
//     cty_code: "TM",
//     cty_name: "TURKMENISTAN",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/turkmenistan_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+993",
//   },
//   {
//     cty_code: "TV",
//     cty_name: "TUVALU",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/tuvalu_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+688",
//   },
//   null,
//   {
//     cty_code: "UA",
//     cty_name: "UKRAINE",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/ukraine_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+380",
//   },
//   {
//     cty_code: "AE",
//     cty_name: "UNITED ARAB EMIRATES",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/uae_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+971",
//   },
//   {
//     cty_code: "GB",
//     cty_name: "UNITED KINGDOM",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/uk_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+44",
//   },
//   {
//     cty_code: "US",
//     cty_name: "UNITED STATES",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/usa_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+1",
//   },
//   {
//     cty_code: "UY",
//     cty_name: "URUGUAY",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/uruguay_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+598",
//   },
//   {
//     cty_code: "UZ",
//     cty_name: "UZBEKISTAN",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/uzbekistan_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+998",
//   },
//   {
//     cty_code: "VU",
//     cty_name: "VANUATU",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/vanuatu_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+678",
//   },
//   null,
//   {
//     cty_code: "VE",
//     cty_name: "VENEZUELA",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/venezuela_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+58",
//   },
//   {
//     cty_code: "VN",
//     cty_name: "VIETNAM",
//     cty_flag_name:
//       "https://newsuat.blob.core.windows.net/flags/vietnam_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+84",
//   },
//   {
//     cty_code: "YE",
//     cty_name: "YEMEN",
//     cty_flag_name: "https://newsuat.blob.core.windows.net/flags/yemen_cty.svg",
//     cty_upd_rem: null,
//     call_code: "+967",
//   },
//   null,
//   null,
// ];

// const asRight = as.filter((a) => a !== null);

// fs.writeFileSync("as.json", JSON.stringify(asRight));

fs.writeFileSync("countriesv.js", JSON.stringify(countries));
