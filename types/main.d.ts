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
import { PaginationProps } from 'antd/es/pagination';
import type { RadioGroupProps, RadioProps } from 'antd/es/radio';
import type { RateProps } from 'antd/es/rate';
import { SelectProps } from 'antd/es/select';
import type { SliderProps } from 'antd/es/slider';
import type { SwitchProps } from 'antd/es/switch';
import type { TimePickerProps } from 'antd/es/time-picker';
import type { TransferProps } from 'antd/es/transfer';
import type { TreeSelectProps } from 'antd/es/tree-select';
import type { UploadProps } from 'antd/es/upload';
import React from 'react';
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
  Select: Clean<XSelectProps>;
  Slider: Clean<SliderProps>;
  Switch: Clean<SwitchProps>;
  TimePicker: Clean<TimePickerProps>;
  Transfer: Clean<TransferProps>;
  TreeSelect: Clean<TreeSelectProps<any>>;
  Upload: Clean<UploadProps>;
  Pager: Clean<PagerProps>;
};
export declare type XSelectProps<VT = any> = SelectProps<VT> & {
  options?: {
    label: string | React.ReactNode;
    value: VT;
    key?: number | string;
  }[];
};
export declare type PagerProps = Omit<
  PaginationProps,
  'current' | 'pageSize' | 'pageSize' | 'onChange' | 'onShowSizeChange'
> & {
  value?: {
    page: PaginationProps['current'];
    size: PaginationProps['pageSize'];
    total?: PaginationProps['total'];
  };
  onChange?: (next: PagerProps['value']) => void;
};
export declare const lib: any;
export {};
