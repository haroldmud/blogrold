import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import fetchSlice from './features/fetchSlice';
import publishSlice from './features/publishSlice';
import listSlice from './features/listSlice';
import searchSlice from './features/searchSlice';
import submitSlice from './features/submitSlice';


const store = configureStore({
  reducer:{
    fetched: fetchSlice,
    published: publishSlice,
    listed: listSlice,
    searched: searchSlice,
    submitted: submitSlice,
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
