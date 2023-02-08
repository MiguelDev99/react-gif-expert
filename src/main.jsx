import React from 'react'
import ReactDOM from 'react-dom/client'
import { AddCategory } from './components/AddCategory';
import { GifExpertApp } from './GifExpertApp'
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>,
);
