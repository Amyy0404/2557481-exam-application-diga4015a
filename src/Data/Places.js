import farmstall1IMG from "../Images/Data/Farmstall1.png"
import garage1IMG from "../Images/Data/Garage1.png"
import mechanic1IMG from "../Images/Data/Mechanic1.png"

const places = [
  {
    id: 1,
    name: "Ubuntu Farmstall",
    province: "Eastern Cape",
    category: "Farmstall",
    tags: ["Attractions", "Hidden Gems", "Farm Stalls"],
    description: "Tucked beneath the shade of sun-kissed trees, Ubuntu Farm Stall is a warm little haven where kindness grows alongside the veggies. From homemade jams and fresh-baked bread to handwoven baskets and big friendly smiles, everything here is made with heart.",
    rating: 4.5,
    image: farmstall1IMG
  },
  {
    id: 2,
    name: "Oasis Garage",
    province: "Northern Cape",
    category: "Garage",
    tags: ["Open 24/7", "Gas Stations"],
    description: "Oasis Garage is your cozy pit stop for fuel, snacks, and friendly faces. Whether you're just passing through or a regular on the route, we’ve got hot coffee, cool tunes, and a warm welcome waiting. It’s more than a gas station—it’s a breath of fresh air on your journey.",
    rating: 4.2,
    image: garage1IMG
  },
  {
    id: 3,
    name: "Eish Mechanic Services",
    province: "Limpopo",
    category: "Mechanic",
    tags: ["Mechanics", "Open 24/7"],
    description: "Where your car says 'Eish!' and we say 'No worries, we’ve got this!'We're your local pit stop for quick fixes, big repairs, and honest advice. Whether your engine's moaning or your brakes are squeaking, our friendly team will have you back on the road with a smile.",
    rating: 4.7,
    image: mechanic1IMG
  }
];

export default places;