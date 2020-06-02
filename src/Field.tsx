import { BuildIns, FieldProps, LimitProps } from 'antfox';
import { useField, useNormalizeSerialize, useRemap } from 'usefox';

import React, { useRef } from 'react';
import Label from './Label';
import { lib } from './main';

const isBuildIn = (as: any): as is keyof BuildIns => {
  return Object.keys(lib).indexOf(as) > -1;
};

const cleaning = <T extends Record<string, any>>(o: T): T => {
  const copy = { ...o };
  delete copy.effect;
  delete copy.rule;
  delete copy.visible;
  delete copy.arrays;
  delete copy.valid;
  delete copy.init;
  delete copy.withoutLabel;
  delete copy.keep;
  delete copy.modified;
  delete copy.normalize;
  delete copy.serialize;
  delete copy.trigger;
  delete copy.remap;
  delete copy.touched;
  return copy;
};

function Field<T extends LimitProps>(all: FieldProps<T>) {
  const {
    as,
    noLabel,
    labelProps,
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    children,
    normalize,
    serialize,
    remap,
    forwardedRef,
    // @ts-check
    ...props
  } = all;

  const elRef = useRef();

  const [ostate] = useField({
    ...props,
    valueKey: remap ? remap.value : undefined,
    el: elRef,
  });
  const stateWithNS = useNormalizeSerialize(ostate, serialize, normalize);
  const state = useRemap(stateWithNS, remap);

  if (!state.visible) {
    return null;
  }

  let Child: any;
  let shouldclean = false;
  if (isBuildIn(as)) {
    shouldclean = true;
    Child = lib[as];
  } else {
    Child = as;
  }

  const refProps =
    Child.length === 2 || Child instanceof React.Component
      ? {
          ref: (target: any) => {
            if (forwardedRef) {
              if (typeof forwardedRef === 'function') {
                forwardedRef(target);
              } else {
                (forwardedRef as any).current = target;
              }
            }
            elRef.current = target;
          },
        }
      : {};

  return noLabel ? (
    <Child
      {...refProps}
      {...(shouldclean ? cleaning(props) : props)}
      {...(shouldclean ? cleaning(state) : state)}
    >
      {children}
    </Child>
  ) : (
    <Label {...props} {...labelProps} state={state}>
      <Child
        {...refProps}
        {...(shouldclean ? cleaning(props) : props)}
        {...(shouldclean ? cleaning(state) : state)}
      >
        {children}
      </Child>
    </Label>
  );
}

export default Field;
