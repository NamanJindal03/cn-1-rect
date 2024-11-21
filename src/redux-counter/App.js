import { Provider } from "react-redux";
import store from "./store";
import Counter from "./components/Counter";
import Nav from "./Nav";
export default function App(){
    return (
        <div className="App">
            <Provider store={store}>
                <Nav />
                <Counter />
            </Provider>
        </div>
    )
}