import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import { CREDENTIALS_NAME } from './constants';
import { ListUsers } from './data/users';


const counterSlice = createSlice({
  name: 'dados', initialState: { user: null, erro: null }, reducers: {
    login: (state, action) => {
      const user = ListUsers.find((u) => (u.email === action.payload.email && u.password === action.payload.password))
      if (user) {
        sessionStorage.setItem(CREDENTIALS_NAME, JSON.stringify(user));
        state.user = user;
        state.erro = null;
      } else {
        state.user = user;
        state.erro = { message: 'Usuario ou senha invalido' };
      }
    }, loadCredential: (state) => {
      const storedCredentials = sessionStorage.getItem(CREDENTIALS_NAME);
      if (storedCredentials !== null) {
        state.user = JSON.parse(storedCredentials)
      }
    }, logOut: (state) => {
      sessionStorage.removeItem(CREDENTIALS_NAME);
      state.user = null;
    }
  }
});
export const { login, loadCredential, logOut } = counterSlice.actions;
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