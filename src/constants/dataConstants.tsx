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
  | "Indoors"

type TransportationCategory = 
  | "Bicycle"
  | "Moped"
  | "Public Bus"
  | "Rental Car"
  | "Private Bus"
  | "Taxi";


  export type DataEntry = {
    category: CuisineCategory | LodgingCategory | EntertainmentCategory | TransportationCategory;
    name: string;
    description: string;
    cuisine?: string;
    vibe?: string;
    image: string;
  };

  export const foodEstablishments: DataEntry[] = [
    {
      category: "Restaurant",
      name: "Ocean's Pearl",
      cuisine: "Local Fish and Rice",
      description: "Upscale beachfront dining featuring the day's catch prepared with traditional Tanitian methods. Known for their signature volcano-salt crusted fish and panoramic ocean views.",
      vibe: "Elegant open-air dining with traditional Tanitian architecture and romantic sunset views.",
      image: '/images/dining-1.webp',
    },
    {
      category: "Restaurant",
      name: "Jade Dynasty",
      cuisine: "Pan-Asian Fusion",
      description: "Sophisticated Asian fusion restaurant combining traditional recipes with local Tanitian ingredients. Their dragon roll featuring local tuna and mango has won multiple culinary awards.",
      vibe: "Modern elegant interior with traditional Asian accents and private dining rooms.",
      image: "/images/dining-2.webp"
    },
    {
      category: "Restaurant",
      name: "The Colonial",
      cuisine: "International Fine Dining",
      description: "Located in a restored colonial building, offering a blend of European techniques with tropical ingredients. Features an extensive wine cellar and craft cocktail menu.",
      vibe: "Refined colonial-era atmosphere with white tablecloths and period decorations.",
      image: "/images/dining-3.webp",
    },
    {
      category: "Restaurant",
      name: "Volcanic View",
      cuisine: "Modern Tanitian",
      description: "Contemporary take on traditional Tanitian cuisine, offering spectacular views of the island's volcano. Famous for their lava-stone cooking presentations.",
      vibe: "Contemporary design with floor-to-ceiling windows and dramatic lighting.",
      image: "/images/dining-4.webp",
    },
    {
      category: "Casual",
      name: "Harbor House",
      cuisine: "Seafood & Sandwiches",
      description: "Family-friendly spot serving fresh seafood sandwiches and casual fare. Perfect for lunch after morning activities.",
      vibe: "Relaxed maritime atmosphere with harbor views and outdoor seating.",
      image: "/images/dining-5.webp",
    },
    {
      category: "Casual",
      name: "Surf & Turf Grill",
      cuisine: "American-Tanitian Fusion",
      description: "Popular spot combining American classics with local flavors. Known for their teriyaki burger and grilled mahi-mahi sandwich.",
      vibe: "Surf-themed casual environment with local sports on TV.",
      image: "/images/dining-6.webp",
    },
    {
      category: "Casual",
      name: "Rainbow Cafe",
      cuisine: "International Breakfast & Lunch",
      description: "All-day breakfast spot serving both Western and Tanitian morning favorites. Famous for their tropical fruit pancakes.",
      vibe: "Bright, cheerful atmosphere with local artwork and beach views.",
      image: "/images/dining-7.webp",
    },
    {
      category: "Food Cart",
      name: "Tiki Tacos",
      cuisine: "Mexican-Tanitian Fusion",
      description: "Popular beachside cart serving fusion tacos featuring local fish and tropical salsas. Don't miss their mango habanero sauce.",
      vibe: "Colorful beach cart with sandy picnic table seating.",
      image: "/images/dining-8.webp",
    },
    {
      category: "Food Cart",
      name: "Noodle Express",
      cuisine: "Pan-Asian Street Food",
      description: "Evening food cart specializing in Asian noodle dishes with local twists. Their coconut curry udon is legendary.",
      vibe: "Atmospheric night spot with string lights and counter seating.",
      image: "/images/dining-9.webp",
    },
    {
      category: "Food Cart",
      name: "Island Smoothie Station",
      cuisine: "Healthy Drinks & Snacks",
      description: "Fresh tropical smoothies and light bites made with local fruits. Perfect for beach refreshments.",
      vibe: "Bright tropical cart with palm-shaded seating area.",
      image: "/images/dining-10.webp",
    },
    {
      category: "Supermarket",
      name: "Island Fresh Market",
      cuisine: "Full Service Grocery",
      description: "Largest supermarket on Taniti, offering everything from local produce to imported goods. Features an in-house bakery and deli section.",
      vibe: "Modern, well-lit store with wide aisles and excellent air conditioning.",
      image: "/images/grocery-1.webp",
    },
    {
      category: "Supermarket",
      name: "Pacific Provisions",
      cuisine: "Full Service Grocery",
      description: "Comprehensive supermarket with a focus on local and organic products. Includes a fresh fish counter and imported goods section.",
      vibe: "Clean and organized with a focus on local products and friendly service.",
      image: "/images/grocery-2.webp",
    },
    {
      category: "Grocery Store",
      name: "Harbor Market",
      cuisine: "Basic Groceries",
      description: "Family-owned grocery store near the harbor specializing in local products and basic necessities. Great for fresh fish and produce.",
      vibe: "Quaint local shop with personal service and local charm.",
      image: "/images/grocery-3.webp",
    },
    {
      category: "Grocery Store",
      name: "Village Grocers",
      cuisine: "Basic Groceries",
      description: "Neighborhood grocery store offering everyday essentials and local specialties. Known for their fresh bread and local fruit selection.",
      vibe: "Traditional market atmosphere with friendly local staff.",
      image: "/images/grocery-4.webp",
    },
    {
      category: "Convenience Store",
      name: "24/7 Paradise Stop",
      cuisine: "Quick Essentials",
      description: "Open 24 hours, offering snacks, drinks, basic necessities, and emergency supplies. Popular for late-night needs and quick purchases.",
      vibe: "Bright and clean with friendly overnight staff and easy parking.",
      image: "/images/grocery-5.webp",
    },
  ];
  
  export const lodgingData: DataEntry[] = [
    {
      name: "Azure Bay Resort",
      category: "Resort",
      description:
        "Nestled on the shores of Crystal Cove, Azure Bay Resort offers luxurious accommodations with breathtaking ocean views. Guests can enjoy world-class amenities, including a spa, infinity pool, gourmet restaurants, and private beach access.",
      image: "../images/lodging-1.webp",
    },
    {
      name: "Taniti Traveller's Hostel",
      category: "Hostel",
      description:
        "A budget-friendly option for travelers, Taniti Traveller's Hostel provides clean, comfortable dormitory-style accommodations. It's a great place to meet fellow adventurers and explore Taniti together.",
      image: "../images/lodging-2.webp",
    },
    {
      name: "Palm Grove Inn",
      category: "Hotel",
      description:
        "Operated by a local family for generations, Palm Grove Inn offers cozy and intimate accommodations with a personal touch. Guests can enjoy homemade breakfast and the lush garden.",
      image: "../images/lodging-5.webp",
    },
    {
      name: "Sunset Beach B&B",
      category: "Bed & Breakfast",
      description:
        "Wake up to stunning ocean views at Sunset Beach B&B, where each room is designed for comfort and relaxation. Guests can enjoy a hearty breakfast on the terrace overlooking the water.",
      image: "../images/lodging-3.webp",
    },
    {
      name: "Tropical Haven Villa",
      category: "Cabin",
      description:
        "Experience the ultimate in privacy and luxury at Tropical Haven Villa, a secluded retreat surrounded by lush tropical gardens. Guests can relax in their private pool or take a short walk to the beach.",
      image: "../images/lodging-6.webp",
    },
    {
      name: "Orchard Lane Guesthouse",
      category: "Bed & Breakfast",
      description:
        "Orchard Lane Guesthouse is nestled amidst lush fruit orchards, offering guests a serene escape and a taste of local agriculture. Enjoy fresh, farm-to-table breakfasts each morning and relax in the quaint, beautifully appointed rooms.",
      image: "../images/lodging-9.webp",
    },
    {
      name: "EcoWave Lodge",
      category: "Hotel",
      description:
        "Immerse yourself in nature at EcoWave Lodge, an eco-friendly retreat that offers sustainable accommodations in harmony with the environment. Guests can enjoy guided nature walks, organic meals, and stargazing.",
      image: "../images/lodging-4.webp",
    },
    {
      name: "Explorer's Camp",
      category: "Cabin",
      description:
        "For those seeking adventure, Explorer's Camp provides rustic yet comfortable accommodations in close proximity to Taniti's best hiking and outdoor activities. It's the perfect base for your island adventures.",
      image: "../images/lodging-8.webp",
    },
    {
      name: "Seaside Inn",
      category: "Hotel",
      description:
        "Seaside Inn is a charming beachfront property that offers cozy accommodations with stunning ocean views. Guests can relax on the veranda, take a dip in the sea, and enjoy fresh seafood at the inn's restaurant.",
      image: "../images/lodging-7.webp",
    },
  ];
  
  export const transportationData: DataEntry[] = [
    {
      category: "Public Bus",
      name: "Taniti BlueHound",
      description:
        "The BlueHound is Taniti's main public bus service, offering convenient and affordable transportation across the island. With regular routes and stops at key locations, it's a great way to explore Taniti like a local.",
      image: "../images/transportation-1.webp",
    },
    {
      category: "Private Bus",
      name: "Island Tours",
      description:
        "Island Tours offers private bus services for guided tours of Taniti's most popular attractions. Whether you're exploring the city, visiting the volcano, or hiking through the rainforest, Island Tours can take you there in comfort and style.",
      image: "../images/transportation-2.webp",
    },
    {
      category: "Private Bus",
      name: "Cultural Excursions",
      description:
        "Cultural Excursions offers private bus services for travelers interested in Taniti's rich history and heritage. Visit traditional villages, historic sites, and cultural landmarks with knowledgeable guides who bring the island's stories to life.",
      image: "../images/transportation-3.webp",
    },
    {
      category: "Taxi",
      name: "Island Cabs",
      description:
        "Island Cabs is Taniti's premier taxi service, providing reliable transportation for visitors and locals alike. Whether you need a ride to the airport, a tour of the city, or a night out on the town, Island Cabs has you covered.",
      image: "../images/transportation-4.webp",
    },
    {
      category: "Taxi",
      name: "Beachside Taxis",
      description:
        "Beachside Taxis offers scenic tours of Taniti's coastal roads and beachfront promenades, giving passengers a unique perspective of the island's beauty. Sit back, relax, and enjoy the ride with Beachside Taxis.",
      image: "../images/transportation-5.webp",
    },
    {
      category: "Rental Car",
      name: "Coastal Cruisers",
      description:
        "Coastal Cruisers specializes in off-road vehicles and beach buggies for travelers seeking adventure on Taniti's rugged terrain. Rent a Coastal Cruiser and explore the island's hidden gems. Perfect for beach hopping and off-road exploration.",
      image: "../images/transportation-6.webp",
    },
    {
      category: "Rental Car",
      name: "EcoWheels",
      description:
        "City Drives offers compact cars and electric vehicles for navigating Taniti City's bustling streets and narrow lanes. Rent a City Drive and zip around the city with ease. Low emissions, high efficiency, and a smooth ride guaranteed.",
      image: "../images/transportation-7.webp",
    },
    {
      category: "Bicycle",
      name: "Island Pedals",
      description:
        "Island Pedals provides bicycle rentals for eco-conscious travelers looking to explore Taniti on two wheels. Cruise along the coastal bike paths, pedal through the city, and discover the island's hidden gems with Island Pedals.",
      image: "../images/transportation-8.webp",
    },
    {
      category: "Bicycle",
      name: "Jungle Rides",
      description:
        "Jungle Rides offers mountain bikes and trail bikes for adventurers seeking off-road thrills in Taniti's rainforests. Rent a bike from Jungle Rides and hit the trails for an adrenaline-pumping experience. Quick and easy rentals available.",
      image: "../images/transportation-9.webp",
    },
  ];