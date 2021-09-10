import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from 'react-router'
import {Home} from "../ui/Home";

import {Provider} from "react-redux";

export const App = (store) => (
    <>
    <Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Route exact='/' component={Home}/>
        </Switch>
    </BrowserRouter>
    </Provider>
</>
)
;
