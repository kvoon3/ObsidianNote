import House from "./House";

//抽象builder

export abstract class HouseBuilder {
  house: House;
  constructor(house: House) {
    this.house = house;
  }
  abstract buildBase(): void;
  abstract buildWalls(): void;
  abstract buildProof(): void;
  delivery(): House {
    return this.house;
  }
}

//具体buider

export class NormalHouseBuilder extends HouseBuilder {
  buildBase() {
    this.house.setBase("普通地基");
  }
  buildWalls() {
    this.house.setWalls("普通墙面");
  }
  buildProof() {
    this.house.setProof("普通屋顶");
  }
}

export class LuxuryHouseBuilder extends HouseBuilder {
  buildBase() {
    this.house.setBase("昂贵地基");
  }
  buildWalls() {
    this.house.setWalls("昂贵墙面");
  }
  buildProof() {
    this.house.setProof("昂贵屋顶");
  }
}
