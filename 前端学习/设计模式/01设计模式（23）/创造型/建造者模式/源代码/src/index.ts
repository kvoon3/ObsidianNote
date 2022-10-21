import House from "./House";
import Director from "./Director";

import { NormalHouseBuilder } from "./HouseBuilder";

//准备一个空房子
let house: House = new House();

// 准备一个 Builder
const normalHouseBuilder: NormalHouseBuilder = new NormalHouseBuilder(house);

//准备一个 Director
const director: Director = new Director(normalHouseBuilder);

const newHouse = director.build();

console.log(newHouse);
