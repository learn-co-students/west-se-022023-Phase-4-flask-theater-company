import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil'
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";


ReactDOM.render(
  <Router>
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>} >
        <App />
      </React.Suspense>
    </RecoilRoot>
  </Router>,
  document.getElementById('root')
);
