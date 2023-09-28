import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";

const tours = [
  {
    id: "01",
    title: "Chitwan National Park, Chitwan",
    city: "Sauraha",
    address: "Sauraha, Chitwan",
    distance: 300,
    price: 99,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Kumai Dada, Kaski",
    city: "khumai",
    address: "North side of pokhara",
    distance: 400,
    price: 99,
    maxGroupSize: 8,
    desc: "Short trek",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Kuri Village",
    city: "Kuri Village",
    address: "Somewhere kuri village",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Arnapurna Base Camp (ABC) ",
    city: "Ghore pani",
    address: "Somewhere in ",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Janaki Temple",
    city: "Janakpur",
    address: "Somewhere in janakpur",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Maya Devi Temple",
    city: "Lumbini",
    address: "Somewhere in Lumbini",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Tilicho Lake",
    city: "Manang",
    address: "Somewhere in Manang ",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Tilicho Lake (pronounced [tilit͡so]) is a lake located in the Manang district of Nepal, 55 kilometres (34 mi) as the crow flies from the city of Pokhara.",
    reviews: [ ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Phoksundo lake",
    city: "Dolpo",
    address: "Somewhere in dolpa",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
];

export default tours;
