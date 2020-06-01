import { Form } from 'antd';
import type { FormProps } from 'antd/es/form';
import { Fox, TConfig } from 'usefox';
import _ from 'lodash';
import React, { Component } from 'react';

type Props<T extends object> = TConfig<T> &
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

const omitFoxConfig = _.memoize((props) => {
  return _.omit(props, ['init', 'trigger', 'disabled', 'rules', 'act']);
});

class FoxForm<T extends object> extends Component<Props<T>> {
  render() {
    return (
      <Fox
        init={this.props.init}
        trigger={this.props.trigger || 'onChange'}
        disabled={this.props.disabled}
        rules={this.props.rules}
        act={this.props.act}
      >
        <Form {...omitFoxConfig(this.props)}>{this.props.children}</Form>
      </Fox>
    );
  }
}

export default FoxForm;
