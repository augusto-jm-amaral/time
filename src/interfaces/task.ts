import { Color } from './color';
import { Dedication } from './dedication';

export interface Task {
  name: string;
  description: string;
  color: Color;
  time: string;
  dedications: Array<Dedication>;

}