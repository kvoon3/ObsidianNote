```ts
export default class House {
  private base: string;
  private walls: string;
  private proof: string;
  constructor() {
    this.base = "";
    this.walls = "";
    this.proof = "";
  }
  getBase(): string {
    return this.base;
  }
  setBase(base: string) {
    this.base = base;
  }
  getWall(): string {
    return this.walls;
  }
  setWalls(walls: string) {
    this.walls = walls;
  }
  getProof(): string {
    return this.proof;
  }
  setProof(proof: string) {
    this.proof = proof;
  }
}
```