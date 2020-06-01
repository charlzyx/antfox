import '@testing-library/jest-dom';
import './mock';

import { fireEvent, render, waitFor, wait } from '@testing-library/react';

import ChangeAct from '../Change/ChangeAct';
import ChangeField from '../Change/ChangeField';

import React from 'react';

const waiting = (t: number) => new Promise<void>((r) => setTimeout(r, t));

test('Change by Act', async () => {
  const { queryByRole } = render(<ChangeAct></ChangeAct>);
  await waitFor(() => queryByRole('putuser'));
  await waitFor(() => queryByRole('putage'));

  fireEvent.click(queryByRole('putuser')!);
  fireEvent.click(queryByRole('putage')!);
  await wait(() => waiting(233));
  expect(queryByRole('user')?.getAttribute('value')).toBe('userbyput');
  expect(queryByRole('age')?.getAttribute('value')).toBe('agebyput');
  expect(queryByRole('fllowuser')?.getAttribute('value')).toBe('userbyput');
  expect(queryByRole('fllowage')?.getAttribute('value')).toBe('agebyput');
});

test('Change by Field#effect', async () => {
  const { queryByRole } = render(<ChangeField></ChangeField>);
  await waitFor(() => queryByRole('putuser'));
  await waitFor(() => queryByRole('putage'));

  fireEvent.click(queryByRole('putuser')!);
  fireEvent.click(queryByRole('putage')!);
  await wait(() => waiting(233));
  expect(queryByRole('user')?.getAttribute('value')).toBe('userbyput');
  expect(queryByRole('age')?.getAttribute('value')).toBe('agebyput');
  expect(queryByRole('fllowuser')?.getAttribute('value')).toBe('userbyput');
  expect(queryByRole('fllowage')?.getAttribute('value')).toBe('agebyput');
});
