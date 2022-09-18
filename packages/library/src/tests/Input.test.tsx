import { Input } from '../../lib';
import { render, screen, userEvent } from './utils/utils';

describe('Testing Input Component', () => {
  describe('input with no error', () => {
    it('should render', async () => {
      const user = userEvent.setup();
      render(<Input name="username" label="Username:" />);
      const input = screen.getByRole('textbox');
      expect(screen.getByText('Username:')).toBeInTheDocument();
      expect(input).toBeInTheDocument();
      await user.type(input, 'Hello World');
      expect(input).toHaveValue('Hello World');
    });
  });

  describe('input with an error', () => {
    it('should show error message', async () => {
      render(
        <Input
          name="username"
          error="Houston we have a problem"
          label="Username:"
        />
      );
      expect(screen.getByRole('alert')).toBeInTheDocument();
      expect(screen.getByText('Houston we have a problem')).toBeInTheDocument();
    });
  });
});
