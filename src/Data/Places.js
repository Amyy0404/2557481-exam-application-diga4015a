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

const places = [
  {
    id: 1,
    name: "Ubuntu Farmstall",
    province: "Eastern Cape",
    category: "Farmstall",
    tags: ["Attractions", "Hidden Gems", "Farm Stalls"],
    description: "Ubuntu Farm Stall is a warm little haven where kindness grows alongside the veggies. From homemade jams and fresh-baked bread to handwoven baskets and big friendly smiles.",
    rating: 4.5,
    image: UbuntuIMG
  },
  {
    id: 2,
    name: "Oasis Garage",
    province: "Northern Cape",
    category: "Garage",
    tags: ["Open 24/7", "Gas Stations"],
    description: "Oasis Garage is your cozy pit stop for fuel, snacks, and friendly faces. We’ve got hot coffee, cool tunes, and a warm welcome waiting.",
    rating: 4.2,
    image: OasisIMG
  },
  {
    id: 3,
    name: "Eish Mechanic Services",
    province: "Limpopo",
    category: "Mechanic",
    tags: ["Mechanics", "Open 24/7"],
    description: "Where your car says 'Eish!' and we say 'No worries, we’ve got this!'We're your local pit stop for quick fixes, big repairs, and honest advice.",
    rating: 4.7,
    image: EishIMG
  },
  {
    id: 4,
    name: "Chakalaka & Chill",
    province: "KwaZulu-Natal",
    category: "Restaurant",
    tags: ["Restaurants", "Family-friendly", "Local Cuisine"],
    description: "A sizzling hotspot where the braai is always lit and the chakalaka has bite. Authentic township flavors served with a smile.",
    rating: 4.7,
    image: ChakalakaIMG
  },
  {
    id: 5,
    name: "Mzansi Service Station",
    province: "North West",
    category: "Garage",
    tags: ["Open 24/7", "Gas Stations"],
    description: "Fill up and freshen up at this locally-run service station with friendly staff and the cleanest restrooms around.",
    rating: 4.3,
    image: MzansiIMG
  },
  {
    id: 6,
    name: "Aloe Vista Lookout",
    province: "Eastern Cape",
    category: "Point of Interest",
    tags: ["Hidden Gems", "Attractions", "Family-Friendly"],
    description: "A hidden cliffside gem with sweeping views of the Great Kei River valley—perfect for sundowners and selfies.",
    rating: 4.8,
    image: AloeIMG
  },
  {
    id: 7,
    name: "Baobab Dreams Lodge",
    province: "Northern Cape",
    category: "Hidden Gem",
    tags: ["Hidden Gems", "Sleep", "Family-Friendly"],
    description: "Sleep under the stars in luxury tents shaded by ancient baobabs. A magical escape from the city grind.",
    rating: 4.9,
    image: BaobabIMG
  },
  {
    id: 8,
    name: "Koeksister Kiosk",
    province: "Free State",
    category: "Farm Stall",
    tags: ["Hidden Gems", "Attractions", "Family-Friendly", "Farm Stalls", "Local Cuisine"],
    description: "Famous for their warm koeksisters and rooibos on tap, this cozy stall is a sugary slice of home.",
    rating: 4.4,
    image: KoeksisterIMG
  },
  {
    id: 9,
    name: "Madiba Memorial Station",
    province: "Western Cape",
    category: "Point of Interest",
    tags: ["Police Stations", "Open 24/7"],
    description: "A small but respected community station with a local history mural and a strong focus on tourism safety.",
    rating: 4.1,
    image: MadibaIMG
  },
  {
    id: 10,
    name: "Braai & Brew",
    province: "Gauteng",
    category: "Restaurant",
    tags: ["Local Cuisine", "Restaurants", "Family-Friendly"],
    description: "A lively neighborhood spot where locals gather for rugby, ribs, and refreshing home-brewed craft beer.",
    rating: 4.3,
    image: BraaiIMG
  }
];

export default places;