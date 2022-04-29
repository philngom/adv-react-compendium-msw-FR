import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { characterData } from './tests/fixtures/characterData';
global.fetch = (...args) =>
import('cross-fetch').then(({ default: fetch }) => fetch(...args));

export const server = setupServer(
  rest.get('https://www.officeapi.dev/api/characters', (req, res, ctx) => {
    return res(ctx.json(characterData));
  })
);

beforeAll(() => server.listen());
beforeEach(() => server.resetHandlers());
afterAll(() => server.close());
