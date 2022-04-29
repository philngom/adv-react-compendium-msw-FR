import App from '../App';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

describe('App', () => {
  it('should load and display a list of 27 characters', async () => {
    render(
      <App />
    )

    screen.debug();
  })
})