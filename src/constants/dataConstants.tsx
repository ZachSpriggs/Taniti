type CuisineCategory =
  | "Restaurant"
  | "Casual"
  | "Food Cart"
  | "Convenience Store"
  | "Grocery Store"
  | "Supermarket";

type LodgingCategory =
  | "Hotel"
  | "Hostel"
  | "Resort"
  | "Cabin"
  | "Condo"
  | "Bed & Breakfast";

type EntertainmentCategory =
  | "Relaxing"
  | "Active"
  | "Local Favorite"
  | "Tourist"
  | "Outdoors"
  | "Indoors";

  type TransportationCategory =
  | "Bicycle"
  | "Moped"
  | "Public Bus"
  | "Rental Car"
  | "Private Bus"
  | "Taxi";

export type DataEntry = {
  category?:
    | CuisineCategory
    | LodgingCategory
    | EntertainmentCategory
    | TransportationCategory;
  name?: string;
  description?: string;
  cuisine?: string;
  vibe?: string;
  image?: string;
};

export const foodEstablishments: DataEntry[] = [
  {
    category: "Restaurant",
    name: "Ocean's Pearl",
    cuisine: "Local Fish and Rice",
    description:
      "Upscale beachfront dining featuring the day's catch prepared with traditional Tanitian methods. Known for their signature volcano-salt crusted fish and panoramic ocean views.",
    vibe: "Elegant open-air dining with traditional Tanitian architecture and romantic sunset views.",
    image: "/images/dining-1.webp",
  },
  {
    category: "Restaurant",
    name: "Jade Dynasty",
    cuisine: "Pan-Asian Fusion",
    description:
      "Sophisticated Asian fusion restaurant combining traditional recipes with local Tanitian ingredients. Their dragon roll featuring local tuna and mango has won multiple culinary awards.",
    vibe: "Modern elegant interior with traditional Asian accents and private dining rooms.",
    image: "/images/dining-2.webp",
  },
  {
    category: "Restaurant",
    name: "The Colonial",
    cuisine: "International Fine Dining",
    description:
      "Located in a restored colonial building, offering a blend of European techniques with tropical ingredients. Features an extensive wine cellar and craft cocktail menu.",
    vibe: "Refined colonial-era atmosphere with white tablecloths and period decorations.",
    image: "/images/dining-3.webp",
  },
  {
    category: "Restaurant",
    name: "Volcanic View",
    cuisine: "Modern Tanitian",
    description:
      "Contemporary take on traditional Tanitian cuisine, offering spectacular views of the island's volcano. Famous for their lava-stone cooking presentations.",
    vibe: "Contemporary design with floor-to-ceiling windows and dramatic lighting.",
    image: "/images/dining-4.webp",
  },
  {
    category: "Casual",
    name: "Harbor House",
    cuisine: "Seafood & Sandwiches",
    description:
      "Family-friendly spot serving fresh seafood sandwiches and casual fare. Perfect for lunch after morning activities.",
    vibe: "Relaxed maritime atmosphere with harbor views and outdoor seating.",
    image: "/images/dining-5.webp",
  },
  {
    category: "Casual",
    name: "Surf & Turf Grill",
    cuisine: "American-Tanitian Fusion",
    description:
      "Popular spot combining American classics with local flavors. Known for their teriyaki burger and grilled mahi-mahi sandwich.",
    vibe: "Surf-themed casual environment with local sports on TV.",
    image: "/images/dining-6.webp",
  },
  {
    category: "Casual",
    name: "Rainbow Cafe",
    cuisine: "International Breakfast & Lunch",
    description:
      "All-day breakfast spot serving both Western and Tanitian morning favorites. Famous for their tropical fruit pancakes.",
    vibe: "Bright, cheerful atmosphere with local artwork and beach views.",
    image: "/images/dining-7.webp",
  },
  {
    category: "Food Cart",
    name: "Tiki Tacos",
    cuisine: "Mexican-Tanitian Fusion",
    description:
      "Popular beachside cart serving fusion tacos featuring local fish and tropical salsas. Don't miss their mango habanero sauce.",
    vibe: "Colorful beach cart with sandy picnic table seating.",
    image: "/images/dining-8.webp",
  },
  {
    category: "Food Cart",
    name: "Noodle Express",
    cuisine: "Pan-Asian Street Food",
    description:
      "Evening food cart specializing in Asian noodle dishes with local twists. Their coconut curry udon is legendary.",
    vibe: "Atmospheric night spot with string lights and counter seating.",
    image: "/images/dining-9.webp",
  },
  {
    category: "Food Cart",
    name: "Island Smoothie Station",
    cuisine: "Healthy Drinks & Snacks",
    description:
      "Fresh tropical smoothies and light bites made with local fruits. Perfect for beach refreshments.",
    vibe: "Bright tropical cart with palm-shaded seating area.",
    image: "/images/dining-10.webp",
  },
  {
    category: "Supermarket",
    name: "Island Fresh Market",
    cuisine: "Full Service Grocery",
    description:
      "Largest supermarket on Taniti, offering everything from local produce to imported goods. Features an in-house bakery and deli section.",
    vibe: "Modern, well-lit store with wide aisles and excellent air conditioning.",
    image: "/images/grocery-1.webp",
  },
  {
    category: "Supermarket",
    name: "Pacific Provisions",
    cuisine: "Full Service Grocery",
    description:
      "Comprehensive supermarket with a focus on local and organic products. Includes a fresh fish counter and imported goods section.",
    vibe: "Clean and organized with a focus on local products and friendly service.",
    image: "/images/grocery-2.webp",
  },
  {
    category: "Grocery Store",
    name: "Harbor Market",
    cuisine: "Basic Groceries",
    description:
      "Family-owned grocery store near the harbor specializing in local products and basic necessities. Great for fresh fish and produce.",
    vibe: "Quaint local shop with personal service and local charm.",
    image: "/images/grocery-3.webp",
  },
  {
    category: "Grocery Store",
    name: "Village Grocers",
    cuisine: "Basic Groceries",
    description:
      "Neighborhood grocery store offering everyday essentials and local specialties. Known for their fresh bread and local fruit selection.",
    vibe: "Traditional market atmosphere with friendly local staff.",
    image: "/images/grocery-4.webp",
  },
  {
    category: "Convenience Store",
    name: "24/7 Paradise Stop",
    cuisine: "Quick Essentials",
    description:
      "Open 24 hours, offering snacks, drinks, basic necessities, and emergency supplies. Popular for late-night needs and quick purchases.",
    vibe: "Bright and clean with friendly overnight staff and easy parking.",
    image: "/images/grocery-5.webp",
  },
];

export const lodgingData: DataEntry[] = [
  {
    category: "Resort",
    name: "Yellow Leaf Bay Resort",
    description:
      "Our premier four-star resort offers luxurious accommodations with stunning ocean views. As Taniti's largest resort, guests enjoy world-class amenities while meeting our strict government safety and quality standards.",
    image: "/images/lodging1.webp",
  },
  {
    category: "Hostel",
    name: "Taniti Backpackers Haven",
    description:
      "Our inexpensive hostel provides clean, comfortable accommodations for budget-conscious travelers. Regularly inspected and certified by the Tanitian government, we offer a safe and friendly environment for adventurers.",
    image: "/images/lodging2.webp",
  },
  {
    category: "Hotel",
    name: "Island Family Inn",
    description:
      "One of Taniti's beloved family-owned hotels, we offer a personal touch with every stay. Our small, well-maintained property combines local hospitality with professional service, meeting all government regulations.",
    image: "/images/lodging3.webp",
  },
  {
    category: "Bed & Breakfast",
    name: "Merriton Landing B&B",
    description:
      "Part of Taniti's growing B&B scene, our newly established guesthouse offers intimate accommodations with homemade local breakfast. We pride ourselves on exceeding the strict Tanitian hospitality standards.",
    image: "/images/lodging4.webp",
  },
  {
    category: "Hotel",
    name: "Coastal Palms Hotel",
    description:
      "Our family-run hotel combines traditional Tanitian hospitality with modern comfort. Regular government inspections ensure we maintain the highest standards while offering an authentic island experience.",
    image: "/images/lodging5.webp",
  },
  {
    category: "Cabin",
    name: "Rainforest Retreat",
    description:
      "Experience Taniti's natural beauty in our cozy cabin accommodations. Fully certified and regularly inspected, our retreats offer a perfect balance of comfort and connection with nature.",
    image: "/images/lodging6.webp",
  },
  {
    category: "Condo",
    name: "Bay View Condominiums",
    description:
      "Modern, self-contained units perfect for extended stays in Taniti. Our condos meet all government regulations while providing the comforts of home with stunning island views.",
    image: "/images/lodging7.webp",
  },
  {
    category: "Bed & Breakfast",
    name: "Harbor Light B&B",
    description:
      "A charming addition to Taniti's bed and breakfast options, offering peaceful rooms and fresh local breakfasts. We maintain the highest standards through regular government inspections.",
    image: "/images/lodging8.webp",
  },
  {
    category: "Hotel",
    name: "Palm Court Hotel",
    description:
      "Another of Taniti's quality family-owned hotels, offering comfortable rooms and genuine island hospitality. Our establishment proudly adheres to all local regulations and inspection requirements.",
    image: "/images/lodging9.webp",
  }
];

export const transportationData: DataEntry[] = [
  {
    category: "Public Bus",
    name: "Taniti City Express",
    description: 
      "The Taniti City Express provides comprehensive public bus service throughout the city from 5 AM to 11 PM daily. Our modern buses connect all major destinations with frequent, reliable service making city exploration convenient and affordable.",
    image: "/images/transport1.webp",
  },
  {
    category: "Private Bus",
    name: "Island Explorer Tours",
    description:
      "Island Explorer Tours operates private buses that serve the entire island beyond Taniti City limits. Our comfortable coaches take you to remote beaches, scenic viewpoints and hidden gems that public transport doesn't reach.",
    image: "/images/transport2.webp",
  },
  {
    category: "Taxi",
    name: "Taniti City Cabs",
    description:
      "Taniti City Cabs offers reliable taxi service throughout the city center and surrounding areas. Our experienced drivers know every corner of Taniti City and provide convenient point-to-point transportation whenever you need it.",
    image: "/images/transport3.webp",
  },
  {
    category: "Rental Car",
    name: "Airport Auto Rental",
    description:
      "Located conveniently near the airport, Airport Auto Rental provides a fleet of well-maintained vehicles for exploring Taniti at your own pace. Visit our rental counter right after landing to begin your self-guided island adventure.",
    image: "/images/transport4.webp",
  },
  {
    category: "Bicycle",
    name: "City Cycles",
    description:
      "City Cycles rents bikes perfect for exploring Taniti's flat, walkable terrain. We provide required helmets with all rentals as mandated by law. Our convenient locations around the city make it easy to enjoy Taniti on two wheels.",
    image: "/images/transport5.webp",
  },
  {
    category: "Moped",
    name: "Merriton Mopeds",
    description:
      "Based in the popular Merriton Landing area, Merriton Mopeds offers an easy way to zip around Taniti City's flat streets. Our mopeds are perfect for quick trips and exploring the easily navigable Merriton Landing district.",
    image: "/images/transport6.webp",
  }
];

export const entertainmentData: DataEntry[] = [
  {
    category: "Relaxing",
    name: "Yellow Leaf Bay Beaches",
    description:
      "Experience pristine shorelines perfect for swimming, sunbathing, and peaceful beach walks. Our well-maintained beaches offer stunning views of the bay and gentle waters ideal for a relaxing day by the ocean.",
    image: "/images/activity1.webp",
  },
  {
    category: "Active",
    name: "Rainforest Zipline Tours",
    description:
      "Soar through the lush canopy of Taniti's rainforest on our exciting zipline course. Located in Merriton Landing, our professional guides ensure a thrilling and safe adventure above the tropical forest.",
    image: "/images/activity2.webp",
  },
  {
    category: "Tourist",
    name: "Taniti Volcano Expeditions",
    description:
      "One of our most popular tourist attractions, our guided volcano tours offer spectacular views of Taniti's active volcano. Expert guides share geological insights while ensuring a safe viewing experience.",
    image: "/images/activity3.webp",
  },
  {
    category: "Active",
    name: "Bay Snorkel Adventures",
    description:
      "Discover the vibrant underwater world of Yellow Leaf Bay through our snorkeling tours. We provide all equipment and guidance for both beginners and experienced snorkelers.",
    image: "/images/activity4.webp",
  },
  {
    category: "Local Favorite",
    name: "Island Fishing Charters",
    description:
      "Join local fishermen for authentic chartered fishing tours, a beloved activity among island residents. Our experienced captains share their favorite spots and traditional fishing techniques.",
    image: "/images/activity5.webp",
  },
  {
    category: "Indoors",
    name: "Merriton Microbrewery",
    description:
      "Sample unique island-inspired craft beers at our popular microbrewery in Merriton Landing. A favorite gathering spot in our rapidly developing entertainment district.",
    image: "/images/activity6.webp",
  },
  {
    category: "Indoors",
    name: "Island Rhythm Dance Club",
    description:
      "Our new dance club in Merriton Landing offers exciting nightlife with a mix of local and international music. The newest addition to Taniti's growing entertainment scene.",
    image: "/images/activity7.webp",
  },
  {
    category: "Outdoors",
    name: "Tropical Helicopter Tours",
    description:
      "Take in breathtaking aerial views of Taniti's diverse landscape on our helicopter tours. Witness the island's beaches, rainforest, and volcano from a stunning new perspective.",
    image: "/images/activity8.webp",
  },
  {
    category: "Local Favorite",
    name: "Taniti Heritage Museum",
    description:
      "A treasured local institution exploring the rich history and culture of our island. Our museum offers interactive exhibits and expert guides who bring Taniti's fascinating past to life.",
    image: "/images/activity9.webp",
  }
];