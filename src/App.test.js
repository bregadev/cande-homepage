import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the greeting', () => {
  render(<App />);
  const linkElement = screen.getByText(/Future Home/i);
  expect(linkElement).toBeInTheDocument();
});
