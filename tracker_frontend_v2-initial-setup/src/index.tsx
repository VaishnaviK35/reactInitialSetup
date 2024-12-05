import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store/Store";
import { RouterProvider } from "react-router-dom";
import ErrorBoundary from "./errors/ErrorBoundary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "./config/route";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  // <React.StrictMode>
  <>
    <ToastContainer />
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </QueryClientProvider>
    </ErrorBoundary>
  </>
  // </React.StrictMode>
);
