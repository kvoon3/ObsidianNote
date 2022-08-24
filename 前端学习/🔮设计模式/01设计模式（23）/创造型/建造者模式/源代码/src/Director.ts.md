```ts
import House from "./House";
import { HouseBuilder } from "./HouseBuilder";

export default class HouseDirector {
  houseBuilder: HouseBuilder;
  constructor(houseBuilder: HouseBuilder) {
    this.houseBuilder = houseBuilder;
  }
  build(): House {
    //所有的房子建造流程一样
    this.houseBuilder.buildBase();
    this.houseBuilder.buildWalls();
    this.houseBuilder.buildProof();
    return this.houseBuilder.delivery();
  }
}

```