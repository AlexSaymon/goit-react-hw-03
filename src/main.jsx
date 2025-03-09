import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "modern-normalize";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 2000,
          }}
        />
      </PersistGate>
    </BrowserRouter>
  </Provider>
);
