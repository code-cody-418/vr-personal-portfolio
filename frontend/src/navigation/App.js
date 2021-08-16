import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from 'react-router'
import {Home} from "../ui/Home";

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                  <Route exact='/' component={Home} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
