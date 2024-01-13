import CounterControl from "./components/CounterControl";
import CounterDisplay from "./components/CounterDisplay";
import CounterContextProvider from "./context/CounterContext";

import s from 'styled-components';

import {Provider} from "react-redux";
import store from './redux/store'


function App() {
    return (
        <Provider store={store}>
            <CounterContextProvider>
                <div className="App">
                    <Panel>
                        <CounterControl/>
                    </Panel>
                    <Panel>
                        <CounterDisplay/>
                    </Panel>
                </div>
            </CounterContextProvider>
        </Provider>
    )
}

const Panel = s.div`
    padding: 30px;
    border: 1px solid #ccc;
    border-radius: 6px;
    background-color: white;
    width: 360px;
`

export default App;
