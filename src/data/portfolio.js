import image from "@/images/resources/protfolio-single-img1.jpg";
import image2 from "@/images/resources/protfolio-single-img2.jpg";
import image3 from "@/images/resources/protfolio-single-img3.jpg";
import { servicesSingleSidebar } from "./services";
import { socials2 } from "./siteFooter";

export const portfolioTwo = [
  {
    id: 1,
    image: "protfolio-two-img1.jpg",
    tagline: "Hardwood",
    title: "Hardword \n Flooring",
  },
  {
    id: 2,
    image: "protfolio-two-img2.jpg",
    tagline: "Flooring Wood",
    title: "Order a \n Sample",
  },
  {
    id: 3,
    image: "protfolio-two-img3.jpg",
    tagline: "Hardwood",
    title: "Floor Care \n Center",
  },
  {
    id: 4,
    image: "protfolio-two-img4.jpg",
    tagline: "Hardwood",
    title: "Laminate \n Flooring",
  },
  {
    id: 5,
    image: "protfolio-two-img5.jpg",
    tagline: "Wood",
    title: "Waterproof \n Wood Room",
  },
  {
    id: 6,
    image: "protfolio-two-img6.jpg",
    tagline: "Carpet",
    title: "Soft Luxurious \n Carpet",
  },
];

export const portfolioSingleContent = {
  image,
  image2,
  image3,
  title: "Anchor Wood Floors",
  text: "Looking to install new flooring to give your home's interior a fresh look? Dicta sunt explicabo. Nemo ipsam voluptatem quia voluptas aspernatur aut odit aut fugit, sed quia. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.",
  text2:
    "Nemo ipsam voluptatem quia voluptas aspernatur aut odit aut fugit, sed quia. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit asper natur aut odit nemo enim ipsam voluptatem quia",
  lists: [
    "One of America’s most popular floors",
    "Can add warmth and character to any room",
    "Beautiful to live with",
  ],
};

export const portfolioSingleSidebar = {
  sidebarInfo: servicesSingleSidebar,
  authorBox: [
    "Client \n Year \n Author",
    `Envato inc \n ${new Date().getFullYear()} \n Mahfuz`,
  ],
  socials: socials2,
};
