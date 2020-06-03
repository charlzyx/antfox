import { TFieldOption, TFieldState } from 'usefox';
import { MaybeLabel } from './Label';
import { LegacyRef } from 'react';
import { BuildIns } from './main';
export type { BuildIns } from './main';

export type PickProps<T> = T extends (props: infer P1) => any
  ? P1
  : T extends React.ComponentClass<infer P2>
  ? P2
  : {};

type AsRenderProps<P> = P & { children?: any } & Partial<
    TFieldState & TFieldOption
  >;

export type FFC<P = any> = (props: AsRenderProps<P>) => JSX.Element | null;

export type Comp = React.ComponentClass | FFC;

export type RenderProps<T extends object> = (
  status: TFieldState<T> & TFieldOption<T>,
) => React.ReactNode;

export type Basic = TFieldOption & {
  noLabel?: true | false;
  role?: string;
  forwardedRef?: Omit<LegacyRef<any>, 'string'>;
};

export type AsComp<T> = {
  as: T;
};

export type LimitProps = AsComp<keyof BuildIns | Comp> & Basic;

export type FieldProps<T> = T extends AsComp<infer P>
  ? P extends keyof BuildIns
    ? Omit<BuildIns[P], keyof TFieldState> & MaybeLabel<T> & Basic & { as: P }
    : Omit<PickProps<P>, keyof TFieldState> & MaybeLabel<T> & Basic & { as: P }
  : T & MaybeLabel<T> & Basic;
