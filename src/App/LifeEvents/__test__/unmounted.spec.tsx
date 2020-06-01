import '@testing-library/jest-dom';
import './mock';

import { fireEvent, render, waitFor, wait } from '@testing-library/react';

import React from 'react';
import UnmountAct from '../Unmount/UnmountAct';
import UnmountField from '../Unmount/UnmountField';

const waiting = (t: number) => new Promise((r) => setTimeout(r, t));

test('unmount$ on Act', async () => {
  const { queryByRole } = render(<UnmountAct></UnmountAct>);
  await waitFor(() => queryByRole('toggle'));
  await waitFor(() => queryByRole('user'));
  fireEvent.click(queryByRole('toggle')!);
  await wait(() => waiting(666));
  fireEvent.click(queryByRole('toggle')!);
  await waitFor(() => queryByRole('user'));
});

test('unmount$ on Field', async () => {
  const { queryByRole } = render(<UnmountField></UnmountField>);
  await waitFor(() => queryByRole('toggle'));
  await waitFor(() => queryByRole('user'));
  fireEvent.click(queryByRole('toggle')!);
  await wait(() => waiting(666));
  fireEvent.click(queryByRole('toggle')!);
  await waitFor(() => queryByRole('user'));
});
