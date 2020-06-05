import { DatePicker } from 'antd';
import { AutoCompleteProps } from 'antd/es/auto-complete';
import { CascaderProps } from 'antd/es/cascader';
import { CheckboxGroupProps, CheckboxProps } from 'antd/es/checkbox';
import { DatePickerProps } from 'antd/es/date-picker';
import {
  InputProps,
  PasswordProps,
  SearchProps,
  TextAreaProps,
} from 'antd/es/input';
import { InputNumberProps } from 'antd/es/input-number';
import { MentionProps } from 'antd/es/mentions';
import { PaginationProps } from 'antd/es/pagination';
import { RadioGroupProps, RadioProps } from 'antd/es/radio';
import { RateProps } from 'antd/es/rate';
import { SelectProps } from 'antd/es/select';
import { SliderProps } from 'antd/es/slider';
import { SwitchProps } from 'antd/es/switch';
import { TimePickerProps } from 'antd/es/time-picker';
import { TransferProps } from 'antd/es/transfer';
import { TreeSelectProps } from 'antd/es/tree-select';
import { UploadProps } from 'antd/es/upload';
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
  loading?: boolean;
  value?: {
    page: PaginationProps['current'];
    size: PaginationProps['pageSize'];
    total?: PaginationProps['total'];
  };
  onChange?: (next: PagerProps['value']) => void;
};
export declare const lib: any;
export {};
