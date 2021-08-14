import { Switch, Route } from 'react-router-dom';

import { Test } from '../pages/test/Test';
import { Sucess } from '../pages/sucess/Sucess';
import { DashBoard } from '../pages/dashboard/DashBoard';

export const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Test} />
        <Route path="/sucess" component={Sucess} />
        <Route path="/DashBoard" component={DashBoard} />
    </Switch>
)