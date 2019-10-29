// Import dependencies.
import React from 'react';
import ReactDOM from 'react-dom';

// Import app.
import AppRouter from './routers/AppRouter';

// Normalize.css import for CSS reset to all browsers.
import 'normalize.css/normalize.css';

// Import our styles file.
import './styles/styles.scss';

ReactDOM.render(<AppRouter />, document.getElementById('app'));