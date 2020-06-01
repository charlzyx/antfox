/// <reference types="react" />
import { FieldProps, LimitProps } from 'antfox';
declare function Field<T extends LimitProps>(
  all: FieldProps<T>,
): JSX.Element | null;
export default Field;
