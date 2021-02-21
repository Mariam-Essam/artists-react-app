import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery';
import 'popper.js/dist/popper';
import 'bootstrap/dist/js/bootstrap';
import './components/style.css';

import App from './app';
import ReactDom from 'react-dom';
ReactDom.render(<App/>,document.querySelector('#root'))