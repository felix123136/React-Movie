import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

document.title = "React Movie"
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);