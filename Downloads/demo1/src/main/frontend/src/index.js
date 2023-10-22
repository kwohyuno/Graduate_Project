import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RouteMain from './router/RouteMain';
import Root from "./router/Root";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    {/*<RouteMain />*/}
    <Root/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export {default as Profile} from './Profile';
export {default as Project} from './Project';
export {default as Bulletin} from './Bulletin';
export {default as Banner} from './Banner';
export {default as Main} from './pages/Main';
export {default as BulletinBoard} from './pages/BulletinBoard';


