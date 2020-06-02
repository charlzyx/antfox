import './boot';
export { default as Field } from './Field';
export { default as Form } from './Form';
export * from './types';

export { match, useAffect, useField, useNormalizeSerialize } from 'usefox';
export type {
  Rule,
  Rules,
  TAct,
  TConfig,
  TEffect,
  TEffectListen,
  TFieldOption,
  TFieldState,
  TTrigger,
  TWatch$,
} from 'usefox';
