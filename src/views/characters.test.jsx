import App from '../App';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  it('should load and display a list of 27 characters', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    screen.getByText(/loading.../i);

    await screen.findByText(/michael scott/i);
  })
})