import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './index.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-kz5najxrs8tn3zl2.us.auth0.com"
    clientId="eXoccX20ZSAX9gigYqHYM14s75xCLBVk"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);
