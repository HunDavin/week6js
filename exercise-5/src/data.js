// Import images for teachers
import johnDoe from "./assets/john-doe.jpg";
import janeSmith from "./assets/jane-smith.jpg";
import michaelBrown from "./assets/michael-brown.jpg";
import emilyJohnson from "./assets/emily-johnson.jpg";
import davidWilliams from "./assets/david-williams.jpg";

export const TEACHERS = [
  {
    class: "A",
    firstName: "John",
    lastName: "Doe",
    title: "Math Teacher",
    image: {
      src: johnDoe,
      alt: "John Doe - Math Teacher",
    },
  },
  {
    class: "A",
    firstName: "Jane",
    lastName: "Smith",
    title: "Science Teacher",
    image: {
      src: janeSmith,
      alt: "Jane Smith - Science Teacher",
    },
  },
  {
    class: "C",
    firstName: "Michael",
    lastName: "Brown",
    title: "History Teacher",
    image: {
      src: michaelBrown,
      alt: "Michael Brown - History Teacher",
    },
  },
  {
    class: "B",
    firstName: "Emily",
    lastName: "Johnson",
    title: "English Teacher",
    image: {
      src: emilyJohnson,
      alt: "Emily Johnson - English Teacher",
    },
  },
  {
    class: "B",
    firstName: "David",
    lastName: "Williams",
    title: "Physics Teacher",
    image: {
      src: davidWilliams,
      alt: "David Williams - Physics Teacher",
    },
  },
];
