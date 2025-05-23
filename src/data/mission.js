import image from "@/images/resources/mission-v1-img1.jpg";
import image2 from "@/images/resources/mission-v1-img2.jpg";
import shape from "@/images/shapes/mission-v1-shape1.jpg";

export const missionOne = {
  missions: [
    {
      id: 1,
      title: "Our Mission",
      text: "There are more than 11 million young people in the uk, they make up over a fifth of the population and represent Britain’s future.",
      text2:
        "Tempor auf ullamcorper lacus vestibulum arcu. Posuere lorem ipsum dolorsit consectetur adipiscing. Sollicitudin tempor id eu nisl nunc ipsum. Odio tempor orci dapibus ultrices. Quam viverra sagittis volutpat odio facilisis.",
    },
    {
      id: 2,
      title: "Our Vision",
      text: "There are more than 11 million young people in the uk, they make up over a fifth of the population and represent Britain’s future.",
      text2:
        "Tempor auf ullamcorper lacus vestibulum arcu. Posuere lorem ipsum dolorsit consectetur adipiscing. Sollicitudin tempor id eu nisl nunc ipsum. Odio tempor orci dapibus ultrices. Quam viverra sagittis volutpat odio facilisis.",
    },
  ],
  images: [
    {
      id: 1,
      image: shape,
      className: "shape1",
    },
    {
      id: 2,
      image: image,
      className: "mission-one__img-img1",
    },
    {
      id: 3,
      image: image2,
      className: "mission-one__img-img2 animated slideInRight",
    },
  ],
};
