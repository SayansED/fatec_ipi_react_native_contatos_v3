import React from 'react';

import ContatosNavigator from './navegacao/ContatosNavigator';

import { createStore, combineReducers, applyMiddleware } from 'redux';

import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';
import contatosReducers from './store/contatos-reducers';
import {init} from './helpers/db';

init ()
.then(() => {
  console.log("Criado")
}).catch((err) => {
  console.log(`Falha: ${err}`)
})

const rootReducer = combineReducers({
  contatos: contatosReducers
});

const store = createStore (rootReducer, applyMiddleware (reduxThunk));

export default function App() {
  return ( 
    <Provider store={store}>
      <ContatosNavigator />
    </Provider>
  );
}
