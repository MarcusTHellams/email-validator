import { expect, test } from 'vitest';

import { Example } from '../../lib/Example';
import { render, screen, userEvent } from './utils/utils';

test('First Test', async () => {
  const user = userEvent.setup();
  const { debug } = render(<Example name="Marcus" />);
  expect(screen.getByText(/Marcus/i)).toBeInTheDocument();
  expect(screen.getByText('The Current Count is :0')).toBeInTheDocument();
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
  await user.click(button);
  expect(screen.getByText('The Current Count is :1')).toBeInTheDocument();
  debug();
});
