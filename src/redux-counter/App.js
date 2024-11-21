import { Provider } from "react-redux";
import store from "./store";
import Counter from "./components/Counter";
import Nav from "./Nav";
import Products from "./Products";
export default function App(){
    return (
        <div className="App">
            <Provider store={store}>
                <Nav />
                <Counter />
                <Products />
            </Provider>
        </div>
    )
}