global.fetch = (...args) =>
  import('cross-fetch').then(({ default: fetch }) => fetch(...args));

  import { rest } from 'msw';
  import { setupServer } from 'msw/node';

  import { charactersData } from './tests/fixtures/characterData';

export const server = setupServer(
  rest.post('https://www.officeapi.dev/api/characters', (req, res, ctx) => {
    console.log(characterData);
    return res(ctx.json(characterData));
  })
)
