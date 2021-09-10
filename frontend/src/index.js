import ReactDOM from 'react-dom'
import {App} from "./navigation/App";
import {store} from "./store";

// Use the store so that we can use it to pass information.
ReactDOM.render(App(store), document.querySelector('#root'));
