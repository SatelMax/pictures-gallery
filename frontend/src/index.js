import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import { jsx as _jsx } from "react/jsx-runtime";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/_jsx(React.StrictMode, {
  children: /*#__PURE__*/_jsx(App, {})
}));

