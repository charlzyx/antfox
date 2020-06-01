import { AutoCompleteProps } from 'antd/es/auto-complete';
import { CascaderProps } from 'antd/es/cascader';
import { CheckboxGroupProps, CheckboxProps } from 'antd/es/checkbox';
import DatePicker, { DatePickerProps } from 'antd/es/date-picker';
import {
  InputProps,
  PasswordProps,
  SearchProps,
  TextAreaProps,
} from 'antd/es/input';
import { InputNumberProps } from 'antd/es/input-number';
import { MentionProps } from 'antd/es/mentions';
import { RadioGroupProps, RadioProps } from 'antd/es/radio';
import { RateProps } from 'antd/es/rate';
import { SelectProps } from 'antd/es/select';
import { SliderProps } from 'antd/es/slider';
import { SwitchProps } from 'antd/es/switch';
import { TimePickerProps } from 'antd/es/time-picker';
import { TransferProps } from 'antd/es/transfer';
import { TreeSelectProps } from 'antd/es/tree-select';
import { UploadProps } from 'antd/es/upload';
import { TFieldOption, TFieldState } from 'usefox';
import { MaybeLabel } from './Label';

type Clean<T> = Omit<T, 'value' | 'onChange' | 'onBlur' | 'onFocus' | 'render'>;

export type BuildIns = {
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
};

export type PickProps<T> = T extends (props: infer P1) => any
  ? P1
  : T extends React.ComponentClass<infer P2>
  ? P2
  : {};

type AsRenderFC<P> = P & { children?: any } & Partial<
    TFieldState & TFieldOption
  >;

type FCLike<P = {}> = (props: AsRenderFC<P>) => JSX.Element | null;

export type Comp = React.ComponentClass | FCLike;

export type RenderProps<T extends object> = (
  status: TFieldState<T> & TFieldOption<T>,
) => React.ReactNode;

export type Basic = TFieldOption & {
  withoutLabel?: true | false;
  role?: string;
};

export type AsComp<T> = {
  as: T;
};

export type LimitProps = AsComp<keyof BuildIns | Comp> & Basic;

export type FieldProps<T> = T extends AsComp<infer P>
  ? P extends keyof BuildIns
    ? Omit<BuildIns[P], keyof TFieldState> & MaybeLabel<T> & Basic & { as: P }
    : Omit<PickProps<P>, keyof TFieldState> & MaybeLabel<T> & Basic & { as: P }
  : T & MaybeLabel<T> & Basic;
