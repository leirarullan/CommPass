import { type Resource } from "./mockResources";

export interface UCLinksProgram {
  id: string;
  name: string;
  campus: string;
  description: string;
  image: string;
  url: string;
  city: string;
  lat: number;
  lng: number;
}

// All UC Links California programs from uclinks.berkeley.edu/programs
export const UC_LINKS_PROGRAMS: UCLinksProgram[] = [
  {
    id: "ucl-1",
    name: "21st Century Community Learning Centers",
    campus: "UC Berkeley",
    description: "A literacy program for Grade K-8 students at four private schools in the San Francisco Bay Area. Activities involving digital and other multimedia communication tools assist children in learning a range of literacy-related practices, including digital storytelling, film production, and collaborative authoring.",
    image: "https://uclinks.berkeley.edu/sites/default/files/styles/panopoly_image_original/public/run1.png?itok=ysiGXoBY&timestamp=1545331490",
    url: "https://ecuc.berkeley.edu/",
    city: "Oakland",
    lat: 37.8716, lng: -122.2727
  },
  {
    id: "ucl-2",
    name: "Berkeley Teacher Education Program Summer Site",
    campus: "UC Berkeley",
    description: "An intern fieldwork experience co-designed with the Berkeley Unified School District. Programs aim to increase the number of African American and Latinx students enrolled in summer school and provide meaningful, enjoyable summer learning options.",
    image: "https://uclinks.berkeley.edu/sites/default/files/styles/openberkeley_brand_widgets_thumbnail/public/screen_shot_2024-03-12_at_2.28.42_pm.png?itok=MJ_lV8PM&timestamp=1710279588",
    url: "https://bse.berkeley.edu/academics/professional-programs/teacher-preparation/BTEP",
    city: "Oakland",
    lat: 37.8753, lng: -122.2592
  },
  {
    id: "ucl-3",
    name: "Teachers of Color Program",
    campus: "UC Berkeley",
    description: "Undergraduates apply course material related to how teachers of color support students' social and emotional development by participating in PreK-12 in-school and after-school programs throughout Oakland Unified School District (OUSD).",
    image: "https://uclinks.berkeley.edu/sites/default/files/styles/openberkeley_brand_widgets_thumbnail/public/travis_bristo_aera_students_cropped.png?itok=nvHXPd_R&timestamp=1705082231",
    url: "https://creeo.berkeley.edu/programs-projects/uc-links-teachers-color",
    city: "Oakland",
    lat: 37.7994, lng: -122.2730
  },
  {
    id: "ucl-4",
    name: "Youth-Plan, Learn, Act Now! (Y-PLAN)",
    campus: "UC Berkeley",
    description: "An award-winning educational strategy that empowers young people to tackle real-world problems in their communities through project-based civic learning experiences. Y-PLAN has engaged students across Oakland, East Palo Alto, and San Francisco.",
    image: "https://uclinks.berkeley.edu/sites/default/files/styles/openberkeley_brand_widgets_thumbnail/public/richmond_mural_painting.jpg?itok=CNIkbaQl&timestamp=1551250711",
    url: "https://citiesandschools.berkeley.edu/major-initiatives/y-plan/",
    city: "Oakland",
    lat: 37.8044, lng: -122.2712
  },
  {
    id: "ucl-5",
    name: "Beta Lab Links",
    campus: "UC Davis",
    description: "A maker program for students at Leataata Floyd Elementary School with undergraduates from UC Davis. Participants investigate learning through extended, youth-driven maker projects. A mobile maker studio expands access to underrepresented student populations.",
    image: "https://uclinks.berkeley.edu/sites/default/files/styles/openberkeley_brand_widgets_thumbnail/public/1_-_cardboard_prototype_blurry_crop.jpg?itok=m703dHkQ&timestamp=1552344590",
    url: "http://education.ucdavis.edu/beta-lab",
    city: "Davis",
    lat: 38.5449, lng: -121.7405
  },
  {
    id: "ucl-6",
    name: "Certificate in After School Education & Summer Education (CASE)",
    campus: "UC Irvine",
    description: "Prepares undergraduates to work with students in local afterschool & summer programs in the Newport-Mesa School District, Kidworks in Santa Ana, Turtle Rock Community Park in Irvine, Girls Inc. in Costa Mesa, and Math CEO on the UCI campus.",
    image: "https://uclinks.berkeley.edu/sites/default/files/styles/openberkeley_brand_widgets_thumbnail/public/programs_case_2014_0949_0.jpg?itok=EfO_YGR9&timestamp=1545332450",
    url: "http://case.education.uci.edu/",
    city: "Irvine",
    lat: 33.6846, lng: -117.8265
  },
  {
    id: "ucl-7",
    name: "El Sol Conexión",
    campus: "UC Irvine",
    description: "Located in historic downtown Santa Ana, El Sol Conexión is a gathering place for the community to engage in critical, creative conversations; enjoy cultural programs and workshops; and where teachers collaborate with scholars and artists.",
    image: "https://uclinks.berkeley.edu/sites/default/files/styles/openberkeley_brand_widgets_thumbnail/public/ballet_folklorico.jpg?itok=W821s4q-&timestamp=1551251846",
    url: "https://www.youtube.com/channel/UCqMwkcmxErQNKwZ_Lvft8Bg",
    city: "Santa Ana",
    lat: 33.7455, lng: -117.8677
  },
  {
    id: "ucl-8",
    name: "Math CEO",
    campus: "UC Irvine",
    description: "Math Community Educational Outreach engages Latinx middle and high school students in Orange County with university faculty, graduate, and undergraduate students in weekly enrichment sessions focused on fun and challenging math problems.",
    image: "https://uclinks.berkeley.edu/sites/default/files/styles/openberkeley_brand_widgets_thumbnail/public/general/math_ceo.jpg?itok=ksB2d2xL&timestamp=1551249256",
    url: "https://sites.ps.uci.edu/mathceo/",
    city: "Irvine",
    lat: 33.6405, lng: -117.8443
  },
  {
    id: "ucl-9",
    name: "Democracy Lab 2.0",
    campus: "UC San Diego",
    description: "A multimedia program at the Town and Country Learning Center in San Diego for P-12 age students. Democracy Lab is focused on how to co-design experiences that put tangible, immediate practices for change in the hands of young people and families.",
    image: "https://uclinks.berkeley.edu/sites/default/files/styles/openberkeley_brand_widgets_thumbnail/public/child_and_ugrad_with_camera.jpg?itok=k55YRhEi&timestamp=1551252761",
    url: "http://ucsddemocracylab.weebly.com/",
    city: "San Diego",
    lat: 32.8801, lng: -117.2340
  },
  {
    id: "ucl-10",
    name: "La Clase Mágica",
    campus: "UC San Diego",
    description: "Recently celebrated its 30 year anniversary, LCM engages elementary and middle school youth in robotics, art, literacy and well-being activities in partnership with La Colonia de Eden Gardens and the UCSD Partners At Learning program.",
    image: "https://uclinks.berkeley.edu/sites/default/files/styles/openberkeley_brand_widgets_thumbnail/public/lcm_photo_from_lceg_website.jpeg?itok=Hla7pKoV&timestamp=1630521166",
    url: "https://www.lceg.org/programs.html",
    city: "San Diego",
    lat: 32.8328, lng: -117.1513
  },
  {
    id: "ucl-11",
    name: "Technology and Cultural Kumeyaay Literacy Education (TACKLE)",
    campus: "UC San Diego",
    description: "A cultural and literacy program designed for Native American K-2 youth in a community center in Valley Center, promoting technology and Kumeyaay cultural literacy.",
    image: "https://uclinks.berkeley.edu/sites/default/files/styles/openberkeley_brand_widgets_thumbnail/public/kumeyaay_language_tackle.jpeg?itok=2cV9Qnr1&timestamp=1630522769",
    url: "http://lchcautobio.ucsd.edu/la-clase-magica-lcm/",
    city: "San Diego",
    lat: 33.1504, lng: -117.0345
  },
  {
    id: "ucl-12",
    name: "Club Proteo & St. George Youth Makerspace",
    campus: "UC Santa Barbara",
    description: "An afterschool digital literacy program that brings UCSB undergraduates together with elementary students at the Goleta Boys and Girls Club. Participants create interest-based computer and video projects blending art, STEM, and community activism.",
    image: "https://uclinks.berkeley.edu/sites/default/files/styles/openberkeley_brand_widgets_thumbnail/public/poetry_0.jpg?itok=pFcixfLi&timestamp=1552346453",
    url: "https://islavistayouthmakers.squarespace.com/",
    city: "Santa Barbara",
    lat: 34.4133, lng: -119.8610
  },
  {
    id: "ucl-13",
    name: "Community Based Literacies (CBL)",
    campus: "UC Santa Barbara",
    description: "An interdisciplinary, multicultural, and multilingual community of scholars who position themselves as co-thinkers, co-researchers, co-designers, and co-creators with local youth and educators.",
    image: "https://uclinks.berkeley.edu/sites/default/files/styles/openberkeley_brand_widgets_thumbnail/public/img_8618.jpg?itok=r4NZtog3&timestamp=1553641218",
    url: "https://www.cbleducation.org/programs",
    city: "Santa Barbara",
    lat: 34.4140, lng: -119.8489
  },
  {
    id: "ucl-14",
    name: "Corre la Voz",
    campus: "UC Santa Cruz",
    description: "Works with 4th and 5th grade dual-language learners in interactive spaces of reading, drama, games, social research, and digital projects (photo-voice and movie-making) to promote critical literacy and community justice.",
    image: "https://uclinks.berkeley.edu/sites/default/files/styles/openberkeley_brand_widgets_thumbnail/public/dsc_0566.jpg?itok=tJZPkCQL&timestamp=1553617239",
    url: "https://correlavoz.sites.ucsc.edu/",
    city: "Santa Cruz",
    lat: 36.9741, lng: -122.0308
  },
  {
    id: "ucl-15",
    name: "Alzamos La Voz: Raising our Voices",
    campus: "UC Santa Cruz",
    description: "Creates a community where youth and adults promote youth well-being by connecting young people to resources and opportunities to create positive community change and elevate youth voices in decision-making.",
    image: "https://uclinks.berkeley.edu/sites/default/files/styles/openberkeley_brand_widgets_thumbnail/public/screenshot_2023-04-10_at_2.09.37_pm.png?itok=PS7WJRZy&timestamp=1682454301",
    url: "http://www.sccyan.org/",
    city: "Santa Cruz",
    lat: 36.9741, lng: -122.0308
  },
  {
    id: "ucl-16",
    name: "Fifth Dimension & CEPI",
    campus: "Whittier College",
    description: "A digital and literacy program for Grade K-6 students where play and learning unfold through educational computer games, telecommunications tasks, and Internet investigations requiring reading, writing, mathematics, and logical problem solving.",
    image: "https://uclinks.berkeley.edu/sites/default/files/styles/openberkeley_brand_widgets_thumbnail/public/kids_and_ipad_in_space.jpeg?itok=S-SDl6S0&timestamp=1551248404",
    url: "https://www.whittier5thdimension.org/",
    city: "Los Angeles",
    lat: 33.9772, lng: -118.0328
  },
  {
    id: "ucl-17",
    name: "Math CEO (CSU Dominguez Hills)",
    campus: "CSU Dominguez Hills",
    description: "Increases access to high quality STEM afterschool programs for underrepresented youth in the Los Angeles and Compton Unified School Districts while giving CSUDH undergraduates experience in educational material development.",
    image: "https://uclinks.berkeley.edu/sites/default/files/styles/openberkeley_brand_widgets_thumbnail/public/csu_dominguez_hills_-_math_ceo.png?itok=g1JusGPt&timestamp=1657574482",
    url: "https://uclinks.berkeley.edu/programs",
    city: "Los Angeles",
    lat: 33.8636, lng: -118.2562
  },
  {
    id: "ucl-18",
    name: "Y-PLAN (CSU San Jose)",
    campus: "CSU San Jose",
    description: "Works with youth, educators and community partners to design curricula and create learning environments that put youth voices at the center, developing digital literacies to address societal problems.",
    image: "https://uclinks.berkeley.edu/sites/default/files/styles/openberkeley_brand_widgets_thumbnail/public/y-plan_-_san_jose.jpg?itok=--tI7Ag3&timestamp=1657573741",
    url: "https://www.sjsu.edu/education/community/clarion-project.php",
    city: "San Jose",
    lat: 37.3352, lng: -121.8811
  },
  {
    id: "ucl-19",
    name: "Nuestra Ciencia",
    campus: "CalPoly",
    description: "A university-community partnership where Cal Poly college students teach microbiology concepts in Spanish to bilingual elementary students, promoting science literacy and elevating undergraduates as STEM role models for Latinx children.",
    image: "https://uclinks.berkeley.edu/sites/default/files/styles/openberkeley_brand_widgets_thumbnail/public/calpoly_-_nuestra_ciencia.png?itok=qd3YY8sD&timestamp=1657657680",
    url: "http://nuestraciencia.org/",
    city: "San Luis Obispo",
    lat: 35.3050, lng: -120.6625
  },
  {
    id: "ucl-20",
    name: "Youth Participatory Action Research (YPAR)",
    campus: "CSU Sacramento",
    description: "Promotes critical literacy, civic engagement, community-connection, and stewardship of neighborhood resources. Develops children's functional skills in reading, writing, multimedia creation, critical thinking, and community change.",
    image: "https://uclinks.berkeley.edu/sites/default/files/styles/openberkeley_brand_widgets_thumbnail/public/calpoly_-_nuestra_ciencia_0.png?itok=w94rP-69&timestamp=1657657794",
    url: "https://www.csus.edu/news/newsroom/stories/2024/7/morrison-creek.html",
    city: "Sacramento",
    lat: 38.5616, lng: -121.4944
  },
];

// Map UC Links programs to the supported ZIP codes by city proximity
const CITY_TO_PROGRAMS: Record<string, string[]> = {
  "Los Angeles": ["ucl-16", "ucl-17"],
  "Fresno": [],
  "San Diego": ["ucl-9", "ucl-10", "ucl-11"],
  "Oakland": ["ucl-1", "ucl-2", "ucl-3", "ucl-4"],
  "San Jose": ["ucl-18"],
};

// Map cities to nearby regions so they show relevant programs
const CITY_REGION: Record<string, string> = {
  "Huntington Park": "Los Angeles",
  "South Gate": "Los Angeles",
  "Compton": "Los Angeles",
  "Pomona": "Los Angeles",
  "National City": "San Diego",
  "Chula Vista": "San Diego",
  "San Ysidro": "San Diego",
  "San Francisco": "Oakland",
  "Riverside": "Los Angeles",
  "San Bernardino": "Los Angeles",
  "Sacramento": "Oakland",
  "Stockton": "Oakland",
  "Bakersfield": "Fresno",
};

export function getUCLinksProgramsForCity(city: string): UCLinksProgram[] {
  const resolvedCity = CITY_TO_PROGRAMS[city] ? city : CITY_REGION[city] || null;
  if (!resolvedCity) return [];
  const ids = CITY_TO_PROGRAMS[resolvedCity] || [];
  return UC_LINKS_PROGRAMS.filter(p => ids.includes(p.id));
}

// Convert UC Links programs to Resource format for map display
export function getUCLinksResourcesForCity(city: string): Resource[] {
  const programs = getUCLinksProgramsForCity(city);
  return programs.map(p => ({
    id: p.id,
    name: `${p.campus} - ${p.name}`,
    description: p.description,
    category: "Education" as const,
    lat: p.lat,
    lng: p.lng,
    address: `${p.campus}, ${p.city}, CA`,
    isUCLinks: true,
    images: [p.image],
  }));
}

// Get ALL UC Links programs (for a dedicated page or section)
export function getAllUCLinksPrograms(): UCLinksProgram[] {
  return UC_LINKS_PROGRAMS;
}
