global.fetch = (...args) =>
  import('cross-fetch').then(({ default: fetch }) => fetch(...args));

  import { rest } from 'msw';
  import { setupServer } from 'msw/node';

  import { charactersData } from './tests/fixtures/characterData';


