export interface product {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  rating: string;
  link: string;
}
export const products = [
  {
    id: 1,
    catId: 2,
    name: "PlayStation 4 Slim 1TB Console",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61ONvv8KG4L._AC_SL1500_.jpg",
    price: "306$",
    rating: 4.8,
    description: "Incredible games; Endless entertainment",
    link:
      "https://www.amazon.com/PlayStation-4-Slim-1TB-Console/dp/B071CV8CG2/ref=sr_1_1?dchild=1&fst=as%3Aoff&pf_rd_i=16225016011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=03b28c2c-71e9-4947-aa06-f8b5dc8bf880&pf_rd_r=9SJK70A0CEJXGT9RQGD5&pf_rd_s=merchandised-search-3&pf_rd_t=101&qid=1510597020&refinements=p_89%3APlaystation&rnid=2528832011&s=videogames-intl-ship&sr=1-1"
  },
  {
    id: 2,
    catId: 1,
    name: "Super Mario 3D World + Bowser's Fury - Nintendo Switch",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81TK5d%2BI%2ByL._SL1500_.jpg",
    price: "59.50$",
    rating: 4.9,
    description: "Enjoy two Mario adventures solo or with friends",
    link:
      "https://www.amazon.com/Super-Mario-3D-World-Bowsers-Fury/dp/B08H9M7LDY/ref=sr_1_1?dchild=1&fst=as%3Aoff&pf_rd_i=16225016011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=03b28c2c-71e9-4947-aa06-f8b5dc8bf880&pf_rd_r=9SJK70A0CEJXGT9RQGD5&pf_rd_s=merchandised-search-3&pf_rd_t=101&qid=1489016289&rnid=16225016011&s=videogames-intl-ship&sr=1-1"
  },
  {
    id: 3,
    catId: 4,
    name: "Nintendo Switch Pro Controller",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61drpi3cYUL._SL1258_.jpg",
    price: "55.99$",
    rating: 4.9,
    description: "Enjoy two Mario adventures solo or with friends",
    link:
      "https://www.amazon.com/Nintendo-Switch-Pro-Controller/dp/B01NAWKYZ0/ref=sr_1_2?dchild=1&fst=as%3Aoff&pf_rd_i=16225016011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=03b28c2c-71e9-4947-aa06-f8b5dc8bf880&pf_rd_r=9SJK70A0CEJXGT9RQGD5&pf_rd_s=merchandised-search-3&pf_rd_t=101&qid=1489016289&rnid=16225016011&s=videogames-intl-ship&sr=1-2"
  },
  {
    id: 4,
    catId: 1,
    name: "Animal Crossing: New Horizons - Nintendo Switch",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/710JXdscVsL._SL1500_.jpg",
    price: "45.94$",
    rating: 4.9,
    description:
      "Get to know the island residents, garden, fish, decorate, hunt for fossils, and more.",
    link:
      "https://www.amazon.com/Animal-Crossing-New-Horizons-Nintendo-Switch/dp/B07SL6ZXBL/ref=sr_1_3?dchild=1&fst=as%3Aoff&pf_rd_i=16225016011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=03b28c2c-71e9-4947-aa06-f8b5dc8bf880&pf_rd_r=9SJK70A0CEJXGT9RQGD5&pf_rd_s=merchandised-search-3&pf_rd_t=101&qid=1489016289&rnid=16225016011&s=videogames-intl-ship&sr=1-3"
  },
  {
    id: 5,
    catId: 1,
    name: "Just Dance 2021 - Nintendo Switch Standard Edition",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81JMb%2BkSAAL._SL1500_.jpg",
    price: "29.99$",
    rating: 4.8,
    description:
      "Dance to over 600 songs with the Just Dance Unlimited subscription streaming service.",
    link:
      "https://www.amazon.com/Just-Dance-2021-Nintendo-Switch-Standard/dp/B08BRQKSMB/ref=sr_1_4?dchild=1&fst=as%3Aoff&pf_rd_i=16225016011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=03b28c2c-71e9-4947-aa06-f8b5dc8bf880&pf_rd_r=9SJK70A0CEJXGT9RQGD5&pf_rd_s=merchandised-search-3&pf_rd_t=101&qid=1489016289&rnid=16225016011&s=videogames-intl-ship&sr=1-4"
  },
  {
    id: 6,
    catId: 1,
    name: "Super Mario 3D All-Stars - Nintendo Switch",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71whlPxCIJL._SL1500_.jpg",
    price: "49.99$",
    rating: 4.8,
    description:
      "Travel from planet to planet and power up Rosalina’s Comet Observatory in the Super Mario Galaxy game",
    link:
      "https://www.amazon.com/Super-Mario-3D-All-Stars-Nintendo-Switch/dp/B08G3MN6KP/ref=sr_1_5?dchild=1&fst=as%3Aoff&pf_rd_i=16225016011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=03b28c2c-71e9-4947-aa06-f8b5dc8bf880&pf_rd_r=9SJK70A0CEJXGT9RQGD5&pf_rd_s=merchandised-search-3&pf_rd_t=101&qid=1489016289&rnid=16225016011&s=videogames-intl-ship&sr=1-5"
  },
  {
    id: 7,
    catId: 1,
    name: "Super Smash Bros. Ultimate - Nintendo Switch",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81aJ-R4E6gL._SL1500_.jpg",
    price: "43.78$",
    rating: 4.9,
    description:
      "Challenge others anytime, anywhere, whether you're on the couch or on the go",
    link:
      "https://www.amazon.com/Super-Smash-Bros-Ultimate-Nintendo-Switch/dp/B01N5OKGLH/ref=sr_1_7?dchild=1&fst=as%3Aoff&pf_rd_i=16225016011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=03b28c2c-71e9-4947-aa06-f8b5dc8bf880&pf_rd_r=9SJK70A0CEJXGT9RQGD5&pf_rd_s=merchandised-search-3&pf_rd_t=101&qid=1489016289&rnid=16225016011&s=videogames-intl-ship&sr=1-7"
  },
  {
    id: 8,
    catId: 4,
    name: "Nintendo Joy-Con (L/R) - Neon Pink / Neon Green",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61gAv5rkK3L._SL1500_.jpg",
    price: "88.00$",
    rating: 4.8,
    description:
      "2 Joy Con can be used independently in each hand, or together as 1 game controller when attached to the Joy Con grip",
    link:
      "https://www.amazon.com/Nintendo-Joy-Neon-Pink-Green-switch/dp/B078GZM4H8/ref=sr_1_8?dchild=1&fst=as%3Aoff&pf_rd_i=16225016011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=03b28c2c-71e9-4947-aa06-f8b5dc8bf880&pf_rd_r=9SJK70A0CEJXGT9RQGD5&pf_rd_s=merchandised-search-3&pf_rd_t=101&qid=1489016289&rnid=16225016011&s=videogames-intl-ship&sr=1-8"
  },
  {
    id: 9,
    catId: 1,
    name: "Hyrule Warriors: Age of Calamity - Nintendo Switch",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81lSymCw3BL._SL1500_.jpg",
    price: "45.49$",
    rating: 4.8,
    description:
      "Experience the events of the Great Calamity 100 years before the Legend of Zelda: Breath of the Wild game",
    link:
      "https://www.amazon.com/Hyrule-Warriors-Age-Calamity-Nintendo-Switch/dp/B08HP4K7KC/ref=sr_1_10?dchild=1&fst=as%3Aoff&pf_rd_i=16225016011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=03b28c2c-71e9-4947-aa06-f8b5dc8bf880&pf_rd_r=9SJK70A0CEJXGT9RQGD5&pf_rd_s=merchandised-search-3&pf_rd_t=101&qid=1489016289&rnid=16225016011&s=videogames-intl-ship&sr=1-10"
  },
  {
    id: 10,
    catId: 1,
    name: "Luigi's Mansion 3 - Nintendo Switch",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81-FD3tzUlL._SL1500_.jpg",
    price: "40.00$",
    rating: 4.8,
    description:
      "Catch ghosts and solve puzzles to rescue Mario and friends in the Last Resort hotel",
    link:
      "https://www.amazon.com/Luigis-Mansion-3-Nintendo-Switch/dp/B07SK4W1VJ/ref=sr_1_15?dchild=1&fst=as%3Aoff&pf_rd_i=16225016011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=03b28c2c-71e9-4947-aa06-f8b5dc8bf880&pf_rd_r=9SJK70A0CEJXGT9RQGD5&pf_rd_s=merchandised-search-3&pf_rd_t=101&qid=1489016289&rnid=16225016011&s=videogames-intl-ship&sr=1-15"
  },
  {
    id: 11,
    catId: 2,
    name: "Nintendo 64 System - Video Game Console (Renewed)",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51ZcT6Cv7SL._SL1000_.jpg",
    price: "229.99$",
    rating: 4.5,
    description:
      "Product works and looks like new. Backed by the 90-day Amazon Renewed Guarantee.",
    link:
      "https://www.amazon.com/Nintendo-64-System-Console-Certified-Refurbished/dp/B07F2N1VNY/ref=sr_1_2?dchild=1&keywords=consoles&qid=1614713792&sr=8-2"
  },
  {
    id: 12,
    catId: 2,
    name: "Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg",
    price: "340.90$",
    rating: 4.9,
    description: "3 Play Styles: TV Mode, Tabletop Mode, Handheld Mode",
    link:
      "https://www.amazon.com/Nintendo-Switch-Neon-Blue-Joy%E2%80%91/dp/B07VGRJDFY/ref=sr_1_3?dchild=1&keywords=consoles&qid=1614713792&sr=8-3"
  },
  {
    id: 13,
    catId: 2,
    name: "Playstation Classic Console with 20 Classic Playstation Games",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61bvBCSda0L._SL1500_.jpg",
    price: "77.38$",
    rating: 4.2,
    description:
      "Pre-Installed Holiday Bundle, Includes Final Fantasy VII, Grand Theft Auto, Resident Evil Director's Cut and More",
    link:
      "https://www.amazon.com/Playstation-Classic-Pre-Installed-Resident-Directors/dp/B07L7W915H/ref=sr_1_5?dchild=1&keywords=consoles&qid=1614713792&sr=8-5"
  },
  {
    id: 14,
    catId: 2,
    name: "Replacement 4GB Xbox 360 Slim Console Only System (Renewed)",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61goCxS%2BFZL._SL1141_.jpg",
    price: "199.99$",
    rating: 3.9,
    description:
      "This pre-owned product has been professionally inspected, tested and cleaned by Amazon-qualified suppliers.",
    link:
      "https://www.amazon.com/Replacement-Xbox-360-Console-System-Renewed/dp/B084Q59PNC/ref=pd_sbs_1?pd_rd_w=c0eJH&pf_rd_p=5e0f7f8d-f321-4a3e-bdac-3142fcd848d7&pf_rd_r=15FXF7MKR3J6WQG20S0R&pd_rd_r=b27b2f1b-16de-4129-911d-791df5088217&pd_rd_wg=CeloR&pd_rd_i=B084Q59PNC&psc=1"
  },
  {
    id: 15,
    catId: 3,
    name:
      "LEGO City Airshow Jet Transporter 60289 Building Kit; Fun Toy Playset for Kids, New 2021 (281 Pieces)",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81i0A3ysANL._AC_SL1500_.jpg",
    price: "35.94$",
    rating: 4.8,
    description:
      "Treat your everyday hero to this impressive LEGO City Airshow Jet Transporter (60289) building set, with cool vehicles and fun characters that send imaginative role play skyward",
    link:
      "https://www.amazon.com/LEGO-Airshow-Transporter-Building-Playset/dp/B08HVZ9Z4X/ref=pb_allspark_session_sims_desktop_5?pd_rd_w=z5LlF&pf_rd_p=bfefd6e2-acb1-463d-94d0-38a6e00f41d3&pf_rd_r=T3B19FBQJB3YA3YYGFG7&pd_rd_r=1f97e869-2a40-4ad3-b8a7-d0e91d40c1d5&pd_rd_wg=X1ABK&pd_rd_i=B08HVZ9Z4X&psc=1"
  },
  {
    id: 16,
    catId: 3,
    name:
      "Blippi Talking Figure, 9-inch Articulated Toy with 8 Sounds and Phrases",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/715w8u%2BWh9L._AC_SL1500_.jpg",
    price: "12.97$",
    rating: 4.7,
    description:
      "SOUNDS AND PHRASES- WoohoHoo. The Blippi Talking Figure features 8 Blippi sounds and phrases",
    link:
      "https://www.amazon.com/Blippi-Articulated-Poseable-Inspired-Edutainer/dp/B08FXTXKDJ/ref=sr_1_15?dchild=1&keywords=toys&qid=1614714746&sr=8-15"
  },
  {
    id: 16,
    catId: 3,
    name: "Shooting Game Toy",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71puJhifj1L._AC_SL1500_.jpg",
    price: "33.99$",
    rating: 4.5,
    description:
      "What's included: The SpringFlower shooting game set includes everything you need for a fun-filled day! ",
    link:
      "https://www.amazon.com/Shooting-Popper-Standing-Activity-Compatible/dp/B087N8Q8QG/ref=sr_1_21?dchild=1&keywords=toys&qid=1614714746&sr=8-21"
  },
  {
    id: 17,
    catId: 3,
    name:
      "Prextex Realistic Looking Dinosaur with Interactive Dinosaur Sound Book",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/911QRTd4n-L._AC_SL1500_.jpg",
    price: "27.99$",
    rating: 4.7,
    description:
      "This Prextex prehistoric dinosaur toy set includes 12 dinosaur animal figures, each measure 7 inches from nose to tail",
    link:
      "https://www.amazon.com/Prextex-Realistic-Looking-Dinosaur-Interactive/dp/B08N9F269Z/ref=sr_1_25?dchild=1&keywords=toys&qid=1614714746&sr=8-25"
  },
  {
    id: 18,
    catId: 3,
    name: "SGILE RC Robot Toy",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71lmDFTt1tL._AC_SL1500_.jpg",
    price: "29.99$",
    rating: 4.5,
    description:
      "The robot can play for 60 minutes after charging for about 120 minutes!",
    link:
      "https://www.amazon.com/Control-Programmable-Birthday-Interactive-Robotics/dp/B07C147N9F/ref=sr_1_30?dchild=1&keywords=toys&qid=1614714746&sr=8-30"
  },
  {
    id: 19,
    catId: 4,
    name: "Playstation DualSense Wireless Controller",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61o7ai%2BYDoL._SL1441_.jpg",
    price: "58.98$",
    rating: 4.9,
    description:
      "In your hands, these dynamic vibrations can simulate the feeling of everything from environments to the recoil of different weapons.",
    link:
      "https://www.amazon.com/DualSense-Wireless-Controller-PlayStation-5/dp/B08FC6C75Y/ref=sr_1_2?dchild=1&keywords=controllers&qid=1614715322&sr=8-2"
  },
  {
    id: 20,
    catId: 4,
    name: "Xbox Core Controller - Carbon Black",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61z3GQgEPZL._SL1200_.jpg",
    price: "79.95$",
    rating: 4.7,
    description:
      "Experience the modernized design of the Xbox Wireless Controller – Carbon Black, featuring sculpted surfaces and refined geometry for enhanced comfort and effortless control during gameplay.",
    link:
      "https://www.amazon.com/Xbox-Core-Controller-Carbon-Black-one/dp/B08DF248LD/ref=sr_1_1?dchild=1&keywords=controllers&qid=1614715322&sr=8-1"
  },
  {
    id: 21,
    catId: 4,
    name: "DualShock 4 Wireless Controller for PlayStation 4 - Magma Red",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81L9%2B4dTIgL._SL1500_.jpg",
    price: "50.82$",
    rating: 4.7,
    description:
      "The feel, shape, and sensitivity of the dual analog sticks and trigger buttons have been improved to provide a greater sense of control, no matter what you play",
    link:
      "https://www.amazon.com/DualShock-Wireless-Controller-PlayStation-Magma-4/dp/B01MD19OI2/ref=sr_1_7?dchild=1&keywords=controllers&qid=1614715322&sr=8-7"
  }
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
