import './index';
import { Schema } from 'yup';

declare module 'foxantd' {}

import 'usefox';

declare module 'usefox' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Rule extends Schema<any> {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Rules extends Schema<any> {}
}
