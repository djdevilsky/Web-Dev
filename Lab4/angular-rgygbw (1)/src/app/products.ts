export interface product {
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
    name: "Luigi's Mansion 3 - Nintendo Switch",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81-FD3tzUlL._SL1500_.jpg",
    price: "40.00$",
    rating: 4.8,
    description:
      "Catch ghosts and solve puzzles to rescue Mario and friends in the Last Resort hotel",
    link:
      "https://www.amazon.com/Luigis-Mansion-3-Nintendo-Switch/dp/B07SK4W1VJ/ref=sr_1_15?dchild=1&fst=as%3Aoff&pf_rd_i=16225016011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=03b28c2c-71e9-4947-aa06-f8b5dc8bf880&pf_rd_r=9SJK70A0CEJXGT9RQGD5&pf_rd_s=merchandised-search-3&pf_rd_t=101&qid=1489016289&rnid=16225016011&s=videogames-intl-ship&sr=1-15"
  }
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
