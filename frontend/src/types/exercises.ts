import { exerciseListData } from '../../../data/data';
export type Targets = (typeof exerciseListData)[number]['target'];
export type Keys = keyof (typeof exerciseListData)[0];
export type DataType = {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
}
