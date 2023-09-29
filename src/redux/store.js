import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";

// Load the initial state from localStorage (if available)
const loadState = () => {
    try {
        const serializedState = localStorage.getItem("reduxState");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

// Save the state to localStorage
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("reduxState", serializedState);
    } catch (err) {
        // Handle errors here, if needed
        console.log(err)
    }
};

// Create the Redux store with the authReducer
const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    preloadedState: loadState(),
});

// Subscribe to store updates and save the state to localStorage
store.subscribe(() => {
    const state = store.getState();
    saveState({
        auth: state.auth,
    });
});

export default store;