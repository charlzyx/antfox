import '@testing-library/jest-dom';
import './mock';

import { fireEvent, render, waitFor, wait } from '@testing-library/react';

import LazyAffect from '../LazyAffect/LazyAffect';

import React from 'react';

const waiting = (t: number) => new Promise((r) => setTimeout(r, t));

test('Change by Act', async () => {
  const { queryByRole } = render(<LazyAffect></LazyAffect>);
  await waitFor(() => queryByRole('toggle'));

  expect(queryByRole('user')).toBeNull();
  expect(queryByRole('age')).toBeNull();
  expect(queryByRole('fllowuser')).toBeNull();
  expect(queryByRole('fllowage')).toBeNull();

  fireEvent.click(queryByRole('toggle')!);
  await wait(() => waiting(233));
  fireEvent.click(queryByRole('putuser')!);
  fireEvent.click(queryByRole('putage')!);
  expect(queryByRole('user')?.getAttribute('value')).toBe('userbyput');
  expect(queryByRole('age')?.getAttribute('value')).toBe('agebyput');
  expect(queryByRole('fllowuser')?.getAttribute('value')).toBe('userbyput');
  expect(queryByRole('fllowage')?.getAttribute('value')).toBe('agebyput');
});
