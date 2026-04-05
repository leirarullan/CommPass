export type ResourceCategory = "Education" | "Technology" | "Community Support";

export interface CommunityReview {
  id: string;
  author: string;
  text: string;
  date: string;
  approved: boolean;
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
};

// City name → representative ZIP lookup
const CITY_TO_ZIP: Record<string, string> = {
  "los angeles": "90011", "la": "90011",
  "fresno": "93706",
  "san diego": "92113", "national city": "91950", "chula vista": "91911", "san ysidro": "92173",
  "la jolla": "92113", "ocean beach": "92113", "barrio logan": "92113",
  "oakland": "94601", "east oakland": "94603",
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
};

export function lookupCityToZip(query: string): string | null {
  const normalized = query.trim().toLowerCase();
  return CITY_TO_ZIP[normalized] || null;
}

const DEFAULT_ZIP: ZipData = { zip: "00000", lat: 34.0522, lng: -118.2437, city: "California Community", percentile: 75, pollutionFactors: ["air pollution", "traffic emissions", "industrial activity"], accessIssues: ["limited resources", "access gaps", "digital divide"] };

// Haversine distance in km
function haversine(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// Approximate lat/lng from a CA ZIP code using known data points
function estimateZipCoords(zip: string): { lat: number; lng: number } | null {
  const z = parseInt(zip, 10);
  if (z < 90001 || z > 96162) return null;
  
  // Use known ZIP data points for better interpolation
  const known = Object.values(ZIP_DATA).map(d => ({ z: parseInt(d.zip, 10), lat: d.lat, lng: d.lng }));
  known.sort((a, b) => a.z - b.z);
  
  // Find bracketing ZIPs
  let lower = known[0], upper = known[known.length - 1];
  for (let i = 0; i < known.length - 1; i++) {
    if (z >= known[i].z && z <= known[i + 1].z) {
      lower = known[i];
      upper = known[i + 1];
      break;
    }
  }
  
  if (upper.z === lower.z) return { lat: lower.lat, lng: lower.lng };
  const t = (z - lower.z) / (upper.z - lower.z);
  return { lat: lower.lat + t * (upper.lat - lower.lat), lng: lower.lng + t * (upper.lng - lower.lng) };
}

export function getZipData(zip: string): ZipData {
  if (ZIP_DATA[zip]) return ZIP_DATA[zip];

  // Find closest known ZIP by geographic proximity
  const estimated = estimateZipCoords(zip);
  if (estimated) {
    let closest: ZipData | null = null;
    let minDist = Infinity;
    for (const entry of Object.values(ZIP_DATA)) {
      const d = haversine(estimated.lat, estimated.lng, entry.lat, entry.lng);
      if (d < minDist) {
        minDist = d;
        closest = entry;
      }
    }
    if (closest) {
      return { ...closest, zip, city: closest.city };
    }
  }

  return { ...DEFAULT_ZIP, zip, city: `ZIP ${zip} Area` };
}

export function getResourcesForZip(zip: string): Resource[] {
  const data = getZipData(zip);
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
