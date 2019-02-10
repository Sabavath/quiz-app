import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import MyApp from '../components/index';

const rootRouter = () => (
    <Router>
        <Route path="/" component={MyApp} />
    </Router>
);

export default rootRouter;