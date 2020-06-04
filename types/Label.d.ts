import { FormItemProps } from 'antd/es/form';
import { TFieldState } from 'usefox';
import React, { FC } from 'react';
declare type RenderChildren = (...args: any) => React.ReactNode;
declare type ChildrenType = RenderChildren | React.ReactNode;
declare type OmitFromRCInternalFieldProps =
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
export declare type LabelProps = Omit<
  FormItemProps,
  OmitFromRCInternalFieldProps
> & {
  children: ChildrenType;
} & {
  state: TFieldState;
};
declare type CleanLabel = Omit<LabelProps, 'children' | 'state'>;
declare type WithLabel = {
  noLabel?: false;
  labelProps?: CleanLabel;
} & CleanLabel;
declare type NeverLabel = {
  noLabel: true;
  labelProps?: never;
};
export declare type MaybeLabel<T> = T extends true ? NeverLabel : WithLabel;
declare const Label: FC<LabelProps>;
export default Label;
