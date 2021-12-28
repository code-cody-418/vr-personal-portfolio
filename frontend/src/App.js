import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from 'react-router'
import {Home} from "./ui/Home";

import {Provider} from "react-redux";
import {Contact} from "./ui/Contact";
import {ThreeDRoom} from "./ui/pages/three-d-room/ThreeD-Room";


export const App = (store) => (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/contact-form' component={Contact}/>
                        <Route exact path='/3d-room' component={ThreeDRoom} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        </>
    )
;
