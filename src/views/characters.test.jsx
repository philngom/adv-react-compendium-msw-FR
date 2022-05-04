import App from '../App';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  it('should be able to search characters', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    await waitForElementToBeRemoved(screen.getByText(/loading.../i));

    const search = screen.getByPlaceholderText('Find a character');
    userEvent.type(search, 'michael');

    expect(screen.getAllByRole('listitem')).toHaveLength(1);
  })
})