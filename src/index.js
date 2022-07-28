import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import App from './App';

import 'bootstrap/dist/css/bootstrap.css';

const counterSlice = createSlice({ name: 'dados', initialState: { user: null }, reducers: { setUser: (state, action) => { state.user = action.payload } } });
export const { setUser } = counterSlice.actions;
export const store = configureStore({ reducer: { dados: counterSlice.reducer }, middleware: [logger] })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);


function logger({ getState }) {
  return next => action => {
    console.log('will dispatch', action);
    const returnValue = next(action);
    console.log('state after dispatch', getState());
    return returnValue
  }
}