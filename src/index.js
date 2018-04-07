import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import getStore from './store';
import Main from './components';
import { Theme } from './utils';

const store = getStore();

const App = ({ store }) => (
  <Provider store={store}>
    <MuiThemeProvider theme={Theme}>
      <BrowserRouter>
        <Route component={Main} />
      </BrowserRouter>{' '}
    </MuiThemeProvider>
  </Provider>
);

window.store = store;
render(<App store={store} />, document.getElementById('root'));

// serviceWorker();
