export class WineProperties {
  fixedAcidity: number;
  volatileAcidity: number;
  citricAcid: number;
  residualSugar: number;
  chlorides: number;
  freeSulfurDioxide: number;
  totalSulfurDioxide: number;
  density: number;
  pH: number;
  sulphates: number;
  alcohol: number;
}


export class TrainingResult {
  accuracy: number;
}

export class DataLocation {
  path: string;
}

export class Prediction {
  name: string;
  value: number;
}
