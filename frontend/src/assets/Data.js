import Logo from "./logo.png"
import search from "./search.png"
import bag from "./bag.png"
import hero1 from "./hero1.png"
import hero2 from "./hero2.png"
import hero3 from "./hero3.png"
import ham from "./ham.png"
import ser1 from './ser1.png'
import ser2 from './ser2.png'
import ser3 from './ser3.png'
import ser4 from './ser4.png'
import li1 from './li1.jpg'
import li2 from './li2.jpg'
import eye1 from './eye1.jpg'
import eye2 from './eye2.jpg'
import blush1 from './blush1.jpg'
import blush2 from './blush2.jpg'
import gloss1 from './gloss1.jpg'
import gloss2 from './gloss2.jpg'
import mas1 from './mas1.jpg'
import mas2 from './mas2.jpg'
import nail1 from './nail1.jpg'
import nail2 from './nail2.jpg'
import bg from './bg.jpg'
import about from './about.jpg'
import Contact from './Contact.jpg'
import faceloction1 from './faceloction1.jpg'
import faceloction2 from './faceloction2.jpg'
import lipgloss1 from './lipgloss1.jpg'
import lipgloss2 from './lipgloss2.jpg'
import facemask1 from './facemask1.jpg'
import facemask2 from './facemask2.jpg'
import facewash1 from './facewash1.jpg'
import facewash2 from './facewash2.jpg'
import cream1 from './cream1.jpg'
import cream2 from './cream2.jpg'
import desk1 from './desk1.jpg'
import desk2 from './desk2.jpg'
import knef1 from './knef1.jpg'
import knef2 from './knef2.jpg'
import tools1 from './tools1.jpg'
import tools2 from './tools2.jpg'
import caddy1 from './caddy1.jpg'
import caddy2 from './caddy2.jpg'

export const Logoimg = Logo
export const searchimg = search
export const bagimg = bag
export const hero1img = hero1
export const hero2img = hero2
export const hero3img = hero3
export const hamimg = ham
export const ser1img = ser1
export const ser2img = ser2
export const ser3img = ser3
export const ser4img = ser4
export const li1img = li1
export const li2img = li2
export const eye1img = eye1
export const eye2img = eye2
export const blush1img = blush1
export const blush2img = blush2
export const gloss1img = gloss1
export const gloss2img = gloss2
export const mas1img = mas1
export const mas2img = mas2
export const nail1img = nail1
export const nail2img = nail2
export const bgimg = bg
export const aboutimg =about
export const Contactimg=Contact
export const faceloction1img=faceloction1
export const faceloction2img=faceloction2
export const lipgloss1img=lipgloss1
export const lipgloss2img=lipgloss2
export const facemask1img=facemask1
export const facemask2img=facemask2
export const facewash1img=facewash1
export const facewash2img=facewash2
export const cream1img=cream1
export const cream2img=cream2
export const desk1img=desk1
export const desk2img=desk2
export const knef1img=knef1
export const knef2img=knef2
export const tools1img=tools1
export const tools2img=tools2
export const caddy1img=caddy1

const heroimges = [
  {
    id: 1,
    img: hero1,
  },
  {
    id: 2,
    img: hero2,
  },
  {
    id: 3,
    img: hero3,
  }
]

export default heroimges;
export const cards = [
  {
    id: 1,
    imag: ser1,
  },
  {
    id: 2,
    imag: ser2,
  },
  {
    id: 3,
    imag: ser3,
  },
  {
    id: 4,
    imag: ser4,
  }
]

export const beautyProducts = [
  {
    id: 1,
    name: "Lipstick",
    category: "Makeup",
    price: "$15",
    image1: li1,  // Normal Image
    image2: li2,  // Hover Image
  },
  {
    id: 2,
    name: "Nail Polish",
    category: "Makeup",
    price: "$15",
    image1: nail1,
    image2: nail2,
  },
  {
    id: 3,
    name: "Eyeliner",
    category: "Makeup",
    price: "$10",
    image1: eye1,
    image2: eye2,
  },
  {
    id: 4,
    name: "Blush",
    category: "Makeup",
    price: "$18",
    image1: blush1,
    image2: blush2,
  },
  {
    id: 5,
    name: "Lipgloss",
    category: "Makeup",
    price: "$20",
    image1: gloss1,
    image2: gloss2,
  },
  {
    id: 6,
    name: "Mascara",
    category: "Makeup",
    price: "$12",
    image1: mas1,
    image2: mas2,
  },
];


export const reviews = [
  { 
    id: 1, 
    name: "Ali Khan ", 
    image: "https://randomuser.me/api/portraits/men/32.jpg", 
    rating: 5, 
    review: "Amazing product! Highly recommended." 
  },
  { 
    id: 2, 
    name: "Emily Johnson", 
    image: "https://randomuser.me/api/portraits/women/45.jpg", 
    rating: 4, 
    review: "Good quality and fast delivery!" 
  },
  { 
    id: 3, 
    name: "James Anderson", 
    image: "https://randomuser.me/api/portraits/men/55.jpg", 
    rating: 5, 
    review: "Best purchase ever! Love it." 
  },
  { 
    id: 4, 
    name: "Sophia Martinez", 
    image: "https://randomuser.me/api/portraits/women/33.jpg", 
    rating: 4, 
    review: "Great experience, will buy again." 
  },
  { 
    id: 5, 
    name: "Hassan Raza ", 
    image: "https://randomuser.me/api/portraits/men/60.jpg", 
    rating: 5, 
    review: "Excellent product, exceeded my expectations!" 
  },
  { 
    id: 6, 
    name: "Michael Brown ", 
    image: "https://randomuser.me/api/portraits/men/20.jpg", 
    rating: 4, 
    review: "Very satisfied with my order." 
  },
];

//shop page products
export const products = [
  {
    id: 1,
    images: [desk1, desk2],
    name: "Bed Side Table",
    category: "Home & Kitchen",
    price: 50,
    description: "SUPERJARE Nightstand with Charging Station, Bed Side Table with Adjustable Fabric Drawer, Night Stand for Bedroom, 3-Tier Storage End Table, for Living Room, Rustic Brown and Black",
  },
  {
    id: 2,
    images: [faceloction1, faceloction2],
    name: "Face Lotion",
    category: "Beauty Products",
    price: 15,
    description: "CeraVe Daily Moisturizing Lotion for Dry Skin, Body Lotion & Face Moisturizer with Hyaluronic Acid and Ceramides, Daily Moisturizer, Fragrance Free, Oil-Free, 19 Ounce",
  },
  {
    id: 3,
    images: [lipgloss1, lipgloss2,faceloction1],
    name: "LipGloss",
    category: "Beauty Products",
    price: 10,
    description: "COVERGIRL Clean Fresh Yummy Gloss – Lip Gloss, Sheer, Natural Scents, Vegan Formula - Glamingo Pink",
  },
  {
    id: 4,
    images: [facemask1, facemask2],
    name: "Face Mask",
    category: "Beauty Products",
    price: 9,
    description: "BIODANCE Bio-Collagen Real Deep Mask, Hydrating Overnight Hydrogel Mask, Pore Minimizing, Elasticity Improvement, 34g x4ea",
  },
  {
    id: 5,
    images: [facewash1, facewash2],
    name: "Face Wash",
    category: "Beauty Products",
    price: 30,
    description: "La Roche-Posay Toleriane Purifying Foaming Facial Cleanser, Niacinamide + Ceramides + Prebiotic Thermal Water, Oil Free Face Wash For Oily Skin, Pore Cleanser Safe For Sensitive Skin, Soap Free",
  },
  {
    id: 6,
    images: [cream1, cream2],
    name: "Night Cream",
    category: "Beauty Products",
    price: 20,
    description: "CeraVe Skin Renewing Night Cream, Niacinamide, Peptide Complex, and Hyaluronic Acid Moisturizer for Face, 1.7 Ounce, Packaging may Vary",
  },
  {
    id: 7,
    images: [tools1, tools2],
    name: " Kitchen Cooking Utensil",
    category: "Home & Kitchen",
    price: 27,
    description: "Umite Chef Kitchen Cooking Utensils Set, 33 pcs Non-Stick Silicone Cooking Kitchen Utensils Spatula Set with Holder, Wooden Handle Silicone Kitchen Gadgets Utensil Set (Khaki)",
  }, {
    id: 8,
    images: [knef1, knef2],
    name: "Knife Set",
    category: "Home & Kitchen",
    price: 69,
    description: "Knife Set, HUNTER.DUAL 15 Pcs Kitchen Knife Set with Block Self Sharpening, Dishwasher Safe, Anti-slip Handle, Black",
  }, {
    id: 9,
    images: [caddy1,caddy2 ],
    name: " Shower Caddy",
    category: "Home & Kitchen",
    price: 9,
    description: "Kitsure Shower Caddy Large - Adhesive Shower Organizer, Stainless Steel Shower Shelf for Inside Shower, No Drill Bathroom Organizers and Storage, Home Decor Accessories, 2 Pack, Black",
  },
  
];