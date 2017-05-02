import { Color } from './color';
import { Dedication } from './dedication';

export interface Task {
  name: string;
  description: string;
  color: Color;
  time: number;
  dedications: Array<Dedication>;

}