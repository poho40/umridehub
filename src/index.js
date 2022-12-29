import './wdyr'

import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import FirebaseContext from './context/firebase';
import {firebase, FieldValue} from './lib/firebase';
import './styles/app.css'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
<FirebaseContext.Provider value = {{firebase, FieldValue}}>
<App />
</FirebaseContext.Provider>,
);

