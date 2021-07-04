import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import {
	cartContextDefaultValues,
	cartContextTypes,
	CartContext,
} from 'hooks/use-cart';

import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

type CustomRenderProps = {
	cartProviderProps?: cartContextTypes;
} & Omit<RenderOptions, 'queries'>;

const customRender = (
	ui: ReactElement,
	{
		cartProviderProps = cartContextDefaultValues,
		...renderOptions
	}: CustomRenderProps = {}
) => {
	return render(
		<ThemeProvider theme={theme}>
			<CartContext.Provider value={cartProviderProps}>
				{ui}
			</CartContext.Provider>
		</ThemeProvider>,
		renderOptions
	);
};

export * from '@testing-library/react';
export { customRender as render };
