import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'; 
// import './assets/vendor/aos/aos.css';
import './assets/vendor/remixicon/remixicon.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/css/style.css';
import App from './App'; 

// <!-- Vendor JS Files -->  
// import "./assets/vendor/bootstrap/js/bootstrap.min.js";
// import AOS from "./assets/vendor/aos/aos.js";
// // import "./assets/vendor/php-email-form/validate.js";
// import Swiper from "./assets/vendor/swiper/swiper-bundle.min.js";
// import "./assets/vendor/purecounter/purecounter.js";
// import Isotope from "./assets/vendor/isotope-layout/isotope.pkgd.min.js";
// import GLightbox from "./assets/vendor/glightbox/js/glightbox.min.js";

// // <!-- Template Main JS File -->
// import "./assets/js/main.js";

// import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
