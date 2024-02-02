require('./bootstrap');

import ReactDOM from 'react-dom/client';
import App from './app';
import { BrowserRouter } from 'react-router-dom';

var root = document.getElementById('root');
ReactDOM.createRoot(root).render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
