import React from 'react';
import ReactDOM from 'react-dom';
import AppContextProvider from './contexts/theme-context'
import AppContainer from './components/AppContainer';
import App from './components/App';
import './sass/_main.scss';

ReactDOM.render(
    <AppContextProvider>
        <AppContainer>
            <App/>
        </AppContainer>
    </AppContextProvider>,
    document.getElementById('root')
);