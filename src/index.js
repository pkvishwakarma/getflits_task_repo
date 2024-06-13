import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './FlitsAccountNavComponent/useReducer_reduxComponent/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// This code is used to render react application on shopify liquid theme.. 
// window.renderApp = (elementId) => {
//   const rootElement = document.getElementById(elementId);
//   if (rootElement) {
//     ReactDOM.render(<React.StrictMode>
//       {/* <BrowserRouter> */}
//       <HashRouter>
//         <Provider store={store}>
//           <App />
//         </Provider>
//         </HashRouter>
//       {/* </BrowserRouter> */}
//     </React.StrictMode>, rootElement);
//   } else {
//     console.error(`No element found with id ${elementId}`);
//   }
// };

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
