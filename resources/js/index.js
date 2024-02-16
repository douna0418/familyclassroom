require('./bootstrap');

import ReactDOM from 'react-dom/client';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import '../css/global.css';

var root = document.getElementById('root');
ReactDOM.createRoot(root).render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
