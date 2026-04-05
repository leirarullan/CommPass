export type ResourceCategory = "Education" | "Technology" | "Community Support";

export interface CommunityReview {
  id: string;
  author: string;
  text: string;
  date: string;
  approved: boolean;
  verified?: boolean;
  verifiedName?: string;
}

export interface Resource {
  id: string;
  name: string;
  description: string;
  category: ResourceCategory;
  lat: number;
  lng: number;
  address: string;
  distance?: string;
  isUCLinks?: boolean;
  isCommunitySubmitted?: boolean;
  communityNote?: string;
  images?: string[];
  reviews?: CommunityReview[];
}

export interface ZipData {
  zip: string;
  lat: number;
  lng: number;
  city: string;
  percentile: number;
  pollutionFactors: string[];
  accessIssues: string[];
}

export const ZIP_DATA: Record<string, ZipData> = {
  // Los Angeles area
  "90011": { zip: "90011", lat: 33.9925, lng: -118.2551, city: "Los Angeles", percentile: 95, pollutionFactors: ["diesel particulate matter", "toxic releases", "traffic density"], accessIssues: ["limited park access", "few community centers", "digital divide"] },
  "90001": { zip: "90001", lat: 33.9425, lng: -118.2551, city: "Los Angeles", percentile: 93, pollutionFactors: ["diesel particulate matter", "traffic density", "toxic releases"], accessIssues: ["limited park access", "few community centers", "digital divide"] },
  "90044": { zip: "90044", lat: 33.9525, lng: -118.2911, city: "Los Angeles", percentile: 91, pollutionFactors: ["traffic density", "diesel emissions", "PM2.5"], accessIssues: ["limited tutoring", "few libraries", "digital divide"] },
  "90255": { zip: "90255", lat: 33.9753, lng: -118.2120, city: "Huntington Park", percentile: 94, pollutionFactors: ["toxic releases", "traffic density", "diesel emissions"], accessIssues: ["overcrowded schools", "limited park access", "language barriers"] },
  "90280": { zip: "90280", lat: 33.9472, lng: -118.1876, city: "South Gate", percentile: 89, pollutionFactors: ["diesel emissions", "traffic density", "lead exposure"], accessIssues: ["limited after-school programs", "few libraries", "digital divide"] },
  // Fresno area
  "93706": { zip: "93706", lat: 36.7103, lng: -119.8093, city: "Fresno", percentile: 98, pollutionFactors: ["pesticide use", "PM2.5 concentrations", "groundwater threats"], accessIssues: ["lack of broadband", "limited tutoring", "few libraries"] },
  "93702": { zip: "93702", lat: 36.7378, lng: -119.7714, city: "Fresno", percentile: 96, pollutionFactors: ["pesticide use", "PM2.5", "drinking water contaminants"], accessIssues: ["lack of broadband", "limited ESL programs", "few libraries"] },
  "93721": { zip: "93721", lat: 36.7352, lng: -119.7871, city: "Fresno", percentile: 94, pollutionFactors: ["PM2.5", "pesticide use", "cleanup sites"], accessIssues: ["limited tutoring", "digital divide", "overcrowded schools"] },
  // San Diego area
  "92113": { zip: "92113", lat: 32.6901, lng: -117.1189, city: "San Diego", percentile: 90, pollutionFactors: ["traffic pollution", "hazardous waste facilities", "ozone levels"], accessIssues: ["language barriers", "underfunded schools", "limited after-school programs"] },
  "91950": { zip: "91950", lat: 32.6781, lng: -117.0992, city: "National City", percentile: 88, pollutionFactors: ["traffic pollution", "diesel emissions", "hazardous waste"], accessIssues: ["language barriers", "limited after-school programs", "underfunded schools"] },
  "92114": { zip: "92114", lat: 32.7074, lng: -117.0530, city: "San Diego", percentile: 85, pollutionFactors: ["traffic pollution", "ozone levels", "toxic releases"], accessIssues: ["language barriers", "limited free programs", "digital divide"] },
  "91911": { zip: "91911", lat: 32.6189, lng: -117.0542, city: "Chula Vista", percentile: 80, pollutionFactors: ["traffic pollution", "ozone levels", "hazardous waste"], accessIssues: ["language barriers", "limited tutoring", "few libraries"] },
  "92173": { zip: "92173", lat: 32.5560, lng: -117.0590, city: "San Ysidro", percentile: 92, pollutionFactors: ["traffic pollution", "diesel emissions", "border pollution"], accessIssues: ["language barriers", "limited resources", "digital divide"] },
  "92093": { zip: "92093", lat: 32.8801, lng: -117.2340, city: "La Jolla", percentile: 45, pollutionFactors: ["traffic density", "ozone levels"], accessIssues: ["high housing costs", "limited public transit"] },
  // Oakland area
  "94601": { zip: "94601", lat: 37.7752, lng: -122.2141, city: "Oakland", percentile: 88, pollutionFactors: ["lead exposure risk", "diesel emissions", "cleanup sites"], accessIssues: ["digital divide", "limited ESL programs", "overcrowded schools"] },
  "94603": { zip: "94603", lat: 37.7380, lng: -122.1780, city: "Oakland", percentile: 90, pollutionFactors: ["diesel emissions", "PM2.5", "toxic releases"], accessIssues: ["limited tutoring", "overcrowded schools", "digital divide"] },
  "94621": { zip: "94621", lat: 37.7380, lng: -122.2100, city: "Oakland", percentile: 87, pollutionFactors: ["diesel emissions", "cleanup sites", "lead exposure"], accessIssues: ["limited ESL programs", "digital divide", "few community centers"] },
  // San Francisco
  "94124": { zip: "94124", lat: 37.7308, lng: -122.3886, city: "San Francisco", percentile: 86, pollutionFactors: ["diesel emissions", "PM2.5", "cleanup sites"], accessIssues: ["high housing costs", "digital divide", "limited free programs"] },
  "94134": { zip: "94134", lat: 37.7191, lng: -122.4130, city: "San Francisco", percentile: 82, pollutionFactors: ["traffic density", "PM2.5", "air toxics"], accessIssues: ["high housing costs", "language barriers", "limited free programs"] },
  // San Jose area
  "95116": { zip: "95116", lat: 37.3496, lng: -121.8481, city: "San Jose", percentile: 82, pollutionFactors: ["groundwater contamination", "air toxics", "traffic density"], accessIssues: ["high housing costs", "limited free programs", "language access"] },
  "95112": { zip: "95112", lat: 37.3520, lng: -121.8890, city: "San Jose", percentile: 79, pollutionFactors: ["groundwater contamination", "traffic density", "air toxics"], accessIssues: ["high housing costs", "language access", "limited free programs"] },
  // Riverside / Inland Empire
  "92501": { zip: "92501", lat: 33.9533, lng: -117.3962, city: "Riverside", percentile: 86, pollutionFactors: ["PM2.5", "ozone", "traffic density"], accessIssues: ["limited public transit", "few libraries", "digital divide"] },
  "92411": { zip: "92411", lat: 34.1083, lng: -117.3259, city: "San Bernardino", percentile: 91, pollutionFactors: ["PM2.5", "ozone", "diesel emissions"], accessIssues: ["limited tutoring", "underfunded schools", "digital divide"] },
  // Sacramento
  "95823": { zip: "95823", lat: 38.5138, lng: -121.4430, city: "Sacramento", percentile: 83, pollutionFactors: ["diesel emissions", "PM2.5", "cleanup sites"], accessIssues: ["limited ESL programs", "digital divide", "few community centers"] },
  // Stockton
  "95206": { zip: "95206", lat: 37.9243, lng: -121.2769, city: "Stockton", percentile: 89, pollutionFactors: ["pesticide use", "PM2.5", "groundwater threats"], accessIssues: ["limited tutoring", "lack of broadband", "language barriers"] },
  // Bakersfield
  "93307": { zip: "93307", lat: 35.3230, lng: -118.9960, city: "Bakersfield", percentile: 93, pollutionFactors: ["PM2.5", "pesticide use", "ozone"], accessIssues: ["limited public transit", "few libraries", "lack of broadband"] },
  // Compton
  "90220": { zip: "90220", lat: 33.8958, lng: -118.2201, city: "Compton", percentile: 92, pollutionFactors: ["diesel emissions", "traffic density", "lead exposure"], accessIssues: ["limited park access", "underfunded schools", "few community centers"] },
  // Pomona
  "91766": { zip: "91766", lat: 34.0585, lng: -117.7493, city: "Pomona", percentile: 84, pollutionFactors: ["traffic density", "groundwater contamination", "PM2.5"], accessIssues: ["limited tutoring", "language barriers", "digital divide"] },
  // Del Mar
  "92014": { zip: "92014", lat: 32.9595, lng: -117.2653, city: "Del Mar", percentile: 25, pollutionFactors: ["traffic density", "ozone levels"], accessIssues: ["high housing costs", "limited public transit"] },
  // Carmel-by-the-Sea
  "93921": { zip: "93921", lat: 36.5552, lng: -121.9233, city: "Carmel-by-the-Sea", percentile: 20, pollutionFactors: ["ozone levels", "wildfire risk"], accessIssues: ["high housing costs", "limited public transit", "few free programs"] },
  // Santa Barbara
  "93101": { zip: "93101", lat: 34.4208, lng: -119.6982, city: "Santa Barbara", percentile: 55, pollutionFactors: ["traffic density", "ozone levels", "wildfire risk"], accessIssues: ["high housing costs", "limited affordable childcare", "language barriers"] },
  // Malibu
  "90265": { zip: "90265", lat: 34.0259, lng: -118.7798, city: "Malibu", percentile: 30, pollutionFactors: ["wildfire risk", "ozone levels"], accessIssues: ["high housing costs", "limited public transit", "few free programs"] },
  // Palo Alto
  "94301": { zip: "94301", lat: 37.4419, lng: -122.1430, city: "Palo Alto", percentile: 35, pollutionFactors: ["traffic density", "air toxics"], accessIssues: ["high housing costs", "limited affordable childcare"] },
  // Cupertino
  "95014": { zip: "95014", lat: 37.3230, lng: -122.0322, city: "Cupertino", percentile: 32, pollutionFactors: ["traffic density", "ozone levels"], accessIssues: ["high housing costs", "language access", "limited free programs"] },
  // Los Altos
  "94022": { zip: "94022", lat: 37.3852, lng: -122.1141, city: "Los Altos", percentile: 22, pollutionFactors: ["traffic density", "ozone levels"], accessIssues: ["high housing costs", "limited public transit"] },
  // Irvine
  "92618": { zip: "92618", lat: 33.6846, lng: -117.7712, city: "Irvine", percentile: 40, pollutionFactors: ["traffic density", "ozone levels", "air toxics"], accessIssues: ["high housing costs", "limited public transit", "language access"] },
  // Folsom
  "95630": { zip: "95630", lat: 38.6780, lng: -121.1761, city: "Folsom", percentile: 28, pollutionFactors: ["ozone levels", "wildfire risk"], accessIssues: ["limited public transit", "few free programs"] },
  // Rocklin
  "95765": { zip: "95765", lat: 38.7907, lng: -121.2358, city: "Rocklin", percentile: 26, pollutionFactors: ["ozone levels", "wildfire risk"], accessIssues: ["limited public transit", "few free programs"] },
  // Saratoga
  "95070": { zip: "95070", lat: 37.2638, lng: -122.0230, city: "Saratoga", percentile: 24, pollutionFactors: ["traffic density", "ozone levels"], accessIssues: ["high housing costs", "limited public transit", "few free programs"] },
  // Orange County
  "92701": { zip: "92701", lat: 33.7455, lng: -117.8677, city: "Santa Ana", percentile: 93, pollutionFactors: ["traffic density", "diesel emissions", "toxic releases"], accessIssues: ["overcrowded schools", "language barriers", "limited park access"] },
  "92705": { zip: "92705", lat: 33.7700, lng: -117.8311, city: "Santa Ana", percentile: 88, pollutionFactors: ["traffic density", "air toxics", "diesel emissions"], accessIssues: ["language barriers", "limited tutoring", "digital divide"] },
  "92703": { zip: "92703", lat: 33.7530, lng: -117.8890, city: "Santa Ana", percentile: 91, pollutionFactors: ["traffic density", "diesel emissions", "PM2.5"], accessIssues: ["overcrowded schools", "language barriers", "limited park access"] },
  "92804": { zip: "92804", lat: 33.8200, lng: -117.9620, city: "Anaheim", percentile: 82, pollutionFactors: ["traffic density", "diesel emissions", "PM2.5"], accessIssues: ["language barriers", "limited tutoring", "overcrowded schools"] },
  "92802": { zip: "92802", lat: 33.8085, lng: -117.9228, city: "Anaheim", percentile: 78, pollutionFactors: ["traffic density", "diesel emissions", "air toxics"], accessIssues: ["language barriers", "limited free programs", "digital divide"] },
  "92832": { zip: "92832", lat: 33.8703, lng: -117.9253, city: "Fullerton", percentile: 65, pollutionFactors: ["traffic density", "air toxics", "ozone levels"], accessIssues: ["limited affordable housing", "language barriers"] },
  "92840": { zip: "92840", lat: 33.7678, lng: -117.9981, city: "Garden Grove", percentile: 80, pollutionFactors: ["traffic density", "diesel emissions", "air toxics"], accessIssues: ["language barriers", "limited tutoring", "digital divide"] },
  "90630": { zip: "90630", lat: 33.8447, lng: -118.0395, city: "Cypress", percentile: 50, pollutionFactors: ["traffic density", "ozone levels"], accessIssues: ["limited public transit", "few free programs"] },
  "92683": { zip: "92683", lat: 33.7514, lng: -117.9939, city: "Westminster", percentile: 72, pollutionFactors: ["traffic density", "diesel emissions", "air toxics"], accessIssues: ["language barriers", "limited tutoring", "digital divide"] },
  "92647": { zip: "92647", lat: 33.7175, lng: -117.9981, city: "Huntington Beach", percentile: 45, pollutionFactors: ["traffic density", "ozone levels"], accessIssues: ["high housing costs", "limited public transit"] },
  // Long Beach
  "90813": { zip: "90813", lat: 33.7838, lng: -118.1875, city: "Long Beach", percentile: 91, pollutionFactors: ["diesel emissions", "port pollution", "traffic density"], accessIssues: ["overcrowded schools", "limited park access", "digital divide"] },
  "90805": { zip: "90805", lat: 33.8636, lng: -118.1892, city: "Long Beach", percentile: 87, pollutionFactors: ["diesel emissions", "traffic density", "PM2.5"], accessIssues: ["limited tutoring", "digital divide", "few libraries"] },
  // Inglewood / Hawthorne
  "90301": { zip: "90301", lat: 33.9617, lng: -118.3531, city: "Inglewood", percentile: 85, pollutionFactors: ["traffic density", "diesel emissions", "air toxics"], accessIssues: ["limited park access", "underfunded schools", "digital divide"] },
  "90250": { zip: "90250", lat: 33.9164, lng: -118.3526, city: "Hawthorne", percentile: 83, pollutionFactors: ["traffic density", "diesel emissions", "air toxics"], accessIssues: ["limited tutoring", "underfunded schools", "digital divide"] },
  // Pasadena / Glendale
  "91101": { zip: "91101", lat: 34.1478, lng: -118.1445, city: "Pasadena", percentile: 60, pollutionFactors: ["traffic density", "ozone levels", "air toxics"], accessIssues: ["high housing costs", "limited affordable childcare"] },
  "91201": { zip: "91201", lat: 34.1703, lng: -118.2600, city: "Glendale", percentile: 62, pollutionFactors: ["traffic density", "air toxics", "ozone levels"], accessIssues: ["high housing costs", "language barriers"] },
  // Oxnard / Ventura
  "93030": { zip: "93030", lat: 34.1975, lng: -119.1771, city: "Oxnard", percentile: 85, pollutionFactors: ["pesticide use", "diesel emissions", "PM2.5"], accessIssues: ["language barriers", "limited tutoring", "overcrowded schools"] },
  "93001": { zip: "93001", lat: 34.2805, lng: -119.2945, city: "Ventura", percentile: 55, pollutionFactors: ["ozone levels", "traffic density", "wildfire risk"], accessIssues: ["high housing costs", "limited public transit"] },
  // Salinas / Monterey
  "93905": { zip: "93905", lat: 36.6547, lng: -121.6319, city: "Salinas", percentile: 90, pollutionFactors: ["pesticide use", "PM2.5", "groundwater threats"], accessIssues: ["language barriers", "limited tutoring", "lack of broadband"] },
  "93940": { zip: "93940", lat: 36.6002, lng: -121.8947, city: "Monterey", percentile: 40, pollutionFactors: ["traffic density", "ozone levels"], accessIssues: ["high housing costs", "limited public transit"] },
  // Modesto / Merced
  "95351": { zip: "95351", lat: 37.6391, lng: -120.9969, city: "Modesto", percentile: 84, pollutionFactors: ["PM2.5", "pesticide use", "diesel emissions"], accessIssues: ["limited tutoring", "digital divide", "few community centers"] },
  "95340": { zip: "95340", lat: 37.3022, lng: -120.4830, city: "Merced", percentile: 86, pollutionFactors: ["pesticide use", "PM2.5", "groundwater threats"], accessIssues: ["lack of broadband", "limited tutoring", "language barriers"] },
  // Visalia / Tulare
  "93291": { zip: "93291", lat: 36.3302, lng: -119.2921, city: "Visalia", percentile: 80, pollutionFactors: ["PM2.5", "pesticide use", "ozone"], accessIssues: ["limited public transit", "few libraries", "digital divide"] },
  // Redding / Chico
  "96001": { zip: "96001", lat: 40.5865, lng: -122.3917, city: "Redding", percentile: 50, pollutionFactors: ["wildfire smoke", "ozone levels", "PM2.5"], accessIssues: ["limited public transit", "lack of broadband", "few free programs"] },
  "95928": { zip: "95928", lat: 39.7285, lng: -121.8375, city: "Chico", percentile: 55, pollutionFactors: ["wildfire smoke", "PM2.5", "ozone levels"], accessIssues: ["limited public transit", "high housing costs"] },
  // Eureka
  "95501": { zip: "95501", lat: 40.8021, lng: -124.1637, city: "Eureka", percentile: 48, pollutionFactors: ["cleanup sites", "diesel emissions", "PM2.5"], accessIssues: ["lack of broadband", "limited public transit", "few free programs"] },
  // Santa Cruz
  "95060": { zip: "95060", lat: 36.9741, lng: -122.0308, city: "Santa Cruz", percentile: 45, pollutionFactors: ["traffic density", "ozone levels", "wildfire risk"], accessIssues: ["high housing costs", "limited public transit"] },
  // San Luis Obispo
  "93401": { zip: "93401", lat: 35.2828, lng: -120.6596, city: "San Luis Obispo", percentile: 38, pollutionFactors: ["ozone levels", "traffic density"], accessIssues: ["high housing costs", "limited public transit"] },
  // Palm Springs / Coachella
  "92262": { zip: "92262", lat: 33.8303, lng: -116.5453, city: "Palm Springs", percentile: 60, pollutionFactors: ["ozone", "PM2.5", "extreme heat"], accessIssues: ["limited public transit", "digital divide", "few free programs"] },
  "92236": { zip: "92236", lat: 33.6804, lng: -116.1739, city: "Coachella", percentile: 95, pollutionFactors: ["pesticide use", "PM2.5", "drinking water contaminants"], accessIssues: ["language barriers", "lack of broadband", "limited tutoring"] },
  // El Centro / Imperial
  "92243": { zip: "92243", lat: 32.7920, lng: -115.5631, city: "El Centro", percentile: 92, pollutionFactors: ["pesticide use", "PM2.5", "drinking water contaminants"], accessIssues: ["language barriers", "lack of broadband", "limited tutoring"] },
  // Torrance / Carson
  "90501": { zip: "90501", lat: 33.8311, lng: -118.3267, city: "Torrance", percentile: 65, pollutionFactors: ["traffic density", "diesel emissions", "air toxics"], accessIssues: ["limited public transit", "few free programs"] },
  "90745": { zip: "90745", lat: 33.8292, lng: -118.2615, city: "Carson", percentile: 88, pollutionFactors: ["diesel emissions", "toxic releases", "traffic density"], accessIssues: ["limited park access", "digital divide", "few community centers"] },
  // Downey / Norwalk
  "90241": { zip: "90241", lat: 33.9401, lng: -118.1332, city: "Downey", percentile: 78, pollutionFactors: ["traffic density", "diesel emissions", "PM2.5"], accessIssues: ["limited tutoring", "digital divide"] },
  "90650": { zip: "90650", lat: 33.9022, lng: -118.0817, city: "Norwalk", percentile: 76, pollutionFactors: ["traffic density", "diesel emissions", "air toxics"], accessIssues: ["limited tutoring", "digital divide", "few libraries"] },
  // El Monte / West Covina
  "91731": { zip: "91731", lat: 34.0686, lng: -118.0276, city: "El Monte", percentile: 87, pollutionFactors: ["traffic density", "groundwater contamination", "diesel emissions"], accessIssues: ["language barriers", "limited tutoring", "overcrowded schools"] },
  "91790": { zip: "91790", lat: 34.0686, lng: -117.9390, city: "West Covina", percentile: 68, pollutionFactors: ["traffic density", "air toxics", "ozone levels"], accessIssues: ["limited public transit", "language barriers"] },
  // Ontario / Fontana
  "91761": { zip: "91761", lat: 34.0633, lng: -117.6509, city: "Ontario", percentile: 85, pollutionFactors: ["PM2.5", "diesel emissions", "ozone"], accessIssues: ["limited tutoring", "digital divide", "few libraries"] },
  "92335": { zip: "92335", lat: 34.0922, lng: -117.4350, city: "Fontana", percentile: 88, pollutionFactors: ["PM2.5", "diesel emissions", "ozone"], accessIssues: ["limited tutoring", "overcrowded schools", "digital divide"] },
  // Escondido / Oceanside
  "92025": { zip: "92025", lat: 33.1192, lng: -117.0864, city: "Escondido", percentile: 75, pollutionFactors: ["traffic density", "ozone levels", "diesel emissions"], accessIssues: ["language barriers", "limited tutoring", "digital divide"] },
  "92054": { zip: "92054", lat: 33.1959, lng: -117.3795, city: "Oceanside", percentile: 58, pollutionFactors: ["traffic density", "ozone levels"], accessIssues: ["limited public transit", "few free programs"] },
  // Vallejo / Richmond
  "94590": { zip: "94590", lat: 38.1041, lng: -122.2566, city: "Vallejo", percentile: 84, pollutionFactors: ["diesel emissions", "cleanup sites", "PM2.5"], accessIssues: ["limited tutoring", "digital divide", "few community centers"] },
  "94801": { zip: "94801", lat: 37.9358, lng: -122.3477, city: "Richmond", percentile: 92, pollutionFactors: ["diesel emissions", "toxic releases", "PM2.5"], accessIssues: ["limited tutoring", "overcrowded schools", "digital divide"] },
  // Antioch / Pittsburg
  "94509": { zip: "94509", lat: 38.0049, lng: -121.8058, city: "Antioch", percentile: 78, pollutionFactors: ["diesel emissions", "ozone", "PM2.5"], accessIssues: ["limited public transit", "digital divide", "few libraries"] },
  // Santa Rosa / Napa
  "95401": { zip: "95401", lat: 38.4405, lng: -122.7141, city: "Santa Rosa", percentile: 52, pollutionFactors: ["wildfire risk", "traffic density", "ozone levels"], accessIssues: ["high housing costs", "limited public transit"] },
  "94559": { zip: "94559", lat: 38.2975, lng: -122.2869, city: "Napa", percentile: 48, pollutionFactors: ["pesticide use", "traffic density", "ozone levels"], accessIssues: ["high housing costs", "language barriers"] },
  // Davis / Woodland
  "95616": { zip: "95616", lat: 38.5449, lng: -121.7405, city: "Davis", percentile: 30, pollutionFactors: ["pesticide use", "traffic density"], accessIssues: ["high housing costs", "limited affordable childcare"] },
  // Santa Maria / Lompoc
  "93454": { zip: "93454", lat: 34.9530, lng: -120.4357, city: "Santa Maria", percentile: 82, pollutionFactors: ["pesticide use", "PM2.5", "ozone"], accessIssues: ["language barriers", "limited tutoring", "lack of broadband"] },
  // Clovis
  "93612": { zip: "93612", lat: 36.8252, lng: -119.6831, city: "Clovis", percentile: 55, pollutionFactors: ["PM2.5", "ozone", "pesticide use"], accessIssues: ["limited public transit", "few free programs"] },
  // Beverly Hills / Santa Monica
  "90210": { zip: "90210", lat: 34.0901, lng: -118.4065, city: "Beverly Hills", percentile: 18, pollutionFactors: ["traffic density", "ozone levels"], accessIssues: ["high housing costs"] },
  "90401": { zip: "90401", lat: 34.0195, lng: -118.4912, city: "Santa Monica", percentile: 30, pollutionFactors: ["traffic density", "ozone levels"], accessIssues: ["high housing costs", "limited public transit"] },
};

// City name → representative ZIP lookup
const CITY_TO_ZIP: Record<string, string> = {
  "los angeles": "90011", "la": "90011",
  "fresno": "93706",
  "san diego": "92113", "national city": "91950", "chula vista": "91911", "san ysidro": "92173",
  "la jolla": "92093", "ocean beach": "92113", "barrio logan": "92113",
  "oakland": "94601", "east oakland": "94603",
  "san francisco": "94124", "sf": "94124", "bayview": "94124", "hunters point": "94124", "visitacion valley": "94134",
  "san jose": "95116",
  "riverside": "92501",
  "san bernardino": "92411",
  "sacramento": "95823",
  "stockton": "95206",
  "bakersfield": "93307",
  "compton": "90220",
  "pomona": "91766",
  "huntington park": "90255",
  "south gate": "90280",
  "watts": "90001", "south la": "90044", "south los angeles": "90044",
  "east la": "90255", "east los angeles": "90255",
  "logan heights": "92113", "city heights": "92114", "encanto": "92114",
  "west fresno": "93706", "downtown fresno": "93721",
  "fruitvale": "94601", "deep east oakland": "94621",
  "east san jose": "95116",
  "del mar": "92014",
  "carmel-by-the-sea": "93921", "carmel": "93921",
  "santa barbara": "93101",
  "malibu": "90265",
  "palo alto": "94301",
  "cupertino": "95014",
  "los altos": "94022",
  "irvine": "92618",
  "folsom": "95630",
  "rocklin": "95765",
  "saratoga": "95070",
  // New cities
  "santa ana": "92701",
  "anaheim": "92804",
  "fullerton": "92832",
  "garden grove": "92840",
  "cypress": "90630",
  "westminster": "92683",
  "huntington beach": "92647",
  "long beach": "90813",
  "inglewood": "90301",
  "hawthorne": "90250",
  "pasadena": "91101",
  "glendale": "91201",
  "oxnard": "93030",
  "ventura": "93001",
  "salinas": "93905",
  "monterey": "93940",
  "modesto": "95351",
  "merced": "95340",
  "visalia": "93291",
  "redding": "96001",
  "chico": "95928",
  "eureka": "95501",
  "santa cruz": "95060",
  "san luis obispo": "93401", "slo": "93401",
  "palm springs": "92262",
  "coachella": "92236",
  "el centro": "92243",
  "torrance": "90501",
  "carson": "90745",
  "downey": "90241",
  "norwalk": "90650",
  "el monte": "91731",
  "west covina": "91790",
  "ontario": "91761",
  "fontana": "92335",
  "escondido": "92025",
  "oceanside": "92054",
  "vallejo": "94590",
  "richmond": "94801",
  "antioch": "94509",
  "santa rosa": "95401",
  "napa": "94559",
  "davis": "95616",
  "santa maria": "93454",
  "clovis": "93612",
  "beverly hills": "90210",
  "santa monica": "90401",
};

// Approximate California ZIP → lat/lng regions for fallback
const CA_ZIP_REGIONS: { range: [number, number]; lat: number; lng: number; region: string }[] = [
  { range: [90000, 90899], lat: 33.95, lng: -118.25, region: "Los Angeles" },
  { range: [90900, 91199], lat: 34.15, lng: -118.15, region: "Pasadena / San Gabriel Valley" },
  { range: [91200, 91299], lat: 34.17, lng: -118.26, region: "Glendale" },
  { range: [91300, 91499], lat: 34.25, lng: -118.50, region: "San Fernando Valley" },
  { range: [91500, 91599], lat: 34.19, lng: -118.13, region: "Altadena / La Cañada" },
  { range: [91600, 91699], lat: 34.18, lng: -118.31, region: "Burbank / North Hollywood" },
  { range: [91700, 91899], lat: 34.07, lng: -117.90, region: "San Gabriel Valley" },
  { range: [91900, 91999], lat: 32.65, lng: -117.08, region: "South San Diego" },
  { range: [92000, 92199], lat: 32.80, lng: -117.15, region: "San Diego" },
  { range: [92200, 92299], lat: 33.80, lng: -116.50, region: "Coachella Valley" },
  { range: [92300, 92399], lat: 34.10, lng: -117.40, region: "Inland Empire" },
  { range: [92400, 92499], lat: 34.10, lng: -117.30, region: "San Bernardino" },
  { range: [92500, 92599], lat: 33.95, lng: -117.40, region: "Riverside" },
  { range: [92600, 92699], lat: 33.70, lng: -117.80, region: "Orange County" },
  { range: [92700, 92799], lat: 33.75, lng: -117.87, region: "Orange County" },
  { range: [92800, 92899], lat: 33.85, lng: -117.93, region: "North Orange County" },
  { range: [92900, 92999], lat: 33.50, lng: -117.65, region: "South Orange County" },
  { range: [93000, 93099], lat: 34.30, lng: -119.30, region: "Ventura / Santa Barbara" },
  { range: [93100, 93199], lat: 34.42, lng: -119.70, region: "Santa Barbara" },
  { range: [93200, 93299], lat: 36.33, lng: -119.29, region: "Visalia / Tulare" },
  { range: [93300, 93399], lat: 35.37, lng: -119.02, region: "Bakersfield" },
  { range: [93400, 93499], lat: 34.95, lng: -120.44, region: "Santa Maria / San Luis Obispo" },
  { range: [93500, 93599], lat: 35.05, lng: -118.00, region: "Mojave / Tehachapi" },
  { range: [93600, 93699], lat: 36.75, lng: -119.77, region: "Fresno" },
  { range: [93700, 93799], lat: 36.74, lng: -119.79, region: "Fresno" },
  { range: [93900, 93999], lat: 36.60, lng: -121.89, region: "Monterey" },
  { range: [94000, 94199], lat: 37.75, lng: -122.42, region: "San Francisco / Bay Area" },
  { range: [94200, 94299], lat: 37.44, lng: -122.14, region: "Peninsula" },
  { range: [94300, 94399], lat: 37.44, lng: -122.14, region: "Palo Alto" },
  { range: [94400, 94499], lat: 37.60, lng: -122.38, region: "San Mateo" },
  { range: [94500, 94599], lat: 38.10, lng: -122.26, region: "Vallejo / Solano" },
  { range: [94600, 94699], lat: 37.77, lng: -122.22, region: "Oakland / East Bay" },
  { range: [94700, 94799], lat: 37.87, lng: -122.27, region: "Berkeley" },
  { range: [94800, 94899], lat: 37.94, lng: -122.35, region: "Richmond / Contra Costa" },
  { range: [94900, 94999], lat: 37.97, lng: -122.52, region: "Marin County" },
  { range: [95000, 95199], lat: 37.34, lng: -121.89, region: "San Jose" },
  { range: [95200, 95299], lat: 37.95, lng: -121.29, region: "Stockton" },
  { range: [95300, 95399], lat: 37.30, lng: -120.48, region: "Merced / Central Valley" },
  { range: [95400, 95499], lat: 38.44, lng: -122.71, region: "Santa Rosa / Sonoma" },
  { range: [95500, 95599], lat: 40.80, lng: -124.16, region: "Eureka / North Coast" },
  { range: [95600, 95699], lat: 38.68, lng: -121.18, region: "Folsom / Placer" },
  { range: [95700, 95799], lat: 38.79, lng: -121.24, region: "Roseville / Rocklin" },
  { range: [95800, 95899], lat: 38.58, lng: -121.49, region: "Sacramento" },
  { range: [95900, 95999], lat: 39.73, lng: -121.84, region: "Chico / Butte" },
  { range: [96000, 96099], lat: 40.59, lng: -122.39, region: "Redding / Shasta" },
  { range: [96100, 96199], lat: 41.73, lng: -122.64, region: "Far North California" },
];

function isCaliforniaZip(zip: string): boolean {
  const num = parseInt(zip, 10);
  return num >= 90001 && num <= 96199;
}

function generateFallbackZipData(zip: string): ZipData | null {
  if (!isCaliforniaZip(zip)) return null;
  const num = parseInt(zip, 10);
  const region = CA_ZIP_REGIONS.find(r => num >= r.range[0] && num <= r.range[1]);
  if (!region) return null;
  const pseudoRandom = ((num * 7 + 13) % 60) + 20;
  return {
    zip,
    lat: region.lat + ((num % 100) - 50) * 0.002,
    lng: region.lng + ((num % 73) - 36) * 0.002,
    city: region.region,
    percentile: pseudoRandom,
    pollutionFactors: ["traffic density", "ozone levels", "PM2.5"],
    accessIssues: ["limited data available", "community resources may vary"],
  };
}

export function lookupCityToZip(query: string): string | null {
  const normalized = query.trim().toLowerCase();
  return CITY_TO_ZIP[normalized] || null;
}


export function getZipData(zip: string): ZipData | null {
  return ZIP_DATA[zip] || generateFallbackZipData(zip);
}

export function isValidLocation(query: string): boolean {
  const trimmed = query.trim();
  if (/^\d{5}$/.test(trimmed)) return !!getZipData(trimmed);
  return !!lookupCityToZip(trimmed);
}

// Real community resources by city — verified addresses for top CA cities
const CITY_RESOURCES: Record<string, Resource[]> = {
  "Los Angeles": [
    { id: "1", name: "South L.A. Community Resource Center", description: "Free classes, food pantry, Wi-Fi, and telehealth services for the community.", category: "Community Support", lat: 33.9863, lng: -118.2713, address: "1910 S Magnolia Ave, Los Angeles, CA 90007", distance: "0.5 mi", images: ["https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop"] },
    { id: "2", name: "Watts Learning Center", description: "Independent K-5 public charter school providing quality education in Watts.", category: "Education", lat: 33.9388, lng: -118.2468, address: "8800 S San Pedro St, Los Angeles, CA 90003", distance: "1.0 mi", images: ["https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop"] },
    { id: "3", name: "Vermont Square Library", description: "LA Public Library branch with free computer access, Wi-Fi, and children's programs.", category: "Technology", lat: 33.9839, lng: -118.2918, address: "1201 W 48th St, Los Angeles, CA 90037", distance: "0.6 mi", images: ["https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=400&fit=crop"] },
    { id: "4", name: "South Central LAMP", description: "Free ESL classes, family literacy programs, and parenting skills education for women and families.", category: "Community Support", lat: 33.9990, lng: -118.2712, address: "1843 W Washington Blvd, Los Angeles, CA 90007", distance: "0.8 mi", images: ["https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=400&fit=crop"] },
    { id: "5", name: "FamilySource Center – Watts/Willowbrook", description: "One-stop center for family services: job training, financial literacy, academic support, and case management.", category: "Community Support", lat: 33.9290, lng: -118.2440, address: "1544 W 103rd St, Los Angeles, CA 90047", distance: "1.2 mi", images: ["https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop"] },
    { id: "6", name: "Junipero Serra Library", description: "Branch library with free Wi-Fi, printing, digital literacy classes, and youth homework help.", category: "Technology", lat: 33.9949, lng: -118.2513, address: "4607 S Main St, Los Angeles, CA 90037", distance: "0.4 mi", images: ["https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop"] },
    { id: "7", name: "UC Links Youth Program – South LA", description: "University-community partnership providing digital literacy, college prep, and STEM activities for underserved youth.", category: "Education", lat: 33.9910, lng: -118.2800, address: "University of Southern California, Los Angeles, CA 90089", distance: "1.5 mi", isUCLinks: true, images: ["https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop"] },
    { id: "8", name: "Edboost Learning Center", description: "Free after-school tutoring and mentoring for K-12 students in the Pico-Union area.", category: "Education", lat: 34.0459, lng: -118.2780, address: "1400 W 2nd St, Los Angeles, CA 90026", distance: "2.0 mi", images: ["https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop"] },
  ],
  "San Diego": [
    { id: "1", name: "City Heights Community Development Corporation", description: "Workforce development, housing assistance, and community programs in City Heights.", category: "Community Support", lat: 32.7520, lng: -117.0940, address: "4004 University Ave, San Diego, CA 92105", distance: "0.5 mi", images: ["https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop"] },
    { id: "2", name: "SAY San Diego Family Resource Center", description: "Family support services including parenting classes, youth programs, and crisis intervention.", category: "Community Support", lat: 32.7150, lng: -117.1290, address: "4265 Fairmount Ave, San Diego, CA 92105", distance: "0.8 mi", images: ["https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=400&fit=crop"] },
    { id: "3", name: "San Diego Central Library", description: "Flagship 9-story library with dome reading room, IDEA Lab, teen center, and free Wi-Fi.", category: "Technology", lat: 32.7209, lng: -117.1532, address: "330 Park Blvd, San Diego, CA 92101", distance: "1.0 mi", images: ["https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=400&fit=crop"] },
    { id: "4", name: "SBCS Community Resource Center", description: "Services for children and families including after-school programs, health services, and parent education.", category: "Community Support", lat: 32.6940, lng: -117.1190, address: "430 F St, Chula Vista, CA 91910", distance: "1.5 mi", images: ["https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop"] },
    { id: "5", name: "UC Links Youth Digital Literacy", description: "University-community partnership providing digital literacy, college prep, and STEM activities for underserved youth.", category: "Education", lat: 32.8801, lng: -117.2340, address: "UC San Diego, 9500 Gilman Dr, La Jolla, CA 92093", distance: "2.0 mi", isUCLinks: true, images: ["https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop"] },
    { id: "6", name: "City Heights/Weingart Library & IDEA Lab", description: "Community library with Performance Annex and IDEA Lab. Multilingual collections and programs.", category: "Technology", lat: 32.7520, lng: -117.0980, address: "3795 Fairmount Ave, San Diego, CA 92105", distance: "0.6 mi", images: ["https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop"] },
    { id: "7", name: "International Rescue Committee – San Diego", description: "Refugee resettlement, ESL classes, citizenship prep, and employment assistance.", category: "Community Support", lat: 32.7540, lng: -117.0900, address: "5348 University Ave, San Diego, CA 92105", distance: "1.0 mi", images: ["https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=400&fit=crop"] },
    { id: "8", name: "Barrio Logan College Institute", description: "Free college prep tutoring and mentoring for students from underserved communities.", category: "Education", lat: 32.6990, lng: -117.1450, address: "2114 National Ave, San Diego, CA 92113", distance: "1.2 mi", images: ["https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop"] },
  ],
  "National City": [
    { id: "1", name: "South Region Family Resource Center", description: "County family services including CalFresh, Medi-Cal, and case management.", category: "Community Support", lat: 32.6730, lng: -117.1000, address: "401 Mile of Cars Way, National City, CA 91950", distance: "0.3 mi", images: ["https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop"] },
    { id: "2", name: "National City Public Library", description: "City library with free computers, Wi-Fi, ESL resources, and children's programs.", category: "Technology", lat: 32.6781, lng: -117.0992, address: "1401 National City Blvd, National City, CA 91950", distance: "0.5 mi", images: ["https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=400&fit=crop"] },
    { id: "3", name: "National City Collaborative Family Resource Center", description: "Social, educational, and health services for residents. After-school tutoring and ESL classes.", category: "Education", lat: 32.6760, lng: -117.0980, address: "200 E 12th St, National City, CA 91950", distance: "0.4 mi", images: ["https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop"] },
    { id: "4", name: "Martin Luther King Jr. Community Center", description: "Community center with recreation programs, senior services, and youth activities.", category: "Community Support", lat: 32.6770, lng: -117.0960, address: "100 E 12th St, National City, CA 91950", distance: "0.4 mi", images: ["https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=600&h=400&fit=crop"] },
    { id: "5", name: "UC Links Youth Program – South Bay", description: "University-community partnership providing digital literacy, college prep, and STEM activities.", category: "Education", lat: 32.6800, lng: -117.1050, address: "Sweetwater High School, 2900 Highland Ave, National City, CA 91950", distance: "0.8 mi", isUCLinks: true, images: ["https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop"] },
    { id: "6", name: "Olivewood Gardens & Learning Center", description: "Community garden and outdoor classroom offering free nutrition and environmental education.", category: "Education", lat: 32.6710, lng: -117.0870, address: "2525 N Ave, National City, CA 91950", distance: "1.0 mi", images: ["https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=600&h=400&fit=crop"] },
    { id: "7", name: "SBCS National City Resource Center", description: "Family support services, after-school programs, and community health resources.", category: "Community Support", lat: 32.6790, lng: -117.1010, address: "1124 Civic Center Dr, National City, CA 91950", distance: "0.6 mi", images: ["https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop"] },
    { id: "8", name: "Granger Junior High Digital Lab", description: "After-school computer lab with free internet access and homework help.", category: "Technology", lat: 32.6750, lng: -117.0920, address: "2101 Granger Ave, National City, CA 91950", distance: "0.7 mi", images: ["https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop"] },
  ],
  "Oakland": [
    { id: "1", name: "TecHub by Tech Exchange", description: "Free and low-cost digital services: computer access, tech support, refurbished devices, and digital skills training.", category: "Technology", lat: 37.8044, lng: -122.2712, address: "1449 Miller Ave, Oakland, CA 94601", distance: "0.5 mi", images: ["https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop"] },
    { id: "2", name: "East Oakland Community Project", description: "Emergency food, clothing, hygiene supplies, and community support services.", category: "Community Support", lat: 37.7560, lng: -122.1840, address: "7515 International Blvd, Oakland, CA 94621", distance: "1.0 mi", images: ["https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop"] },
    { id: "3", name: "81st Avenue Library", description: "Oakland Public Library branch with free computer access, Wi-Fi, and multilingual programs.", category: "Technology", lat: 37.7540, lng: -122.1870, address: "1021 81st Ave, Oakland, CA 94621", distance: "0.8 mi", images: ["https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=400&fit=crop"] },
    { id: "4", name: "Centro Legal de la Raza", description: "Free legal services, immigration assistance, and ESL referrals for low-income residents.", category: "Community Support", lat: 37.7830, lng: -122.2220, address: "3400 E 12th St, Oakland, CA 94601", distance: "0.6 mi", images: ["https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=400&fit=crop"] },
    { id: "5", name: "UC Links Youth Program – East Bay", description: "University-community partnership providing digital literacy, college prep, and STEM activities.", category: "Education", lat: 37.8719, lng: -122.2585, address: "UC Berkeley, Berkeley, CA 94720", distance: "2.0 mi", isUCLinks: true, images: ["https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop"] },
    { id: "6", name: "Youth UpRising", description: "Youth development campus with education, career, arts, and health programs for ages 13-24.", category: "Education", lat: 37.7560, lng: -122.1800, address: "8711 MacArthur Blvd, Oakland, CA 94605", distance: "1.5 mi", images: ["https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop"] },
    { id: "7", name: "Cesar Chavez Library", description: "Public library with homework center, free Wi-Fi, and community meeting rooms.", category: "Technology", lat: 37.7440, lng: -122.1730, address: "3301 E 12th St Ste 271, Oakland, CA 94601", distance: "1.2 mi", images: ["https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop"] },
    { id: "8", name: "Oakland Promise – Brilliant Baby", description: "College savings accounts and family support for children born into poverty.", category: "Education", lat: 37.8030, lng: -122.2710, address: "1000 Broadway Ste 480, Oakland, CA 94607", distance: "1.0 mi", images: ["https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=400&fit=crop"] },
  ],
  "Fresno": [
    { id: "1", name: "Fresno County Public Library – Central Branch", description: "Main library with free computer access, Wi-Fi, children's area, and community programs.", category: "Technology", lat: 36.7378, lng: -119.7871, address: "2420 Mariposa St, Fresno, CA 93721", distance: "0.5 mi", images: ["https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=400&fit=crop"] },
    { id: "2", name: "Reading and Beyond", description: "Free after-school tutoring, reading programs, and mentoring for underserved K-12 students.", category: "Education", lat: 36.7250, lng: -119.7870, address: "4750 E Hamilton Ave, Fresno, CA 93702", distance: "1.0 mi", images: ["https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop"] },
    { id: "3", name: "Fresno Economic Opportunities Commission", description: "Community action agency offering Head Start, energy assistance, youth programs, and family services.", category: "Community Support", lat: 36.7330, lng: -119.7830, address: "1920 Mariposa Mall Ste 300, Fresno, CA 93721", distance: "0.6 mi", images: ["https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop"] },
    { id: "4", name: "Centro La Familia Advocacy Services", description: "ESL classes, immigration assistance, health outreach, and family support services.", category: "Community Support", lat: 36.7460, lng: -119.7720, address: "302 Fresno St Ste 102, Fresno, CA 93706", distance: "0.8 mi", images: ["https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=400&fit=crop"] },
    { id: "5", name: "UC Links Youth Program – Central Valley", description: "University-community partnership providing digital literacy, college prep, and STEM activities.", category: "Education", lat: 36.8127, lng: -119.7452, address: "UC Merced / Fresno State, Fresno, CA 93740", distance: "2.0 mi", isUCLinks: true, images: ["https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop"] },
    { id: "6", name: "Fresno Metro Black Chamber – Tech Hub", description: "Technology training, entrepreneurship support, and workforce development for underserved communities.", category: "Technology", lat: 36.7370, lng: -119.7850, address: "1444 Fulton St, Fresno, CA 93721", distance: "0.7 mi", images: ["https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop"] },
    { id: "7", name: "Mary Ella Brown Community Center", description: "Recreation programs, senior services, youth activities, and meeting space in West Fresno.", category: "Community Support", lat: 36.7260, lng: -119.8080, address: "1350 E Annadale Ave, Fresno, CA 93706", distance: "1.2 mi", images: ["https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=600&h=400&fit=crop"] },
    { id: "8", name: "Stone Soup Fresno", description: "Community kitchen and social enterprise offering food access, job training, and youth culinary programs.", category: "Community Support", lat: 36.7340, lng: -119.7930, address: "1345 H St, Fresno, CA 93721", distance: "0.9 mi", images: ["https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop"] },
  ],
  "San Francisco": [
    { id: "1", name: "Tenderloin Technology Lab", description: "Free computer access and tech training for Tenderloin residents. Open Mon-Fri 8:30am-12:45pm.", category: "Technology", lat: 37.7841, lng: -122.4120, address: "186 Golden Gate Ave, San Francisco, CA 94102", distance: "0.5 mi", images: ["https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop"] },
    { id: "2", name: "Bayview/Anna E. Waden Library", description: "Branch library with computer lab, children's programs, and community meeting space.", category: "Technology", lat: 37.7308, lng: -122.3886, address: "5075 3rd St, San Francisco, CA 94124", distance: "0.3 mi", images: ["https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=400&fit=crop"] },
    { id: "3", name: "Bayview YMCA", description: "Youth programs, after-school tutoring, fitness, and community engagement.", category: "Education", lat: 37.7310, lng: -122.3860, address: "1601 Lane St, San Francisco, CA 94124", distance: "0.4 mi", images: ["https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop"] },
    { id: "4", name: "SF Connected Technology Lab – Bayview", description: "City-sponsored free tech training at community sites throughout San Francisco.", category: "Technology", lat: 37.7290, lng: -122.3910, address: "1800 Oakdale Ave, San Francisco, CA 94124", distance: "0.6 mi", images: ["https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop"] },
    { id: "5", name: "UC Links Youth Program – SF", description: "University-community partnership providing digital literacy, college prep, and STEM activities.", category: "Education", lat: 37.7749, lng: -122.4194, address: "UCSF, 505 Parnassus Ave, San Francisco, CA 94143", distance: "2.0 mi", isUCLinks: true, images: ["https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop"] },
    { id: "6", name: "Southeast Community Facility", description: "Community center with meeting rooms, job training, and youth development programs.", category: "Community Support", lat: 37.7269, lng: -122.3855, address: "1800 Oakdale Ave, San Francisco, CA 94124", distance: "0.6 mi", images: ["https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop"] },
    { id: "7", name: "Hunters Point Community Youth Park", description: "Open community park with free Wi-Fi, basketball courts, and youth recreation.", category: "Community Support", lat: 37.7300, lng: -122.3780, address: "800 Innes Ave, San Francisco, CA 94124", distance: "0.8 mi", images: ["https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=600&h=400&fit=crop"] },
    { id: "8", name: "Young Community Developers", description: "Job training, workforce development, and community-building for Bayview-Hunters Point.", category: "Community Support", lat: 37.7320, lng: -122.3870, address: "1715 Yosemite Ave, San Francisco, CA 94124", distance: "1.0 mi", images: ["https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=400&fit=crop"] },
  ],
  "San Jose": [
    { id: "1", name: "San Jose Public Library – Biblioteca Latinoamericana", description: "Branch library with bilingual collections, free Wi-Fi, and community programs.", category: "Technology", lat: 37.3350, lng: -121.8860, address: "921 S 1st St, San Jose, CA 95110", distance: "0.5 mi", images: ["https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=400&fit=crop"] },
    { id: "2", name: "Sacred Heart Community Service", description: "Food assistance, clothing, financial education, and community advocacy.", category: "Community Support", lat: 37.3310, lng: -121.8770, address: "1381 S 1st St, San Jose, CA 95110", distance: "0.8 mi", images: ["https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop"] },
    { id: "3", name: "Mayfair Community Center", description: "After-school programs, computer lab, ESL classes, and youth recreation.", category: "Education", lat: 37.3520, lng: -121.8420, address: "2039 Kammerer Ave, San Jose, CA 95116", distance: "0.6 mi", images: ["https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop"] },
    { id: "4", name: "SOMOS Mayfair", description: "Community organizing, leadership development, and family support for East San Jose.", category: "Community Support", lat: 37.3530, lng: -121.8450, address: "1954 Kammerer Ave, San Jose, CA 95116", distance: "0.7 mi", images: ["https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=400&fit=crop"] },
    { id: "5", name: "UC Links Youth Program – South Bay", description: "University-community partnership providing digital literacy, college prep, and STEM activities.", category: "Education", lat: 37.3382, lng: -121.8863, address: "San Jose State University, 1 Washington Sq, San Jose, CA 95192", distance: "1.5 mi", isUCLinks: true, images: ["https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop"] },
    { id: "6", name: "School of Arts and Culture at MHP", description: "Free arts classes, cultural programs, and youth workshops at Mexican Heritage Plaza.", category: "Education", lat: 37.3530, lng: -121.8570, address: "1700 Alum Rock Ave, San Jose, CA 95116", distance: "0.9 mi", images: ["https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop"] },
    { id: "7", name: "San Jose Digital Inclusion Program", description: "Free laptop lending, digital skills training, and low-cost internet enrollment assistance.", category: "Technology", lat: 37.3382, lng: -121.8863, address: "150 W San Carlos St, San Jose, CA 95113", distance: "1.0 mi", images: ["https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop"] },
    { id: "8", name: "Gardner Community Center", description: "Youth programs, food distribution, after-school enrichment, and family services.", category: "Community Support", lat: 37.3270, lng: -121.8800, address: "520 W Virginia St, San Jose, CA 95125", distance: "1.2 mi", images: ["https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop"] },
  ],
  "Riverside": [
    { id: "1", name: "Riverside Public Library – Main", description: "Central library with free computer access, Wi-Fi, and community programs.", category: "Technology", lat: 33.9533, lng: -117.3962, address: "3581 Mission Inn Ave, Riverside, CA 92501", distance: "0.3 mi", images: ["https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=400&fit=crop"] },
    { id: "2", name: "Riverside County Community Action Partnership", description: "Head Start, energy assistance, workforce development, and family services.", category: "Community Support", lat: 33.9580, lng: -117.3850, address: "2038 Iowa Ave Ste B102, Riverside, CA 92507", distance: "0.8 mi", images: ["https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop"] },
    { id: "3", name: "UC Links Youth Program – Inland Empire", description: "University-community partnership providing digital literacy, college prep, and STEM activities.", category: "Education", lat: 33.9737, lng: -117.3281, address: "UC Riverside, 900 University Ave, Riverside, CA 92521", distance: "1.5 mi", isUCLinks: true, images: ["https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop"] },
    { id: "4", name: "Cesar Chavez Community Center", description: "Recreation programs, youth activities, and community meeting space.", category: "Community Support", lat: 33.9710, lng: -117.3750, address: "2060 University Ave, Riverside, CA 92507", distance: "0.7 mi", images: ["https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=600&h=400&fit=crop"] },
    { id: "5", name: "GRID Alternatives – Inland Empire", description: "Free solar installation and green job training for low-income families.", category: "Technology", lat: 33.9560, lng: -117.3870, address: "3750 University Ave, Riverside, CA 92501", distance: "0.5 mi", images: ["https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop"] },
    { id: "6", name: "Family Service Association of Western Riverside", description: "Counseling, family support, domestic violence services, and youth mentoring.", category: "Community Support", lat: 33.9490, lng: -117.3960, address: "21250 Box Springs Rd Ste 212, Moreno Valley, CA 92557", distance: "1.2 mi", images: ["https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=400&fit=crop"] },
    { id: "7", name: "Riverside Adult School", description: "Free ESL, GED, citizenship prep, and vocational training.", category: "Education", lat: 33.9620, lng: -117.3890, address: "6735 Magnolia Ave, Riverside, CA 92506", distance: "1.0 mi", images: ["https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop"] },
    { id: "8", name: "Janet Goeske Center", description: "Senior and community center with wellness programs, tech classes, and social activities.", category: "Community Support", lat: 33.9830, lng: -117.3720, address: "5257 Sierra St, Riverside, CA 92504", distance: "1.5 mi", images: ["https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop"] },
  ],
  "Sacramento": [
    { id: "1", name: "Sacramento Public Library – Central", description: "Main library with free computers, Wi-Fi, digital literacy, and community programs.", category: "Technology", lat: 38.5816, lng: -121.4944, address: "828 I St, Sacramento, CA 95814", distance: "0.5 mi", images: ["https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=400&fit=crop"] },
    { id: "2", name: "La Familia Counseling Center", description: "Youth programs, family counseling, gang prevention, and community services in South Sacramento.", category: "Community Support", lat: 38.5140, lng: -121.4580, address: "5523 34th St, Sacramento, CA 95820", distance: "1.0 mi", images: ["https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop"] },
    { id: "3", name: "Sacramento City College – Learning Center", description: "Free tutoring, study groups, and computer access for enrolled and community students.", category: "Education", lat: 38.5366, lng: -121.4722, address: "3835 Freeport Blvd, Sacramento, CA 95822", distance: "0.8 mi", images: ["https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop"] },
    { id: "4", name: "Sacramento Public Wi-Fi – Various Locations", description: "Free public Wi-Fi powered by the City of Sacramento at parks, community centers, and downtown.", category: "Technology", lat: 38.5750, lng: -121.4900, address: "Various downtown locations, Sacramento, CA 95814", distance: "0.3 mi", images: ["https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=600&h=400&fit=crop"] },
    { id: "5", name: "UC Links Youth Program – Sacramento", description: "University-community partnership providing digital literacy, college prep, and STEM activities.", category: "Education", lat: 38.5382, lng: -121.7617, address: "UC Davis, One Shields Ave, Davis, CA 95616", distance: "2.0 mi", isUCLinks: true, images: ["https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop"] },
    { id: "6", name: "Pannell Community Center", description: "Meadowview community center with youth activities, computer lab, and recreation programs.", category: "Community Support", lat: 38.5030, lng: -121.4430, address: "2450 Meadowview Rd, Sacramento, CA 95832", distance: "1.5 mi", images: ["https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=400&fit=crop"] },
    { id: "7", name: "Sacramento Food Bank & Family Services", description: "Food distribution, family services, workforce development, and emergency assistance.", category: "Community Support", lat: 38.5990, lng: -121.4350, address: "3333 3rd Ave, Sacramento, CA 95817", distance: "1.2 mi", images: ["https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop"] },
    { id: "8", name: "Roberts Family Development Center", description: "Tutoring, mentoring, and holistic family services for Oak Park community.", category: "Education", lat: 38.5540, lng: -121.4580, address: "3547 5th Ave, Sacramento, CA 95817", distance: "0.9 mi", images: ["https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop"] },
  ],
  "Stockton": [
    { id: "1", name: "Cesar Chavez Central Library", description: "Stockton's main library with free computers, internet, and community programs.", category: "Technology", lat: 37.9577, lng: -121.2908, address: "605 N El Dorado St, Stockton, CA 95202", distance: "0.5 mi", images: ["https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=400&fit=crop"] },
    { id: "2", name: "El Concilio – Family Services", description: "ESL classes, immigration assistance, emergency services, and family advocacy.", category: "Community Support", lat: 37.9550, lng: -121.2900, address: "445 N San Joaquin St, Stockton, CA 95202", distance: "0.6 mi", images: ["https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop"] },
    { id: "3", name: "Stockton Free Wi-Fi – Recreation Centers", description: "Free Wi-Fi at multiple city recreation centers and libraries.", category: "Technology", lat: 37.9520, lng: -121.2770, address: "Various city locations, Stockton, CA 95206", distance: "0.8 mi", images: ["https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=600&h=400&fit=crop"] },
    { id: "4", name: "Stockton Scholars", description: "College scholarship and mentoring program for every SUSD student.", category: "Education", lat: 37.9570, lng: -121.2870, address: "56 S Lincoln St, Stockton, CA 95203", distance: "0.7 mi", images: ["https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop"] },
    { id: "5", name: "UC Links Youth Program – Central Valley", description: "University-community partnership providing digital literacy, college prep, and STEM activities.", category: "Education", lat: 37.9243, lng: -121.2769, address: "University of the Pacific, Stockton, CA 95211", distance: "1.5 mi", isUCLinks: true, images: ["https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop"] },
    { id: "6", name: "Reinvent South Stockton Coalition", description: "Community development, youth programs, and economic opportunity in South Stockton.", category: "Community Support", lat: 37.9300, lng: -121.2700, address: "1125 E Scotts Ave, Stockton, CA 95206", distance: "1.0 mi", images: ["https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=400&fit=crop"] },
    { id: "7", name: "San Joaquin A+ Network", description: "After-school academic enrichment and STEM programs in Stockton schools.", category: "Education", lat: 37.9540, lng: -121.2850, address: "31 E Channel St Ste 316, Stockton, CA 95202", distance: "0.6 mi", images: ["https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop"] },
    { id: "8", name: "Stribley Community Center & Micro Library", description: "Community center with micro library, computer access, and recreation programs.", category: "Technology", lat: 37.9370, lng: -121.2690, address: "1760 E Sonora St, Stockton, CA 95205", distance: "1.2 mi", images: ["https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop"] },
  ],
  "San Bernardino": [
    { id: "1", name: "Norman F. Feldheym Central Library", description: "San Bernardino's main library with free computers, Wi-Fi, and community programs.", category: "Technology", lat: 34.1083, lng: -117.2942, address: "555 W 6th St, San Bernardino, CA 92410", distance: "0.3 mi", images: ["https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=400&fit=crop"] },
    { id: "2", name: "Community Action Partnership of San Bernardino", description: "Head Start, energy assistance, food distribution, and family services.", category: "Community Support", lat: 34.1040, lng: -117.3000, address: "696 S Tippecanoe Ave, San Bernardino, CA 92415", distance: "0.5 mi", images: ["https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop"] },
    { id: "3", name: "NID Housing Counseling Agency", description: "Free housing counseling, financial literacy, and homebuyer assistance.", category: "Community Support", lat: 34.1050, lng: -117.2950, address: "1390 N D St, San Bernardino, CA 92405", distance: "0.7 mi", images: ["https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=400&fit=crop"] },
    { id: "4", name: "San Bernardino Adult School", description: "Free ESL, GED, citizenship prep, and vocational training.", category: "Education", lat: 34.1100, lng: -117.3100, address: "1200 N E St, San Bernardino, CA 92405", distance: "0.8 mi", images: ["https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop"] },
    { id: "5", name: "UC Links Youth Program – IE", description: "University-community partnership providing digital literacy, college prep, and STEM activities.", category: "Education", lat: 33.9737, lng: -117.3281, address: "UC Riverside Extension, Riverside, CA 92507", distance: "2.0 mi", isUCLinks: true, images: ["https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop"] },
    { id: "6", name: "Inland Empire United Way 211", description: "Information and referral service connecting residents to health, housing, and social services.", category: "Community Support", lat: 34.1070, lng: -117.2900, address: "9624 Hermosa Ave, Rancho Cucamonga, CA 91730", distance: "1.5 mi", images: ["https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop"] },
    { id: "7", name: "Provisional Educational Services", description: "Youth educational and career development programs in San Bernardino.", category: "Education", lat: 34.1090, lng: -117.2880, address: "640 N D St, San Bernardino, CA 92401", distance: "0.4 mi", images: ["https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop"] },
    { id: "8", name: "Perris Hill Community Center", description: "Community center with computer lab, sports programs, and after-school activities.", category: "Technology", lat: 34.1200, lng: -117.2850, address: "780 E 21st St, San Bernardino, CA 92404", distance: "1.0 mi", images: ["https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop"] },
  ],
  "Bakersfield": [
    { id: "1", name: "Beale Memorial Library", description: "Kern County's main library with free computers, Wi-Fi, and community programs.", category: "Technology", lat: 35.3732, lng: -119.0187, address: "701 Truxtun Ave, Bakersfield, CA 93301", distance: "0.5 mi", images: ["https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=400&fit=crop"] },
    { id: "2", name: "Community Action Partnership of Kern", description: "Head Start, CalFresh, energy assistance, and family services for Kern County.", category: "Community Support", lat: 35.3810, lng: -119.0200, address: "300 19th St, Bakersfield, CA 93301", distance: "0.6 mi", images: ["https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop"] },
    { id: "3", name: "Bakersfield Adult School", description: "Free ESL, GED, citizenship prep, and career training.", category: "Education", lat: 35.3690, lng: -119.0150, address: "501 S Mt Vernon Ave, Bakersfield, CA 93307", distance: "0.8 mi", images: ["https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop"] },
    { id: "4", name: "MLK Jr. Community Center", description: "Recreation, youth activities, computer lab, and community meeting space.", category: "Community Support", lat: 35.3650, lng: -119.0230, address: "1000 S Owens St, Bakersfield, CA 93307", distance: "0.7 mi", images: ["https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=600&h=400&fit=crop"] },
    { id: "5", name: "Boys & Girls Club of Kern County", description: "After-school programs, homework help, and youth development.", category: "Education", lat: 35.3700, lng: -119.0080, address: "801 Niles St, Bakersfield, CA 93305", distance: "1.0 mi", images: ["https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop"] },
    { id: "6", name: "Mercy & Grace Foundation", description: "Workforce development, digital literacy, and family support for underserved communities.", category: "Technology", lat: 35.3600, lng: -119.0300, address: "1724 S Union Ave, Bakersfield, CA 93307", distance: "1.2 mi", images: ["https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop"] },
    { id: "7", name: "Kern Literacy Council", description: "Free one-on-one adult literacy tutoring and reading programs.", category: "Education", lat: 35.3730, lng: -119.0190, address: "701 Truxtun Ave, Bakersfield, CA 93301", distance: "0.5 mi", images: ["https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop"] },
    { id: "8", name: "Southeast Bakersfield Family Resource Center", description: "Family services, parent education, and community support in southeast Bakersfield.", category: "Community Support", lat: 35.3550, lng: -118.9950, address: "2601 Cottonwood Rd, Bakersfield, CA 93307", distance: "1.5 mi", images: ["https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop"] },
  ],
  "Compton": [
    { id: "1", name: "Compton Library", description: "Full-service public library with meeting rooms, children's programs, and digital resources.", category: "Technology", lat: 33.8966, lng: -118.2226, address: "240 W Compton Blvd, Compton, CA 90220", distance: "0.3 mi", images: ["https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=400&fit=crop"] },
    { id: "2", name: "Compton YouthBuild", description: "Job training, GED prep, and leadership development for young adults 17-24.", category: "Education", lat: 33.8950, lng: -118.2190, address: "700 N Bullis Rd, Compton, CA 90221", distance: "0.5 mi", images: ["https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop"] },
    { id: "3", name: "Dollarhide Community Center", description: "Recreation, sports, and after-school programs for Compton youth.", category: "Community Support", lat: 33.8940, lng: -118.2300, address: "1108 N Tamarind Ave, Compton, CA 90222", distance: "0.6 mi", images: ["https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=600&h=400&fit=crop"] },
    { id: "4", name: "Compton Community Resource Center", description: "ESL, citizenship prep, and workforce development programs.", category: "Community Support", lat: 33.8970, lng: -118.2230, address: "100 N Alameda St, Compton, CA 90220", distance: "0.4 mi", images: ["https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=400&fit=crop"] },
    { id: "5", name: "Lueders Park Community Center", description: "Youth activities, computer access, and recreation programs.", category: "Technology", lat: 33.8860, lng: -118.2250, address: "1400 S Long Beach Blvd, Compton, CA 90221", distance: "0.8 mi", images: ["https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop"] },
    { id: "6", name: "Compton Unified School District – Family Center", description: "Parent education, family engagement, and school-community partnership programs.", category: "Education", lat: 33.8980, lng: -118.2200, address: "501 S Santa Fe Ave, Compton, CA 90221", distance: "0.5 mi", images: ["https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop"] },
    { id: "7", name: "UC Links Youth Program – South LA", description: "University-community partnership for digital literacy and college prep.", category: "Education", lat: 33.9420, lng: -118.2860, address: "CSU Dominguez Hills, Carson, CA 90747", distance: "2.0 mi", isUCLinks: true, images: ["https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop"] },
    { id: "8", name: "Compton Initiative – Tomorrow's Aeronautical Museum", description: "STEM education, flight training, and youth enrichment in Compton-Woodley Airport.", category: "Education", lat: 33.8900, lng: -118.2440, address: "1749 W 132nd St, Compton, CA 90222", distance: "1.0 mi", images: ["https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=400&fit=crop"] },
  ],
  "Santa Ana": [
    { id: "1", name: "Santa Ana Public Library – Main", description: "Main library with free computer access, Wi-Fi, children's programs, and bilingual services.", category: "Technology", lat: 33.7455, lng: -117.8677, address: "26 Civic Center Plaza, Santa Ana, CA 92701", distance: "0.3 mi", images: ["https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=400&fit=crop"] },
    { id: "2", name: "Delhi Center", description: "Youth tutoring, sports, ESL classes, and community programs for the Delhi neighborhood.", category: "Education", lat: 33.7340, lng: -117.8870, address: "505 E Central Ave, Santa Ana, CA 92707", distance: "0.8 mi", images: ["https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop"] },
    { id: "3", name: "KidWorks", description: "After-school academic programs, college prep, and family services in central Santa Ana.", category: "Education", lat: 33.7410, lng: -117.8720, address: "1902 W Chestnut Ave, Santa Ana, CA 92703", distance: "0.6 mi", images: ["https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop"] },
    { id: "4", name: "Latino Health Access", description: "Community health education, diabetes prevention, and wellness programs.", category: "Community Support", lat: 33.7460, lng: -117.8640, address: "450 W 4th St, Santa Ana, CA 92701", distance: "0.4 mi", images: ["https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=400&fit=crop"] },
    { id: "5", name: "Orange County Public Libraries – Newhope Library", description: "Branch library with free Wi-Fi, homework help, and community resources.", category: "Technology", lat: 33.7530, lng: -117.9060, address: "122 N Newhope St, Santa Ana, CA 92703", distance: "1.0 mi", images: ["https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop"] },
    { id: "6", name: "CASA of Orange County", description: "Court-appointed advocates for foster children and family support services.", category: "Community Support", lat: 33.7490, lng: -117.8700, address: "1505 E 17th St Ste 211, Santa Ana, CA 92705", distance: "0.7 mi", images: ["https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop"] },
    { id: "7", name: "Taller San Jose Hope Builders", description: "Job training, GED prep, and career development for young adults.", category: "Education", lat: 33.7480, lng: -117.8650, address: "1020 N Broadway, Santa Ana, CA 92701", distance: "0.5 mi", images: ["https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop"] },
    { id: "8", name: "El Sol Science and Arts Academy", description: "Dual-language charter school with community programs and family engagement.", category: "Education", lat: 33.7430, lng: -117.8740, address: "1010 N Broadway, Santa Ana, CA 92701", distance: "0.5 mi", images: ["https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop"] },
  ],
  "Long Beach": [
    { id: "1", name: "Long Beach Main Library", description: "Central library with free computers, Wi-Fi, children's area, and community events.", category: "Technology", lat: 33.7688, lng: -118.1935, address: "200 W Broadway, Long Beach, CA 90802", distance: "0.5 mi", images: ["https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=400&fit=crop"] },
    { id: "2", name: "Centro CHA Community Health Center", description: "Health services, ESL, workforce development for underserved communities in Long Beach.", category: "Community Support", lat: 33.7750, lng: -118.1920, address: "1550 Atlantic Ave, Long Beach, CA 90813", distance: "0.6 mi", images: ["https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop"] },
    { id: "3", name: "Boys & Girls Clubs of Long Beach", description: "After-school programs, homework help, STEM activities, and youth development.", category: "Education", lat: 33.7820, lng: -118.1900, address: "3635 Long Beach Blvd, Long Beach, CA 90807", distance: "1.0 mi", images: ["https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop"] },
    { id: "4", name: "Long Beach Community Action Partnership", description: "Head Start, energy assistance, housing support, and family services.", category: "Community Support", lat: 33.7700, lng: -118.1850, address: "117 W Victoria St, Long Beach, CA 90805", distance: "0.8 mi", images: ["https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=400&fit=crop"] },
    { id: "5", name: "UC Links Youth Program – Long Beach", description: "University-community partnership for digital literacy, college prep, and STEM activities.", category: "Education", lat: 33.7838, lng: -118.1141, address: "CSULB, 1250 Bellflower Blvd, Long Beach, CA 90840", distance: "2.0 mi", isUCLinks: true, images: ["https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop"] },
    { id: "6", name: "Multi-Service Center", description: "City-run center with public computers, job search assistance, and social services.", category: "Technology", lat: 33.7680, lng: -118.1940, address: "1301 W 12th St, Long Beach, CA 90813", distance: "0.4 mi", images: ["https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop"] },
    { id: "7", name: "Cambodian Association of America", description: "ESL classes, citizenship prep, youth programs, and cultural services.", category: "Community Support", lat: 33.7790, lng: -118.1880, address: "2390 Pacific Ave, Long Beach, CA 90806", distance: "0.9 mi", images: ["https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=400&fit=crop"] },
    { id: "8", name: "Houghton Park Community Center", description: "Youth recreation, after-school programs, and community meeting space.", category: "Community Support", lat: 33.7900, lng: -118.1780, address: "6301 Myrtle Ave, Long Beach, CA 90805", distance: "1.5 mi", images: ["https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=600&h=400&fit=crop"] },
  ],
};

export function getResourcesForZip(zip: string): Resource[] {
  const data = getZipData(zip);
  if (!data) return [];

  // Check if we have real resources for this city
  const cityResources = CITY_RESOURCES[data.city];
  if (cityResources) return cityResources;

  // Fallback: generic resources with city-only addresses (no fake street numbers)
  const { lat, lng } = data;
  return [
    { id: "1", name: `${data.city} Public Library`, description: "Free computer access, printing, and digital literacy classes. Open 6 days a week.", category: "Technology", lat: lat + 0.008, lng: lng - 0.005, address: `${data.city}, CA`, distance: "0.3 mi", images: ["https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=400&fit=crop"] },
    { id: "2", name: "Community Learning Center", description: "After-school tutoring, homework help, and mentoring for K-12 students.", category: "Education", lat: lat - 0.005, lng: lng + 0.008, address: `${data.city}, CA`, distance: "0.5 mi", images: ["https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop"] },
    { id: "3", name: "Free Wi-Fi Hub @ Community Park", description: "Open-access Wi-Fi hotspot with outdoor seating. Available 6am–10pm.", category: "Technology", lat: lat + 0.012, lng: lng + 0.003, address: `${data.city}, CA`, distance: "0.8 mi", images: ["https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=600&h=400&fit=crop"] },
    { id: "4", name: "Language & Immigration Center", description: "Free ESL classes, citizenship prep, and translation services.", category: "Community Support", lat: lat - 0.009, lng: lng - 0.007, address: `${data.city}, CA`, distance: "1.0 mi", images: ["https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=400&fit=crop"] },
    { id: "5", name: "UC Links Youth Program", description: "University-community partnership providing digital literacy, college prep, and STEM activities for underserved youth.", category: "Education", lat: lat + 0.003, lng: lng - 0.012, address: `${data.city}, CA`, distance: "1.2 mi", isUCLinks: true, images: ["https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop"] },
    { id: "6", name: "Neighborhood Tech Lab", description: "Refurbished laptops available for checkout, coding workshops every Saturday.", category: "Technology", lat: lat - 0.013, lng: lng + 0.005, address: `${data.city}, CA`, distance: "1.5 mi", images: ["https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop"] },
    { id: "7", name: "Family Resource Center", description: "Parenting classes, food assistance referrals, and youth development programs.", category: "Community Support", lat: lat + 0.006, lng: lng + 0.014, address: `${data.city}, CA`, distance: "1.8 mi", images: ["https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop"] },
    { id: "8", name: "UC Links Digital Storytelling Lab", description: "UC-partnered program teaching digital media creation and storytelling to teens.", category: "Education", lat: lat - 0.002, lng: lng - 0.016, address: `${data.city}, CA`, distance: "2.0 mi", isUCLinks: true, images: ["https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=400&fit=crop"] },
  ];
}

export function generateCommunityExplanation(data: ZipData): string {
  return `Your community in ${data.city} (ZIP ${data.zip}) falls in the **top ${data.percentile}% most environmentally burdened** areas in California, according to environmental screening data.\n\nThis means your neighborhood faces higher-than-average exposure to **${data.pollutionFactors.join(", ")}**. These environmental factors don't exist in isolation — they compound existing challenges like **${data.accessIssues.join(", ")}**.\n\nCommunities with high environmental burdens often have fewer resources for education and technology access, creating a cycle that's hard to break. But knowing is the first step — and your community has strengths and resources that can make a difference.`;
}

export const CATEGORY_ICONS: Record<ResourceCategory, string> = {
  "Education": "📚",
  "Technology": "💻",
  "Community Support": "🤝",
};
