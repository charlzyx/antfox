import { BuildIns, FieldProps, LimitProps } from 'antfox';
import { useField, useNormalizeSerialize, useRemap } from 'usefox';

import React, { useRef } from 'react';
import Label from './Label';
import { lib } from './main';
const isBuildIn = (as: any): as is keyof BuildIns => {
  return Object.keys(lib).indexOf(as) > -1;
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
  if (isBuildIn(as)) {
    Child = lib[as];
  } else {
    Child = as;
  }

  return noLabel ? (
    <Child
      ref={(target: any) => {
        if (forwardedRef) {
          if (typeof forwardedRef === 'function') {
            forwardedRef(target);
          } else {
            (forwardedRef as any).current = target;
          }
        }
        elRef.current = target;
      }}
      {...props}
    >
      {children}
    </Child>
  ) : (
    <Label {...props} {...labelProps} state={state}>
      <Child
        ref={(target: any) => {
          if (forwardedRef) {
            if (typeof forwardedRef === 'function') {
              forwardedRef(target);
            } else {
              (forwardedRef as any).current = target;
            }
          }
          elRef.current = target;
        }}
        {...props}
        {...state}
      >
        {children}
      </Child>
    </Label>
  );
}

export default Field;
