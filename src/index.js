import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import { routePaths } from './constants'

export const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Exo',
            'sans-serif',
        ].join(','),
    }
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <BrowserRouter basename={routePaths.NAMESPACE}>
            < App />
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('root')
);