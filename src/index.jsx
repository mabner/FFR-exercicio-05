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
import { Provider } from 'react-redux';
import Store from './store/Store';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(
	<Provider store={Store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	rootElement
);
