import type { FormProps } from 'antd/es/form';
import { TConfig } from 'usefox';
import { Component } from 'react';
declare type Props<T extends object> = TConfig<T> &
  Omit<
    FormProps,
    | 'initialValues'
    | 'form'
    | 'component'
    | 'fields'
    | 'name'
    | 'validateMessages'
    | 'onValuesChange'
    | 'onFieldsChange'
    | 'onFinish'
    | 'onFinishFailed'
  >;
declare class FoxForm<T extends object> extends Component<Props<T>> {
  render(): JSX.Element;
}
export default FoxForm;
