import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app';

import './style/common.scss';
import './style/ui.scss';

console.log('env',process.env.NODE_ENV);

ReactDOM.render(<App />,document.getElementById('app'));
