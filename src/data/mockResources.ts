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

export function lookupCityToZip(query: string): string | null {
  const normalized = query.trim().toLowerCase();
  return CITY_TO_ZIP[normalized] || null;
}


export function getZipData(zip: string): ZipData | null {
  return ZIP_DATA[zip] || null;
}

export function isValidLocation(query: string): boolean {
  const trimmed = query.trim();
  if (/^\d{5}$/.test(trimmed)) return !!ZIP_DATA[trimmed];
  return !!lookupCityToZip(trimmed);
}

export function getResourcesForZip(zip: string): Resource[] {
  const data = getZipData(zip);
  if (!data) return [];
  const { lat, lng } = data;
  return [
    { id: "1", name: `${data.city} Public Library`, description: "Free computer access, printing, and digital literacy classes. Open 6 days a week.", category: "Technology", lat: lat + 0.008, lng: lng - 0.005, address: `123 Main St, ${data.city}`, distance: "0.3 mi", images: ["https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=400&fit=crop"] },
    { id: "2", name: "Community Learning Center", description: "After-school tutoring, homework help, and mentoring for K-12 students.", category: "Education", lat: lat - 0.005, lng: lng + 0.008, address: `456 Oak Ave, ${data.city}`, distance: "0.5 mi", images: ["https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop"] },
    { id: "3", name: "Free Wi-Fi Hub @ Community Park", description: "Open-access Wi-Fi hotspot with outdoor seating. Available 6am–10pm.", category: "Technology", lat: lat + 0.012, lng: lng + 0.003, address: `789 Park Blvd, ${data.city}`, distance: "0.8 mi", images: ["https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=600&h=400&fit=crop"] },
    { id: "4", name: "Language & Immigration Center", description: "Free ESL classes, citizenship prep, and translation services in Spanish, Vietnamese, and Mandarin.", category: "Community Support", lat: lat - 0.009, lng: lng - 0.007, address: `321 Elm St, ${data.city}`, distance: "1.0 mi", images: ["https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=400&fit=crop"] },
    { id: "5", name: "UC Links Youth Program", description: "University-community partnership providing digital literacy, college prep, and STEM activities for underserved youth.", category: "Education", lat: lat + 0.003, lng: lng - 0.012, address: `555 University Way, ${data.city}`, distance: "1.2 mi", isUCLinks: true, images: ["https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop"] },
    { id: "6", name: "Neighborhood Tech Lab", description: "Refurbished laptops available for checkout, coding workshops every Saturday.", category: "Technology", lat: lat - 0.013, lng: lng + 0.005, address: `678 Tech Dr, ${data.city}`, distance: "1.5 mi", images: ["https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop"] },
    { id: "7", name: "Family Resource Center", description: "Parenting classes, food assistance referrals, and youth development programs.", category: "Community Support", lat: lat + 0.006, lng: lng + 0.014, address: `890 Family Ln, ${data.city}`, distance: "1.8 mi", images: ["https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop"] },
    { id: "8", name: "UC Links Digital Storytelling Lab", description: "UC-partnered program teaching digital media creation and storytelling to teens.", category: "Education", lat: lat - 0.002, lng: lng - 0.016, address: `111 Campus Rd, ${data.city}`, distance: "2.0 mi", isUCLinks: true, images: ["https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=400&fit=crop"] },
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
