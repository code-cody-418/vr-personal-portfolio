import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from 'react-router'
import {Home} from "./ui/Home";

import {Provider} from "react-redux";
import {Contact} from "./ui/Contact";


export const App = (store) => (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/contact-form' component={Contact}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        </>
    )
;
