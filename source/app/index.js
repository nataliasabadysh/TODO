// Core
import React from 'react';
import ReactDOM from 'react-dom';

// Instruments
import './theme/init';

// App
import { Scheduler } from './components/Scheduler';

ReactDOM.render(<Scheduler basename = '/ToDo/build' />, document.getElementById('app'));