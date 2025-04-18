import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";
import './index.css';

const rootElement = document.getElementById("root"); // Get the root element
const root = createRoot(rootElement); // Create a root

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
