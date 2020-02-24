import {createStore} from "redux";
import reducer from "./combinedReducer";


const configureStore = () => {
    const store = createStore(
        reducer
    );

    return store;
};

export default configureStore;