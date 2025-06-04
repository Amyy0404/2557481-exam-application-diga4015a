import UbuntuIMG from "../Images/Data/Farmstall1.png"
import OasisIMG from "../Images/Data/Garage1.png"
import EishIMG from "../Images/Data/Mechanic1.png"
import MzansiIMG from "../Images/Data/Garage2.png"
import KoeksisterIMG from "../Images/Data/Farmstall3.png"
import ChakalakaIMG from "../Images/Data/Restaurant1.png"
import AloeIMG from "../Images/Data/Attraction3.png"
import BaobabIMG from "../Images/Data/Sleep1.png"
import MadibaIMG from "../Images/Data/Police1.png"
import BraaiIMG from "../Images/Data/Restaurant2.png"
import ProteaFireImg from "../Images/Data/ProteaFireImg.png"
import BunduAmbulanceImg from "../Images/Data/BunduAmbulanceImg.png"
import SunsetPoliceImg from "../Images/Data/SunsetPoliceImg.png"
import SavannaBreezeImg from "../Images/Data/SavannaBreezeImg.png"
import DesertBloomImg from "../Images/Data/DesertBloomImg.png"
import GogoPadstalImg from "../Images/Data/GogoPadstalImg.png"
import MadalaImg from "../Images/Data/MadalaImg.png"
import LekkerBraaiImg from "../Images/Data/LekkerBraaiImg.png"
import NamaquaWatchImg from "../Images/Data/NamaquaWatchImg.png"
import TsitsikammaTrailImg from "../Images/Data/TsitsikammaTrailImg.png"

const places = [
  {
    id: 1,
    name: "Ubuntu Farmstall",
    province: "Eastern Cape",
    category: "Farmstall",
    tags: ["Attractions", "Hidden Gems", "Farm Stalls"],
    description: "Ubuntu Farm Stall is a warm little haven where kindness grows alongside the veggies. From homemade jams and fresh-baked bread to handwoven baskets and big friendly smiles.",
    rating: 4.5,
    image: UbuntuIMG,
    location: { lat: -33.93766, lng: 25.36605 },
    isLiked: false,
  },
  {
    id: 2,
    name: "Oasis Garage",
    province: "Northern Cape",
    category: "Garage",
    tags: ["Gas Stations","Open 24/7"],
    description: "Oasis Garage is your cozy pit stop for fuel, snacks, and friendly faces. We’ve got hot coffee, cool tunes, and a warm welcome waiting.",
    rating: 4.2,
    image: OasisIMG,
    location: { lat: -28.294707, lng: 21.983642 },
    isLiked: false,
    contact: "061 234 5678"
  },
  {
    id: 3,
    name: "Eish Mechanic Services",
    province: "Limpopo",
    category: "Mechanic",
    tags: ["Mechanics", "Open 24/7"],
    description: "Where your car says 'Eish!' and we say 'No worries, we’ve got this!'We're your local pit stop for quick fixes, big repairs, and honest advice.",
    rating: 4.7,
    image: EishIMG,
    location: { lat: -23.644524, lng: 29.6301269 },
    isLiked: false,
    contact: "072 987 6543"
  },
  {
    id: 4,
    name: "Chakalaka & Chill",
    province: "KwaZulu-Natal",
    category: "Restaurant",
    tags: ["Restaurants", "Family-friendly", "Local Cuisine"],
    description: "A sizzling hotspot where the braai is always lit and the chakalaka has bite. Authentic township flavors served with a smile.",
    rating: 4.7,
    image: ChakalakaIMG,
    location: { lat: -27.639740, lng: 29.81964111 },
    isLiked: false,
  },
  {
    id: 5,
    name: "Mzansi Service Station",
    province: "North West",
    category: "Garage",
    tags: ["Gas Stations", "Mechanics", "Open 24/7"],
    description: "Fill up and freshen up at this locally-run service station with friendly staff and the cleanest restrooms around.",
    rating: 4.3,
    image: MzansiIMG,
    location: { lat: -26.672004, lng: 27.2131347 },
    isLiked: false,
    contact: "082 345 6789"
  },
  {
    id: 6,
    name: "Aloe Vista Lookout",
    province: "Eastern Cape",
    category: "Point of Interest",
    tags: ["Attractions", "Hidden Gems", "Family-Friendly"],
    description: "A hidden cliffside gem with sweeping views of the Great Kei River valley—perfect for sundowners and selfies.",
    rating: 4.8,
    image: AloeIMG,
    location: { lat: -32.708733, lng: 28.0206298 },
    isLiked: false,
  },
  {
    id: 7,
    name: "Baobab Dreams Lodge",
    province: "Northern Cape",
    category: "Hidden Gem",
    tags: ["Attractions", "Hidden Gems", "Sleep", "Family-Friendly"],
    description: "Sleep under the stars in luxury tents shaded by ancient baobabs. A magical escape from the city grind.",
    rating: 4.9,
    image: BaobabIMG,
    location: { lat: -31.3090617, lng: 20.97290039 },
    isLiked: false,
  },
  {
    id: 8,
    name: "Koeksister Kiosk",
    province: "Free State",
    category: "Farm Stall",
    tags: ["Attractions", "Hidden Gems", "Family-Friendly", "Farm Stalls", "Local Cuisine"],
    description: "Famous for their warm koeksisters and rooibos on tap, this cozy stall is a sugary slice of home.",
    rating: 4.4,
    image: KoeksisterIMG,
    location: { lat: -28.52662241, lng: 26.59790039 },
    isLiked: false,
  },
  {
    id: 9,
    name: "Madiba Memorial Station",
    province: "Western Cape",
    category: "Point of Interest",
    tags: ["Police Stations", "Open 24/7"],
    description: "A small but respected community station with a local history mural and a strong focus on tourism safety.",
    rating: 4.1,
    image: MadibaIMG,
    location: { lat: -33.548262, lng: 18.9678955 },
    isLiked: false,
    contact: "076 543 2198"
  },
  {
    id: 10,
    name: "Braai & Brew",
    province: "Gauteng",
    category: "Restaurant",
    tags: ["Restaurants", "Local Cuisine", "Family-Friendly"],
    description: "A lively neighborhood spot where locals gather for rugby, ribs, and refreshing home-brewed craft beer.",
    rating: 4.3,
    image: BraaiIMG,
    location: { lat: -26.234302, lng: 27.9492187 },
    isLiked: false,
  },
  {
    id: 11,
    name: "Protea Fire & Rescue",
    province: "Western Cape",
    category: "Fire Station",
    tags: ["Firefighters", "Emergency Services", "Open 24/7"],
    description: "Dedicated to keeping the Cape safe, Protea Fire & Rescue is equipped with rapid response vehicles and heroic hearts.",
    rating: 4.6,
    image: ProteaFireImg,
    location: { lat: -33.915, lng: 18.423 },
    isLiked: false,
    contact: "060 112 3344"
  },
  {
    id: 12,
    name: "Bundu Ambulance Base",
    province: "Mpumalanga",
    category: "Ambulance Station",
    tags: ["Ambulance", "Emergency Services", "Open 24/7"],
    description: "Fast, focused, and reliable, the Bundu Ambulance Base serves rural communities with care and speed.",
    rating: 4.7,
    image: BunduAmbulanceImg,
    location: { lat: -25.464, lng: 30.985 },
    isLiked: false,
    contact: "071 556 7788"
  },
  {
    id: 13,
    name: "Sunset Police Station",
    province: "KwaZulu-Natal",
    category: "Police Station",
    tags: ["Police Stations", "Open 24/7"],
    description: "Overlooking the beach, Sunset Police Station is a safe haven for tourists and locals alike.",
    rating: 4.2,
    image: SunsetPoliceImg,
    location: { lat: -29.8587, lng: 31.0218 },
    isLiked: false,
    contact: "083 998 7766"
  },
  {
    id: 14,
    name: "Savanna Breeze Café",
    province: "Free State",
    category: "Restaurant",
    tags: ["Restaurants", "Hidden Gems", "Local Cuisine"],
    description: "Tucked between cornfields and sandstone cliffs, this cozy café dishes up homemade potjie and sweet milk tart.",
    rating: 4.5,
    image: SavannaBreezeImg,
    location: { lat: -28.827, lng: 26.675 },
    isLiked: false,
  },
  {
    id: 15,
    name: "Desert Bloom Oasis",
    province: "Northern Cape",
    category: "Point of Interest",
    tags: ["Attractions", "Hidden Gems"],
    description: "A surprising splash of green in the arid desert, this oasis is a haven for birdwatchers and weary travelers.",
    rating: 4.8,
    image: DesertBloomImg,
    location: { lat: -29.667, lng: 21.208 },
    isLiked: false,
  },
  {
    id: 16,
    name: "Gogo’s Padstal & Crafts",
    province: "Limpopo",
    category: "Farm Stall",
    tags: ["Farm Stalls", "Local Cuisine", "Family-Friendly"],
    description: "Stop by for dried mango, biltong, beadwork, and Gogo’s famous vetkoek. A Limpopo must-stop!",
    rating: 4.4,
    image: GogoPadstalImg,
    location: { lat: -23.905, lng: 29.434 },
    isLiked: false,
  },
  {
    id: 17,
    name: "Madala's Mechanics",
    province: "North West",
    category: "Mechanic",
    tags: ["Mechanics", "Open 24/7"],
    description: "Trusted across the province for quick diagnostics and old-school mechanical wisdom.",
    rating: 4.6,
    image: MadalaImg,
    location: { lat: -25.653, lng: 26.248 },
    isLiked: false,
    contact: "079 123 4567"
  },
  {
    id: 18,
    name: "Lekker Braai Stop",
    province: "Gauteng",
    category: "Restaurant",
    tags: ["Restaurants", "Family-Friendly", "Local Cuisine"],
    description: "Get your fill of boerewors rolls, grilled mielies, and smoky sosaties under the shade of acacia trees.",
    rating: 4.5,
    image: LekkerBraaiImg,
    location: { lat: -25.999, lng: 28.093 },
    isLiked: false,
  },
  {
    id: 19,
    name: "Namaqua Watch Police Post",
    province: "Northern Cape",
    category: "Police Station",
    tags: ["Police Stations", "Open 24/7"],
    description: "A vital outpost in the arid heartland—friendly, firm, and always alert.",
    rating: 4.0,
    image: NamaquaWatchImg,
    location: { lat: -30.598, lng: 17.931 },
    isLiked: false,
    contact: "062 445 6677"
  },
  {
    id: 20,
    name: "Tsitsikamma Trail Gateway",
    province: "Eastern Cape",
    category: "Point of Interest",
    tags: ["Attractions", "Hidden Gems", "Family-Friendly"],
    description: "Start your adventure into thick forests, swinging bridges, and mountain streams at this scenic trailhead.",
    rating: 4.9,
    image: TsitsikammaTrailImg,
    location: { lat: -33.971, lng: 23.888 },
    isLiked: false,
  }
];

export default places;