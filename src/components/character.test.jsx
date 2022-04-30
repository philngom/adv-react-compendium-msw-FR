import Characters from '../views/Characters';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

describe('Component test', () => {
  it('should load and display a list of 27 characters', async () => {
    render(
      <MemoryRouter>
        <Characters />
      </MemoryRouter>
    )
    const items = await screen.findAllByRole('listitem');
    expect(items).toHaveLength(27);
  })
})