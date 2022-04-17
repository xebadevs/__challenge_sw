import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './App';
import '../src/styles/sass/styles.css'

const root = document.getElementById('root')
const reactRoot = ReactDOMClient.createRoot(root)
reactRoot.render(
    <App />
)