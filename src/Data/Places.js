import farmstall1IMG from "../Images/Data/Farmstall1.png"
import garage1IMG from "../Images/Data/Garage1.png"
import mechanic1IMG from "../Images/Data/Mechanic1.png"

const places = [
  {
    id: 1,
    name: "Ubuntu Farmstall",
    province: "Eastern Cape",
    category: "Farmstall",
    tags: ["Attraction", "Hidden Gem"],
    description: "Food, gifts, instagrammable area, niche",
    rating: 4.5,
    image: farmstall1IMG
  },
  {
    id: 2,
    name: "Oasis Garage",
    province: "Northern Cape",
    category: "Garage",
    tags: ["Open 24/7", "Point of Interest"],
    description: "Great stop for late-night refuel and coffee.",
    rating: 4.2,
    image: garage1IMG
  },
  {
    id: 3,
    name: "Eish Mechanic Services",
    province: "Limpopo",
    category: "Mechanic",
    tags: ["Hidden Gem"],
    description: "Reliable roadside mechanic known for fair pricing.",
    rating: 4.7,
    image: mechanic1IMG
  }
];

export default places;