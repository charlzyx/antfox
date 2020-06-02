import {
  AutoComplete,
  Cascader,
  Checkbox,
  DatePicker,
  Input,
  InputNumber,
  Mentions,
  Pagination,
  Radio,
  Rate,
  Select,
  Slider,
  Switch,
  TimePicker,
  Transfer,
  TreeSelect,
  Upload,
} from 'antd';
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
import React, { FC } from 'react';

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
  Select: Clean<XSelectProps>;
  Slider: Clean<SliderProps>;
  Switch: Clean<SwitchProps>;
  TimePicker: Clean<TimePickerProps>;
  Transfer: Clean<TransferProps>;
  TreeSelect: Clean<TreeSelectProps<any>>;
  Upload: Clean<UploadProps>;
  Pager: Clean<PagerProps>;
};

export type XSelectProps<VT = any> = SelectProps<VT> & {
  options?: {
    label: string | React.ReactNode;
    value: VT;
    key?: number | string;
  }[];
};
const XSelect: FC<XSelectProps> = ({ options, children, ...others }) => {
  return (
    <Select {...others}>
      {Array.isArray(options)
        ? options.map((op, idx) => {
            return (
              <Select.Option key={`${op.value}_${idx}`} value={op.value}>
                {op.label}
              </Select.Option>
            );
          })
        : children}
    </Select>
  );
};
export type PagerProps = Omit<
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

const Pager: FC<PagerProps> = ({ value, onChange, ...others }) => {
  return (
    <Pagination
      current={value?.page || 0}
      pageSize={value?.size || 10}
      onChange={(page, size) => {
        if (onChange) {
          onChange({
            ...value,
            total: value?.total || others.total,
            page,
            size,
          });
        }
      }}
      onShowSizeChange={(current, size) => {
        if (onChange) {
          onChange({
            ...value,
            total: value?.total || others.total,
            page: current,
            size,
          });
        }
      }}
      total={value?.total}
      {...others}
    ></Pagination>
  );
};

export const lib: any = {
  AutoComplete,
  Cascader,
  Checkbox,
  CheckboxGroup: Checkbox.Group,
  DatePicker,
  MonthPicker: DatePicker.MonthPicker,
  RangePicker: DatePicker.RangePicker,
  WeekPicker: DatePicker.WeekPicker,
  YearPicker: DatePicker.YearPicker,
  Input: Input,
  Search: Input.Search,
  TextArea: Input.TextArea,
  InputGroup: Input.Group,
  Password: Input.Password,
  InputNumber,
  Mentions,
  Radio,
  RadioGroup: Radio.Group,
  Rate,
  Slider,
  Switch,
  TimePicker,
  Transfer,
  TreeSelect,
  Upload,
  Pager,
  Select: XSelect,
};
