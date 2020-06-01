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

type isNoLabel = {
  noLabel: true;
};

type NeverLabel = {
  noLabel: true;
  labelProps?: never;
};
export type MaybeLabel<T> = T extends isNoLabel ? NeverLabel : WithLabel;

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

const Label: FC<LabelProps> = ({ state, ...props }) => {
  const computed = useMemo(() => {
    return {
      validateStatus: mapper.validateStatus(state.valid),
      hasFeedback: mapper.hasFeedback(state.valid),
      help: mapper.help(state.valid, state.help),
      role: '__nothing__',
    };
  }, [state]);
  return <FormItem {...props} {...computed}></FormItem>;
};

export default Label;
