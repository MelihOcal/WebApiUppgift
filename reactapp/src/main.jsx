import React from 'react';// Keep this only once at the top
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ArticleList from './ArticleList.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);



const Main = () => {
  return (
    <div className="main-container">
      <h1>Grupp 4 Nyheter</h1>
      <ArticleList /> {/* This should render the articles */}
    </div>
  );
};



export default Main;
