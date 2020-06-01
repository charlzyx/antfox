import '@testing-library/jest-dom';
import './mock';

import { render, waitFor } from '@testing-library/react';

import MountedAct from '../Mounted/MountedAct';
import MountedField from '../Mounted/MountedField';
import React from 'react';

test('mounted$ on Act', async () => {
  const { queryByRole } = render(<MountedAct></MountedAct>);
  await waitFor(() => queryByRole('user'));
  await waitFor(() => queryByRole('age'));
  expect(queryByRole('user')?.getAttribute('value')).toBe('inituser');
  expect(queryByRole('age')?.getAttribute('value')).toBe('initage');
});

test('mounted$ on Field#effect', async () => {
  const { queryByRole } = render(<MountedField></MountedField>);
  await waitFor(() => queryByRole('user'));
  await waitFor(() => queryByRole('age'));
  expect(queryByRole('user')?.getAttribute('value')).toBe('inituser');
  expect(queryByRole('age')?.getAttribute('value')).toBe('initage');
});
