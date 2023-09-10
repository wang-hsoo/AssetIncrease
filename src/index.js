import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { Provider } from 'react-redux';
import store from './state/store';
import { createGlobalStyle } from "styled-components";

import * as ServiceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Quicksand:wght@300;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Passion+One&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
	font-family: 'Bebas Neue', sans-serif;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>
);
ServiceWorkerRegistration.register();

reportWebVitals();