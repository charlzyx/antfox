import '@testing-library/jest-dom';
import './mock';

import { fireEvent, render, waitFor } from '@testing-library/react';

import ResetAct from '../Reset/ResetAct';
import ResetField from '../Reset/ResetField';

import React from 'react';

const waiting = (t: number) => new Promise((r) => setTimeout(r, t));

test('Reset on Act', async () => {
  const { queryByRole } = render(<ResetAct></ResetAct>);
  await waitFor(() => queryByRole('putuser'));
  await waitFor(() => queryByRole('putage'));
  await waitFor(() => queryByRole('reset'));
  await waitFor(() => queryByRole('resetTo'));

  fireEvent.click(queryByRole('putuser')!);
  fireEvent.click(queryByRole('putage')!);
  fireEvent.change(queryByRole('user')!, {
    target: { value: 'userbyputandinput' },
  });
  await waitFor(() => waiting(233));
  expect(queryByRole('user')?.getAttribute('value')).toBe('userbyputandinput');
  expect(queryByRole('age')?.getAttribute('value')).toBe('agebyput');

  fireEvent.click(queryByRole('reset')!);
  await waitFor(() => waiting(233));
  expect(queryByRole('user')?.getAttribute('value')).toBe('inituser');
  expect(queryByRole('age')?.getAttribute('value')).toBe('initage');

  fireEvent.click(queryByRole('putuser')!);
  fireEvent.click(queryByRole('putage')!);
  expect(queryByRole('user')?.getAttribute('value')).toBe('userbyput');
  expect(queryByRole('age')?.getAttribute('value')).toBe('agebyput');

  /** 传入参数的 reset 其中的参数将会作为后面的 reset 基准 */
  fireEvent.click(queryByRole('resetTo')!);
  await waitFor(() => waiting(233));
  expect(queryByRole('user')?.getAttribute('value')).toBe('userbyresetto');
  expect(queryByRole('age')?.getAttribute('value')).toBe('agebyresetto');

  /** 比如再次更改值 */
  fireEvent.click(queryByRole('putuser')!);
  fireEvent.click(queryByRole('putage')!);
  await waitFor(() => waiting(233));
  expect(queryByRole('user')?.getAttribute('value')).toBe('userbyput');
  expect(queryByRole('age')?.getAttribute('value')).toBe('agebyput');

  /** 再次 reset, 就会使刚才 reset(next) 中 next 的值 */
  fireEvent.click(queryByRole('reset')!);
  await waitFor(() => waiting(233));
  expect(queryByRole('user')?.getAttribute('value')).toBe('userbyresetto');
  expect(queryByRole('age')?.getAttribute('value')).toBe('agebyresetto');
});

test('Reset on Filed', async () => {
  const { queryByRole } = render(<ResetField></ResetField>);
  await waitFor(() => queryByRole('putuser'));
  await waitFor(() => queryByRole('reset'));
  expect(queryByRole('fllowuser')?.getAttribute('value')).toBe('');

  fireEvent.click(queryByRole('putuser')!);
  await waitFor(() => waiting(233));
  expect(queryByRole('user')?.getAttribute('value')).toBe('userbyput');
  expect(queryByRole('fllowuser')?.getAttribute('value')).toBe('');

  fireEvent.click(queryByRole('reset')!);
  await waitFor(() => waiting(233));
  expect(queryByRole('user')?.getAttribute('value')).toBe('inituser');
  expect(queryByRole('fllowuser')?.getAttribute('value')).toBe('inituser');
});
