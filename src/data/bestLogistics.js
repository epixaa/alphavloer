import image from "@/images/resources/best-logistics-v1-img.jpg";
import shape1 from "@/images/shapes/best-logistics-v1-shape1.png";
import shape from "@/images/shapes/best-logistics-v1-shape2.png";

export const bestLogistics = {
  shape,
  title: "Expert Flooring \n Installers",
  text: "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration",
  counters: [
    {
      id: 1,
      title: "Completed Projects",
      count: 5,
      text: "5k complete work",
      isK: true,
    },
    {
      id: 2,
      title: "Our Expert",
      count: 30,
      text: "Expert Flooring worker",
      isK: false,
    },
  ],
  images: [
    {
      id: 1,
      className: "shape1 animated zoom-fade",
      image: shape1,
    },

    {
      id: 3,
      className: "best-logistics-one__img-inner",
      image,
    },
  ],
};
