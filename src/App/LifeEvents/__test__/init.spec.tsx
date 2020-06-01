import '@testing-library/jest-dom';
import './mock';

import { render, waitFor } from '@testing-library/react';

import InitOnField from '../Init/InitOnField';
import InitOnForm from '../Init/InitOnForm';
import InitOnMix from '../Init/InitOnMix';
import React from 'react';

test('use init on Form', async () => {
  const { queryByRole } = render(<InitOnForm></InitOnForm>);
  await waitFor(() => queryByRole('user'));
  await waitFor(() => queryByRole('age'));
  expect(queryByRole('user')?.getAttribute('value')).toBe('inituser');
  expect(queryByRole('age')?.getAttribute('value')).toBe('initage');
});

test('use init on Field', async () => {
  const { queryByRole } = render(<InitOnField></InitOnField>);
  await waitFor(() => queryByRole('user'));
  await waitFor(() => queryByRole('age'));
  expect(queryByRole('user')?.getAttribute('value')).toBe('inituser');
  expect(queryByRole('age')?.getAttribute('value')).toBe('initage');
});

test('use init on Field and Form', async () => {
  const { queryByRole } = render(<InitOnMix></InitOnMix>);
  await waitFor(() => queryByRole('user'));
  await waitFor(() => queryByRole('age'));
  expect(queryByRole('user')?.getAttribute('value')).toBe('initbyfield');
  expect(queryByRole('age')?.getAttribute('value')).toBe('initage');
});
