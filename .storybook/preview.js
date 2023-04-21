import { Global } from '@emotion/react';
import { global } from '@/styles/Global';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

export const decorators = [
  (Story) => (
    <>
      <Global styles={global} />
      <Story />
    </>
  )
];
