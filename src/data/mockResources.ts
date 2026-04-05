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
  "90011": { zip: "90011", lat: 33.9925, lng: -118.2551, city: "Los Angeles", percentile: 95, pollutionFactors: ["diesel particulate matter", "toxic releases", "traffic density"], accessIssues: ["limited park access", "few community centers", "digital divide"] },
  "93706": { zip: "93706", lat: 36.7103, lng: -119.8093, city: "Fresno", percentile: 98, pollutionFactors: ["pesticide use", "PM2.5 concentrations", "groundwater threats"], accessIssues: ["lack of broadband", "limited tutoring", "few libraries"] },
  "92113": { zip: "92113", lat: 32.6901, lng: -117.1189, city: "San Diego", percentile: 90, pollutionFactors: ["traffic pollution", "hazardous waste facilities", "ozone levels"], accessIssues: ["language barriers", "underfunded schools", "limited after-school programs"] },
  "94601": { zip: "94601", lat: 37.7752, lng: -122.2141, city: "Oakland", percentile: 88, pollutionFactors: ["lead exposure risk", "diesel emissions", "cleanup sites"], accessIssues: ["digital divide", "limited ESL programs", "overcrowded schools"] },
  "95116": { zip: "95116", lat: 37.3496, lng: -121.8481, city: "San Jose", percentile: 82, pollutionFactors: ["groundwater contamination", "air toxics", "traffic density"], accessIssues: ["high housing costs", "limited free programs", "language access"] },
};

const DEFAULT_ZIP: ZipData = { zip: "00000", lat: 34.0522, lng: -118.2437, city: "California Community", percentile: 75, pollutionFactors: ["air pollution", "traffic emissions", "industrial activity"], accessIssues: ["limited resources", "access gaps", "digital divide"] };

export function getZipData(zip: string): ZipData {
  return ZIP_DATA[zip] || { ...DEFAULT_ZIP, zip, city: `ZIP ${zip} Area` };
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
