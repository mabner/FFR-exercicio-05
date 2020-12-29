/**
 * 1 - Criar uma action (actions/counterActions.js);
 * 2 - Criar um reducer (reducers/counter.js);
 * 3 - Criar o index do reducer (reducers/index.js);
 * 4 - Criar a store (linha 19) (index.js);
 * 5 - Criar o provider para a store (linha 26) (index.js);
 * *** Lista de filmes favoritos colocar no state do reducer;
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from './reducers';

import App from './App';

const store = createStore(reducers);

const rootElement = document.getElementById('root');
ReactDOM.render(
	<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
	</Provider>,
	rootElement
);
