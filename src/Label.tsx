import { Form } from 'antd';
import { FormItemProps } from 'antd/es/form';
import { TFieldState, VALIDSTATUS } from 'usefox';
import React, { FC, useMemo } from 'react';

const FormItem = Form.Item;

type RenderChildren = (...args: any) => React.ReactNode;
type ChildrenType = RenderChildren | React.ReactNode;

type OmitFromRCInternalFieldProps =
  | 'children'
  | 'name'
  | 'dependencies'
  | 'getValueFromEvent'
  | 'name'
  | 'normalize'
  | 'rules'
  | 'shouldUpdate'
  | 'trigger'
  | 'validateTrigger'
  | 'validateFirst'
  | 'valuePropName'
  | 'messageVariables'
  | 'onReset';

export type LabelProps = Omit<FormItemProps, OmitFromRCInternalFieldProps> & {
  children: ChildrenType;
} & {
  state: TFieldState;
};

type CleanLabel = Omit<LabelProps, 'children' | 'state'>;

type WithLabel = {
  noLabel?: false;
  labelProps?: CleanLabel;
} & CleanLabel;

type NeverLabel = {
  noLabel: true;
  labelProps?: never;
};
export type MaybeLabel<T> = T extends true ? NeverLabel : WithLabel;

const mapper = {
  validateStatus: (valid: VALIDSTATUS): FormItemProps['validateStatus'] => {
    switch (valid) {
      case VALIDSTATUS.SUCCESS:
        return 'success';
      case VALIDSTATUS.FAILED:
        return 'error';
      case VALIDSTATUS.VALIDING:
        return 'validating';
      default:
        return '';
    }
  },

  hasFeedback: (valid: VALIDSTATUS) => {
    switch (valid) {
      case VALIDSTATUS.SUCCESS:
      case VALIDSTATUS.FAILED:
        return true;
      default:
        return false;
    }
  },
  help: (valid: VALIDSTATUS, help: string) => {
    switch (valid) {
      case VALIDSTATUS.FAILED:
        return help;
      default:
        return;
    }
  },
};

const Label: FC<LabelProps> = ({ state, children, ...props }) => {
  const computed = useMemo(() => {
    const copy: any = { ...props };
    delete copy.effect;
    delete copy.rule;
    delete copy.visible;
    delete copy.arrays;
    delete copy.valid;
    delete copy.init;
    delete copy.keep;
    delete copy.modified;
    delete copy.normalize;
    delete copy.serialize;
    delete copy.trigger;
    delete copy.remap;
    delete copy.touched;
    delete copy.withoutLabel;
    return {
      ...copy,
      validateStatus: mapper.validateStatus(state.valid),
      hasFeedback: mapper.hasFeedback(state.valid),
      help: mapper.help(state.valid, state.help),
      role: '__nothing__',
      children,
    };
  }, [children, props, state.help, state.valid]);
  return <FormItem {...computed}></FormItem>;
};

export default Label;
