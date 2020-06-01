import '@testing-library/jest-dom';
import './mock';

import { fireEvent, render, waitFor, wait } from '@testing-library/react';

import Destroy from '../Destroy/Destroy';

import React from 'react';

const waiting = (t: number) => new Promise((r) => setTimeout(r, t));

test('Destroy', async () => {
  const { queryByRole } = render(<Destroy></Destroy>);
  await waitFor(() => queryByRole('toggle'));
  await waitFor(() => queryByRole('screen'));

  expect(queryByRole('user')).toBeNull();

  expect(queryByRole('screen')?.innerHTML).toEqual('false');
  fireEvent.click(queryByRole('toggle')!);
  await wait(() => waiting(233));
  expect(queryByRole('user')?.getAttribute('value')).toBe('inituser');
  expect(queryByRole('screen')?.innerHTML).toEqual('false');
  fireEvent.click(queryByRole('toggle')!);
  await wait(() => waiting(233));
  expect(queryByRole('screen')?.innerHTML).toEqual('true');
});
