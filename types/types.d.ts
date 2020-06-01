/// <reference types="react" />
import { DatePicker } from 'antd';
import type { AutoCompleteProps } from 'antd/es/auto-complete';
import type { CascaderProps } from 'antd/es/cascader';
import type { CheckboxGroupProps, CheckboxProps } from 'antd/es/checkbox';
import type { DatePickerProps } from 'antd/es/date-picker';
import type {
  InputProps,
  PasswordProps,
  SearchProps,
  TextAreaProps,
} from 'antd/es/input';
import type { InputNumberProps } from 'antd/es/input-number';
import type { MentionProps } from 'antd/es/mentions';
import type { RadioGroupProps, RadioProps } from 'antd/es/radio';
import type { RateProps } from 'antd/es/rate';
import type { SelectProps } from 'antd/es/select';
import type { SliderProps } from 'antd/es/slider';
import type { SwitchProps } from 'antd/es/switch';
import type { TimePickerProps } from 'antd/es/time-picker';
import type { TransferProps } from 'antd/es/transfer';
import type { TreeSelectProps } from 'antd/es/tree-select';
import type { UploadProps } from 'antd/es/upload';
import type { PagerProps } from './main';
import { TFieldOption, TFieldState } from 'usefox';
import { MaybeLabel } from './Label';
declare type Clean<T> = Omit<
  T,
  'value' | 'onChange' | 'onBlur' | 'onFocus' | 'render'
>;
export declare type BuildIns = {
  AutoComplete: Clean<AutoCompleteProps>;
  Cascader: Clean<CascaderProps>;
  Checkbox: Clean<CheckboxProps>;
  CheckboxGroup: Clean<CheckboxGroupProps>;
  DatePicker: Clean<DatePickerProps>;
  MonthPicker: Clean<typeof DatePicker['MonthPicker']>;
  RangePicker: Clean<typeof DatePicker['RangePicker']>;
  WeekPicker: Clean<typeof DatePicker['WeekPicker']>;
  YearPicker: Clean<typeof DatePicker['YearPicker']>;
  Input: Clean<InputProps>;
  Password: Clean<PasswordProps>;
  TextArea: Clean<TextAreaProps>;
  Search: Clean<SearchProps>;
  InputNumber: Clean<InputNumberProps>;
  Mentions: Clean<MentionProps>;
  Radio: Clean<RadioProps>;
  RadioGroup: Clean<RadioGroupProps>;
  Rate: Clean<RateProps>;
  Select: SelectProps<Clean<any>>;
  Slider: Clean<SliderProps>;
  Switch: Clean<SwitchProps>;
  TimePicker: Clean<TimePickerProps>;
  Transfer: Clean<TransferProps>;
  TreeSelect: TreeSelectProps<Clean<any>>;
  Upload: Clean<UploadProps>;
  Pager: Clean<PagerProps>;
};
export declare type PickProps<T> = T extends (props: infer P1) => any
  ? P1
  : T extends React.ComponentClass<infer P2>
  ? P2
  : {};
declare type AsRenderFC<P> = P & {
  children?: any;
} & Partial<TFieldState & TFieldOption>;
declare type FCLike<P = {}> = (props: AsRenderFC<P>) => JSX.Element | null;
export declare type Comp = React.ComponentClass | FCLike;
export declare type RenderProps<T extends object> = (
  status: TFieldState<T> & TFieldOption<T>,
) => React.ReactNode;
export declare type Basic = TFieldOption & {
  withoutLabel?: true | false;
  role?: string;
};
export declare type AsComp<T> = {
  as: T;
};
export declare type LimitProps = AsComp<keyof BuildIns | Comp> & Basic;
export declare type FieldProps<T> = T extends AsComp<infer P>
  ? P extends keyof BuildIns
    ? Omit<BuildIns[P], keyof TFieldState> &
        MaybeLabel<T> &
        Basic & {
          as: P;
        }
    : Omit<PickProps<P>, keyof TFieldState> &
        MaybeLabel<T> &
        Basic & {
          as: P;
        }
  : T & MaybeLabel<T> & Basic;
export {};
