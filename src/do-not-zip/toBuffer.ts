import { Buffer } from 'node:buffer';
import toArray from './toArray.js';

export default files => Buffer.from(toArray(files));
