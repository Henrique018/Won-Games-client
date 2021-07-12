import { ThemeProvider } from 'styled-components';
import { CartContext, cartContextDefaultValues } from 'hooks/use-cart';
import theme from 'styles/theme';
import GlobalStyles from 'styles/global';

export const parameters = {
  backgrounds: {
    default: 'won-light',
    values: [
      {
        name: 'won-light',
        value: theme.colors.white,
      },
      {
        name: 'won-dark',
        value: theme.colors.mainBg,
      },
    ],
  },
};

export const decorators = [(Story, context) => (
	<CartContext.Provider value={{
		...cartContextDefaultValues,
		...(context?.args?.cartContextValue || {}),
		...context.args }}>
	 <ThemeProvider theme={theme}>
	  <GlobalStyles removeBg />
	 	<Story/>
	 </ThemeProvider>
	</CartContext.Provider>
)];