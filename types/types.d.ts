import { TFieldOption, TFieldState } from 'usefox';
import { MaybeLabel } from './Label';
import { LegacyRef } from 'react';
import { BuildIns } from './main';
export type { BuildIns } from './main';
export declare type PickProps<T> = T extends (props: infer P1) => any
  ? P1
  : T extends React.ComponentClass<infer P2>
  ? P2
  : {};
declare type AsRenderProps<P> = P & {
  children?: any;
} & Partial<TFieldState & TFieldOption>;
export declare type FFC<P = any> = (
  props: AsRenderProps<P>,
) => JSX.Element | null;
export declare type Comp = React.ComponentClass | FFC;
export declare type RenderProps<T extends object> = (
  status: TFieldState<T> & TFieldOption<T>,
) => React.ReactNode;
export declare type Basic = TFieldOption & {
  role?: string;
  forwardedRef?: Omit<LegacyRef<any>, 'string'>;
};
export declare type AsComp<T> = {
  noLabel?: true | false;
  as: T;
};
export declare type LimitProps = AsComp<keyof BuildIns | Comp> & Basic;
export declare type FieldProps<T> = T extends AsComp<infer P>
  ? P extends keyof BuildIns
    ? Omit<BuildIns[P], keyof TFieldState> &
        MaybeLabel<T['noLabel']> &
        Basic & {
          as: P;
        }
    : Omit<PickProps<P>, keyof TFieldState> &
        MaybeLabel<T['noLabel']> &
        Basic & {
          as: P;
        }
  : T & MaybeLabel<T> & Basic;
