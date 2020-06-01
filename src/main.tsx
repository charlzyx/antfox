import React, { FC } from 'react';
import {
  AutoComplete,
  Cascader,
  Checkbox,
  DatePicker,
  Input,
  InputNumber,
  Mentions,
  Radio,
  Rate,
  Select,
  Slider,
  Switch,
  TimePicker,
  Transfer,
  TreeSelect,
  Upload,
  Pagination,
} from 'antd';

import { PaginationProps } from 'antd/es/pagination';

// type PageInfo = {
//   current: PaginationProps['current'];
//   size: PaginationProps['size'];
//   pageSize: PaginationProps['pageSize'];
//   onChange: PaginationProps['onChange'];
//   onShowSizeChange: PaginationProps['onShowSizeChange'];
// };

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

export const lib = {
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
  Select,
  Slider,
  Switch,
  TimePicker,
  Transfer,
  TreeSelect,
  Upload,
  Pager,
};
