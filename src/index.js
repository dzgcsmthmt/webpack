import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app';
//
import './style/common.scss';
import './style/ui.scss';
import './style/page.scss';

console.log('env',process.env.NODE_ENV);

ReactDOM.render(<App />,document.getElementById('app'));
import {square,cube} from './component/math';
import {print} from './component/print';
import {getPath} from './component/router';

console.log(square(2) + cube(2));
